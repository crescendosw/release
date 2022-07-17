(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}));var i="./hymnals",a="./hymnals";function c(e,t){if(!e)throw new Error(t)}function r(e){if("undefined"===typeof e||null===e)throw new Error("Expected value to be defined and not null");return e}function o(e){var t=new URLSearchParams(e),n=t.get("title"),i=function(e,t){if(null!==e){for(;e.length<t;)e="0"+e;return e}}(t.get("number"),3),a=t.get("hymnal");if(n&&i&&a){var c=n.replace(/_/g," "),r=a.replace(/_/g," "),o=t.get("psalm");return o?{hymnal:r,title:c,number:i,psalm:o.replace(/_/g," ")}:{hymnal:r,title:c,number:i}}}},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return d}));var i,a=n(24),c=n(11),r=[],o=!1;function s(e){i?e():(r.push(e),d())}function l(){return new(window.AudioContext||window.webkitAudioContext)}function u(e,t,n,a){Object(c.a)(t in Object(c.b)(i),'Note "'.concat(t,'" not found in mp3_buffers'));var r=Object(c.b)(i)[t],o=e.createBufferSource(),s=e.createGain();return o.buffer=r,o.connect(s),s.connect(e.destination),s.gain.setValueAtTime(n,a),o.start(a),{gainNode:s,gainValue:n}}function h(e,t){var n=e.gainNode,i=e.gainValue;i>0&&(n.gain.setValueAtTime(i,t),n.gain.exponentialRampToValueAtTime(1e-4,t+1/8))}function d(){o||(o=!0,fetch("./sound-font.bin").then((function(e){if(!e.ok)throw o=!1,new Error("failed to load sound font ".concat(e.status,", ").concat(e.statusText));return e.arrayBuffer()})).then((function(e){for(var t=l(),n=e.byteLength,o=new DataView(e),s=o.getUint32(0),u=4,h=[],d=function(){var i=(new TextDecoder).decode(new DataView(e,u,4)).trim();u+=4;var a=o.getUint32(u);u+=4;var r=e.slice(u,u+a);h.push(t.decodeAudioData(r).then((function(e){return{noteName:i,buffer:e}}))),u+=a,Object(c.a)(u<=e.byteLength,"Expected currentOffest (".concat(u,") <= soundFontLength (").concat(n,")"))},m=0;m<s;m++)d();Promise.all(h).then((function(e){i={};var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var c=t.value,o=c.noteName,s=c.buffer;i[o]=s}}catch(h){n.e(h)}finally{n.f()}var l,u=Object(a.a)(r);try{for(u.s();!(l=u.n()).done;){(0,l.value)()}}catch(h){u.e(h)}finally{u.f()}r.length=0}))})))}},,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},,function(e,t){},,,,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var i,a=n(9),c=n(10),r=n(3),o=n(13),s=n(44),l=n(0),u=n.n(l),h=n(42),d=(n(63),n(16)),m=n(21),b=n(11),j=n(1);!function(e){e.Soprano="soprano",e.Alto="alto",e.Tenor="tenor",e.Bass="bass"}(i||(i={}));var f=function(t){Object(o.a)(l,t);var n=Object(s.a)(l);function l(e){var t;return Object(a.a)(this,l),(t=n.call(this,e)).initialTempo=void 0,t.initialTime=void 0,t.songLength=void 0,t.interval=void 0,t.activeNotes={},t.midiPlayer=void 0,t.mostRecentTick=void 0,t.mostRecentTime=void 0,t.audioContext=Object(m.a)(),t.silentNode=void 0,t.mostRecentTempoChangeTime=void 0,t.tempoTimer=void 0,t.audio=void 0,t.state={playing:!1,initialTempo:"",initialTime:"0:00",songLength:0,instrumentIsLoaded:!1,midiFileLoaded:!1,experiencingUserInputOnTimeSlider:!1},t._handleEvent=t._handleEvent.bind(Object(r.a)(t)),t._playPause=t._playPause.bind(Object(r.a)(t)),t._pause=t._pause.bind(Object(r.a)(t)),t._play=t._play.bind(Object(r.a)(t)),t._getTempoValue=t._getTempoValue.bind(Object(r.a)(t)),t._setNewTime=t._setNewTime.bind(Object(r.a)(t)),t._setNewTempo=t._setNewTempo.bind(Object(r.a)(t)),t._displayTempo=t._displayTempo.bind(Object(r.a)(t)),t._onTempoChange=t._onTempoChange.bind(Object(r.a)(t)),t._displayTime=t._displayTime.bind(Object(r.a)(t)),t._onEndOfFile=t._onEndOfFile.bind(Object(r.a)(t)),t._updateTimeSlider=t._updateTimeSlider.bind(Object(r.a)(t)),t.midiPlayer=new h.a.Player(t._handleEvent),t.midiPlayer.on("endOfFile",t._onEndOfFile),t.mostRecentTempoChangeTime=Date.now(),t._loadMidiFile(),t}return Object(c.a)(l,[{key:"_onEndOfFile",value:function(){var e=this;this.mostRecentTick=void 0,this.state.playing&&(this.midiPlayer.pause(),setTimeout((function(){e.state.playing&&(e.midiPlayer.skipToPercent(0),e.midiPlayer.play(),e._updateTimeSlider())}),100))}},{key:"_getTempoValue",value:function(){var e=Number(this.state.initialTempo),t=document.getElementById("tempo-slider");return Number(t.value)*e}},{key:"_setNewTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!1});var e=document.getElementById("time-slider");this.midiPlayer.isPlaying()?(this.midiPlayer.skipToPercent(Number(e.value)),this.midiPlayer.play()):this.midiPlayer.skipToPercent(Number(e.value))}},{key:"_displayTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!0});var e=document.getElementById("time-slider"),t=document.getElementById("time-output"),n=Number(e.value)/100*this.state.songLength;t.innerHTML=l._getTimeValue(n)}},{key:"_setNewTempo",value:function(){var e=this._getTempoValue();this.midiPlayer.getTempo()!==e&&this.midiPlayer.setTempo(e),this.mostRecentTempoChangeTime=Date.now()}},{key:"_onTempoChange",value:function(){this._displayTempo();var e=Date.now()-this.mostRecentTempoChangeTime;this.tempoTimer&&clearTimeout(this.tempoTimer),this.tempoTimer=setTimeout(this._setNewTempo,Math.max(0,500-e))}},{key:"_displayTempo",value:function(){document.getElementById("tempo-output").innerHTML=Math.round(this._getTempoValue()).toString()}},{key:"_finishedLoading",get:function(){return this.state.instrumentIsLoaded&&this.state.midiFileLoaded}},{key:"_getCurrentPercent",value:function(){return Math.abs(100-this.midiPlayer.getSongPercentRemaining())}},{key:"_getTimeOutput",value:function(){var e=this._getCurrentPercent()/100*this.state.songLength;return this._finishedLoading?l._getTimeValue(e):"LOADING"}},{key:"_handleEvent",value:function(e){var t,n=100;if(this.mostRecentTick===e.tick?t=this.mostRecentTime:(this.mostRecentTick=e.tick,t=this.mostRecentTime=this.audioContext.currentTime+1/4),"Note on"===e.name&&this.state.playing){var a;switch(e.channel){default:case 1:a=i.Soprano;break;case 2:a=i.Alto;break;case 3:a=i.Tenor;break;case 4:a=i.Bass}n=e.velocity*(l._getVoiceValue(a)/250),this.activeNotes[e.channel]&&Object(m.e)(this.activeNotes[e.channel],t),n>0&&(this.activeNotes[e.channel]=Object(m.d)(this.audioContext,e.noteName,n,t))}else"Note off"===e.name&&this.activeNotes[e.channel]&&(Object(m.e)(this.activeNotes[e.channel],t),delete this.activeNotes[e.channel])}},{key:"_startSilence",value:function(){this._stopSilence(),this.silentNode=this.audioContext.createOscillator(),this.silentNode.type="sine",this.silentNode.frequency.setValueAtTime(200,this.audioContext.currentTime);var e=this.audioContext.createGain();e.gain.setValueAtTime(0,this.audioContext.currentTime),e.connect(this.audioContext.destination),this.silentNode.connect(e),this.silentNode.start()}},{key:"_stopSilence",value:function(){this.silentNode&&(this.silentNode.stop(),this.silentNode=void 0)}},{key:"_playPause",value:function(){var e=this;this._finishedLoading&&(this.state.playing?this._pause():(this._play(),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e._pause()}))))}},{key:"_play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.endOfFile;this.setState({playing:!0}),t||(this.audioContext=Object(m.a)(),this._startSilence()),this.mostRecentTick=void 0,this.midiPlayer.play(),this.audio=new Audio("../silence250ms.mp3"),this.audio.play()}},{key:"_pause",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.endOfFile;this.state.playing&&this.audioContext.close(),t||this.midiPlayer.pause(),this._stopSilence(),this.setState({playing:!1}),this.audio&&(this.audio.src="")}},{key:"_loadMidiFile",value:function(){var e=this;fetch(this.props.midiFilePath).then((function(e){return e.arrayBuffer()})).then((function(t){return function(t){e.midiPlayer.loadArrayBuffer(t),e.setState({initialTempo:e.midiPlayer.getTempo().toString()}),e.setState({songLength:e.midiPlayer.getSongTime()}),e.setState({initialTime:"0:00"}),e.setState({midiFileLoaded:!0})}(t)}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("form",{id:"slider-form",children:Object(j.jsxs)("table",{className:"sliderTable",children:[Object(j.jsx)("colgroup",{children:Object(j.jsx)("col",{className:"sliderLabelColumn"})}),Object(j.jsxs)("tbody",{children:[Object.values(i).map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{className:"sliderLabel",id:"".concat(e,"-label"),children:e.charAt(0).toUpperCase()+e.slice(1)})}),Object(j.jsx)("td",{className:"sliderCell",children:Object(j.jsx)("input",{className:"letter_".concat(e.charAt(0)),type:"range",id:l._sliderName(e),defaultValue:e===i.Soprano?2:1,min:0,max:2,step:.01})})]},e)})),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"tempoCell",children:[Object(j.jsx)("label",{className:"sliderLabel",id:"tempo-label",children:"Tempo"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"bpm sliderLabel",id:"tempo-output",children:this.state.initialTempo})]}),Object(j.jsx)("td",{className:"tempoCell sliderCell",children:Object(j.jsx)("input",{className:"tempo",type:"range",id:"tempo-slider",defaultValue:1,min:.5,max:1.5,step:.01,onInput:this._onTempoChange})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{className:"sliderLabel",id:"time-output",children:this.state.initialTime})}),Object(j.jsx)("td",{className:"sliderCell",children:Object(j.jsx)("input",{className:"timeSliderThumb",type:"range",id:"time-slider",onInput:this._displayTime,onPointerUp:this._setNewTime,defaultValue:0,min:0,max:100,step:.01})})]})]})]})}),Object(j.jsxs)("div",{className:"bottomDiv",id:"bottom-div",children:[Object(j.jsx)("label",{className:"loading",id:"loading",hidden:this._finishedLoading,children:"Loading"}),Object(j.jsx)("button",{id:"play-button",className:"playPauseButton",hidden:!this._finishedLoading||this.state.playing,onClick:function(){return e._playPause()},children:Object(j.jsx)(d.h,{className:"playPauseIcon"})}),Object(j.jsx)("button",{id:"pause-button",className:"playPauseButton",hidden:!this._finishedLoading||!this.state.playing,onClick:function(){return e._playPause()},children:Object(j.jsx)(d.g,{className:"playPauseIcon"})})]})]})}},{key:"_updateTimeSlider",value:function(){if(this._finishedLoading&&this.midiPlayer.isPlaying()&&!this.state.experiencingUserInputOnTimeSlider){var e=document.getElementById("time-slider"),t=document.getElementById("time-output");e.value=this._getCurrentPercent().toString(),t.innerHTML=this._getTimeOutput()}}},{key:"componentDidMount",value:function(){var t=this;this.interval=window.setInterval(this._updateTimeSlider,1e3),Object(m.b)((function(){t.setState({instrumentIsLoaded:!0})})),e.ringerOn=function(){},e.ringerOff=function(){}}},{key:"componentWillUnmount",value:function(){e.ringerOn=function(){},e.ringerOff=function(){},clearInterval(this.interval),this.state.playing&&this._playPause()}}],[{key:"_getVoiceValue",value:function(e){var t=Object(b.b)(document.getElementById(l._sliderName(e))).value;return Number(t)}},{key:"_sliderName",value:function(e){return"".concat(e,"-slider")}},{key:"_getTimeValue",value:function(e){return Number(Math.trunc(e/60))+":"+Math.trunc(e%60).toString().padStart(2,"0")}}]),l}(u.a.Component)}).call(this,n(31))},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i,a,c,r,o,s,l,u,h,d,m,b,j,f,p,g,O,y,v,x=n(24),w=n(0),T=n(38),k=n.n(T),N=n(20),S=n(14),_=(n(49),n(25),n(28)),C=n(29),E=n(6),P=(n(50),n(11)),L=(n(51),n(16)),I=n(21),V=n(1),B=function(e){Object(I.c)();var t=Object(w.useCallback)((function(){e.back?e.back():window.history.back()}),[e]),n=e.title,i=e.backButton;return Object(V.jsxs)("div",{className:"header",children:[i&&Object(V.jsx)(N.b,{id:"back-button-link",to:e.parentUrl,children:Object(V.jsx)(L.f,{className:"backButton",onClick:t})}),Object(V.jsx)("span",{className:"title",children:n}),i&&Object(V.jsx)("span",{className:"rightSpan",children:" "})]},"header")},D=(n(35),["title","titleId"]);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},A.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e,t){var n=e.title,x=e.titleId,T=F(e,D);return w.createElement("svg",A({xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":x},T),n?w.createElement("title",{id:x},n):null,i||(i=w.createElement("g",null,w.createElement("g",null,w.createElement("path",{d:"M378.526,0.363l-98.765,19.765V0H173.658h-31.208H36.35v509.726h106.101h31.208h106.101V189.881L344.221,512       l131.429-26.301L378.526,0.363z M142.451,478.518H67.557v-23.232h74.893V478.518z M142.451,424.078H67.557V31.208h74.893V424.078z        M248.552,478.518h-74.893v-23.232h74.893V478.518z M248.553,424.078h-74.893V31.208h74.348l0.545,2.726V424.078z M283.823,51.14       l70.227-14.054l74.321,371.384l-70.143,14.478L283.823,51.14z M364.351,453.551l70.143-14.478l4.433,22.15l-70.229,14.054       L364.351,453.551z"})))),a||(a=w.createElement("g",null,w.createElement("g",null,w.createElement("rect",{x:84.5,y:63.456,width:41.61,height:31.208})))),c||(c=w.createElement("g",null,w.createElement("g",null,w.createElement("rect",{x:190.617,y:63.456,width:41.61,height:31.208})))),r||(r=w.createElement("g",null,w.createElement("g",null,w.createElement("rect",{x:308.84,y:75.683,transform:"matrix(0.9819 -0.1896 0.1896 0.9819 -11.3402 64.0321)",width:40.327,height:31.209})))),o||(o=w.createElement("g",null)),s||(s=w.createElement("g",null)),l||(l=w.createElement("g",null)),u||(u=w.createElement("g",null)),h||(h=w.createElement("g",null)),d||(d=w.createElement("g",null)),m||(m=w.createElement("g",null)),b||(b=w.createElement("g",null)),j||(j=w.createElement("g",null)),f||(f=w.createElement("g",null)),p||(p=w.createElement("g",null)),g||(g=w.createElement("g",null)),O||(O=w.createElement("g",null)),y||(y=w.createElement("g",null)),v||(v=w.createElement("g",null)))}var M=w.forwardRef(U),R=(n.p,function(){return Object(V.jsxs)("div",{className:"footer",children:[Object(V.jsx)(N.b,{className:"link",to:"/",children:Object(V.jsx)(L.b,{className:"calendarIcon"})}),Object(V.jsx)(N.b,{className:"link",to:"/library",children:Object(V.jsx)(M,{className:"libraryBooksIcon"})}),Object(V.jsx)(N.b,{className:"link",to:"/settings",children:Object(V.jsx)(L.j,{className:"settingsIcon"})}),Object(V.jsx)(N.b,{className:"link",to:"/help",children:Object(V.jsx)(L.i,{className:"helpIcon"})})]},"footer")}),H=n(41),z=(n(64),n(34));function W(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}n(71);var q=function(e){var t=e.txtFilePath,n=Object(w.useState)(""),i=Object(E.a)(n,2),a=i[0],c=i[1];Object(w.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){c(e)}))}),[t]);var r=a.split("\n"),o=r.filter((function(e){return e.startsWith("author")})).map((function(e){var t;return null===(t=e.match(/^[a-z]+\s+(.*)$/))||void 0===t?void 0:t[1]})),s=r.filter((function(e){return e.startsWith("composer")})).map((function(e){var t;return null===(t=e.match(/^[a-z]+\s+(.*)$/))||void 0===t?void 0:t[1]})),l=r.filter((function(e){return e.startsWith("harmony")})).map((function(e){var t;return null===(t=e.match(/^[a-z]+\s+(.*)$/))||void 0===t?void 0:t[1]})),u=r.filter((function(e){return e.startsWith("copyright")})).map((function(e){var t;return null===(t=e.match(/^[a-z]+\s+(.*)$/))||void 0===t?void 0:t[1]}));return Object(V.jsxs)("div",{className:"info",children:[o.length>0?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Author"}),o]}):"",s.length>0?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Composer"}),s]}):"",l.length>0?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Harmony"}),l]}):"",u.length>0?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Copyright"}),u]}):""]})},J=function(e){function t(e,t){return Object(P.b)(e.title).toUpperCase().includes("PSALM")?e.number+" - "+e.title+"."+t:e.psalm?e.number+" - "+e.title+" - "+e.psalm+"."+t:e.number+" - "+e.title+"."+t}function n(e){return encodeURIComponent(e).replace(/%E2%80%99/g,"%27").replace(/!/g,"%21")}function i(e,t){return"".concat(P.e,"/").concat(n(e),"/").concat(n(t))}var a,c=Object(S.f)().search;!function(e){e[e.PDF=0]="PDF",e[e.Info=1]="Info",e[e.SongSettings=2]="SongSettings"}(a||(a={}));var r,o=Object(w.useState)(a.SongSettings),s=Object(E.a)(o,2),l=s[0],u=s[1],h=Object(w.useState)(void 0),d=Object(E.a)(h,2),m=d[0],b=d[1],j=function(){var e=Object(w.useState)(W()),t=Object(E.a)(e,2),n=t[0],i=t[1];return Object(w.useEffect)((function(){function e(){i(W())}return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),f=t(r=e.hymns?e.hymns[0]:Object(P.b)(Object(P.c)(c)),"mid"),p=t(r,"pdf"),g=t(r,"txt"),O="".concat(P.d,"/").concat(n(Object(P.b)(r.hymnal)),"/").concat(n(p)),y=(r.number?r.number.toString()+" - ":"")+Object(P.b)(r.title);return Object(V.jsxs)("div",{children:[Object(V.jsxs)("div",{style:Object(_.a)({},l!==a.PDF&&{display:"none"}),className:"pdfDoc",children:[Object(V.jsx)("div",{onClick:function(){return u(a.SongSettings)},children:Object(V.jsx)(L.a,{className:"closeButton"})}),Object(V.jsx)(z.a,{file:O,options:{workerSrc:"/pdf.worker.js"},onLoadSuccess:function(e){var t=e.numPages;return b(t)},onLoadError:console.error,children:Array.apply(null,Array(m)).map((function(e,t){return t+1})).map((function(e){return Object(V.jsx)(z.b,{pageNumber:e,width:j.width},e)}))})]},"pdf"),Object(V.jsx)("div",{style:Object(_.a)({},l===a.PDF&&{display:"none"}),children:Object(V.jsxs)("div",{className:"outerPageContent",children:[Object(V.jsx)(B,{title:Object(P.b)(y),backButton:!0,back:e.back,parentUrl:e.parentUrl}),Object(V.jsxs)("div",{className:"innerPageContent",children:[Object(V.jsx)("div",{hidden:l!==a.Info,children:Object(V.jsx)(q,{txtFilePath:i(Object(P.b)(r.hymnal),g)})}),Object(V.jsx)("div",{hidden:l!==a.SongSettings,children:Object(V.jsx)(H.a,{midiFilePath:i(Object(P.b)(r.hymnal),f)})})]}),Object(V.jsxs)("div",{className:"footer",children:[Object(V.jsx)("div",{onClick:function(){return u(a.SongSettings)},children:Object(V.jsx)(L.c,{className:"controlsIcon"})}),Object(V.jsx)("div",{onClick:function(){return u(a.PDF)},children:Object(V.jsx)(L.d,{className:"pdfIcon"})}),Object(V.jsx)("div",{onClick:function(){return u(a.Info)},children:Object(V.jsx)(L.e,{className:"infoIcon"})})]})]})},"player")]})},G=function(e){var t=Object(w.useState)([]),n=Object(E.a)(t,2),i=n[0],a=n[1],c=Object(w.useState)(""),r=Object(E.a)(c,2),o=r[0],s=r[1],l=Object(w.useState)([]),u=Object(E.a)(l,2),h=u[0],d=u[1],m=Object(w.useState)([]),b=Object(E.a)(m,2),j=b[0],f=b[1],p=Object(w.useState)(!1),g=Object(E.a)(p,2),O=g[0],y=g[1],v=Object(w.useState)(void 0),x=Object(E.a)(v,2),T=x[0],k=x[1],I="".concat(P.e,"/manifest.json"),D=Object(S.f)().search;Object(w.useEffect)((function(){fetch(I).then((function(e){return e.json()})).then((function(e){d(e)}))}),[I]),Object(w.useEffect)((function(){Promise.all(h.map((function(e){return fetch(function(e){return"".concat(P.e,"/").concat(e,"/manifest.json")}(e))}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){f(e.map((function(e,t){return{name:h[t],hymns:e}})))}))}),[h]);var A=Object(w.useMemo)((function(){var e=o.replace(/^[^a-z\d']+/,"").replaceAll(/[^a-z\d']+/g,"[a-z0-9]*[^a-z0-9']+");return new RegExp(e,"gi")}),[o]);function F(e){switch(e.toString().length){case 1:return"00"+e;case 2:return"0"+e;case 3:return e.toString()}}function U(e){var t=F(e.number),n=e.psalm&&!Object(P.b)(e.title).toLowerCase().includes("psalm")?" - "+e.psalm:"",i=t+" - "+e.title+n,a=i.match(A),c=i.search(A),r=c+(a&&a.length?a[0].length:0),o=i.slice(0,c),s=i.slice(c,r),l=i.slice(r,i.length);return Object(V.jsxs)("div",{children:[o,Object(V.jsx)("b",{children:s}),l]})}function M(t){var n,c=t.hymns.filter((function(e){var t=F(e.number),n=e.psalm&&!Object(P.b)(e.title).toLowerCase().includes("psalm")?" - "+e.psalm:"";return-1!==(t+" - "+e.title+n).search(A)})).map((function(n){var i=function(t,n){var i,a=t.name.replace(/ /g,"_"),c=n.title.replace(/ /g,"_"),r=n.number;return i=n.psalm?n.psalm.replace(/ /g,"_"):"",e.parentUrl+"?hymnal="+a+"&title="+c+"&number="+r+"&psalm="+i}(t,n);return Object(V.jsx)("tr",{children:Object(V.jsx)("td",{className:"song",children:Object(V.jsx)(N.b,{className:"this-week-songs",to:i,onClick:function(){return function(e){k(e)}(Object(_.a)(Object(_.a)({hymnal:t.name},n),{},{number:Object(P.b)(F(n.number))}))},children:U(n)})})},n.number+" "+n.title)})),r=!e.collapsed||i.includes(t.name)||o&&0===i.length;return Object(V.jsxs)("table",{className:"this-week-table",children:[Object(V.jsx)("tbody",{children:Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"hymnal ".concat(e.collapsed&&"collapsibleHymnal"),onClick:(n=t.name,function(){e.collapsed&&(i.includes(n)?a(i.filter((function(e){return e!==n}))):a([].concat(Object(C.a)(i),[n])))}),children:t.name})})}),r&&Object(V.jsx)("tbody",{className:"this-week-table-body",children:c})]},t.name)}var H=function(){s("")};var z=Object(w.useCallback)((function(){k(void 0)}),[]);return T?Object(V.jsx)(J,{hymns:[T],back:z,parentUrl:e.parentUrl}):(Object(P.c)(D)&&k(Object(P.c)(D)),Object(V.jsxs)("div",{className:"outerPageContent",children:[O||""!==o?void 0:Object(V.jsx)(B,{title:e.title,parentUrl:e.parentUrl}),Object(V.jsxs)("div",{className:"searchDiv",children:[Object(V.jsx)("input",{id:"song-search-bar",type:"text",placeholder:"Search",onChange:function(e){return s(e.target.value)},onFocus:function(){return setTimeout((function(){return y(!0)}))},onBlur:function(){return setTimeout((function(){return y(!1)}))},autoComplete:"off",className:"searchInput",value:o},"search"),Object(V.jsx)("div",{hidden:!O&&""===o,className:"cancelSearch",onClick:H,children:Object(V.jsx)(L.a,{className:"cancelSearchIcon"})},"cancelSearch")]},"searchDiv"),Object(V.jsx)("div",{className:"innerPageContent songList",children:e.message&&!O?Object(V.jsx)("div",{className:"message",children:e.message},"message"):Object(V.jsx)("div",{children:function(){var t=""===o&&e.defaultHymnals?e.defaultHymnals:j;return Object(V.jsx)("div",{children:Object(V.jsx)("div",{id:"hymnal-div",children:t.map((function(e){return M(e)}))})})}()},"innerHymnList")},"inner"),O||""!==o?void 0:Object(V.jsx)(R,{})]},"root"))},$=(n(72),n(43)),K=n(9),X=n(10),Y=new(function(){function e(){Object(K.a)(this,e)}return Object(X.a)(e,[{key:"church",get:function(){var e,t=document.cookie.split(";"),n=Object(x.a)(t);try{for(n.s();!(e=n.n()).done;){var i=e.value.match(Object($.a)(/\s*church=(.*)/,{church:1}));if(i&&i.groups)return decodeURI(i.groups.church)}}catch(a){n.e(a)}finally{n.f()}},set:function(e){var t=new Date;t.setTime(t.getTime()+31536e8),document.cookie="church="+(e?encodeURI(e):e)+";",document.cookie="expires="+t.toUTCString()+";",document.cookie="path=/;"}}]),e}()),Q=(n(73),function(e){var t="./this_week/manifest.json",n=Object(w.useState)([]),i=Object(E.a)(n,2),a=i[0],c=i[1],r=Object(w.useState)(Y.church),o=Object(E.a)(r,2),s=o[0],l=o[1],u=Object(w.useState)(""),h=Object(E.a)(u,2),d=h[0],m=h[1],b=Object(w.useState)(!1),j=Object(E.a)(b,2),f=j[0],p=j[1];function g(t){var n=t.currentTarget.value;Y.church=n,l(n),e.onSetChurch&&setTimeout((function(){return e.onSetChurch(n)}),1e3)}Object(w.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(){throw new Error("Error: HTTP-status 404, could not fetch churches manifest: "+t)}))}),[t]);var O=function(){m("")};var y=d.replaceAll(/ +/g,"[a-z0-9]*[^a-z0-9']+"),v=new RegExp(y,"gi"),x=a.filter((function(e){return-1!==e.search(v)})),T=(d?x:a).map((function(e){return Object(V.jsxs)("div",{className:"church",children:[Object(V.jsx)("input",{id:"church-input",className:"churchRadioButton",type:"radio",value:e,name:"church",defaultChecked:s===e,onClick:g}),Object(V.jsx)("label",{id:"church-name",className:"churchName"+(s===e?" selectedChurch":""),children:e})]},e)}));return Object(V.jsxs)("div",{className:"outerPageContent",children:[Object(V.jsx)(B,{title:"Choose Church",parentUrl:"settings"}),Object(V.jsxs)("div",{className:"searchDiv",children:[Object(V.jsx)("input",{id:"song-search-bar",type:"text",placeholder:"Search",onChange:function(e){return m(e.target.value)},onFocus:function(){return setTimeout((function(){return p(!0)}))},onBlur:function(){return setTimeout((function(){return p(!1)}))},autoComplete:"off",className:"searchInput",value:d},"search"),Object(V.jsx)("div",{hidden:!f&&""===d,className:"cancelSearch",onClick:O,children:Object(V.jsx)(L.a,{className:"cancelSearchIcon"})},"cancelSearch")]},"searchDiv"),Object(V.jsx)("div",{className:"innerPageContent",children:Object(V.jsx)("div",{className:"churches",children:T})}),Object(V.jsx)(R,{})]})});n(74);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),window.addEventListener("error",(function(e){if(void 0!==e.error.hasBeenCaught)return!1;e.error.hasBeenCaught=!0;var t={message:e.message,url:e.filename,line:e.lineno,column:e.colno,error:JSON.stringify(e.error)};window.webkit?window.webkit.messageHandlers.error.postMessage(t):console.log("Error:",t)})),k.a.render(Object(V.jsx)(N.a,{basename:"/",children:Object(V.jsxs)(S.c,{children:[Object(V.jsx)(S.a,{exact:!0,path:"/",component:function(){var e,t="./this_week/manifest.json",n=Object(w.useState)([]),i=Object(E.a)(n,2),a=i[0],c=i[1],r=Object(w.useState)(Y.church),o=Object(E.a)(r,2),s=o[0],l=o[1],u=Object(w.useState)([]),h=Object(E.a)(u,2),d=h[0],m=h[1],b=Object(w.useState)(!1),j=Object(E.a)(b,2),f=j[0],p=j[1],g=Object(w.useState)(""),O=Object(E.a)(g,2),y=O[0],v=O[1];if(Object(w.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(){throw new Error("Error: HTTP-status 404, bad request, could not fetch: "+t)}))}),[t]),Object(w.useEffect)((function(){if(s){var e="."+"/this_week/".concat(s,".json");fetch(e).then((function(e){return e.json()})).then((function(e){if(function(e){return!("date"in e)}(e)){var t=Array.from(new Set(e.filter((function(e){return e.hymnal})).map((function(e){return e.hymnal})))).map((function(t){return{name:t,hymns:e.filter((function(e){return e.hymnal===t}))}}));m(t),v(function(){var e=new Date,t=e;return t.setDate(e.getDate()+(e.getDay()>0?7-e.getDay():0)),"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]," ").concat(t.getDate())}()),p(!0)}else{var n=e.date,i=e.songs;v(n);var a=Array.from(new Set(i.filter((function(e){return e.hymnal})).map((function(e){return e.hymnal})))).map((function(e){return{name:e,hymns:i.filter((function(t){return t.hymnal===e}))}}));m(a),p(!0)}}))}}),[s]),a)return s?(e=f?0===d.length?"Your music director has not yet added any songs for this week.":void 0:"Downloading songs for this week...",Object(V.jsx)(G,{title:a?"Songs for ".concat(y):"Library",defaultHymnals:a?d:void 0,collapsed:!1,parentUrl:"",message:e})):Object(V.jsx)(Q,{onSetChurch:l});throw new Error("no churches manifest found")}}),Object(V.jsx)(S.a,{exact:!0,path:"/hymns",component:G}),Object(V.jsx)(S.a,{exact:!0,path:"/library",component:function(){return Object(V.jsx)(G,{title:"Library",collapsed:!0,parentUrl:"library"})}}),Object(V.jsx)(S.a,{exact:!0,path:"/player",component:J}),Object(V.jsx)(S.a,{exact:!0,path:"/settings",component:Q}),Object(V.jsx)(S.a,{exact:!0,path:"/help",component:function(){return Object(V.jsxs)("div",{className:"outerPageContent",children:[Object(V.jsx)(B,{title:"Help",parentUrl:"help"}),Object(V.jsx)("div",{className:"innerPageContent",children:Object(V.jsxs)("div",{className:"content",children:[Object(V.jsx)("h2",{children:"Time Commitment"}),"Learning to sing your part only takes 5-10 minutes per day.  But, to make progress, you need to be consistent.  Find a time of day where you will remember to practice.  Choose a single, relatively easy song to start with.  As a suggestion, you can start with Amazing Grace or Be Thou My Vision.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"Do not expect overnight results!  It might take a couple of months to master your first song.  However, the second song will take less time, and the more you do it, the faster you will be able to acquire new songs!",Object(V.jsx)("h2",{children:"Voice Range"}),"To learn to sing your part, you must first determine your voice range (soprano, alto, tenor, bass). Ask a musical friend to help you figure this out.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("h2",{children:"Matching Pitch"}),"Once you know which part God designed you to sing, you now need to learn to match pitch. This app does not currently help you to do that, though it hopefully will soon.  If you have access to a piano, you can press a key in your voice range and practice humming the same note.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("h2",{children:"Singing"}),"To learn your part, start by turning up your part (e.g. tenor) and turning down all the other parts. Once you feel confident about singing your part, slowly begin to turn up the melody (usualy soprano).",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"This will be challenging because once you hear the melody, you might be inclined to sing that instead of your part.  Keep the melody quiet enough that you can still sing your part.  As you gain confidence, slowly turn up the melody louder and louder.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"When the melody is at full strength and you can still sing you part, congratulations - you are doing very well!  Unfortunately, you are not quite there yet.  This is because in a church setting you will often have trouble hearing your part while everyone around you is singing the melody.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"The final step is to begin turning down your own part with the melody still at full volume.  When you can turn you part down so that it is barely audible and still sing against the melody, you now have a chance at singing in a group.  However, bear in mind that it still takes time.  For me, it took several weeks to learn to match pitch, and then several months before I was able to sing my part in a group.  Stick with it, though, you will eventually be able to sing your part with confidence in a group setting!",Object(V.jsx)("h2",{children:"Churches"}),"If your church is not in the list, ask your music leader send an email to ",Object(V.jsx)("a",{href:"mailto:support@crescendosw.com",children:"support@crescendosw.com"})," with a request to add your church. They will need to be willing to add their song list every week, but that should take them less than five minutes once they get the hang of it.  There is no charge for this service.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"If your weekly song list is empty, talk to your music leader about adding songs each week so that you can practice ahead of Sunday worship.  Remember that we are coming to sing praise to our creator who made us with excellence!  Shouldn't we strive for excellence in our praise to Him!",Object(V.jsx)("h2",{children:"Feedback"}),"If you have questions, comments, or feedback about the app, please send an email to ",Object(V.jsx)("a",{href:"mailto:support@crescendosw.com",children:"support@crescendosw.com"}),"."]})}),Object(V.jsx)(R,{})]})}})]})}),document.getElementById("root"))}],[[75,1,2]]]);
//# sourceMappingURL=main.0bdb6ddc.chunk.js.map