const CACHE_NAME = 'app-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/webmanifest.json',
  '/versions.json',
  '/system32.js',
  '/style.css',
  '/n.png',
  '/Dev.png',
  '/nova.css',
  '/libs/MaterialSymbolsRounded.woff2',
  '/scripts/edgecases.js',
  '/scripts/scripties.js',
  '/script.js',
  '/scripts/fflate.js',
  '/scripts/kernel.js',
  '/scripts/readwrite.js',
  '/scripts/utility.js',
  '/scripts/ctxmenu.js',
  '/appdata/docs.html',
  '/appdata/maps.html',
  '/appdata/notes.html',
  '/appdata/pdfreader.html',
  '/appdata/musicplayer.html',
  '/appdata/paint.html',
  '/appdata/markdown.html',
  '/appdata/calendar.html',
  '/appdata/taskboard.html',
  '/appdata/terminal.html',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache)
            .catch((error) => {
              console.error('Failed to cache some resources:', error);
              return Promise.all(urlsToCache.map(url => {
                return cache.add(url).catch(err => console.error('Failed to cache', url, err));
              }));
            });
        })
    );
  });
  

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200) return response;

        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then((cache) => cache.put(event.request, responseToCache))
          .catch(() => { });

        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
