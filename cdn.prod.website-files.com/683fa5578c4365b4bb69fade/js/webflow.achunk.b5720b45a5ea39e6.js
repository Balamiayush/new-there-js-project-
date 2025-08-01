"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["185"], {
        12338: function(e, t, n) {
            n(43949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    o = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function d(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function u(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function r() {
                                    t = !1
                                }

                                function c() {
                                    document.addEventListener("mousemove", s), document.addEventListener("mousedown", s), document.addEventListener("mouseup", s), document.addEventListener("pointermove", s), document.addEventListener("pointerdown", s), document.addEventListener("pointerup", s), document.addEventListener("touchmove", s), document.addEventListener("touchstart", s), document.addEventListener("touchend", s)
                                }

                                function s(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", s), document.removeEventListener("mousedown", s), document.removeEventListener("mouseup", s), document.removeEventListener("pointermove", s), document.removeEventListener("pointerdown", s), document.removeEventListener("pointerup", s), document.removeEventListener("touchmove", s), document.removeEventListener("touchstart", s), document.removeEventListener("touchend", s))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (d(e.activeElement) && u(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", r, !0), document.addEventListener("pointerdown", r, !0), document.addEventListener("touchstart", r, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), c())
                                }, !0), c(), e.addEventListener("focus", function(e) {
                                    if (d(e.target)) {
                                        var n, o, r;
                                        (t || (o = (n = e.target).type, "INPUT" === (r = n.tagName) && i[o] && !n.readOnly || "TEXTAREA" === r && !n.readOnly || n.isContentEditable || 0)) && u(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (d(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        }
    }
]);