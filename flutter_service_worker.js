'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "faf81d25edfc14f4c641361dfc966f13",
"assets/assets/images/arduino.png": "e749af206ba2d7e9c3d54a344a21ac4d",
"assets/assets/images/google_colab.png": "dcdfe44908d75e590b145bcc54f7ead7",
"assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/python.png": "cea69ad2420836333b55f735944a87f4",
"assets/assets/images/android.png": "9709426e6d872048da7335a7b19bd768",
"assets/assets/images/opencv.png": "89543ce332215c0cba934c2173fc5f24",
"assets/assets/images/raspberry.png": "a37287791011d8acf74eae97839dfddc",
"assets/assets/images/Cpp.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/images/android-studio.png": "483c3a0b31470e70b3756fb072437dc6",
"assets/assets/images/icon.png": "32f49b306ae32975a26031e7bbcae3da",
"assets/assets/images/javascript.png": "4ec6100eb5c69eaeb471cce017614b01",
"assets/assets/images/flask.png": "70c30b834f681afe86155783ec72f112",
"assets/assets/images/bash.png": "08260e63a1c453f82f5ec1b37e2e6243",
"assets/assets/images/docker.png": "a47178cd31d2f3703be69338b2b1c2d9",
"assets/assets/images/vim.png": "b8834ec369579dcea6a46f334ecdb8c8",
"assets/assets/images/wallpaper.jpeg": "67d2d63c823608698e40781074425c8b",
"assets/assets/images/tf.png": "78959bc666ad95624236e849a9707f77",
"assets/assets/images/flutter.png": "01ddc457751108de4caeafd76f622f9a",
"assets/assets/images/wallpaper2.jpeg": "af8d23a0cf52732dd50f35cfa75af390",
"assets/assets/images/java.png": "78ef391e0404a978ca1b2d728ac22d07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "54f15ba4dd6531730c1b0d879e6abaa3",
"assets/AssetManifest.json": "bbbaa0377bf7cb498b55e9933c0c234b",
"README": "44bd84a26631625dc51bceb0649ff8c3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "cf30a5d15f9f8c3a37388a2051c1a39a",
"manifest.json": "dc6fbf562eb11e666b89f4b0220f3e2d",
"main.dart.js": "3167c45e0966a71ee242ffe136d79edd",
"index.html": "5379522ca3625845f795b5e804250348",
"/": "5379522ca3625845f795b5e804250348",
".git/objects/64/fa689b7945a63fa625912a99cff156bfbb832f": "9150b5f41e50232403fecd71d7801ee5",
".git/objects/14/2f8ea70c77269d526d9e7c2e092da0cf88decf": "d4e97880ad46f1081b072b358878206d",
".git/objects/pack/pack-8728556310026bbbeb3baf55c1ff5f898d100f67.idx": "8b321b9cbe129b1e436d2334f8489dc0",
".git/objects/pack/pack-8728556310026bbbeb3baf55c1ff5f898d100f67.pack": "134de42b5ea847aecebe56be41ba4421",
".git/objects/8d/66d5bd50508b786d907161733e268e2d7e9cd8": "8bb4e39d0bac601c90c22743aed89c8f",
".git/objects/6e/f6cdc37a5f3981e5321a079d5080d8aedc2ac7": "8edfe8c58d761c4ddafa084540f73377",
".git/COMMIT_EDITMSG": "93bb230c93028119912ecc4cffbc62ca",
".git/index": "324e955cd022cb218924809382494f6d",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/refs/heads/release": "c32fc05159d5d79763741cbcbd69bd49",
".git/refs/remotes/origin/release": "c32fc05159d5d79763741cbcbd69bd49",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/logs/HEAD": "b180b2941c4ad54037166c8916e5f3d0",
".git/logs/refs/heads/release": "b180b2941c4ad54037166c8916e5f3d0",
".git/logs/refs/remotes/origin/release": "4e1b198b16ae541b713b717a9b5aede5",
".git/logs/refs/remotes/origin/HEAD": "22dae83885708f1738b0f747935e3fb9",
".git/config": "b61cf5823a889a757e8a13f4e4c6f868",
".git/packed-refs": "dd68a1ebe3a1949f689ea1e01778af00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
