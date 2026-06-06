self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("brora-map-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./map.js",
        "./images/icon-192.png",
        "./images/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
