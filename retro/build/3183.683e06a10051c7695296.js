(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3183],{34737:(r,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(94015),e=s.n(n),c=s(23645),a=s.n(c)()(e());a.push([r.id,"/*\n\n    Name:       Railscasts\n    Author:     Ryan Bates (http://railscasts.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}\n.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}\n.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}\n.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}\n.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}\n\n.cm-s-railscasts span.cm-comment {color: #bc9458;}\n.cm-s-railscasts span.cm-atom {color: #b6b3eb;}\n.cm-s-railscasts span.cm-number {color: #b6b3eb;}\n\n.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}\n.cm-s-railscasts span.cm-keyword {color: #da4939;}\n.cm-s-railscasts span.cm-string {color: #ffc66d;}\n\n.cm-s-railscasts span.cm-variable {color: #a5c261;}\n.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}\n.cm-s-railscasts span.cm-def {color: #cc7833;}\n.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}\n.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}\n.cm-s-railscasts span.cm-tag {color: #da4939;}\n.cm-s-railscasts span.cm-link {color: #b6b3eb;}\n\n.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/railscasts.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,6BAA6B,mBAAmB,EAAE,cAAc,CAAC;AACjE,0CAA0C,8BAA8B,CAAC;AACzE,sCAAsC,mBAAmB,EAAE,iBAAiB,CAAC;AAC7E,yCAAyC,cAAc,CAAC;AACxD,qCAAqC,yCAAyC,CAAC;;AAE/E,kCAAkC,cAAc,CAAC;AACjD,+BAA+B,cAAc,CAAC;AAC9C,iCAAiC,cAAc,CAAC;;AAEhD,uEAAuE,cAAc,CAAC;AACtF,kCAAkC,cAAc,CAAC;AACjD,iCAAiC,cAAc,CAAC;;AAEhD,mCAAmC,cAAc,CAAC;AAClD,qCAAqC,cAAc,CAAC;AACpD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,mBAAmB,EAAE,cAAc,CAAC;AACpE,kCAAkC,cAAc,CAAC;AACjD,8BAA8B,cAAc,CAAC;AAC7C,+BAA+B,cAAc,CAAC;;AAE9C,+CAA+C,0BAA0B,EAAE,uBAAuB,CAAC;AACnG,qDAAqD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Railscasts\n    Author:     Ryan Bates (http://railscasts.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}\n.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}\n.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}\n.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}\n.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}\n\n.cm-s-railscasts span.cm-comment {color: #bc9458;}\n.cm-s-railscasts span.cm-atom {color: #b6b3eb;}\n.cm-s-railscasts span.cm-number {color: #b6b3eb;}\n\n.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}\n.cm-s-railscasts span.cm-keyword {color: #da4939;}\n.cm-s-railscasts span.cm-string {color: #ffc66d;}\n\n.cm-s-railscasts span.cm-variable {color: #a5c261;}\n.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}\n.cm-s-railscasts span.cm-def {color: #cc7833;}\n.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}\n.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}\n.cm-s-railscasts span.cm-tag {color: #da4939;}\n.cm-s-railscasts span.cm-link {color: #b6b3eb;}\n\n.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }\n"],sourceRoot:""}]);const o=a},23645:r=>{"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var s=r(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(r,s,n){"string"==typeof r&&(r=[[null,r,""]]);var e={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(e[a]=!0)}for(var o=0;o<r.length;o++){var i=[].concat(r[o]);n&&e[i[0]]||(s&&(i[2]?i[2]="".concat(s," and ").concat(i[2]):i[2]=s),t.push(i))}},t}},94015:r=>{"use strict";function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=r[s];return n}r.exports=function(r){var s,n,e=(n=4,function(r){if(Array.isArray(r))return r}(s=r)||function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var s=[],n=!0,e=!1,c=void 0;try{for(var a,o=r[Symbol.iterator]();!(n=(a=o.next()).done)&&(s.push(a.value),!t||s.length!==t);n=!0);}catch(r){e=!0,c=r}finally{try{n||null==o.return||o.return()}finally{if(e)throw c}}return s}}(s,n)||function(r,s){if(r){if("string"==typeof r)return t(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,s):void 0}}(s,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=e[1],a=e[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),l="/*# ".concat(i," */"),A=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[c].concat(A).concat([l]).join("\n")}return[c].join("\n")}},43183:(r,t,s)=>{var n=s(34737);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[r.id,n,""]]);s(93379)(n,{insert:"head",singleton:!1}),n.locals&&(r.exports=n.locals)},93379:(r,t,s)=>{"use strict";var n,e={},c=function(){var r={};return function(t){if(void 0===r[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(r){s=null}r[t]=s}return r[t]}}();function a(r,t){for(var s=[],n={},e=0;e<r.length;e++){var c=r[e],a=t.base?c[0]+t.base:c[0],o={css:c[1],media:c[2],sourceMap:c[3]};n[a]?n[a].parts.push(o):s.push(n[a]={id:a,parts:[o]})}return s}function o(r,t){for(var s=0;s<r.length;s++){var n=r[s],c=e[n.id],a=0;if(c){for(c.refs++;a<c.parts.length;a++)c.parts[a](n.parts[a]);for(;a<n.parts.length;a++)c.parts.push(C(n.parts[a],t))}else{for(var o=[];a<n.parts.length;a++)o.push(C(n.parts[a],t));e[n.id]={id:n.id,refs:1,parts:o}}}}function i(r){var t=document.createElement("style");if(void 0===r.attributes.nonce){var n=s.nc;n&&(r.attributes.nonce=n)}if(Object.keys(r.attributes).forEach((function(s){t.setAttribute(s,r.attributes[s])})),"function"==typeof r.insert)r.insert(t);else{var e=c(r.insert||"head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}return t}var l,A=(l=[],function(r,t){return l[r]=t,l.filter(Boolean).join("\n")});function m(r,t,s,n){var e=s?"":n.css;if(r.styleSheet)r.styleSheet.cssText=A(t,e);else{var c=document.createTextNode(e),a=r.childNodes;a[t]&&r.removeChild(a[t]),a.length?r.insertBefore(c,a[t]):r.appendChild(c)}}function u(r,t,s){var n=s.css,e=s.media,c=s.sourceMap;if(e&&r.setAttribute("media",e),c&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var d=null,p=0;function C(r,t){var s,n,e;if(t.singleton){var c=p++;s=d||(d=i(t)),n=m.bind(null,s,c,!1),e=m.bind(null,s,c,!0)}else s=i(t),n=u.bind(null,s,t),e=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(s)};return n(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap)return;n(r=t)}else e()}}r.exports=function(r,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var s=a(r,t);return o(s,t),function(r){for(var n=[],c=0;c<s.length;c++){var i=s[c],l=e[i.id];l&&(l.refs--,n.push(l))}r&&o(a(r,t),t);for(var A=0;A<n.length;A++){var m=n[A];if(0===m.refs){for(var u=0;u<m.parts.length;u++)m.parts[u]();delete e[m.id]}}}}}}]);
//# sourceMappingURL=3183.683e06a10051c7695296.js.map