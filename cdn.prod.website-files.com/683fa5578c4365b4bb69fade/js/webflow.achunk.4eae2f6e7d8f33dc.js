"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["258"], {
        27624: function(e, t, n) {
            var i = n(43949);
            i.define("links", e.exports = function(e, t) {
                var n, r, a, s = {},
                    h = e(window),
                    f = i.env(),
                    l = window.location,
                    o = document.createElement("a"),
                    c = "w--current",
                    u = /index\.(html|php)$/,
                    v = /\/$/;

                function d() {
                    var e = h.scrollTop(),
                        n = h.height();
                    t.each(r, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var i = t.link,
                                r = t.sec,
                                a = r.offset().top,
                                s = r.outerHeight(),
                                h = .5 * n,
                                f = r.is(":visible") && a + s - h >= e && a + h <= e + n;
                            t.active !== f && (t.active = f, g(i, c, f))
                        }
                    })
                }

                function g(e, t, n) {
                    var i = e.hasClass(t);
                    (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return s.ready = s.design = s.preview = function() {
                    n = f && i.env("design"), a = i.env("slug") || l.pathname || "", i.scroll.off(d), r = [];
                    for (var t = document.links, s = 0; s < t.length; ++s) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var i = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (o.href = i, !(i.indexOf(":") >= 0)) {
                                var s = e(t);
                                if (o.hash.length > 1 && o.host + o.pathname === l.host + l.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
                                    var h = e(o.hash);
                                    h.length && r.push({
                                        link: s,
                                        sec: h,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== i && "" !== i && g(s, c, o.href === l.href || i === a || u.test(i) && v.test(a))
                            }
                        }
                    }(t[s]);
                    r.length && (i.scroll.on(d), d())
                }, s
            })
        }
    }
]);