/* Generated by the Nim Compiler v1.6.12 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var h_486539266 = [document.createElement("h1")];
h_486539266[0].innerText = "About Page";
document.body.appendChild(h_486539266[0]);