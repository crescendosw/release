const version = '32.0';

console.log('service-worker.js');

// see this page for more info:  https://web.dev/service-worker-lifecycle/

const soundFontCacheName = 'sound-font';
const soundFontFileName = 'sound-font.bin';
const thisWeekFolder = 'this_week';
const uncacheableScheme = 'chrome-extension';
const verboseLog = false;

function logMessage(message) {
  if (verboseLog) {
    console.log(message);
  }
}

const filesToCache = {
  // these file names are different when deployed.  For example:
  // - /static/js/2.fbdcacfe.chunk.js
  // - /static/js/main.1e070200.chunk.js
  // the names are different for each deployment
  // thus, for now we allow these to be cached as they are requested
  // core: [
  //   '/',
  //   '/html', // todo: may not be necessary since '/' has the same response -> test for full offline
  //   '/static/js/bundle.js',
  //   '/static/js/main.chunk.js',
  //   '/static/js/vendors~main.chunk.js',
  //   '/manifest.json', // the app manifest, not a church or hymnal manifest
  //   '/sockjs-node', // todo: is this necessary??? -> test for full offline
  //   '/silence250ms.mp3',
  // ],
  // todo: we cannot cache these until we figure out an update strategy (how often to update)
  //       also, ideally we wouldn't list every hymnal, but rather would cache each hymnal
  //       listed in the top hymnals manifset.json file - not sure if the service worker can
  //       look inside downloaded content to figure out what else to cache, but I bet it can.
  //       For the songs, we need to download in groups.
  //       For example, a .zip file of all songs, along with subsequent incremental .zip files
  //       periodically redownload fresh .zip file of all songs
  // hymnals: [
  //   '/hymnals/manifest.json',
  //   '/hymnals/Cantus Christi 2002/manifest.json',
  //   '/hymnals/Cantus Christi 2020/manifest.json',
  //   '/hymnals/Trinity Hymnal/manifest.json',
  //   '/hymnals/Christmas/manifest.json',
  // ],
  // todo: similar issues for this_week except that it changes more frequently & is much smaller
  //       cache churches based on manifest...  (is this possible?)
  //       better: cache .zip file of all churches
  //       just grab new .zip file each time (10K)
  // this_week: [
  //   '/this_week/manifest.json',
  //   '/this_week/Christ Church.json',
  // ],
};

self.addEventListener("install", function(event) {
  logMessage('WORKER: install event in progress.');

  event.waitUntil(
    /* The caches built-in is a promise-based API that helps you cache responses,
       as well as finding and deleting them.

       You can open a cache by name, and this method returns a promise. We use
       a versioned cache name here so that we can remove old cache entries in
       one fell swoop later, when phasing out an older service worker.
     */
    cacheAllFiles()
      .then(function () {
        logMessage('WORKER: install completed');
      })
  );
});

self.addEventListener("activate", function(event) {
  /* Just like with the install event, event.waitUntil blocks activate on a promise.
     Activation will fail unless the promise is fulfilled.
  */
  logMessage('WORKER: activate event in progress.');

  // event.waitUntil(self.clients.claim());
  event.waitUntil(clearOldCaches()
    .then(function () {
      logMessage('WORKER: activate completed.');
    }));
});

function cacheSoundFont() {
  return caches.open(soundFontCacheName)
    .then(cache =>
      cache.match(soundFontFileName).then(response =>
        response ? Promise.resolve() : cache.add(soundFontFileName)
      )
    );
}

function cacheAllFiles() {
  const promises = Object.entries(filesToCache).map(
    ([cacheName, files]) =>
      caches.open('v' + version + '::' + cacheName)
        .then(cache => cache.addAll(files))
  );
  return Promise.all([
    ...promises,
    cacheSoundFont(),
  ]);
}

function clearOldCaches() {
  return caches.keys().then(keys =>
    Promise.all(keys
      .filter(key => !key.startsWith('v' + version + '::') && key !== soundFontCacheName)
      .map(key => caches.delete(key))
    )
  );
}

self.addEventListener('fetch', function(event) {
  const {url} = event.request;

  function addToCache(response) {
    const requestClone = response.clone();
    const cacheName =
      url.includes('/static/') ? 'static' :
        url.includes('/hymnals/') ? 'hymnals' :
          url.includes(`/${thisWeekFolder}/`) ? 'this_week' :
            'files';
    if (!url.startsWith(uncacheableScheme)) {
      caches.open('v' + version + '::' + cacheName)
        .then(cache => cache.put(event.request, requestClone));
    }
    return response;
  }

  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached && !url.includes(thisWeekFolder)) { // use all cached files except this week
            return cached;
          } else if (cached) { // fetch this_week files from network, but fall back on cache if network unavailable
            return fetch(event.request).then(addToCache, () => cached).catch(() => cached);
          } else { // fetch from network, fail if unavailable
            return fetch(event.request).then(addToCache);
          }
        })
    );
  } else {
    logMessage('WORKER: fetch event ignored.', event.request.method, event.request.url);
  }
});
