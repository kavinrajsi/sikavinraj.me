if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()})),i.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},i=(i,s)=>{Promise.all(i.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(i)};self.define=(i,r,a)=>{s[i]||(s[i]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return s;case"module":return n;default:return e(i)}})).then(e=>{const i=a(...e);return s.default||(s.default=i),s})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"7caab0144b922e03b86875cf9beff74e"},{url:"images/angleritech.png",revision:"85581147736713018dd78287a13a09d0"},{url:"images/av-logo.svg",revision:"85e97d6cffc1b64ffc99f73f68e6dd1f"},{url:"images/avishkaram.jpg",revision:"c04aa4c5656f769d80621510aef6b051"},{url:"images/cax-logo.png",revision:"33ba6111b24aebf665446858e81258bb"},{url:"images/dribbble.svg",revision:"ebf1e6d25b54be6e8d3c6cdd1ce42e00"},{url:"images/github.svg",revision:"5af66a5f568337daa3d766a27b59fd4e"},{url:"images/instagram.svg",revision:"80b4f70dbc7aac4b61a5b605d59b8626"},{url:"images/link.png",revision:"d012fcf955250204d53c6285662c8f9b"},{url:"images/linkedin.svg",revision:"976db30b6cd763b589fe44f3c199883a"},{url:"images/medium.svg",revision:"78de0f14cfda3da174371fe152e8d625"},{url:"images/noun_link_1926441.svg",revision:"5eba43713a5ed40886239d554bd2efbc"},{url:"images/testimonials.png",revision:"4985ecf60fab5e1a9d520368fc94e712"},{url:"index.html",revision:"0336fc804d9da3ff921ad5b6f73ca523"},{url:"manifest.json",revision:"3f7c12d7364ab55d9d68375d956fff99"},{url:"scripts/vendor.js",revision:"19faf94d8b2b0bd421b0f1a5288f22ae"},{url:"styles/main.css",revision:"c507c6d5bba62130dc029322f4703881"}],{})}));
//# sourceMappingURL=sw.js.map
