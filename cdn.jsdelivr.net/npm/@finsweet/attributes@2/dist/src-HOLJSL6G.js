import {
    d as Y
} from "./chunk-WIALCYDY.js";
import {
    f as H,
    i as J,
    n as U
} from "./chunk-XRTLPMPO.js";
import {
    a as q
} from "./chunk-UAA7M346.js";
import {
    e as O
} from "./chunk-REJ3R5JH.js";
import {
    c as z
} from "./chunk-GGDEANQW.js";
import {
    a as st,
    c as at
} from "./chunk-K46K3RI5.js";
var G = st((w, M) => {
    (function(g, p) {
        typeof w == "object" && typeof M == "object" ? M.exports = p() : typeof define == "function" && define.amd ? define([], p) : typeof w == "object" ? w.ClipboardJS = p() : g.ClipboardJS = p()
    })(w, function() {
        return function() {
            var x = {
                    686: function(a, s, t) {
                        "use strict";
                        t.d(s, {
                            default: function() {
                                return ut
                            }
                        });
                        var c = t(279),
                            u = t.n(c),
                            l = t(370),
                            m = t.n(l),
                            d = t(817),
                            b = t.n(d);

                        function y(i) {
                            try {
                                return document.execCommand(i)
                            } catch {
                                return !1
                            }
                        }
                        var h = function(n) {
                                var e = b()(n);
                                return y("cut"), e
                            },
                            v = h;

                        function T(i) {
                            var n = document.documentElement.getAttribute("dir") === "rtl",
                                e = document.createElement("textarea");
                            e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[n ? "right" : "left"] = "-9999px";
                            var r = window.pageYOffset || document.documentElement.scrollTop;
                            return e.style.top = "".concat(r, "px"), e.setAttribute("readonly", ""), e.value = i, e
                        }
                        var D = function(n, e) {
                                var r = T(n);
                                e.container.appendChild(r);
                                var o = b()(r);
                                return y("copy"), r.remove(), o
                            },
                            X = function(n) {
                                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                        container: document.body
                                    },
                                    r = "";
                                return typeof n == "string" ? r = D(n, e) : n instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(n ? .type) ? r = D(n.value, e) : (r = b()(n), y("copy")), r
                            },
                            k = X;

                        function A(i) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? A = function(e) {
                                return typeof e
                            } : A = function(e) {
                                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, A(i)
                        }
                        var K = function() {
                                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                    e = n.action,
                                    r = e === void 0 ? "copy" : e,
                                    o = n.container,
                                    f = n.target,
                                    E = n.text;
                                if (r !== "copy" && r !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                if (f !== void 0)
                                    if (f && A(f) === "object" && f.nodeType === 1) {
                                        if (r === "copy" && f.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if (r === "cut" && (f.hasAttribute("readonly") || f.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                    } else throw new Error('Invalid "target" value, use a valid Element');
                                if (E) return k(E, {
                                    container: o
                                });
                                if (f) return r === "cut" ? v(f) : k(f, {
                                    container: o
                                })
                            },
                            Q = K;

                        function S(i) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = function(e) {
                                return typeof e
                            } : S = function(e) {
                                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, S(i)
                        }

                        function Z(i, n) {
                            if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }

                        function F(i, n) {
                            for (var e = 0; e < n.length; e++) {
                                var r = n[e];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r)
                            }
                        }

                        function tt(i, n, e) {
                            return n && F(i.prototype, n), e && F(i, e), i
                        }

                        function et(i, n) {
                            if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
                            i.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: i,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), n && N(i, n)
                        }

                        function N(i, n) {
                            return N = Object.setPrototypeOf || function(r, o) {
                                return r.__proto__ = o, r
                            }, N(i, n)
                        }

                        function nt(i) {
                            var n = it();
                            return function() {
                                var r = C(i),
                                    o;
                                if (n) {
                                    var f = C(this).constructor;
                                    o = Reflect.construct(r, arguments, f)
                                } else o = r.apply(this, arguments);
                                return rt(this, o)
                            }
                        }

                        function rt(i, n) {
                            return n && (S(n) === "object" || typeof n == "function") ? n : ot(i)
                        }

                        function ot(i) {
                            if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return i
                        }

                        function it() {
                            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                            if (typeof Proxy == "function") return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch {
                                return !1
                            }
                        }

                        function C(i) {
                            return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }, C(i)
                        }

                        function I(i, n) {
                            var e = "data-clipboard-".concat(i);
                            if (n.hasAttribute(e)) return n.getAttribute(e)
                        }
                        var ct = function(i) {
                                et(e, i);
                                var n = nt(e);

                                function e(r, o) {
                                    var f;
                                    return Z(this, e), f = n.call(this), f.resolveOptions(o), f.listenClick(r), f
                                }
                                return tt(e, [{
                                    key: "resolveOptions",
                                    value: function() {
                                        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                        this.action = typeof o.action == "function" ? o.action : this.defaultAction, this.target = typeof o.target == "function" ? o.target : this.defaultTarget, this.text = typeof o.text == "function" ? o.text : this.defaultText, this.container = S(o.container) === "object" ? o.container : document.body
                                    }
                                }, {
                                    key: "listenClick",
                                    value: function(o) {
                                        var f = this;
                                        this.listener = m()(o, "click", function(E) {
                                            return f.onClick(E)
                                        })
                                    }
                                }, {
                                    key: "onClick",
                                    value: function(o) {
                                        var f = o.delegateTarget || o.currentTarget,
                                            E = this.action(f) || "copy",
                                            L = Q({
                                                action: E,
                                                container: this.container,
                                                target: this.target(f),
                                                text: this.text(f)
                                            });
                                        this.emit(L ? "success" : "error", {
                                            action: E,
                                            text: L,
                                            trigger: f,
                                            clearSelection: function() {
                                                f && f.focus(), window.getSelection().removeAllRanges()
                                            }
                                        })
                                    }
                                }, {
                                    key: "defaultAction",
                                    value: function(o) {
                                        return I("action", o)
                                    }
                                }, {
                                    key: "defaultTarget",
                                    value: function(o) {
                                        var f = I("target", o);
                                        if (f) return document.querySelector(f)
                                    }
                                }, {
                                    key: "defaultText",
                                    value: function(o) {
                                        return I("text", o)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.listener.destroy()
                                    }
                                }], [{
                                    key: "copy",
                                    value: function(o) {
                                        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                            container: document.body
                                        };
                                        return k(o, f)
                                    }
                                }, {
                                    key: "cut",
                                    value: function(o) {
                                        return v(o)
                                    }
                                }, {
                                    key: "isSupported",
                                    value: function() {
                                        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                                            f = typeof o == "string" ? [o] : o,
                                            E = !!document.queryCommandSupported;
                                        return f.forEach(function(L) {
                                            E = E && !!document.queryCommandSupported(L)
                                        }), E
                                    }
                                }]), e
                            }(u()),
                            ut = ct
                    },
                    828: function(a) {
                        var s = 9;
                        if (typeof Element < "u" && !Element.prototype.matches) {
                            var t = Element.prototype;
                            t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                        }

                        function c(u, l) {
                            for (; u && u.nodeType !== s;) {
                                if (typeof u.matches == "function" && u.matches(l)) return u;
                                u = u.parentNode
                            }
                        }
                        a.exports = c
                    },
                    438: function(a, s, t) {
                        var c = t(828);

                        function u(d, b, y, h, v) {
                            var T = m.apply(this, arguments);
                            return d.addEventListener(y, T, v), {
                                destroy: function() {
                                    d.removeEventListener(y, T, v)
                                }
                            }
                        }

                        function l(d, b, y, h, v) {
                            return typeof d.addEventListener == "function" ? u.apply(null, arguments) : typeof y == "function" ? u.bind(null, document).apply(null, arguments) : (typeof d == "string" && (d = document.querySelectorAll(d)), Array.prototype.map.call(d, function(T) {
                                return u(T, b, y, h, v)
                            }))
                        }

                        function m(d, b, y, h) {
                            return function(v) {
                                v.delegateTarget = c(v.target, b), v.delegateTarget && h.call(d, v)
                            }
                        }
                        a.exports = l
                    },
                    879: function(a, s) {
                        s.node = function(t) {
                            return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1
                        }, s.nodeList = function(t) {
                            var c = Object.prototype.toString.call(t);
                            return t !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in t && (t.length === 0 || s.node(t[0]))
                        }, s.string = function(t) {
                            return typeof t == "string" || t instanceof String
                        }, s.fn = function(t) {
                            var c = Object.prototype.toString.call(t);
                            return c === "[object Function]"
                        }
                    },
                    370: function(a, s, t) {
                        var c = t(879),
                            u = t(438);

                        function l(y, h, v) {
                            if (!y && !h && !v) throw new Error("Missing required arguments");
                            if (!c.string(h)) throw new TypeError("Second argument must be a String");
                            if (!c.fn(v)) throw new TypeError("Third argument must be a Function");
                            if (c.node(y)) return m(y, h, v);
                            if (c.nodeList(y)) return d(y, h, v);
                            if (c.string(y)) return b(y, h, v);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                        }

                        function m(y, h, v) {
                            return y.addEventListener(h, v), {
                                destroy: function() {
                                    y.removeEventListener(h, v)
                                }
                            }
                        }

                        function d(y, h, v) {
                            return Array.prototype.forEach.call(y, function(T) {
                                T.addEventListener(h, v)
                            }), {
                                destroy: function() {
                                    Array.prototype.forEach.call(y, function(T) {
                                        T.removeEventListener(h, v)
                                    })
                                }
                            }
                        }

                        function b(y, h, v) {
                            return u(document.body, y, h, v)
                        }
                        a.exports = l
                    },
                    817: function(a) {
                        function s(t) {
                            var c;
                            if (t.nodeName === "SELECT") t.focus(), c = t.value;
                            else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
                                var u = t.hasAttribute("readonly");
                                u || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), u || t.removeAttribute("readonly"), c = t.value
                            } else {
                                t.hasAttribute("contenteditable") && t.focus();
                                var l = window.getSelection(),
                                    m = document.createRange();
                                m.selectNodeContents(t), l.removeAllRanges(), l.addRange(m), c = l.toString()
                            }
                            return c
                        }
                        a.exports = s
                    },
                    279: function(a) {
                        function s() {}
                        s.prototype = {
                            on: function(t, c, u) {
                                var l = this.e || (this.e = {});
                                return (l[t] || (l[t] = [])).push({
                                    fn: c,
                                    ctx: u
                                }), this
                            },
                            once: function(t, c, u) {
                                var l = this;

                                function m() {
                                    l.off(t, m), c.apply(u, arguments)
                                }
                                return m._ = c, this.on(t, m, u)
                            },
                            emit: function(t) {
                                var c = [].slice.call(arguments, 1),
                                    u = ((this.e || (this.e = {}))[t] || []).slice(),
                                    l = 0,
                                    m = u.length;
                                for (l; l < m; l++) u[l].fn.apply(u[l].ctx, c);
                                return this
                            },
                            off: function(t, c) {
                                var u = this.e || (this.e = {}),
                                    l = u[t],
                                    m = [];
                                if (l && c)
                                    for (var d = 0, b = l.length; d < b; d++) l[d].fn !== c && l[d].fn._ !== c && m.push(l[d]);
                                return m.length ? u[t] = m : delete u[t], this
                            }
                        }, a.exports = s, a.exports.TinyEmitter = s
                    }
                },
                g = {};

            function p(a) {
                if (g[a]) return g[a].exports;
                var s = g[a] = {
                    exports: {}
                };
                return x[a](s, s.exports, p), s.exports
            }
            return function() {
                    p.n = function(a) {
                        var s = a && a.__esModule ? function() {
                            return a.default
                        } : function() {
                            return a
                        };
                        return p.d(s, {
                            a: s
                        }), s
                    }
                }(),
                function() {
                    p.d = function(a, s) {
                        for (var t in s) p.o(s, t) && !p.o(a, t) && Object.defineProperty(a, t, {
                            enumerable: !0,
                            get: s[t]
                        })
                    }
                }(),
                function() {
                    p.o = function(a, s) {
                        return Object.prototype.hasOwnProperty.call(a, s)
                    }
                }(), p(686)
        }().default
    })
});
var lt = "2.0.10";
var V = at(G(), 1),
    B = ({
        trigger: x,
        textToCopy: g,
        target: p,
        textNode: a,
        originalText: s,
        successMessage: t,
        successDuration: c,
        successClass: u
    }) => {
        let l = new V.default(x, {
                text: () => g || (p ? U(p) ? p.value : p.textContent || "" : x.textContent || "")
            }),
            m = !1;
        return l.on("success", d => {
            d.clearSelection(), !m && (m = !0, x.classList.add(u), a && t && (a.textContent = t), setTimeout(() => {
                x.classList.remove(u), a && (a.textContent = s || ""), m = !1
            }, c))
        }), l
    };
