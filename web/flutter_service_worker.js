'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "02597501092a5da843557bedcc97c867",
"assets/assets/appbar/appbar_bg.png": "b572ab716fc83421f488bb9047c76fdf",
"assets/assets/bg/action_bg.png": "489a9f50fc8a84a011dfeb8dcd1a73c5",
"assets/assets/bg/background_login.png": "5244ece256a11a185cdc485cde3991cf",
"assets/assets/bg/background_register_and_forgot.png": "43aaced1a2cd621d380a8e7594a4d026",
"assets/assets/bg/bg.png": "bf78ae652ce17992e7819735b1c186ed",
"assets/assets/bg/blue_bg.png": "b55542320ac4fda505e271c75f189560",
"assets/assets/bg/blue_fun_bg.png": "371f2bcb7dc3a540a26d11be1858bc61",
"assets/assets/bg/home_bg.png": "e71d790eee23144674141a99c354b236",
"assets/assets/bg/img.png": "a689e98b120c759475907227feef25bf",
"assets/assets/bg/list_isEmpty.png": "0c04e6f8dd869247bb39b00c9658a200",
"assets/assets/bg/menu_bg.png": "a3c70fb319dfc40b059e9b6502fb5c61",
"assets/assets/bg/order_not_found.png": "80456a4d38ba24d69a0eb86c9760124f",
"assets/assets/bg/profile.png": "cc37c2877dbe7527ceccfc4afacd2d0d",
"assets/assets/bg/splash_screen.png": "2ce48e7171db62b03b613ad29687762a",
"assets/assets/fonts/SukhumvitSet-Bold.ttf": "cf83ce0aa5e75930d38e0bff88d9426c",
"assets/assets/fonts/SukhumvitSet-Light.ttf": "1c2625bbb3f5af12c941c712183f9708",
"assets/assets/fonts/SukhumvitSet-Medium.ttf": "e54f4b9d0df88a9af7636bee55ac9bc1",
"assets/assets/fonts/SukhumvitSet-SemiBold.ttf": "d55ff127a3c864c5d185b86c3d28f0e9",
"assets/assets/fonts/SukhumvitSet-Thin.ttf": "e80083d09b84fbd00e556151e4118c62",
"assets/assets/icons/backIcon.png": "fd0272f5d22f5a180a5cf119149ceb05",
"assets/assets/icons/box.png": "781dc18c8713fcf3b29625bb4a6a5157",
"assets/assets/icons/home.png": "e1106ca9f88fafc83b7eaab8c66844c2",
"assets/assets/icons/home_color.png": "c9bd0e106aec8660714113c8ffd04780",
"assets/assets/icons/img.png": "a75b3d4f9ec85168e9ba6aa9b4fa7706",
"assets/assets/icons/list.png": "03d3bad98f84c866aa27d196741a70ad",
"assets/assets/icons/list_color.png": "56e34e2b1f17fc7dca193e74d51f8885",
"assets/assets/icons/person.png": "f4315540a81ef1e4530623bf4b5237f8",
"assets/assets/icons/person_color.png": "33d2de8081fa6e3ac49742245eb2342c",
"assets/assets/icons/scan.png": "86d7f4176ba8492364963606f60d0f93",
"assets/assets/icons/status.png": "04b8048d9b974519cc42ff15eaefa8e6",
"assets/assets/icons/status_color.png": "80f9230ea3e8c09fd5061237f26f35b3",
"assets/assets/icon_button/edit_buuton.png": "1ef671b0c9ddb3dfdcc16b3f9760d059",
"assets/assets/icon_button/marker.png": "e03ce682cd25bbe69deea017c262e07f",
"assets/assets/icon_button/more.png": "14dc8d1492ac61bcfdaf1c1e8dd48c46",
"assets/assets/icon_button/print_site.png": "05300c9bb47749fb906e4f1ce39a9e0d",
"assets/assets/icon_button/print_text.png": "0c0899c7953b025c25a66d641dc2eda4",
"assets/assets/icon_button/q&a.png": "0d021cd43216d7b1dfcaec404cda707b",
"assets/assets/icon_button/transport_price.png": "bae3d2d3c1259ca76cb5d299beb8c311",
"assets/assets/logo/bg.png": "98d1e02dc9bc6f5acef842d398405d79",
"assets/assets/logo/logo_app.png": "ccfc0b707efc6a1a4ec8f0fd6e22d136",
"assets/assets/logo/release.png": "c111bc0b3ede17df6123f70ffca2492e",
"assets/assets/promotions/promo1.png": "4bb555b2d47bf1c64437a9cb14e0bc3a",
"assets/assets/promotions/promo2.png": "45c4f85107884cc9571410c26dc9970b",
"assets/assets/promotions/service.png": "22f3396c8ebe2bccb8989840bcb22693",
"assets/assets/promotions/sp1.jpeg": "caf1406e249d93357ebfc5543effa1e6",
"assets/assets/promotions/sp2.jpeg": "f7eec6b0c97c40f93f97fb255af1d07b",
"assets/assets/svg/manchot_linux.svg": "d2cfdf4a3d74cd7a3d5b811e747cbfc5",
"assets/assets/svg/splash.png": "f384255c0a3d684089d3e1c519833b99",
"assets/assets/svg/splash.svg": "56ea30fbd4d9196efe3ddb943bbdeb1c",
"assets/assets/transports/bestexpress.png": "1ed654b4e5db6146064c94d94aed82c2",
"assets/assets/transports/flash.png": "b420ec606a1006f1c4579ab0ad7fd0dc",
"assets/assets/transports/logotrue.png": "820fb1f9abf4542f560dbd48ed6bbfc8",
"assets/assets/transports/ninjavan.png": "4053465b552bb56cebe536d469b8a00c",
"assets/FontManifest.json": "6d92accfcc6ad0e976ff6f131108cbc0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c3a3a8c370fbcc0b7790fb512c7100c0",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2dc8b1b0b25fd81dbcbb9aab7f132ac",
"/": "f2dc8b1b0b25fd81dbcbb9aab7f132ac",
"main.dart.js": "8f3ef543178e60667eebd35a69b66782",
"manifest.json": "4b5ddb95239a707a8d5e55097b08f966",
"version.json": "4c49d9b2584f4ffe6b046339759dc894"
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
