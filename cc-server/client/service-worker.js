importScripts("/precache-manifest.b98a4727f5db6188315c85f121a0f730.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.skipWaiting();

self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body.message,
    icon: 'img/icons/android-chrome-192x192.png',
  });
});

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

