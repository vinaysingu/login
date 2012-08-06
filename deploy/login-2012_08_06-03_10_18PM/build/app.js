
// minifier: path aliases

enyo.path.addPaths({layout: "/Users/cole/Devel/xtuple/git/clinuz/login/enyo/tools/../../lib/layout/", onyx: "/Users/cole/Devel/xtuple/git/clinuz/login/enyo/tools/../../lib/onyx/", onyx: "/Users/cole/Devel/xtuple/git/clinuz/login/enyo/tools/../../lib/onyx/source/"});

// ../../client/lib/underscore/underscore-min.js

(function() {
function a(b, c, d) {
if (b === c) return 0 !== b || 1 / b == 1 / c;
if (null == b || null == c) return b === c;
b._chain && (b = b._wrapped), c._chain && (c = c._wrapped);
if (b.isEqual && v.isFunction(b.isEqual)) return b.isEqual(c);
if (c.isEqual && v.isFunction(c.isEqual)) return c.isEqual(b);
var e = i.call(b);
if (e != i.call(c)) return !1;
switch (e) {
case "[object String]":
return b == "" + c;
case "[object Number]":
return b != +b ? c != +c : 0 == b ? 1 / b == 1 / c : b == +c;
case "[object Date]":
case "[object Boolean]":
return +b == +c;
case "[object RegExp]":
return b.source == c.source && b.global == c.global && b.multiline == c.multiline && b.ignoreCase == c.ignoreCase;
}
if ("object" != typeof b || "object" != typeof c) return !1;
for (var f = d.length; f--; ) if (d[f] == b) return !0;
d.push(b);
var f = 0, g = !0;
if ("[object Array]" == e) {
if (f = b.length, g = f == c.length) for (; f-- && (g = f in b == f in c && a(b[f], c[f], d)); ) ;
} else {
if ("constructor" in b != "constructor" in c || b.constructor != c.constructor) return !1;
for (var h in b) if (v.has(b, h) && (f++, !(g = v.has(c, h) && a(b[h], c[h], d)))) break;
if (g) {
for (h in c) if (v.has(c, h) && !(f--)) break;
g = !f;
}
}
return d.pop(), g;
}
var b = this, c = b._, d = {}, e = Array.prototype, f = Object.prototype, g = e.slice, h = e.unshift, i = f.toString, j = f.hasOwnProperty, k = e.forEach, l = e.map, m = e.reduce, n = e.reduceRight, o = e.filter, p = e.every, q = e.some, r = e.indexOf, s = e.lastIndexOf, f = Array.isArray, t = Object.keys, u = Function.prototype.bind, v = function(a) {
return new G(a);
};
"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : b._ = v, v.VERSION = "1.3.3";
var w = v.each = v.forEach = function(a, b, c) {
if (a != null) if (k && a.forEach === k) a.forEach(b, c); else if (a.length === +a.length) {
for (var e = 0, f = a.length; e < f; e++) if (e in a && b.call(c, a[e], e, a) === d) break;
} else for (e in a) if (v.has(a, e) && b.call(c, a[e], e, a) === d) break;
};
v.map = v.collect = function(a, b, c) {
var d = [];
return a == null ? d : l && a.map === l ? a.map(b, c) : (w(a, function(a, e, f) {
d[d.length] = b.call(c, a, e, f);
}), a.length === +a.length && (d.length = a.length), d);
}, v.reduce = v.foldl = v.inject = function(a, b, c, d) {
var e = arguments.length > 2;
a == null && (a = []);
if (m && a.reduce === m) return d && (b = v.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
w(a, function(a, f, g) {
e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
});
if (!e) throw new TypeError("Reduce of empty array with no initial value");
return c;
}, v.reduceRight = v.foldr = function(a, b, c, d) {
var e = arguments.length > 2;
a == null && (a = []);
if (n && a.reduceRight === n) return d && (b = v.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
var f = v.toArray(a).reverse();
return d && !e && (b = v.bind(b, d)), e ? v.reduce(f, b, c, d) : v.reduce(f, b);
}, v.find = v.detect = function(a, b, c) {
var d;
return x(a, function(a, e, f) {
if (b.call(c, a, e, f)) return d = a, !0;
}), d;
}, v.filter = v.select = function(a, b, c) {
var d = [];
return a == null ? d : o && a.filter === o ? a.filter(b, c) : (w(a, function(a, e, f) {
b.call(c, a, e, f) && (d[d.length] = a);
}), d);
}, v.reject = function(a, b, c) {
var d = [];
return a == null ? d : (w(a, function(a, e, f) {
b.call(c, a, e, f) || (d[d.length] = a);
}), d);
}, v.every = v.all = function(a, b, c) {
var e = !0;
return a == null ? e : p && a.every === p ? a.every(b, c) : (w(a, function(a, f, g) {
if (!(e = e && b.call(c, a, f, g))) return d;
}), !!e);
};
var x = v.some = v.any = function(a, b, c) {
b || (b = v.identity);
var e = !1;
return a == null ? e : q && a.some === q ? a.some(b, c) : (w(a, function(a, f, g) {
if (e || (e = b.call(c, a, f, g))) return d;
}), !!e);
};
v.include = v.contains = function(a, b) {
var c = !1;
return a == null ? c : r && a.indexOf === r ? a.indexOf(b) != -1 : c = x(a, function(a) {
return a === b;
});
}, v.invoke = function(a, b) {
var c = g.call(arguments, 2);
return v.map(a, function(a) {
return (v.isFunction(b) ? b || a : a[b]).apply(a, c);
});
}, v.pluck = function(a, b) {
return v.map(a, function(a) {
return a[b];
});
}, v.max = function(a, b, c) {
if (!b && v.isArray(a) && a[0] === +a[0]) return Math.max.apply(Math, a);
if (!b && v.isEmpty(a)) return -Infinity;
var d = {
computed: -Infinity
};
return w(a, function(a, e, f) {
e = b ? b.call(c, a, e, f) : a, e >= d.computed && (d = {
value: a,
computed: e
});
}), d.value;
}, v.min = function(a, b, c) {
if (!b && v.isArray(a) && a[0] === +a[0]) return Math.min.apply(Math, a);
if (!b && v.isEmpty(a)) return Infinity;
var d = {
computed: Infinity
};
return w(a, function(a, e, f) {
e = b ? b.call(c, a, e, f) : a, e < d.computed && (d = {
value: a,
computed: e
});
}), d.value;
}, v.shuffle = function(a) {
var b = [], c;
return w(a, function(a, d) {
c = Math.floor(Math.random() * (d + 1)), b[d] = b[c], b[c] = a;
}), b;
}, v.sortBy = function(a, b, c) {
var d = v.isFunction(b) ? b : function(a) {
return a[b];
};
return v.pluck(v.map(a, function(a, b, e) {
return {
value: a,
criteria: d.call(c, a, b, e)
};
}).sort(function(a, b) {
var c = a.criteria, d = b.criteria;
return c === void 0 ? 1 : d === void 0 ? -1 : c < d ? -1 : c > d ? 1 : 0;
}), "value");
}, v.groupBy = function(a, b) {
var c = {}, d = v.isFunction(b) ? b : function(a) {
return a[b];
};
return w(a, function(a, b) {
var e = d(a, b);
(c[e] || (c[e] = [])).push(a);
}), c;
}, v.sortedIndex = function(a, b, c) {
c || (c = v.identity);
for (var d = 0, e = a.length; d < e; ) {
var f = d + e >> 1;
c(a[f]) < c(b) ? d = f + 1 : e = f;
}
return d;
}, v.toArray = function(a) {
return a ? v.isArray(a) || v.isArguments(a) ? g.call(a) : a.toArray && v.isFunction(a.toArray) ? a.toArray() : v.values(a) : [];
}, v.size = function(a) {
return v.isArray(a) ? a.length : v.keys(a).length;
}, v.first = v.head = v.take = function(a, b, c) {
return b != null && !c ? g.call(a, 0, b) : a[0];
}, v.initial = function(a, b, c) {
return g.call(a, 0, a.length - (b == null || c ? 1 : b));
}, v.last = function(a, b, c) {
return b != null && !c ? g.call(a, Math.max(a.length - b, 0)) : a[a.length - 1];
}, v.rest = v.tail = function(a, b, c) {
return g.call(a, b == null || c ? 1 : b);
}, v.compact = function(a) {
return v.filter(a, function(a) {
return !!a;
});
}, v.flatten = function(a, b) {
return v.reduce(a, function(a, c) {
return v.isArray(c) ? a.concat(b ? c : v.flatten(c)) : (a[a.length] = c, a);
}, []);
}, v.without = function(a) {
return v.difference(a, g.call(arguments, 1));
}, v.uniq = v.unique = function(a, b, c) {
var c = c ? v.map(a, c) : a, d = [];
return a.length < 3 && (b = !0), v.reduce(c, function(c, e, f) {
if (b ? v.last(c) !== e || !c.length : !v.include(c, e)) c.push(e), d.push(a[f]);
return c;
}, []), d;
}, v.union = function() {
return v.uniq(v.flatten(arguments, !0));
}, v.intersection = v.intersect = function(a) {
var b = g.call(arguments, 1);
return v.filter(v.uniq(a), function(a) {
return v.every(b, function(b) {
return v.indexOf(b, a) >= 0;
});
});
}, v.difference = function(a) {
var b = v.flatten(g.call(arguments, 1), !0);
return v.filter(a, function(a) {
return !v.include(b, a);
});
}, v.zip = function() {
for (var a = g.call(arguments), b = v.max(v.pluck(a, "length")), c = Array(b), d = 0; d < b; d++) c[d] = v.pluck(a, "" + d);
return c;
}, v.indexOf = function(a, b, c) {
if (a == null) return -1;
var d;
if (c) return c = v.sortedIndex(a, b), a[c] === b ? c : -1;
if (r && a.indexOf === r) return a.indexOf(b);
c = 0;
for (d = a.length; c < d; c++) if (c in a && a[c] === b) return c;
return -1;
}, v.lastIndexOf = function(a, b) {
if (a == null) return -1;
if (s && a.lastIndexOf === s) return a.lastIndexOf(b);
for (var c = a.length; c--; ) if (c in a && a[c] === b) return c;
return -1;
}, v.range = function(a, b, c) {
arguments.length <= 1 && (b = a || 0, a = 0);
for (var c = arguments[2] || 1, d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); e < d; ) f[e++] = a, a += c;
return f;
};
var y = function() {};
v.bind = function(a, b) {
var c, d;
if (a.bind === u && u) return u.apply(a, g.call(arguments, 1));
if (!v.isFunction(a)) throw new TypeError;
return d = g.call(arguments, 2), c = function() {
if (this instanceof c) {
y.prototype = a.prototype;
var e = new y, f = a.apply(e, d.concat(g.call(arguments)));
return Object(f) === f ? f : e;
}
return a.apply(b, d.concat(g.call(arguments)));
};
}, v.bindAll = function(a) {
var b = g.call(arguments, 1);
return b.length == 0 && (b = v.functions(a)), w(b, function(b) {
a[b] = v.bind(a[b], a);
}), a;
}, v.memoize = function(a, b) {
var c = {};
return b || (b = v.identity), function() {
var d = b.apply(this, arguments);
return v.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
};
}, v.delay = function(a, b) {
var c = g.call(arguments, 2);
return setTimeout(function() {
return a.apply(null, c);
}, b);
}, v.defer = function(a) {
return v.delay.apply(v, [ a, 1 ].concat(g.call(arguments, 1)));
}, v.throttle = function(a, b) {
var c, d, e, f, g, h, i = v.debounce(function() {
g = f = !1;
}, b);
return function() {
return c = this, d = arguments, e || (e = setTimeout(function() {
e = null, g && a.apply(c, d), i();
}, b)), f ? g = !0 : h = a.apply(c, d), i(), f = !0, h;
};
}, v.debounce = function(a, b, c) {
var d;
return function() {
var e = this, f = arguments;
c && !d && a.apply(e, f), clearTimeout(d), d = setTimeout(function() {
d = null, c || a.apply(e, f);
}, b);
};
}, v.once = function(a) {
var b = !1, c;
return function() {
return b ? c : (b = !0, c = a.apply(this, arguments));
};
}, v.wrap = function(a, b) {
return function() {
var c = [ a ].concat(g.call(arguments, 0));
return b.apply(this, c);
};
}, v.compose = function() {
var a = arguments;
return function() {
for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
return b[0];
};
}, v.after = function(a, b) {
return a <= 0 ? b() : function() {
if (--a < 1) return b.apply(this, arguments);
};
}, v.keys = t || function(a) {
if (a !== Object(a)) throw new TypeError("Invalid object");
var b = [], c;
for (c in a) v.has(a, c) && (b[b.length] = c);
return b;
}, v.values = function(a) {
return v.map(a, v.identity);
}, v.functions = v.methods = function(a) {
var b = [], c;
for (c in a) v.isFunction(a[c]) && b.push(c);
return b.sort();
}, v.extend = function(a) {
return w(g.call(arguments, 1), function(b) {
for (var c in b) a[c] = b[c];
}), a;
}, v.pick = function(a) {
var b = {};
return w(v.flatten(g.call(arguments, 1)), function(c) {
c in a && (b[c] = a[c]);
}), b;
}, v.defaults = function(a) {
return w(g.call(arguments, 1), function(b) {
for (var c in b) a[c] == null && (a[c] = b[c]);
}), a;
}, v.clone = function(a) {
return v.isObject(a) ? v.isArray(a) ? a.slice() : v.extend({}, a) : a;
}, v.tap = function(a, b) {
return b(a), a;
}, v.isEqual = function(b, c) {
return a(b, c, []);
}, v.isEmpty = function(a) {
if (a == null) return !0;
if (v.isArray(a) || v.isString(a)) return a.length === 0;
for (var b in a) if (v.has(a, b)) return !1;
return !0;
}, v.isElement = function(a) {
return !!a && a.nodeType == 1;
}, v.isArray = f || function(a) {
return i.call(a) == "[object Array]";
}, v.isObject = function(a) {
return a === Object(a);
}, v.isArguments = function(a) {
return i.call(a) == "[object Arguments]";
}, v.isArguments(arguments) || (v.isArguments = function(a) {
return !!a && !!v.has(a, "callee");
}), v.isFunction = function(a) {
return i.call(a) == "[object Function]";
}, v.isString = function(a) {
return i.call(a) == "[object String]";
}, v.isNumber = function(a) {
return i.call(a) == "[object Number]";
}, v.isFinite = function(a) {
return v.isNumber(a) && isFinite(a);
}, v.isNaN = function(a) {
return a !== a;
}, v.isBoolean = function(a) {
return a === !0 || a === !1 || i.call(a) == "[object Boolean]";
}, v.isDate = function(a) {
return i.call(a) == "[object Date]";
}, v.isRegExp = function(a) {
return i.call(a) == "[object RegExp]";
}, v.isNull = function(a) {
return a === null;
}, v.isUndefined = function(a) {
return a === void 0;
}, v.has = function(a, b) {
return j.call(a, b);
}, v.noConflict = function() {
return b._ = c, this;
}, v.identity = function(a) {
return a;
}, v.times = function(a, b, c) {
for (var d = 0; d < a; d++) b.call(c, d);
}, v.escape = function(a) {
return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}, v.result = function(a, b) {
if (a == null) return null;
var c = a[b];
return v.isFunction(c) ? c.call(a) : c;
}, v.mixin = function(a) {
w(v.functions(a), function(b) {
I(b, v[b] = a[b]);
});
};
var z = 0;
v.uniqueId = function(a) {
var b = z++;
return a ? a + b : b;
}, v.templateSettings = {
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
escape: /<%-([\s\S]+?)%>/g
};
var A = /.^/, B = {
"\\": "\\",
"'": "'",
r: "\r",
n: "\n",
t: "	",
u2028: "\u2028",
u2029: "\u2029"
}, C;
for (C in B) B[B[C]] = C;
var D = /\\|'|\r|\n|\t|\u2028|\u2029/g, E = /\\(\\|'|r|n|t|u2028|u2029)/g, F = function(a) {
return a.replace(E, function(a, b) {
return B[b];
});
};
v.template = function(a, b, c) {
c = v.defaults(c || {}, v.templateSettings), a = "__p+='" + a.replace(D, function(a) {
return "\\" + B[a];
}).replace(c.escape || A, function(a, b) {
return "'+\n_.escape(" + F(b) + ")+\n'";
}).replace(c.interpolate || A, function(a, b) {
return "'+\n(" + F(b) + ")+\n'";
}).replace(c.evaluate || A, function(a, b) {
return "';\n" + F(b) + "\n;__p+='";
}) + "';\n", c.variable || (a = "with(obj||{}){\n" + a + "}\n");
var a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n", d = new Function(c.variable || "obj", "_", a);
return b ? d(b, v) : (b = function(a) {
return d.call(this, a, v);
}, b.source = "function(" + (c.variable || "obj") + "){\n" + a + "}", b);
}, v.chain = function(a) {
return v(a).chain();
};
var G = function(a) {
this._wrapped = a;
};
v.prototype = G.prototype;
var H = function(a, b) {
return b ? v(a).chain() : a;
}, I = function(a, b) {
G.prototype[a] = function() {
var a = g.call(arguments);
return h.call(a, this._wrapped), H(b.apply(v, a), this._chain);
};
};
v.mixin(v), w("pop,push,reverse,shift,sort,splice,unshift".split(","), function(a) {
var b = e[a];
G.prototype[a] = function() {
var c = this._wrapped;
b.apply(c, arguments);
var d = c.length;
return (a == "shift" || a == "splice") && d === 0 && delete c[0], H(c, this._chain);
};
}), w([ "concat", "join", "slice" ], function(a) {
var b = e[a];
G.prototype[a] = function() {
return H(b.apply(this._wrapped, arguments), this._chain);
};
}), G.prototype.chain = function() {
return this._chain = !0, this;
}, G.prototype.value = function() {
return this._wrapped;
};
}).call(this);

// ../../client/lib/backbone/backbone-min.js

(function() {
var a = this, b = a.Backbone, c = Array.prototype.slice, d = Array.prototype.splice, e;
e = "undefined" != typeof exports ? exports : a.Backbone = {}, e.VERSION = "0.9.2";
var f = a._;
!f && "undefined" != typeof require && (f = require("underscore"));
var g = a.jQuery || a.Zepto || a.ender;
e.setDomLibrary = function(a) {
g = a;
}, e.noConflict = function() {
return a.Backbone = b, this;
}, e.emulateHTTP = !1, e.emulateJSON = !1;
var h = /\s+/, i = e.Events = {
on: function(a, b, c) {
var d, e, f, g, i;
if (!b) return this;
a = a.split(h);
for (d = this._callbacks || (this._callbacks = {}); e = a.shift(); ) f = (i = d[e]) ? i.tail : {}, f.next = g = {}, f.context = c, f.callback = b, d[e] = {
tail: g,
next: i ? i.next : f
};
return this;
},
off: function(a, b, c) {
var d, e, g, i, j, k;
if (e = this._callbacks) {
if (!a && !b && !c) return delete this._callbacks, this;
for (a = a ? a.split(h) : f.keys(e); d = a.shift(); ) if (g = e[d], delete e[d], g && (b || c)) for (i = g.tail; (g = g.next) !== i; ) (j = g.callback, k = g.context, b && j !== b || c && k !== c) && this.on(d, j, k);
return this;
}
},
trigger: function(a) {
var b, d, e, f, g, i;
if (!(e = this._callbacks)) return this;
g = e.all, a = a.split(h);
for (i = c.call(arguments, 1); b = a.shift(); ) {
if (d = e[b]) for (f = d.tail; (d = d.next) !== f; ) d.callback.apply(d.context || this, i);
if (d = g) {
f = d.tail;
for (b = [ b ].concat(i); (d = d.next) !== f; ) d.callback.apply(d.context || this, b);
}
}
return this;
}
};
i.bind = i.on, i.unbind = i.off;
var j = e.Model = function(a, b) {
var c;
a || (a = {}), b && b.parse && (a = this.parse(a));
if (c = y(this, "defaults")) a = f.extend({}, c, a);
b && b.collection && (this.collection = b.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = f.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(a, {
silent: !0
}), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = f.clone(this.attributes), this.initialize.apply(this, arguments);
};
f.extend(j.prototype, i, {
changed: null,
_silent: null,
_pending: null,
idAttribute: "id",
initialize: function() {},
toJSON: function() {
return f.clone(this.attributes);
},
get: function(a) {
return this.attributes[a];
},
escape: function(a) {
var b;
return (b = this._escapedAttributes[a]) ? b : (b = this.get(a), this._escapedAttributes[a] = f.escape(null == b ? "" : "" + b));
},
has: function(a) {
return null != this.get(a);
},
set: function(a, b, c) {
var d, e;
f.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b), c || (c = {});
if (!d) return this;
d instanceof j && (d = d.attributes);
if (c.unset) for (e in d) d[e] = void 0;
if (!this._validate(d, c)) return !1;
this.idAttribute in d && (this.id = d[this.idAttribute]);
var b = c.changes = {}, g = this.attributes, h = this._escapedAttributes, i = this._previousAttributes || {};
for (e in d) {
a = d[e];
if (!f.isEqual(g[e], a) || c.unset && f.has(g, e)) delete h[e], (c.silent ? this._silent : b)[e] = !0;
c.unset ? delete g[e] : g[e] = a, !f.isEqual(i[e], a) || f.has(g, e) != f.has(i, e) ? (this.changed[e] = a, c.silent || (this._pending[e] = !0)) : (delete this.changed[e], delete this._pending[e]);
}
return c.silent || this.change(c), this;
},
unset: function(a, b) {
return (b || (b = {})).unset = !0, this.set(a, null, b);
},
clear: function(a) {
return (a || (a = {})).unset = !0, this.set(f.clone(this.attributes), a);
},
fetch: function(a) {
var a = a ? f.clone(a) : {}, b = this, c = a.success;
return a.success = function(d, e, f) {
if (!b.set(b.parse(d, f), a)) return !1;
c && c(b, d);
}, a.error = e.wrapError(a.error, b, a), (this.sync || e.sync).call(this, "read", this, a);
},
save: function(a, b, c) {
var d, g;
f.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b), c = c ? f.clone(c) : {};
if (c.wait) {
if (!this._validate(d, c)) return !1;
g = f.clone(this.attributes);
}
a = f.extend({}, c, {
silent: !0
});
if (d && !this.set(d, c.wait ? a : c)) return !1;
var h = this, i = c.success;
return c.success = function(a, b, e) {
b = h.parse(a, e), c.wait && (delete c.wait, b = f.extend(d || {}, b));
if (!h.set(b, c)) return !1;
i ? i(h, a) : h.trigger("sync", h, a, c);
}, c.error = e.wrapError(c.error, h, c), b = this.isNew() ? "create" : "update", b = (this.sync || e.sync).call(this, b, this, c), c.wait && this.set(g, a), b;
},
destroy: function(a) {
var a = a ? f.clone(a) : {}, b = this, c = a.success, d = function() {
b.trigger("destroy", b, b.collection, a);
};
if (this.isNew()) return d(), !1;
a.success = function(e) {
a.wait && d(), c ? c(b, e) : b.trigger("sync", b, e, a);
}, a.error = e.wrapError(a.error, b, a);
var g = (this.sync || e.sync).call(this, "delete", this, a);
return a.wait || d(), g;
},
url: function() {
var a = y(this, "urlRoot") || y(this.collection, "url") || z();
return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id);
},
parse: function(a) {
return a;
},
clone: function() {
return new this.constructor(this.attributes);
},
isNew: function() {
return null == this.id;
},
change: function(a) {
a || (a = {});
var b = this._changing;
this._changing = !0;
for (var c in this._silent) this._pending[c] = !0;
var d = f.extend({}, a.changes, this._silent);
this._silent = {};
for (c in d) this.trigger("change:" + c, this, this.get(c), a);
if (b) return this;
for (; !f.isEmpty(this._pending); ) {
this._pending = {}, this.trigger("change", this, a);
for (c in this.changed) !this._pending[c] && !this._silent[c] && delete this.changed[c];
this._previousAttributes = f.clone(this.attributes);
}
return this._changing = !1, this;
},
hasChanged: function(a) {
return arguments.length ? f.has(this.changed, a) : !f.isEmpty(this.changed);
},
changedAttributes: function(a) {
if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
var b, c = !1, d = this._previousAttributes, e;
for (e in a) f.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
return c;
},
previous: function(a) {
return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[a];
},
previousAttributes: function() {
return f.clone(this._previousAttributes);
},
isValid: function() {
return !this.validate(this.attributes);
},
_validate: function(a, b) {
if (b.silent || !this.validate) return !0;
var a = f.extend({}, this.attributes, a), c = this.validate(a, b);
return c ? (b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b), !1) : !0;
}
});
var k = e.Collection = function(a, b) {
b || (b = {}), b.model && (this.model = b.model), b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, {
silent: !0,
parse: b.parse
});
};
f.extend(k.prototype, i, {
model: j,
initialize: function() {},
toJSON: function(a) {
return this.map(function(b) {
return b.toJSON(a);
});
},
add: function(a, b) {
var c, e, g, h, i, j = {}, k = {}, l = [];
b || (b = {}), a = f.isArray(a) ? a.slice() : [ a ], c = 0;
for (e = a.length; c < e; c++) {
if (!(g = a[c] = this._prepareModel(a[c], b))) throw Error("Can't add an invalid model to a collection");
h = g.cid, i = g.id, j[h] || this._byCid[h] || null != i && (k[i] || this._byId[i]) ? l.push(c) : j[h] = k[i] = g;
}
for (c = l.length; c--; ) a.splice(l[c], 1);
c = 0;
for (e = a.length; c < e; c++) (g = a[c]).on("all", this._onModelEvent, this), this._byCid[g.cid] = g, null != g.id && (this._byId[g.id] = g);
this.length += e, d.apply(this.models, [ null != b.at ? b.at : this.models.length, 0 ].concat(a)), this.comparator && this.sort({
silent: !0
});
if (b.silent) return this;
c = 0;
for (e = this.models.length; c < e; c++) j[(g = this.models[c]).cid] && (b.index = c, g.trigger("add", g, this, b));
return this;
},
remove: function(a, b) {
var c, d, e, g;
b || (b = {}), a = f.isArray(a) ? a.slice() : [ a ], c = 0;
for (d = a.length; c < d; c++) if (g = this.getByCid(a[c]) || this.get(a[c])) delete this._byId[g.id], delete this._byCid[g.cid], e = this.indexOf(g), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, g.trigger("remove", g, this, b)), this._removeReference(g);
return this;
},
push: function(a, b) {
return a = this._prepareModel(a, b), this.add(a, b), a;
},
pop: function(a) {
var b = this.at(this.length - 1);
return this.remove(b, a), b;
},
unshift: function(a, b) {
return a = this._prepareModel(a, b), this.add(a, f.extend({
at: 0
}, b)), a;
},
shift: function(a) {
var b = this.at(0);
return this.remove(b, a), b;
},
get: function(a) {
return null == a ? void 0 : this._byId[null != a.id ? a.id : a];
},
getByCid: function(a) {
return a && this._byCid[a.cid || a];
},
at: function(a) {
return this.models[a];
},
where: function(a) {
return f.isEmpty(a) ? [] : this.filter(function(b) {
for (var c in a) if (a[c] !== b.get(c)) return !1;
return !0;
});
},
sort: function(a) {
a || (a = {});
if (!this.comparator) throw Error("Cannot sort a set without a comparator");
var b = f.bind(this.comparator, this);
return 1 == this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("reset", this, a), this;
},
pluck: function(a) {
return f.map(this.models, function(b) {
return b.get(a);
});
},
reset: function(a, b) {
a || (a = []), b || (b = {});
for (var c = 0, d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
return this._reset(), this.add(a, f.extend({
silent: !0
}, b)), b.silent || this.trigger("reset", this, b), this;
},
fetch: function(a) {
a = a ? f.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
var b = this, c = a.success;
return a.success = function(d, e, f) {
b[a.add ? "add" : "reset"](b.parse(d, f), a), c && c(b, d);
}, a.error = e.wrapError(a.error, b, a), (this.sync || e.sync).call(this, "read", this, a);
},
create: function(a, b) {
var c = this, b = b ? f.clone(b) : {}, a = this._prepareModel(a, b);
if (!a) return !1;
b.wait || c.add(a, b);
var d = b.success;
return b.success = function(e, f) {
b.wait && c.add(e, b), d ? d(e, f) : e.trigger("sync", a, f, b);
}, a.save(null, b), a;
},
parse: function(a) {
return a;
},
chain: function() {
return f(this.models).chain();
},
_reset: function() {
this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
},
_prepareModel: function(a, b) {
return b || (b = {}), a instanceof j ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1)), a;
},
_removeReference: function(a) {
this == a.collection && delete a.collection, a.off("all", this._onModelEvent, this);
},
_onModelEvent: function(a, b, c, d) {
("add" == a || "remove" == a) && c != this || ("destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments));
}
}), f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","), function(a) {
k.prototype[a] = function() {
return f[a].apply(f, [ this.models ].concat(f.toArray(arguments)));
};
});
var l = e.Router = function(a) {
a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
}, m = /:\w+/g, n = /\*\w+/g, o = /[-[\]{}()+?.,\\^$|#\s]/g;
f.extend(l.prototype, i, {
initialize: function() {},
route: function(a, b, c) {
return e.history || (e.history = new p), f.isRegExp(a) || (a = this._routeToRegExp(a)), c || (c = this[b]), e.history.route(a, f.bind(function(d) {
d = this._extractParameters(a, d), c && c.apply(this, d), this.trigger.apply(this, [ "route:" + b ].concat(d)), e.history.trigger("route", this, b, d);
}, this)), this;
},
navigate: function(a, b) {
e.history.navigate(a, b);
},
_bindRoutes: function() {
if (this.routes) {
var a = [], b;
for (b in this.routes) a.unshift([ b, this.routes[b] ]);
b = 0;
for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]]);
}
},
_routeToRegExp: function(a) {
return a = a.replace(o, "\\$&").replace(m, "([^/]+)").replace(n, "(.*?)"), RegExp("^" + a + "$");
},
_extractParameters: function(a, b) {
return a.exec(b).slice(1);
}
});
var p = e.History = function() {
this.handlers = [], f.bindAll(this, "checkUrl");
}, q = /^[#\/]/, r = /msie [\w.]+/;
p.started = !1, f.extend(p.prototype, i, {
interval: 50,
getHash: function(a) {
return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ? a[1] : "";
},
getFragment: function(a, b) {
if (null == a) if (this._hasPushState || b) {
var a = window.location.pathname, c = window.location.search;
c && (a += c);
} else a = this.getHash();
return a.indexOf(this.options.root) || (a = a.substr(this.options.root.length)), a.replace(q, "");
},
start: function(a) {
if (p.started) throw Error("Backbone.history has already been started");
p.started = !0, this.options = f.extend({}, {
root: "/"
}, this.options, a), this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
var a = this.getFragment(), b = document.documentMode;
if (b = r.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a);
this._hasPushState ? g(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? g(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = a, a = window.location, b = a.pathname == this.options.root;
if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
this._wantsPushState && this._hasPushState && b && a.hash && (this.fragment = this.getHash().replace(q, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
if (!this.options.silent) return this.loadUrl();
},
stop: function() {
g(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), p.started = !1;
},
route: function(a, b) {
this.handlers.unshift({
route: a,
callback: b
});
},
checkUrl: function() {
var a = this.getFragment();
a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
if (a == this.fragment) return !1;
this.iframe && this.navigate(a), this.loadUrl() || this.loadUrl(this.getHash());
},
loadUrl: function(a) {
var b = this.fragment = this.getFragment(a);
return f.any(this.handlers, function(a) {
if (a.route.test(b)) return a.callback(b), !0;
});
},
navigate: function(a, b) {
if (!p.started) return !1;
if (!b || !0 === b) b = {
trigger: b
};
var c = (a || "").replace(q, "");
this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a));
},
_updateHash: function(a, b, c) {
c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b;
}
});
var s = e.View = function(a) {
this.cid = f.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
}, t = /^(\S+)\s*(.*)$/, u = "model,collection,el,id,attributes,className,tagName".split(",");
f.extend(s.prototype, i, {
tagName: "div",
$: function(a) {
return this.$el.find(a);
},
initialize: function() {},
render: function() {
return this;
},
remove: function() {
return this.$el.remove(), this;
},
make: function(a, b, c) {
return a = document.createElement(a), b && g(a).attr(b), c && g(a).html(c), a;
},
setElement: function(a, b) {
return this.$el && this.undelegateEvents(), this.$el = a instanceof g ? a : g(a), this.el = this.$el[0], !1 !== b && this.delegateEvents(), this;
},
delegateEvents: function(a) {
if (a || (a = y(this, "events"))) {
this.undelegateEvents();
for (var b in a) {
var c = a[b];
f.isFunction(c) || (c = this[a[b]]);
if (!c) throw Error('Method "' + a[b] + '" does not exist');
var d = b.match(t), e = d[1], d = d[2], c = f.bind(c, this), e = e + (".delegateEvents" + this.cid);
"" === d ? this.$el.bind(e, c) : this.$el.delegate(d, e, c);
}
}
},
undelegateEvents: function() {
this.$el.unbind(".delegateEvents" + this.cid);
},
_configure: function(a) {
this.options && (a = f.extend({}, this.options, a));
for (var b = 0, c = u.length; b < c; b++) {
var d = u[b];
a[d] && (this[d] = a[d]);
}
this.options = a;
},
_ensureElement: function() {
if (this.el) this.setElement(this.el, !1); else {
var a = y(this, "attributes") || {};
this.id && (a.id = this.id), this.className && (a["class"] = this.className), this.setElement(this.make(this.tagName, a), !1);
}
}
}), j.extend = k.extend = l.extend = s.extend = function(a, b) {
var c = x(this, a, b);
return c.extend = this.extend, c;
};
var v = {
create: "POST",
update: "PUT",
"delete": "DELETE",
read: "GET"
};
e.sync = function(a, b, c) {
var d = v[a];
c || (c = {});
var h = {
type: d,
dataType: "json"
};
return c.url || (h.url = y(b, "url") || z()), !c.data && b && ("create" == a || "update" == a) && (h.contentType = "application/json", h.data = JSON.stringify(b.toJSON())), e.emulateJSON && (h.contentType = "application/x-www-form-urlencoded", h.data = h.data ? {
model: h.data
} : {}), e.emulateHTTP && ("PUT" === d || "DELETE" === d) && (e.emulateJSON && (h.data._method = d), h.type = "POST", h.beforeSend = function(a) {
a.setRequestHeader("X-HTTP-Method-Override", d);
}), "GET" !== h.type && !e.emulateJSON && (h.processData = !1), g.ajax(f.extend(h, c));
}, e.wrapError = function(a, b, c) {
return function(d, e) {
e = d === b ? e : d, a ? a(b, e, c) : b.trigger("error", b, e, c);
};
};
var w = function() {}, x = function(a, b, c) {
var d;
return d = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
a.apply(this, arguments);
}, f.extend(d, a), w.prototype = a.prototype, d.prototype = new w, b && f.extend(d.prototype, b), c && f.extend(d, c), d.prototype.constructor = d, d.__super__ = a.prototype, d;
}, y = function(a, b) {
return !a || !a[b] ? null : f.isFunction(a[b]) ? a[b]() : a[b];
}, z = function() {
throw Error('A "url" property or function must be specified');
};
}).call(this);

