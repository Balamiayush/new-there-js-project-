"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["599"], {
        93695: function(e, t, n) {
            n(43949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function o(t) {
                    var o, i, r = !1,
                        u = !1,
                        s = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function c(e) {
                        var t = e.touches;
                        t && t.length > 1 || (r = !0, t ? (u = !0, o = t[0].clientX) : o = e.clientX, i = o)
                    }

                    function v(t) {
                        if (r) {
                            if (u && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var o, c, v, a, m = t.touches,
                                l = m ? m[0].clientX : t.clientX,
                                h = l - i;
                            i = l, Math.abs(h) > s && n && "" === String(n()) && (o = "swipe", c = t, v = {
                                direction: h > 0 ? "right" : "left"
                            }, a = e.Event(o, {
                                originalEvent: c
                            }), e(c.target).trigger(a, v), d())
                        }
                    }

                    function a(e) {
                        if (r && (r = !1, u && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), u = !1;
                            return
                        }
                    }

                    function d() {
                        r = !1
                    }
                    t.addEventListener("touchstart", c, !1), t.addEventListener("touchmove", v, !1), t.addEventListener("touchend", a, !1), t.addEventListener("touchcancel", d, !1), t.addEventListener("mousedown", c, !1), t.addEventListener("mousemove", v, !1), t.addEventListener("mouseup", a, !1), t.addEventListener("mouseout", d, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", c, !1), t.removeEventListener("touchmove", v, !1), t.removeEventListener("touchend", a, !1), t.removeEventListener("touchcancel", d, !1), t.removeEventListener("mousedown", c, !1), t.removeEventListener("mousemove", v, !1), t.removeEventListener("mouseup", a, !1), t.removeEventListener("mouseout", d, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new o(t) : null
                }, t.instance = t.init(document), t
            })
        }
    }
]);