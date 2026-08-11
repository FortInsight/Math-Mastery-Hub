const CACHE_NAME = "math-and-english-mastery-hub-v35";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./app.html",
  "./styles.css",
  "./app.js",
  "./auth.js",
  "./avatar-library.js",
  "./manifest.webmanifest",
  "./icon-192.svg",
  "./icon-512.svg",
  "./avatars/blue-bear.svg",
  "./avatars/green-rocket.svg",
  "./avatars/orange-star.svg",
  "./avatars/purple-book.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
      await self.clients.claim();

      // A newer version of the app just took over. Tell every open window/tab (including
      // installed home-screen apps, which are otherwise easy to get stuck on a stale version)
      // to reload itself so people actually see the update instead of sitting on old cached
      // content indefinitely.
      const allClients = await self.clients.matchAll({ type: "window" });
      allClients.forEach((client) => client.postMessage({ type: "MASTERY_HUB_RELOAD" }));
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          return networkResponse;
        })
        .catch(async () => {
          const cachedPage = await caches.match(event.request);
          if (cachedPage) {
            return cachedPage;
          }
          return caches.match("./index.html");
        })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