// FittableLayout.js

enyo.kind({
name: "enyo.FittableLayout",
kind: "Layout",
calcFitIndex: function() {
for (var a = 0, b = this.container.children, c; c = b[a]; a++) if (c.fit && c.showing) return a;
},
getFitControl: function() {
var a = this.container.children, b = a[this.fitIndex];
return b && b.fit && b.showing || (this.fitIndex = this.calcFitIndex(), b = a[this.fitIndex]), b;
},
getLastControl: function() {
var a = this.container.children, b = a.length - 1, c = a[b];
while ((c = a[b]) && !c.showing) b--;
return c;
},
_reflow: function(a, b, c, d) {
this.container.addRemoveClass("enyo-stretch", !this.container.noStretch);
var e = this.getFitControl();
if (!e) return;
var f = 0, g = 0, h = 0, i, j = this.container.hasNode();
j && (i = enyo.FittableLayout.calcPaddingExtents(j), f = j[b] - (i[c] + i[d]));
var k = e.getBounds();
g = k[c] - (i && i[c] || 0);
var l = this.getLastControl();
if (l) {
var m = enyo.FittableLayout.getComputedStyleValue(l.hasNode(), "margin", d) || 0;
if (l != e) {
var n = l.getBounds(), o = k[c] + k[a], p = n[c] + n[a] + m;
h = p - o;
} else h = m;
}
var q = f - (g + h);
e.applyStyle(a, q + "px");
},
reflow: function() {
this.orient == "h" ? this._reflow("width", "clientWidth", "left", "right") : this._reflow("height", "clientHeight", "top", "bottom");
},
statics: {
_ieCssToPixelValue: function(a, b) {
var c = b, d = a.style, e = d.left, f = a.runtimeStyle && a.runtimeStyle.left;
return f && (a.runtimeStyle.left = a.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, f && (d.runtimeStyle.left = f), c;
},
_pxMatch: /px/i,
getComputedStyleValue: function(a, b, c, d) {
var e = d || enyo.dom.getComputedStyle(a);
if (e) return parseInt(e.getPropertyValue(b + "-" + c));
if (a && a.currentStyle) {
var f = a.currentStyle[b + enyo.cap(c)];
return f.match(this._pxMatch) || (f = this._ieCssToPixelValue(a, f)), parseInt(f);
}
return 0;
},
calcBoxExtents: function(a, b) {
var c = enyo.dom.getComputedStyle(a);
return {
top: this.getComputedStyleValue(a, b, "top", c),
right: this.getComputedStyleValue(a, b, "right", c),
bottom: this.getComputedStyleValue(a, b, "bottom", c),
left: this.getComputedStyleValue(a, b, "left", c)
};
},
calcPaddingExtents: function(a) {
return this.calcBoxExtents(a, "padding");
},
calcMarginExtents: function(a) {
return this.calcBoxExtents(a, "margin");
}
}
}), enyo.kind({
name: "enyo.FittableColumnsLayout",
kind: "FittableLayout",
orient: "h",
layoutClass: "enyo-fittable-columns-layout"
}), enyo.kind({
name: "enyo.FittableRowsLayout",
kind: "FittableLayout",
layoutClass: "enyo-fittable-rows-layout",
orient: "v"
});

// FittableRows.js

enyo.kind({
name: "enyo.FittableRows",
layoutKind: "FittableRowsLayout",
noStretch: !1
});

// FittableColumns.js

enyo.kind({
name: "enyo.FittableColumns",
layoutKind: "FittableColumnsLayout",
noStretch: !1
});

// FlyweightRepeater.js

enyo.kind({
name: "enyo.FlyweightRepeater",
published: {
count: 0,
multiSelect: !1,
toggleSelected: !1
},
events: {
onSetupItem: ""
},
components: [ {
kind: "Selection",
onSelect: "selectDeselect",
onDeselect: "selectDeselect"
}, {
name: "client"
} ],
rowOffset: 0,
bottomUp: !1,
create: function() {
this.inherited(arguments), this.multiSelectChanged();
},
multiSelectChanged: function() {
this.$.selection.setMulti(this.multiSelect);
},
setupItem: function(a) {
this.doSetupItem({
index: a,
selected: this.isSelected(a)
});
},
generateChildHtml: function() {
var a = "";
this.index = null;
for (var b = 0, c = 0; b < this.count; b++) c = this.rowOffset + (this.bottomUp ? this.count - b - 1 : b), this.setupItem(c), this.$.client.setAttribute("index", c), a += this.inherited(arguments), this.$.client.teardownRender();
return a;
},
previewDomEvent: function(a) {
var b = this.index = this.rowForEvent(a);
a.rowIndex = a.index = b, a.flyweight = this;
},
decorateEvent: function(a, b, c) {
var d = b && b.index != null ? b.index : this.index;
b && d != null && (b.index = d, b.flyweight = this), this.inherited(arguments);
},
tap: function(a, b) {
this.toggleSelected ? this.$.selection.toggle(b.index) : this.$.selection.select(b.index);
},
selectDeselect: function(a, b) {
this.renderRow(b.key);
},
getSelection: function() {
return this.$.selection;
},
isSelected: function(a) {
return this.getSelection().isSelected(a);
},
renderRow: function(a) {
var b = this.fetchRowNode(a);
b && (this.setupItem(a), b.innerHTML = this.$.client.generateChildHtml(), this.$.client.teardownChildren());
},
fetchRowNode: function(a) {
if (this.hasNode()) {
var b = this.node.querySelectorAll('[index="' + a + '"]');
return b && b[0];
}
},
rowForEvent: function(a) {
var b = a.target, c = this.hasNode().id;
while (b && b.parentNode && b.id != c) {
var d = b.getAttribute && b.getAttribute("index");
if (d !== null) return Number(d);
b = b.parentNode;
}
return -1;
},
prepareRow: function(a) {
var b = this.fetchRowNode(a);
enyo.FlyweightRepeater.claimNode(this.$.client, b);
},
lockRow: function() {
this.$.client.teardownChildren();
},
performOnRow: function(a, b, c) {
b && (this.prepareRow(a), enyo.call(c || null, b), this.lockRow());
},
statics: {
claimNode: function(a, b) {
var c = b && b.querySelectorAll("#" + a.id);
c = c && c[0], a.generated = Boolean(c || !a.tag), a.node = c, a.node && a.rendered();
for (var d = 0, e = a.children, f; f = e[d]; d++) this.claimNode(f, b);
}
}
});

// List.js

enyo.kind({
name: "enyo.List",
kind: "Scroller",
classes: "enyo-list",
published: {
count: 0,
rowsPerPage: 50,
bottomUp: !1,
multiSelect: !1,
toggleSelected: !1,
fixedHeight: !1
},
events: {
onSetupItem: ""
},
handlers: {
onAnimateFinish: "animateFinish"
},
rowHeight: 0,
listTools: [ {
name: "port",
classes: "enyo-list-port enyo-border-box",
components: [ {
name: "generator",
kind: "FlyweightRepeater",
canGenerate: !1,
components: [ {
tag: null,
name: "client"
} ]
}, {
name: "page0",
allowHtml: !0,
classes: "enyo-list-page"
}, {
name: "page1",
allowHtml: !0,
classes: "enyo-list-page"
} ]
} ],
create: function() {
this.pageHeights = [], this.inherited(arguments), this.getStrategy().translateOptimized = !0, this.bottomUpChanged(), this.multiSelectChanged(), this.toggleSelectedChanged();
},
createStrategy: function() {
this.controlParentName = "strategy", this.inherited(arguments), this.createChrome(this.listTools), this.controlParentName = "client", this.discoverControlParent();
},
rendered: function() {
this.inherited(arguments), this.$.generator.node = this.$.port.hasNode(), this.$.generator.generated = !0, this.reset();
},
resizeHandler: function() {
this.inherited(arguments), this.refresh();
},
bottomUpChanged: function() {
this.$.generator.bottomUp = this.bottomUp, this.$.page0.applyStyle(this.pageBound, null), this.$.page1.applyStyle(this.pageBound, null), this.pageBound = this.bottomUp ? "bottom" : "top", this.hasNode() && this.reset();
},
multiSelectChanged: function() {
this.$.generator.setMultiSelect(this.multiSelect);
},
toggleSelectedChanged: function() {
this.$.generator.setToggleSelected(this.toggleSelected);
},
countChanged: function() {
this.hasNode() && this.updateMetrics();
},
updateMetrics: function() {
this.defaultPageHeight = this.rowsPerPage * (this.rowHeight || 100), this.pageCount = Math.ceil(this.count / this.rowsPerPage), this.portSize = 0;
for (var a = 0; a < this.pageCount; a++) this.portSize += this.getPageHeight(a);
this.adjustPortSize();
},
generatePage: function(a, b) {
this.page = a;
var c = this.$.generator.rowOffset = this.rowsPerPage * this.page, d = this.$.generator.count = Math.min(this.count - c, this.rowsPerPage), e = this.$.generator.generateChildHtml();
b.setContent(e);
var f = b.getBounds().height;
!this.rowHeight && f > 0 && (this.rowHeight = Math.floor(f / d), this.updateMetrics());
if (!this.fixedHeight) {
var g = this.getPageHeight(a);
g != f && f > 0 && (this.pageHeights[a] = f, this.portSize += f - g);
}
},
update: function(a) {
var b = !1, c = this.positionToPageInfo(a), d = c.pos + this.scrollerHeight / 2, e = Math.floor(d / Math.max(c.height, this.scrollerHeight) + .5) + c.no, f = e % 2 == 0 ? e : e - 1;
this.p0 != f && this.isPageInRange(f) && (this.generatePage(f, this.$.page0), this.positionPage(f, this.$.page0), this.p0 = f, b = !0), f = e % 2 == 0 ? Math.max(1, e - 1) : e, this.p1 != f && this.isPageInRange(f) && (this.generatePage(f, this.$.page1), this.positionPage(f, this.$.page1), this.p1 = f, b = !0), b && !this.fixedHeight && (this.adjustBottomPage(), this.adjustPortSize());
},
updateForPosition: function(a) {
this.update(this.calcPos(a));
},
calcPos: function(a) {
return this.bottomUp ? this.portSize - this.scrollerHeight - a : a;
},
adjustBottomPage: function() {
var a = this.p0 >= this.p1 ? this.$.page0 : this.$.page1;
this.positionPage(a.pageNo, a);
},
adjustPortSize: function() {
this.scrollerHeight = this.getBounds().height;
var a = Math.max(this.scrollerHeight, this.portSize);
this.$.port.applyStyle("height", a + "px");
},
positionPage: function(a, b) {
b.pageNo = a;
var c = this.pageToPosition(a);
b.applyStyle(this.pageBound, c + "px");
},
pageToPosition: function(a) {
var b = 0, c = a;
while (c > 0) c--, b += this.getPageHeight(c);
return b;
},
positionToPageInfo: function(a) {
var b = -1, c = this.calcPos(a), d = this.defaultPageHeight;
while (c >= 0) b++, d = this.getPageHeight(b), c -= d;
return {
no: b,
height: d,
pos: c + d
};
},
isPageInRange: function(a) {
return a == Math.max(0, Math.min(this.pageCount - 1, a));
},
getPageHeight: function(a) {
return this.pageHeights[a] || this.defaultPageHeight;
},
invalidatePages: function() {
this.p0 = this.p1 = null, this.$.page0.setContent(""), this.$.page1.setContent("");
},
invalidateMetrics: function() {
this.pageHeights = [], this.rowHeight = 0, this.updateMetrics();
},
scroll: function(a, b) {
var c = this.inherited(arguments);
return this.update(this.getScrollTop()), c;
},
scrollToBottom: function() {
this.update(this.getScrollBounds().maxTop), this.inherited(arguments);
},
setScrollTop: function(a) {
this.update(a), this.inherited(arguments), this.twiddle();
},
getScrollPosition: function() {
return this.calcPos(this.getScrollTop());
},
setScrollPosition: function(a) {
this.setScrollTop(this.calcPos(a));
},
scrollToRow: function(a) {
var b = Math.floor(a / this.rowsPerPage), c = a % this.rowsPerPage, d = this.pageToPosition(b);
this.updateForPosition(d), d = this.pageToPosition(b), this.setScrollPosition(d);
if (b == this.p0 || b == this.p1) {
var e = this.$.generator.fetchRowNode(a);
if (e) {
var f = e.offsetTop;
this.bottomUp && (f = this.getPageHeight(b) - e.offsetHeight - f);
var g = this.getScrollPosition() + f;
this.setScrollPosition(g);
}
}
},
scrollToStart: function() {
this[this.bottomUp ? "scrollToBottom" : "scrollToTop"]();
},
scrollToEnd: function() {
this[this.bottomUp ? "scrollToTop" : "scrollToBottom"]();
},
refresh: function() {
this.invalidatePages(), this.update(this.getScrollTop()), this.stabilize(), enyo.platform.android === 4 && this.twiddle();
},
reset: function() {
this.getSelection().clear(), this.invalidateMetrics(), this.invalidatePages(), this.stabilize(), this.scrollToStart();
},
getSelection: function() {
return this.$.generator.getSelection();
},
select: function(a, b) {
return this.getSelection().select(a, b);
},
isSelected: function(a) {
return this.$.generator.isSelected(a);
},
renderRow: function(a) {
this.$.generator.renderRow(a);
},
prepareRow: function(a) {
this.$.generator.prepareRow(a);
},
lockRow: function() {
this.$.generator.lockRow();
},
performOnRow: function(a, b, c) {
this.$.generator.performOnRow(a, b, c);
},
animateFinish: function(a) {
return this.twiddle(), !0;
},
twiddle: function() {
var a = this.getStrategy();
enyo.call(a, "twiddle");
}
});

// PulldownList.js

enyo.kind({
name: "enyo.PulldownList",
kind: "List",
touch: !0,
pully: null,
pulldownTools: [ {
name: "pulldown",
classes: "enyo-list-pulldown",
components: [ {
name: "puller",
kind: "Puller"
} ]
} ],
events: {
onPullStart: "",
onPullCancel: "",
onPull: "",
onPullRelease: "",
onPullComplete: ""
},
handlers: {
onScrollStart: "scrollStartHandler",
onScroll: "scrollHandler",
onScrollStop: "scrollStopHandler",
ondragfinish: "dragfinish"
},
pullingMessage: "Pull down to refresh...",
pulledMessage: "Release to refresh...",
loadingMessage: "Loading...",
pullingIconClass: "enyo-puller-arrow enyo-puller-arrow-down",
pulledIconClass: "enyo-puller-arrow enyo-puller-arrow-up",
loadingIconClass: "",
create: function() {
var a = {
kind: "Puller",
showing: !1,
text: this.loadingMessage,
iconClass: this.loadingIconClass,
onCreate: "setPully"
};
this.listTools.splice(0, 0, a), this.inherited(arguments), this.setPulling();
},
initComponents: function() {
this.createChrome(this.pulldownTools), this.accel = enyo.dom.canAccelerate(), this.translation = this.accel ? "translate3d" : "translate", this.inherited(arguments);
},
setPully: function(a, b) {
this.pully = b.originator;
},
scrollStartHandler: function() {
this.firedPullStart = !1, this.firedPull = !1, this.firedPullCancel = !1;
},
scrollHandler: function(a) {
this.completingPull && this.pully.setShowing(!1);
var b = this.getStrategy().$.scrollMath, c = b.y;
b.isInOverScroll() && c > 0 && (enyo.dom.transformValue(this.$.pulldown, this.translation, "0," + c + "px" + (this.accel ? ",0" : "")), this.firedPullStart || (this.firedPullStart = !0, this.pullStart(), this.pullHeight = this.$.pulldown.getBounds().height), c > this.pullHeight && !this.firedPull && (this.firedPull = !0, this.firedPullCancel = !1, this.pull()), this.firedPull && !this.firedPullCancel && c < this.pullHeight && (this.firedPullCancel = !0, this.firedPull = !1, this.pullCancel()));
},
scrollStopHandler: function() {
this.completingPull && (this.completingPull = !1, this.doPullComplete());
},
dragfinish: function() {
if (this.firedPull) {
var a = this.getStrategy().$.scrollMath;
a.setScrollY(a.y - this.pullHeight), this.pullRelease();
}
},
completePull: function() {
this.completingPull = !0, this.$.strategy.$.scrollMath.setScrollY(this.pullHeight), this.$.strategy.$.scrollMath.start();
},
pullStart: function() {
this.setPulling(), this.pully.setShowing(!1), this.$.puller.setShowing(!0), this.doPullStart();
},
pull: function() {
this.setPulled(), this.doPull();
},
pullCancel: function() {
this.setPulling(), this.doPullCancel();
},
pullRelease: function() {
this.$.puller.setShowing(!1), this.pully.setShowing(!0), this.doPullRelease();
},
setPulling: function() {
this.$.puller.setText(this.pullingMessage), this.$.puller.setIconClass(this.pullingIconClass);
},
setPulled: function() {
this.$.puller.setText(this.pulledMessage), this.$.puller.setIconClass(this.pulledIconClass);
}
}), enyo.kind({
name: "enyo.Puller",
classes: "enyo-puller",
published: {
text: "",
iconClass: ""
},
events: {
onCreate: ""
},
components: [ {
name: "icon"
}, {
name: "text",
tag: "span",
classes: "enyo-puller-text"
} ],
create: function() {
this.inherited(arguments), this.doCreate(), this.textChanged(), this.iconClassChanged();
},
textChanged: function() {
this.$.text.setContent(this.text);
},
iconClassChanged: function() {
this.$.icon.setClasses(this.iconClass);
}
});

// Slideable.js

enyo.kind({
name: "enyo.Slideable",
kind: "Control",
published: {
axis: "h",
value: 0,
unit: "px",
min: 0,
max: 0,
accelerated: "auto",
overMoving: !0,
draggable: !0
},
events: {
onAnimateFinish: "",
onChange: ""
},
preventDragPropagation: !1,
tools: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorComplete"
} ],
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
kDragScalar: 1,
dragEventProp: "dx",
unitModifier: !1,
canTransform: !1,
create: function() {
this.inherited(arguments), this.acceleratedChanged(), this.transformChanged(), this.axisChanged(), this.valueChanged(), this.addClass("enyo-slideable");
},
initComponents: function() {
this.createComponents(this.tools), this.inherited(arguments);
},
rendered: function() {
this.inherited(arguments), this.canModifyUnit(), this.updateDragScalar();
},
resizeHandler: function() {
this.inherited(arguments), this.updateDragScalar();
},
canModifyUnit: function() {
if (!this.canTransform) {
var a = this.getInitialStyleValue(this.hasNode(), this.boundary);
a.match(/px/i) && this.unit === "%" && (this.unitModifier = this.getBounds()[this.dimension]);
}
},
getInitialStyleValue: function(a, b) {
var c = enyo.dom.getComputedStyle(a);
return c ? c.getPropertyValue(b) : a && a.currentStyle ? a.currentStyle[b] : "0";
},
updateBounds: function(a, b) {
var c = {};
c[this.boundary] = a, this.setBounds(c, this.unit), this.setInlineStyles(a, b);
},
updateDragScalar: function() {
if (this.unit == "%") {
var a = this.getBounds()[this.dimension];
this.kDragScalar = a ? 100 / a : 1, this.canTransform || this.updateBounds(this.value, 100);
}
},
transformChanged: function() {
this.canTransform = enyo.dom.canTransform();
},
acceleratedChanged: function() {
enyo.platform.android > 2 || enyo.dom.accelerate(this, this.accelerated);
},
axisChanged: function() {
var a = this.axis == "h";
this.dragMoveProp = a ? "dx" : "dy", this.shouldDragProp = a ? "horizontal" : "vertical", this.transform = a ? "translateX" : "translateY", this.dimension = a ? "width" : "height", this.boundary = a ? "left" : "top";
},
setInlineStyles: function(a, b) {
var c = {};
this.unitModifier ? (c[this.boundary] = this.percentToPixels(a, this.unitModifier), c[this.dimension] = this.unitModifier, this.setBounds(c)) : (b ? c[this.dimension] = b : c[this.boundary] = a, this.setBounds(c, this.unit));
},
valueChanged: function(a) {
var b = this.value;
this.isOob(b) && !this.isAnimating() && (this.value = this.overMoving ? this.dampValue(b) : this.clampValue(b)), enyo.platform.android > 2 && (this.value ? (a === 0 || a === undefined) && enyo.dom.accelerate(this, this.accelerated) : enyo.dom.accelerate(this, !1)), this.canTransform ? enyo.dom.transformValue(this, this.transform, this.value + this.unit) : this.setInlineStyles(this.value, !1), this.doChange();
},
getAnimator: function() {
return this.$.animator;
},
isAtMin: function() {
return this.value <= this.calcMin();
},
isAtMax: function() {
return this.value >= this.calcMax();
},
calcMin: function() {
return this.min;
},
calcMax: function() {
return this.max;
},
clampValue: function(a) {
var b = this.calcMin(), c = this.calcMax();
return Math.max(b, Math.min(a, c));
},
dampValue: function(a) {
return this.dampBound(this.dampBound(a, this.min, 1), this.max, -1);
},
dampBound: function(a, b, c) {
var d = a;
return d * c < b * c && (d = b + (d - b) / 4), d;
},
percentToPixels: function(a, b) {
return Math.floor(b / 100 * a);
},
pixelsToPercent: function(a) {
var b = this.unitModifier ? this.getBounds()[this.dimension] : this.container.getBounds()[this.dimension];
return a / b * 100;
},
shouldDrag: function(a) {
return this.draggable && a[this.shouldDragProp];
},
isOob: function(a) {
return a > this.calcMax() || a < this.calcMin();
},
dragstart: function(a, b) {
if (this.shouldDrag(b)) return b.preventDefault(), this.$.animator.stop(), b.dragInfo = {}, this.dragging = !0, this.drag0 = this.value, this.dragd0 = 0, this.preventDragPropagation;
},
drag: function(a, b) {
if (this.dragging) {
b.preventDefault();
var c = this.canTransform ? b[this.dragMoveProp] * this.kDragScalar : this.pixelsToPercent(b[this.dragMoveProp]), d = this.drag0 + c, e = c - this.dragd0;
return this.dragd0 = c, e && (b.dragInfo.minimizing = e < 0), this.setValue(d), this.preventDragPropagation;
}
},
dragfinish: function(a, b) {
if (this.dragging) return this.dragging = !1, this.completeDrag(b), b.preventTap(), this.preventDragPropagation;
},
completeDrag: function(a) {
this.value !== this.calcMax() && this.value != this.calcMin() && this.animateToMinMax(a.dragInfo.minimizing);
},
isAnimating: function() {
return this.$.animator.isAnimating();
},
play: function(a, b) {
this.$.animator.play({
startValue: a,
endValue: b,
node: this.hasNode()
});
},
animateTo: function(a) {
this.play(this.value, a);
},
animateToMin: function() {
this.animateTo(this.calcMin());
},
animateToMax: function() {
this.animateTo(this.calcMax());
},
animateToMinMax: function(a) {
a ? this.animateToMin() : this.animateToMax();
},
animatorStep: function(a) {
return this.setValue(a.value), !0;
},
animatorComplete: function(a) {
return this.doAnimateFinish(a), !0;
},
toggleMinMax: function() {
this.animateToMinMax(!this.isAtMin());
}
});

