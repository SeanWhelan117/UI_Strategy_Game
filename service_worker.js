var cacheName = 'seanwhelan117-pwa';
var filesToCache = [
  '/UI_Strategy_Game/',
  '/UI_Strategy_Game/index.html',
  '/UI_Strategy_Game/css/push.css',
  '/UI_Strategy_Game/script.js',
  '/UI_Strategy_Game/controller.html'
];

/* Cache contents when Offline See Cache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline, examine Cache Storage */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
