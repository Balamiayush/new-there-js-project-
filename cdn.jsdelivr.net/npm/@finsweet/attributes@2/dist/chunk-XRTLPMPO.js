var i = e => typeof e == "string",
    r = e => typeof e == "number",
    l = e => typeof e == "boolean";
var c = e => e instanceof Date,
    m = () => {},
    T = e => e != null,
    a = (e, n) => !!e && n.includes(e);
var u = e => e instanceof Element,
    E = e => e instanceof HTMLElement,
    p = e => e instanceof HTMLVideoElement,
    t = e => e instanceof HTMLInputElement,
    o = e => e instanceof HTMLSelectElement,
    s = e => e instanceof HTMLTextAreaElement,
    H = e => t(e) || o(e) || s(e),
    L = e => e instanceof HTMLFormElement,
    M = e => e instanceof HTMLAnchorElement,
    x = e => e instanceof HTMLOptionElement,
    f = e => e instanceof HTMLImageElement;
export {
    i as a, r as b, l as c, c as d, m as e, T as f, a as g, u as h, E as i, p as j, t as k, o as l, s as m, H as n, L as o, M as p, x as q, f as r
};