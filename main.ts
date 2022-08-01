import 'https://deno.land/x/fetch_event_adapter/listen.ts';

// This module adds a global `FetchEvent`
if (typeof FetchEvent !== 'undefined') console.log(true);

// This module also adds global type declarations, s.t. this type-checks:
self.addEventListener('fetch', event => {
  const ip = event.request.headers.get('x-forwarded-for');
  event.respondWith(new Response(`Hello ${ip ?? 'World'}`));
});
