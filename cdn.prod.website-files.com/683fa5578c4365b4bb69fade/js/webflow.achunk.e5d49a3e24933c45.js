"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["456"], {
        9461: function(e, t, n) {
            var a = n(43949);
            a.define("brand", e.exports = function(e) {
                var t, n = {},
                    r = document,
                    l = e("html"),
                    o = e("body"),
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    i = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function f() {
                    var n = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function d() {
                    var e = o.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        r = a.env("editor");
                    if (n) {
                        r && e.remove();
                        return
                    }
                    e.length && e.remove(), r || o.append(t)
                }
                return n.ready = function() {
                    var n, a, o, u = l.attr("data-wf-status"),
                        w = l.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(w) && c.hostname !== w && (u = !0), u && !s && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), a = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), o = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(a, o), n[0]), d(), setTimeout(d, 500), e(r).off(i, f).on(i, f))
                }, n
            })
        }
    }
]);