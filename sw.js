self.addEventListener("install",(e=>{e.waitUntil(caches.open("akarin-msg-tools-1653969496434").then((e=>e.addAll([".","favicon.png","https://avatars.githubusercontent.com/u/47057319?s=128","assets/index.15720981.js","assets/vendor.4bc9255f.css","assets/vendor.75d30eb9.js"]))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"akarin-msg-tools-1653969496434"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));