!function(e) {
    e.fn.appear = function(a, r) {
        var p = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, r);
        return this.each(function() {
            var r = e(this);
            if (r.appeared = !1,
            a) {
                var n = e(window)
                  , t = function() {
                    if (r.is(":visible")) {
                        var e = n.scrollLeft()
                          , a = n.scrollTop()
                          , t = r.offset()
                          , c = t.left
                          , i = t.top
                          , o = p.accX
                          , f = p.accY
                          , s = r.height()
                          , l = n.height()
                          , h = r.width()
                          , d = n.width();
                        i + s + f >= a && i <= a + l + f && c + h + o >= e && c <= e + d + o ? r.appeared || r.trigger("appear", p.data) : r.appeared = !1
                    } else
                        r.appeared = !1
                }
                  , c = function() {
                    if (r.appeared = !0,
                    p.one) {
                        n.unbind("scroll", t);
                        var c = e.inArray(t, e.fn.appear.checks);
                        c >= 0 && e.fn.appear.checks.splice(c, 1)
                    }
                    a.apply(this, arguments)
                };
                p.one ? r.one("appear", p.data, c) : r.bind("appear", p.data, c),
                n.scroll(t),
                e.fn.appear.checks.push(t),
                t()
            } else
                r.trigger("appear", p.data)
        })
    }
    ,
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var a = e.fn.appear.checks.length;
            if (a > 0)
                for (; a--; )
                    e.fn.appear.checks[a]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }),
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
        var p = e.fn[r];
        p && (e.fn[r] = function() {
            var a = p.apply(this, arguments);
            return e.fn.appear.run(),
            a
        }
        )
    })
}(jQuery);

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(i, s) {
        void 0 === i && (i = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((function(a) {
            void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a])
        }
        ))
    }
    var i = "undefined" != typeof document ? document : {}
      , s = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    t(i, s);
    var a = "undefined" != typeof window ? window : {};
    t(a, {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    });
    var r = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function n(e, t) {
        var s = []
          , n = 0;
        if (e && !t && e instanceof r)
            return e;
        if (e)
            if ("string" == typeof e) {
                var o, l, d = e.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = i.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        s.push(l.childNodes[n])
                } else
                    for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && s.push(o[n])
            } else if (e.nodeType || e === a || e === i)
                s.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (n = 0; n < e.length; n += 1)
                    s.push(e[n]);
        return new r(s)
    }
    function o(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    n.fn = r.prototype,
    n.Class = r,
    n.Dom7 = r;
    var l = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    n(t).is(a))
                        r.apply(t, i);
                    else
                        for (var s = n(t).parents(), o = 0; o < s.length; o += 1)
                            n(s[o]).is(a) && r.apply(s[o], i)
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            o = e[2],
            a = void 0),
            o || (o = !1);
            for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (a)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                        u.dom7LiveListeners[v].push({
                            listener: r,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, o)
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                        u.dom7Listeners[f].push({
                            listener: r,
                            proxyListener: d
                        }),
                        u.addEventListener(f, d, o)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                    c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
                for (var o = s[n], l = 0; l < this.length; l += 1) {
                    var d = this[l]
                      , h = void 0;
                    try {
                        h = new a.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (h = i.createEvent("Event")).initEvent(o, !0, !0),
                        h.detail = r
                    }
                    d.dom7EventData = e.filter((function(e, t) {
                        return t > 0
                    }
                    )),
                    d.dispatchEvent(h),
                    d.dom7EventData = [],
                    delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , s = i.body
                  , r = e.clientTop || s.clientTop || 0
                  , n = e.clientLeft || s.clientLeft || 0
                  , o = e === a ? a.scrollY : e.scrollTop
                  , l = e === a ? a.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - r,
                    left: t.left + l - n
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var s in e)
                            this[i].style[s] = e[s];
                    return this
                }
                if (this[0])
                    return a.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, s, o = this[0];
            if (!o || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (o.matches)
                    return o.matches(e);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(e);
                for (t = n(e),
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            if (e === i)
                return o === i;
            if (e === a)
                return o === a;
            if (e.nodeType || e instanceof r) {
                for (t = e.nodeType ? [e] : e,
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, i = this.length;
            return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], s = arguments.length; s--; )
                t[s] = arguments[s];
            for (var a = 0; a < t.length; a += 1) {
                e = t[a];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        var o = i.createElement("div");
                        for (o.innerHTML = e; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (e instanceof r)
                        for (var l = 0; l < e.length; l += 1)
                            this[n].appendChild(e[l]);
                    else
                        this[n].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, s;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = i.createElement("div");
                    for (a.innerHTML = e,
                    s = a.childNodes.length - 1; s >= 0; s -= 1)
                        this[t].insertBefore(a.childNodes[s], this[t].childNodes[0])
                } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1)
                        this[t].insertBefore(e[s], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(o(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s; )
                    e ? n(s).is(e) && t.push(s) : t.push(s),
                    s = s.parentNode;
            return n(o(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
                    t.push(s[a]);
            return new r(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                    e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
            return new r(o(t))
        },
        filter: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                e.call(this[i], i, this[i]) && t.push(this[i]);
            return new r(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, s, a = this;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1)
                    a[a.length] = r[s],
                    a.length += 1
            }
            return a
        },
        styles: function() {
            return this[0] ? a.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach((function(e) {
        n.fn[e] = n.fn[e] || l[e]
    }
    ));
    var d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach((function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            ))
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var i, s, r;
            void 0 === t && (t = "x");
            var n = a.getComputedStyle(e, null);
            return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function(e) {
                return e.replace(",", ".")
            }
            )).join(", ")),
            r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            s || 0
        },
        parseUrlQuery: function(e) {
            var t, i, s, r, n = {}, o = e || a.location.href;
            if ("string" == typeof o && o.length)
                for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                    return "" !== e
                }
                ))).length,
                t = 0; t < r; t += 1)
                    s = i[t].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a)
                    for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , h = Object.getOwnPropertyDescriptor(a, l);
                        void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {},
                        d.extend(i[l], a[l])) : i[l] = a[l])
                    }
            }
            return i
        }
    }
      , h = {
        touch: !!("ontouchstart"in a || a.DocumentTouch && i instanceof a.DocumentTouch),
        pointerEvents: !!a.PointerEvent && "maxTouchPoints"in a.navigator && a.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver"in a || "WebkitMutationObserver"in a,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                a.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in a
    }
      , p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
            t.on(e, t.params.on[e])
        }
        ))
    }
      , c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }
        )),
        s
    }
    ,
    p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            s.off(e, a),
            a.f7proxy && delete a.f7proxy,
            t.apply(s, i)
        }
        return a.f7proxy = t,
        s.on(e, a, i)
    }
    ,
    p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }
            ))
        }
        )),
        i) : i
    }
    ,
    p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners)
            return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                }
                )),
                t.forEach((function(e) {
                    e.apply(a, s)
                }
                ))
            }
        }
        )),
        r
    }
    ,
    p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        }
        ))
    }
    ,
    p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }
            )),
            s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            }
            )),
            s.create && s.create.bind(t)(a)
        }
        ))
    }
    ,
    c.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        }
        )),
        e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        }
        )),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        }
        )),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , t = this.$wrapperEl
              , i = this.size
              , s = this.rtlTranslate
              , r = this.wrongRTL
              , n = this.virtual && e.virtual.enabled
              , o = n ? this.virtual.slides.length : this.slides.length
              , l = t.children("." + this.params.slideClass)
              , h = n ? this.virtual.slides.length : l.length
              , p = []
              , c = []
              , u = [];
            function v(t) {
                return !e.cssMode || t !== l.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length
              , b = this.snapGrid.length
              , w = e.spaceBetween
              , y = -f
              , x = 0
              , E = 0;
            if (void 0 !== i) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i),
                this.virtualSize = -w,
                s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = l.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0
                          , I = void 0
                          , D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn))
                              , A = k - e.slidesPerColumn * e.slidesPerGroup * O
                              , G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * T / M,
                            $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else
                            "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M,
                            (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0,
                            I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = a.getComputedStyle($[0], null)
                              , B = $[0].style.transform
                              , N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"),
                            N && ($[0].style.webkitTransform = "none"),
                            e.roundLengths)
                                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width"))
                                  , V = parseFloat(H.getPropertyValue("padding-left"))
                                  , Y = parseFloat(H.getPropertyValue("padding-right"))
                                  , F = parseFloat(H.getPropertyValue("margin-left"))
                                  , W = parseFloat(H.getPropertyValue("margin-right"))
                                  , R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height"))
                                  , j = parseFloat(H.getPropertyValue("padding-top"))
                                  , K = parseFloat(H.getPropertyValue("padding-bottom"))
                                  , U = parseFloat(H.getPropertyValue("margin-top"))
                                  , _ = parseFloat(H.getPropertyValue("margin-bottom"))
                                  , Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B),
                            N && ($[0].style.webkitTransform = N),
                            e.roundLengths && (S = Math.floor(S))
                        } else
                            S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView,
                            e.roundLengths && (S = Math.floor(S)),
                            l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");
                        l[k] && (l[k].swiperSlideSize = S),
                        u.push(S),
                        e.centeredSlides ? (y = y + S / 2 + x / 2 + w,
                        0 === x && 0 !== k && (y = y - i / 2 - w),
                        0 === k && (y = y - i / 2 - w),
                        Math.abs(y) < .001 && (y = 0),
                        e.roundLengths && (y = Math.floor(y)),
                        E % e.slidesPerGroup == 0 && p.push(y),
                        c.push(y)) : (e.roundLengths && (y = Math.floor(y)),
                        (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y),
                        c.push(y),
                        y = y + S + w),
                        this.virtualSize += S + w,
                        x = S,
                        E += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + m,
                s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                e.setWrapperSize && (this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                        p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                        p[ee] <= this.virtualSize - i && C.push(te)
                    }
                    p = C,
                    Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({
                    marginLeft: w + "px"
                }) : l.filter(v).css({
                    marginRight: w + "px"
                }) : l.filter(v).css({
                    marginBottom: w + "px"
                })),
                e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    ));
                    var se = (ie -= e.spaceBetween) - i;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }
                    ))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    )),
                    (ae -= e.spaceBetween) < i) {
                        var re = (i - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        }
                        )),
                        c.forEach((function(e, t) {
                            c[t] = e + re
                        }
                        ))
                    }
                }
                d.extend(this, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                h !== o && this.emit("slidesLengthChange"),
                p.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                c.length !== b && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides)
                    this.visibleSlides.each((function(e, t) {
                        i.push(t)
                    }
                    ));
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length)
                            break;
                        i.push(this.slides.eq(a)[0])
                    }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.slides
              , s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e),
                i.removeClass(t.slideVisibleClass),
                this.visibleSlidesIndexes = [],
                this.visibleSlides = [];
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r]
                      , l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(a - o.swiperSlideOffset)
                          , h = d + this.slidesSizesGrid[r];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(r),
                        i.eq(r).addClass(t.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                this.visibleSlides = n(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params
              , s = this.maxTranslate() - this.minTranslate()
              , a = this.progress
              , r = this.isBeginning
              , n = this.isEnd
              , o = r
              , l = n;
            0 === s ? (a = 0,
            r = !0,
            n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
            n = a >= 1),
            d.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
            r && !o && this.emit("reachBeginning toEdge"),
            n && !l && this.emit("reachEnd toEdge"),
            (o && !r || l && !n) && this.emit("fromEdge"),
            this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0)
                t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1),
            h !== n) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== u && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else
                t !== l && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = n(e.target).closest("." + t.slideClass)[0]
              , s = !1;
            if (i)
                for (var a = 0; a < this.slides.length; a += 1)
                    this.slides[a] === i && (s = !0);
            if (!i || !s)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            if (t.cssMode)
                return s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.wrapperEl
              , n = this.progress
              , o = 0
              , l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
            this.previousTranslate = this.translate,
            this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
            var n = this
              , o = n.params
              , l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition)
                return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e,
            n.updateProgress(d),
            o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d,
                r.behavior = "smooth",
                r)) : l[c ? "scrollLeft" : "scrollTop"] = -d,
                !0
            }
            return 0 === t ? (n.setTransition(0),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionEnd"))) : (n.setTransition(t),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionStart")),
            n.animating || (n.animating = !0,
            n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                n.onTranslateToWrapperTransitionEnd = null,
                delete n.onTranslateToWrapperTransitionEnd,
                i && n.emit("transitionEnd"))
            }
            ),
            n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && i !== a) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"),
                    "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex
              , a = this.params;
            if (this.animating = !1,
            !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && i !== s) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"),
                    "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = this
              , n = e;
            n < 0 && (n = 0);
            var o = r.params
              , l = r.snapGrid
              , d = r.slidesGrid
              , h = r.previousIndex
              , p = r.activeIndex
              , c = r.rtlTranslate
              , u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition)
                return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n)
              , f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
            (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g),
            o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset",
            c && -g === r.translate || !c && g === r.translate)
                return r.updateActiveIndex(n),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(g),
                "reset" !== m && (r.transitionStart(i, m),
                r.transitionEnd(i, m)),
                !1;
            if (o.cssMode) {
                var w = r.isHorizontal()
                  , y = -g;
                return c && (y = u.scrollWidth - u.offsetWidth - y),
                0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y,
                a.behavior = "smooth",
                a)) : u[w ? "scrollLeft" : "scrollTop"] = y,
                !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m)) : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, m))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.snapGrid
              , n = this.slidesGrid
              , o = this.rtlTranslate;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map((function(e) {
                return l(e)
            }
            )), c = (n.map((function(e) {
                return l(e)
            }
            )),
            r[p.indexOf(h)],
            r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            }
            )),
            void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = .5);
            var a = this.activeIndex
              , r = Math.min(this.params.slidesPerGroupSkip, a)
              , n = r + Math.floor((a - r) / this.params.slidesPerGroup)
              , o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0),
            a = Math.min(a, this.slidesGrid.length - 1),
            this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var g = {
        loopCreate: function() {
            var e = this
              , t = e.params
              , s = e.$wrapperEl;
            s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
            var a = s.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                        s.append(l)
                    }
                    a = s.children("." + t.slideClass)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
            e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
            e.loopedSlides += t.loopAdditionalSlides,
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = []
              , h = [];
            a.each((function(t, i) {
                var s = n(i);
                t < e.loopedSlides && h.push(i),
                t < a.length && t >= a.length - e.loopedSlides && d.push(i),
                s.attr("data-swiper-slide-index", t)
            }
            ));
            for (var p = 0; p < h.length; p += 1)
                s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s)
                e = i.length - 3 * s + t,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a,
            this.allowSlideNext = r,
            this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var w, y, x, E, T, S, C, M, P, z, k, $, L, I, D, O = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && h.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl
              , s = this.params
              , a = this.activeIndex;
            s.loop && (a -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0)
                this.prependSlide(t);
            else if (e >= r)
                this.appendSlide(t);
            else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var d = this.slides.eq(l);
                    d.remove(),
                    o.unshift(d)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var p = 0; p < t.length; p += 1)
                        t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else
                    i.append(t);
                for (var c = 0; c < o.length; c += 1)
                    i.append(o[c]);
                s.loop && this.loopCreate(),
                s.observer && h.observer || this.update(),
                s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (s -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }, A = (w = a.navigator.platform,
    y = a.navigator.userAgent,
    x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!a.cordova && !a.phonegap),
        phonegap: !(!a.cordova && !a.phonegap),
        electron: !1
    },
    E = a.screen.width,
    T = a.screen.height,
    S = y.match(/(Android);?[\s\/]+([\d.]+)?/),
    C = y.match(/(iPad).*OS\s([\d_]+)/),
    M = y.match(/(iPod)(.*OS\s([\d_]+))?/),
    P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0,
    k = y.indexOf("Edge/") >= 0,
    $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0,
    L = "Win32" === w,
    I = y.toLowerCase().indexOf("electron") >= 0,
    D = "MacIntel" === w,
    !C && D && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/),
    D = !1),
    x.ie = z,
    x.edge = k,
    x.firefox = $,
    S && !L && (x.os = "android",
    x.osVersion = S[2],
    x.android = !0,
    x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0),
    (C || P || M) && (x.os = "ios",
    x.ios = !0),
    P && !M && (x.osVersion = P[2].replace(/_/g, "."),
    x.iphone = !0),
    C && (x.osVersion = C[2].replace(/_/g, "."),
    x.ipad = !0),
    M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null,
    x.ipod = !0),
    x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]),
    x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches,
    x.webview = x.webView,
    x.standalone = x.webView,
    x.desktop = !(x.ios || x.android) || I,
    x.desktop && (x.electron = I,
    x.macos = D,
    x.windows = L,
    x.macos && (x.os = "macos"),
    x.windows && (x.os = "windows")),
    x.pixelRatio = a.devicePixelRatio || 1,
    x);
    function G(e) {
        var t = this.touchEventsData
          , s = this.params
          , r = this.touches;
        if (!this.animating || !s.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var l = n(o.target);
            if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type,
            (t.isTouchEvent || !("which"in o) || 3 !== o.which) && !(!t.isTouchEvent && "button"in o && o.button > 0 || t.isTouched && t.isMoved)))
                if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0])
                    this.allowClick = !0;
                else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
                    r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var h = r.currentX
                      , p = r.currentY
                      , c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
                      , u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= a.screen.width - u)) {
                        if (d.extend(t, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        r.startX = h,
                        r.startY = p,
                        t.touchStartTime = d.now(),
                        this.allowClick = !0,
                        this.updateSize(),
                        this.swipeDirection = void 0,
                        s.threshold > 0 && (t.allowThresholdMove = !1),
                        "touchstart" !== o.type) {
                            var v = !0;
                            l.is(t.formElements) && (v = !1),
                            i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                            var f = v && this.allowTouchMove && s.touchStartPreventDefault;
                            (s.touchStartForcePreventDefault || f) && o.preventDefault()
                        }
                        this.emit("touchStart", o)
                    }
                }
        }
    }
    function H(e) {
        var t = this.touchEventsData
          , s = this.params
          , a = this.touches
          , r = this.rtlTranslate
          , o = e;
        if (o.originalEvent && (o = o.originalEvent),
        t.isTouched) {
            if (!t.isTouchEvent || "touchmove" === o.type) {
                var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
                  , h = "touchmove" === o.type ? l.pageX : o.pageX
                  , p = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper)
                    return a.startX = h,
                    void (a.startY = p);
                if (!this.allowTouchMove)
                    return this.allowClick = !1,
                    void (t.isTouched && (d.extend(a, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p
                    }),
                    t.touchStartTime = d.now()));
                if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate())
                            return t.isTouched = !1,
                            void (t.isMoved = !1)
                    } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate())
                        return;
                if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements))
                    return t.isMoved = !0,
                    void (this.allowClick = !1);
                if (t.allowTouchCallbacks && this.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1)) {
                    a.currentX = h,
                    a.currentY = p;
                    var c = a.currentX - a.startX
                      , u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === t.isScrolling)
                            this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                            t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                        if (t.isScrolling && this.emit("touchMoveOpposite", o),
                        void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)),
                        t.isScrolling)
                            t.isTouched = !1;
                        else if (t.startMoving) {
                            this.allowClick = !1,
                            !s.cssMode && o.cancelable && o.preventDefault(),
                            s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                            t.isMoved || (s.loop && this.loopFix(),
                            t.startTranslate = this.getTranslate(),
                            this.setTransition(0),
                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            t.allowMomentumBounce = !1,
                            !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                            this.emit("sliderFirstMove", o)),
                            this.emit("sliderMove", o),
                            t.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            a.diff = f,
                            f *= s.touchRatio,
                            r && (f = -f),
                            this.swipeDirection = f > 0 ? "prev" : "next",
                            t.currentTranslate = f + t.startTranslate;
                            var m = !0
                              , g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0),
                            f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1,
                            s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1,
                            s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))),
                            m && (o.preventedByNestedSwiper = !0),
                            !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
                            !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
                            s.threshold > 0) {
                                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove))
                                    return void (t.currentTranslate = t.startTranslate);
                                if (!t.allowThresholdMove)
                                    return t.allowThresholdMove = !0,
                                    a.startX = a.currentX,
                                    a.startY = a.currentY,
                                    t.currentTranslate = t.startTranslate,
                                    void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(),
                            this.updateSlidesClasses()),
                            s.freeMode && (0 === t.velocities.length && t.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }),
                            t.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: d.now()
                            })),
                            this.updateProgress(t.currentTranslate),
                            this.setTranslate(t.currentTranslate))
                        }
                    }
                }
            }
        } else
            t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
    }
    function B(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , n = t.$wrapperEl
          , o = t.slidesGrid
          , l = t.snapGrid
          , h = e;
        if (h.originalEvent && (h = h.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", h),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = d.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)),
        i.lastClickTime = d.now(),
        d.nextTick((function() {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop()
                          , f = i.velocities.pop()
                          , m = v.position - f.position
                          , g = v.time - f.time;
                        t.velocity = m / g,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio,
                    i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio
                      , w = t.velocity * b
                      , y = t.translate + w;
                    r && (y = -y);
                    var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                        x = t.maxTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                        x = t.minTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.minTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < l.length; M += 1)
                            if (l[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                    }
                    if (E && t.once("transitionEnd", (function() {
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity),
                        s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate)
                              , z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    s.freeModeMomentumBounce && T ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(s.speed),
                        setTimeout((function() {
                            t.setTranslate(x),
                            n.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            ))
                        }
                        ), 0))
                    }
                    ))) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky)
                    return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L,
                    $ = o[L + I] - o[L]) : p >= o[L] && (k = L,
                    $ = o[o.length - 1] - o[o.length - 2])
                }
                var D = (p - o[k]) / $
                  , O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
                    "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O),
                    "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }
    function N() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    function X(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function V() {
        var e = this.wrapperEl
          , t = this.rtlTranslate;
        this.previousTranslate = this.translate,
        this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop,
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
        this.emit("setTranslate", this.translate, !1)
    }
    var Y = !1;
    function F() {}
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , R = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: O,
        events: {
            attachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl;
                this.onTouchStart = G.bind(this),
                this.onTouchMove = H.bind(this),
                this.onTouchEnd = B.bind(this),
                e.cssMode && (this.onScroll = V.bind(this)),
                this.onClick = X.bind(this);
                var r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.addEventListener(t.start, this.onTouchStart, !1),
                    i.addEventListener(t.move, this.onTouchMove, r),
                    i.addEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(t.start, this.onTouchStart, n),
                        s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r),
                        s.addEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n),
                        Y || (i.addEventListener("touchstart", F),
                        Y = !0)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1),
                    i.addEventListener("mousemove", this.onTouchMove, r),
                    i.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                e.cssMode && a.addEventListener("scroll", this.onScroll),
                e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
            },
            detachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.removeEventListener(t.start, this.onTouchStart, !1),
                    i.removeEventListener(t.move, this.onTouchMove, r),
                    i.removeEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(t.start, this.onTouchStart, n),
                        s.removeEventListener(t.move, this.onTouchMove, r),
                        s.removeEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1),
                    i.removeEventListener("mousemove", this.onTouchMove, r),
                    i.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                e.cssMode && a.removeEventListener("scroll", this.onScroll),
                this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params
                  , a = this.$el
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = this.getBreakpoint(r);
                    if (n && this.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var l = o || this.originalParams
                          , h = s.slidesPerColumn > 1
                          , p = l.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"),
                        "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = l.direction && l.direction !== s.direction
                          , u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(),
                        d.extend(this.params, l),
                        d.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = n,
                        u && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , i = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var t = parseFloat(e.substr(1));
                            return {
                                value: a.innerHeight * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    i.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var s = 0; s < i.length; s += 1) {
                        var r = i[s]
                          , n = r.point;
                        r.value <= a.innerWidth && (t = n)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params
                  , t = this.isLocked
                  , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                t && t !== this.isLocked && (this.isEnd = !1,
                this.navigation && this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && (a.push("multirow"),
                "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                A.android && a.push("android"),
                A.ios && a.push("ios"),
                t.cssMode && a.push("css-mode"),
                a.forEach((function(i) {
                    e.push(t.containerModifierClass + i)
                }
                )),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, i, s, r, o) {
                var l;
                function d() {
                    o && o()
                }
                n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image).onload = d,
                l.onerror = d,
                s && (l.sizes = s),
                i && (l.srcset = i),
                t && (l.src = t)) : d()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , q = {}
      , j = function(e) {
        function t() {
            for (var i, s, a, r = [], o = arguments.length; o--; )
                r[o] = arguments[o];
            1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0],
            a = i[1]),
            a || (a = {}),
            a = d.extend({}, a),
            s && !a.el && (a.el = s),
            e.call(this, a),
            Object.keys(R).forEach((function(e) {
                Object.keys(R[e]).forEach((function(i) {
                    t.prototype[i] || (t.prototype[i] = R[e][i])
                }
                ))
            }
            ));
            var l = this;
            void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach((function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || null === s)
                        return;
                    if (!(i in a) || !("enabled"in s))
                        return;
                    !0 === a[i] && (a[i] = {
                        enabled: !0
                    }),
                    "object" != typeof a[i] || "enabled"in a[i] || (a[i].enabled = !0),
                    a[i] || (a[i] = {
                        enabled: !1
                    })
                }
            }
            ));
            var p = d.extend({}, W);
            l.useModulesParams(p),
            l.params = d.extend({}, p, q, a),
            l.originalParams = d.extend({}, l.params),
            l.passedParams = d.extend({}, a),
            l.$ = n;
            var c = n(l.params.el);
            if (s = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each((function(e, i) {
                        var s = d.extend({}, a, {
                            el: i
                        });
                        u.push(new t(s))
                    }
                    )),
                    u
                }
                var v, f, m;
                return s.swiper = l,
                c.data("swiper", l),
                s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
                    return c.children(e)
                }
                : v = c.children("." + l.params.wrapperClass),
                d.extend(l, {
                    $el: c,
                    el: s,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: n(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    m = ["mousedown", "mousemove", "mouseup"],
                    h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]),
                    l.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    },
                    l.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    },
                    h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
            this.params.direction = e,
            this.slides.each((function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }
            )),
            this.emit("changeDirection"),
            t && this.update()),
            this
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , n = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((function(e) {
                i.off(e)
            }
            )),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            d.deleteProps(i)),
            i.destroyed = !0),
            null
        }
        ,
        t.extendDefaults = function(e) {
            d.extend(q, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return q
        }
        ,
        i.defaults.get = function() {
            return W
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return n
        }
        ,
        Object.defineProperties(t, i),
        t
    }(p)
      , K = {
        name: "device",
        proto: {
            device: A
        },
        static: {
            device: A
        }
    }
      , U = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }
      , _ = {
        isEdge: !!a.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            var e = a.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
    }
      , Z = {
        name: "browser",
        proto: {
            browser: _
        },
        static: {
            browser: _
        }
    }
      , Q = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                a.addEventListener("resize", this.resize.resizeHandler),
                a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                a.removeEventListener("resize", this.resize.resizeHandler),
                a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , J = {
        func: a.MutationObserver || a.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this
              , s = new (0,
            J.func)((function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                } else
                    i.emit("observerUpdate", e[0])
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(s)
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    }
      , ee = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: J.init.bind(this),
                    attach: J.attach.bind(this),
                    destroy: J.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , te = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , l = n.addSlidesAfter
              , h = t.virtual
              , p = h.from
              , c = h.to
              , u = h.slides
              , v = h.slidesGrid
              , f = h.renderSlide
              , m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (b = Math.floor(s / 2) + a + o,
            w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o,
            w = a + l);
            var x = Math.max((y || 0) - w, 0)
              , E = Math.min((y || 0) + b, u.length - 1)
              , T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (d.extend(t.virtual, {
                from: x,
                to: E,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === x && c === E && !e)
                return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: x,
                    to: E,
                    slides: function() {
                        for (var e = [], t = x; t <= E; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void S();
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var P = p; P <= c; P += 1)
                    (P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z),
                z < p && C.push(z)));
            M.forEach((function(e) {
                t.$wrapperEl.append(f(u[e], e))
            }
            )),
            C.sort((function(e, t) {
                return t - e
            }
            )).forEach((function(e) {
                t.$wrapperEl.prepend(f(u[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
            S()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach((function(e) {
                    var t = r[e]
                      , i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                    n[parseInt(e, 10) + s] = t
                }
                )),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , ie = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: te.update.bind(this),
                    appendSlide: te.appendSlide.bind(this),
                    prependSlide: te.prependSlide.bind(this),
                    removeSlide: te.removeSlide.bind(this),
                    removeAllSlides: te.removeAllSlides.bind(this),
                    renderSlide: te.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , se = {
        handle: function(e) {
            var t = this.rtlTranslate
              , s = e;
            s.originalEvent && (s = s.originalEvent);
            var r = s.keyCode || s.charCode
              , n = this.params.keyboard.pageUpDown
              , o = n && 33 === r
              , l = n && 34 === r
              , d = 37 === r
              , h = 39 === r
              , p = 38 === r
              , c = 40 === r;
            if (!this.allowSlideNext && (this.isHorizontal() && h || this.isVertical() && c || l))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && d || this.isVertical() && p || o))
                return !1;
            if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (o || l || d || h || p || c)) {
                    var u = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var v = a.innerWidth
                      , f = a.innerHeight
                      , m = this.$el.offset();
                    t && (m.left -= this.$el[0].scrollLeft);
                    for (var g = [[m.left, m.top], [m.left + this.width, m.top], [m.left, m.top + this.height], [m.left + this.width, m.top + this.height]], b = 0; b < g.length; b += 1) {
                        var w = g[b];
                        w[0] >= 0 && w[0] <= v && w[1] >= 0 && w[1] <= f && (u = !0)
                    }
                    if (!u)
                        return
                }
                this.isHorizontal() ? ((o || l || d || h) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                ((l || h) && !t || (o || d) && t) && this.slideNext(),
                ((o || d) && !t || (l || h) && t) && this.slidePrev()) : ((o || l || p || c) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                (l || c) && this.slideNext(),
                (o || p) && this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , ae = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: se.enable.bind(this),
                    disable: se.disable.bind(this),
                    handle: se.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var re = {
        lastScrollTime: d.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in i;
                if (!e) {
                    var t = i.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            e.shiftKey && !s && (s = a,
            a = 0),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , o = i.rtlTranslate ? -1 : 1
              , l = re.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return !0;
                    r = -l.pixelX * o
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return !0;
                    r = -l.pixelY
                }
            else
                r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 === r)
                return !0;
            if (s.invert && (r = -r),
            i.params.freeMode) {
                var h = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }
                  , p = i.mousewheel.lastEventBeforeSnap
                  , c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    var u = i.getTranslate() + r * s.sensitivity
                      , v = i.isBeginning
                      , f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()),
                    u <= i.maxTranslate() && (u = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(u),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0
                          , b = m[0];
                        if (m.push(h),
                        g && (h.delta > g.delta || h.direction !== g.direction))
                            m.splice(0);
                        else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.mousewheel.timeout = d.nextTick((function() {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }
                            ), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick((function() {
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (c || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    u === i.minTranslate() || u === i.maxTranslate())
                        return !0
                }
            } else {
                var y = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                }
                  , x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var E = x.length ? x[x.length - 1] : void 0;
                if (x.push(y),
                E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y),
                i.mousewheel.releaseScroll(y))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
            this.emit("scroll", e.raw)),
            this.mousewheel.lastScrollTime = (new a.Date).getTime(),
            !1)
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                    return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.off(e, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , ne = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = n(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            d.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , oe = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    a.length > 1)
                        h.each((function(e, s) {
                            var a = n(s)
                              , r = a.index();
                            r === i && a.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"),
                            r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var p = h.eq(i)
                          , c = p.index();
                        if (p.addClass(t.bulletActiveClass),
                        t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                                h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop)
                                if (c >= h.length - t.dynamicMainBullets) {
                                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                        h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                } else
                                    u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                            else
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4)
                          , b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
                "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / r
                      , E = 1
                      , T = 1;
                    "horizontal" === y ? E = x : T = x,
                    a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)),
                this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]),
                a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = n(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    var i = n(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , le = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d,
                d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                d = 0) : d + s > a && (l = a - d),
                this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout((function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }
                ), 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = d.nextTick((function() {
                a.css("opacity", 0),
                a.transition(400)
            }
            ), 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n),
                r.addEventListener(t.move, this.scrollbar.onDragMove, n),
                r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                i.addEventListener(s.move, this.scrollbar.onDragMove, n),
                i.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                i.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                i.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , s = n(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                s.append(a)),
                d.extend(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , de = {
        setTransform: function(e, t) {
            var i = this.rtl
              , s = n(e)
              , a = i ? -1 : 1
              , r = s.attr("data-swiper-parallax") || "0"
              , o = s.attr("data-swiper-parallax-x")
              , l = s.attr("data-swiper-parallax-y")
              , d = s.attr("data-swiper-parallax-scale")
              , h = s.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = r,
            l = "0") : (l = r,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                s[0].style.opacity = p
            }
            if (null == d)
                s.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , s = e.progress
              , a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                e.parallax.setTransform(i, s)
            }
            )),
            i.each((function(t, i) {
                var r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)),
                r = Math.min(Math.max(r, -1), 1),
                n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, r)
                }
                ))
            }
            ))
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                var s = n(i)
                  , a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0),
                s.transition(a)
            }
            ))
        }
    }
      , he = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                s.scaleStart = he.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass),
            0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0),
            this.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = he.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture, y = g.image;
            (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex),
            w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)),
            w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass),
            void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x,
            i = y.touchesStart.y),
            g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            e ? (f = w.$slideEl[0].offsetWidth,
            m = w.$slideEl[0].offsetHeight,
            s = w.$slideEl.offset().left + f / 2 - t,
            a = w.$slideEl.offset().top + m / 2 - i,
            o = w.$imageEl[0].offsetWidth,
            l = w.$imageEl[0].offsetHeight,
            d = o * g.scale,
            h = l * g.scale,
            u = -(p = Math.min(f / 2 - d / 2, 0)),
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            (r = s * g.scale) < p && (r = p),
            r > u && (r = u),
            (n = a * g.scale) < c && (n = c),
            n > v && (n = v)) : (r = 0,
            n = 0),
            w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }
      , pe = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , s = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])),
                0 !== r.length && r.each((function(e, r) {
                    var o = n(r);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes")
                      , c = o.parent("picture");
                    i.loadImage(o[0], d || l, h, p, !1, (function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            c.length && c.children("source").each((function(e, t) {
                                var i = n(t);
                                i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")),
                                i.removeAttr("data-srcset"))
                            }
                            )),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                            a.find("." + s.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = a.attr("data-swiper-slide-index");
                                if (a.hasClass(i.params.slideDuplicateClass)) {
                                    var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(r.index(), !1)
                                } else {
                                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(u.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", a[0], o[0]),
                            i.params.autoHeight && i.updateAutoHeight()
                        }
                    }
                    )),
                    i.emit("lazyImageLoad", a[0], o[0])
                }
                ))
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , s = e.slides
              , a = e.activeIndex
              , r = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function h(e) {
                return r ? n(e).attr("data-swiper-slide-index") : n(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
                    e.lazy.loadInSlide(s)
                }
                ));
            else if (l > 1)
                for (var p = a; p < a + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(a);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < a; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , ce = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid,e.slidesGrid) : new ce.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof j && n(r[o]);
            else
                r instanceof j && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && d.nextTick((function() {
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof j && r(a[i]);
            else
                a instanceof j && t !== a && r(a)
        }
    }
      , ue = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = n(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i),
                this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i),
                this.a11y.makeElFocusable(i))),
                t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t),
                this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t),
                this.a11y.makeElFocusable(t)))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
                var a = n(s);
                e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
            }
            ))
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , ve = {
        init: function() {
            if (this.params.history) {
                if (!a.history || !a.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = ve.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = ve.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = a.location.pathname.slice(1).split("/").filter((function(e) {
                return "" !== e
            }
            ))
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t)
                  , s = ve.slugify(i.attr("data-history"));
                a.location.pathname.includes(e) || (s = e + "/" + s);
                var r = a.history.state;
                r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({
                    value: s
                }, null, s) : a.history.pushState({
                    value: s
                }, null, s))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , fe = {
        onHashCange: function() {
            this.emit("hashChange");
            var e = i.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t)
                    return;
                this.slideTo(t)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState)
                    a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""),
                    this.emit("hashSet");
                else {
                    var e = this.slides.eq(this.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    i.location.hash = t || "",
                    this.emit("hashSet")
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var e = i.location.hash.replace("#", "");
                if (e)
                    for (var t = 0, s = this.slides.length; t < s; t += 1) {
                        var r = this.slides.eq(t);
                        if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                            var o = r.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , me = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = d.nextTick((function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }
            ), i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        }
    }
      , ge = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , be = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: a + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var u = 0; u < s.length; u += 1) {
                var v = s.eq(u)
                  , f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                h || (y = w,
                w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b,
                o && (c = 90 * -f - 90 * b)),
                v.transform(E),
                d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(T)),
                    0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    T.length && (T[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , z = d.shadowScale / M
                      , k = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
                }
            var $ = _.isSafari || _.isWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , we = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i)
                  , a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (r = -r) : (d = l,
                l = 0,
                o = -r,
                r = 0),
                s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(h)),
                    0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-a, 0)),
                    p.length && (p[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , ye = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = a[u]
                  , g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier
                  , b = o ? p * g : 0
                  , w = o ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = r.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
                var E = o ? 0 : x * g
                  , T = o ? x * g : 0
                  , S = 1 - (1 - r.scale) * Math.abs(g);
                Math.abs(T) < .001 && (T = 0),
                Math.abs(E) < .001 && (E = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(S) < .001 && (S = 0);
                var C = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg) scale(" + S + ")";
                if (f.transform(C),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                r.slideShadows) {
                    var M = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , P = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(M)),
                    0 === P.length && (P = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(P)),
                    M.length && (M[0].style.opacity = g > 0 ? g : 0),
                    P.length && (P[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , xe = {
        init: function() {
            var e = this.params.thumbs
              , t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            d.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            d.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                    }
                    this.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView
                  , s = this.params.thumbs.autoScrollOffset
                  , a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                    var r, n, o = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        o = t.activeIndex);
                        var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l,
                        n = this.activeIndex > this.previousIndex ? "next" : "prev"
                    } else
                        n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                    a && (r += "next" === n ? s : -1 * s),
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1),
                    t.slideTo(r, e ? 0 : void 0))
                }
                var h = 1
                  , p = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (h = 1),
                h = Math.floor(h),
                t.slides.removeClass(p),
                t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var c = 0; c < h; c += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);
                else
                    for (var u = 0; u < h; u += 1)
                        t.slides.eq(this.realIndex + u).addClass(p)
            }
        }
    }
      , Ee = [K, U, Z, Q, ee, ie, ae, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: re.enable.bind(this),
                    disable: re.disable.bind(this),
                    handle: re.handle.bind(this),
                    handleMouseEnter: re.handleMouseEnter.bind(this),
                    handleMouseLeave: re.handleMouseLeave.bind(this),
                    animateSlider: re.animateSlider.bind(this),
                    releaseScroll: re.releaseScroll.bind(this),
                    lastScrollTime: d.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            d.extend(this, {
                navigation: {
                    init: ne.init.bind(this),
                    update: ne.update.bind(this),
                    destroy: ne.destroy.bind(this),
                    onNextClick: ne.onNextClick.bind(this),
                    onPrevClick: ne.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                !this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                s && s.toggleClass(this.params.navigation.hiddenClass),
                a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            d.extend(this, {
                pagination: {
                    init: oe.init.bind(this),
                    render: oe.render.bind(this),
                    update: oe.update.bind(this),
                    destroy: oe.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            d.extend(this, {
                scrollbar: {
                    init: le.init.bind(this),
                    destroy: le.destroy.bind(this),
                    updateSize: le.updateSize.bind(this),
                    setTranslate: le.setTranslate.bind(this),
                    setTransition: le.setTransition.bind(this),
                    enableDraggable: le.enableDraggable.bind(this),
                    disableDraggable: le.disableDraggable.bind(this),
                    setDragPosition: le.setDragPosition.bind(this),
                    getPointerPosition: le.getPointerPosition.bind(this),
                    onDragStart: le.onDragStart.bind(this),
                    onDragMove: le.onDragMove.bind(this),
                    onDragEnd: le.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            d.extend(this, {
                parallax: {
                    setTransform: de.setTransform.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                t[i] = he[i].bind(e)
            }
            )),
            d.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            },
            slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: pe.load.bind(this),
                    loadInSlide: pe.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            },
            slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: ce.getInterpolateFunction.bind(this),
                    setTranslate: ce.setTranslate.bind(this),
                    setTransition: ce.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                a11y: {
                    liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(ue).forEach((function(t) {
                e.a11y[t] = ue[t].bind(e)
            }
            ))
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            d.extend(this, {
                history: {
                    init: ve.init.bind(this),
                    setHistory: ve.setHistory.bind(this),
                    setHistoryPopState: ve.setHistoryPopState.bind(this),
                    scrollToSlide: ve.scrollToSlide.bind(this),
                    destroy: ve.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            },
            slideChange: function() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: fe.init.bind(this),
                    destroy: fe.destroy.bind(this),
                    setHash: fe.setHash.bind(this),
                    onHashCange: fe.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            },
            slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: me.run.bind(e),
                    start: me.start.bind(e),
                    stop: me.stop.bind(e),
                    pause: me.pause.bind(e),
                    onVisibilityChange: function() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                        e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && (this.autoplay.start(),
                document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            touchEnd: function() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: be.setTranslate.bind(this),
                    setTransition: be.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            d.extend(this, {
                flipEffect: {
                    setTranslate: we.setTranslate.bind(this),
                    setTransition: we.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ye.setTranslate.bind(this),
                    setTransition: ye.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            d.extend(this, {
                thumbs: {
                    swiper: null,
                    init: xe.init.bind(this),
                    update: xe.update.bind(this),
                    onThumbClick: xe.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === j.use && (j.use = j.Class.use,
    j.installModule = j.Class.installModule),
    j.use(Ee),
    j
}
));

!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o])
                return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "dist/",
        t(0)
    }([function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , r = n(1)
          , a = (o(r),
        n(6))
          , u = o(a)
          , c = n(7)
          , f = o(c)
          , s = n(8)
          , d = o(s)
          , l = n(9)
          , p = o(l)
          , m = n(10)
          , b = o(m)
          , v = n(11)
          , y = o(v)
          , g = n(14)
          , h = o(g)
          , w = []
          , k = !1
          , x = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e && (k = !0),
            k)
                return w = (0,
                y.default)(w, x),
                (0,
                b.default)(w, x.once),
                w
        }
          , O = function() {
            w = (0,
            h.default)(),
            j()
        }
          , _ = function() {
            w.forEach(function(e, t) {
                e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay")
            })
        }
          , S = function(e) {
            return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
        }
          , z = function(e) {
            x = i(x, e),
            w = (0,
            h.default)();
            var t = document.all && !window.atob;
            return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing),
            document.querySelector("body").setAttribute("data-aos-duration", x.duration),
            document.querySelector("body").setAttribute("data-aos-delay", x.delay),
            "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                j(!0)
            }) : document.addEventListener(x.startEvent, function() {
                j(!0)
            }),
            window.addEventListener("resize", (0,
            f.default)(j, x.debounceDelay, !0)),
            window.addEventListener("orientationchange", (0,
            f.default)(j, x.debounceDelay, !0)),
            window.addEventListener("scroll", (0,
            u.default)(function() {
                (0,
                b.default)(w, x.once)
            }, x.throttleDelay)),
            x.disableMutationObserver || (0,
            d.default)("[data-aos]", O),
            w)
        };
        e.exports = {
            init: z,
            refresh: j,
            refreshHard: O
        }
    }
    , function(e, t) {}
    , , , , , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function o(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    k = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return k = e,
                    h = setTimeout(s, t),
                    _ ? o(e) : g
                }
                function a(e) {
                    var n = e - w
                      , o = e - k
                      , i = t - n;
                    return S ? j(i, y - o) : i
                }
                function c(e) {
                    var n = e - w
                      , o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = O();
                    return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? o(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    k = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(O())
                }
                function m() {
                    var e = O()
                      , n = c(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, k = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return t = u(t) || 0,
                i(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? x(u(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e, t, o) {
                var r = !0
                  , a = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return i(o) && (r = "leading"in o ? !!o.leading : r,
                a = "trailing"in o ? !!o.trailing : a),
                n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }
            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }
            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }
            function u(e) {
                if ("number" == typeof e)
                    return e;
                if (a(e))
                    return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , f = "Expected a function"
              , s = NaN
              , d = "[object Symbol]"
              , l = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , m = /^0b[01]+$/i
              , b = /^0o[0-7]+$/i
              , v = parseInt
              , y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t
              , g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self
              , h = y || g || Function("return this")()
              , w = Object.prototype
              , k = w.toString
              , x = Math.max
              , j = Math.min
              , O = function() {
                return h.Date.now()
            };
            e.exports = o
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function i(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    O = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return O = e,
                    h = setTimeout(s, t),
                    _ ? i(e) : g
                }
                function u(e) {
                    var n = e - w
                      , o = e - O
                      , i = t - n;
                    return S ? x(i, y - o) : i
                }
                function f(e) {
                    var n = e - w
                      , o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = j();
                    return f(e) ? d(e) : void (h = setTimeout(s, u(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? i(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    O = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(j())
                }
                function m() {
                    var e = j()
                      , n = f(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, O = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(c);
                return t = a(t) || 0,
                o(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? k(a(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }
            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }
            function a(e) {
                if ("number" == typeof e)
                    return e;
                if (r(e))
                    return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , c = "Expected a function"
              , f = NaN
              , s = "[object Symbol]"
              , d = /^\s+|\s+$/g
              , l = /^[-+]0x[0-9a-f]+$/i
              , p = /^0b[01]+$/i
              , m = /^0o[0-7]+$/i
              , b = parseInt
              , v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t
              , y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self
              , g = v || y || Function("return this")()
              , h = Object.prototype
              , w = h.toString
              , k = Math.max
              , x = Math.min
              , j = function() {
                return g.Date.now()
            };
            e.exports = n
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            var n = window.document
              , r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
              , a = new r(o);
            i = t,
            a.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
        function o(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes)
                  , n = Array.prototype.slice.call(e.removedNodes)
                  , o = t.concat(n).filter(function(e) {
                    return e.hasAttribute && e.hasAttribute("data-aos")
                }).length;
                o && i()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {};
        t.default = n
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , f = function() {
            function e() {
                n(this, e)
            }
            return i(e, [{
                key: "phone",
                value: function() {
                    var e = o();
                    return !(!r.test(e) && !a.test(e.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var e = o();
                    return !(!u.test(e) && !c.test(e.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            e
        }();
        t.default = new f
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
            var o = e.node.getAttribute("data-aos-once");
            t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
        }
          , o = function(e, t) {
            var o = window.pageYOffset
              , i = window.innerHeight;
            e.forEach(function(e, r) {
                n(e, i + o, t)
            })
        };
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12)
          , r = o(i)
          , a = function(e, t) {
            return e.forEach(function(e, n) {
                e.node.classList.add("aos-init"),
                e.position = (0,
                r.default)(e.node, t.offset)
            }),
            e
        };
        t.default = a
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13)
          , r = o(i)
          , a = function(e, t) {
            var n = 0
              , o = 0
              , i = window.innerHeight
              , a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
            n = (0,
            r.default)(e).top,
            a.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += e.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += e.offsetHeight;
                break;
            case "top-center":
                n += i / 2;
                break;
            case "bottom-center":
                n += i / 2 + e.offsetHeight;
                break;
            case "center-center":
                n += i / 2 + e.offsetHeight / 2;
                break;
            case "top-top":
                n += i;
                break;
            case "bottom-top":
                n += e.offsetHeight + i;
                break;
            case "center-top":
                n += e.offsetHeight / 2 + i
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (o = t),
            n + o
        };
        t.default = a
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = n
    }
    ])
});

!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(e, r),
                delete n[r]),
                r.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        if (Array.isArray(e))
            return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }
    function o(e, t, r) {
        if (!(this instanceof o))
            return new o(e,t,r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)),
        s ? (this.elements = n(s),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console
      , d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)),
            s.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + z),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = parseFloat(o)
          , r = parseFloat(n)
          , a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width),
        n.indexOf("%") != -1 && (r = r / 100 * a.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        n && !this.isTransitioning)
            return void this.layoutPosition();
        var s = t - i
          , r = e - o
          , a = {};
        a.transform = this.getTranslate(s, r),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});

!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});
