import {
    i as d
} from "./chunk-XRTLPMPO.js";
var c = e => {
        if (!e.id || document.getElementById(e.id) !== e) {
            let t = crypto.randomUUID();
            return e.id = t, t
        }
        return e.id
    },
    r = e => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length),
    l = (e, t = !0) => e.cloneNode(t),
    i = e => {
        let t;
        for (let o of e.childNodes)
            if (d(o) && o.childNodes.length ? t = i(o) : o.nodeType === Node.TEXT_NODE && o.textContent ? .trim() && (t = o), t) break;
        return t
    },
    f = e => {
        if (r(e)) return;
        let t = e,
            o = ({
                parentElement: n
            }) => {
                n && (r(n) || (t = n, o(n)))
            };
        return o(e), t
    },
    u = e => {
        let {
            overflow: t
        } = getComputedStyle(e);
        return t === "auto" || t === "scroll"
    };
export {
    c as a, r as b, l as c, i as d, f as e, u as f
};