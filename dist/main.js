(()=>{"use strict";var e={341:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,"#content {\n    display: grid;\n    height: 100vh;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n}\n\n#header {\n    display: flex;\n    grid-column: 1 / 7;\n    grid-row: 1 / 2;\n    background-color:aqua;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-button {\n    align-self: center;\n   \n    width: 4rem;\n    height: 4rem;\n    border-radius: 10;\n\n}\n\n#project-list {\n    grid-column: 1 / 2;\n    grid-row : 2 / 7;\n    background-color: pink;\n    display: flex;\n    flex-direction:column;\n}\n\n#task-list {\n    grid-column: 2 / 7;\n    grid-row: 2 / 7;\n    background-color: grey;\n    padding-left: 7rem;\n}\n\n.projectName {\n    width:auto;\n    height: 4rem;\n    align-items: center;\n    display: flex;\n    padding-left: 15px;\n\n}\n\n.taskName {\n    width: auto;\n    height: 4rem;\n    align-items: center;\n    display: flex;\n    padding-left: 15px;\n}\n\n#task-form {\n    position:absolute;\n    display: flex;\n    flex-direction: column;\n    top: 42vh;\n    left: 42vw;\n    width: auto;;\n    padding: 20px;\n    height: auto;\n    background-color: grey;\n    border-radius: 15px;\n    gap: 10px;\n    visibility:hidden;\n    z-index: 5;\n   \n    \n}\n\n#project-form {\n    position:absolute;\n    display: flex;\n    flex-direction: column;\n    top: 42vh;\n    left: 42vw;\n    width: auto;;\n    padding: 20px;\n    height: auto;\n    background-color: grey;\n    border-radius: 15px;\n    gap: 10px;\n    visibility:hidden;\n    z-index: 5;\n   \n    \n}\n\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=i(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=o(e,i),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),a=n.n(r),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(341),m={};function v(e){for(;e.firstChild;)e.removeChild(e.firstChild)}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","project-list");const n=document.createElement("div");n.setAttribute("id","task-list");const o=document.createElement("button");o.setAttribute("id","task-button"),o.innerText="New Task";const i=document.createElement("button");i.setAttribute("id","project-button"),i.innerText="New Project";const r=document.createElement("div");r.setAttribute("id","header"),console.log("hello"),r.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(r),r.appendChild(o)}();const h=e=>({name:e,listOfTask:[]}),g=h("default-project");console.log(g);let y=[g],b=[];function x(e){return b=e,b}function k(){const e=document.getElementById("project-list");v(e);for(let t=0;t<y.length;t++){let n=document.createElement("button");n.className="projectName",n.innerText=y[t].name,n.addEventListener("click",(function(e){x(y[t]),w(),console.log(n),console.log(n.listOfTask)})),e.appendChild(n)}}x(g),k();const E=(e,t,n)=>({name:e,description:t,date:n,position:b.length+1}),T=E("default task","write anything here","02/03/2023");function w(){const e=document.getElementById("task-list");v(e),console.log("proyecto seleccionado"+b.listOfTask);for(let t=0;t<b.listOfTask.length;t++){const n=document.createElement("div");n.className="taskName";const o=document.createElement("button");o.className="eraseTask",N(o,t),n.innerText=b.listOfTask[t].name,o.innerText="X",n.appendChild(o),e.appendChild(n)}}b.listOfTask.push(T),w(),console.log("default project"+g),console.log("default task"+T),console.log("project list"+y);const j=document.getElementById("task-form");function C(){"visible"!==j.style.visibility?j.style.visibility="visible":j.style.visibility="hidden"}const O=document.getElementById("project-form");function I(){"visible"!==O.style.visibility?O.style.visibility="visible":O.style.visibility="hidden"}function N(e,t){e.addEventListener("click",(function(e){var n;n=b.listOfTask[t].position-1,b.listOfTask.splice(n,1),w()}))}O.addEventListener("submit",(function(e){let t=O["project-name"].value;console.log(t);let n=h(t);!function(e){y.push(e)}(n),console.log(y),e.preventDefault(),I(),x(n);const o=E("default task","write anything here","02/03/2023");b.listOfTask.push(o),k(),w()})),j.addEventListener("submit",(function(e){let t=j.name.value,n=j.description.value,o=j.date.value;var i;i=E(t,n,o),b.listOfTask.push(i),console.log(b),e.preventDefault(),w(),k(),C()})),document.getElementById("task-button").addEventListener("click",(function(e){C()})),document.getElementById("project-button").addEventListener("click",(function(e){I()}))})()})();