var P = ["click", "copy-this", "copy-sibling"],
    R = {
        text: {
            key: "text"
        },
        message: {
            key: "message"
        },
        duration: {
            key: "duration",
            defaultValue: "1000",
            isNumeric: !0
        },
        activeclass: {
            key: "activeclass",
            defaultValue: `is-${O}-active`
        }
    };
var {
    queryElement: j,
    queryAllElements: $,
    getAttribute: _,
    getInstance: W
} = q(O, P, R);
var pt = async () => {
    await await z();
    let g = $("click").map(p => {
        if (!J(p)) return;
        let a = _(p, "text"),
            s = _(p, "message"),
            t = _(p, "duration"),
            c = _(p, "activeclass"),
            u = W(p),
            m = (p.parentElement ? j("copy-sibling", {
                scope: p.parentElement
            }) : null) || j("copy-this", {
                instance: u
            }),
            d = Y(p),
            b = d ? d.textContent : void 0;
        return B({
            trigger: p,
            target: m,
            textToCopy: a,
            originalText: b,
            textNode: d,
            successDuration: t,
            successMessage: s,
            successClass: c
        })
    }).filter(H);
    return {
        result: g,
        destroy() {
            for (let p of g) p.destroy()
        }
    }
};
export {
    P as ELEMENTS, R as SETTINGS, pt as init, lt as version
};
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)
*/