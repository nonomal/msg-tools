self.addEventListener("install",(e=>{e.waitUntil(caches.open("akarin-msg-tools-1656683917751").then((e=>e.addAll([".","icon-1024px.png","https://avatars.githubusercontent.com/u/47057319?s=128","assets/index.91173c11.js","assets/vendor.0fd56468.css","assets/vendor.66e92faa.js"]))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"akarin-msg-tools-1656683917751"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));