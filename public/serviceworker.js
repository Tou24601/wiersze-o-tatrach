const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

//Install Service Worker

self.addEventListener("install", (event) => {
    event.waitUntli(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log("Opened cache");

            return cache.addAll(urlsToCache);
        })
    )
});

//Listen for requests

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
        })
    )
});

//Activate the SW

self.addEventListener("activate", (event) => {});