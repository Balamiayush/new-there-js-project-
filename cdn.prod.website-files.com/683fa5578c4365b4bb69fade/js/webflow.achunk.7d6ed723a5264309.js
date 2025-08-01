"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    ["520"], {
        65897: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, r = {
                cleanupElement: function() {
                    return g
                },
                createInstance: function() {
                    return p
                },
                destroy: function() {
                    return w
                },
                init: function() {
                    return y
                },
                ready: function() {
                    return I
                }
            };
            for (var a in r) Object.defineProperty(t, a, {
                enumerable: !0,
                get: r[a]
            });
            n(52897), n(233), n(49754), n(30971), n(62374), n(55152), n(35273), n(30172);
            let o = (i = n(33142)) && i.__esModule ? i : {
                    default: i
                },
                s = n(97933),
                l = e => e.Webflow.require("lottie").lottie,
                f = e => !!(e.Webflow.env("design") || e.Webflow.env("preview")),
                u = {
                    Playing: "playing",
                    Stopped: "stopped"
                },
                h = new class {
                    _cache = [];
                    set(e, t) {
                        let n = (0, o.default)(this._cache, ({
                            wrapper: t
                        }) => t === e); - 1 !== n && this._cache.splice(n, 1), this._cache.push({
                            wrapper: e,
                            instance: t
                        })
                    }
                    delete(e) {
                        let t = (0, o.default)(this._cache, ({
                            wrapper: t
                        }) => t === e); - 1 !== t && this._cache.splice(t, 1)
                    }
                    get(e) {
                        let t = (0, o.default)(this._cache, ({
                            wrapper: t
                        }) => t === e);
                        return -1 !== t ? this._cache[t].instance : null
                    }
                },
                c = {};
            class d {
                config = null;
                currentState = u.Stopped;
                animationItem;
                handlers = {
                    enterFrame: [],
                    complete: [],
                    loop: [],
                    dataReady: [],
                    destroy: [],
                    error: []
                };
                load(e) {
                    let t = (e.dataset || c).src || "";
                    t.endsWith(".lottie") ? (0, s.fetchLottie)(t).then(t => {
                        this._loadAnimation(e, t)
                    }) : this._loadAnimation(e, void 0), h.set(e, this), this.container = e
                }
                _loadAnimation(e, t) {
                    let n = e.dataset || c,
                        i = n.src || "",
                        r = n.preserveAspectRatio || "xMidYMid meet",
                        a = n.renderer || "svg",
                        o = 1 === parseFloat(n.loop),
                        s = parseFloat(n.direction) || 1,
                        h = 1 === parseFloat(n.autoplay),
                        d = parseFloat(n.duration) || 0,
                        m = 1 === parseFloat(n.isIx2Target),
                        p = parseFloat(n.ix2InitialState);
                    isNaN(p) && (p = null);
                    let g = {
                        src: i,
                        loop: o,
                        autoplay: h,
                        renderer: a,
                        direction: s,
                        duration: d,
                        hasIx2: m,
                        ix2InitialValue: p,
                        preserveAspectRatio: r
                    };
                    if (this.animationItem && this.config && this.config.src === i && a === this.config.renderer && r === this.config.preserveAspectRatio) {
                        if (o !== this.config.loop && this.setLooping(o), m || (s !== this.config.direction && this.setDirection(s), d !== this.config.duration && (d > 0 && d !== this.duration ? this.setSpeed(this.duration / d) : this.setSpeed(1))), h && this.play(), p && p !== this.config.ix2InitialValue) {
                            let e = p / 100;
                            this.goToFrame(this.frames * e)
                        }
                        this.config = g;
                        return
                    }
                    let y = e.ownerDocument.defaultView;
                    try {
                        this.animationItem && this.destroy(), this.animationItem = l(y).loadAnimation({
                            container: e,
                            loop: o,
                            autoplay: h,
                            renderer: a,
                            rendererSettings: {
                                preserveAspectRatio: r,
                                progressiveLoad: !0,
                                hideOnTransparent: !0
                            },
                            ...t ? {
                                animationData: t
                            } : {
                                path: i
                            }
                        })
                    } catch (e) {
                        this.handlers.error.forEach(t => t(e));
                        return
                    }
                    this.animationItem && (f(y) && (this.animationItem.addEventListener("enterFrame", () => {
                        if (!this.isPlaying) return;
                        let {
                            currentFrame: e,
                            totalFrames: t,
                            playDirection: n
                        } = this.animationItem, i = e / t * 100, r = Math.round(1 === n ? i : 100 - i);
                        this.handlers.enterFrame.forEach(t => t(r, e))
                    }), this.animationItem.addEventListener("complete", () => {
                        if (this.currentState !== u.Playing || !this.animationItem.loop) return void this.handlers.complete.forEach(e => e());
                        this.currentState = u.Stopped
                    }), this.animationItem.addEventListener("loopComplete", e => {
                        this.handlers.loop.forEach(t => t(e))
                    }), this.animationItem.addEventListener("data_failed", e => {
                        this.handlers.error.forEach(t => t(e))
                    }), this.animationItem.addEventListener("error", e => {
                        this.handlers.error.forEach(t => t(e))
                    })), this.isLoaded ? (this.handlers.dataReady.forEach(e => e()), h && this.play()) : this.animationItem.addEventListener("data_ready", () => {
                        if (this.handlers.dataReady.forEach(e => e()), !m && (this.setDirection(s), d > 0 && d !== this.duration && this.setSpeed(this.duration / d), h && this.play()), p) {
                            let e = p / 100;
                            this.goToFrame(this.frames * e)
                        }
                    }), this.config = g)
                }
                onFrameChange(e) {
                    -1 === this.handlers.enterFrame.indexOf(e) && this.handlers.enterFrame.push(e)
                }
                onPlaybackComplete(e) {
                    -1 === this.handlers.complete.indexOf(e) && this.handlers.complete.push(e)
                }
                onLoopComplete(e) {
                    -1 === this.handlers.loop.indexOf(e) && this.handlers.loop.push(e)
                }
                onDestroy(e) {
                    -1 === this.handlers.destroy.indexOf(e) && this.handlers.destroy.push(e)
                }
                onDataReady(e) {
                    -1 === this.handlers.dataReady.indexOf(e) && this.handlers.dataReady.push(e)
                }
                onError(e) {
                    -1 === this.handlers.error.indexOf(e) && this.handlers.error.push(e)
                }
                play() {
                    if (!this.animationItem) return;
                    let e = 1 === this.animationItem.playDirection ? 0 : this.frames;
                    this.animationItem.goToAndPlay(e, !0), this.currentState = u.Playing
                }
                stop() {
                    if (this.animationItem) {
                        if (this.isPlaying) {
                            let {
                                playDirection: e
                            } = this.animationItem, t = 1 === e ? 0 : this.frames;
                            this.animationItem.goToAndStop(t, !0)
                        }
                        this.currentState = u.Stopped
                    }
                }
                destroy() {
                    this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(e => e()), this.container && h.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(e => this.handlers[e].length = 0), this.animationItem = null, this.container = null, this.config = null)
                }
                get isPlaying() {
                    return !!this.animationItem && !this.animationItem.isPaused
                }
                get isPaused() {
                    return !!this.animationItem && this.animationItem.isPaused
                }
                get duration() {
                    return this.animationItem ? this.animationItem.getDuration() : 0
                }
                get frames() {
                    return this.animationItem ? this.animationItem.totalFrames : 0
                }
                get direction() {
                    return this.animationItem ? this.animationItem.playDirection : 1
                }
                get isLoaded() {
                    return !this.animationItem, this.animationItem.isLoaded
                }
                get ix2InitialValue() {
                    return this.config ? this.config.ix2InitialValue : null
                }
                goToFrame(e) {
                    this.animationItem && this.animationItem.setCurrentRawFrameValue(e)
                }
                setSubframe(e) {
                    this.animationItem && this.animationItem.setSubframe(e)
                }
                setSpeed(e = 1) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(e))
                }
                setLooping(e) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = e)
                }
                setDirection(e) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(e), this.goToFrame(1 === e ? 0 : this.frames))
                }
            }
            let m = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
                p = e => {
                    let t = h.get(e);
                    return null == t && (t = new d), t.load(e), t
                },
                g = e => {
                    let t = h.get(e);
                    t && t.destroy()
                },
                y = () => {
                    m().forEach(e => {
                        1 !== parseFloat(e.getAttribute("data-is-ix2-target")) && g(e), p(e)
                    })
                },
                w = () => {
                    m().forEach(g)
                },
                I = y
        },
        82444: function(e, t, n) {
            var i = n(43949),
                r = n(65897),
                a = n(38724);
            i.define("lottie", e.exports = function() {
                return {
                    lottie: a,
                    createInstance: r.createInstance,
                    cleanupElement: r.cleanupElement,
                    init: r.init,
                    destroy: r.destroy,
                    ready: r.ready
                }
            })
        },
        3487: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                strFromU8: function() {
                    return J
                },
                unzip: function() {
                    return G
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let r = {},
                a = function(e, t, n, i, a) {
                    let o = new Worker(r[t] || (r[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                        type: "text/javascript"
                    }))));
                    return o.onmessage = function(e) {
                        let t = e.data,
                            n = t.$e$;
                        if (n) {
                            let e = Error(n[0]);
                            e.code = n[1], e.stack = n[2], a(e, null)
                        } else a(null, t)
                    }, o.postMessage(n, i), o
                },
                o = Uint8Array,
                s = Uint16Array,
                l = Uint32Array,
                f = new o([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                u = new o([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                h = new o([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                c = function(e, t) {
                    let n = new s(31);
                    for (var i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
                    let r = new l(n[30]);
                    for (i = 1; i < 30; ++i)
                        for (let e = n[i]; e < n[i + 1]; ++e) r[e] = e - n[i] << 5 | i;
                    return [n, r]
                },
                d = c(f, 2),
                m = d[0],
                p = d[1];
            m[28] = 258, p[258] = 28;
            let g = c(u, 0)[0],
                y = new s(32768);
            for (var w = 0; w < 32768; ++w) {
                let e = (43690 & w) >>> 1 | (21845 & w) << 1;
                e = (61680 & (e = (52428 & e) >>> 2 | (13107 & e) << 2)) >>> 4 | (3855 & e) << 4, y[w] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
            }
            let I = function(e, t, n) {
                    let i, r = e.length,
                        a = 0,
                        o = new s(t);
                    for (; a < r; ++a) e[a] && ++o[e[a] - 1];
                    let l = new s(t);
                    for (a = 0; a < t; ++a) l[a] = l[a - 1] + o[a - 1] << 1;
                    if (n) {
                        i = new s(1 << t);
                        let n = 15 - t;
                        for (a = 0; a < r; ++a)
                            if (e[a]) {
                                let r = a << 4 | e[a],
                                    o = t - e[a],
                                    s = l[e[a] - 1]++ << o;
                                for (let e = s | (1 << o) - 1; s <= e; ++s) i[y[s] >>> n] = r
                            }
                    } else
                        for (i = new s(r), a = 0; a < r; ++a) e[a] && (i[a] = y[l[e[a] - 1]++] >>> 15 - e[a]);
                    return i
                },
                b = new o(288);
            for (w = 0; w < 144; ++w) b[w] = 8;
            for (w = 144; w < 256; ++w) b[w] = 9;
            for (w = 256; w < 280; ++w) b[w] = 7;
            for (w = 280; w < 288; ++w) b[w] = 8;
            let v = new o(32);
            for (w = 0; w < 32; ++w) v[w] = 5;
            let E = I(b, 9, 1),
                S = I(v, 5, 1),
                x = function(e) {
                    let t = e[0];
                    for (let n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
                    return t
                },
                P = function(e, t, n) {
                    let i = t / 8 | 0;
                    return (e[i] | e[i + 1] << 8) >> (7 & t) & n
                },
                k = function(e, t) {
                    let n = t / 8 | 0;
                    return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (7 & t)
                },
                _ = function(e) {
                    return (e + 7) / 8 | 0
                },
                F = function(e, t, n) {
                    (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
                    let i = new(2 === e.BYTES_PER_ELEMENT ? s : 4 === e.BYTES_PER_ELEMENT ? l : o)(n - t);
                    return i.set(e.subarray(t, n)), i
                },
                O = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
            var L = function(e, t, n) {
                let i = Error(t || O[e]);
                if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, L), !n) throw i;
                return i
            };
            let T = function(e, t, n) {
                    let i = e.length;
                    if (!i || n && n.f && !n.l) return t || new o(0);
                    let r = !t || n,
                        a = !n || n.i;
                    n || (n = {}), t || (t = new o(3 * i));
                    let s = function(e) {
                            let n = t.length;
                            if (e > n) {
                                let i = new o(Math.max(2 * n, e));
                                i.set(t), t = i
                            }
                        },
                        l = n.f || 0,
                        c = n.p || 0,
                        d = n.b || 0,
                        p = n.l,
                        y = n.d,
                        w = n.m,
                        b = n.n,
                        v = 8 * i;
                    do {
                        if (!p) {
                            l = P(e, c, 1);
                            let f = P(e, c + 1, 3);
                            if (c += 3, !f) {
                                let o = e[(T = _(c) + 4) - 4] | e[T - 3] << 8,
                                    f = T + o;
                                if (f > i) {
                                    a && L(0);
                                    break
                                }
                                r && s(d + o), t.set(e.subarray(T, f), d), n.b = d += o, n.p = c = 8 * f, n.f = l;
                                continue
                            }
                            if (1 === f) p = E, y = S, w = 9, b = 5;
                            else if (2 === f) {
                                let t = P(e, c, 31) + 257,
                                    n = P(e, c + 10, 15) + 4,
                                    i = t + P(e, c + 5, 31) + 1;
                                c += 14;
                                let r = new o(i),
                                    a = new o(19);
                                for (var O = 0; O < n; ++O) a[h[O]] = P(e, c + 3 * O, 7);
                                c += 3 * n;
                                let s = x(a),
                                    l = (1 << s) - 1,
                                    f = I(a, s, 1);
                                for (O = 0; O < i;) {
                                    let t = f[P(e, c, l)];
                                    if (c += 15 & t, (T = t >>> 4) < 16) r[O++] = T;
                                    else {
                                        var T, A = 0;
                                        let t = 0;
                                        for (16 === T ? (t = 3 + P(e, c, 3), c += 2, A = r[O - 1]) : 17 === T ? (t = 3 + P(e, c, 7), c += 3) : 18 === T && (t = 11 + P(e, c, 127), c += 7); t--;) r[O++] = A
                                    }
                                }
                                let u = r.subarray(0, t);
                                var C = r.subarray(t);
                                w = x(u), b = x(C), p = I(u, w, 1), y = I(C, b, 1)
                            } else L(1);
                            if (c > v) {
                                a && L(0);
                                break
                            }
                        }
                        r && s(d + 131072);
                        let F = (1 << w) - 1,
                            R = (1 << b) - 1,
                            D = c;
                        for (;; D = c) {
                            let n = (A = p[k(e, c) & F]) >>> 4;
                            if ((c += 15 & A) > v) {
                                a && L(0);
                                break
                            }
                            if (A || L(2), n < 256) t[d++] = n;
                            else {
                                if (256 === n) {
                                    D = c, p = null;
                                    break
                                } {
                                    let i = n - 254;
                                    if (n > 264) {
                                        var M = f[O = n - 257];
                                        i = P(e, c, (1 << M) - 1) + m[O], c += M
                                    }
                                    let o = y[k(e, c) & R],
                                        l = o >>> 4;
                                    if (o || L(3), c += 15 & o, C = g[l], l > 3 && (M = u[l], C += k(e, c) & (1 << M) - 1, c += M), c > v) {
                                        a && L(0);
                                        break
                                    }
                                    r && s(d + 131072);
                                    let h = d + i;
                                    for (; d < h; d += 4) t[d] = t[d - C], t[d + 1] = t[d + 1 - C], t[d + 2] = t[d + 2 - C], t[d + 3] = t[d + 3 - C];
                                    d = h
                                }
                            }
                        }
                        n.l = p, n.p = D, n.b = d, n.f = l, p && (l = 1, n.m = w, n.d = y, n.n = b)
                    } while (!l);
                    return d === t.length ? t : F(t, 0, d)
                },
                A = function(e, t) {
                    let n = {};
                    for (var i in e) n[i] = e[i];
                    for (var i in t) n[i] = t[i];
                    return n
                },
                C = function(e, t, n) {
                    let i = e(),
                        r = e.toString(),
                        a = r.slice(r.indexOf("[") + 1, r.lastIndexOf("]")).replace(/\s+/g, "").split(",");
                    for (let e = 0; e < i.length; ++e) {
                        let r = i[e],
                            o = a[e];
                        if ("function" == typeof r) {
                            t += ";" + o + "=";
                            let e = r.toString();
                            if (r.prototype)
                                if (-1 !== e.indexOf("[native code]")) {
                                    let n = e.indexOf(" ", 8) + 1;
                                    t += e.slice(n, e.indexOf("(", n))
                                } else
                                    for (let n in t += e, r.prototype) t += ";" + o + ".prototype." + n + "=" + r.prototype[n].toString();
                            else t += e
                        } else n[o] = r
                    }
                    return [t, n]
                },
                M = [],
                R = function(e) {
                    let t = [];
                    for (let n in e) e[n].buffer && t.push((e[n] = new e[n].constructor(e[n])).buffer);
                    return t
                },
                D = function(e, t, n, i) {
                    let r;
                    if (!M[n]) {
                        let t = "",
                            i = {},
                            a = e.length - 1;
                        for (let n = 0; n < a; ++n) t = (r = C(e[n], t, i))[0], i = r[1];
                        M[n] = C(e[a], t, i)
                    }
                    let o = A({}, M[n][1]);
                    return a(M[n][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", n, o, R(o), i)
                },
                j = function() {
                    return [o, s, l, f, u, h, m, g, E, S, y, O, I, x, P, k, _, F, L, T, W, z, U]
                };
            var z = function(e) {
                    return postMessage(e, [e.buffer])
                },
                U = function(e) {
                    return e && e.size && new o(e.size)
                };
            let $ = function(e, t, n, i, r, a) {
                    var o = D(n, i, r, function(e, t) {
                        o.terminate(), a(e, t)
                    });
                    return o.postMessage([e, t], t.consume ? [e.buffer] : []),
                        function() {
                            o.terminate()
                        }
                },
                N = function(e, t) {
                    return e[t] | e[t + 1] << 8
                },
                B = function(e, t) {
                    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
                };

            function W(e, t) {
                return T(e, t)
            }
            let V = "undefined" != typeof TextDecoder && new TextDecoder,
                q = function(e) {
                    for (let t = "", n = 0;;) {
                        let i = e[n++],
                            r = (i > 127) + (i > 223) + (i > 239);
                        if (n + r > e.length) return [t, F(e, n - 1)];
                        r ? 3 === r ? t += String.fromCharCode(55296 | (i = ((15 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536) >> 10, 56320 | 1023 & i) : t += 1 & r ? String.fromCharCode((31 & i) << 6 | 63 & e[n++]) : String.fromCharCode((15 & i) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) : t += String.fromCharCode(i)
                    }
                };

            function J(e, t) {
                if (t) {
                    let t = "";
                    for (let n = 0; n < e.length; n += 16384) t += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
                    return t
                }
                if (V) return V.decode(e); {
                    let t = q(e),
                        n = t[0];
                    return t[1].length && L(8), n
                }
            }
            let Y = function(e, t, n) {
                    let i = N(e, t + 28),
                        r = J(e.subarray(t + 46, t + 46 + i), !(2048 & N(e, t + 8))),
                        a = t + 46 + i,
                        o = B(e, t + 20),
                        s = n && 0xffffffff === o ? z64e(e, a) : [o, B(e, t + 24), B(e, t + 42)],
                        l = s[0],
                        f = s[1],
                        u = s[2];
                    return [N(e, t + 10), l, f, r, a + N(e, t + 30) + N(e, t + 32), u]
                },
                Z = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(e) {
                    e()
                };

            function G(e, t, n) {
                n || (n = t, t = {}), "function" != typeof n && L(7);
                let i = [],
                    r = function() {
                        for (let e = 0; e < i.length; ++e) i[e]()
                    },
                    a = {},
                    s = function(e, t) {
                        Z(function() {
                            n(e, t)
                        })
                    };
                Z(function() {
                    s = n
                });
                let l = e.length - 22;
                for (; 0x6054b50 !== B(e, l); --l)
                    if (!l || e.length - l > 65558) return s(L(13, 0, 1), null), r;
                let f = N(e, l + 8);
                if (f) {
                    let n = f,
                        u = B(e, l + 16),
                        h = 0xffffffff === u || 65535 === n;
                    if (h) {
                        let t = B(e, l - 12);
                        (h = 0x6064b50 === B(e, t)) && (n = f = B(e, t + 32), u = B(e, t + 48))
                    }
                    let c = t && t.filter;
                    for (let t = 0; t < n; ++t) ! function() {
                        var t, n, l;
                        let d = Y(e, u, h),
                            m = d[0],
                            p = d[1],
                            g = d[2],
                            y = d[3],
                            w = d[4],
                            I = d[5],
                            b = I + 30 + N(e, I + 26) + N(e, I + 28);
                        u = w;
                        let v = function(e, t) {
                            e ? (r(), s(e, null)) : (t && (a[y] = t), --f || s(null, a))
                        };
                        if (!c || c({
                                name: y,
                                size: p,
                                originalSize: g,
                                compression: m
                            }))
                            if (m)
                                if (8 === m) {
                                    let r = e.subarray(b, b + p);
                                    if (p < 32e4) try {
                                        v(null, (t = new o(g), T(r, t)))
                                    } catch (e) {
                                        v(e, null)
                                    } else i.push((n = {
                                        size: g
                                    }, (l = v) || (l = n, n = {}), "function" != typeof l && L(7), $(r, n, [j], function(e) {
                                        var t;
                                        return z((t = e.data[0], T(t, U(e.data[1]))))
                                    }, 1, l)))
                                } else v(L(14, "unknown compression type " + m, 1), null);
                        else v(null, F(e, b, b + p));
                        else v(null, null)
                    }(t)
                } else s(null, {});
                return r
            }
        },
        97933: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                fetchLottie: function() {
                    return h
                },
                unZipDotLottie: function() {
                    return u
                }
            };
            for (var r in i) Object.defineProperty(t, r, {
                enumerable: !0,
                get: i[r]
            });
            let a = n(3487);
            async function o(e) {
                return await fetch(new URL(e, window ? .location ? .href).href).then(e => e.arrayBuffer())
            }
            async function s(e) {
                return (await new Promise(t => {
                    let n = new FileReader;
                    n.readAsDataURL(new Blob([e])), n.onload = () => t(n.result)
                })).split(",", 2)[1]
            }
            async function l(e) {
                let t = new Uint8Array(e),
                    n = await new Promise((e, n) => {
                        (0, a.unzip)(t, (t, i) => t ? n(t) : e(i))
                    });
                return {
                    read: e => (0, a.strFromU8)(n[e]),
                    readB64: async e => await s(n[e])
                }
            }
            async function f(e, t) {
                if (!("assets" in e)) return e;
                async function n(e) {
                    let {
                        p: n
                    } = e;
                    if (null == n || null == t.read(`images/${n}`)) return e;
                    let i = n.split(".").pop(),
                        r = await t.readB64(`images/${n}`);
                    if (i ? .startsWith("data:")) return e.p = i, e.e = 1, e;
                    switch (i) {
                        case "svg":
                        case "svg+xml":
                            e.p = `data:image/svg+xml;base64,${r}`;
                            break;
                        case "png":
                        case "jpg":
                        case "jpeg":
                        case "gif":
                        case "webp":
                            e.p = `data:image/${i};base64,${r}`;
                            break;
                        default:
                            e.p = `data:;base64,${r}`
                    }
                    return e.e = 1, e
                }
                return (await Promise.all(e.assets.map(n))).map((t, n) => {
                    e.assets[n] = t
                }), e
            }
            async function u(e) {
                let t = await l(e),
                    n = function(e) {
                        let t = JSON.parse(e);
                        if (!("animations" in t)) throw Error("Manifest not found");
                        if (0 === t.animations.length) throw Error("No animations listed in the manifest");
                        return t
                    }(t.read("manifest.json"));
                return (await Promise.all(n.animations.map(e => f(JSON.parse(t.read(`animations/${e.id}.json`)), t))))[0]
            }
            async function h(e) {
                let t = await o(e);
                return ! function(e) {
                    let t = new Uint8Array(e, 0, 32);
                    return 80 === t[0] && 75 === t[1] && 3 === t[2] && 4 === t[3]
                }(t) ? JSON.parse(new TextDecoder().decode(t)) : await u(t)
            }
        }
    }
]);