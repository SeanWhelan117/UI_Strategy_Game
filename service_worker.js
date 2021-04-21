var cacheName = 'seanwhelan117-pwa';
var filesToCache = [
  'https://seanwhelan117.github.io/UI_Strategy_Game/',
  'https://seanwhelan117.github.io/UI_Strategy_Game/index.html',
  'https://seanwhelan117.github.io/UI_Strategy_Game/css/push.css',
  'https://seanwhelan117.github.io/UI_Strategy_Game/script.js',
  'https://seanwhelan117.github.io/UI_Strategy_Game/controller.html'
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