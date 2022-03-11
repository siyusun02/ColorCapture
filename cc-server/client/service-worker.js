importScripts("/precache-manifest.d7cdf1769c784124a00bc256f93fea63.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.skipWaiting();

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  // Colors
  workbox.routing.registerRoute(
    '/colors',
    new workbox.strategies.NetworkFirst({
      cacheName: 'colors-cache',
    })
  );
  // Palettes
  workbox.routing.registerRoute(
    '/palettes',
    new workbox.strategies.NetworkFirst({
      cacheName: 'colors-cache',
    })
  );
  // Images
  workbox.routing.registerRoute(
    new RegExp('/images/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images-cache',
    })
  );
} else {
  console.log(`Workbox didn't load`);
}

