import 'https://deno.land/x/fetch_event_adapter/listen.ts';

// This module adds a global `FetchEvent`
if (typeof FetchEvent !== 'undefined') console.log(true);

// This module also adds global type declarations, s.t. this type-checks:
self.addEventListener('fetch', event => {
  event.respondWith(const res = await fetch('https://www.baidu.com'));
});
