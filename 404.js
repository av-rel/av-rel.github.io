export default function (req, res) {
    if (!req.path.length)
        window.location.href = window.location.origin + '/#/';
    res.title = "404";
    res.body = `
		<h1>404</h1>
	`;
}
