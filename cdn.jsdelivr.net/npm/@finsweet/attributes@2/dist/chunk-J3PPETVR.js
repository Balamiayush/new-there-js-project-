import {
    c as u
} from "./chunk-WIALCYDY.js";
import {
    a as c
} from "./chunk-N2ZCN6XY.js";
var e, a = new Set,
    h = () => {
        if (e) return e;
        let s = document.querySelectorAll('link[rel="stylesheet"]');
        e = new Set;
        for (let o of s) {
            let {
                href: t
            } = o;
            try {
                let {
                    origin: n
                } = new URL(t);
                if (n !== c) continue;
                e.add(t)
            } catch {
                continue
            }
        }
        return e
    },
    S = s => {
        let o = h(),
            t = [...s.documentElement.querySelectorAll('link[rel="stylesheet"]')];
        return Promise.all(t.map(n => {
            let {
                href: r
            } = n;
            try {
                let {
                    origin: d
                } = new URL(r);
                return d !== c || o.has(r) || a.has(r) ? void 0 : (a.add(r), new Promise(l => {
                    let i = u(n);
                    i.addEventListener("load", () => l(void 0), {
                        once: !0
                    }), document.head.append(i), window.setTimeout(() => l(void 0), 1e4)
                }))
            } catch {
                return
            }
        }))
    };
export {
    S as a
};