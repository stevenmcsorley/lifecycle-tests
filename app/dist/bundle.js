/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=f.IS_PAPA_WORKER||!1,a={},u=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;J(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!J(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=u++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=J(t.step),t.chunk=J(t.chunk),t.complete=J(t.complete),t.error=J(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?(e=function(e){if(65279===e.charCodeAt(0))return e.slice(1);return e}(e),n=t.download?new l(t):new p(t)):!0===e.readable&&J(e.read)&&J(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,r=!1,i=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}();var u=new RegExp(Q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,r);if("object"==typeof e[0])return h(i||Object.keys(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||i),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var u=n?e.length:t[o].length,h=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(h="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<u;l++){var c=s?e[l]:l;d.push(t[o][c])}h=""===d.join("").trim()}if(!h){for(var p=0;p<u;p++){0<p&&!f&&(i+=m);var g=n&&s?e[p]:p;i+=v(t[o][g],p)}o<t.length-1&&(!r||0<u&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;o&&"string"==typeof e&&o.test(e)&&(e="'"+e,r=!0);var i=e.toString().replace(u,a);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},u=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)u.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==u.length){var e,t,r,i,n=u[0];if(J(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(J(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void h();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void h()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){J(a)&&a(e,n.file,n.inputElem),h()},b.parse(n.file,n.instanceConfig)}else J(o.complete)&&o.complete()}function h(){u.splice(0,1),e()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&J(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(J(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!J(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){J(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)),i.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),h.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;h.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=r.substring(0,t),r=r.substring(t)):(e=r,r=""),this._finished=!r,this.parseChunk(e)}}}function g(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(m){var a,o,u,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(J(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;r+=e.data.length,m.preview&&r>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){return c&&u&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),u=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){J(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var r,i=m.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];m.header&&(n=r>=l.length?"__parsed_extra":l[r]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return r=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[r]&&(m.dynamicTyping[r]=m.dynamicTypingFunction(r)),!0===(m.dynamicTyping[r]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):h.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(e,t,r){var i=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(Q(t)+"([^]*?)"+Q(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),u=!1,m.delimiter)J(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,u;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var h=0;h<n.length;h++){var f=n[h],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(r&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===u||u<l)&&1.99<l&&(a=d,s=f,u=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(u=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=J(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,J(m.complete)&&m.complete(c),a=""}}function Q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(j){var z,M=(j=j||{}).delimiter,P=j.newline,U=j.comments,q=j.step,N=j.preview,B=j.fastMode,K=z=void 0===j.quoteChar||null===j.quoteChar?'"':j.quoteChar;if(void 0!==j.escapeChar&&(K=j.escapeChar),("string"!=typeof M||-1<b.BAD_DELIMITERS.indexOf(M))&&(M=","),U===M)throw new Error("Comment character same as delimiter");!0===U?U="#":("string"!=typeof U||-1<b.BAD_DELIMITERS.indexOf(U))&&(U=!1),"\n"!==P&&"\r"!==P&&"\r\n"!==P&&(P="\n");var W=0,H=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=M.length,s=P.length,a=U.length,o=J(q),u=[],h=[],f=[],d=W=0;if(!i)return L();if(j.header&&!t){var l=i.split(P)[0].split(M),c=[],p={},g=!1;for(var _ in l){var m=l[_];J(j.transformHeader)&&(m=j.transformHeader(m,_));var y=m,v=p[m]||0;for(0<v&&(g=!0,y=m+"_"+v),p[m]=v+1;c.includes(y);)y=y+"_"+v;c.push(y)}if(g){var k=i.split(P);k[0]=c.join(M),i=k.join(P)}}if(B||!1!==B&&-1===i.indexOf(z)){for(var b=i.split(P),E=0;E<b.length;E++){if(f=b[E],W+=f.length,E!==b.length-1)W+=P.length;else if(r)return L();if(!U||f.substring(0,a)!==U){if(o){if(u=[],I(f.split(M)),F(),H)return L()}else I(f.split(M));if(N&&N<=E)return u=u.slice(0,N),L(!0)}}return L()}for(var w=i.indexOf(M,W),R=i.indexOf(P,W),C=new RegExp(Q(K)+Q(z),"g"),S=i.indexOf(z,W);;)if(i[W]!==z)if(U&&0===f.length&&i.substring(W,W+a)===U){if(-1===R)return L();W=R+s,R=i.indexOf(P,W),w=i.indexOf(M,W)}else if(-1!==w&&(w<R||-1===R))f.push(i.substring(W,w)),W=w+e,w=i.indexOf(M,W);else{if(-1===R)break;if(f.push(i.substring(W,R)),D(R+s),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0)}else for(S=W,W++;;){if(-1===(S=i.indexOf(z,S+1)))return r||h.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:u.length,index:W}),T();if(S===n-1)return T(i.substring(W,S).replace(C,z));if(z!==K||i[S+1]!==K){if(z===K||0===S||i[S-1]!==K){-1!==w&&w<S+1&&(w=i.indexOf(M,S+1)),-1!==R&&R<S+1&&(R=i.indexOf(P,S+1));var O=A(-1===R?w:Math.min(w,R));if(i.substr(S+1+O,e)===M){f.push(i.substring(W,S).replace(C,z)),i[W=S+1+O+e]!==z&&(S=i.indexOf(z,W)),w=i.indexOf(M,W),R=i.indexOf(P,W);break}var x=A(R);if(i.substring(S+1+x,S+1+x+s)===P){if(f.push(i.substring(W,S).replace(C,z)),D(S+1+x+s),w=i.indexOf(M,W),S=i.indexOf(z,W),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0);break}h.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:u.length,index:W}),S++}}else S++}return T();function I(e){u.push(e),d=W}function A(e){var t=0;if(-1!==e){var r=i.substring(S+1,e);r&&""===r.trim()&&(t=r.length)}return t}function T(e){return r||(void 0===e&&(e=i.substring(W)),f.push(e),W=n,I(f),o&&F()),L()}function D(e){W=e,I(f),f=[],R=i.indexOf(P,W)}function L(e){return{data:u,errors:h,meta:{delimiter:M,linebreak:P,aborted:H,truncated:!!e,cursor:d+(t||0)}}}function F(){q(L()),u=[],h=[]}},this.abort=function(){H=!0},this.getCharIndex=function(){return W}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(J(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else J(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=a[e];J(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function J(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(h.prototype)).constructor=g,b});

/***/ }),

/***/ "./src/scripts/globalData.ts":
/*!***********************************!*\
  !*** ./src/scripts/globalData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRouteData: () => (/* binding */ getRouteData),
/* harmony export */   setRouteData: () => (/* binding */ setRouteData)
/* harmony export */ });
// Define a variable to store the route data
let globalRouteData = {
    stops: [],
};
// Function to set the route data
function setRouteData(routeData) {
    console.log("Setting route data:", routeData);
    globalRouteData = routeData;
}
// Function to get the route data
function getRouteData() {
    console.log("Getting route data:", globalRouteData);
    return globalRouteData;
}


/***/ }),

/***/ "./src/scripts/googleMaps.ts":
/*!***********************************!*\
  !*** ./src/scripts/googleMaps.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plotRouteOnMap: () => (/* binding */ plotRouteOnMap)
/* harmony export */ });
/* harmony import */ var _services_geocode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/geocode */ "./src/scripts/services/geocode.ts");
/* harmony import */ var _services_directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/directions */ "./src/scripts/services/directions.ts");
/* harmony import */ var _services_routeSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/routeSummary */ "./src/scripts/services/routeSummary.ts");
/* harmony import */ var _services_mapMarkers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/mapMarkers */ "./src/scripts/services/mapMarkers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const plotRouteOnMap = (map, stops) => __awaiter(void 0, void 0, void 0, function* () {
    const geocodeResults = yield (0,_services_geocode__WEBPACK_IMPORTED_MODULE_0__.getGeocodeResults)(stops);
    const directionsResult = yield (0,_services_directions__WEBPACK_IMPORTED_MODULE_1__.calculateRoute)(geocodeResults);
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map,
        suppressMarkers: true,
    });
    directionsRenderer.setDirections(directionsResult);
    const route = directionsResult.routes[0];
    console.log("Route:", route);
    const summaryPanel = document.getElementById("routeStatusPanel");
    if (summaryPanel) {
        (0,_services_routeSummary__WEBPACK_IMPORTED_MODULE_2__.displayRouteSummary)(summaryPanel, route, stops);
    }
    (0,_services_mapMarkers__WEBPACK_IMPORTED_MODULE_3__.addMarkersOnMap)(map, stops, geocodeResults);
});


/***/ }),

/***/ "./src/scripts/routeSimulation.ts":
/*!****************************************!*\
  !*** ./src/scripts/routeSimulation.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simulateRoute: () => (/* binding */ simulateRoute)
/* harmony export */ });
/* harmony import */ var _services_dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/dateFormatter */ "./src/scripts/services/dateFormatter.ts");
/* harmony import */ var _globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalData */ "./src/scripts/globalData.ts");

 // Import getRouteData function
function simulateRoute() {
    var _a, _b;
    // Retrieve the route data using getRouteData()
    const busRouteData = (0,_globalData__WEBPACK_IMPORTED_MODULE_1__.getRouteData)();
    // Check if busRouteData is null and provide a default value
    const stops = (_a = busRouteData === null || busRouteData === void 0 ? void 0 : busRouteData.stops) !== null && _a !== void 0 ? _a : [];
    const route = busRouteData === null || busRouteData === void 0 ? void 0 : busRouteData.route;
    if (!route) {
        console.error('Route data is undefined');
        return;
    }
    // Initialize necessary variables
    let currentStopIndex = 0; // Index of the current stop
    let currentTime = (_b = stops[0].end_time) !== null && _b !== void 0 ? _b : new Date(); // Initialize the current time with the start time
    // Map the end_time from route to stops
    stops.slice(0, -1).forEach((stop, index) => {
        // Exclude the last stop
        const legDuration = route.legs[index].duration.text;
        const durationInMilliseconds = (0,_services_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.parseDurationTextToMilliseconds)(legDuration);
        const endTime = new Date(currentTime.getTime() + durationInMilliseconds);
        stop.end_time = endTime;
        currentTime = endTime; // Update currentTime for the next stop
    });
    // Function to update the route status panel with progress and passenger information
    function updateRouteStatusPanel(stop) {
        const summaryPanel = document.getElementById('routeStatusPanelUpdate');
        if (summaryPanel) {
            // Clear previous content
            summaryPanel.innerHTML = '';
            // Calculate the remaining time for the current leg
            const currentLeg = route.legs[currentStopIndex];
            const remainingDuration = currentLeg.duration.value * 1000 - (currentTime.getTime() - stops[currentStopIndex].end_time.getTime());
            const remainingDurationText = (0,_services_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatDurationText)(remainingDuration);
            // Display the countdown timer for the current leg
            summaryPanel.innerHTML += `<p id='remainingTime'>Remaining Time: ${remainingDurationText}</p>`;
            // Display the next stop information
            summaryPanel.innerHTML += `<p>Next Stop: ${stop.name}</p>`;
            // You can also display other information, such as passenger counts, delays, etc.
        }
    }
    // Function to animate the icon along the route
    // Function to animate the icon along the route
    function animateShuttleToNextStop() {
        const nextStop = stops[currentStopIndex + 1]; // Get the next stop
        console.log('nextStop', nextStop);
        if (!nextStop || nextStop.end_time === null) {
            console.error('Invalid next stop or end_time is null');
            return;
        }
        // Get the duration from the current stop to the next stop in milliseconds
        const duration = (0,_services_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.parseDurationTextToMilliseconds)(route.legs[currentStopIndex].duration.text);
        // After reaching the next stop, update the current stop index and current time
        currentStopIndex++;
        currentTime = new Date(nextStop.end_time);
        // Call the function to update the route status panel with the new stop information
        updateRouteStatusPanel(nextStop);
        // Function to update the remaining time
        const updateRemainingTime = () => {
            const currentTime = new Date();
            const remainingTime = Math.max(0, (currentTime.getTime() - nextStop.end_time.getTime()) / 1000);
            const remainingTimeString = (0,_services_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatDurationText)(remainingTime);
            const remainingTimeElement = document.getElementById('remainingTime');
            if (remainingTimeElement) {
                remainingTimeElement.innerText = `Remaining Time: ${remainingTimeString}`;
            }
        };
        // Update the remaining time every second
        updateRemainingTime();
        const remainingTimeUpdateInterval = setInterval(updateRemainingTime, 1000);
        // Check if there are more stops to visit
        if (currentStopIndex < stops.length - 1) {
            // If there are more stops, continue the animation loop
            setTimeout(() => {
                clearInterval(remainingTimeUpdateInterval); // Clear the interval to stop updating the remaining time
                animateShuttleToNextStop();
            }, duration);
        }
        else {
            // If all stops have been visited, end the simulation
            console.log('Simulation completed.');
        }
    }
    // Start the animation by calling the animateShuttleToNextStop function
    animateShuttleToNextStop();
}