// Arranger.js

enyo.kind({
name: "enyo.Arranger",
kind: "Layout",
layoutClass: "enyo-arranger",
accelerated: "auto",
dragProp: "ddx",
dragDirectionProp: "xDirection",
canDragProp: "horizontal",
incrementalPoints: !1,
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) c._arranger = null;
this.inherited(arguments);
},
arrange: function(a, b) {},
size: function() {},
start: function() {
var a = this.container.fromIndex, b = this.container.toIndex, c = this.container.transitionPoints = [ a ];
if (this.incrementalPoints) {
var d = Math.abs(b - a) - 2, e = a;
while (d >= 0) e += b < a ? -1 : 1, c.push(e), d--;
}
c.push(this.container.toIndex);
},
finish: function() {},
canDragEvent: function(a) {
return a[this.canDragProp];
},
calcDragDirection: function(a) {
return a[this.dragDirectionProp];
},
calcDrag: function(a) {
return a[this.dragProp];
},
drag: function(a, b, c, d, e) {
var f = this.measureArrangementDelta(-a, b, c, d, e);
return f;
},
measureArrangementDelta: function(a, b, c, d, e) {
var f = this.calcArrangementDifference(b, c, d, e), g = f ? a / Math.abs(f) : 0;
return g *= this.container.fromIndex > this.container.toIndex ? -1 : 1, g;
},
calcArrangementDifference: function(a, b, c, d) {},
_arrange: function(a) {
var b = this.getOrderedControls(a);
this.arrange(b, a);
},
arrangeControl: function(a, b) {
a._arranger = enyo.mixin(a._arranger || {}, b);
},
flow: function() {
this.c$ = [].concat(this.container.getPanels()), this.controlsIndex = 0;
for (var a = 0, b = this.container.getPanels(), c; c = b[a]; a++) {
enyo.dom.accelerate(c, this.accelerated);
if (enyo.platform.safari) {
var d = c.children;
for (var e = 0, f; f = d[e]; e++) enyo.dom.accelerate(f, this.accelerated);
}
}
},
reflow: function() {
var a = this.container.hasNode();
this.containerBounds = a ? {
width: a.clientWidth,
height: a.clientHeight
} : {}, this.size();
},
flowArrangement: function() {
var a = this.container.arrangement;
if (a) for (var b = 0, c = this.container.getPanels(), d; d = c[b]; b++) this.flowControl(d, a[b]);
},
flowControl: function(a, b) {
enyo.Arranger.positionControl(a, b);
var c = b.opacity;
c != null && enyo.Arranger.opacifyControl(a, c);
},
getOrderedControls: function(a) {
var b = Math.floor(a), c = b - this.controlsIndex, d = c > 0, e = this.c$ || [];
for (var f = 0; f < Math.abs(c); f++) d ? e.push(e.shift()) : e.unshift(e.pop());
return this.controlsIndex = b, e;
},
statics: {
positionControl: function(a, b, c) {
var d = c || "px";
if (!this.updating) if (enyo.dom.canTransform() && !enyo.platform.android) {
var e = b.left, f = b.top, e = enyo.isString(e) ? e : e && e + d, f = enyo.isString(f) ? f : f && f + d;
enyo.dom.transform(a, {
translateX: e || null,
translateY: f || null
});
} else a.setBounds(b, c);
},
opacifyControl: function(a, b) {
var c = b;
c = c > .99 ? 1 : c < .01 ? 0 : c, enyo.platform.ie < 9 ? a.applyStyle("filter", "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + c * 100 + ")") : a.applyStyle("opacity", c);
}
}
});

// CardArranger.js

enyo.kind({
name: "enyo.CardArranger",
kind: "Arranger",
layoutClass: "enyo-arranger enyo-arranger-fit",
calcArrangementDifference: function(a, b, c, d) {
return this.containerBounds.width;
},
arrange: function(a, b) {
for (var c = 0, d, e, f; d = a[c]; c++) f = c == 0 ? 1 : 0, this.arrangeControl(d, {
opacity: f
});
},
start: function() {
this.inherited(arguments);
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) {
var d = c.showing;
c.setShowing(b == this.container.fromIndex || b == this.container.toIndex), c.showing && !d && c.resized();
}
},
finish: function() {
this.inherited(arguments);
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) c.setShowing(b == this.container.toIndex);
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) enyo.Arranger.opacifyControl(c, 1), c.showing || c.setShowing(!0);
this.inherited(arguments);
}
});

// CardSlideInArranger.js

enyo.kind({
name: "enyo.CardSlideInArranger",
kind: "CardArranger",
start: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) {
var d = c.showing;
c.setShowing(b == this.container.fromIndex || b == this.container.toIndex), c.showing && !d && c.resized();
}
var e = this.container.fromIndex, b = this.container.toIndex;
this.container.transitionPoints = [ b + "." + e + ".s", b + "." + e + ".f" ];
},
finish: function() {
this.inherited(arguments);
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) c.setShowing(b == this.container.toIndex);
},
arrange: function(a, b) {
var c = b.split("."), d = c[0], e = c[1], f = c[2] == "s", g = this.containerBounds.width;
for (var h = 0, i = this.container.getPanels(), j, k; j = i[h]; h++) k = g, e == h && (k = f ? 0 : -g), d == h && (k = f ? g : 0), e == h && e == d && (k = 0), this.arrangeControl(j, {
left: k
});
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) enyo.Arranger.positionControl(c, {
left: null
});
this.inherited(arguments);
}
});

// CarouselArranger.js

enyo.kind({
name: "enyo.CarouselArranger",
kind: "Arranger",
size: function() {
var a = this.container.getPanels(), b = this.containerPadding = this.container.hasNode() ? enyo.FittableLayout.calcPaddingExtents(this.container.node) : {}, c = this.containerBounds;
c.height -= b.top + b.bottom, c.width -= b.left + b.right;
var d;
for (var e = 0, f = 0, g, h; h = a[e]; e++) g = enyo.FittableLayout.calcMarginExtents(h.hasNode()), h.width = h.getBounds().width, h.marginWidth = g.right + g.left, f += (h.fit ? 0 : h.width) + h.marginWidth, h.fit && (d = h);
if (d) {
var i = c.width - f;
d.width = i >= 0 ? i : d.width;
}
for (var e = 0, j = b.left, g, h; h = a[e]; e++) h.setBounds({
top: b.top,
bottom: b.bottom,
width: h.fit ? h.width : null
});
},
arrange: function(a, b) {
this.container.wrap ? this.arrangeWrap(a, b) : this.arrangeNoWrap(a, b);
},
arrangeNoWrap: function(a, b) {
var c = this.container.getPanels(), d = this.container.clamp(b), e = this.containerBounds.width;
for (var f = d, g = 0, h; h = c[f]; f++) {
g += h.width + h.marginWidth;
if (g > e) break;
}
var i = e - g, j = 0;
if (i > 0) {
var k = d;
for (var f = d - 1, l = 0, h; h = c[f]; f--) {
l += h.width + h.marginWidth;
if (i - l <= 0) {
j = i - l, d = f;
break;
}
}
}
for (var f = 0, m = this.containerPadding.left + j, n, h; h = c[f]; f++) n = h.width + h.marginWidth, f < d ? this.arrangeControl(h, {
left: -n
}) : (this.arrangeControl(h, {
left: Math.floor(m)
}), m += n);
},
arrangeWrap: function(a, b) {
for (var c = 0, d = this.containerPadding.left, e, f; f = a[c]; c++) this.arrangeControl(f, {
left: d
}), d += f.width + f.marginWidth;
},
calcArrangementDifference: function(a, b, c, d) {
var e = Math.abs(a % this.c$.length);
return b[e].left - d[e].left;
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) enyo.Arranger.positionControl(c, {
left: null,
top: null
}), c.applyStyle("top", null), c.applyStyle("bottom", null), c.applyStyle("left", null), c.applyStyle("width", null);
this.inherited(arguments);
}
});

// CollapsingArranger.js

enyo.kind({
name: "enyo.CollapsingArranger",
kind: "CarouselArranger",
size: function() {
this.clearLastSize(), this.inherited(arguments);
},
clearLastSize: function() {
for (var a = 0, b = this.container.getPanels(), c; c = b[a]; a++) c._fit && a != b.length - 1 && (c.applyStyle("width", null), c._fit = null);
},
arrange: function(a, b) {
var c = this.container.getPanels();
for (var d = 0, e = this.containerPadding.left, f, g; g = c[d]; d++) this.arrangeControl(g, {
left: e
}), d >= b && (e += g.width + g.marginWidth), d == c.length - 1 && b < 0 && this.arrangeControl(g, {
left: e - b
});
},
calcArrangementDifference: function(a, b, c, d) {
var e = this.container.getPanels().length - 1;
return Math.abs(d[e].left - b[e].left);
},
flowControl: function(a, b) {
this.inherited(arguments);
if (this.container.realtimeFit) {
var c = this.container.getPanels(), d = c.length - 1, e = c[d];
a == e && this.fitControl(a, b.left);
}
},
finish: function() {
this.inherited(arguments);
if (!this.container.realtimeFit && this.containerBounds) {
var a = this.container.getPanels(), b = this.container.arrangement, c = a.length - 1, d = a[c];
this.fitControl(d, b[c].left);
}
},
fitControl: function(a, b) {
a._fit = !0, a.applyStyle("width", this.containerBounds.width - b + "px"), a.resized();
}
});

// OtherArrangers.js

enyo.kind({
name: "enyo.LeftRightArranger",
kind: "Arranger",
margin: 40,
axisSize: "width",
offAxisSize: "height",
axisPosition: "left",
constructor: function() {
this.inherited(arguments), this.margin = this.container.margin != null ? this.container.margin : this.margin;
},
size: function() {
var a = this.container.getPanels(), b = this.containerBounds[this.axisSize], c = b - this.margin - this.margin;
for (var d = 0, e, f; f = a[d]; d++) e = {}, e[this.axisSize] = c, e[this.offAxisSize] = "100%", f.setBounds(e);
},
arrange: function(a, b) {
var c = Math.floor(this.container.getPanels().length / 2), d = this.getOrderedControls(Math.floor(b) - c), e = this.containerBounds[this.axisSize] - this.margin - this.margin, f = this.margin - e * c, g = (d.length - 1) / 2;
for (var h = 0, i, j, k; i = d[h]; h++) j = {}, j[this.axisPosition] = f, j.opacity = h == 0 || h == d.length - 1 ? 0 : 1, this.arrangeControl(i, j), f += e;
},
calcArrangementDifference: function(a, b, c, d) {
var e = Math.abs(a % this.c$.length);
return b[e][this.axisPosition] - d[e][this.axisPosition];
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) enyo.Arranger.positionControl(c, {
left: null,
top: null
}), enyo.Arranger.opacifyControl(c, 1), c.applyStyle("left", null), c.applyStyle("top", null), c.applyStyle("height", null), c.applyStyle("width", null);
this.inherited(arguments);
}
}), enyo.kind({
name: "enyo.TopBottomArranger",
kind: "LeftRightArranger",
dragProp: "ddy",
dragDirectionProp: "yDirection",
canDragProp: "vertical",
axisSize: "height",
offAxisSize: "width",
axisPosition: "top"
}), enyo.kind({
name: "enyo.SpiralArranger",
kind: "Arranger",
incrementalPoints: !0,
inc: 20,
size: function() {
var a = this.container.getPanels(), b = this.containerBounds, c = this.controlWidth = b.width / 3, d = this.controlHeight = b.height / 3;
for (var e = 0, f; f = a[e]; e++) f.setBounds({
width: c,
height: d
});
},
arrange: function(a, b) {
var c = this.inc;
for (var d = 0, e = a.length, f; f = a[d]; d++) {
var g = Math.cos(d / e * 2 * Math.PI) * d * c + this.controlWidth, h = Math.sin(d / e * 2 * Math.PI) * d * c + this.controlHeight;
this.arrangeControl(f, {
left: g,
top: h
});
}
},
start: function() {
this.inherited(arguments);
var a = this.getOrderedControls(this.container.toIndex);
for (var b = 0, c; c = a[b]; b++) c.applyStyle("z-index", a.length - b);
},
calcArrangementDifference: function(a, b, c, d) {
return this.controlWidth;
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) c.applyStyle("z-index", null), enyo.Arranger.positionControl(c, {
left: null,
top: null
}), c.applyStyle("left", null), c.applyStyle("top", null), c.applyStyle("height", null), c.applyStyle("width", null);
this.inherited(arguments);
}
}), enyo.kind({
name: "enyo.GridArranger",
kind: "Arranger",
incrementalPoints: !0,
colWidth: 100,
colHeight: 100,
size: function() {
var a = this.container.getPanels(), b = this.colWidth, c = this.colHeight;
for (var d = 0, e; e = a[d]; d++) e.setBounds({
width: b,
height: c
});
},
arrange: function(a, b) {
var c = this.colWidth, d = this.colHeight, e = Math.floor(this.containerBounds.width / c), f;
for (var g = 0, h = 0; h < a.length; g++) for (var i = 0; i < e && (f = a[h]); i++, h++) this.arrangeControl(f, {
left: c * i,
top: d * g
});
},
flowControl: function(a, b) {
this.inherited(arguments), enyo.Arranger.opacifyControl(a, b.top % this.colHeight != 0 ? .25 : 1);
},
calcArrangementDifference: function(a, b, c, d) {
return this.colWidth;
},
destroy: function() {
var a = this.container.getPanels();
for (var b = 0, c; c = a[b]; b++) enyo.Arranger.positionControl(c, {
left: null,
top: null
}), c.applyStyle("left", null), c.applyStyle("top", null), c.applyStyle("height", null), c.applyStyle("width", null);
this.inherited(arguments);
}
});

// Panels.js

enyo.kind({
name: "enyo.Panels",
classes: "enyo-panels",
published: {
index: 0,
draggable: !0,
animate: !0,
wrap: !1,
arrangerKind: "CardArranger",
narrowFit: !0
},
events: {
onTransitionStart: "",
onTransitionFinish: ""
},
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
tools: [ {
kind: "Animator",
onStep: "step",
onEnd: "completed"
} ],
fraction: 0,
create: function() {
this.transitionPoints = [], this.inherited(arguments), this.arrangerKindChanged(), this.avoidFitChanged(), this.indexChanged();
},
initComponents: function() {
this.createChrome(this.tools), this.inherited(arguments);
},
arrangerKindChanged: function() {
this.setLayoutKind(this.arrangerKind);
},
avoidFitChanged: function() {
this.addRemoveClass("enyo-panels-fit-narrow", this.narrowFit);
},
removeControl: function(a) {
this.inherited(arguments), this.controls.length > 1 && this.isPanel(a) && (this.setIndex(Math.max(this.index - 1, 0)), this.flow(), this.reflow());
},
isPanel: function() {
return !0;
},
flow: function() {
this.arrangements = [], this.inherited(arguments);
},
reflow: function() {
this.arrangements = [], this.inherited(arguments), this.refresh();
},
getPanels: function() {
var a = this.controlParent || this;
return a.children;
},
getActive: function() {
var a = this.getPanels();
return a[this.index];
},
getAnimator: function() {
return this.$.animator;
},
setIndex: function(a) {
this.setPropertyValue("index", a, "indexChanged");
},
setIndexDirect: function(a) {
this.setIndex(a), this.completed();
},
previous: function() {
this.setIndex(this.index - 1);
},
next: function() {
this.setIndex(this.index + 1);
},
clamp: function(a) {
var b = this.getPanels().length - 1;
return this.wrap ? a : Math.max(0, Math.min(a, b));
},
indexChanged: function(a) {
this.lastIndex = a, this.index = this.clamp(this.index), this.dragging || (this.$.animator.isAnimating() && this.completed(), this.$.animator.stop(), this.hasNode() && (this.animate ? (this.startTransition(), this.$.animator.play({
startValue: this.fraction
})) : this.refresh()));
},
step: function(a) {
this.fraction = a.value, this.stepTransition();
},
completed: function() {
this.$.animator.isAnimating() && this.$.animator.stop(), this.fraction = 1, this.stepTransition(), this.finishTransition();
},
dragstart: function(a, b) {
if (this.draggable && this.layout && this.layout.canDragEvent(b)) return b.preventDefault(), this.dragstartTransition(b), this.dragging = !0, this.$.animator.stop(), !0;
},
drag: function(a, b) {
this.dragging && (b.preventDefault(), this.dragTransition(b));
},
dragfinish: function(a, b) {
this.dragging && (this.dragging = !1, b.preventTap(), this.dragfinishTransition(b));
},
dragstartTransition: function(a) {
if (!this.$.animator.isAnimating()) {
var b = this.fromIndex = this.index;
this.toIndex = b - (this.layout ? this.layout.calcDragDirection(a) : 0);
} else this.verifyDragTransition(a);
this.fromIndex = this.clamp(this.fromIndex), this.toIndex = this.clamp(this.toIndex), this.fireTransitionStart(), this.layout && this.layout.start();
},
dragTransition: function(a) {
var b = this.layout ? this.layout.calcDrag(a) : 0, c = this.transitionPoints, d = c[0], e = c[c.length - 1], f = this.fetchArrangement(d), g = this.fetchArrangement(e), h = this.layout ? this.layout.drag(b, d, f, e, g) : 0, i = b && !h;
!i, this.fraction += h;
var j = this.fraction;
if (j > 1 || j < 0 || i) (j > 0 || i) && this.dragfinishTransition(a), this.dragstartTransition(a), this.fraction = 0;
this.stepTransition();
},
dragfinishTransition: function(a) {
this.verifyDragTransition(a), this.setIndex(this.toIndex), this.dragging && this.fireTransitionFinish();
},
verifyDragTransition: function(a) {
var b = this.layout ? this.layout.calcDragDirection(a) : 0, c = Math.min(this.fromIndex, this.toIndex), d = Math.max(this.fromIndex, this.toIndex);
if (b > 0) {
var e = c;
c = d, d = e;
}
c != this.fromIndex && (this.fraction = 1 - this.fraction), this.fromIndex = c, this.toIndex = d;
},
refresh: function() {
this.$.animator.isAnimating() && this.$.animator.stop(), this.startTransition(), this.fraction = 1, this.stepTransition(), this.finishTransition();
},
startTransition: function() {
this.fromIndex = this.fromIndex != null ? this.fromIndex : this.lastIndex || 0, this.toIndex = this.toIndex != null ? this.toIndex : this.index, this.layout && this.layout.start(), this.fireTransitionStart();
},
finishTransition: function() {
this.layout && this.layout.finish(), this.transitionPoints = [], this.fraction = 0, this.fromIndex = this.toIndex = null, this.fireTransitionFinish();
},
fireTransitionStart: function() {
var a = this.startTransitionInfo;
this.hasNode() && (!a || a.fromIndex != this.fromIndex || a.toIndex != this.toIndex) && (this.startTransitionInfo = {
fromIndex: this.fromIndex,
toIndex: this.toIndex
}, this.doTransitionStart(enyo.clone(this.startTransitionInfo)));
},
fireTransitionFinish: function() {
var a = this.finishTransitionInfo;
this.hasNode() && (!a || a.fromIndex != this.lastIndex || a.toIndex != this.index) && (this.finishTransitionInfo = {
fromIndex: this.lastIndex,
toIndex: this.index
}, this.doTransitionFinish(enyo.clone(this.finishTransitionInfo))), this.lastIndex = this.index;
},
stepTransition: function() {
if (this.hasNode()) {
var a = this.transitionPoints, b = (this.fraction || 0) * (a.length - 1), c = Math.floor(b);
b -= c;
var d = a[c], e = a[c + 1], f = this.fetchArrangement(d), g = this.fetchArrangement(e);
this.arrangement = f && g ? enyo.Panels.lerp(f, g, b) : f || g, this.arrangement && this.layout && this.layout.flowArrangement();
}
},
fetchArrangement: function(a) {
return a != null && !this.arrangements[a] && this.layout && (this.layout._arrange(a), this.arrangements[a] = this.readArrangement(this.getPanels())), this.arrangements[a];
},
readArrangement: function(a) {
var b = [];
for (var c = 0, d = a, e; e = d[c]; c++) b.push(enyo.clone(e._arranger));
return b;
},
statics: {
isScreenNarrow: function() {
return enyo.dom.getWindowWidth() <= 800;
},
lerp: function(a, b, c) {
var d = [];
for (var e = 0, f = enyo.keys(a), g; g = f[e]; e++) d.push(this.lerpObject(a[g], b[g], c));
return d;
},
lerpObject: function(a, b, c) {
var d = enyo.clone(a), e, f;
if (b) for (var g in a) e = a[g], f = b[g], e != f && (d[g] = e - (e - f) * c);
return d;
}
}
});

// Node.js

enyo.kind({
name: "enyo.Node",
published: {
expandable: !1,
expanded: !1,
icon: "",
onlyIconExpands: !1,
selected: !1
},
style: "padding: 0 0 0 16px;",
content: "Node",
defaultKind: "Node",
classes: "enyo-node",
components: [ {
name: "icon",
kind: "Image",
showing: !1
}, {
kind: "Control",
name: "caption",
Xtag: "span",
style: "display: inline-block; padding: 4px;",
allowHtml: !0
}, {
kind: "Control",
name: "extra",
tag: "span",
allowHtml: !0
} ],
childClient: [ {
kind: "Control",
name: "box",
classes: "enyo-node-box",
Xstyle: "border: 1px solid orange;",
components: [ {
kind: "Control",
name: "client",
classes: "enyo-node-client",
Xstyle: "border: 1px solid lightblue;"
} ]
} ],
handlers: {
ondblclick: "dblclick"
},
events: {
onNodeTap: "nodeTap",
onNodeDblClick: "nodeDblClick",
onExpand: "nodeExpand",
onDestroyed: "nodeDestroyed"
},
create: function() {
this.inherited(arguments), this.selectedChanged(), this.iconChanged();
},
destroy: function() {
this.doDestroyed(), this.inherited(arguments);
},
initComponents: function() {
this.expandable && (this.kindComponents = this.kindComponents.concat(this.childClient)), this.inherited(arguments);
},
contentChanged: function() {
this.$.caption.setContent(this.content);
},
iconChanged: function() {
this.$.icon.setSrc(this.icon), this.$.icon.setShowing(Boolean(this.icon));
},
selectedChanged: function() {
this.addRemoveClass("enyo-selected", this.selected);
},
rendered: function() {
this.inherited(arguments), this.expandable && !this.expanded && this.quickCollapse();
},
addNodes: function(a) {
this.destroyClientControls();
for (var b = 0, c; c = a[b]; b++) this.createComponent(c);
this.$.client.render();
},
addTextNodes: function(a) {
this.destroyClientControls();
for (var b = 0, c; c = a[b]; b++) this.createComponent({
content: c
});
this.$.client.render();
},
tap: function(a, b) {
return this.onlyIconExpands ? b.target == this.$.icon.hasNode() ? this.toggleExpanded() : this.doNodeTap() : (this.toggleExpanded(), this.doNodeTap()), !0;
},
dblclick: function(a, b) {
return this.doNodeDblClick(), !0;
},
toggleExpanded: function() {
this.setExpanded(!this.expanded);
},
quickCollapse: function() {
this.removeClass("enyo-animate"), this.$.box.applyStyle("height", "0");
var a = this.$.client.getBounds().height;
this.$.client.setBounds({
top: -a
});
},
_expand: function() {
this.addClass("enyo-animate");
var a = this.$.client.getBounds().height;
this.$.box.setBounds({
height: a
}), this.$.client.setBounds({
top: 0
}), setTimeout(enyo.bind(this, function() {
this.expanded && (this.removeClass("enyo-animate"), this.$.box.applyStyle("height", "auto"));
}), 225);
},
_collapse: function() {
this.removeClass("enyo-animate");
var a = this.$.client.getBounds().height;
this.$.box.setBounds({
height: a
}), setTimeout(enyo.bind(this, function() {
this.addClass("enyo-animate"), this.$.box.applyStyle("height", "0"), this.$.client.setBounds({
top: -a
});
}), 25);
},
expandedChanged: function(a) {
if (!this.expandable) this.expanded = !1; else {
var b = {
expanded: this.expanded
};
this.doExpand(b), b.wait || this.effectExpanded();
}
},
effectExpanded: function() {
this.$.client && (this.expanded ? this._expand() : this._collapse());
}
});

// Icon.js

enyo.kind({
name: "onyx.Icon",
published: {
src: ""
},
classes: "onyx-icon",
create: function() {
this.inherited(arguments), this.src && this.srcChanged();
},
srcChanged: function() {
this.applyStyle("background-image", "url(" + enyo.path.rewrite(this.src) + ")");
}
});

// Button.js

enyo.kind({
name: "onyx.Button",
kind: "enyo.Button",
classes: "onyx-button enyo-unselectable"
});

// IconButton.js

enyo.kind({
name: "onyx.IconButton",
kind: "onyx.Icon",
published: {
active: !1
},
classes: "onyx-icon-button",
rendered: function() {
this.inherited(arguments), this.activeChanged();
},
tap: function() {
this.setActive(!0);
},
activeChanged: function() {
this.bubble("onActivate");
}
});

// Checkbox.js

enyo.kind({
name: "onyx.Checkbox",
classes: "onyx-checkbox",
kind: enyo.Checkbox,
tag: "div",
handlers: {
ondown: "downHandler",
onclick: ""
},
downHandler: function(a, b) {
return this.disabled || (this.setChecked(!this.getChecked()), this.bubble("onchange")), !0;
},
tap: function(a, b) {
return !this.disabled;
}
});

