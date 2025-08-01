import {
    a as c
} from "./dist/chunk-J3PPETVR.js";
import {
    a as p
} from "./dist/chunk-XVVXVZAF.js";
import "./dist/chunk-VDEO3AAR.js";
import "./dist/chunk-WIALCYDY.js";
import "./dist/chunk-OF4NI3Y7.js";
import "./dist/chunk-N2ZCN6XY.js";
import "./dist/chunk-L4B2V5MO.js";
import "./dist/chunk-CB6LZ537.js";
import "./dist/chunk-XRTLPMPO.js";
import {
    A as u
} from "./dist/chunk-REJ3R5JH.js";
import {
    d as w
} from "./dist/chunk-GGDEANQW.js";
import "./dist/chunk-K46K3RI5.js";
var l = "2.6.4";
var m = async t => {
    switch (t) {
        case "accordion":
            return import ("./dist/src-ZJIE2WMJ.js");
        case "autovideo":
            return import ("./dist/src-2D46IZW7.js");
        case "codehighlight":
            return import ("./dist/src-EYBV6Y62.js");
        case "combobox":
            return import ("./dist/src-TGERRPSY.js");
        case "inject":
            return import ("./dist/src-3CTHOB6T.js");
        case "copyclip":
            return import ("./dist/src-HOLJSL6G.js");
        case "displayvalues":
            return import ("./dist/src-CG25BDGN.js");
        case "favcustom":
            return import ("./dist/src-V3ICQQGH.js");
        case "formsubmit":
            return import ("./dist/src-N4T3PLKX.js");
        case "inputactive":
            return import ("./dist/src-VYOUZXDK.js");
        case "inputcounter":
            return import ("./dist/src-HNUBBRTE.js");
        case "list":
            return import ("./dist/src-VUXR63T3.js");
        case "mirrorclick":
            return import ("./dist/src-UOPVKEM3.js");
        case "mirrorinput":
            return import ("./dist/src-4KERPU77.js");
        case "modal":
            return import ("./dist/src-ZGMTFMPU.js");
        case "numbercount":
            return import ("./dist/src-FO3OKWU5.js");
        case "queryparam":
            return import ("./dist/src-TJPM424C.js");
        case "rangeslider":
            return import ("./dist/src-VVQK7WSQ.js");
        case "readtime":
            return import ("./dist/src-LYPAINWC.js");
        case "removequery":
            return import ("./dist/src-QDCOPCJR.js");
        case "scrolldisable":
            return import ("./dist/src-RZS6T6LE.js");
        case "selectcustom":
            return import ("./dist/src-53M22OGA.js");
        case "sliderdots":
            return import ("./dist/src-VVNZ45XE.js");
        case "smartlightbox":
            return import ("./dist/src-BB2OZ22G.js");
        case "socialshare":
            return import ("./dist/src-QJSAYV22.js");
        case "starrating":
            return import ("./dist/src-TVGWPX7Q.js");
        case "toc":
            return import ("./dist/src-QFKTPU4C.js");
        case "videohls":
            return import ("./dist/src-NDVPVKKI.js");
        default:
            throw `Finsweet Attribute "${t}" is not supported.`
    }
};
var h = "fs-attributes",
    b = new Set(Object.values(u)),
    y = () => {
        let {
            FinsweetAttributes: t
        } = window;
        if (t && !Array.isArray(t)) {
            d();
            return
        }
        let e = Array.isArray(t) ? t : [],
            s = [...document.querySelectorAll(`script[type="module"][src="${import.meta.url}"]`)];
        window.FinsweetAttributes = {
            version: l,
            scripts: s,
            modules: {},
            process: new Set,
            utils: {
                fetchPage: p,
                attachExternalStylesheets: c
            },
            load: a,
            push(...r) {
                for (let [i, o] of r) this.modules[i] ? .loading ? .then(o)
            },
            destroy() {
                for (let r in this.modules) this.modules[r] ? .destroy ? .()
            }
        }, d(), window.FinsweetAttributes.push(...e)
    },
    d = () => {
        let t = !1;
        for (let e of window.FinsweetAttributes.scripts) {
            t || = e.getAttribute(`${h}-auto`) === "true";
            for (let s of b) e.hasAttribute(`fs-${s}`) && a(s)
        }
        t && w().then(() => {
            let e = new Set,
                s = document.querySelectorAll("*");
            for (let r of s)
                for (let i of r.getAttributeNames()) {
                    let n = i.match(/^fs-([^-]+)/) ? .[1];
                    n && b.has(n) && e.add(n)
                }
            for (let r of e) a(r)
        })
    },
    a = async t => {
        if (window.FinsweetAttributes.process.has(t)) return;
        window.FinsweetAttributes.process.add(t);
        let e = window.FinsweetAttributes.modules[t] || = {};
        e.loading = new Promise(s => {
            e.resolve = r => {
                s(r), delete e.resolve
            }
        });
        try {
            let {
                init: s,
                version: r
            } = await m(t), {
                result: i,
                destroy: o
            } = await s() || {};
            return e.version = r, e.destroy = () => {
                o ? .(), window.FinsweetAttributes.process.delete(t)
            }, e.restart = () => (e.destroy ? .(), window.FinsweetAttributes.load(t)), e.resolve ? .(i), i
        } catch (s) {
            console.error(s)
        }
    };
y();