/***/ }),

/***/ "./src/scripts/services/dateFormatter.ts":
/*!***********************************************!*\
  !*** ./src/scripts/services/dateFormatter.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDurationText: () => (/* binding */ formatDurationText),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   parseDurationTextToMilliseconds: () => (/* binding */ parseDurationTextToMilliseconds),
/* harmony export */   parseTimeStringToDate: () => (/* binding */ parseTimeStringToDate)
/* harmony export */ });
// Helper function to format time as HH:mm
const formatTime = (date) => {
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
};
// Helper function to parse time string and convert it to a Date object
function parseTimeStringToDate(timeString) {
    const [hours, minutes] = timeString.split(':');
    // Check if the timeString contains valid hour and minute values
    const isValidTimeString = Number.isInteger(Number(hours)) && Number.isInteger(Number(minutes)) &&
        Number(hours) >= 0 && Number(hours) < 24 &&
        Number(minutes) >= 0 && Number(minutes) < 60;
    // If the timeString is not in the valid format, throw an error
    if (!isValidTimeString) {
        throw new Error('Invalid time string');
    }
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);
    return date;
}
// Utility function to convert duration text to milliseconds
function parseDurationTextToMilliseconds(durationText) {
    const durationMatch = durationText.match(/(\d+) mins?/);
    if (durationMatch) {
        const minutes = parseInt(durationMatch[1], 10);
        return minutes * 60 * 1000; // Convert minutes to milliseconds
    }
    return 0;
}
// Function to format a duration in milliseconds to a human-readable format
function formatDurationText(duration) {
    const hours = Math.floor(duration / (60 * 60 * 1000));
    const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((duration % (60 * 1000)) / 1000);
    // If there are hours, display in "hh:mm:ss" format, otherwise display in "mm:ss" format
    return hours > 0
        ? `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
        : `${padZero(minutes)}:${padZero(seconds)}`;
}
// Helper function to add leading zero to single-digit numbers
function padZero(num) {
    return num.toString().padStart(2, '0');
}


/***/ }),

/***/ "./src/scripts/services/directions.ts":
/*!********************************************!*\
  !*** ./src/scripts/services/directions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRoute: () => (/* binding */ calculateRoute)
/* harmony export */ });
const calculateRoute = (geocodeResults) => {
    var _a, _b;
    const directionsService = new google.maps.DirectionsService();
    const waypoints = geocodeResults.slice(1, geocodeResults.length - 1).map((result) => {
        var _a;
        return ({
            location: (_a = result.geometry) === null || _a === void 0 ? void 0 : _a.location,
        });
    });
    const request = {
        origin: (_a = geocodeResults[0].geometry) === null || _a === void 0 ? void 0 : _a.location,
        destination: (_b = geocodeResults[geocodeResults.length - 1].geometry) === null || _b === void 0 ? void 0 : _b.location,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
    };
    return new Promise((resolve, reject) => {
        directionsService.route(request, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                resolve(result);
            }
            else {
                reject(status);
            }
        });
    });
};


/***/ }),

/***/ "./src/scripts/services/geocode.ts":
/*!*****************************************!*\
  !*** ./src/scripts/services/geocode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeocodeResults: () => (/* binding */ getGeocodeResults)
/* harmony export */ });
const getGeocodeResults = (stops) => {
    const geocoder = new google.maps.Geocoder();
    const geocodePromises = stops.map((stop) => new Promise((resolve, reject) => {
        geocoder.geocode({ address: stop.name }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results[0]) {
                resolve(results[0]);
            }
            else {
                reject(status);
            }
        });
    }));
    return Promise.all(geocodePromises);
};


/***/ }),

/***/ "./src/scripts/services/mapMarkers.ts":
/*!********************************************!*\
  !*** ./src/scripts/services/mapMarkers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMarkersOnMap: () => (/* binding */ addMarkersOnMap)
/* harmony export */ });
const addMarkersOnMap = (map, stops, geocodeResults) => {
    stops.forEach((stop, index) => {
        var _a;
        const isStartStop = index === 0;
        const isEndStop = index === stops.length - 1;
        new google.maps.Marker({
            position: (_a = geocodeResults[index].geometry) === null || _a === void 0 ? void 0 : _a.location,
            map,
            title: stop.name,
            label: {
                text: stop.name,
                color: "black",
                fontSize: "14px",
                fontWeight: "bold",
            },
            icon: isStartStop
                ? "https://maps.google.com/mapfiles/kml/paddle/grn-circle.png" // Green circle icon for start
                : isEndStop
                    ? "https://maps.google.com/mapfiles/kml/paddle/red-circle.png" // Red circle icon for end
                    : "https://maps.google.com/mapfiles/kml/paddle/ylw-circle.png", // Yellow circle icon for other stops
        });
    });
};


/***/ }),

/***/ "./src/scripts/services/routeSummary.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/routeSummary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayRouteSummary: () => (/* binding */ displayRouteSummary),
/* harmony export */   generateRouteSummaryData: () => (/* binding */ generateRouteSummaryData)
/* harmony export */ });
/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFormatter */ "./src/scripts/services/dateFormatter.ts");
/* harmony import */ var _globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalData */ "./src/scripts/globalData.ts");

 // Import setRouteData function
// Helper function to generate the summary for each stop as an object
// Function to generate the summary data for the entire route
// Helper function to generate the summary for each stop as an object
const generateStopSummary = (stop, leg, routeSegment, currentTime) => {
    var _a, _b;
    const summary = {
        routeSegment,
        name: stop.name,
        startAddress: leg.start_address,
        durationText: (_b = (_a = leg.duration) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "Unknown",
        arrivalTime: currentTime,
    };
    if (leg.duration) {
        currentTime = new Date(currentTime.getTime() + (leg.duration.value || 0) * 1000);
        summary.arrivalTime = currentTime;
    }
    return summary;
};
// Function to generate the summary data for the entire route
// Function to generate the summary data for the entire route
const generateRouteSummaryData = (route, stops) => {
    const summaryData = [];
    // Calculate the total duration of the entire route
    const totalDuration = route.legs.reduce((total, leg) => { var _a; return total + (((_a = leg.duration) === null || _a === void 0 ? void 0 : _a.value) || 0); }, 0);
    // Calculate the start time based on the end time of the last stop
    const endStop = stops[stops.length - 1];
    const endTime = endStop.end_time;
    const startTime = endTime ? new Date(endTime.getTime() - totalDuration * 1000) : new Date();
    // Initialize the current time with the start time
    let currentTime = new Date(startTime);
    for (let index = 0; index < route.legs.length; index++) {
        const stop = stops[index];
        const leg = route.legs[index];
        const routeSegment = index === 0 ? "Start" : `Stop ${index}`;
        const summary = generateStopSummary(stop, leg, routeSegment, currentTime);
        summaryData.push(summary);
        if (leg.duration) {
            currentTime = new Date(currentTime.getTime() + (leg.duration.value || 0) * 1000); // Calculate the arrival time for the next stop
        }
    }
    // Set the route data in the global variable
    (0,_globalData__WEBPACK_IMPORTED_MODULE_1__.setRouteData)({ route, stops });
    return summaryData;
};
// Function to display the route summary in the HTML
const displayRouteSummary = (summaryPanel, route, stops) => {
    // Clear previous content
    summaryPanel.innerHTML = "";
    // Calculate the total duration of the entire route
    const totalDuration = route.legs.reduce((total, leg) => { var _a; return total + (((_a = leg.duration) === null || _a === void 0 ? void 0 : _a.value) || 0); }, 0);
    // Calculate the start time based on the end time of the last stop
    const endStop = stops[stops.length - 1];
    const endTime = endStop === null || endStop === void 0 ? void 0 : endStop.end_time;
    const startTime = new Date((endTime !== null && endTime !== void 0 ? endTime : new Date()).getTime() - totalDuration * 1000);
    // Display start time
    summaryPanel.innerHTML += `<p>Start: ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatTime)(startTime)}</p>`;
    // Generate the summary data for the entire route
    const summaryData = generateRouteSummaryData(route, stops);
    console.log('globalData', (0,_globalData__WEBPACK_IMPORTED_MODULE_1__.getRouteData)());
    // Display stop details using the summaryData array
    summaryData.forEach((summary, index) => {
        if (summary.routeSegment === "Start") {
            summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Leave at ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatTime)(summary.arrivalTime)}</p>`;
        }
        else if (index === summaryData.length - 1) {
            // Display the last stop's arrival time separately
            summaryPanel.innerHTML += `<p>End ${stops.length} - ${summary.name} - Arriving at ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatTime)(summary.arrivalTime)}</p>`;
        }
        else {
            summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Arriving at ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.formatTime)(summary.arrivalTime)}</p>`;
        }
    });
};


/***/ }),

/***/ "./src/scripts/upload.ts":
/*!*******************************!*\
  !*** ./src/scripts/upload.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCSVUpload: () => (/* binding */ handleCSVUpload)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_dateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dateFormatter */ "./src/scripts/services/dateFormatter.ts");


const handleCSVUpload = (file) => {
    return new Promise((resolve, reject) => {
        papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const stops = result.data.map((item) => {
                    const name = item.name;
                    let end_time = null;
                    // Check if the end_time value exists in the CSV and is a valid time string
                    if (item.end_time && typeof item.end_time === 'string') {
                        end_time = (0,_services_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.parseTimeStringToDate)(item.end_time);
                    }
                    // Create and return the BusStop object
                    return { name, end_time };
                });
                const busRouteData = {
                    stops: stops,
                };
                console.log(busRouteData);
                resolve(busRouteData);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googleMaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleMaps */ "./src/scripts/googleMaps.ts");
/* harmony import */ var _routeSimulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routeSimulation */ "./src/scripts/routeSimulation.ts");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload */ "./src/scripts/upload.ts");
// Import the necessary files and modules here



// Set up necessary event listeners and logic here
window.addEventListener('DOMContentLoaded', () => {
    // Your event listener and logic for initializing the app here
    // Example Usage:
    const csvFileInput = document.getElementById('csvFileInput');
    let map = null; // Define the map variable to hold the Google Map object
    csvFileInput === null || csvFileInput === void 0 ? void 0 : csvFileInput.addEventListener('change', () => {
        var _a;
        const file = (_a = csvFileInput === null || csvFileInput === void 0 ? void 0 : csvFileInput.files) === null || _a === void 0 ? void 0 : _a.item(0);
        if (file instanceof File) {
            (0,_upload__WEBPACK_IMPORTED_MODULE_2__.handleCSVUpload)(file)
                .then((busRouteData) => {
                // Extract the start time from the first row of busRouteData
                // const startTime = busRouteData.stops[0]?.end_time ?? '08:00'; // Default to '08:00' if end_time is missing
                // busRouteData.stops.shift(); // Remove the first element from the stops array (it's the start time)
                // Call other functions for Google Maps and simulation based on busRouteData
                if (!map) {
                    // Create the map if it doesn't exist yet
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: { lat: 55.86515, lng: -4.25763 },
                        zoom: 13, // Adjust the zoom level as needed
                    });
                }
                (0,_googleMaps__WEBPACK_IMPORTED_MODULE_0__.plotRouteOnMap)(map, busRouteData.stops);
                // Call the simulateRoute function here, inside the then block
            })
                .catch((error) => {
                console.error('Error parsing CSV file:', error);
            });
        }
        else {
            console.error('No file selected or invalid file type.');
        }
    });
    // The simulateRoute() function will no longer be called here
    // since it's already called inside the then block of handleCSVUpload().
    const playRouteButton = document.getElementById('playRouteButton');
    if (!playRouteButton) {
        return;
    }
    playRouteButton.addEventListener('click', () => {
        (0,_routeSimulation__WEBPACK_IMPORTED_MODULE_1__.simulateRoute)();
        // Call the function to start the route simulation
        // For example: startSimulation();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM4QztBQUNJO0FBQ1A7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWU7QUFDM0I7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOEJBQThCO0FBQ2hFO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsZ0JBQWdCLDJEQUFjO0FBQzlCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFhO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9wYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvc2NyaXB0cy9nbG9iYWxEYXRhLnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9zY3JpcHRzL2dvb2dsZU1hcHMudHMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3NjcmlwdHMvcm91dGVTaW11bGF0aW9uLnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGVGb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvZGlyZWN0aW9ucy50cyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9nZW9jb2RlLnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL21hcE1hcmtlcnMudHMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvcm91dGVTdW1tYXJ5LnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9zY3JpcHRzL3VwbG9hZC50cyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3NjcmlwdHMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAbGljZW5zZVxuUGFwYSBQYXJzZVxudjUuNC4xXG5odHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLlBhcGE9dCgpfSh0aGlzLGZ1bmN0aW9uIHMoKXtcInVzZSBzdHJpY3RcIjt2YXIgZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWY/Zjp7fTt2YXIgbj0hZi5kb2N1bWVudCYmISFmLnBvc3RNZXNzYWdlLG89Zi5JU19QQVBBX1dPUktFUnx8ITEsYT17fSx1PTAsYj17cGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgcj0odD10fHx7fSkuZHluYW1pY1R5cGluZ3x8ITE7SihyKSYmKHQuZHluYW1pY1R5cGluZ0Z1bmN0aW9uPXIscj17fSk7aWYodC5keW5hbWljVHlwaW5nPXIsdC50cmFuc2Zvcm09ISFKKHQudHJhbnNmb3JtKSYmdC50cmFuc2Zvcm0sdC53b3JrZXImJmIuV09SS0VSU19TVVBQT1JURUQpe3ZhciBpPWZ1bmN0aW9uKCl7aWYoIWIuV09SS0VSU19TVVBQT1JURUQpcmV0dXJuITE7dmFyIGU9KHI9Zi5VUkx8fGYud2Via2l0VVJMfHxudWxsLGk9cy50b1N0cmluZygpLGIuQkxPQl9VUkx8fChiLkJMT0JfVVJMPXIuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcInZhciBnbG9iYWwgPSAoZnVuY3Rpb24oKSB7IGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH0gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH0gaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH0gcmV0dXJuIHt9OyB9KSgpOyBnbG9iYWwuSVNfUEFQQV9XT1JLRVI9dHJ1ZTsgXCIsXCIoXCIsaSxcIikoKTtcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSkpLHQ9bmV3IGYuV29ya2VyKGUpO3ZhciByLGk7cmV0dXJuIHQub25tZXNzYWdlPV8sdC5pZD11KyssYVt0LmlkXT10fSgpO3JldHVybiBpLnVzZXJTdGVwPXQuc3RlcCxpLnVzZXJDaHVuaz10LmNodW5rLGkudXNlckNvbXBsZXRlPXQuY29tcGxldGUsaS51c2VyRXJyb3I9dC5lcnJvcix0LnN0ZXA9Sih0LnN0ZXApLHQuY2h1bms9Sih0LmNodW5rKSx0LmNvbXBsZXRlPUoodC5jb21wbGV0ZSksdC5lcnJvcj1KKHQuZXJyb3IpLGRlbGV0ZSB0Lndvcmtlcix2b2lkIGkucG9zdE1lc3NhZ2Uoe2lucHV0OmUsY29uZmlnOnQsd29ya2VySWQ6aS5pZH0pfXZhciBuPW51bGw7Yi5OT0RFX1NUUkVBTV9JTlBVVCxcInN0cmluZ1wiPT10eXBlb2YgZT8oZT1mdW5jdGlvbihlKXtpZig2NTI3OT09PWUuY2hhckNvZGVBdCgwKSlyZXR1cm4gZS5zbGljZSgxKTtyZXR1cm4gZX0oZSksbj10LmRvd25sb2FkP25ldyBsKHQpOm5ldyBwKHQpKTohMD09PWUucmVhZGFibGUmJkooZS5yZWFkKSYmSihlLm9uKT9uPW5ldyBnKHQpOihmLkZpbGUmJmUgaW5zdGFuY2VvZiBGaWxlfHxlIGluc3RhbmNlb2YgT2JqZWN0KSYmKG49bmV3IGModCkpO3JldHVybiBuLnN0cmVhbShlKX0sdW5wYXJzZTpmdW5jdGlvbihlLHQpe3ZhciBuPSExLF89ITAsbT1cIixcIix5PVwiXFxyXFxuXCIscz0nXCInLGE9cytzLHI9ITEsaT1udWxsLG89ITE7IWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuO1wic3RyaW5nXCIhPXR5cGVvZiB0LmRlbGltaXRlcnx8Yi5CQURfREVMSU1JVEVSUy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT10LmRlbGltaXRlci5pbmRleE9mKGUpfSkubGVuZ3RofHwobT10LmRlbGltaXRlcik7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5xdW90ZXN8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQucXVvdGVzfHxBcnJheS5pc0FycmF5KHQucXVvdGVzKSkmJihuPXQucXVvdGVzKTtcImJvb2xlYW5cIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXMmJlwic3RyaW5nXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzfHwocj10LnNraXBFbXB0eUxpbmVzKTtcInN0cmluZ1wiPT10eXBlb2YgdC5uZXdsaW5lJiYoeT10Lm5ld2xpbmUpO1wic3RyaW5nXCI9PXR5cGVvZiB0LnF1b3RlQ2hhciYmKHM9dC5xdW90ZUNoYXIpO1wiYm9vbGVhblwiPT10eXBlb2YgdC5oZWFkZXImJihfPXQuaGVhZGVyKTtpZihBcnJheS5pc0FycmF5KHQuY29sdW1ucykpe2lmKDA9PT10LmNvbHVtbnMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk9wdGlvbiBjb2x1bW5zIGlzIGVtcHR5XCIpO2k9dC5jb2x1bW5zfXZvaWQgMCE9PXQuZXNjYXBlQ2hhciYmKGE9dC5lc2NhcGVDaGFyK3MpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQuZXNjYXBlRm9ybXVsYWV8fHQuZXNjYXBlRm9ybXVsYWUgaW5zdGFuY2VvZiBSZWdFeHApJiYobz10LmVzY2FwZUZvcm11bGFlIGluc3RhbmNlb2YgUmVnRXhwP3QuZXNjYXBlRm9ybXVsYWU6L15bPStcXC1AXFx0XFxyXS4qJC8pfSgpO3ZhciB1PW5ldyBSZWdFeHAoUShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gaChudWxsLGUscik7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIGgoaXx8T2JqZWN0LmtleXMoZVswXSksZSxyKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJihlLmRhdGE9SlNPTi5wYXJzZShlLmRhdGEpKSxBcnJheS5pc0FycmF5KGUuZGF0YSkmJihlLmZpZWxkc3x8KGUuZmllbGRzPWUubWV0YSYmZS5tZXRhLmZpZWxkc3x8aSksZS5maWVsZHN8fChlLmZpZWxkcz1BcnJheS5pc0FycmF5KGUuZGF0YVswXSk/ZS5maWVsZHM6XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXT9PYmplY3Qua2V5cyhlLmRhdGFbMF0pOltdKSxBcnJheS5pc0FycmF5KGUuZGF0YVswXSl8fFwib2JqZWN0XCI9PXR5cGVvZiBlLmRhdGFbMF18fChlLmRhdGE9W2UuZGF0YV0pKSxoKGUuZmllbGRzfHxbXSxlLmRhdGF8fFtdLHIpO3Rocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0XCIpO2Z1bmN0aW9uIGgoZSx0LHIpe3ZhciBpPVwiXCI7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1KU09OLnBhcnNlKHQpKTt2YXIgbj1BcnJheS5pc0FycmF5KGUpJiYwPGUubGVuZ3RoLHM9IUFycmF5LmlzQXJyYXkodFswXSk7aWYobiYmXyl7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspMDxhJiYoaSs9bSksaSs9dihlW2FdLGEpOzA8dC5sZW5ndGgmJihpKz15KX1mb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHU9bj9lLmxlbmd0aDp0W29dLmxlbmd0aCxoPSExLGY9bj8wPT09T2JqZWN0LmtleXModFtvXSkubGVuZ3RoOjA9PT10W29dLmxlbmd0aDtpZihyJiYhbiYmKGg9XCJncmVlZHlcIj09PXI/XCJcIj09PXRbb10uam9pbihcIlwiKS50cmltKCk6MT09PXRbb10ubGVuZ3RoJiYwPT09dFtvXVswXS5sZW5ndGgpLFwiZ3JlZWR5XCI9PT1yJiZuKXtmb3IodmFyIGQ9W10sbD0wO2w8dTtsKyspe3ZhciBjPXM/ZVtsXTpsO2QucHVzaCh0W29dW2NdKX1oPVwiXCI9PT1kLmpvaW4oXCJcIikudHJpbSgpfWlmKCFoKXtmb3IodmFyIHA9MDtwPHU7cCsrKXswPHAmJiFmJiYoaSs9bSk7dmFyIGc9biYmcz9lW3BdOnA7aSs9dih0W29dW2ddLHApfW88dC5sZW5ndGgtMSYmKCFyfHwwPHUmJiFmKSYmKGkrPXkpfX1yZXR1cm4gaX1mdW5jdGlvbiB2KGUsdCl7aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKGUuY29uc3RydWN0b3I9PT1EYXRlKXJldHVybiBKU09OLnN0cmluZ2lmeShlKS5zbGljZSgxLDI1KTt2YXIgcj0hMTtvJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmby50ZXN0KGUpJiYoZT1cIidcIitlLHI9ITApO3ZhciBpPWUudG9TdHJpbmcoKS5yZXBsYWNlKHUsYSk7cmV0dXJuKHI9cnx8ITA9PT1ufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKGUsdCl8fEFycmF5LmlzQXJyYXkobikmJm5bdF18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoLTE8ZS5pbmRleE9mKHRbcl0pKXJldHVybiEwO3JldHVybiExfShpLGIuQkFEX0RFTElNSVRFUlMpfHwtMTxpLmluZGV4T2YobSl8fFwiIFwiPT09aS5jaGFyQXQoMCl8fFwiIFwiPT09aS5jaGFyQXQoaS5sZW5ndGgtMSkpP3MraStzOml9fX07aWYoYi5SRUNPUkRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzApLGIuVU5JVF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMSksYi5CWVRFX09SREVSX01BUks9XCJcXHVmZWZmXCIsYi5CQURfREVMSU1JVEVSUz1bXCJcXHJcIixcIlxcblwiLCdcIicsYi5CWVRFX09SREVSX01BUktdLGIuV09SS0VSU19TVVBQT1JURUQ9IW4mJiEhZi5Xb3JrZXIsYi5OT0RFX1NUUkVBTV9JTlBVVD0xLGIuTG9jYWxDaHVua1NpemU9MTA0ODU3NjAsYi5SZW1vdGVDaHVua1NpemU9NTI0Mjg4MCxiLkRlZmF1bHREZWxpbWl0ZXI9XCIsXCIsYi5QYXJzZXI9RSxiLlBhcnNlckhhbmRsZT1yLGIuTmV0d29ya1N0cmVhbWVyPWwsYi5GaWxlU3RyZWFtZXI9YyxiLlN0cmluZ1N0cmVhbWVyPXAsYi5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyPWcsZi5qUXVlcnkpe3ZhciBkPWYualF1ZXJ5O2QuZm4ucGFyc2U9ZnVuY3Rpb24obyl7dmFyIHI9by5jb25maWd8fHt9LHU9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtpZighKFwiSU5QVVRcIj09PWQodGhpcykucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSYmXCJmaWxlXCI9PT1kKHRoaXMpLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkmJmYuRmlsZVJlYWRlcil8fCF0aGlzLmZpbGVzfHwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciB0PTA7dDx0aGlzLmZpbGVzLmxlbmd0aDt0KyspdS5wdXNoKHtmaWxlOnRoaXMuZmlsZXNbdF0saW5wdXRFbGVtOnRoaXMsaW5zdGFuY2VDb25maWc6ZC5leHRlbmQoe30scil9KX0pLGUoKSx0aGlzO2Z1bmN0aW9uIGUoKXtpZigwIT09dS5sZW5ndGgpe3ZhciBlLHQscixpLG49dVswXTtpZihKKG8uYmVmb3JlKSl7dmFyIHM9by5iZWZvcmUobi5maWxlLG4uaW5wdXRFbGVtKTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcyl7aWYoXCJhYm9ydFwiPT09cy5hY3Rpb24pcmV0dXJuIGU9XCJBYm9ydEVycm9yXCIsdD1uLmZpbGUscj1uLmlucHV0RWxlbSxpPXMucmVhc29uLHZvaWQoSihvLmVycm9yKSYmby5lcnJvcih7bmFtZTplfSx0LHIsaSkpO2lmKFwic2tpcFwiPT09cy5hY3Rpb24pcmV0dXJuIHZvaWQgaCgpO1wib2JqZWN0XCI9PXR5cGVvZiBzLmNvbmZpZyYmKG4uaW5zdGFuY2VDb25maWc9ZC5leHRlbmQobi5pbnN0YW5jZUNvbmZpZyxzLmNvbmZpZykpfWVsc2UgaWYoXCJza2lwXCI9PT1zKXJldHVybiB2b2lkIGgoKX12YXIgYT1uLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO24uaW5zdGFuY2VDb25maWcuY29tcGxldGU9ZnVuY3Rpb24oZSl7SihhKSYmYShlLG4uZmlsZSxuLmlucHV0RWxlbSksaCgpfSxiLnBhcnNlKG4uZmlsZSxuLmluc3RhbmNlQ29uZmlnKX1lbHNlIEooby5jb21wbGV0ZSkmJm8uY29tcGxldGUoKX1mdW5jdGlvbiBoKCl7dS5zcGxpY2UoMCwxKSxlKCl9fX1mdW5jdGlvbiBoKGUpe3RoaXMuX2hhbmRsZT1udWxsLHRoaXMuX2ZpbmlzaGVkPSExLHRoaXMuX2NvbXBsZXRlZD0hMSx0aGlzLl9oYWx0ZWQ9ITEsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLl9iYXNlSW5kZXg9MCx0aGlzLl9wYXJ0aWFsTGluZT1cIlwiLHRoaXMuX3Jvd0NvdW50PTAsdGhpcy5fc3RhcnQ9MCx0aGlzLl9uZXh0Q2h1bms9bnVsbCx0aGlzLmlzRmlyc3RDaHVuaz0hMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319LGZ1bmN0aW9uKGUpe3ZhciB0PXcoZSk7dC5jaHVua1NpemU9cGFyc2VJbnQodC5jaHVua1NpemUpLGUuc3RlcHx8ZS5jaHVua3x8KHQuY2h1bmtTaXplPW51bGwpO3RoaXMuX2hhbmRsZT1uZXcgcih0KSwodGhpcy5faGFuZGxlLnN0cmVhbWVyPXRoaXMpLl9jb25maWc9dH0uY2FsbCh0aGlzLGUpLHRoaXMucGFyc2VDaHVuaz1mdW5jdGlvbihlLHQpe2lmKHRoaXMuaXNGaXJzdENodW5rJiZKKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSl7dmFyIHI9dGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoZSk7dm9pZCAwIT09ciYmKGU9cil9dGhpcy5pc0ZpcnN0Q2h1bms9ITEsdGhpcy5faGFsdGVkPSExO3ZhciBpPXRoaXMuX3BhcnRpYWxMaW5lK2U7dGhpcy5fcGFydGlhbExpbmU9XCJcIjt2YXIgbj10aGlzLl9oYW5kbGUucGFyc2UoaSx0aGlzLl9iYXNlSW5kZXgsIXRoaXMuX2ZpbmlzaGVkKTtpZighdGhpcy5faGFuZGxlLnBhdXNlZCgpJiYhdGhpcy5faGFuZGxlLmFib3J0ZWQoKSl7dmFyIHM9bi5tZXRhLmN1cnNvcjt0aGlzLl9maW5pc2hlZHx8KHRoaXMuX3BhcnRpYWxMaW5lPWkuc3Vic3RyaW5nKHMtdGhpcy5fYmFzZUluZGV4KSx0aGlzLl9iYXNlSW5kZXg9cyksbiYmbi5kYXRhJiYodGhpcy5fcm93Q291bnQrPW4uZGF0YS5sZW5ndGgpO3ZhciBhPXRoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmdGhpcy5fcm93Q291bnQ+PXRoaXMuX2NvbmZpZy5wcmV2aWV3O2lmKG8pZi5wb3N0TWVzc2FnZSh7cmVzdWx0czpuLHdvcmtlcklkOmIuV09SS0VSX0lELGZpbmlzaGVkOmF9KTtlbHNlIGlmKEoodGhpcy5fY29uZmlnLmNodW5rKSYmIXQpe2lmKHRoaXMuX2NvbmZpZy5jaHVuayhuLHRoaXMuX2hhbmRsZSksdGhpcy5faGFuZGxlLnBhdXNlZCgpfHx0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXJldHVybiB2b2lkKHRoaXMuX2hhbHRlZD0hMCk7bj12b2lkIDAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXZvaWQgMH1yZXR1cm4gdGhpcy5fY29uZmlnLnN0ZXB8fHRoaXMuX2NvbmZpZy5jaHVua3x8KHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChuLmRhdGEpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnM9dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQobi5lcnJvcnMpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhPW4ubWV0YSksdGhpcy5fY29tcGxldGVkfHwhYXx8IUoodGhpcy5fY29uZmlnLmNvbXBsZXRlKXx8biYmbi5tZXRhLmFib3J0ZWR8fCh0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLHRoaXMuX2lucHV0KSx0aGlzLl9jb21wbGV0ZWQ9ITApLGF8fG4mJm4ubWV0YS5wYXVzZWR8fHRoaXMuX25leHRDaHVuaygpLG59dGhpcy5faGFsdGVkPSEwfSx0aGlzLl9zZW5kRXJyb3I9ZnVuY3Rpb24oZSl7Sih0aGlzLl9jb25maWcuZXJyb3IpP3RoaXMuX2NvbmZpZy5lcnJvcihlKTpvJiZ0aGlzLl9jb25maWcuZXJyb3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELGVycm9yOmUsZmluaXNoZWQ6ITF9KX19ZnVuY3Rpb24gbChlKXt2YXIgaTsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5SZW1vdGVDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpLHRoaXMuX25leHRDaHVuaz1uP2Z1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCksdGhpcy5fY2h1bmtMb2FkZWQoKX06ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7aWYodGhpcy5fZmluaXNoZWQpdGhpcy5fY2h1bmtMb2FkZWQoKTtlbHNle2lmKGk9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMmJihpLndpdGhDcmVkZW50aWFscz10aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKSxufHwoaS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKSxpLm9wZW4odGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHk/XCJQT1NUXCI6XCJHRVRcIix0aGlzLl9pbnB1dCwhbiksdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpe3ZhciBlPXRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO2Zvcih2YXIgdCBpbiBlKWkuc2V0UmVxdWVzdEhlYWRlcih0LGVbdF0pfWlmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciByPXRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUtMTtpLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrdGhpcy5fc3RhcnQrXCItXCIrcil9dHJ5e2kuc2VuZCh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keSl9Y2F0Y2goZSl7dGhpcy5fY2h1bmtFcnJvcihlLm1lc3NhZ2UpfW4mJjA9PT1pLnN0YXR1cyYmdGhpcy5fY2h1bmtFcnJvcigpfX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oKXs0PT09aS5yZWFkeVN0YXRlJiYoaS5zdGF0dXM8MjAwfHw0MDA8PWkuc3RhdHVzP3RoaXMuX2NodW5rRXJyb3IoKToodGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemU/dGhpcy5fY29uZmlnLmNodW5rU2l6ZTppLnJlc3BvbnNlVGV4dC5sZW5ndGgsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj1mdW5jdGlvbihlKXt2YXIgdD1lLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtpZihudWxsPT09dClyZXR1cm4tMTtyZXR1cm4gcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSkpfShpKSx0aGlzLnBhcnNlQ2h1bmsoaS5yZXNwb25zZVRleHQpKSl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9aS5zdGF0dXNUZXh0fHxlO3RoaXMuX3NlbmRFcnJvcihuZXcgRXJyb3IodCkpfX1mdW5jdGlvbiBjKGUpe3ZhciBpLG47KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuTG9jYWxDaHVua1NpemUpLGguY2FsbCh0aGlzLGUpO3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyO3RoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsbj1lLnNsaWNlfHxlLndlYmtpdFNsaWNlfHxlLm1velNsaWNlLHM/KChpPW5ldyBGaWxlUmVhZGVyKS5vbmxvYWQ9dih0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxpLm9uZXJyb3I9dih0aGlzLl9jaHVua0Vycm9yLHRoaXMpKTppPW5ldyBGaWxlUmVhZGVyU3luYyx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiYhKHRoaXMuX3Jvd0NvdW50PHRoaXMuX2NvbmZpZy5wcmV2aWV3KXx8dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2lucHV0O2lmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciB0PU1hdGgubWluKHRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5faW5wdXQuc2l6ZSk7ZT1uLmNhbGwoZSx0aGlzLl9zdGFydCx0KX12YXIgcj1pLnJlYWRBc1RleHQoZSx0aGlzLl9jb25maWcuZW5jb2RpbmcpO3N8fHRoaXMuX2NodW5rTG9hZGVkKHt0YXJnZXQ6e3Jlc3VsdDpyfX0pfSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbihlKXt0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PXRoaXMuX2lucHV0LnNpemUsdGhpcy5wYXJzZUNodW5rKGUudGFyZ2V0LnJlc3VsdCl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oKXt0aGlzLl9zZW5kRXJyb3IoaS5lcnJvcil9fWZ1bmN0aW9uIHAoZSl7dmFyIHI7aC5jYWxsKHRoaXMsZT1lfHx7fSksdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2ZpbmlzaGVkKXt2YXIgZSx0PXRoaXMuX2NvbmZpZy5jaHVua1NpemU7cmV0dXJuIHQ/KGU9ci5zdWJzdHJpbmcoMCx0KSxyPXIuc3Vic3RyaW5nKHQpKTooZT1yLHI9XCJcIiksdGhpcy5fZmluaXNoZWQ9IXIsdGhpcy5wYXJzZUNodW5rKGUpfX19ZnVuY3Rpb24gZyhlKXtoLmNhbGwodGhpcyxlPWV8fHt9KTt2YXIgdD1bXSxyPSEwLGk9ITE7dGhpcy5wYXVzZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnBhdXNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5wYXVzZSgpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe2gucHJvdG90eXBlLnJlc3VtZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucmVzdW1lKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5faW5wdXQub24oXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQub24oXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0Lm9uKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMuX2NoZWNrSXNGaW5pc2hlZD1mdW5jdGlvbigpe2kmJjE9PT10Lmxlbmd0aCYmKHRoaXMuX2ZpbmlzaGVkPSEwKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdC5sZW5ndGg/dGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSk6cj0hMH0sdGhpcy5fc3RyZWFtRGF0YT12KGZ1bmN0aW9uKGUpe3RyeXt0LnB1c2goXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpLHImJihyPSExLHRoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHRoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpKX1jYXRjaChlKXt0aGlzLl9zdHJlYW1FcnJvcihlKX19LHRoaXMpLHRoaXMuX3N0cmVhbUVycm9yPXYoZnVuY3Rpb24oZSl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLHRoaXMuX3NlbmRFcnJvcihlKX0sdGhpcyksdGhpcy5fc3RyZWFtRW5kPXYoZnVuY3Rpb24oKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksaT0hMCx0aGlzLl9zdHJlYW1EYXRhKFwiXCIpfSx0aGlzKSx0aGlzLl9zdHJlYW1DbGVhblVwPXYoZnVuY3Rpb24oKXt0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcyl9ZnVuY3Rpb24gcihtKXt2YXIgYSxvLHUsaT1NYXRoLnBvdygyLDUzKSxuPS1pLHM9L15cXHMqLT8oXFxkK1xcLj98XFwuXFxkK3xcXGQrXFwuXFxkKykoW2VFXVstK10/XFxkKyk/XFxzKiQvLGg9L14oKFxcZHs0fS1bMDFdXFxkLVswLTNdXFxkVFswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkXFwuXFxkKyhbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpfChcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZChbKy1dWzAtMl1cXGQ6WzAtNV1cXGR8WikpKSQvLHQ9dGhpcyxyPTAsZj0wLGQ9ITEsZT0hMSxsPVtdLGM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319O2lmKEoobS5zdGVwKSl7dmFyIHA9bS5zdGVwO20uc3RlcD1mdW5jdGlvbihlKXtpZihjPWUsXygpKWcoKTtlbHNle2lmKGcoKSwwPT09Yy5kYXRhLmxlbmd0aClyZXR1cm47cis9ZS5kYXRhLmxlbmd0aCxtLnByZXZpZXcmJnI+bS5wcmV2aWV3P28uYWJvcnQoKTooYy5kYXRhPWMuZGF0YVswXSxwKGMsdCkpfX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImdyZWVkeVwiPT09bS5za2lwRW1wdHlMaW5lcz9cIlwiPT09ZS5qb2luKFwiXCIpLnRyaW0oKToxPT09ZS5sZW5ndGgmJjA9PT1lWzBdLmxlbmd0aH1mdW5jdGlvbiBnKCl7cmV0dXJuIGMmJnUmJihrKFwiRGVsaW1pdGVyXCIsXCJVbmRldGVjdGFibGVEZWxpbWl0ZXJcIixcIlVuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvICdcIitiLkRlZmF1bHREZWxpbWl0ZXIrXCInXCIpLHU9ITEpLG0uc2tpcEVtcHR5TGluZXMmJihjLmRhdGE9Yy5kYXRhLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4heShlKX0pKSxfKCkmJmZ1bmN0aW9uKCl7aWYoIWMpcmV0dXJuO2Z1bmN0aW9uIGUoZSx0KXtKKG0udHJhbnNmb3JtSGVhZGVyKSYmKGU9bS50cmFuc2Zvcm1IZWFkZXIoZSx0KSksbC5wdXNoKGUpfWlmKEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKSl7Zm9yKHZhciB0PTA7XygpJiZ0PGMuZGF0YS5sZW5ndGg7dCsrKWMuZGF0YVt0XS5mb3JFYWNoKGUpO2MuZGF0YS5zcGxpY2UoMCwxKX1lbHNlIGMuZGF0YS5mb3JFYWNoKGUpfSgpLGZ1bmN0aW9uKCl7aWYoIWN8fCFtLmhlYWRlciYmIW0uZHluYW1pY1R5cGluZyYmIW0udHJhbnNmb3JtKXJldHVybiBjO2Z1bmN0aW9uIGUoZSx0KXt2YXIgcixpPW0uaGVhZGVyP3t9OltdO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXIscz1lW3JdO20uaGVhZGVyJiYobj1yPj1sLmxlbmd0aD9cIl9fcGFyc2VkX2V4dHJhXCI6bFtyXSksbS50cmFuc2Zvcm0mJihzPW0udHJhbnNmb3JtKHMsbikpLHM9dihuLHMpLFwiX19wYXJzZWRfZXh0cmFcIj09PW4/KGlbbl09aVtuXXx8W10saVtuXS5wdXNoKHMpKTppW25dPXN9cmV0dXJuIG0uaGVhZGVyJiYocj5sLmxlbmd0aD9rKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vTWFueUZpZWxkc1wiLFwiVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIityLGYrdCk6cjxsLmxlbmd0aCYmayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb0Zld0ZpZWxkc1wiLFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK3IsZit0KSksaX12YXIgdD0xOyFjLmRhdGEubGVuZ3RofHxBcnJheS5pc0FycmF5KGMuZGF0YVswXSk/KGMuZGF0YT1jLmRhdGEubWFwKGUpLHQ9Yy5kYXRhLmxlbmd0aCk6Yy5kYXRhPWUoYy5kYXRhLDApO20uaGVhZGVyJiZjLm1ldGEmJihjLm1ldGEuZmllbGRzPWwpO3JldHVybiBmKz10LGN9KCl9ZnVuY3Rpb24gXygpe3JldHVybiBtLmhlYWRlciYmMD09PWwubGVuZ3RofWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm4gcj1lLG0uZHluYW1pY1R5cGluZ0Z1bmN0aW9uJiZ2b2lkIDA9PT1tLmR5bmFtaWNUeXBpbmdbcl0mJihtLmR5bmFtaWNUeXBpbmdbcl09bS5keW5hbWljVHlwaW5nRnVuY3Rpb24ocikpLCEwPT09KG0uZHluYW1pY1R5cGluZ1tyXXx8bS5keW5hbWljVHlwaW5nKT9cInRydWVcIj09PXR8fFwiVFJVRVwiPT09dHx8XCJmYWxzZVwiIT09dCYmXCJGQUxTRVwiIT09dCYmKGZ1bmN0aW9uKGUpe2lmKHMudGVzdChlKSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtpZihuPHQmJnQ8aSlyZXR1cm4hMH1yZXR1cm4hMX0odCk/cGFyc2VGbG9hdCh0KTpoLnRlc3QodCk/bmV3IERhdGUodCk6XCJcIj09PXQ/bnVsbDp0KTp0O3ZhciByfWZ1bmN0aW9uIGsoZSx0LHIsaSl7dmFyIG49e3R5cGU6ZSxjb2RlOnQsbWVzc2FnZTpyfTt2b2lkIDAhPT1pJiYobi5yb3c9aSksYy5lcnJvcnMucHVzaChuKX10aGlzLnBhcnNlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgaT1tLnF1b3RlQ2hhcnx8J1wiJztpZihtLm5ld2xpbmV8fChtLm5ld2xpbmU9ZnVuY3Rpb24oZSx0KXtlPWUuc3Vic3RyaW5nKDAsMTA0ODU3Nik7dmFyIHI9bmV3IFJlZ0V4cChRKHQpK1wiKFteXSo/KVwiK1EodCksXCJnbVwiKSxpPShlPWUucmVwbGFjZShyLFwiXCIpKS5zcGxpdChcIlxcclwiKSxuPWUuc3BsaXQoXCJcXG5cIikscz0xPG4ubGVuZ3RoJiZuWzBdLmxlbmd0aDxpWzBdLmxlbmd0aDtpZigxPT09aS5sZW5ndGh8fHMpcmV0dXJuXCJcXG5cIjtmb3IodmFyIGE9MCxvPTA7bzxpLmxlbmd0aDtvKyspXCJcXG5cIj09PWlbb11bMF0mJmErKztyZXR1cm4gYT49aS5sZW5ndGgvMj9cIlxcclxcblwiOlwiXFxyXCJ9KGUsaSkpLHU9ITEsbS5kZWxpbWl0ZXIpSihtLmRlbGltaXRlcikmJihtLmRlbGltaXRlcj1tLmRlbGltaXRlcihlKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyKTtlbHNle3ZhciBuPWZ1bmN0aW9uKGUsdCxyLGksbil7dmFyIHMsYSxvLHU7bj1ufHxbXCIsXCIsXCJcXHRcIixcInxcIixcIjtcIixiLlJFQ09SRF9TRVAsYi5VTklUX1NFUF07Zm9yKHZhciBoPTA7aDxuLmxlbmd0aDtoKyspe3ZhciBmPW5baF0sZD0wLGw9MCxjPTA7bz12b2lkIDA7Zm9yKHZhciBwPW5ldyBFKHtjb21tZW50czppLGRlbGltaXRlcjpmLG5ld2xpbmU6dCxwcmV2aWV3OjEwfSkucGFyc2UoZSksZz0wO2c8cC5kYXRhLmxlbmd0aDtnKyspaWYociYmeShwLmRhdGFbZ10pKWMrKztlbHNle3ZhciBfPXAuZGF0YVtnXS5sZW5ndGg7bCs9Xyx2b2lkIDAhPT1vPzA8XyYmKGQrPU1hdGguYWJzKF8tbyksbz1fKTpvPV99MDxwLmRhdGEubGVuZ3RoJiYobC89cC5kYXRhLmxlbmd0aC1jKSwodm9pZCAwPT09YXx8ZDw9YSkmJih2b2lkIDA9PT11fHx1PGwpJiYxLjk5PGwmJihhPWQscz1mLHU9bCl9cmV0dXJue3N1Y2Nlc3NmdWw6ISEobS5kZWxpbWl0ZXI9cyksYmVzdERlbGltaXRlcjpzfX0oZSxtLm5ld2xpbmUsbS5za2lwRW1wdHlMaW5lcyxtLmNvbW1lbnRzLG0uZGVsaW1pdGVyc1RvR3Vlc3MpO24uc3VjY2Vzc2Z1bD9tLmRlbGltaXRlcj1uLmJlc3REZWxpbWl0ZXI6KHU9ITAsbS5kZWxpbWl0ZXI9Yi5EZWZhdWx0RGVsaW1pdGVyKSxjLm1ldGEuZGVsaW1pdGVyPW0uZGVsaW1pdGVyfXZhciBzPXcobSk7cmV0dXJuIG0ucHJldmlldyYmbS5oZWFkZXImJnMucHJldmlldysrLGE9ZSxvPW5ldyBFKHMpLGM9by5wYXJzZShhLHQsciksZygpLGQ/e21ldGE6e3BhdXNlZDohMH19OmN8fHttZXRhOntwYXVzZWQ6ITF9fX0sdGhpcy5wYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5wYXVzZT1mdW5jdGlvbigpe2Q9ITAsby5hYm9ydCgpLGE9SihtLmNodW5rKT9cIlwiOmEuc3Vic3RyaW5nKG8uZ2V0Q2hhckluZGV4KCkpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3Quc3RyZWFtZXIuX2hhbHRlZD8oZD0hMSx0LnN0cmVhbWVyLnBhcnNlQ2h1bmsoYSwhMCkpOnNldFRpbWVvdXQodC5yZXN1bWUsMyl9LHRoaXMuYWJvcnRlZD1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7ZT0hMCxvLmFib3J0KCksYy5tZXRhLmFib3J0ZWQ9ITAsSihtLmNvbXBsZXRlKSYmbS5jb21wbGV0ZShjKSxhPVwiXCJ9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gRShqKXt2YXIgeixNPShqPWp8fHt9KS5kZWxpbWl0ZXIsUD1qLm5ld2xpbmUsVT1qLmNvbW1lbnRzLHE9ai5zdGVwLE49ai5wcmV2aWV3LEI9ai5mYXN0TW9kZSxLPXo9dm9pZCAwPT09ai5xdW90ZUNoYXJ8fG51bGw9PT1qLnF1b3RlQ2hhcj8nXCInOmoucXVvdGVDaGFyO2lmKHZvaWQgMCE9PWouZXNjYXBlQ2hhciYmKEs9ai5lc2NhcGVDaGFyKSwoXCJzdHJpbmdcIiE9dHlwZW9mIE18fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihNKSkmJihNPVwiLFwiKSxVPT09TSl0aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGNoYXJhY3RlciBzYW1lIGFzIGRlbGltaXRlclwiKTshMD09PVU/VT1cIiNcIjooXCJzdHJpbmdcIiE9dHlwZW9mIFV8fC0xPGIuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihVKSkmJihVPSExKSxcIlxcblwiIT09UCYmXCJcXHJcIiE9PVAmJlwiXFxyXFxuXCIhPT1QJiYoUD1cIlxcblwiKTt2YXIgVz0wLEg9ITE7dGhpcy5wYXJzZT1mdW5jdGlvbihpLHQscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIHN0cmluZ1wiKTt2YXIgbj1pLmxlbmd0aCxlPU0ubGVuZ3RoLHM9UC5sZW5ndGgsYT1VLmxlbmd0aCxvPUoocSksdT1bXSxoPVtdLGY9W10sZD1XPTA7aWYoIWkpcmV0dXJuIEwoKTtpZihqLmhlYWRlciYmIXQpe3ZhciBsPWkuc3BsaXQoUClbMF0uc3BsaXQoTSksYz1bXSxwPXt9LGc9ITE7Zm9yKHZhciBfIGluIGwpe3ZhciBtPWxbX107SihqLnRyYW5zZm9ybUhlYWRlcikmJihtPWoudHJhbnNmb3JtSGVhZGVyKG0sXykpO3ZhciB5PW0sdj1wW21dfHwwO2ZvcigwPHYmJihnPSEwLHk9bStcIl9cIit2KSxwW21dPXYrMTtjLmluY2x1ZGVzKHkpOyl5PXkrXCJfXCIrdjtjLnB1c2goeSl9aWYoZyl7dmFyIGs9aS5zcGxpdChQKTtrWzBdPWMuam9pbihNKSxpPWsuam9pbihQKX19aWYoQnx8ITEhPT1CJiYtMT09PWkuaW5kZXhPZih6KSl7Zm9yKHZhciBiPWkuc3BsaXQoUCksRT0wO0U8Yi5sZW5ndGg7RSsrKXtpZihmPWJbRV0sVys9Zi5sZW5ndGgsRSE9PWIubGVuZ3RoLTEpVys9UC5sZW5ndGg7ZWxzZSBpZihyKXJldHVybiBMKCk7aWYoIVV8fGYuc3Vic3RyaW5nKDAsYSkhPT1VKXtpZihvKXtpZih1PVtdLEkoZi5zcGxpdChNKSksRigpLEgpcmV0dXJuIEwoKX1lbHNlIEkoZi5zcGxpdChNKSk7aWYoTiYmTjw9RSlyZXR1cm4gdT11LnNsaWNlKDAsTiksTCghMCl9fXJldHVybiBMKCl9Zm9yKHZhciB3PWkuaW5kZXhPZihNLFcpLFI9aS5pbmRleE9mKFAsVyksQz1uZXcgUmVnRXhwKFEoSykrUSh6KSxcImdcIiksUz1pLmluZGV4T2YoeixXKTs7KWlmKGlbV10hPT16KWlmKFUmJjA9PT1mLmxlbmd0aCYmaS5zdWJzdHJpbmcoVyxXK2EpPT09VSl7aWYoLTE9PT1SKXJldHVybiBMKCk7Vz1SK3MsUj1pLmluZGV4T2YoUCxXKSx3PWkuaW5kZXhPZihNLFcpfWVsc2UgaWYoLTEhPT13JiYodzxSfHwtMT09PVIpKWYucHVzaChpLnN1YnN0cmluZyhXLHcpKSxXPXcrZSx3PWkuaW5kZXhPZihNLFcpO2Vsc2V7aWYoLTE9PT1SKWJyZWFrO2lmKGYucHVzaChpLnN1YnN0cmluZyhXLFIpKSxEKFIrcyksbyYmKEYoKSxIKSlyZXR1cm4gTCgpO2lmKE4mJnUubGVuZ3RoPj1OKXJldHVybiBMKCEwKX1lbHNlIGZvcihTPVcsVysrOzspe2lmKC0xPT09KFM9aS5pbmRleE9mKHosUysxKSkpcmV0dXJuIHJ8fGgucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJNaXNzaW5nUXVvdGVzXCIsbWVzc2FnZTpcIlF1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWRcIixyb3c6dS5sZW5ndGgsaW5kZXg6V30pLFQoKTtpZihTPT09bi0xKXJldHVybiBUKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKTtpZih6IT09S3x8aVtTKzFdIT09Syl7aWYoej09PUt8fDA9PT1TfHxpW1MtMV0hPT1LKXstMSE9PXcmJnc8UysxJiYodz1pLmluZGV4T2YoTSxTKzEpKSwtMSE9PVImJlI8UysxJiYoUj1pLmluZGV4T2YoUCxTKzEpKTt2YXIgTz1BKC0xPT09Uj93Ok1hdGgubWluKHcsUikpO2lmKGkuc3Vic3RyKFMrMStPLGUpPT09TSl7Zi5wdXNoKGkuc3Vic3RyaW5nKFcsUykucmVwbGFjZShDLHopKSxpW1c9UysxK08rZV0hPT16JiYoUz1pLmluZGV4T2YoeixXKSksdz1pLmluZGV4T2YoTSxXKSxSPWkuaW5kZXhPZihQLFcpO2JyZWFrfXZhciB4PUEoUik7aWYoaS5zdWJzdHJpbmcoUysxK3gsUysxK3grcyk9PT1QKXtpZihmLnB1c2goaS5zdWJzdHJpbmcoVyxTKS5yZXBsYWNlKEMseikpLEQoUysxK3grcyksdz1pLmluZGV4T2YoTSxXKSxTPWkuaW5kZXhPZih6LFcpLG8mJihGKCksSCkpcmV0dXJuIEwoKTtpZihOJiZ1Lmxlbmd0aD49TilyZXR1cm4gTCghMCk7YnJlYWt9aC5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIkludmFsaWRRdW90ZXNcIixtZXNzYWdlOlwiVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZFwiLHJvdzp1Lmxlbmd0aCxpbmRleDpXfSksUysrfX1lbHNlIFMrK31yZXR1cm4gVCgpO2Z1bmN0aW9uIEkoZSl7dS5wdXNoKGUpLGQ9V31mdW5jdGlvbiBBKGUpe3ZhciB0PTA7aWYoLTEhPT1lKXt2YXIgcj1pLnN1YnN0cmluZyhTKzEsZSk7ciYmXCJcIj09PXIudHJpbSgpJiYodD1yLmxlbmd0aCl9cmV0dXJuIHR9ZnVuY3Rpb24gVChlKXtyZXR1cm4gcnx8KHZvaWQgMD09PWUmJihlPWkuc3Vic3RyaW5nKFcpKSxmLnB1c2goZSksVz1uLEkoZiksbyYmRigpKSxMKCl9ZnVuY3Rpb24gRChlKXtXPWUsSShmKSxmPVtdLFI9aS5pbmRleE9mKFAsVyl9ZnVuY3Rpb24gTChlKXtyZXR1cm57ZGF0YTp1LGVycm9yczpoLG1ldGE6e2RlbGltaXRlcjpNLGxpbmVicmVhazpQLGFib3J0ZWQ6SCx0cnVuY2F0ZWQ6ISFlLGN1cnNvcjpkKyh0fHwwKX19fWZ1bmN0aW9uIEYoKXtxKEwoKSksdT1bXSxoPVtdfX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe0g9ITB9LHRoaXMuZ2V0Q2hhckluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIFd9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5kYXRhLHI9YVt0LndvcmtlcklkXSxpPSExO2lmKHQuZXJyb3Ipci51c2VyRXJyb3IodC5lcnJvcix0LmZpbGUpO2Vsc2UgaWYodC5yZXN1bHRzJiZ0LnJlc3VsdHMuZGF0YSl7dmFyIG49e2Fib3J0OmZ1bmN0aW9uKCl7aT0hMCxtKHQud29ya2VySWQse2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e2Fib3J0ZWQ6ITB9fSl9LHBhdXNlOnkscmVzdW1lOnl9O2lmKEooci51c2VyU3RlcCkpe2Zvcih2YXIgcz0wO3M8dC5yZXN1bHRzLmRhdGEubGVuZ3RoJiYoci51c2VyU3RlcCh7ZGF0YTp0LnJlc3VsdHMuZGF0YVtzXSxlcnJvcnM6dC5yZXN1bHRzLmVycm9ycyxtZXRhOnQucmVzdWx0cy5tZXRhfSxuKSwhaSk7cysrKTtkZWxldGUgdC5yZXN1bHRzfWVsc2UgSihyLnVzZXJDaHVuaykmJihyLnVzZXJDaHVuayh0LnJlc3VsdHMsbix0LmZpbGUpLGRlbGV0ZSB0LnJlc3VsdHMpfXQuZmluaXNoZWQmJiFpJiZtKHQud29ya2VySWQsdC5yZXN1bHRzKX1mdW5jdGlvbiBtKGUsdCl7dmFyIHI9YVtlXTtKKHIudXNlckNvbXBsZXRlKSYmci51c2VyQ29tcGxldGUodCksci50ZXJtaW5hdGUoKSxkZWxldGUgYVtlXX1mdW5jdGlvbiB5KCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKX1mdW5jdGlvbiB3KGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O2Zvcih2YXIgciBpbiBlKXRbcl09dyhlW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIEooZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1yZXR1cm4gbyYmKGYub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YTt2b2lkIDA9PT1iLldPUktFUl9JRCYmdCYmKGIuV09SS0VSX0lEPXQud29ya2VySWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmlucHV0KWYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKSxmaW5pc2hlZDohMH0pO2Vsc2UgaWYoZi5GaWxlJiZ0LmlucHV0IGluc3RhbmNlb2YgRmlsZXx8dC5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIHI9Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKTtyJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOnIsZmluaXNoZWQ6ITB9KX19KSwobC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWwsKGMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1jLChwLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHAucHJvdG90eXBlKSkuY29uc3RydWN0b3I9cCwoZy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShoLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWcsYn0pOyIsIi8vIERlZmluZSBhIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSByb3V0ZSBkYXRhXG5sZXQgZ2xvYmFsUm91dGVEYXRhID0ge1xuICAgIHN0b3BzOiBbXSxcbn07XG4vLyBGdW5jdGlvbiB0byBzZXQgdGhlIHJvdXRlIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBzZXRSb3V0ZURhdGEocm91dGVEYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHJvdXRlIGRhdGE6XCIsIHJvdXRlRGF0YSk7XG4gICAgZ2xvYmFsUm91dGVEYXRhID0gcm91dGVEYXRhO1xufVxuLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSByb3V0ZSBkYXRhXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyByb3V0ZSBkYXRhOlwiLCBnbG9iYWxSb3V0ZURhdGEpO1xuICAgIHJldHVybiBnbG9iYWxSb3V0ZURhdGE7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEdlb2NvZGVSZXN1bHRzIH0gZnJvbSBcIi4vc2VydmljZXMvZ2VvY29kZVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUm91dGUgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5Um91dGVTdW1tYXJ5IH0gZnJvbSBcIi4vc2VydmljZXMvcm91dGVTdW1tYXJ5XCI7XG5pbXBvcnQgeyBhZGRNYXJrZXJzT25NYXAgfSBmcm9tIFwiLi9zZXJ2aWNlcy9tYXBNYXJrZXJzXCI7XG5leHBvcnQgY29uc3QgcGxvdFJvdXRlT25NYXAgPSAobWFwLCBzdG9wcykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZ2VvY29kZVJlc3VsdHMgPSB5aWVsZCBnZXRHZW9jb2RlUmVzdWx0cyhzdG9wcyk7XG4gICAgY29uc3QgZGlyZWN0aW9uc1Jlc3VsdCA9IHlpZWxkIGNhbGN1bGF0ZVJvdXRlKGdlb2NvZGVSZXN1bHRzKTtcbiAgICBjb25zdCBkaXJlY3Rpb25zUmVuZGVyZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgICAgbWFwLFxuICAgICAgICBzdXBwcmVzc01hcmtlcnM6IHRydWUsXG4gICAgfSk7XG4gICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMoZGlyZWN0aW9uc1Jlc3VsdCk7XG4gICAgY29uc3Qgcm91dGUgPSBkaXJlY3Rpb25zUmVzdWx0LnJvdXRlc1swXTtcbiAgICBjb25zb2xlLmxvZyhcIlJvdXRlOlwiLCByb3V0ZSk7XG4gICAgY29uc3Qgc3VtbWFyeVBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0ZVN0YXR1c1BhbmVsXCIpO1xuICAgIGlmIChzdW1tYXJ5UGFuZWwpIHtcbiAgICAgICAgZGlzcGxheVJvdXRlU3VtbWFyeShzdW1tYXJ5UGFuZWwsIHJvdXRlLCBzdG9wcyk7XG4gICAgfVxuICAgIGFkZE1hcmtlcnNPbk1hcChtYXAsIHN0b3BzLCBnZW9jb2RlUmVzdWx0cyk7XG59KTtcbiIsImltcG9ydCB7IHBhcnNlRHVyYXRpb25UZXh0VG9NaWxsaXNlY29uZHMsIGZvcm1hdER1cmF0aW9uVGV4dCB9IGZyb20gJy4vc2VydmljZXMvZGF0ZUZvcm1hdHRlcic7XG5pbXBvcnQgeyBnZXRSb3V0ZURhdGEgfSBmcm9tICcuL2dsb2JhbERhdGEnOyAvLyBJbXBvcnQgZ2V0Um91dGVEYXRhIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVSb3V0ZSgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIC8vIFJldHJpZXZlIHRoZSByb3V0ZSBkYXRhIHVzaW5nIGdldFJvdXRlRGF0YSgpXG4gICAgY29uc3QgYnVzUm91dGVEYXRhID0gZ2V0Um91dGVEYXRhKCk7XG4gICAgLy8gQ2hlY2sgaWYgYnVzUm91dGVEYXRhIGlzIG51bGwgYW5kIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlXG4gICAgY29uc3Qgc3RvcHMgPSAoX2EgPSBidXNSb3V0ZURhdGEgPT09IG51bGwgfHwgYnVzUm91dGVEYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXNSb3V0ZURhdGEuc3RvcHMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgIGNvbnN0IHJvdXRlID0gYnVzUm91dGVEYXRhID09PSBudWxsIHx8IGJ1c1JvdXRlRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnVzUm91dGVEYXRhLnJvdXRlO1xuICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUm91dGUgZGF0YSBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIG5lY2Vzc2FyeSB2YXJpYWJsZXNcbiAgICBsZXQgY3VycmVudFN0b3BJbmRleCA9IDA7IC8vIEluZGV4IG9mIHRoZSBjdXJyZW50IHN0b3BcbiAgICBsZXQgY3VycmVudFRpbWUgPSAoX2IgPSBzdG9wc1swXS5lbmRfdGltZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbmV3IERhdGUoKTsgLy8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB0aW1lIHdpdGggdGhlIHN0YXJ0IHRpbWVcbiAgICAvLyBNYXAgdGhlIGVuZF90aW1lIGZyb20gcm91dGUgdG8gc3RvcHNcbiAgICBzdG9wcy5zbGljZSgwLCAtMSkuZm9yRWFjaCgoc3RvcCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gRXhjbHVkZSB0aGUgbGFzdCBzdG9wXG4gICAgICAgIGNvbnN0IGxlZ0R1cmF0aW9uID0gcm91dGUubGVnc1tpbmRleF0uZHVyYXRpb24udGV4dDtcbiAgICAgICAgY29uc3QgZHVyYXRpb25Jbk1pbGxpc2Vjb25kcyA9IHBhcnNlRHVyYXRpb25UZXh0VG9NaWxsaXNlY29uZHMobGVnRHVyYXRpb24pO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoY3VycmVudFRpbWUuZ2V0VGltZSgpICsgZHVyYXRpb25Jbk1pbGxpc2Vjb25kcyk7XG4gICAgICAgIHN0b3AuZW5kX3RpbWUgPSBlbmRUaW1lO1xuICAgICAgICBjdXJyZW50VGltZSA9IGVuZFRpbWU7IC8vIFVwZGF0ZSBjdXJyZW50VGltZSBmb3IgdGhlIG5leHQgc3RvcFxuICAgIH0pO1xuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcm91dGUgc3RhdHVzIHBhbmVsIHdpdGggcHJvZ3Jlc3MgYW5kIHBhc3NlbmdlciBpbmZvcm1hdGlvblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJvdXRlU3RhdHVzUGFuZWwoc3RvcCkge1xuICAgICAgICBjb25zdCBzdW1tYXJ5UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGVTdGF0dXNQYW5lbFVwZGF0ZScpO1xuICAgICAgICBpZiAoc3VtbWFyeVBhbmVsKSB7XG4gICAgICAgICAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG4gICAgICAgICAgICBzdW1tYXJ5UGFuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHJlbWFpbmluZyB0aW1lIGZvciB0aGUgY3VycmVudCBsZWdcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZWcgPSByb3V0ZS5sZWdzW2N1cnJlbnRTdG9wSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBjdXJyZW50TGVnLmR1cmF0aW9uLnZhbHVlICogMTAwMCAtIChjdXJyZW50VGltZS5nZXRUaW1lKCkgLSBzdG9wc1tjdXJyZW50U3RvcEluZGV4XS5lbmRfdGltZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb25UZXh0ID0gZm9ybWF0RHVyYXRpb25UZXh0KHJlbWFpbmluZ0R1cmF0aW9uKTtcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIGNvdW50ZG93biB0aW1lciBmb3IgdGhlIGN1cnJlbnQgbGVnXG4gICAgICAgICAgICBzdW1tYXJ5UGFuZWwuaW5uZXJIVE1MICs9IGA8cCBpZD0ncmVtYWluaW5nVGltZSc+UmVtYWluaW5nIFRpbWU6ICR7cmVtYWluaW5nRHVyYXRpb25UZXh0fTwvcD5gO1xuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgbmV4dCBzdG9wIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBzdW1tYXJ5UGFuZWwuaW5uZXJIVE1MICs9IGA8cD5OZXh0IFN0b3A6ICR7c3RvcC5uYW1lfTwvcD5gO1xuICAgICAgICAgICAgLy8gWW91IGNhbiBhbHNvIGRpc3BsYXkgb3RoZXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgcGFzc2VuZ2VyIGNvdW50cywgZGVsYXlzLCBldGMuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRnVuY3Rpb24gdG8gYW5pbWF0ZSB0aGUgaWNvbiBhbG9uZyB0aGUgcm91dGVcbiAgICAvLyBGdW5jdGlvbiB0byBhbmltYXRlIHRoZSBpY29uIGFsb25nIHRoZSByb3V0ZVxuICAgIGZ1bmN0aW9uIGFuaW1hdGVTaHV0dGxlVG9OZXh0U3RvcCgpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0b3AgPSBzdG9wc1tjdXJyZW50U3RvcEluZGV4ICsgMV07IC8vIEdldCB0aGUgbmV4dCBzdG9wXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXh0U3RvcCcsIG5leHRTdG9wKTtcbiAgICAgICAgaWYgKCFuZXh0U3RvcCB8fCBuZXh0U3RvcC5lbmRfdGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBuZXh0IHN0b3Agb3IgZW5kX3RpbWUgaXMgbnVsbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgZHVyYXRpb24gZnJvbSB0aGUgY3VycmVudCBzdG9wIHRvIHRoZSBuZXh0IHN0b3AgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvblRleHRUb01pbGxpc2Vjb25kcyhyb3V0ZS5sZWdzW2N1cnJlbnRTdG9wSW5kZXhdLmR1cmF0aW9uLnRleHQpO1xuICAgICAgICAvLyBBZnRlciByZWFjaGluZyB0aGUgbmV4dCBzdG9wLCB1cGRhdGUgdGhlIGN1cnJlbnQgc3RvcCBpbmRleCBhbmQgY3VycmVudCB0aW1lXG4gICAgICAgIGN1cnJlbnRTdG9wSW5kZXgrKztcbiAgICAgICAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShuZXh0U3RvcC5lbmRfdGltZSk7XG4gICAgICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcm91dGUgc3RhdHVzIHBhbmVsIHdpdGggdGhlIG5ldyBzdG9wIGluZm9ybWF0aW9uXG4gICAgICAgIHVwZGF0ZVJvdXRlU3RhdHVzUGFuZWwobmV4dFN0b3ApO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHJlbWFpbmluZyB0aW1lXG4gICAgICAgIGNvbnN0IHVwZGF0ZVJlbWFpbmluZ1RpbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gTWF0aC5tYXgoMCwgKGN1cnJlbnRUaW1lLmdldFRpbWUoKSAtIG5leHRTdG9wLmVuZF90aW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWVTdHJpbmcgPSBmb3JtYXREdXJhdGlvblRleHQocmVtYWluaW5nVGltZSk7XG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1haW5pbmdUaW1lJyk7XG4gICAgICAgICAgICBpZiAocmVtYWluaW5nVGltZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUaW1lRWxlbWVudC5pbm5lclRleHQgPSBgUmVtYWluaW5nIFRpbWU6ICR7cmVtYWluaW5nVGltZVN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHJlbWFpbmluZyB0aW1lIGV2ZXJ5IHNlY29uZFxuICAgICAgICB1cGRhdGVSZW1haW5pbmdUaW1lKCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWVVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVJlbWFpbmluZ1RpbWUsIDEwMDApO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgbW9yZSBzdG9wcyB0byB2aXNpdFxuICAgICAgICBpZiAoY3VycmVudFN0b3BJbmRleCA8IHN0b3BzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHN0b3BzLCBjb250aW51ZSB0aGUgYW5pbWF0aW9uIGxvb3BcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVtYWluaW5nVGltZVVwZGF0ZUludGVydmFsKTsgLy8gQ2xlYXIgdGhlIGludGVydmFsIHRvIHN0b3AgdXBkYXRpbmcgdGhlIHJlbWFpbmluZyB0aW1lXG4gICAgICAgICAgICAgICAgYW5pbWF0ZVNodXR0bGVUb05leHRTdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhbGwgc3RvcHMgaGF2ZSBiZWVuIHZpc2l0ZWQsIGVuZCB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpbXVsYXRpb24gY29tcGxldGVkLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gYnkgY2FsbGluZyB0aGUgYW5pbWF0ZVNodXR0bGVUb05leHRTdG9wIGZ1bmN0aW9uXG4gICAgYW5pbWF0ZVNodXR0bGVUb05leHRTdG9wKCk7XG59XG4iLCIvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IHRpbWUgYXMgSEg6bW1cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGUpID0+IHtcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgRGF0ZVwiO1xuICAgIH1cbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcbn07XG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGltZSBzdHJpbmcgYW5kIGNvbnZlcnQgaXQgdG8gYSBEYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZVN0cmluZ1RvRGF0ZSh0aW1lU3RyaW5nKSB7XG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWVTdHJpbmcuc3BsaXQoJzonKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgdGltZVN0cmluZyBjb250YWlucyB2YWxpZCBob3VyIGFuZCBtaW51dGUgdmFsdWVzXG4gICAgY29uc3QgaXNWYWxpZFRpbWVTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKE51bWJlcihob3VycykpICYmIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKG1pbnV0ZXMpKSAmJlxuICAgICAgICBOdW1iZXIoaG91cnMpID49IDAgJiYgTnVtYmVyKGhvdXJzKSA8IDI0ICYmXG4gICAgICAgIE51bWJlcihtaW51dGVzKSA+PSAwICYmIE51bWJlcihtaW51dGVzKSA8IDYwO1xuICAgIC8vIElmIHRoZSB0aW1lU3RyaW5nIGlzIG5vdCBpbiB0aGUgdmFsaWQgZm9ybWF0LCB0aHJvdyBhbiBlcnJvclxuICAgIGlmICghaXNWYWxpZFRpbWVTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRpbWUgc3RyaW5nJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0SG91cnMoTnVtYmVyKGhvdXJzKSwgTnVtYmVyKG1pbnV0ZXMpLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbn1cbi8vIFV0aWxpdHkgZnVuY3Rpb24gdG8gY29udmVydCBkdXJhdGlvbiB0ZXh0IHRvIG1pbGxpc2Vjb25kc1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb25UZXh0VG9NaWxsaXNlY29uZHMoZHVyYXRpb25UZXh0KSB7XG4gICAgY29uc3QgZHVyYXRpb25NYXRjaCA9IGR1cmF0aW9uVGV4dC5tYXRjaCgvKFxcZCspIG1pbnM/Lyk7XG4gICAgaWYgKGR1cmF0aW9uTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uTWF0Y2hbMV0sIDEwKTtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKiA2MCAqIDEwMDA7IC8vIENvbnZlcnQgbWludXRlcyB0byBtaWxsaXNlY29uZHNcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG4vLyBGdW5jdGlvbiB0byBmb3JtYXQgYSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXRcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREdXJhdGlvblRleHQoZHVyYXRpb24pIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyAoNjAgKiA2MCAqIDEwMDApKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gJSAoNjAgKiA2MCAqIDEwMDApKSAvICg2MCAqIDEwMDApKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gJSAoNjAgKiAxMDAwKSkgLyAxMDAwKTtcbiAgICAvLyBJZiB0aGVyZSBhcmUgaG91cnMsIGRpc3BsYXkgaW4gXCJoaDptbTpzc1wiIGZvcm1hdCwgb3RoZXJ3aXNlIGRpc3BsYXkgaW4gXCJtbTpzc1wiIGZvcm1hdFxuICAgIHJldHVybiBob3VycyA+IDBcbiAgICAgICAgPyBgJHtwYWRaZXJvKGhvdXJzKX06JHtwYWRaZXJvKG1pbnV0ZXMpfToke3BhZFplcm8oc2Vjb25kcyl9YFxuICAgICAgICA6IGAke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xufVxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFkZCBsZWFkaW5nIHplcm8gdG8gc2luZ2xlLWRpZ2l0IG51bWJlcnNcbmZ1bmN0aW9uIHBhZFplcm8obnVtKSB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlUm91dGUgPSAoZ2VvY29kZVJlc3VsdHMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgY29uc3Qgd2F5cG9pbnRzID0gZ2VvY29kZVJlc3VsdHMuc2xpY2UoMSwgZ2VvY29kZVJlc3VsdHMubGVuZ3RoIC0gMSkubWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiAoX2EgPSByZXN1bHQuZ2VvbWV0cnkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sb2NhdGlvbixcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgb3JpZ2luOiAoX2EgPSBnZW9jb2RlUmVzdWx0c1swXS5nZW9tZXRyeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxvY2F0aW9uLFxuICAgICAgICBkZXN0aW5hdGlvbjogKF9iID0gZ2VvY29kZVJlc3VsdHNbZ2VvY29kZVJlc3VsdHMubGVuZ3RoIC0gMV0uZ2VvbWV0cnkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sb2NhdGlvbixcbiAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXG4gICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0R2VvY29kZVJlc3VsdHMgPSAoc3RvcHMpID0+IHtcbiAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIGNvbnN0IGdlb2NvZGVQcm9taXNlcyA9IHN0b3BzLm1hcCgoc3RvcCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgYWRkcmVzczogc3RvcC5uYW1lIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LICYmIHJlc3VsdHNbMF0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZ2VvY29kZVByb21pc2VzKTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWRkTWFya2Vyc09uTWFwID0gKG1hcCwgc3RvcHMsIGdlb2NvZGVSZXN1bHRzKSA9PiB7XG4gICAgc3RvcHMuZm9yRWFjaCgoc3RvcCwgaW5kZXgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBpc1N0YXJ0U3RvcCA9IGluZGV4ID09PSAwO1xuICAgICAgICBjb25zdCBpc0VuZFN0b3AgPSBpbmRleCA9PT0gc3RvcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogKF9hID0gZ2VvY29kZVJlc3VsdHNbaW5kZXhdLmdlb21ldHJ5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubG9jYXRpb24sXG4gICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICB0aXRsZTogc3RvcC5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBzdG9wLm5hbWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogaXNTdGFydFN0b3BcbiAgICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMva21sL3BhZGRsZS9ncm4tY2lyY2xlLnBuZ1wiIC8vIEdyZWVuIGNpcmNsZSBpY29uIGZvciBzdGFydFxuICAgICAgICAgICAgICAgIDogaXNFbmRTdG9wXG4gICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9rbWwvcGFkZGxlL3JlZC1jaXJjbGUucG5nXCIgLy8gUmVkIGNpcmNsZSBpY29uIGZvciBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL2ttbC9wYWRkbGUveWx3LWNpcmNsZS5wbmdcIiwgLy8gWWVsbG93IGNpcmNsZSBpY29uIGZvciBvdGhlciBzdG9wc1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZGF0ZUZvcm1hdHRlclwiO1xuaW1wb3J0IHsgc2V0Um91dGVEYXRhLCBnZXRSb3V0ZURhdGEgfSBmcm9tIFwiLi4vZ2xvYmFsRGF0YVwiOyAvLyBJbXBvcnQgc2V0Um91dGVEYXRhIGZ1bmN0aW9uXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIHN1bW1hcnkgZm9yIGVhY2ggc3RvcCBhcyBhbiBvYmplY3Rcbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBzdW1tYXJ5IGRhdGEgZm9yIHRoZSBlbnRpcmUgcm91dGVcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgc3VtbWFyeSBmb3IgZWFjaCBzdG9wIGFzIGFuIG9iamVjdFxuY29uc3QgZ2VuZXJhdGVTdG9wU3VtbWFyeSA9IChzdG9wLCBsZWcsIHJvdXRlU2VnbWVudCwgY3VycmVudFRpbWUpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHN1bW1hcnkgPSB7XG4gICAgICAgIHJvdXRlU2VnbWVudCxcbiAgICAgICAgbmFtZTogc3RvcC5uYW1lLFxuICAgICAgICBzdGFydEFkZHJlc3M6IGxlZy5zdGFydF9hZGRyZXNzLFxuICAgICAgICBkdXJhdGlvblRleHQ6IChfYiA9IChfYSA9IGxlZy5kdXJhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiVW5rbm93blwiLFxuICAgICAgICBhcnJpdmFsVGltZTogY3VycmVudFRpbWUsXG4gICAgfTtcbiAgICBpZiAobGVnLmR1cmF0aW9uKSB7XG4gICAgICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoY3VycmVudFRpbWUuZ2V0VGltZSgpICsgKGxlZy5kdXJhdGlvbi52YWx1ZSB8fCAwKSAqIDEwMDApO1xuICAgICAgICBzdW1tYXJ5LmFycml2YWxUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfVxuICAgIHJldHVybiBzdW1tYXJ5O1xufTtcbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBzdW1tYXJ5IGRhdGEgZm9yIHRoZSBlbnRpcmUgcm91dGVcbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBzdW1tYXJ5IGRhdGEgZm9yIHRoZSBlbnRpcmUgcm91dGVcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJvdXRlU3VtbWFyeURhdGEgPSAocm91dGUsIHN0b3BzKSA9PiB7XG4gICAgY29uc3Qgc3VtbWFyeURhdGEgPSBbXTtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBlbnRpcmUgcm91dGVcbiAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gcm91dGUubGVncy5yZWR1Y2UoKHRvdGFsLCBsZWcpID0+IHsgdmFyIF9hOyByZXR1cm4gdG90YWwgKyAoKChfYSA9IGxlZy5kdXJhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCAwKTsgfSwgMCk7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCB0aW1lIGJhc2VkIG9uIHRoZSBlbmQgdGltZSBvZiB0aGUgbGFzdCBzdG9wXG4gICAgY29uc3QgZW5kU3RvcCA9IHN0b3BzW3N0b3BzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBlbmRTdG9wLmVuZF90aW1lO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IGVuZFRpbWUgPyBuZXcgRGF0ZShlbmRUaW1lLmdldFRpbWUoKSAtIHRvdGFsRHVyYXRpb24gKiAxMDAwKSA6IG5ldyBEYXRlKCk7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB0aW1lIHdpdGggdGhlIHN0YXJ0IHRpbWVcbiAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByb3V0ZS5sZWdzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzdG9wID0gc3RvcHNbaW5kZXhdO1xuICAgICAgICBjb25zdCBsZWcgPSByb3V0ZS5sZWdzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgcm91dGVTZWdtZW50ID0gaW5kZXggPT09IDAgPyBcIlN0YXJ0XCIgOiBgU3RvcCAke2luZGV4fWA7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBnZW5lcmF0ZVN0b3BTdW1tYXJ5KHN0b3AsIGxlZywgcm91dGVTZWdtZW50LCBjdXJyZW50VGltZSk7XG4gICAgICAgIHN1bW1hcnlEYXRhLnB1c2goc3VtbWFyeSk7XG4gICAgICAgIGlmIChsZWcuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoY3VycmVudFRpbWUuZ2V0VGltZSgpICsgKGxlZy5kdXJhdGlvbi52YWx1ZSB8fCAwKSAqIDEwMDApOyAvLyBDYWxjdWxhdGUgdGhlIGFycml2YWwgdGltZSBmb3IgdGhlIG5leHQgc3RvcFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNldCB0aGUgcm91dGUgZGF0YSBpbiB0aGUgZ2xvYmFsIHZhcmlhYmxlXG4gICAgc2V0Um91dGVEYXRhKHsgcm91dGUsIHN0b3BzIH0pO1xuICAgIHJldHVybiBzdW1tYXJ5RGF0YTtcbn07XG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRoZSByb3V0ZSBzdW1tYXJ5IGluIHRoZSBIVE1MXG5leHBvcnQgY29uc3QgZGlzcGxheVJvdXRlU3VtbWFyeSA9IChzdW1tYXJ5UGFuZWwsIHJvdXRlLCBzdG9wcykgPT4ge1xuICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICBzdW1tYXJ5UGFuZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBlbnRpcmUgcm91dGVcbiAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gcm91dGUubGVncy5yZWR1Y2UoKHRvdGFsLCBsZWcpID0+IHsgdmFyIF9hOyByZXR1cm4gdG90YWwgKyAoKChfYSA9IGxlZy5kdXJhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCAwKTsgfSwgMCk7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCB0aW1lIGJhc2VkIG9uIHRoZSBlbmQgdGltZSBvZiB0aGUgbGFzdCBzdG9wXG4gICAgY29uc3QgZW5kU3RvcCA9IHN0b3BzW3N0b3BzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBlbmRTdG9wID09PSBudWxsIHx8IGVuZFN0b3AgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVuZFN0b3AuZW5kX3RpbWU7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKGVuZFRpbWUgIT09IG51bGwgJiYgZW5kVGltZSAhPT0gdm9pZCAwID8gZW5kVGltZSA6IG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRvdGFsRHVyYXRpb24gKiAxMDAwKTtcbiAgICAvLyBEaXNwbGF5IHN0YXJ0IHRpbWVcbiAgICBzdW1tYXJ5UGFuZWwuaW5uZXJIVE1MICs9IGA8cD5TdGFydDogJHtmb3JtYXRUaW1lKHN0YXJ0VGltZSl9PC9wPmA7XG4gICAgLy8gR2VuZXJhdGUgdGhlIHN1bW1hcnkgZGF0YSBmb3IgdGhlIGVudGlyZSByb3V0ZVxuICAgIGNvbnN0IHN1bW1hcnlEYXRhID0gZ2VuZXJhdGVSb3V0ZVN1bW1hcnlEYXRhKHJvdXRlLCBzdG9wcyk7XG4gICAgY29uc29sZS5sb2coJ2dsb2JhbERhdGEnLCBnZXRSb3V0ZURhdGEoKSk7XG4gICAgLy8gRGlzcGxheSBzdG9wIGRldGFpbHMgdXNpbmcgdGhlIHN1bW1hcnlEYXRhIGFycmF5XG4gICAgc3VtbWFyeURhdGEuZm9yRWFjaCgoc3VtbWFyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHN1bW1hcnkucm91dGVTZWdtZW50ID09PSBcIlN0YXJ0XCIpIHtcbiAgICAgICAgICAgIHN1bW1hcnlQYW5lbC5pbm5lckhUTUwgKz0gYDxwPiR7c3VtbWFyeS5yb3V0ZVNlZ21lbnR9IC0gJHtzdW1tYXJ5Lm5hbWV9OiAke3N1bW1hcnkuc3RhcnRBZGRyZXNzfSAoJHtzdW1tYXJ5LmR1cmF0aW9uVGV4dH0pIC0gTGVhdmUgYXQgJHtmb3JtYXRUaW1lKHN1bW1hcnkuYXJyaXZhbFRpbWUpfTwvcD5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBzdW1tYXJ5RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBsYXN0IHN0b3AncyBhcnJpdmFsIHRpbWUgc2VwYXJhdGVseVxuICAgICAgICAgICAgc3VtbWFyeVBhbmVsLmlubmVySFRNTCArPSBgPHA+RW5kICR7c3RvcHMubGVuZ3RofSAtICR7c3VtbWFyeS5uYW1lfSAtIEFycml2aW5nIGF0ICR7Zm9ybWF0VGltZShzdW1tYXJ5LmFycml2YWxUaW1lKX08L3A+YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1bW1hcnlQYW5lbC5pbm5lckhUTUwgKz0gYDxwPiR7c3VtbWFyeS5yb3V0ZVNlZ21lbnR9IC0gJHtzdW1tYXJ5Lm5hbWV9OiAke3N1bW1hcnkuc3RhcnRBZGRyZXNzfSAoJHtzdW1tYXJ5LmR1cmF0aW9uVGV4dH0pIC0gQXJyaXZpbmcgYXQgJHtmb3JtYXRUaW1lKHN1bW1hcnkuYXJyaXZhbFRpbWUpfTwvcD5gO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcbmltcG9ydCB7IHBhcnNlVGltZVN0cmluZ1RvRGF0ZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZUZvcm1hdHRlcic7XG5leHBvcnQgY29uc3QgaGFuZGxlQ1NWVXBsb2FkID0gKGZpbGUpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBQYXBhLnBhcnNlKGZpbGUsIHtcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9wcyA9IHJlc3VsdC5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kX3RpbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZW5kX3RpbWUgdmFsdWUgZXhpc3RzIGluIHRoZSBDU1YgYW5kIGlzIGEgdmFsaWQgdGltZSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW5kX3RpbWUgJiYgdHlwZW9mIGl0ZW0uZW5kX3RpbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRfdGltZSA9IHBhcnNlVGltZVN0cmluZ1RvRGF0ZShpdGVtLmVuZF90aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgQnVzU3RvcCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgZW5kX3RpbWUgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXNSb3V0ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BzOiBzdG9wcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1c1JvdXRlRGF0YSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShidXNSb3V0ZURhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEltcG9ydCB0aGUgbmVjZXNzYXJ5IGZpbGVzIGFuZCBtb2R1bGVzIGhlcmVcbmltcG9ydCB7IHBsb3RSb3V0ZU9uTWFwIH0gZnJvbSAnLi9nb29nbGVNYXBzJztcbmltcG9ydCB7IHNpbXVsYXRlUm91dGUgfSBmcm9tICcuL3JvdXRlU2ltdWxhdGlvbic7XG5pbXBvcnQgeyBoYW5kbGVDU1ZVcGxvYWQgfSBmcm9tICcuL3VwbG9hZCc7XG4vLyBTZXQgdXAgbmVjZXNzYXJ5IGV2ZW50IGxpc3RlbmVycyBhbmQgbG9naWMgaGVyZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gWW91ciBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgZm9yIGluaXRpYWxpemluZyB0aGUgYXBwIGhlcmVcbiAgICAvLyBFeGFtcGxlIFVzYWdlOlxuICAgIGNvbnN0IGNzdkZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjc3ZGaWxlSW5wdXQnKTtcbiAgICBsZXQgbWFwID0gbnVsbDsgLy8gRGVmaW5lIHRoZSBtYXAgdmFyaWFibGUgdG8gaG9sZCB0aGUgR29vZ2xlIE1hcCBvYmplY3RcbiAgICBjc3ZGaWxlSW5wdXQgPT09IG51bGwgfHwgY3N2RmlsZUlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjc3ZGaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZpbGUgPSAoX2EgPSBjc3ZGaWxlSW5wdXQgPT09IG51bGwgfHwgY3N2RmlsZUlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjc3ZGaWxlSW5wdXQuZmlsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pdGVtKDApO1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgIGhhbmRsZUNTVlVwbG9hZChmaWxlKVxuICAgICAgICAgICAgICAgIC50aGVuKChidXNSb3V0ZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBzdGFydCB0aW1lIGZyb20gdGhlIGZpcnN0IHJvdyBvZiBidXNSb3V0ZURhdGFcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzdGFydFRpbWUgPSBidXNSb3V0ZURhdGEuc3RvcHNbMF0/LmVuZF90aW1lID8/ICcwODowMCc7IC8vIERlZmF1bHQgdG8gJzA4OjAwJyBpZiBlbmRfdGltZSBpcyBtaXNzaW5nXG4gICAgICAgICAgICAgICAgLy8gYnVzUm91dGVEYXRhLnN0b3BzLnNoaWZ0KCk7IC8vIFJlbW92ZSB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBzdG9wcyBhcnJheSAoaXQncyB0aGUgc3RhcnQgdGltZSlcbiAgICAgICAgICAgICAgICAvLyBDYWxsIG90aGVyIGZ1bmN0aW9ucyBmb3IgR29vZ2xlIE1hcHMgYW5kIHNpbXVsYXRpb24gYmFzZWQgb24gYnVzUm91dGVEYXRhXG4gICAgICAgICAgICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBtYXAgaWYgaXQgZG9lc24ndCBleGlzdCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogeyBsYXQ6IDU1Ljg2NTE1LCBsbmc6IC00LjI1NzYzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAxMywgLy8gQWRqdXN0IHRoZSB6b29tIGxldmVsIGFzIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxvdFJvdXRlT25NYXAobWFwLCBidXNSb3V0ZURhdGEuc3RvcHMpO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHNpbXVsYXRlUm91dGUgZnVuY3Rpb24gaGVyZSwgaW5zaWRlIHRoZSB0aGVuIGJsb2NrXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIENTViBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSBzZWxlY3RlZCBvciBpbnZhbGlkIGZpbGUgdHlwZS4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoZSBzaW11bGF0ZVJvdXRlKCkgZnVuY3Rpb24gd2lsbCBubyBsb25nZXIgYmUgY2FsbGVkIGhlcmVcbiAgICAvLyBzaW5jZSBpdCdzIGFscmVhZHkgY2FsbGVkIGluc2lkZSB0aGUgdGhlbiBibG9jayBvZiBoYW5kbGVDU1ZVcGxvYWQoKS5cbiAgICBjb25zdCBwbGF5Um91dGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheVJvdXRlQnV0dG9uJyk7XG4gICAgaWYgKCFwbGF5Um91dGVCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwbGF5Um91dGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNpbXVsYXRlUm91dGUoKTtcbiAgICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gc3RhcnQgdGhlIHJvdXRlIHNpbXVsYXRpb25cbiAgICAgICAgLy8gRm9yIGV4YW1wbGU6IHN0YXJ0U2ltdWxhdGlvbigpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=