// Drawer.js

enyo.kind({
name: "onyx.Drawer",
published: {
open: !0,
orient: "v"
},
style: "overflow: hidden; position: relative;",
tools: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorEnd"
}, {
name: "client",
style: "position: relative;",
classes: "enyo-border-box"
} ],
create: function() {
this.inherited(arguments), this.openChanged();
},
initComponents: function() {
this.createChrome(this.tools), this.inherited(arguments);
},
openChanged: function() {
this.$.client.show();
if (this.hasNode()) if (this.$.animator.isAnimating()) this.$.animator.reverse(); else {
var a = this.orient == "v", b = a ? "height" : "width", c = a ? "top" : "left";
this.applyStyle(b, null);
var d = this.hasNode()[a ? "scrollHeight" : "scrollWidth"];
this.$.animator.play({
startValue: this.open ? 0 : d,
endValue: this.open ? d : 0,
dimension: b,
position: c
});
} else this.$.client.setShowing(this.open);
},
animatorStep: function(a) {
if (this.hasNode()) {
var b = a.dimension;
this.node.style[b] = this.domStyles[b] = a.value + "px";
}
var c = this.$.client.hasNode();
if (c) {
var d = a.position, e = this.open ? a.endValue : a.startValue;
c.style[d] = this.$.client.domStyles[d] = a.value - e + "px";
}
this.container && this.container.resized();
},
animatorEnd: function() {
this.open || this.$.client.hide(), this.container && this.container.resized();
}
});

// Grabber.js

enyo.kind({
name: "onyx.Grabber",
classes: "onyx-grabber"
});

// Groupbox.js

enyo.kind({
name: "onyx.Groupbox",
classes: "onyx-groupbox"
}), enyo.kind({
name: "onyx.GroupboxHeader",
classes: "onyx-groupbox-header"
});

// Input.js

enyo.kind({
name: "onyx.Input",
kind: "enyo.Input",
classes: "onyx-input"
});

// Popup.js

enyo.kind({
name: "onyx.Popup",
kind: "Popup",
classes: "onyx-popup",
published: {
scrimWhenModal: !0,
scrim: !1,
scrimClassName: ""
},
statics: {
count: 0
},
defaultZ: 120,
showingChanged: function() {
this.showing ? (onyx.Popup.count++, this.applyZIndex()) : onyx.Popup.count > 0 && onyx.Popup.count--, this.showHideScrim(this.showing), this.inherited(arguments);
},
showHideScrim: function(a) {
if (this.floating && (this.scrim || this.modal && this.scrimWhenModal)) {
var b = this.getScrim();
if (a) {
var c = this.getScrimZIndex();
this._scrimZ = c, b.showAtZIndex(c);
} else b.hideAtZIndex(this._scrimZ);
enyo.call(b, "addRemoveClass", [ this.scrimClassName, b.showing ]);
}
},
getScrimZIndex: function() {
return this.findZIndex() - 1;
},
getScrim: function() {
return this.modal && this.scrimWhenModal && !this.scrim ? onyx.scrimTransparent.make() : onyx.scrim.make();
},
applyZIndex: function() {
this._zIndex = onyx.Popup.count * 2 + this.findZIndex() + 1, this.applyStyle("z-index", this._zIndex);
},
findZIndex: function() {
var a = this.defaultZ;
return this._zIndex ? a = this._zIndex : this.hasNode() && (a = Number(enyo.dom.getComputedStyleValue(this.node, "z-index")) || a), this._zIndex = a;
}
});

// TextArea.js

enyo.kind({
name: "onyx.TextArea",
kind: "enyo.TextArea",
classes: "onyx-textarea"
});

// RichText.js

enyo.kind({
name: "onyx.RichText",
kind: "enyo.RichText",
classes: "onyx-richtext"
});

// InputDecorator.js

