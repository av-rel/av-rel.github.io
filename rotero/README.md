# Rotero.js

## SPA hash routing for Vanilla.js app

### Route handling

#### With web bundler
---
```js
import rotero from "rotero";

const router = rotero();

//handling '/' route
// '/' and '' are not same
router.on("/", (req, res) => {
	res.send("Home Page");
});

//must run the router to start
router.run();
```
---

### Without web bundler
---
```html
<!-- index.html -->
<script src="main.js" type="module"></script>
```

```js
//main.js
import rotero from "./rotero.js"

const router = rotero();

router.on("/", (req, res) => {
	res.send("Home Page");
});

router.run();
---

### Dynamic params

```js
router.on("/page/:id", (req, res) => {
	console.log(req.params.get("id"))	//id
});
```

### Router binding

```js
const router = rotero();
const router_page = rotero();

router.on("/", (req, res) => {
	res.send("<h1>Home</h1>");
});

router_page.on("/about", (req, res) => {
	res.send("<h1>About</h1>")
});

//This will bind '/page' to '/about' => '/about/page'
router.use("/page", router_page);

router.run();
```

### Styling

```js
router.on("/", (req, res) => {
	res.send("<h1>Home</h1>");
	//applies style to the current page in the route
	res.style = `h1 {
		color : blue;
	}`;
});
```

### Redirecting

```js
router.on("/", (req, res) => {
	//Redirects to '/auth'
	res.goto("/auth");
});
```

### Default route

```js
//redirects all unhandled routes to this handler
router.all = (req, res) => {
	console.error("Page not found");
}
```
