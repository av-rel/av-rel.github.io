import std/dom
import ./nav

document.body.appendChild(nav.nav)

var h = document.createElement("h1")
h.innerText = "Home Page"
document.body.appendChild(h)