enyo.kind({
name: "onyx.InputDecorator",
kind: "enyo.ToolDecorator",
tag: "label",
classes: "onyx-input-decorator",
handlers: {
onDisabledChange: "disabledChange",
onfocus: "receiveFocus",
onblur: "receiveBlur"
},
receiveFocus: function() {
this.addClass("onyx-focused");
},
receiveBlur: function() {
this.removeClass("onyx-focused");
},
disabledChange: function(a, b) {
this.addRemoveClass("onyx-disabled", b.originator.disabled);
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
var b = this.node.getBoundingClientRect();
b.top + b.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), b.left + b.width > window.innerWidth && (this.applyPosition({
"margin-left": -b.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// MenuDecorator.js

enyo.kind({
name: "onyx.MenuDecorator",
kind: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator enyo-unselectable",
handlers: {
onActivate: "activated",
onHide: "menuHidden"
},
activated: function(a, b) {
this.requestHideTooltip(), b.originator.active && (this.menuActive = !0, this.activator = b.originator, this.activator.addClass("active"), this.requestShowMenu());
},
requestShowMenu: function() {
this.waterfallDown("onRequestShowMenu", {
activator: this.activator
});
},
requestHideMenu: function() {
this.waterfallDown("onRequestHideMenu");
},
menuHidden: function() {
this.menuActive = !1, this.activator && (this.activator.setActive(!1), this.activator.removeClass("active"));
},
enter: function(a) {
this.menuActive || this.inherited(arguments);
},
leave: function(a, b) {
this.menuActive || this.inherited(arguments);
}
});

// Menu.js

enyo.kind({
name: "onyx.Menu",
kind: "onyx.Popup",
modal: !0,
defaultKind: "onyx.MenuItem",
classes: "onyx-menu",
showOnTop: !1,
handlers: {
onActivate: "itemActivated",
onRequestShowMenu: "requestMenuShow",
onRequestHideMenu: "requestHide"
},
itemActivated: function(a, b) {
return b.originator.setActive(!1), !0;
},
showingChanged: function() {
this.inherited(arguments), this.adjustPosition(!0);
},
requestMenuShow: function(a, b) {
if (this.floating) {
var c = b.activator.hasNode();
if (c) {
var d = this.activatorOffset = this.getPageOffset(c);
this.applyPosition({
top: d.top + (this.showOnTop ? 0 : d.height),
left: d.left,
width: d.width
});
}
}
return this.show(), !0;
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
getPageOffset: function(a) {
var b = a.getBoundingClientRect(), c = window.pageYOffset === undefined ? document.documentElement.scrollTop : window.pageYOffset, d = window.pageXOffset === undefined ? document.documentElement.scrollLeft : window.pageXOffset, e = b.height === undefined ? b.bottom - b.top : b.height, f = b.width === undefined ? b.right - b.left : b.width;
return {
top: b.top + c,
left: b.left + d,
height: e,
width: f
};
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
this.removeClass("onyx-menu-up"), this.floating ? enyo.noop : this.applyPosition({
left: "auto"
});
var b = this.node.getBoundingClientRect(), c = b.height === undefined ? b.bottom - b.top : b.height, d = window.innerHeight === undefined ? document.documentElement.clientHeight : window.innerHeight, e = window.innerWidth === undefined ? document.documentElement.clientWidth : window.innerWidth;
this.menuUp = b.top + c > d && d - b.bottom < b.top - c, this.addRemoveClass("onyx-menu-up", this.menuUp);
if (this.floating) {
var f = this.activatorOffset;
this.menuUp ? this.applyPosition({
top: f.top - c + (this.showOnTop ? f.height : 0),
bottom: "auto"
}) : b.top < f.top && f.top + (a ? f.height : 0) + c < d && this.applyPosition({
top: f.top + (this.showOnTop ? 0 : f.height),
bottom: "auto"
});
}
b.right > e && (this.floating ? this.applyPosition({
left: f.left - (b.left + b.width - e)
}) : this.applyPosition({
left: -(b.right - e)
}));
}
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition(!0);
},
requestHide: function() {
this.setShowing(!1);
}
});

// MenuItem.js

enyo.kind({
name: "onyx.MenuItem",
kind: "enyo.Button",
tag: "div",
classes: "onyx-menu-item",
events: {
onSelect: ""
},
tap: function(a) {
this.inherited(arguments), this.bubble("onRequestHideMenu"), this.doSelect({
selected: this,
content: this.content
});
}
});

// PickerDecorator.js

enyo.kind({
name: "onyx.PickerDecorator",
kind: "onyx.MenuDecorator",
classes: "onyx-picker-decorator",
defaultKind: "onyx.PickerButton",
handlers: {
onChange: "change"
},
change: function(a, b) {
this.waterfallDown("onChange", b);
}
});

// PickerButton.js

enyo.kind({
name: "onyx.PickerButton",
kind: "onyx.Button",
handlers: {
onChange: "change"
},
change: function(a, b) {
this.setContent(b.content);
}
});

// Picker.js

enyo.kind({
name: "onyx.Picker",
kind: "onyx.Menu",
classes: "onyx-picker enyo-unselectable",
published: {
selected: null,
maxHeight: "200px"
},
events: {
onChange: ""
},
components: [ {
name: "client",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy"
} ],
floating: !0,
showOnTop: !0,
scrollerName: "client",
create: function() {
this.inherited(arguments), this.maxHeightChanged();
},
getScroller: function() {
return this.$[this.scrollerName];
},
maxHeightChanged: function() {
this.getScroller().setMaxHeight(this.maxHeight);
},
showingChanged: function() {
this.getScroller().setShowing(this.showing), this.inherited(arguments), this.showing && this.selected && this.scrollToSelected();
},
scrollToSelected: function() {
this.getScroller().scrollToControl(this.selected, !this.menuUp);
},
itemActivated: function(a, b) {
return this.processActivatedItem(b.originator), this.inherited(arguments);
},
processActivatedItem: function(a) {
a.active && this.setSelected(a);
},
selectedChanged: function(a) {
a && a.removeClass("selected"), this.selected && (this.selected.addClass("selected"), this.doChange({
selected: this.selected,
content: this.selected.content
}));
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition(!1);
}
});

// FlyweightPicker.js

enyo.kind({
name: "onyx.FlyweightPicker",
kind: "onyx.Picker",
classes: "onyx-flyweight-picker",
published: {
count: 0
},
events: {
onSetupItem: "",
onSelect: ""
},
handlers: {
onSelect: "itemSelect"
},
components: [ {
name: "scroller",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy",
components: [ {
name: "client",
kind: "FlyweightRepeater",
ontap: "itemTap"
} ]
} ],
scrollerName: "scroller",
create: function() {
this.inherited(arguments), this.countChanged();
},
rendered: function() {
this.inherited(arguments), this.selectedChanged();
},
scrollToSelected: function() {
var a = this.$.client.fetchRowNode(this.selected);
this.getScroller().scrollToNode(a, !this.menuUp);
},
countChanged: function() {
this.$.client.count = this.count;
},
processActivatedItem: function(a) {
this.item = a;
},
selectedChanged: function(a) {
if (!this.item) return;
a !== undefined && (this.item.removeClass("selected"), this.$.client.renderRow(a)), this.item.addClass("selected"), this.$.client.renderRow(this.selected), this.item.removeClass("selected");
var b = this.$.client.fetchRowNode(this.selected);
this.doChange({
selected: this.selected,
content: b && b.textContent || this.item.content
});
},
itemTap: function(a, b) {
this.setSelected(b.rowIndex), this.doSelect({
selected: this.item,
content: this.item.content
});
},
itemSelect: function(a, b) {
if (b.originator != this) return !0;
}
});

// RadioButton.js

enyo.kind({
name: "onyx.RadioButton",
kind: "Button",
classes: "onyx-radiobutton"
});

// RadioGroup.js

enyo.kind({
name: "onyx.RadioGroup",
kind: "Group",
highlander: !0,
defaultKind: "onyx.RadioButton"
});

// ToggleButton.js

enyo.kind({
name: "onyx.ToggleButton",
classes: "onyx-toggle-button",
published: {
active: !1,
value: !1,
onContent: "On",
offContent: "Off",
disabled: !1
},
events: {
onChange: ""
},
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
components: [ {
name: "contentOn",
classes: "onyx-toggle-content on"
}, {
name: "contentOff",
classes: "onyx-toggle-content off"
}, {
classes: "onyx-toggle-button-knob"
} ],
create: function() {
this.inherited(arguments), this.value = Boolean(this.value || this.active), this.onContentChanged(), this.offContentChanged(), this.disabledChanged();
},
rendered: function() {
this.inherited(arguments), this.valueChanged();
},
valueChanged: function() {
this.addRemoveClass("off", !this.value), this.$.contentOn.setShowing(this.value), this.$.contentOff.setShowing(!this.value), this.setActive(this.value);
},
activeChanged: function() {
this.setValue(this.active), this.bubble("onActivate");
},
onContentChanged: function() {
this.$.contentOn.setContent(this.onContent || ""), this.$.contentOn.addRemoveClass("empty", !this.onContent);
},
offContentChanged: function() {
this.$.contentOff.setContent(this.offContent || ""), this.$.contentOff.addRemoveClass("empty", !this.onContent);
},
disabledChanged: function() {
this.addRemoveClass("disabled", this.disabled);
},
updateValue: function(a) {
this.disabled || (this.setValue(a), this.doChange({
value: this.value
}));
},
tap: function() {
this.updateValue(!this.value);
},
dragstart: function(a, b) {
if (b.horizontal) return b.preventDefault(), this.dragging = !0, this.dragged = !1, !0;
},
drag: function(a, b) {
if (this.dragging) {
var c = b.dx;
return Math.abs(c) > 10 && (this.updateValue(c > 0), this.dragged = !0), !0;
}
},
dragfinish: function(a, b) {
this.dragging = !1, this.dragged && b.preventTap();
}
});

// Toolbar.js

enyo.kind({
name: "onyx.Toolbar",
classes: "onyx onyx-toolbar onyx-toolbar-inline",
handlers: {
onHide: "render"
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
var b = this.node.getBoundingClientRect();
b.top + b.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), b.left + b.width > window.innerWidth && (this.applyPosition({
"margin-left": -b.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// ProgressBar.js

enyo.kind({
name: "onyx.ProgressBar",
classes: "onyx-progress-bar",
published: {
progress: 0,
min: 0,
max: 100,
barClasses: "",
showStripes: !0,
animateStripes: !0
},
events: {
onAnimateProgressFinish: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar"
} ],
create: function() {
this.inherited(arguments), this.progressChanged(), this.barClassesChanged(), this.showStripesChanged(), this.animateStripesChanged();
},
barClassesChanged: function(a) {
this.$.bar.removeClass(a), this.$.bar.addClass(this.barClasses);
},
showStripesChanged: function() {
this.$.bar.addRemoveClass("striped", this.showStripes);
},
animateStripesChanged: function() {
this.$.bar.addRemoveClass("animated", this.animateStripes);
},
progressChanged: function() {
this.progress = this.clampValue(this.min, this.max, this.progress);
var a = this.calcPercent(this.progress);
this.updateBarPosition(a);
},
clampValue: function(a, b, c) {
return Math.max(a, Math.min(c, b));
},
calcRatio: function(a) {
return (a - this.min) / (this.max - this.min);
},
calcPercent: function(a) {
return this.calcRatio(a) * 100;
},
updateBarPosition: function(a) {
this.$.bar.applyStyle("width", a + "%");
},
animateProgressTo: function(a) {
this.$.progressAnimator.play({
startValue: this.progress,
endValue: a,
node: this.hasNode()
});
},
progressAnimatorStep: function(a) {
return this.setProgress(a.value), !0;
},
progressAnimatorComplete: function(a) {
return this.doAnimateProgressFinish(a), !0;
}
});

// ProgressButton.js

enyo.kind({
name: "onyx.ProgressButton",
kind: "onyx.ProgressBar",
classes: "onyx-progress-button",
events: {
onCancel: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar onyx-progress-button-bar"
}, {
name: "client",
classes: "onyx-progress-button-client"
}, {
kind: "onyx.Icon",
src: "$lib/onyx/images/progress-button-cancel.png",
classes: "onyx-progress-button-icon",
ontap: "cancelTap"
} ],
cancelTap: function() {
this.doCancel();
}
});

// Scrim.js

enyo.kind({
name: "onyx.Scrim",
showing: !1,
classes: "onyx-scrim enyo-fit",
floating: !1,
create: function() {
this.inherited(arguments), this.zStack = [], this.floating && this.setParent(enyo.floatingLayer);
},
showingChanged: function() {
this.floating && this.showing && !this.hasNode() && this.render(), this.inherited(arguments);
},
addZIndex: function(a) {
enyo.indexOf(a, this.zStack) < 0 && this.zStack.push(a);
},
removeZIndex: function(a) {
enyo.remove(a, this.zStack);
},
showAtZIndex: function(a) {
this.addZIndex(a), a !== undefined && this.setZIndex(a), this.show();
},
hideAtZIndex: function(a) {
this.removeZIndex(a);
if (!this.zStack.length) this.hide(); else {
var b = this.zStack[this.zStack.length - 1];
this.setZIndex(b);
}
},
setZIndex: function(a) {
this.zIndex = a, this.applyStyle("z-index", a);
},
make: function() {
return this;
}
}), enyo.kind({
name: "onyx.scrimSingleton",
kind: null,
constructor: function(a, b) {
this.instanceName = a, enyo.setObject(this.instanceName, this), this.props = b || {};
},
make: function() {
var a = new onyx.Scrim(this.props);
return enyo.setObject(this.instanceName, a), a;
},
showAtZIndex: function(a) {
var b = this.make();
b.showAtZIndex(a);
},
hideAtZIndex: enyo.nop,
show: function() {
var a = this.make();
a.show();
}
}), new onyx.scrimSingleton("onyx.scrim", {
floating: !0,
classes: "onyx-scrim-translucent"
}), new onyx.scrimSingleton("onyx.scrimTransparent", {
floating: !0,
classes: "onyx-scrim-transparent"
});

// Slider.js

enyo.kind({
name: "onyx.Slider",
kind: "onyx.ProgressBar",
classes: "onyx-slider",
published: {
value: 0,
lockBar: !0,
tappable: !0
},
events: {
onChange: "",
onChanging: "",
onAnimateFinish: ""
},
showStripes: !1,
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
moreComponents: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorComplete"
}, {
classes: "onyx-slider-taparea"
}, {
name: "knob",
classes: "onyx-slider-knob"
} ],
create: function() {
this.inherited(arguments), this.createComponents(this.moreComponents), this.valueChanged();
},
valueChanged: function() {
this.value = this.clampValue(this.min, this.max, this.value);
var a = this.calcPercent(this.value);
this.updateKnobPosition(a), this.lockBar && this.setProgress(this.value);
},
updateKnobPosition: function(a) {
this.$.knob.applyStyle("left", a + "%");
},
calcKnobPosition: function(a) {
var b = a.clientX - this.hasNode().getBoundingClientRect().left;
return b / this.getBounds().width * (this.max - this.min) + this.min;
},
dragstart: function(a, b) {
if (b.horizontal) return b.preventDefault(), this.dragging = !0, !0;
},
drag: function(a, b) {
if (this.dragging) {
var c = this.calcKnobPosition(b);
return this.setValue(c), this.doChanging({
value: this.value
}), !0;
}
},
dragfinish: function(a, b) {
return this.dragging = !1, b.preventTap(), this.doChange({
value: this.value
}), !0;
},
tap: function(a, b) {
if (this.tappable) {
var c = this.calcKnobPosition(b);
return this.tapped = !0, this.animateTo(c), !0;
}
},
animateTo: function(a) {
this.$.animator.play({
startValue: this.value,
endValue: a,
node: this.hasNode()
});
},
animatorStep: function(a) {
return this.setValue(a.value), !0;
},
animatorComplete: function(a) {
return this.tapped && (this.tapped = !1, this.doChange({
value: this.value
})), this.doAnimateFinish(a), !0;
}
});

// Item.js

enyo.kind({
name: "onyx.Item",
classes: "onyx-item",
tapHighlight: !0,
handlers: {
onhold: "hold",
onrelease: "release"
},
hold: function(a, b) {
this.tapHighlight && onyx.Item.addFlyweightClass(this.controlParent || this, "onyx-highlight", b);
},
release: function(a, b) {
this.tapHighlight && onyx.Item.removeFlyweightClass(this.controlParent || this, "onyx-highlight", b);
},
statics: {
addFlyweightClass: function(a, b, c, d) {
var e = c.flyweight;
if (e) {
var f = d != undefined ? d : c.index;
e.performOnRow(f, function() {
a.hasClass(b) ? a.setClassAttribute(a.getClassAttribute()) : a.addClass(b);
}), a.removeClass(b);
}
},
removeFlyweightClass: function(a, b, c, d) {
var e = c.flyweight;
if (e) {
var f = d != undefined ? d : c.index;
e.performOnRow(f, function() {
a.hasClass(b) ? a.removeClass(b) : a.setClassAttribute(a.getClassAttribute());
});
}
}
}
});

// Spinner.js

enyo.kind({
name: "onyx.Spinner",
classes: "onyx-spinner",
stop: function() {
this.setShowing(!1);
},
start: function() {
this.setShowing(!0);
},
toggle: function() {
this.setShowing(!this.getShowing());
}
});

// MoreToolbar.js

enyo.kind({
name: "onyx.MoreToolbar",
classes: "onyx-toolbar onyx-more-toolbar",
menuClass: "",
movedClass: "",
layoutKind: "FittableColumnsLayout",
noStretch: !0,
handlers: {
onHide: "reflow"
},
tools: [ {
name: "client",
fit: !0,
classes: "onyx-toolbar-inline"
}, {
name: "nard",
kind: "onyx.MenuDecorator",
showing: !1,
onActivate: "activated",
components: [ {
kind: "onyx.IconButton",
classes: "onyx-more-button"
}, {
name: "menu",
kind: "onyx.Menu",
classes: "onyx-more-menu",
prepend: !0
} ]
} ],
initComponents: function() {
this.menuClass && this.menuClass.length > 0 && !this.$.menu.hasClass(this.menuClass) && this.$.menu.addClass(this.menuClass), this.createChrome(this.tools), this.inherited(arguments);
},
reflow: function() {
this.inherited(arguments), this.isContentOverflowing() ? (this.$.nard.show(), this.popItem() && this.reflow()) : this.tryPushItem() ? this.reflow() : this.$.menu.children.length || (this.$.nard.hide(), this.$.menu.hide());
},
activated: function(a, b) {
this.addRemoveClass("active", b.originator.active);
},
popItem: function() {
var a = this.findCollapsibleItem();
if (a) {
this.movedClass && this.movedClass.length > 0 && !a.hasClass(this.movedClass) && a.addClass(this.movedClass), this.$.menu.addChild(a);
var b = this.$.menu.hasNode();
return b && a.hasNode() && a.insertNodeInParent(b), !0;
}
},
pushItem: function() {
var a = this.$.menu.children, b = a[0];
if (b) {
this.movedClass && this.movedClass.length > 0 && b.hasClass(this.movedClass) && b.removeClass(this.movedClass), this.$.client.addChild(b);
var c = this.$.client.hasNode();
if (c && b.hasNode()) {
var d = undefined, e;
for (var f = 0; f < this.$.client.children.length; f++) {
var g = this.$.client.children[f];
if (g.toolbarIndex != undefined && g.toolbarIndex != f) {
d = g, e = f;
break;
}
}
if (d && d.hasNode()) {
b.insertNodeInParent(c, d.node);
var h = this.$.client.children.pop();
this.$.client.children.splice(e, 0, h);
} else b.appendNodeToParent(c);
}
return !0;
}
},
tryPushItem: function() {
if (this.pushItem()) {
if (!this.isContentOverflowing()) return !0;
this.popItem();
}
},
isContentOverflowing: function() {
if (this.$.client.hasNode()) {
var a = this.$.client.children, b = a[a.length - 1].hasNode();
if (b) return b.offsetLeft + b.offsetWidth > this.$.client.node.clientWidth;
}
},
findCollapsibleItem: function() {
var a = this.$.client.children;
for (var b = a.length - 1; c = a[b]; b--) {
if (!c.unmoveable) return c;
c.toolbarIndex == undefined && (c.toolbarIndex = b);
}
}
});

// foundation.js

XT = {
MONEY_SCALE: 2,
QTY_SCALE: 6,
QTY_PER_SCALE: 7,
COST_SCALE: 6,
SALES_PRICE_SCALE: 4,
PURCHASE_PRICE_SCALE: 6,
EXTENDED_PRICE_SCALE: 4,
UNIT_RATIO_SCALE: 8,
PERCENT_SCALE: 4,
WEIGHT_SCALE: 2
}, XM = {}, _.extend(XT, {
K: function() {},
_date: new Date,
toReadableTimestamp: function(a) {
var b = XT._date || (XT._date = new Date);
return b.setTime(a), b.toLocaleTimeString();
},
getObjectByName: function(a) {
if (!a.split) return null;
var b = a.split("."), c, d, e = 0;
for (; e < b.length; ++e) {
d = b[e], c = c ? c[d] : window[d];
if (c === null || c === undefined) return null;
}
return c;
},
A: function(a) {
if (a === null || a === undefined) return [];
if (a.slice instanceof Function) return typeof a == "string" ? [ a ] : a.slice();
var b = [];
if (a.length) {
var c = a.length;
while (--c >= 0) b[c] = a[c];
return b;
}
return _.values(a);
}
}), XT.$A = XT.A, _.extend(XT, {
history: [],
addToHistory: function(a, b) {
for (var c = 0; c < this.history.length; c++) this.history[c].modelType === b.recordType && this.history[c].modelId === b.get("id") && (this.history.splice(c, 1), c--);
this.history.unshift({
modelType: b.recordType,
modelId: b.get("id"),
modelName: b.getValue(b.nameAttribute),
module: a
});
},
getHistory: function() {
return this.history;
}
}), XV = {};

// error.js

(function() {
"use strict", XT.Error = function() {}, XT.Error.prototype = {
code: null,
messageKey: null,
params: {},
message: function() {
var a = (this.messageKey || "").loc(), b, c;
for (b in this.params) this.params.hasOwnProperty(b) && (c = (this.params[b] || "_unknown").loc(), a = a.replace("{" + b + "}", c));
return a;
}
}, _.extend(XT.Error, {
clone: function(a, b) {
var c;
b = b || {};
if (a) {
c = _.find(XT.errors, function(b) {
return b.code === a;
});
if (!c) return !1;
}
return c = _.clone(c), c.params && (c.params = _.clone(c.params)), _.extend(c, b), XT.Error.create(c);
},
create: function(a) {
var b;
return a = a || {}, b = new XT.Error, _.extend(b, a), b;
}
});
var a = [ {
code: "xt1001",
params: {
error: null
},
messageKey: "_datasourceError"
}, {
code: "xt1002",
params: {
attr: null
},
messageKey: "_attributeNotInSchema"
}, {
code: "xt1003",
params: {
attr: null,
type: null
},
messageKey: "_attributeTypeMismatch"
}, {
code: "xt1004",
params: {
attr: null
},
messageKey: "_attributeIsRequired"
}, {
code: "xt1005",
messageKey: "_attributeReadOnly"
}, {
code: "xt1006",
params: {
attr: null,
length: null
},
messageKey: "_lengthInvalid"
}, {
code: "xt1007",
messageKey: "_recordNotFound"
}, {
code: "xt1008",
params: {
attr: null,
value: null
},
messageKey: "_valueExists"
}, {
code: "xt1009",
params: {
status: null
},
messageKey: "_recordStatusNotEditable"
}, {
code: "xt1010",
messageKey: "_canNotUpdate"
}, {
code: "xt2001",
messageKey: "_assignedToRequiredAssigned"
}, {
code: "xt2002",
messageKey: "_characteristicContextRequired"
}, {
code: "xt2003",
messageKey: "_duplicateValues"
}, {
code: "xt2004",
messageKey: "_nameRequired"
}, {
code: "xt2005",
messageKey: "_productCategoryRequiredOnSold"
}, {
code: "xt2006",
messageKey: "_recursiveParentDisallowed"
} ];
XT.errors = [], _.each(a, function(a) {
var b = XT.Error.create(a);
XT.errors.push(b);
});
})();

// log.js

XT.log = function() {
var a = XT.$A(arguments);
console.log.apply ? console.log.apply(console, a) : console.log(a.join(" "));
};

// datasource.js

(function() {
"use strict", XT.dataSource = {
datasourceUrl: document.location.hostname,
datasourcePort: 443,
isConnected: !1,
fetch: function(a) {
a = a ? _.clone(a) : {};
var b = this, c = {}, d = a.query.parameters, e, f = function(c) {
var d, e = {}, f;
if (c.isError) {
a && a.error && (e.error = c.reason.data.code, f = XT.Error.clone("xt1001", {
params: e
}), a.error.call(b, f));
return;
}
d = JSON.parse(c.data.rows[0].fetch), a && a.success && a.success.call(b, d);
}, g = function(b) {
var c = a.query.recordType, d = c ? XT.getObjectByName(c) : null, e = d ? d.prototype.relations : [], f = _.find(e, function(a) {
return a.key === b.attribute;
}), g;
b.value instanceof Date ? b.value = b.value.toJSON() : b.value instanceof XM.Model && (b.value = b.value.id), f && f.type === Backbone.HasOne && f.includeInJSON === !0 && (d = XT.getObjectByName(f.relatedModel), g = d.prototype.idAttribute, b.attribute = b.attribute + "." + g);
};
for (e in d) g(d[e]);
return c.requestType = "fetch", c.query = a.query, XT.Request.handle("function/fetch").notify(f).send(c);
},
retrieveRecord: function(a, b, c) {
var d = this, e = {}, f = function(a) {
var b, e = {}, f;
if (a.isError) {
c && c.error && (e.error = a.reason.data.code, f = XT.Error.clone("xt1001", {
params: e
}), c.error.call(d, f));
return;
}
b = JSON.parse(a.data.rows[0].retrieve_record);
if (_.isEmpty(b)) {
c && c.error && (f = XT.Error.clone("xt1007"), c.error.call(d, f));
return;
}
c && c.success && c.success.call(d, b);
};
return e.requestType = "retrieveRecord", e.recordType = a, e.id = b, XT.Request.handle("function/retrieveRecord").notify(f).send(e);
},
commitRecord: function(a, b) {
var c = this, d = {}, e = function(a) {
var d, e = {}, f;
if (a.isError) {
b && b.error && (e.error = a.reason.data.code, f = XT.Error.clone("xt1001", {
params: e
}), b.error.call(c, f));
return;
}
d = JSON.parse(a.data.rows[0].commit_record), b && b.success && b.success.call(c, d);
};
return d.requestType = "commitRecord", d.recordType = a.recordType, d.requery = b.requery, d.dataHash = a.changeSet(), XT.Request.handle("function/commitRecord").notify(e).send(d);
},
dispatch: function(a, b, c, d) {
var e = this, f = {
requestType: "dispatch",
className: a,
functionName: b,
parameters: c
}, g = function(a) {
var b, c = {}, f;
if (a.isError) {
d && d.error && (c.error = a.reason.data.code, f = XT.Error.clone("xt1001", {
params: c
}), d.error.call(e, f));
return;
}
b = JSON.parse(a.data.rows[0].dispatch), d && d.success && d.success.call(e, b);
};
return XT.Request.handle("function/dispatch").notify(g).send(f);
},
connect: function(a) {
if (this.isConnected) {
a && a instanceof Function && a();
return;
}
XT.log("Attempting to connect to the datasource");
var b = this.datasourceUrl, c = this.datasourcePort, d = "https://%@/clientsock".f(b), e = this, f = this.sockDidConnect, g = this.sockDidError;
this._sock = io.connect(d, {
port: c,
secure: !0
}), this._sock.on("connect", function() {}), this._sock.on("ok", function() {
f.call(e, a);
}), this._sock.on("error", function(b) {
g.call(e, b, a);
}), this._sock.on("debug", function(a) {
XT.log("SERVER DEBUG => ", a);
});
},
sockDidError: function(a, b) {
console.warn(a), b && b instanceof Function && b(a);
},
sockDidConnect: function(a) {
XT.log("Successfully connected to the datasource"), this.isConnected = !0, XT.session || (XT.session = Object.create(XT.Session), setTimeout(_.bind(XT.session.start, XT.session), 0)), a && a instanceof Function && a();
},
reset: function() {
if (!this.isConnected) return;
var a = this._sock;
a && (a.disconnect(), this.isConnected = !1), this.connect();
}
};
})();

// date.js

(function() {
"use strict", XT.date = {
convert: function(a) {
return a.constructor === Date ? a : a.constructor === Array ? new Date(a[0], a[1], a[2]) : a.constructor === Number ? new Date(a) : a.constructor === String ? new Date(a) : typeof a == "object" ? new Date(a.year, a.month, a.date) : NaN;
},
compare: function(a, b) {
return isFinite(a = this.convert(a).valueOf()) && isFinite(b = this.convert(b).valueOf()) ? (a > b) - (a < b) : NaN;
},
compareDate: function(a, b) {
if (!a || !b) return NaN;
var c = new Date(a.valueOf()), d = new Date(b.valueOf());
return c.setHours(0, 0, 0, 0), d.setHours(0, 0, 0, 0), this.compare(c, d);
},
inRange: function(a, b, c) {
return isFinite(a = this.convert(a).valueOf()) && isFinite(b = this.convert(b).valueOf()) && isFinite(c = this.convert(c).valueOf()) ? b <= a && a <= c : NaN;
}
};
})();

// math.js

(function() {
"use strict", XT.math = {
add: function(a, b, c) {
c = c || 0;
var d = Math.pow(10, c);
return Math.round(a * d + b * d) / d;
},
round: function(a, b) {
b = b || 0;
var c = Math.pow(10, b);
return Math.round(a * c) / c;
},
subtract: function(a, b, c) {
c = c || 0;
var d = Math.pow(10, c);
return Math.round(a * d - b * d) / d;
}
};
})();

// request.js

(function() {
"use strict", XT.Request = {
send: function(a) {
var b = XT.session.details, c = XT.dataSource._sock, d = this._notify, e = this._handle, f = {
payload: a
}, g;
return !!d && d instanceof Function ? g = function(a) {
d(_.extend(Object.create(XT.Response), a));
} : g = XT.K, f = _.extend(f, b), XT.log("Socket sending: %@".replace("%@", e), f), c.json.emit(e, f, g), this;
},
handle: function(a) {
return this._handle = a, this;
},
notify: function(a) {
var b = Array.prototype.slice.call(arguments).slice(1);
return this._notify = function(c) {
b.unshift(c), a.apply(null, b);
}, this;
}
};
})();

// response.js

(function() {
"use strict", XT.Response = {};
})();

// session.js

(function() {
"use strict", XT.Session = {
details: {},
availableSessions: [],
privileges: {},
settings: {},
schema: {},
SETTINGS: 1,
PRIVILEGES: 2,
SCHEMA: 4,
LOCALE: 8,
ALL: 15,
loadSessionObjects: function(a, b) {
var c = this, d, e, f, g, h, i;
return b && b.success && b.success instanceof Function ? i = b.success : i = XT.K, a === undefined && (a = this.ALL), a & this.PRIVILEGES && (d = b ? _.clone(b) : {}, d.success = function(a) {
e = new Backbone.Model, e.get = function(a) {
return _.isBoolean(a) ? a : Backbone.Model.prototype.get.call(this, a);
}, a.forEach(function(a) {
e.set(a.privilege, a.isGranted);
}), c.setPrivileges(e), i();
}, XT.dataSource.dispatch("XT.Session", "privileges", null, d)), a & this.SETTINGS && (f = b ? _.clone(b) : {}, f.success = function(a) {
g = new Backbone.Model, a.forEach(function(a) {
g.set(a.setting, a.value);
}), c.setSettings(g), i();
}, XT.dataSource.dispatch("XT.Session", "settings", null, f)), a & this.SCHEMA && (h = b ? _.clone(b) : {}, h.success = function(a) {
var b = new Backbone.Model(a), d, e, f, g;
c.setSchema(b);
for (d in b.attributes) if (b.attributes.hasOwnProperty(d)) {
f = b.attributes[d].relations || [];
if (f.length) {
e = XM.Model.getObjectByName("XM." + d);
if (e) {
e.prototype.relations = [];
for (g = 0; g < f.length; g++) {
if (f[g].type === "Backbone.HasOne") f[g].type = Backbone.HasOne; else {
if (f[g].type !== "Backbone.HasMany") continue;
f[g].type = Backbone.HasMany;
}
e.prototype.relations.push(f[g]);
}
}
}
}
i();
}, XT.dataSource.dispatch("XT.Session", "schema", "xm", h)), a & this.LOCALE && (XT.lang ? XT.locale.setLanguage(XT.lang) : XT.log("XT.session.loadSessionObjects(): could not find a valid language to load"), i && i instanceof Function && setTimeout(i, 1)), !0;
},
selectSession: function(a, b) {
var c = this, d = function(a) {
c._didAcquireSession.call(c, a, b);
};
XT.Request.handle("session/select").notify(d).send(a);
},
getAvailableSessions: function() {
return this.availableSessions;
},
getDetails: function() {
return this.details;
},
getSchema: function() {
return this.schema;
},
getSettings: function() {
return this.settings;
},
getPrivileges: function() {
return this.privileges;
},
setAvailableSessions: function(a) {
return this.availableSessions = a, this;
},
setDetails: function(a) {
return this.details = a, this;
},
setSchema: function(a) {
return this.schema = a, this;
},
setSettings: function(a) {
return this.settings = a, this;
},
setPrivileges: function(a) {
return this.privileges = a, this;
},
validateSession: function(a, b) {
var c = this, d = function(a) {
c._didValidateSession.call(c, a, b);
};
this.details = a, XT.Request.handle("session").notify(d).send(a);
},
_didValidateSession: function(a, b) {
var c = document.location.hostname;
if (a.code !== 1) return document.location = "https://%@/login".f(c);
this.setDetails(a.data), XT.getStartupManager().start(), b && b instanceof Function && b(a);
},
start: function() {
var a = enyo.getCookie("xtsessioncookie");
try {
a = JSON.parse(a), this.validateSession(a, function() {
XT.app.show();
});
} catch (b) {
XT.Session.logout();
}
},
logout: function() {
var a = document.location.hostname;
XT.Request.handle("function/logout").notify(function() {
document.location = "https://%@/login".f(a);
}).send();
},
DB_BOOLEAN: "B",
DB_STRING: "S",
DB_COMPOUND: "C",
DB_DATE: "D",
DB_NUMBER: "N",
DB_ARRAY: "A",
DB_BYTEA: "U",
DB_UNKNOWN: "X"
};
})();

// locale.js

(function() {
"use strict", XT.locale = {
hasStrings: !1,
strings: {},
lang: "",
getHasStrings: function() {
return this.hasStrings;
},
getLang: function() {
return this.lang;
},
getStrings: function() {
return this.strings;
},
setHasStrings: function(a) {
return this.hasStrings = a, this;
},
setLang: function(a) {
return this.lang = a, this;
},
setStrings: function(a) {
return this.strings = a, this;
},
setLanguage: function(a) {
if (this.getHasStrings()) return console.log("attempt to set a new language");
this.setLang(a.lang || "en"), this.setStrings(a.strings || {});
},
stringsChanged: function() {
var a = this.getStrings();
a && a instanceof Object && Object.keys(a).length > 0 ? this.setHasStrings(!0) : this.error("something is amiss");
},
loc: function(a) {
var b = this.getStrings();
return b[a] || a.toString();
}
}, XT.stringsFor = function(a, b) {
XT.lang ? console.log("XT.stringsFor(): request to write over current language") : XT.lang = {
lang: a,
strings: b
};
};
})();

// strings.js

XT.stringsFor("en_US", {
_abbreviation: "Abbreviation",
_abbreviationLong: "Abbreviation Long",
_abbreviationShort: "Abbreviation Short",
_account: "Account",
_accountNumber: "Account Number",
_accountNumberGeneration: "Account Number Generation",
_accountType: "Account Type",
_accounts: "Accounts",
_active: "Active",
_actual: "Actual",
_actualClose: "Actual Close",
_actualExpenses: "Actual Expenses",
_actualExpensesTotal: "Total Expenses Actual",
_actualHours: "Actual Hours",
_actualHoursTotal: "Total Hours Actual",
_additional: "Additional",
_address: "Address",
_address1: "Address1",
_address2: "Address2",
_addressCharacteristic: "Address Characteristic",
_addressComment: "Address Comment",
_alarms: "Alarms",
_altEmphasisColor: "Alt Emphasis Color",
_alternate: "Alternate",
_alternateAddresses: "Alternate Addresses",
_amount: "Amount",
_array: "Array",
_assignDate: "Assign Date",
_assigned: "Assigned",
_assignedTo: "Assigned To",
_assignedEndDate: "Assigned End Date",
_assignedStartDate: "Assigned Start Date",
_automatic: "Automatic",
_automaticAllowOverride: "Automatic Allow Override",
_back: "Back",
_balance: "Balance",
_balanceExpensesTotal: "Balance Expenses Total",
_balanceHoursTotal: "Balance Hours Total",
_boolean: "Boolean",
_budgetedExpenses: "Budgeted Expenses",
_budgetedExpensesTotal: "Total Expenses Budgeted",
_budgetedHours: "Budgeted Hours",
_budgetedHoursTotal: "Total Hours Budgeted",
_canCreateUsers: "Can Create Users",
_cancel: "Cancel",
_category: "Category",
_characteristic: "Characteristic",
_characteristicType: "Characteristic Type",
_characteristicOption: "Characteristic Option",
_characteristics: "Characteristics",
_child: "Child",
_city: "City",
_classCode: "Class Code",
_closeDate: "Close Date",
_closed: "Closed",
_code: "Code",
_commentType: "Comment Type",
_comments: "Comments",
_completed: "Completed",
_completedEndDate: "Completed End Date",
_completedStartDate: "Completed Start Date",
_commentsEditable: "Comments Editable",
_company: "Company",
_completeDate: "Complete Date",
_concept: "Concept",
_confirmed: "Confirmed",
_contact: "Contact",
_contactRelations: "Contacts",
_contacts: "Contacts",
_country: "Country",
_created: "Created",
_createdBy: "Created By",
_crm: "CRM",
_crmSetup: "CRM Setup",
_currency: "Currency",
_currencyAbbreviation: "Currency Abbreviation",
_currencyName: "Currency Name",
_currencyNumber: "Currency Number",
_currencySymbol: "Currency Symbol",
_dashboard: "Dashboard",
_data: "Data",
_dataState: "Data State",
_date: "Date",
_deactivate: "Deactivate",
_delete: "Delete",
_description: "Description",
_description1: "Description1",
_description2: "Description2",
_disableExport: "Disable Export",
_document: "Document",
_documentDate: "Document Date",
_documentNumber: "Document #",
_documentType: "Document Type",
_dueDate: "Due Date",
_dueDays: "Due Days",
_dueEndDate: "Due End Date",
_dueStartDate: "Due Start Date",
_duplicate: "Duplicate",
_effective: "Effective",
_email: "Email",
_emphasisColor: "Emphasis Color",
_enabled: "Enabled?",
_end: "End",
_endBalance: "End Balance",
_endDate: "End Date",
_ending: "Ending",
_endingLabel: "Ending Label",
_errorColor: "Error Color",
_eventRecipient: "Event Recipient",
_expiredColor: "Expired Color",
_expires: "Expires",
_extended: "Extended",
_extendedDescription: "Extended Description",
_extendedPriceScale: "Extended Price Scale",
_externalReference: "External Reference",
_fax: "Fax",
_feedback: "Feedback",
_file: "File",
_files: "Files",
_filter: "Filter",
_firstName: "First Name",
_for: "For",
_fractional: "Fractional",
_frequency: "Frequency",
_futureColor: "Future Color",
_grantedPrivileges: "Granted Privileges",
_grantedUserAccountRoles: "Granted User Account Roles",
_groupSequence: "Group Sequence",
_groups: "Groups",
_history: "History",
_home: "Home",
_honorific: "Honorific",
_hours: "Hours",
_hrs: "hrs.",
_image: "Image",
_images: "Images",
_incident: "Incident",
_incidentRelations: "Incidents",
_incidents: "Incidents",
_incidentStatus: "Status",
_incidentNumberGeneration: "Incident Number Generation",
_incidentsPublicByDefault: "Incidents public by default",
_incidentsShowPublicCheckbox: "Incidents show public checkbox",
_individual: "Individual",
_initials: "Initials",
_inProcess: "In Process",
_inventoryUnit: "Inventory Unit",
_isActive: "Active",
_isAddresses: "Addresses",
_isBase: "Base",
_isContacts: "Contacts",
_isDefault: "Default",
_isDeleted: "Deleted",
_isEvent: "Event",
_isFractional: "Fractional",
_isIncidents: "Incidents",
_isItemWeight: "Item Weight",
_isItems: "Items",
_isMessage: "Message",
_isOpen: "Open",
_isOpportunities: "Opportunities",
_isPosted: "Posted",
_isPrinted: "Printed",
_isPublic: "Public",
_isSold: "Sold",
_item: "Item",
_itemConversion: "Item Conversion",
_itemNumber: "Item Number",
_itemUnitConversion: "Item Unit Conversion",
_itemUnitType: "Item Unit Type",
_items: "Items",
_jobTitle: "Job Title",
_language: "Language",
_lastName: "Last Name",
_line1: "Line1",
_line2: "Line2",
_line3: "Line3",
_lineNumber: "Line Number",
_lines: "Lines",
_listPrice: "List Price",
_locale: "Locale",
_logout: "Logout",
_mainAddress: "Main Address",
_manual: "Manual",
_mask: "Mask",
_maximum: "Maximum",
_messageRecipient: "Message Recipient",
_middleName: "Middle Name",
_module: "Module",
_monthExpire: "Month Expire",
_multiple: "Multiple",
_name: "Name",
_neither: "Neither",
_new: "New",
_nextNumber: "Next #",
_nextCheckNumber: "Next Check Number",
_notes: "Notes",
_number: "Number",
_object: "Object",
_offset: "Offset",
_ok: "Ok",
_other: "Other",
_openBalance: "Open Balance",
_openDate: "Open Date",
_opportunities: "Opportunities",
_opportunity: "Opportunity",
_opportunityChangeLog: "Post Opportunity changes to Change Log",
_opportunityRelations: "Opportunities",
_opportunitySource: "Source",
_opportunityStage: "Stage",
_opportunityType: "Type",
_open: "Open",
_options: "Options",
_order: "Order",
_orderDate: "Order Date",
_orderNumber: "Order Number",
_ordered: "Ordered",
_owner: "Owner",
_overview: "Overview",
_paid: "Paid",
_parent: "Parent",
_password: "Password",
_path: "Path",
_pending: "Pending",
_percent: "Percent",
_period: "Period",
_phone: "Phone",
_postalCode: "Postal Code",
_price: "Price",
_priceUnit: "Price Unit",
_priceUnitRatio: "Price Unit Ratio",
_primaryContact: "Primary Contact",
_primaryEmail: "Primary Email",
_printed: "Printed",
_priority: "Priority",
_privilege: "Privilege",
_privileges: "Privileges",
_probability: "Probability",
_productCategory: "Product Category",
_profitCenter: "Profit Center",
_project: "Project",
_projectAssignedTo: "Project Assigned To",
_projectOwner: "Project Owner",
_projectRelations: "Projects",
_projectStatus: "Project Status",
_projectTask: "Project Task",
_projectTaskStatus: "Project Task Status",
_projects: "Projects",
_properName: "Proper Name",
_propername: "Propername",
_purchaseOrderNumber: "Purchase Order",
_purpose: "Purpose",
_resolved: "Resolved",
_qualifier: "Qualifier",
_quantity: "Quantity",
_recurrences: "Recurrences",
_recurring: "Recurring",
_reference: "Reference",
_relatedTo: "Related To",
_resolution: "Resolution",
_save: "Save",
_schedule: "Schedule",
_search: "Search",
_secondaryContact: "Secondary Contact",
_sense: "Sense",
_series: "Series",
_setup: "Setup",
_severity: "Severity",
_showCompleted: "Show Completed",
_showCompletedOnly: "Show Completed Only",
_showInactive: "Show Inactive",
_source: "Source",
_sourceType: "Source Type",
_start: "Start",
_startDate: "Start Date",
_startEndDate: "Start End Date",
_startStartDate: "Start Start Date",
_state: "State",
_states: "States",
_status: "Status",
_street: "Street",
_string: "String",
_suffix: "Suffix",
_summary: "Summary",
_symbol: "Symbol",
_target: "Target",
_targetClose: "Target Close",
_targetType: "Target Type",
_tasks: "Tasks",
_taxAuthority: "Tax Authority",
_text: "Text",
_time: "Time",
_toDo: "To Do",
_toDoRelations: "To Dos",
_toDoStatus: "To Do Status",
_toDos: "To Dos",
_total: "Total",
_totals: "Totals",
_toUnit: "To Unit",
_trigger: "Trigger",
_type: "Type",
_unit: "Unit",
_unitType: "Unit Type",
_unknown: "(unknown)",
_updated: "Updated",
_updatedBy: "Updated By",
_url: "Url",
_urls: "Urls",
_useDescription: "Use Description",
_userAccount: "User Account",
_userAccounts: "User Accounts",
_userAccountRole: "User Account Role",
_userAccountRoles: "User Account Roles",
_username: "Username",
_validator: "Validator",
_value: "Value",
_warningColor: "Warning Color",
_webAddress: "Web Address",
_xtuplePostbooks: "PostBooks",
_assignedToRequiredAssigned: "Assigned to is required when status is 'Assigned'",
_attributeIsRequired: "'{attr}' is required.",
_attributeTypeMismatch: "The value of '{attr}' must be type: {type}.",
_attributeNotInSchema: "'{attr}' does not exist in the schema.",
_attributeReadOnly: "Can not edit read only attribute(s).",
_canNotUpdate: "Insufficient privileges to edit the record.",
_characteristicContextRequired: "You must set at least one characteristic context to true.",
_datasourceError: "Data source error: {error}",
_duplicateValues: "Duplicate values are not allowed.",
_lengthInvalid: "Length of {attr} must be {length}.",
_nameRequired: "A name is required.",
_noAccountName: "No Account Name",
_noCategory: "No Category",
_noCloseTarget: "No Close Target",
_noContact: "No Contact",
_noDescription: "No Description",
_noEmail: "No Email",
_noJobTitle: "No Job Title",
_noName: "No Name",
_noNumber: "No Number",
_noPhone: "No Phone",
_noPriority: "No Priority",
_noSalesRep: "No Sales Rep",
_noSeverity: "No Severity",
_noStage: "No Stage",
_noTerms: "No Terms",
_noType: "No Type",
_productCategoryRequiredOnSold: "A Product Category is required for sold items.",
_recordNotFound: "Record not found.",
_recordStatusNotEditable: "Record with status of `{status}` is not editable.",
_recursiveParentDisallowed: "Record is not allowed to reference itself as the parent.",
_valueExists: "Record with {attr} of '{value}' already exists."
}), XT.locale.setLanguage(XT.lang);

// string.js

_.extend(String.prototype, {
camelize: function() {
var a = XT.$A(arguments);
return XT.String.camelize(this, a);
},
format: function() {
var a = XT.$A(arguments);
return XT.String.format(this, a);
},
f: function() {
var a = XT.$A(arguments);
return XT.String.format(this, a);
},
loc: function() {
var a = XT.$A(arguments);
return a.unshift(this), XT.String.loc.apply(XT.String, a);
},
trim: function() {
return XT.String.trim(this);
}
});

// string.js

XT.String = {
camelize: function(a) {
var b = a.replace(/([\s|\-|\_|\n])([^\s|\-|\_|\n]?)/g, function(a, b, c) {
return c ? c.toUpperCase() : "";
}), c = b.charAt(0), d = c.toLowerCase();
return c !== d ? d + b.slice(1) : b;
},
loc: function(a) {
if (!XT.locale) return XT.warn("XT.String.loc(): attempt to localize string but no locale set"), a;
var b = XT.$A(arguments), c = XT.locale.loc(a);
b.shift();
if (!(b.length > 0)) return c;
try {
return XT.String.format(c, b);
} catch (d) {
XT.error("could not localize string, %@".f(a), d);
}
},
format: function(a, b) {
if (arguments.length === 0) return "";
if (arguments.length === 1) return a;
var c = 0, d, e;
for (; c < b.length; ++c) {
e = b[c];
if (!e) continue;
d = typeof e;
if (d === "object") a = XT.String.replaceKeys(a, e); else {
if (d !== "string" && d !== "number") continue;
a = a.replace(/\%@/, e);
}
}
return a;
},
replaceKeys: function(a, b) {
if (typeof a != "string") return "";
if (typeof b != "object") return a;
var c, d, e, f;
for (d in b) b.hasOwnProperty(d) && (e = "{" + d + "}", c = new RegExp(e, "g"), f = b[d], a = a.replace(c, f));
return a;
},
trim: function(b) {
return !!b && b instanceof String ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : "";
}
};

// startup_task.js

(function() {
"use strict";
var a = XT.StartupTask = function(a) {
var b;
this._properties = {
taskName: "",
waitingList: [],
isComplete: !1,
task: null
};
for (b in a) a.hasOwnProperty(b) && (this._properties[b] = a[b]);
(!this.get("taskName") || this.get("taskName") === "") && this.set("taskName", _.uniqueId("xt_task_")), XT.getStartupManager().registerTask(this);
};
a.prototype.get = function(a) {
var b = this._properties, c = b[a];
return c;
}, a.prototype.set = function(a, b) {
var c = this._properties, d;
if (typeof a == "string" && b) c[a] = b; else if (a && !b) {
b = a;
for (d in b) b.hasOwnProperty(d) && this.set(d, b[d]);
}
return this;
}, a.prototype.checkWaitingList = function(a) {
var b = this.get("waitingList");
b && b.length > 0 && b.indexOf(a) > -1 && this.set("waitingList", b = _.without(b, a));
}, a.prototype.exec = function() {
if (this.get("isComplete")) return !0;
var a = this.get("task");
return !!a && a instanceof Function ? this.get("waitingList").length > 0 ? !1 : (a.call(this), !0) : (this.error("Could not execute without an actual task"), !1);
}, a.prototype.didComplete = function() {
this.set("isComplete", !0), XT.getStartupManager().taskDidComplete(this);
}, a.create = function(a) {
return new XT.StartupTask(a);
};
})(), function() {
"use strict";
var a = XT.StartupTaskManager = function() {
XT.getStartupManager = _.bind(function() {
return this;
}, this), this._properties = {
queue: [],
tasks: {},
completed: [],
isStarted: !1,
callbacks: []
};
}, b;
a.prototype.get = function(a) {
var b = this._properties, c = b[a];
return c;
}, a.prototype.set = function(a, b) {
var c = this._properties, d;
if (typeof a == "string" && b) c[a] = b; else if (a && !b) {
b = a;
for (d in b) b.hasOwnProperty(d) && this.set(d, b[d]);
}
return this;
}, a.prototype.registerTask = function(a) {
var b = a.get("taskName"), c = this.get("tasks"), d = this.get("queue");
c[b] || (c[b] = {
task: a
}), this.get("isStarted") ? a.exec() : d.push(a);
}, a.prototype.taskDidComplete = function(a) {
var b = a.get("taskName"), c = this.get("completed"), d = this.get("tasks"), e, f, g = Object.keys(d).length;
c.push(b);
for (e in d) d.hasOwnProperty(e) && (f = d[e], e = f.task, e.get("isComplete") || e.checkWaitingList(b));
g > c.length ? this.start() : this.allDone();
}, a.prototype.start = function() {
if (this.get("isStarted")) return !1;
var a = this.get("queue"), b = [], c, d, e = a.length;
if (!a || a.length <= 0) {
this.set("isStarted", !0);
return;
}
for (c = 0; c < e; c += 1) d = a.shift(), d.exec() || b.push(d);
b.length > 0 ? this.set("queue", b) : this.start();
}, a.prototype.registerCallback = function(a) {
var b = this.get("callbacks") || [];
b.push(a);
}, a.prototype.allDone = function() {
var a = this.get("callbacks") || [], b;
while (a.length > 0) b = a.shift(), b && b instanceof Function && b();
}, b = new XT.StartupTaskManager;
}();

// xv.js

(function() {
enyo.kind({
name: "XV.Util",
kind: enyo.Component,
published: {
workspacePanelDescriptor: null,
relationTitleFields: {},
history: []
},
create: function() {
this.inherited(arguments), this.setWorkspacePanelDescriptor({
"XM.Account": [ {
title: "Account Info",
fields: [ {
fieldName: "number"
}, {
fieldName: "name"
}, {
fieldName: "accountType",
kind: "XV.AccountTypeDropdown"
} ]
}, {
title: "Contact",
fields: []
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.UserAccount": [ {
title: "User Account Info",
fields: [ {
fieldName: "properName"
} ]
} ],
"XM.Contact": [ {
title: "Contact Info",
fields: [ {
fieldName: "firstName"
}, {
fieldName: "lastName"
}, {
fieldName: "jobTitle"
}, {
fieldName: "address",
kind: "XV.Address"
}, {
fieldName: "phone"
}, {
fieldName: "primaryEmail"
} ]
}, {
title: "Account Info",
fields: [ {
fieldName: "account",
kind: "XV.AccountRelationWidget"
} ]
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
modelType: "XM.ContactComment",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.ToDo": [ {
title: "ToDo Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
}, {
fieldName: "priority",
kind: "XV.PriorityDropdown"
}, {
fieldName: "incident",
kind: "XV.IncidentRelationWidget"
} ]
}, {
title: "Schedule",
fields: [ {
fieldName: "startDate",
kind: "XV.DateWidget"
}, {
fieldName: "dueDate",
kind: "XV.DateWidget"
}, {
fieldName: "assignDate",
kind: "XV.DateWidget"
}, {
fieldName: "completeDate",
kind: "XV.DateWidget"
} ]
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
modelType: "XM.ToDoComment",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.Opportunity": [ {
title: "Opportunity Info",
fields: [ {
fieldName: "number"
}, {
fieldName: "isActive",
kind: "XV.Checkbox"
}, {
fieldName: "name"
}, {
fieldName: "account",
kind: "XV.AccountRelationWidget"
}, {
fieldName: "opportunityStage",
kind: "XV.OpportunityStageDropdown"
}, {
fieldName: "opportunityType",
kind: "XV.OpportunityTypeDropdown"
}, {
fieldName: "opportunitySource",
kind: "XV.OpportunitySourceDropdown"
} ]
}, {
title: "Schedule",
fields: [ {
fieldName: "startDate",
kind: "XV.DateWidget"
}, {
fieldName: "assignDate",
kind: "XV.DateWidget"
}, {
fieldName: "targetClose",
kind: "XV.DateWidget"
}, {
fieldName: "actualClose",
kind: "XV.DateWidget"
} ]
}, {
title: "Notes",
location: "bottom",
fields: [ {
fieldName: "amount",
kind: "XV.MoneyWidget"
}, {
fieldName: "probability",
kind: "XV.PercentWidget"
}, {
fieldName: "notes"
} ]
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
modelType: "XM.OpportunityComment",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.Incident": [ {
title: "Incident Info",
fields: [ {
fieldName: "number"
}, {
fieldName: "description"
}, {
fieldName: "notes"
} ]
}, {
title: "Relationships",
fields: [ {
fieldName: "owner",
kind: "XV.UserAccountRelationWidget"
}, {
fieldName: "account",
kind: "XV.AccountRelationWidget"
}, {
fieldName: "item",
kind: "XV.ItemRelationWidget"
} ]
}, {
title: "Status",
fields: [ {
fieldName: "priority",
kind: "XV.PriorityDropdown"
} ]
}, {
title: "History",
kind: "XV.GridWidget",
objectName: "history",
modelType: "XM.IncidentHistory",
location: "bottom",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
kind: "XV.DateWidget"
}, {
fieldName: "description"
} ]
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
modelType: "XM.IncidentComment",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.Project": [ {
title: "Project Info",
fields: [ {
fieldName: "number",
placeholder: "Enter the project number"
}, {
fieldName: "name"
}, {
fieldName: "notes"
}, {
fieldName: "status",
kind: "XV.ProjectStatusDropdown"
} ]
}, {
title: "Summary",
location: "bottom",
fields: [ {
fieldName: "budgetedHoursTotal",
kind: "XV.Label"
}, {
fieldName: "actualHoursTotal",
kind: "XV.Label"
}, {
fieldName: "balanceHoursTotal",
kind: "XV.Label"
}, {
fieldName: "budgetedExpensesTotal",
kind: "XV.Label"
}, {
fieldName: "actualExpensesTotal",
kind: "XV.Label"
}, {
fieldName: "balanceExpensesTotal",
kind: "XV.Label"
} ]
}, {
title: "Schedule",
fields: [ {
fieldName: "owner",
kind: "XV.UserAccountRelationWidget"
}, {
fieldName: "assignedTo",
kind: "XV.UserAccountRelationWidget"
}, {
fieldName: "dueDate",
kind: "XV.DateWidget"
}, {
fieldName: "assignDate",
kind: "XV.DateWidget"
}, {
fieldName: "startDate",
kind: "XV.DateWidget"
}, {
fieldName: "completeDate",
kind: "XV.DateWidget"
} ]
}, {
title: "Tasks",
location: "bottom",
kind: "XV.GridWidget",
objectName: "tasks",
modelType: "XM.ProjectTask",
fields: [ {
label: "number",
fieldName: "number",
width: "120"
}, {
label: "name",
fieldName: "name",
width: "120"
}, {
label: "notes",
fieldName: "notes",
width: "220"
}, {
fieldName: "dueDate",
kind: "XV.Date",
width: "100"
}, {
label: "actualHours",
fieldName: "actualHours",
kind: "XV.Number",
width: "40"
}, {
label: "actualExpenses",
fieldName: "actualExpenses",
kind: "XV.Number",
width: "40"
} ]
}, {
title: "Comments",
location: "bottom",
kind: "XV.GridWidget",
objectName: "comments",
modelType: "XM.ProjectComment",
customization: {
disallowEdit: !0,
stampUser: !0,
stampDate: !0
},
fields: [ {
fieldName: "createdBy"
}, {
fieldName: "created",
label: "date",
kind: "XV.DateWidget"
}, {
fieldName: "commentType",
label: "type",
kind: "XV.CommentTypeDropdown"
}, {
fieldName: "text",
label: "text"
} ]
} ],
"XM.Honorific": [ {
title: "Honorific Info",
fields: [ {
fieldName: "code"
} ]
} ],
"XM.State": [ {
title: "State Info",
fields: [ {
fieldName: "abbreviation"
}, {
fieldName: "name"
} ]
} ],
"XM.Country": [ {
title: "Country Info",
fields: [ {
fieldName: "abbreviation"
}, {
fieldName: "name"
} ]
}, {
title: "Currency Info",
fields: [ {
fieldName: "currencyAbbreviation"
}, {
fieldName: "currencyName"
}, {
fieldName: "currencyNumber"
}, {
fieldName: "currencySymbol"
} ]
} ],
"XM.IncidentCategory": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
}, {
fieldName: "order",
kind: "XV.Number"
} ]
} ],
"XM.IncidentResolution": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
}, {
fieldName: "order",
kind: "XV.Number"
} ]
} ],
"XM.IncidentSeverity": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
}, {
fieldName: "order",
kind: "XV.Number"
} ]
} ],
"XM.Priority": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
}, {
fieldName: "order",
kind: "XV.Number"
} ]
} ],
"XM.OpportunitySource": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
} ]
} ],
"XM.OpportunityStage": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
} ]
} ],
"XM.OpportunityType": [ {
title: "Info",
fields: [ {
fieldName: "name"
}, {
fieldName: "description"
} ]
} ]
});
},
removeAllChildren: function(a) {
var b = a.children.length;
for (var c = 0; c < b; c++) a.removeChild(a.children[0]);
},
removeAll: function(a) {
var b = a.controls.length, c;
for (c = 0; c < b; c++) a.removeControl(a.controls[0]);
var d = a.children.length;
for (c = 0; c < d; c++) a.removeChild(a.children[0]);
},
formatModelName: function(a) {
return this.infoToMasterModelName(this.stripModelNamePrefix(a));
},
infoToMasterModelName: function(a) {
return a && a.indexOf("Info") >= 0 && (a = a.substring(0, a.length - 4)), a;
},
stripModelNamePrefix: function(a) {
return a && a.indexOf("XM") >= 0 && (a = a.substring(3)), a;
}
}), XV.util = new XV.Util;
})();

