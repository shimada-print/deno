import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 7979 });

console.log("http://localhost:7979/");
for await (const req of s) {
  req.respond({ body: "<h1>Hello Deno World</h1>\n" });
}
