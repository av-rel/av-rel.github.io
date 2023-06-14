import rotero from "../rotero/rotero.js";
import FourOhFour from "./404.js";
const router = rotero();
router.on("", (req, res) => {
    res.title = "Home";
    res.send("<h1>Home</h1>");
});
router.on("/:page", (req, res) => {
    res.title = req.params.get("page");
    res.body = `<h1>Hello ${res.title}</h1>`;
});
router.all = FourOhFour;
router.run();
