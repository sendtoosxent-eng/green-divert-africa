const CACHE_NAME = 'gdfa-shell-v34';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './styles.css?v=56',
  './app.js?v=86',
  './pwa-icon.svg',
  './green-divert-africa-logo.png',
  './eco-market-logo.png',
  './agriculture-svgrepo-com.svg',
  './bell-ui-notification-svgrepo-com.svg',
  './couple-of-half-oranges-svgrepo-com.svg',
  './cutlery-cross-couple-of-fork-and-spoon-svgrepo-com.svg',
  './delivery-truck-van-svgrepo-com.svg',
  './home-2-svgrepo-com.svg',
  './home-house-ui-svgrepo-com.svg',
  './love-ui-heart-svgrepo-com.svg',
  './order-svgrepo-com.svg',
  './place-ui-pin-svgrepo-com.svg',
  './recycle-svgrepo-com.svg',
  './search-circle-svgrepo-com.svg',
  './search-magnifier-ui-svgrepo-com.svg',
  './shopping-bag-svgrepo-com.svg',
  './shopping-basket-svgrepo-com.svg',
  './user-profile-avatar-svgrepo-com.svg',
  './verified-check-svgrepo-com.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  })));
});
