"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["696"], {
        30286: function(t, e, n) {
            var o = n(43949);
            o.define("scroll", t.exports = function(t) {
                var e = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    a = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (t) {
                            return !0
                        }
                    }() ? window.history : null,
                    i = t(window),
                    r = t(document),
                    d = t(document.body),
                    c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 15)
                    },
                    s = o.env("editor") ? ".w-editor-body" : "body",
                    u = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
                    f = 'a[href="#"]',
                    l = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
                    w = document.createElement("style");
                w.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var h = /^#[a-zA-Z0-9][\w:.-]*$/;
                let m = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function p(t, e) {
                    var n;
                    switch (e) {
                        case "add":
                            (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n): t.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
                    }
                    t.toggleClass("wf-force-outline-none", "add" === e)
                }

                function v(e) {
                    var r = e.currentTarget;
                    if (!(o.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))) {
                        var s = h.test(r.hash) && r.host + r.pathname === n.host + n.pathname ? r.hash : "";
                        if ("" !== s) {
                            var f, l = t(s);
                            l.length && (e && (e.preventDefault(), e.stopPropagation()), f = s, n.hash !== f && a && a.pushState && !(o.env.chrome && "file:" === n.protocol) && (a.state && a.state.hash) !== f && a.pushState({
                                hash: f
                            }, "", f), window.setTimeout(function() {
                                ! function(e, n) {
                                    var o = i.scrollTop(),
                                        a = function(e) {
                                            var n = t(u),
                                                o = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                a = e.offset().top - o;
                                            if ("mid" === e.data("scroll")) {
                                                var r = i.height() - o,
                                                    d = e.outerHeight();
                                                d < r && (a -= Math.round((r - d) / 2))
                                            }
                                            return a
                                        }(e);
                                    if (o !== a) {
                                        var r = function(t, e, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || m.matches) return 0;
                                                var o = 1;
                                                return d.add(t).each(function(t, e) {
                                                    var n = parseFloat(e.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (o = n)
                                                }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * o
                                            }(e, o, a),
                                            s = Date.now(),
                                            f = function() {
                                                var t, e, i, d, u, l = Date.now() - s;
                                                window.scroll(0, (t = o, e = a, (i = l) > (d = r) ? e : t + (e - t) * ((u = i / d) < .5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1))), l <= r ? c(f) : "function" == typeof n && n()
                                            };
                                        c(f)
                                    }
                                }(l, function() {
                                    p(l, "add"), l.get(0).focus({
                                        preventScroll: !0
                                    }), p(l, "remove")
                                })
                            }, 300 * !e))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: t,
                            WF_CLICK_SCROLL: n
                        } = e;
                        r.on(n, l, v), r.on(t, f, function(t) {
                            t.preventDefault()
                        }), document.head.insertBefore(w, document.head.firstChild)
                    }
                }
            })
        }
    }
]);