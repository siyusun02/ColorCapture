importScripts("/precache-manifest.da4771659ae5fcaef8622deb1c05c414.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.skipWaiting();

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
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

