'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "11ef6d7ba17b5dcf8102cdda77635235",
".git/config": "ca93d6b0d439402a2a13c0137ed3bd96",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e993310f40eb3fe1c9b94f45ef1f7c94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "98baa59ee4677311ae07e5acdb73dfe3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9cce4b724ea733e9ce45cdbfa68ebe3",
".git/logs/refs/heads/main": "2e93e2e795a8eb776159f639548d3d9c",
".git/logs/refs/remotes/origin/main": "84c0c8f450be12a8cd7cf8db207788bf",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0a/dae6fb101364ceac1205413c7dd180463358b3": "2d4b2d43e16c9549de481bfdb77c18f0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/99cbe21536b1d11f204e05fbb1a4883d43e430": "da768d1edffa22ab150c81e7b1e6dc92",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/14/24bfb451d73e82719228f5bc6a022d1336561d": "f288df530d44f67b10f3b46cbf717118",
".git/objects/1e/2dbace14ba0144e6630ab5ff62f0e1e1f8bcfa": "5c6cd94a7354128746f5a5a0feacb31c",
".git/objects/23/d214a436f6e4ce7093bade04485aead9638890": "02059d41b430267df96a281f8ea0a447",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/89a942b1a73450ec3575d0e64ca2226f8338b4": "6320265cf225b70f7c2c4eab9d4c95f9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/36a8c6895bc40765e0f045981b7d713eb0ef8c": "8fd4004b0f80ae96452998903cb58d04",
".git/objects/34/c24ef6c6747c6bdbf7799db84034d12906bbb2": "2f7e4b2ed78a70e48f6348919a85a316",
".git/objects/45/e60319c3242afe9c77e925362e659e671104c3": "695e4c25a7e5db9795eaaaa62095dcd9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/68067284801e1497cf8d664a2c8437d5593ad7": "f89d80750fccc053d5435408145f1cb2",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/5c/2b87d6e13f1ea5ed469d1f6076ae2643f84d4f": "2c2621b65f8ea2cc2b18fe40b08fb56f",
".git/objects/6b/2c7cdfb8112f057cff86b256f19276e4c974c8": "d46ebbcd7c73a83dad1a58d928bf6ad4",
".git/objects/75/adcaf1fe44b407a07c545108a41f85325ff4a0": "3e9809715a46c1e9b1714c8df8f3c6f7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/6229ef0ee067f422e9c04f375174971e3ed429": "569414553b280cad5c3c42175d996354",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4bee448e748ade6848b07eef20d44923870fbc": "ba3360d49441c88f19539a15b8e32744",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/aa/6c07082e7db697132a4612ab0025b541eba90d": "ca6a70b5266be998b624939494b67d55",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/d5e170a93096784adfd62f971e23ebc2025e6b": "b591fd6d2443b9c2ec5aa045c34ca0ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/73ae8e5e1fbf48cc492fcab94062c09d9af943": "f206d38d95e52481e410afe3e97f81a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5ad249d9939e41b192aae3a688429d402c9430": "6538ddeeda79a1036b21d57053e37e53",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/0d1808030c8663f6b85afb864f5ebd1ed049c5": "f0819762db64b9b9c0b3c45b25223103",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/97374a900c4ee7761b964e823c5474f1ced190": "e26d3cd29f737bc1c33ec6fdab5dcc68",
".git/objects/e8/c1b898044d06d37191ec8960cec6e70a7ab988": "c2f8535c21c22984598ea988efec51bd",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/7613a27de0d3562ce60c76ffd07dce6b53ba3a": "07288d6956325eae60ec217b89d9a886",
".git/refs/heads/main": "403aaa2185aed3fcb88c9f5b6961d07b",
".git/refs/remotes/origin/main": "7a16b62501c924a8787a2c593b03748f",
"8e8fb296": "82c38efd29bac372af97b6b7c3918f84",
"assets/AssetManifest.json": "e6b96547c3468edcfafd10039478de96",
"assets/assets/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/youtube.png": "1995f228b77d78339276904702a7ac2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f0536017fa00992ddfa8b1ab6d0c3eb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "df576eb748938ad56fd09f9f67d67431",
"/": "df576eb748938ad56fd09f9f67d67431",
"main.dart.js": "e9ba8ba30fba833606317c6964af4283",
"manifest.json": "2cad8c564ff9d0373c62dff40058147b",
"version.json": "11a275b641b3a2a315189b3a90f43f9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