// label.js

(function() {
"use strict", enyo.kind({
name: "XV.Label",
kind: "enyo.Control",
style: "border: 0px;",
components: [ {
tag: "span",
name: "field",
style: "border: 0px; "
} ],
setValue: function(a) {
this.$.field.setContent(a);
}
});
})();

// input.js

(function() {
enyo.kind({
name: "XV.Input",
published: {
value: null
},
events: {
onValueChange: ""
},
components: [ {
name: "input",
kind: "onyx.Input",
onchange: "inputChanged"
} ],
inputChanged: function(a, b) {
var c = this.$.input.getValue(), d = this.validate(c);
d !== !1 ? this.setValue(d) : (this.setValue(null), this.valueChanged(""));
},
setDisabled: function(a) {
this.$.input.setDisabled(a);
},
setValue: function(a, b) {
b = b || {};
var c = this.getValue(), d;
c !== a && (this.value = a, this.valueChanged(a), d = {
value: a,
originator: this
}, b.silent || this.doValueChange(d));
},
validate: function(a) {
return a;
},
valueChanged: function(a) {
return this.$.input.setValue(a), a;
}
}), enyo.kind({
name: "XV.InputWidget",
kind: "XV.Input",
components: [ {
kind: "onyx.InputDecorator",
components: [ {
name: "input",
kind: "onyx.Input",
onchange: "inputChanged"
} ]
} ]
});
})();

// button.js

(function() {
enyo.kind({
name: "XV.Button",
kind: "Button",
classes: "xt-button",
events: {
onButtonTapped: ""
},
handlers: {
ontap: "buttonTapped"
},
buttonTapped: function() {
this.doButtonTapped();
}
});
})();

// checkbox.js

(function() {
enyo.kind({
name: "XV.Checkbox",
kind: "onyx.Checkbox",
events: {
onValueChange: ""
},
handlers: {
onchange: "changed"
},
setValue: function(a, b) {
b = b || {}, this._silent = b.silent, this.inherited(arguments), this._silent = !1;
},
changed: function(a, b) {
this._silent || (b.value = this.getValue(), this.doValueChange(b));
}
});
})();

// number.js

(function() {
enyo.kind({
name: "XV.Number",
kind: "XV.Input",
published: {
scale: 0
},
setValue: function(a, b) {
a = _.isNumber(a) ? XT.math.round(a, this.getScale()) : null, XV.Input.prototype.setValue.call(this, a, b);
},
validate: function(a) {
return a = Number(a), isNaN(a) ? !1 : a;
},
valueChanged: function(a) {
return a = a ? Globalize.format(a, "n" + this.getScale()) : "", XV.Input.prototype.valueChanged.call(this, a);
}
}), enyo.kind({
name: "XV.NumberWidget",
kind: "XV.Number",
components: [ {
kind: "onyx.InputDecorator",
components: [ {
name: "input",
kind: "onyx.Input",
onchange: "inputChanged"
} ]
} ]
}), enyo.kind({
name: "XV.Cost",
kind: "XV.Number",
published: {
scale: XT.COST_SCALE
}
}), enyo.kind({
name: "XV.CostWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.COST_SCALE
}
}), enyo.kind({
name: "XV.ExtendedPrice",
kind: "XV.Number",
published: {
scale: XT.EXTENDED_PRICE_SCALE
}
}), enyo.kind({
name: "XV.ExtendedPriceWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.EXTENDED_PRICE_SCALE
}
}), enyo.kind({
name: "XV.Money",
kind: "XV.Number",
published: {
scale: XT.MONEY_SCALE
}
}), enyo.kind({
name: "XV.MoneyWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.MONEY_SCALE
}
}), enyo.kind({
name: "XV.Percent",
kind: "XV.Number",
published: {
scale: XT.PERCENT_SCALE
}
}), enyo.kind({
name: "XV.PercentWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.PERCENT_SCALE
}
}), enyo.kind({
name: "XV.PurchasePrice",
kind: "XV.Number",
published: {
scale: XT.PURCHASE_PRICE_SCALE
}
}), enyo.kind({
name: "XV.PurchasePriceWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.PURCHASE_PRICE_SCALE
}
}), enyo.kind({
name: "XV.Quantity",
kind: "XV.Number",
published: {
scale: XT.QTY_SCALE
}
}), enyo.kind({
name: "XV.QuantityWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.QTY_SCALE
}
}), enyo.kind({
name: "XV.QuantityPer",
kind: "XV.Number",
published: {
scale: XT.QTY_PER_SCALE
}
}), enyo.kind({
name: "XV.QuantityPerWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.QTY_PER_SCALE
}
}), enyo.kind({
name: "XV.SalesPrice",
kind: "XV.Number",
published: {
scale: XT.SALES_PRICE_SCALE
}
}), enyo.kind({
name: "XV.SalesPriceWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.SALES_PRICE_SCALE
}
}), enyo.kind({
name: "XV.UnitRatio",
kind: "XV.Number",
published: {
scale: XT.UNIT_RATIO_SCALE
}
}), enyo.kind({
name: "XV.UnitRatioWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.UNIT_RATIO_SCALE
}
}), enyo.kind({
name: "XV.Weight",
kind: "XV.Number",
published: {
scale: XT.WEIGHT_SCALE
}
}), enyo.kind({
name: "XV.WeightWidget",
kind: "XV.NumberWidget",
published: {
scale: XT.WEIGHT_SCALE
}
});
})();

// dropdown.js

(function() {
enyo.kind({
name: "XV.DropdownWidget",
kind: "enyo.Control",
events: {
onValueChange: ""
},
published: {
value: null,
collection: null,
disabled: !1,
idAttribute: "id",
nameAttribute: "name",
valueAttribute: null
},
handlers: {
onSelect: "itemSelected"
},
components: [ {
kind: "onyx.PickerDecorator",
components: [ {}, {
name: "picker",
kind: "onyx.Picker"
} ]
} ],
collectionChanged: function() {
var a = this.getNameAttribute(), b = XT.getObjectByName(this.getCollection()), c, d, e, f = !1, g = this, h;
if (!b) {
if (f) {
XT.log("Could not find collection " + this.getCollection());
return;
}
e = function() {
f = !0, g.collectionChanged();
}, XT.getStartupManager().registerCallback(e);
return;
}
this.$.picker.createComponent({
idValue: "",
content: ""
});
for (c = 0; c < b.models.length; c++) h = b.models[c], d = h.get(a), this.$.picker.createComponent({
value: h,
content: d
});
this.render();
},
create: function() {
this.inherited(arguments), this.getCollection() && this.collectionChanged();
},
disabledChange: function(a, b) {
this.addRemoveClass("onyx-disabled", b.originator.disabled);
},
itemSelected: function(a, b) {
var c = this.$.picker.getSelected().value, d = this.getValueAttribute();
this.setValue(d ? c[d] : c);
},
setValue: function(a, b) {
b = b || {};
var c, d = this.getValue();
a !== d && (this._selectValue(a) || (a = null), a !== d && (this.value = a, b.silent || (c = {
originator: this,
value: a
}, this.doValueChange(c))));
},
_selectValue: function(a) {
if (!a) return;
a = this.getValueAttribute() ? a : a.id;
var b = _.find(this.$.picker.getComponents(), function(b) {
return (b.value ? b.value.id : null) === a;
});
return b ? (this.$.picker.setSelected(b), !0) : !1;
}
}), enyo.kind({
name: "XV.AccountTypeDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.accountTypes"
}
}), enyo.kind({
name: "XV.CommentTypeDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.commentTypes"
}
}), enyo.kind({
name: "XV.IncidentCategoryDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.incidentCategories"
}
}), enyo.kind({
name: "XV.IncidentResolutionDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.incidentResolutions"
}
}), enyo.kind({
name: "XV.IncidentSeverityDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.incidentSeverities"
}
}), enyo.kind({
name: "XV.OpportunitySourceDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.opportunitySources"
}
}), enyo.kind({
name: "XV.OpportunityStageDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.opportunityStages"
}
}), enyo.kind({
name: "XV.OpportunityTypeDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.opportunityTypes"
}
}), enyo.kind({
name: "XV.PriorityDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.priorities"
}
}), enyo.kind({
name: "XV.ProjectStatusDropdown",
kind: "XV.DropdownWidget",
published: {
collection: "XM.projectStatuses",
valueAttribute: "id"
}
});
})();

// address.js

(function() {
enyo.kind({
name: "XV.AddressWidget",
kind: enyo.Control,
published: {
model: null
},
events: {
onModelUpdate: ""
},
components: [ {
kind: "onyx.Input",
name: "line1Field",
disabled: !0
}, {
kind: "onyx.Input",
name: "line2Field",
disabled: !0
}, {
kind: "onyx.Input",
name: "line3Field",
disabled: !0
}, {
kind: "onyx.Input",
name: "cityField",
disabled: !0
} ],
setValue: function(a) {
this.setModel(a);
},
getValue: function() {
return this.getModel();
},
formatCity: function(a, b, c) {
return a + ", " + b + " " + c;
},
parseAddress: function(a) {
if (typeof a != "string") throw "Address is not a string.";
a = a.trim();
var b = {}, c = a.indexOf(",");
b.city = a.slice(0, c);
var d = a.substring(c + 2), e = d.lastIndexOf(" ");
return b.state = d.slice(0, e), b.zip = d.substring(e + 1), b;
},
modelChanged: function() {
this.$.line1Field.setValue(this.getModel() ? this.getModel().get("line1") : ""), this.$.line2Field.setValue(this.getModel() ? this.getModel().get("line2") : ""), this.$.line3Field.setValue(this.getModel() ? this.getModel().get("line3") : ""), this.$.cityField.setValue(this.getModel() ? this.formatCity(this.getModel().get("city"), this.getModel().get("state"), this.getModel().get("postalCode")) : "");
},
doAddressChanged: function(a, b) {
this.getModel().set({
line1: a.getValue()
});
},
doCityChanged: function(a, b) {
var c = this.parseAddress(a.getValue());
this.getModel().set({
city: c.city,
state: c.state,
postalCode: c.zip
}), this.doModelUpdate();
}
});
})();

// comments.js

(function() {
"use strict", enyo.kind({
name: "XV.CommentsWidget",
kind: enyo.Control,
published: {
collection: null,
descriptor: null,
fields: [ {
fieldName: "createdBy",
label: "creator",
type: "text"
}, {
fieldName: "created",
label: "date",
type: "date"
}, {
fieldName: "text",
label: "text",
type: "text"
} ]
},
events: {
onModelUpdate: ""
},
classes: "xv-widgets-comments",
style: "height: 200px; width: 700px; margin-right: 5px; font-size: 12px;",
components: [ {
kind: "onyx.GroupboxHeader",
name: "title",
classes: "xv-widgets-comments-title"
}, {
kind: "Repeater",
name: "commentsRepeater",
count: 1,
onSetupItem: "setupRow",
components: [ {
kind: "onyx.Groupbox",
classes: "onyx-toolbar-inline",
style: "background-color: white;",
name: "commentRow"
} ]
} ],
setupRow: function(a, b) {
var c = b.item.$.commentRow;
for (var d = 0; d < this.getFields().length; d++) {
var e = this.getFields()[d], f = ("_" + e.label).loc();
if (b.index === 0) this.createComponent({
container: c,
content: f,
style: "text-weight: bold; border-width: 0px;"
}); else {
var g = this.getCollection().at(b.index - 1), h = this.createComponent({
container: c,
placeholder: f,
style: "border: 0px;",
onchange: "doFieldChanged"
});
h.setContent(this.formatContent(g.get(e.fieldName), e.type));
}
}
},
formatContent: function(a, b) {
return b === "date" ? Globalize.format(a, "d") : a;
},
descriptorChanged: function() {
this.$.title.setContent(this.getDescriptor().title);
},
setValue: function(a) {
this.setCollection(a);
},
getValue: function() {
return this.getCollection();
},
collectionChanged: function() {
this.$.commentsRepeater.setCount(this.getCollection().length + 1), this.render();
},
doFieldChanged: function(a, b) {}
});
})();

// date.js

(function() {
enyo.kind({
name: "XV.Date",
kind: "XV.Input",
components: [ {
name: "input",
kind: "onyx.Input",
onchange: "inputChanged"
} ],
setValue: function(a, b) {
a = _.isDate(a) ? new Date(a.valueOf()) : null, XV.Input.prototype.setValue.call(this, a, b);
},
textToDate: function(a) {
var b = null, c = 864e5;
return a === "0" || a.indexOf("+") === 0 || a.indexOf("-") === 0 ? b = new Date((new Date).getTime() + a * c) : a.indexOf("#") === 0 ? (b = new Date, b.setMonth(0), b.setDate(a.substring(1))) : a.length && !isNaN(a) ? (b = new Date, b.setDate(a)) : a && (b = new Date(a)), b && (isNaN(b.getTime()) ? b = !1 : b.setHours(0, 0, 0, 0)), b;
},
validate: function(a) {
return a = this.textToDate(a), _.isDate(a) || _.isEmpty(a) ? a : !1;
},
valueChanged: function(a) {
return a ? (a = new Date(a.valueOf()), a.setMinutes(a.getTimezoneOffset()), a = Globalize.format(a, "d")) : a = "", XV.Input.prototype.valueChanged.call(this, a);
}
}), enyo.kind({
name: "XV.DateWidget",
kind: "XV.Date",
components: [ {
kind: "onyx.InputDecorator",
name: "decorator",
components: [ {
name: "input",
kind: "onyx.Input",
onchange: "inputChanged"
}, {
name: "icon",
kind: "Image",
src: "images/date-icon.jpg",
ontap: "iconTapped"
}, {
name: "datePickPopup",
kind: "onyx.Popup",
modal: !0,
components: [ {
kind: "GTS.DatePicker",
name: "datePick",
style: "",
onChange: "datePicked"
} ]
} ]
} ],
datePicked: function(a, b) {
this.setValue(b), this.$.datePickPopup.hide();
},
iconTapped: function() {
this.$.datePickPopup.show();
},
valueChanged: function(a) {
var b = a;
a = XV.Date.prototype.valueChanged.call(this, a), this.$.datePick.setValue(a ? b : new Date), this.$.datePick.render();
}
});
})();

// relation.js

(function() {
enyo.kind({
name: "XV.RelationWidget",
kind: enyo.Control,
published: {
value: null,
collection: null,
keyAttribute: "number",
nameAttribute: "name",
descripAttribute: ""
},
events: {
onValueChange: ""
},
components: [ {
kind: "onyx.InputDecorator",
style: "height: 27px",
components: [ {
name: "input",
kind: "onyx.Input",
onkeyup: "keyUp",
onkeydown: "keyDown",
onblur: "receiveBlur"
}, {
kind: "onyx.MenuDecorator",
onSelect: "itemSelected",
components: [ {
kind: "onyx.IconButton",
src: "images/menu-icon-search.png"
}, {
name: "popupMenu",
kind: "onyx.Menu",
components: [ {
content: "_search".loc(),
value: "search"
}, {
content: "_open".loc(),
value: "open"
}, {
content: "_new".loc(),
value: "new"
} ]
} ]
}, {
kind: "onyx.MenuDecorator",
style: "left: -200px; top: 25px;",
onSelect: "relationSelected",
components: [ {
kind: "onyx.Menu",
name: "autocompleteMenu",
modal: !1
} ]
} ]
}, {
name: "name",
content: ""
}, {
name: "description",
content: ""
} ],
autocomplete: function() {
var a = this.getKeyAttribute(), b = this.getValue() ? this.getValue().get(a) : "", c = this.$.input.getValue(), d;
c && c !== b ? (d = {
parameters: [ {
attribute: a,
operator: "BEGINS_WITH",
value: c,
rowLimit: 1
} ],
orderBy: [ {
attribute: a
} ]
}, this._collection.fetch({
success: enyo.bind(this, "_fetchSuccess"),
query: d
})) : c || this.setValue(null);
},
create: function() {
this.inherited(arguments), this.getCollection() && this.collectionChanged();
},
collectionChanged: function() {
var a = this.getCollection(), b = XM.Model.getObjectByName(a);
this._collection = new b;
},
itemSelected: function(a, b) {
var c = b.originator.value, d;
switch (c) {
case "search":
break;
case "open":
d = this.getValue(), this.bubble("workspace", {
eventName: "workspace",
options: d
});
break;
case "new":
d = new this._collection.model, this.bubble("workspace", {
eventName: "workspace",
options: d
});
}
},
keyDown: function(a, b) {
b.keyCode === 9 && (this.$.autocompleteMenu.hide(), this.autocomplete());
},
keyUp: function(a, b) {
var c, d = this.getKeyAttribute(), e = this.getValue() ? this.getValue().get(d) : "", f = this.$.input.getValue(), g = this.$.autocompleteMenu;
f && f !== e && b.keyCode !== 9 ? (c = {
parameters: [ {
attribute: d,
operator: "BEGINS_WITH",
value: f,
rowLimit: 10
} ],
orderBy: [ {
attribute: d
} ]
}, this._collection.fetch({
success: enyo.bind(this, "_collectionFetchSuccess"),
query: c
})) : g.hide();
},
receiveBlur: function(a, b) {
this.autocomplete();
},
relationSelected: function(a, b) {
return this.setValue(b.originator.model), this.$.autocompleteMenu.hide(), !0;
},
setValue: function(a, b) {
b = b || {};
var c = a ? a.id : null, d = this.value ? this.value.id : null, e = this.getKeyAttribute(), f = this.getNameAttribute(), g = this.getDescripAttribute(), h = "", i = "", j = "", k = {
value: a,
originator: this
};
this.value = a, a && a.get && (h = a.get(e) || "", i = a.get(f) || "", j = a.get(g) || ""), this.$.input.setValue(h), this.$.name.setContent(i), this.$.description.setContent(j), c !== d && !b.silent && this.doValueChange(k);
},
_collectionFetchSuccess: function() {
var a = this.getKeyAttribute(), b = this.$.autocompleteMenu, c, d;
b.destroyComponents(), b.controls = [], b.children = [];
if (this._collection.length) {
for (d = 0; d < this._collection.length; d++) c = this._collection.models[d], b.createComponent({
content: c.get(a),
model: c
});
b.reflow(), b.render(), b.show();
} else b.hide();
},
_fetchSuccess: function() {
var a = this._collection.length ? this._collection.models[0] : null;
this.setValue(a);
}
}), enyo.kind({
name: "XV.AccountRelationWidget",
kind: "XV.RelationWidget",
published: {
collection: "XM.AccountInfoCollection"
}
}), enyo.kind({
name: "XV.IncidentRelationWidget",
kind: "XV.RelationWidget",
published: {
collection: "XM.IncidentInfoCollection",
nameAttribute: "description"
}
}), enyo.kind({
name: "XV.ItemRelationWidget",
kind: "XV.RelationWidget",
published: {
collection: "XM.ItemInfoCollection",
nameAttribute: "description1",
descripAttribute: "description2"
}
}), enyo.kind({
name: "XV.UserAccountRelationWidget",
kind: "XV.RelationWidget",
published: {
collection: "XM.UserAccountInfoCollection",
keyAttribute: "username",
nameAttribute: "properName"
}
});
})();

// grid.js

