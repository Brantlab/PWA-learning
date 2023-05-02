importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
/*
workbox.routing.registerRoute(
  ({request}) => request.destination === 'file',
  new workbox.strategies.CacheFirst()
);
*/