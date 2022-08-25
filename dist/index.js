(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ThemeNameEnum:()=>O,default:()=>se,defaultMarkdownConfig:()=>j,markdown:()=>se});const n="",r="<br/>";function i(e){return e.trim()!==n}function o(e){return e.trim().replace(/\s+/g," ")}function c(e){const t=[...e],[n]=t;if(!n)return!0;for(const e of t)if(e!==n)return!1;return!0}function l(e,t,r){const i=t.indexOf(e);if(-1===i)return null;const o=i+r,c=o in t?t[o]:null;return c?c.trimmedLine===n?l(e,t,r+(r>=0?1:-1)):c:null}function s(e,t,n){const{selector:r}=e,i=l(e,t,n);return!i||i.selector!==r}const u=["# ","## ","### ","#### ","##### ","###### "],a=["> "],f=["---","***","___"],d=["|"],p=["```"],g=["+ ","- ","* "],h=[{olAttributeType:"1",regExpSearchSelector:/^\d+\.\s/,selector:"0. "},{olAttributeType:"I",regExpSearchSelector:/^[CDILMVX]+\.\s/,selector:"I. "},{olAttributeType:"i",regExpSearchSelector:/^[cdilmvx]+\.\s/,selector:"i. "},{olAttributeType:"A",regExpSearchSelector:/^[A-Z]+\.\s/,selector:"A. "},{olAttributeType:"a",regExpSearchSelector:/^[a-z]+\.\s/,selector:"a. "}],$=[...u,...g,...d,...p,...a].sort(((e,t)=>t.length-e.length)),m=[{closeTag:"</i></b>",equal:/\*+/,openTag:"<b><i>",selector:"***"},{closeTag:"</b>",equal:/\*+/,openTag:"<b>",selector:"**"},{closeTag:"</u>",equal:/_+/,openTag:"<u>",selector:"__"},{closeTag:"</i>",equal:/_+/,openTag:"<i>",selector:"_"},{closeTag:"</i>",equal:/\*+/,openTag:"<i>",selector:"*"},{closeTag:"</strike>",equal:/~+/,openTag:"<strike>",selector:"~~"},{closeTag:"</sub>",equal:/~+/,openTag:"<sub>",selector:"~"},{closeTag:"</sup>",equal:/\^+/,openTag:"<sup>",selector:"^"},{closeTag:"</code>",equal:/`+/,openTag:'<code data-type="inline">',selector:"`"}],L="super",b=/\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g;function S(e){return/^\[\^[^\]]+]:/.test(e)}function y(e,t){return t.find((t=>t.id===e))}function C(e){return e.slice(3,-1).trim()}function T(e){return C(e).toLowerCase().replace(/\W/g," ").trim().replace(/\s+/g,"-")}function x(e){const t=T(e),n=C(e);return 1===e.indexOf("[^")?{descriptionLineData:null,id:t,inlineLineContent:n,type:L}:{descriptionLineData:null,id:t,inlineLineContent:n,type:"inline"}}const w=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,k=/<\w+[^>]*?\s*\/>/;function D(e){return"string"==typeof e&&e.trim().length>0}function v(e){return e.includes("@")}var O;!function(e){e.auto="auto",e.dark="dark",e.light="light"}(O||(O={}));const j={codeHighlight:(e,t)=>t,parseLink:!0,themeName:O.auto,useLineBreak:!1,useWrapper:!0,wrapperClassName:"md-pro"},q={[O.auto]:`${j.wrapperClassName}-theme-${O.auto}`,[O.dark]:`${j.wrapperClassName}-theme-${O.dark}`,[O.light]:`${j.wrapperClassName}-theme-${O.light}`},A="mailto:";function _(e,t){const[n,r]=e,[i,o]=t;return!(r<i||o<n)}function N(e,t){for(const n of t)if(_(e,n))return!0;return!1}function E(e,t){const n=[],r=e.match(t);if(!r)return[];let i=0;for(const t of r){const r=e.indexOf(t,i),o=r+t.length-1;i=o,n.push([r,o])}return n}const W=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function I(e){return E(e,W)}const M=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,z=/(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi,P=/([\w.-]+@[\w.]+\.\w+[\w+/]*)/gi;function B(e,t,n){const r=function(e){return E(e,M)}(e),i=I(e);return e.replace(t,((e,t,o)=>{const c=[o,o];return N(c,i)||N(c,r)?e:`<a href="${n}${e}">${e}</a>`}))}function H(e,t){const{selector:n,openTag:r,closeTag:i}=t,o=n.length;if(!e.includes(n))return e;const c=I(e);let l=function(e,t){const{selector:n,equal:r}=t,i=[],o=n.length;if(0===o)return i;let c=e.indexOf(n,0);for(;-1!==c;){const t=e.slice(c).match(r);if(!t)return[];const[l]=t,s=l.length;s===o&&i.push(c),c=e.indexOf(n,c+s)}return i.length%2==1?i.slice(0,-1):i}(e,t);l=l.filter((e=>{for(const t of c)if(_(t,[e,e+o-1]))return!1;return!0}));const s=l.length;if(0===s)return e;let u=e.slice(0,l[0]);for(let t=1;t<=s;t+=1){const n=l[t],c=e.slice(l[t-1]+o,n);u+=t%2==1?r+c+i:c}return u}const V=/\s*?\\$/;function X(e){return e.replace(V,"<br/>")}function Z(e,t){return t||V.test(e)}function F(e,t,n,r){const i=D(r)?' title="'+r+'"':"";return`<img loading="lazy" src="${n}"${D(t)?' alt="'+t+'"':""}${i}/>`}const G=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,J=/!\[([\S\s]*?)]\[([\S\s]+?)]/g,K=/\[x]/gi,Q=/\[\s]/g,R=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?(?:\s+"([\S\s]+?)")?\)/g,U=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,Y=/\[([\S\s]*?)]\[([\S\s]+?)]/g;function ee(e,t,n,r,i){const o=D(r)?' title="'+r+'"':"",c=D(i)?"?subject="+i:"",l=t.length>0?t:n;return v(e)?`<a href="mailto:${n}${c}"${o}>${l}</a>`:e}function te(e,t,n,r){return`<a href="${n}"${D(r)?' title="'+r+'"':""}>${t.length>0?t:n}</a>`}function ne(e){return v(e)?A:""}function re(e,t){const{config:n}=t,{parseLink:r}=n;let i=function(e,t){return e.replace(b,(e=>{const n=[...e],[r]=n,{footnoteList:i}=t,o=T(e),c=y(o,i);return c?`${r}<a href="#${o}"><sup>[${i.indexOf(c)+1}]</sup></a>`:""}))}(e,t);return i=function(e,t){return e.replace(G,F).replace(J,((e,n,r)=>function(e,t,n,r){const i=D(t)?' alt="'+t+'"':"",{variable:o}=r;return n in o?`<img loading="lazy" src="${o[n].value}"${i}/>`:`<img loading="lazy" src="${n}"${i}/>`}(0,n,r,t)))}(i,t),i=function(e){return e.replace(R,ee)}(i),r&&(i=function(e){return B(e,P,A)}(i)),i=function(e){return e.replace(U,te)}(i),r&&(i=function(e){return B(e,z,"")}(i)),i=function(e,t){return e.replace(Y,((e,n,r)=>function(e,t,n,r){const{variable:i}=r;if(n in i){const e=i[n].value,r=t.length>0?t:e;return`<a href="${ne(e)}${e}">${r}</a>`}const o=t.length>0?t:n;return`<a href="${ne(n)}${n}">${o}</a>`}(0,n,r,t)))}(i,t),i=function(e){return e.replace(K,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(Q,'<input type="checkbox" disabled="disabled"/>')}(i),function(e){let t=e;for(const e of m)t=H(t,e);return t}(i)}function ie(e){return e.replace(/[\s:|-]/g,"")===n}function oe(e){const t=e.trim(),n=[...t],[r]=n,i=t[t.length-1];return r===i&&":"===r?"center":":"===i?"right":"left"}function ce(e,t,r,o,c){return t.map((t=>`<tr>${function(e,t,r,o,c){const{selector:l}=e;return t.split(l).filter(i).map(((e,t)=>{const n=r[t]||"left";return`<${o} align="${n}">${function(e,t){return re(e,t).trim()}(e,c)}</${o}>`})).join(n)}(e,t,r,o,c)}</tr>`)).join(n)}function le(e,t){return e.map(((o,c)=>function(e,t,o,c){const{selector:l,childList:$,lineContent:m,trimmedLine:L,additionalLineList:b,config:y}=e,{codeHighlight:C}=y,T=function(e){const{additionalLineList:t,config:i}=e,{lineContent:o}=e,{useLineBreak:c}=i;if(0===t.length)return n;const l=Z(o,c)?r:" ",s=t.length,u=s-1,a=Array.from({length:s}).fill("");for(let e=0;e<s;e+=1){const i=t[e];if(Z(i,c)){const t=i.replace(V,n);a[e]=e===u?t:t+r}else a[e]=e===u?i:i+" "}return l+a.join(n)}(e),x=le($,c);let D=m.replace(V,n)+T;if(D=re(D,c),D+=x,S(m))return"";if(function(e){return f.includes(e.selector)}(e))return"<hr/>";if(function(e){return d.includes(e.selector)}(e))return function(e,t){const{selector:n,additionalLineList:r,line:o}=e,c=[o,...r],l=c.find(ie);if(!l)return`<table><tbody>${ce(e,c,[],"td",t)}</tbody></table>`;const s=c.indexOf(l),u=c.slice(0,s),a=c.slice(s+1),f=function(e,t){return t.split(e).filter(i).map(oe)}(n,l);return`<table><thead>${ce(e,u,f,"th",t)}</thead><tbody>${ce(e,a,f,"td",t)}</tbody></table>`}(e,c);if(function(e){return p.includes(e.selector)}(e)){const e=C(m,b.join("\n"));return m?`<code data-lang="${m}">${e}</code>`:`<code>${e}</code>`}if(m===n&&0===$.length)return n;if(function(e){return u.includes(e.selector)}(e)){const e=l.length-1;return`<h${e}>${D}</h${e}>`}if(function(e){return a.includes(e.selector)}(e))return`<blockquote>${D}</blockquote>`;if(function(e){return g.includes(e.selector)}(e))return`${s(e,o,-1)?"<ul>":""}<li>${D}</li>${s(e,o,1)?"</ul>":""}`;if(function(e){for(const t of h)if(t.selector===e.selector)return!0;return!1}(e)){const t=s(e,o,-1),n=s(e,o,1),{selector:r}=e,i=t?`<ol type="${function(e){for(const t of h){const{selector:n,olAttributeType:r}=t;if(e===n)return r}return"1"}(r)}" start="${function(e){const t=e.indexOf(".");return e.slice(0,t)}(L)}">`:"";return`${i}<li>${D}</li>${n?"</ol>":""}`}return m===n||function(e){const{trimmedLine:t}=e;return 0===t.search(w)||0===t.search(k)}(e)||function(e){return e.replace(G,"").trim()===n}(m)?D:`<p>${D}</p>`}(o,0,e,t))).map(X).join(n)}function se(e,t=j){const r={...j,...t},{useWrapper:i}=r,l={...j,...t,useWrapper:!1},s={additionalLineList:[],childList:[],config:r,line:n,lineContent:"",lineIndex:-1,selector:n,spaceCount:-1,trimmedLine:""},u=[s],a=[s],g={codeLineData:null,config:r,footnoteList:[],tableLineData:null,variable:{}};e.split("\n").forEach(((e,t,r)=>{!function(e,t,r,i,l,s){const u=e.trim(),a=u===n,g=a?l[l.length-1].spaceCount:e.search(/\S/),m=Math.max(0,g),C={lineContent:n,selector:n},{selector:T,lineContent:w}=a?C:function(e){for(const t of $)if(e.startsWith(t))return{lineContent:o(e.replace(t,n)),selector:t};for(const t of f)if(e.startsWith(t)&&c(e))return{lineContent:n,selector:t};for(const t of h){const{selector:r,regExpSearchSelector:i}=t;if(0===e.search(i))return{lineContent:o(e.replace(i,n)),selector:r}}return{lineContent:o(e),selector:n}}(u),k={additionalLineList:[],childList:[],config:s.config,line:a?n:e,lineContent:w,lineIndex:t,selector:T,spaceCount:m,trimmedLine:u};if(p.includes(T)){if(s.codeLineData&&w===n)return s.codeLineData=null,!0;s.codeLineData=k}const{codeLineData:D}=s;if(D&&D!==k)return D.additionalLineList.push(k.line),!0;const v=function(e){const t=e.match(b);return t?t.map(x):[]}(w),{footnoteList:O,tableLineData:j,variable:q}=s;if(function(e,t){for(const n of e){const{id:e,descriptionLineData:r}=n,i=t.find((t=>t.id===e));i?i.descriptionLineData||(i.descriptionLineData=r):t.push(n)}}(v,O),d.includes(T)){if(j)return j.additionalLineList.push(k.line),!0;s.tableLineData=k}else s.tableLineData=null;const A=function(e){const t=e.match(/\[([^^][\S\s]+?)]:\s+?\S/);return t?{key:t[1],value:e.slice(e.indexOf("]:")+3).trim()}:null}(w);if(k.selector===n&&w.length>0){const e=l[l.length-1],t=d.includes(e.selector);if(A&&(q[A.key]=A),e&&e.lineContent.length>0&&!t&&!A)return e.additionalLineList.push(w),!0}const _=function(e,t){for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(r.spaceCount<e.spaceCount)return r}return null}(k,l);_&&(A||(_.childList.push(k),l.push(k),S(w)&&function(e,t){const{lineContent:n}=e,r=n.match(/\[\^[^\]]+?]:/);if(!r)return;const[i]=r,o=i.slice(2,-2).trim(),c=y(o,t);c?c.descriptionLineData=e:t.push({descriptionLineData:e,id:o,inlineLineContent:n,type:L})}(k,O)))}(e,t,0,0,a,g)}));const m=le(u,g),C=g.footnoteList.map((e=>{const{id:t}=e,n=function(e){const{inlineLineContent:t,descriptionLineData:n}=e;if(n){const{lineContent:e,additionalLineList:t}=n,r=e.indexOf("]:")+2;return e.slice(r)+"\n"+t.join("\n")}return t}(e);return`<li id="${t}">${se(n,l)}</li>`})),T=[m,0===C.length?"":["<hr/>",'<ol type="1">',...C,"</ol>"].join("")].join("");if(!i)return T;const w=function(e){const{wrapperClassName:t,themeName:n}=e,{wrapperClassName:r}=j;return`${t===r?r:`${r} ${t}`} ${q[n]}`}(r);return`<div class="${w}">${T}</div>`}module.exports=t})();