(function() {
"use strict", enyo.kind({
name: "XV.GridWidget",
kind: enyo.Control,
published: {
collection: null,
descriptor: null,
customization: {}
},
events: {
onSubmodelUpdate: ""
},
style: "height: 200px; width: 900px; margin-right: 5px; font-size: 12px;",
components: [ {
kind: "onyx.GroupboxHeader",
name: "title"
}, {
kind: "Repeater",
name: "gridRepeater",
count: 0,
onSetupItem: "setupRow",
components: [ {
kind: "onyx.Groupbox",
classes: "onyx-toolbar-inline",
style: "background-color: white;",
name: "gridRow"
} ]
} ],
setupRow: function(a, b) {
var c = b.item.$.gridRow;
for (var d = 0; d < this.getDescriptor().fields.length; d++) {
var e = this.getDescriptor().fields[d], f = e.label ? e.label : e.fieldName, g = ("_" + f).loc();
if (b.index === 0) this.createComponent({
container: c,
content: g,
style: "text-weight: bold; border-width: 0px; width: " + e.width + "px;"
}); else {
var h = this.createComponent({
kind: e.fieldType || "XV.Input",
container: c,
name: e.fieldName + (b.index - 1),
placeholder: g,
style: "border: 0px; width: " + e.width + "px;",
onchange: "doFieldChanged"
});
e.collection && h.setCollection(e.collection);
if (this.getCollection().size() + 1 > b.index) {
var i = this.getCollection().at(b.index - 1);
h.setValue(i.get(e.fieldName), {
silent: !0
}), this.getCustomization().disallowEdit && h.setDisabled(!0);
} else this.getCustomization().stampUser && e.fieldName === "createdBy" && (h.setValue("<YOU>", {
silent: !0
}), h.setDisabled(!0)), this.getCustomization().stampDate && e.fieldName === "created" && (h.setValue("<NOW>", {
silent: !0
}), h.setDisabled(!0));
}
}
!this.getCustomization().disallowEdit && b.index !== 0 && b.index !== this.getCollection().size() + 1 && this.createComponent({
kind: "onyx.Button",
container: c,
name: "delete" + (b.index - 1),
content: "Delete",
onclick: "deleteRow"
}), this.getCollection() && b.index === this.getCollection().size() + 1 && c.applyStyle("border", "1px solid orange");
},
deleteRow: function(a, b) {
this.$.gridRepeater.removeChild(a.parent.parent), this.$.gridRepeater.render();
var c = a.getName(), d = c.match(/(\D+)(\d+)/), e = Number(d[2]);
this.getCollection().at(e).destroy(), this.doSubmodelUpdate();
},
descriptorChanged: function() {
var a = this.getDescriptor();
this.$.title.setContent(a.title), this.$.gridRepeater.setCount(1);
},
setValue: function(a) {
this.setCollection(a);
},
getValue: function() {
return this.getCollection();
},
collectionChanged: function() {
this.$.gridRepeater.setCount(this.getCollection().size() + 2);
},
doFieldChanged: function(a, b) {
var c = a.getName(), d = a.getValue(), e = c.match(/(\D+)(\d+)/), f = Number(e[2]), g = e[1], h = {};
h[g] = d;
if (f >= this.getCollection().size()) {
var i = XV.util.stripModelNamePrefix(this.getDescriptor().modelType), j = new XM[i](h, {
isNew: !0
});
for (var k = 0; k < j.requiredAttributes.length; k++) {
var l = j.requiredAttributes[k];
if (!j.get(l)) {
if (l === "dueDate") continue;
if (l === "id") continue;
var m = {};
m[l] = "", j.set(m);
}
}
this.getCollection().add(j);
} else this.getCollection().at(f).set(h);
this.doSubmodelUpdate();
}
});
})();

// parameter.js

(function() {
enyo.kind({
name: "XV.ParameterItem",
classes: "parameter-item",
published: {
value: "",
label: "",
attr: "",
operator: ""
},
events: {
onParameterChange: ""
},
handlers: {
onValueChange: "parameterChanged"
},
components: [ {
name: "label",
kind: "Control",
classes: "parameter-label"
}, {
name: "input",
classes: "parameter-item-input"
} ],
defaultKind: "XV.InputWidget",
create: function() {
this.inherited(arguments), this.valueChanged(), this.labelChanged(), !this.getOperator() && this.defaultKind === "XV.InputWidget" && this.setOperator("MATCHES");
},
labelChanged: function() {
this.$.label.setContent(this.label);
},
getParameter: function() {
var a;
return this.getValue() && (a = {
attribute: this.getAttr(),
operator: this.getOperator(),
value: this.getValue()
}), a;
},
getValue: function() {
return this.$.input.getValue();
},
parameterChanged: function() {
var a = {
value: this.getValue,
originator: this
};
return this.doParameterChange(a), !0;
},
valueChanged: function() {
this.$.input.setValue(this.value);
}
}), enyo.kind({
name: "XV.ParameterWidget",
kind: "FittableRows",
defaultKind: "XV.ParameterItem",
getParameters: function() {
var a, b, c = [];
for (a = 0; a < this.children.length; a++) b = this.children[a].getParameter(), b && c.push(b);
return c;
}
});
})();

// info_list.js

(function() {
enyo.kind({
name: "XV.InfoList",
kind: "Panels",
classes: "xt-info-list",
draggable: !1,
components: [ {
name: "loader",
classes: "xt-info-list-loader",
content: "Loading content..."
}, {
name: "error",
classes: "xt-info-list-error",
content: "There was an error"
}, {
name: "list",
kind: "XV.InfoListPrivate"
} ],
published: {
collection: null,
rowClass: "",
query: null,
parameterWidget: null
},
collectionChanged: function() {
var a = this.getCollection(), b;
typeof a == "string" && (b = XT.getObjectByName(a), a = this.collection = new b);
if (!a) {
this.setIndex(1);
return;
}
a.bind("change", enyo.bind(this, "_collectionChanged", a));
},
_collectionChanged: function(a) {
this.log();
},
_collectionFetchSuccess: function() {
this.log(), this.waterfall("onCollectionUpdated");
},
_collectionFetchError: function() {
this.log();
},
create: function() {
this.inherited(arguments), this.rowClassChanged(), this.collectionChanged();
},
rowClassChanged: function() {
this.$.list.setRowClass(this.getRowClass());
},
showingChanged: function() {
this.inherited(arguments), this.log(this.name, this.showing, this);
},
fetch: function(a) {
var b = this, c = this.getCollection(), d = this.getQuery(), e;
a = a ? _.clone(a) : {}, e = a.success, _.extend(a, {
success: function(a, c, d) {
b._collectionFetchSuccess(a, c, d), e && e(a, c, d);
},
error: enyo.bind(this, "_collectionFetchError"),
query: d
}), c.fetch(a);
}
}), enyo.kind({
name: "XV.InfoListPrivate",
kind: "List",
classes: "xt-info-list-private",
published: {
rowClass: "",
isFetching: !1,
isMore: !0
},
handlers: {
onSetupItem: "setupRow",
onCollectionUpdated: "collectionUpdated"
},
collectionUpdated: function() {
var a = this.parent.getCollection(), b = this.parent.getQuery(), c = b.rowOffset || 0, d = b.rowLimit || 0, e = a.length, f = d ? c + d <= e && this.getCount() !== a.length : !1;
this.setIsMore(f), this.setIsFetching(!1), this.setCount(a.length), c ? this.refresh() : this.reset(), this.parent.setIndex(2);
},
rowClassChanged: function() {
var a = this.getRowClass(), b, c;
a && XT.getObjectByName(a) && (b = {
name: "item",
kind: a
}, c = this.$.item, c && (this.removeComponent(c), c.destroy()), this.createComponent(b));
},
setupRow: function(a, b) {
var c = this.parent.getCollection(), d = this.$.item, e = b.index, f = c.models[e];
d && d.renderModel && d.renderModel(f);
}
}), enyo.kind({
name: "XV.InfoListRow",
classes: "xt-info-list-row",
published: {
leftColumn: [],
rightColumn: []
},
events: {
onInfoListRowTapped: ""
},
create: function() {
this.inherited(arguments);
var a = this.getLeftColumn(), b = this.getRightColumn(), c, d;
c = this.createComponent({
name: "leftColumn",
kind: "XV.InfoListRowColumn",
structure: a
}), d = this.createComponent({
name: "rightColumn",
kind: "XV.InfoListRowColumn",
structure: b
});
},
renderModel: function(a) {
var b = this.$, c, d, e, f, g, h;
for (c in b) if (b.hasOwnProperty(c)) {
e = b[c];
if (e.isLabel) continue;
if (c.indexOf(".") > -1) {
f = c.split("."), d = 0, g = a;
for (; d < f.length; ++d) {
g = g.getValue(f[d]);
if (g && g instanceof Date) break;
if (!g || typeof g != "object") {
if (typeof g == "string") break;
g = "";
break;
}
}
e.setContent(g);
} else g = a.getValue(c);
e.formatter && (h = this[e.formatter], h && h instanceof Function && (g = h(g, a, e))), g && g instanceof Date && (g = Globalize.format(g, "d")), e.setContent(g || e.placeholder || ""), g ? e.removeClass("empty") : e.addClass("empty");
}
},
tap: function(a, b) {
this.doInfoListRowTapped(b);
}
}), enyo.kind({
name: "XV.InfoListRowColumn",
classes: "xt-info-list-row-column",
published: {
structure: null
},
create: function() {
this.inherited(arguments);
var a = this.getStructure(), b = 0, c, d = this, e = enyo.bind(this, "createComponentFromArray", this.owner), f = enyo.bind(this, "createComponentFromObject", this.owner);
for (; b < a.length; ++b) c = a[b], c instanceof Array ? d = e(d, c) : typeof c == "object" && f(d, c);
},
createComponentFromArray: function(a, b, c) {
var d = b, e = c, f = e.slice(0).shift().width, g = 0, h, i;
d.kind !== "InfoListBasicColumn" && (i = d, d = d.createComponent({
kind: "XV.InfoListBasicColumn",
style: "width:" + f + "px;"
}));
for (; g < e.length; ++g) h = e[g], h instanceof Array ? d = this.createComponentFromArray(a, d, h, e.length) : typeof h == "object" && this.createComponentFromObject(a, d, h);
return i;
},
createComponentFromObject: function(a, b, c) {
var d = b, e = c;
d = d.createComponent({
kind: "XV.InfoListBasicCell"
}, e), a.$[e.name] || (a.$[e.name] = d);
}
}), enyo.kind({
name: "XV.InfoListBasicRow",
classes: "xt-info-list-basic-row"
}), enyo.kind({
name: "XV.InfoListBasicColumn",
classes: "xt-info-list-basic-column"
}), enyo.kind({
name: "XV.InfoListBasicCell",
classes: "xt-info-list-basic-cell"
}), enyo.kind({
name: "XV.AccountInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
attr: "isActive",
label: "_showInactive".loc(),
defaultKind: "XV.Checkbox",
getParameter: function() {
var a;
return this.getValue() || (a = {
attribute: this.getAttr(),
operator: "=",
value: !0
}), a;
}
}, {
label: "_number".loc(),
attr: "number"
}, {
label: "_name".loc(),
attr: "name"
}, {
label: "_primaryContact".loc(),
attr: "primaryContact.name"
}, {
label: "_primaryEmail".loc(),
attr: "primaryContact.primaryEmail"
}, {
label: "_phone".loc(),
attr: [ "primaryContact.phone", "primaryContact.alternate", "primaryContact.fax" ]
}, {
label: "_street".loc(),
attr: [ "primaryContact.address.line1", "primaryContact.address.line2", "primaryContact.address.line3" ]
}, {
label: "_city".loc(),
attr: "primaryContact.address.city"
}, {
label: "_postalCode".loc(),
attr: "primaryContact.address.postalCode"
}, {
label: "_state".loc(),
attr: "primaryContact.address.state"
}, {
label: "_country".loc(),
attr: "primaryContact.address.country"
} ]
}), enyo.kind({
name: "XV.AccountInfoList",
kind: "XV.InfoList",
published: {
label: "_accounts".loc(),
collection: "XM.AccountInfoCollection",
query: {
orderBy: [ {
attribute: "number"
} ]
},
rowClass: "XV.AccountInfoCollectionRow",
parameterWidget: "XV.AccountInfoParameters"
}
}), enyo.kind({
name: "XV.AccountInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "number",
classes: "cell-key account-number"
}, {
name: "name",
classes: "account-name",
placeholder: "_noJobTitle".loc()
} ], [ {
width: 160
}, {
name: "primaryContact.phone",
classes: "cell-align-right account-primaryContact-phone"
}, {
name: "primaryContact.primaryEmail",
classes: "cell-align-right account-primaryContact-primaryEmail"
} ] ],
rightColumn: [ [ {
width: 320
}, {
name: "primaryContact.name",
classes: "cell-italic account-primaryContact-name",
placeholder: "_noContact".loc()
}, {
name: "primaryContact.address.formatShort",
classes: "account-primaryContact-address"
} ] ]
}), enyo.kind({
name: "XV.ContactInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
attr: "isActive",
label: "_showInactive".loc(),
defaultKind: "XV.Checkbox",
getParameter: function() {
var a;
return this.getValue() || (a = {
attribute: this.getAttr(),
operator: "=",
value: !0
}), a;
}
}, {
label: "_name".loc(),
attr: "name"
}, {
label: "_primaryEmail".loc(),
attr: "primaryEmail"
}, {
label: "_phone".loc(),
attr: [ "phone", "alternate", "fax" ]
}, {
label: "_street".loc(),
attr: [ "address.line1", "address.line2", "address.line3" ]
}, {
label: "_city".loc(),
attr: "address.city"
}, {
label: "_state".loc(),
attr: "address.state"
}, {
label: "_postalCode".loc(),
attr: "address.postalCode"
}, {
label: "_country".loc(),
attr: "address.country"
} ]
}), enyo.kind({
name: "XV.ContactInfoList",
kind: "XV.InfoList",
published: {
label: "_contacts".loc(),
collection: "XM.ContactInfoCollection",
query: {
orderBy: [ {
attribute: "lastName"
}, {
attribute: "firstName"
} ]
},
rowClass: "XV.ContactInfoCollectionRow",
parameterWidget: "XV.ContactInfoParameters"
}
}), enyo.kind({
name: "XV.ContactInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "name",
classes: "cell-key contact-name"
}, {
name: "jobTitle",
classes: "contact-job-title",
placeholder: "_noJobTitle".loc()
} ], [ {
width: 160
}, {
name: "phone",
classes: "cell-align-right contact-phone"
}, {
name: "primaryEmail",
classes: "cell-align-right contact-email"
} ] ],
rightColumn: [ [ {
width: 320
}, {
name: "account.name",
classes: "cell-italic contact-account-name",
placeholder: "_noAccountName".loc()
}, {
name: "address.formatShort",
classes: "contact-account-name"
} ] ]
}), enyo.kind({
name: "XV.IncidentInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
label: "_number".loc(),
attr: "number",
getParameter: function() {
var a, b = this.getValue() - 0;
return b && _.isNumber(b) && (a = {
attribute: this.getAttr(),
operator: "=",
value: b
}), a;
}
}, {
label: "_account".loc(),
attr: "account",
defaultKind: "XV.AccountRelationWidget"
}, {
label: "_description".loc(),
attr: "description"
}, {
label: "_category".loc(),
attr: "category",
defaultKind: "XV.IncidentCategoryDropdown"
}, {
label: "_priority".loc(),
attr: "priority",
defaultKind: "XV.PriorityDropdown"
}, {
label: "_severity".loc(),
attr: "severity",
defaultKind: "XV.IncidentSeverityDropdown"
}, {
label: "_resolution".loc(),
attr: "resolution",
defaultKind: "XV.IncidentResolutionDropdown"
}, {
label: "_startDate".loc(),
attr: "created",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_endDate".loc(),
attr: "created",
operator: "<=",
defaultKind: "XV.DateWidget"
} ]
}), enyo.kind({
name: "XV.IncidentInfoList",
kind: "XV.InfoList",
published: {
label: "_incidents".loc(),
collection: "XM.IncidentInfoCollection",
rowClass: "XV.IncidentInfoCollectionRow",
parameterWidget: "XV.IncidentInfoParameters"
}
}), enyo.kind({
name: "XV.IncidentInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 245
}, {
name: "number",
classes: "cell-key incident-number"
}, {
name: "description",
classes: "cell incident-description"
} ], [ {
width: 75
}, {
name: "updated",
classes: "cell-align-right incident-updated",
formatter: "formatDate"
} ] ],
rightColumn: [ [ {
width: 165
}, {
name: "account.name",
classes: "cell-italic incident-account-name"
}, {
name: "contact.getName",
classes: "incident-contact-name"
} ], [ {
width: 75
}, {
name: "getIncidentStatusString",
classes: "incident-status"
}, {
name: "owner.username",
classes: "incident-owner-username"
} ], [ {
width: 75
}, {
name: "priority.name",
classes: "incident-priority",
placeholder: "_noPriority".loc()
}, {
name: "category.name",
classes: "incident-category",
placeholder: "_noCategory".loc()
} ] ],
formatDate: function(a, b, c) {
var d = new Date;
return XT.date.compareDate(a, d) ? c.removeClass("bold") : c.addClass("bold"), a;
}
}), enyo.kind({
name: "XV.OpportunityInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
label: "_showInactive".loc(),
attr: "isActive",
defaultKind: "XV.Checkbox",
getParameter: function() {
var a;
return this.getValue() || (a = {
attribute: this.getAttr(),
operator: "=",
value: !0
}), a;
}
}, {
label: "_name".loc(),
attr: "name"
}, {
label: "_opportunityStage".loc(),
attr: "opportunityStage",
defaultKind: "XV.OpportunityStageDropdown"
}, {
label: "_opportunityType".loc(),
attr: "opportunityType",
defaultKind: "XV.OpportunityTypeDropdown"
}, {
label: "_opportunitySource".loc(),
attr: "opportunitySource",
defaultKind: "XV.OpportunitySourceDropdown"
} ]
}), enyo.kind({
name: "XV.OpportunityInfoList",
kind: "XV.InfoList",
published: {
collection: "XM.OpportunityInfoCollection",
label: "_opportunities".loc(),
rowClass: "XV.OpportunityInfoCollectionRow",
parameterWidget: "XV.OpportunityInfoParameters"
}
}), enyo.kind({
name: "XV.OpportunityInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 200
}, {
name: "number",
classes: "cell-key opportunity-number"
}, {
name: "name",
classes: "opportunity-description"
} ], [ {
width: 120
}, {
name: "targetClose",
classes: "cell-align-right",
formatter: "formatTargetClose",
placeholder: "_noCloseTarget".loc()
} ] ],
rightColumn: [ [ {
width: 165
}, {
name: "account.name",
classes: "cell-italic opportunity-account-name"
}, {
name: "contact.getName",
classes: "opportunity-contact-name",
placeholder: "_noContact".loc()
} ], [ {
width: 75
}, {
name: "opportunityStage.name",
classes: "opportunity-opportunityStage-name",
placeholder: "_noStage".loc()
}, {
name: "owner.username",
classes: "opportunity-owner-username"
} ], [ {
width: 75
}, {
name: "priority.name",
classes: "opportunity-priority-name",
placeholder: "_noPriority".loc()
}, {
name: "opportunityType.name",
classes: "opportunity-opportunityType-name",
placeholder: "_noType".loc()
} ] ],
formatTargetClose: function(a, b, c) {
var d = new Date;
return b.get("isActive") && a && XT.date.compareDate(a, d) < 1 ? c.addClass("error") : c.removeClass("error"), a;
}
}), enyo.kind({
name: "XV.ProjectInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
label: "_showCompleted".loc(),
attr: "status",
defaultKind: "XV.Checkbox",
getParameter: function() {
var a;
return this.getValue() || (a = {
attribute: this.getAttr(),
operator: "!=",
value: "C"
}), a;
}
}, {
label: "_number".loc(),
attr: "number"
}, {
label: "_name".loc(),
attr: "name"
}, {
label: "_startStartDate".loc(),
attr: "startDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_startEndDate".loc(),
attr: "startDate",
operator: "<=",
defaultKind: "XV.DateWidget"
}, {
label: "_assignedStartDate".loc(),
attr: "assignDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_assignedEndDate".loc(),
attr: "assignDate",
operator: "<=",
defaultKind: "XV.DateWidget"
}, {
label: "_dueStartDate".loc(),
attr: "dueDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_dueEndDate".loc(),
attr: "dueDate",
operator: "<=",
defaultKind: "XV.DateWidget"
}, {
label: "_completedStartDate".loc(),
attr: "completeDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_completedEndDate".loc(),
attr: "completeDate",
operator: "<=",
defaultKind: "XV.DateWidget"
} ]
}), enyo.kind({
name: "XV.ProjectInfoList",
kind: "XV.InfoList",
published: {
label: "_projects".loc(),
collection: "XM.ProjectInfoCollection",
query: {
orderBy: [ {
attribute: "number"
} ]
},
rowClass: "XV.ProjectInfoCollectionRow",
parameterWidget: "XV.ProjectInfoParameters"
}
}), enyo.kind({
name: "XV.ProjectInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 200
}, {
name: "number",
classes: "cell-key project-number"
}, {
name: "name",
classes: "project-name"
}, {
name: "account.name",
classes: "project-account-name"
} ], [ {
width: 120
}, {
name: "dueDate",
classes: "cell-align-right project-due-date",
formatter: "formatDueDate"
} ] ],
rightColumn: [ [ {
width: 70
}, {
name: "getProjectStatusString",
classes: "project-status"
}, {
name: "owner.username",
classes: "project-owner-username"
} ], [ {
width: 70
}, {
content: "budgeted:",
style: "text-align: right;",
isLabel: !0
}, {
content: "actual:",
style: "text-align: right;",
isLabel: !0
}, {
content: "balance:",
style: "text-align: right;",
isLabel: !0
} ], [ {
width: 80
}, {
name: "budgetedExpenses",
classes: "cell-align-right project-budgeted-expenses",
formatter: "formatExpenses"
}, {
name: "actualExpenses",
classes: "cell-align-right project-actual-expenses",
formatter: "formatExpenses"
}, {
name: "balanceExpenses",
classes: "cell-align-right project-balance-expenses",
formatter: "formatExpenses"
} ], [ {
width: 80
}, {
name: "budgetedHours",
classes: "cell-align-right project-budgeted-hours",
formatter: "formatHours"
}, {
name: "actualHours",
classes: "cell-align-right project-actual-hours",
formatter: "formatHours"
}, {
name: "balanceHours",
classes: "cell-align-right project-balance-hours",
formatter: "formatHours"
} ] ],
formatDueDate: function(a, b, c) {
var d = new Date, e = XM.Project;
return b.get("status") !== e.COMPLETED && XT.date.compareDate(a, d) < 1 ? c.addClass("error") : c.removeClass("error"), a;
},
formatHours: function(a, b, c) {
return Globalize.format(a, "n2") + " " + "_hrs".loc();
},
formatExpenses: function(a, b, c) {
return Globalize.format(a, "c" + XT.MONEY_SCALE);
}
}), enyo.kind({
name: "XV.ToDoInfoParameters",
kind: "XV.ParameterWidget",
components: [ {
label: "_showCompleted".loc(),
attr: "status",
defaultKind: "XV.Checkbox",
getParameter: function() {
var a;
return this.getValue() || (a = {
attribute: this.getAttr(),
operator: "!=",
value: "C"
}), a;
}
}, {
label: "_name".loc(),
attr: "name"
}, {
label: "_startStartDate".loc(),
attr: "startDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_startEndDate".loc(),
attr: "startDate",
operator: "<=",
defaultKind: "XV.DateWidget"
}, {
label: "_dueStartDate".loc(),
attr: "dueDate",
operator: ">=",
defaultKind: "XV.DateWidget"
}, {
label: "_dueEndDate".loc(),
attr: "dueDate",
operator: "<=",
defaultKind: "XV.DateWidget"
} ]
}), enyo.kind({
name: "XV.ToDoInfoList",
kind: "XV.InfoList",
published: {
label: "_toDos".loc(),
collection: "XM.ToDoInfoCollection",
rowClass: "XV.ToDoInfoCollectionRow",
parameterWidget: "XV.ToDoInfoParameters"
}
}), enyo.kind({
name: "XV.ToDoInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 245
}, {
name: "name",
classes: "cell-key toDo-name"
}, {
name: "description",
classes: "cell toDo-description"
} ], [ {
width: 75
}, {
name: "dueDate",
classes: "cell-align-right toDo-dueDate",
formatter: "formatDueDate"
} ] ],
rightColumn: [ [ {
width: 165
}, {
name: "account.name",
classes: "cell-italic toDo-account-name",
placeholder: "_noAccountName".loc()
}, {
name: "contact.getName",
classes: "toDo-contact-name"
} ], [ {
width: 75
}, {
name: "getToDoStatusString",
classes: "toDo-status"
}, {
name: "assignedTo.username",
classes: "toDo-assignedTo-username"
} ], [ {
width: 75
}, {
name: "priority.name",
classes: "toDo-priority",
placeholder: "_noPriority".loc()
} ] ],
formatDueDate: function(a, b, c) {
var d = new Date, e = XM.ToDo;
return b.get("status") !== e.COMPLETED && XT.date.compareDate(a, d) < 1 ? c.addClass("error") : c.removeClass("error"), a;
}
}), enyo.kind({
name: "XV.UserAccountInfoList",
kind: "XV.InfoList",
published: {
label: "_userAccounts".loc(),
collection: "XM.UserAccountInfoCollection",
query: {
orderBy: [ {
attribute: "username"
} ]
},
rowClass: "XV.UserAccountInfoCollectionRow"
}
}), enyo.kind({
name: "XV.UserAccountInfoCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "username",
classes: "cell-key user-account-username"
} ], [ {
width: 160
}, {
name: "propername",
classes: "user-account-proper-name"
} ] ],
rightColumn: [ [ {
width: 320
}, {
name: "isActive",
classes: "cell-align-right user-account-active",
formatter: "formatActive"
} ] ],
formatActive: function(a) {
return a ? "_active".loc() : "";
}
}), enyo.kind({
name: "XV.HonorificList",
kind: "XV.InfoList",
published: {
label: "_honorific".loc(),
collection: "XM.HonorificCollection",
query: {
orderBy: [ {
attribute: "code"
} ]
},
rowClass: "XV.HonorificCollectionRow"
}
}), enyo.kind({
name: "XV.HonorificCollectionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "code",
classes: ""
} ] ]
}), enyo.kind({
name: "XV.StateList",
kind: "XV.InfoList",
published: {
label: "_state".loc(),
collection: "XM.StateCollection",
query: {
orderBy: [ {
attribute: "abbreviation"
} ]
},
rowClass: "XV.AbbreviationNameRow"
}
}), enyo.kind({
name: "XV.CountryList",
kind: "XV.InfoList",
published: {
label: "_country".loc(),
collection: "XM.CountryCollection",
query: {
orderBy: [ {
attribute: "name"
} ]
},
rowClass: "XV.AbbreviationNameRow"
}
}), enyo.kind({
name: "XV.AbbreviationNameRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "abbreviation",
classes: ""
} ], [ {
width: 160
}, {
name: "name",
classes: ""
} ] ]
}), enyo.kind({
name: "XV.NameDescriptionList",
kind: "XV.InfoList",
published: {
label: "",
collection: null,
query: {
orderBy: [ {
attribute: "order"
} ]
},
rowClass: "XV.NameDescriptionRow"
},
create: function() {
this.inherited(arguments);
var a = this.kind.substring(0, this.kind.length - 4).substring(3);
this.getLabel() || this.setLabel(("_" + a.camelize()).loc()), this.getCollection() || this.setCollection("XM." + a + "Collection");
}
}), enyo.kind({
name: "XV.IncidentCategoryList",
kind: "XV.NameDescriptionList"
}), enyo.kind({
name: "XV.IncidentResolutionList",
kind: "XV.NameDescriptionList"
}), enyo.kind({
name: "XV.IncidentSeverityList",
kind: "XV.NameDescriptionList"
}), enyo.kind({
name: "XV.PriorityList",
kind: "XV.NameDescriptionList"
}), enyo.kind({
name: "XV.OpportunitySourceList",
kind: "XV.NameDescriptionList",
published: {
query: {
orderBy: [ {
attribute: "id"
} ]
}
}
}), enyo.kind({
name: "XV.OpportunityStageList",
kind: "XV.NameDescriptionList",
published: {
query: {
orderBy: [ {
attribute: "id"
} ]
}
}
}), enyo.kind({
name: "XV.OpportunityTypeList",
kind: "XV.NameDescriptionList",
published: {
query: {
orderBy: [ {
attribute: "id"
} ]
}
}
}), enyo.kind({
name: "XV.NameDescriptionRow",
kind: "XV.InfoListRow",
leftColumn: [ [ {
width: 160
}, {
name: "name",
classes: ""
} ], [ {
width: 160
}, {
name: "description",
classes: ""
} ] ]
});
})();

