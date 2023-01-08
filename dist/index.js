(()=>{"use strict";var e,t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ThemeNameEnum:()=>e,classNameMdPro:()=>fe,classNameMdProThemeDark:()=>ue,classNameMdProThemeLight:()=>ae,default:()=>se,defaultMarkdownConfig:()=>r,markdown:()=>se}),function(e){e.auto="auto",e.dark="dark",e.light="light"}(e||(e={}));const r={codeHighlight:(e,t)=>t,parseLink:!0,themeName:e.auto,useLineBreak:!1,useWrapper:!0,wrapperClassName:"md-pro"},i={[e.auto]:`${r.wrapperClassName}-theme-${e.auto}`,[e.dark]:`${r.wrapperClassName}-theme-${e.dark}`,[e.light]:`${r.wrapperClassName}-theme-${e.light}`},o="mailto:",c="",l="<br/>";function s(e){return e.trim()!==c}function u(e){return e.trim().replace(/\s+/g," ")}function a(e){const t=[...e],[n]=t;if(!n)return!0;for(const e of t)if(e!==n)return!1;return!0}function f(e,t,n){const r=t.indexOf(e);if(-1===r)return null;const i=r+n,o=i in t?t[i]:null;return o?o.trimmedLine===c?f(e,t,n+(n>=0?1:-1)):o:null}function d(e,t,n){const{selector:r}=e,i=f(e,t,n);return!i||i.selector!==r}const p=["# ","## ","### ","#### ","##### ","###### "],g=["> "],h=["---","***","___"],m=["|"],$=["```"],L=["+ ","- ","* "],b=[{olAttributeType:"1",regExpSearchSelector:/^\d+\.\s/,selector:"0. "},{olAttributeType:"I",regExpSearchSelector:/^[CDILMVX]+\.\s/,selector:"I. "},{olAttributeType:"i",regExpSearchSelector:/^[cdilmvx]+\.\s/,selector:"i. "},{olAttributeType:"A",regExpSearchSelector:/^[A-Z]+\.\s/,selector:"A. "},{olAttributeType:"a",regExpSearchSelector:/^[a-z]+\.\s/,selector:"a. "}],S=[...p,...L,...m,...$,...g].sort(((e,t)=>t.length-e.length)),y=[{closeTag:"</i></b>",equal:/\*+/,openTag:"<b><i>",selector:"***"},{closeTag:"</b>",equal:/\*+/,openTag:"<b>",selector:"**"},{closeTag:"</u>",equal:/_+/,openTag:"<u>",selector:"__"},{closeTag:"</i>",equal:/_+/,openTag:"<i>",selector:"_"},{closeTag:"</i>",equal:/\*+/,openTag:"<i>",selector:"*"},{closeTag:"</strike>",equal:/~+/,openTag:"<strike>",selector:"~~"},{closeTag:"</sub>",equal:/~+/,openTag:"<sub>",selector:"~"},{closeTag:"</sup>",equal:/\^+/,openTag:"<sup>",selector:"^"},{closeTag:"</code>",equal:/`+/,openTag:'<code data-type="inline">',selector:"`"}],C="super",T=/\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g;function w(e){return/^\[\^[^\]]+]:/.test(e)}function x(e,t){return t.find((t=>t.id===e))}function k(e){return e.slice(3,-1).trim()}function D(e){return k(e).toLowerCase().replace(/\W/g," ").trim().replace(/\s+/g,"-")}function O(e){const t=D(e),n=k(e);return 1===e.indexOf("[^")?{descriptionLineData:null,id:t,inlineLineContent:n,type:C}:{descriptionLineData:null,id:t,inlineLineContent:n,type:"inline"}}const v=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,j=/<\w+[^>]*?\s*\/>/;function N(e){return"string"==typeof e&&e.trim().length>0}function q(e){return e.includes("@")}function A(e,t){const[n,r]=e,[i,o]=t;return!(r<i||o<n)}function _(e,t){for(const n of t)if(A(e,n))return!0;return!1}function E(e,t){const n=[],r=e.match(t);if(!r)return[];let i=0;for(const t of r){const r=e.indexOf(t,i),o=r+t.length-1;i=o,n.push([r,o])}return n}const M=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function P(e){return E(e,M)}const W=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,I=/(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi,z=/([\w.-]+@[\w.]+\.\w+[\w+/]*)/gi;function B(e,t,n){const r=function(e){return E(e,W)}(e),i=P(e);return e.replace(t,((e,t,o)=>{const c=[o,o];return _(c,i)||_(c,r)?e:`<a href="${n}${e}">${e}</a>`}))}function H(e,t){const{selector:n,openTag:r,closeTag:i}=t,o=n.length;if(!e.includes(n))return e;const c=P(e);let l=function(e,t){const{selector:n,equal:r}=t,i=[],o=n.length;if(0===o)return i;let c=e.indexOf(n,0);for(;-1!==c;){const t=e.slice(c).match(r);if(!t)return[];const[l]=t,s=l.length;s===o&&i.push(c),c=e.indexOf(n,c+s)}return i.length%2==1?i.slice(0,-1):i}(e,t);l=l.filter((e=>{for(const t of c)if(A(t,[e,e+o-1]))return!1;return!0}));const s=l.length;if(0===s)return e;let u=e.slice(0,l[0]);for(let t=1;t<=s;t+=1){const n=l[t],c=e.slice(l[t-1]+o,n);u+=t%2==1?r+c+i:c}return u}const V=/\s*?\\$/;function X(e){return e.replace(V,"<br/>")}function Z(e,t){return t||V.test(e)}function F(e,t,n,r){const i=N(r)?' title="'+r+'"':"";return`<img loading="lazy" src="${n}"${N(t)?' alt="'+t+'"':""}${i}/>`}const G=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,J=/!\[([\S\s]*?)]\[([\S\s]+?)]/g,K=/\[x]/gi,Q=/\[\s]/g,R=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?(?:\s+"([\S\s]+?)")?\)/g,U=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,Y=/\[([\S\s]*?)]\[([\S\s]+?)]/g;function ee(e,t,n,r,i){const c=N(r)?' title="'+r+'"':"",l=N(i)?"?subject="+i:"",s=t.length>0?t:n;return q(e)?`<a href="${o}${n}${l}"${c}>${s}</a>`:e}function te(e,t,n,r){return`<a href="${n}"${N(r)?' title="'+r+'"':""}>${t.length>0?t:n}</a>`}function ne(e){return q(e)?o:""}function re(e,t){const{config:n}=t,{parseLink:r}=n;let i=function(e,t){return e.replace(T,(e=>{const n=[...e],[r]=n,{footnoteList:i}=t,o=D(e),c=x(o,i);return c?`${r}<a href="#${o}"><sup>[${i.indexOf(c)+1}]</sup></a>`:""}))}(e,t);return i=function(e,t){return e.replace(G,F).replace(J,((e,n,r)=>function(e,t,n,r){const i=N(t)?' alt="'+t+'"':"",{variable:o}=r;return n in o?`<img loading="lazy" src="${o[n].value}"${i}/>`:`<img loading="lazy" src="${n}"${i}/>`}(0,n,r,t)))}(i,t),i=function(e){return e.replace(R,ee)}(i),r&&(i=function(e){return B(e,z,o)}(i)),i=function(e){return e.replace(U,te)}(i),r&&(i=function(e){return B(e,I,"")}(i)),i=function(e,t){return e.replace(Y,((e,n,r)=>function(e,t,n,r){const{variable:i}=r;if(n in i){const e=i[n].value,r=t.length>0?t:e;return`<a href="${ne(e)}${e}">${r}</a>`}const o=t.length>0?t:n;return`<a href="${ne(n)}${n}">${o}</a>`}(0,n,r,t)))}(i,t),i=function(e){return e.replace(K,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(Q,'<input type="checkbox" disabled="disabled"/>')}(i),function(e){let t=e;for(const e of y)t=H(t,e);return t}(i)}function ie(e){return e.replace(/[\s:|-]/g,"")===c}function oe(e){const t=e.trim(),n=[...t],[r]=n,i=t[t.length-1];return r===i&&":"===r?"center":":"===i?"right":"left"}function ce(e,t,n,r,i){return t.map((t=>`<tr>${function(e,t,n,r,i){const{selector:o}=e;return t.split(o).filter(s).map(((e,t)=>{const o=n[t]||"left";return`<${r} align="${o}">${function(e,t){return re(e,t).trim()}(e,i)}</${r}>`})).join(c)}(e,t,n,r,i)}</tr>`)).join(c)}function le(e,t){return e.map(((n,r)=>function(e,t,n,r){const{selector:i,childList:o,lineContent:u,trimmedLine:a,additionalLineList:f,config:S}=e,{codeHighlight:y}=S,C=function(e){const{additionalLineList:t,config:n}=e,{lineContent:r}=e,{useLineBreak:i}=n;if(0===t.length)return c;const o=Z(r,i)?l:" ",s=t.length,u=s-1,a=Array.from({length:s}).fill("");for(let e=0;e<s;e+=1){const n=t[e];if(Z(n,i)){const t=n.replace(V,c);a[e]=e===u?t:t+l}else a[e]=e===u?n:n+" "}return o+a.join(c)}(e),T=le(o,r);let x=u.replace(V,c)+C;if(x=re(x,r),x+=T,w(u))return"";if(function(e){return h.includes(e.selector)}(e))return"<hr/>";if(function(e){return m.includes(e.selector)}(e))return function(e,t){const{selector:n,additionalLineList:r,line:i}=e,o=[i,...r],c=o.find(ie);if(!c)return`<table><tbody>${ce(e,o,[],"td",t)}</tbody></table>`;const l=o.indexOf(c),u=o.slice(0,l),a=o.slice(l+1),f=function(e,t){return t.split(e).filter(s).map(oe)}(n,c);return`<table><thead>${ce(e,u,f,"th",t)}</thead><tbody>${ce(e,a,f,"td",t)}</tbody></table>`}(e,r);if(function(e){return $.includes(e.selector)}(e)){const e=y(u,f.join("\n"));return u?`<code data-lang="${u}">${e}</code>`:`<code>${e}</code>`}if(u===c&&0===o.length)return c;if(function(e){return p.includes(e.selector)}(e)){const e=i.length-1;return`<h${e}>${x}</h${e}>`}if(function(e){return g.includes(e.selector)}(e))return`<blockquote>${x}</blockquote>`;if(function(e){return L.includes(e.selector)}(e))return`${d(e,n,-1)?"<ul>":""}<li>${x}</li>${d(e,n,1)?"</ul>":""}`;if(function(e){for(const t of b)if(t.selector===e.selector)return!0;return!1}(e)){const t=d(e,n,-1),r=d(e,n,1),{selector:i}=e,o=t?`<ol type="${function(e){for(const t of b){const{selector:n,olAttributeType:r}=t;if(e===n)return r}return"1"}(i)}" start="${function(e){const t=e.indexOf(".");return e.slice(0,t)}(a)}">`:"";return`${o}<li>${x}</li>${r?"</ol>":""}`}return u===c||function(e){const{trimmedLine:t}=e;return 0===t.search(v)||0===t.search(j)}(e)||function(e){return e.replace(G,"").trim()===c}(u)?x:`<p>${x}</p>`}(n,0,e,t))).map(X).join(c)}function se(e,t=r){const n={...r,...t},{useWrapper:o}=n,l={...r,...t,useWrapper:!1},s={additionalLineList:[],childList:[],config:n,line:c,lineContent:"",lineIndex:-1,selector:c,spaceCount:-1,trimmedLine:""},f=[s],d=[s],p={codeLineData:null,config:n,footnoteList:[],tableLineData:null,variable:{}};e.split("\n").forEach(((e,t,n)=>{!function(e,t,n,r,i,o){const l=e.trim(),s=l===c,f=s?i[i.length-1].spaceCount:e.search(/\S/),d=Math.max(0,f),p={lineContent:c,selector:c},{selector:g,lineContent:L}=s?p:function(e){for(const t of S)if(e.startsWith(t))return{lineContent:u(e.replace(t,c)),selector:t};for(const t of h)if(e.startsWith(t)&&a(e))return{lineContent:c,selector:t};for(const t of b){const{selector:n,regExpSearchSelector:r}=t;if(0===e.search(r))return{lineContent:u(e.replace(r,c)),selector:n}}return{lineContent:u(e),selector:c}}(l),y={additionalLineList:[],childList:[],config:o.config,line:s?c:e,lineContent:L,lineIndex:t,selector:g,spaceCount:d,trimmedLine:l};if($.includes(g)){if(o.codeLineData&&L===c)return o.codeLineData=null,!0;o.codeLineData=y}const{codeLineData:k}=o;if(k&&k!==y)return k.additionalLineList.push(y.line),!0;const D=function(e){const t=e.match(T);return t?t.map(O):[]}(L),{footnoteList:v,tableLineData:j,variable:N}=o;if(function(e,t){for(const n of e){const{id:e,descriptionLineData:r}=n,i=t.find((t=>t.id===e));i?i.descriptionLineData||(i.descriptionLineData=r):t.push(n)}}(D,v),m.includes(g)){if(j)return j.additionalLineList.push(y.line),!0;o.tableLineData=y}else o.tableLineData=null;const q=function(e){const t=e.match(/\[([^^][\S\s]+?)]:\s+?\S/);return t?{key:t[1],value:e.slice(e.indexOf("]:")+3).trim()}:null}(L);if(y.selector===c&&L.length>0){const e=i[i.length-1],t=m.includes(e.selector);if(q&&(N[q.key]=q),e&&e.lineContent.length>0&&!t&&!q)return e.additionalLineList.push(L),!0}const A=function(e,t){for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(r.spaceCount<e.spaceCount)return r}return null}(y,i);A&&(q||(A.childList.push(y),i.push(y),w(L)&&function(e,t){const{lineContent:n}=e,r=n.match(/\[\^[^\]]+?]:/);if(!r)return;const[i]=r,o=i.slice(2,-2).trim(),c=x(o,t);c?c.descriptionLineData=e:t.push({descriptionLineData:e,id:o,inlineLineContent:n,type:C})}(y,v)))}(e,t,0,0,d,p)}));const g=le(f,p),L=p.footnoteList.map((e=>{const{id:t}=e,n=function(e){const{inlineLineContent:t,descriptionLineData:n}=e;if(n){const{lineContent:e,additionalLineList:t}=n,r=e.indexOf("]:")+2;return e.slice(r)+"\n"+t.join("\n")}return t}(e);return`<li id="${t}">${se(n,l)}</li>`})),y=[g,0===L.length?"":["<hr/>",'<ol type="1">',...L,"</ol>"].join("")].join("");if(!o)return y;const k=function(e){const{wrapperClassName:t,themeName:n}=e,{wrapperClassName:o}=r;return`${t===o?o:`${o} ${t}`} ${i[n]}`}(n);return`<div class="${k}">${y}</div>`}const ue="md-pro-theme-dark",ae="md-pro-theme-light",fe=r.wrapperClassName;module.exports=n})();
//# sourceMappingURL=index.js.map