importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}



import {matchPrecache, precacheAndRoute} from 'workbox-precaching';
import {registerRoute, setDefaultHandler, setCatchHandler} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';

// Optional: use the injectManifest mode of one of the Workbox
// build tools to precache a list of URLs, including fallbacks.
precacheAndRoute(self.__WB_MANIFEST);

// Use an explicit cache-first strategy and a dedicated cache for images.
registerRoute(
  new RegExp('/img/'),
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new StaleWhileRevalidate());

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(({event}) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      // return matchPrecache(FALLBACK_HTML_URL);
      return caches.match(FALLBACK_HTML_URL);
      break;

    case 'image':
      // If using precached URLs:
      // return matchPrecache(FALLBACK_IMAGE_URL);
      return caches.match(FALLBACK_IMAGE_URL);
      break;

    case 'font':
      // If using precached URLs:
      // return matchPrecache(FALLBACK_FONT_URL);
      return caches.match(FALLBACK_FONT_URL);
      break;

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
