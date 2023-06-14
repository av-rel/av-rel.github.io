import {Request , Response} from "../rotero/rotero.js";

export default function(req : Request, res : Response) {
	res.title = "404"
	res.body = `
		<h1>404</h1>
	`
}
