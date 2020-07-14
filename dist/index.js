module.exports=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){n(1),t.exports=n(2)},function(t,r,n){},function(t,r,n){"use strict";function e(t,r){if(t){if("string"==typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,r):void 0}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function i(t){return""!==t.trim()}function a(t){return t.trim().replace(/\s+/g," ")}function c(t){if(0===t.length)return!0;var r,n,o=(n=t,1,function(t){if(Array.isArray(t))return t}(n)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),1!==n.length);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n)||e(n,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=function(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=e(t))){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}(t);try{for(i.s();!(r=i.n()).done;)if(r.value!==o)return!1}catch(t){i.e(t)}finally{i.f()}return!0}function u(t,r,n){var e=t.selector,o=function t(r,n,e){var o=n.indexOf(r);if(-1===o)return null;var i=o+e,a=i in n?n[i]:null;return a?""===a.trimmedLine?t(r,n,e+(e>=0?1:-1)):a:null}(t,r,n);return!o||o.selector!==e}n.r(r),n.d(r,"markdown",(function(){return Ot}));var l=["# ","## ","### ","#### ","##### ","###### "],f=["> "],s=["---","***","___"],y=["|"],d=["```"],p=["+ ","- ","* "],v=[{selector:"0. ",regExpSearchSelector:/^\d+\.\s/,olAttributeType:"1"},{selector:"I. ",regExpSearchSelector:/^[CDILMVX]+\.\s/,olAttributeType:"I"},{selector:"i. ",regExpSearchSelector:/^[cdilmvx]+\.\s/,olAttributeType:"i"},{selector:"A. ",regExpSearchSelector:/^[A-Z]+\.\s/,olAttributeType:"A"},{selector:"a. ",regExpSearchSelector:/^[a-z]+\.\s/,olAttributeType:"a"}],b=[].concat(l,p,y,d,f).sort((function(t,r){return r.length-t.length})),m=[{selector:"***",openTag:"<b><i>",closeTag:"</i></b>",equal:/\*+/},{selector:"**",openTag:"<b>",closeTag:"</b>",equal:/\*+/},{selector:"__",openTag:"<u>",closeTag:"</u>",equal:/_+/},{selector:"_",openTag:"<i>",closeTag:"</i>",equal:/_+/},{selector:"*",openTag:"<i>",closeTag:"</i>",equal:/\*+/},{selector:"~~",openTag:"<strike>",closeTag:"</strike>",equal:/~+/},{selector:"~",openTag:"<sub>",closeTag:"</sub>",equal:/~+/},{selector:"^",openTag:"<sup>",closeTag:"</sup>",equal:/\^+/},{selector:"`",openTag:'<code data-type="inline">',closeTag:"</code>",equal:/`+/}],h=/\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g;function g(t){return/^\[\^[^\]]+]:/.test(t)}function S(t,r){return r.find((function(r){return r.id===t}))}function A(t){return t.slice(3,-1).trim()}function w(t){return A(t).toLowerCase().replace(/\W/g," ").trim().replace(/\s+/g,"-")}function j(t){var r=t.inlineLineContent,n=t.descriptionLineData;if(n){var e=n.lineContent,o=n.additionalLineList,i=e.indexOf("]:")+2;return e.slice(i)+"\n"+o.join("\n")}return r}function O(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,r)||L(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,r){if(t){if("string"==typeof t)return I(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,r):void 0}}function I(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function x(t){var r=w(t),n=A(t);return 1===t.indexOf("[^")?{id:r,descriptionLineData:null,inlineLineContent:n,type:"super"}:{id:r,descriptionLineData:null,inlineLineContent:n,type:"inline"}}function T(t,r){return t.replace(h,(function(t){var n=O(t,1)[0],e=r.footnoteList,o=w(t),i=S(o,e);return"".concat(n,'<a href="#').concat(o,'"><sup>[').concat(e.indexOf(i)+1,"]</sup></a>")}))}function C(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return E(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,void 0):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function E(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function D(t,r,n,e,o,i){var u=t.trim(),l=""===u,f=l?o[o.length-1].spaceCount:t.search(/\S/),p=Math.max(0,f),m=l?{selector:"",lineContent:""}:function(t){var r,n=C(b);try{for(n.s();!(r=n.n()).done;){var e=r.value;if(t.startsWith(e))return{selector:e,lineContent:a(t.replace(e,""))}}}catch(t){n.e(t)}finally{n.f()}var o,i=C(s);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(t.startsWith(u)&&c(t))return{selector:u,lineContent:""}}}catch(t){i.e(t)}finally{i.f()}var l,f=C(v);try{for(f.s();!(l=f.n()).done;){var y=l.value,d=y.selector,p=y.regExpSearchSelector;if(0===t.search(p))return{selector:d,lineContent:a(t.replace(p,""))}}}catch(t){f.e(t)}finally{f.f()}return{selector:"",lineContent:a(t)}}(u),A=m.selector,w=m.lineContent,j={lineIndex:r,spaceCount:p,selector:A,line:l?"":t,trimmedLine:u,lineContent:w,childList:[],additionalLineList:[],config:i.config};if(d.includes(A)){if(i.codeLineData&&""===w)return i.codeLineData=null,!0;i.codeLineData=j}var I=i.codeLineData;if(I&&I!==j)return I.additionalLineList.push(j.line),!0;if(function(t,r){var n,e=function(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=L(t))){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(t);try{var o=function(){var t=n.value,e=t.id,o=r.find((function(t){return t.id===e}));o?o.descriptionLineData||(o.descriptionLineData=t.descriptionLineData):r.push(t)};for(e.s();!(n=e.n()).done;)o()}catch(t){e.e(t)}finally{e.f()}}(function(t){var r=t.match(h);return r?r.map(x):[]}(w),i.footnoteList),y.includes(A)){if(i.tableLineData)return i.tableLineData.additionalLineList.push(j.line),!0;i.tableLineData=j}else i.tableLineData=null;var T=function(t){var r=t.match(/\[([^^][\S\s]+?)]:\s+?\S/);return r?{key:r[1],value:t.slice(t.indexOf("]:")+3).trim()}:null}(w);if(""===j.selector&&w.length>0){var E=o[o.length-1],D=y.includes(E.selector);if(T&&(i.variable[T.key]=T),E&&E.lineContent.length>0&&!D&&!T)return E.additionalLineList.push(w),!0}var k=function(t,r){for(var n=r.length-1;n>=0;n-=1){var e=r[n];if(e.spaceCount<t.spaceCount)return e}return null}(j,o);return!!k&&(T||(k.childList.push(j),o.push(j),g(w)&&function(t,r){var n=t.lineContent.match(/\[\^[^\]]+?]:/);if(n){var e=O(n,1)[0].slice(2,-2).trim(),o=S(e,r);o?o.descriptionLineData=t:r.push({id:e,type:"super",inlineLineContent:t.lineContent,descriptionLineData:t})}}(j,i.footnoteList)),!0)}function k(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var M=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,P=/<\w+[^>]*?\s*\/>/;function _(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var q=/\s*?\\$/;function $(t){return t.replace(q,"<br/>")}function U(t,r){return r||q.test(t)}function W(t,r,n,e){var o="string"==typeof e&&e.trim()?' title="'+e+'"':"",i="string"==typeof r&&r.trim()?' alt="'+r+'"':"";return'<img loading="lazy" src="'.concat(n,'"').concat(i).concat(o,"/>")}var z=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,B=/!\[([\S\s]*?)]\[([\S\s]+?)]/g;function N(t,r){return t.replace(z,W).replace(B,(function(t,n,e){return function(t,r,n,e){var o,i,a="string"==typeof r&&r.trim()?' alt="'+r+'"':"",c=e.variable;return o=c,i=n,Boolean(o)&&Reflect.apply(Object.prototype.hasOwnProperty,o,[i])?'<img loading="lazy" src="'.concat(c[n].value,'"').concat(a,"/>"):'<img loading="lazy" src="'.concat(n,'"').concat(a,"/>")}(0,n,e,r)}))}var H=/\[x]/gi,R=/\[\s]/g;function V(t){return t.replace(H,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(R,'<input type="checkbox" disabled="disabled"/>')}var X=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;function Z(t,r,n,e){var o="string"==typeof e&&e.trim()?' title="'+e+'"':"",i=r.length>0?r:n;return'<a href="'.concat(n,'"').concat(o,">").concat(i,"</a>")}function F(t){return t.replace(X,Z)}function G(t){return function(t){if(Array.isArray(t))return Y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Q(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function K(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,r)||Q(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,r){if(t){if("string"==typeof t)return Y(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,r):void 0}}function Y(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function tt(t,r){var n=K(t,2),e=n[0],o=n[1],i=K(r,2),a=i[0],c=i[1];return!(o<a||c<e)}function rt(t,r){var n,e=J(r);try{for(e.s();!(n=e.n()).done;)if(tt(t,n.value))return!0}catch(t){e.e(t)}finally{e.f()}return!1}var nt=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function et(t){var r,n=[],e=J(G(t.matchAll(nt)));try{for(e.s();!(r=e.n()).done;){var o=r.value,i=o.index,a=i+o[0].length-1;n.push([i,a])}}catch(t){e.e(t)}finally{e.f()}return n}var ot=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,it=/(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi;function at(t){var r=function(t){var r,n=[],e=J(G(t.matchAll(ot)));try{for(e.s();!(r=e.n()).done;){var o=r.value,i=o.index,a=i+o[0].length-1;n.push([i,a])}}catch(t){e.e(t)}finally{e.f()}return n}(t),n=et(t);return t.replace(it,(function(t,e,o,i){var a=[o,o];return rt(a,n)||rt(a,r)?t:'<a href="'.concat(t,'">').concat(t,"</a>")}))}function ct(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=ut(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function ut(t,r){if(t){if("string"==typeof t)return lt(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?lt(t,r):void 0}}function lt(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function ft(t,r){var n=r.selector,e=r.openTag,o=r.closeTag,i=n.length;if(!t.includes(n))return t;var a=et(t),c=function(t,r){var n,e=r.selector,o=r.equal,i=[],a=e.length;if(0===a)return i;for(var c=t.indexOf(e,0);-1!==c;){var u=(n=t.slice(c).match(o),1,function(t){if(Array.isArray(t))return t}(n)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),1!==n.length);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n)||ut(n,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].length;u===a&&i.push(c),c=t.indexOf(e,c+u)}return i.length%2==1?i.slice(0,-1):i}(t,r),u=(c=c.filter((function(t){var r,n=ct(a);try{for(n.s();!(r=n.n()).done;)if(tt(r.value,[t,t+i-1]))return!1}catch(t){n.e(t)}finally{n.f()}return!0}))).length;if(0===u)return t;for(var l=t.slice(0,c[0]),f=1;f<=u;f+=1){var s=c[f],y=t.slice(c[f-1]+i,s);l+=f%2==1?e+y+o:y}return l}function st(t){var r,n=t,e=ct(m);try{for(e.s();!(r=e.n()).done;)n=ft(n,r.value)}catch(t){e.e(t)}finally{e.f()}return n}function yt(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function dt(t){return""===t.replace(/[\s:|-]/g,"")}function pt(t){var r,n=t.trim(),e=(r=n,1,function(t){if(Array.isArray(t))return t}(r)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),1!==n.length);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(r)||function(t,r){if(t){if("string"==typeof t)return yt(t,1);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yt(t,1):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=n[n.length-1];return e===o&&":"===e?"center":":"===o?"right":"left"}function vt(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function bt(t,r,n,e,o){return r.map((function(r){return"<tr>".concat(function(t,r,n,e,o){var a=t.selector;return r.split(a).filter(i).map((function(r,i){var a=n[i]||"left";return"<".concat(e,' align="').concat(a,'">').concat(function(t,r,n){var e=t.config.parseLink,o=T(r,n);return o=F(o=N(o,n)),e&&(o=at(o)),(o=st(o=V(o))).trim()}(t,r,o),"</").concat(e,">")})).join("")}(t,r,n,e,o),"</tr>")})).join("")}function mt(t,r){return t.map((function(n,e){return function(t,r,n,e){var o=t.selector,a=t.childList,c=t.lineContent,b=t.trimmedLine,m=t.additionalLineList,h=t.config,S=h.codeHighlight,A=h.parseLink,w=function(t){var r=t.additionalLineList,n=t.config.useLineBreak;if(0===r.length)return"";for(var e=U(t.lineContent,n)?"<br/>":" ",o=r.length,i=o-1,a=new Array(o).fill(""),c=0;c<o;c+=1){var u=r[c];if(U(u,n)){var l=u.replace(q,"");a[c]=c===i?l:l+"<br/>"}else a[c]=c===i?u:u+" "}return e+a.join("")}(t),j=mt(a,e),O=c.replace(q,"")+w;if(O=F(O=N(O=T(O,e),e)),A&&(O=at(O)),O=st(O=V(O)),O+=j,g(c))return"";if(function(t){return s.includes(t.selector)}(t))return"<hr/>";if(function(t){return y.includes(t.selector)}(t))return function(t,r){var n,e=t.selector,o=t.additionalLineList,a=[t.line].concat(function(t){if(Array.isArray(t))return vt(t)}(n=o)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,r){if(t){if("string"==typeof t)return vt(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vt(t,void 0):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a.find(dt);if(!c){var u=bt(t,a,[],"td",r);return"<table><tbody>".concat(u,"</tbody></table>")}var l=a.indexOf(c),f=a.slice(0,l),s=a.slice(l+1),y=function(t,r){return r.split(t).filter(i).map(pt)}(e,c),d=bt(t,f,y,"th",r),p=bt(t,s,y,"td",r);return"<table><thead>".concat(d,"</thead><tbody>").concat(p,"</tbody></table>")}(t,e);if(function(t){return d.includes(t.selector)}(t)){var L=S(c,m.join("\n"));return c?'<code data-lang="'.concat(c,'">').concat(L,"</code>"):"<code>".concat(L,"</code>")}if(""===c&&0===a.length)return"";if(function(t){return l.includes(t.selector)}(t)){var I=o.length-1;return"<h".concat(I,">").concat(O,"</h").concat(I,">")}if(function(t){return f.includes(t.selector)}(t))return"<blockquote>".concat(O,"</blockquote>");if(function(t){return p.includes(t.selector)}(t)){var x=u(t,n,-1),C=u(t,n,1)?"</ul>":"";return"".concat(x?"<ul>":"","<li>").concat(O,"</li>").concat(C)}if(function(t){var r,n=function(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return k(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,void 0):void 0}}(t))){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(v);try{for(n.s();!(r=n.n()).done;)if(r.value.selector===t.selector)return!0}catch(t){n.e(t)}finally{n.f()}return!1}(t)){var E=u(t,n,-1),D=u(t,n,1),$=E?'<ol type="'.concat(function(t){var r,n=function(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return _(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,void 0):void 0}}(t))){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(v);try{for(n.s();!(r=n.n()).done;){var e=r.value,o=e.selector,i=e.olAttributeType;if(t===o)return i}}catch(t){n.e(t)}finally{n.f()}return"1"}(t.selector),'" start="').concat(function(t){var r=t.indexOf(".");return t.slice(0,r)}(b),'">'):"",W=D?"</ol>":"";return"".concat($,"<li>").concat(O,"</li>").concat(W)}return""===c||function(t){var r=t.trimmedLine;return 0===r.search(M)||0===r.search(P)}(t)||function(t){return""===t.replace(z,"").trim()}(c)?O:"<p>".concat(O,"</p>")}(n,0,t,r)})).map($).join("")}var ht={useLineBreak:!1,wrapperClassName:"md-pro",parseLink:!0,codeHighlight:function(t,r){return r},useWrapper:!0};function gt(t){return function(t){if(Array.isArray(t))return St(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return St(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?St(t,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function St(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function At(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function wt(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?At(Object(n),!0).forEach((function(r){jt(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function jt(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Ot(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ht,n=wt(wt({},ht),r),e=wt(wt(wt({},ht),r),{},{useWrapper:!1}),o={lineIndex:-1,spaceCount:-1,selector:"",line:"",trimmedLine:"",lineContent:"",childList:[],additionalLineList:[],config:n},i=[o],a=[o],c={tableLineData:null,codeLineData:null,config:n,footnoteList:[],variable:{}};t.split("\n").forEach((function(t,r,n){D(t,r,0,0,a,c)}));var u=n.wrapperClassName,l=ht.wrapperClassName,f=mt(i,c),s=c.footnoteList.map((function(t){var r=t.id,n=j(t);return'<li id="'.concat(r,'">').concat(Ot(n,e),"</li>")})),y=0===s.length?"":["<hr/>",'<ol type="1">'].concat(gt(s),["</ol>"]).join(""),d=[f,y].join("");if(!1===n.useWrapper)return d;var p=u===l?l:"".concat(l," ").concat(u);return'<div class="'.concat(p,'">').concat(d,"</div>")}r.default=Ot}]);