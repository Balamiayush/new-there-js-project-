var n = e => new Promise(t => setTimeout(t, e)),
    o = e => window.FinsweetAttributes.modules[e] ? .loading,
    i = async () => new Promise(e => {
        window.Webflow || = [], window.Webflow.push(e)
    }),
    r = async () => new Promise(e => {
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e(void 0)
    });
export {
    n as a, o as b, i as c, r as d
};