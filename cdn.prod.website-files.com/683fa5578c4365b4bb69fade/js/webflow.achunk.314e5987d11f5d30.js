"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["0"], {
        8334: function(t, e, n) {
            var a = n(43949);
            a.define("focus", t.exports = function() {
                var t = [],
                    e = !1;

                function n(n) {
                    e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
                }

                function o(n) {
                    var a, o;
                    o = (a = n.target).tagName, (/^a$/i.test(o) && null != a.href || /^(button|textarea)$/i.test(o) && !0 !== a.disabled || /^input$/i.test(o) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(o) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(o) || /^video$/i.test(o) && !0 === a.controls) && (e = !0, setTimeout(() => {
                        for (e = !1, n.target.focus(); t.length > 0;) {
                            var a = t.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type, a))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        }
    }
]);