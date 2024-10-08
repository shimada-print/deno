import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import * as ejs from "https://deno.land/x/dejs@0.10.3/mod.ts";

const app = new Application();

app.use(async (ctx) => {
    const pathname = ctx.request.url.pathname;

    switch (pathname) {
        case "/":
            const html = await ejs.renderFile("./templates/index.ejs", { title: "Home" });
            ctx.response.body = html;
            break;
        case "/page2":
            const html2 = await ejs.renderFile("./templates/page2.ejs", { title: "Page 2" });
            ctx.response.body = html2;
            break;
        case "/page3":
            const html3 = await ejs.renderFile("./templates/page3.ejs", { title: "Page 3" });
            ctx.response.body.html3 = html3;
            break;
        case "/page4":
            const html4 = await ejs.renderFile("./templates/page4.ejs", { title: "Page 4" });
            ctx.response.body = html4;
            break;
        default:
            ctx.response.status = 404;
            ctx.response.body = "Not Found";
    }
});

await app.listen({ port: 8080 });
