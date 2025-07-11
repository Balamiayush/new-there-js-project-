var p = (o, V, S) => {
    let f = `fs-${o}-element`,
        l = `fs-${o}-instance`,
        g = t => {
            let {
                key: e
            } = S[t];
            return `fs-${o}-${e}`
        },
        m = (t, e) => {
            let n = g(t);
            return e ? `[${n}="${e}" i]` : `[${n}]`
        },
        u = (t, {
            instance: e
        } = {}) => {
            if (!t) return `[${f}]`;
            let n = `[${f}="${t}" i]`;
            if (e === void 0) return n;
            if (e === null) return `${n}:not([${l}], [${l}] ${n})`;
            let i = E(e);
            return `${n}${i}, ${i} ${n}`
        },
        E = t => `[${l}="${t}"]`,
        N = (t, {
            instance: e,
            scope: n
        } = {}) => {
            let i = u(t, {
                instance: e
            });
            return (n || document).querySelector(i)
        },
        A = (t, {
            instance: e,
            scope: n
        } = {}) => {
            let i = u(t, {
                instance: e
            });
            return [...(n || document).querySelectorAll(i)]
        },
        $ = t => {
            let e = t.closest(`[${l}]`);
            return e ? e.getAttribute(l) : null
        },
        y = (t, e, {
            instance: n
        } = {}) => {
            let i = u(e, {
                instance: n
            });
            return t.closest(i)
        },
        d = (t, e, {
            filterInvalid: n
        } = {}) => {
            let i = g(e),
                a = m(e),
                s = t ? .closest(a) ? .getAttribute(i);
            if (!s) {
                for (let r of window.FinsweetAttributes.scripts)
                    if (s = r.getAttribute(i), s) break
            }
            let {
                values: b = [],
                defaultValue: c,
                isNumeric: D
            } = S[e];
            if (s ? ? = c, !s) return;
            if (D) {
                let r = Number(s);
                if (isNaN(r) && c && (r = Number(c)), !isNaN(r)) return r
            }
            return n && b.length && !b.includes(s) ? void 0 : s
        };
    return {
        getClosestElement: y,
        getElementSelector: u,
        getSettingSelector: m,
        getInstanceSelector: E,
        getSettingAttributeName: g,
        queryElement: N,
        queryAllElements: A,
        getInstance: $,
        getAttribute: d,
        hasAttributeValue: (t, e, n) => d(t, e) === n
    }
};
export {
    p as a
};