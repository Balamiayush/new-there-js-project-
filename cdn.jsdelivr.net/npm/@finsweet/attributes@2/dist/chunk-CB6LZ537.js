import {
    e as s
} from "./chunk-XRTLPMPO.js";

function v(e, n, r, t) {
    if (!e) return s;
    let a = Array.isArray(e) ? e : e instanceof Set ? [...e] : [e];
    return a.forEach(o => o.addEventListener(n, r, t)), () => a.forEach(o => o.removeEventListener(n, r, t))
}
var i = (e, n) => (Array.isArray(n) || (n = [n]), n.map(t => e.dispatchEvent(new Event(t, {
    bubbles: !0
}))).every(t => t));
export {
    v as a, i as b
};