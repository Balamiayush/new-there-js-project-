"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["408"], {
        60322: function(t, e, o) {
            var r = o(43949);
            r.define("edit", t.exports = function(t, e, o) {
                if (o = o || {}, (r.env("test") || r.env("frame")) && !o.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (t) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var n, i = t(window),
                    a = t(document.documentElement),
                    d = document.location,
                    c = "hashchange",
                    s = o.load || function() {
                        var e, o, r;
                        n = !0, window.WebflowEditor = !0, i.off(c, u), e = function(e) {
                            var o;
                            t.ajax({
                                url: f("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: a.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (o = e, function(e) {
                                    var r, n, i;
                                    if (!e) return void console.error("Could not load editor data");
                                    e.thirdPartyCookiesSupported = o, n = (r = e.scriptPath).indexOf("//") >= 0 ? r : f("https://editor-api.webflow.com" + r), i = function() {
                                        window.WebflowEditor(e)
                                    }, t.ajax({
                                        type: "GET",
                                        url: n,
                                        dataType: "script",
                                        cache: !0
                                    }).then(i, w)
                                })
                            })
                        }, (o = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", o.style.display = "none", o.sandbox = "allow-scripts allow-same-origin", r = function(t) {
                            "WF_third_party_cookies_unsupported" === t.data ? (p(o, r), e(!1)) : "WF_third_party_cookies_supported" === t.data && (p(o, r), e(!0))
                        }, o.onerror = function() {
                            p(o, r), e(!1)
                        }, window.addEventListener("message", r, !1), window.document.body.appendChild(o)
                    },
                    l = !1;
                try {
                    l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (t) {}

                function u() {
                    !n && /\?edit/.test(d.hash) && s()
                }

                function w(t, e, o) {
                    throw console.error("Could not load editor script: " + e), o
                }

                function f(t) {
                    return t.replace(/([^:])\/\//g, "$1/")
                }

                function p(t, e) {
                    window.removeEventListener("message", e, !1), t.remove()
                }
                return l ? s() : d.search ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) || /\?edit$/.test(d.href)) && s() : i.on(c, u).triggerHandler(c), {}
            })
        }
    }
]);