import { serve } from "https://deno.land/std@0.145.0/http/server.ts";

serve((req: Request) => await fetch(new Request("https://github.com", req));