// module.js

(function() {
var a = 50, b = 100;
enyo.kind({
name: "XV.Module",
kind: "Panels",
label: "",
classes: "app enyo-unselectable",
events: {
onInfoListAdded: "",
onTogglePullout: ""
},
handlers: {
onParameterChange: "requery",
onScroll: "didScroll",
onInfoListRowTapped: "doInfoListRowTapped"
},
showPullout: !0,
realtimeFit: !0,
arrangerKind: "CollapsingArranger",
selectedList: 0,
components: [ {
kind: "FittableRows",
classes: "left",
components: [ {
kind: "onyx.Toolbar",
classes: "onyx-menu-toolbar",
components: [ {
kind: "onyx.Button",
content: "_back".loc(),
ontap: "showDashboard"
}, {
kind: "Group",
defaultKind: "onyx.IconButton",
tag: null,
components: [ {
src: "images/menu-icon-search.png",
ontap: "showParameters"
}, {
src: "images/menu-icon-bookmark.png",
ontap: "showHistory"
} ]
}, {
name: "leftLabel"
} ]
}, {
name: "menu",
kind: "List",
fit: !0,
touch: !0,
onSetupItem: "setupItem",
components: [ {
name: "item",
classes: "item enyo-border-box",
ontap: "itemTap"
} ]
} ]
}, {
kind: "FittableRows",
components: [ {
kind: "FittableColumns",
noStretch: !0,
classes: "onyx-toolbar onyx-toolbar-inline",
components: [ {
kind: "onyx.Grabber"
}, {
kind: "Scroller",
thumb: !1,
fit: !0,
touch: !0,
vertical: "hidden",
style: "margin: 0;",
components: [ {
classes: "onyx-toolbar-inline",
style: "white-space: nowrap;"
}, {
name: "rightLabel",
style: "text-align: center"
} ]
}, {
kind: "onyx.Button",
content: "_new".loc(),
ontap: "newWorkspace"
}, {
kind: "onyx.InputDecorator",
components: [ {
name: "searchInput",
kind: "onyx.Input",
style: "width: 200px;",
placeholder: "Search",
onchange: "inputChanged"
}, {
kind: "Image",
src: "images/search-input-search.png"
} ]
}, {
kind: "onyx.Button",
content: "_logout".loc(),
ontap: "warnLogout"
}, {
name: "logoutWarningPopup",
classes: "onyx-sample-popup",
kind: "onyx.Popup",
centered: !0,
modal: !0,
floating: !0,
components: [ {
content: "Are you sure you want to log out?"
}, {
tag: "br"
}, {
kind: "onyx.Button",
content: "Yes, logout",
ontap: "logout"
}, {
kind: "onyx.Button",
content: "No, don't logout.",
ontap: "closeLogoutWarningPopup"
} ]
} ]
}, {
name: "lists",
kind: "Panels",
arrangerKind: "LeftRightArranger",
margin: 0,
fit: !0,
onTransitionFinish: "didFinishTransition"
} ]
}, {
kind: "Signals",
onModelSave: "doRefreshInfoObject"
} ],
firstTime: !0,
fetched: {},
setupItem: function(a, b) {
var c = this.lists[b.index].name;
this.$.item.setContent(this.$.lists.$[c].getLabel()), this.$.item.addRemoveClass("onyx-selected", a.isSelected(b.index));
},
didBecomeActive: function() {
this.firstTime && (this.firstTime = !1, this.setList(0));
},
didFinishTransition: function(a, b) {
this.setList(a.index);
},
didScroll: function(a, c) {
if (c.originator.kindName !== "XV.InfoListPrivate") return;
var d = c.originator, e = d.getScrollBounds().maxTop - d.rowHeight * b, f = {};
d.getIsMore() && d.getScrollPosition() > e && !d.getIsFetching() && (d.setIsFetching(!0), f.showMore = !0, this.fetch(d.owner.name, f));
},
create: function() {
var a, b;
this.inherited(arguments), this.$.leftLabel.setContent(this.label);
for (a = 0; a < this.lists.length; a++) b = this.$.lists.createComponent(this.lists[a]), this.doInfoListAdded(b);
this.$.menu.setCount(this.lists.length);
},
inputChanged: function(a, b) {
var c = this.$.lists.getIndex(), d = this.lists[c].name;
this.fetched = {}, this.fetch(d);
},
itemTap: function(a, b) {
this.setList(b.index);
},
setList: function(a) {
if (this.firstTime) return;
var b = this.lists[a].name;
this.$.menu.isSelected(a) || this.$.menu.select(a), this.selectedList = a, this.$.lists.getIndex() !== a && this.$.lists.setIndex(a), this.$.rightLabel.setContent(this.$.lists.$[b].getLabel()), this.fetched[b] || this.fetch(b);
},
fetch: function(b, c) {
b = b || this.$.lists.getActive().name;
var d = this.$.lists.$[b], e = d.getQuery() || {}, f = this.$.searchInput.getValue(), g = XT.app.$.pullout.getItem(b), h = g ? g.getParameters() : [];
c = c ? _.clone(c) : {}, c.showMore = _.isBoolean(c.showMore) ? c.showMore : !1, f || h.length ? (e.parameters = [], f && (e.parameters = [ {
attribute: d.getCollection().model.getSearchableAttributes(),
operator: "MATCHES",
value: this.$.searchInput.getValue()
} ]), h && (e.parameters = e.parameters.concat(h))) : delete e.parameters, c.showMore ? (e.rowOffset += a, c.add = !0) : (e.rowOffset = 0, e.rowLimit = a), d.setQuery(e), d.fetch(c), this.fetched[b] = !0;
},
requery: function(a, b) {
this.fetch();
},
showDashboard: function() {
this.bubble("dashboard", {
eventName: "dashboard"
});
},
showHistory: function(a, b) {
var c = {
name: "history"
};
this.doTogglePullout(c);
},
showParameters: function(a, b) {
var c = this.$.lists.getActive();
this.doTogglePullout(c);
},
doInfoListRowTapped: function(a, b) {
var c = this.$.lists.index, d = this.$.lists.children[c], e = b.index, f = d.collection.models[e];
return this.bubble("workspace", {
eventName: "workspace",
options: f
}), !0;
},
newWorkspace: function(a, b) {
var c = this.$.lists.controls[this.selectedList].query.recordType, d = new (XM[XV.util.formatModelName(c)]);
d.initialize(null, {
isNew: !0
}), this.bubble("workspace", {
eventName: "workspace",
options: d
});
},
doRefreshInfoObject: function(a, b) {
var c = XV.util.stripModelNamePrefix(b.recordType).camelize(), d = this.name === "setup" ? c + "List" : c + "InfoList", e = this.$.lists.$[d];
if (!e) return;
var f = _.find(e.collection.models, function(a) {
return a.id === b.id;
});
if (!f) return;
f.fetch();
},
warnLogout: function() {
this.$.logoutWarningPopup.show();
},
closeLogoutWarningPopup: function() {
this.$.logoutWarningPopup.hide();
},
logout: function() {
this.$.logoutWarningPopup.hide(), XT.session.logout();
}
});
})();

// pullout.js

(function() {
enyo.kind({
name: "XV.Pullout",
kind: "enyo.Slideable",
classes: "pullout",
value: -100,
min: -100,
unit: "%",
events: {
onHistoryItemSelected: ""
},
published: {
selectedPanel: ""
},
components: [ {
name: "shadow",
classes: "pullout-shadow"
}, {
name: "grabber",
kind: "onyx.Grabber",
classes: "pullout-grabbutton",
ondragfinish: "grabberDragFinish"
}, {
kind: "FittableRows",
classes: "enyo-fit",
components: [ {
name: "client",
classes: "pullout-toolbar"
}, {
name: "pulloutItems",
fit: !0,
style: "position: relative;",
components: [ {
name: "history",
kind: "FittableRows",
showing: !1,
classes: "enyo-fit",
components: [ {
kind: "onyx.RadioGroup",
classes: "history-header",
components: [ {
content: "History",
active: !0
} ]
}, {
fit: !0,
name: "historyPanel",
kind: "Scroller",
classes: "history-scroller",
components: [ {
kind: "Repeater",
name: "historyList",
onSetupItem: "setupHistoryItem",
count: 0,
components: [ {
name: "historyItem"
} ]
} ]
} ]
} ]
} ]
} ],
grabberDragFinish: function() {
this.getSelectedPanel() || this.togglePullout("history");
},
refreshHistoryList: function() {
this.$.historyList.setCount(XT.getHistory().length);
},
setupHistoryItem: function(a, b) {
var c = b.item.$.historyItem, d = XT.getHistory()[b.index], e = ("_" + XV.util.stripModelNamePrefix(d.modelType).camelize()).loc();
this.createComponent({
container: c,
classes: "item enyo-border-box",
style: "color:white",
ontap: "doHistoryItemSelected",
content: e + ": " + d.modelName,
modelType: d.modelType,
modelId: d.modelId,
module: d.module
});
},
getItem: function(a) {
return this.$.pulloutItems.$[a] || this.$[a];
},
togglePullout: function(a) {
this.setSelectedPanel(a);
var b = this.getItem(a), c = this.$.pulloutItems.children, d;
if (b.showing && this.isAtMax()) this.animateToMin(); else {
this.animateToMax();
for (d = 0; d < c.length; d++) c[d].hide();
b.show(), b.resized();
}
}
});
})();

// screen_carousel.js

(function() {
enyo.kind({
name: "XV.ScreenCarousel",
kind: "Panels",
classes: "xt-screen-carousel enyo-unselectable",
draggable: !1,
published: {
currentView: "",
carouselEvents: null
},
previousView: "",
currentViewChanged: function() {
var a = this.children, b = this.getCurrentView(), c = this.$[b], d = a.indexOf(c), e = this.previousView;
if (d === -1) this.log(this.name, "Could not find requested view %@".f(b), this.children, c, this.$), e || e === null ? this.currentView = e : this.currentView = null; else {
if (d === this.getIndex()) return;
this.previousView = b, this.setIndex(d);
}
},
create: function() {
var a = this.getCarouselEvents(), b = this.handlers, c;
if (a) for (c in a) a.hasOwnProperty(c) && (b[c] = "handleCarouselEvent");
this.inherited(arguments);
},
handleCarouselEvent: function(a, b) {
var c = this.getCarouselEvents(), d = b.eventName, e = c[d];
if (e) {
this.setCurrentView(e);
var f = this.$[e];
b.options && f && f.setOptions && f.setOptions(b.options);
}
return !0;
},
completed: function() {
var a;
this.inherited(arguments), a = this.getActive(), a && a.didBecomeActive && a.didBecomeActive();
}
});
})();

// workspace.js

(function() {
enyo.kind({
name: "XV.WorkspacePanels",
kind: "FittableRows",
realtimeFit: !0,
wrap: !1,
classes: "panels enyo-border-box",
published: {
modelType: ""
},
events: {
onValueChanged: ""
},
components: [ {
kind: "Panels",
name: "topPanel",
style: "height: 300px;",
arrangerKind: "CarouselArranger"
}, {
kind: "Panels",
fit: !0,
name: "bottomPanel",
arrangerKind: "CarouselArranger"
} ],
updateLayout: function() {
var a, b, c, d, e;
for (var f = 0; f < XV.util.getWorkspacePanelDescriptor()[this.modelType].length; f++) {
var g = XV.util.getWorkspacePanelDescriptor()[this.modelType][f];
if (g.kind) a = this.createComponent({
kind: g.kind || "XV.InputWidget",
container: g.location === "bottom" ? this.$.bottomPanel : this.$.topPanel,
name: g.title
}), g.customization && a.setCustomization(g.customization), a.setDescriptor(g); else {
a = this.createComponent({
kind: "onyx.Groupbox",
container: g.location === "bottom" ? this.$.bottomPanel : this.$.topPanel,
style: "min-height: 250px; width: 400px; background-color: white; margin-right: 5px;",
components: [ {
kind: "onyx.GroupboxHeader",
content: g.title
} ]
});
for (b = 0; b < g.fields.length; b++) {
c = g.fields[b], e = c.label ? "_" + c.label : "_" + c.fieldName, d = this.createComponent({
kind: "onyx.InputDecorator",
style: "font-size: 12px",
container: a,
components: [ {
tag: "span",
content: e.loc() + ": ",
style: "padding-right: 10px;"
} ]
});
var h = this.createComponent({
kind: c.kind || "XV.InputWidget",
style: "border: 0px; ",
name: c.fieldName,
container: d
});
c.collection && h.setCollection(c.collection);
}
}
}
this.render();
},
gotoBox: function(a) {
var b = 0, c = 0, d;
for (d = 0; d < XV.util.getWorkspacePanelDescriptor()[this.modelType].length; d++) {
var e = XV.util.getWorkspacePanelDescriptor()[this.modelType][d];
if (e.title === a && e.location === "bottom") {
this.$.bottomPanel.setIndex(c);
return;
}
if (e.title === a) {
this.$.topPanel.setIndex(b);
return;
}
e.location === "bottom" ? c++ : b++;
}
},
updateFields: function(a) {
var b, c, d, e, f;
XT.log("update with model: " + a.get("type"));
for (b = 0; b < XV.util.getWorkspacePanelDescriptor()[this.modelType].length; b++) {
var g = XV.util.getWorkspacePanelDescriptor()[this.modelType][b];
if (g.kind) this.$[g.title].setValue(a.getValue(g.objectName)); else for (c = 0; c < g.fields.length; c++) d = g.fields[c], e = g.fields[c].fieldName, f = a.getValue(e) || a.getValue(e) === 0 ? a.getValue(e) : "", e && this.$[e].setValue(f, {
silent: !0
});
}
}
}), enyo.kind({
name: "XV.Workspace",
kind: "Panels",
classes: "app enyo-unselectable",
realtimeFit: !0,
arrangerKind: "CollapsingArranger",
published: {
modelType: "",
model: null
},
events: {
onHistoryChanged: "",
onModelSave: ""
},
handlers: {
onValueChange: "valueChanged",
onSubmodelUpdate: "enableSaveButton"
},
components: [ {
kind: "FittableRows",
classes: "left",
components: [ {
kind: "onyx.Toolbar",
classes: "onyx-menu-toolbar",
components: [ {
name: "workspaceHeader"
}, {
kind: "onyx.MenuDecorator",
components: [ {
content: "_navigation".loc()
}, {
kind: "onyx.Tooltip",
content: "Tap to open..."
}, {
kind: "onyx.Menu",
name: "navigationMenu",
components: [ {
content: "Dashboard"
}, {
content: "CRM"
}, {
content: "Setup"
} ],
ontap: "navigationSelected"
} ]
} ]
}, {
kind: "Repeater",
fit: !0,
touch: !0,
onSetupItem: "setupItem",
name: "menuItems",
components: [ {
name: "item",
classes: "item enyo-border-box",
ontap: "itemTap"
} ]
} ]
}, {
kind: "FittableRows",
components: [ {
kind: "onyx.Toolbar",
components: [ {
content: ""
}, {
kind: "onyx.Button",
name: "saveButton",
disabled: !0,
content: "_save".loc(),
classes: "onyx-affirmative",
onclick: "save"
} ]
}, {
kind: "XV.WorkspacePanels",
name: "workspacePanels",
fit: !0
}, {
name: "exitWarningPopup",
classes: "onyx-sample-popup",
kind: "onyx.Popup",
centered: !0,
modal: !0,
floating: !0,
onShow: "popupShown",
onHide: "popupHidden",
components: [ {
content: "You have unsaved changes. Are you sure you want to leave?"
}, {
tag: "br"
}, {
kind: "onyx.Button",
content: "Leave without saving",
ontap: "forceExit"
}, {
kind: "onyx.Button",
content: "Save and leave",
ontap: "saveAndLeave"
}, {
kind: "onyx.Button",
content: "Don't leave",
ontap: "closeExitWarningPopup"
} ]
} ]
} ],
_exitDestination: null,
bubbleExit: function(a) {
this.bubble(a, {
eventName: a
});
},
closeExitWarningPopup: function() {
this.$.exitWarningPopup.hide();
},
enableSaveButton: function() {
this.$.saveButton.setDisabled(!1);
},
forceExit: function() {
this.closeExitWarningPopup(), this.bubbleExit(this._exitDestination);
},
itemTap: function(a, b) {
var c = XV.util.getWorkspacePanelDescriptor()[this.getModelType()][b.index];
this.$.workspacePanels.gotoBox(c.title);
},
modelDidChange: function(a, b, c) {
var d = a.getStatus(), e = a.getClass();
if (!(d & e.READY)) return;
XT.log("Loading model into workspace: " + JSON.stringify(a.toJSON())), XT.addToHistory("crm", a), this.doHistoryChanged(), this.$.workspacePanels.updateFields(a);
},
navigationSelected: function(a, b) {
var c = b.originator.content.toLowerCase(), d = this.getModel(), e = d.getStatus(), f = d.getClass();
if (e & f.DIRTY) {
this.$.exitWarningPopup.show(), this._exitDestination = c;
return;
}
this.bubbleExit(c);
},
save: function() {
this.getModel().save(), this.$.saveButton.setDisabled(!0);
var a = this.getModel().id, b = this.getModel().recordType;
enyo.Signals.send("onModelSave", {
id: a,
recordType: b
});
},
saveAndLeave: function() {
this.closeExitWarningPopup(), this.save(), this.bubbleExit(this._exitDestination);
},
setupItem: function(a, b) {
var c = XV.util.getWorkspacePanelDescriptor()[this.getModelType()][b.index].title;
return b.item.children[0].setContent(c), !0;
},
setOptions: function(a) {
var b, c, d, e;
this.wipe(), b = XV.util.infoToMasterModelName(a.recordType), this.setModelType(b);
var f = XV.util.stripModelNamePrefix(b).camelize();
this.$.workspaceHeader.setContent(("_" + f).loc()), this.setWorkspaceList(), this.$.menuItems.render(), this.$.workspacePanels.setModelType(b), this.$.workspacePanels.updateLayout(), c = Backbone.Relational.store.getObjectByName(b), d = a.id, e = new c, this.setModel(e), e.on("statusChange", enyo.bind(this, "modelDidChange")), d ? (e.fetch({
id: d
}), XT.log("Workspace is fetching " + b + " " + d)) : (e.initialize(null, {
isNew: !0
}), XT.log("Workspace is fetching new " + b));
},
setWorkspaceList: function() {
var a = XV.util.getWorkspacePanelDescriptor()[this.getModelType()];
this.$.menuItems.setCount(a.length);
},
valueChanged: function(a, b) {
var c = b.value, d = {}, e = this.getModel();
e && (d[b.originator.name] = c, e.set(d), this.enableSaveButton());
},
wipe: function() {
XV.util.removeAll(this.$.workspacePanels.$.topPanel), this.$.workspacePanels.$.topPanel.refresh(), XV.util.removeAll(this.$.workspacePanels.$.bottomPanel), this.$.workspacePanels.$.bottomPanel.refresh();
}
});
})();

// login.js

(function() {
var a = enyo.getCookie("xtsessioncookie"), b = document.location.hostname, c = document.location.pathname;
if (c.match(/login/g)) return;
try {
a = JSON.parse(a);
} catch (d) {
document.location = "https://%@/login".f(b);
}
})();

// postbooks.js

enyo.kind({
name: "XV.Postbooks",
kind: "Control",
classes: "xt-postbooks enyo-unselectable",
components: [ {
name: "container",
kind: "XV.PostbooksContainer"
} ],
getContainer: function() {
return this.$.container;
},
getActiveModule: function() {
return this.getContainer().getActive();
}
}), enyo.kind({
name: "XV.PostbooksContainer",
kind: "XV.ScreenCarousel",
classes: "xt-postbooks-container enyo-unselectable",
components: [ {
name: "dashboard",
kind: "XV.Dashboard"
}, {
name: "crm",
kind: "XV.Crm"
}, {
name: "billing",
kind: "XV.Billing"
}, {
name: "setup",
kind: "XV.Setup"
}, {
name: "workspace",
kind: "XV.Workspace"
} ],
carouselEvents: {
crm: "crm",
billing: "billing",
setup: "setup",
workspace: "workspace",
dashboard: "dashboard"
},
getModuleByName: function(a) {
return this.$[a];
},
applyWorkspace: function(a) {
this.setCurrentView("workspace"), this.$.workspace.setOptions(a);
}
});

// dashboard.js

(function() {
enyo.kind({
name: "XV.Dashboard",
kind: "Control",
classes: "xt-dashboard",
components: [ {
name: "container",
classes: "xt-dashboard-container",
components: [ {
name: "icons",
kind: "XV.DashboardIcons"
} ]
} ]
}), enyo.kind({
name: "XV.DashboardIcons",
classes: "xt-dashboard-icons",
create: function() {
this.inherited(arguments);
var a = this.children.length;
this.applyStyle("width", 134 * a + "px");
},
components: [ {
name: "crm",
kind: "XV.DashboardIcon"
}, {
name: "setup",
kind: "XV.DashboardIcon"
} ]
}), enyo.kind({
name: "XV.DashboardIcon",
kind: "Control",
classes: "xt-dashboard-icon",
tap: function() {
var a = this.name;
this.bubble(a, {
eventName: a
});
},
create: function() {
this.inherited(arguments);
var a = this.name, b = "%@Icon".f(a);
this.createComponent({
name: b,
kind: "Image",
classes: "xt-dashboard-icon-image",
src: "images/" + a + "-icon.png"
}), this.createComponent({
name: "%@Label".f(b),
content: a,
classes: "xt-dashboard-icon-label"
});
}
});
})();

// crm.js

(function() {
enyo.kind({
name: "XV.Crm",
kind: "XV.Module",
label: "_crm".loc(),
lists: [ {
name: "accountInfoList",
kind: "XV.AccountInfoList"
}, {
name: "contactInfoList",
kind: "XV.ContactInfoList"
}, {
name: "toDoInfoList",
kind: "XV.ToDoInfoList"
}, {
name: "opportunityInfoList",
kind: "XV.OpportunityInfoList"
}, {
name: "incidentInfoList",
kind: "XV.IncidentInfoList"
}, {
name: "projectInfoList",
kind: "XV.ProjectInfoList"
} ]
});
})();

// billing.js

(function() {
enyo.kind({
name: "XV.Billing",
kind: "XV.Module",
label: "_billing".loc(),
lists: []
});
})();

// setup.js

(function() {
enyo.kind({
name: "XV.Setup",
kind: "XV.Module",
label: "_setup".loc(),
lists: [ {
name: "stateList",
kind: "XV.StateList"
}, {
name: "countryList",
kind: "XV.CountryList"
}, {
name: "priorityList",
kind: "XV.PriorityList"
}, {
name: "honorificList",
kind: "XV.HonorificList"
}, {
name: "incidentCategoryList",
kind: "XV.IncidentCategoryList"
}, {
name: "incidentResoulutionList",
kind: "XV.IncidentResolutionList"
}, {
name: "incidentSeverityList",
kind: "XV.IncidentSeverityList"
}, {
name: "opportunitySourceList",
kind: "XV.OpportunitySourceList"
}, {
name: "opportunityStageList",
kind: "XV.OpportunityStageList"
}, {
name: "opportunityTypeList",
kind: "XV.OpportunityTypeList"
} ]
});
})();

// login_form.js

enyo.kind({
name: "XV.LoginForm",
classes: "xv-login-form onyx",
create: function() {
var a = enyo.getCookie("xtsessioncookie");
this.inherited(arguments);
if (!a) return;
a = JSON.parse(a), this.$.id.setValue(a.id);
},
send: function() {
var a = this.getCredentials(), b;
b = new enyo.Ajax({
url: "authenticate",
method: "POST"
}), b.go(JSON.stringify(a)), b.response(this, "didReceiveResponse");
},
getCredentials: function() {
return {
id: this.$.id.getValue(),
password: this.$.password.getValue()
};
},
didReceiveResponse: function(a, b) {
if (b.isError) {
this.$.messageBox.addRemoveClass("error", !0), this.$.messageBox.setContent(b.reason);
return;
}
this.$.messageBox.addRemoveClass("error", !1), this.$.messageBox.setContent("success!"), app.setCookie(b), app.setSession(b), app.$.organizations.setOrganizations(b.organizations), app.setCurrentView("organizationWrapper");
},
components: [ {
name: "box",
kind: "onyx.Groupbox",
components: [ {
name: "header",
kind: "onyx.GroupboxHeader",
content: "_pleaseLogin".loc()
}, {
kind: "onyx.InputDecorator",
components: [ {
name: "id",
kind: "onyx.Input",
placeholder: "_id".loc()
} ]
}, {
kind: "onyx.InputDecorator",
components: [ {
name: "password",
kind: "onyx.Input",
type: "password",
placeholder: "_password".loc()
} ]
}, {
kind: "onyx.Button",
content: "Login",
ontap: "send"
} ]
}, {
name: "messageBox",
classes: "xv-message-box"
} ]
});

// organization_selection.js

enyo.kind({
name: "XV.OrganizationSelection",
classes: "xv-organizations-selection",
published: {
organizations: null
},
components: [ {
kind: "onyx.Toolbar",
content: "_selectOrganization".loc()
}, {
name: "list",
kind: "List",
onSetupItem: "setupItem",
components: [ {
name: "item",
ontap: "rowTapped",
classes: "xv-organization-row"
} ]
} ],
setupItem: function(a, b) {
var c = b.index, d = this.getOrganizations()[c].name;
this.$.item.setContent(d);
},
rowTapped: function(a, b) {
var c = b.index, d, e, f = app.getSession();
d = this.getOrganizations()[c].name, e = new enyo.Ajax({
url: "selection",
method: "POST"
}), f.selected = d, e.go(JSON.stringify(f)), e.response(this, "didReceiveResponse");
},
didReceiveResponse: function(a, b) {
this.log(b), b.isError ? console.warn("NO HANDLER YET BUT THERE WAS AN ERROR: ", b) : (app.setCookie(b), document.location = b.loc);
},
organizationsChanged: function() {
var a = this.getOrganizations();
this.$.list.setCount(a.length), this.$.list.reset();
}
});

// app.js

enyo.kind({
name: "App",
classes: "xv-login onyx",
kind: "XV.ScreenCarousel",
fit: !0,
published: {
session: null
},
carouselEvents: {
organizations: "organizationWrapper"
},
create: function() {
this.inherited(arguments), window.app = this;
},
setCookie: function(a) {
enyo.setCookie("xtsessioncookie", JSON.stringify(a), {
secure: !0,
path: "/",
domain: document.location.hostname === "localhost" ? "" : "." + document.location.hostname
});
},
components: [ {
name: "formWrapper",
components: [ {
name: "form",
kind: "XV.LoginForm"
} ]
}, {
name: "organizationWrapper",
components: [ {
name: "organizations",
kind: "XV.OrganizationSelection"
} ]
} ]
});

// startup.js

(function() {
var a = enyo.getCookie("xtsessioncookie"), b, c;
c = function() {
(new App).renderInto(document.body);
}, b = function(a) {
var b, d = new enyo.Ajax({
url: "/session",
method: "POST"
});
d.go(a), d.response(function(a, d) {
d && d.code && d.code === 1 ? (b = document.location.hostname, document.location = "http://%@/client".f(b)) : c();
});
}, a ? b(a) : c();
})();
