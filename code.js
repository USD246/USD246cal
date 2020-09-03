try {
    var m, ba = function(a, b) {
            return b.H() >= aa(a.H())
        },
        da = function(a) {
            switch (a) {
                case "#a4bdfc":
                    return "#e4ebfe";
                case "#5484ed":
                    return "#dde6fb";
                case "#7ae7bf":
                    return "#d7f8ec";
                case "#51b749":
                    return "#dcf1db";
                case "#dbadff":
                    return "#f4e6ff";
                case "#ff887c":
                    return "#ffdbd7";
                case "#dc2127":
                    return "#f8d3d4";
                case "#fbd75b":
                    return "#fef3cd";
                case "#ffb878":
                    return "#ffead6";
                case "#46d6db":
                    return "#c7f3f4";
                case "#e1e1e1":
                    return "#f6f6f6";
                default:
                    return ca("#ffffff", a, .33)
            }
        },
        ea = function(a) {
            switch (a) {
                case "#a4bdfc":
                case "#5484ed":
                case "#46d6db":
                    return "#1111cc";
                case "#7ae7bf":
                case "#51b749":
                    return "#228822";
                case "#dbadff":
                    return "#551a8b";
                case "#ff887c":
                case "#dc2127":
                    return "#ff0000";
                case "#fbd75b":
                    return "#fbb818";
                case "#ffb878":
                    return "#ff6600";
                case "#e1e1e1":
                    return "#bfbfbf";
                default:
                    return a
            }
        },
        fa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ia = "undefined" != typeof window &&
        window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ja = function() {
            ja = function() {};
            ia.Symbol || (ia.Symbol = la)
        },
        na = function(a, b) {
            this.g = a;
            ha(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    na.prototype.toString = function() {
        return this.g
    };
    var la = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("a");
                return new na("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        pa = function() {
            ja();
            var a = ia.Symbol.iterator;
            a || (a = ia.Symbol.iterator = ia.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return oa(fa(this))
                }
            });
            pa = function() {}
        },
        oa = function(a) {
            pa();
            a = {
                next: a
            };
            a[ia.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ra = function(a) {
            var b =
                "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: fa(a)
            }
        },
        sa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ta;
    if ("function" == typeof Object.setPrototypeOf) ta = Object.setPrototypeOf;
    else {
        var ua;
        a: {
            var va = {
                    a: !0
                },
                wa = {};
            try {
                wa.__proto__ = va;
                ua = wa.a;
                break a
            } catch (a) {}
            ua = !1
        }
        ta = ua ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("b`" + a);
            return a
        } : null
    }
    var xa = ta,
        p = function(a, b) {
            a.prototype = sa(b.prototype);
            a.prototype.constructor = a;
            if (xa) xa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ka = b.prototype
        },
        za = function(a, b) {
            if (b) {
                var c = ia;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ha(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    za("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            if (null == this) throw new TypeError("c`repeat");
            var c = this;
            if (0 > b || 1342177279 < b) throw new RangeError("e");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var Aa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    za("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function d(k) {
            if (!Aa(k, f)) {
                var l = new b;
                ha(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(n) {
                if (n instanceof b) return n;
                d(n);
                return l(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        n = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != n.get(k) || 3 != n.get(l)) return !1;
                    n["delete"](k);
                    n.set(l, 4);
                    return !n.has(k) && 4 == n.get(l)
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.Aa = (g += Math.random() + 1).toString();
                if (k) {
                    k = ra(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("f");
            d(k);
            if (!Aa(k, f)) throw Error("g`" + k);
            k[f][this.Aa] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && Aa(k, f) ? k[f][this.Aa] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && Aa(k, f) && Aa(k[f], this.Aa)
        };
        h.prototype["delete"] =
            function(k) {
                return c(k) && Aa(k, f) && Aa(k[f], this.Aa) ? delete k[f][this.Aa] : !1
            };
        return h
    });
    za("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(ra([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        pa();
        var b = new WeakMap,
            c = function(h) {
                this.i = {};
                this.g =
                    f();
                this.size = 0;
                if (h) {
                    h = ra(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.Oa ? l.Oa.value = k : (l.Oa = {
                next: this.g,
                Bb: this.g.Bb,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.Oa), this.g.Bb.next = l.Oa, this.g.Bb = l.Oa, this.size++);
            return this
        };
        c.prototype["delete"] = function(h) {
            h = d(this, h);
            return h.Oa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.Oa.Bb.next = h.Oa.next, h.Oa.next.Bb =
                h.Oa.Bb, h.Oa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.i = {};
            this.g = this.g.Bb = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Oa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Oa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.i[l];
                if (n && Aa(h.i, l))
                    for (h = 0; h < n.length; h++) {
                        var q = n[h];
                        if (k !== k && q.key !== q.key || k === q.key) return {
                            id: l,
                            list: n,
                            index: h,
                            Oa: q
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    Oa: void 0
                }
            },
            e = function(h, k) {
                var l = h.g;
                return oa(function() {
                    if (l) {
                        for (; l.head != h.g;) l = l.Bb;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Bb = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Ba = Ba || {},
        r = this || self,
        Ca = function() {},
        Da = function(a) {
            a.td = void 0;
            a.md = function() {
                return a.td ? a.td : a.td = new a
            }
        },
        Ea = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        w = function(a) {
            return "array" == Ea(a)
        },
        Fa = function(a) {
            var b = Ea(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ga = function(a) {
            return "function" == Ea(a)
        },
        Ha = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ka = function(a) {
            return a[Ia] || (a[Ia] = ++Ja)
        },
        Ia = "closure_uid_" +
        (1E9 * Math.random() >>> 0),
        Ja = 0,
        La = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ma = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        y = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y = La : y = Ma;
            return y.apply(null, arguments)
        },
        Na = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        B = Date.now || function() {
            return +new Date
        },
        D = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Ka = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var Oa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    D(Oa, Error);
    Oa.prototype.name = "CustomError";
    var Pa;
    var Qa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ra = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Sa = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") :
                    a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        },
        Ta = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var k = g[h];
                    b.call(c, k, h, a) && (e[f++] = k)
                } return e
        },
        Ua = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f],
                f, a));
            return d
        },
        Va = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Ya = function(a) {
            a: {
                var b = Xa;
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    } b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        },
        Za = function(a, b) {
            b = Qa(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a,
                b, 1);
            return c
        },
        $a = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        ab = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        bb = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (Fa(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++) a[e + g] = d[g]
                } else a.push(d)
            }
        },
        db = function(a, b) {
            for (var c = cb, d = 0, e = a.length, f; d < e;) {
                var g = d + (e - d >>> 1);
                var h = c(b, a[g]);
                0 < h ? d = g + 1 : (e = g, f = !h)
            }
            return f ? d : -d - 1
        },
        eb = function(a, b) {
            a.sort(b ||
                cb)
        },
        cb = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        fb = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = 0;
            return b
        };
    var gb = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    var hb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        ib = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        jb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        kb = function(a) {
            for (var b in a) return !1;
            return !0
        },
        lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        nb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < lb.length; f++) c = lb[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        },
        ob = function(a) {
            var b = arguments.length;
            if (1 == b && w(arguments[0])) return ob.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var sb = function(a, b) {
        this.g = a === qb && b || "";
        this.i = rb
    };
    sb.prototype.yb = !0;
    sb.prototype.wb = function() {
        return this.g
    };
    var rb = {},
        qb = {},
        tb = new sb(qb, "");
    var vb = function() {
        this.g = "";
        this.i = ub
    };
    vb.prototype.yb = !0;
    var ub = {};
    vb.prototype.wb = function() {
        return this.g.toString()
    };
    var wb = /[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        xb = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        yb = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        zb = /^http:\/\/.*/,
        Ab = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
        Bb = /\s+/,
        Cb = /[\d\u06f0-\u06f9]/,
        Fb = function(a) {
            var b = 0,
                c = 0,
                d = !1;
            a = a.split(Bb);
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                yb.test(f) ? (b++, c++) : zb.test(f) ? d = !0 : xb.test(f) ? c++ : Cb.test(f) && (d = !0)
            }
            return 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1
        };
    var Ib = function(a, b) {
        this.i = a === Gb && b || "";
        this.j = Hb
    };
    Ib.prototype.yb = !0;
    Ib.prototype.wb = function() {
        return this.i.toString()
    };
    Ib.prototype.rd = !0;
    Ib.prototype.g = function() {
        return 1
    };
    var Jb = function(a) {
            if (a instanceof Ib && a.constructor === Ib && a.j === Hb) return a.i;
            Ea(a);
            return "type_error:TrustedResourceUrl"
        },
        Hb = {},
        Gb = {};
    var Kb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Lb = function(a, b) {
            a = String(a).toLowerCase();
            b = String(b).toLowerCase();
            return a < b ? -1 : a == b ? 0 : 1
        },
        Tb = function(a, b) {
            if (b) a = a.replace(Mb, "&amp;").replace(Nb, "&lt;").replace(Ob, "&gt;").replace(Pb, "&quot;").replace(Qb, "&#39;").replace(Rb, "&#0;");
            else {
                if (!Sb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Mb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Nb, "&lt;")); - 1 != a.indexOf(">") && (a =
                    a.replace(Ob, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Pb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Qb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Rb, "&#0;"))
            }
            return a
        },
        Mb = /&/g,
        Nb = /</g,
        Ob = />/g,
        Pb = /"/g,
        Qb = /'/g,
        Rb = /\x00/g,
        Sb = /[\x00&<>"']/,
        Vb = function(a, b) {
            var c = 0;
            a = Kb(String(a)).split(".");
            b = Kb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length &&
                        0 == g[0].length) break;
                    c = Ub(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ub(0 == f[2].length, 0 == g[2].length) || Ub(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ub = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Yb = function(a, b) {
        this.i = a === Wb && b || "";
        this.j = Xb
    };
    Yb.prototype.yb = !0;
    Yb.prototype.wb = function() {
        return this.i.toString()
    };
    Yb.prototype.rd = !0;
    Yb.prototype.g = function() {
        return 1
    };
    var Zb = function(a) {
            if (a instanceof Yb && a.constructor === Yb && a.j === Xb) return a.i;
            Ea(a);
            return "type_error:SafeUrl"
        },
        $b = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Xb = {},
        Wb = {};
    var dc = function() {
        this.g = "";
        this.i = ac
    };
    dc.prototype.yb = !0;
    var ac = {};
    dc.prototype.wb = function() {
        return this.g
    };
    var fc = function() {
        this.g = "";
        this.i = ec
    };
    fc.prototype.yb = !0;
    var ec = {};
    fc.prototype.wb = function() {
        return this.g
    };
    var gc;
    a: {
        var hc = r.navigator;
        if (hc) {
            var ic = hc.userAgent;
            if (ic) {
                gc = ic;
                break a
            }
        }
        gc = ""
    }
    var E = function(a) {
        return -1 != gc.indexOf(a)
    };
    var jc = function() {
            return E("Firefox") || E("FxiOS")
        },
        kc = function() {
            return (E("Chrome") || E("CriOS")) && !E("Edge")
        };
    var mc = function() {
        this.i = "";
        this.o = lc;
        this.j = null
    };
    mc.prototype.rd = !0;
    mc.prototype.g = function() {
        return this.j
    };
    mc.prototype.yb = !0;
    mc.prototype.wb = function() {
        return this.i.toString()
    };
    var nc = function(a) {
            if (a instanceof mc && a.constructor === mc && a.o === lc) return a.i;
            Ea(a);
            return "type_error:SafeHtml"
        },
        pc = function(a) {
            if (a instanceof mc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.rd && (c = a.g());
            return oc(Tb(b && a.yb ? a.wb() : String(a)), c)
        },
        rc = function(a) {
            var b = pc(qc),
                c = b.g(),
                d = [],
                e = function(f) {
                    w(f) ? Ra(f, e) : (f = pc(f), d.push(nc(f).toString()), f = f.g(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            Ra(a, e);
            return oc(d.join(nc(b).toString()), c)
        },
        sc = function(a) {
            return rc(Array.prototype.slice.call(arguments))
        },
        lc = {},
        oc = function(a, b) {
            return tc(a, b)
        },
        tc = function(a, b) {
            var c = new mc;
            c.i = a;
            c.j = b;
            return c
        };
    tc("<!DOCTYPE html>", 0);
    var qc = tc("", 0),
        uc = tc("<br>", 0);
    var vc = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = nc(qc);
            return !b.parentElement
        }),
        wc = function(a, b) {
            if (vc())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = nc(b)
        };
    var xc = function(a) {
            return a = Tb(a, void 0)
        },
        zc = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = r.document.createElement("div");
            return a.replace(yc, function(d, e) {
                var f = b[d];
                if (f) return f;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = tc(d + " ", null), wc(c, f), f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        },
        Bc = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        yc = /&([^;\s<&]+);?/g,
        Cc = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Dc = function(a) {
            return Array.prototype.join.call(arguments, "")
        },
        Ec = function() {
            return "height".replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        },
        Fc = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Gc = function() {
            return E("iPhone") && !E("iPod") && !E("iPad")
        },
        Kc = function() {
            return Gc() || E("iPad") || E("iPod")
        };
    var Lc = function(a) {
        Lc[" "](a);
        return a
    };
    Lc[" "] = Ca;
    var Mc = function(a, b) {
            try {
                return Lc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Oc = function(a, b) {
            var c = Nc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Pc = E("Opera"),
        F = E("Trident") || E("MSIE"),
        Qc = E("Edge"),
        Rc = Qc || F,
        Sc = E("Gecko") && !(-1 != gc.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        G = -1 != gc.toLowerCase().indexOf("webkit") && !E("Edge"),
        Tc = E("Macintosh"),
        Uc = E("Windows"),
        Vc = E("Android"),
        Wc = Gc(),
        Xc = E("iPad"),
        Yc = E("iPod"),
        Zc = Kc(),
        $c = function() {
            var a = r.document;
            return a ? a.documentMode : void 0
        },
        ad;
    a: {
        var bd = "",
            cd = function() {
                var a = gc;
                if (Sc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Qc) return /Edge\/([\d\.]+)/.exec(a);
                if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (G) return /WebKit\/(\S+)/.exec(a);
                if (Pc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cd && (bd = cd ? cd[1] : "");
        if (F) {
            var dd = $c();
            if (null != dd && dd > parseFloat(bd)) {
                ad = String(dd);
                break a
            }
        }
        ad = bd
    }
    var ed = ad,
        Nc = {},
        fd = function(a) {
            return Oc(a, function() {
                return 0 <= Vb(ed, a)
            })
        },
        gd;
    gd = r.document && F ? $c() : void 0;
    var hd = jc(),
        id = Gc() || E("iPod"),
        jd = E("iPad"),
        kd = E("Android") && !(kc() || jc() || E("Opera") || E("Silk")),
        ld = kc(),
        md = E("Safari") && !(kc() || E("Coast") || E("Opera") || E("Edge") || E("Edg/") || E("OPR") || jc() || E("Silk") || E("Android")) && !Kc();
    var nd = {},
        od = null,
        qd = function(a, b) {
            void 0 === b && (b = 0);
            pd();
            b = nd[b];
            for (var c = [], d = 0; d < a.length; d += 3) {
                var e = a[d],
                    f = d + 1 < a.length,
                    g = f ? a[d + 1] : 0,
                    h = d + 2 < a.length,
                    k = h ? a[d + 2] : 0,
                    l = e >> 2;
                e = (e & 3) << 4 | g >> 4;
                g = (g & 15) << 2 | k >> 6;
                k &= 63;
                h || (k = 64, f || (g = 64));
                c.push(b[l], b[e], b[g] || "", b[k] || "")
            }
            return c.join("")
        },
        sd = function(a) {
            var b = "";
            rd(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        rd = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = od[l];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("i`" +
                        l);
                }
                return k
            }
            pd();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        pd = function() {
            if (!od) {
                od = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    nd[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === od[f] && (od[f] = e)
                    }
                }
            }
        };
    ja();
    pa();
    var td = function() {},
        ud = "function" == typeof Uint8Array,
        xd = function(a, b, c, d) {
            a.g = null;
            b || (b = c ? [c] : []);
            a.w = c ? String(c) : void 0;
            a.o = 0 === c ? -1 : 0;
            a.i = b;
            a: {
                if (b = a.i.length)
                    if (--b, c = a.i[b], !(null === c || "object" != typeof c || w(c) || ud && c instanceof Uint8Array)) {
                        a.s = b - a.o;
                        a.j = c;
                        break a
                    } a.s = Number.MAX_VALUE
            }
            a.W = {};
            if (d)
                for (b = 0; b < d.length; b++) c = d[b], c < a.s ? (c += a.o, a.i[c] = a.i[c] || vd) : (wd(a), a.j[c] = a.j[c] || vd)
        },
        vd = [],
        wd = function(a) {
            var b = a.s + a.o;
            a.i[b] || (a.j = a.i[b] = {})
        },
        H = function(a, b) {
            if (b < a.s) {
                b += a.o;
                var c = a.i[b];
                return c ===
                    vd ? a.i[b] = [] : c
            }
            if (a.j) return c = a.j[b], c === vd ? a.j[b] = [] : c
        },
        yd = function(a) {
            a = H(a, 2);
            return null == a ? a : !!a
        },
        I = function(a, b, c) {
            a.g || (a.g = {});
            if (!a.g[c]) {
                var d = H(a, c);
                d && (a.g[c] = new b(d))
            }
            return a.g[c]
        },
        Ad = function(a) {
            var b = zd;
            a.g || (a.g = {});
            if (!a.g[1]) {
                for (var c = H(a, 1), d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
                a.g[1] = d
            }
            b = a.g[1];
            b == vd && (b = a.g[1] = []);
            return b
        },
        Cd = function(a) {
            if (a.g)
                for (var b in a.g) {
                    var c = a.g[b];
                    if (w(c))
                        for (var d = 0; d < c.length; d++) c[d] && Bd(c[d]);
                    else c && Bd(c)
                }
        },
        Bd = function(a) {
            Cd(a);
            return a.i
        };
    td.prototype.u = ud ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return qd(this)
        };
        try {
            return JSON.stringify(this.i && Bd(this), Dd)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.i && Bd(this), Dd)
    };
    var Dd = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    td.prototype.toString = function() {
        Cd(this);
        return this.i.toString()
    };
    td.prototype.clone = function() {
        return new this.constructor(Ed(Bd(this)))
    };
    var Ed = function(a) {
        if (w(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Ed(d) : d)
            }
            return b
        }
        if (ud && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Ed(d) : d);
        return b
    };
    var Fd = function(a) {
        xd(this, a, "at:emb:st", null)
    };
    D(Fd, td);
    var Gd = function(a) {
        var b, c = null == (b = H(a, 1)) ? void 0 : b,
            d = null == (b = H(a, 2)) ? void 0 : b,
            e = null == (b = H(a, 7)) ? void 0 : b,
            f = null == (b = H(a, 5)) ? void 0 : b,
            g = null == (b = H(a, 3)) ? void 0 : b,
            h = null == (b = H(a, 4)) ? void 0 : b;
        a = H(a, 6);
        return {
            Ca: c,
            Qb: d,
            Hd: e,
            Nc: f,
            linkColor: g,
            fontFamily: h,
            Cb: null == a ? 0 : a
        }
    };
    var Hd = function(a) {
        this.eh = a
    };
    Hd.prototype.toString = function() {
        return this.eh
    };
    var Id = new Hd("g"),
        Jd = new Hd("r");
    var Nd = !F || 9 <= Number(gd),
        Od = !F || 9 <= Number(gd),
        Pd = F && !fd("9"),
        Qd = function() {
            if (!r.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                r.addEventListener("test", Ca, b), r.removeEventListener("test", Ca, b)
            } catch (c) {}
            return a
        }();
    var K = function() {
        this.W = this.W;
        this.ma = this.ma
    };
    K.prototype.W = !1;
    K.prototype.Ga = function() {
        this.W || (this.W = !0, this.ka())
    };
    K.prototype.ka = function() {
        if (this.ma)
            for (; this.ma.length;) this.ma.shift()()
    };
    var Rd = function(a) {
        a && "function" == typeof a.Ga && a.Ga()
    };
    var Sd = function(a, b) {
        this.type = a;
        this.i = this.target = b;
        this.j = !1;
        this.Ge = !0
    };
    Sd.prototype.stopPropagation = function() {
        this.j = !0
    };
    Sd.prototype.preventDefault = function() {
        this.Ge = !1
    };
    var Td = function(a, b) {
        Sd.call(this, a ? a.type : "");
        this.relatedTarget = this.i = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.o = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    D(Td, Sd);
    var Ud = [1, 4, 2],
        Vd = {
            2: "touch",
            3: "pen",
            4: "mouse"
        };
    Td.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.i = b;
        (b = a.relatedTarget) ? Sc && (Mc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.o = Tc ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Vd[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && this.preventDefault()
    };
    var Wd = function(a, b) {
        return Nd ? a.g.button == b : "click" == a.type ? 0 == b : !!(a.g.button & Ud[b])
    };
    Td.prototype.stopPropagation = function() {
        Td.Ka.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    Td.prototype.preventDefault = function() {
        Td.Ka.preventDefault.call(this);
        var a = this.g;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Pd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Xd = "closure_listenable_" + (1E6 * Math.random() | 0),
        Yd = function(a) {
            return !(!a || !a[Xd])
        },
        Zd = 0;
    var $d = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Gc = e;
            this.key = ++Zd;
            this.hc = this.zc = !1
        },
        ae = function(a) {
            a.hc = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Gc = null
        };
    var be = function(a) {
        this.src = a;
        this.g = {};
        this.i = 0
    };
    be.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.i++);
        var g = ce(a, b, d, e); - 1 < g ? (b = a[g], c || (b.zc = !1)) : (b = new $d(b, this.src, f, !!d, e), b.zc = c, a.push(b));
        return b
    };
    var de = function(a, b) {
            var c = b.type;
            if (!(c in a.g)) return !1;
            var d = Za(a.g[c], b);
            d && (ae(b), 0 == a.g[c].length && (delete a.g[c], a.i--));
            return d
        },
        ee = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ae(d[e]);
                delete a.g[c];
                a.i--
            }
        };
    be.prototype.Fc = function(a, b) {
        a = this.g[a.toString()];
        var c = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.capture == b && c.push(e)
            }
        return c
    };
    be.prototype.qc = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = ce(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    be.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return ib(this.g, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var ce = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.hc && f.listener == b && f.capture == !!c && f.Gc == d) return e
        }
        return -1
    };
    var fe = "closure_lm_" + (1E6 * Math.random() | 0),
        ge = {},
        he = 0,
        L = function(a, b, c, d, e) {
            if (d && d.once) return ie(a, b, c, d, e);
            if (w(b)) {
                for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
                return null
            }
            c = je(c);
            return Yd(a) ? a.listen(b, c, Ha(d) ? !!d.capture : !!d, e) : ke(a, b, c, !1, d, e)
        },
        ke = function(a, b, c, d, e, f) {
            if (!b) throw Error("j");
            var g = Ha(e) ? !!e.capture : !!e,
                h = le(a);
            h || (a[fe] = h = new be(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = me();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Qd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(ne(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("k");
            he++;
            return c
        },
        me = function() {
            var a = oe,
                b = Od ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ie = function(a, b, c, d, e) {
            if (w(b)) {
                for (var f = 0; f < b.length; f++) ie(a, b[f], c, d, e);
                return null
            }
            c = je(c);
            return Yd(a) ? a.xd(b, c, Ha(d) ? !!d.capture : !!d, e) : ke(a, b, c, !0, d, e)
        },
        pe = function(a, b, c, d, e) {
            if (w(b))
                for (var f = 0; f <
                    b.length; f++) pe(a, b[f], c, d, e);
            else d = Ha(d) ? !!d.capture : !!d, c = je(c), Yd(a) ? a.wc(b, c, d, e) : a && (a = le(a)) && (b = a.qc(b, c, d, e)) && qe(b)
        },
        qe = function(a) {
            if ("number" === typeof a || !a || a.hc) return !1;
            var b = a.src;
            if (Yd(b)) return de(b.Ta, a);
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ne(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            he--;
            (c = le(b)) ? (de(c, a), 0 == c.i && (c.src = null, b[fe] = null)) : ae(a);
            return !0
        },
        ne = function(a) {
            return a in ge ? ge[a] : ge[a] =
                "on" + a
        },
        se = function(a, b, c, d) {
            var e = !0;
            if (a = le(a))
                if (b = a.g[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.hc && (f = re(f, d), e = e && !1 !== f)
                    }
            return e
        },
        re = function(a, b) {
            var c = a.listener,
                d = a.Gc || a.src;
            a.zc && qe(a);
            return c.call(d, b)
        },
        oe = function(a, b) {
            if (a.hc) return !0;
            if (!Od) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = r, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        } b = c
                }
                d = b;
                b = new Td(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.i; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.j && 0 <= e; e--) {
                        b.i = d[e];
                        var f = se(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.j && e < d.length; e++) b.i = d[e],
                    f = se(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return re(a, new Td(b, this))
        },
        le = function(a) {
            a = a[fe];
            return a instanceof be ? a : null
        },
        te = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        je = function(a) {
            if (Ga(a)) return a;
            a[te] || (a[te] = function(b) {
                return a.handleEvent(b)
            });
            return a[te]
        };
    var ue = function(a, b) {
        this.g = b;
        this.constructor.Sd || (this.constructor.Sd = {});
        this.constructor.Sd[this.toString()] = this
    };
    ue.prototype.toString = function() {
        this.i || (this.i = "fva:" + this.g);
        return this.i
    };
    ue.prototype.getType = function() {
        return this.g
    };
    var ve = function(a, b) {
        ue.call(this, a, b)
    };
    D(ve, ue);
    var M = function() {
        K.call(this);
        this.Ta = new be(this);
        this.Hf = this;
        this.Mc = null
    };
    D(M, K);
    M.prototype[Xd] = !0;
    m = M.prototype;
    m.Pc = function(a) {
        this.Mc = a
    };
    m.addEventListener = function(a, b, c, d) {
        L(this, a, b, c, d)
    };
    m.removeEventListener = function(a, b, c, d) {
        pe(this, a, b, c, d)
    };
    m.dispatchEvent = function(a) {
        var b, c = this.Mc;
        if (c)
            for (b = []; c; c = c.Mc) b.push(c);
        c = this.Hf;
        var d = a.type || a;
        if ("string" === typeof a) a = new Sd(a, c);
        else if (a instanceof Sd) a.target = a.target || c;
        else {
            var e = a;
            a = new Sd(d, c);
            nb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.j && 0 <= f; f--) {
                var g = a.i = b[f];
                e = we(g, d, !0, a) && e
            }
        a.j || (g = a.i = c, e = we(g, d, !0, a) && e, a.j || (e = we(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.j && f < b.length; f++) g = a.i = b[f], e = we(g, d, !1, a) && e;
        return e
    };
    m.ka = function() {
        M.Ka.ka.call(this);
        this.Ta && ee(this.Ta);
        this.Mc = null
    };
    m.listen = function(a, b, c, d) {
        return this.Ta.add(String(a), b, !1, c, d)
    };
    m.xd = function(a, b, c, d) {
        return this.Ta.add(String(a), b, !0, c, d)
    };
    m.wc = function(a, b, c, d) {
        var e = this.Ta;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = ce(f, b, c, d); - 1 < b && (ae(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.i--))
        }
    };
    var we = function(a, b, c, d) {
        b = a.Ta.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.hc && g.capture == c) {
                var h = g.listener,
                    k = g.Gc || g.src;
                g.zc && de(a.Ta, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && 0 != d.Ge
    };
    M.prototype.Fc = function(a, b) {
        return this.Ta.Fc(String(a), b)
    };
    M.prototype.qc = function(a, b, c, d) {
        return this.Ta.qc(String(a), b, c, d)
    };
    M.prototype.hasListener = function(a, b) {
        return this.Ta.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var xe = function(a, b) {
        this.j = a;
        this.o = b;
        this.i = 0;
        this.g = null
    };
    xe.prototype.get = function() {
        if (0 < this.i) {
            this.i--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.j();
        return a
    };
    var ye = function(a, b) {
        a.o(b);
        100 > a.i && (a.i++, b.next = a.g, a.g = b)
    };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var ze = !F || 9 <= Number(gd);
    var Ae = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    var N = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.g = void 0 !== b ? b : 0
    };
    N.prototype.clone = function() {
        return new N(this.x, this.g)
    };
    N.prototype.equals = function(a) {
        return a instanceof N && (this == a ? !0 : this && a ? this.x == a.x && this.g == a.g : !1)
    };
    var Be = function(a, b) {
        return new N(a.x - b.x, a.g - b.g)
    };
    N.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.g = Math.ceil(this.g);
        return this
    };
    N.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.g = Math.floor(this.g);
        return this
    };
    N.prototype.round = function() {
        this.x = Math.round(this.x);
        this.g = Math.round(this.g);
        return this
    };
    var Ce = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = Ce.prototype;
    m.clone = function() {
        return new Ce(this.width, this.height)
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var O = function(a) {
            return a ? new De(Ee(a)) : Pa || (Pa = new De)
        },
        Fe = function(a, b) {
            return "string" === typeof b ? a.getElementById(b) : b
        },
        He = function(a, b) {
            hb(b, function(c, d) {
                c && "object" == typeof c && c.yb && (c = c.wb());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ge.hasOwnProperty(d) ? a.setAttribute(Ge[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Ge = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Je = function(a) {
            a = a.document;
            a = Ie(a) ? a.documentElement : a.body;
            return new Ce(a.clientWidth, a.clientHeight)
        },
        Me = function(a) {
            var b = Ke(a);
            a = Le(a);
            return F && fd("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Ke = function(a) {
            return a.scrollingElement ? a.scrollingElement : !G && Ie(a) ? a.documentElement :
                a.body || a.documentElement
        },
        Le = function(a) {
            return a.parentWindow || a.defaultView
        },
        Oe = function(a, b, c) {
            function d(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !Fa(f) || Ha(f) && 0 < f.nodeType ? d(f) : Ra(Ne(f) ? ab(f) : f, d)
            }
        },
        Pe = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Ie = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        Qe = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Re = function(a,
            b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Ee = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Se = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data =
                    String(b)
            } else Qe(a), a.appendChild(Ee(a).createTextNode(String(b)))
        },
        Ne = function(a) {
            if (a && "number" == typeof a.length) {
                if (Ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (Ga(a)) return "function" == typeof a.item
            }
            return !1
        },
        Ue = function(a, b) {
            if (!b) return null;
            var c = b ? String(b).toUpperCase() : null;
            return Te(a, function(d) {
                return (!c || d.nodeName == c) && !0
            }, void 0)
        },
        Te = function(a, b, c) {
            for (var d = 0; a && (null == c || d <= c);) {
                if (b(a)) return a;
                a = a.parentNode;
                d++
            }
            return null
        },
        De = function(a) {
            this.g = a || r.document ||
                document
        };
    De.prototype.U = function(a) {
        return Fe(this.g, a)
    };
    De.prototype.j = De.prototype.U;
    De.prototype.i = function(a, b, c) {
        var d = this.g,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!ze && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', xc(g.name), '"');
            if (g.type) {
                f.push(' type="', xc(g.type), '"');
                var h = {};
                nb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = Pe(d, f);
        g && ("string" === typeof g ? f.className = g : w(g) ? f.className = g.join(" ") : He(f, g));
        2 < e.length && Oe(d, f, e);
        return f
    };
    De.prototype.contains = Re;
    var Ve = function(a) {
            r.setTimeout(function() {
                throw a;
            }, 0)
        },
        We, Xe = function() {
            var a = r.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
                var e = Pe(document, "IFRAME");
                e.style.display = "none";
                e.src = Jb(new Ib(Gb, tb instanceof sb && tb.constructor === sb && tb.i === rb ? tb.g : "type_error:Const")).toString();
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(nc(qc));
                e.close();
                var g = "callImmediate" +
                    Math.random(),
                    h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = y(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            });
            if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.cb;
                        c.cb = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        cb: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !==
                typeof document && "onreadystatechange" in Pe(document, "SCRIPT") ? function(e) {
                    var f = Pe(document, "SCRIPT");
                    f.onreadystatechange = function() {
                        f.onreadystatechange = null;
                        f.parentNode.removeChild(f);
                        f = null;
                        e();
                        e = null
                    };
                    document.documentElement.appendChild(f)
                } : function(e) {
                    r.setTimeout(e, 0)
                }
        };
    var Ye = function() {
            this.i = this.g = null
        },
        $e = new xe(function() {
            return new Ze
        }, function(a) {
            a.reset()
        });
    Ye.prototype.add = function(a, b) {
        var c = $e.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.g = c;
        this.i = c
    };
    var bf = function() {
            var a = af,
                b = null;
            a.g && (b = a.g, a.g = a.g.next, a.g || (a.i = null), b.next = null);
            return b
        },
        Ze = function() {
            this.next = this.i = this.g = null
        };
    Ze.prototype.set = function(a, b) {
        this.g = a;
        this.i = b;
        this.next = null
    };
    Ze.prototype.reset = function() {
        this.next = this.i = this.g = null
    };
    var ff = function(a, b) {
            cf || df();
            ef || (cf(), ef = !0);
            af.add(a, b)
        },
        cf, df = function() {
            if (r.Promise && r.Promise.resolve) {
                var a = r.Promise.resolve(void 0);
                cf = function() {
                    a.then(gf)
                }
            } else cf = function() {
                var b = gf;
                !Ga(r.setImmediate) || r.Window && r.Window.prototype && !E("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (We || (We = Xe()), We(b)) : r.setImmediate(b)
            }
        },
        ef = !1,
        af = new Ye,
        gf = function() {
            for (var a; a = bf();) {
                try {
                    a.g.call(a.i)
                } catch (b) {
                    Ve(b)
                }
                ye($e, a)
            }
            ef = !1
        };
    var hf = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var kf = function(a) {
            this.g = 0;
            this.v = void 0;
            this.o = this.i = this.j = null;
            this.u = !1;
            this.s = 0;
            if (a != Ca) try {
                var b = this;
                a.call(void 0, function(c) {
                    jf(b, 2, c)
                }, function(c) {
                    jf(b, 3, c)
                })
            } catch (c) {
                jf(this, 3, c)
            }
        },
        lf = function() {
            this.next = this.j = this.i = this.o = this.g = null;
            this.s = !1
        };
    lf.prototype.reset = function() {
        this.j = this.i = this.o = this.g = null;
        this.s = !1
    };
    var mf = new xe(function() {
            return new lf
        }, function(a) {
            a.reset()
        }),
        nf = function(a, b, c) {
            var d = mf.get();
            d.o = a;
            d.i = b;
            d.j = c;
            return d
        };
    kf.prototype.then = function(a, b, c) {
        return of(this, Ga(a) ? a : null, Ga(b) ? b : null, c)
    };
    kf.prototype.$goog_Thenable = !0;
    kf.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new pf(a);
            ff(function() {
                qf(this, b)
            }, this)
        }
    };
    var qf = function(a, b) {
            if (0 == a.g)
                if (a.j) {
                    var c = a.j;
                    if (c.i) {
                        for (var d = 0, e = null, f = null, g = c.i; g && (g.s || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? qf(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : rf(c), sf(c, e, 3, b)))
                    }
                    a.j = null
                } else jf(a, 3, b)
        },
        uf = function(a, b) {
            a.i || 2 != a.g && 3 != a.g || tf(a);
            a.o ? a.o.next = b : a.i = b;
            a.o = b
        },
        of = function(a, b, c, d) {
            var e = nf(null, null, null);
            e.g = new kf(function(f, g) {
                e.o = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (l) {
                        g(l)
                    }
                } : f;
                e.i = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        void 0 === k && h instanceof pf ? g(h) : f(k)
                    } catch (l) {
                        g(l)
                    }
                } : g
            });
            e.g.j = a;
            uf(a, e);
            return e.g
        };
    kf.prototype.ma = function(a) {
        this.g = 0;
        jf(this, 2, a)
    };
    kf.prototype.w = function(a) {
        this.g = 0;
        jf(this, 3, a)
    };
    var jf = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("l"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.ma,
                        f = a.w;
                    if (d instanceof kf) {
                        uf(d, nf(e || Ca, f || null, a));
                        var g = !0
                    } else if (hf(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Ha(d)) try {
                            var h = d.then;
                            if (Ga(h)) {
                                vf(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.v = c, a.g = b, a.j = null, tf(a), 3 != b || c instanceof pf || wf(a, c))
            }
        },
        vf = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e, k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        tf =
        function(a) {
            a.u || (a.u = !0, ff(a.W, a))
        },
        rf = function(a) {
            var b = null;
            a.i && (b = a.i, a.i = b.next, b.next = null);
            a.i || (a.o = null);
            return b
        };
    kf.prototype.W = function() {
        for (var a; a = rf(this);) sf(this, a, this.g, this.v);
        this.u = !1
    };
    var sf = function(a, b, c, d) {
            if (3 == c && b.i && !b.s)
                for (; a && a.s; a = a.j) r.clearTimeout(a.s), a.s = 0;
            if (b.g) b.g.j = null, Lf(b, c, d);
            else try {
                b.s ? b.o.call(b.j) : Lf(b, c, d)
            } catch (e) {
                Mf.call(null, e)
            }
            ye(mf, b)
        },
        Lf = function(a, b, c) {
            2 == b ? a.o.call(a.j, c) : a.i && a.i.call(a.j, c)
        },
        wf = function(a, b) {
            a.s = r.setTimeout(function() {
                Mf.call(null, b)
            }, 1)
        },
        Mf = Ve,
        pf = function(a) {
            Oa.call(this, a)
        };
    D(pf, Oa);
    pf.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var Nf = function() {
        this.s = [];
        this.o = this.g = !1;
        this.j = void 0;
        this.ma = this.T = this.v = !1;
        this.u = 0;
        this.i = null;
        this.W = 0
    };
    Nf.prototype.cancel = function(a) {
        if (this.g) this.j instanceof Nf && this.j.cancel();
        else {
            if (this.i) {
                var b = this.i;
                delete this.i;
                a ? b.cancel(a) : (b.W--, 0 >= b.W && b.cancel())
            }
            this.ma = !0;
            this.g || (a = new Of(this), Pf(this), Qf(this, !1, a))
        }
    };
    Nf.prototype.w = function(a, b) {
        this.v = !1;
        Qf(this, a, b)
    };
    var Qf = function(a, b, c) {
            a.g = !0;
            a.j = c;
            a.o = !b;
            Rf(a)
        },
        Pf = function(a) {
            if (a.g) {
                if (!a.ma) throw new Sf(a);
                a.ma = !1
            }
        },
        Tf = function(a, b, c) {
            a.s.push([b, c, void 0]);
            a.g && Rf(a)
        };
    Nf.prototype.then = function(a, b, c) {
        var d, e, f = new kf(function(g, h) {
            d = g;
            e = h
        });
        Tf(this, d, function(g) {
            g instanceof Of ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    Nf.prototype.$goog_Thenable = !0;
    var Uf = function(a) {
            return Va(a.s, function(b) {
                return Ga(b[1])
            })
        },
        Rf = function(a) {
            if (a.u && a.g && Uf(a)) {
                var b = a.u,
                    c = Vf[b];
                c && (r.clearTimeout(c.Aa), delete Vf[b]);
                a.u = 0
            }
            a.i && (a.i.W--, delete a.i);
            b = a.j;
            for (var d = c = !1; a.s.length && !a.v;) {
                var e = a.s.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.o ? g : f) try {
                    var h = f.call(e || null, b);
                    void 0 !== h && (a.o = a.o && (h == b || h instanceof Error), a.j = b = h);
                    if (hf(b) || "function" === typeof r.Promise && b instanceof r.Promise) d = !0, a.v = !0
                } catch (k) {
                    b = k, a.o = !0, Uf(a) || (c = !0)
                }
            }
            a.j = b;
            d && (h = y(a.w, a, !0),
                d = y(a.w, a, !1), b instanceof Nf ? (Tf(b, h, d), b.T = !0) : b.then(h, d));
            c && (b = new Wf(b), Vf[b.Aa] = b, a.u = b.Aa)
        },
        Sf = function() {
            Oa.call(this)
        };
    D(Sf, Oa);
    Sf.prototype.message = "Deferred has already fired";
    Sf.prototype.name = "AlreadyCalledError";
    var Of = function() {
        Oa.call(this)
    };
    D(Of, Oa);
    Of.prototype.message = "Deferred was canceled";
    Of.prototype.name = "CanceledError";
    var Wf = function(a) {
        this.Aa = r.setTimeout(y(this.i, this), 0);
        this.g = a
    };
    Wf.prototype.i = function() {
        delete Vf[this.Aa];
        throw this.g;
    };
    var Vf = {};
    var Yf = function(a) {
        K.call(this);
        this.i = {};
        this.s = {};
        this.u = {};
        this.g = {};
        this.w = {};
        this.v = a ? a.v : new M;
        this.V = !a;
        this.j = null;
        a ? (this.j = a, this.u = a.u, this.g = a.g, this.s = a.s) : B();
        a = Xf(this);
        this != a && (a.o ? a.o.push(this) : a.o = [this])
    };
    D(Yf, K);
    var Xf = function(a) {
        for (; a.j;) a = a.j;
        return a
    };
    Yf.prototype.get = function(a) {
        var b;
        a: {
            for (b = this; b; b = b.j) {
                if (b.W) throw Error("m`" + a);
                if (b.i[a]) {
                    b = b.i[a][0];
                    break a
                }
                if (b.w[a]) break
            }
            if (b = this.u[a]) {
                b = b(this);
                if (null == b) throw Error("n`" + a);
                Zf(this, a, b)
            } else b = null
        }
        if (null == b) throw new $f(a);
        return b
    };
    var Zf = function(a, b, c) {
            if (a.W) Rd(c);
            else {
                a.i[b] = [c, !0];
                c = ag(a, a, b);
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    Pf(e);
                    Qf(e, !0, null)
                }
                delete a.s[b]
            }
        },
        ag = function(a, b, c) {
            var d = [],
                e = a.g[c];
            e && (Sa(e, function(f) {
                var g;
                a: {
                    for (g = f.Lf; g;) {
                        if (g == b) {
                            g = !0;
                            break a
                        }
                        g = g.j
                    }
                    g = !1
                }
                g && (d.push(f.d), Za(e, f))
            }), 0 == e.length && delete a.g[c]);
            return d
        },
        bg = function(a, b) {
            a.g && hb(a.g, function(c, d, e) {
                Sa(c, function(f) {
                    f.Lf == b && Za(c, f)
                });
                0 == c.length && delete e[d]
            })
        };
    Yf.prototype.ka = function() {
        if (Xf(this) == this) {
            var a = this.o;
            if (a)
                for (; a.length;) a[0].Ga()
        } else {
            a = Xf(this).o;
            for (var b = 0; b < a.length; b++)
                if (a[b] == this) {
                    a.splice(b, 1);
                    break
                }
        }
        for (var c in this.i) a = this.i[c], a[1] && a[0].Ga && a[0].Ga();
        this.i = null;
        this.V && this.v.Ga();
        bg(this, this);
        this.g = null;
        Rd(this.T);
        this.w = this.T = null;
        Yf.Ka.ka.call(this)
    };
    var $f = function(a) {
        Oa.call(this);
        this.id = a;
        this.message = 'Service for "' + a + '" is not registered'
    };
    D($f, Oa);
    new ve(new function() {}, 1);
    var cg = function() {
        M.call(this)
    };
    D(cg, M);
    var dg = function() {
        M.call(this)
    };
    p(dg, cg);
    var eg = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        fg = [, 31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        gg = function(a, b) {
            return fg[b] || fg[a] || (fg[a] = 28 + ((a & 3 ? 0 : a % 100 || !(a % 400)) ? 1 : 0))
        },
        hg = {},
        ig = function(a, b) {
            var c = a << 4 | b;
            return hg[c] || (hg[c] = (new Date(a, b - 1, 1, 12, 0, 0, 0)).getDay())
        },
        jg = [, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        kg = function(a, b, c) {
            a = +(2 >= b) || 29 - gg(a, 2);
            return jg[b] + c - a
        };
    var lg = 1 / 131072,
        aa = function(a) {
            if (28 > (a & 31)) return a + 1;
            var b = a >> 5 & 15;
            if ((a & 31) < (fg[b] || gg((a >> 9) + 1970, 2))) return a + 1;
            var c = (a >> 9) + 1970;
            12 < ++b && (b = 1, ++c);
            return ((c - 1970 << 4) + b << 5) + 1 + a % 1
        },
        mg = function(a, b) {
            var c = a;
            a % 1 || (a += lg);
            (b - lg) % 1 || (b -= lg);
            return function(d, e) {
                return d < b && (e > a || d >= c)
            }
        };
    var ng = function() {};
    m = ng.prototype;
    m.year = NaN;
    m.month = NaN;
    m.S = NaN;
    m.hour = NaN;
    m.minute = NaN;
    m.second = NaN;
    m.toString = function() {
        return this.o || (this.o = this.g())
    };
    m.ya = function() {
        return this.H() | 0
    };
    m.min = function(a) {
        return this.H() < a.H() ? this : a
    };
    m.max = function(a) {
        return this.H() > a.H() ? this : a
    };
    var rg = function(a, b) {
            var c = og(a);
            isNaN(a.year) || (c.year = NaN, c.month = NaN, c.S = pg(a, b));
            isNaN(a.hour) || (c.hour -= b.hour, c.minute -= b.minute, c.second -= b.second);
            return new qg(c.S, c.hour, c.minute, c.second)
        },
        pg = function(a, b) {
            var c = a.year,
                d = a.month;
            a = a.S;
            var e = b.year,
                f = b.month;
            b = b.S;
            return c == e ? kg(c, d, a) - kg(e, f, b) : Math.round((Date.UTC(c, d - 1, a) - Date.UTC(e, f - 1, b)) / 864E5)
        },
        tg = function(a) {
            var b = a.year,
                c = a.month;
            a = a.S;
            28 < ++a && a > gg(b, c) && (a = 1, 13 === ++c && (c = 1, ++b));
            return sg(b, c, a)
        },
        ug = function(a) {
            return a.hour ||
                a.minute || a.second ? tg(a) : a.ua()
        },
        wg = function(a, b) {
            return vg(a.year, a.month, a.S + b).ua()
        },
        xg = function(a, b) {
            return wg(a, -((a.Wa() - b + 7) % 7))
        },
        yg = function(a, b) {
            return wg(a, (b - a.Wa() + 7) % 7)
        };
    ng.prototype.Wa = function() {
        var a = this.S;
        return (ig(this.year, this.month) + a - 1) % 7
    };
    ng.prototype.ua = function() {
        return sg(this.year || 0, this.month || 1, this.S || 1)
    };
    ng.prototype.Hb = function() {
        return new zg(this.year || 0, this.month || 1, this.S || 1, this.hour || 0, this.minute || 0, this.second || 0)
    };
    ng.prototype.Rc = function() {
        return new Ag(this.hour || 0, this.minute || 0, this.second || 0)
    };
    var Bg = function(a) {
        return 60 * a.hour + a.minute
    };
    var Cg = function() {};
    D(Cg, ng);
    Cg.prototype.i = function() {
        return !1
    };
    var Dg = function() {};
    D(Dg, Cg);
    Dg.prototype.i = function() {
        return !0
    };
    var Fg = function(a, b, c, d) {
        var e = new Dg;
        e.year = a;
        e.month = b;
        e.S = c;
        e.j = d;
        return Eg[d] = e
    };
    Dg.prototype.ua = function() {
        return this
    };
    Dg.prototype.H = function() {
        return this.j
    };
    Dg.prototype.g = function() {
        return Dc(String(this.year), eg(this.month), eg(this.S))
    };
    Dg.prototype.equals = function(a) {
        return this === a
    };
    var Eg = {},
        sg = function(a, b, c) {
            var d = ((a - 1970 << 4) + b << 5) + c;
            return Eg[d] || Fg(a, b, c, d)
        },
        Gg = function(a) {
            return Eg[a] || Fg((a >> 9) + 1970, a >> 5 & 15, a & 31, a)
        },
        Hg = function(a) {
            return sg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate())
        };
    var Ag = function(a, b, c) {
        this.hour = a;
        this.minute = b;
        this.second = c
    };
    D(Ag, ng);
    Ag.prototype.Rc = function() {
        return this
    };
    Ag.prototype.g = function() {
        return Dc("T", eg(this.hour), eg(this.minute), eg(this.second))
    };
    Ag.prototype.equals = function(a) {
        return !!a && this.constructor == a.constructor && this.H() == a.H()
    };
    Ag.prototype.H = function() {
        return this.i || (this.i = (((this.hour << 6) + this.minute << 6) + this.second + 1) * lg)
    };
    var zg = function(a, b, c, d, e, f) {
        this.year = a;
        this.month = b;
        this.S = c;
        this.hour = d;
        this.minute = e;
        this.second = f
    };
    D(zg, Cg);
    zg.prototype.Hb = function() {
        return this
    };
    zg.prototype.H = function() {
        return this.j || (this.j = ((this.year - 1970 << 4) + this.month << 5) + this.S + (((this.hour << 6) + this.minute << 6) + this.second + 1) * lg)
    };
    zg.prototype.g = function() {
        return Dc(String(this.year), eg(this.month), eg(this.S), "T", eg(this.hour), eg(this.minute), eg(this.second))
    };
    zg.prototype.equals = function(a) {
        return !!a && this.constructor == a.constructor && this.H() == a.H()
    };
    var Ig = function(a) {
            return new zg(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds())
        },
        Jg = function(a) {
            return new zg(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds())
        };
    var Kg = function(a, b, c) {
        M.call(this);
        this.j = a;
        this.s = b || Infinity;
        this.o = c;
        B();
        this.g = this.vb();
        this.i = 0;
        this.Dd()
    };
    p(Kg, cg);
    m = Kg.prototype;
    m.sc = function(a) {
        var b = this.j;
        void 0 === b ? b = -6E4 * (new Date(a)).getTimezoneOffset() : a >= this.s && (b = this.o);
        return b
    };
    m.Bd = function() {
        var a = B() + Lg;
        return this.sc(a) + a
    };
    m.vb = function() {
        return new Date(this.Bd())
    };
    m.nd = function() {
        this.g.getUTCDate() != this.vb().getUTCDate() && (window.clearTimeout(this.i), this.Dd());
        return this.g
    };
    m.Dd = function() {
        var a = this.g,
            b = this.vb(),
            c = 18E5 - b.getTime() % 18E5;
        this.i = window.setTimeout(y(this.Dd, this), c);
        a.getUTCDate() !== b.getUTCDate() && (this.g = this.vb(), this.dispatchEvent("newday"))
    };
    var Lg = 0;
    var Mg = function(a, b, c) {
        M.call(this);
        this.g = new Kg(a, b, c);
        this.g.Pc(this)
    };
    p(Mg, dg);
    Mg.prototype.sc = function(a) {
        return this.g.sc(a)
    };
    Mg.prototype.Bd = function() {
        return this.g.Bd()
    };
    Mg.prototype.vb = function() {
        return this.g.vb()
    };
    Mg.prototype.nd = function() {
        return this.g.nd()
    };
    var Ng = function(a) {
        return Hg(a.nd())
    };
    var Og = function(a, b, c) {
        Mg.call(this, a, b, c)
    };
    p(Og, Mg);
    var Pg = new Map;
    Pg.set(0, "UNKNOWN");
    Pg.set(1, "DAY");
    Pg.set(2, "WEEK");
    var Qg = new Map;
    Qg.set(0, "UNKNOWN");
    Qg.set(1, "DAY");
    Qg.set(2, "AGENDA");
    var Rg = function(a, b, c) {
        c = void 0 === c ? "" : c;
        M.call(this);
        this.Na = c;
        b && ab(b)
    };
    p(Rg, M);
    Rg.prototype.getTitle = function() {
        return this.Na
    };
    var Sg = /\s*;\s*/;
    var Tg = function(a) {
            a: {
                var b = document.cookie.split(Sg);
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c];
                    if (!(7 >= e.length || "=" != e.charAt(7)) && "CALERR2" === e.substring(0, 7)) {
                        b = e.substring(8);
                        break a
                    }
                }
                b = null
            }
            b = b && unescape(b) || "";b = 0 == b.length ? [] : b.split("&");c = !1;
            for (d = 0; d < b.length; ++d) {
                e = b[d];
                var f = e.indexOf("=");
                if (0 <= f && e.substring(0, f) == a) {
                    c = !0;
                    b[d] = a + "=" + (1 + parseInt(e.substring(f + 1), 10) || 1);
                    break
                }
            }
            c || b.push(a + "=1");a = b = b.join("&");b = new Date(B() + 864E5);c = ["/calendar/"];
            if (/\/$/.test(c[0]) && b instanceof Date && 2E3 > b.getFullYear())
                for (d = c[0]; d = d.replace(/([^\/]+|\/)$/, "");) c.push(d);
            for (e = 0; e < c.length; ++e) d = c[e],
            f = [],
            f.push("CALERR2=" + a),
            f.push("path=" + d),
            b instanceof Date && f.push("expires=" + b.toUTCString()),
            document.cookie = f.join("; ")
        },
        Ug = ["_incClientErr"],
        Vg = r;
    Ug[0] in Vg || "undefined" == typeof Vg.execScript || Vg.execScript("var " + Ug[0]);
    for (var Wg; Ug.length && (Wg = Ug.shift());) Ug.length || void 0 === Tg ? Vg[Wg] && Vg[Wg] !== Object.prototype[Wg] ? Vg = Vg[Wg] : Vg = Vg[Wg] = {} : Vg[Wg] = Tg;
    var Xg, Yg = function(a) {
            this.g = a
        },
        Zg = function(a, b) {
            return !!a.g[b]
        };
    var $g = function(a, b) {
        this.g = a;
        this.i = b
    };
    var ah = null,
        bh = new Nf,
        ch = function() {
            if (!ah) throw Error("p");
            return ah
        };
    var dh = function() {};
    dh.prototype.apply = function(a) {
        for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (f.Ib && 0 != f.Ib.ma() && f.Ub) b.push(f), c.push(f);
            else {
                var g;
                (g = f.Xa || f.Ub && !0) || (g = f.Ba, g = !f.Ea().ua().equals(g.ua()) && 720 < Bg(g));
                g ? b.push(f) : c.push(f)
            }
        }
        return new $g(b, c)
    };
    var eh = function() {
        K.call(this)
    };
    D(eh, K);
    eh.prototype.init = function() {};
    new eh;
    var fh = function(a) {
        K.call(this);
        this.i = a;
        this.g = {}
    };
    D(fh, K);
    var gh = [];
    fh.prototype.listen = function(a, b, c, d) {
        w(b) || (b && (gh[0] = b.toString()), b = gh);
        for (var e = 0; e < b.length; e++) {
            var f = L(a, b[e], c || this.handleEvent, d || !1, this.i || this);
            if (!f) break;
            this.g[f.key] = f
        }
        return this
    };
    fh.prototype.xd = function(a, b, c, d) {
        return hh(this, a, b, c, d)
    };
    var hh = function(a, b, c, d, e, f) {
            if (w(c))
                for (var g = 0; g < c.length; g++) hh(a, b, c[g], d, e, f);
            else {
                b = ie(b, c, d || a.handleEvent, e, f || a.i || a);
                if (!b) return a;
                a.g[b.key] = b
            }
            return a
        },
        jh = function(a, b, c) {
            ih.listen(b, c, void 0, a.i || a, a)
        };
    fh.prototype.wc = function(a, b, c, d, e) {
        if (w(b))
            for (var f = 0; f < b.length; f++) this.wc(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ha(d) ? !!d.capture : !!d, e = e || this.i || this, c = je(c), d = !!d, b = Yd(a) ? a.qc(b, c, d, e) : a ? (a = le(a)) ? a.qc(b, c, d, e) : null : null, b && (qe(b), delete this.g[b.key])
    };
    var kh = function(a) {
        hb(a.g, function(b, c) {
            this.g.hasOwnProperty(c) && qe(b)
        }, a);
        a.g = {}
    };
    fh.prototype.ka = function() {
        fh.Ka.ka.call(this);
        kh(this)
    };
    fh.prototype.handleEvent = function() {
        throw Error("q");
    };
    var lh = function() {};
    lh.prototype.g = null;
    var nh = function(a) {
        var b;
        (b = a.g) || (b = {}, mh(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    var oh, ph = function() {};
    D(ph, lh);
    var qh = function(a) {
            return (a = mh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        mh = function(a) {
            if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.i = d
                    } catch (e) {}
                }
                throw Error("r");
            }
            return a.i
        };
    oh = new ph;
    var rh = function(a, b) {
        this.i = {};
        this.g = [];
        this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("h");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof rh)
                for (c = a.$a(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    rh.prototype.lb = function() {
        sh(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    rh.prototype.$a = function() {
        sh(this);
        return this.g.concat()
    };
    rh.prototype.equals = function(a, b) {
        if (this === a) return !0;
        if (this.j != a.j) return !1;
        b = b || th;
        sh(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var th = function(a, b) {
            return a === b
        },
        sh = function(a) {
            if (a.j != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    uh(a.i, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.j != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], uh(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    rh.prototype.get = function(a, b) {
        return uh(this.i, a) ? this.i[a] : b
    };
    rh.prototype.set = function(a, b) {
        uh(this.i, a) || (this.j++, this.g.push(a));
        this.i[a] = b
    };
    rh.prototype.forEach = function(a, b) {
        for (var c = this.$a(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    rh.prototype.clone = function() {
        return new rh(this)
    };
    var uh = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var vh = function(a) {
            if (a.lb && "function" == typeof a.lb) return a.lb();
            if ("string" === typeof a) return a.split("");
            if (Fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        wh = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (Fa(a) || "string" === typeof a) Ra(a, b, void 0);
            else {
                if (a.$a && "function" == typeof a.$a) var c = a.$a();
                else if (a.lb && "function" == typeof a.lb) c = void 0;
                else if (Fa(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length,
                            e = 0; e < d; e++) c.push(e)
                } else c = jb(a);
                d = vh(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
    var xh = function(a, b, c) {
        if (Ga(a)) c && (a = y(a, c));
        else if (a && "function" == typeof a.handleEvent) a = y(a.handleEvent, a);
        else throw Error("s");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    };
    var yh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        zh = function(a) {
            var b = a.match(yh);
            a = b[1];
            var c = b[2],
                d = b[3];
            b = b[4];
            var e = "";
            a && (e += a + ":");
            d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
            return e
        },
        Ah = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        },
        Bh = function(a,
            b, c) {
            if (w(b))
                for (var d = 0; d < b.length; d++) Bh(a, String(b[d]), c);
            else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Ch = function(a, b) {
            var c = [];
            for (b = b || 0; b < a.length; b += 2) Bh(a[b], a[b + 1], c);
            return c.join("&")
        },
        Dh = function(a, b) {
            var c = 2 == arguments.length ? Ch(arguments[1], 0) : Ch(arguments, 1);
            if (c) {
                var d = a.indexOf("#");
                0 > d && (d = a.length);
                var e = a.indexOf("?");
                if (0 > e || e > d) {
                    e = d;
                    var f = ""
                } else f = a.substring(e + 1, d);
                d = [a.substr(0, e), f, a.substr(d)];
                e = d[1];
                d[1] = c ? e ? e + "&" + c : c : e;
                c = d[0] + (d[1] ? "?" + d[1] :
                    "") + d[2]
            } else c = a;
            return c
        };
    var Eh = function(a) {
        M.call(this);
        this.headers = new rh;
        this.w = a || null;
        this.i = !1;
        this.v = this.g = null;
        this.va = "";
        this.j = this.V = this.s = this.T = !1;
        this.u = 0;
        this.o = null;
        this.Ha = "";
        this.ta = this.wa = !1
    };
    D(Eh, M);
    var Fh = /^https?$/i,
        Gh = ["POST", "PUT"],
        Hh = [],
        Ih = function(a, b, c, d, e, f, g) {
            var h = new Eh;
            Hh.push(h);
            b && h.listen("complete", b);
            h.xd("ready", h.Ma);
            f && (h.u = Math.max(0, f));
            g && (h.wa = g);
            h.send(a, c, d, e);
            return h
        };
    Eh.prototype.Ma = function() {
        this.Ga();
        Za(Hh, this)
    };
    Eh.prototype.send = function(a, b, c, d) {
        if (this.g) throw Error("t`" + this.va + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.va = a;
        this.T = !1;
        this.i = !0;
        this.g = this.w ? qh(this.w) : qh(oh);
        this.v = this.w ? nh(this.w) : nh(oh);
        this.g.onreadystatechange = y(this.Da, this);
        try {
            this.V = !0, this.g.open(b, String(a), !0), this.V = !1
        } catch (f) {
            Jh(this);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && wh(d, function(f, g) {
            e.set(g, f)
        });
        d = Ya(e.$a());
        c = r.FormData && a instanceof r.FormData;
        !(0 <= Qa(Gh, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.Ha && (this.g.responseType = this.Ha);
        "withCredentials" in this.g && this.g.withCredentials !== this.wa && (this.g.withCredentials = this.wa);
        try {
            Kh(this), 0 < this.u && ((this.ta = Lh(this.g)) ? (this.g.timeout = this.u, this.g.ontimeout = y(this.La, this)) : this.o = xh(this.La, this.u, this)), this.s = !0, this.g.send(a), this.s = !1
        } catch (f) {
            Jh(this)
        }
    };
    var Lh = function(a) {
            return F && fd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        Xa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    Eh.prototype.La = function() {
        "undefined" != typeof Ba && this.g && (this.dispatchEvent("timeout"), this.abort(8))
    };
    var Jh = function(a) {
            a.i = !1;
            a.g && (a.j = !0, a.g.abort(), a.j = !1);
            Mh(a);
            Nh(a)
        },
        Mh = function(a) {
            a.T || (a.T = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Eh.prototype.abort = function() {
        this.g && this.i && (this.i = !1, this.j = !0, this.g.abort(), this.j = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nh(this))
    };
    Eh.prototype.ka = function() {
        this.g && (this.i && (this.i = !1, this.j = !0, this.g.abort(), this.j = !1), Nh(this, !0));
        Eh.Ka.ka.call(this)
    };
    Eh.prototype.Da = function() {
        this.W || (this.V || this.s || this.j ? Oh(this) : this.rb())
    };
    Eh.prototype.rb = function() {
        Oh(this)
    };
    var Oh = function(a) {
            if (a.i && "undefined" != typeof Ba && (!a.v[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != Ph(a)))
                if (a.s && 4 == (a.g ? a.g.readyState : 0)) xh(a.Da, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == (a.g ? a.g.readyState : 0)) {
                a.i = !1;
                try {
                    var b = Ph(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.va).match(yh)[1] || null;
                            if (!f && r.self && r.self.location) {
                                var g = r.self.location.protocol;
                                f = g.substr(0, g.length -
                                    1)
                            }
                            e = !Fh.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : Mh(a)
                } finally {
                    Nh(a)
                }
            }
        },
        Nh = function(a, b) {
            if (a.g) {
                Kh(a);
                var c = a.g,
                    d = a.v[0] ? Ca : null;
                a.g = null;
                a.v = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Kh = function(a) {
            a.g && a.ta && (a.g.ontimeout = null);
            a.o && (r.clearTimeout(a.o), a.o = null)
        },
        Ph = function(a) {
            try {
                return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        };
    var Qh = function() {};
    Da(Qh);
    Qh.prototype.g = 0;
    var Sh = function(a) {
        xd(this, a, 0, Rh)
    };
    D(Sh, td);
    var Rh = [1];
    var Th = function() {
        this.g = {};
        this.i = [];
        this.j = null
    };
    Da(Th);
    Th.prototype.flush = function() {
        if (!kb(this.g) || 0 < this.i.length) {
            this.log("perflogger_flush", 0);
            var a = ch(),
                b = Zg(a.get(Jd), 155);
            a = a.get(Id);
            b && a.g() ? (this.log("perflogger_beacon_flush", 0), a.j("perf", Uh(this))) : (this.log("ou_perf", 0), b = a.i(Uh(this)), Ih("perf", null, "POST", Ch(b)));
            this.reset()
        }
    };
    Th.prototype.reset = function() {
        this.g = {};
        this.i = [];
        this.j = null
    };
    var Vh = /\W/g;
    Th.prototype.log = function(a, b) {
        "number" === typeof b && 0 <= b && (a = a.replace(Vh, "_"), a in this.g || (this.g[a] = []), this.g[a].push(b))
    };
    var Wh = function(a, b) {
            var c = [];
            b = b || "";
            for (var d in a.g) c.push(b + d), c.push(a.g[d].join("#"));
            return c.join(":")
        },
        Xh = function(a) {
            var b = new Sh;
            a = a.i;
            b.g || (b.g = {});
            a = a || [];
            for (var c = [], d = 0; d < a.length; d++) c[d] = Bd(a[d]);
            b.g[1] = a;
            1 < b.s ? b.i[1 + b.o] = c : (wd(b), b.j[1] = c);
            return b.u()
        },
        Uh = function(a, b) {
            var c = [];
            kb(a.g) || (c.push("perf"), c.push(Wh(a, b)), a.j && (c.push("csd"), c.push(a.j.u())));
            0 < a.i.length && (c.push("cei"), c.push(Xh(a)));
            return c
        },
        Yh = function(a) {
            this.o = a;
            this.i = this.g = B()
        };
    Yh.prototype.Ea = function() {
        return this.g
    };
    var Zh = function() {
        M.call(this)
    };
    D(Zh, M);
    var $h = function(a, b, c, d, e, f, g) {
        M.call(this);
        w(a);
        this.j = b;
        this.i = c;
        this.s = void 0 !== d ? d : 0;
        this.o = e || 7;
        this.g = g || {}
    };
    D($h, Zh);
    $h.prototype.set = function(a, b) {
        var c = this.g[a];
        this.g[a] = b;
        return c != b
    };
    $h.prototype.get = function(a) {
        return this.g[a]
    };
    var ai = function(a, b) {
        this.j = this.W = this.g = "";
        this.v = null;
        this.s = this.u = "";
        this.i = !1;
        var c;
        a instanceof ai ? (this.i = void 0 !== b ? b : a.i, bi(this, a.g), this.W = a.W, this.j = a.j, ci(this, a.v), this.u = a.u, di(this, a.o.clone()), this.s = a.s) : a && (c = String(a).match(yh)) ? (this.i = !!b, bi(this, c[1] || "", !0), this.W = ei(c[2] || ""), this.j = ei(c[3] || "", !0), ci(this, c[4]), this.u = ei(c[5] || "", !0), di(this, c[6] || "", !0), this.s = ei(c[7] || "")) : (this.i = !!b, this.o = new fi(null, this.i))
    };
    ai.prototype.toString = function() {
        var a = [],
            b = this.g;
        b && a.push(Di(b, Ei, !0), ":");
        var c = this.j;
        if (c || "file" == b) a.push("//"), (b = this.W) && a.push(Di(b, Ei, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
        if (c = this.u) this.j && "/" != c.charAt(0) && a.push("/"), a.push(Di(c, "/" == c.charAt(0) ? Fi : Gi, !0));
        (c = this.o.toString()) && a.push("?", c);
        (c = this.s) && a.push("#", Di(c, Hi));
        return a.join("")
    };
    ai.prototype.clone = function() {
        return new ai(this)
    };
    var bi = function(a, b, c) {
            a.g = c ? ei(b, !0) : b;
            a.g && (a.g = a.g.replace(/:$/, ""))
        },
        ci = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("u`" + b);
                a.v = b
            } else a.v = null
        },
        di = function(a, b, c) {
            b instanceof fi ? (a.o = b, Ii(a.o, a.i)) : (c || (b = Di(b, Ji)), a.o = new fi(b, a.i))
        };
    ai.prototype.ve = function() {
        return !1
    };
    var ei = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Di = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Ki), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Ki = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Ei = /[#\/\?@]/g,
        Gi = /[#\?:]/g,
        Fi = /[#\?]/g,
        Ji = /[#\?@]/g,
        Hi = /#/g,
        fi = function(a, b) {
            this.i = this.g = null;
            this.j = a || null;
            this.o = !!b
        },
        Li = function(a) {
            a.g || (a.g = new rh, a.i = 0, a.j && Ah(a.j, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g,
                    " ")), c)
            }))
        };
    fi.prototype.add = function(a, b) {
        Li(this);
        this.j = null;
        a = Mi(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.i += 1;
        return this
    };
    var Ni = function(a, b) {
            Li(a);
            b = Mi(a, b);
            uh(a.g.i, b) && (a.j = null, a.i -= a.g.get(b).length, a = a.g, uh(a.i, b) && (delete a.i[b], a.j--, a.g.length > 2 * a.j && sh(a)))
        },
        Oi = function(a, b) {
            Li(a);
            b = Mi(a, b);
            return uh(a.g.i, b)
        };
    m = fi.prototype;
    m.forEach = function(a, b) {
        Li(this);
        this.g.forEach(function(c, d) {
            Ra(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    m.$a = function() {
        Li(this);
        for (var a = this.g.lb(), b = this.g.$a(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    m.lb = function(a) {
        Li(this);
        var b = [];
        if ("string" === typeof a) Oi(this, a) && (b = $a(b, this.g.get(Mi(this, a))));
        else {
            a = this.g.lb();
            for (var c = 0; c < a.length; c++) b = $a(b, a[c])
        }
        return b
    };
    m.set = function(a, b) {
        Li(this);
        this.j = null;
        a = Mi(this, a);
        Oi(this, a) && (this.i -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.i += 1;
        return this
    };
    m.get = function(a, b) {
        if (!a) return b;
        a = this.lb(a);
        return 0 < a.length ? String(a[0]) : b
    };
    m.toString = function() {
        if (this.j) return this.j;
        if (!this.g) return "";
        for (var a = [], b = this.g.$a(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.lb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.j = a.join("&")
    };
    m.clone = function() {
        var a = new fi;
        a.j = this.j;
        this.g && (a.g = this.g.clone(), a.i = this.i);
        return a
    };
    var Mi = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        Ii = function(a, b) {
            b && !a.o && (Li(a), a.j = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (Ni(this, d), Ni(this, e), 0 < c.length && (this.j = null, this.g.set(Mi(this, e), ab(c)), this.i += c.length))
            }, a));
            a.o = b
        };
    var Pi = /^(https?:\/\/[^/]*)\/calendar(\/((hosted)|(a)|(b))\/[^/]*)?/,
        Qi = "undefined" != typeof window ? window.location.href : "",
        Ri = function(a) {
            return !(!a || !a.match(/^(?:https?:)?\/\/(?:[^:\/]+\.)?google\.com(?::\d+)?(?:\/.*$|$)/))
        },
        Si = function(a) {
            return Ri(a) ? a.replace(/^https?:\/\//i, "//") : a
        },
        Ti = function(a) {
            return (a = a.match(Pi)) && "b" == a[3] ? [a[1] + "/calendar", a[2]] : null
        },
        Ui = function() {
            var a = Ti(Qi);
            return a ? parseInt(a[1].split("/")[2], 10) : null
        },
        Vi = function(a) {
            a = a || "";
            a = a instanceof ai ? a.clone() : new ai(a,
                void 0);
            return "http" != a.g && "https" != a.g && "" != a.g ? "" : a.toString()
        };
    var Wi = function() {
        var a = [0, 10, 1, 2, 1, 18, 95, 33, 13, 1, 594, 112, 275, 7, 263, 45, 1, 1, 1, 2, 1, 2, 1, 1, 56, 6, 10, 11, 1, 1, 46, 21, 16, 1, 101, 7, 1, 1, 6, 2, 2, 1, 4, 33, 1, 1, 1, 30, 27, 91, 11, 58, 9, 34, 4, 1, 9, 1, 3, 1, 5, 43, 3, 120, 14, 1, 32, 1, 17, 37, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 8, 2, 2, 21, 7, 1, 1, 2, 17, 39, 1, 1, 1, 2, 6, 6, 1, 9, 5, 4, 2, 2, 12, 2, 15, 2, 1, 17, 39, 2, 3, 12, 4, 8, 6, 17, 2, 3, 14, 1, 17, 39, 1, 1, 3, 8, 4, 1, 20, 2, 29, 1, 2, 17, 39, 1, 1, 2, 1, 6, 6, 9, 6, 4, 2, 2, 13, 1, 16, 1, 18, 41, 1, 1, 1, 12, 1, 9, 1, 40, 1, 3, 17, 31, 1, 5, 4, 3, 5, 7, 8, 3, 2, 8, 2, 29, 1, 2, 17, 39, 1, 1, 1, 1, 2, 1, 3, 1, 5, 1, 8, 9, 1, 3, 2, 29, 1, 2, 17, 38, 3, 1, 2, 5,
            7, 1, 1, 8, 1, 10, 2, 30, 2, 22, 48, 5, 1, 2, 6, 7, 1, 18, 2, 13, 46, 2, 1, 1, 1, 6, 1, 12, 8, 50, 46, 2, 1, 1, 1, 9, 11, 6, 14, 2, 58, 2, 27, 1, 1, 1, 1, 1, 4, 2, 49, 14, 1, 4, 1, 1, 2, 5, 48, 9, 1, 57, 33, 12, 4, 1, 6, 1, 2, 2, 2, 1, 16, 2, 4, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 1, 1, 2, 6, 1, 1, 14, 1, 98, 96, 72, 88, 349, 3, 931, 15, 2, 1, 14, 15, 2, 1, 14, 15, 2, 15, 15, 14, 35, 17, 2, 1, 7, 8, 1, 2, 9, 1, 1, 9, 1, 45, 3, 1, 118, 2, 34, 1, 87, 28, 3, 3, 4, 2, 9, 1, 6, 3, 20, 19, 29, 44, 84, 23, 2, 2, 1, 4, 45, 6, 2, 1, 1, 1, 8, 1, 1, 1, 2, 8, 6, 13, 48, 84, 1, 14, 33, 1, 1, 5, 1, 1, 5, 1, 1, 1, 7, 31, 9, 12, 2, 1, 7, 23, 1, 4, 2, 2, 2, 2, 2, 11, 3, 2, 36, 2, 1, 1, 2, 3, 1, 1, 3, 2, 12, 36, 8, 8, 2, 2, 21,
            3, 128, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 3, 2, 198, 64, 523, 1, 1, 1, 2, 24, 7, 49, 16, 96, 33, 1324, 1, 34, 1, 1, 1, 82, 2, 98, 1, 14, 1, 1, 4, 86, 1, 1418, 3, 141, 1, 96, 32, 554, 6, 105, 2, 30164, 4, 1, 10, 32, 2, 80, 2, 272, 1, 3, 1, 4, 1, 23, 2, 2, 1, 24, 30, 4, 4, 3, 8, 1, 1, 13, 2, 16, 34, 16, 1, 1, 26, 18, 24, 24, 4, 8, 2, 23, 11, 1, 1, 12, 32, 3, 1, 5, 3, 3, 36, 1, 2, 4, 2, 1, 3, 1, 36, 1, 32, 35, 6, 2, 2, 2, 2, 12, 1, 8, 1, 1, 18, 16, 1, 3, 6, 1, 1, 1, 3, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 32, 9, 1, 2, 2, 5, 1, 1, 201, 14, 2, 1, 1, 9, 8, 2, 1, 2, 1, 2, 1, 1, 1, 18, 11184, 27, 49, 1028, 1024, 6942, 1, 737, 16, 16, 16, 207, 1, 158, 2, 89, 3, 513, 1, 226, 1, 149, 5, 1670, 15, 40, 7, 1, 165,
            2, 1305, 1, 1, 1, 53, 14, 1, 56, 1, 2, 1, 45, 3, 4, 2, 1, 1, 2, 1, 66, 3, 36, 5, 1, 6, 2, 62, 1, 12, 2, 1, 48, 3, 9, 1, 1, 1, 2, 6, 3, 95, 3, 3, 2, 1, 1, 2, 6, 1, 160, 1, 3, 7, 1, 21, 2, 2, 56, 1, 1, 1, 1, 1, 12, 1, 9, 1, 10, 4, 15, 192, 3, 8, 2, 1, 2, 1, 1, 105, 1, 2, 6, 1, 1, 2, 1, 1, 2, 1, 1, 1, 235, 1, 2, 6, 4, 2, 1, 1, 1, 27, 2, 82, 3, 8, 2, 1, 1, 1, 1, 106, 1, 1, 1, 2, 6, 1, 1, 101, 3, 2, 4, 1, 4, 1, 1283, 1, 14, 1, 1, 82, 23, 1, 7, 1, 2, 1, 2, 20025, 5, 59, 7, 1050, 62, 4, 19722, 2, 1, 4, 5313, 1, 1, 3, 3, 1, 5, 8, 8, 2, 7, 30, 4, 148, 3, 1979, 55, 4, 50, 8, 1, 14, 1, 22, 1424, 2213, 7, 109, 7, 2203, 26, 264, 1, 53, 1, 52, 1, 17, 1, 13, 1, 16, 1, 3, 1, 25, 3, 2, 1, 2, 3, 30, 1, 1, 1, 13, 5, 66,
            2, 2, 11, 21, 4, 4, 1, 1, 9, 3, 1, 4, 3, 1, 3, 3, 1, 30, 1, 16, 2, 106, 1, 4, 1, 71, 2, 4, 1, 21, 1, 4, 2, 81, 1, 92, 3, 3, 5, 48, 1, 17, 1, 16, 1, 16, 3, 9, 1, 11, 1, 587, 5, 1, 1, 7, 1, 9, 10, 3, 2, 788162, 31
        ];
        this.g = a;
        for (var b = 1; b < a.length; b++) null == a[b] ? a[b] = a[b - 1] + 1 : a[b] += a[b - 1];
        this.values = [1, 13, 1, 12, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 3, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 3, 0, 2, 0, 2, 0, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 3, 2, 4, 0, 5, 2, 4, 2, 0, 4, 2, 4, 6, 4, 0, 2, 5, 0, 2, 0, 5, 0, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 0, 2, 5, 0, 2, 0, 5, 0, 2, 4, 0, 5, 2, 4, 2, 6, 2, 5, 0, 2, 0, 2, 4, 0, 5, 2, 0, 4, 2, 4, 6, 0, 2, 0,
            2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 2, 5, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 2, 4, 6, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 2, 4, 2, 6, 2, 5, 0, 2, 0, 2, 4, 0, 5, 2, 0, 4, 2, 4, 2, 4, 2, 4, 2, 6, 2, 5, 0, 2, 0, 2, 4, 0, 5, 0, 2, 4, 2, 4, 6, 3, 0, 2, 0, 2, 0, 4, 0, 5, 6, 2, 4, 2, 4, 2, 0, 4, 0, 5, 0, 2, 0, 4, 2, 6, 0, 2, 0, 5, 0, 2, 0, 4, 2, 0, 2, 0, 5, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 5, 2, 4, 2, 6, 0, 2, 0, 2, 0, 2, 0, 5, 0, 2, 4, 2, 0, 6, 4, 2, 5, 0, 5, 0, 4, 2, 5, 2, 5, 0, 5, 0, 5, 2, 5, 2, 0, 4, 2, 0, 2, 5, 0, 2, 0, 7, 8, 9, 0, 2, 0, 5, 2, 6, 0, 5, 2, 6, 0, 5, 2, 0, 5, 2, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 2, 0, 2, 0, 2, 1, 0, 2, 0, 2, 0, 5, 0, 2, 4, 2, 4, 2, 4, 2, 0, 5, 0, 5, 0, 5, 2, 4, 2, 0, 5, 0, 5, 4, 2, 4, 2, 6, 0, 2, 0, 2, 4, 2, 0, 2, 4, 0, 5, 2, 4, 2, 4,
            2, 4, 2, 4, 6, 5, 0, 2, 0, 2, 4, 0, 5, 4, 2, 4, 2, 6, 2, 5, 0, 5, 0, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 0, 5, 4, 2, 4, 2, 0, 5, 0, 2, 0, 2, 4, 2, 0, 2, 0, 4, 2, 0, 2, 0, 2, 0, 1, 2, 15, 1, 0, 1, 0, 1, 0, 2, 0, 16, 0, 17, 0, 17, 0, 17, 0, 16, 0, 17, 0, 16, 0, 17, 0, 2, 0, 6, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 6, 5, 2, 5, 4, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 4, 0, 5, 4, 6, 2, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 6, 0, 7, 2, 4, 0, 5, 0, 5, 2, 4, 2, 4, 2, 4, 6, 0, 2, 0, 5, 2, 4, 2, 4, 2, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 5, 0, 2, 0, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 4, 2, 4, 0, 4, 6, 0, 5, 0, 5, 0, 5, 0, 4, 2, 4, 2, 4, 0, 4, 6, 0, 11, 8, 9, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 6, 0, 2, 0, 4, 2, 4, 0, 2, 6,
            0, 6, 2, 4, 0, 4, 2, 4, 6, 2, 0, 3, 0, 2, 0, 2, 4, 2, 6, 0, 2, 0, 2, 4, 0, 4, 2, 4, 6, 0, 3, 0, 2, 0, 4, 2, 4, 2, 6, 2, 0, 2, 0, 2, 4, 2, 6, 0, 2, 4, 0, 2, 0, 2, 4, 2, 4, 6, 0, 2, 0, 4, 2, 0, 4, 2, 4, 6, 2, 4, 2, 0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 6, 2, 0, 2, 4, 2, 4, 2, 4, 6, 2, 0, 2, 0, 4, 2, 4, 2, 4, 6, 2, 0, 2, 4, 2, 4, 2, 6, 2, 0, 2, 4, 2, 4, 2, 6, 0, 4, 2, 4, 6, 0, 2, 4, 2, 4, 2, 4, 2, 0, 2, 0, 2, 0, 4, 2, 0, 2, 0, 1, 0, 2, 4, 2, 0, 4, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 14, 0, 17, 0, 17, 0, 17, 0, 16, 0, 17, 0, 17, 0, 17, 0, 16, 0, 16, 0, 16, 0, 17, 0, 17, 0, 18, 0, 16, 0, 16, 0, 19, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 17, 0, 16, 0, 17, 0, 17, 0, 17, 0, 16, 0, 16, 0, 16, 0, 16, 0, 17,
            0, 16, 0, 16, 0, 17, 0, 17, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 16, 0, 1, 2
        ]
    };
    var Xi = null,
        $i = function(a, b) {
            var c = "string" === typeof a ? Yi(a, a.length - 1) : a,
                d = "string" === typeof b ? Yi(b, 0) : b;
            b = Zi(c);
            var e = Zi(d),
                f = "string" === typeof a;
            if (12 === b && 13 === e) return !1;
            if (1 === b || 12 === b || 13 === b || 1 === e || 12 === e || 13 === e) return !0;
            if (7 === b && (7 === e || 8 === e || 10 === e || 11 === e) || !(10 !== b && 8 !== b || 8 !== e && 9 !== e) || (11 === b || 9 === b) && 9 === e || 2 === e || 15 === e || 6 === e || 3 === b || 4 === e || 6 === b && 5 === e) return !1;
            var g;
            if (f) {
                if (18 === e) {
                    d = a;
                    var h = d.length - 1;
                    var k = c;
                    for (g = b; 0 < h && 2 === g;) h -= 65536 <= k && 1114111 >= k ? 2 : 1, k = Yi(d, h), g = Zi(k);
                    if (16 === g || 19 === g) return !1
                }
            } else if ((16 === b || 19 === b) && 18 === e) return !1;
            if (15 === b && (17 === e || 19 === e)) return !1;
            if (f) {
                if (14 === e) {
                    e = 0;
                    d = a;
                    h = d.length - 1;
                    k = c;
                    for (g = b; 0 < h && 14 === g;) e++, h -= 65536 <= k && 1114111 >= k ? 2 : 1, k = Yi(d, h), g = Zi(k);
                    14 === g && e++;
                    if (1 === e % 2) return !1
                }
            } else if (14 === b && 14 === e) return !1;
            return !0
        },
        Zi = function(a) {
            if (44032 <= a && 55203 >= a) return 16 === a % 28 ? 10 : 11;
            Xi || (Xi = new Wi);
            for (var b = Xi, c = b.g, d = 0, e = c.length; 8 < e - d;) {
                var f = e + d >> 1;
                c[f] <= a ? d = f : e = f
            }
            for (; d < e && !(a < c[d]); ++d);
            a = d - 1;
            return 0 > a ? null : b.values[a]
        },
        Yi = function(a, b) {
            var c = a.charCodeAt(b);
            55296 <= c && 56319 >= c && b + 1 < a.length ? (a = a.charCodeAt(b + 1), 56320 <= a && 57343 >= a && (c = 55296 <= c && 56319 >= c && 56320 <= a && 57343 >= a ? (c << 10) - 56623104 + (a - 56320 + 65536) : null)) : 56320 <= c && 57343 >= c && 0 < b && (a = a.charCodeAt(b - 1), 55296 <= a && 56319 >= a && (c = -(55296 <= a && 56319 >= a && 56320 <= c && 57343 >= c ? (a << 10) - 56623104 + (c - 56320 + 65536) : 0)));
            return 0 > c ? -c : c
        };
    var aj = function(a) {
            return 32 >= a || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
        },
        bj = F && fd(8),
        cj = G ? "<wbr></wbr>" : Pc ? "&shy;" : bj ? "&#8203;" : "<wbr>";
    var dj = {},
        ej = {},
        fj = {},
        gj = {},
        hj = {},
        ij = {},
        jj = function() {
            throw Error("w");
        };
    jj.prototype.Kb = null;
    jj.prototype.getContent = function() {
        return this.content
    };
    jj.prototype.toString = function() {
        return this.content
    };
    var kj = function() {
        jj.call(this)
    };
    D(kj, jj);
    kj.prototype.Vb = dj;
    var lj = function() {
        jj.call(this)
    };
    D(lj, jj);
    lj.prototype.Vb = ej;
    lj.prototype.Kb = 1;
    var mj = function() {
        jj.call(this)
    };
    D(mj, jj);
    mj.prototype.Vb = hj;
    mj.prototype.Kb = 1;
    var nj = function() {
        jj.call(this)
    };
    D(nj, jj);
    nj.prototype.Vb = ij;
    nj.prototype.Kb = 1;
    var oj = function(a, b) {
        return null != a && a.Vb === b
    };
    var pj = function(a) {
            if (null != a) switch (a.Kb) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        Q = function(a) {
            return oj(a, dj) ? a : a instanceof mc ? P(nc(a).toString(), a.g()) : P(xc(String(String(a))), pj(a))
        },
        qj = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        },
        P = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Kb = d);
                return c
            }
        }(kj),
        rj = qj(lj),
        sj = qj(nj),
        tj = function(a) {
            return a instanceof
            jj ? !!a.getContent() : !!a
        },
        uj = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return (c = String(c)) ? new b(c) : ""
            }
        },
        vj = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.Kb = d);
                return c
            }
        }(kj),
        wj = uj(mj),
        xj = uj(nj),
        yj = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        },
        R = function(a) {
            return oj(a, dj) ? String(String(a.getContent()).replace(zj, "").replace(Aj, "&lt;")).replace(Bj,
                Cj) : xc(String(a))
        },
        Fj = function(a) {
            return oj(a, dj) ? String(String(a.getContent()).replace(zj, "").replace(Aj, "&lt;")).replace(Dj, Cj) : String(a).replace(Ej, Cj)
        },
        Hj = function(a) {
            oj(a, hj) ? a = a.getContent().replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = Gj.test(a) ? a : "zSoyz");
            return a
        },
        Kj = function(a) {
            if (null == a) return " null ";
            if (oj(a, ej)) return a.getContent();
            if (a instanceof vb) return a instanceof vb && a.constructor === vb && a.i === ub ? a = a.g : (Ea(a), a = "type_error:SafeScript"), a.toString();
            switch (typeof a) {
                case "boolean":
                case "number":
                    return " " +
                        a + " ";
                default:
                    return "'" + String(String(a)).replace(Ij, Jj) + "'"
            }
        },
        Pj = function(a) {
            oj(a, fj) || oj(a, gj) ? a = Lj(a) : a instanceof Yb ? a = Lj(Zb(a)) : a instanceof Ib ? a = Lj(Jb(a).toString()) : (a = String(a), a = Mj.test(a) ? a.replace(Nj, Oj) : "about:invalid#zSoyz");
            return a
        },
        Rj = function(a) {
            oj(a, fj) || oj(a, gj) ? a = Lj(a) : a instanceof Yb ? a = Lj(Zb(a)) : a instanceof Ib ? a = Lj(Jb(a).toString()) : (a = String(a), a = Qj.test(a) ? a.replace(Nj, Oj) : "about:invalid#zSoyz");
            return a
        },
        S = function(a) {
            oj(a, ij) ? a = yj(a.getContent()) : null == a ? a = "" : a instanceof
            dc ? (a instanceof dc && a.constructor === dc && a.i === ac ? a = a.g : (Ea(a), a = "type_error:SafeStyle"), a = yj(a)) : a instanceof fc ? (a instanceof fc && a.constructor === fc && a.i === ec ? a = a.g : (Ea(a), a = "type_error:SafeStyleSheet"), a = yj(a)) : (a = String(a), a = Sj.test(a) ? a : "zSoyz");
            return a
        },
        Tj = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Cj = function(a) {
            return Tj[a]
        },
        Uj = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            $: "\\x24",
            "&": "\\x26",
            "'": "\\x27",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            "/": "\\/",
            ":": "\\x3a",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "?": "\\x3f",
            "[": "\\x5b",
            "\\": "\\\\",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        Jj = function(a) {
            return Uj[a]
        },
        Vj = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Oj = function(a) {
            return Vj[a]
        },
        Bj = /[\x00\x22\x27\x3c\x3e]/g,
        Ej = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Dj = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Ij = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Nj = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Sj = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Mj = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Qj = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Gj = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        Lj = function(a) {
            return String(a).replace(Nj, Oj)
        },
        zj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Aj = /</g;
    var Wj = {};
    var Xj = function(a, b, c, d) {
        void 0 != c.body && (c.body = JSON.stringify(c.body));
        c.path = "/calendar/" + a.va + "/" + escape(b);
        c.root = a.v.s;
        gapi.client.request(c).then(function(e) {
            d(e.result)
        }, function() {
            c.authType = "none";
            gapi.client.request(c).execute(d)
        })
    };
    var Yj = function(a, b) {
            this.Na = a;
            this.g = Vi(b)
        },
        Zj = /^[a-zA-Z0-9_]+$/;
    Yj.prototype.getTitle = function() {
        return this.Na || ""
    };
    var bk = function(a, b) {
        Yj.call(this, a.title || b || "", Si(a.iconLink));
        if (b = a.type) {
            var c = 2;
            "application/x-google-gadgets+xml" == b ? c = 1 : b.match(/^image/i) && (c = 3);
            this.type = c
        }
        if (a.link || a.width || a.height || a.display || a.preferences) this.s = Vi(a.link), this.i = ak[a.display] || "ICON", this.j = parseInt(a.width, 10) || 300, this.o = parseInt(a.height, 10) || 400, a.preferences && (this.u = a.preferences)
    };
    D(bk, Yj);
    bk.prototype.s = "";
    bk.prototype.i = "ICON";
    bk.prototype.getUrl = function() {
        return this.s
    };
    bk.prototype.getType = function() {
        return this.type
    };
    var ak = {
        icon: "ICON",
        chip: "CHIP"
    };
    var ck = /#(.)(.)(.)/,
        dk = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var ek = function(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.s = c;
            this.j = d;
            this.o = e
        },
        gk = function(a, b) {
            var c = parseInt(a.substr(1, 2), 16),
                d = parseInt(a.substr(3, 2), 16);
            a = parseInt(a.substr(5, 2), 16);
            c = Math.floor(255 - (255 - c) * b);
            d = Math.floor(255 - (255 - d) * b);
            a = Math.floor(255 - (255 - a) * b);
            return "#" + fk(c) + fk(d) + fk(a)
        },
        jk = function(a) {
            if (hk) {
                var b = a;
                if (!dk.test(b)) throw Error("y`" + b);
                4 == b.length && (b = b.replace(ck, "#$1$1$2$2$3$3"));
                b = b.toLowerCase();
                b = parseInt(b.substr(1), 16);
                var c = [b >> 16, b >> 8 & 255, b & 255];
                b = c[0];
                var d = c[1],
                    e = c[2];
                c = Math.max(Math.max(b, d), e);
                var f = Math.min(Math.min(b, d), e);
                if (f == c) f = b = 0;
                else {
                    var g = c - f;
                    f = g / c;
                    b = 60 * (b == c ? (d - e) / g : d == c ? 2 + (e - b) / g : 4 + (b - d) / g);
                    0 > b && (b += 360);
                    360 < b && (b -= 360)
                }
                b = [b, f, c];
                if (b[2] > ik) {
                    b[1] *= 1.3;
                    b[1] = Math.min(b[1], 1);
                    b[2] *= .8;
                    g = b[0];
                    var h = b[1];
                    b = b[2];
                    e = c = d = 0;
                    if (0 == h) e = c = d = b;
                    else {
                        f = Math.floor(g / 60);
                        var k = g / 60 - f;
                        g = b * (1 - h);
                        var l = b * (1 - h * k);
                        h = b * (1 - h * (1 - k));
                        switch (f) {
                            case 1:
                                d = l;
                                c = b;
                                e = g;
                                break;
                            case 2:
                                d = g;
                                c = b;
                                e = h;
                                break;
                            case 3:
                                d = g;
                                c = l;
                                e = b;
                                break;
                            case 4:
                                d = h;
                                c = g;
                                e = b;
                                break;
                            case 5:
                                d = b;
                                c = g;
                                e = l;
                                break;
                            case 6:
                            case 0:
                                d =
                                    b, c = h, e = g
                        }
                    }
                    d = [Math.round(d), Math.round(c), Math.round(e)];
                    h = d[0];
                    b = d[1];
                    d = d[2];
                    h = Number(h);
                    b = Number(b);
                    d = Number(d);
                    if (h != (h & 255) || b != (b & 255) || d != (d & 255)) throw Error("z`" + h + "`" + b + "`" + d);
                    b = h << 16 | b << 8 | d;
                    h = 16 > h ? "#" + (16777216 | b).toString(16).substr(1) : "#" + b.toString(16)
                }
                return new ek(a, h || a, a, a, a)
            }
            h = parseInt(a.substr(1, 2), 16);
            b = parseInt(a.substr(3, 2), 16);
            e = parseInt(a.substr(5, 2), 16);
            h *= .7;
            b *= .7;
            e *= .7;
            d = .3 * h + .59 * b + .11 * e;
            f = Math.exp(d / 255);
            c = (.595716 * h - .274453 * b - .321263 * e) * f;
            e = (.211456 * h - .522591 * b + .311135 *
                e) * f;
            h = Math.floor(Math.min(Math.max(d + .9563 * c + .621 * e, 0), 255));
            b = Math.floor(Math.min(Math.max(d - .2721 * c - .6474 * e, 0), 255));
            e = Math.floor(Math.min(Math.max(d - 1.107 * c + 1.7046 * e, 0), 255));
            h = "#" + fk(h) + fk(b) + fk(e);
            b = gk(a, .33);
            d = gk(a, Math.min(1, .5 + (parseInt(a.substr(1, 2), 16) + parseInt(a.substr(3, 2), 16) + parseInt(a.substr(5, 2), 16)) / 3 / 255 / 1.5));
            return new ek(a, h, a, d, b)
        };
    ek.prototype.equals = function(a) {
        return this.color == a.color
    };
    var T = function(a, b, c) {
            return {
                Ig: a,
                name: b,
                Gh: c
            }
        },
        lk = function(a, b) {
            return 67 <= a && 90 >= a ? kk[a - 67].Ig : "#" + "666666888888aaaaaabbbbbbdddddda32929cc3333d96666e69999f0c2c2b1365fdd4477e67399eea2bbf5c7d67a367a994499b373b3cca2cce1c7e15229a36633cc8c66d9b399e6d1c2f029527a336699668cb399b3ccc2d1e12952a33366cc668cd999b3e6c2d1f01b887a22aa9959bfb391d5ccbde6e128754e32926265ad8999c9b1c2dfd00d78131096184cb05288cb8cb8e0ba52880066aa008cbf40b3d580d1e6b388880eaaaa11bfbf4dd5d588e6e6b8ab8b00d6ae00e0c240ebd780f3e7b3be6d00ee8800f2a640f7c480fadcb3b1440edd5511e6804deeaa88f5ccb8865a5aa87070be9494d4b8b8e5d4d47057708c6d8ca992a9c6b6c6ddd3dd4e5d6c6274878997a5b1bac3d0d6db5a69867083a894a2beb8c1d4d4dae54a716c5c8d8785aaa5aec6c3cedddb6e6e41898951a7a77dc4c4a8dcdccb8d6f47b08b59c4a883d8c5ace7dcce8531049f3501c7561ee2723ad6a58c6914268a2d38b5515dcd6a75d0a4a95c1158962181c244abda5dc4d69fcc23164e402175603f997d5cb5a89ac2182c5730487e536ca66d86c0a4afc9060d5e1821863640ad525cc8969acb125a121f753c3c995b5ab67998c2a62f62133d82155ca63279c34fa6c7942f63095a9a087ec2259add42b6d48e5f6b0281910ba7b828c3d445c8d0908755099d7000cf9911ebb42ed9c2858c500baa5a00d47f1eee9939ddb78d7549168d4500b56414d38233cda9866b3304743500914d14b37037bb9d845b123b870b50ab2671c9448ec98eae42104a70237f9643a5b15fc0c09cc7113f4725617d4585a361a0be9dbac73333335151517373738f8f8fb2b2b20f4b38227f6341a5875dc0a29bc7ba856508a59114d1bc36e9d34fddd398711616871111ad2d2dc94a4acb9292ac725e75481eac725ec68c78e6d5cfd06b64924420d06b64db7972f0d0cef83a22a64232f83a22f97d6df6c9c2fa573cd02424fa573cfc8976fed0c8ff7537bb5517ff7537fa9162ffd8c7ffad46cb7403ffad46ffad46ffe8cb42d69250b68e42d69242d692caf4e016a765007d3916a7656bcfa2d1ede07bd1484db8107bd1487bd148daf2ccb3dc6c93c00bb3dc6cb3dc6ceaf5dcfbe983bdb634fbe983fbe983fef9dcfad165bf9608fad165fad165fef2d392e1c033b69492e1c092e1c0e0f7ed9fe1e70bbcb29fe1e79fe1e7e4f7f89fc6e71587bd9fc6e79fc6e7e4eff84986e72c70d14986e78fb5f2dbe7fa9a9cff373ad79a9cffa9abfee3e3ffb99aff6733ddb99affb99affebe3ffc2c2c2979797c2c2c2d0d0d0e6e6e6cabdbf717171cabdbfcabdbfeae6e6cca6ac8a404dcca6accca6acf1e6e8f691b2d21e5bf691b2f9a9c3fce0e9cd74e6ca2ae6cd74e6dd8ef3f1d8f8a47ae29c3ce4a47ae2b38cede6daf7".substr(30 *
                a + 6 * b, 6).toUpperCase()
        },
        nk = function() {
            if (mk) return mk;
            for (var a = [], b = 0; 91 > b; b++) {
                var c = lk;
                c = new ek(c(b, 0), c(b, 1), c(b, 2), c(b, 3), c(b, 4));
                c.color = b;
                a[b] = c
            }
            return mk = a
        },
        ok = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
            return b
        },
        qk = function(a) {
            a = pk(a);
            return nk()[a] || null
        },
        sk = function(a) {
            a = a.toUpperCase();
            if (!rk) {
                rk = {};
                for (var b = nk(), c = 0, d = b.length; c < d; ++c) rk[b[c].g] = c
            }
            return rk[a] || -1
        },
        Ak = function(a) {
            var b = hk ? tk : uk ? vk : wk;
            if (!a) return b[0];
            a = hk ? xk[a] : uk ? yk[a] : zk[a];
            return void 0 === a ? b[0] : b[(a +
                1) % b.length]
        },
        ca = function(a, b, c) {
            var d = parseInt(a.substr(3, 2), 16);
            d += c * (parseInt(b.substr(3, 2), 16) - d);
            var e = parseInt(a.substr(5, 2), 16);
            e += c * (parseInt(b.substr(5, 2), 16) - e);
            a = parseInt(a.substr(1, 2), 16);
            return "#" + fk(a + c * (parseInt(b.substr(1, 2), 16) - a)) + fk(d) + fk(e)
        },
        fk = function(a) {
            a = Number(a | 0).toString(16);
            return 2 > a.length ? "0" + a : a
        },
        pk = function(a) {
            if (0 == a || 1 <= a && 42 >= a && !uk && !hk) return a;
            a = 67 <= a && 90 >= a ? a - 67 + 43 : 1 <= a && 42 >= a ? Bk[a - 1] : a;
            return hk ? a - 43 + 67 : uk ? a : Ck[a - 43]
        },
        ik = .79 * 255,
        uk = !1,
        hk = !1,
        kk = [T("#795548",
            "Cocoa", 21), T("#E67C73", "Flamingo", 3), T("#D50000", "Tomato", 2), T("#F4511E", "Tangerine", 4), T("#EF6C00", "Pumpkin", 5), T("#F09300", "Mango", 6), T("#009688", "Eucalyptus", 13), T("#0B8043", "Basil", 12), T("#7CB342", "Pistachio", 10), T("#C0CA33", "Avocado", 9), T("#E4C441", "Citron", 8), T("#F6BF26", "Banana", 7), T("#33B679", "Sage", 11), T("#039BE5", "Peacock", 14), T("#4285F4", "Cobalt", 15), T("#3F51B5", "Blueberry", 16), T("#7986CB", "Lavender", 17), T("#B39DDB", "Wisteria", 18), T("#616161", "Graphite", 22), T("#A79B8E", "Birch", 23), T("#AD1457",
            "Radicchio", 0), T("#D81B60", "Cherry Blossom", 1), T("#8E24AA", "Grape", 20), T("#9E69AF", "Amethyst", 19)],
        mk = null,
        Bk = [44, 64, 66, 60, 57, 59, 56, 55, 55, 52, 53, 53, 48, 46, 63, 63, 61, 57, 56, 44, 62, 62, 47, 65, 66, 57, 58, 50, 51, 51, 52, 54, 48, 48, 43, 65, 65, 57, 61, 49, 54, 45],
        Ck = [35, 23, 42, 14, 22, 33, 40, 28, 30, 31, 12, 32, 8, 7, 6, 26, 5, 4, 39, 21, 15, 2, 37, 25],
        wk = [26, 23, 41, 28, 33, 37, 35, 30, 38, 40, 24, 31, 27, 22, 25, 42, 29, 32, 34, 36, 39, 6, 1, 12, 9, 14, 4, 21, 8, 19, 7, 2, 11, 10, 3, 20, 13, 5, 15, 16, 17, 18],
        vk = [57, 51, 54, 46, 60, 64, 61, 43, 56, 58, 52, 53, 47, 65, 63, 62, 44, 55, 59, 49, 48, 45,
            66, 50
        ],
        tk = vk.map(function(a) {
            return a - 43 + 67
        }),
        zk = ok(wk),
        yk = ok(vk),
        xk = ok(tk),
        rk = null;
    var Dk = function(a) {
        this.Aa = a
    };
    Dk.prototype.getId = function() {
        return this.Aa
    };
    var Gk = function(a, b, c, d) {
        this.Aa = a;
        this.Na = c || a;
        a = this.v = b;
        b = this.getId();
        if (b in a.g) throw Error("S`" + b);
        a.g[b] = new Ek;
        a.o[b] = this;
        d || (Fk = d = Ak(Fk), d = qk(d));
        this.o = d
    };
    D(Gk, Dk);
    Gk.prototype.getTitle = function() {
        return this.Na
    };
    Gk.prototype.setTitle = function(a) {
        this.Na = a
    };
    Gk.prototype.g = function(a, b) {
        b.call(null, [], null)
    };
    var Fk = 0;
    var Ik = function(a, b, c) {
        K.call(this);
        this.j = [];
        this.i = b || Hk;
        this.o = c || "gcal$func$";
        this.u = a
    };
    p(Ik, K);
    Ik.prototype.ka = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) delete this.i[this.j[a]];
        K.prototype.ka.call(this)
    };
    Ik.prototype.g = function(a, b) {
        (b = b || this.u) && (a = y(a, b));
        b = Jk++;
        this.i[b] = a;
        this.j.push(b);
        return rj(this.o + "[" + b + "]")
    };
    Ik.prototype.s = function(a) {
        delete this.i[a.substring(this.o.length + 1, a.length - 1)]
    };
    var Hk = r.gcal$func$ = {},
        Jk = 0,
        Kk = new Ik,
        Lk = y(Kk.g, Kk);
    y(Kk.s, Kk);
    var Ok = function(a, b, c) {
            b = Mk(b(c || Nk, void 0, void 0));
            wc(a, b)
        },
        Pk = function(a, b, c, d) {
            d = d || O();
            a = a(b || Nk, void 0, c);
            a = Mk(a);
            b = d.g;
            d = Pe(b, "DIV");
            F ? (a = sc(uc, a), wc(d, a), d.removeChild(d.firstChild)) : wc(d, a);
            if (1 == d.childNodes.length) d = d.removeChild(d.firstChild);
            else {
                for (a = b.createDocumentFragment(); d.firstChild;) a.appendChild(d.firstChild);
                d = a
            }
            return d
        },
        Qk = function(a, b) {
            b = b || O();
            b = Pe(b.g, "DIV");
            a = Mk(a);
            wc(b, a);
            return 1 == b.childNodes.length && (a = b.firstChild, 1 == a.nodeType) ? a : b
        },
        Mk = function(a) {
            if (Ha(a))
                if (a instanceof jj) {
                    if (a.Vb !== dj) throw Error("x");
                    a = tc(a.toString(), a.Kb || null)
                } else a = pc("zSoyz");
            else a = pc(String(a));
            return a
        },
        Nk = {};
    var Rk = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = Rk.prototype;
    m.clone = function() {
        return new Rk(this.top, this.right, this.bottom, this.left)
    };
    m.contains = function(a) {
        return this && a ? a instanceof Rk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.g >= this.top && a.g <= this.bottom : !1
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Tk = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    m = Tk.prototype;
    m.clone = function() {
        return new Tk(this.left, this.top, this.width, this.height)
    };
    m.contains = function(a) {
        return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.g >= this.top && a.g <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Uk = {},
        Vk = function(a, b) {
            var c = Ee(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        Wk = function(a, b) {
            return Vk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Yk = function(a, b, c) {
            if (b instanceof N) {
                var d = b.x;
                b = b.g
            } else d = b, b = c;
            a.style.left = Xk(d);
            a.style.top = Xk(b)
        },
        Zk = function(a) {
            return new N(a.offsetLeft, a.offsetTop)
        },
        $k = function(a) {
            a = a ? Ee(a) : document;
            return !F || 9 <= Number(gd) || Ie(O(a).g) ? a.documentElement :
                a.body
        },
        al = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        bl = function(a) {
            if (F && !(8 <= Number(gd))) return a.offsetParent;
            var b = Ee(a),
                c = Wk(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Wk(a, "position"), d = d && "static" ==
                    c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        dl = function(a) {
            for (var b = new Rk(0, Infinity, Infinity, 0), c = O(a), d = c.g.body, e = c.g.documentElement, f = Ke(c.g); a = bl(a);)
                if (!(F && 0 == a.clientWidth || G && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Wk(a, "overflow")) {
                    var g = cl(a),
                        h = new N(a.clientLeft, a.clientTop);
                    g.x += h.x;
                    g.g += h.g;
                    b.top = Math.max(b.top, g.g);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.g + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                } d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = Je(Le(c.g) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        },
        cl = function(a) {
            var b = Ee(a),
                c = new N(0, 0),
                d = $k(b);
            if (a == d) return c;
            a = al(a);
            b = Me(O(b).g);
            c.x = a.left + b.x;
            c.g = a.top + b.g;
            return c
        },
        Xk = function(a) {
            "number" == typeof a && (a += "px");
            return a
        },
        fl =
        function(a) {
            var b = el;
            if ("none" != Wk(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        el = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = G && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = al(a), new Ce(a.right - a.left, a.bottom - a.top)) : new Ce(b, c)
        },
        gl = function(a) {
            var b = cl(a);
            a = fl(a);
            return new Tk(b.x, b.g, a.width, a.height)
        },
        hl = function(a, b) {
            a.style.display =
                b ? "" : "none"
        },
        il = function(a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            b = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +b
        },
        jl = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? il(a, b) : 0
        },
        kl = function(a, b) {
            if (F) {
                var c = jl(a, b + "Left"),
                    d = jl(a, b + "Right"),
                    e = jl(a, b + "Top");
                a = jl(a, b + "Bottom");
                return new Rk(e, d, a, c)
            }
            c = Vk(a, b + "Left");
            d = Vk(a, b + "Right");
            e = Vk(a, b + "Top");
            a = Vk(a, b + "Bottom");
            return new Rk(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        ll = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        ml = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in ll ? ll[b] : il(a, b)
        };
    var nl = function() {};
    nl.prototype.g = function() {};
    var ol = function() {
        if (Uc) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(gc)) ? a[1] : "0"
        }
        return Tc ? (a = /10[_.][0-9_.]+/, (a = a.exec(gc)) ? a[0].replace(/_/g, ".") : "10") : Vc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(gc)) ? a[1] : "") : Wc || Xc || Yc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(gc)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var pl = function(a) {
            return (a = a.exec(gc)) ? a[1] : ""
        },
        ql = function() {
            if (hd) return pl(/Firefox\/([0-9.]+)/);
            if (F || Qc || Pc) return ed;
            if (ld) return Kc() ? pl(/CriOS\/([0-9.]+)/) : pl(/Chrome\/([0-9.]+)/);
            if (md && !Kc()) return pl(/Version\/([0-9.]+)/);
            if (id || jd) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(gc);
                if (a) return a[1] + "." + a[2]
            } else if (kd) return (a = pl(/Android\s+([0-9.]+)/)) ? a : pl(/Version\/([0-9.]+)/);
            return ""
        }();
    var sl = function(a, b, c, d, e, f) {
            var g;
            if (g = c.offsetParent) {
                var h = "HTML" == g.tagName || "BODY" == g.tagName;
                if (!h || "static" != Wk(g, "position")) {
                    var k = cl(g);
                    if (!h) {
                        h = "rtl" == Wk(g, "direction");
                        var l;
                        if (l = h) {
                            if (l = md) l = 0 <= Vb(ql, 10);
                            var n;
                            if (n = Zc) n = 0 <= Vb(ol, 10);
                            l = Sc || l || n
                        }
                        h = l ? -g.scrollLeft : !h || Rc && fd("8") || "visible" == Wk(g, "overflowX") ? g.scrollLeft : g.scrollWidth - g.clientWidth - g.scrollLeft;
                        k = Be(k, new N(h, g.scrollTop))
                    }
                }
            }
            g = k || new N;
            k = gl(a);
            if (h = dl(a)) {
                var q = new Tk(h.left, h.top, h.right - h.left, h.bottom - h.top);
                h = Math.max(k.left,
                    q.left);
                l = Math.min(k.left + k.width, q.left + q.width);
                h <= l && (n = Math.max(k.top, q.top), q = Math.min(k.top + k.height, q.top + q.height), n <= q && (k.left = h, k.top = n, k.width = l - h, k.height = q - n))
            }
            h = O(a);
            n = O(c);
            if (h.g != n.g) {
                l = h.g.body;
                n = Le(n.g);
                q = new N(0, 0);
                var v = (v = Ee(l)) ? Le(v) : window;
                if (Mc(v, "parent")) {
                    var t = l;
                    do {
                        if (v == n) var x = cl(t);
                        else x = al(t), x = new N(x.left, x.top);
                        q.x += x.x;
                        q.g += x.g
                    } while (v && v != n && v != v.parent && (t = v.frameElement) && (v = v.parent))
                }
                l = Be(q, cl(l));
                !F || 9 <= Number(gd) || Ie(h.g) || (l = Be(l, Me(h.g)));
                k.left += l.x;
                k.top += l.g
            }
            a = rl(a, b);
            b = k.left;
            a & 4 ? b += k.width : a & 2 && (b += k.width / 2);
            a = new N(b, k.top + (a & 1 ? k.height : 0));
            a = Be(a, g);
            var u;
            f && (u = dl(c)) && (u.top -= g.g, u.right -= g.x, u.bottom -= g.g, u.left -= g.x);
            a = a.clone();
            g = rl(c, d);
            d = fl(c);
            b = d.clone();
            a = a.clone();
            b = b.clone();
            k = 0;
            if (e || 0 != g) g & 4 ? a.x -= b.width + (e ? e.right : 0) : g & 2 ? a.x -= b.width / 2 : e && (a.x += e.left), g & 1 ? a.g -= b.height + (e ? e.bottom : 0) : e && (a.g += e.top);
            f && (u ? (e = a, g = b, k = 0, 65 == (f & 65) && (e.x < u.left || e.x >= u.right) && (f &= -2), 132 == (f & 132) && (e.g < u.top || e.g >= u.bottom) && (f &= -5), e.x < u.left &&
                f & 1 && (e.x = u.left, k |= 1), f & 16 && (h = e.x, e.x < u.left && (e.x = u.left, k |= 4), e.x + g.width > u.right && (g.width = Math.min(u.right - e.x, h + g.width - u.left), g.width = Math.max(g.width, 0), k |= 4)), e.x + g.width > u.right && f & 1 && (e.x = Math.max(u.right - g.width, u.left), k |= 1), f & 2 && (k |= (e.x < u.left ? 16 : 0) | (e.x + g.width > u.right ? 32 : 0)), e.g < u.top && f & 4 && (e.g = u.top, k |= 2), f & 32 && (h = e.g, e.g < u.top && (e.g = u.top, k |= 8), e.g + g.height > u.bottom && (g.height = Math.min(u.bottom - e.g, h + g.height - u.top), g.height = Math.max(g.height, 0), k |= 8)), e.g + g.height > u.bottom &&
                f & 4 && (e.g = Math.max(u.bottom - g.height, u.top), k |= 2), f & 8 && (k |= (e.g < u.top ? 64 : 0) | (e.g + g.height > u.bottom ? 128 : 0)), f = k) : f = 256, k = f);
            f = new Tk(0, 0, 0, 0);
            f.left = a.x;
            f.top = a.g;
            f.width = b.width;
            f.height = b.height;
            k & 496 || (Yk(c, new N(f.left, f.top)), b = new Ce(f.width, f.height), d == b || d && b && d.width == b.width && d.height == b.height || (f = b, d = Ie(O(Ee(c)).g), !F || fd("10") || d && fd("8") ? (c = c.style, Sc ? c.MozBoxSizing = "border-box" : G ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(f.width, 0) + "px", c.height = Math.max(f.height,
                0) + "px") : (e = c.style, d ? (d = kl(c, "padding"), !F || 9 <= Number(gd) ? (u = Vk(c, "borderLeftWidth"), a = Vk(c, "borderRightWidth"), b = Vk(c, "borderTopWidth"), c = Vk(c, "borderBottomWidth"), c = new Rk(parseFloat(b), parseFloat(a), parseFloat(c), parseFloat(u))) : (u = ml(c, "borderLeft"), a = ml(c, "borderRight"), b = ml(c, "borderTop"), c = ml(c, "borderBottom"), c = new Rk(b, a, c, u)), e.pixelWidth = f.width - c.left - d.left - d.right - c.right, e.pixelHeight = f.height - c.top - d.top - d.bottom - c.bottom) : (e.pixelWidth = f.width, e.pixelHeight = f.height))))
        },
        rl = function(a,
            b) {
            return (b & 8 && "rtl" == Wk(a, "direction") ? b ^ 4 : b) & -9
        };
    var vl = function(a, b, c, d, e, f) {
            if (G && !fd("525")) return !0;
            if (Tc && e) return tl(a);
            if (e && !d) return !1;
            if (!Sc) {
                "number" === typeof b && (b = ul(b));
                var g = 17 == b || 18 == b || Tc && 91 == b;
                if ((!c || Tc) && g || Tc && 16 == b && (d || f)) return !1
            }
            if ((G || Qc) && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (F && d && b == a) return !1;
            switch (a) {
                case 13:
                    return Sc ? f || e ? !1 : !(c && d) : !0;
                case 27:
                    return !(G || Qc || Sc)
            }
            return Sc && (d || e || f) ? !1 : tl(a)
        },
        tl = function(a) {
            if (48 <=
                a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (G || Qc) && 0 == a) return !0;
            switch (a) {
                case 32:
                case 43:
                case 63:
                case 64:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                case 163:
                case 58:
                    return !0;
                case 173:
                    return Sc;
                default:
                    return !1
            }
        },
        ul = function(a) {
            if (Sc) a = wl(a);
            else if (Tc && G) switch (a) {
                case 93:
                    a = 91
            }
            return a
        },
        wl = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var yl = function(a, b) {
        M.call(this);
        this.g = new fh(this);
        a = a || null;
        xl(this);
        this.Ua = a;
        b && (this.Zb = b)
    };
    D(yl, M);
    m = yl.prototype;
    m.Ua = null;
    m.Vd = !0;
    m.Ud = null;
    m.Nb = !1;
    m.wd = -1;
    m.vd = -1;
    m.Ic = !1;
    m.hd = !0;
    m.Zb = "toggle_display";
    m.getType = function() {
        return this.Zb
    };
    m.U = function() {
        return this.Ua
    };
    var zl = function(a) {
            xl(a);
            a.Vd = !0
        },
        xl = function(a) {
            if (a.Nb) throw Error("A");
        };
    yl.prototype.isVisible = function() {
        return this.Nb
    };
    yl.prototype.$b = function() {
        return this.Nb || 150 > B() - this.vd
    };
    yl.prototype.setVisible = function(a) {
        this.o && this.o.stop();
        this.j && this.j.stop();
        if (a) {
            if (!this.Nb && this.dispatchEvent("beforeshow")) {
                if (!this.Ua) throw Error("B");
                this.i();
                a = Ee(this.Ua);
                this.Ic && this.g.listen(a, "keydown", this.Wg, !0);
                if (this.Vd)
                    if (this.g.listen(a, "mousedown", this.Ce, !0), F) {
                        try {
                            var b = a.activeElement
                        } catch (d) {}
                        for (; b && "IFRAME" == b.nodeName;) {
                            try {
                                var c = b.contentDocument || b.contentWindow.document
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.g.listen(a, "mousedown", this.Ce, !0);
                        this.g.listen(a,
                            "deactivate", this.Be)
                    } else this.g.listen(a, "blur", this.Be);
                "toggle_display" == this.Zb ? (this.Ua.style.visibility = "visible", hl(this.Ua, !0)) : "move_offscreen" == this.Zb && this.i();
                this.Nb = !0;
                this.wd = B();
                this.vd = -1;
                this.o ? (ie(this.o, "end", this.De, !1, this), this.o.play()) : this.De()
            }
        } else Al(this)
    };
    yl.prototype.i = Ca;
    var Al = function(a, b) {
        if (!a.Nb || !a.dispatchEvent({
                type: "beforehide",
                target: b
            })) return !1;
        a.g && kh(a.g);
        a.Nb = !1;
        a.vd = B();
        a.j ? (ie(a.j, "end", Na(a.ae, b), !1, a), a.j.play()) : a.ae(b);
        return !0
    };
    m = yl.prototype;
    m.ae = function(a) {
        "toggle_display" == this.Zb ? this.Jg() : "move_offscreen" == this.Zb && (this.Ua.style.top = "-10000px");
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    m.Jg = function() {
        this.Ua.style.visibility = "hidden";
        hl(this.Ua, !1)
    };
    m.De = function() {
        this.dispatchEvent("show")
    };
    m.Ce = function(a) {
        a = a.target;
        Re(this.Ua, a) || Bl(this, a) || 150 > B() - this.wd || Al(this, a)
    };
    m.Wg = function(a) {
        27 == a.keyCode && Al(this, a.target) && (a.preventDefault(), a.stopPropagation())
    };
    m.Be = function(a) {
        if (this.hd) {
            var b = Ee(this.Ua);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || Re(this.Ua, a) || "BODY" == a.tagName) return
            } else if (a.target != b) return;
            150 > B() - this.wd || Al(this)
        }
    };
    var Bl = function(a, b) {
        return Va(a.Ud || [], function(c) {
            return b === c || Re(c, b)
        })
    };
    yl.prototype.ka = function() {
        yl.Ka.ka.call(this);
        this.g.Ga();
        Rd(this.o);
        Rd(this.j);
        delete this.Ua;
        delete this.g;
        delete this.Ud
    };
    var Cl = function(a, b) {
        this.u = 8;
        this.s = b || void 0;
        yl.call(this, a)
    };
    D(Cl, yl);
    Cl.prototype.i = function() {
        if (this.s) {
            var a = !this.isVisible() && "move_offscreen" != this.getType(),
                b = this.U();
            a && (b.style.visibility = "hidden", hl(b, !0));
            this.s.g(b, this.u, this.T);
            a && hl(b, !1)
        }
    };
    var Dl = function(a, b) {
        K.call(this);
        this.g = a;
        this.j = O(a);
        this.i = new Ik(this);
        this.o = b || 301
    };
    p(Dl, K);
    m = Dl.prototype;
    m.ka = function() {
        this.i.Ga();
        if (this.Va) {
            var a = this.Va;
            if (a)
                if (Yd(a)) a.Ta && ee(a.Ta);
                else if (a = le(a)) {
                var b = 0,
                    c;
                for (c in a.g)
                    for (var d = a.g[c].concat(), e = 0; e < d.length; ++e) qe(d[e]) && ++b
            }
            this.Va.Ga()
        }
        K.prototype.ka.call(this)
    };
    m.kg = function() {
        var a = this.Ia;
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    m.render = function(a, b, c, d, e, f) {
        if (!this.Ia) {
            var g = this.i.g(this.Dc);
            g = P('<div class=cc style="z-index:' + R(S(this.o)) + '"><div class=cc-titlebar><div class=cc-close onclick="' + R(Kj(g)) + '();"></div><div class=cc-title></div></div><div class=cc-body></div></div>');
            this.Ia = Qk(g, this.j);
            this.Va = new Cl(this.Ia);
            zl(this.Va);
            g = this.Va;
            xl(g);
            g.Ic = !0;
            this.Va.hd = !1;
            L(this.Va, "beforehide", this.kg, !1, this)
        }
        this.Va.setVisible(!1);
        this.Ia.style.left = "0";
        this.Ia.style.top = "0";
        this.g.appendChild(this.Ia);
        this.Ia.style.display =
            "";
        this.Ia.style.width = c ? c + "px" : "";
        this.Ia.childNodes[1].style.height = d ? d + "px" : "";
        wc(this.Ia.childNodes[1], Mk(f));
        e && 0 < e.length ? (Se(this.Ia.childNodes[0].childNodes[1], e), this.Ia.childNodes[0].style.display = "") : this.Ia.childNodes[0].style.display = "none";
        e = gl(this.g);
        c = this.Ia.offsetWidth;
        d = this.Ia.offsetHeight;
        a = Math.min(Math.max(a, 10), Math.max(e.left + e.width - c - 10, 10));
        c = b;
        b = Math.min(Math.max(b, 10), Math.max(e.top + e.height - d - 10, 10));
        c != b && (a += 16);
        a -= e.left;
        b -= e.top;
        this.Ia.style.left = a + "px";
        this.Ia.style.top =
            b + "px";
        this.Va.setVisible(!0)
    };
    m.Dc = function() {
        this.Va && this.Va.setVisible(!1)
    };
    m.Ia = null;
    m.Va = null;
    var El;
    var Fl = function() {};
    Fl.prototype.g = function(a) {
        return a
    };
    var Gl = function() {
        var a = new Fl;
        y(a.g, a)
    };
    Gl();
    var Hl = {
        needsAction: 0,
        accepted: 1,
        declined: 2,
        tentative: 3
    };
    var Il = {
            "@gmail.com": "@m",
            "@group.calendar.google.com": "@g",
            "@holiday.calendar.google.com": "@h",
            "@import.calendar.google.com": "@i",
            "@group.v.calendar.google.com": "@v"
        },
        Jl = function(a, b) {
            hb(Il, function(c, d) {
                b = b.replace(new RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") + "$"), c)
            });
            return qd(gb(a + " " + b), 4)
        };
    var qg = function(a, b, c, d) {
        this.j = a = 60 * (60 * (24 * a + b) + c) + d;
        this.second = a % 60;
        a = a / 60 | 0;
        this.minute = a % 60;
        a = a / 60 | 0;
        this.hour = a % 24;
        this.S = a / 24 | 0
    };
    D(qg, ng);
    qg.prototype.H = function() {
        return this.i || (this.i = this.S + (((this.hour << 6) + this.minute << 6) + this.second + 1) * lg)
    };
    qg.prototype.g = function() {
        var a = this.hour || this.minute || this.second || 0,
            b = this.S || a;
        b = 0 > b ? -1 : 0 < b ? 1 : 0;
        var c = 0 > b ? "-P" : "P";
        this.S && (c = this.S % 7 ? c + (b * this.S + "D") : c + (b * this.S / 7 + "W"));
        a ? (c += "T", this.hour && (c += b * this.hour + "H"), this.minute && (c += b * this.minute + "M"), this.second && (c += b * this.second + "S")) : b || (c += "0D");
        return c
    };
    qg.prototype.equals = function(a) {
        return !!a && this.constructor == a.constructor && this.H() == a.H()
    };
    var Kl = function() {};
    D(Kl, ng);
    m = Kl.prototype;
    m.year = 0;
    m.month = 0;
    m.S = 0;
    m.hour = 0;
    m.minute = 0;
    m.second = 0;
    m.H = function() {
        var a = this.ya();
        isNaN(this.hour) || (a += (((this.hour << 6) + this.minute << 6) + this.second + 1) * lg);
        return a
    };
    m.ya = function() {
        Ll(this);
        return ((this.year - 1970 << 4) + this.month << 5) + this.S
    };
    var Ll = function(a) {
            if (a.hour || a.minute || a.second) {
                var b = 60 * (60 * a.hour + a.minute) + a.second,
                    c = Math.floor(b / 86400);
                b -= 86400 * c;
                a.S += c;
                a.second = b % 60;
                b /= 60;
                a.minute = (b | 0) % 60;
                a.hour = (b / 60 | 0) % 24
            }
            Ml(a);
            for (b = gg(a.year, a.month); 1 > a.S;) --a.month, Ml(a), b = gg(a.year, a.month), a.S += b;
            for (; a.S > b;) a.S -= b, a.month += 1, Ml(a), b = gg(a.year, a.month)
        },
        Ml = function(a) {
            if (1 > a.month || 12 < a.month) {
                var b = Math.floor((a.month - 1) / 12);
                a.month -= 12 * b;
                a.year += b
            }
        };
    m = Kl.prototype;
    m.ua = function() {
        Ll(this);
        return sg(this.year, this.month, this.S)
    };
    m.Hb = function() {
        Ll(this);
        return new zg(this.year, this.month, this.S, this.hour, this.minute, this.second)
    };
    m.Rc = function() {
        Ll(this);
        return new Ag(this.hour, this.minute, this.second)
    };
    m.Wa = function() {
        Ll(this);
        var a = this.S;
        return (ig(this.year, this.month) + a - 1) % 7
    };
    m.equals = function(a) {
        return !!a && this.constructor == a.constructor && this.H() == a.H()
    };
    var og = function(a) {
            return Nl(a.year || 0, a.month || 0, a.S || 0, a.hour || 0, a.minute || 0, a.second || 0)
        },
        Nl = function(a, b, c, d, e, f) {
            var g = new Kl;
            g.year = a;
            g.month = b;
            g.S = c;
            g.hour = d;
            g.minute = e;
            g.second = f;
            return g
        },
        vg = function(a, b, c) {
            var d = new Kl;
            d.year = a;
            d.month = b;
            d.S = c;
            return d
        };
    var Ol = function(a, b) {
        this.start = a;
        b.constructor === qg ? (a = og(a), a.S += b.S, a.hour += b.hour, a.minute += b.minute, a.second += b.second, this.g = this.start instanceof zg ? a.Hb() : a.ua(), this.duration = b) : (this.g = b, this.duration = rg(this.g, this.start))
    };
    Ol.prototype.toString = function() {
        return this.start + "/" + this.g
    };
    Ol.prototype.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.start.equals(a.start) && this.g.equals(a.g)
    };
    Ol.prototype.contains = function(a) {
        a = a.H();
        return a >= this.start.H() && a < this.g.H()
    };
    var Sl = function(a, b, c, d, e) {
        M.call(this);
        this.i = b;
        this.s = e || O();
        this.Tb = c;
        this.g = d;
        d.j(Ng(this.i.g));
        L(d, "change", this.qd, !1, this);
        this.kb = a;
        this.rb = new Ik(this);
        this.j = {};
        this.v = {};
        this.va = new Dl(Pl(this.kb));
        a: {
            for (b = 0; b < a.va.length; b++)
                if (a.va[b] === this) break a;a.va.push(this);this.Pc(a);this.register();Ql(a);Rl(a)
        }
    };
    D(Sl, M);
    m = Sl.prototype;
    m.Mb = "CalendarView";
    m.ka = function() {
        this.rb.Ga();
        Sl.Ka.ka.call(this)
    };
    m.getType = function() {
        return this.Tb
    };
    m.qd = function() {
        this.render()
    };
    m.le = function() {
        this.g.s(1)
    };
    m.ke = function() {
        this.g.s(-1)
    };
    m.Ra = function() {
        return new Ol(this.g.i, tg(this.g.o))
    };
    m.render = function() {
        this.va.Dc()
    };
    m.register = function() {
        this.Uc = Lk(this.Jb, this)
    };
    m.Lg = function(a) {
        return 2 != a.lc
    };
    var Ul = function(a, b) {
        var c = a.i.i;
        a = b.ac;
        var d = b.ad || "";
        d && (d = P(d));
        b = Tl(c, new Ol(b.Ea(), b.Ba));
        c = "https://maps.google.com/maps?hl=" + encodeURIComponent("en") + "&q=" + encodeURIComponent(a);
        El && (c = El.replace("{q}", encodeURIComponent(a)).replace("{hl}", "en").replace("{googUrl}", encodeURIComponent(c)));
        b = '<div class="detail-item"><span class="event-details-label">When</span><span class="event-when">' + (Q(b) + "</span></div>");
        a && (b = b + '<div class="detail-item"><span class="event-details-label">Where</span><span class="event-where">' +
            (Q(a) + ' (<a href="' + R(Pj(c)) + '" class="menu-link" target=_blank>'), b += "map</a>)</span></div>");
        if (d) {
            a = b + '<div class="detail-item"><span class="event-details-label">Description</span><span class="event-description">';
            d = Q(d);
            b = String(d);
            if (!(15 > b.length)) {
                c = [];
                for (var e = 0, f = 0, g = 0, h = 0, k = 0; k < b.length; k++) {
                    var l = h;
                    h = b.charCodeAt(k);
                    l = 768 <= h && !$i(l, h);
                    15 <= e && !aj(h) && !l && (c.push(b.substring(g, k), cj), g = k, e = 0);
                    f ? 62 == h && 60 == f ? f = 0 : 59 == h && 38 == f && (f = 0, e++) : 60 == h || 38 == h ? f = h : aj(h) ? e = 0 : 8204 <= h && 8207 >= h || 8234 <= h &&
                        8238 >= h || e++
                }
                c.push(b.substr(g));
                b = c.join("")
            }
            d = null != d && d.Vb === dj ? P(b, pj(d)) : b;
            b = a + (d + "</span></div>")
        }
        return P(b)
    };
    Sl.prototype.Jb = function(a, b) {
        var c = this.j[a];
        a = this.va;
        b = gl(b);
        var d = c.getTitle(),
            e = c.i;
        if (e.getUrl()) {
            var f = Si(e.getUrl()),
                g = c.Ea(),
                h = c.Ba;
            e.getUrl();
            c = e.getType();
            if (1 == c)
                if (1 != e.getType()) f = null;
                else if (f = "http://www.gmodules.com/gadgets/ifr?url=" + encodeURIComponent(e.getUrl()) + "&synd=calendar&w=" + e.j + "&h=" + e.o + "&up_startdate=" + g.ua().toString() + "&up_enddate=" + h.ua().toString() + "&lang=" + "en".replace("_", "-"), g = e.u)
                for (var k in g) k.match(Zj) && (f += "&up_" + k + "=" + encodeURIComponent(g[k]));
            k = 1 == c;
            f =
                new Ib(Gb, f);
            c = P(3 == c ? '<img src="' + R(Rj(f)) + '" class="wc-root">' : "<iframe frameborder=0" + (k ? ' scrolling="no"' : "") + ' src="' + R(oj(f, gj) ? f.getContent() : f instanceof Ib ? Jb(f).toString() : "about:invalid#zSoyz") + '" class="wc-root"></iframe>');
            k = document.body;
            k != a.g && (a.Ia && a.Dc(), a.g = k);
            a.render(b.left, b.top + b.height, e.j, e.o, d, c)
        }
    };
    var Vl = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                a.j[Ka(b[c])] = b[c];
                var d = b[c].getId();
                a.v[d] || (a.v[d] = b[c])
            }
        },
        Wl = function(a, b) {
            var c = kl(a, "margin"),
                d = kl(a, "padding");
            a.style.height = Math.max(1, b - c.top - d.top - c.bottom - d.bottom) + "px"
        },
        Xl = function(a, b) {
            a = a.i.v.g;
            b = Jl(b.getId(), b.g.getId());
            return a + "/r/eventedit/copy/" + b
        },
        Zl = function(a, b, c) {
            var d = a.kb;
            Yl(a.kb, b, function(e) {
                var f;
                if (f = d.j == a) f = a.Ra(), f = f.start.H() <= b.start.H() && f.g.H() >= b.g.H();
                f && c(e)
            })
        };
    Sl.prototype.Xb = function() {
        this.va.Dc()
    };
    var $l = function() {
        Sd.call(this, "j")
    };
    p($l, Sd);
    var am = 0;
    var cm = function(a, b) {
        M.call(this);
        this.key = (am++).toString(36);
        this.u = new M;
        this.v = {};
        this.i = {};
        this.s = !1;
        this.j = 0;
        if (a) {
            var c = ra(a);
            for (a = c.next(); !a.done; a = c.next()) bm(this, a.value, {
                se: !0
            })
        }
        if (b) {
            var d = ra(b);
            for (a = d.next(); !a.done; a = d.next()) bm(this, a.value)
        } else
            for (d in b = this.i, a = this.v, a) b[d] = a[d];
        L(this.u, "change", this.w.bind(this))
    };
    p(cm, M);
    m = cm.prototype;
    m.ka = function() {
        M.prototype.ka.call(this);
        for (var a = ra(dm(this)), b = a.next(); !b.done; b = a.next()) Rd(b.value);
        this.u.Ga()
    };
    m.Ad = function(a) {
        return this.i[a]
    };
    m.contains = function(a) {
        return a in this.i
    };
    m.add = function(a) {
        if (this.contains(a.getKey())) return !1;
        bm(this, a);
        this.j && a.Eb && a.Eb();
        em(this, "k", a);
        return !0
    };
    m.$a = function() {
        return Object.keys(this.i)
    };
    var dm = function(a) {
        return a.$a().map(function(b) {
            return a.i[b]
        })
    };
    cm.prototype.Eb = function() {
        this.j++;
        if (1 === this.j)
            for (var a = ra(dm(this)), b = a.next(); !b.done; b = a.next()) b = b.value, b.Eb && b.Eb()
    };
    var fm = function(a) {
            if (1 === a.j)
                for (var b = ra(dm(a)), c = b.next(); !c.done; c = b.next()) c = c.value, c.Eb && fm(c);
            a.j--;
            gm(a)
        },
        hm = function(a, b, c) {
            a.Eb();
            try {
                b.call(c)
            } finally {
                fm(a)
            }
        },
        em = function(a, b, c) {
            var d = a.o || {};
            b in d || (d[b] = []);
            d[b].push(c);
            a.o = d;
            gm(a)
        };
    cm.prototype.w = function(a) {
        var b;
        if (b = a) b = a.target, b = !(!b || !b.getKey);
        b && (a = a.target, a.getKey(), this.s = !0, em(this, "change", a))
    };
    cm.prototype.equals = function(a) {
        return a === this
    };
    cm.prototype.clone = function() {
        throw Error("C");
    };
    cm.prototype.getKey = function() {
        return this.key
    };
    var gm = function(a) {
            if (!a.j && (a.o || a.s)) {
                a.Eb();
                try {
                    var b = a.s;
                    a.s = !1;
                    if (a.o) {
                        var c = new $l(a.o);
                        a.o = void 0;
                        a.dispatchEvent(c);
                        b = !0
                    }
                    b && a.dispatchEvent("change")
                } finally {
                    fm(a)
                }
            }
        },
        bm = function(a, b, c) {
            c = (void 0 === c ? {
                se: !1
            } : c).se ? a.v : a.i;
            var d = b.getKey();
            c[d] = b;
            b.Pc && b.Pc(a.u)
        };
    Gl();
    var im = function(a, b, c, d, e, f) {
        this.Aa = a;
        this.hb = b;
        this.Ba = c;
        this.Xa = isNaN(b.hour);
        this.Ub = ba(b, c);
        this.jd = !this.Xa && 0 == Bg(c);
        a = b.H();
        b = ba(b, c);
        this.Le = (a << 1) + !b + a % 1;
        this.Ya = null;
        this.sg = d ? d : 0;
        this.Ed = e || {};
        this.fh = f || {};
        this.ue = !1;
        this.Ya = this.Ib = null;
        this.de = this.Cd = "";
        this.Na = Q("");
        this.ac = "";
        this.Zd = 3;
        this.lc = -1
    };
    m = im.prototype;
    m.getId = function() {
        return this.Aa
    };
    m.Ea = function() {
        return this.hb
    };
    m.Ec = function() {
        return this.sg
    };
    m.getTitle = function() {
        return this.Na.getContent()
    };
    m.setTitle = function(a) {
        a = -1 != a.indexOf("&") ? "document" in r ? zc(a) : Bc(a) : a;
        this.Na = Q(a);
        this.Ya = null
    };
    m.equals = function(a) {
        return this == a ? !0 : !!a && a.getId() == this.getId()
    };
    var jm = function(a, b, c) {
        return b.Le - c.Le || c.Ba.H() - b.Ba.H() || a(b, c) || Lb(b.getTitle(), c.getTitle())
    };
    im.prototype.clone = function() {
        var a = new im(this.getId(), this.Ea(), this.Ba, this.Ec(), this.Ed, this.fh);
        a.lc = this.lc;
        a.Cd = this.Cd;
        a.de = this.de;
        a.Xd = this.Xd;
        a.Na = this.Na;
        a.ac = this.ac;
        a.Ya = null;
        a.ad = this.ad || "";
        a.Ya = null;
        var b = this.Xa;
        a.Xa = b;
        a.jd = !b && a.jd;
        a.we = this.we;
        a.Zd = this.Zd;
        a.ue = this.ue;
        a.Ib = this.Ib;
        a.Ya = null;
        return a
    };
    var km = function(a, b, c) {
        im.call(this, a, b, c);
        this.o = [];
        this.i = null;
        this.j = "";
        this.g = null;
        this.tc = !1
    };
    p(km, im);
    var lm = function(a) {
            return a instanceof km ? a.i : null
        },
        mm = function(a, b) {
            return a.g && b.g && Lb(a.g.getTitle(), b.g.getTitle()) || 0
        };
    var nm = function(a, b) {
            return 10 * a.charCodeAt(b) + a.charCodeAt(b + 1) - 528
        },
        om = function(a) {
            var b = parseInt(a, 10),
                c = b % 100;
            b /= 100;
            var d = (b | 0) % 100;
            b = b / 100 | 0;
            return 8 == a.length ? sg(b, d, c) : new zg(b, d, c, nm(a, 9), nm(a, 11), nm(a, 13))
        },
        pm = function(a, b, c) {
            var d = parseInt(a, 10),
                e = nm(a, 5),
                f = nm(a, 8),
                g = a.length;
            if (84 == a.charCodeAt(10)) {
                var h = nm(a, 11),
                    k = nm(a, 14),
                    l = nm(a, 17);
                b || c ? (c = Date.UTC(d, e - 1, f, h, k, l), d = 0, 90 != a.charCodeAt(g - 1) && (d = 60 * nm(a, g - 5) + nm(a, g - 2), d *= 44 - a.charCodeAt(g - 6)), a = (b ? Jg : Ig)(new Date(c - 6E4 * d))) : a = new zg(d,
                    e, f, h, k, l)
            } else a = sg(d, e, f);
            return a
        };
    var qm = sg(1970, 1, 1),
        rm = sg(1970, 1, 2),
        sm = function(a) {
            return a && a.date ? pm(a.date) : a && a.dateTime ? pm(a.dateTime) : null
        };
    var tm = {},
        vm = function(a, b) {
            var c = [a.year, um(a.month), um(a.S)].join("-");
            a = [um(a.hour), um(a.minute), um(a.second)].join(":");
            var d = "";
            if (void 0 !== b) {
                if (0 == b) b = "Z";
                else if (d = tm[b]) b = d;
                else {
                    0 > b ? (d = "-", b *= -1) : d = "+";
                    var e = Math.floor(b / 60);
                    10 > e && (e = "0" + e);
                    b %= 60;
                    b = tm[b] = Dc(d, e, ":", 10 > b ? "0" + b : b)
                }
                d = b
            }
            return Dc(c, "T", a, d)
        },
        um = function(a) {
            return 10 > a ? "0" + a : String(a)
        };
    var wm = function(a, b, c, d, e, f) {
        Gk.call(this, c, b, e, f);
        this.i = a;
        this.j = this.i.g
    };
    D(wm, Gk);
    wm.prototype.g = function(a, b, c) {
        null == b && (b = Ca);
        var d = this.i.s;
        if (null == d) {
            d = this.j.sc(B() + Lg) / 6E4;
            var e = "+";
            0 > d && (e = "-", d = -d);
            d = "GMT" + e + d / 60 + ":" + d % 60
        }
        if (c) {
            e = pm(c);
            var f = this.j.vb();
            e = 27 > rg(Ig(f), e).S
        } else e = !1;
        e = e ? c : void 0;
        d = {
            calendarId: this.getId(),
            singleEvents: !0,
            timeZone: d,
            maxAttendees: 1,
            maxResults: 250,
            updatedMin: e,
            sanitizeHtml: !0
        };
        e = a.start.ua();
        a = a.g.ua();
        f = this.j.sc(B() + Lg) / 6E4;
        e = vm(e.Hb(), f);
        a = vm(a.Hb(), f);
        d.timeMin = e;
        d.timeMax = a;
        xm(this, d, [], null, b, !!c)
    };
    wm.prototype.s = function(a, b, c, d, e, f) {
        if (f && "calendar#events" == f.kind) {
            var g = [],
                h = "freeBusyReader" == f.accessRole,
                k = f.items;
            if (k)
                for (var l = 0; l < k.length; l++) {
                    var n = void 0;
                    var q = k[l];
                    var v = f.defaultReminders;
                    var t = h;
                    var x = q.id;
                    var u = sm(q.start),
                        A = sm(q.end);
                    if (u && A) {
                        A = u.H() == A.H() ? A.i() ? tg(A) : Nl(A.year, A.month, A.S, A.hour, A.minute, A.second + 1).Hb() : A;
                        u = x = new km(x, u, A);
                        A = q.visibility;
                        t = t && "public" != A;
                        var z = q.summary;
                        u.Na = z && !t ? Q(z) : A && "public" != A && "default" != A || t ? Q("busy") : Q("");
                        u.Ya = null;
                        t || void 0 === q.description ||
                            (u.ad = q.description, u.Ya = null);
                        null != q.htmlLink && (x.j = q.htmlLink);
                        void 0 !== q.location && (t = x, t.ac = q.location, t.Ya = null);
                        if (void 0 !== q.attendees) {
                            a: {
                                t = q.attendees;
                                for (u = 0; u < t.length; u++)
                                    if (t[u].self) {
                                        t = t[u];
                                        break a
                                    } t = null
                            }
                            t = t && t.responseStatus;void 0 !== t && (t = Hl[t], t = void 0 !== t ? t : null, null != t && (x.lc = t))
                        }!q.reminders || q.reminders.useDefault ? n = v : q.reminders && q.reminders.overrides && (n = q.reminders.overrides);
                        if (n)
                            for (v = x, t = 0; t < n.length; t++) A = n[t], "popup" == A.method && (u = v, A = A.minutes, z = og(u.Ea()), z.minute -=
                                A, u.o.push(z.Hb()));
                        n = x;
                        void 0 !== q.gadget && (v = q.gadget, void 0 != v.title && (v.title = xc(v.title)), v = new bk(v, n.getTitle()), n.i = v ? v : null)
                    } else x = new km(x, qm, rm);
                    "cancelled" == q.status && (x.tc = !0);
                    x = q = x;
                    x.g = this;
                    n = this.getId();
                    x.Xd = n;
                    x.Ya = null;
                    g.push(q)
                }
            b = b.concat(g);
            g = pm(f.updated, !1, !0);
            c = c ? c.min(g) : g;
            if (f.nextPageToken) a.pageToken = f.nextPageToken, xm(this, a, b, c, d, e);
            else {
                if (e && !a.updatedMin && (a = this.v, f = a.g[this.getId()])) {
                    e = [];
                    for (var C in f.j) e.push(C);
                    f.g = {};
                    f.j = {};
                    for (C = 0; C < e.length; C++) delete a.j[e[C]]
                }
                a =
                    b;
                e = c;
                b = [];
                b.push(String(e.year), "-", eg(e.month), "-", eg(e.S));
                e.i() || b.push("T", eg(e.hour), ":", eg(e.minute), ":", eg(e.second), "Z");
                d(a, b.join(""))
            }
        } else {
            a: {
                if (f && f.error && (C = f.error.data))
                    for (f = 0; f < C.length; f++)
                        if ("updatedMinTooLongAgo" == C[f].reason) {
                            C = !0;
                            break a
                        } C = !1
            }
            C ? (delete a.updatedMin, xm(this, a, b, c, d, e)) : d(null)
        }
    };
    var xm = function(a, b, c, d, e, f) {
        Xj(a.i, "calendars/" + b.calendarId + "/events", {
            params: b
        }, y(a.s, a, b, c, d, e, f))
    };
    var ym = function() {},
        zm = {};
    var Am = function() {};
    D(Am, ym);
    Am.prototype.init = function(a, b) {
        this.i = a;
        this.g = b;
        gapi.config.update("googleapis.config/auth/useFirstPartyAuth", !0);
        void 0 != a.ma && gapi.client.setApiKey(a.ma);
        a = Ui();
        null != a && gapi.config.update("googleapis.config/sessionIndex", a)
    };
    Am.prototype.create = function(a, b, c, d) {
        return new wm(this.i, this.g, a, b, d, c)
    };
    var Bm = function(a, b, c, d) {
        this.g = b;
        this.i = pk(a);
        a = b ? jk(c) : qk(a);
        this.j = b ? a.g : c;
        this.s = d;
        this.o = a || jk(c)
    };
    Bm.prototype.store = function(a, b, c) {
        var d = this.i;
        d = 67 <= d && 90 >= d ? 67 <= d && 90 >= d ? d - 67 + 43 : 1 <= d && 42 >= d ? Bk[d - 1] : d : d;
        var e = "";
        void 0 !== this.s && (e = (this.g ? "1," : "0,") + (this.g ? this.j : this.s) + ",#000000");
        a(d, e);
        b && c.set("goocal.taskscolor", this.j.toLowerCase().replace("#", ""))
    };
    var Cm = function(a) {
        a.g || (a.o = qk(a.i));
        return a.o
    };
    var Dm = function() {
        M.call(this);
        this.V = this.T = this.u = null;
        this.g = this.o = this.i = void 0
    };
    p(Dm, M);
    Dm.prototype.v = function(a, b, c) {
        this.j(c)
    };
    Dm.prototype.j = function(a) {
        this.v(a, a, a)
    };
    Dm.prototype.s = function(a) {
        this.j(wg(0 < a ? this.o : this.i, a))
    };
    Dm.prototype.contains = function(a) {
        a = a.ua();
        return a.H() >= this.i.H() && a.H() <= this.o.H()
    };
    var Em = function(a) {
        return pg(a.o, a.i) + 1
    };
    Dm.prototype.set = function(a, b, c) {
        this.i = a;
        this.o = b;
        this.g = c;
        this.u && this.g.equals(this.V) && this.i.equals(this.u) && this.o.equals(this.T) || (this.u && (this.i.H() > this.u.H() || (this.o.H(), this.T.H())), this.V = this.g, this.u = this.i, this.T = this.o, this.dispatchEvent("change"))
    };
    var Fm = function(a, b) {
        Dm.call(this);
        this.va = a;
        this.w = b
    };
    p(Fm, Dm);
    Fm.prototype.j = function(a) {
        var b = a;
        void 0 !== this.w && (b = xg(a, this.w));
        var c = wg(b, this.va - 1);
        a = a.min(c);
        this.set(b, c, a)
    };
    Fm.prototype.s = function(a) {
        a *= Em(this);
        this.set(wg(this.i, a), wg(this.o, a), wg(this.g, a))
    };
    var Gm = function() {
        Dm.call(this)
    };
    p(Gm, Dm);
    Gm.prototype.j = function(a) {
        var b = a.year,
            c = a.month;
        this.set(sg(b, c, 1), sg(b, c, gg(b, c)), a)
    };
    var Hm = function() {
        Dm.call(this)
    };
    p(Hm, Dm);
    Hm.prototype.v = function(a, b, c) {
        this.w.v(a, b, c)
    };
    Hm.prototype.j = function(a) {
        this.w.j(a)
    };
    Hm.prototype.s = function(a) {
        this.w.s(a)
    };
    var Im = function(a, b) {
        a.w && qe(a.ta);
        a.w = b;
        a.ta = L(b, "change", a.va, !1, a);
        a.va()
    };
    Hm.prototype.va = function() {
        var a = this.w;
        this.set(a.i, a.o, a.g)
    };
    var Jm = function() {
        Dm.call(this)
    };
    p(Jm, Dm);
    Jm.prototype.j = function(a) {
        this.set(a, a, a)
    };
    var Km = function(a, b) {
        this.g = a;
        this.i = b;
        this.j = ""
    };
    Km.prototype.equals = function(a) {
        return null !== a && this.g == a.g && this.i == a.i
    };
    var Lm = function(a) {
        Dm.call(this);
        this.w = a
    };
    p(Lm, Dm);
    Lm.prototype.j = function(a) {
        var b = xg(a, this.w.j);
        this.w.i || (b = yg(b, this.w.s));
        var c = wg(b, this.w.o - 1);
        a = a.min(c).max(b);
        this.set(b, c, a)
    };
    Lm.prototype.s = function(a) {
        this.j(wg(this.g, 7 * a))
    };
    var Mm = function(a) {
            return P('<pre><div class="event-details-inner">' + Q(a.lg) + "</div></pre>")
        },
        Nm = function(a) {
            var b = a.height,
                c = a.id;
            a = a.Fa;
            return P('<div id="agenda' + R(c) + '" class="agenda-scrollboxBoundary agenda"><div id="agendaEventContainer' + R(c) + '" class="scrollbox" style="height:' + R(S(b)) + ';position:relative"><div id="agendaScrollContent' + R(c) + '" style="position:relative"><div id="agenda-underflow-top' + R(c) + '" class="underflow-top"' + ((null == a ? 0 : a.Ca) ? ' style="border-bottom-color:' + R(S(a.Ca)) +
                '"' : "") + '></div><div id="eventContainer' + R(c) + '"> </div></div><div id="agenda-underflow-bottom' + R(c) + '" class="underflow-bot" style="height:100%"> </div></div></div>')
        },
        Om = function(a) {
            var b = a.functionName,
                c = a.after,
                d = a.ye,
                e = a.Fa;
            return P(Q(a.He) + '. <span class="agenda-more" onclick="' + R(Kj(b)) + "(" + (c ? "true" : "false") + ');"' + ((null == e ? 0 : e.linkColor) ? ' style="color:' + R(S(e.linkColor)) + ';"' : "") + ">" + Q(d) + "</span>")
        },
        Pm = function(a) {
            var b = "";
            w(a.Gb);
            a = a.Gb;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                b += Q(null !=
                    e ? e : "")
            }
            return P(b)
        };
    var Qm = function(a, b, c) {
            this.i = Math.max(c, 1);
            this.j = a;
            this.g = b;
            this.g.push(this.i);
            this.o = this.j.length
        },
        Rm = function(a, b, c, d) {
            this.key = a;
            this.i = b;
            this.offset = c;
            this.g = d;
            this.j = this.offset / this.g
        },
        Sm = function(a, b, c) {
            return new Rm(a.j[b], a.j[b + 1], c, a.g[b + 1] - a.g[b] || 1)
        },
        Tm = function(a, b, c) {
            var d = 0,
                e = 0;
            void 0 !== b && (d = db(a.j, b), 0 > d ? (d = -d - 1, d == a.o && (d--, e = a.i - a.g[d])) : c && (e = (a.g[d + 1] - a.g[d]) * c));
            return {
                index: d,
                offset: e
            }
        };
    var Um = function(a, b) {
            return b(a.Ea().H(), a.Ba.H())
        },
        Vm = function(a) {
            a = a.Na;
            return /^[\s\xa0]*$/.test(a.getContent()) ? Q("(No title)") : a
        },
        Wm = function(a) {
            return (a = a.Ed.eventColor) && /^#[0-9a-fA-F]{6}$/.test(a) ? ea(a) : ""
        };
    var Xm = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        },
        Ym = function(a) {
            return a.classList ? a.classList : Xm(a).match(/\S+/g) || []
        },
        Zm = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        },
        $m = function(a, b) {
            a.classList ? b = a.classList.contains(b) : (a = Ym(a), b = 0 <= Qa(a, b));
            return b
        },
        an = function(a, b) {
            if (a.classList) a.classList.add(b);
            else if (!$m(a, b)) {
                var c = Xm(a);
                Zm(a, c + (0 < c.length ? " " + b : b))
            }
        },
        bn = function(a, b) {
            a.classList ?
                a.classList.remove(b) : $m(a, b) && Zm(a, Ta(Ym(a), function(c) {
                    return c != b
                }).join(" "))
        };
    var en = function(a, b, c, d) {
        Sl.call(this, a, b, "agenda", new Jm, a.g);
        this.Db = d || 28;
        this.V = a.u.g;
        this.w = cn(this, this.V);
        this.Mb = "Agenda";
        this.ta = {};
        this.La = !1;
        this.Aa = dn++;
        this.ub = null;
        this.Ha = c;
        this.o = a.o;
        this.Ma = 0;
        this.wa = null
    };
    p(en, Sl);
    m = en.prototype;
    m.le = function() {
        var a = fn(this),
            b = this.s.U("eventContainer" + this.Aa);
        a = a.scrollTop + gn(this);
        b = b.offsetHeight;
        a >= b && (this.T(!0), a = b);
        hn(this, a)
    };
    m.ke = function() {
        var a = fn(this).scrollTop - gn(this);
        0 >= a && (this.T(!1), a = 0);
        hn(this, a)
    };
    m.Ra = function() {
        return new Ol(this.V, this.w)
    };
    m.ld = function() {
        return jn(this.i.i, this.g.g)
    };
    m.qd = function() {
        if (fn(this) && (!this.wa || !this.wa.equals(this.g.g))) {
            var a = this.g.g;
            Ng(this.i.g);
            var b = this.Ra();
            b.start.H() <= a.H() && b.g.H() > a.H() ? (this.wa = a, kn(this).o ? (b = kn(this), a = a.ya(), a = Tm(b, a, void 0), b = Sm(b, a.index, a.offset)) : b = ln(this), mn(this, b, !0, !1)) : (b = new Ol(a, cn(this, a)), this.V = b.start.ua(), this.w = b.g.ua(), Zl(this, b, nn(this, b, !1, !1, !0, !0)))
        }
    };
    m.render = function() {
        Sl.prototype.render.call(this);
        var a = !this.Da;
        Zl(this, this.Ra(), nn(this, this.Ra(), !1, !1, !1, a))
    };
    var nn = function(a, b, c, d, e, f) {
            return function(g) {
                if (!c) {
                    var h = Pl(a.kb);
                    Ok(h, Nm, {
                        height: "200px",
                        id: String(a.Aa),
                        Fa: a.o ? Gd(a.o) : null
                    });
                    var k = fn(a);
                    Wl(k, parseInt(h.style.height, 10));
                    qe(a.ub);
                    a.ub = L(fn(a), "scroll", a.xc, !1, a)
                }
                a.dispatchEvent("g");
                h = b.g;
                k = [];
                var l = b.start;
                c || (a.j = {}, a.v = {});
                Vl(a, g);
                var n = a.Ha,
                    q = a.Uc;
                n.o = a.Tc;
                n.s = q;
                n = f ? 45 : Infinity;
                for (q = Na(jm, mm); l.H() < h.H() && 0 < n;) {
                    var v = void 0,
                        t = a,
                        x = l,
                        u = [];
                    x = mg(x.H(), tg(x).H());
                    t = t.v;
                    for (v in t) {
                        var A = t[v];
                        Um(A, x) && u.push(A)
                    }
                    v = Ta(u, a.Lg, a);
                    v.sort(q);
                    k.push(on(a,
                        l, v));
                    n -= v.length;
                    l = tg(l)
                }
                if (!c || d) a.w = l;
                l = {
                    Gb: k
                };
                a.dispatchEvent("h");
                h = a.s.U("eventContainer" + a.Aa);
                k = G ? h.clientHeight : fl(h).height;
                c ? (l = Pk(Pm, l), d ? h.appendChild(l) : h.insertBefore(l, h.firstChild)) : Ok(h, Pm, l);
                a.u = null;
                c && !d && (h = (G ? h.clientHeight : fl(h).height) - k, k = fn(a), hn(a, k.scrollTop + h));
                a.dispatchEvent("i");
                h = a.i.i;
                k = a.s.U("agenda-underflow-top" + a.Aa);
                Ok(k, Om, {
                    He: "Showing events after " + pn(h, a.V),
                    functionName: a.tb,
                    after: !1,
                    ye: "Look for earlier events",
                    Fa: a.o ? Gd(a.o) : null
                });
                k = qn(a);
                Ok(k, Om, {
                    He: "Showing events until " +
                        pn(h, a.w),
                    functionName: a.tb,
                    after: !0,
                    ye: "Look for more",
                    Fa: a.o ? Gd(a.o) : null
                });
                a.Da || (a.Da = ln(a));
                a.La = !1;
                a.Ha.i(g);
                e ? a.qd() : c || mn(a, a.Da, !0, !0)
            }
        },
        on = function(a, b, c) {
            var d = c.length;
            if (!d) return null;
            for (var e = [], f, g = 0; g < d; g++) {
                var h = c[g];
                f = ["event"];
                0 == g ? f.push("first-event") : g == d - 1 && f.push("last-event");
                e.push(a.Ha.render(h, b, f, a.o))
            }
            e = {
                ig: jn(a.i.i, b),
                hg: b.toString(),
                nc: e,
                Fa: a.o ? Gd(a.o) : null
            };
            b = e.Lb;
            c = e.hg;
            d = e.ig;
            w(e.nc);
            a = e.nc;
            e = e.Fa;
            b = '<div class="day ' + R(null != b ? b : "") + '" id="day-' + R(c) + '"' + ((null ==
                e ? 0 : e.Ca) ? ' style="border-bottom-color:' + R(S(e.Ca)) + '"' : "") + '><div class="date-label"' + (tj(null == e ? null : e.Qb) || tj(null == e ? null : e.Cb) ? ' style="' + ((null == e ? 0 : e.Qb) ? "background-color:" + R(S(e.Qb)) + ";" : "") + ((null == e ? 0 : e.Cb) ? "font-weight:" + R(S(e.Cb)) + ";" : "") + '"' : "") + ">" + Q(d) + "</div>";
            c = a.length;
            for (d = 0; d < c; d++) b += Q(a[d]);
            return P(b + "</div>")
        },
        kn = function(a) {
            if (a.u) return a.u;
            var b = a.kb.g.g;
            if (b.querySelectorAll && b.querySelector) var c = b.querySelectorAll("DIV.day");
            else if (b.getElementsByClassName) {
                b = b.getElementsByClassName("day");
                for (var d = {}, e = c = 0, f; f = b[e]; e++) "DIV" == f.nodeName && (d[c++] = f);
                d.length = c;
                c = d
            } else {
                b = b.getElementsByTagName("DIV");
                d = {};
                for (e = c = 0; f = b[e]; e++) {
                    var g = f.className,
                        h;
                    if (h = "function" == typeof g.split) h = 0 <= Qa(g.split(/\s+/), "day");
                    h && (d[c++] = f)
                }
                d.length = c;
                c = d
            }
            b = [];
            d = [];
            for (g = 0; g < c.length; g++) "none" != c[g].style.display && (e = c[g].id.substring(4), f = Zk(c[g]), b.push(om(e).ya()), d.push(f.g));
            c = Zk(qn(a)).g;
            a.u = new Qm(b, d, c);
            return a.u
        };
    en.prototype.register = function() {
        Sl.prototype.register.call(this);
        this.Tc = Lk(this.Xc, this);
        this.tb = this.rb.g(this.T)
    };
    en.prototype.Xc = function(a, b) {
        var c = parseInt(a.id.substring(0, a.id.lastIndexOf("-")), 10),
            d = this.ta[a.id];
        b = new Td(b);
        if (Wd(b, 0) && !(G && Tc && b.ctrlKey) || Wd(b, 1))
            if (!d && (b.shiftKey || b.o || Wd(b, 1))) {
                b = this.j[c].j;
                b = Si(b);
                var e = Ui();
                if (b && Ri(b) && !Ti(b) && null != e) {
                    var f = b.split("/calendar");
                    b = 2 < f.length ? b : f.join("/calendar/b/" + e)
                }
                b && (b = encodeURI(b), b instanceof Yb || b instanceof Yb || (b = "object" == typeof b && b.yb ? b.wb() : String(b), $b.test(b) || (b = "about:invalid#zClosurez"), b = new Yb(Wb, b)), r.open(Zb(b), "", void 0,
                    void 0));
                b = !0
            } else b = !1;
        else b = !0;
        if (!b) {
            b = this.s.U("details-" + a.id);
            if (d) delete this.ta[a.id], rn(b, a, !1);
            else {
                if (!b.firstChild) {
                    c = this.j[c];
                    d = Ul(this, c);
                    e = c.j;
                    !c.i && e && (e = c.j, c = Xl(this, c), c = P('<a href="' + R(Pj(e)) + '" target="_blank">' + Q("more details") + '&raquo;</a>&nbsp;&nbsp;<a href="' + R(Pj(c)) + '" target="_blank">' + Q("copy to my calendar") + "</a>"), d = P(Q(d) + '<div class="event-links">' + Q(c) + "</div>"));
                    for (Ok(b, Mm, {
                            lg: d
                        }); b.firstChild.firstChild;) b.appendChild(b.firstChild.firstChild);
                    b.removeChild(b.firstChild);
                    rn(b, a, !0);
                    this.ta[a.id] = 1;
                    this.u = null;
                    return
                }
                rn(b, a, !0);
                this.ta[a.id] = 1
            }
            this.u = null
        }
    };
    var rn = function(a, b, c) {
            hl(a, c);
            c ? $m(b, "event-summary") && (bn(b, "event-summary"), an(b, "event-summary-expanded")) : $m(b, "event-summary-expanded") && (bn(b, "event-summary-expanded"), an(b, "event-summary"))
        },
        hn = function(a, b) {
            fn(a).scrollTop = Math.round(b)
        },
        ln = function(a) {
            return new Rm(a.g.g.ya(), void 0, 0, 1)
        },
        mn = function(a, b, c, d) {
            a.Da = b;
            if (c) {
                c = kn(a);
                var e = Tm(c, b.key, b.j);
                c = Ae(c.g[e.index] + e.offset, c.g[0], c.i);
                hn(a, c);
                a.Ma = c
            }
            d && (b = Gg(b.i && 30 > b.g - b.offset ? b.i : b.key), a.wa = b, a.g.j(b))
        };
    en.prototype.xc = function() {
        var a = fn(this),
            b = a.scrollTop,
            c = this.s.U("agendaScrollContent" + this.Aa).offsetHeight;
        if (0 != c && (b + a.clientHeight >= c ? this.T(!0) : 0 == b && this.T(!1), 5 < Math.abs(this.Ma - b))) {
            if (kn(this).o) {
                a = kn(this);
                c = Ae(b, a.g[0], a.i);
                var d = db(a.g, c);
                0 > d ? d = -d - 2 : d == a.o && d && d--;
                a = Sm(a, d, c - a.g[d])
            } else a = ln(this);
            mn(this, a, !1, !0);
            this.Ma = b
        }
    };
    en.prototype.T = function(a) {
        if (!this.La) {
            this.La = !0;
            var b = this.Ra();
            if (a) {
                var c = b.g;
                this.w = b = cn(this, b.g)
            } else c = cn(this, b.start, !0), b = b.start, this.V = c;
            c = new Ol(c, b);
            Zl(this, c, nn(this, c, !0, a, !1, a))
        }
    };
    var cn = function(a, b, c) {
            c = c ? -1 : 1;
            b = wg(b, c * a.Db);
            a = b.year;
            var d = b.month,
                e = sg(a, d, 15);
            return b = 0 > c ? e.H() <= b.H() ? e : sg(a, d, 1) : e.H() >= b.H() ? e : sg(a, d, gg(a, d))
        },
        fn = function(a) {
            return a.s.U("agendaEventContainer" + a.Aa)
        },
        gn = function(a) {
            a = fn(a);
            return parseInt(a.style.height, 10)
        },
        qn = function(a) {
            return a.s.U("agenda-underflow-bottom" + a.Aa)
        },
        dn = 1;
    var sn = function() {
        this.ha = []
    };
    m = sn.prototype;
    m.top = 0;
    m.Bc = 0;
    m.Cc = "px";
    m.edge = "left";
    m.height = "";
    m.width = 100;
    m.Pe = "%";
    m.text = null;
    m.Ng = !1;
    m.Me = function() {
        return Q("")
    };
    var tn = function() {},
        un = function() {};
    un.prototype.o = .5;
    un.prototype.j = !0;
    un.prototype.u = 0;
    var vn = void 0,
        wn = function() {
            if (void 0 !== vn) return vn;
            var a = document.createElement("div");
            a.style.cssText = "visibility:hidden;overflow-y:scroll;position:absolute;top:0;width:100px;height:100px";
            document.body.appendChild(a);
            var b = a.offsetWidth - a.clientWidth;
            if (isNaN(b) || null == b) b = 18;
            vn = b;
            document.body.removeChild(a);
            return vn
        };
    var xn = function(a) {
        return P("<pre>" + Q(a.content) + "</pre>")
    };
    Qh.md();
    var yn = function(a) {
        K.call(this);
        this.j = a;
        this.i = new Ik(this);
        this.Aa = ":" + (Qh.md().g++).toString(36);
        this.g = O(a)
    };
    D(yn, K);
    m = yn.prototype;
    m.Za = null;
    m.bc = null;
    m.Pa = null;
    m.Qe = 0;
    m.Re = 0;
    m.he = !1;
    m.mc = null;
    m.ka = function() {
        this.i.Ga();
        Rd(this.Pa);
        yn.Ka.ka.call(this)
    };
    m.init = function() {
        if (!this.Za) {
            var a = this.i.g(this.ne),
                b = this.Aa,
                c = zn(this, "tl"),
                d = zn(this, "tr"),
                e = zn(this, "bl"),
                f = zn(this, "br");
            var g = P;
            c = '<div style="display:none;z-index:' + R(S(1001)) + '" class="bubble"><table cellpadding=0 cellspacing=0 class="bubble-table"><tr><td class="bubble-cell-side">' + Q(c) + '</td><td class="bubble-cell-main"><div class="bubble-top"></div></td><td class="bubble-cell-side">' + Q(d) + '</td></tr><tr><td colspan=3 class="bubble-mid"><div style="overflow:hidden" id="bubbleContent' +
                R(b) + '"></div></td></tr><tr><td>' + Q(e) + '</td><td><div class="bubble-bottom"></div></td><td>' + Q(f) + '</td></tr></table><div id="bubbleClose' + R(b) + '" class="bubble-closebutton" onclick="' + R(Kj(a)) + '();"></div>';
            a = P('<div class="prong" id="prong' + R(b) + '" onclick="' + R(Kj(a)) + '()"><div class="bubble-sprite"></div></div>');
            g = g(c + a + "</div>");
            this.Za = Qk(g, void 0);
            this.j.appendChild(this.Za);
            this.Za.style.width = "400px";
            this.bc = this.g.U("prong" + this.Aa);
            this.Pa = new Cl(this.Za);
            zl(this.Pa);
            g = this.Pa;
            xl(g);
            g.Ic = !0;
            this.Pa.hd = !1;
            L(this.Pa, "beforehide", y(this.Mf, this));
            L(this.Pa, "hide", y(this.Yd, this))
        }
    };
    m.U = function() {
        return this.Za
    };
    var zn = function(a, b) {
            a = a.Aa;
            return P('<div class="bubble-corner" id="' + R(b) + R(a) + '"><div class="bubble-sprite bubble-' + R(b) + '"></div></div>')
        },
        An = function(a, b) {
            var c = a.left + 10,
                d = a.top + 10;
            return new Rk(c, Math.max(a.left + a.width - 10 - 400, c), Math.max(a.top + a.height - 10 - b, d), d)
        };
    yn.prototype.render = function(a, b, c, d, e, f) {
        var g = this.g.U("bubbleContent" + this.Aa);
        if (g)
            if (c instanceof kj) {
                for (Ok(g, xn, {
                        content: c
                    }); g.firstChild.firstChild;) g.appendChild(g.firstChild.firstChild);
                g.removeChild(g.firstChild)
            } else this.Yd(), Qe(g), this.mc = c, c.render(g), L(this.mc, "change", this.Ae, !1, this);
        hl(this.g.U("bubbleClose" + this.Aa), !e);
        d && ie(this.Pa, "beforehide", d);
        this.Qe = a;
        this.Re = b;
        this.he = !f;
        Bn(this, !0);
        this.Pa.setVisible(!0)
    };
    var Bn = function(a, b) {
        var c = a.Qe,
            d = a.Re;
        a.Za.style.display = "block";
        a.bc.style.display = "block";
        var e = Math.round(160 - .6 * a.bc.offsetWidth),
            f = Je(Le(a.g.g) || window);
        f = new Tk(0, 0, f.width, f.height);
        var g = a.Za.offsetHeight + a.bc.offsetHeight - 1;
        var h = An(f, g);
        g = d - g;
        if (Ae(g, h.top, h.bottom) != g) h = null;
        else {
            var k = c - e;
            h = Ae(k, h.left, h.right) != k ? null : new N(k, g)
        }
        if (h && a.he) a.bc.style.left = e + "px";
        else {
            a.bc.style.display = "none";
            if (!b) return;
            b = a.Za.offsetHeight;
            e = An(f, b);
            c = Ae(c - 200, e.left, e.right);
            b = d - b - 10;
            b < e.top && (b =
                d + 10);
            h = new N(c, Ae(b, e.top, e.bottom))
        }
        a = a.Za;
        d = h.x;
        c = h.g;
        b = cl(a);
        d instanceof N && (c = d.g, d = d.x);
        Yk(a, a.offsetLeft + (d - b.x), a.offsetTop + (Number(c) - b.g))
    };
    m = yn.prototype;
    m.ne = function() {
        this.Pa && this.Pa.setVisible(!1)
    };
    m.Mf = function() {
        F && document.activeElement && Re(this.Za, document.activeElement) && document.body.focus()
    };
    m.Yd = function() {
        pe(this.mc, "change", this.Ae, !1, this);
        Rd(this.mc);
        delete this.mc
    };
    m.isVisible = function() {
        return !(!this.Pa || !this.Pa.isVisible())
    };
    m.$b = function() {
        return !(!this.Pa || !this.Pa.$b())
    };
    m.Ae = function() {
        Bn(this)
    };
    var Cn = function(a) {
            var b = a.Lb,
                c = a.qh,
                d = a.id,
                e = a.wg,
                f = a.Pf;
            a = a.Fa;
            var g = "",
                h = (null == a ? 0 : a.Ca) ? 'style="background-color:' + R(S(a.Ca)) + ';"' : "";
            h = wj(h);
            g += '<div class="calendar-container ' + R(b) + '"' + ((null == a ? 0 : a.fontFamily) ? ' style="font-family:' + R(S(a.fontFamily)) + ';"' : "") + ">" + Q(null != c ? c : "") + '<div class="view-cap t1-embed" ' + Hj(h) + '>&nbsp;</div><div class="view-cap t2-embed" ' + Hj(h) + '>&nbsp;</div><div class="view-container-border" id="calendarContainer' + R(d) + '" ' + Hj(h) + '><div id="viewContainer' + R(d) +
                '" class="view-container"></div>' + Q(e) + '<div id="loading' + R(d) + '" class="loading">';
            g = g + 'Loading...</div></div><div class="view-cap t2-embed" ' + (Hj(h) + '>&nbsp;</div><div class="view-cap t1-embed" ' + Hj(h) + ">&nbsp;</div>" + Q(null != f ? f : "") + "</div>");
            return P(g)
        },
        Dn = function(a) {
            var b = a.ha,
                c = a.th,
                d = a.name,
                e = a.Fa;
            a = "";
            e = -1 != b.indexOf("ui-rtsr-selected") ? tj(null == e ? null : e.Ca) || tj(null == e ? null : e.Cb) ? 'style="' + ((null == e ? 0 : e.Ca) ? "background-color:" + R(S(e.Ca)) + ";" : "") + ((null == e ? 0 : e.Cb) ? "font-weight:" + R(S(e.Cb)) +
                ";" : "") + '"' : "" : -1 != b.indexOf("ui-rtsr-unselected") ? tj(null == e ? null : e.Hd) || tj(null == e ? null : e.linkColor) ? 'style="' + ((null == e ? 0 : e.Hd) ? "background-color:" + R(S(e.Hd)) + ";" : "") + ((null == e ? 0 : e.linkColor) ? "color:" + R(S(e.linkColor)) + ";" : "") + '"' : "" : "";
            e = wj(e);
            a += '<td class="ui-rtsr"><div class="' + R(b) + ' t1-embed" ' + Hj(e) + '>&nbsp;</div><div class="' + R(b) + ' t2-embed" ' + Hj(e) + '>&nbsp;</div><div id="' + R(c) + '" class="' + R(b) + ' ui-rtsr-name" ' + Hj(e) + ">" + Q(d) + "</div></td>";
            return P(a)
        },
        En = function(a) {
            w(a.Ke);
            a = a.Ke;
            for (var b = "<table cellpadding=0 cellspacing=0><tr>", c = a.length, d = 0; d < c; d++) b += Q(a[d]);
            return P(b + "</tr></table>")
        };
    var Fn = function(a) {
        M.call(this);
        this.g = a
    };
    p(Fn, M);
    Fn.prototype.getId = function() {
        return this.g.getId()
    };
    Fn.prototype.getTitle = function() {
        return this.g.getTitle()
    };
    Fn.prototype.setTitle = function(a) {
        this.getTitle() != a && (this.g.setTitle(a), this.dispatchEvent("change"))
    };
    Fn.prototype.getKey = function() {
        return this.getId()
    };
    var Gn = function() {
        cm.call(this);
        this.g = {}
    };
    p(Gn, cm);
    Gn.prototype.Ad = function(a) {
        return cm.prototype.Ad.call(this, a)
    };
    Gn.prototype.ka = function() {
        this.g = null;
        cm.prototype.ka.call(this)
    };
    Gn.prototype.add = function(a, b) {
        this.Eb();
        try {
            var c = cm.prototype.add.call(this, a);
            b || (this.g[a.getId()] = a, em(this, "m", a));
            return c
        } finally {
            fm(this)
        }
    };
    Gn.prototype.T = function(a, b) {
        "string" !== typeof a && (a = a.getId());
        var c = this.g[a],
            d = !!c != b;
        b ? (c = this.Ad(a), this.g[a] = c) : delete this.g[a];
        d && em(this, "m", c)
    };
    var Hn = function(a, b) {
        "string" !== typeof b && (b = b.getId());
        return b in a.g
    };
    var In = function(a, b, c) {
        this.j = a;
        this.i = b;
        this.o = c
    };
    D(In, nl);
    In.prototype.g = function(a, b, c) {
        sl(this.j, this.i, a, b, c, this.o)
    };
    var Jn = function(a, b) {
        b = b || O();
        var c = b.i("DIV", {
            style: "position:absolute;display:none;z-index:25000003"
        });
        b.g.body.appendChild(c);
        Cl.call(this, c);
        this.v = a;
        zl(this)
    };
    p(Jn, Cl);
    Jn.prototype.w = function() {
        this.setVisible(!1);
        if (!this.$b()) {
            var a = this.U(),
                b = this.v,
                c = b.id,
                d = dm(b.list);
            var e = [];
            for (var f = 0; f < d.length; ++f) {
                var g = d[f].g,
                    h = g.getId(),
                    k = ++Kn;
                e.push(Ln({
                    id: b.id,
                    Qf: k,
                    Vf: h,
                    checked: Hn(b.list, h),
                    titleColor: g.o.g,
                    name: g.getTitle(),
                    Yg: b.g
                }))
            }
            w(e);
            b = '<div id="calendarList' + R(c) + '" class="calendar-list">';
            c = e.length;
            for (d = 0; d < c; d++) b += Q(e[d]);
            e = P(b + "</div>");
            wc(a, Mk(e));
            this.setVisible(!0)
        }
    };
    var Ln = function(a) {
        var b = a.Qf,
            c = a.id,
            d = a.Vf,
            e = a.Yg,
            f = a.checked,
            g = a.titleColor;
        a = a.name;
        return P('<div class="calendar-row"><label for="cal' + R(b) + "checkbox" + R(c) + '"><input type="checkbox" name="calVisibility' + R(c) + '" id="cal' + R(b) + "checkbox" + R(c) + '" value="' + R(d) + '" onclick="' + R(Kj(e)) + '(value, this.checked);"' + (f ? " checked" : "") + '><span style="color: ' + R(S(g)) + '">' + Q(a) + "</span></label></div>")
    };
    var Nn = function(a) {
            this.list = a;
            this.id = Mn++;
            this.g = Lk(this.list.T, this.list)
        },
        Kn = 0,
        Mn = 0,
        On = function(a) {
            Nn.call(this, a)
        };
    D(On, Nn);
    var Pn = function(a) {
        return P('<div id="dpPopup' + R(a.id) + '" class="dp-popup" style="display: none;"></div>')
    };
    var ko = function(a) {
            var b = a.Tf,
                c = a.className,
                d = a.ih,
                e = a.id,
                f = a.Qa,
                g = a.Ug,
                h = a.Gg,
                k = a.nb,
                l = a.summary;
            w(a.ee);
            var n = a.ee;
            w(a.rows);
            a = a.rows;
            c = '<div class="' + R(c) + 'monthtablediv monthtableSpace"><table class="' + R(c) + 'monthtable" role="presentation" cellspacing=0 cellpadding=0 style="-moz-user-select:none;-webkit-user-select:none;">' + (d ? '<tr id="' + R(e) + 'header" class="monthtableHeader"><td colspan=' + Fj(f - 2) + ' id="' + R(g) + '" class="' + R(b) + 'sb-cur">' + (h ? '<span class="h zippy-arrow" unselectable=on>&nbsp;</span>' :
                    "") + '<span class="calHeaderSpace">' + Q(k) + '</span></td><td colspan=2 class="' + R(b) + 'sb-nav"><span id="' + R(e) + 'prev" class="' + R(b) + "sb-prev " + R("VIpgJd-TzA9Ye-eEGnhe") + '"></span><span id="' + R(e) + 'next" class="' + R(b) + "sb-next " + R("VIpgJd-TzA9Ye-eEGnhe") + '"></span></td></tr>' : '<tr class="' + R(b) + 'heading" id="' + R(e) + 'header"><td id="' + R(e) + 'prev" class="' + R(b) + 'prev">&laquo;</td><td colspan=' + Fj(f - 2) + ' id="' + R(g) + '" class="' + R(b) + 'cur">' + Q(k) + '</td><td id="' + R(e) + 'next" class="' + R(b) + 'next">&raquo;</td></tr>') +
                '</table><table class="' + R(c) + 'monthtable monthtableBody" summary="' + R(l) + '" cellspacing=0 cellpadding=0 id="' + R(e) + 'tbl" style="-moz-user-select:none;-webkit-user-select:none;"><colgroup span=7><tr class="' + R(c) + 'days">';
            d = n.length;
            for (e = 0; e < d; e++) f = n[e], c += '<th scope="col" class="' + R(b) + "dayh" + (f.yh ? " " + R(b) + "weekendh" : "") + '" title="' + R(f.title) + '">' + Q(f.Hc) + "</th>";
            c += "</tr>";
            b = a.length;
            for (n = 0; n < b; n++) c += Q(a[n]);
            return P(c + "</table></div>")
        },
        lo = function(a) {
            var b = a.id;
            w(a.cols);
            var c = a.cols;
            a =
                '<tr style="cursor:' + (a.Hg ? "pointer" : "default") + '" id="' + R(b) + '">';
            b = c.length;
            for (var d = 0; d < b; d++) {
                var e = c[d];
                a += '<td id="' + R(e.id) + '" class="' + R(e.className) + '">' + Q(e.S) + "</td>"
            }
            return P(a + "</tr>")
        };
    var no = function(a, b, c, d, e, f, g, h, k, l) {
        M.call(this);
        this.w = d;
        this.s = a;
        this.id = e || this.s.id + "_";
        this.className = f || "dp-";
        this.Ha = c;
        this.j = b;
        this.v = {};
        a = void 0 !== g ? g : 1;
        h = (1 << a + 7) - (1 << a + (h || 5));
        this.Ma = h + (h >> 7);
        this.Db = !!k;
        this.tb = !!l;
        this.wa = new fh(this);
        k = Na(Rd, this.wa);
        this.W ? k() : (this.ma || (this.ma = []), this.ma.push(k));
        mo[this.id] = this
    };
    p(no, M);
    no.prototype.render = function() {
        if (this.o) {
            var a = this.g;
            if (!this.i) {
                this.ta = [];
                for (var b = 7; b--;) this.ta[b] = oo(oo(this.j.g.o[b], !1), "ru" == H(this.j.g.g, 1));
                b = this.className;
                for (var c = [], d = 48; d--;) {
                    var e = ["cell"];
                    d & 2 ? (e.push(d & 1 ? "weekend-selected" : "weekday-selected"), d & 8 && e.push("today-selected"), e.push(d & 4 ? "onmonth-selected" : "offmonth-selected")) : (e.push(d & 1 ? "weekend" : "weekday"), d & 8 && e.push("today"), e.push(d & 4 ? "onmonth" : "offmonth"));
                    d & 16 && e.push("day-left");
                    d & 32 && e.push("day-right");
                    c[d] = b + e.join(" " +
                        b) + " "
                }
                this.va = c;
                this.u = [];
                this.i = this.id + "day_";
                this.T = this.id + "cur"
            }
            var f = po(this.j, this.g.nb);
            this.Tb && (f = this.Tb + " - " + f);
            b = [];
            c = this.g.j;
            d = this.Ma;
            for (e = 0; e < a.Qa; e++) b.push({
                title: oo(this.j.g.j[c], !1),
                yh: d >> c & 1,
                Hc: this.ta[c]
            }), c = (c + 1) % 7;
            a = this.s;
            c = this.className + "cell " + this.className;
            d = this.className;
            e = this.Db;
            var g = this.id,
                h = this.g.Qa,
                k = this.T,
                l = this.tb,
                n = po(this.j, this.g.nb),
                q = this.g,
                v = q.Qa,
                t = this.Ma,
                x = this.va,
                u = qo(q),
                A = !!this.V,
                z = A ? this.V.ya() : 1,
                C = A ? this.La.ya() : 0,
                J = this.Da.ya(),
                ma = this.g.nb.month,
                U = 0;
            this.rb && (this.v = this.rb(q));
            for (var Ac = [], Wa = 0; Wa < this.g.ab; Wa++) {
                for (var ya = [], qa = q.j, ka = v; ka--; U++) {
                    var mb = u[U],
                        Db = (mb == J && 8) | ((mb >> 5 & 15) == ma && 4) | (mb >= z && mb <= C && 2) | (ka == v - 1 && 16) | (0 == ka && 32) | t >> qa & 1;
                    qa = (qa + 1) % 7;
                    this.u[U] = Db;
                    ya.push({
                        id: this.i + mb,
                        S: mb & 31,
                        className: x[Db] + (this.v[mb] || "")
                    })
                }
                Ac.push(lo({
                    id: this.id + "row_" + Wa,
                    Hg: A,
                    cols: ya
                }))
            }
            Ok(a, ko, {
                Tf: c,
                className: d,
                ih: e,
                id: g,
                Qa: h,
                Ug: k,
                Gg: l,
                nb: n,
                summary: f,
                ee: b,
                rows: Ac
            });
            this.wa.listen(this.w(this.id + "prev"), "mousedown", this.Jb).listen(this.w(this.id +
                "next"), "mousedown", this.ub)
        }
    };
    no.prototype.Jb = function() {
        ro(mo[this.id], -1);
        this.dispatchEvent("n")
    };
    no.prototype.ub = function() {
        ro(mo[this.id], 1);
        this.dispatchEvent("o")
    };
    var so = function(a, b) {
            return (b = b.id) && 0 == b.indexOf(a.i) ? Gg(parseInt(b.substr(a.i.length), 10)) : null
        },
        to = function(a, b) {
            return a.w(a.i + b)
        };
    no.prototype.U = function() {
        return this.s
    };
    var ro = function(a, b) {
            uo(a, vg(a.g.nb.year, a.g.nb.month + b, 1).ua())
        },
        uo = function(a, b) {
            var c = a.g.nb;
            if (b.year != c.year || b.month != c.month) a.g = vo(b, a.Ha.g), a.update()
        };
    no.prototype.update = function() {
        this.o && this.render()
    };
    no.prototype.getId = function() {
        return this.id
    };
    no.prototype.show = function() {
        this.o = !0;
        this.render()
    };
    no.prototype.isVisible = function() {
        return this.o
    };
    var wo = function(a, b, c, d) {
        a.V = b;
        a.La = c;
        d && uo(a, d);
        if (a.o) {
            d = qo(a.g);
            b = b.ya();
            c = c.ya();
            for (var e = a.g.s; e--;) {
                var f = a.u[e],
                    g = d[e],
                    h = g >= b && g <= c ? f | 2 : f & -3;
                h != f && (f = e, to(a, qo(a.g)[f]).className = a.va[h] + (a.v[g] || ""), a.u[e] = h)
            }
        } else a.update()
    };
    no.prototype.setup = function(a) {
        this.Da = a;
        this.g ? this.update() : this.g = vo(a, this.Ha.g)
    };
    no.prototype.ka = function() {
        delete this.s;
        delete mo[this.id];
        M.prototype.ka.call(this)
    };
    var mo = {};
    no.prototype.o = !1;
    no.prototype.V = null;
    no.prototype.La = null;
    var xo = function(a, b, c, d, e) {
        M.call(this);
        this.i = c;
        this.g = a;
        a.setup(Ng(b));
        wo(a, this.i.i, this.i.o, this.i.g);
        this.j = new fh(this);
        this.j.listen(c, "change", this.qe);
        this.j.listen(a.U(), "mousedown", this.Dg);
        this.j.listen(a.U(), "mouseover", this.Eg);
        this.j.listen(a.U(), "mouseout", this.zg);
        this.j.listen(b, "newday", this.Ag);
        this.j.listen(a, "n", function() {
            this.dispatchEvent("n")
        });
        this.j.listen(a, "o", function() {
            this.dispatchEvent("o")
        });
        this.o = new fh(this);
        this.v = b;
        this.u = !!d;
        this.s = !!e
    };
    p(xo, M);
    m = xo.prototype;
    m.yg = function(a) {
        var b = so(this.g, a.target),
            c = this.Wb;
        b && c && !(this.Ac || c).equals(b) && (this.Ac = b, this.s || this.i.v(c.min(b), c.max(b), b));
        a.preventDefault()
    };
    m.Dg = function(a) {
        var b = a.target,
            c = so(this.g, b);
        c ? (this.Wb = c, this.u && this.i.j(c), b = this.g.U().ownerDocument, this.o.listen(b, "mousemove", this.yg), this.o.listen(b, "mouseup", this.Fg)) : (c = this.g, (c.T == b.id || b.parentNode && c.T == b.parentNode.id) && this.dispatchEvent("q"));
        a.preventDefault()
    };
    m.kh = function() {
        var a = !1,
            b = this.Wb;
        b && (kh(this.o), this.Wb = null, this.Ac ? (a = !this.s, this.Ac = null) : (this.u ? this.qe() : this.i.j(b), a = !0));
        a && this.dispatchEvent("p")
    };
    m.Eg = function(a) {
        if ((a = so(this.g, a.target)) && null == this.Wb) {
            var b = this.g;
            an(to(b, a.ya()), b.className + "onhover")
        }
    };
    m.zg = function(a) {
        if (a = so(this.g, a.target)) {
            var b = this.g;
            bn(to(b, a.ya()), b.className + "onhover")
        }
    };
    m.qe = function() {
        var a = void 0;
        null == this.Wb && (a = this.i.g);
        wo(this.g, this.i.i, this.i.o, a)
    };
    m.Ag = function() {
        var a = this.g,
            b = Ng(this.v);
        a.Da = b;
        a.update()
    };
    m.ka = function() {
        Rd(this.j);
        Rd(null);
        Rd(this.o);
        Rd(this.g);
        M.prototype.ka.call(this)
    };
    m.show = function() {
        this.g.show()
    };
    m.isVisible = function() {
        return this.g.isVisible()
    };
    m.Wb = null;
    m.Ac = null;
    m.Fg = xo.prototype.kh;
    var yo = function(a, b, c, d, e, f) {
        K.call(this);
        var g = O(a);
        f = Pk(Pn, {
            id: f || ""
        }, void 0, g);
        this.o = b;
        a = a.appendChild(f);
        this.j = new xo(new no(a, this.o, d, y(g.U, g)), c, e, !0);
        L(this.j, "p", this.Cg, !1, this);
        this.j.show();
        this.g = new Cl(a);
        zl(this.g);
        c = this.g;
        xl(c);
        c.Ic = !0;
        this.i = a
    };
    p(yo, K);
    m = yo.prototype;
    m.ka = function() {
        this.g && (this.g.Ga(), this.g = null);
        this.i = null
    };
    m.setVisible = function(a) {
        this.g.setVisible(a)
    };
    m.$b = function() {
        return this.g.$b()
    };
    m.Cg = function() {
        this.setVisible(!1)
    };
    m.U = function() {
        return this.i
    };
    var zo = function(a, b, c, d, e) {
            this.nb = a;
            this.i = b;
            this.j = b.Wa();
            this.ab = c;
            this.Qa = d;
            this.g = e || 7;
            this.s = this.ab * this.Qa
        },
        qo = function(a) {
            var b;
            if (!(b = a.o)) {
                b = a.i.ya();
                for (var c = a.Qa, d = a.g, e = [], f = 0, g = 0; g < a.ab; g++) {
                    for (var h = 0; h < c; h++) e[f++] = b, b = aa(b);
                    for (; h < d; h++) b = aa(b)
                }
                b = a.o = e
            }
            return b
        };
    zo.prototype.equals = function(a) {
        return this.nb.equals(a.nb) && this.i.equals(a.i) && this.ab == a.ab && this.Qa == a.Qa && this.g == a.g
    };
    var vo = function(a, b) {
            var c = og(a);
            c.S = gg(a.year, a.month);
            b = (c.ua().Wa() - b + 7) % 7;
            c.S -= b + 35;
            return new zo(a, c.ua(), 7, 7)
        },
        Ao = function() {},
        Bo = function(a) {
            this.g = a
        };
    D(Bo, Ao);
    var Co;
    ob("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var Do = function() {},
        ih = new Do,
        Eo = ["click", "keydown", "keyup"];
    Do.prototype.listen = function(a, b, c, d, e) {
        var f = function(g) {
            var h = je(b),
                k = g.target;
            k = Ha(k) && 1 == k.nodeType ? g.target.getAttribute("role") || null : null;
            "click" != g.type || !Wd(g, 0) || G && Tc && g.ctrlKey ? 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != k && "tab" != k || (h.call(d, g), g.preventDefault()) : (g.type = "keypress", h.call(d, g)) : h.call(d, g)
        };
        f.yd = b;
        f.dh = d;
        e ? e.listen(a, Eo, f, c) : L(a, Eo, f, c)
    };
    Do.prototype.wc = function(a, b, c, d, e) {
        for (var f, g = 0; f = Eo[g]; g++) {
            var h = a;
            var k = f;
            var l = !!c;
            k = Yd(h) ? h.Fc(k, l) : h ? (h = le(h)) ? h.Fc(k, l) : [] : [];
            for (h = 0; l = k[h]; h++) {
                var n = l.listener;
                if (n.yd == b && n.dh == d) {
                    e ? e.wc(a, f, l.listener, c, d) : pe(a, f, l.listener, c, d);
                    break
                }
            }
        }
    };
    var Fo = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var Go = function(a, b, c, d, e, f, g, h, k) {
        this.g = a;
        this.v = b;
        this.ma = c;
        this.j = d;
        this.o = e;
        this.s = f;
        this.u = g;
        this.W = h;
        this.i = k
    };
    Go.prototype.getKey = function() {
        return this.v
    };
    var Mo = function(a) {
            var b = a.g;
            b = (b = b && "composed" in b && b && "composedPath" in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
            return Ho(Io(Jo(Ko((new Lo).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
                return a.preventDefault()
            }), function() {
                return a.stopPropagation()
            }))
        },
        Lo = function() {
            this.j = null;
            this.o = "";
            this.w = this.u = this.v = this.ma = this.s = this.i = this.g = this.W = null
        };
    m = Lo.prototype;
    m.keyCode = function(a) {
        this.j = a;
        return this
    };
    m.key = function(a) {
        this.o = a;
        return this
    };
    m.shiftKey = function(a) {
        this.W = a;
        return this
    };
    m.altKey = function(a) {
        this.g = a;
        return this
    };
    m.ctrlKey = function(a) {
        this.i = a;
        return this
    };
    m.metaKey = function(a) {
        this.s = a;
        return this
    };
    m.target = function(a) {
        this.ma = a;
        return this
    };
    var Ko = function(a, b) {
            a.v = b;
            return a
        },
        Jo = function(a, b) {
            a.u = b;
            return a
        },
        Io = function(a, b) {
            a.w = b;
            return a
        },
        Ho = function(a) {
            return new Go(a.j, a.o, a.W, a.g, a.i, a.s, a.ma, a.v, a.u)
        };
    var Po = function(a) {
            M.call(this);
            this.j = this.o = {};
            this.u = 0;
            this.Da = ob(No);
            this.Ha = ob(Oo);
            this.v = null;
            this.g = a;
            L(this.g, "keydown", this.w, void 0, this);
            L(this.g, "synthetic-keydown", this.V, void 0, this);
            Uc && (L(this.g, "keypress", this.ta, void 0, this), L(this.g, "synthetic-keypress", this.wa, void 0, this));
            L(this.g, "keyup", this.T, void 0, this);
            L(this.g, "synthetic-keyup", this.va, void 0, this)
        },
        Qo;
    D(Po, M);
    var Ro = function(a) {
            this.g = a || null;
            this.next = a ? null : {}
        },
        No = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        Oo = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
    Po.prototype.i = function(a, b) {
        So(this.o, To(arguments), a)
    };
    var To = function(a) {
        if ("string" === typeof a[1]) a = Ua(Uo(a[1]), function(d) {
            return Vo(d.key || "", d.keyCode, d.Rg)
        });
        else {
            var b = a,
                c = 1;
            w(a[1]) && (b = a[1], c = 0);
            for (a = []; c < b.length; c += 2) a.push(Vo("", b[c], b[c + 1]))
        }
        return a
    };
    Po.prototype.ka = function() {
        Po.Ka.ka.call(this);
        this.o = {};
        pe(this.g, "keydown", this.w, !1, this);
        pe(this.g, "synthetic-keydown", this.V, !1, this);
        Uc && (pe(this.g, "keypress", this.ta, !1, this), pe(this.g, "synthetic-keypress", this.wa, !1, this));
        pe(this.g, "keyup", this.T, !1, this);
        pe(this.g, "synthetic-keyup", this.va, !1, this);
        this.g = null
    };
    Po.prototype.Ec = function() {
        return "shortcut_undefined"
    };
    var Uo = function(a) {
        a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
        a = a.split(" ");
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var e = c.split("+"),
                f = null,
                g = null;
            c = 0;
            for (var h, k = 0; h = e[k]; k++) {
                switch (h) {
                    case "shift":
                        c |= 1;
                        continue;
                    case "ctrl":
                        c |= 2;
                        continue;
                    case "alt":
                        c |= 4;
                        continue;
                    case "meta":
                        c |= 8;
                        continue
                }
                e = void 0;
                f = h;
                if (!Qo) {
                    g = {};
                    for (e in Fo) g[Fo[e]] = ul(parseInt(e, 10));
                    Qo = g
                }
                g = Qo[f];
                f = h;
                break
            }
            b.push({
                key: f,
                keyCode: g,
                Rg: c
            })
        }
        return b
    };
    Po.prototype.T = function(a) {
        a = Mo(a);
        Sc && Wo(this, a);
        Uc && !this.s && Xo(a) && Yo(this, a, !0)
    };
    Po.prototype.va = function(a) {
        a = a.g();
        Sc && Wo(this, a);
        Uc && !this.s && Xo(a) && Yo(this, a, !0)
    };
    var Wo = function(a, b) {
            32 == a.v && 32 == b.g && (0, b.i)();
            a.v = null
        },
        Xo = function(a) {
            return Uc && a.o && a.j
        };
    Po.prototype.ta = function(a) {
        a = Mo(a);
        32 < a.g && Xo(a) && (this.s = !0)
    };
    Po.prototype.wa = function(a) {
        a = a.g();
        32 < a.g && Xo(a) && (this.s = !0)
    };
    var So = function(a, b, c) {
            var d = b.shift();
            Ra(d, function(e) {
                if ((e = a[e]) && (0 == b.length || e.g)) throw Error("D");
            });
            b.length ? Ra(d, function(e) {
                e = e.toString();
                var f = new Ro;
                e = e in a ? a[e] : a[e] = f;
                So(e.next, b.slice(0), c)
            }) : Ra(d, function(e) {
                a[e] = new Ro(c)
            })
        },
        Zo = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (d) return d
            }
        },
        Vo = function(a, b, c) {
            c = c || 0;
            b = ["c_" + b + "_" + c];
            "" != a && b.push("n_" + a + "_" + c);
            return b
        };
    Po.prototype.w = function(a) {
        Yo(this, Mo(a))
    };
    Po.prototype.V = function(a) {
        Yo(this, a.g())
    };
    var Yo = function(a, b, c) {
            a: {
                var d = b.g;
                if ("" != b.getKey()) {
                    var e = b.getKey();
                    if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                        d = !1;
                        break a
                    }
                } else if (16 == d || 17 == d || 18 == d) {
                    d = !1;
                    break a
                }
                e = b.W;
                var f = "TEXTAREA" == e.tagName || "INPUT" == e.tagName || "BUTTON" == e.tagName || "SELECT" == e.tagName,
                    g = !f && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);d = !f && !g || a.Da[d] ? !0 : g ? !1 : b.j || b.o || b.s ? !0 : "INPUT" == e.tagName && a.Ha[e.type] ? 13 == d : "INPUT" == e.tagName || "BUTTON" == e.tagName ? 32 != d : !1
            }
            d && (!c && Xo(b) ?
                a.s = !1 : (c = ul(b.g), d = b.getKey(), d = Vo(d, c, (b.ma ? 1 : 0) | (b.o ? 2 : 0) | (b.j ? 4 : 0) | (b.s ? 8 : 0)), (e = Zo(a.j, d)) && (e = !(1500 <= B() - a.u)), e || (a.j = a.o, a.u = B()), (e = Zo(a.j, d)) && e.next && (a.j = e.next, a.u = B()), e && (e.next ? (0, b.i)() : (a.j = a.o, a.u = B(), (0, b.i)(), d = e.g, e = a.dispatchEvent(new $o("shortcut", d, b.u)), (e &= a.dispatchEvent(new $o("shortcut_" + d, d, b.u))) || (0, b.i)(), Sc && (a.v = c)))))
        },
        $o = function(a, b, c) {
            Sd.call(this, a, c);
            this.g = b
        };
    D($o, Sd);
    var ep = function(a, b, c, d, e) {
        M.call(this);
        this.i = b;
        b = e || {};
        for (var f in ap) f in b || (b[f] = ap[f]);
        this.ta = a;
        this.g = O(a);
        this.v = c;
        this.va = [];
        this.j = null;
        this.T = b.showNavigation;
        this.Da = b.showTabs;
        this.rb = b.showPrintButton;
        this.w = b.showDateMarker;
        this.Ma = b.showCalendarMenu;
        this.rf = b.showCurrentTime;
        this.Cf = b.showTz;
        this.Tb = b.showSubscribeButton;
        this.sf = b.showElementsLogo;
        if (b.embedStyle) try {
            var g = sd(b.embedStyle);
            this.o = new Fd(g ? JSON.parse(g) : null)
        } catch (v) {}
        this.id = String(bp++);
        this.tb = new Ik(this);
        this.tb.g(this.Rb);
        this.s = new fh(this);
        this.V = d;
        L(this.V, "j", this.Xc, !1, this);
        this.Ha = null;
        L(this.i.g, "newday", this.xg, !1, this);
        this.u = new Hm;
        a = new Jm;
        a.j(Ng(this.i.g));
        Im(this.u, a);
        a = {};
        c = this.id;
        d = this.nf();
        c = P('<div class="header" id="nav' + R(c) + '" style="overflow:hidden;' + (d ? "" : "display:none;") + '">&nbsp;</div>');
        a.qh = c;
        a.Pf = null;
        c = [];
        F && (c.push("ie"), fd("8") ? c.push("ie8") : fd("7") ? c.push("ie7") : c.push("ie6"));
        a.Lb = c.join(" ");
        c = "";
        this.sf ? (c = this.i.Ob, c = P(F && 7 > ed ? '<td valign="bottom" align="' + R("right") + '"><a target="_blank" href="http://www.google.com/webelements"><span style="width:130px;height:20px;display:inline-block;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' +
            R(S(c)) + 'gwe.png,sizingMethod=crop)"></span></a></td>' : '<td valign="bottom"><a target="_blank" href="http://www.google.com/webelements"><img align="' + R("right") + '" src="' + R(Rj(c)) + 'gwe.png" width="130" height="20" border="0"></a></td>')) : this.Tb && (c = '<td valign="bottom" style="text-align:right;"><div class="subscribe-image" style="display:inline-block;" id="' + R({
                lh: "subscribe-id",
                Ob: this.i.Ob
            }.lh) + '" title="' + R("Add to Google Calendar") + '">' + P('<div class="logo-plus-button"><div class="logo-plus-button-plus-icon"></div><div class="logo-plus-button-lockup"><span class="logo-plus-button-lockup-text">Calendar</span></div></div>') +
            "</div></td>", c = P(c));
        d = "";
        this.Cf && (d = P('<td valign="bottom" id="timezone">' + Q({
            tz: this.i.s ? "Events shown in time zone: " + this.i.w : "Events shown in your computer's time zone"
        }.tz) + "</td>"));
        a.id = this.id;
        c = P('<table id="footer' + R(this.id) + '" class="footer" cellpadding="0" cellspacing="0" width="100%"><tr>' + Q(d) + Q(c) + "</tr></table>");
        a.wg = c;
        this.o && (a.Fa = Gd(this.o));
        Ok(this.ta, Cn, a);
        a = this.g.U("nav" + this.id);
        var h;
        e = this.T;
        g = this.rb;
        c = this.Ma;
        d = this.id;
        f = this.i.Ob;
        var k;
        if (this.w) {
            var l = this.id;
            var n =
                this.o ? Gd(this.o) : null;
            l = P('<td id="dateEditableBox' + R(l) + '" class="date-picker-off"><div class="date-top" id="currentDate' + R(l) + '"' + (tj(null == n ? null : n.fontFamily) || tj(null == n ? null : n.Cb) ? ' style="' + ((null == n ? 0 : n.fontFamily) ? "font-family:" + R(S(n.fontFamily)) + ";" : "") + ((null == n ? 0 : n.Cb) ? "font-weight:" + R(S(n.Cb)) + ";" : "") + '"' : "") + ">&nbsp;</div></td>");
            n = this.id;
            var q = this.i.Ob;
            n = P('<td id="dateMenuArrow' + R(n) + '" class="date-picker-off"><img src="' + R(Rj(q)) + 'menu_arrow_open.gif" id="arrowImg' + R(n) + '" class="arrowImg" width=9 height=9></td>')
        }
        this.o &&
            (k = Gd(this.o));
        e ? (k = '<td class="date-nav-buttons"><button class="today-button" id="todayButton' + R(d) + '"' + ((null == k ? 0 : k.fontFamily) ? ' style="font-family:' + R(S(k.fontFamily)) + ';"' : "") + ">", k += "Today", q = '</button><img id="navBack' + R(d) + '" role=button tabindex=0 title="' + R("Previous period") + '" src="//calendar.google.com/googlecalendar/images/blank.gif" width=22 height=17 class="navbutton navBack"><img id="navForward' + R(d) + '" role=button tabindex=0 title="', k += q + R("Next period") + '" src="//calendar.google.com/googlecalendar/images/blank.gif" width=22 height=17 class="navbutton navForward"></td>',
            k = P(k)) : k = "";
        k = '<div class="date-controls"><table class="nav-table" cellpadding="0" cellspacing="0" border="0"><tr>' + k + Q(null != l ? l : "") + (e ? Q(null != n ? n : "") : "") + '<td class="navSpacer">&nbsp;</td>';
        g && (k += '<td id="' + R("td-print-image-id") + '"><img src="' + R(Rj(f)) + 'icon_print.gif" style="cursor: pointer;" width="16" height="16" title="', k += "Print my calendar (shows preview)".replace(Bj, Cj), k += '"></td><td id="' + R("td-print-text-id") + '"><div class="tab-name">', k += "Print</div></td>");
        l = '<td id="calendarTabs' +
            R(d) + '"></td>';
        c ? h = P('<td class="calendar-nav"><img id="calendarListButton' + R(d) + '" src="' + R(Rj(f)) + 'btn_menu6.gif" alt="" title="" width=15 height=14></td>') : h = "";
        h = P(k + (l + h + "</tr></table></div>"));
        wc(a, Mk(h));
        this.T && (kh(this.s), h = this.g, jh(this.s, h.U("navBack" + this.id), this.ie), jh(this.s, h.U("navForward" + this.id), this.je), jh(this.s, h.U("todayButton" + this.id), this.ze), this.w && this.T && (this.s.listen(h.U("dateMenuArrow" + this.id), ["mouseover", "mouseout", "mousedown"], this.ub), this.s.listen(h.U("dateEditableBox" +
            this.id), ["mouseover", "mouseout", "mousedown"], this.ub)), this.rb && (this.s.listen(h.U("td-print-text-id"), ["click"], this.Jb), this.s.listen(h.U("td-print-image-id"), ["click"], this.Jb)));
        L(this.u, "change", this.Oe, !1, this);
        this.Ma && (h = cp(this), h.u = 12, h.isVisible() && h.i(), h = cp(this), k = this.g.U("calendarListButton" + this.id), L(k, "mousedown", h.w, !1, h), h.s = new In(k, 13), h.isVisible() && h.i());
        this.Da && Ql(this);
        this.w && this.T && (h = this.g.U("dateEditableBox" + this.id), k = this.g.U("dateMenuArrow" + this.id), this.wa =
            new yo(this.ta, this.i.i, this.i.g, new Bo(this.i.j), this.u, this.id, [h, k]));
        Rl(this);
        dp(this);
        this.La = null;
        b = b.pingInterval || 36E5; - 1 != b && (this.xc = window.setInterval(y(this.Tc, this), b))
    };
    D(ep, M);
    var bp = 1;
    ep.prototype.ka = function() {
        ep.Ka.ka.call(this);
        this.s.Ga();
        this.V.Ga();
        void 0 !== this.xc && window.clearInterval(this.xc);
        this.tb.Ga()
    };
    var ap = {
            showNavigation: !0,
            showPrintButton: !0,
            showTabs: !0,
            showDateMarker: !0,
            showCalendarMenu: !0,
            showSubscribeButton: !0,
            showTz: !0,
            showElementsLogo: !1
        },
        fp = function(a, b) {
            if (a.w) {
                var c = a.g.U("dateEditableBox" + a.id),
                    d = a.g.U("dateMenuArrow" + a.id),
                    e = a.g.U("arrowImg" + a.id);
                b ? (c.className = "date-picker-on", d.className = "date-picker-on date-picker-arrow-on", e.src = a.i.Ob + "menu_arrow_hover.gif") : (c.className = "date-picker-off", d.className = "date-picker-off", e.src = a.i.Ob + "menu_arrow_open.gif")
            }
        },
        cp = function(a) {
            if (!a.Ha) {
                var b =
                    new On(a.V);
                a.Ha = new Jn(b, a.g)
            }
            return a.Ha
        },
        dp = function(a) {
            a.Tb && a.s.listen(a.g.U("subscribe-id"), ["click"], a.Uc);
            a.Da && a.s.listen(a.g.U("calendarTabs" + a.id), ["click"], function(b) {
                this.Rb(b.target.id.replace("tab-controller-container-", ""))
            })
        };
    ep.prototype.nf = function() {
        return this.T || this.w || this.Da || this.Ma || this.rb
    };
    var Rl = function(a) {
        if (!(0 >= $k(a.ta).clientHeight)) {
            var b = parseInt(a.ta.style.height, 10) || 0;
            var c = a.g.U("nav" + a.id).offsetHeight;
            c = a.g.U("footer" + a.id).offsetHeight + c + 4;
            b -= c;
            c = Pl(a);
            0 >= b && (b = 1);
            c.style.height = b + "px";
            gp(a)
        }
    };
    ep.prototype.Jb = function() {
        for (var a = this.j, b = a.getType().toUpperCase(), c = [], d = jb(this.V.g), e = 0; e < d.length; ++e) {
            var f = d[e];
            f && c.push(decodeURIComponent(f))
        }
        d = this.i.v;
        a = a.Ra();
        b = Dh(d.g + "/print_preview", "dates", a.toString(), "hl", "en", "ctz", d.u, "pgsz", "letter", "wkst", String(d.o + 1), "mode", b, "wdtp", this.i.o ? null : "23456", "src", c);
        b = window.open(b.toString(), "goocalprint", "location=0,status=0,fullscreen=0,directories=0,toolbar=0,menubar=0,width=600,height=680", !0);
        try {
            b.document.close(), b.focus()
        } catch (g) {}
    };
    var Ql = function(a) {
        if (a.Da) {
            for (var b = a.va, c = a.j, d = [], e = 0; e < b.length; e++) {
                var f = b[e],
                    g = f === c ? "ui-rtsr-selected" : "ui-rtsr-unselected";
                0 == e && (g += " ui-rtsr-first-tab");
                e == b.length - 1 && (g += " ui-rtsr-last-tab");
                d.push(Dn({
                    ha: g,
                    th: "tab-controller-container-" + f.getType(),
                    name: f.Mb,
                    Fa: a.o ? Gd(a.o) : null
                }))
            }
            Ok(a.g.U("calendarTabs" + a.id), En, {
                Ke: d
            })
        }
    };
    ep.prototype.mf = function(a) {
        switch (a.g) {
            case "today":
                this.ze();
                break;
            case "prev":
                this.ie();
                break;
            case "next":
                this.je();
                break;
            case "dayview":
                this.Rb("day");
                break;
            case "weekview":
                this.Rb("week");
                break;
            case "monthview":
                this.Rb("month");
                break;
            case "agendaview":
                this.Rb("agenda")
        }
    };
    ep.prototype.ub = function(a) {
        if ("mouseover" == a.type) fp(this, !0);
        else if ("mouseout" == a.type) fp(this, !1);
        else if ("mousedown" == a.type && this.w)
            if (this.wa.$b()) this.wa.setVisible(!1);
            else {
                this.wa.setVisible(!0);
                a = this.g.U("dateMenuArrow" + this.id);
                var b = this.wa.U();
                sl(a, 13, b, 12, void 0, 5)
            }
    };
    ep.prototype.Rb = function(a) {
        if ("string" == typeof a) {
            var b = a;
            a = null;
            for (var c = 0; c < this.va.length; ++c) {
                var d = this.va[c];
                if (d.getType() == b) {
                    a = d;
                    break
                }
            }
            if (!a) return !1
        }
        b = 0 == a.getType().lastIndexOf("next", 0);
        if (a == this.j && !b) return !1;
        this.j && this.j.Xb();
        if (this.j = a) a = this.j.g, a.v(this.u.i, this.u.o, this.u.g), Im(this.u, a);
        this.Oe();
        gp(this);
        Ql(this);
        return !0
    };
    ep.prototype.Xc = function() {
        gp(this)
    };
    var gp = function(a) {
            (a = a.j) && a.render()
        },
        Yl = function(a, b, c) {
            hp(a, !0);
            ip(a.v, jb(a.V.g), b, function(d) {
                c.call(null, d);
                hp(a, 0 < a.v.u)
            })
        };
    ep.prototype.Tc = function() {
        if (this.j && !(0 >= $k(this.ta).clientHeight)) {
            var a = this.v,
                b = this.j.Ra(),
                c = y(this.qf, this);
            b = jp(a, jb(a.o), b, c, !0);
            for (var d in b.g) {
                c = a.o[d];
                var e = a.g[d],
                    f = y(a.w, a, d, b);
                c.g(b.g[d], f, e.i)
            }
        }
    };
    ep.prototype.qf = function() {
        gp(this)
    };
    var hp = function(a, b) {
        var c = a.g.U("loading" + a.id),
            d = c.style;
        if (null != a.La) a = a.La;
        else {
            var e = wn(),
                f = a.g.U("calendarContainer" + a.id),
                g = Pl(a);
            e += f.offsetWidth - (g.offsetWidth + g.offsetLeft);
            a = a.La = e
        }
        d.right = a + "px";
        c.style.display = b ? "block" : "none"
    };
    m = ep.prototype;
    m.Fh = function(a) {
        a = !!a;
        a !== this.T && (this.g.U("nav" + this.id).style.display = a ? "" : "none", this.T = a)
    };
    m.xg = function() {
        window.setTimeout(y(this.tg, this), 3E5 * Math.random())
    };
    m.tg = function() {
        gp(this)
    };
    m.je = function() {
        this.j.le()
    };
    m.ie = function() {
        this.j.ke()
    };
    m.ze = function() {
        var a = Ng(this.i.g);
        this.u.j(a)
    };
    m.Oe = function() {
        this.w && this.j && Se(this.g.U("currentDate" + this.id), this.j.ld())
    };
    var Pl = function(a) {
        return a.g.U("viewContainer" + a.id)
    };
    ep.prototype.Uc = function() {
        for (var a = jb(this.V.g), b = [], c = 0; c < a.length; ++c) b.push(a[c]);
        window.open(Dh(this.i.v.g + "/render", "cid", b))
    };
    var kp = function(a) {
        var b = a.Wd;
        a = a.content;
        return P(b ? '<div style="' + R(S(b)) + '">' + a + "</div>" : a)
    };
    var mp = function(a) {
            var b = Cm(a),
                c, d = lp;
            if (d) {
                a = (c = a.g ? !1 : !uk) ? "#eeeeee" : "#1d1d1d";
                c = c ? "#dddddd" : "#333333";
                var e = ca("#ffffff", b.i, .6)
            } else c = a = "", e = b.o;
            this.s = a;
            this.j = b.s;
            this.o = d ? b.i : b.g;
            this.va = d ? "" : b.g;
            this.wa = d ? b.s : b.i;
            this.Da = d ? b.s : b.o;
            this.Ha = d ? "" : b.i;
            this.T = c;
            this.g = b.o;
            this.u = b.j;
            this.i = d ? "" : b.j;
            this.ta = d ? b.i : b.g;
            this.V = e;
            this.v = d ? this.j : b.o;
            this.W = d ? this.o : b.j;
            this.ma = d ? "" : b.j;
            this.w = d ? this.s : b.g
        },
        lp = !1,
        np = {},
        op = function(a) {
            var b = Ka(a);
            np[b] || (np[b] = new mp(a));
            return np[b]
        },
        pp = function(a,
            b) {
            if (a.g) {
                a = parseInt(b.substr(1, 2), 16) / 255;
                var c = parseInt(b.substr(3, 2), 16) / 255;
                b = parseInt(b.substr(5, 2), 16) / 255;
                var d = a + b < c / 4 || c + b < a / 4 ? 5 : 0;
                a = Math.max(0, 5 * (a - .8));
                c = Math.max(0, 5 * (c - .8));
                b = Math.max(0, 5 * (b - .8));
                b = 5 * Math.round((10 + 30 * (.33 * a + .84 * c + .15 * b) + d) / 5);
                return b = Math.max(Math.min(b, 40), 10)
            }
            c = a.i;
            if (b == Cm(a).o) switch (c) {
                case 43:
                case 44:
                case 45:
                case 46:
                case 50:
                case 58:
                case 66:
                case 65:
                case 61:
                    return 20;
                case 54:
                case 52:
                case 55:
                case 56:
                case 57:
                    return 35;
                case 53:
                    return 40;
                default:
                    return 25
            } else switch (c) {
                case 43:
                case 44:
                case 58:
                case 66:
                case 50:
                    return 10;
                case 54:
                case 52:
                case 49:
                case 55:
                case 56:
                    return 20;
                case 53:
                    return 25;
                default:
                    return 15
            }
        };
    var qp = function() {
        this.ha = [];
        this.g = 0;
        this.v = Q("");
        this.u = "";
        this.j = null;
        this.i = "#fff";
        this.s = this.o = "#000";
        this.W = ""
    };
    p(qp, sn);
    var rp = function(a, b, c) {
            a.g = c ? a.g | b : a.g & ~b
        },
        sp = function(a, b, c, d) {
            var e;
            if (c) {
                var f = -1 == Fb(c);
                c = 2 * Number(f) + Number(!0);
                var g = Wj[c];
                g || (f ? (f = F ? "zoom:1;" : "", f = "direction:" + S("rtl") + ";" + f) : f = "", g = sj(f), Wj[c] = g);
                c = g;
                c.getContent() && (e = c)
            }
            "caption" == d ? (a.caption = b, a.Rf = e) : (a.text = b, a.nh = e)
        };
    qp.prototype.Me = function() {
        var a = Zg(ch().get(Jd), 107) && tp;
        this.data = {
            rh: !!(this.g & 2),
            ve: !!(this.g & 1),
            Kg: !!(this.g & 16),
            Kf: !!(this.g & 4),
            uc: tp,
            te: a
        };
        this.data.ha = this.ha.join(" ");
        a = [];
        this.g & 1 && a.push("cro");
        this.g & 2 || a.push("cbrd");
        this.data.Lb = a.join(" ");
        this.data.top = this.top + "px";
        tp && 0 == this.Bc && "%" == this.Cc && (this.Bc = -1, this.Cc = "px");
        this.data.offset = this.Bc + this.Cc;
        this.data.edge = this.edge;
        this.data.width = this.width + this.Pe;
        tp && (this.data.Qg = Math.max(2, this.height - (this.g & 2 ? 5 : 3) - 1) + "px", this.g &
            16 && (this.data.Of = this.height + "px"));
        a = this.height;
        this.data.height = a ? Math.max(0, a - up - (this.g & 2 ? 5 : 3)) + "px" : "auto";
        this.data.borderColor = this.o;
        this.data.bgColor = this.i;
        this.data.Sf = this.s;
        this.data.textColor = this.W;
        sp(this.data, this.v, this.u, "caption");
        a = this.text ? this.text.toString() : "";
        var b = this.text ? this.text : Q("");
        sp(this.data, b, a, "text");
        this.data.Nf = "";
        this.data.icons = "";
        this.ma && (this.data.userId = this.V, this.data.Zg = this.w ? "cpic-fade" : "", this.data.$g = this.T & 1 ? "cpic-rot-left" : "cpic-rot-right",
            this.data.Ee = this.ma);
        a = this.data;
        var c = a.uc,
            d = a.Kg,
            e = a.borderColor,
            f = a.bgColor,
            g = a.ha,
            h = a.Ee,
            k = a.top,
            l = a.edge,
            n = a.offset,
            q = a.width,
            v = a.rh,
            t = a.ve,
            x = a.Lb,
            u = a.height,
            A = a.textColor,
            z = a.Kf;
        b = "";
        f = "border-color:" + S(e) + ";background-color:" + S(f) + ";";
        f = xj(f);
        if (c && d) {
            d = a.edge;
            var C = a.offset,
                J = a.Of,
                ma = a.width;
            d = P('<div class="rsvp-no-bg" style="top:' + R(S(a.top)) + ";" + R(S(d)) + ":" + R(S(C)) + ";height:" + R(S(J)) + ";width:" + R(S(ma)) + ';">&nbsp;</div>')
        } else d = "";
        g = d + '<div class="' + R(g) + " chip" + (h ? " corg" : "") + '" style="top:' +
            R(S(k)) + ";" + R(S(l)) + ":" + R(S(n)) + ";width:" + R(S(q)) + ';">' + (v ? t ? '<div class="cb2" style="border-color:' + R(S(e)) + ';">&nbsp;</div><div class="cb1" style="' + R(S(f)) + '">&nbsp;</div>' : '<div class="ct" style="border-bottom-color:' + R(S(e)) + '">&nbsp;</div>' : "") + '<dl class="' + R(x) + '" style="height:' + R(S(u)) + ";" + R(S(f)) + (A ? "color:" + R(S(A)) : "") + '">';
        k = a.Sf;
        l = a.Rf;
        n = a.Nf;
        q = a.caption;
        t = a.icons;
        k = P('<dt style="' + (k ? "background-color:" + R(S(k)) + ";" : "") + '">' + kp({
            Wd: l,
            content: vj(Q(n) + '<span class="chip-caption">' + Q(q) +
                "</span>" + Q(t))
        }) + "</dt>");
        g = g + k + "<dd>";
        k = a.text;
        k = P(kp({
            Wd: a.nh,
            content: vj("" + (a.te ? '<div class="cpchip">' + Q(k) + "</div>" : Q(k)))
        }));
        g = g + k + "</dd>";
        if (c) {
            c = {
                ag: f
            };
            for (U in a) U in c || (c[U] = a[U]);
            var U = c.ag;
            k = c.Qg;
            c = c.te;
            U = P('<div><div class="mask mask-top" style="' + R(S(U)) + '">&nbsp;</div>' + (c ? "" : '<div class="mask mask-bottom" style="' + R(S(U)) + '">&nbsp;</div>') + '<div class="mask mask-left" style="height:' + R(S(k)) + ";" + R(S(U)) + '">&nbsp;</div><div class="mask mask-right" style="height:' + R(S(k)) + ";" + R(S(U)) +
                '">&nbsp;</div></div>')
        } else U = "";
        U = g + U + (z ? '<div class="resizer"><div class="rszr-icon">&nbsp;</div></div>' : "") + "</dl>" + (v ? '<div class="cb1" style="' + R(S(f)) + '">&nbsp;</div><div class="cb2" style="border-color:' + R(S(e)) + ';">&nbsp;</div>' : "");
        h ? (h = a.$g, e = a.userId, v = a.borderColor, z = a.Ee, a = P('<div class="g-hovercard cpic ' + R(a.Zg) + " " + R(h) + '" data-userid="' + R(e) + '" style="border-color:' + R(S(v)) + ';"><img src="' + R(Rj(z)) + '?sz=24" height="24" width="24"></div>')) : a = "";
        return P(b + (U + a + "</div>"))
    };
    var tp = !1,
        up = 0;
    var vp = function(a) {
        var b = a.zd;
        return P(Q(a.title) + ' - <span class="cloc">' + Q(b) + "</span>")
    };
    var wp = {
            Ah: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            zh: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        xp = wp;
    xp = wp;
    var yp = {
        AED: [2, "dh", "\u062f.\u0625."],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34,
            "Ft", "Ft"
        ],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd",
            "RUB"
        ],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "\u20ba", "TRY"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var zp = {
            Ld: ".",
            Wc: ",",
            Qd: "%",
            $c: "0",
            Ef: "+",
            Od: "-",
            Nd: "E",
            Rd: "\u2030",
            Yc: "\u221e",
            Df: "NaN",
            hf: "#,##0.###",
            Dh: "#E0",
            Ch: "#,##0%",
            Bh: "\u00a4#,##0.00",
            Md: "USD"
        },
        V = zp;
    V = zp;
    var Bp = function() {
        this.w = 40;
        this.i = 1;
        this.j = 3;
        this.V = this.u = 0;
        this.wa = !1;
        this.T = this.W = "";
        this.o = V.Od;
        this.ma = "";
        this.g = 1;
        this.v = !1;
        this.s = [];
        this.va = this.ta = !1;
        var a = V.hf,
            b = [0];
        this.W = Ap(this, a, b);
        for (var c = b[0], d = -1, e = 0, f = 0, g = 0, h = -1, k = a.length, l = !0; b[0] < k && l; b[0]++) switch (a.charAt(b[0])) {
            case "#":
                0 < f ? g++ : e++;
                0 <= h && 0 > d && h++;
                break;
            case "0":
                if (0 < g) throw Error("N`" + a);
                f++;
                0 <= h && 0 > d && h++;
                break;
            case ",":
                0 < h && this.s.push(h);
                h = 0;
                break;
            case ".":
                if (0 <= d) throw Error("O`" + a);
                d = e + f + g;
                break;
            case "E":
                if (this.va) throw Error("P`" +
                    a);
                this.va = !0;
                this.V = 0;
                b[0] + 1 < k && "+" == a.charAt(b[0] + 1) && (b[0]++, this.wa = !0);
                for (; b[0] + 1 < k && "0" == a.charAt(b[0] + 1);) b[0]++, this.V++;
                if (1 > e + f || 1 > this.V) throw Error("Q`" + a);
                l = !1;
                break;
            default:
                b[0]--, l = !1
        }
        0 == f && 0 < e && 0 <= d && (f = d, 0 == f && f++, g = e - f, e = f - 1, f = 1);
        if (0 > d && 0 < g || 0 <= d && (d < e || d > e + f) || 0 == h) throw Error("R`" + a);
        g = e + f + g;
        this.j = 0 <= d ? g - d : 0;
        0 <= d && (this.u = e + f - d, 0 > this.u && (this.u = 0));
        this.i = (0 <= d ? d : g) - e;
        this.va && (this.w = e + this.i, 0 == this.j && 0 == this.i && (this.i = 1));
        this.s.push(Math.max(0, h));
        this.ta = 0 == d || d == g;
        c = b[0] - c;
        this.T = Ap(this, a, b);
        b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.g && (this.v = !0), this.o = Ap(this, a, b), b[0] += c, this.ma = Ap(this, a, b)) : (this.o += this.W, this.ma += this.T)
    };
    Bp.prototype.parse = function(a, b) {
        b = b || [0];
        a = a.replace(/ |\u202f/g, "\u00a0");
        var c = a.indexOf(this.W, b[0]) == b[0],
            d = a.indexOf(this.o, b[0]) == b[0];
        c && d && (this.W.length > this.o.length ? d = !1 : this.W.length < this.o.length && (c = !1));
        c ? b[0] += this.W.length : d && (b[0] += this.o.length);
        if (a.indexOf(V.Yc, b[0]) == b[0]) {
            b[0] += V.Yc.length;
            var e = Infinity
        } else {
            e = a;
            var f = !1,
                g = !1,
                h = !1,
                k = -1,
                l = 1,
                n = V.Ld,
                q = V.Wc,
                v = V.Nd;
            q = q.replace(/\u202f/g, "\u00a0");
            for (var t = ""; b[0] < e.length; b[0]++) {
                var x = e.charAt(b[0]),
                    u = Cp(x);
                if (0 <= u && 9 >= u) t +=
                    u, h = !0;
                else if (x == n.charAt(0)) {
                    if (f || g) break;
                    t += ".";
                    f = !0
                } else if (x == q.charAt(0) && ("\u00a0" != q.charAt(0) || b[0] + 1 < e.length && 0 <= Cp(e.charAt(b[0] + 1)))) {
                    if (f || g) break
                } else if (x == v.charAt(0)) {
                    if (g) break;
                    t += "E";
                    g = !0;
                    k = b[0]
                } else if ("+" == x || "-" == x) {
                    if (h && k != b[0] - 1) break;
                    t += x
                } else if (1 == this.g && x == V.Qd.charAt(0)) {
                    if (1 != l) break;
                    l = 100;
                    if (h) {
                        b[0]++;
                        break
                    }
                } else if (1 == this.g && x == V.Rd.charAt(0)) {
                    if (1 != l) break;
                    l = 1E3;
                    if (h) {
                        b[0]++;
                        break
                    }
                } else break
            }
            1 != this.g && (l = this.g);
            e = parseFloat(t) / l
        }
        if (c) {
            if (a.indexOf(this.T, b[0]) !=
                b[0]) return NaN;
            b[0] += this.T.length
        } else if (d) {
            if (a.indexOf(this.ma, b[0]) != b[0]) return NaN;
            b[0] += this.ma.length
        }
        return d ? -e : e
    };
    var Ep = function(a, b, c, d) {
            if (a.u > a.j) throw Error("K");
            d || (d = []);
            var e = Dp(b, a.j);
            e = Math.round(e);
            isFinite(e) ? (b = Math.floor(Dp(e, -a.j)), e = Math.floor(e - Dp(b, a.j))) : e = 0;
            var f = b;
            var g = e,
                h = 0 < a.u || 0 < g || !1;
            e = a.u;
            h && (e = a.u);
            var k = "";
            for (b = f; 1E20 < b;) k = "0" + k, b = Math.round(Dp(b, -1));
            k = b + k;
            var l = V.Ld;
            b = V.$c.charCodeAt(0);
            var n = k.length,
                q = 0;
            if (0 < f || 0 < c) {
                for (f = n; f < c; f++) d.push(String.fromCharCode(b));
                if (2 <= a.s.length)
                    for (c = 1; c < a.s.length; c++) q += a.s[c];
                c = n - q;
                if (0 < c) {
                    f = a.s;
                    q = n = 0;
                    for (var v, t = V.Wc, x = k.length, u = 0; u < x; u++)
                        if (d.push(String.fromCharCode(b +
                                Number(k.charAt(u)))), 1 < x - u)
                            if (v = f[q], u < c) {
                                var A = c - u;
                                (1 === v || 0 < v && 1 === A % v) && d.push(t)
                            } else q < f.length && (u === c ? q += 1 : v === u - c - n + 1 && (d.push(t), n += v, q += 1))
                } else {
                    c = k;
                    k = a.s;
                    f = V.Wc;
                    v = c.length;
                    t = [];
                    for (n = k.length - 1; 0 <= n && 0 < v; n--) {
                        q = k[n];
                        for (x = 0; x < q && 0 <= v - x - 1; x++) t.push(String.fromCharCode(b + Number(c.charAt(v - x - 1))));
                        v -= q;
                        0 < v && t.push(f)
                    }
                    d.push.apply(d, t.reverse())
                }
            } else h || d.push(String.fromCharCode(b));
            (a.ta || h) && d.push(l);
            h = String(g);
            g = h.split("e+");
            if (2 == g.length) {
                if (h = parseFloat(g[0])) {
                    l = h;
                    if (isFinite(l)) {
                        for (c =
                            0; 1 <= (l /= 10);) c++;
                        l = c
                    } else l = 0 < l ? l : 0;
                    l = -l - 1;
                    h = -1 > l ? h && isFinite(h) ? Dp(Math.round(Dp(h, -1)), 1) : h : h && isFinite(h) ? Dp(Math.round(Dp(h, l)), -l) : h
                }
                h = String(h);
                h = h.replace(".", "");
                h += Cc("0", parseInt(g[1], 10) - h.length + 1)
            }
            a.j + 1 > h.length && (h = "1" + Cc("0", a.j - h.length) + h);
            for (a = h.length;
                "0" == h.charAt(a - 1) && a > e + 1;) a--;
            for (f = 1; f < a; f++) d.push(String.fromCharCode(b + Number(h.charAt(f))))
        },
        Fp = function(a, b, c) {
            c.push(V.Nd);
            0 > b ? (b = -b, c.push(V.Od)) : a.wa && c.push(V.Ef);
            b = "" + b;
            for (var d = V.$c, e = b.length; e < a.V; e++) c.push(d);
            c.push(b)
        },
        Cp = function(a) {
            a = a.charCodeAt(0);
            if (48 <= a && 58 > a) return a - 48;
            var b = V.$c.charCodeAt(0);
            return b <= a && a < b + 10 ? a - b : -1
        },
        Ap = function(a, b, c) {
            for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
                var g = b.charAt(c[0]);
                if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
                else if (e) d += g;
                else switch (g) {
                    case "#":
                    case "0":
                    case ",":
                    case ".":
                    case ";":
                        return d;
                    case "\u00a4":
                        c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += V.Md) : (g = V.Md, d += g in yp ? yp[g][1] : g);
                        break;
                    case "%":
                        if (!a.v && 1 != a.g) throw Error("L");
                        if (a.v && 100 !=
                            a.g) throw Error("M");
                        a.g = 100;
                        a.v = !1;
                        d += V.Qd;
                        break;
                    case "\u2030":
                        if (!a.v && 1 != a.g) throw Error("L");
                        if (a.v && 1E3 != a.g) throw Error("M");
                        a.g = 1E3;
                        a.v = !1;
                        d += V.Rd;
                        break;
                    default:
                        d += g
                }
            }
            return d
        },
        Gp = {
            prefix: "",
            mh: "",
            og: 0
        },
        Dp = function(a, b) {
            if (!a || !isFinite(a) || 0 == b) return a;
            a = String(a).split("e");
            return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
        };
    var Hp = function(a) {
            return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
        },
        Ip = Hp;
    Ip = Hp;
    var Jp = function(a, b) {
            if (void 0 === b) {
                b = a + "";
                var c = b.indexOf(".");
                b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
            }
            return 1 == (a | 0) && 0 == b ? "one" : "other"
        },
        Kp = Jp;
    Kp = Jp;
    var Op = function() {
            this.o = "{NUM_EVENTS, plural, =1 {1 event}other {# events}}";
            this.i = this.g = this.s = null;
            var a = V,
                b = xp;
            if (Lp !== a || Mp !== b) Lp = a, Mp = b, Np = new Bp;
            this.u = Np
        },
        Lp = null,
        Mp = null,
        Np = null,
        Pp = /'([{}#].*?)'/g,
        Qp = /''/g,
        Rp = function(a, b, c, d, e) {
            for (var f = 0; f < b.length; f++) switch (b[f].type) {
                case 4:
                    e.push(b[f].value);
                    break;
                case 3:
                    var g = b[f].value,
                        h = a,
                        k = e,
                        l = c[g];
                    void 0 === l ? k.push("Undefined parameter - " + g) : (h.g.push(l), k.push(h.j(h.g)));
                    break;
                case 2:
                    g = b[f].value;
                    h = a;
                    k = c;
                    l = d;
                    var n = e,
                        q = g.yc;
                    void 0 === k[q] ?
                        n.push("Undefined parameter - " + q) : (q = g[k[q]], void 0 === q && (q = g.other), Rp(h, q, k, l, n));
                    break;
                case 0:
                    g = b[f].value;
                    Sp(a, g, c, Kp, d, e);
                    break;
                case 1:
                    g = b[f].value, Sp(a, g, c, Ip, d, e)
            }
        },
        Sp = function(a, b, c, d, e, f) {
            var g = b.yc,
                h = b.Td,
                k = +c[g];
            isNaN(k) ? f.push("Undefined or invalid parameter - " + g) : (h = k - h, g = b[c[g]], void 0 === g && (d = d(Math.abs(h)), g = b[d], void 0 === g && (g = b.other)), b = [], Rp(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = a.u, b = h, isNaN(b) ? a = V.Df : (e = [], b = Dp(b, -Gp.og), e.push(Gp.prefix), h = 0 > b || 0 == b && 0 > 1 / b, e.push(h ? a.o : a.W),
                isFinite(b) ? (b = b * (h ? -1 : 1) * a.g, a.va ? 0 == b ? (Ep(a, b, a.i, e), Fp(a, 0, e)) : (d = Math.floor(Math.log(b) / Math.log(10) + 2E-15), b = Dp(b, -d), g = a.i, 1 < a.w && a.w > a.i ? (g = d % a.w, 0 > g && (g = a.w + g), b = Dp(b, g), d -= g, g = 1) : 1 > a.i ? (d++, b = Dp(b, -1)) : (d -= a.i - 1, b = Dp(b, a.i - 1)), Ep(a, b, g, e), Fp(a, d, e)) : Ep(a, b, a.i, e)) : e.push(V.Yc), e.push(h ? a.ma : a.T), e.push(Gp.mh), a = e.join("")), f.push(c.replace(/#/g, a))))
        },
        Tp = function(a, b) {
            var c = a.s,
                d = y(a.j, a);
            b = b.replace(Qp, function() {
                c.push("'");
                return d(c)
            });
            return b = b.replace(Pp, function(e, f) {
                c.push(f);
                return d(c)
            })
        },
        Up = function(a) {
            var b = 0,
                c = [],
                d = [],
                e = /[{}]/g;
            e.lastIndex = 0;
            for (var f; f = e.exec(a);) {
                var g = f.index;
                "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                    type: 1
                }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                    type: 0,
                    value: b
                }), b = g + 1), c.push("{"))
            }
            b = a.substring(b);
            "" != b && d.push({
                type: 0,
                value: b
            });
            return d
        },
        Vp = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        Wp = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        Xp = /^\s*(\w+)\s*,\s*select\s*,/,
        aq = function(a, b) {
            var c = [];
            b = Up(b);
            for (var d = 0; d < b.length; d++) {
                var e = {};
                if (0 == b[d].type) e.type = 4, e.value = b[d].value;
                else if (1 == b[d].type) {
                    var f = b[d].value;
                    switch (Vp.test(f) ? 0 : Wp.test(f) ? 1 : Xp.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                        case 2:
                            e.type = 2;
                            e.value = Yp(a, b[d].value);
                            break;
                        case 0:
                            e.type = 0;
                            e.value = Zp(a, b[d].value);
                            break;
                        case 1:
                            e.type = 1;
                            e.value = $p(a, b[d].value);
                            break;
                        case 3:
                            e.type = 3, e.value = b[d].value
                    }
                }
                c.push(e)
            }
            return c
        },
        Yp = function(a, b) {
            var c = "";
            b = b.replace(Xp, function(h, k) {
                c = k;
                return ""
            });
            var d = {};
            d.yc = c;
            b = Up(b);
            for (var e = 0; e < b.length;) {
                var f = b[e].value;
                e++;
                var g;
                1 == b[e].type && (g = aq(a, b[e].value));
                d[f.replace(/\s/g, "")] = g;
                e++
            }
            return d
        },
        Zp = function(a, b) {
            var c = "",
                d = 0;
            b = b.replace(Vp, function(k, l, n) {
                c = l;
                n && (d = parseInt(n, 10));
                return ""
            });
            var e = {};
            e.yc = c;
            e.Td = d;
            b = Up(b);
            for (var f = 0; f < b.length;) {
                var g = b[f].value;
                f++;
                var h;
                1 == b[f].type && (h = aq(a, b[f].value));
                e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
                f++
            }
            return e
        },
        $p = function(a, b) {
            var c = "";
            b = b.replace(Wp, function(h, k) {
                c = k;
                return ""
            });
            var d = {};
            d.yc = c;
            d.Td = 0;
            b = Up(b);
            for (var e = 0; e < b.length;) {
                var f = b[e].value;
                e++;
                if (1 == b[e].type) var g =
                    aq(a, b[e].value);
                d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
                e++
            }
            return d
        };
    Op.prototype.j = function(a) {
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    var bq = function() {};
    bq.prototype.g = function() {
        return qk(Ak())
    };
    var cq = function(a, b) {
        a = a.g(b);
        b = sk(a.g);
        if (0 <= b) {
            var c = pk(b);
            a = lk(c, 0);
            c = new Bm(c, !1, a, void 0)
        } else {
            a = a.g;
            b = sk(a.toUpperCase());
            if (43 <= b) c = b;
            else {
                b = 0;
                for (var d = parseInt(a.substr(1, 2), 16) / 255, e = parseInt(a.substr(3, 2), 16) / 255, f = parseInt(a.substr(5, 2), 16) / 255, g = 43; 66 > g; g++) {
                    var h = lk(g, 0),
                        k = d - parseInt(h.substr(1, 2), 16) / 255,
                        l = e - parseInt(h.substr(3, 2), 16) / 255;
                    h = f - parseInt(h.substr(5, 2), 16) / 255;
                    k = k * k + l * l + h * h;
                    if (43 == g || k < c) b = g, c = k
                }
                c = b
            }
            c = new Bm(c, !0, a, a)
        }
        return c
    };
    bq.prototype.i = function() {
        return !1
    };
    bq.prototype.j = function() {
        return Q("")
    };
    bq.prototype.uc = function() {
        return !0
    };
    Gl();
    Gl();
    var eq = function(a, b) {
            return null !== dq(a, b)
        },
        dq = function(a, b) {
            b = Ym(b);
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (0 == d.lastIndexOf(a, 0)) return d.substring(a.length)
            }
            return null
        },
        fq = function(a, b) {
            a: {
                for (var c = Na(eq, "ca-evp"); b;) {
                    if (c(b)) {
                        a = b;
                        break a
                    }
                    if (a && b == a) break;
                    b = b.parentNode
                }
                a = null
            }
            return a
        },
        gq = function(a) {
            return Te(a, Na(eq, "ca-mlp"))
        };
    var hq = function() {};
    var iq = function(a, b, c) {
        this.i = b;
        this.g = c;
        a = ch();
        this.j = Zg(a.get(Jd), 107)
    };
    p(iq, tn);
    var jq = function(a, b) {
            b = "evt-lk ca-elp" + Ka(b);
            return P('<span class="' + R(b) + '">' + Q(a) + "</span>")
        },
        kq = function(a, b, c, d) {
            if (!a.j) return b;
            a = c.ac;
            if (!a) return b;
            b = {
                zd: a,
                title: b
            };
            return 0 < d ? (b.oh = 12 * d, d = b.zd, a = b.title, P('<div class="ctdiv" style="max-height: ' + R(S(b.oh)) + 'px">' + Q(a) + '</div><span class="cloc">' + Q(d) + "</span>")) : vp(b)
        },
        mq = function(a, b, c, d, e) {
            if (e && c) return d = pn(a.i, b), a = pn(a.i, c), Q(d + " \u2013 " + a);
            b = lq(a.i, b.Rc(), !0, !0);
            c ? d ? a = P(tp ? Q(b) + " <span class=cbrdcc>- " + Q(d) + "</span>" : Q(b) + " - " +
                Q(d)) : (a = lq(a.i, c.Rc(), !0, !0), a = Q(b + " \u2013 " + a)) : a = Q("At " + b);
            return a
        },
        nq = !(G || hd);
    var oq = function(a, b, c) {
        Rg.call(this, a, null, b);
        this.g = c ? c.replace("{hl}", encodeURIComponent("en")) : null
    };
    p(oq, Rg);
    var pq = function(a, b, c, d, e) {
        this.j = a;
        this.o = c;
        this.u = b;
        this.i = d;
        a = this.j + "calendar";
        null != this.i && (a += "/b/" + this.i);
        this.g = a;
        this.s = e || null
    };
    var qq = ["en", 0, ".", [
            [
                [null, 0],
                [" \u2013 "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [", "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1],
                ["/"],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                ["/"],
                [null, 1],
                ["/"],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                ["-"],
                [null, 1],
                ["-"],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                [":00"]
            ]
        ],
        [
            [
                [null, 0],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [":"],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [":"],
                [null, 1],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1],
                [", "],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1],
                [", "],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1],
                [" \u2013 "],
                [null, 2],
                [", "],
                [null, 3]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1],
                [" \u2013 "],
                [null, 2],
                [", "],
                [null, 3]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1],
                [" \u2013 "],
                [null, 2],
                [" "],
                [null, 3],
                [", "],
                [null, 4]
            ]
        ],
        [
            [
                [null, 0],
                [" \u2013 "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [" ("],
                [null, 1],
                [")"]
            ]
        ],
        [
            [
                [null, 0],
                [" \u2013 "],
                [null, 1],
                [" "],
                [null, 2]
            ]
        ],
        [
            [
                [null, 0],
                [" "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0],
                [", "],
                [null, 1]
            ]
        ], "SMTWTFS".split(""), "Sun Mon Tue Wed Thu Fri Sat".split(" "), "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), "January February March April May June July August September October November December".split(" "), "January February March April May June July August September October November December".split(" "), ["a", "p"],
        ["am", "pm"],
        ["am", "pm"], "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        0, 0, 0, [
            [
                [null, 0],
                [", "],
                [null, 1]
            ]
        ],
        [
            [
                [null, 0]
            ]
        ],
        [
            [
                [null, 0],
                [":"],
                [null, 1],
                [":"],
                [null, 2],
                [null, 3]
            ]
        ], "EEEE, MMMM d", "h a", "h:mm a", "HH:mm", "h", "h:mm", 0
    ];
    var rq = function(a) {
        xd(this, a, 0, null)
    };
    D(rq, td);
    var W = function(a) {
        xd(this, a, 0, sq)
    };
    D(W, td);
    var zd = function(a) {
        xd(this, a, 0, null)
    };
    D(zd, td);
    var tq = function(a) {
        xd(this, a, 0, null)
    };
    D(tq, td);
    var uq = function(a) {
        xd(this, a, 0, null)
    };
    D(uq, td);
    var vq = function(a) {
        xd(this, a, 0, null)
    };
    D(vq, td);
    var sq = [1];
    var yq = function() {
        this.g = new rq(qq);
        this.o = wq(I(this.g, tq, 32));
        this.i = wq(I(this.g, tq, 33));
        this.j = wq(I(this.g, tq, 34));
        xq(I(this.g, uq, 35));
        this.u = xq(I(this.g, uq, 36));
        this.s = xq(I(this.g, uq, 37));
        this.v = xq(I(this.g, uq, 41))
    };
    Da(yq);
    var wq = function(a) {
            return [H(a, 1), H(a, 2), H(a, 3), H(a, 4), H(a, 5), H(a, 6), H(a, 7)]
        },
        xq = function(a) {
            return [, H(a, 1), H(a, 2), H(a, 3), H(a, 4), H(a, 5), H(a, 6), H(a, 7), H(a, 8), H(a, 9), H(a, 10), H(a, 11), H(a, 12)]
        },
        zq = function(a, b) {
            return a.j[b]
        },
        Aq = function(a) {
            return isNaN(a) ? "??" : "" + (a % 12 || 12)
        },
        Bq = function(a) {
            return isNaN(a) ? "??" : (10 > a ? "0" : "") + a
        },
        Cq = function(a, b) {
            return isNaN(b) ? "" : 12 > b % 24 ? H(I(a.g, vq, 39), 1) : H(I(a.g, vq, 39), 2)
        },
        X = function(a, b) {
            var c = [];
            Ra(Ad(a), function(d) {
                null != H(d, 1) ? c.push(H(d, 1)) : (d = b[H(d, 2) || 0], c.push(d))
            });
            return c.join("")
        };
    var Eq = function(a, b) {
        this.i = a || new Dq;
        this.g = b || yq.md()
    };
    D(Eq, hq);
    var Fq = function(a, b, c) {
            return yd(a.g.g) ? String(b) : c ? a.g.v[b] : a.g.s[b]
        },
        lq = function(a, b, c, d) {
            a.i.j || isNaN(b.hour) ? (c = b.hour, b = b.minute, b = X(I(a.g.g, W, 16), [isNaN(c) ? "??" : (10 > c ? "0" : "") + c, Bq(b)])) : c && 0 == b.minute ? d ? (a = a.g, b = b.hour, b = X(I(a.g, W, 15), [Aq(b), isNaN(b) ? "" : 12 > b % 24 ? "" : H(I(a.g, vq, 38), 2)])) : (a = a.g, b = b.hour, b = X(I(a.g, W, 15), [Aq(b), Cq(a, b)])) : d ? (a = a.g, c = b.hour, b = b.minute, b = X(I(a.g, W, 17), [Aq(c), Bq(b), isNaN(c) ? "" : 12 > c % 24 ? "" : H(I(a.g, vq, 38), 2)])) : (a = a.g, c = b.hour, b = b.minute, b = X(I(a.g, W, 17), [Aq(c), Bq(b), Cq(a,
                c)]));
            return b
        },
        pn = function(a, b) {
            a: switch (a.i.i) {
                case 1:
                    var c = b.S;
                    b = b.month;
                    a = X(I(a.g.g, W, 7), [c, b]);
                    break a;
                case 0:
                    c = b.month;
                    b = b.S;
                    a = X(I(a.g.g, W, 10), [c, b]);
                    break a;
                case 2:
                    c = b.month;
                    b = b.S;
                    a = X(I(a.g.g, W, 11), [c, b]);
                    break a;
                default:
                    c = b.month, b = b.S, a = X(I(a.g.g, W, 10), [c, b])
            }
            return a
        },
        jn = function(a, b, c) {
            var d = Fq(a, b.month, void 0);
            if (b.year == a.i.g.year && 4 > Math.abs(b.month - a.i.g.month)) {
                var e = b.S;
                d = X(I(a.g.g, W, 18), [d, e])
            } else {
                e = b.S;
                var f = b.year;
                d = X(I(a.g.g, W, 19), [d, e, f])
            }
            c ? (b = b.Wa(), b = a.g.i[b]) : b = zq(a.g, b.Wa());
            return X(I(a.g.g, W, 31), [b, d])
        };
    Eq.prototype.j = function(a, b) {
        if (1 != a.S || b) a = String(a.S);
        else {
            b = this.g;
            var c = Fq(this, a.month, !0);
            a = a.S;
            a = X(I(b.g, W, 21), [c, a])
        }
        return a
    };
    var Gq = function(a, b) {
            var c = b.start,
                d = wg(b.g, -1),
                e = c.year,
                f = c.month,
                g = c.S;
            b = d.year;
            var h = d.month;
            d = d.S;
            var k = Fq(a, f, !0),
                l = Fq(a, h, !0);
            e == b ? f == h ? g == d ? (b = X(I(a.g.g, W, 19), [k, g, e]), c = zq(a.g, c.Wa()), a = X(I(a.g.g, W, 31), [c, b])) : a = X(I(a.g.g, W, 25), [k, g, d, e]) : a = X(I(a.g.g, W, 26), [k, g, l, d, e]) : (c = a.g, e = X(I(a.g.g, W, 22), [k, g, e]), a = X(I(a.g.g, W, 22), [l, d, b]), a = X(I(c.g, W, 4), [e, a]));
            return a
        },
        po = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = a.g,
                e = b.month;
            a = yd(a.g.g) ? String(e) : a.g.u[e];
            b = b.year;
            d = X(I(d.g, W, 20), [a, b]);
            return oo(d,
                c)
        },
        Tl = function(a, b) {
            if (b instanceof Ol) {
                var c = b.start;
                var d = b.g
            } else c = b, d = void 0;
            if (isNaN(d.hour)) a = 24 <= (rg(d, c).j / 3600 | 0) ? Gq(a, new Ol(c, d)) : jn(a, c, !0);
            else {
                var e = !(c.minute || d.minute);
                b = jn(a, c, !0) + ", " + lq(a, c, e);
                c = (c.ua() != d.ua() ? jn(a, d, !0) + ", " : "") + lq(a, d, e);
                a = X(I(a.g.g, W, 4), [b, c])
            }
            return a
        },
        Dq = function(a, b) {
            this.j = a || !1;
            this.i = b || 0;
            this.g = Hg(new Date)
        },
        oo = function(a, b) {
            return b ? a.charAt(0).toUpperCase() + a.substring(1) : a
        };
    var Jq = function(a) {
            for (var b in Hq) b in a || (a[b] = Hq[b]);
            this.ta = a.collapseAllday;
            b = new Dq(a.format24hour, parseInt(a.dateFieldOrder, 10));
            this.i = new Eq(b);
            this.V = a.autoResize;
            this.wa = (b = a.hostedDomain) ? new oq(b.name, b.title, b.maplink) : null;
            this.u = a.baseUrl;
            zh(this.u) || (this.u = zh(window.location.href) + this.u);
            this.j = a.weekstart;
            this.Ob = a.imagePath;
            this.s = a.timezone || null;
            this.w = a.timezoneLocalized;
            this.Da = a.haveQuickAdd;
            if ("nowMs" in a) {
                b = parseInt(a.nowMs, 10);
                var c = B() + Lg;
                3E4 <= Math.abs(c - b) && (Lg = b - B())
            }
            this.g =
                new Og(Iq(a.timezoneOffsetMs), Iq(a.timezoneNextTransitionMs), Iq(a.timezoneNextOffsetMs));
            this.o = a.showWeekends;
            this.W = parseInt(a.firstWeekday, 10);
            this.T = parseInt(a.workWeekLength, 10);
            this.v = new pq(this.u, this.s, this.j, Ui(), a.proxyUrl);
            this.va = a.calendarApiVersion;
            this.ma = a.developerKey
        },
        Iq = function(a) {
            a = parseInt(a, 10);
            isNaN(a) && (a = void 0);
            return a
        },
        Hq = {
            autoResize: !0,
            baseUrl: "http://www.google.com/",
            collapseAllday: !1,
            dateFieldOrder: 0,
            format24hour: !0,
            hostedDomain: null,
            imagePath: "//calendar.google.com/googlecalendar/images/",
            showWeekends: !0,
            preloadEnd: null,
            preloadStart: null,
            weekstart: 0,
            haveQuickAdd: !1,
            firstWeekday: 1,
            workWeekLength: 5
        };
    var Kq = function(a) {
        var b = a.eg;
        return P('<td class="' + R(a.ha) + '">' + Q(b) + "</td>")
    };
    var Lq = function(a) {
        var b = a.Fd,
            c = a.Og;
        return sj(a.hh ? "direction:" + S(b) + ";text-align:" + S(c) + ";" : "")
    };
    var Nq = function(a, b, c, d, e, f, g, h) {
            a = {
                color: c,
                textColor: d,
                vc: void 0 === e ? "" : e,
                Ab: void 0 === g ? "" : g,
                kd: f || "",
                content: a,
                hh: b,
                Og: "left",
                Fd: "rtl"
            };
            if (h) return a.Ab += " rb-n", a.borderColor = h, a.sd = "rb-ni", h = a.Ab, b = a.borderColor, c = a.textColor, d = a.color, e = a.sd, f = a.kd, g = a.content, P('<div class="' + R(a.vc) + " " + R(h) + '" style="border:1px solid ' + R(S(b)) + "; color:" + R(S(c)) + ";background-color:" + R(S(d)) + ";" + R(S(Lq(a))) + '"><div class="' + R(e) + '">' + Q(f) + Q(g) + "</div></div>");
            if (Mq) return a.Ab += " rb-n", h = a.Ab, b = a.textColor,
                c = a.color, d = a.kd, e = a.content, P('<div class="' + R(a.vc) + " " + R(h) + '" style="color:' + R(S(b)) + ";background-color:" + R(S(c)) + ";" + R(S(Lq(a))) + '">' + Q(d) + Q(e) + "</div>");
            a.vc += " rb-o";
            a.Ab += " rb-m";
            a.sd = "rb-i";
            h = a.color;
            b = a.Ab;
            c = a.textColor;
            d = a.kd;
            e = a.sd;
            f = a.content;
            return P('<div class="' + R(a.vc) + '" style="border-color:' + R(S(h)) + ";" + R(S(Lq(a))) + '"><div class="' + R(b) + '" style="border-color:' + R(S(h)) + ";background-color:" + R(S(h)) + ";color:" + R(S(c)) + '">' + Q(d) + '<div class="' + R(e) + '">' + Q(f) + "</div></div></div>")
        },
        Mq = G || hd;
    var Pq = function(a, b, c, d, e, f) {
            this.i = b;
            this.j = c;
            this.v = d;
            if (f) a = f(a);
            else {
                b = [];
                c = [];
                var g;
                d = 0;
                f = this.j;
                var h = this.i,
                    k = mg(h.H(), wg(h, f).H());
                for (g = 0; g < f; g++) b[g] = [], c[g] = [];
                g = 0;
                for (var l = a.length; g < l; g++) {
                    var n = a[g];
                    if (Um(n, k)) {
                        var q = n.Ub,
                            v = 0,
                            t = pg(n.Ea().ua(), h);
                        if (0 > t) {
                            if (!q) continue;
                            t = 0;
                            v |= 1
                        }
                        var x = pg(ug(n.Ba), h);
                        x > f && (x = f, v |= 2);
                        q = new Oq(n, q ? x - t : 1, v);
                        (n = lm(n)) && n.g && "CHIP" != n.i ? c[t].push(q) : (b[t].push(q), d++)
                    }
                }
                a = {
                    Uf: b,
                    wh: c,
                    Vg: d
                }
            }
            this.g = a.Uf;
            this.o = a.wh;
            this.u = a.Vg;
            this.s = e || 0
        },
        Oq = function(a, b, c) {
            this.event =
                a;
            this.g = b;
            this.flags = c
        },
        Sq = function(a, b) {
            for (var c = a.j, d = a.u, e = a.v, f = fb(c), g = fb(c), h = fb(c), k = [], l = 0, n = 0; d;) {
                l == c && (l = 0, n++);
                var q = a.g[l][f[l]++];
                if (q) {
                    for (var v = q.g; v--;) h[l] = n, n + 1 == e ? k[l] = q : n >= e && (g[l]++, k[l] && (k[l].re = !0)), l++;
                    --d
                } else l++
            }
            f = fb(c);
            d = [];
            v = n;
            n = 0;
            switch (a.s) {
                case 2:
                    for (l = 0; l < c; l++)
                        if (a.g[l].length && !(g[l] || k[l] && k[l].re)) {
                            n = 1;
                            break
                        } break;
                case 1:
                    n = 1
            }
            e = Math.min(v, e - 1);
            var t = e + 1 + n;
            for (n = 0; n < t; n++) {
                var x = t - n;
                b.Ja.push(P("<tr>"));
                for (l = 0; l < c; l++)
                    if (!d[l]) {
                        q = a.g[l][f[l]++];
                        var u = n >= h[l];
                        if (n == e && (g[l] || k[l] && k[l].re)) {
                            u = b;
                            q = wg(a.i, l);
                            var A = g[l] + (k[l] ? 1 : 0);
                            if (u.o && u.Pb) {
                                var z = new Op;
                                A = {
                                    NUM_EVENTS: A
                                };
                                if (z.o) {
                                    z.s = [];
                                    var C = Tp(z, z.o);
                                    z.i = aq(z, C);
                                    z.o = null
                                }
                                if (z.i && 0 != z.i.length) {
                                    z.g = ab(z.s);
                                    C = [];
                                    Rp(z, z.i, A, !1, C);
                                    for (A = C.join(""); 0 < z.g.length;) A = A.replace(z.j(z.g), z.g.pop());
                                    z = A
                                } else z = ""
                            } else z = u.o ? "\u25bc" : "+" + A + " more";
                            u.Ja.push(Qq({
                                Wf: Y,
                                Pg: "ca-mlp" + q.ya(),
                                sh: u.o,
                                Pb: u.Pb,
                                content: z
                            }))
                        } else if (q && n <= e) {
                            z = 1;
                            1 < q.g ? l += q.g - 1 : u && n != v && (z = x, d[l] = !0);
                            u = b;
                            A = !!(q.flags & 1);
                            C = !!(q.flags & 2);
                            var J =
                                "ca-evp" + Ka(q.event);
                            u.W(q, A, J);
                            u.j(q, z, !1, A, C, J);
                            u.v(q, C, J)
                        } else d[l] = u, b.Ja.push(Rq({
                            ha: Y.Vc + " " + Y.lf,
                            Gd: u ? x : 1
                        }))
                    }
            }
        };
    var Tq = function(a) {
            var b = a.id,
                c = a.ha;
            w(a.Fb);
            a = a.Fb;
            b = '<table id="' + R(b) + '" cellpadding=0 cellspacing=0 class="' + R(c) + '"><tr>';
            c = a.length;
            for (var d = 0; d < c; d++) {
                var e = a[d];
                b += "<td" + (e.ha ? ' class="' + R(e.ha) + '"' : "") + ">&nbsp;</td>"
            }
            return P(b + "</tr></table>")
        },
        Uq = function(a) {
            var b = a.ha;
            w(a.Fb);
            a = a.Fb;
            b = '<table cellpadding=0 cellspacing=0 class="' + R(b) + '"><tr>';
            for (var c = a.length, d = 0; d < c; d++) b += '<td class="' + R(a[d].ha) + '">&nbsp;</td>';
            return P(b + "</tr></table>")
        },
        Vq = function() {
            return P('<table cellpadding="0" cellspacing="0" class="' +
                R({
                    ha: Y.jf
                }.ha) + '">')
        },
        Wq = function(a) {
            w(a.Fb);
            var b = a.Fb;
            a = a.Fa;
            for (var c = "<tr>", d = b.length, e = 0; e < d; e++) {
                var f = b[e];
                c += '<td class="' + R(f.ha) + '"' + (tj(null == a ? null : a.Qb) && -1 != f.ha.indexOf("st-dtitle") && -1 == f.ha.indexOf("st-dtitle-nonmonth") && -1 == f.ha.indexOf("st-dtitle-today") ? ' style="background-color:' + R(S(a.Qb)) + '"' : "") + ">" + Q(f.uh) + '<span class="' + R(f.jh) + '">' + Q(f.jg) + "</span></td>"
            }
            return P(c + "</tr>")
        },
        Rq = function(a) {
            var b = a.Gd;
            return P('<td class="' + R(a.ha) + '"' + (1 < b ? ' rowspan="' + R(b) + '"' : "") + ">&nbsp;")
        },
        Xq = function(a) {
            var b = a.ng,
                c = a.Gd,
                d = a.dg,
                e = a.rg;
            return P('<td class="' + R(a.ha) + '"' + (1 < c ? ' rowspan="' + R(c) + '"' : "") + (1 < d ? ' colspan="' + R(d) + '"' : "") + '><div class="' + R(b) + '">' + Q(e) + "</div></td>")
        },
        Qq = function(a) {
            var b = a.Wf,
                c = a.Pg,
                d = a.Pb,
                e = a.content;
            a = a.sh ? d ? '<div class="' + R(c) + " " + R(b.Zc) + " " + R(b.Bf) + '">' + Q(e) + "</div>" : '<div class="' + R(c) + " " + R(b.Zc) + " " + R(b.uf) + '">' + Q(e) + "</div>" : '<span class="' + R(c) + " " + R(b.Zc) + " " + R(b.Af) + '">' + Q(e) + "</span>";
            return P('<td class="' + R(b.Vc) + " " + R(b.tf) + '">' + a + "</td>")
        };
    var Yq = function(a) {
        a = a.qg;
        return P(a ? '<span class="te-c ' + R("VIpgJd-TzA9Ye-eEGnhe") + '" style="background-color:' + R(S(a)) + '">&nbsp;</span>' : "")
    };
    var Zq = function(a, b, c, d, e, f) {
            this.i = a;
            this.g = b;
            this.w = c || !1;
            this.o = !!d;
            this.s = !!e;
            this.Pb = b.uc();
            a = ch();
            this.ma = Zg(a.get(Jd), 107);
            this.u = f || null;
            this.Ja = null
        },
        $q = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = lm(d.event);
                e.g && (d = "ca-evp" + Ka(d.event) + " " + Y.Ff, e.getUrl() && (d += " " + Y.Gf), b.push({
                    title: e.getTitle(),
                    url: e.g,
                    ha: d
                }))
            }
            a = "";
            w(b);
            c = b.length;
            for (e = 0; e < c; e++) d = b[e], a += '<img src="' + R(Rj(d.url)) + '" class="' + R(d.ha) + '" title="' + R(d.title) + '" alt="' + R(d.title) + '">';
            return P(a)
        };
    Zq.prototype.W = function() {};
    Zq.prototype.j = function(a, b, c, d, e, f) {
        this.Ja.push(Xq({
            ha: Y.Vc,
            Gd: b,
            dg: a.g,
            ng: Y.kf,
            rg: ar(this, a.event, d, e, f)
        }))
    };
    Zq.prototype.v = function() {};
    var ar = function(a, b, c, d, e) {
            if (b.Ub || b.Xa) {
                c = !!c;
                var f = !!d;
                e = void 0 === e ? "" : e;
                var g;
                d = a.g.j(b);
                a.s && (g = "evt-lk ca-elp" + Ka(b));
                var h = Q("");
                if (!b.Xa && !c) {
                    var k = "(" + lq(a.i, b.Ea()) + ")";
                    var l = wb.test(k) ? "\u200f" : "\u200e";
                    k = k.replace(Ab, l + "$&" + l)
                }
                l = Vm(b);
                if (a.ma) {
                    var n = b.ac;
                    l = n ? vp({
                        zd: n,
                        title: l
                    }) : l
                }
                g = P(Q(d) + (k ? Q(k) + " " : "") + (g ? '<span class="' + R(g) + '">' + Q(l) + "</span>" : Q(l)) + Q(h));
                d = cq(a.g, b);
                k = op(d);
                h = k.s;
                d = a.g.i(b) ? k.g : k.j;
                (l = Wm(b)) && (d = l);
                var q;
                a.g.uc() && (q = k.o);
                a = [];
                c && a.push(Y.Pd);
                f && a.push(Y.zf);
                a = a.join(" ");
                c = br(c, f, d, q);
                b = Nq(g, -1 == Fb(b.getTitle()), d, h, e, c, a, q)
            } else q = e, q = void 0 === q ? "" : q, c = a.g.j(b), e = Vm(b), g = Q(""), a.s && (f = "evt-lk ca-elp" + Ka(b)), f = P((f ? '<span class="' + R(f) + '">' + Q(e) + "</span>" : Q(e)) + Q(g)), e = a.g.i(b), g = cq(a.g, b), g = op(g), e = e ? g.V : g.ta, g = Wm(b), b = lq(a.i, b.Ea(), !0, a.w), b = {
                color: e,
                time: b,
                xe: c,
                Je: f,
                Lb: q,
                qg: g,
                Mg: !1,
                Fd: "rtl"
            }, -1 == Fb(f.toString()) ? (a = b.color, q = b.xe, c = b.time, f = b.Je, e = b.Fd, b = P('<div class="' + R(b.Lb) + ' te" style="color:' + R(S(a)) + '"><table cellpadding=0 cellspacing=0 class="te-rev"><tr><td class="te-t">' +
                Q(q) + Q(c) + "&nbsp;</td><td>" + Yq(b) + '&nbsp;</td><td class="te-rev-s"><div class="te-rev-spos">&nbsp;<div class="te-rev-scont" dir="' + R(e) + '">' + Q(f) + "</div></div></td></tr></table></div>")) : (a = b.color, q = b.xe, c = b.time, f = b.Je, e = b.Mg, b = P('<div class="' + R(b.Lb) + ' te" style="color:' + R(S(a)) + '"><span class="te-t">' + Q(q) + Q(c) + "&nbsp;</span>" + Yq(b) + '<span class="te-s"' + (e ? ' dir="rtl"' : "") + ">" + Q(f) + "</span></div>"));
            return b
        },
        br = function(a, b, c, d) {
            var e = [];
            a && (e.push({
                ha: Y.vf,
                color: d || c
            }), e.push({
                ha: Y.wf,
                color: c
            }));
            b && (e.push({
                ha: Y.xf,
                color: d || c
            }), e.push({
                ha: Y.yf,
                color: c
            }));
            c = "";
            w(e);
            a = e.length;
            for (b = 0; b < a; b++) {
                d = e[b];
                var f = d.color;
                d = P('<div class="' + R(d.ha) + '" style="border-color: transparent ' + R(S(f)) + '"></div>');
                c += d
            }
            return P(c)
        },
        Y = {
            Ve: "st-bg-table",
            Se: "st-bg-all",
            Id: "st-bg",
            Te: "st-bg-fc",
            Ue: "st-bg-lc",
            Jd: "st-bg-today",
            Kd: "st-bg-next",
            We: "st-bg-td-first",
            Sc: "st-bg-td-last",
            Xe: "st-dtitle",
            $e: "st-dtitle-fr",
            Ze: "st-dtitle-fc",
            af: "st-dtitle-lc",
            ff: "st-dtitle-today",
            df: "st-dtitle-next",
            Ye: "st-dtitle-down",
            ef: "st-dtitle-nonmonth",
            jf: "st-grid",
            Vc: "st-c",
            kf: "st-c-pos",
            lf: "st-s",
            uf: "st-moreicon",
            vf: "st-ad-ml",
            wf: "st-ad-ml2",
            Pd: "st-ad-mpad",
            xf: "st-ad-mr",
            yf: "st-ad-mr2",
            zf: "st-ad-mpadr",
            tf: "st-more-c",
            Zc: "st-more",
            Af: "st-moreul",
            Bf: "st-morewk",
            Ff: "st-wc",
            Gf: "st-wc-click"
        };
    var cr = function(a, b, c, d) {
        Zq.call(this, a, b, c, !1, d)
    };
    p(cr, Zq);
    cr.prototype.W = function(a, b, c) {
        a = a.event;
        dr(this, a, c, b, !1, a.Ea())
    };
    cr.prototype.v = function(a, b, c) {
        a = a.event;
        var d = a.Ba;
        d = wg(ug(d), -1);
        dr(this, a, c, !1, b, d)
    };
    cr.prototype.j = function(a, b, c, d, e, f) {
        this.Pb || (e = d = !1);
        Zq.prototype.j.call(this, a, b, c, d, e, f)
    };
    var dr = function(a, b, c, d, e, f) {
        var g = "",
            h = "wk-sideevents";
        if (e || d)
            if (f = pn(a.i, f), a.Pb && f) h = d ? "wk-sideeventsb" : "wk-sideeventsa", g = f;
            else if (!a.Pb) {
            g = a.g.g(b);
            b = (b = Wm(b)) ? b : g.j;
            g = "";
            d && (c += " wk-more-prealign", g = Y.Pd);
            var k = -1 == Fb(f);
            g = Nq(Q(f), k, b, "", c, br(d, e, b), g)
        }
        a.Ja.push(Kq({
            ha: h,
            eg: g
        }))
    };
    var er = function() {};
    var fr = function(a, b) {
        this.g = a;
        this.j = b
    };
    D(fr, er);
    fr.prototype.render = function(a, b, c, d) {
        var e, f;
        var g = this.o;
        if ((e = a.i) && e.g) {
            var h = e.g;
            e = e.getTitle();
            var k = this.s;
            var l = Ka(a);
            h = P('<span onclick="' + R(Kj(k)) + "(" + R(Kj(l)) + ', this)" class="agenda-wc"><img src="' + R(Rj(h)) + '" class="agenda-web-content" title="' + R(e) + '" alt="' + R(e) + '"></span>');
            c.push("web-content")
        }
        c = c.join(" ");
        e = Tl(this.g, new Ol(a.Ea(), a.Ba));
        l = !1;
        if (a.Xa) k = "All day", l = !0;
        else {
            k = a.Ea().ua();
            var n = a.Ba.ua();
            a.Ub || k !== n ? k === b ? k = lq(this.g, a.Ea(), !1, !1) : n === b ? k = "\u00bb\u00a0" + lq(this.g,
                a.Ba, !1, !1) : (k = "All day", l = !0) : k = lq(this.g, a.Ea(), !1, !1)
        }
        n = Vm(a);
        var q = this.j.g(a).g;
        a = Ka(a) + "-" + b;
        d && (f = Gd(d));
        d = h;
        return P('<div class="' + R(c) + '"' + ((null == f ? 0 : f.Ca) ? ' style="border-top-color:' + R(S(f.Ca)) + '"' : "") + '><div class="' + (l ? "all-day " : "") + 'event-summary" id="' + R(a) + '" onmousedown="' + R(Kj(g)) + '(this, event);return false;"><span class="event-time" alt="' + R(e) + '" title="' + R(e) + '">' + Q(k) + '</span><div class="title-wrapper"><span class="event-reply-status">&nbsp;</span><span class="event-title" style="color: ' +
            R(S(q)) + ';">' + Q(null != d ? d : "") + Q(n) + '</span></div></div><div class="event-details" id="details-' + R(a) + '"></div></div>')
    };
    fr.prototype.i = Ca;
    var Ek = function() {
            this.g = {};
            this.j = {};
            this.i = this.Ba = this.hb = null
        },
        gr = function(a, b) {
            var c = b.start.ua();
            b = b.g.ua();
            var d = c.ya();
            c = b.ya();
            b = {};
            for (var e = []; d < c; d = aa(d))
                if (d in a.g) {
                    var f = a.g[d];
                    if (f) {
                        for (var g in f) {
                            var h = f[g];
                            h.tc ? delete f[g] : g in b || (e.push(h), b[g] = 1)
                        }
                        kb(f) && delete a.g[d]
                    }
                } return e
        };
    var hr = function() {
        M.call(this);
        this.g = {};
        this.o = {};
        this.j = {};
        this.i = {};
        this.s = {}
    };
    p(hr, M);
    hr.prototype.Ya = function(a, b) {
        a.sort();
        return b.toString() + ":" + a.join(",")
    };
    var ip = function(a, b, c, d) {
            var e = a.Ya(b, c);
            if (e in a.s) d(a.s[e]);
            else if (e in a.i) a.i[e].push(d);
            else if (b = jp(a, b, c, d), b.o = e, ++a.u, a.i[e] = [d], kb(b.g)) ir(a, b);
            else
                for (var f in b.g) d = a.o[f], e = y(a.v, a, f, b), d.g(b.g[f], e)
        },
        jp = function(a, b, c, d, e) {
            var f = jr++;
            d = new kr(f, d, c);
            for (f = 0; f < b.length; ++f) {
                var g = b[f],
                    h = a.g[g];
                var k = h;
                var l = c,
                    n = e ? h.i : null;
                if (k.hb && k.Ba) {
                    n = !!n && (null == k.i || n >= k.i);
                    var q = l.start.H() < k.hb.H(),
                        v = l.g.H() > k.Ba.H();
                    k = q || v ? q && v ? l : v ? new Ol(n ? k.hb : k.Ba, l.g.ua()) : new Ol(l.start.ua(), n ? k.Ba : k.hb) :
                        n ? new Ol(k.hb, k.Ba) : null
                } else k = l;
                k ? d.g[g] = k : e || d.i.push(gr(h, c))
            }
            return d
        };
    hr.prototype.v = function(a, b, c, d) {
        c && lr(this, a, c, b.j, d ? d : void 0);
        b.i.push(gr(this.g[a], b.j));
        delete b.g[a];
        kb(b.g) && (ir(this, b), this.dispatchEvent(mr))
    };
    var ir = function(a, b) {
        --a.u;
        var c = b.i;
        for (var d = [], e = 0; e < c.length; ++e) bb(d, c[e]);
        c = d.sort(Na(jm, mm));
        (b = b.o) && (a.s[b] = c);
        d = a.i[b];
        for (e = 0; e < d.length; ++e) d[e](c);
        delete a.i[b]
    };
    hr.prototype.w = function(a, b, c, d) {
        c && (lr(this, a, c, b.j, d ? d : void 0), b.i.push(c));
        delete b.g[a];
        kb(b.g) && (b.s(), this.dispatchEvent(mr))
    };
    var lr = function(a, b, c, d, e) {
        b = a.g[b];
        for (var f = 0, g = c.length; f < g; ++f) {
            var h = c[f],
                k = h.getId(),
                l = b.j[k];
            l && (l.tc = !0);
            if (h.tc) delete b.j[k];
            else {
                var n = h.Ea().ya();
                l = h.Ba.ya();
                h.Xa || h.jd || (l = aa(l));
                for (b.j[k] = h; n < l; n = aa(n)) {
                    if (n in b.g) var q = b.g[n];
                    else q = [], b.g[n] = q;
                    q[k] = h
                }
            }
        }
        if (d) {
            if (!b.hb || d.start.H() <= b.hb.H()) {
                b.hb = d.start.ua();
                var v = !0
            }
            if (!b.Ba || d.g.H() >= b.Ba.H()) {
                b.Ba = d.g.ua();
                var t = !0
            }
            e && v && t && (!b.i || e > b.i) && (b.i = e)
        }
        for (d = 0; d < c.length; ++d) e = c[d].getId(), e in a.j && c[d].tc ? delete a.j[e] : a.j[e] = c[d];
        a.s = {}
    };
    hr.prototype.u = 0;
    var jr = 1,
        kr = function(a, b, c) {
            this.id = a;
            this.s = b;
            this.j = c;
            this.o = null;
            this.i = [];
            this.g = {}
        },
        mr = "s";
    var or = function(a, b, c) {
        K.call(this);
        this.g = a;
        this.j = b;
        this.o = new fh(this);
        if (c || .05 > Math.random()) this.o.listen(this.j, "g", this.s), this.o.listen(this.j, ["h", "i"], this.u);
        nr(this)
    };
    p(or, K);
    or.prototype.ka = function() {
        this.o.Ga()
    };
    var nr = function(a) {
        var b = r.gcal$perf$serverTime,
            c = r.gcal$perf$headStartTime;
        void 0 !== b && void 0 !== c && (a.g.log("container", B() - c + b), ie(a.j, "i", function(d) {
            var e = B() - c;
            this.g.log(d.target.getType() + "_loadTime", e);
            this.g.log(d.target.getType() + "_totalLoadTime", e + b)
        }, !1, a))
    };
    or.prototype.s = function() {
        this.i = new Yh(this.g)
    };
    or.prototype.u = function(a) {
        if (this.i) {
            var b = "i" == a.type,
                c = this.i,
                d = b ? "insertDom" : "computeContent";
            d = a.target.getType() + "_" + d || c.j;
            var e = B();
            c.o.log(d, e - c.i);
            c.i = e;
            b && (b = this.i, a = a.target.getType() + "_render" || b.j, c = B(), b.o.log(a, c - b.g), b.i = c, this.i = null)
        }
    };
    var pr = function(a) {
        (a || window).location.reload(!0)
    };
    var qr = function(a, b, c) {
        if (!kb(a.g) || 0 < a.i.length) b = Uh(a, b), (c || Ih)("perf", null, "POST", Ch(b)), a.reset()
    };
    var rr = function(a, b, c) {
        K.call(this);
        this.yd = null != c ? y(a, c) : a;
        this.j = b;
        this.i = y(this.Xg, this);
        this.g = []
    };
    D(rr, K);
    m = rr.prototype;
    m.Qc = !1;
    m.kc = null;
    m.vg = function(a) {
        this.g = arguments;
        this.kc ? this.Qc = !0 : sr(this)
    };
    m.stop = function() {
        this.kc && (r.clearTimeout(this.kc), this.kc = null, this.Qc = !1, this.g = [])
    };
    m.ka = function() {
        rr.Ka.ka.call(this);
        this.stop()
    };
    m.Xg = function() {
        this.kc = null;
        this.Qc && (this.Qc = !1, sr(this))
    };
    var sr = function(a) {
        a.kc = xh(a.i, a.j);
        a.yd.apply(null, a.g)
    };
    var tr = function(a, b) {
        K.call(this);
        Xg = new Yg(b.features);
        Zf(a, Jd, Xg);
        this.data = b;
        this.g = new Jq(b);
        zm.gcal$connect$ApiV3Calendar = new Am
    };
    D(tr, K);
    tr.prototype.s = null;
    tr.prototype.setup = function() {
        var a = this.data,
            b = Fe(document, a.kb || "container"),
            c = this.g.wa;
        (c = c && c.g) && (El = c);
        this.v = new hr;
        this.j = new Gn(!1);
        xh(pr, 72E6 + Math.floor(108E5 * Math.random()));
        ur(this, a);
        a.skin && (b.className = b.className + " " + a.skin);
        b.style.position = "relative";
        this.u(b);
        vr(this, b);
        this.i = new ep(b, this.g, this.v, this.j, a);
        this.s = new Th;
        new or(this.s, this.i);
        this.data.loggedin && (a = window.location.pathname, a = Na(qr, this.s, a.substr(a.lastIndexOf("/") + 1) + "_", void 0), window.setTimeout(a, 3E5), window.setInterval(a,
            36E5));
        a = Ng(this.g.g);
        this.o && !this.o.contains(a) && (a = this.o.start);
        this.i.u.j(a);
        a = this.i;
        b = new wr;
        "day" == this.data.view && new xr(a, this.g, b, 1);
        new xr(a, this.g, b);
        new yr(a, this.g, b);
        new en(a, this.g, new fr(this.g.i, b));
        this.i.Rb(this.data.view)
    };
    var vr = function(a, b) {
        a = y(a.u, a, b);
        var c = new rr(a, 100);
        L(window, "resize", function() {
            c.vg()
        })
    };
    tr.prototype.u = function(a, b) {
        if (this.g.V) {
            var c = (c = Fe(document, "calendarTitle")) ? c.offsetHeight : 0;
            var d = Fe(document, "warningBox");
            d && (c += d.offsetHeight);
            d = Le(O(a).g);
            b = b || Je(d || window).height;
            this.w != b && (c = b - c, 0 >= c && (c = 1), a.style.height = c + "px", this.i && Rl(this.i), this.w = b)
        }
    };
    var ur = function(a, b) {
        var c = b.preloadStart,
            d = b.preloadEnd;
        c && d && (a.o = new Ol(om(c), om(d)));
        var e = zm[b.calendarFactoryClass || "gcal$connect$ApiV3Calendar"] || null;
        e.init(a.g, a.v);
        var f = b.cids || {};
        hm(a.j, function() {
            for (var g in f) {
                var h = e;
                var k = g,
                    l = f[g],
                    n = l.color,
                    q = l.title;
                l = l.access || 0;
                n ? (n = sk(n), n = 0 <= n ? qk(n) : null) : n = void 0;
                h = h.create(k, l, n, q);
                k = f[g].hidden;
                this.j.add(new Fn(h), k)
            }
        }, a)
    };
    var wr = function() {};
    p(wr, bq);
    wr.prototype.g = function(a) {
        return a.g.o
    };
    wr.prototype.j = function(a) {
        a = lm(a);
        a = a = {
            icon: a && a.g
        };
        a = a.src;
        return P(a ? '<img class=cwci src="' + R(Rj(a)) + '">' : "")
    };
    wr.prototype.i = function(a) {
        a = a.lc;
        return 2 == a || 6 == a
    };
    var zr = function(a) {
        var b = a.ha;
        w(a.Gb);
        a = a.Gb;
        b = '<div class="' + R(b) + '">';
        for (var c = a.length, d = 0; d < c; d++) b += Q(a[d]);
        return P(b + "</div>")
    };
    var Z = function(a, b, c, d, e) {
        this.id = Ar++;
        this.type = c;
        this.u = b.i;
        this.w = new yn(Pl(a).parentNode);
        this.Ha = e;
        Sl.call(this, a, b, c, d, a.g)
    };
    D(Z, Sl);
    var Ar = Ar || 1;
    Z.prototype.La = null;
    Z.prototype.render = function() {
        Z.Ka.render.call(this);
        this.w.ne()
    };
    var Br = function(a, b) {
        var c = a.Ha.g(b).g,
            d = Vm(b),
            e = Ul(a, b);
        if (b.j) {
            var f = encodeURI(b.j);
            a = Xl(a, b);
            f = P('<div class="separator" style="background-color: ' + R(S(c)) + ';"></div><span class="links"><a href="' + R(Pj(f)) + '" target="_blank">' + Q("more details") + '&raquo;</a>&nbsp;&nbsp;<a href="' + R(Pj(a)) + '" target="_blank">' + Q("copy to my calendar") + "&raquo;</a></span>")
        }
        a = f;
        return P('<div class="details"><span class="title" style="color: ' + R(S(c)) + '">' + Q(d) + '</span><div class="detail-content">' + Q(e) + "</div>" +
            Q(null != a ? a : "") + "</div>")
    };
    Z.prototype.tb = function(a, b) {
        a = dq("ca-evp", a);
        a = parseInt(a, 10);
        var c = this.j[a].i;
        c && c.getUrl() ? this.Jb(a, b.target) : (a = this.j[a], c = b.clientX + document.documentElement.scrollLeft, b = b.clientY + document.documentElement.scrollTop, y(this.w.render, this.w, c, b), a && this.w.render(c, b, Br(this, a)))
    };
    Z.prototype.ub = function(a) {
        var b = dq("ca-mlp", a);
        b = Gg(parseInt(b, 10));
        var c = Ue(a, "TD"),
            d = Ue(a, "TABLE");
        a = cl(c).x;
        c = cl(d).g;
        d = this.oe(b);
        var e = [];
        d.jc.Ja = e;
        d.jc.Ja.push(Vq());
        Sq(new Pq(this.La, b, 1, 99), d.jc);
        d.jc.Ja.push(P("</table>"));
        this.va.render(a, c, d.width, null, d.title, zr({
            ha: d.$d,
            Gb: e
        }))
    };
    Z.prototype.oe = function(a) {
        return {
            title: jn(this.u, a),
            jc: new Zq(this.u, this.Ha),
            $d: "st-contents",
            width: 225
        }
    };
    Z.prototype.register = function() {
        Z.Ka.register.call(this);
        this.w.init()
    };
    var Cr = function(a) {
        var b = a.xh,
            c = a.row,
            d = a.ab;
        w(a.Gb);
        a = a.Gb;
        b = '<div class=month-row style="top:' + R(S(b * c)) + "%;" + (c < d - 1 ? "height:" + R(S(b + 1)) + "%" : "bottom:0") + '">';
        c = a.length;
        for (d = 0; d < c; d++) b += Q(a[d]);
        return P(b + "</div>")
    };
    var Dr = function(a, b, c, d) {
        this.i = a;
        this.g = b;
        this.o = c;
        this.j = d || null
    };
    var Er = function(a) {
        K.call(this);
        this.i = a;
        this.s = [];
        this.j = [];
        this.u = [];
        this.g = new fh(this)
    };
    D(Er, K);
    Er.prototype.v = !1;
    Er.prototype.ka = function() {
        this.g.Ga();
        this.u = this.j = this.s = this.i = this.g = null
    };
    var Fr = function(a) {
            this.g = a
        },
        Gr = function(a, b) {
            this.g = a;
            this.i = b
        };
    D(Gr, Fr);
    var Hr = function(a, b, c) {
        b = new Gr(b, c);
        a.v || (jh(a.g, a.i, y(a.o, a, a.s)), a.g.listen(a.i, "click", y(a.o, a, a.j)), a.g.listen(a.i, "dblclick", y(a.o, a, a.u)), a.v = !0);
        a.j.push(b)
    };
    Er.prototype.o = function(a, b) {
        for (var c = b.target, d = 0; d < a.length; d++) {
            var e = a[d],
                f = e.g(c);
            if (f) {
                e.i(f, b);
                b.preventDefault();
                break
            }
        }
    };
    var yr = function(a, b, c, d) {
        d = parseInt(d, 10) || 0;
        if (2 > d || 4 < d) d = 0;
        var e = d ? "next" + d + "weeks" : "month";
        var f = d ? new Fm(7 * d, b.j) : new Gm;
        Z.call(this, a, b, e, f, c);
        this.ta = new fh(this);
        (this.T = d) ? this.Mb = [null, null, "2 Weeks", "3 Weeks", "4 Weeks"][d]: this.Mb = "Month";
        Ir(this);
        this.V = a.o;
        this.wa = new Zq(this.u, c, void 0, void 0, void 0, this.V);
        this.Ma = new Dr(this.u, this.wa, this.id + "", this.V)
    };
    p(yr, Z);
    var Ir = function(a) {
        var b = a.Ra();
        a.Da = new zo(a.g.g, b.start, Math.ceil(b.duration.S / 7), a.i.o ? 7 : 5, 7)
    };
    m = yr.prototype;
    m.Ra = function() {
        var a = xg(this.g.i, this.i.j),
            b = yg(this.g.o, this.i.j + 6);
        this.i.o || (a = yg(a, this.i.W), b = xg(b, this.i.W + this.i.T - 1));
        return new Ol(a, tg(b))
    };
    m.ld = function() {
        if (this.T) var a = Gq(this.u, this.Ra());
        else {
            a = this.u;
            if (this.T) var b = null;
            else b = this.g.g, b = sg(b.year, b.month, 1);
            a = po(a, b)
        }
        return a
    };
    m.register = function() {
        Z.prototype.register.call(this)
    };
    m.Sg = function(a) {
        this.dispatchEvent("g");
        var b, c = this.Ma,
            d = this.Da,
            e = Ng(this.i.g),
            f = this.g.g.month,
            g = Math.max(1, Math.floor(((this.Db - 14) / d.ab - 17) / 17)),
            h = [];
        for (b = 0; b < d.Qa; b++) {
            var k = d,
                l = b;
            k = Gg(qo(k)[0 * k.Qa + l]).Wa();
            l = c.i;
            k = oo(l.g.i[k], "ru" == H(l.g.g, 1));
            h.push(k)
        }
        k = 100 / d.ab;
        b = [];
        for (l = 0; l < d.ab; l++) {
            var n = [];
            c.g.Ja = n;
            var q = d,
                v = l;
            var t = Gg(qo(q)[v * q.Qa]);
            q = c.g;
            v = d.Qa;
            for (var x = e, u = [], A = !0, z = v, C = t; z--; C = tg(C)) {
                var J = [Y.Id];
                A && (A = !1, J.push(Y.Te));
                C.equals(x) && (0 == z && q.g.uc() ? J.push(Y.Sc) : J.push(Y.Jd));
                C.equals(tg(x)) && z != v - 1 && J.push(Y.Kd);
                u.push({
                    ha: J.join(" ")
                })
            }
            q.Ja.push(Uq({
                ha: Y.Ve,
                Fb: u
            }));
            c.g.Ja.push(Vq());
            q = new Pq(a, t, d.Qa, g);
            v = c.g;
            x = d.Qa;
            u = e;
            A = f;
            z = q.o;
            C = y(c.i.j, c.i);
            J = 0 == l;
            for (var ma = [], U = !0, Ac = tg(u), Wa = wg(u, 7), ya = 0; ya < x; ya++) {
                var qa = wg(t, ya),
                    ka = [Y.Xe];
                J && ka.push(Y.$e);
                U && (U = !1, ka.push(Y.Ze));
                u.equals(qa) && (ka.push(Y.ff), ya == x - 1 && ka.push(Y.af));
                Ac.equals(qa) && 0 != ya && ka.push(Y.df);
                Wa.equals(qa) && ka.push(Y.Ye);
                qa.month != A && ka.push(Y.ef);
                ma.push({
                    ha: ka.join(" "),
                    jh: "ca-cdp" + qa.ya(),
                    jg: C(qa),
                    uh: $q(z[ya])
                })
            }
            v.Ja.push(Wq({
                Fb: ma,
                Fa: v.u ? Gd(v.u) : null
            }));
            Sq(q, c.g);
            c.g.Ja.push(P("</table>"));
            b.push(Cr({
                xh: k,
                row: l,
                ab: d.ab,
                Gb: n
            }));
            c.g.Ja = null
        }
        d = c.o;
        e = c.j ? Gd(c.j) : null;
        w(h);
        w(b);
        c = '<div class="mv-container"><table cellpadding=0 cellspacing=0 class="mv-daynames-table" id="mvDaynamesTable"' + ((null == e ? 0 : e.Ca) ? ' style="background-color:' + R(S(e.Ca)) + '"' : "") + "><tr>";
        f = h.length;
        for (g = 0; g < f; g++) k = h[g], c += '<th class="mv-dayname" title="' + R(k) + '"' + ((null == e ? 0 : e.Nc) ? ' style="color:' + R(S(e.Nc)) + '"' : "") + ">" +
            Q(k) + "</th>";
        c += '</tr></table><div class="mv-event-container" id="mvEventContainer' + R(d) + '"' + ((null == e ? 0 : e.Ca) ? ' style="border-top-color:' + R(S(e.Ca)) + "; border-bottom-color:" + R(S(e.Ca)) + ';"' : "") + ">";
        h = b.length;
        for (d = 0; d < h; d++) c += Q(b[d]);
        b = P(c + "</div></div>");
        this.dispatchEvent("h");
        this.Xb();
        h = Pl(this.kb);
        wc(h, Mk(b));
        this.j = {};
        this.v = {};
        Vl(this, a);
        this.La = a.slice();
        a = new Er(h);
        Hr(a, Na(fq, h), y(this.tb, this));
        Hr(a, gq, y(this.ub, this));
        this.o = a;
        this.dispatchEvent("i")
    };
    m.Xb = function() {
        Z.prototype.Xb.call(this);
        kh(this.ta);
        this.o && (this.o.Ga(), this.o = null)
    };
    m.render = function() {
        Z.prototype.render.call(this);
        Ir(this);
        this.Db = Pl(this.kb).offsetHeight;
        Zl(this, this.Ra(), y(this.Sg, this))
    };
    var Jr = function(a) {
        var b = a.style,
            c = a.height,
            d = a.text;
        a = a.Fa;
        return P('<div style="height:' + R(S(c)) + 'px;"><div class="' + R(b) + '" style="height:' + R(S(c - 1)) + "px;" + (-1 != b.indexOf("tg-time-pri") && tj(null == a ? null : a.Qb) ? "background-color:" + R(S(a.Qb)) + ";" : "") + '">' + Q(d) + "</div></div>")
    };
    var Kr = function(a, b) {
        this.g = a;
        this.Na = b || ""
    };
    Kr.prototype.setTitle = function(a) {
        this.Na = a
    };
    Kr.prototype.getTitle = function() {
        return this.Na
    };
    var Lr = function(a) {
        Kr.call(this, 4 < a.title.length ? 60 : a.o ? 50 : 40, a.title);
        this.o = a.i;
        this.j = a.g;
        this.i = a.Fa || null
    };
    D(Lr, Kr);
    var Mr = function(a, b, c) {
            for (var d = [], e = 0; 24 > e; ++e) {
                var f = 23 == e ? "tg-time-pri tg-time-pri-last" : "tg-time-pri";
                var g = a.j;
                var h = Nl(2E3, 1, 1, e, a.o, 0);
                g = lq(g, h.Hb(), !0);
                f = {
                    style: f,
                    height: 42,
                    text: g,
                    Fa: a.i ? Gd(a.i) : null
                };
                d.push(Jr(f))
            }
            a = "tg-times-pri" + (b ? "" : " tg-timesnotlast");
            w(d);
            w(c);
            a = '<td class="' + R(a) + '">';
            b = d.length;
            for (e = 0; e < b; e++) a += Q(d[e]);
            d = c.length;
            for (b = 0; b < d; b++) a += Q(c[b]);
            return P(a + "</td>")
        },
        Nr = function() {};
    Nr.prototype.isPrimary = !0;
    var Or = new function() {};
    var Pr = function(a, b) {
        this.g = a;
        this.o = b
    };
    Pr.prototype.j = Ca;
    Pr.prototype.i = Ca;
    Pr.prototype.isVisible = function() {
        return this.g
    };
    Pr.prototype.setVisible = function(a) {
        this.g = a
    };
    var Qr = function() {
        Pr.call(this, !1, 0, 0)
    };
    D(Qr, Pr);
    Qr.prototype.isVisible = function() {
        return !1
    };
    var Rr = function(a, b, c, d, e, f) {
        K.call(this);
        this.hb = a;
        this.i = d;
        this.g = f
    };
    p(Rr, K);
    Rr.prototype.ka = function() {
        K.prototype.ka.call(this)
    };
    Rr.prototype.U = function() {
        return null
    };
    var Sr = function(a, b, c, d) {
        this.event = a;
        this.Sb = b;
        this.g = c;
        this.Xf = d;
        this.Oc = []
    };
    var Tr = function(a) {
        var b = a.Yf,
            c = a.id,
            d = a.$f,
            e = a.Zf,
            f = a.Bg;
        w(a.Ne);
        var g = a.Ne;
        w(a.Fe);
        var h = a.Fe;
        w(a.fe);
        var k = a.fe;
        w(a.nc);
        a = a.nc;
        b = '<td class="' + R(b) + '">';
        for (var l = g.length, n = 0; n < l; n++) {
            var q = g[n];
            b += Q(null != q ? q : "")
        }
        b += '<div id="' + R(c) + "Col" + R(d) + '" class="tg-col-eventwrapper" style="height:' + R(S(e)) + "px;margin-bottom:-" + R(S(e)) + 'px;"><div class="' + R(f) + '">';
        e = a.length;
        for (f = 0; f < e; f++) b += Q(a[f]);
        a = k.length;
        for (e = 0; e < a; e++) f = k[e], b += Q(null != f ? f : "");
        b += '</div></div><div id="' + R(c) + "Over" + R(d) + '" class="tg-col-overlaywrapper">';
        c = h.length;
        for (d = 0; d < c; d++) k = h[d], b += Q(null != k ? k : "");
        return P(b + "</div></td>")
    };
    var Ur = function(a, b) {
        this.start = a < b ? a : b;
        this.g = a < b ? b : a
    };
    Ur.prototype.clone = function() {
        return new Ur(this.start, this.g)
    };
    var Xr = function(a, b, c) {
            this.ma = new iq(O(), a, b);
            this.u = !0;
            b = new Nr;
            b.title = "";
            b.i = 0;
            b.g = a;
            b.j = Or;
            b.Fa = c;
            this.g = [new Lr(b)];
            this.s = [];
            this.v = [];
            this.o = [];
            this.j = new Qr;
            this.s.push(Vr);
            this.o.push(Wr);
            this.W = null
        },
        Yr = function(a, b, c, d, e) {
            var f = a.ma;
            if (a.i)
                for (var g in a.i)
                    if (a.i[g].Eh(b, c)) {
                        f = a.i[g].jc;
                        break
                    } a = new un;
            a.Sb = b.Sb;
            a.i = b.g;
            a.event = b.event;
            a.left = b.left;
            a.width = b.ug;
            a.o = 0;
            a.u = .5;
            a.g = 42;
            a.s = 0;
            a.j = !b.mg;
            a.v = 24;
            g = f;
            var h = 1 == d;
            f = a.event;
            d = new qp;
            rp(d, 2, nq && !0);
            b = null != f.Ed.SS_asid;
            var k = f.we,
                l =
                cq(g.g, f),
                n = 0;
            b ? n = 3 : g.g.i(f) && (n = 2);
            var q = f.Xa && !!f.Ib && f.Ib.v(),
                v = Wm(f),
                t = 1;
            n = void 0 === n ? 0 : n;
            t = void 0 === t ? 1 : t;
            var x = op(l),
                u = !1;
            tp && 2 == n && (n = 4, u = !0);
            var A = x.s;
            switch (n) {
                case 1:
                    var z = x.wa;
                    var C = x.Da;
                    var J = x.Ha;
                    break;
                case 2:
                    z = x.g;
                    C = x.u;
                    J = x.i;
                    A = x.T;
                    u = !0;
                    break;
                case 3:
                    z = x.v;
                    C = x.W;
                    J = x.ma;
                    A = x.w;
                    break;
                default:
                    z = x.j, C = x.o, J = x.va
            }
            v && (z = v);
            1 > t && 2 != n && (v = v ? da(v) : x.g, v = ca(v, z, t), z == C ? C = z = v : (z = v, C = ca(x.u, C, t)), 3 != n && x.i && (J = ca(x.i, J, t)));
            d.j = l;
            d.i = z;
            d.o = C;
            d.s = J;
            d.W = A;
            d.w = u;
            n = 0 * a.g;
            l = a.v * a.g;
            d.Bc = 100 * a.left;
            d.Cc =
                "%";
            d.edge = "left";
            d.width = 100 * a.width;
            d.Pe = "%";
            t = a.event;
            t.Ib && t.Ib.v() && t.Xa ? (d.top = n, d.height = l - n) : (t = Math.round((a.Sb / 60 - a.s) * a.g), t = Math.max(n, t), d.top = t, n = Math.round((a.i / 60 - a.s) * a.g), n = Math.min(n, l), l = Math.max(n - t, a.g * a.o), d.Ng = l < a.u * a.g, d.height = l);
            l = q || !1;
            rp(d, 1, l);
            l && (l = d.j ? pp(d.j, d.i) : 15, d.ha.push("ro-chip-" + l));
            l = g.g.i(f);
            rp(d, 16, l);
            l && d.ha.push("rsvp-no-chip");
            rp(d, 4, !1);
            1 == f.Ec() && a.j && (l = f.getId().charCodeAt(1), n = 1 == f.Ec() ? f.Cd : null, d.ma = null, d.T = l, d.V = n);
            l = Vm(f);
            n = g.j ? 40 : 30;
            if (k) q =
                mq(g, f.Ea()), k = "", l = jq(l, f), h = kq(g, l, f, 1), d.text = h;
            else if (a.i - a.Sb > n) {
                q = mq(g, f.Ea(), f.Ba, void 0, q);
                k = "";
                l = jq(l, f);
                n = a.i - a.Sb;
                if (60 <= n || h) l = kq(g, l, f, Math.floor((n - 40) / 20));
                d.text = l
            } else h && (l = kq(g, l, f, 0)), q = mq(g, f.Ea(), f.Ba, l), k = l.getContent();
            g = g.g.j(f);
            h = q;
            q = Q("");
            g = P(Q(g) + Q(h) + " " + Q(q));
            d.v = g;
            d.u = k || "";
            f = "ca-evp" + Ka(f);
            d.ha.push(f);
            b && d.ha.push("av-chip");
            0 < a.left && (d.ha.push("chip-border"), (e = e && e.ua()) && c == e ? d.ha.push("chip-color-today") : d.ha.push("chip-color"));
            return d.Me()
        },
        Vr = function(a,
            b, c, d, e) {
            a = e && e.ua();
            var f;
            a && b == a ? f = P('<div class="tg-today" style="height:' + R(S(1008)) + "px;margin-bottom:-" + R(S(1008)) + 'px;">&nbsp;</div>') : f = null;
            return f
        },
        Wr = function(a, b, c, d, e) {
            a = e && e.ua();
            b == a ? (b = 42 * (e.hour + e.minute / 60) | 0, d = Zr(d, e), d = P('<div class="tg-hourmarker tg-nowmarker" id="' + R("tg") + 'nowmarker" style="top:' + R(S(b)) + "px;" + (d ? "" : "display:none;") + '"> </div>')) : d = null;
            return d
        };
    Xr.prototype.render = function(a, b, c) {
        var d = a.length;
        var e = this.g;
        for (var f = [], g = 0, h = e.length; g < h; g++) f.push(P('<td style="width:' + R(S({
            width: e[g].g
        }.width)) + 'px;"></td>'));
        f.push($r(this, d));
        c ? (g = (42 * (c.hour + c.minute / 60) | 0) - 4, h = Zr(this, c), g = [P('<div id="' + R("tg") + 'nowptr" class="tg-nowptr" style="' + R(S("left")) + ":" + R(S(0)) + "px;top:" + R(S(g)) + "px;" + (h ? "" : "display:none;") + '"></div>')]) : g = [];
        h = g;
        var k = -1;
        for (g = e.length - 1; 0 <= g; g--)
            if (e[g] instanceof Lr) {
                k = g;
                break
            } g = [];
        for (var l = 0, n = e.length; l < n; l++) g.push(Mr(e[l],
            l == n - 1, l == k ? h : []));
        w(f);
        w(g);
        e = '<tr height="1">';
        h = f.length;
        for (k = 0; k < h; k++) e += Q(f[k]);
        e += "</tr><tr>";
        f = g.length;
        for (h = 0; h < f; h++) e += Q(g[h]);
        e = P(e);
        g = b;
        f = [];
        for (h = 0; h < d; h++) {
            l = [];
            k = a[h];
            if (k.length) {
                l = k;
                n = g;
                for (var q = l.length, v = [], t = [], x = [], u = 0; u < q; ++u) {
                    var A = l[u],
                        z = A.Ea(),
                        C = Bg(z) || 0;
                    z.ya() < n.ya() && (C = 0);
                    var J = A.Ba;
                    z = Bg(J) || 0;
                    30 > z - C && (z = C + 30);
                    if (J.ya() > n.ya() || 1440 < z) z = 1440;
                    for (J = 0; t[J] > C;) J++;
                    A = new Sr(A, C, z, J);
                    var ma = x[J];
                    ma || (ma = x[J] = []);
                    ma.push(A);
                    t[J] = z;
                    v[J] = A;
                    0 != J && (A.Lc = [v[J - 1]], v[J - 1].Oc.push(A));
                    for (z = J + 1; t[z] <= C;) z++;
                    if (C = v[z]) A.Oc.push(C), C.Lc.push(A)
                }
                q = Array.prototype.concat.apply([], x);
                for (l = v = q.length; l--;) {
                    x = 1;
                    u = 0;
                    n = q[l];
                    for (t = n.Oc.length; t--;) C = n.Oc[t], u = Math.max(u, C.Ie), x = Math.min(x, C.left), C.Sb < n.Sb + 30 && (n.mg = !0);
                    n.Ie = u + 1;
                    n.width = x / (n.Xf + 1);
                    n.left = x - n.width
                }
                for (l = 0; l < v; l++) {
                    n = q[l];
                    n.left = 0;
                    if (n.Lc)
                        for (t = n.Lc.length; t--;) x = n.Lc[t], n.left = Math.max(n.left, x.left + x.width);
                    t = (1 - n.left) / n.Ie;
                    n.width = Math.max(n.width, t);
                    n.ug = Math.min(1 - n.left, n.width + .7 * t)
                }
                l = q;
                n = g;
                q = c;
                v = [];
                for (t = 0; t < l.length; t++) v.push(Yr(this,
                    l[t], n, d, q));
                l = v
            }
            n = [];
            for (q = 0; q < this.s.length; ++q) n.push(this.s[q](h, g, k, this, c));
            n.push(null);
            q = [];
            for (v = 0; v < this.v.length; ++v) q.push(this.v[v](h, g, k, this, c));
            q.push(null);
            v = [];
            for (t = 0; t < this.o.length; ++t) v.push(this.o[t](h, g, k, this, c));
            v.push(null);
            k = "tg-col";
            c && (g.equals(c.ua()) || 1 < d && g.equals(tg(c)) && 0 < h) && (k = "tg-col-today");
            t = g.Wa();
            f.push(Tr({
                Zf: 1008,
                id: "tg",
                $f: h,
                Ne: n,
                Yf: 0 == t || 6 == t ? k + " tg-weekend" : k,
                Bg: "tg-gutter",
                nc: l,
                fe: q,
                Fe: v
            }));
            g = tg(g)
        }
        g = c = 0;
        for (h = this.g.length; g < h; g++) c += this.g[g].g;
        h =
            g = NaN;
        a = Array.prototype.concat.apply([], a);
        k = a.length;
        for (l = 0; l < k; l++) q = a[l], n = Bg(q.Ea()), q = Bg(q.Ba), q < n || (isNaN(g) ? (g = n, h = q) : (g = Math.min(g, n), h = Math.max(h, q)));
        this.W = new Rr(b, d, c + 3, 42, !1, isNaN(g) ? null : new Ur(g, h), "tg", !1, 0, 24);
        b = this.j;
        b = b.isVisible() ? b.o : 0;
        w(f);
        b = '<div class="tg-mainwrapper" style="margin-top:' + R(S(b)) + 'px;"><table id="' + R("tg") + 'Table" class="tg-timedevents" cellpadding="0" cellspacing="0" style="height:' + R(S(1010)) + 'px">' + Q(e);
        d = f.length;
        for (a = 0; a < d; a++) b += Q(f[a]);
        return P(b +
            "</table></div>")
    };
    var $r = function(a, b) {
            var c = a.j.j(42);
            a = a.j.i(42);
            b = '<td colspan="' + R(b) + '"><div class="tg-spanningwrapper"><div class="tg-hourmarkers">' + Q(null != c ? c : "");
            for (c = 0; 24 > c; c++) b += '<div class="tg-markercell' + R("") + '"><div class="tg-dualmarker' + R("") + '"></div></div>';
            b += Q(null != a ? a : "") + '</div></div><div class="tg-spanningwrapper tg-chipspanningwrapper" id="' + R("tg") + 'spanningwrapper"></div></td>';
            return P(b)
        },
        Zr = function(a, b) {
            return a.u && !isNaN(b.hour) && 0 <= b.hour && 24 > b.hour
        };
    var as = new Ur(5, 20);
    var bs = function(a, b, c, d, e, f) {
            this.j = a;
            this.id = String(b);
            this.g = c;
            this.s = d;
            this.u = e;
            this.Fa = f || null
        },
        cs = function(a) {
            return "scrolltimedevents" + a.id
        };
    bs.prototype.i = function() {
        return "topcontainer" + this.id
    };
    var ds = function(a, b, c, d, e, f) {
        bs.call(this, a, b, c, d, new dh, f);
        this.v = !!e;
        this.o = !1
    };
    p(ds, bs);
    var es = function(a, b) {
            if (!a.o) return !1;
            a = Ta(b, function(d) {
                d = lm(d);
                return !(d && d.g && "CHIP" != d.i)
            });
            eb(a, function(d, e) {
                return d.Ea().ua().ya() - e.Ea().ua().ya()
            });
            b = 1;
            for (var c = a.length; b < c; ++b)
                if (a[b - 1].Ba.ua().ya() > a[b].Ea().ua().ya()) return !0;
            return !1
        },
        fs = function(a, b, c) {
            a = "allday-disclose" + a.id;
            var d = b ? "Expand All Day events" : "Collapse All Day events";
            b = b ? "VIpgJd-VgwJlc-qAWA2" : "VIpgJd-VgwJlc-PBWx0c";
            return P('<div class=wk-disclose-pos style="width:' + R(S(c)) + 'px"><div id="' + R(a) + '" title="' + R(d) + '" role=button class="wk-disclose ' +
                R(b) + '"><div class=wk-zip></div></div></div>')
        };
    ds.prototype.i = function() {
        return "topcontainer" + this.id
    };
    var hs = function(a, b) {
        M.call(this);
        a && gs(this, a, b)
    };
    D(hs, M);
    m = hs.prototype;
    m.Yb = null;
    m.Jc = null;
    m.ud = null;
    m.Kc = null;
    m.Sa = -1;
    m.mb = -1;
    m.od = !1;
    var is = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        js = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        ks = !G || fd("525"),
        ls = Tc && Sc;
    hs.prototype.g = function(a) {
        if (G || Qc)
            if (17 == this.Sa && !a.ctrlKey || 18 == this.Sa && !a.altKey || Tc && 91 == this.Sa && !a.metaKey) this.mb = this.Sa = -1; - 1 == this.Sa && (a.ctrlKey && 17 != a.keyCode ? this.Sa = 17 : a.altKey && 18 != a.keyCode ? this.Sa = 18 : a.metaKey && 91 != a.keyCode && (this.Sa = 91));
        ks && !vl(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.mb = ul(a.keyCode), ls && (this.od = a.altKey))
    };
    hs.prototype.i = function(a) {
        this.mb = this.Sa = -1;
        this.od = a.altKey
    };
    hs.prototype.handleEvent = function(a) {
        var b = a.g,
            c = b.altKey;
        if (F && "keypress" == a.type) {
            var d = this.mb;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else(G || Qc) && "keypress" == a.type ? (d = this.mb, e = 0 <= b.charCode && 63232 > b.charCode && tl(d) ? b.charCode : 0) : Pc && !G ? (d = this.mb, e = tl(d) ? b.keyCode : 0) : ("keypress" == a.type ? (ls && (c = this.od), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.mb, e = b.charCode) : (d = b.keyCode || this.mb, e = b.charCode || 0)) : (d = b.keyCode || this.mb, e = b.charCode || 0), Tc && 63 == e && 224 == d && (d = 191));
        var f = d = ul(d);
        d ? 63232 <= d && d in is ? f = is[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in js && (f = js[b.keyIdentifier]);
        Sc && ks && "keypress" == a.type && !vl(f, this.Sa, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Sa, this.Sa = f, b = new ms(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    hs.prototype.U = function() {
        return this.Yb
    };
    var gs = function(a, b, c) {
            a.Kc && ns(a);
            a.Yb = b;
            a.Jc = L(a.Yb, "keypress", a, c);
            a.ud = L(a.Yb, "keydown", a.g, c, a);
            a.Kc = L(a.Yb, "keyup", a.i, c, a)
        },
        ns = function(a) {
            a.Jc && (qe(a.Jc), qe(a.ud), qe(a.Kc), a.Jc = null, a.ud = null, a.Kc = null);
            a.Yb = null;
            a.Sa = -1;
            a.mb = -1
        };
    hs.prototype.ka = function() {
        hs.Ka.ka.call(this);
        ns(this)
    };
    var ms = function(a, b, c, d) {
        Td.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    };
    D(ms, Td);
    var ps = function(a, b, c, d, e, f) {
        function g(k) {
            if (k) {
                k.tabIndex = 0;
                var l = h.ta;
                l ? k.setAttribute("role", l) : k.removeAttribute("role");
                an(k, "VIpgJd-VgwJlc-tJHJj");
                k && h.T.listen(k, "click", h.V);
                l = h;
                k && (gs(l.v, k), l.w.listen(l.v, "key", l.va))
            }
        }
        M.call(this);
        this.u = e || O();
        this.i = this.u.U(a) || null;
        this.o = this.u.U(d || null);
        this.s = Ga(b) ? b : null;
        this.ta = f || "tab";
        this.j = this.s || !b ? null : this.u.U(b);
        this.g = 1 == c;
        void 0 !== c || this.s || (this.o ? this.g = "none" != this.o.style.display : this.i && (this.g = $m(this.i, "VIpgJd-VgwJlc-PBWx0c")));
        this.w = new fh(this);
        this.v = new hs;
        this.T = new fh(this);
        var h = this;
        g(this.i);
        g(this.o);
        os(this, this.g)
    };
    D(ps, M);
    ps.prototype.ka = function() {
        ps.Ka.ka.call(this);
        Rd(this.w);
        Rd(this.v);
        Rd(this.T)
    };
    var os = function(a, b) {
        a.j ? hl(a.j, b) : b && a.s && (a.j = a.s());
        a.j && an(a.j, "VIpgJd-VgwJlc-bN97Pc");
        if (a.o) hl(a.i, !b), hl(a.o, b);
        else if (a.i) {
            var c = a.i;
            b ? an(c, "VIpgJd-VgwJlc-PBWx0c") : bn(c, "VIpgJd-VgwJlc-PBWx0c");
            c = a.i;
            b ? bn(c, "VIpgJd-VgwJlc-qAWA2") : an(c, "VIpgJd-VgwJlc-qAWA2");
            c = a.i;
            var d = b;
            w(d) && (d = d.join(" "));
            "" === d || void 0 == d ? (Co || (Co = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), d = Co, "expanded" in d ? c.setAttribute("aria-expanded", d.expanded) : c.removeAttribute("aria-expanded")) : c.setAttribute("aria-expanded", d)
        }
        a.g = b;
        a.dispatchEvent(new qs("toggle", a, a.g))
    };
    ps.prototype.va = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode) os(this, !this.g), this.dispatchEvent(new qs("action", this, this.g, a)), a.preventDefault(), a.stopPropagation()
    };
    ps.prototype.V = function(a) {
        os(this, !this.g);
        this.dispatchEvent(new qs("action", this, this.g, a))
    };
    var qs = function(a, b) {
        Sd.call(this, a, b)
    };
    D(qs, Sd);
    var xr = function(a, b, c, d) {
        d = parseInt(d, 10);
        if (isNaN(d) || 1 > d || 7 < d) d = 0;
        var e = 1 == d ? "day" : d ? "next" + d + "days" : "week";
        if (d) var f = new Fm(d);
        else f = [], b.s && f.push(new Km(b.s, b.w)), f = new $h(f, b.j, b.o, b.o ? void 0 : b.W, b.o ? void 0 : b.T), f = new Lm(f);
        Z.call(this, a, b, e, f, c);
        this.g = f;
        1 == d ? this.Mb = "Day" : d ? this.Mb = [null, null, "2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "7 Days"][d] : this.Mb = "Week";
        this.V = b.ta;
        d = new Zq(b.i, c, !1, !0);
        this.wa = new Xr(b.i, c, a.o);
        this.wa.u = !!a.rf;
        this.o = new ds(b.i, this.id, d, this.wa, !1, a.o);
        this.o.o = !0;
        this.Da = this.T = null;
        this.Ma = 0
    };
    p(xr, Z);
    m = xr.prototype;
    m.ld = function() {
        var a = this.i.i;
        return 1 == Em(this.g) ? jn(a, this.g.i) : Gq(a, this.Ra())
    };
    m.Tg = function(a) {
        this.dispatchEvent("g");
        var b = Ig(this.i.g.vb()),
            c = this.o,
            d = this.g.i,
            e = this.Ma,
            f = !!this.V,
            g = c.u.apply(a),
            h = g.g,
            k = es(c, h),
            l = c.Fa,
            n = wn(),
            q = l ? Gd(l) : null;
        var v = P('<th class="wk-dummyth" rowspan=3 style="width: ' + R(S(n)) + "px;" + ((null == q ? 0 : q.Ca) ? "background-color:" + R(S(q.Ca)) + ";" : "") + '">&nbsp;</th>');
        for (var t, x = c.s.g, u = 0, A = [], z = 0; z < x.length; z++) u += x[z].g, A.push({
            width: x[z].g,
            title: x[z].getTitle(),
            If: z == x.length - 1 && k ? fs(c, !!f, u) : ""
        });
        var C = "";
        w(A);
        for (var J = A.length, ma = 0; ma < J; ma++) {
            var U =
                A[ma];
            C += '<td class=wk-tzlabel style="width:' + R(S(U.width)) + 'px" rowspan=3>' + Q(U.title) + Q(U.If) + "</td>"
        }
        t = P(C);
        for (var Ac = 1 < e ? " wk-full-mode" : "", Wa = [], ya, qa, ka, mb = b.ua(), Db, gi = !1, xf = 0; xf < e; xf++) {
            Db = wg(d, xf);
            if (1 == e) {
                var hi = c.j,
                    Qn = Db,
                    ss = zq(hi.g, Qn.Wa()),
                    ts = pn(hi, Qn);
                var Rn = X(I(hi.g.g, W, 30), [ss, ts])
            } else {
                var yf = c.j,
                    Sn = Db,
                    us = yf.g,
                    vs = yf,
                    ws = Sn.Wa(),
                    xs = oo(yf.g.i[ws], "ru" == H(vs.g.g, 1)),
                    ys = pn(yf, Sn);
                Rn = X(I(us.g, W, 30), [xs, ys])
            }
            var zs = Rn,
                zf = "wk-dayname";
            gi && (gi = !1, zf += " wk-tomorrow");
            Db.equals(mb) && (zf += " wk-today",
                xf == e - 1 ? zf += " wk-today-last" : gi = !0);
            Wa.push({
                Hc: zs,
                ha: zf,
                fg: "ca-cdp" + Db.ya()
            });
            ya = !1
        }
        var Af = [];
        c.g.Ja = Af;
        var As = c.g,
            Tn = b.ua(),
            Bs = "weekViewAllDayBg" + c.id,
            ii = [];
        if (1 == e && d.equals(Tn)) ii.push({
            ha: Y.Sc
        });
        else
            for (var ji = !1, ki = e, Kd = d; ki--; Kd = tg(Kd)) {
                if (Kd.equals(Tn)) {
                    ji = !0;
                    var Bf = Kd.equals(d) ? Y.We : 0 == ki ? Y.Sc : Y.Jd
                } else Kd.equals(d) || ji ? (Bf = Y.Kd, ji = !1) : Bf = Y.Id;
                0 == ki && (Bf += " " + Y.Ue);
                ii.push({
                    ha: Bf
                })
            }
        As.Ja.push(Tq({
            id: Bs,
            ha: Y.Se,
            Fb: ii
        }));
        c.g.Ja.push(Vq());
        var Un = new Pq(h, d, e, f ? 1 : 200, c.v && f ? 2 : 1, void 0);
        Sq(Un,
            c.g);
        c.g.Ja.push(P("</table>"));
        c.g.Ja = null;
        for (var Cs = Un.o, Cf = [], li = 0; li < e; li++) Cf.push($q(Cs[li]));
        var Ds = "weekViewAllDay" + c.id,
            mi = c.Fa ? Gd(c.Fa) : null;
        w(Af);
        w(Cf);
        for (var Df = '<tr><td class="wk-allday" colspan="' + R(e) + '"' + ((null == mi ? 0 : mi.Ca) ? ' style="border-color:' + R(S(mi.Ca)) + '"' : "") + '><div id="' + R(Ds) + '" class="wk-allday-pos">', Es = Af.length, ni = 0; ni < Es; ni++) Df += Q(Af[ni]);
        Df += '</div></td></tr><tr class="wk-webcontent">';
        for (var Fs = Cf.length, oi = 0; oi < Fs; oi++) Df += '<td class="wk-webcontent-td">' + Q(Cf[oi]) +
            "</td>";
        qa = P(Df + "</tr>");
        c.Fa && (ka = Gd(c.Fa));
        w(Wa);
        for (var Hc = ka, Vn = ya, pi = '<table class="wk-weektop' + R(Ac) + '" cellpadding=0 cellspacing=0' + ((null == Hc ? 0 : Hc.Ca) ? ' style="background-color:' + R(S(Hc.Ca)) + '"' : "") + "><tr class=wk-daynames>" + (Vn ? Q(v) : "") + Q(t), Gs = Wa.length, qi = 0; qi < Gs; qi++) {
            var Ef = Wa[qi];
            pi += '<th title="' + R(Ef.Hc) + '" scope=col><div class="' + R(Ef.ha) + '"><span class="' + R(Ef.fg) + ' wk-daylink"' + ((null == Hc ? 0 : Hc.Nc) ? ' style="color:' + R(S(Hc.Nc)) + '"' : "") + ">" + Q(Ef.Hc) + "</span></div></th>"
        }
        pi += (Vn ? "" :
            Q(v)) + "</tr>" + Q(qa) + "</table>";
        var Hs = P(pi);
        for (var Wn, Xn = g.i, ri = [], Yn = {}, Zn = d.ya(), pb = Zn, Ff = 0; Ff < e; Ff++) ri[Ff] = [], Yn[pb] = Ff, pb = aa(pb);
        for (var Is = pb, si = 0, Js = Xn.length; si < Js; si++) {
            var ti = Xn[si],
                $n = ti.Ea().ya(),
                ui = ug(ti.Ba).ya();
            $n == ui && (ui += 1);
            pb = Math.max($n, Zn);
            for (var Ks = Math.min(ui, Is); pb < Ks;) ri[Yn[pb]].push(ti), pb = aa(pb)
        }
        Wn = c.s.render(ri, d, b);
        this.dispatchEvent("h");
        var ao = this.kb,
            Gf = ao.g,
            Hf = Pl(ao);
        if (!Gf.U(cs(this.o))) {
            var Ic = this.o,
                Ls = 0 == wn(),
                Ms = Ic.i(),
                Ns = "topcontainerBorder" + Ic.id,
                bo = cs(Ic),
                Os = "bottomcontainerBorder" + Ic.id,
                Eb = Ic.Fa ? Gd(Ic.Fa) : null;
            var Ps = P('<div id="' + R(Ms) + '"></div>' + (G ? '<div id="' + R(Ns) + '" class="wk-border"></div><div id="' + R(bo) + '" class="wbkt wk-border-right wk-scrolltimedevents"' + ((null == Eb ? 0 : Eb.Ca) ? ' style="border-top-color:' + R(S(Eb.Ca)) + "; border-top-color:" + R(S(Eb.Ca)) + ';"' : "") + '></div><div id="' + R(Os) + '" class="wk-border"></div>' : '<div id="' + R(bo) + '" class="' + (Ls ? "wk-border-right " : "") + 'wk-scrolltimedevents"' + ((null == Eb ? 0 : Eb.Ca) ? ' style="border-top-color:' + R(S(Eb.Ca)) +
                "; border-top-color:" + R(S(Eb.Ca)) + ';"' : "") + "></div>"));
            wc(Hf, Mk(Ps))
        }
        var If = Gf.U(cs(this.o)),
            co = Gf.U(this.o.i());
        wc(co, Mk(Hs));
        wc(If, Mk(Wn));
        Wl(If, Hf.offsetHeight - co.offsetHeight);
        for (var Qs = a.length, eo = [], vi = 0; vi < Qs; vi++) {
            var Jf = a[vi];
            !Jf.Xa && !Jf.Ub || Jf.i || eo.push(Jf)
        }
        this.La = eo;
        this.j = {};
        this.v = {};
        Vl(this, a);
        var fo = this.wa.W,
            wi = If.clientHeight,
            Jc = [];
        if (b) {
            var xi = Bg(b);
            Jc.push(xi);
            Jc.push(xi + 30, xi - 30)
        }
        var yi = fo.g;
        yi && Jc.push(yi.start, yi.g);
        Jc.push(60 * as.start, 60 * as.g, 1440, 0);
        for (var go = fo.i, Rs = 24 *
                go, bc = NaN, Ld = NaN, zi = !1, Ai = 0; Ai < Jc.length; ++Ai) {
            var cc = Ae(Jc[Ai] * go / 60, 0, Rs);
            zi = zi || 1E5 > cc || -1 < cc;
            if (isNaN(bc)) bc = Ld = cc;
            else if (cc < bc ? bc = Math.max(cc, Ld - wi) : cc > Ld && (Ld = Math.min(cc, bc + wi)), Ld - bc >= wi) break
        }
        If.scrollTop = zi ? bc : 1E5;
        null == this.T && (this.T = r.setInterval(y(this.ah, this), 6E4));
        this.ta && this.ta.Ga();
        this.Da && this.Da.Ga();
        var ho = "allday-disclose" + this.o.id;
        Gf.U(ho) && (this.Da = new ps(ho, void 0, !this.V), L(this.Da, "toggle", this.Jf, !1, this));
        var Bi = new Er(Hf);
        Hr(Bi, Na(fq, Hf), y(this.tb, this));
        Hr(Bi,
            gq, y(this.ub, this));
        this.ta = Bi;
        this.dispatchEvent("i");
        var Kf = Fe(document, "weekViewAllDayBg" + this.o.id);
        if (Kf) {
            var Ss = fl(Fe(document, "weekViewAllDay" + this.o.id)).height,
                io, Md = Uk.height;
            if (!Md) {
                var Ci = Ec();
                Md = Ci;
                if (void 0 === Kf.style[Ci]) {
                    var jo = (G ? "Webkit" : Sc ? "Moz" : F ? "ms" : Pc ? "O" : null) + Fc(Ci);
                    void 0 !== Kf.style[jo] && (Md = jo)
                }
                Uk.height = Md
            }(io = Md) && (Kf.style[io] = Ss + "px")
        }
    };
    m.render = function() {
        Z.prototype.render.call(this);
        this.Ma = Em(this.g);
        Zl(this, this.Ra(), y(this.Tg, this))
    };
    m.ah = function() {
        var a = this.wa,
            b = this.s,
            c = Ig(this.i.g.vb());
        a = Zr(a, c);
        c = 42 * (c.hour + c.minute / 60) | 0;
        var d = b.U("tgnowmarker");
        d && (hl(d, a), d.style.top = c + "px");
        if (b = b.U("tgnowptr")) hl(b, a), b.style.top = c - 4 + "px"
    };
    m.Xb = function() {
        Z.prototype.Xb.call(this);
        this.ta && this.ta.Ga();
        null != this.T && (r.clearInterval(this.T), this.T = null)
    };
    m.oe = function() {
        return {
            title: "",
            jc: new cr(this.u, this.Ha),
            $d: "wk-moreevents st-contents",
            width: 400
        }
    };
    m.Jf = function() {
        this.V = !this.V;
        gp(this.kb)
    };
    var rs = function(a, b) {
        tr.call(this, a, b)
    };
    p(rs, tr);
    rs.prototype.setup = function() {
        tr.prototype.setup.call(this);
        var a = this.i;
        if (1 != !!a.Db) {
            a.Db = new Po(a.g.g);
            var b = a.Db;
            b.i("today", "t");
            b.i("prev", "p");
            b.i("next", "n");
            b.i("dayview", "d");
            b.i("weekview", "w");
            b.i("monthview", "m");
            b.i("agendaview", "a");
            L(b, "shortcut", y(a.mf, a))
        }
    };
    window._init = function(a) {
        var b = new Yf;
        if (ah) throw Error("o");
        ah = b;
        Pf(bh);
        Qf(bh, !0, b);
        (new rs(b, a)).setup()
    };

} catch (e) {
    _DumpException(e)
}
// Google Inc.