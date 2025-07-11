import {
    a as g,
    b as d
} from "./chunk-VDEO3AAR.js";
import {
    c as p
} from "./chunk-WIALCYDY.js";
var a = "pages",
    m = new Map,
    U = (t, o = {}) => {
        let e;
        try {
            e = new URL(t, window.location.origin)
        } catch {
            return null
        }
        let n = c => c ? p(c) : null,
            r = m.get(e.href);
        if (r) return r.then(n);
        let s = B(e, o);
        return m.set(e.href, s), s.then(n)
    },
    B = async (t, {
        cache: o = !0,
        cacheExternal: e,
        cacheKey: n,
        cacheVersion: r
    }) => {
        try {
            let s = g(),
                c = d(),
                i = s || n,
                P = c ? .getTime() ? ? r ? ? 1,
                l = i ? await R(i, P) : null;
            if (!o || !l) {
                let u = await h(t);
                if (!u) return null;
                let {
                    page: S
                } = u;
                return S
            }
            let b = await y(l, t);
            if (b) {
                let u = f(b);
                return e && !D(u, s) && w(l, t, s, e), u
            }
            return await w(l, t, s, e)
        } catch {
            return null
        }
    },
    h = async t => {
        let e = await (await fetch(t)).text();
        return {
            page: f(e),
            rawPage: e
        }
    },
    w = async (t, o, e, n) => {
        let r = await h(o);
        if (!r) return null;
        let {
            page: s,
            rawPage: c
        } = r, i = D(s, e);
        return !i && !n || (await j(t, o, c), i && m.delete(o.href)), s
    },
    D = (t, o) => {
        if (!o) return !1;
        let e = g(t);
        return e && e === o
    },
    f = t => new DOMParser().parseFromString(t, "text/html"),
    R = (t, o) => new Promise(e => {
        try {
            let n = window.indexedDB.open(t, o);
            n.onblocked = () => {
                e(null)
            }, n.onupgradeneeded = () => {
                let r = n.result;
                r.objectStoreNames.contains(a) && r.deleteObjectStore(a), r.createObjectStore(a)
            }, n.onerror = () => e(null), n.onsuccess = () => {
                let r = n.result;
                r.onversionchange = () => r.close(), e(r)
            }
        } catch {
            e(null)
        }
    }),
    y = async (t, o) => new Promise(e => {
        let s = t.transaction(a).objectStore(a).get(o.href);
        s.onerror = () => e(null), s.onsuccess = () => e(s.result)
    }),
    j = async (t, o, e) => new Promise(n => {
        let c = t.transaction(a, "readwrite").objectStore(a).put(e, o.href);
        c.onerror = () => n(), c.onsuccess = () => n()
    });
export {
    U as a
};