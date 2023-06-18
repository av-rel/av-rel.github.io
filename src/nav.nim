import std/dom

var nav* = document.createElement("nav")
nav.setAttribute("class", "navbar navbar-dark bg-dark")

var about = document.createElement("li")
about.innerText = "About"
about.setAttribute("id", "about")
about.setAttribute("href", "./about")
about.style.cursor = "pointer"
about.addEventListener("click",
    proc(e : Event)=
        e.preventDefault()
        window.location.href = "./about"
)

var bar = document.createElement("a")
bar.setAttribute("id", "bar")
bar.setAttribute("class", "navbar-brand")
bar.setAttribute("href", "./")
bar.innerText = "Navbar"

var ul = document.createElement("ul")
ul.setAttribute("id", "ul")
ul.appendChild(about)

var col = document.createElement("div")
col.setAttribute("id", "col")
col.appendChild(ul)

nav.appendChild(bar)
nav.appendChild(col)
