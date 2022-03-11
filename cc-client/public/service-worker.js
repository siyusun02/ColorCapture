self.skipWaiting();

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  // Colors
  workbox.routing.registerRoute(
    '/colors',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'colors-cache',
    })
  );
  // Images
  workbox.routing.registerRoute(
    new RegExp('/images/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'roberts-image-cache',
    })
  );
} else {
  console.log(`Workbox didn't load`);
}
