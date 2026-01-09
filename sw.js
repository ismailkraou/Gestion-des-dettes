const CACHE_NAME = 'debt-manager-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installation - Mise en cache des ressources
self.addEventListener('install', event => {
  console.log('Service Worker: Installation');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Force l'activation immédiate
  );
});

// Activation - Nettoyage des anciens caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activation');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Suppression ancien cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Prend le contrôle immédiatement
  );
});

// Fetch - Stratégie Cache First pour fonctionnement 100% offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si trouvé dans le cache, retourner la réponse
        if (response) {
          return response;
        }

        // Sinon, essayer de récupérer depuis le réseau
        return fetch(event.request)
          .then(response => {
            // Vérifier si la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cloner la réponse car elle ne peut être consommée qu'une fois
            const responseToCache = response.clone();

            // Mettre à jour le cache avec la nouvelle réponse
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // En cas d'échec réseau, retourner une page offline basique si disponible
            return caches.match('./index.html');
          });
      })
  );
});
