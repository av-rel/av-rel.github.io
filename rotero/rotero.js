import { match } from "./pregexp.js";
function default_route(req, res) {
    res.title = "404 | Not Found";
    res.body = `
	<h1>Page ${req.path}</h1>
	<h1>404 not found</h1>
`;
    res.style = `* {
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	text-align: center;
}
`;
    console.error(`GET ${req.path} 404 (Page not found)`);
}
function route_manager(root, routes, def) {
    var _a;
    let path = window.location.hash.substring(1);
    let query = new URLSearchParams(window.location.search);
    let req = {
        url: window.location.href,
        path,
        params: new Map(),
        query,
    };
    let res = {
        title: document.body.title,
        body: root.innerHTML.toString(),
        send: function (body) { res.body = body; },
        goto: function (route) {
            const url = new URL(window.location.href);
            url.hash = route;
            window.location.href = url.href;
        }
    };
    let handler = (_a = get_handler(path, req, routes)) !== null && _a !== void 0 ? _a : def;
    handler(req, res);
    if (res.title)
        document.title = res.title;
    if (res.style)
        res.body += `<style>${res.style}</style>`;
    root.innerHTML = res.body;
}
function get_handler(path, req, routes) {
    let handler = null;
    routes.forEach((val, key) => {
        let result = match(key, { encode: encodeURI, decode: decodeURI })(path);
        req.path = result.path || path;
        if (result) {
            if (result.params) {
                Object.keys(result.params).forEach(key => {
                    req.params.set(key, result.params[key]);
                });
            }
            handler = val;
        }
    });
    return handler;
}
export class Router {
    constructor(node = "#app") {
        this.node = node;
        this.routes = new Map();
        let app = document.querySelector(this.node);
        if (!app) {
            app = document.createElement("div");
            app.setAttribute("id", this.node);
            document.body.appendChild(app);
        }
        this.root = app;
        this.all = default_route;
    }
    on(route, handler) {
        this.routes.set(route, handler);
    }
    use(route, router) {
        router.routes.forEach((v, k, _) => this.routes.set(route + k, v));
    }
    remove(route) {
        this.routes.delete(route);
    }
    run() {
        window.addEventListener("DOMContentLoaded", () => route_manager(this.root, this.routes, this.all));
        window.addEventListener('hashchange', () => route_manager(this.root, this.routes, this.all));
    }
}
export default function createRouter() {
    return new Router();
}
