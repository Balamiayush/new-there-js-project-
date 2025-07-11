import {
    j as o
} from "./chunk-N2ZCN6XY.js";
import {
    b as n
} from "./chunk-CB6LZ537.js";
var f = (e = document) => e.documentElement.getAttribute("data-wf-site"),
    p = (e = document) => {
        let t = "Last Published:";
        for (let i of e.childNodes)
            if (i.nodeType === Node.COMMENT_NODE && i.textContent ? .includes(t)) {
                let r = i.textContent.trim().split(t)[1];
                if (r) return new Date(r)
            }
    },
    w = async e => {
        let {
            Webflow: t
        } = window;
        if (!(!t || !("destroy" in t) || !("ready" in t) || !("require" in t)) && !(e && !e.length)) {
            if (e || (t.destroy(), t.ready()), !e || e.includes("ix2")) {
                let i = t.require("ix2");
                if (i) {
                    let {
                        store: r,
                        actions: s
                    } = i, {
                        eventState: c
                    } = r.getState().ixSession, a = Object.entries(c);
                    e || i.destroy(), i.init(), await Promise.all(a.map(d => r.dispatch(s.eventStateChanged(...d))))
                }
            }
            if (!e || e.includes("commerce")) {
                let i = t.require("commerce"),
                    r = f();
                i && r && (i.destroy(), i.init({
                    siteId: r,
                    apiUrl: "https://render.webflow.com"
                }))
            }
            if (e ? .includes("lightbox") && t.require("lightbox") ? .ready(), e ? .includes("slider")) {
                let i = t.require("slider");
                i && (i.redraw(), i.ready())
            }
            return e ? .includes("tabs") && t.require("tabs") ? .redraw(), new Promise(i => t.push(() => i(void 0)))
        }
    },
    b = () => {
        for (let [e, t] of o)
            if (window.matchMedia(t).matches) return e;
        return "main"
    },
    m = (e, t = !0) => {
        t && e.focus(), n(e, "w-close")
    };
export {
    f as a, p as b, w as c, b as d, m as e
};