// Simple service worker for caching
const CACHE_NAME = 'fare-calculator-v1.2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return new Response('You are offline. Please check your connection.');
      })
  );
});