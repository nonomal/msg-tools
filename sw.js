self.addEventListener("install",(e=>{e.waitUntil(caches.open("akarin-msg-tools-1656086170180").then((e=>e.addAll([".","icon-1024px.png","https://avatars.githubusercontent.com/u/47057319?s=128","assets/index.56ab3688.js","assets/vendor.00b1b2e9.js","assets/vendor.21f080be.css"]))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"akarin-msg-tools-1656086170180"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));