/*! For license information please see iframe-index.bundle.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            d = o.indexOf,
            u = {},
            p = u.toString,
            h = u.hasOwnProperty,
            g = h.toString,
            m = g.call(Object),
            f = {},
            y = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            _ = function (e) {
              return null != e && e === e.window;
            },
            v = i.document,
            b = {
              type: !0,
              src: !0,
              nonce: !0,
              noModule: !0,
            };
          function x(e, t, n) {
            var i,
              r,
              o = (n = n || v).createElement("script");
            if (((o.text = e), t))
              for (i in b)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function w(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var E = "3.6.4",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = w(e);
            return (
              !y(e) &&
              !_(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: E,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === l && ((a = this), s--);
                  s < l;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          a !== i &&
                          (c &&
                          i &&
                          (C.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = a[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (a[t] = C.extend(c, o, i)))
                            : void 0 !== i && (a[t] = i));
                return a;
              }),
            C.extend({
              expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = h.call(t, "constructor") && t.constructor) ||
                      g.call(n) !== m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(
                  e,
                  {
                    nonce: t && t.nonce,
                  },
                  n
                );
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (k(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                  !t(e[r], r) !== a && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  a = [];
                if (k(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return l(a);
              },
              guid: 1,
              support: f,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var L = (function (e) {
            var t,
              n,
              i,
              r,
              o,
              a,
              s,
              l,
              c,
              d,
              u,
              p,
              h,
              g,
              m,
              f,
              y,
              _,
              v,
              b = "sizzle" + 1 * new Date(),
              x = e.document,
              w = 0,
              E = 0,
              C = le(),
              k = le(),
              L = le(),
              T = le(),
              N = function (e, t) {
                return e === t && (u = !0), 0;
              },
              A = {}.hasOwnProperty,
              M = [],
              B = M.pop,
              S = M.push,
              I = M.push,
              $ = M.slice,
              H = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              D =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              F = "[\\x20\\t\\r\\n\\f]",
              j =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              q =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                j +
                ")(?:" +
                F +
                "*([*^$|!~]?=)" +
                F +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                j +
                "))|)" +
                F +
                "*\\]",
              U =
                ":(" +
                j +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                q +
                ")*)|.*)\\)|)",
              R = new RegExp(F + "+", "g"),
              P = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              O = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              z = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              Z = new RegExp(F + "|>"),
              V = new RegExp(U),
              W = new RegExp("^" + j + "$"),
              G = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + U),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + D + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              X = /HTML$/i,
              Y = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                p();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                {
                  dir: "parentNode",
                  next: "legend",
                }
              );
            try {
              I.apply((M = $.call(x.childNodes)), x.childNodes),
                M[x.childNodes.length].nodeType;
            } catch (e) {
              I = {
                apply: M.length
                  ? function (e, t) {
                      S.apply(e, $.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, i, r) {
              var o,
                s,
                c,
                d,
                u,
                g,
                y,
                _ = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (p(t), (t = t || h), m)) {
                if (11 !== x && (u = K.exec(e)))
                  if ((o = u[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(o))) return i;
                      if (c.id === o) return i.push(c), i;
                    } else if (
                      _ &&
                      (c = _.getElementById(o)) &&
                      v(t, c) &&
                      c.id === o
                    )
                      return i.push(c), i;
                  } else {
                    if (u[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return I.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (
                  n.qsa &&
                  !T[e + " "] &&
                  (!f || !f.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (_ = t), 1 === x && (Z.test(e) || z.test(e)))) {
                    for (
                      ((_ = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(ie, re))
                          : t.setAttribute("id", (d = b))),
                        s = (g = a(e)).length;
                      s--;

                    )
                      g[s] = (d ? "#" + d : ":scope") + " " + ve(g[s]);
                    y = g.join(",");
                  }
                  try {
                    return I.apply(i, _.querySelectorAll(y)), i;
                  } catch (t) {
                    T(e, !0);
                  } finally {
                    d === b && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(P, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[b] = !0), e;
            }
            function de(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function fe(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                      n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !X.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  r,
                  a = e ? e.ownerDocument || e : x;
                return a != h && 9 === a.nodeType && a.documentElement
                  ? ((g = (h = a).documentElement),
                    (m = !o(h)),
                    x != h &&
                      (r = h.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", oe, !1)
                        : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = de(function (e) {
                      return (
                        g.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.cssHas = de(function () {
                      try {
                        return h.querySelector(":has(*,:jqfake)"), !1;
                      } catch (e) {
                        return !0;
                      }
                    })),
                    (n.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = de(function (e) {
                      return (
                        (g.appendChild(e).id = b),
                        !h.getElementsByName || !h.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              i,
                              r,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (o = r[i++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (f = []),
                    (n.qsa = J.test(h.querySelectorAll)) &&
                      (de(function (e) {
                        var t;
                        (g.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            f.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            f.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + D + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            f.push("~="),
                          (t = h.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            f.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            f.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            f.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          f.push("[\\r\\n\\f]");
                      }),
                      de(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            f.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            f.push(":enabled", ":disabled"),
                          (g.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            f.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          f.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (_ =
                        g.matches ||
                        g.webkitMatchesSelector ||
                        g.mozMatchesSelector ||
                        g.oMatchesSelector ||
                        g.msMatchesSelector)
                    )) &&
                      de(function (e) {
                        (n.disconnectedMatch = _.call(e, "*")),
                          _.call(e, "[s!='']:x"),
                          y.push("!=", U);
                      }),
                    n.cssHas || f.push(":has"),
                    (f = f.length && new RegExp(f.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (t = J.test(g.compareDocumentPosition)),
                    (v =
                      t || J.test(g.contains)
                        ? function (e, t) {
                            var n =
                                (9 === e.nodeType && e.documentElement) || e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == h || (e.ownerDocument == x && v(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && v(x, t))
                                ? 1
                                : d
                                ? H(d, e) - H(d, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!r || !o)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : d
                              ? H(d, e) - H(d, t)
                              : 0;
                          if (r === o) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[i] === s[i]; ) i++;
                          return i
                            ? pe(a[i], s[i])
                            : a[i] == x
                            ? -1
                            : s[i] == x
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  m &&
                  !T[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!f || !f.test(t)))
              )
                try {
                  var i = _.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  T(t, !0);
                }
              return se(t, h, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != h && p(e), v(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != h && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && A.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !m)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((u = !n.detectDuplicates),
                (d = !n.sortStable && e.slice(0)),
                e.sort(N),
                u)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (d = null), e;
            }),
            (r = se.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  ">": {
                    dir: "parentNode",
                    first: !0,
                  },
                  " ": {
                    dir: "parentNode",
                  },
                  "+": {
                    dir: "previousSibling",
                    first: !0,
                  },
                  "~": {
                    dir: "previousSibling",
                  },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + F + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = se.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            h,
                            g,
                            m = o !== a ? "nextSibling" : "previousSibling",
                            f = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            _ = !l && !s,
                            v = !1;
                          if (f) {
                            if (o) {
                              for (; m; ) {
                                for (p = t; (p = p[m]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                g = m = "only" === e && !g && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((g = [a ? f.firstChild : f.lastChild]), a && _)
                            ) {
                              for (
                                v =
                                  (h =
                                    (c =
                                      (d =
                                        (u = (p = f)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === w && c[1]) && c[2],
                                  p = h && f.childNodes[h];
                                (p =
                                  (++h && p && p[m]) || (v = h = 0) || g.pop());

                              )
                                if (1 === p.nodeType && ++v && p === t) {
                                  d[e] = [w, h, v];
                                  break;
                                }
                            } else if (
                              (_ &&
                                (v = h =
                                  (c =
                                    (d =
                                      (u = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
                                    [])[0] === w && c[1]),
                              !1 === v)
                            )
                              for (
                                ;
                                (p =
                                  (++h && p && p[m]) ||
                                  (v = h = 0) ||
                                  g.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== y
                                  : 1 !== p.nodeType) ||
                                  !++v ||
                                  (_ &&
                                    ((d =
                                      (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [w, v]),
                                  p !== t));

                              );
                            return (v -= r) === i || (v % i == 0 && v / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return r[b]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, o = r(e, t), a = o.length; a--; )
                                e[(i = H(e, o[a]))] = !(n[i] = o[a]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = s(e.replace(P, "$1"));
                    return i[b]
                      ? ce(function (e, t, n, r) {
                          for (
                            var o, a = i(e, null, r, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      W.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === g;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return Y.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: fe(function () {
                    return [0];
                  }),
                  last: fe(function (e, t) {
                    return [t - 1];
                  }),
                  eq: fe(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: fe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: fe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: fe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: fe(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            }))
              i.pseudos[t] = he(t);
            for (t in {
              submit: !0,
              reset: !0,
            })
              i.pseudos[t] = ge(t);
            function _e() {}
            function ve(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function be(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = E++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || a) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [w, s];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((d =
                              (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = d[o]) && c[0] === w && c[1] === s)
                              return (p[2] = c[2]);
                            if (((d[o] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function we(e, t, n, i, r) {
              for (
                var o, a = [], s = 0, l = e.length, c = null != t;
                s < l;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, i, r)) || (a.push(o), c && t.push(s)));
              return a;
            }
            function Ee(e, t, n, i, r, o) {
              return (
                i && !i[b] && (i = Ee(i)),
                r && !r[b] && (r = Ee(r, o)),
                ce(function (o, a, s, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    h = [],
                    g = a.length,
                    m =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          se(e, t[i], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    f = !e || (!o && t) ? m : we(m, p, e, s, l),
                    y = n ? (r || (o ? e : g || i) ? [] : a) : f;
                  if ((n && n(f, y, s, l), i))
                    for (c = we(y, h), i(c, [], s, l), d = c.length; d--; )
                      (u = c[d]) && (y[h[d]] = !(f[h[d]] = u));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (c = [], d = y.length; d--; )
                          (u = y[d]) && c.push((f[d] = u));
                        r(null, (y = []), c, l);
                      }
                      for (d = y.length; d--; )
                        (u = y[d]) &&
                          (c = r ? H(o, u) : p[d]) > -1 &&
                          (o[c] = !(a[c] = u));
                    }
                  } else (y = we(y === a ? y.splice(g, y.length) : y)), r ? r(null, a, y, l) : I.apply(a, y);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  a = i.relative[e[0].type],
                  s = a || i.relative[" "],
                  l = a ? 1 : 0,
                  d = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  u = be(
                    function (e) {
                      return H(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!a && (i || n !== c)) ||
                        ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [be(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return Ee(
                      l > 1 && xe(p),
                      l > 1 &&
                        ve(
                          e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : "",
                          })
                        ).replace(P, "$1"),
                      n,
                      l < r && Ce(e.slice(l, r)),
                      r < o && Ce((e = e.slice(r))),
                      r < o && ve(e)
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (_e.prototype = i.filters = i.pseudos),
              (i.setFilters = new _e()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    c,
                    d = k[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (s = e, l = [], c = i.preFilter; s; ) {
                    for (a in ((n && !(r = O.exec(s))) ||
                      (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                    (n = !1),
                    (r = z.exec(s)) &&
                      ((n = r.shift()),
                      o.push({
                        value: n,
                        type: r[0].replace(P, " "),
                      }),
                      (s = s.slice(n.length))),
                    i.filter))
                      !(r = G[a].exec(s)) ||
                        (c[a] && !(r = c[a](r))) ||
                        ((n = r.shift()),
                        o.push({
                          value: n,
                          type: a,
                          matches: r,
                        }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : k(e, l).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    s = L[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ce(t[n]))[b] ? r.push(s) : o.push(s);
                    (s = L(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          o = function (o, a, s, l, d) {
                            var u,
                              g,
                              f,
                              y = 0,
                              _ = "0",
                              v = o && [],
                              b = [],
                              x = c,
                              E = o || (r && i.find.TAG("*", d)),
                              C = (w += null == x ? 1 : Math.random() || 0.1),
                              k = E.length;
                            for (
                              d && (c = a == h || a || d);
                              _ !== k && null != (u = E[_]);
                              _++
                            ) {
                              if (r && u) {
                                for (
                                  g = 0,
                                    a ||
                                      u.ownerDocument == h ||
                                      (p(u), (s = !m));
                                  (f = e[g++]);

                                )
                                  if (f(u, a || h, s)) {
                                    l.push(u);
                                    break;
                                  }
                                d && (w = C);
                              }
                              n && ((u = !f && u) && y--, o && v.push(u));
                            }
                            if (((y += _), n && _ !== y)) {
                              for (g = 0; (f = t[g++]); ) f(v, b, a, s);
                              if (o) {
                                if (y > 0)
                                  for (; _--; )
                                    v[_] || b[_] || (b[_] = B.call(l));
                                b = we(b);
                              }
                              I.apply(l, b),
                                d &&
                                  !o &&
                                  b.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(l);
                            }
                            return d && ((w = C), (c = x)), v;
                          };
                        return n ? ce(o) : o;
                      })(o, r)
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (l = se.select =
                function (e, t, n, r) {
                  var o,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    h = !r && a((e = p.selector || e));
                  if (((n = n || []), 1 === h.length)) {
                    if (
                      (l = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = G.needsContext.test(e) ? 0 : l.length;
                      o-- && ((c = l[o]), !i.relative[(d = c.type)]);

                    )
                      if (
                        (u = i.find[d]) &&
                        (r = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = r.length && ve(l))))
                          return I.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, h))(
                      r,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(D, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              se
            );
          })(i);
          (C.find = L),
            (C.expr = L.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = L.uniqueSort),
            (C.text = L.getText),
            (C.isXMLDoc = L.isXML),
            (C.contains = L.contains),
            (C.escapeSelector = L.escape);
          var T = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = C.expr.match.needsContext;
          function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var B =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function S(e, t, n) {
            return y(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, r[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(S(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(S(this, e || [], !0));
              },
              is: function (e) {
                return !!S(
                  this,
                  "string" == typeof e && A.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var I,
            $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || I), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : $.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : v,
                      !0
                    )
                  ),
                  B.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = v.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (I = C(v));
          var H = /^(?:parents|prev(?:Until|All))/,
            D = {
              children: !0,
              contents: !0,
              next: !0,
              prev: !0,
            };
          function F(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && C(e);
              if (!A.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(C(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return T(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return T(e, "parentNode", n);
                },
                next: function (e) {
                  return F(e, "nextSibling");
                },
                prev: function (e) {
                  return F(e, "previousSibling");
                },
                nextAll: function (e) {
                  return T(e, "nextSibling");
                },
                prevAll: function (e) {
                  return T(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return T(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return T(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (M(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var r = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = C.filter(i, r)),
                    this.length > 1 &&
                      (D[e] || C.uniqueSort(r), H.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var j = /[^\x20\t\r\n\f]+/g;
          function q(e) {
            return e;
          }
          function U(e) {
            throw e;
          }
          function R(e, t, n, i) {
            var r;
            try {
              e && y((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && y((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(j) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              a = [],
              s = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          y(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== w(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var r = y(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function a(e, t, n, r) {
                        return function () {
                          var s = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < o)) {
                                if ((i = n.apply(s, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  y(c)
                                    ? r
                                      ? c.call(i, a(o, t, q, r), a(o, t, U, r))
                                      : (o++,
                                        c.call(
                                          i,
                                          a(o, t, q, r),
                                          a(o, t, U, r),
                                          a(o, t, q, t.notifyWith)
                                        ))
                                    : (n !== q && ((s = void 0), (l = [i])),
                                      (r || t.resolveWith)(s, l));
                              }
                            },
                            d = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, d.stackTrace),
                                      e + 1 >= o &&
                                        (n !== U && ((s = void 0), (l = [i])),
                                        t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? d()
                            : (C.Deferred.getStackHook &&
                                (d.stackTrace = C.Deferred.getStackHook()),
                              i.setTimeout(d));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(a(0, i, y(r) ? r : q, i.notifyWith)),
                          t[1][3].add(a(0, i, y(e) ? e : q)),
                          t[2][3].add(a(0, i, y(n) ? n : U));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, i) {
                    var a = i[2],
                      s = i[5];
                    (r[i[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = a.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = s.call(arguments),
                  o = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (R(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || y(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) R(r[n], a(n), o.reject);
                return o.promise();
              },
            });
          var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              P.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var O = C.Deferred();
          function z() {
            v.removeEventListener("DOMContentLoaded", z),
              i.removeEventListener("load", z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              O.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || O.resolveWith(v, [C]));
              },
            }),
            (C.ready.then = O.then),
            "complete" === v.readyState ||
            ("loading" !== v.readyState && !v.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (v.addEventListener("DOMContentLoaded", z),
                i.addEventListener("load", z));
          var Z = function (e, t, n, i, r, o, a) {
              var s = 0,
                l = e.length,
                c = null == n;
              if ("object" === w(n))
                for (s in ((r = !0), n)) Z(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== i &&
                ((r = !0),
                y(i) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(C(e), n);
                      }))),
                t)
              )
                for (; s < l; s++)
                  t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            V = /^-ms-/,
            W = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(V, "ms-").replace(W, G);
          }
          var Y = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = C.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Y(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[X(t)] = n;
                else for (i in t) r[X(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in i
                      ? [t]
                      : t.match(j) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var J = new Q(),
            K = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                K.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return K.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return K.access(e, t, n);
            },
            removeData: function (e, t) {
              K.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = K.get(o)),
                    1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (i = a[n].name).indexOf("data-") &&
                        ((i = X(i.slice(5))), ne(o, i, r[i]));
                    J.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      K.set(this, e);
                    })
                  : Z(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = K.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          K.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  K.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = J.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = J.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = C.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = J.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(s));
                return s(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = v.documentElement,
            se = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            le = {
              composed: !0,
            };
          ae.getRootNode &&
            (se = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function de(e, t, n, i) {
            var r,
              o,
              a = 20,
              s = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              l = s(),
              c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(C.css(e, t));
            if (d && d[3] !== c) {
              for (l /= 2, c = c || d[3], d = +l || 1; a--; )
                C.style(e, t, d + c),
                  (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
                  (d /= o);
              (d *= 2), C.style(e, t, d + c), (n = n || []);
            }
            return (
              n &&
                ((d = +d || +l || 0),
                (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = d), (i.end = r))),
              r
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = ue[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (ue[i] = r),
              r)
            );
          }
          function he(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = J.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[o] = pe(i)))
                  : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
            for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var ge,
            me,
            fe = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            _e = /^$|^module$|\/(?:java|ecma)script/i;
          (ge = v.createDocumentFragment().appendChild(v.createElement("div"))),
            (me = v.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            ge.appendChild(me),
            (f.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ge.innerHTML = "<textarea>x</textarea>"),
            (f.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue),
            (ge.innerHTML = "<option></option>"),
            (f.option = !!ge.lastChild);
          var ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && M(e, t)) ? C.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
            (ve.th = ve.td),
            f.option ||
              (ve.optgroup = ve.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var we = /<|&#?\w+;/;
          function Ee(e, t, n, i, r) {
            for (
              var o,
                a,
                s,
                l,
                c,
                d,
                u = t.createDocumentFragment(),
                p = [],
                h = 0,
                g = e.length;
              h < g;
              h++
            )
              if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) C.merge(p, o.nodeType ? [o] : o);
                else if (we.test(o)) {
                  for (
                    a = a || u.appendChild(t.createElement("div")),
                      s = (ye.exec(o) || ["", ""])[1].toLowerCase(),
                      l = ve[s] || ve._default,
                      a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                      d = l[0];
                    d--;

                  )
                    a = a.lastChild;
                  C.merge(p, a.childNodes),
                    ((a = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (u.textContent = "", h = 0; (o = p[h++]); )
              if (i && C.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = se(o)),
                (a = be(u.appendChild(o), "script")),
                c && xe(a),
                n)
              )
                for (d = 0; (o = a[d++]); ) _e.test(o.type || "") && n.push(o);
            return u;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function ke() {
            return !0;
          }
          function Le() {
            return !1;
          }
          function Te(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return v.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ne(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ne(e, s, n, i, t[s], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Le;
            else if (!r) return e;
            return (
              1 === o &&
                ((a = r),
                (r = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }),
                (r.guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, r, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (J.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        J.set(this, t, o),
                        (i = n(this, t)),
                        this[t](),
                        o !== (r = J.get(this, t)) || i
                          ? J.set(this, t, !1)
                          : (r = {}),
                        o !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      o.length &&
                        (J.set(this, t, {
                          value: C.event.trigger(
                            C.extend(o[0], C.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && C.event.add(e, t, ke);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                a,
                s,
                l,
                c,
                d,
                u,
                p,
                h,
                g,
                m,
                f = J.get(e);
              if (Y(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && C.find.matchesSelector(ae, r),
                    n.guid || (n.guid = C.guid++),
                    (l = f.events) || (l = f.events = Object.create(null)),
                    (a = f.handle) ||
                      (a = f.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(j) || [""]).length;
                  c--;

                )
                  (h = m = (s = Ce.exec(t[c]) || [])[1]),
                    (g = (s[2] || "").split(".").sort()),
                    h &&
                      ((u = C.event.special[h] || {}),
                      (h = (r ? u.delegateType : u.bindType) || h),
                      (u = C.event.special[h] || {}),
                      (d = C.extend(
                        {
                          type: h,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && C.expr.match.needsContext.test(r),
                          namespace: g.join("."),
                        },
                        o
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, i, g, a)) ||
                          (e.addEventListener && e.addEventListener(h, a))),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (C.event.global[h] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                a,
                s,
                l,
                c,
                d,
                u,
                p,
                h,
                g,
                m,
                f = J.hasData(e) && J.get(e);
              if (f && (l = f.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--; )
                  if (
                    ((h = m = (s = Ce.exec(t[c]) || [])[1]),
                    (g = (s[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      u = C.event.special[h] || {},
                        p =
                          l[(h = (i ? u.delegateType : u.bindType) || h)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = p.length;
                      o--;

                    )
                      (d = p[o]),
                        (!r && m !== d.origType) ||
                          (n && n.guid !== d.guid) ||
                          (s && !s.test(d.namespace)) ||
                          (i &&
                            i !== d.selector &&
                            ("**" !== i || !d.selector)) ||
                          (p.splice(o, 1),
                          d.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, d));
                    a &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, g, f.handle)) ||
                        C.removeEvent(e, h, f.handle),
                      delete l[h]);
                  } else for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s = new Array(arguments.length),
                l = C.event.fix(e),
                c =
                  (J.get(this, "events") || Object.create(null))[l.type] || [],
                d = C.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  a = C.event.handlers.call(this, l, c), t = 0;
                  (r = a[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, s)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < l; n++)
                      void 0 === a[(r = (i = t[n]).selector + " ")] &&
                        (a[r] = i.needsContext
                          ? C(r, this).index(c) > -1
                          : C.find(r, this, null, [c]).length),
                        a[r] && o.push(i);
                    o.length &&
                      s.push({
                        elem: c,
                        handlers: o,
                      });
                  }
              return (
                (c = this),
                l < t.length &&
                  s.push({
                    elem: c,
                    handlers: t.slice(l),
                  }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: {
                noBubble: !0,
              },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    fe.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click", ke),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    fe.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (fe.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      J.get(t, "click")) ||
                    M(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? ke
                      : Le),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: Le,
              isPropagationStopped: Le,
              isImmediatePropagationStopped: Le,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp
            ),
            C.each(
              {
                focus: "focusin",
                blur: "focusout",
              },
              function (e, t) {
                C.event.special[e] = {
                  setup: function () {
                    return Ae(this, e, Te), !1;
                  },
                  trigger: function () {
                    return Ae(this, e), !0;
                  },
                  _default: function (t) {
                    return J.get(t.target, e);
                  },
                  delegateType: t,
                };
              }
            ),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === i || C.contains(i, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Ne(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ne(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Le),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Me = /<script|<style|<link/i,
            Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Se = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Ie(e, t) {
            return (
              (M(e, "table") &&
                M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function $e(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function He(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function De(e, t) {
            var n, i, r, o, a, s;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (s = J.get(e).events))
                for (r in (J.remove(t, "handle events"), s))
                  for (n = 0, i = s[r].length; n < i; n++)
                    C.event.add(t, r, s[r][n]);
              K.hasData(e) &&
                ((o = K.access(e)), (a = C.extend({}, o)), K.set(t, a));
            }
          }
          function Fe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && fe.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function je(e, t, n, i) {
            t = l(t);
            var r,
              o,
              a,
              s,
              c,
              d,
              u = 0,
              p = e.length,
              h = p - 1,
              g = t[0],
              m = y(g);
            if (
              m ||
              (p > 1 && "string" == typeof g && !f.checkClone && Be.test(g))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                m && (t[0] = g.call(this, r, o.html())), je(o, t, n, i);
              });
            if (
              p &&
              ((o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (s = (a = C.map(be(r, "script"), $e)).length; u < p; u++)
                (c = r),
                  u !== h &&
                    ((c = C.clone(c, !0, !0)),
                    s && C.merge(a, be(c, "script"))),
                  n.call(e[u], c, u);
              if (s)
                for (
                  d = a[a.length - 1].ownerDocument, C.map(a, He), u = 0;
                  u < s;
                  u++
                )
                  (c = a[u]),
                    _e.test(c.type || "") &&
                      !J.access(c, "globalEval") &&
                      C.contains(d, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !c.noModule &&
                          C._evalUrl(
                            c.src,
                            {
                              nonce: c.nonce || c.getAttribute("nonce"),
                            },
                            d
                          )
                        : x(c.textContent.replace(Se, ""), c, d));
            }
            return e;
          }
          function qe(e, t, n) {
            for (
              var i, r = t ? C.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || C.cleanData(be(i)),
                i.parentNode &&
                  (n && se(i) && xe(be(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                a,
                s = e.cloneNode(!0),
                l = se(e);
              if (
                !(
                  f.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = be(s), i = 0, r = (o = be(e)).length; i < r; i++)
                  Fe(o[i], a[i]);
              if (t)
                if (n)
                  for (
                    o = o || be(e), a = a || be(s), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    De(o[i], a[i]);
                else De(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  xe(a, !l && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Y(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[K.expando] && (n[K.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return qe(this, e, !0);
              },
              remove: function (e) {
                return qe(this, e);
              },
              text: function (e) {
                return Z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return je(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Ie(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return je(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return je(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return je(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return Z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Me.test(e) &&
                      !ve[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return je(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], r = C(e), o = r.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      C(r[a])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Ue = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Re = /^--/,
            Pe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Oe = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            ze = new RegExp(oe.join("|"), "i"),
            Ze = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g"
            );
          function Ve(e, t, n) {
            var i,
              r,
              o,
              a,
              s = Re.test(t),
              l = e.style;
            return (
              (n = n || Pe(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(Ze, "$1") || void 0),
                "" !== a || se(e) || (a = C.style(e, t)),
                !f.pixelBoxStyles() &&
                  Ue.test(a) &&
                  ze.test(t) &&
                  ((i = l.width),
                  (r = l.minWidth),
                  (o = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = a),
                  (a = n.width),
                  (l.width = i),
                  (l.minWidth = r),
                  (l.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function We(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(c).appendChild(d);
                var e = i.getComputedStyle(d);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (o = 12 === t(d.offsetWidth / 3)),
                  ae.removeChild(c),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              a,
              s,
              l,
              c = v.createElement("div"),
              d = v.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (f.clearCloneStyle = "content-box" === d.style.backgroundClip),
              C.extend(f, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == s &&
                      ((e = v.createElement("table")),
                      (t = v.createElement("tr")),
                      (n = v.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (s =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Xe = v.createElement("div").style,
            Ye = {};
          function Qe(e) {
            return (
              C.cssProps[e] ||
              Ye[e] ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Je = /^(none|table(?!-c[ea]).+)/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            et = {
              letterSpacing: "0",
              fontWeight: "400",
            };
          function tt(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function nt(e, t, n, i, r, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += C.css(e, n + oe[a], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= C.css(e, "padding" + oe[a], !0, r)),
                    "margin" !== n &&
                      (l -= C.css(e, "border" + oe[a] + "Width", !0, r)))
                  : ((l += C.css(e, "padding" + oe[a], !0, r)),
                    "padding" !== n
                      ? (l += C.css(e, "border" + oe[a] + "Width", !0, r))
                      : (s += C.css(e, "border" + oe[a] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        s -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, n) {
            var i = Pe(e),
              r =
                (!f.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              o = r,
              a = Ve(e, t, i),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!f.boxSizingReliable() && r) ||
                (!f.reliableTrDimensions() && M(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                nt(e, t, n || (r ? "border" : "content"), o, i, a) +
                "px"
            );
          }
          function rt(e, t, n, i, r) {
            return new rt.prototype.init(e, t, n, i, r);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  a,
                  s = X(t),
                  l = Re.test(t),
                  c = e.style;
                if (
                  (l || (t = Qe(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                    ? r
                    : c[t];
                "string" == (o = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = de(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (C.cssNumber[s] ? "" : "px")),
                    f.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                a,
                s = X(t);
              return (
                Re.test(t) || (t = Qe(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  "get" in a &&
                  (r = a.get(e, !0, n)),
                void 0 === r && (r = Ve(e, t, i)),
                "normal" === r && t in et && (r = et[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Je.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, i)
                      : Oe(e, Ke, function () {
                          return it(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Pe(e),
                    a = !f.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                    l = i ? nt(e, t, i, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          nt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    tt(0, n, l)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = We(f.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Oe(
                        e,
                        {
                          marginLeft: 0,
                        },
                        function () {
                          return e.getBoundingClientRect().left;
                        }
                      )) + "px"
                );
            })),
            C.each(
              {
                margin: "",
                padding: "",
                border: "Width",
              },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = tt);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return Z(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (i = Pe(e), r = t.length; a < r; a++)
                        o[t[a]] = C.css(e, t[a], !1, i);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = rt.prototype.init),
            (C.fx.step = {});
          var ot,
            at,
            st = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
          function ct() {
            at &&
              (!1 === v.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(ct)
                : i.setTimeout(ct, C.fx.interval),
              C.fx.tick());
          }
          function dt() {
            return (
              i.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = {
                height: e,
              };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function pt(e, t, n) {
            for (
              var i,
                r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                o = 0,
                a = r.length;
              o < a;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function ht(e, t, n) {
            var i,
              r,
              o = 0,
              a = ht.prefilters.length,
              s = C.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = ot || dt(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    a = c.tweens.length;
                  o < a;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  s.notifyWith(e, [c, i, n]),
                  i < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  {
                    specialEasing: {},
                    easing: C.easing._default,
                  },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              d = c.props;
            for (
              (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                  if (
                    ((r = t[(i = X(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (a = C.cssHooks[i]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(d, c.opts.specialEasing);
              o < a;
              o++
            )
              if ((i = ht.prefilters[o].call(c, e, d, c.opts)))
                return (
                  y(i.stop) &&
                    (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(d, pt, c),
              y(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              C.fx.timer(
                C.extend(l, {
                  elem: e,
                  anim: c,
                  queue: c.opts.queue,
                })
              ),
              c
            );
          }
          (C.Animation = C.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  c,
                  d,
                  u = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  g = e.style,
                  m = e.nodeType && ce(e),
                  f = J.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (a = C._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), st.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !f || void 0 === f[i]) continue;
                      m = !0;
                    }
                    h[i] = (f && f[i]) || C.style(e, i);
                  }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [g.overflow, g.overflowX, g.overflowY]),
                    null == (c = f && f.display) && (c = J.get(e, "display")),
                    "none" === (d = C.css(e, "display")) &&
                      (c
                        ? (d = c)
                        : (he([e], !0),
                          (c = e.style.display || c),
                          (d = C.css(e, "display")),
                          he([e]))),
                    ("inline" === d || ("inline-block" === d && null != c)) &&
                      "none" === C.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          g.display = c;
                        }),
                        null == c &&
                          ((d = g.display), (c = "none" === d ? "" : d))),
                      (g.display = "inline-block"))),
                  n.overflow &&
                    ((g.overflow = "hidden"),
                    p.always(function () {
                      (g.overflow = n.overflow[0]),
                        (g.overflowX = n.overflow[1]),
                        (g.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (f
                        ? "hidden" in f && (m = f.hidden)
                        : (f = J.access(e, "fxshow", {
                            display: c,
                          })),
                      o && (f.hidden = !m),
                      m && he([e], !0),
                      p.done(function () {
                        for (i in (m || he([e]), J.remove(e, "fxshow"), h))
                          C.style(e, i, h[i]);
                      })),
                      (l = pt(m ? f[i] : 0, i, p)),
                      i in f ||
                        ((f[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  y(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce).css("opacity", 0).show().end().animate(
                  {
                    opacity: t,
                  },
                  e,
                  n,
                  i
                );
              },
              animate: function (e, t, n, i) {
                var r = C.isEmptyObject(e),
                  o = C.speed(t, n, i),
                  a = function () {
                    var t = ht(this, C.extend({}, e), o);
                    (r || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = C.timers,
                      a = J.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                      for (r in a) a[r] && a[r].stop && lt.test(r) && i(a[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = C.timers,
                      a = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            C.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: {
                  opacity: "show",
                },
                fadeOut: {
                  opacity: "hide",
                },
                fadeToggle: {
                  opacity: "toggle",
                },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (ot = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              at || ((at = !0), ct());
            }),
            (C.fx.stop = function () {
              at = null;
            }),
            (C.fx.speeds = {
              slow: 600,
              fast: 200,
              _default: 400,
            }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = v.createElement("input"),
                t = v
                  .createElement("select")
                  .appendChild(v.createElement("option"));
              (e.type = "checkbox"),
                (f.checkOn = "" !== e.value),
                (f.optSelected = t.selected),
                ((e = v.createElement("input")).value = "t"),
                (e.type = "radio"),
                (f.radioValue = "t" === e.value);
            })();
          var gt,
            mt = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return Z(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (r =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = C.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!f.radioValue && "radio" === t && M(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(j);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = mt[t] || C.find.attr;
              mt[t] = function (e, t, i) {
                var r,
                  o,
                  a = t.toLowerCase();
                return (
                  i ||
                    ((o = mt[a]),
                    (mt[a] = r),
                    (r = null != n(e, t, i) ? a : null),
                    (mt[a] = o)),
                  r
                );
              };
            });
          var ft = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function _t(e) {
            return (e.match(j) || []).join(" ");
          }
          function vt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(j)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return Z(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : ft.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: {
                for: "htmlFor",
                class: "className",
              },
            }),
            f.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, i, r, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, vt(this)));
                    })
                  : (t = bt(e)).length
                  ? this.each(function () {
                      if (
                        ((i = vt(this)),
                        (n = 1 === this.nodeType && " " + _t(i) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (r = t[o]),
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        (a = _t(n)), i !== a && this.setAttribute("class", a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, i, r, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, vt(this)));
                    })
                  : arguments.length
                  ? (t = bt(e)).length
                    ? this.each(function () {
                        if (
                          ((i = vt(this)),
                          (n = 1 === this.nodeType && " " + _t(i) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                              n = n.replace(" " + r + " ", " ");
                          (a = _t(n)), i !== a && this.setAttribute("class", a);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  i,
                  r,
                  o,
                  a = typeof e,
                  s = "string" === a || Array.isArray(e);
                return y(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, vt(this), t), t);
                    })
                  : "boolean" == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = bt(e)),
                    this.each(function () {
                      if (s)
                        for (o = C(this), r = 0; r < n.length; r++)
                          (i = n[r]),
                            o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                      else
                        (void 0 !== e && "boolean" !== a) ||
                          ((i = vt(this)) && J.set(this, "__className__", i),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              i || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + _t(vt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = y(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, C(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = C.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    C.valHooks[r.type] ||
                    C.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : _t(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = C.makeArray(t), a = r.length;
                      a--;

                    )
                      ((i = r[a]).selected =
                        C.inArray(C.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                f.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (f.focusin = "onfocusin" in i);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, r) {
              var o,
                a,
                s,
                l,
                c,
                d,
                u,
                p,
                g = [n || v],
                m = h.call(e, "type") ? e.type : e,
                f = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || v),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(m + C.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((f = m.split(".")), (m = f.shift()), f.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(m, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = f.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (u = C.event.special[m] || {}),
                  r || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!r && !u.noBubble && !_(n)) {
                  for (
                    l = u.delegateType || m,
                      wt.test(l + m) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    g.push(a), (s = a);
                  s === (n.ownerDocument || v) &&
                    g.push(s.defaultView || s.parentWindow || i);
                }
                for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = o > 1 ? l : u.bindType || m),
                    (d =
                      (J.get(a, "events") || Object.create(null))[e.type] &&
                      J.get(a, "handle")) && d.apply(a, t),
                    (d = c && a[c]) &&
                      d.apply &&
                      Y(a) &&
                      ((e.result = d.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(g.pop(), t)) ||
                    !Y(n) ||
                    (c &&
                      y(n[m]) &&
                      !_(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (C.event.triggered = m),
                      e.isPropagationStopped() && p.addEventListener(m, Et),
                      n[m](),
                      e.isPropagationStopped() && p.removeEventListener(m, Et),
                      (C.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, {
                type: e,
                isSimulated: !0,
              });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            f.focusin ||
              C.each(
                {
                  focus: "focusin",
                  blur: "focusout",
                },
                function (e, t) {
                  var n = function (e) {
                    C.event.simulate(t, e.target, C.event.fix(e));
                  };
                  C.event.special[t] = {
                    setup: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = J.access(i, t);
                      r || i.addEventListener(e, n, !0),
                        J.access(i, t, (r || 0) + 1);
                    },
                    teardown: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = J.access(i, t) - 1;
                      r
                        ? J.access(i, t, r)
                        : (i.removeEventListener(e, n, !0), J.remove(i, t));
                    },
                  };
                }
              );
          var Ct = i.location,
            kt = {
              guid: Date.now(),
            },
            Lt = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Tt = /\[\]$/,
            Nt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Bt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              C.each(t, function (t, r) {
                n || Tt.test(e)
                  ? i(e, r)
                  : Bt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== w(t)) i(e, t);
            else for (r in t) Bt(e + "[" + r + "]", t[r], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = y(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Bt(n, e[n], t, r);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !fe.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n"),
                          };
                        })
                      : {
                          name: t.name,
                          value: n.replace(Nt, "\r\n"),
                        };
                  })
                  .get();
              },
            });
          var St = /%20/g,
            It = /#.*$/,
            $t = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Dt = /^(?:GET|HEAD)$/,
            Ft = /^\/\//,
            jt = {},
            qt = {},
            Ut = "*/".concat("*"),
            Rt = v.createElement("a");
          function Pt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(j) || [];
              if (y(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Ot(e, t, n, i) {
            var r = {},
              o = e === qt;
            function a(s) {
              var l;
              return (
                (r[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var c = s(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
              );
            }
            return a(t.dataTypes[0]) || (!r["*"] && a("*"));
          }
          function zt(e, t) {
            var n,
              i,
              r = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (Rt.href = Ct.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ut,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: {
                  xml: /\bxml\b/,
                  html: /\bhtml/,
                  json: /\bjson\b/,
                },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: {
                  url: !0,
                  context: !0,
                },
              },
              ajaxSetup: function (e, t) {
                return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
              },
              ajaxPrefilter: Pt(jt),
              ajaxTransport: Pt(qt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  a,
                  s,
                  l,
                  c,
                  d,
                  u,
                  p,
                  h = C.ajaxSetup({}, t),
                  g = h.context || h,
                  m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                  f = C.Deferred(),
                  y = C.Callbacks("once memory"),
                  _ = h.statusCode || {},
                  b = {},
                  x = {},
                  w = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = Ht.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) E.always(e[E.status]);
                        else for (t in e) _[t] = [_[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || w;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (f.promise(E),
                  (h.url = ((e || h.url || Ct.href) + "").replace(
                    Ft,
                    Ct.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(j) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = v.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        Rt.protocol + "//" + Rt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = C.param(h.data, h.traditional)),
                  Ot(jt, h, t, E),
                  c)
                )
                  return E;
                for (u in ((d = C.event && h.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Dt.test(h.type)),
                (r = h.url.replace(It, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(St, "+"))
                  : ((p = h.url.slice(r.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((r += (Lt.test(r) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((r = r.replace($t, "$1")),
                      (p = (Lt.test(r) ? "&" : "?") + "_=" + kt.guid++ + p)),
                    (h.url = r + p)),
                h.ifModified &&
                  (C.lastModified[r] &&
                    E.setRequestHeader("If-Modified-Since", C.lastModified[r]),
                  C.etag[r] && E.setRequestHeader("If-None-Match", C.etag[r])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  E.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                  return E.abort();
                if (
                  ((w = "abort"),
                  y.add(h.complete),
                  E.done(h.success),
                  E.fail(h.error),
                  (n = Ot(qt, h, t, E)))
                ) {
                  if (
                    ((E.readyState = 1), d && m.trigger("ajaxSend", [E, h]), c)
                  )
                    return E;
                  h.async &&
                    h.timeout > 0 &&
                    (s = i.setTimeout(function () {
                      E.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(b, k);
                  } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");
                function k(e, t, a, l) {
                  var u,
                    p,
                    v,
                    b,
                    x,
                    w = t;
                  c ||
                    ((c = !0),
                    s && i.clearTimeout(s),
                    (n = void 0),
                    (o = l || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var i, r, o, a, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in s)
                            if (s[r] && s[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            a || (a = r);
                          }
                          o = o || a;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(h, E, a)),
                    !u &&
                      C.inArray("script", h.dataTypes) > -1 &&
                      C.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (b = (function (e, t, n, i) {
                      var r,
                        o,
                        a,
                        s,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (a in e.converters)
                          c[a.toLowerCase()] = e.converters[a];
                      for (o = d.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = d.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(a = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (s = r.split(" "))[1] === o &&
                                  (a = c[l + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[r])
                                    : !0 !== c[r] &&
                                      ((o = s[0]), d.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return {
                        state: "success",
                        data: t,
                      };
                    })(h, b, E, u)),
                    u
                      ? (h.ifModified &&
                          ((x = E.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[r] = x),
                          (x = E.getResponseHeader("etag")) && (C.etag[r] = x)),
                        204 === e || "HEAD" === h.type
                          ? (w = "nocontent")
                          : 304 === e
                          ? (w = "notmodified")
                          : ((w = b.state), (p = b.data), (u = !(v = b.error))))
                      : ((v = w),
                        (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (t || w) + ""),
                    u
                      ? f.resolveWith(g, [p, w, E])
                      : f.rejectWith(g, [E, w, v]),
                    E.statusCode(_),
                    (_ = void 0),
                    d &&
                      m.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        E,
                        h,
                        u ? p : v,
                      ]),
                    y.fireWith(g, [E, w]),
                    d &&
                      (m.trigger("ajaxComplete", [E, h]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, r) {
                return (
                  y(n) && ((r = r || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      {
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i,
                      },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                  "text script": function () {},
                },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Zt = {
              0: 200,
              1223: 204,
            },
            Vt = C.ajaxSettings.xhr();
          (f.cors = !!Vt && "withCredentials" in Vt),
            (f.ajax = Vt = !!Vt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (f.cors || (Vt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      s.setRequestHeader(a, r[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Zt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? {
                                      binary: s.response,
                                    }
                                  : {
                                      text: s.responseText,
                                    },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: {
                script: /\b(?:java|ecma)script\b/,
              },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({
                        charset: e.scriptCharset,
                        src: e.url,
                      })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      v.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Wt,
            Gt = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Gt.pop() || C.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Xt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Xt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Xt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return a || C.error(r + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
                      a && y(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (f.createHTMLDocument =
              (((Wt = v.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Wt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (f.createHTMLDocument
                      ? (((i = (t =
                          v.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = v.location.href),
                        t.head.appendChild(i))
                      : (t = v)),
                  (o = !n && []),
                  (r = B.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Ee([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], r.childNodes)));
              var i, r, o;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((i = _t(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  c = C.css(e, "position"),
                  d = C(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (s = d.offset()),
                  (o = C.css(e, "top")),
                  (l = C.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((a = (i = d.position()).top), (r = i.left))
                    : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  y(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (u.top = t.top - s.top + a),
                  null != t.left && (u.left = t.left - s.left + r),
                  "using" in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : {
                        top: 0,
                        left: 0,
                      }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = {
                      top: 0,
                      left: 0,
                    };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            C.each(
              {
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset",
              },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return Z(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (_(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = We(f.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), Ue.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each(
              {
                Height: "height",
                Width: "width",
              },
              function (e, t) {
                C.each(
                  {
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e,
                  },
                  function (n, i) {
                    C.fn[i] = function (r, o) {
                      var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                      return Z(
                        this,
                        function (t, n, r) {
                          var o;
                          return _(t)
                            ? 0 === i.indexOf("outer")
                              ? t["inner" + e]
                              : t.document.documentElement["client" + e]
                            : 9 === t.nodeType
                            ? ((o = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                o["scroll" + e],
                                t.body["offset" + e],
                                o["offset" + e],
                                o["client" + e]
                              ))
                            : void 0 === r
                            ? C.css(t, n, s)
                            : C.style(t, n, r, s);
                        },
                        t,
                        a ? r : void 0,
                        a
                      );
                    };
                  }
                );
              }
            ),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Yt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (i = s.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(s.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || C.guid++),
                r
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = M),
            (C.isFunction = y),
            (C.isWindow = _),
            (C.camelCase = X),
            (C.type = w),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "$1");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Qt = i.jQuery,
            Jt = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = Jt),
                e && i.jQuery === C && (i.jQuery = Qt),
                C
              );
            }),
            void 0 === r && (i.jQuery = i.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = {
      exports: {},
    });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (
      n.d(t, {
        a: t,
      }),
      t
    );
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i],
          });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        const t = />textNode:nth-of-type\(([0-9]+)\)$/i,
          n = t.exec(e);
        if (n) {
          const i = parseInt(n[1]);
          e = e.replace(t, "");
          const r = $(e)[0];
          if (!r) return;
          return r.childNodes[i];
        }
        return $(e)[0];
      }
      function t(e) {
        if ("html" === e.localName) return "html";
        const n = e.parentNode;
        let i;
        const r = t(n);
        return e.localName
          ? ((i = $(e).index(r + ">" + e.localName) + 1),
            r + ">" + e.localName + ":nth-of-type(" + i + ")")
          : ((i = Array.prototype.indexOf.call(n.childNodes, e)),
            r + ">textNode:nth-of-type(" + i + ")");
      }
      function i(e) {
        let t, n;
        const i = window.location.protocol,
          r = window.location.hostname,
          o = window.location.pathname,
          a = window.location.search,
          s = c(window.location.href);
        if (
          ((t = r + o + a),
          (n = i + "//" + t),
          "/pdf/web/viewer.html" == window.location.pathname &&
            window.location.search &&
            window.location.search.includes("?file="))
        ) {
          const e = new URL(window.location.search.replace("?file=", ""));
          return (
            (t = e.hostname + e.pathname + e.search),
            (n = e.protocol + "//" + t),
            {
              url: t,
              fullUrl: n,
            }
          );
        }
        return "www.youtube.com" === window.location.hostname && s.v
          ? ((t = r + o + `?v=${s.v}`),
            (n = i + "//" + t),
            {
              url: t,
              fullUrl: n,
            })
          : {
              url: t,
              fullUrl: n,
            };
      }
      function r() {
        let e = "";
        if (
          a() &&
          document.getElementsByClassName(
            "feed-shared-update-v2__description-wrapper"
          ).length > 0
        ) {
          const t = document.getElementsByClassName(
            "feed-shared-update-v2__description-wrapper"
          )[0].innerText;
          if (t.length > 0) return (e = t.substring(0, 65)), e;
        }
        if (s()) return (e = document.title), e;
        if (null !== document.querySelector("meta[property='og:title']"))
          "content" in document.querySelector("meta[property='og:title']") &&
            (e = document
              .querySelector("meta[property='og:title']")
              .getAttribute("content"));
        else if (document.title) e = document.title;
        else if (document.getElementsByTagName("h1").length > 0) {
          const t = document.getElementsByTagName("h1");
          for (let n = 0; n < t.length; n++)
            if ("" !== t[n].innerText) {
              e = t[n].innerText;
              break;
            }
        }
        return e.trim(), e;
      }
      function o() {
        return (
          "file:" !== window.location.protocol &&
          "/pdf/web/viewer.html" == window.location.pathname &&
          window.location.href.toLowerCase().indexOf(".pdf") > 0
        );
      }
      function a() {
        const e = new URL(window.location.href);
        if ("www.linkedin.com" == e.host && e.pathname.split("/")[1]) {
          const t = e.pathname.split("/")[1];
          if ("posts" == t || "feed" == t) return !0;
        }
        return !1;
      }
      function s() {
        const e = c(window.location.href);
        return !("www.youtube.com" !== window.location.hostname || !e.v);
      }
      function l() {
        let e =
            "https://storage.googleapis.com/glasp.co/src/img/thumbnail_wide.png",
          t = !1;
        const n = /^(https):\/\/[^ "]+$/gm,
          r = /^(http):\/\/[^ "]+$/gm,
          l = /((?:http|https|ftp|ftps|chrome|\*)?):\/\/([^\/]+)(\/.*)?/;
        if (a())
          return "https://storage.googleapis.com/glasp.co/src/img/linkedin_post.jpeg";
        if (s())
          return `https://i.ytimg.com/vi/${
            c(window.location.href).v
          }/hqdefault.jpg`;
        if (o())
          return "https://storage.googleapis.com/glasp.co/src/img/thumbnail_pdf.png";
        if (
          null !== document.querySelector("meta[property='og:image']") &&
          "content" in document.querySelector("meta[property='og:image']")
        ) {
          const o = document
              .querySelector("meta[property='og:image']")
              .getAttribute("content"),
            a = document
              .querySelector("meta[property='og:image']")
              .getAttribute("content"),
            s = n.test(o),
            c = r.test(o),
            d = i().fullUrl,
            u = window.location.hostname;
          s || (c && n.test(d) && u == l.exec(a)[2])
            ? ((e = o), (t = !0))
            : c && ((e = o.replace("http", "https")), (t = !0));
        }
        if (
          !t &&
          document.body.getElementsByTagName("img") &&
          0 !== document.body.getElementsByTagName("img").length
        ) {
          let i = document.body.getElementsByTagName("img");
          for (let r = 0; r < i.length; r++)
            if (i[r].width > 170 && i[r].height > 80) {
              const o = i[r].src;
              if (n.test(o)) {
                (e = o), (t = !0);
                break;
              }
            }
        }
        return e;
      }
      function c(e) {
        const t = e && "" !== e ? e : window.location.search;
        if (!/\?([a-zA-Z0-9_]+)/i.exec(t)) return {};
        let n,
          i = /\+/g,
          r = /([^?&=]+)=?([^&]*)/g,
          o = function (e) {
            return decodeURIComponent(e.replace(i, " "));
          },
          a = /\?([a-zA-Z0-9_]+)/i.exec(t).index + 1,
          s = t.substring(a),
          l = {};
        for (; (n = r.exec(s)); ) l[o(n[1])] = o(n[2]);
        return l;
      }
      function d(e, t, n, i) {
        const r = document.getElementsByClassName("highlighter--highlighted");
        let o = new Map();
        const a = [];
        for (let e = 0; e < r.length; e++) {
          const t = r[e].getAttribute("highlightid");
          o.has(t)
            ? o.set(t, o.get(t).concat(r[e].textContent))
            : o.set(t, [r[e].textContent]);
        }
        for (let [e, t] of o) {
          const n = t.map((e) => e.replace(/\s+/gm, " ")).join(" ");
          a.push(e), a.push(n);
        }
        const s = void 0 === i || (0 === a.length && 0 === i.length);
        return (
          null != e &&
            (((n = e.getElementById("highlights_list_empty")).style.visibility =
              s ? "visible" : "hidden"),
            (n.style.height = s ? "auto" : "0px"),
            (t.style.visibility = s ? "hidden" : "visible")),
          a
        );
      }
      const u = [
        "chrome://extensions/",
        "chrome://newtab/",
        "*://driven-current-285910.firebaseapp.com/*",
        "http://localhost:4000/home",
        "http://localhost:4000/#/*",
        "*://review.firstround.com/*",
        "*://*.google.com/*",
        "*://*.google.co.jp/*",
        "*://*.typeform.com/*",
        "*://feedly.com/*",
        "*://getpocket.com/*",
        "*://*.whatsapp.com/*",
        "*://*.notion.so/*",
        "*://*.slack.com/*",
        "*://*.office.com/*",
        "*://*.live.com/*",
        "*://*.yahoo.com/*",
        "*://*.firebase.google.com/*",
        "*://glasp.co/#/*",
        "*://glasp.co/home",
        "*://www.glasp.co/home",
        "*://www.facebook.com/*",
        "*://www.instagram.com/*",
        "*://twitter.com/home",
        "*://twitter.com/intent/*",
        "*://twitter.com/messages/*",
        "*://twitter.com/settings",
        "*://*.linkedin.com/feed/",
        "*://*.linkedin.com/mynetwork/",
        "*://*.linkedin.com/jobs/",
        "*://*.linkedin.com/notifications/",
        "*://*.linkedin.com/messaging/*",
        "*://*.linkedin.com/in/*",
        "*://analytics.amplitude.com/*",
        "*://*.atlassian.*/*",
        "*://online.citi.com/*",
        "*://www.chase.com/*",
        "*://www.bankofamerica.com/*",
        "*://*.paypal.com/*",
        "*://*.intuit.com/*",
        "*://*.docusign.com/*",
        "*://connect.secure.wellsfargo.com/*",
        "*://www.pornhub.com/*",
        "*://xhamster.com/*",
        "*://www.redtube.com/*",
        "*://www.youporn.com/*",
        "*://beeg.com/*",
        "*://smutr.com/*",
        "*://pornone.com/*",
        "*://www.tube8.com/*",
        "*://www.xvideos.com/*",
        "*://www.xnxx.com/*",
        "*://www.creditkarma.com/*",
        "*://sso2.opower.com/*",
      ];
      function p() {
        $(".highlighter--hovered").removeClass("highlighter--hovered"),
          (m.clickedHighlightId = ""),
          m.tooltipEl &&
            (m.tooltipEl.hide(),
            m.tooltip_iframe_doc &&
              m.tooltip_iframe_doc.getElementById("tooltip_create_quoteshot") &&
              ($(document.getElementById("glasp-tooltip-iframe")).attr(
                "style",
                "max-width: 240px !important; height: 48px !important;position:relative;"
              ),
              (m.tooltip_iframe_doc.getElementById(
                "tooltip_create_quoteshot"
              ).style.display = "none"),
              (m.tooltip_iframe_doc.getElementById(
                "tooltip_add_tag"
              ).style.display = "none"))),
          (m.tripleClicked = !1),
          (m.hoverToolTimeout = null),
          (m.highlightClicked = !1),
          (m.tooltipDisplayed = !1),
          null !== m.tooltip_iframe &&
            void 0 !== m.tooltip_iframe &&
            (m.tooltip_iframe.style.display = "none");
      }
      function h(e) {
        return e.replace(
          /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
          (e) =>
            `<a href="${e}" target="_blank" style="color: rgb(42, 128, 255);line-break: anywhere;cursor: pointer !important;">${e}</a>`
        );
      }
      let g,
        m = new (class {
          iframeIndexEl = (function () {
            let e = document.createElement("div");
            return (
              e.setAttribute("class", "glasp-ui-wrapper"),
              e.setAttribute("id", "glasp-ui-wrapper"),
              (e.style.height = "0px"),
              (e.style.width = "0px"),
              e
            );
          })();
          sidebar_iframe = (function () {
            let e = document.createElement("iframe");
            return (
              (e.name = "glasp-sidebar-iframe"),
              e.setAttribute("id", "glasp-sidebar-iframe"),
              (e.frameBorder = 0),
              $(e).attr(
                "style",
                'width: 0px !important; min-width: 0px !important; max-width: 300px; height: 100%; background: #FFFFFF; resize: horizontal; direction: rtl; margin: auto; position: fixed; top: 0px; right: 0px; left: auto; z-index: 9000000000000000000;background-image: url("https://storage.googleapis.com/glasp.co/src/img/loading_200.gif");background-repeat: no-repeat;background-position: center;background-size: 40px;'
              ),
              e
            );
          })();
          tooltip_iframe = (function () {
            let e = document.createElement("iframe");
            return (
              (e.name = "glasp-tooltip-iframe"),
              e.setAttribute("id", "glasp-tooltip-iframe"),
              (e.frameBorder = 0),
              (e.scrolling = "no"),
              $(e).attr(
                "style",
                "width: 0px !important; height: 48px; filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 2px 5px);position:relative;"
              ),
              e
            );
          })();
          excludedURL = (function (e) {
            const t =
              /((?:http|https|ftp|ftps|chrome|\*)?):\/\/([^\/]+)(\/.*)?/;
            for (let n = 0; n < u.length; n++) {
              let i,
                r = "";
              if (
                (null !== (i = u[n].match(t)) &&
                  ((r =
                    i[1].replace(/\*$/, "[^/]*") +
                    "://" +
                    i[2]
                      .replace(/[?()[\]\\.+^$|]/g, "\\$&")
                      .replace(/\*\\./g, "(?:[^/]*\\.)*")
                      .replace(/\*$/, "[^/]*")),
                  i[3] &&
                    (r += i[3]
                      .replace(/[?()[\]\\.+^$|]/g, "\\$&")
                      .replace(/\/\*(?=$|\/)/g, "(?:/[^]*)?"))),
                r)
              ) {
                let t = RegExp("^" + r + "$", "i");
                if (e.match(t)) return !0;
              }
            }
            return !1;
          })(window.location.href);
          domainExcludeList = [];
          sidebar_signup_login_HTML;
          sidebarSettingBtnEl;
          sidebarSettingPopupEl;
          currentUserListEl;
          usersListEl;
          userListEl;
          userListData;
          userListDataLength;
          userListNum;
          selectedUsersUID;
          selectedUsersInfo;
          selectedUsersDisplayName;
          selectedUsersPhotoURL;
          selectedUserUsername;
          userPhotoEl;
          userNameEl;
          pulldownImg;
          alreadyDisplayedOtherUsersList;
          tooltipHTML;
          tooltipEl;
          hoverToolTimeout;
          currentHighlightEl;
          currentHighlightColor;
          clickedHighlightEl;
          clickedHighlightId;
          tripleClicked;
          addedHighlightId;
          actionType;
          deletedHighlightTabindex;
          sidebarHTML;
          highlightsListEl;
          sidebarHighlighterToggleEl;
          twitterShareBtnEl;
          fbShareBtnEl;
          linkedInShareBtnEl;
          emailShareBtnEl;
          userTags = [];
          sidebarIsOpen = !1;
          visibilityStatus = "Public";
          sidebarWidth = "300px";
          viewingOthersHLs = !1;
          visibilityChanged = !1;
          highlighterMode = "on";
          lastSelectedColorId = "#FFB6C6";
          addNoteBtnClicked = !1;
          tooltipDisplayed = !1;
          prevSelectedText = "";
          textSelected = !1;
          highlightClicked = !1;
          userInfoReceived = !1;
          otherUsersPagenote;
          otherUsersTagList = [];
          displayName;
          photoURL;
          uid;
          username;
          userPagenote = "";
          userTagList = [];
          docId;
          tooltip_iframe_doc;
          sidebar_element;
          sidebar_iframe_doc;
          sidebar_copy_all;
          highlightEmptyEl;
          loadedHighlights;
          rawTranscriptArr = [];
          constructor() {
            g = this;
          }
          getInstance() {
            return this;
          }
        })();
      function f() {
        return (
          !(!chrome || !chrome.extension) ||
          ("undefined" != typeof chrome &&
            void 0 !== chrome.app &&
            void 0 !== chrome.app.isInstalled) ||
          !(!navigator.vendor || -1 === navigator.vendor.indexOf("Apple"))
        );
      }
      function y() {
        return (
          -1 !== navigator.userAgent.indexOf("Safari") &&
          -1 === navigator.userAgent.indexOf("Chrome") &&
          -1 === navigator.userAgent.indexOf("Chromium")
        );
      }
      function _(e) {
        return 1 === e.lastChild.nodeType
          ? _(e.lastChild)
          : 3 === e.lastChild.nodeType
          ? e.lastChild
          : null;
      }
      function v(e) {
        const t = e.previousElementSibling;
        let n = null;
        if (0 === t.innerText.length) n = v(t);
        else {
          const e = t.lastChild;
          null !== e && 1 === e.nodeType
            ? (n = [e, e.innerText.length])
            : null !== e && 3 === e.nodeType && (n = [e, e.length]);
        }
        return n;
      }
      function b(e, t) {
        const n = t.querySelector(`[highlightid="${e}"]`);
        n &&
          !y() &&
          (n.scrollIntoView({
            behavior: "smooth",
            block: "center",
          }),
          (n.style.backgroundColor = "#EEEEEE"),
          setTimeout(function () {
            n.style.backgroundColor = "#FAFAFA";
          }, 500));
        const i = n.getAttribute("tabindex");
        return t.getElementsByClassName("highlight_note_add_btn")[i];
      }
      function x() {
        document
          .getElementById("glasp-sidebar-iframe")
          .contentWindow.scrollTo(
            0,
            m.sidebar_iframe_doc.querySelector(".highlights_list").scrollHeight
          );
      }
      function w(e) {
        let t = null;
        try {
          t = (e.contentDocument || e.contentWindow.document).body.innerHTML;
        } catch (e) {}
        return null !== t;
      }
      function E(e) {
        let t = !1;
        e.anchorNode.compareDocumentPosition(e.focusNode) ===
          Node.DOCUMENT_POSITION_PRECEDING && (t = !0);
        const n = t ? e.focusNode : e.anchorNode,
          i = t ? e.focusOffset : e.anchorOffset,
          r = t ? e.anchorNode : e.focusNode,
          o = t ? e.anchorOffset : e.focusOffset;
        let a, s;
        if (r.nodeType == Node.ELEMENT_NODE)
          if (null == r.previousElementSibling && null == r.previousSibling)
            n !== r.parentNode
              ? ((a = _(r.parentNode.previousElementSibling)),
                a.nodeType == Node.ELEMENT_NODE
                  ? (s = a.innerText.length)
                  : a.nodeType == Node.TEXT_NODE && (s = a.length))
              : ((a = n),
                a.nodeType == Node.ELEMENT_NODE
                  ? (s = a.innerText.length)
                  : a.nodeType == Node.TEXT_NODE && (s = a.length));
          else if (null == r.previousElementSibling)
            (a = _(r.parentNode.parentElement)),
              a.nodeType == Node.ELEMENT_NODE
                ? (s = a.innerText.length)
                : a.nodeType == Node.TEXT_NODE && (s = a.length);
          else {
            const e = v(r);
            (a = e[0]), (s = e[1]);
          }
        else r.nodeType == Node.TEXT_NODE && ((a = r), (s = o));
        return {
          anchorNode: n,
          anchorOffset: i,
          focusNode: a,
          focusOffset: s,
        };
      }
      function C() {
        return !f();
      }
      function k(e, t, n) {
        if (document.getElementById("glasp-sidebar-iframe")) {
          m.sidebar_iframe_doc = document.getElementById(
            "glasp-sidebar-iframe"
          ).contentWindow.document;
          const i = /\s+/g.test(t) ? t.split(/\s/)[0] : t;
          m.sidebar_iframe_doc.getElementById("current_user_list") &&
            ((m.currentUserListEl =
              m.sidebar_iframe_doc.getElementById("current_user_list")),
            (m.currentUserListEl.innerHTML = `\n            <img class="user-photo" id="user-photo" style="height:24px;width:24px;border-radius: 14px;border: 0.1px solid rgba(0,0,0,0.1);" src="${e}">\n            <div class="user-name" id="user-name" style="text-align: left;width: max-content;margin-left: 8px;font-size: 16px;">${i}</div>\n            <svg class="user-pulldown" id="user-pulldown" style="height: 20px;width: 20px;margin-left: 3px;margin-right: 3px;" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M16.2447 9.9588C16.5376 9.6659 16.5376 9.19103 16.2447 8.89814C15.9518 8.60524 15.4769 8.60524 15.184 8.89814L16.2447 9.9588ZM6.81611 8.89814C6.52322 8.60524 6.04835 8.60524 5.75545 8.89814C5.46256 9.19103 5.46256 9.6659 5.75545 9.9588L6.81611 8.89814ZM11.7425 14.461L16.2447 9.9588L15.184 8.89814L10.6819 13.4003L11.7425 14.461ZM11.3183 13.4003L6.81611 8.89814L5.75545 9.9588L10.2576 14.461L11.3183 13.4003ZM10.6819 13.4003C10.8576 13.2246 11.1425 13.2246 11.3183 13.4003L10.2576 14.461C10.6677 14.871 11.3325 14.871 11.7425 14.461L10.6819 13.4003Z" fill="#8B8B8B"/>\n            </svg>`),
            (m.userPhotoEl = m.sidebar_iframe_doc.getElementById("user-photo")),
            (m.userNameEl = m.sidebar_iframe_doc.getElementById("user-name")),
            (m.pulldownImg =
              m.sidebar_iframe_doc.getElementById("user-pulldown")),
            m.viewingOthersHLs ||
              ((m.sidebar_iframe_doc.getElementById(
                "user-photo-right-top"
              ).src = e),
              (m.sidebar_iframe_doc.getElementById(
                "user-photo-right-top-link"
              ).href = `https://glasp.co/#/${n}`)));
        }
      }
      function L(e, t) {
        if (
          (m.visibilityChanged &&
            ((m.alreadyDisplayedOtherUsersList = !1),
            (m.visibilityChanged = !1)),
          m.alreadyDisplayedOtherUsersList)
        )
          return;
        m.alreadyDisplayedOtherUsersList = !0;
        let n = t;
        m.userListNum.innerHTML = n;
        let r = document.createElement("img");
        r.setAttribute("class", "user-photo"),
          r.setAttribute(
            "style",
            "height: 24px;width: 24px;border-radius: 12px;border: 0.1px solid rgba(0,0,0,0.05);"
          ),
          r.setAttribute("src", m.photoURL);
        let o = document.createElement("div");
        o.setAttribute("class", "user-name"),
          o.setAttribute(
            "style",
            "text-align: left;width: max-content;margin-left: 8px;font-size: 16px;"
          ),
          (o.innerHTML = m.displayName),
          m.userListEl.appendChild(r),
          m.userListEl.appendChild(o);
        const a = i().url;
        m.userListEl &&
          m.userListEl.addEventListener("click", function () {
            const e = {
              uid: m.uid,
              displayName: m.displayName,
              photoURL: m.photoURL,
            };
            fe(),
              m.sidebarHighlighterToggleEl.is(":checked") ||
                (m.sidebarHighlighterToggleEl.prop("checked", !0),
                (m.highlighterMode = "on"),
                chrome.runtime.sendMessage({
                  action: "browser_icon_change",
                  data: m.highlighterMode,
                })),
              m.sidebarHighlighterToggleEl.off("click"),
              chrome.runtime.sendMessage({
                action: "viewing_others_highlights",
                data: !1,
              }),
              chrome.runtime.sendMessage({
                action: "load_others_highlight",
                data: [e, a],
              }),
              (m.usersListEl.style.visibility = "hidden");
          });
        for (let n = 0; n < t; n++) {
          if (e[n].uid === m.uid) continue;
          let t = document.createElement("div");
          t.setAttribute("class", "user_list");
          let i = document.createElement("img");
          i.setAttribute("class", "user-photo"),
            i.setAttribute("src", e[n].photoURL);
          let r = document.createElement("div");
          r.setAttribute("class", "user-name"),
            (r.innerHTML = e[n].displayName),
            t.appendChild(i),
            t.appendChild(r),
            t.addEventListener("click", function () {
              fe(),
                m.sidebarHighlighterToggleEl.is(":checked") &&
                  (m.sidebarHighlighterToggleEl.prop("checked", !1),
                  (m.highlighterMode = "off"),
                  chrome.runtime.sendMessage({
                    action: "browser_icon_change",
                    data: m.highlighterMode,
                  })),
                m.sidebarHighlighterToggleEl.on("click", !1),
                chrome.runtime.sendMessage({
                  action: "viewing_others_highlights",
                  data: !0,
                }),
                chrome.runtime.sendMessage({
                  action: "load_others_highlight",
                  data: [e[n], a],
                }),
                (m.usersListEl.style.visibility = "hidden");
            }),
            null !== m.usersListEl && m.usersListEl.appendChild(t);
        }
      }
      const T = "unknown",
        N = "auto",
        A = {
          Default: "en",
          English: "en",
          Chinese: "zh-cn",
          Spanish: "es",
          French: "fr",
          German: "de",
          Italian: "it",
          Japanese: "ja",
          Korean: "ko",
          Portuguese: "pt",
          Russian: "ru",
          Turkish: "tr",
          Arabic: "ar",
          Hindi: "hi",
          Indonesian: "id",
          Bengali: "bn",
          Vietnamese: "vi",
        },
        M = {
          default: "",
          "gpt_3.5": "model=text-davinci-002-render-sha",
          "gpt_3.5_legacy": "model=text-davinci-002-render-paid",
          gpt_4: "model=gpt-4",
        },
        B = {
          highlightPopup: "on",
          theme: N,
          copyformat: "plaintext",
          customPrompt: "Summarize the following in 5 bullet points.",
          language: A.Default,
          chatGPTModel: "default",
          summaryStrategy: "chunks",
        };
      async function S() {
        const e = await chrome.storage.local.get(Object.keys(B));
        return 0 !== Object.keys(e).length && e
          ? ("highlightPopup" in e || (e.highlightPopup = B.highlightPopup),
            "theme" in e || (e.theme = B.theme),
            "copyformat" in e || (e.copyformat = B.copyformat),
            "customPrompt" in e || (e.customPrompt = B.customPrompt),
            "language" in e || (e.language = B.language),
            "chatGPTModel" in e || (e.chatGPTModel = B.chatGPTModel),
            "summaryStrategy" in e || (e.summaryStrategy = B.summaryStrategy),
            e)
          : B;
      }
      async function I(e, t, n) {
        if (null == m.uid || null == m.uid) return;
        if (m.selectedUsersUID !== m.uid) return;
        if ("off" == m.highlighterMode) return;
        if (
          "file:" == window.location.protocol ||
          "localhost" == window.location.hostname
        )
          return;
        if (
          "/pdf/web/viewer.html" == window.location.pathname &&
          window.location.search &&
          window.location.search.includes("?file=")
        ) {
          const e = new URL(window.location.search.replace("?file=", ""));
          if ("file:" == e.protocol || "localhost" == e.hostname) return;
        }
        if ("off" == (await S()).highlightPopup && !m.highlightClicked) return;
        const i = e.getBoundingClientRect(),
          r = m.highlightClicked ? 272 : 208,
          o = (i.top - 54).toString() + "px";
        if (((m.tooltip_iframe.style.top = o), void 0 !== t)) {
          let e = null;
          e =
            i.width < r
              ? i.left + i.width / 2 - r / 2
              : t - i.left < r / 2
              ? i.left
              : i.right - t < r / 2
              ? i.right - r
              : t - r / 2;
          let n = e.toString() + "px";
          m.tooltip_iframe.style.left = n;
        }
        (m.tooltip_iframe.style.display = "inline"), (m.tooltipDisplayed = !0);
        const a = m.tooltip_iframe_doc.getElementById(
            "glasp_tooltip_container"
          ),
          s = a.querySelector(".highlighter-pink"),
          l = a.querySelector(".highlighter-yellow"),
          c = a.querySelector(".highlighter-green"),
          d = a.querySelector(".highlighter-blue");
        s.removeEventListener("click", H),
          s.removeEventListener("click", D),
          l.removeEventListener("click", H),
          l.removeEventListener("click", D),
          c.removeEventListener("click", H),
          c.removeEventListener("click", D),
          d.removeEventListener("click", H),
          d.removeEventListener("click", D);
        const u = a.querySelector("#FFB6C6"),
          p = a.querySelector("#F9F47F"),
          h = a.querySelector("#A2F8A0"),
          g = a.querySelector("#ADC9FF");
        switch (
          ((u.style.display = "none"),
          (p.style.display = "none"),
          (h.style.display = "none"),
          (g.style.display = "none"),
          s.addEventListener("click", H),
          l.addEventListener("click", H),
          c.addEventListener("click", H),
          d.addEventListener("click", H),
          n)
        ) {
          case "rgb(255, 182, 198)":
            (u.style.display = "block"),
              s.removeEventListener("click", H),
              s.removeEventListener("click", D),
              s.addEventListener("click", D);
            break;
          case "rgb(249, 244, 127)":
            (p.style.display = "block"),
              l.removeEventListener("click", H),
              l.removeEventListener("click", D),
              l.addEventListener("click", D);
            break;
          case "rgb(162, 248, 160)":
            (h.style.display = "block"),
              c.removeEventListener("click", H),
              c.removeEventListener("click", D),
              c.addEventListener("click", D);
            break;
          case "rgb(173, 201, 255)":
            (g.style.display = "block"),
              d.removeEventListener("click", H),
              d.removeEventListener("click", D),
              d.addEventListener("click", D);
        }
        m.tooltipEl.show();
      }
      function H(e) {
        if (C()) return void window.location.reload();
        const t = e.target.getAttribute("colorid");
        (m.lastSelectedColorId = t),
          m.highlightClicked
            ? (function (e, t) {
                if (C()) return void window.location.reload();
                const n = i(),
                  r = n.url,
                  o = n.fullUrl;
                let a = document.getElementsByClassName(
                  "highlighter--highlighted"
                );
                for (let n = 0; n < a.length; n++)
                  a[n].getAttribute("highlightid") == e &&
                    (a[n].style["background-color"] = t);
                chrome.runtime.sendMessage({
                  action: "highlight_change_color",
                  data: [r, e, t, o],
                }),
                  p();
              })(m.clickedHighlightId, t)
            : me(window.getSelection(), t, m.tripleClicked);
      }
      function D(e) {
        if (C()) return void window.location.reload();
        const t = "string" == typeof e ? e : m.clickedHighlightId,
          n = document.querySelectorAll(`[highlightid^="${t}"]`);
        m.sidebar_iframe_doc.querySelector(`[highlightid="${t}"]`) &&
          (m.deletedHighlightTabindex = m.sidebar_iframe_doc
            .querySelector(`[highlightid="${t}"]`)
            .getAttribute("tabindex"));
        const r = i(),
          o = r.url,
          a = r.fullUrl;
        for (let e = 0; e < n.length; e++) n[e].outerHTML = n[e].innerHTML;
        m.tooltipEl && m.tooltipEl.hide(), (m.hoverToolTimeout = null);
        const s = d(
          m.sidebar_iframe_doc,
          m.sidebar_copy_all,
          m.highlightEmptyEl,
          m.loadedHighlights
        );
        chrome.runtime.sendMessage({
          action: "highlight_delete",
          data: [o, t, a, s],
        }),
          p();
      }
      function F() {
        if ("visible" == m.usersListEl.style.visibility)
          m.usersListEl.style.visibility = "hidden";
        else if (
          ((m.usersListEl.style.visibility = "visible"),
          null == m.userListData ||
            null == m.userListData ||
            1 == m.visibilityChanged)
        ) {
          if (f()) {
            const e = i().url;
            chrome.runtime.sendMessage({
              action: "user_list_load",
              data: e,
            });
          }
        } else L(m.userListData, m.userListDataLength);
      }
      function j() {
        (m.sidebarSettingPopupEl.style.visibility =
          "visible" == m.sidebarSettingPopupEl.style.visibility
            ? "hidden"
            : "visible"),
          chrome.runtime.sendMessage({
            action: "amplitude_log",
            evtName: "sidebar_setting_popup",
          });
      }
      function q() {
        chrome.runtime.sendMessage({
          action: "user_signout",
        }),
          window.location.replace(window.location.href);
      }
      function U() {
        chrome.runtime.sendMessage({
          action: "amplitude_log",
          evtName: "sidebar_setting_bug_report",
        }),
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSf-l_PApQyXi7cX4ZO7kZ6ARW8JXLesiTzvwae-nvWISp3P3A/viewform"
          );
      }
      function R() {
        chrome.runtime.sendMessage({
          action: "amplitude_log",
          evtName: "sidebar_user_setting",
        }),
          chrome.runtime.sendMessage({
            action: "openOptions",
          });
      }
      function P(e) {
        const t = e.target.getAttribute("highlightid");
        m.highlightClicked ||
          ($(".highlighter--hovered").removeClass("highlighter--hovered"),
          $(`.highlighter--highlighted[highlightid='${t}']`).addClass(
            "highlighter--hovered"
          ));
      }
      function O(e) {
        m.highlightClicked ||
          $(".highlighter--hovered").removeClass("highlighter--hovered");
      }
      function z(e) {
        if (m.sidebarIsOpen) {
          const t = e.target.getAttribute("highlightid"),
            n = m.sidebar_iframe_doc.querySelector(`[highlightid="${t}"]`);
          n &&
            !y() &&
            (n.scrollIntoView({
              behavior: "smooth",
              block: "center",
            }),
            (n.style.backgroundColor = "#EEEEEE"),
            setTimeout(function () {
              n.style.backgroundColor = "#FAFAFA";
            }, 500));
        }
        if ("off" == m.highlighterMode) return;
        const t = e.target,
          n = t.getAttribute("highlightid"),
          i = t.style.backgroundColor;
        (m.clickedHighlightEl = e.target),
          (m.clickedHighlightId = t.getAttribute("highlightid")),
          (m.highlightClicked && "click" !== e.type) ||
            ((m.highlightClicked = "click" === e.type),
            (m.currentHighlightEl = t),
            (m.currentHighlightColor = i),
            (null !== m.hoverToolTimeout &&
              (clearTimeout(m.hoverToolTimeout),
              (m.hoverToolTimeout = null),
              n == m.currentHighlightEl.getAttribute("highlightid"))) ||
              ($(document.getElementById("glasp-tooltip-iframe")).attr(
                "style",
                "max-width: 272px !important; height: 48px !important;position:relative;"
              ),
              (m.tooltip_iframe_doc.getElementById(
                "tooltip_create_quoteshot"
              ).style.display = "inline"),
              (m.tooltip_iframe_doc.getElementById(
                "tooltip_add_tag"
              ).style.display = "inline"),
              I(t, e.clientX, i),
              f() &&
                (chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "highlight_sentence_click",
                }),
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "tooltip_popup",
                }))));
      }
      function Z(e, t) {
        const n = t ?? {};
        chrome.runtime.sendMessage({
          action: "amplitude_log",
          evtName: e,
          evtData: n,
        });
      }
      function V(e) {
        const t = window.location.protocol,
          n = window.location.hostname + window.location.pathname + `?v=${e}`,
          i = t + "//" + n;
        chrome.runtime.sendMessage({
          action: "initial_load",
          data: [n, i, "on"],
        });
      }
      var W = n(755),
        G = n.n(W);
      async function X(e) {
        const t = await fetch("https://www.youtube.com/watch?v=" + e),
          n = await t.text(),
          i = n.split('"captions":'),
          r = n.split('"title":"');
        if (i.length < 2) return;
        if (r.length < 2) return;
        const o = JSON.parse(i[1].split(',"videoDetails')[0].replace("\n", ""))
            .playerCaptionsTracklistRenderer.captionTracks,
          a = Array.from(o).map((e) => e.name.simpleText),
          s = r[1].split('","lengthSeconds"')[0] ?? "",
          l = "English";
        return (
          a.sort(function (e, t) {
            return e.includes(l) ? -1 : t.includes(l) ? 1 : 0;
          }),
          a.sort(function (e, t) {
            return e == l ? -1 : t == l ? 1 : 0;
          }),
          Array.from(a).map((e, t) => {
            const n = o.find((t) => t.name.simpleText === e).baseUrl;
            return {
              language: e,
              link: n,
              title: s,
            };
          })
        );
      }
      async function Y(e) {
        const t = await fetch(e),
          n = await t.text(),
          i = G().parseHTML(n)[1].childNodes;
        return Array.from(i).map((e) => ({
          start: e.getAttribute("start"),
          duration: e.getAttribute("dur"),
          text: e.textContent,
        }));
      }
      function Q(e, t, n, i) {
        const r = `https://transcriptglasp-c6cndaf37q-uc.a.run.app/yt_lg/${e}/${t}/${encodeURIComponent(
          n.replace(/\s+/g, "_")
        )}/${i}`;
        try {
          fetch(r);
        } catch (e) {}
      }
      async function J(e, t, n) {
        const i = K(await Y(e));
        return Array.from(i)
          .map((e) => {
            const n = Math.round(e.start),
              i = ee(n);
            return `<div class="yt_ai_summary_transcript_text_segment">\n                  <div><a class="yt_ai_summary_transcript_text_timestamp" style="padding-top: 16px !important;" href="/watch?v=${t}&t=${n}s" target="_blank" data-timestamp-href="/watch?v=${t}&t=${n}s" data-start-time="${n}">${i}</a></div>\n                  <div class="yt_ai_summary_transcript_text" data-start-time="${n}">${e.text}</div>\n              </div>`;
          })
          .join("");
      }
      function K(e) {
        const t = [];
        let n = 0,
          i = [],
          r = 0,
          o = 0,
          a = {},
          s = {};
        return (
          Array.from(e).forEach((e, c, d) => {
            s.start &&
              s.text &&
              ((a.start = s.start), i.push(s.text), (s = {})),
              0 == n && (a.start = s.start ? s.start : e.start),
              n++;
            const u = Math.round(a.start),
              p = Math.round(e.start);
            if (
              ((o = p - u),
              (r += e.text.length),
              i.push(e.text),
              c == d.length - 1)
            )
              return (
                (a.text = i.join(" ").replace(/\n/g, " ")), t.push(a), void l()
              );
            if (o > 60)
              return (
                (a.text = i.join(" ").replace(/\n/g, " ")), t.push(a), void l()
              );
            if (r > 300) {
              if (r < 500) {
                if (e.text.includes(".")) {
                  const n = e.text.split(".");
                  if ("" == n[n.length - 1].replace(/\s+/g, ""))
                    return (
                      (a.text = i.join(" ").replace(/\n/g, " ")),
                      t.push(a),
                      void l()
                    );
                  const r = n[n.length - 2],
                    o = e.text.indexOf(r) + r.length + 1,
                    c = e.text.substring(0, o);
                  return (
                    (s.text = e.text.substring(o)),
                    (s.start = e.start),
                    i.splice(i.length - 1, 1, c),
                    (a.text = i.join(" ").replace(/\n/g, " ")),
                    t.push(a),
                    void l()
                  );
                }
                return;
              }
              return (
                (a.text = i.join(" ").replace(/\n/g, " ")), t.push(a), void l()
              );
            }
          }),
          t
        );
        function l() {
          (n = 0), (i = []), (r = 0), (o = 0), (a = {});
        }
      }
      function ee(e) {
        const t = e < 3600 ? 14 : 12;
        return new Date(1e3 * e).toISOString().substring(t, 19).toString();
      }
      function te() {
        let e = "unknown";
        const t = document.querySelectorAll(".yt_ai_summary_lange_selected");
        return t.length > 0 && (e = t[0].textContent.trim()), e;
      }
      let ne = !1,
        ie = 0,
        re = !0;
      const oe = "~|:~|@%*;",
        ae = ";:~|@%*~;",
        se = "highlighter--highlighted",
        le = `<glasp class="(${ue(
          se
        )})" style="background-color: [a-z]+;"( highlightid="[0-9]+")?>`,
        ce = "</glasp>",
        de = ue(ce);
      function ue(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }
      function pe(e, t, n) {
        const i = e.selString ?? "",
          r = e.container ?? null,
          o = $(e.container) ?? null,
          a = $(e.anchorNode) ?? null,
          s = e.anchorOffset ?? 0,
          l = $(e.focusNode) ?? null,
          c = e.focusOffset ?? 0,
          u = e.selection ?? {},
          h = e.colorId ? e.colorId : "#FFB6C6",
          g = e.highlightId ?? "";
        if (0 === i.length) return;
        if (!r || void 0 === r) return;
        (ne = !1), (ie = 0), (re = !0), p(), ge(o, a, s, l, c, i);
        const y = o.parent();
        let _ = o.html();
        if (void 0 === _ || null == _) return;
        let v = !1;
        const b = o.contents(),
          x = (function (e, t) {
            return {
              start: `<glasp class="${se}" style="font-weight: inherit !important;font-style: inherit !important;line-height: inherit !important;background-color: ${e} !important;cursor: pointer !important;" highlightid="${t}">`,
              end: ce,
            };
          })(h, g);
        for (let e = 0; e < b.length; e++)
          if (b[e].nodeType == Node.TEXT_NODE) {
            v = !0;
            break;
          }
        if (v) {
          let e, t, n;
          if (re) {
            (e = new RegExp(ue(oe), "g")),
              (t = new RegExp(ue(ae), "g")),
              (_ = _.replace(e, x.end).replace(t, x.start)),
              (n = new RegExp(le + de, "g"));
            const i = _.replace(n, "");
            he(o), o.html(i);
          } else
            (e = new RegExp(ue(oe), "g")),
              (t = new RegExp(ue(ae), "g")),
              (_ = _.replace(e, x.start).replace(t, x.end)),
              he(o),
              (o[0].innerHTML = _);
        } else
          for (let e = 0; e < b.length; e++) {
            let t,
              n,
              i,
              r = $(b[e]),
              o = r.html();
            if (
              "" != o.replace(/[\n\r\s]+/g, "") &&
              null != o &&
              null != o &&
              (!o || o.includes(oe))
            )
              if (re) {
                (t = new RegExp(ue(oe), "g")),
                  (n = new RegExp(ue(ae), "g")),
                  (o = o.replace(t, x.end).replace(n, x.start)),
                  (i = new RegExp(le + de, "g"));
                const e = o.replace(i, "");
                he(r), r.html(e);
              } else
                (t = new RegExp(ue(oe), "g")),
                  (n = new RegExp(ue(ae), "g")),
                  (o = o.replace(t, x.start).replace(n, x.end)),
                  he(r),
                  r.html(o);
          }
        if (
          (u.removeAllRanges && u.removeAllRanges(),
          y.find(`.${se}`).each((e, t) => {
            if ($(t).css("color")) {
              let e = $(t).css("color"),
                n = /^rgba/.test(e)
                  ? e.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([^abc]+)\)$/)
                  : e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
              if (
                Math.round(
                  (299 * parseInt(n[1]) +
                    587 * parseInt(n[2]) +
                    114 * parseInt(n[3])) /
                    1e3
                ) > 150
              ) {
                const e = n[1],
                  i = n[2],
                  r = n[3],
                  o =
                    Math.max(e, i, r) - Math.min(e, i, r) < 50
                      ? "rgb(53, 53, 53)"
                      : "rgb(51, 102, 187)";
                $(
                  t
                )[0].style.cssText = `background-color: ${h} !important; color: ${o} !important;`;
              }
            }
            t.addEventListener("mouseenter", P),
              t.addEventListener("click", z),
              t.addEventListener("mouseleave", O);
          }),
          !t && f())
        ) {
          const e = d(
            m.sidebar_iframe_doc,
            m.sidebar_copy_all,
            m.highlightEmptyEl,
            m.loadedHighlights
          );
          chrome.runtime.sendMessage({
            action: "highlight_store",
            data: [n, e],
          });
        }
      }
      function he(e) {
        Array.from(e.contents()).forEach((e, t, n) => {
          e.nodeType === Node.TEXT_NODE ? (e.nodeValue = "") : he($(e));
        });
      }
      function ge(e, t, n, i, r, o) {
        const a = o.length;
        Array.from(e.contents()).forEach((e, s, l) => {
          if (e.nodeType === Node.TEXT_NODE) {
            let s = 0;
            if (
              (ne ||
                (t.is(e) && ((ne = !0), (s = n)),
                i.is(e) && (ne ? (s = Math.min(n, r)) : ((ne = !0), (s = r)))),
              ne && ie < a)
            ) {
              let t,
                n = "";
              if (e.nodeValue.length) {
                t = e.nodeValue.length;
                const i = e.parentElement;
                ("GLASP" === i.nodeName && i.classList.contains(se)) ||
                  (re = !1);
                for (let i = 0; i < t; i++) {
                  if ((i === s && (n += oe), ie === a)) {
                    (n += ae), (n += e.nodeValue.substr(i));
                    break;
                  }
                  if (((n += e.nodeValue[i]), i >= s && ie < a)) {
                    for (; ie < a && o[ie].match(/\s/); ) ie++;
                    o[ie] === e.nodeValue[i] && ie++;
                  }
                  i === t - 1 && (n += ae);
                }
              }
              e.nodeValue = n;
            }
          } else ge($(e), t, n, i, r, o);
        });
      }
      function me(e, n, a) {
        let c,
          d,
          u,
          p,
          h,
          g,
          f = o() ? e.toString().replace(/\n/g, " ") : e.toString();
        for (let e = f.length - 1; e > 0; e--)
          if (" " != f[e] && "\n" != f[e]) {
            f = f.substring(0, e + 1);
            break;
          }
        const y =
            Math.random().toString(36).substring(2, 10) +
            Math.random().toString(36).substring(2, 10),
          _ = i(),
          v = _.url,
          b = _.fullUrl,
          x = document.createRange();
        let w = !1;
        if (!f) return;
        if (a) {
          m.tripleClicked = !1;
          let e = document.getSelection().getRangeAt(0).startContainer;
          if (
            (x.selectNode(e),
            document.getSelection().getRangeAt(0).startContainer.nodeType ==
              Node.ELEMENT_NODE)
          ) {
            const t = document.getSelection().getRangeAt(0)
              .startContainer.childNodes;
            for (let n = 0; n < t.length; n++)
              if (t[n].nodeType == Node.TEXT_NODE) {
                e = t[n];
                break;
              }
            x.selectNode(e);
          } else
            document.getSelection().getRangeAt(0).startContainer.nodeType ==
              Node.TEXT_NODE &&
              ("STRONG" == e.parentElement.nodeName
                ? ((c = e),
                  (d = 0),
                  (u = t(c)),
                  (p = e.parentNode.parentNode.lastChild),
                  (h = p.length),
                  (g = t(p)),
                  x.setStart(e.parentNode.parentNode, d),
                  x.setEnd(p, h),
                  (w = !0))
                : x.selectNode(e));
          if (x.startContainer.innerText.length > f.length) {
            let n = "";
            const i = document
              .getSelection()
              .toString()
              .replace(/[\n\r\s]+/g, "").length;
            for (
              let e = x.startOffset;
              e < x.startContainer.childNodes.length;
              e++
            )
              if (
                (x.startContainer.childNodes[e].nodeType == Node.TEXT_NODE
                  ? (n += x.startContainer.childNodes[e].wholeText)
                  : x.startContainer.childNodes[e].nodeType ==
                      Node.ELEMENT_NODE &&
                    (n += x.startContainer.childNodes[e].innerText),
                n.replace(/[\n\r\s]+/g, "").length == i)
              ) {
                (p = x.startContainer.childNodes[e]),
                  (h = p.length),
                  (g = t(p));
                break;
              }
            x.setStart(e, 0), x.setEnd(p, h), (c = e), (d = 0), (u = t(c));
          } else if (!w) {
            if ($(x.startContainer)[0].childNodes) {
              const e = $(x.startContainer)[0].childNodes;
              for (let t = 0; t < e.length; t++)
                if (e[t].nodeType == Node.TEXT_NODE) {
                  c = e[t];
                  break;
                }
            }
            (d = 0),
              (u = t(c)),
              (p = $(x.endContainer)[0].lastChild),
              (h = p.length),
              (g = t(p));
          }
        } else {
          const n = E(e);
          (c = n.anchorNode),
            (d = n.anchorOffset),
            (u = t(c)),
            (p = n.focusNode),
            (h = n.focusOffset),
            (g = t(p)),
            x.setStart(c, d),
            x.setEnd(p, h);
        }
        const C = r(),
          k = l();
        let L = x.commonAncestorContainer,
          T = t(L);
        for (; !L.innerHTML; ) (L = L.parentNode), (T = t(L));
        let N = -1,
          A = "";
        s() &&
          ((N = (function () {
            let e, t;
            const n = window.getSelection(),
              i = n.anchorNode,
              r = n.anchorOffset,
              o = n.focusNode,
              a = n.focusOffset;
            if (i == o) (e = r < a ? i : o), (t = r < a ? r : a);
            else {
              let s =
                n.anchorNode.compareDocumentPosition(n.focusNode) ===
                Node.DOCUMENT_POSITION_PRECEDING;
              (e = s ? o : i), (t = s ? a : r);
            }
            return e.parentElement.getAttribute("data-start-time") || -1;
          })()),
          (A = te())),
          pe(
            {
              selString: f,
              container: L,
              anchorNode: c,
              anchorOffset: d,
              focusNode: p,
              focusOffset: h,
              selection: e,
              colorId: n,
              highlightId: y,
            },
            !1,
            {
              selectionString: f,
              url: v,
              anchorOffset: d,
              focusOffset: h,
              containerQuery: T,
              anchorNodeQuery: u,
              focusNodeQuery: g,
              colorId: n,
              pageTitle: C,
              pageThumbnailPhoto: k,
              fullUrl: b,
              highlightid: y,
              yt_transcript_start: N,
              yt_transcript_lang: A,
            }
          );
      }
      function fe() {
        m.tooltipEl && m.tooltipEl.hide(),
          (m.hoverToolTimeout = null),
          Array.from($(".highlighter--highlighted")).forEach((e) => {
            "GLASP" == e.nodeName && (e.outerHTML = e.innerHTML),
              "IMG" == e.nodeName &&
                (e.classList.remove(
                  "highlighter--highlighted",
                  "glasp--highlighted--img"
                ),
                e.removeAttribute("highlightid"));
          }),
          (m.highlightsListEl.innerHTML = ""),
          p();
      }
      function ye(t, n) {
        const i = "#98FF7E" == t.colorId ? "#A2F8A0" : t.colorId;
        pe(
          {
            selString: t.string,
            container: e(t.container),
            anchorNode: e(t.anchorNode),
            anchorOffset: t.anchorOffset,
            focusNode: e(t.focusNode),
            focusOffset: t.focusOffset,
            selection: {},
            colorId: i,
            highlightId: t.highlightid,
          },
          n
        );
      }
      const _e = y()
          ? "\n    .share_hl_modal_bg {\n        display: flex;\n        position:fixed;\n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 100%;\n        z-index: 50;\n        overflow: hidden;\n        background-color: rgba(0, 0, 0, 0.6);\n    }\n\n    .share_hl_modal {\n        width: fit-content;\n        overflow: scroll;\n        background-color: #FFFFFF;\n        border-radius: 4px;\n        margin: auto;\n        padding: 24px 32px;\n    }\n\n    .share_hl_modal img {\n        max-width: 480px;\n        max-height: 380px;\n        box-shadow: 0px 4px 10px rgb(0,0,0,0.3);\n    }\n\n    .share_hl_close_btn_wrapper {\n        display: flex;\n        justify-content: right;\n        align-items: center;\n        height: 24px;\n        padding-bottom: 16px;\n    }\n\n    .share_hl_close_btn {\n        padding: 6px;\n        margin: auto;\n        margin-right: 0;\n        display: flex;\n        align-items: center;\n    }\n\n    .share_hl_close_btn:hover {\n        cursor: pointer;\n    }\n\n    .share_hl_close_btn img {\n        width: 18px !important;\n        height: 18px !important;\n        box-shadow: none !important;\n    }\n\n    .share_hl_img_wrapper {\n        width: 480px;\n        height: 380px;\n        min-height: 200px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .share_hl_color_options {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 32px 0 12px;\n    }\n\n    .share_hl_bgcolor_wrapper {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 8px;\n    }\n\n    .share_hl_bgcolor {\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        box-shadow: 0px 2px 6px rgb(0,0,0,0.2);\n    }\n\n    .share_hl_bgcolor:hover {\n        cursor: pointer;\n    }\n\n    .share_hl_selected_bgcolor {\n        box-shadow: rgba(42, 128, 255, 0.5) 0px 0px 0px 3px;\n    }\n\n    .share_hl_footer {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 32px 0 12px;\n    }\n\n    .orientation_selected {\n        color: #6297ff;\n        text-decoration: underline;\n    }\n\n    .share_hl_footer_left {\n        display: flex;\n        gap: 16px;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .share_hl_footer_right {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .share_hl_footer_right img {\n        width: 26px !important;\n        height: 26px !important;\n        box-shadow: none !important;\n        filter: grayscale(1);\n    }\n\n    .share_hl_footer_right img:hover {\n        cursor: pointer;\n        filter: grayscale(0);\n    }\n"
          : chrome.runtime.getURL("/css/shareHighlight.css"),
        ve = `\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    ${
          y()
            ? `<style>${_e}</style>`
            : `<link rel="stylesheet" type="text/css" href="${_e}">`
        }\n</head>\n<body>\n    <div class="share_hl_modal_bg" id="share_hl_modal_bg" style="display: flex;position:fixed;padding:0;margin:0;top:0;left:0;width: 100%;height: 100%;z-index: 50;overflow: hidden;background-color: rgba(0, 0, 0, 0.6);">\n        <div class="share_hl_modal" id="share_hl_modal" style="width: fit-content;overflow: scroll;background-color: #FFFFFF;border-radius: 4px;margin: auto;padding: 24px 32px;">\n            <div class="share_hl_close_btn_wrapper" style="display: flex;justify-content: right;align-items: center;height: 24px;padding-bottom: 16px;">\n                <div class="share_hl_close_btn" id="share_hl_close_btn" style="padding: 6px;margin: auto;margin-right: 0;display: flex;align-items: center;">\n                    <svg style="width: 18px !important;height: 18px !important;box-shadow: none !important;cursor:pointer;" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M3 3L21 21M3 21L21 3" stroke="#777777" stroke-width="2" stroke-linecap="round"/>\n                    </svg>\n                </div>\n            </div>\n            <div id="share_hl_img_wrapper" class="share_hl_img_wrapper" style="width: 480px;height: 380px;min-height: 200px;display: flex;justify-content: center;align-items: center;"></div>\n            <div class="share_hl_color_options" style="display: flex; justify-content: center; align-items: center; padding: 32px 0 12px;">\n                <div class="share_hl_bgcolor_wrapper" style="display: flex;justify-content: space-between;align-items: center;gap: 8px;">\n                    <div class="share_hl_bgcolor" style="background: #FFFFFF;cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="white"></div>\n                    <div class="share_hl_bgcolor" style="background: #fdffd4;cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="yellow"></div>\n                    <div class="share_hl_bgcolor" style="background: #fff4fe;cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="pink"></div>\n                    <div class="share_hl_bgcolor" style="background: linear-gradient(90deg, rgb(255 98 48) 0%, rgb(255 202 42) 100%);cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="orange"></div>\n                    <div class="share_hl_bgcolor" style="background: linear-gradient(90.88deg, #367bff 0%, #9C52D6 100%);cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="purple"></div>\n                    <div class="share_hl_bgcolor" style="background: linear-gradient(60deg, rgb(0 146 255) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%);cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="navy"></div>\n                    <div class="share_hl_bgcolor" style="background: #000000;cursor: pointer;width: 24px;height: 24px;border-radius: 50%;box-shadow: 0px 2px 6px rgb(0,0,0,0.2);" title="black"></div>\n                </div>\n            </div>\n            <div class="share_hl_footer" style="display: flex;justify-content: space-between;align-items: center;padding: 32px 0 12px;">\n                <div class="share_hl_footer_left" style="display: flex;gap: 16px;cursor: pointer;user-select: none;">\n                    <p class="share_hl_img_orient" id-img-orientation="square" style="margin: 0px;">Square</p>\n                    <p class="share_hl_img_orient" id-img-orientation="landscape" style="margin: 0px;">Landscape</p>\n                </div>\n                <div class="share_hl_footer_right" style="display: flex;justify-content: space-between;align-items: center;">\n                    <svg id="share_hl_save" style="width: 26px !important;height: 26px !important;margin: 0 10px;box-shadow: none !important;filter: grayscale(1);cursor:pointer;" width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M8 11V2M8 11L4 7M8 11L12 7" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n                        <path d="M14 11V14H2V11" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n                    </svg>\n                    <svg id="share_hl_facebook" style="width: 26px !important;height: 26px !important;margin: 0 10px;box-shadow: none !important;filter: grayscale(1);cursor:pointer;" width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M30 15.091C30 6.756 23.285 0 15 0C6.715 0 0 6.756 0 15.091C0 22.625 5.484 28.868 12.656 30V19.454H8.848V15.09H12.656V11.766C12.656 7.984 14.895 5.894 18.322 5.894C19.962 5.894 21.68 6.189 21.68 6.189V9.903H19.787C17.924 9.903 17.344 11.067 17.344 12.261V15.091H21.504L20.839 19.453H17.344V30C24.516 28.868 30 22.625 30 15.091Z" fill="#1877F2"/>\n                    </svg>\n                    <svg id="share_hl_twitter" style="width: 26px !important;height: 26px !important;margin: 0 10px;box-shadow: none !important;filter: grayscale(1);cursor:pointer;" width="26" height="26" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <mask id="mask0_342_0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">\n                        <rect width="60" height="60" fill="#C4C4C4"/>\n                        </mask>\n                        <g mask="url(#mask0_342_0)">\n                        <path d="M19.6109 53C40.743 53 52.3014 35.3009 52.3014 19.9523C52.3014 19.4496 52.3014 18.9492 52.2678 18.451C54.5164 16.8068 56.4574 14.7709 58 12.4388C55.9031 13.3781 53.6787 13.9941 51.401 14.2662C53.7994 12.8147 55.5945 10.5316 56.4522 7.84193C54.1968 9.19485 51.7294 10.1483 49.1565 10.6612C47.4242 8.79909 45.1331 7.56605 42.6378 7.15288C40.1425 6.73972 37.582 7.16946 35.3526 8.37562C33.1232 9.58178 31.3492 11.4971 30.3051 13.8252C29.2609 16.1533 29.0049 18.7644 29.5766 21.2544C25.0087 21.0229 20.54 19.8229 16.4606 17.7322C12.3812 15.6416 8.78235 12.707 5.8976 9.11909C4.42837 11.676 3.97837 14.703 4.63923 17.5835C5.3001 20.4641 7.02213 22.9818 9.45472 24.6239C7.6263 24.5691 5.83775 24.0705 4.24 23.1701C4.24 23.2177 4.24 23.2675 4.24 23.3173C4.24073 25.9989 5.15899 28.5978 6.83903 30.673C8.51908 32.7482 10.8575 34.1721 13.4576 34.7031C11.7661 35.1694 9.99138 35.2376 8.26976 34.9024C9.00394 37.2102 10.4333 39.2284 12.3579 40.6747C14.2825 42.1209 16.6062 42.9229 19.0038 42.9684C14.9354 46.2008 9.90957 47.9555 4.73504 47.9502C3.8209 47.9485 2.90766 47.8925 2 47.7827C7.25422 51.1913 13.3678 52.9994 19.6109 52.9909" fill="#1DA1F2"/>\n                        </g>\n                    </svg>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n</html>`;
      let be = "white",
        xe = "square";
      const we = ["white", "yellow", "pink", "green"],
        Ee = async (e, t, n, r) => {
          const o = i().fullUrl;
          document.getElementById("glasp-share-hl-iframe") &&
            document.getElementById("glasp-share-hl-iframe").remove(),
            document.body.insertAdjacentElement(
              "beforeend",
              (() => {
                let e = document.createElement("iframe");
                return (
                  (e.name = "glasp-share-hl-iframe"),
                  e.setAttribute("id", "glasp-share-hl-iframe"),
                  $(e).attr(
                    "style",
                    "width: 100% !important; height: 100%; margin: auto; position: fixed; top: 0px; right: 0px; z-index: 9000000000000000001;"
                  ),
                  e
                );
              })()
            );
          const a = document.getElementById("glasp-share-hl-iframe")
            .contentWindow.document;
          a.open(), a.write(ve), a.close();
          let s = await ke(await Ce(e, t, o));
          a
            .getElementById("share_hl_close_btn")
            .addEventListener("click", () => {
              document.getElementById("glasp-share-hl-iframe") &&
                document.getElementById("glasp-share-hl-iframe").remove();
            }),
            a
              .getElementById("share_hl_modal_bg")
              .addEventListener("click", (e) => {
                e.target === e.currentTarget &&
                  document.getElementById("glasp-share-hl-iframe") &&
                  document.getElementById("glasp-share-hl-iframe").remove();
              }),
            Array.from(a.getElementsByClassName("share_hl_bgcolor")).forEach(
              (n) => {
                be == n.getAttribute("title") &&
                  n.classList.add("share_hl_selected_bgcolor"),
                  n.addEventListener(
                    "click",
                    async () => {
                      n.classList.contains("share_hl_selected_bgcolor") ||
                        (Array.from(
                          a.getElementsByClassName("share_hl_bgcolor")
                        ).forEach((e) => {
                          e.classList.remove("share_hl_selected_bgcolor");
                        }),
                        n.classList.add("share_hl_selected_bgcolor"),
                        (be = n.getAttribute("title")),
                        (s = await ke(await Ce(e, t, o))));
                    },
                    !1
                  );
              }
            ),
            Array.from(a.getElementsByClassName("share_hl_img_orient")).forEach(
              (n) => {
                xe == n.getAttribute("id-img-orientation") &&
                  n.classList.add("orientation_selected"),
                  n.addEventListener(
                    "click",
                    async () => {
                      n.classList.contains("orientation_selected") ||
                        (Array.from(
                          a.getElementsByClassName("share_hl_img_orient")
                        ).forEach((e) => {
                          e.classList.remove("orientation_selected");
                        }),
                        n.classList.add("orientation_selected"),
                        (xe = n.getAttribute("id-img-orientation")),
                        (s = await ke(await Ce(e, t, o))));
                    },
                    !1
                  );
              }
            );
          const l = window.getSelection();
          a
            .getElementById("share_hl_save")
            .addEventListener("click", async () => {
              !(async function (e) {
                const t = document.getElementById("glasp-share-hl-iframe")
                    .contentWindow.document,
                  n = (await e).toDataURL("image/png", 1),
                  i = t.createElement("a");
                i.setAttribute("href", n),
                  i.setAttribute("download", "highlight_glasp.png"),
                  t.body.appendChild(i),
                  i.click(),
                  i.remove();
              })(s),
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "extension_share_hl_save_img_click",
                }),
                r || me(l, "#FFB6C6");
            }),
            a
              .getElementById("share_hl_twitter")
              .addEventListener("click", async () => {
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "extension_share_hl_twitter_click",
                });
                const n = `"${e.text}"`,
                  i = `https://twitter.com/intent/tweet?${new URLSearchParams([
                    ["text", `${n}\n\n${t} via @_Glasp\n${o}`],
                  ]).toString()}`;
                window.open(
                  i,
                  "_blank",
                  "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=600"
                ),
                  r || me(l, "#FFB6C6");
              }),
            a
              .getElementById("share_hl_facebook")
              .addEventListener("click", async () => {
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "extension_share_hl_facebook_click",
                });
                const t = `"${e.text}"`,
                  n = `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams(
                    [["u", o]]
                  ).toString()}&quote=${t}`;
                window.open(
                  n,
                  "_blank",
                  "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=700"
                ),
                  r || me(l, "#FFB6C6");
              });
        };
      async function Ce(e, t, n) {
        const i = "square" == xe,
          r = i ? "400px" : "700px",
          o = i ? "400px" : "364px",
          a = i ? "450" : "800",
          s = i ? "30px 25px 20px" : "50px 50px 20px",
          l = new URL(n),
          c =
            ["medium.com", "note.com"].includes(l.host) &&
            "/" !== l.pathname &&
            l.pathname.split("/").length
              ? l.host + "/" + l.pathname.split("/")[1]
              : l.host;
        let d = !1;
        const u = Le(t[0]).length,
          p = Le(t[Math.floor(t.length / 3)]).length,
          h = Le(t[Math.floor((2 * t.length) / 3)]).length;
        (u >= 2 || p >= 2 || h >= 2) && (d = !0);
        const g = e.text.length,
          m = we.includes(be) ? "#353535" : "#FFFFFF",
          f = we.includes(be) ? "#575757" : "#FFFFFF",
          y = we.includes(be) ? "#8B8B8B" : "#FFFFFF",
          _ = we.includes(be) ? "#6297ff" : "#FFFFFF";
        we.includes(be) && e.color;
        let v = i
          ? g > 300
            ? 23
            : g > 250
            ? 26
            : g > 200
            ? 28
            : g > 150
            ? 31
            : g > 100
            ? 33
            : 37
          : g > 300
          ? 25
          : g > 200
          ? 30
          : g > 120
          ? 34
          : 38;
        d && (v -= 6);
        const b = `font-family: serif; font-weight: normal; color: ${f}; margin: 0px; font-size: ${
            i ? "17px" : "21px"
          }; line-height: 1.3em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; letter-spacing: -0.02em; font-style: italic;`,
          x = `font-family: serif; font-style: normal; font-weight: normal; color: ${y}; margin: 0px; font-size: ${
            i ? "16px" : "19px"
          }; margin-top:3px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;`,
          w = `\n    <div style="width: ${r}; height: ${o}; padding: ${s}; display: flex; align-items: center; position: relative;">\n        <div style="display: grid; width: 100%; height: 100%; align-content: center; justify-content: center;">\n            <div style="height: 280px; display:grid; align-content: center; justify-content: center;">\n                <p style="${
            i
              ? `font-family: serif;; font-style: italic; font-weight: normal; color: ${m}; margin: 0px; display: -webkit-box; -webkit-line-clamp: 9; -webkit-box-orient: vertical; overflow: hidden; max-height: 280px; font-size: ${v}px; line-height: 1.2em; text-align: center;`
              : `font-family: sarif; font-style: normal; font-weight: normal; color: ${m}; margin: 0px; padding-left: 22px; font-style: italic; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; overflow: hidden; max-height: 272px; font-size: ${v}px; line-height: 1.4em;`
          }">${e.text
            .replaceAll("\n", "<br />")
            .replace(
              /&(?!#?[a-z0-9]+;)/g,
              "&amp;"
            )}</p>\n            </div>\n            <div style="height: 90px; width: 90%; display:grid; align-content: center; text-align: right; margin-left: auto;">\n                <p style="${b}">${t.replace(
            /&(?!#?[a-z0-9]+;)/g,
            "&amp;"
          )}</p>\n                <p style="${x}">${c.replace(
            /&(?!#?[a-z0-9]+;)/g,
            "&amp;"
          )}</p>\n            </div>\n            <div style="height: 20px; text-align: right;">\n                <p style="${x} color: ${_};">#glaspquotes</p>\n            </div>\n        </div>\n    </div>`;
        let E = "";
        switch (be) {
          case "white":
            E =
              '\n            <stop offset="0%" style="stop-color:#fcfcfc;stop-opacity:1"></stop>';
            break;
          case "black":
            E =
              '\n            <stop offset="0%" style="stop-color:#000000;stop-opacity:1"></stop>';
            break;
          case "yellow":
            E =
              '\n            <stop offset="0%" style="stop-color:#feffe5;stop-opacity:1"></stop>';
            break;
          case "pink":
            E =
              '\n            <stop offset="0%" style="stop-color:#fff4fe;stop-opacity:1"></stop>';
            break;
          case "green":
            E =
              '\n            <stop offset="0%" style="stop-color:#ddffe5;stop-opacity:1"></stop>';
            break;
          case "navy":
            E =
              '\n            <stop offset="0%" style="stop-color:rgb(0,146,255);stop-opacity:1"></stop>\n            <stop offset="20%" style="stop-color:rgb(9,9,121,255);stop-opacity:1"></stop>\n            <stop offset="100%" style="stop-color:rgb(2,0,36);stop-opacity:1"></stop>';
            break;
          case "purple":
            E =
              '\n            <stop offset="0%" style="stop-color:rgb(54,123,255);stop-opacity:1" />\n            <stop offset="100%" style="stop-color:rgb(156,82,214);stop-opacity:1" />';
            break;
          case "orange":
            E =
              '\n            <stop offset="0%" style="stop-color:#ffc414;stop-opacity:1"></stop>\n            <stop offset="30%" style="stop-color:#ff7127;stop-opacity:1"></stop>';
        }
        const C = new Blob(
            [
              `\n    <svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="450">\n        <defs>\n            <linearGradient id="grad1" x1="0%" y1="110%" x2="100%" y2="0%">\n                ${E}\n            </linearGradient>\n        </defs>\n        <rect x="0" y="0" width="${a}" height="450" fill="url(#grad1)" />\n        <foreignObject width="100%" height="100%" fill="url(#grad1)">\n            <div xmlns="http://www.w3.org/1999/xhtml">${w}</div>\n        </foreignObject>\n    </svg>`,
            ],
            {
              type: "image/svg+xml;charset=utf-8",
            }
          ),
          k = await ((L = C),
          new Promise((e, t) => {
            const n = new FileReader();
            (n.onloadend = () => e(n.result)), n.readAsDataURL(L);
          }));
        var L;
        return await k;
      }
      async function ke(e) {
        const t = document.getElementById("glasp-share-hl-iframe").contentWindow
            .document,
          n = t.createElement("canvas");
        (n.width = "square" == xe ? "450" : "800"),
          (n.height = 450),
          (n.style.boxShadow = "0px 4px 8px rgb(0,0,0,0.2) !important");
        const i = n.getContext("2d"),
          r = await e,
          o = new Image();
        return (
          o.setAttribute("id", "share_hl_img"),
          o.setAttribute("crossOrigin", "anonymous"),
          (o.src = r),
          (o.style.maxWidth = "480px"),
          (o.style.maxHeight = "380px"),
          (t.getElementById("share_hl_img_wrapper").innerHTML = ""),
          t.getElementById("share_hl_img_wrapper").appendChild(o),
          await (async function (e, t, n) {
            return (
              (e.onload = () => {
                (t.width = 3 * t.width),
                  (t.height = 3 * t.height),
                  n.drawImage(e, 0, 0, t.width, t.height),
                  (e.onload = () => {
                    n.drawImage(e, 0, 0);
                  }),
                  (e.src = t.toDataURL("image/png", 1));
              }),
              (e.src = r),
              await t
            );
          })(o, n, i)
        );
      }
      function Le(e) {
        return decodeURIComponent(encodeURIComponent(escape(e))).replace(
          /%([0-9A-F]{2})/gi,
          function (e, t) {
            var n = parseInt(t, 16);
            return String.fromCharCode(n);
          }
        );
      }
      function Te(e) {
        navigator.clipboard
          ? y()
            ? (function (e) {
                const t = "text/plain",
                  n = new Blob([e], {
                    type: t,
                  }),
                  i = [
                    new ClipboardItem({
                      [t]: n,
                    }),
                  ];
                navigator.clipboard.write(i).then(
                  () => {},
                  (e) => {
                    console.log(`copy failed: ${e}`);
                  }
                );
              })(e)
            : navigator.clipboard.writeText(e).then(
                function () {},
                function (e) {}
              )
          : (function (e) {
              var t = document.createElement("textarea");
              (t.value = e),
                (t.style.top = "0"),
                (t.style.left = "0"),
                (t.style.position = "fixed"),
                document.body.appendChild(t),
                t.focus(),
                t.select();
              try {
                document.execCommand("copy");
              } catch (e) {}
              document.body.removeChild(t);
            })(e);
      }
      function Ne() {
        let e = "";
        const t = r(),
          n = l(),
          o = [
            "https://storage.googleapis.com/glasp.co/src/img/thumbnail_wide.png",
            "https://storage.googleapis.com/glasp.co/src/img/thumbnail_pdf.png",
          ].includes(n)
            ? ""
            : n,
          a = i().fullUrl,
          c = m.userTagList
            ? m.userTagList.map((e) => "#" + e.replace(/\s+/g, "-")).join(", ")
            : "",
          d = m.userPagenote ? m.userPagenote : "";
        (e += `# ${t}\n\n`),
          (e += s() ? `![](${a})\n` : "" == o ? "" : `![](${o})\n\n`),
          (e += "### Metadata\n\n"),
          (e += `- Title: ${t}\n`),
          (e += "" !== c ? `- Tags: ${c}\n` : ""),
          (e += `- URL: ${a}\n`),
          !d || (e += `### Page Comment\n\n- ${d}\n\n`),
          (e += "### Highlights & Notes\n\n");
        for (let t = 0; t < m.loadedHighlights.length; t++) {
          const n = m.loadedHighlights[t],
            i = n.string,
            r = n.note ? n.note : "";
          "yt_transcript_start" in n && -1 !== n.yt_transcript_start
            ? (e += `- ([${ee(n.yt_transcript_start)}](${a}&t=${
                n.yt_transcript_start
              }s)) ${i.replace(/\n/g, " ")}\n`)
            : (e += `- ${i.replace(/\n/g, " ")}\n`),
            (e += "" !== r ? `  - Notes: ${r}\n` : "");
        }
        (e += "\n\n"), Te(e);
      }
      function Ae(e) {
        const t = i().fullUrl,
          n = r(),
          o = m.sidebar_iframe_doc.getElementById("page_note_content"),
          a =
            "" !== m.userPagenote || null !== m.userPagenote
              ? m.userPagenote
              : "" !== o.innerHTML || null !== o.innerHTML
              ? o.innerHTML
              : "";
        switch (e.currentTarget.getAttribute("id")) {
          case "email_share":
            !(function () {
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_share_email",
              });
              let e = `Highlights on "${n}"`,
                i = "",
                r = "",
                o = 0;
              if (0 !== m.loadedHighlights.length)
                for (let e = 0; e < m.loadedHighlights.length; e++) {
                  const t = m.loadedHighlights[e].string;
                  let n = "";
                  "note" in m.loadedHighlights[e] &&
                    "" !== m.loadedHighlights[e].note &&
                    ((o += 1), (n = m.loadedHighlights[e].note)),
                    (r +=
                      "" !== n
                        ? `(${e + 1}) ${t}<br>  * Note: ${n}<br><br>`
                        : `(${e + 1}) ${t}<br><br>`);
                }
              if (
                ((i += `<br>Title:<br>${n}<br>${t}<br>`),
                0 !== m.userTagList.length)
              ) {
                let e = "";
                for (let t = 0; t < m.userTagList.length; t++)
                  e += 0 == t ? `${m.userTagList[t]}` : `, ${m.userTagList[t]}`;
                i += `<br>Tags:<br>${e}<br>`;
              }
              (i +=
                "" !== a && "" !== r
                  ? `<br>Page Note:<br>${a.replaceAll("\n", "%0D%0A")}<br><br>${
                      m.loadedHighlights.length
                    } Highlights and ${o} Notes:<br>${r}<br>`
                  : "" !== a && "" == r
                  ? `<br>Page Note:<br>${a.replaceAll("\n", "%0D%0A")}<br>`
                  : "" !== r
                  ? `<br>${m.loadedHighlights.length} Highlights and ${o} Notes:<br>${r}<br>`
                  : "<br>"),
                (i += "Highlighted via Glasp<br>https://glasp.co");
              let s = `mailto:?subject=${e}&body=${i.replaceAll(
                "<br>",
                "%0D%0A"
              )}`;
              window.open(s, "_self");
            })();
            break;
          case "linkedin_share":
            !(function () {
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_share_linkedin",
              });
              const e = `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams(
                [["url", t]]
              ).toString()}`;
              window.open(
                e,
                "_blank",
                "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=700"
              );
            })();
            break;
          case "fb_share":
            !(function () {
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_share_facebook",
              });
              const e = `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams(
                [["u", t]]
              ).toString()}`;
              window.open(
                e,
                "_blank",
                "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=700"
              );
            })();
            break;
          case "twitter_share":
            !(function () {
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_share_twitter",
              });
              const e =
                  0 !== m.loadedHighlights.length
                    ? `"${m.loadedHighlights[0].string}"`
                    : "",
                i = `https://twitter.com/intent/tweet?${new URLSearchParams([
                  ["text", `${e}\n\n${n} via @_Glasp\n${t}`],
                ]).toString()}`;
              window.open(
                i,
                "_blank",
                "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=600"
              );
            })();
        }
      }
      function Me(e, t) {
        chrome.runtime.sendMessage({
          action: "amplitude_log",
          evtName: t,
        });
        const n = `https://twitter.com/intent/tweet?${new URLSearchParams([
          ["text", e],
        ]).toString()}`;
        window.open(
          n,
          "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=550,height=600"
        );
      }
      function Be(e, t) {
        chrome.runtime.sendMessage({
          action: "update_exclude_domain",
          data: {
            domain: t,
            action: e,
          },
        });
      }
      function Se(e) {
        if (
          (m.sidebar_iframe_doc &&
            Array.from(
              m.sidebar_iframe_doc.getElementsByClassName("content_tag_icon")
            ).forEach((e) => {
              e.remove();
            }),
          (m.sidebar_iframe_doc.getElementById("content_tag_list").innerHTML =
            ""),
          m.sidebar_iframe_doc
            .getElementById("content_tag_list")
            .insertAdjacentHTML(
              "beforeend",
              `${Array.from(e)
                .map(
                  (e) =>
                    `<div class="content_tag" title="${e}" style="font-size: 13px;line-height: 16px;text-align: center;padding: 3px 8px;border-radius: 13px;color: #3D3D3D;background-color: #E2E2E2;margin: 0px 3px;user-select: none;display: flex;justify-content: left;align-items: center;white-space: nowrap;">\n                    <div>${e}</div>\n                    ${
                      m.selectedUsersUID == m.uid || null == m.selectedUsersUID
                        ? '<div class="content_tag_delete_btn" style="display: none;">×</div>'
                        : ""
                    }\n                </div>`
                )
                .join("")}`
            ),
          m.selectedUsersUID == m.uid || null == m.selectedUsersUID)
        ) {
          t(),
            m.sidebar_iframe_doc
              .getElementById("content_tag_wrapper")
              .insertAdjacentHTML(
                "beforeend",
                '<button id="content_tag_icon" style="outline: none;background: transparent;display: flex;padding: 0;border: none;"><svg  class="content_tag_icon" width="33" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M26.6146 19.9179L19.1258 12.429C18.945 12.2483 18.8403 12.0051 18.8332 11.7496L18.6126 3.77648C18.5967 3.20267 19.0661 2.73331 19.6399 2.74919L27.613 2.96986C27.8685 2.97694 28.1117 3.08161 28.2924 3.26238L35.7813 10.7512C36.1718 11.1418 36.1718 11.7749 35.7813 12.1654L28.0288 19.9179C27.6383 20.3084 27.0051 20.3084 26.6146 19.9179Z" stroke="#8B8B8B" stroke-width="2"/>\n            <ellipse cx="23.8596" cy="7.70834" rx="1.5" ry="1.5" transform="rotate(-45 23.8596 7.70834)" fill="#8B8B8B"/>\n            <path d="M3 11H13M8 6V16" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg></button>'
              );
          const e = m.sidebar_iframe_doc.getElementById("content_tag_icon"),
            i = m.sidebar_iframe_doc.getElementById("content_tag_list");
          e.addEventListener(
            "click",
            function (t) {
              (i.style.border = "1px solid rgb(0, 0, 0, 0.1)"),
                (i.style.marginLeft = "-1px"),
                (i.style.marginRight = "-1px"),
                (i.style.width = "100%"),
                (e.style.display = "none"),
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "sidebar_tag_focus",
                }),
                0 == m.userTags.length &&
                  (chrome.runtime.sendMessage({
                    action: "get_user_tags",
                  }),
                  setTimeout(() => {
                    const e = m.sidebar_iframe_doc.getElementById(
                        "new_content_tag_input"
                      ),
                      t =
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "tag_suggestion"
                        );
                    m.userTags.length > 0 &&
                      0 == t.length &&
                      e &&
                      "" == e.value &&
                      o(a());
                  }, 1500)),
                n();
            },
            !1
          ),
            $(document)
              .find("body")
              .bind("mousedown", function (t) {
                $(t.target).closest(
                  ".content_tag_input, .tag_suggestion_wrapper, .content_tag"
                ).length ||
                  ((e.style.display = "flex"),
                  (i.style.width = "fit-content"),
                  (i.style.border = "none"),
                  (i.style.marginLeft = "0px"),
                  (i.style.marginRight = "3px")),
                  $(t.target).closest(".content_tag").length ||
                    (Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName("content_tag")
                    ).forEach((e) => {
                      e.style.backgroundColor = "#E2E2E2";
                    }),
                    Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "content_tag_delete_btn"
                      )
                    ).forEach((e) => {
                      e.style.display = "none";
                    })),
                  $(t.target).closest(
                    ".content_tag_input, .content_tag, .tag_suggestion_wrapper"
                  ).length ||
                    (m.sidebar_iframe_doc &&
                      (Array.from(
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "content_tag_input"
                        )
                      ).forEach((e) => {
                        e.remove();
                      }),
                      Array.from(
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "tag_suggestion_div"
                        )
                      ).forEach((e) => {
                        e.remove();
                      })));
              }),
            m.sidebar_element.find("body").bind("mousedown", function (t) {
              $(t.target).closest(
                ".content_tag_input, .tag_suggestion_wrapper, .content_tag"
              ).length ||
                ((e.style.display = "flex"),
                (i.style.width = "fit-content"),
                (i.style.border = "none"),
                (i.style.marginLeft = "0px"),
                (i.style.marginRight = "3px")),
                $(t.target).closest(".content_tag").length ||
                  (Array.from(
                    m.sidebar_iframe_doc.getElementsByClassName("content_tag")
                  ).forEach((e) => {
                    e.style.backgroundColor = "#E2E2E2";
                  }),
                  Array.from(
                    m.sidebar_iframe_doc.getElementsByClassName(
                      "content_tag_delete_btn"
                    )
                  ).forEach((e) => {
                    e.style.display = "none";
                  })),
                $(t.target).closest(
                  ".content_tag_input, .content_tag, .tag_suggestion_wrapper"
                ).length ||
                  (m.sidebar_iframe_doc &&
                    (Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "content_tag_input"
                      )
                    ).forEach((e) => {
                      e.remove();
                    }),
                    Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "tag_suggestion_div"
                      )
                    ).forEach((e) => {
                      e.remove();
                    })));
            });
        }
        function t() {
          m.sidebar_iframe_doc &&
            Array.from(
              m.sidebar_iframe_doc.getElementsByClassName("content_tag")
            ).forEach((e) => {
              e.outerHTML = e.outerHTML;
            }),
            Array.from(
              m.sidebar_iframe_doc.getElementsByClassName("content_tag")
            ).forEach((n, o, a) => {
              n.addEventListener(
                "click",
                function (a) {
                  const s = m.sidebar_iframe_doc.getElementsByClassName(
                    "content_tag_delete_btn"
                  )[o];
                  if (
                    ((s.style.display =
                      "block" == s.style.display ? "none" : "block"),
                    (n.style.backgroundColor =
                      "#D2D2D2" == n.style.backgroundColor
                        ? "#E2E2E2"
                        : "#D2D2D2"),
                    a.stopPropagation(),
                    a.target == s)
                  ) {
                    for (let t = 0; t < e.length; t++)
                      e[t] == n.getAttribute("title") && e.splice(t, 1);
                    n.remove();
                    const o = i(),
                      a = o.url,
                      s = o.fullUrl,
                      c = r(),
                      d = l(),
                      u = {
                        url: a,
                        fullUrl: s,
                        userTagList: e,
                        tagString: n.getAttribute("title"),
                        title: c,
                        thumbnail: d,
                      };
                    chrome.runtime.sendMessage({
                      action: "tag_delete",
                      data: u,
                    }),
                      t();
                  }
                },
                !1
              );
            });
        }
        function n() {
          m.sidebar_iframe_doc
            .getElementById("content_tag_list")
            .insertAdjacentHTML(
              "beforeend",
              '<input class="content_tag_input" id="new_content_tag_input" data-lpignore="true" autocomplete="off" placeholder="Add a tag..." maxlength="25">'
            ),
            $(
              m.sidebar_iframe_doc.getElementById("new_content_tag_input")
            ).focus(),
            o(a()),
            m.sidebar_iframe_doc
              .getElementById("new_content_tag_input")
              .addEventListener(
                "input",
                function (t) {
                  (this.style.width = 80 + 15 * (this.value.length + 1) + "px"),
                    m.sidebar_iframe_doc &&
                      Array.from(
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "tag_suggestion_div"
                        )
                      ).forEach((e) => {
                        e.remove();
                      }),
                    o(
                      "" == t.target.value
                        ? a()
                        : (function (t) {
                            const n = [];
                            return (
                              Array.from(m.userTags).forEach((i) => {
                                const r = i.toLowerCase(),
                                  o = t.toLowerCase();
                                e.includes(i) ||
                                  (r.includes(o) &&
                                    !n.includes(i) &&
                                    (o[0] == r[0] ? n.unshift(i) : n.push(i)));
                              }),
                              n
                            );
                          })(t.target.value)
                    );
                },
                !1
              );
          let t,
            n = -1;
          m.sidebar_iframe_doc
            .getElementById("new_content_tag_input")
            .addEventListener(
              "keydown",
              function (e) {
                if ("Enter" == e.key) {
                  if (t) return void s(t.innerText);
                  s(e.target.value);
                }
                if (
                  "ArrowDown" == e.key &&
                  m.sidebar_iframe_doc.getElementsByClassName("tag_suggestion")
                    .length > 0
                ) {
                  e.preventDefault();
                  const i =
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "tag_suggestion"
                      ).length,
                    r = -1 == n || n + 1 >= i ? 0 : n + 1;
                  (t =
                    m.sidebar_iframe_doc.getElementsByClassName(
                      "tag_suggestion"
                    )[r]),
                    Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "tag_suggestion"
                      )
                    ).forEach((e) => {
                      e.style.backgroundColor = "transparent";
                    }),
                    (m.sidebar_iframe_doc.getElementsByClassName(
                      "tag_suggestion"
                    )[r].style.backgroundColor = "#EAEAEA"),
                    (n = r);
                }
                if (
                  "ArrowUp" == e.key &&
                  m.sidebar_iframe_doc.getElementsByClassName("tag_suggestion")
                    .length > 0
                ) {
                  e.preventDefault();
                  const i =
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "tag_suggestion"
                      ).length,
                    r = -1 == n || 0 == n ? i - 1 : n - 1;
                  (t =
                    m.sidebar_iframe_doc.getElementsByClassName(
                      "tag_suggestion"
                    )[r]),
                    Array.from(
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "tag_suggestion"
                      )
                    ).forEach((e) => {
                      e.style.backgroundColor = "transparent";
                    }),
                    (m.sidebar_iframe_doc.getElementsByClassName(
                      "tag_suggestion"
                    )[r].style.backgroundColor = "#EAEAEA"),
                    (n = r);
                }
              },
              !1
            );
        }
        function o(e) {
          m.sidebar_iframe_doc &&
            Array.from(
              m.sidebar_iframe_doc.getElementsByClassName("tag_suggestion_div")
            ).forEach((e) => {
              e.remove();
            }),
            m.sidebar_iframe_doc
              .getElementById("content_tag_wrapper")
              .insertAdjacentHTML(
                "afterend",
                `<div class="tag_suggestion_div" id="tag_suggestion_div" style="position:relative;">\n            <div style="position:absolute;background-color: #FFFFFF;box-shadow: rgb(0 0 0 / 25%) 0 2px 10px 1px;border-radius: 3px;user-select: none;top: 4px;left: 40px;height: fit-content;max-height: 206px;width: 237px;overflow: scroll;z-index: 10;" class="tag_suggestion_wrapper" id="tag_suggestion_wrapper">\n                ${Array.from(
                  e
                )
                  .map((e) =>
                    e
                      ? `<div class="tag_suggestion" style="padding: 5px 14px;">${e}</div>`
                      : ""
                  )
                  .join("")}\n            </div>\n        </div>`
              ),
            (m.sidebar_iframe_doc.getElementById(
              "tag_suggestion_wrapper"
            ).style.minWidth =
              m.sidebar_iframe_doc.getElementById("content_tag_icon")
                .clientWidth + "px"),
            m.sidebar_iframe_doc
              .getElementById("tag_suggestion_wrapper")
              .addEventListener(
                "mouseup",
                function (e) {
                  m.sidebar_iframe_doc
                    .getElementById("tag_suggestion_div")
                    .remove(),
                    s(e.target.innerText);
                },
                !1
              );
        }
        function a() {
          const t = [],
            n = (function (e) {
              const t = {};
              for (let n = 0; n < e.length; n++) t[e[n]] = 1 + (t[e[n]] || 0);
              const n = [];
              for (let e in t) n.push([e, t[e]]);
              return (
                n.sort(function (e, t) {
                  return t[1] - e[1];
                }),
                n
              );
            })(m.userTags);
          return (
            Array.from(n).forEach((n, i, r) => {
              const o = n[0];
              i > 30 || e.includes(o) || t.includes(o) || t.push(o);
            }),
            t
          );
        }
        function s(o) {
          if ("Untagged Items" == o || !o.replace(/\s/g, "").length) return;
          if (e.includes(o)) return;
          m.sidebar_iframe_doc.getElementById("new_content_tag_input").remove(),
            m.sidebar_iframe_doc
              .getElementById("content_tag_list")
              .insertAdjacentHTML(
                "beforeend",
                `<div class="content_tag" title="${o}" style="font-size: 13px;line-height: 16px;text-align: center;padding: 3px 8px;border-radius: 13px;color: #3D3D3D;background-color: #E2E2E2;margin: 0px 3px;user-select: none;display: flex;justify-content: left;align-items: center;white-space: nowrap;">\n            <div>${o}</div>\n            <div class="content_tag_delete_btn" style="display: none;">×</div>\n        </div>`
              ),
            e.push(o),
            t(),
            n();
          const a = i(),
            s = a.url,
            c = a.fullUrl,
            d = r(),
            u = l(),
            p = {
              url: s,
              fullUrl: c,
              userTagList: e,
              newTagInput: o,
              title: d,
              thumbnail: u,
            };
          chrome.runtime.sendMessage({
            action: "tag_add",
            data: p,
          });
        }
      }
      function Ie(e) {
        let t = !(!e || "" === e),
          n = m.sidebar_iframe_doc.getElementById("page_note_section");
        n.innerHTML = "";
        const o = m.viewingOthersHLs ? m.selectedUsersPhotoURL : m.photoURL,
          a = m.viewingOthersHLs ? m.selectedUserUsername : m.username,
          s = `\n    <div class="sidebar_section_title_wrapper" id="pagenote_title" style="display: flex;justify-content: left;align-items: center;padding: 2vw 5vw;height: 24px;width: 90vw;">\n        <div class="sidebar_section_title" style="font-size: 16px;font-weight: bold;">Page Comment</div>\n        ${
            m.viewingOthersHLs
              ? ""
              : '<div class="page_note_action_btn_wrapper" id="page_note_action_btn_wrapper" style="display: block;user-select: none;margin-left: auto;width: max-content;">\n                <button class="page_note_action_btn" id="page_note_save_btn" style="display: none;width: 60px;height: 24px;border-radius: 4px;border: none;font-size: 13px;line-height: 13px;color: white;outline: none;background-color: #209FF9;">Save</button>\n            </div>'
          }\n    </div>\n    <div class="dashboard_pn" id="dashboard_pn_container" style="display: flex;justify-content: left;align-items: flex-start;padding: 0px 5vw 10px;">\n        ${
            m.viewingOthersHLs
              ? `<img class="dashboard_pn_photo" style="height:30px;width:30px;border-radius: 50%;margin-right: 8px;cursor: pointer;" src="${o}">`
              : `<a href="https://glasp.co/#/${a}" target="_blank"><img class="dashboard_pn_photo" style="height:30px;width:30px;border-radius: 50%;margin-right: 8px;cursor: pointer;" src="${o}"></a>`
          }\n        <div class="dashboard_pn_wrapper" id="dashboard_pn_wrapper" style="padding: 10px 14px;border-radius: 16px;background-color: #eceff0;width: 68vw;height: fit-content;min-height: 20px;border-radius: 20px;padding: 8px 14px;">\n            <div class="dashboard_pn_textarea" id="content_pagenote" style="outline: none;border: none;background-color: #eceff0;resize: none;padding: 0;height: fit-content;min-height: 20px;font-size: 13px;width: 100%;line-height: 20px;cursor: text;" placeholder="Leave your thoughts, findings, etc" contenteditable="false">${
            e ? h(e.replace(/[<]/g, "&lt")).replace(/\n/g, "<br />") : ""
          }</div>\n        </div>\n    </div>`;
        if (
          (m.sidebar_iframe_doc.getElementById(
            "page_note_action_btn_wrapper"
          ) &&
            m.sidebar_iframe_doc
              .getElementById("page_note_action_btn_wrapper")
              .remove(),
          (!t && m.viewingOthersHLs) || n.insertAdjacentHTML("beforeend", s),
          m.selectedUsersUID == m.uid || null == m.selectedUsersUID)
        ) {
          const e = m.sidebar_iframe_doc.getElementById("content_pagenote");
          let t,
            n = "",
            o = m.sidebar_iframe_doc.getElementById("page_note_save_btn");
          function a(e, t) {
            t && (o.innerText = "Saving...");
            const n = i(),
              a = {
                url: n.url,
                fullUrl: n.fullUrl,
                pagenote: e,
                title: r(),
                thumbnail: l(),
              };
            chrome.runtime.sendMessage(
              {
                action: "pagenote_store",
                data: a,
              },
              (e) => {
                t &&
                  "success" === e.result &&
                  ((o.innerText = "Saved!"),
                  setTimeout(() => {
                    (o.innerText = "Save"), (o.style.display = "none");
                  }, 1200));
              }
            );
          }
          e.addEventListener("paste", (i) => {
            !(function (e, t) {
              e.preventDefault();
              const n = e.clipboardData
                  ? (e.originalEvent || e).clipboardData.getData("text/plain")
                  : window.clipboardData
                  ? window.clipboardData.getData("Text")
                  : "",
                i = t.getSelection().getRangeAt(0);
              i.deleteContents();
              const r = t.createTextNode(n);
              i.insertNode(r), i.selectNodeContents(r), i.collapse(!1);
              const o = window.getSelection();
              o.removeAllRanges(), o.addRange(i);
            })(i, m.sidebar_iframe_doc),
              clearTimeout(t),
              (t = setTimeout(() => {
                const t =
                  "" == e.innerText.replace(/\s|\n/g, "") ? "" : e.innerText;
                (n = t), a(t, !1);
              }, 1e3));
          }),
            e.addEventListener(
              "click",
              function (t) {
                t.target === t.currentTarget &&
                  (e.setAttribute("contenteditable", !0),
                  e.focus(),
                  (n = e.innerText),
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "sidebar_page_note_focus",
                  }));
              },
              !1
            ),
            e.addEventListener("blur", function (t) {
              "" == e.innerText.replace(/\s|\n/g, "") && (e.innerText = ""),
                (e.innerHTML = h(e.innerText.replace(/[<]/g, "&lt")).replace(
                  /\n/g,
                  "<br />"
                )),
                e.setAttribute("contenteditable", !1);
            }),
            e.addEventListener(
              "input",
              function (i) {
                (o.style.display = e.innerText !== n ? "block" : "none"),
                  clearTimeout(t),
                  (t = setTimeout(() => {
                    const t =
                      "" == e.innerText.replace(/\s|\n/g, "")
                        ? ""
                        : e.innerText;
                    (n = t), a(t, !1);
                  }, 1e3));
              },
              !1
            ),
            o.addEventListener(
              "click",
              (t) => {
                const i =
                  "" == e.innerText.replace(/\s|\n/g, "") ? "" : e.innerText;
                (n = i), a(i, !0);
              },
              !1
            );
        }
      }
      function $e(e) {
        Array.from(
          m.sidebar_iframe_doc.getElementsByClassName(
            "readwise_export_message_wrapper"
          )
        ).forEach((e) => {
          e.remove();
        }),
          m.sidebar_iframe_doc
            .getElementById("highlight_export_readwise")
            .insertAdjacentHTML(
              "afterend",
              `\n    <div class="readwise_export_message_wrapper">\n        ${
                e
                  ? '<p style="color: red;margin: 0;margin-top: 4px;font-size: 13px;white-space: pre-wrap;">The access key is revoked or invalid...</p>'
                  : ""
              }\n        <p style="margin: 0;margin-top: 8px;font-size: 13px;white-space: pre-wrap;">Please set your Readwise access token in your user <a href="https://glasp.co/settings" target="_blank" style="color: rgb(32, 159, 249);">setting page</a> on Glasp.</p>\n    </div>`
            ),
          (m.sidebar_iframe_doc.getElementById(
            "highlight_export_readwise"
          ).disabled = !1);
      }
      function He(e) {}
      function De(e, t) {
        const n = document.getElementById("glasp-sidebar-iframe").contentWindow
          .document;
        n.open(),
          n.write(e),
          n.close(),
          (function (e) {
            e.getElementById("social_login_wrapper") &&
              (e
                .getElementById("glasp_extension_login")
                .addEventListener("click", function () {
                  window.open(
                    `https://glasp.co/login?extension=yes&callback_url=${window.location.href}`,
                    "_blank"
                  );
                }),
              e
                .getElementById("terms-of-service")
                .addEventListener("click", function () {
                  window.open(
                    "https://www.glasp.co/terms-of-service",
                    "_blank"
                  );
                }),
              e
                .getElementById("privacy-policy")
                .addEventListener("click", function () {
                  window.open("https://www.glasp.co/privacy-policy", "_blank");
                }));
          })(t);
      }
      function Fe() {
        if (document.getElementsByClassName("glasp-ui-wrapper")) {
          let e = document.getElementsByClassName("glasp-ui-wrapper");
          for (; e[0]; ) e[0].remove();
        }
        je(), void 0 !== m.uid && k(m.photoURL, m.displayName, m.username);
      }
      function je() {
        if (document.getElementsByClassName("glasp-ui-wrapper")) {
          let e = document.getElementsByClassName("glasp-ui-wrapper");
          for (; e[0]; ) e[0].remove();
        }
        if (
          (document.body.insertAdjacentElement("beforeend", m.iframeIndexEl),
          m.iframeIndexEl.appendChild(m.tooltip_iframe),
          m.iframeIndexEl.appendChild(m.sidebar_iframe),
          (m.sidebar_iframe_doc = document.getElementById(
            "glasp-sidebar-iframe"
          ).contentWindow.document),
          (m.tooltip_iframe_doc = document.getElementById(
            "glasp-tooltip-iframe"
          ).contentWindow.document),
          document.addEventListener("keydown", He, !1),
          m.uid)
        ) {
          if (!m.sidebarHTML)
            return void (
              (function () {
                let e = !1;
                return (
                  m.excludedURL ||
                    ($.get(
                      chrome.runtime.getURL("./iframe/signup_login.html"),
                      function (e) {
                        m.sidebar_signup_login_HTML = e;
                      }
                    ),
                    $.get(
                      chrome.runtime.getURL("./iframe/sidebar.html"),
                      function (t) {
                        (m.sidebarHTML = t), (e = !!t);
                      }
                    ),
                    $.get(
                      chrome.runtime.getURL("./iframe/tooltip.html"),
                      function (e) {
                        (m.tooltipHTML = e), (m.tooltipEl = $(e));
                      }
                    )),
                  e
                );
              })() ||
              setTimeout(() => {
                Fe();
              }, 500)
            );
          f() &&
            chrome.runtime.sendMessage({
              action: "user_signed_in",
            }),
            (function () {
              m.tooltip_iframe_doc && (m.tooltip_iframe_doc.innerHTML = ""),
                m.tooltip_iframe_doc.open(),
                m.tooltip_iframe_doc.write(m.tooltipHTML),
                m.tooltip_iframe_doc.close(),
                y() ||
                  (m.tooltip_iframe_doc.getElementById("tooltip_css").href =
                    chrome.runtime.getURL("/css/tooltip.css")),
                m.tooltip_iframe_doc.getElementById("tooltip_close_btn") &&
                  m.tooltip_iframe_doc
                    .getElementById("tooltip_close_btn")
                    .addEventListener("click", () => {
                      p(),
                        f() &&
                          chrome.runtime.sendMessage({
                            action: "amplitude_log",
                            evtName: "tooltip_close_btn_clicked",
                          });
                    });
              const e = m.tooltip_iframe_doc.getElementById(
                "glasp_tooltip_container"
              );
              if (null != e) {
                const t = e.querySelector(".highlighter-pink"),
                  r = e.querySelector(".highlighter-yellow"),
                  s = e.querySelector(".highlighter-green"),
                  l = e.querySelector(".highlighter-blue");
                t.removeEventListener("click", H),
                  t.addEventListener("click", H),
                  r.removeEventListener("click", H),
                  r.addEventListener("click", H),
                  s.removeEventListener("click", H),
                  s.addEventListener("click", H),
                  l.removeEventListener("click", H),
                  l.addEventListener("click", H);
                const c = m.tooltip_iframe_doc.getElementById("twitter_share");
                c.removeEventListener("click", n),
                  c.addEventListener("click", n);
                const d =
                  m.tooltip_iframe_doc.getElementById("tooltip_add_note");
                d.removeEventListener("click", o),
                  d.addEventListener("click", o);
                const u =
                  m.tooltip_iframe_doc.getElementById("tooltip_add_tag");
                u.removeEventListener("click", i),
                  u.addEventListener("click", i);
                const p = m.tooltip_iframe_doc.getElementById(
                  "tooltip_create_quoteshot"
                );
                p.removeEventListener("click", a),
                  p.addEventListener("click", a);
              }
              function t() {
                let e = "";
                const t = window.getSelection();
                if (m.clickedHighlightId) {
                  const t = d();
                  if (t.length > 0)
                    for (let n = 0; n < t.length; n += 2)
                      t[n] == m.clickedHighlightId && (e = `"${t[n + 1]}"`);
                } else e = `"${t.toString()}"`;
                return e;
              }
              function n() {
                const e = window.getSelection(),
                  n = r(),
                  i = window.location.href;
                let o = t();
                m.clickedHighlightId || me(e, "#FFB6C6"),
                  Me(`${o}\n\n${n} via @_Glasp\n${i}`, "tooltip_twitter_click"),
                  p();
              }
              function i() {
                C()
                  ? window.location.reload()
                  : (f() &&
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "tooltip_add_tag_btn_clicked",
                      }),
                    m.sidebarIsOpen
                      ? m.sidebar_iframe_doc &&
                        m.sidebar_iframe_doc.querySelector(
                          "#content_tag_icon"
                        ) &&
                        m.sidebar_iframe_doc
                          .querySelector("#content_tag_icon")
                          .click()
                      : (qe(),
                        m.sidebar_iframe_doc &&
                          m.sidebar_iframe_doc.getElementById(
                            "content_tag_icon"
                          ) &&
                          m.sidebar_iframe_doc
                            .querySelector("#content_tag_icon")
                            .click()),
                    p());
              }
              function o() {
                if (C()) window.location.reload();
                else {
                  if (
                    (f() &&
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "highlight_note_tooltip",
                      }),
                    m.highlightClicked)
                  )
                    if (m.sidebarIsOpen) {
                      const e = b(m.clickedHighlightId, m.sidebar_iframe_doc);
                      (e.style.display = "inline"), e.click();
                    } else {
                      qe();
                      const e = b(m.clickedHighlightId, m.sidebar_iframe_doc);
                      (e.style.display = "inline"), e.click();
                    }
                  else
                    (m.addNoteBtnClicked = !0),
                      me(
                        window.getSelection(),
                        m.lastSelectedColorId,
                        m.tripleClicked
                      );
                  p();
                }
              }
              function a() {
                const e = r();
                window.location.href;
                let n = t();
                Ee(
                  {
                    text: n,
                    color: "#FFB6C6",
                  },
                  e,
                  0,
                  m.clickedHighlightId
                ),
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "tooltip_create_quoteshot_click",
                  }),
                  p();
              }
            })(),
            (function () {
              m.sidebar_iframe_doc.open(),
                m.sidebar_iframe_doc.write(m.sidebarHTML),
                m.sidebar_iframe_doc.close(),
                y() ||
                  (m.sidebar_iframe_doc.getElementById("sidebar_css").href =
                    chrome.runtime.getURL("./css/sidebar.css"));
              const e =
                  m.sidebar_iframe_doc.getElementById("sidebar_share_btn"),
                t = m.sidebar_iframe_doc.getElementById("sidebar_copy_btn"),
                n = m.sidebar_iframe_doc.getElementById("share_btn_popup"),
                o = m.sidebar_iframe_doc.getElementById(
                  "share_btn_popup_close"
                ),
                a = m.sidebar_iframe_doc.getElementById("share_link_copy_btn"),
                s = m.sidebar_iframe_doc.getElementById("content_ai_summary");
              m.sidebar_iframe_doc
                .getElementById("header_home_btn")
                .addEventListener(
                  "click",
                  function () {
                    chrome.runtime.sendMessage({
                      action: "amplitude_log",
                      evtName: "sidebar_open_home",
                    });
                  },
                  !1
                ),
                m.sidebar_iframe_doc
                  .getElementById("user-photo-right-top-link")
                  .addEventListener(
                    "click",
                    function () {
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "sidebar_open_mypage",
                      });
                    },
                    !1
                  ),
                (m.currentUserListEl =
                  m.sidebar_iframe_doc.getElementById("current_user_list")),
                (m.usersListEl =
                  m.sidebar_iframe_doc.getElementById("users_list")),
                (m.userListEl =
                  m.sidebar_iframe_doc.getElementById("user_list")),
                (m.userListNum =
                  m.sidebar_iframe_doc.getElementById("users_list_num")),
                (m.sidebar_copy_all =
                  m.sidebar_iframe_doc.getElementById("sidebar_copy_all")),
                m.sidebar_copy_all.addEventListener(
                  "click",
                  () => {
                    setTimeout(() => {
                      (m.sidebar_copy_all.innerText = "Copied!"),
                        setTimeout(() => {
                          m.sidebar_copy_all.innerText = "Copy All";
                        }, 500);
                    }, 200);
                  },
                  !1
                ),
                m.sidebar_iframe_doc.getElementById("sidebar_close_btn") &&
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_close_btn")
                    .addEventListener("click", () => {
                      qe(),
                        f() &&
                          chrome.runtime.sendMessage({
                            action: "amplitude_log",
                            evtName: "sidebar_close_btn_clicked",
                          });
                    }),
                (m.highlightsListEl =
                  m.sidebar_iframe_doc.getElementById("highlights_list")),
                (m.highlightEmptyEl = m.sidebar_iframe_doc.getElementById(
                  "highlights_list_empty"
                )),
                (m.sidebarSettingBtnEl =
                  m.sidebar_iframe_doc.getElementById("sidebar_setting")),
                (m.sidebarSettingPopupEl = m.sidebar_iframe_doc.getElementById(
                  "sidebar_setting_popup"
                )),
                (m.sidebarHighlighterToggleEl = $(
                  m.sidebar_iframe_doc.getElementById("myonoffswitch")
                )),
                (m.sidebar_element = $(
                  $("#glasp-sidebar-iframe").contents()[0],
                  window
                )),
                (m.twitterShareBtnEl =
                  m.sidebar_iframe_doc.getElementById("twitter_share")),
                m.twitterShareBtnEl.addEventListener(
                  "click",
                  function (e) {
                    Ae(e);
                  },
                  !1
                ),
                (m.fbShareBtnEl =
                  m.sidebar_iframe_doc.getElementById("fb_share")),
                m.fbShareBtnEl.addEventListener(
                  "click",
                  function (e) {
                    Ae(e);
                  },
                  !1
                ),
                (m.linkedInShareBtnEl =
                  m.sidebar_iframe_doc.getElementById("linkedin_share")),
                m.linkedInShareBtnEl.addEventListener(
                  "click",
                  function (e) {
                    Ae(e);
                  },
                  !1
                ),
                (m.emailShareBtnEl =
                  m.sidebar_iframe_doc.getElementById("email_share")),
                m.emailShareBtnEl.addEventListener(
                  "click",
                  function (e) {
                    Ae(e);
                  },
                  !1
                ),
                m.sidebar_element.find("body").bind("mousedown", function (e) {
                  $(e.target).closest(
                    ".sidebar_setting, .sidebar_setting_item, .sidebar_setting_footer"
                  ).length ||
                    (m.sidebarSettingPopupEl.style.visibility = "hidden"),
                    $(e.target).closest(".share_btn_popup, .sidebar_share_btn")
                      .length || (n.style.visibility = "hidden"),
                    $(e.target).closest(".users_list, .current_user_list")
                      .length || (m.usersListEl.style.visibility = "hidden"),
                    $(e.target).closest(
                      ".content_optional_el, .content_ai_summary_popup"
                    ).length ||
                      Array.from(
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "content_optional_el_popup"
                        )
                      ).forEach((e) => {
                        e.remove();
                      });
                }),
                null !== m.sidebarHighlighterToggleEl &&
                  void 0 !== m.sidebarHighlighterToggleEl &&
                  ("off" === m.highlighterMode &&
                    m.sidebarHighlighterToggleEl.prop("checked", !1),
                  m.sidebarHighlighterToggleEl.on("click", function () {
                    (null != m.selectedUsersUID &&
                      m.selectedUsersUID != m.uid) ||
                      ($(this).is(":checked")
                        ? ((m.highlighterMode = "on"),
                          f() &&
                            (Be("remove", new URL(window.location.href).host),
                            chrome.runtime.sendMessage({
                              action: "amplitude_log",
                              evtName: "sidebar_highlighter_onoff_toggle",
                            }),
                            chrome.runtime.sendMessage({
                              action: "browser_icon_change",
                              data: m.highlighterMode,
                            })))
                        : ((m.highlighterMode = "off"),
                          p(),
                          f() &&
                            (Be("add", new URL(window.location.href).host),
                            chrome.runtime.sendMessage({
                              action: "amplitude_log",
                              evtName: "sidebar_highlighter_onoff_toggle",
                            }),
                            chrome.runtime.sendMessage({
                              action: "browser_icon_change",
                              data: m.highlighterMode,
                            }))));
                  }));
              let l =
                m.sidebar_iframe_doc.getElementsByClassName("shortcut-hover");
              for (let e = 0; e < l.length; e++)
                l[e].previousElementSibling.addEventListener(
                  "mouseenter",
                  function () {
                    l[e].style.visibility = "visible";
                  },
                  !1
                ),
                  l[e].previousElementSibling.addEventListener(
                    "mouseleave",
                    function () {
                      l[e].style.visibility = "hidden";
                    },
                    !1
                  );
              Se(m.userTagList),
                Ie(m.userPagenote),
                null != e &&
                  (e.addEventListener("click", () => {
                    (n.style.visibility =
                      "visible" == n.style.visibility ? "hidden" : "visible"),
                      Array.from(
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "readwise_export_message_wrapper"
                        )
                      ).forEach((e) => {
                        e.remove();
                      }),
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "sidebar_share_popup",
                      });
                  }),
                  o.addEventListener("click", () => {
                    (n.style.visibility = "hidden"),
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "sidebar_share_close",
                      });
                  }),
                  a.addEventListener("click", () => {
                    a.innerHTML = "Copied!";
                    const e = i().fullUrl;
                    setTimeout(function () {
                      a.innerHTML = "Copy Link";
                    }, 500),
                      m.docId
                        ? (Te(
                            "" == m.docId
                              ? `https://glasp.co/#/${m.username}`
                              : `https://share.glasp.co/${m.username}/?p=${m.docId}`
                          ),
                          chrome.runtime.sendMessage({
                            action: "amplitude_log",
                            evtName: "sidebar_share_copy_link",
                          }))
                        : chrome.runtime.sendMessage(
                            {
                              action: "get_highlight_doc_id",
                              data: {
                                fullURL: e,
                              },
                            },
                            (e) => {
                              const t = e.result;
                              Te(
                                "" == t
                                  ? `https://glasp.co/#/${m.username}`
                                  : `https://share.glasp.co/${m.username}/?p=${t}`
                              ),
                                chrome.runtime.sendMessage({
                                  action: "amplitude_log",
                                  evtName: "sidebar_share_copy_link",
                                });
                            }
                          );
                  }),
                  m.sidebar_iframe_doc
                    .getElementById("highlight_export_readwise")
                    .addEventListener("click", () => {
                      (m.sidebar_iframe_doc.getElementById(
                        "highlight_export_readwise"
                      ).disabled = !0),
                        chrome.runtime.sendMessage(
                          {
                            action: "get_readwise_api_key",
                          },
                          (e) => {
                            const t = e.result;
                            (t && "" != t) || $e(),
                              t &&
                                "" !== t &&
                                (function (e) {
                                  const t = [],
                                    n = r(),
                                    o = i().fullUrl,
                                    a = m.loadedHighlights;
                                  if (!a || 0 == a.length)
                                    return (
                                      Array.from(
                                        m.sidebar_iframe_doc.getElementsByClassName(
                                          "readwise_export_message_wrapper"
                                        )
                                      ).forEach((e) => {
                                        e.remove();
                                      }),
                                      m.sidebar_iframe_doc
                                        .getElementById(
                                          "highlight_export_readwise"
                                        )
                                        .insertAdjacentHTML(
                                          "afterend",
                                          '\n        <div class="readwise_export_message_wrapper"><p style="color: red;margin: 0;margin-top: 4px;font-size: 13px;white-space: pre-wrap;">You need to have at least one highlight to export.</p></div>'
                                        ),
                                      void (m.sidebar_iframe_doc.getElementById(
                                        "highlight_export_readwise"
                                      ).disabled = !1)
                                    );
                                  Array.from(a).forEach((e) => {
                                    if ("" == e.string.replace(/\s+/g, ""))
                                      return;
                                    const i = {};
                                    (i.title = n),
                                      (i.source_url = o),
                                      (i.source_type = "glasp_web"),
                                      (i.category = "articles"),
                                      "" !== e.string.replace(/\s+/g, "") &&
                                        (i.text = e.string),
                                      e.note &&
                                        "" !== e.note.replace(/\s+/g, "") &&
                                        (i.note = e.note),
                                      t.push(i);
                                  }),
                                    $.ajax({
                                      url: "https://readwise.io/api/v2/highlights/",
                                      type: "POST",
                                      contentType: "application/json",
                                      beforeSend: function (t) {
                                        t.setRequestHeader(
                                          "Authorization",
                                          `Token ${e}`
                                        );
                                      },
                                      data: JSON.stringify({
                                        highlights: t,
                                      }),
                                      success: function (e) {
                                        const t = e[0].highlights_url;
                                        m.sidebar_iframe_doc.getElementById(
                                          "highlight_export_readwise_p"
                                        ).innerHTML = `Exported! View on <a href="${t}" target="_blank">Readwise</a>`;
                                      },
                                      error: function (e) {
                                        $e(!0);
                                      },
                                    });
                                })(t);
                          }
                        );
                    })),
                s &&
                  (function () {
                    const e = i().fullUrl,
                      t =
                        m.sidebar_iframe_doc.getElementById(
                          "content_ai_summary"
                        ),
                      n = m.sidebar_iframe_doc.getElementsByClassName(
                        "content_optional_el_popup"
                      );
                    t.addEventListener("click", async (i) => {
                      i.preventDefault(),
                        i.stopPropagation(),
                        n.length > 0
                          ? Array.from(n).forEach((e) => {
                              e.remove();
                            })
                          : (t.insertAdjacentHTML(
                              "afterend",
                              '\n        <div class="content_ai_summary_popup content_optional_el_popup" style="margin: 0 12px;font-size: 13px; width: -webkit-fill-available; height: auto; z-index: 5; background-color: #FFFFFF; border-radius: 4px; position: absolute; top: 32px; left: 0; padding-bottom: 6px; box-shadow: rgb(0 0 0 / 25%) 0 2px 10px 1px;">\n            <div style="margin: 8px 12px 6px;display:flex;justify-content: space-between;align-items:center;">\n                <p style="color:#747474;margin: 0;">AI-powered Summary 🌱</p>\n                <div style="display:flex;justify-content: center;align-items:center;gap: 8px;">\n                    <svg id="content_ai_summary_copy" style="cursor: pointer;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M7 6V4C7 3.44772 7.44772 3 8 3H19C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18H17" stroke="#828282" stroke-width="2"></path>\n                        <rect x="4" y="6.34351" width="12.6618" height="14.8145" rx="1" stroke="#828282" stroke-width="2"></rect>\n                    </svg>\n                    <svg width="20" height="20" id="content_ai_summary_tweet" style="width: 20px;cursor: pointer;" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M6.2896 18.251C13.8368 18.251 17.9648 11.9982 17.9648 6.57584C17.9648 6.39824 17.9648 6.22144 17.9528 6.04544C18.7559 5.46457 19.4491 4.74534 20 3.92144C19.2511 4.25328 18.4567 4.4709 17.6432 4.56704C18.4998 4.05423 19.1409 3.24766 19.4472 2.29744C18.6417 2.7754 17.7605 3.11225 16.8416 3.29344C16.2229 2.63559 15.4047 2.19997 14.5135 2.05401C13.6223 1.90805 12.7078 2.05987 11.9116 2.48598C11.1154 2.9121 10.4819 3.58875 10.109 4.41123C9.73605 5.23371 9.64462 6.15616 9.8488 7.03584C8.2174 6.95405 6.62144 6.5301 5.16451 5.79151C3.70759 5.05292 2.42227 4.01619 1.392 2.74864C0.867274 3.65197 0.70656 4.72133 0.942583 5.73899C1.17861 6.75665 1.79362 7.6461 2.6624 8.22624C2.00939 8.20689 1.37062 8.03073 0.8 7.71264C0.8 7.72944 0.8 7.74704 0.8 7.76464C0.800259 8.71201 1.12821 9.63014 1.72823 10.3633C2.32824 11.0964 3.16338 11.5994 4.092 11.787C3.4879 11.9518 2.85406 11.9759 2.2392 11.8574C2.50141 12.6728 3.01189 13.3858 3.69926 13.8967C4.38662 14.4076 5.21649 14.691 6.0728 14.707C4.61979 15.849 2.82485 16.4689 0.9768 16.467C0.650323 16.4664 0.324163 16.4466 0 16.4078C1.87651 17.6121 4.05993 18.2508 6.2896 18.2478" fill="#1DA1F2"/>\n                    </svg>\n                </div>\n            </div>\n            <div id="content_ai_summary_content" style="margin: 8px 16px;font-size: 14px;line-height: 1.4em;font-weight: 400;">\n                <img style="display: flex;width: 28px;margin: auto;" src="https://storage.googleapis.com/glasp.co/src/img/loading_200.gif">\n                <p style="color: #747474; margin: 0; text-align: center; font-size: 12px;">This may take 5-10 seconds.</p>\n            </div>\n        </div>'
                            ),
                            chrome.runtime.sendMessage(
                              {
                                action: "get_ai_summary",
                                data: {
                                  fullUrl: e,
                                  userId: m.selectedUsersUID,
                                },
                              },
                              (t) => {
                                if (!t) {
                                  const e =
                                    "Couldn't generate summary.<br />Please try later.";
                                  return void (m.sidebar_iframe_doc.getElementById(
                                    "content_ai_summary_content"
                                  ).innerHTML = e);
                                }
                                const n = t.tldr;
                                m.sidebar_iframe_doc.getElementById(
                                  "content_ai_summary_content"
                                ).innerHTML = n;
                                const i = `${n}\n${e}`,
                                  r = m.sidebar_iframe_doc.getElementById(
                                    "content_ai_summary_copy"
                                  ),
                                  o = m.sidebar_iframe_doc.getElementById(
                                    "content_ai_summary_tweet"
                                  );
                                r &&
                                  r.addEventListener("click", () => {
                                    Te(i),
                                      chrome.runtime.sendMessage({
                                        action: "amplitude_log",
                                        evtName:
                                          "chrome_ext_content_ai_summary_copy",
                                      });
                                  }),
                                  o &&
                                    o.addEventListener("click", () => {
                                      Me(
                                        i,
                                        "chrome_ext_content_ai_summary_tweet"
                                      );
                                    });
                              }
                            ));
                    });
                  })(),
                t && t.addEventListener("click", Ne, !1),
                null !== m.currentUserListEl &&
                  void 0 !== m.currentUserListEl &&
                  m.currentUserListEl.addEventListener("click", F),
                null !== m.sidebarSettingBtnEl &&
                  void 0 !== m.sidebarSettingBtnEl &&
                  ((m.sidebar_iframe_doc.getElementById(
                    "user_photo_setting"
                  ).src = m.photoURL),
                  m.sidebarSettingBtnEl.addEventListener("click", j, !1),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_signout")
                    .addEventListener("click", q, !1),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_bug_report")
                    .addEventListener("click", U, !1),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_user_setting")
                    .addEventListener("click", R, !1),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_empty_open_settings")
                    .addEventListener("click", R, !1),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_tutorial")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_tutorial_video",
                        }),
                          window.open(
                            "https://www.youtube.com/watch?v=Pj1r_RMPadI",
                            "_blank"
                          );
                      },
                      !1
                    ),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_faq")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_faq",
                        }),
                          window.open(
                            "https://glasp.notion.site/Glasp-FAQs-ddb9cb747ddd4811ad155dc96a081b7a",
                            "_blank"
                          );
                      },
                      !1
                    ),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_slack_join")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_slack_join",
                        }),
                          window.open(
                            "https://join.slack.com/t/glasp-community/shared_invite/zt-1fe5yiaqb-EVYli9ReIICsPSMYb~styg",
                            "_blank"
                          );
                      },
                      !1
                    ),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_explore_content")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_explore_content",
                        }),
                          window.open("https://glasp.co/explore/", "_blank");
                      },
                      !1
                    ),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_talk_to_founders")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_talk_to_founders",
                        });
                        const e = Math.floor(2 * Math.random());
                        window.open(
                          [
                            "https://cal.com/kazuki/15min",
                            "https://cal.com/kei-watanabe-p4ta6s/15min",
                          ][e],
                          "_blank"
                        );
                      },
                      !1
                    ),
                  m.sidebar_iframe_doc
                    .getElementById("sidebar_user_icon_setting")
                    .addEventListener(
                      "click",
                      () => {
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "sidebar_setting_see_my_highlights",
                        }),
                          window.open(
                            `https://glasp.co/#/${m.username}`,
                            "_blank"
                          );
                      },
                      !1
                    )),
                (m.sidebar_iframe_doc.getElementById(
                  "enable_domain_name"
                ).innerHTML = new URL(window.location.href).host);
            })(),
            Ue(
              d(
                m.sidebar_iframe_doc,
                m.sidebar_copy_all,
                m.highlightEmptyEl,
                m.loadedHighlights
              )
            ),
            m.sidebar_iframe_doc.addEventListener("keydown", He, !1);
        } else
          f() &&
            (chrome.runtime.sendMessage({
              action: "run_initApp",
            }),
            chrome.runtime.sendMessage({
              action: "user_not_signed_in",
            })),
            De(m.sidebar_signup_login_HTML, m.sidebar_iframe_doc),
            m.sidebar_iframe_doc.addEventListener("keydown", He, !1);
      }
      function qe() {
        if (0 == m.sidebarIsOpen) {
          $(m.sidebar_iframe).attr(
            "style",
            `visibility: visible !important; display: block !important;  width: ${m.sidebarWidth}; box-shadow: rgba(200, 200, 200, 0.5) 0px 0px 7px 2px; min-width: 0px !important; max-width: 300px; height: 100%; background: #FFFFFF; resize: horizontal; direction: rtl; margin: auto; position: fixed; top: 0px; right: 0px; left: auto; z-index: 9000000000000000000;background-image: url("https://storage.googleapis.com/glasp.co/src/img/loading_200.gif");background-repeat: no-repeat;background-position: center;background-size: 40px;`
          ),
            (m.sidebarIsOpen = !0);
          const e = w(m.sidebar_iframe);
          (null != m.uid && null != m.uid) ||
            (f() &&
              chrome.runtime.sendMessage({
                action: "run_initApp",
              }),
            e && je()),
            e || Fe(),
            f() &&
              (chrome.runtime.sendMessage({
                action: "sidebar_status_change",
                data: [m.sidebarIsOpen, m.sidebarWidth],
              }),
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_toggle_open_success",
              }));
        } else {
          (m.sidebarWidth = m.sidebar_iframe.style.width),
            $(m.sidebar_iframe).attr(
              "style",
              'visibility: hidden !important; display: none !important; min-width: 0px !important; max-width: 300px; height: 100%; background: #FFFFFF; resize: horizontal; direction: rtl; margin: auto; position: fixed; top: 0px; right: 0px; left: auto; z-index: 9000000000000000000;background-image: url("https://storage.googleapis.com/glasp.co/src/img/loading_200.gif");background-repeat: no-repeat;background-position: center;background-size: 40px;'
            ),
            (m.sidebarIsOpen = !1);
          const e = w(m.sidebar_iframe);
          (null !== m.uid && void 0 !== m.uid) ||
            (f() &&
              chrome.runtime.sendMessage({
                action: "run_initApp",
              }),
            De(m.sidebar_signup_login_HTML, m.sidebar_iframe_doc)),
            e || Fe(),
            f() &&
              (chrome.runtime.sendMessage({
                action: "sidebar_status_change",
                data: [m.sidebarIsOpen, m.sidebarWidth],
              }),
              chrome.runtime.sendMessage({
                action: "amplitude_log",
                evtName: "sidebar_toggle_close_success",
              }));
        }
      }
      function Ue(e, t) {
        if (
          (m.sidebar_iframe_doc.getElementById("highlights_list") &&
            ((m.highlightsListEl =
              m.sidebar_iframe_doc.getElementById("highlights_list")),
            (m.highlightsListEl.innerHTML = "")),
          null != m.loadedHighlights &&
            null != m.loadedHighlights &&
            (0 != m.loadedHighlights.length || void 0 === m.highlightsListEl))
        ) {
          if (0 !== m.loadedHighlights.length)
            if ("orderId" in m.loadedHighlights[0])
              m.loadedHighlights.sort((e, t) =>
                e.orderId < t.orderId ? -1 : 1
              );
            else if (e.length / 2 == m.loadedHighlights.length) {
              for (let t = 0; t < e.length; t += 2)
                for (let n = 0; n < m.loadedHighlights.length; n++)
                  if (m.loadedHighlights[n].highlightid == e[t]) {
                    let e = t / 2;
                    m.loadedHighlights[n].orderId = e;
                    break;
                  }
              m.loadedHighlights.sort((e, t) =>
                e.orderId < t.orderId ? -1 : 1
              );
            }
          if (void 0 !== m.highlightsListEl && null !== m.highlightsListEl) {
            let e;
            for (let t = 0; t < m.loadedHighlights.length; t++) {
              const n = m.loadedHighlights[t].highlightid,
                o = m.loadedHighlights[t].colorId;
              let a = !1,
                s = "";
              "note" in m.loadedHighlights[t] &&
                m.loadedHighlights[t].note.length > 0 &&
                ((s = m.loadedHighlights[t].note), (a = !0));
              let l = document.createElement("div");
              l.setAttribute("class", "highlight-wrapper"),
                l.setAttribute("highlightid", n),
                l.setAttribute("data-colorid", o),
                l.setAttribute("tabindex", t),
                l.setAttribute(
                  "style",
                  "width: 80vw;margin: auto;margin-bottom: 10px;padding: 10px 14px;background-color: #FFFFFF;text-align: left;border: solid 1px rgba(0,0,0,0.15)!important;box-shadow: rgb(0 0 0 / 15%) 0px 1px 3px;border-radius: 4px !important;position: relative;"
                ),
                void 0 !== m.selectedUsersUID && m.selectedUsersUID !== m.uid
                  ? (l.innerHTML = `\n                <div class="text_wrapper" style="border-left-color: ${o};margin: auto;border-left-style: solid;border-left-width: 6px;">\n                    <p style="margin: 0px;font-size: 14px;padding-left: 10px;">${m.loadedHighlights[
                      t
                    ].string.replaceAll(
                      "\n",
                      "<br>"
                    )}</p>\n                </div>\n                <div class="note_separator" id="note_separator" style="display: none;border-bottom: 0.5px solid #D6D6D6;margin-top: 10px;user-select: none;"></div>\n                <div class="highlight_note_div" id="highlight_note_div" style="display: none;width: 100%;max-width: 230px;height: auto;margin: 10px 2vw 1vw 2vw;text-align: center;overflow: hidden;">\n                    <div class="highlight_note_title" style="font-size: 15px;line-height: 17px;font-weight: bold;width: 100%;text-align: left;">Note: </div>\n                    <div class="note_content" style="width: 100%;font-size: 14px;line-height: 18px;margin-top: 6px;">\n                        <div class="highlight_note_textarea" id="highlight_note_textarea" placeholder="Add a note..." tabindex="${t}" type="text" style="height: 24px; border: none;">${s}</div>\n                    </div>\n                </div>`)
                  : (l.innerHTML = `\n                <div class="text_wrapper" style="border-left-color: ${o};margin: auto;border-left-style: solid;border-left-width: 6px;">\n                    <p style="margin: 0px;font-size: 14px;padding-left: 10px;">${m.loadedHighlights[
                      t
                    ].string.replaceAll(
                      "\n",
                      "<br>"
                    )}</p>\n                </div>\n                <div class="highlight_note_add_btn" id="highlight_note_add_btn" style="display: none;width: 27px;height: 27px;float: right;position: relative !important;right: -14px;bottom: 17.5px;outline: none;user-select: none;" tabindex="${t}" >\n                    <svg width="27" height="27" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M1 29H2H15.75H26C27.6569 29 29 27.6569 29 26V15.5V1L1 29Z" fill="#E4E4E4"/>\n                        <path d="M15 25.5L15.5 22L23.5 14L26.5 17L18.5 25L15 25.5Z" fill="#E4E4E4"/>\n                        <path d="M15.5 22L15 25.5L18.5 25M15.5 22L23.5 14L26.5 17L18.5 25M15.5 22L18.5 25" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>\n                        <line x1="0.964645" y1="28.9646" x2="28.9646" y2="0.964645" stroke="#A2A2A2" stroke-width="0.1"/>\n                    </svg>\n                </div>\n                <span class="highlight_note_add_btn_hover" id="highlight_note_add_btn_hover" style="visibility: hidden;font-size: 10px;width: 52px;display: block;float: right;background-color: #353535;color: #ffffff;text-align: center;border-radius: 3px;padding: 5px 0;position: absolute;bottom: -25px;right: -13px;z-index: 1;user-select: none;">Add Note</span>\n                <div class="note_separator" id="note_separator" style="display: none;border-bottom: 0.5px solid #D6D6D6;margin-top: 10px;user-select: none;"></div>\n                <div class="highlight_note_div" id="highlight_note_div" style="display: none;width: 100%;max-width: 230px;height: auto;margin: 10px 2vw 1vw 2vw;text-align: center;overflow: hidden;">\n                    <div class="highlight_note_title" style="font-size: 15px;line-height: 17px;font-weight: bold;width: 100%;text-align: left;">Note: </div>\n                    <div class="note_content" style="width: 100%;font-size: 14px;line-height: 18px;margin-top: 6px;">\n                        <textarea class="highlight_note_textarea highlight_note_textarea_hover" id="highlight_note_textarea" placeholder="Add a note..." tabindex="${t}" type="text" style="height:24px;width:224px;border: none;outline: none;font-size: 14px;line-height: 20px;resize: none;text-align: left;background-color: transparent;font-family:'Roboto',sans-serif;padding: 2px;">${s}</textarea>\n                    </div>\n                </div>\n                <div class="highlight_note_footer" id="highlight_note_footer" style="display: none;justify-content: space-between;align-items: center;width: 92%;height: 0px;margin: auto;">\n                    <div class="highlight_note_footer_guide" style="color: gray;font-size: 9px;height: 9px;float: left;position: relative;bottom: -2px;">Shift + Enter for Newline</div>\n                </div>\n                <div class="highlight_note_saving" id="highlight_note_saving" style="display: none;height: 9px;font-size: 9px;float: right;position: relative !important;right: 7px;bottom: 2px;color: gray;user-select: none;">saving...</div>`),
                m.highlightsListEl.appendChild(l);
              let c =
                  m.sidebar_iframe_doc.getElementsByClassName("text_wrapper")[
                    t
                  ],
                d =
                  m.sidebar_iframe_doc.getElementsByClassName("note_separator")[
                    t
                  ],
                u =
                  m.sidebar_iframe_doc.getElementsByClassName(
                    "highlight_note_div"
                  )[t],
                h = m.sidebar_iframe_doc.getElementsByClassName(
                  "highlight_note_textarea"
                )[t];
              if (
                ((h.style.height = h.scrollHeight - 4 + "px"),
                a && ((d.style.display = "block"), (u.style.display = "block")),
                c.addEventListener("click", (e) => {
                  if (void 0 !== n) {
                    const e = document.querySelector(`[highlightid="${n}"]`);
                    e &&
                      (p(),
                      e.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      }),
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "sidebar_highlight_scroll",
                      }));
                  }
                }),
                document.getElementById("glasp-sidebar-iframe") &&
                  ((m.sidebar_iframe = document.getElementById(
                    "glasp-sidebar-iframe"
                  )),
                  m.sidebar_iframe.contentWindow.document.addEventListener(
                    "resize",
                    function () {
                      (h.style.height = "20px"),
                        (h.style.height = h.scrollHeight - 4 + "px");
                    }
                  )),
                null == m.selectedUsersUID || m.selectedUsersUID == m.uid)
              ) {
                let o = m.sidebar_iframe_doc.getElementsByClassName(
                    "highlight_note_add_btn"
                  )[t],
                  s = m.sidebar_iframe_doc.getElementsByClassName(
                    "highlight_note_add_btn_hover"
                  )[t],
                  g = m.sidebar_iframe_doc.getElementsByClassName(
                    "highlight_note_footer"
                  )[t];
                (h.style.height = "20px"),
                  h.addEventListener(
                    "focus",
                    function (e) {
                      if (
                        ((g.style.display = "flex"),
                        (h.style.height = "20px"),
                        (h.style.height = h.scrollHeight - 4 + "px"),
                        m.sidebarIsOpen)
                      ) {
                        const t = e.target.getAttribute("tabindex");
                        m.sidebar_iframe_doc.getElementsByClassName(
                          "highlight-wrapper"
                        ).length -
                          1 ==
                          t && x();
                      }
                    },
                    !1
                  ),
                  c.addEventListener("dblclick", (e) => {
                    (a = !0),
                      (o.style.display = "none"),
                      (d.style.display = "block"),
                      (u.style.display = "block"),
                      h.focus();
                    const t = e.target.getAttribute("tabindex");
                    m.sidebar_iframe_doc.getElementsByClassName(
                      "highlight-wrapper"
                    ).length -
                      1 ==
                      t && x();
                  }),
                  l.addEventListener("mouseenter", (e) => {
                    a || (o.style.display = "inline"),
                      m.sidebar_iframe_doc.getElementById(
                        "highlight_menu_bg_wrapper"
                      ) &&
                        m.sidebar_iframe_doc
                          .getElementById("highlight_menu_bg_wrapper")
                          .remove(),
                      c.insertAdjacentHTML(
                        "afterend",
                        '\n                    <div class="highlight_menu_bg_wrapper" id="highlight_menu_bg_wrapper" style="width: 0px;height: 0px;position: absolute;right: 9%;top: 0%;">\n                        <div class="highlight_text_menu" id="highlight_text_menu" style="width: 18px;height: 18px;position: relative;left: 4px;">\n                            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <mask id="path-1-inside-1_2296_2116" fill="white">\n                                <ellipse cx="2.33127" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 2.33127 6.99992)"/>\n                                </mask>\n                                <ellipse cx="2.33127" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 2.33127 6.99992)" fill="#828282"/>\n                                <path d="M2.33127 7.09992C2.27604 7.09992 2.23127 7.05515 2.23127 6.99992H5.23127C5.23127 5.3983 3.9329 4.09992 2.33127 4.09992V7.09992ZM2.23127 6.99992C2.23127 6.9447 2.27604 6.89993 2.33127 6.89993V9.89993C3.9329 9.89993 5.23127 8.60155 5.23127 6.99992H2.23127ZM2.33127 6.89993C2.3865 6.89993 2.43127 6.9447 2.43127 6.99992H-0.568726C-0.568726 8.60155 0.729647 9.89993 2.33127 9.89993V6.89993ZM2.43127 6.99992C2.43127 7.05515 2.3865 7.09992 2.33127 7.09992V4.09992C0.729647 4.09992 -0.568726 5.3983 -0.568726 6.99992H2.43127Z" fill="#828282" mask="url(#path-1-inside-1_2296_2116)"/>\n                                <mask id="path-3-inside-2_2296_2116" fill="white">\n                                <ellipse cx="6.99827" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 6.99827 6.99992)"/>\n                                </mask>\n                                <ellipse cx="6.99827" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 6.99827 6.99992)" fill="#828282"/>\n                                <path d="M6.99827 7.09992C6.94304 7.09992 6.89827 7.05515 6.89827 6.99992H9.89827C9.89827 5.3983 8.59989 4.09992 6.99827 4.09992V7.09992ZM6.89827 6.99992C6.89827 6.9447 6.94304 6.89993 6.99827 6.89993V9.89993C8.59989 9.89993 9.89827 8.60155 9.89827 6.99992H6.89827ZM6.99827 6.89993C7.0535 6.89993 7.09827 6.9447 7.09827 6.99992H4.09827C4.09827 8.60155 5.39664 9.89993 6.99827 9.89993V6.89993ZM7.09827 6.99992C7.09827 7.05515 7.0535 7.09992 6.99827 7.09992V4.09992C5.39664 4.09992 4.09827 5.3983 4.09827 6.99992H7.09827Z" fill="#828282" mask="url(#path-3-inside-2_2296_2116)"/>\n                                <mask id="path-5-inside-3_2296_2116" fill="white">\n                                <ellipse cx="11.665" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 11.665 6.99992)"/>\n                                </mask>\n                                <ellipse cx="11.665" cy="6.99992" rx="1.4" ry="1.4" transform="rotate(-90 11.665 6.99992)" fill="#828282"/>\n                                <path d="M11.665 7.09992C11.6098 7.09992 11.565 7.05515 11.565 6.99992H14.565C14.565 5.3983 13.2666 4.09992 11.665 4.09992V7.09992ZM11.565 6.99992C11.565 6.9447 11.6098 6.89993 11.665 6.89993V9.89993C13.2666 9.89993 14.565 8.60155 14.565 6.99992H11.565ZM11.665 6.89993C11.7202 6.89993 11.765 6.9447 11.765 6.99992H8.76501C8.76501 8.60155 10.0634 9.89993 11.665 9.89993V6.89993ZM11.765 6.99992C11.765 7.05515 11.7202 7.09992 11.665 7.09992V4.09992C10.0634 4.09992 8.76501 5.3983 8.76501 6.99992H11.765Z" fill="#828282" mask="url(#path-5-inside-3_2296_2116)"/>\n                            </svg>\n                        </div>\n                    </div>'
                      );
                    const t = m.sidebar_iframe_doc.getElementsByClassName(
                      "highlight_text_menu"
                    )[0];
                    t.addEventListener("click", (e) => {
                      if (
                        m.sidebar_iframe_doc.getElementById(
                          "highlight_menu_wrapper"
                        )
                      )
                        return void m.sidebar_iframe_doc
                          .getElementById("highlight_menu_wrapper")
                          .remove();
                      const s = document.createElement("div");
                      (s.style.position = "relative"),
                        s.setAttribute("class", "highlight_menu_div"),
                        s.setAttribute("id", "highlight_menu_div"),
                        (s.innerHTML =
                          '\n                        <div class="highlight_menu_wrapper" id="highlight_menu_wrapper" style="width: max-content; font-size: 14px; top: 2px; right: -24px; padding: 4px 0px 3px; background-color: #FFFFFF; box-shadow: rgba(0, 0, 0, 0.25) 0 2px 10px 1px; border-radius: 3px; user-select: none; height: fit-content; position: absolute; float: left; z-index: 1000;">\n                            <div class="highlight_menu_options" id="highlight_share_tweet" style="padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">\n                                <svg width="16" height="16" style="width:16px;height:16px;margin-right:3px;" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M6.91856 18C15.2205 18 19.7613 11.0743 19.7613 5.0683C19.7613 4.87158 19.7613 4.67576 19.7481 4.48082C20.6315 3.83743 21.394 3.0408 22 2.12823C21.1762 2.49578 20.3023 2.73682 19.4075 2.84331C20.3498 2.2753 21.055 1.38193 21.3919 0.329451C20.5059 0.858855 19.5366 1.23195 18.5258 1.43264C17.8452 0.703991 16.9452 0.221496 15.9648 0.0598233C14.9845 -0.10185 13.9786 0.0663123 13.1028 0.538287C12.227 1.01026 11.53 1.75974 11.1198 2.67073C10.7097 3.58173 10.6091 4.60345 10.8337 5.5778C9.03914 5.48722 7.28358 5.01764 5.68096 4.19956C4.07835 3.38148 2.6645 2.23318 1.5312 0.82921C0.954001 1.82976 0.777216 3.0142 1.03684 4.14139C1.29647 5.26857 1.97298 6.25374 2.92864 6.89632C2.21033 6.87488 1.50769 6.67977 0.88 6.32744C0.88 6.34605 0.88 6.36554 0.88 6.38504C0.880285 7.43437 1.24103 8.4513 1.90105 9.26335C2.56107 10.0754 3.47972 10.6326 4.5012 10.8403C3.83669 11.0228 3.13947 11.0495 2.46312 10.9183C2.75155 11.8214 3.31308 12.6111 4.06918 13.177C4.82528 13.743 5.73814 14.0568 6.68008 14.0746C5.08177 15.3394 3.10733 16.0261 1.07448 16.024C0.715355 16.0233 0.35658 16.0014 0 15.9584C2.06416 17.2923 4.46592 17.9997 6.91856 17.9965" fill="#1DA1F2"/>\n                                </svg>\n                                Share on Twitter\n                            </div>\n                            <div class="highlight_menu_options" id="highlight_add_note" style="padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">✍️ Add a Note</div>\n                            <div class="highlight_menu_options" id="highlight_share_highlight"  style="padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">\n                                <svg width="16" height="16" style="width:16px;height:16px;margin-right:3px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M11 8.5C11 9.74423 12 13.5 5.5 19.5C4.5 19.5 5 19.5 4.5 19.5C3.43156 19.5 7.5 17 6.5 13C4.01472 13 2 10.9853 2 8.5C2 6.01472 4.01472 4 6.5 4C8.98528 4 11 6.01472 11 8.5Z" fill="#6D6D6D"/>\n                                    <path d="M22 8.5C22 9.74423 22 13.5 15.5 19.5C14.5 19.5 15 19.5 14.5 19.5C13.4316 19.5 16.5 17.5 17.5 13C15.0147 13 13 10.9853 13 8.5C13 6.01472 15.0147 4 17.5 4C19.9853 4 22 6.01472 22 8.5Z" fill="#6D6D6D"/>\n                                </svg>\n                                Create Highlight Image\n                            </div>\n                            <div class="highlight_menu_options" id="highlight_copy_link" style="padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">🔗 Copy Link to Highlight</div>\n                            <div class="highlight_menu_options" id="highlight_copy_embed_highlight_code" style="padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">🪄 Copy Highlight Embed Code</div>\n                            <div class="highlight_menu_options" id="highlight_delete" style="color:#F93F3F;padding: 5px 14px; border-radius: 0px; display: flex; justify-content: left; align-items: center; font-size: 14px; white-space: nowrap; cursor: pointer;">🗑️ Delete Highlight</div>\n                        </div>'),
                        t.insertAdjacentElement("afterend", s);
                      const l = m.sidebar_iframe_doc.getElementById(
                        "highlight_menu_wrapper"
                      );
                      m.sidebar_iframe_doc
                        .getElementById("highlight_share_tweet")
                        .addEventListener(
                          "click",
                          function () {
                            const e = r(),
                              t =
                                window.location.origin +
                                window.location.pathname,
                              i = m.sidebar_iframe_doc.querySelectorAll(
                                `[highlightid^="${n}"]`
                              )[0].firstElementChild.innerText;
                            l.remove(),
                              Me(
                                `${i}\n\n${e} via @_Glasp\n${t}`,
                                "sidebar_highlight_share_tweet"
                              );
                          },
                          !1
                        ),
                        m.sidebar_iframe_doc
                          .getElementById("highlight_add_note")
                          .addEventListener("click", (e) => {
                            if (
                              ((a = !0),
                              (o.style.display = "none"),
                              (d.style.display = "block"),
                              (u.style.display = "block"),
                              (g.style.display = "flex"),
                              h.focus(),
                              m.sidebarIsOpen)
                            ) {
                              const t = e.target.getAttribute("tabindex");
                              m.sidebar_iframe_doc.getElementsByClassName(
                                "highlight-wrapper"
                              ).length -
                                1 ==
                                t && x(),
                                chrome.runtime.sendMessage({
                                  action: "amplitude_log",
                                  evtName: "sidebar_highlight_add_note",
                                });
                            }
                            l.remove();
                          }),
                        m.sidebar_iframe_doc
                          .getElementById("highlight_share_highlight")
                          .addEventListener(
                            "click",
                            function () {
                              const e = {
                                  text: "",
                                  color: "",
                                },
                                t = m.sidebar_iframe_doc.querySelectorAll(
                                  `[highlightid^="${n}"]`
                                )[0],
                                i = t.firstElementChild.innerText;
                              (e.text = i),
                                (e.color = t.getAttribute("data-colorid"));
                              const o = r();
                              window.location.origin,
                                window.location.pathname,
                                window.getSelection()?.removeAllRanges(),
                                p(),
                                Ee(e, o);
                            },
                            !1
                          ),
                        m.sidebar_iframe_doc
                          .getElementById("highlight_copy_link")
                          .addEventListener(
                            "click",
                            function () {
                              const e = i().fullUrl;
                              m.docId
                                ? (Te(
                                    `https://glasp.co/highlight-embed?u=${m.selectedUsersUID}&d=${m.docId}&h=${n}&m=h`
                                  ),
                                  l.remove())
                                : chrome.runtime.sendMessage(
                                    {
                                      action: "get_highlight_doc_id",
                                      data: {
                                        fullURL: e,
                                      },
                                    },
                                    (e) => {
                                      const t = e.result;
                                      Te(
                                        `https://glasp.co/highlight-embed?u=${m.selectedUsersUID}&d=${t}&h=${n}&m=h`
                                      ),
                                        l.remove();
                                    }
                                  ),
                                chrome.runtime.sendMessage({
                                  action: "amplitude_log",
                                  evtName: "sidebar_highlight_copy_link_to_hl",
                                });
                            },
                            !1
                          ),
                        m.sidebar_iframe_doc
                          .getElementById("highlight_copy_embed_highlight_code")
                          .addEventListener(
                            "click",
                            function () {
                              const e = i().fullUrl;
                              m.docId
                                ? (Te(
                                    `<iframe width="100%" height="315" src="https://glasp.co/highlight-embed?u=${m.selectedUsersUID}&d=${m.docId}&h=${n}&m=h" title="Glasp Highlight Embed" frameborder="0"></iframe>`
                                  ),
                                  l.remove())
                                : chrome.runtime.sendMessage(
                                    {
                                      action: "get_highlight_doc_id",
                                      data: {
                                        fullURL: e,
                                      },
                                    },
                                    (e) => {
                                      const t = e.result;
                                      Te(
                                        `<iframe width="100%" height="315" src="https://glasp.co/highlight-embed?u=${m.selectedUsersUID}&d=${t}&h=${n}&m=h" title="Glasp Highlight Embed" frameborder="0"></iframe>`
                                      ),
                                        l.remove();
                                    }
                                  ),
                                chrome.runtime.sendMessage({
                                  action: "amplitude_log",
                                  evtName:
                                    "sidebar_highlight_copy_highlight_embed_code",
                                });
                            },
                            !1
                          ),
                        m.sidebar_iframe_doc
                          .getElementById("highlight_delete")
                          .addEventListener(
                            "click",
                            function () {
                              D(n),
                                chrome.runtime.sendMessage({
                                  action: "amplitude_log",
                                  evtName: "sidebar_highlight_delete",
                                });
                            },
                            !1
                          ),
                        l.addEventListener(
                          "mouseleave",
                          () => {
                            l.remove();
                          },
                          !1
                        );
                    });
                  }),
                  l.addEventListener("mouseleave", (e) => {
                    if (
                      ((o.style.display = "none"),
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "highlight_menu_bg_wrapper"
                      ))
                    ) {
                      let e = m.sidebar_iframe_doc.getElementsByClassName(
                        "highlight_menu_bg_wrapper"
                      );
                      for (; e[0]; ) e[0].remove();
                    }
                  }),
                  h.addEventListener("input", function (e) {
                    if (
                      ((h.style.height = "20px"),
                      (h.style.height = h.scrollHeight - 4 + "px"),
                      m.sidebarIsOpen)
                    ) {
                      const t = e.target.getAttribute("tabindex");
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "highlight-wrapper"
                      ).length -
                        1 ==
                        t && x();
                    }
                  }),
                  h.addEventListener("keydown", (t) => {
                    if (
                      (clearTimeout(e),
                      (e = setTimeout(() => {
                        const e = i(),
                          r = e.url,
                          o = e.fullUrl,
                          a = t.target.value;
                        f() &&
                          chrome.runtime.sendMessage(
                            {
                              action: "highlight_note_added",
                              data: [n, a, r, o],
                            },
                            () => {
                              chrome.runtime.lastError;
                            }
                          );
                      }, 500)),
                      13 == t.keyCode)
                    ) {
                      if (t.shiftKey) return;
                      h.blur();
                    }
                  }),
                  o.addEventListener("click", (e) => {
                    if (
                      ((a = !0),
                      (o.style.display = "none"),
                      (d.style.display = "block"),
                      (u.style.display = "block"),
                      (g.style.display = "flex"),
                      h.focus(),
                      m.sidebarIsOpen)
                    ) {
                      const t = e.target.getAttribute("tabindex");
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "highlight-wrapper"
                      ).length -
                        1 ==
                        t && x();
                    }
                  }),
                  o.addEventListener("mouseenter", (e) => {
                    s.style.visibility = "visible";
                  }),
                  o.addEventListener("mouseleave", (e) => {
                    s.style.visibility = "hidden";
                  }),
                  h.addEventListener("focus", (e) => {
                    h.style.outline = "thin solid #BCBCBC";
                  }),
                  h.addEventListener("blur", (e) => {
                    (h.style.outline = "none"), (g.style.display = "none");
                  });
              }
            }
            if (m.addNoteBtnClicked)
              if (m.sidebarIsOpen) {
                const e = b(m.addedHighlightId, m.sidebar_iframe_doc);
                (e.style.display = "inline"), e.click();
              } else {
                qe();
                const e = b(m.addedHighlightId, m.sidebar_iframe_doc);
                (e.style.display = "inline"), e.click();
              }
            let n = m.sidebar_iframe_doc.getElementsByClassName(
              "highlight_note_textarea"
            );
            for (let e = 0; e < n.length; e++)
              n[e].style.height = n[e].scrollHeight + "px";
            if (m.addNoteBtnClicked) {
              m.addNoteBtnClicked = !1;
              const e = m.sidebar_iframe_doc
                .querySelector(`[highlightid="${m.addedHighlightId}"]`)
                .getAttribute("tabindex");
              m.sidebar_iframe_doc.getElementsByClassName(
                "highlight_note_textarea"
              )[e].style.height = "20px";
            }
            if (
              (m.sidebar_copy_all.removeEventListener("click", o),
              m.sidebar_copy_all.addEventListener("click", o),
              t)
            ) {
              let e;
              "store" != m.actionType || y()
                ? "delete" == m.actionType
                  ? (e =
                      m.sidebar_iframe_doc.getElementsByClassName(
                        "highlight-wrapper"
                      )[m.deletedHighlightTabindex])
                  : "color_change" == m.actionType &&
                    ((e = m.sidebar_iframe_doc.querySelector(
                      `[highlightid="${m.addedHighlightId}"]`
                    )),
                    (e.style.backgroundColor = "#EEEEEE"),
                    setTimeout(function () {
                      e.style.backgroundColor = "#FAFAFA";
                    }, 500))
                : ((e = m.sidebar_iframe_doc.querySelector(
                    `[highlightid="${m.addedHighlightId}"]`
                  )),
                  e.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  }),
                  (e.style.backgroundColor = "#EEEEEE"),
                  setTimeout(function () {
                    e.style.backgroundColor = "#FAFAFA";
                  }, 500));
            }
            function o() {
              Ne(),
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "sidebar_copy_all_click",
                });
            }
          }
        }
      }
      let Re = "";
      function Pe(e) {
        if (
          document.getElementsByClassName("glasp_profile_on_twitter_wrapper")
            .length > 0
        ) {
          if (Re == window.location.pathname.split("/")[1]) return;
          Array.from(
            document.getElementsByClassName("glasp_profile_on_twitter_wrapper")
          ).forEach((e) => {
            e.remove();
          });
        }
        setTimeout(() => {
          if (
            document.querySelectorAll('[aria-label="Profile timelines"]')
              .length > 0
          ) {
            const e =
                document.getElementsByClassName(
                  "glasp_profile_on_twitter_wrapper"
                ).length > 0,
              t = window.location.pathname.split("/")[1];
            if (Re == t && e) return;
            (Re = t),
              chrome.runtime.sendMessage(
                {
                  action: "twitter_profile_exist",
                  data: t,
                },
                (e) => {
                  if ("account_found" === e.result) {
                    const t = e.data,
                      n = document.querySelectorAll(
                        '[aria-label="Profile timelines"]'
                      )[0].previousElementSibling,
                      i = document
                        .querySelectorAll('[alt="Opens profile photo"]')[0]
                        .getAttribute("src"),
                      r =
                        "reserved" == t.userVerification
                          ? `https://glasp.co/explore/?author=${t.userUsername}`
                          : `https://glasp.co/#/${t.userUsername}`,
                      o =
                        "" == t.userBio
                          ? `View ${t.userDisplayName}'s Glasp page`
                          : t.userBio,
                      a =
                        "verified" !== t.userVerification
                          ? ""
                          : '<svg width="18" height="18" style="margin-left: 4px;" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <circle cx="13" cy="13" r="11" fill="#2A80FF"/>\n                                <circle cx="13" cy="5" r="5" fill="#2A80FF"/>\n                                <circle cx="13" cy="21" r="5" fill="#2A80FF"/>\n                                <circle cx="21" cy="13" r="5" fill="#2A80FF"/>\n                                <circle cx="7" cy="7" r="5" fill="#2A80FF"/>\n                                <circle cx="19" cy="7" r="5" fill="#2A80FF"/>\n                                <circle cx="19" cy="19" r="5" fill="#2A80FF"/>\n                                <circle cx="7" cy="19" r="5" fill="#2A80FF"/>\n                                <circle cx="5" cy="13" r="5" fill="#2A80FF"/>\n                                <path d="M8 13L11.6364 17L18 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                            </svg>',
                      s =
                        t.userTopics && 0 !== t.userTopics.length
                          ? `<div style='font-size: 13px;color: #536471;font-weight: normal;margin-top: 24px;text-align: left;overflow: hidden;white-space: break-spaces;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;'>Learns ${Array.from(
                              t.userTopics.slice(0, 5)
                            )
                              .map((e) => `#${e}`)
                              .join(" ")}</div>`
                          : "";
                    n.insertAdjacentHTML(
                      "beforeend",
                      `\n                    <div style="padding: 0 16px;" class="glasp_profile_on_twitter_wrapper">\n                        <div style="margin: 8px 16px;">\n                            <div style="margin: 0 8px 8px;">\n                                <div style='font-size: 15px;color: rgb(15, 20, 25);font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;line-height: 20px;font-weight: bold;'>Glasp Profile</div>\n                            </div>\n                            <a href="${r}" target="_blank" style="display: block;box-shadow: rgb(0 0 0 / 10%) 0px 2px 13px 0px;cursor: pointer;background-color: rgba(255,255,255,1.00);border-radius: 16px;overflow: hidden;text-decoration: none;">\n                                <div style="padding:4px;">\n                                    <div style="display:flex;justtify-content:left;">\n                                        <img src="${i}" style="width:94px;height:94px;border-radius: 12px;">\n                                        <div style="padding:8px 12px;">\n                                            <div style="display:flex;justtify-content:left;align-items: center;">\n                                                <div style='height:20px;font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;font-size: 15px;font-weight:bold;color:#0F1419;'>${t.userDisplayName}</div>\n                                                ${a}\n                                            </div>\n                                            <div style='font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;color: rgba(0,0,0,1.00);font-size: 15px;color:#536471;'>${o}</div>\n                                            ${s}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div style="border-bottom: 1px solid rgb(239, 243, 244);"></div>\n                                <div style='font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;color: rgb(120, 86, 255);font-size: 15px;font-weight: bold;height:51px;margin:auto;text-align:center;display: flex;justify-content: center;align-items: center;'>View profile on Glasp</div>\n                            </a>\n                        </div>\n                    </div>`
                    );
                  }
                }
              );
          }
        }, e);
      }
      function Oe(e) {
        let t = "";
        (t += `# ${e.title}\n\n`),
          (t += "" == e.thumbnail ? "" : `![](${e.thumbnail})\n\n`),
          (t += "### Metadata\n\n"),
          (t += `- Title: ${e.title}\n`),
          (t += `- Author: ${e.author}\n`),
          (t += `- Book URL: ${e.fullUrl}\n`),
          (t += `- Open in Kindle: [kindle://book/?action=open&asin=${e.id}](kindle://book/?action=open&asin=${e.id})\n`),
          (t += `- Last Updated on: ${e.lastUpdatedDate}\n\n`),
          (t += "### Highlights & Notes\n\n");
        for (let n = 0; n < e.highlights.length; n++) {
          const i = e.highlights[n];
          (t += `- ${i.string.replace(/\n/g, " ")}\n`),
            (t += "" !== i.note ? `  - Note: ${i.note}\n` : "");
        }
        return (t += "\n\n"), t;
      }
      function ze() {
        const e = [];
        document.getElementsByClassName("glasp_kindle_integ_popup").length >
          0 &&
          Array.from(
            document.getElementsByClassName("glasp_kindle_integ_popup")
          ).forEach((e) => {
            e.remove();
          }),
          document.body.insertAdjacentHTML(
            "beforeend",
            '\n    <div class="glasp_kindle_integ_popup" style="position: fixed;top: 8%;right: 1%;box-shadow: rgb(0 0 0 / 30%) 0px 2px 6px;background-color: #FFFFFF;border-radius: 30px;text-align: center;margin: 0 10px 20px;display: inline-block;font-family: \'Roboto\',sans-serif !important;z-index: 10;padding: 10px 16px;user-select: none;">\n        <div id="glasp_kindle_import_top_wrapper" style="display: flex;justify-content: left;align-items: center;position: relative;gap:8px;">\n            <div>\n                <svg width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.73666 72.9828C-1.17604 68.0756 -1.17605 60.1196 3.73658 55.2124L44.259 14.7353L64.026 34.4803L14.6085 83.8424L3.73666 72.9828Z" fill="#FF4E74"/>\n                <path d="M93.6763 64.0979L44.2592 14.7355L55.131 3.8758C60.0437 -1.03135 68.0087 -1.03136 72.9213 3.8758L113.444 44.353L93.6763 64.0979Z" fill="#FFF85E"/>\n                <path d="M64.0262 93.7147L113.444 44.3527L124.315 55.2124C129.228 60.1196 129.228 68.0756 124.315 72.9828L83.7929 113.46L64.0262 93.7147Z" fill="#76FF54"/>\n                <path d="M72.9212 124.32C68.0086 129.227 60.0436 129.227 55.1309 124.32L14.6085 83.8424L34.3755 64.0977L83.7928 113.46L72.9212 124.32Z" fill="#5C94FF"/>\n                </svg>\n            </div>\n            <div><a id="glasp_kindle_copy_highlights">Copy Highlights</a> or <a id="glasp_kindle_select_books">Select Books</a></div>\n        </div>\n        <div id="glasp_kindle_import_back" style="display:none;cursor: pointer;"><a>< Back to Menu</a></div>\n        <div id="glasp_kindle_import_container"></div>\n    </div>'
          ),
          document.getElementById("glasp_kindle_copy_highlights") &&
            document
              .getElementById("glasp_kindle_copy_highlights")
              .addEventListener("click", () => {
                Te(Oe(Ze())),
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "glasp_kindle_copy_highlights",
                  });
              }),
          document.getElementById("glasp_kindle_import_back") &&
            document
              .getElementById("glasp_kindle_import_back")
              .addEventListener("click", () => {
                (document.getElementById(
                  "glasp_kindle_import_back"
                ).style.display = "none"),
                  (document.getElementById(
                    "glasp_kindle_import_top_wrapper"
                  ).style.display = "flex"),
                  (document.getElementById(
                    "glasp_kindle_import_container"
                  ).innerHTML = ""),
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "glasp_kindle_import_back",
                  });
              }),
          document.getElementById("glasp_kindle_select_books") &&
            document
              .getElementById("glasp_kindle_select_books")
              .addEventListener("click", () => {
                (document.getElementById(
                  "glasp_kindle_import_back"
                ).style.display = "block"),
                  (document.getElementById(
                    "glasp_kindle_import_top_wrapper"
                  ).style.display = "none"),
                  (document.getElementById(
                    "glasp_kindle_import_container"
                  ).innerHTML = ""),
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "glasp_kindle_select_books",
                  });
                const t = (function () {
                  const e = [];
                  return (
                    Array.from(
                      document
                        .querySelector("#kp-notebook-library")
                        .querySelectorAll(
                          ".a-row .kp-notebook-library-each-book"
                        )
                    ).forEach((t) => {
                      const n = t.getAttribute("id"),
                        i = t.querySelector("h2").innerText,
                        r = t.querySelector("img").src;
                      e.push({
                        id: n,
                        title: i,
                        thumbnailSmall: r,
                      });
                    }),
                    e
                  );
                })();
                document
                  .getElementById("glasp_kindle_import_container")
                  .insertAdjacentHTML(
                    "beforeend",
                    `\n            <div style="padding: 8px 0;">\n                <div style="display: flex;justify-content: left;align-items: center;position: relative;gap:8px;padding: 8px 0;">\n                    <div>${
                      t.length
                    } Books</div>\n                    <button id="glasp_kindle_books_select_all" style="padding: 8px 10px;line-height: 1em;font-size: 13px;border: 1px solid rgba(0,0,0,0.2);border-radius: 20px;cursor: pointer;outline: none;background-color: #EEEEEE;">Select All</button>\n                    <button id="glasp_kindle_books_clear_all" style="padding: 8px 10px;line-height: 1em;font-size: 13px;border: 1px solid rgba(0,0,0,0.2);border-radius: 20px;cursor: pointer;outline: none;background-color: #EEEEEE;">Clear All</button>\n                </div>\n                <hr style="margin:0;">\n                <div id="glasp_kindle_all_books_wrapper" style="max-height: 420px;width: 360px;overflow: scroll;padding: 8px 0;">${Array.from(
                      t
                    )
                      .map(
                        (e, t, n) =>
                          `\n                        <div data-asin-id="${e.id}" style="display: flex;justify-content: left;align-items: center;position: relative;gap:8px;overflow: hidden;cursor: pointer;padding: 8px 0;">\n                            <input type="checkbox" data-asin-id="${e.id}" id="checkbox_for_book_${e.id}" class="glasp_checkbox_for_books" style="width: 20px !important;min-width: 20px;height: 20px !important;cursor: pointer;margin-right: 6px;">\n                            <img src="${e.thumbnailSmall}" style="width: 32px;">\n                            <label for="checkbox_for_book_${e.id}" style="text-align: left;overflow: hidden;white-space: break-spaces;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;cursor: pointer;line-height: 1.3em;font-size: 14px;font-weight: normal;width: 100%;">${e.title}</label>\n                        </div>`
                      )
                      .join(
                        ""
                      )}</div>\n                <hr style="margin:0;">\n                <div style="padding: 8px 0 0;text-align: left;font-size: 13px;color: #626262;">\n                    <div><span id="glasp_kindle_process_status">Getting</span> <span id="glasp_kindle_processed_num">0</span> / <span id="glasp_kindle_selected_num">0</span></div>\n                </div>\n                <div style="padding: 8px 0 0;display: flex;justify-content: center;align-items: center;position: relative;gap: 24px;">\n                    <div style="margin-right: auto;">Download as: <a id="glasp_kindle_download_text">Text</a>, <a id="glasp_kindle_download_csv">CSV</a>, <a id="glasp_kindle_download_md">MD</a> </div>\n                    <button id="glasp_kindle_books_import" style="padding: 8px 16px;border-radius: 20px;cursor: pointer;background-color: #6297ff;color: #FFFFFF;outline: none;border: none;white-space: nowrap;">Import to Glasp</button>\n                </div>\n            </div>\n            `
                  ),
                  document
                    .getElementById("glasp_kindle_books_select_all")
                    .addEventListener("click", () => {
                      Array.from(
                        document.getElementsByClassName(
                          "glasp_checkbox_for_books"
                        )
                      ).forEach((e) => {
                        e.checked = !0;
                      }),
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "glasp_kindle_books_select_all",
                        });
                    }),
                  document
                    .getElementById("glasp_kindle_books_clear_all")
                    .addEventListener("click", () => {
                      Array.from(
                        document.getElementsByClassName(
                          "glasp_checkbox_for_books"
                        )
                      ).forEach((e) => {
                        e.checked = !1;
                      }),
                        chrome.runtime.sendMessage({
                          action: "amplitude_log",
                          evtName: "glasp_kindle_books_clear_all",
                        });
                    });
                const n = [],
                  i = [];
                async function r(t, r) {
                  (n.length = 0),
                    (i.length = 0),
                    (document.getElementById(t).disabled = !0),
                    (document.getElementById(
                      "glasp_kindle_process_status"
                    ).innerHTML = "Getting"),
                    (document.getElementById(
                      "glasp_kindle_processed_num"
                    ).outerHTML = document.getElementById(
                      "glasp_kindle_processed_num"
                    ).outerHTML),
                    (document.getElementById(
                      "glasp_kindle_processed_num"
                    ).innerText = 0);
                  const a = Array.from(
                    document.getElementsByClassName("glasp_checkbox_for_books")
                  ).filter((e) => e.checked).length;
                  (document.getElementById(
                    "glasp_kindle_selected_num"
                  ).innerText = a),
                    document
                      .getElementById("glasp_kindle_processed_num")
                      .addEventListener("DOMSubtreeModified", () => {
                        if (
                          parseInt(
                            document.getElementById(
                              "glasp_kindle_processed_num"
                            ).innerText
                          ) == a
                        )
                          switch (r) {
                            case "import":
                              (document.getElementById(
                                "glasp_kindle_process_status"
                              ).innerHTML = "Saving..."),
                                (function (e) {
                                  chrome.runtime.sendMessage(
                                    {
                                      action: "save_kindle_highlights",
                                      data: e,
                                    },
                                    async (e) => {
                                      const t = e.result;
                                      document.getElementById(
                                        "glasp_kindle_process_status"
                                      ).innerHTML = `<span style="color:${
                                        "Imported!" == t ? "green" : "red"
                                      };">${t}</span>`;
                                    }
                                  );
                                })(i);
                              break;
                            case "text":
                              var e = (t = new JSZip()).folder(
                                "Glasp Highlights"
                              );
                              Array.from(i).forEach((t) => {
                                e.file(
                                  `${t.data.title.replace(/\//g, " ")}.txt`,
                                  (function (e) {
                                    let t = "";
                                    const n = e.data,
                                      i = n.title,
                                      r = n.author,
                                      o = n.fullUrl,
                                      a = n.thumbnail,
                                      s = n.lastUpdatedDate,
                                      l = n.highlights;
                                    (t += `${i}\n`),
                                      (t += `By: ${r}\n`),
                                      (t += `Book URL: ${o}\n`),
                                      (t += `Book Cover: ${a}\n`),
                                      (t += `Last Updated on: ${s}\n`),
                                      (t += "\nHighlights & Notes: \n");
                                    for (let e = 0; e < l.length; e++) {
                                      const n = l[e],
                                        i = n.string,
                                        r = n.note ? n.note : "";
                                      (t += ` - ${i.replace(/\n/g, " ")}\n`),
                                        (t +=
                                          "" !== r ? `  * Notes: ${r}\n` : "");
                                    }
                                    return t;
                                  })(t)
                                );
                              }),
                                t
                                  .generateAsync({
                                    type: "blob",
                                  })
                                  .then(function (e) {
                                    saveAs(e, "Glasp Highlights.zip");
                                  });
                              break;
                            case "csv":
                              !(function (e) {
                                const t = [
                                  [
                                    "Title",
                                    "Author",
                                    "Book URL",
                                    "Book Cover",
                                    "Last Updated on",
                                    "Highlight Text",
                                    "Note",
                                    "Color",
                                    "Location",
                                  ],
                                ];
                                Array.from(e).forEach((e) => {
                                  const n = e.data,
                                    i = o(n.title),
                                    r = o(n.author),
                                    a = n.fullUrl,
                                    s = n.thumbnail,
                                    l = o(n.lastUpdatedDate),
                                    c = n.highlights;
                                  0 == c.length
                                    ? t.push([i, r, a, s, l, "", "", "", ""])
                                    : Array.from(c).forEach((e) => {
                                        const n = o(e.string),
                                          c = "" !== e.note ? o(e.note) : "",
                                          d = e.location,
                                          u = o(e.color);
                                        t.push([i, r, a, s, l, n, c, u, d]);
                                      });
                                });
                                const n =
                                    "data:text/csv;charset=utf-8," +
                                    t.map((e) => e.join(",")).join("\n"),
                                  i = encodeURI(n),
                                  r = document.createElement("a");
                                function o(e) {
                                  return "" == e
                                    ? ""
                                    : `"${e
                                        .replace(/"/g, '""')
                                        .replace(/\n/g, " ")
                                        .replace(/#/g, "")}"`;
                                }
                                r.setAttribute("href", i),
                                  r.setAttribute(
                                    "download",
                                    "Glasp Highlights.csv"
                                  ),
                                  document.body.appendChild(r),
                                  r.click(),
                                  r.remove();
                              })(i);
                              break;
                            case "md":
                              var t;
                              (e = (t = new JSZip()).folder(
                                "Glasp Highlights"
                              )),
                                Array.from(i).forEach((t) => {
                                  e.file(
                                    `${t.data.title.replace(/\//g, " ")}.md`,
                                    Oe(t.data)
                                  );
                                }),
                                t
                                  .generateAsync({
                                    type: "blob",
                                  })
                                  .then(function (e) {
                                    saveAs(e, "Glasp Highlights.zip");
                                  });
                          }
                      }),
                    Array.from(
                      document.getElementsByClassName(
                        "glasp_checkbox_for_books"
                      )
                    ).forEach((e) => {
                      e.checked && n.push(e.getAttribute("data-asin-id"));
                    }),
                    Array.from(n).forEach((t) => {
                      if (Array.from(e).some((e) => e.id == t))
                        return (
                          Array.from(e).forEach((e) => {
                            e.id == t && i.push(e);
                          }),
                          void (document.getElementById(
                            "glasp_kindle_processed_num"
                          ).innerText =
                            parseInt(
                              document.getElementById(
                                "glasp_kindle_processed_num"
                              ).innerText
                            ) + 1)
                        );
                      o(window.location.host, t, 0);
                    }),
                    (document.getElementById(t).disabled = !1);
                }
                function o(t, n, r) {
                  $.ajax({
                    url: `https://${t}/notebook?asin=${n}&contentLimitState=&`,
                    type: "GET",
                    dataType: "text",
                    success: function (t) {
                      const n = Ze($($.parseHTML(t))[0]),
                        r = {
                          id: n.id,
                          data: n,
                        };
                      i.push(r),
                        Array.from(e).some((e) => e.id == n.id) || e.push(r),
                        (document.getElementById(
                          "glasp_kindle_processed_num"
                        ).innerText =
                          parseInt(
                            document.getElementById(
                              "glasp_kindle_processed_num"
                            ).innerText
                          ) + 1);
                    },
                    error: function () {
                      if (++r <= 2) return o(t, n, r);
                      document.getElementById(
                        "glasp_kindle_processed_num"
                      ).innerText =
                        parseInt(
                          document.getElementById("glasp_kindle_processed_num")
                            .innerText
                        ) + 1;
                    },
                  });
                }
                document
                  .getElementById("glasp_kindle_download_text")
                  .addEventListener("click", () => {
                    chrome.runtime.sendMessage({
                      action: "amplitude_log",
                      evtName: "glasp_kindle_download_text",
                    }),
                      r("glasp_kindle_download_text", "text");
                  }),
                  document
                    .getElementById("glasp_kindle_download_csv")
                    .addEventListener("click", async () => {
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "glasp_kindle_download_csv",
                      }),
                        r("glasp_kindle_download_csv", "csv");
                    }),
                  document
                    .getElementById("glasp_kindle_download_md")
                    .addEventListener("click", async () => {
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "glasp_kindle_download_md",
                      }),
                        r("glasp_kindle_download_md", "md");
                    }),
                  document
                    .getElementById("glasp_kindle_books_import")
                    .addEventListener("click", async () => {
                      chrome.runtime.sendMessage({
                        action: "amplitude_log",
                        evtName: "glasp_kindle_books_import",
                      }),
                        r("glasp_kindle_books_import", "import");
                    });
              });
      }
      function Ze(e) {
        const t = e || document,
          n = t.querySelector(
            "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > h3"
          ).innerText,
          i = t.querySelector(
            "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a"
          ).href,
          r = new URL(i).hostname + new URL(i).pathname,
          o = i.split("dp/")[1],
          a = t
            .getElementsByClassName(
              "a-link-normal kp-notebook-printable a-text-normal"
            )[0]
            .querySelector("img").src,
          s = a.includes("._SY160") ? a.replace("._SY160", "") : a,
          l = t.querySelector(
            "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > p.a-spacing-none.a-spacing-top-micro.a-size-base.a-color-secondary.kp-notebook-selectable.kp-notebook-metadata"
          ).innerText,
          c = document
            .querySelector(`#kp-notebook-annotated-date-${o}`)
            .getAttribute("value"),
          d = isNaN(new Date(c)) ? Date.now() : new Date(c).getTime(),
          u = [],
          p = {
            pink: "#FFB6C6",
            yellow: "#F9F47F",
            orange: "#FFCD8B",
            blue: "#ADC9FF",
          };
        return (
          Array.from(
            t
              .querySelector("#kp-notebook-annotations")
              .querySelectorAll(".a-row .a-spacing-base")
          ).forEach((e) => {
            if (!e.querySelector("#highlight")) return;
            const t = e.querySelector("#highlight").innerText ?? "",
              n = e.querySelector("#note").innerText ?? "",
              i =
                e
                  .querySelector("#highlight")
                  .parentElement.getAttribute("class")
                  .split("kp-notebook-highlight-")[1] ?? "",
              r =
                parseInt(
                  e
                    .querySelector("#kp-annotation-location")
                    .getAttribute("value")
                ) ?? 0,
              o =
                Math.random().toString(36).substring(2, 10) +
                Math.random().toString(36).substring(2, 10);
            u.push({
              string: t,
              highlightid: o,
              note: n,
              color: i,
              timestamp: d,
              colorId: p[i],
              location: parseInt(r),
            });
          }),
          {
            id: o,
            title: n,
            fullUrl: i,
            url: r,
            thumbnailSmall: a,
            thumbnail: s,
            author: l,
            lastUpdatedDate: c,
            lastUpdated: d,
            highlights: u,
          }
        );
      }
      const Ve = (e) =>
        void 0 === e || "auto" === e || "instant" === e || "smooth" === e;
      function We(e, t) {
        (this.scrollLeft = e), (this.scrollTop = t);
      }
      const Ge = (e, t, n = "cannot convert to dictionary.") =>
          `Failed to execute '${e}' on '${t}': ${n}`,
        Xe = (e, t, n) =>
          Ge(
            e,
            t,
            `The provided value '${n}' is not a valid enum value of type ScrollBehavior.`
          ),
        Ye = (e, t, n) => {
          const i = `__SEAMLESS.BACKUP$${t}`;
          return (
            e[i] || !e[t] || e[t]?.__isPolyfill || (e[i] = e[t]), e[i] || n
          );
        },
        Qe = (e) => {
          const t = typeof e;
          return null !== e && ("object" === t || "function" === t);
        },
        Je = (e) =>
          e.ownerDocument.scrollingElement || e.ownerDocument.documentElement,
        Ke = (e) => 0.5 * (1 - Math.cos(Math.PI * e)),
        et = () => window.performance?.now?.() ?? window.Date.now(),
        tt = (e) => {
          const t = (et() - e.timeStamp) / (e.duration || 500);
          if (t > 1) return e.method(e.targetX, e.targetY), void e.callback();
          const n = (e.timingFunc || Ke)(t),
            i = e.startX + (e.targetX - e.startX) * n,
            r = e.startY + (e.targetY - e.startY) * n;
          e.method(i, r),
            (e.rafId = window.requestAnimationFrame(() => {
              tt(e);
            }));
        },
        nt = (e) => (isFinite(e) ? Number(e) : 0),
        it = ((e) => (t, n, i) => {
          const [r, o] =
            (a = t).window === a
              ? [Je(t.document.documentElement), "Window"]
              : [t, "Element"];
          var a;
          const s = n ?? {};
          if (!Qe(s)) throw new TypeError(Ge(e, o));
          if (!Ve(s.behavior)) throw new TypeError(Xe(e, o, s.behavior));
          "scrollBy" === e &&
            ((s.left = nt(s.left) + r.scrollLeft),
            (s.top = nt(s.top) + r.scrollTop)),
            ((e, t, n) => {
              if (
                !(
                  (i = e).isConnected ??
                  (!i.ownerDocument ||
                    !(1 & i.ownerDocument.compareDocumentPosition(i)))
                )
              )
                return;
              var i;
              const r = e.scrollLeft,
                o = e.scrollTop,
                a = nt(t.left ?? r),
                s = nt(t.top ?? o);
              if (a === r && s === o) return;
              const l = Ye(HTMLElement.prototype, "scroll", We),
                c = Ye(Object.getPrototypeOf(e), "scroll", l).bind(e);
              if ("smooth" !== t.behavior) return void c(a, s);
              const d = () => {
                  window.removeEventListener("wheel", p),
                    window.removeEventListener("touchmove", p);
                },
                u = {
                  ...n,
                  timeStamp: et(),
                  startX: r,
                  startY: o,
                  targetX: a,
                  targetY: s,
                  rafId: 0,
                  method: c,
                  callback: d,
                },
                p = () => {
                  window.cancelAnimationFrame(u.rafId), d();
                };
              window.addEventListener("wheel", p, {
                passive: !0,
                once: !0,
              }),
                window.addEventListener("touchmove", p, {
                  passive: !0,
                  once: !0,
                }),
                tt(u);
            })(r, s, i);
        })("scroll"),
        rt = (e) => {
          switch (e) {
            case "horizontal-tb":
            case "lr":
            case "lr-tb":
            case "rl":
            case "rl-tb":
              return 0;
            case "vertical-rl":
            case "tb":
            case "tb-rl":
              return 1;
            case "vertical-lr":
            case "tb-lr":
              return 2;
            case "sideways-rl":
              return 3;
            case "sideways-lr":
              return 4;
          }
          return 0;
        },
        ot = (e, t, n, i) => {
          let r = 0;
          switch ((t || (r ^= 2), e)) {
            case 0:
              (r = (r >> 1) | ((1 & r) << 1)), ([n, i] = [i, n]);
              break;
            case 1:
            case 3:
              r ^= 1;
              break;
            case 4:
              r ^= 2;
          }
          return [r, n, i];
        },
        at = (e) =>
          1 ==
          (1 & ot(rt(e.writingMode), "rtl" !== e.direction, void 0, void 0)[0]),
        st = (e, t, n, i, r, o, a) =>
          0 !== e
            ? e
            : (r < t && o > n) || (r > t && o < n)
            ? null
            : (r <= t && a <= i) || (o >= n && a >= i)
            ? 2
            : (o > n && a < i) || (r < t && a > i)
            ? 3
            : null,
        lt = (e) => "visible" !== e && "clip" !== e,
        ct = (e, t) =>
          (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) &&
          (lt(t.overflowY) || lt(t.overflowX) || e === Je(e)),
        dt = (e) => {
          const t = e.parentNode,
            n = e.parentElement;
          if (null === n && null !== t) {
            if (11 === t.nodeType) return t.host;
            if (9 === t.nodeType)
              return ((e) => {
                try {
                  return e.ownerDocument.defaultView?.frameElement || null;
                } catch {
                  return null;
                }
              })(e);
          }
          return n;
        },
        ut = (e, t, n) => (e < t ? t : e > n ? n : e),
        pt = (e, t, n) => {
          switch (e) {
            case 1:
              return (t + n) / 2;
            case 3:
              return n;
            case 2:
            case 0:
              return t;
          }
        },
        ht = (e, t) => {
          const n = e.ownerDocument.defaultView?.visualViewport,
            [i, r, o, a] =
              e === Je(e)
                ? [0, 0, n?.width ?? e.clientWidth, n?.height ?? e.clientHeight]
                : [t.left, t.top, e.clientWidth, e.clientHeight],
            s = i + e.clientLeft,
            l = r + e.clientTop;
          return [l, s + o, l + a, s];
        },
        gt = (e, t, n) => {
          const i = t || {};
          if (!Ve(i.behavior))
            throw new TypeError(Xe("scrollIntoView", "Element", i.behavior));
          ((e, t) => {
            const n = [];
            let i = e.ownerDocument,
              r = i.defaultView;
            if (!r) return n;
            const o = window.getComputedStyle(e),
              a = "rtl" !== o.direction,
              s = rt(
                o.writingMode ||
                  o.getPropertyValue("-webkit-writing-mode") ||
                  o.getPropertyValue("-ms-writing-mode")
              ),
              [l, c] = ((e, t, n) => {
                const [i, r, o] = ot(
                  t,
                  n,
                  e.block || "start",
                  e.inline || "nearest"
                );
                return [r, o].map((e, t) => {
                  switch (e) {
                    case "center":
                      return 1;
                    case "nearest":
                      return 0;
                    default:
                      return ("start" === e) == !((i >> t) & 1) ? 2 : 3;
                  }
                });
              })(t, s, a);
            let [d, u, p, h] = ((e, t, n) => {
              const { top: i, right: r, bottom: o, left: a } = t,
                s =
                  ((l = e.ownerDocument),
                  ["scroll-margin", "scroll-snap-margin"].filter(
                    (e) => e in l.documentElement.style
                  )[0]);
              var l;
              if (!s) return [i, r, o, a];
              const c = (e) => {
                const t = n.getPropertyValue(`${s}-${e}`);
                return parseInt(t, 10) || 0;
              };
              return [
                i - c("top"),
                r + c("right"),
                o + c("bottom"),
                a - c("left"),
              ];
            })(e, e.getBoundingClientRect(), o);
            for (let o = dt(e); null !== o; o = dt(o)) {
              if (i !== o.ownerDocument) {
                if (((i = o.ownerDocument), (r = i.defaultView), !r)) break;
                const { left: e, top: t } = o.getBoundingClientRect();
                (d += t), (u += e), (p += t), (h += e);
              }
              const e = r.getComputedStyle(o);
              if ("fixed" === e.position) break;
              if (!ct(o, e)) continue;
              const a = o.getBoundingClientRect(),
                [s, g, m, f] = ht(o, a),
                y = st(l, f, g, o.clientWidth, h, u, u - h),
                _ = st(c, s, m, o.clientHeight, d, p, p - d),
                v = null === y ? 0 : pt(y, h, u) - pt(y, f, g),
                b = null === _ ? 0 : pt(_, d, p) - pt(_, s, m),
                x = at(e)
                  ? ut(
                      v,
                      -o.scrollWidth + o.clientWidth - o.scrollLeft,
                      -o.scrollLeft
                    )
                  : ut(
                      v,
                      -o.scrollLeft,
                      o.scrollWidth - o.clientWidth - o.scrollLeft
                    ),
                w = ut(
                  b,
                  -o.scrollTop,
                  o.scrollHeight - o.clientHeight - o.scrollTop
                );
              n.push([
                o,
                {
                  left: o.scrollLeft + x,
                  top: o.scrollTop + w,
                  behavior: t.behavior,
                },
              ]),
                (d = Math.max(d - w, s)),
                (u = Math.min(u - x, g)),
                (p = Math.min(p - w, m)),
                (h = Math.max(h - x, f));
            }
            return n;
          })(e, i).forEach(([e, t]) => {
            it(e, t, n);
          });
        };
      function mt(e) {
        gt(this, {
          block: e ?? 1 ? "start" : "end",
          inline: "nearest",
        });
      }
      const ft = (e, t) =>
          `<svg style="filter: brightness(0.8);" width="${e}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <mask id="path-1-outside-1_3606_3145" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22" fill="black">\n                <rect fill="white" x="1" y="1" width="22" height="22"/>\n                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z"/>\n                </mask>\n                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z" fill="#828282"/>\n                <path d="M20.6816 10.1843C20.9588 9.34066 21.0063 8.4399 20.8192 7.57245C20.6321 6.70499 20.217 5.90134 19.6157 5.24216C19.0143 4.58298 18.2478 4.09146 17.393 3.81692C16.5382 3.54238 15.6253 3.49449 14.7459 3.67805C14.1453 3.01747 13.379 2.52468 12.524 2.24931C11.669 1.97394 10.7555 1.92571 9.87559 2.10947C8.99568 2.29324 8.18039 2.70252 7.51181 3.29608C6.84323 3.88965 6.34499 4.64654 6.06725 5.49055C5.18642 5.67292 4.3699 6.08122 3.70003 6.67426C3.03017 7.26731 2.53064 8.02413 2.25182 8.86842C1.97299 9.71271 1.92474 10.6146 2.11192 11.4832C2.2991 12.3517 2.71509 13.1562 3.31795 13.8155C3.09309 14.4899 3.01633 15.2037 3.09278 15.9095C3.16924 16.6154 3.39716 17.2971 3.76139 17.9093C4.30169 18.8351 5.12567 19.568 6.11483 20.0027C7.104 20.4373 8.20738 20.5512 9.26631 20.328C9.74353 20.8568 10.3291 21.2796 10.9844 21.5684C11.6396 21.8571 12.3495 22.0053 13.0672 22.003C14.1516 22.003 15.2081 21.6635 16.0847 21.0334C16.9612 20.4034 17.6125 19.5152 17.9449 18.4968C18.649 18.3539 19.3141 18.0649 19.8962 17.6489C20.4784 17.233 20.9642 16.6997 21.3214 16.0843C21.8585 15.1598 22.0858 14.0915 21.9709 13.032C21.856 11.9724 21.4048 10.9758 20.6816 10.1843ZM13.0798 20.6968C12.191 20.6968 11.3302 20.3894 10.6473 19.828L10.7677 19.7593L14.8029 17.4593C14.9069 17.4047 14.9935 17.3225 15.0528 17.2221C15.1121 17.1216 15.1418 17.0068 15.1386 16.8905V11.2655L16.8427 12.2405C16.8517 12.2441 16.8594 12.2501 16.865 12.2579C16.8706 12.2656 16.8739 12.2748 16.8744 12.2843V16.9343C16.876 17.4289 16.7785 17.9189 16.5875 18.3761C16.3964 18.8333 16.1156 19.2488 15.7611 19.5985C15.4067 19.9482 14.9856 20.2253 14.5222 20.4138C14.0588 20.6023 13.5621 20.6984 13.0608 20.6968H13.0798ZM4.90165 17.2593C4.46164 16.5029 4.3026 15.6189 4.45188 14.7593L4.57224 14.828L8.60749 17.128C8.70379 17.1829 8.81303 17.2118 8.92423 17.2118C9.03543 17.2118 9.14467 17.1829 9.24097 17.128L14.1758 14.3218V16.253C14.1797 16.2608 14.1817 16.2694 14.1817 16.278C14.1817 16.2867 14.1797 16.2953 14.1758 16.303L10.0962 18.628C9.66403 18.8748 9.18685 19.0352 8.69188 19.0999C8.19692 19.1647 7.69387 19.1326 7.21148 19.0055C6.72909 18.8784 6.27681 18.6587 5.88048 18.3591C5.48415 18.0595 5.15154 17.6858 4.90165 17.2593ZM3.83741 8.5843C4.28764 7.82089 4.99655 7.23878 5.83919 6.94055V11.6718C5.83595 11.7857 5.86434 11.8983 5.92128 11.9975C5.97823 12.0966 6.06156 12.1785 6.16227 12.2343L11.0717 15.028L9.36766 16.003C9.34918 16.0092 9.32914 16.0092 9.31065 16.003L5.23106 13.678C4.36041 13.1812 3.72487 12.3642 3.46364 11.4059C3.20242 10.4476 3.33682 9.42624 3.83741 8.56555V8.5843ZM17.8563 11.7968L12.9278 8.9718L14.6319 8.00305C14.6403 7.99741 14.6502 7.99439 14.6604 7.99439C14.6705 7.99439 14.6805 7.99741 14.6889 8.00305L18.7685 10.328C19.3915 10.684 19.8992 11.2072 20.2325 11.8368C20.5659 12.4664 20.7111 13.1764 20.6514 13.8843C20.5916 14.5921 20.3294 15.2687 19.8951 15.8352C19.4608 16.4017 18.8724 16.8349 18.1983 17.0843V12.353C18.1946 12.2391 18.1612 12.1281 18.1013 12.0306C18.0414 11.9332 17.957 11.8527 17.8563 11.7968ZM19.554 9.2968L19.4336 9.2218L15.4047 6.9093C15.3047 6.84846 15.1896 6.81624 15.0721 6.81624C14.9547 6.81624 14.8395 6.84846 14.7396 6.9093L9.8111 9.71555V7.75305C9.8061 7.7445 9.80346 7.7348 9.80346 7.72492C9.80346 7.71505 9.8061 7.70535 9.8111 7.6968L13.897 5.37805C14.5222 5.02257 15.2371 4.85003 15.958 4.88059C16.6789 4.91115 17.3762 5.14356 17.9682 5.55064C18.5601 5.95772 19.0225 6.52265 19.301 7.17939C19.5796 7.83614 19.663 8.55755 19.5413 9.2593L19.554 9.2968ZM8.87989 12.7218L7.1695 11.753C7.15339 11.7405 7.1422 11.7228 7.13782 11.703V7.06555C7.13785 6.35289 7.34371 5.65499 7.73128 5.0536C8.11885 4.45222 8.67209 3.97224 9.32619 3.6699C9.98029 3.36756 10.7082 3.25537 11.4246 3.34647C12.141 3.43757 12.8162 3.7282 13.3712 4.1843L13.2636 4.25305L9.21563 6.55305C9.11158 6.60765 9.02504 6.68981 8.96573 6.79029C8.90642 6.89076 8.87669 7.00557 8.87989 7.1218V12.7218ZM9.80476 10.753L11.9966 9.50305L14.1948 10.753V13.253L11.9966 14.503L9.79843 13.253L9.80476 10.753Z" stroke="#828282" stroke-width="0.2" mask="url(#path-1-outside-1_3606_3145)"/>\n            </svg>`,
        yt = (e, t, n) =>
          `<svg class="yt_ai_summary_loading" style="${n}" width="${e}" height="${t}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M100 36C59.9995 36 37 66 37 99C37 132 61.9995 163.5 100 163.5C138 163.5 164 132 164 99" stroke="#5C94FF" stroke-width="6"/>\n            </svg>`;
      function _t(e) {
        navigator.clipboard
          ? navigator.clipboard.writeText(e).then(
              function () {},
              function (e) {}
            )
          : (async function (e) {
              var t = document.createElement("textarea");
              (t.value = e),
                (t.style.top = "0"),
                (t.style.left = "0"),
                (t.style.position = "fixed"),
                document.body.appendChild(t),
                t.focus(),
                t.select();
              try {
                document.execCommand("copy");
              } catch (e) {}
              document.body.removeChild(t);
            })(e);
      }
      function vt() {
        const e =
            document.getElementsByClassName(
              "yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"
            ) ?? [],
          t = Array.from(e).map((e) => {
            if (e.targetWidth >= 1500) return;
            if (e.width < e.height) return;
            const t = e.getAttribute("src") ?? void 0;
            return void 0 !== t ? t.split("/")[4] ?? void 0 : void 0;
          });
        return t.filter((e) => void 0 !== e), t;
      }
      function bt() {
        const e =
          document.getElementsByClassName(
            "yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"
          ) ?? [];
        Array.from(
          document.getElementsByClassName("glasp_yt_summary_btn_on_img")
        ).forEach((e) => {
          e.remove();
        }),
          Array.from(e).forEach((e, t) => {
            if (e.targetWidth >= 1500) return;
            if (e.width < e.height) return;
            const n = e.getAttribute("src") ?? void 0;
            if (void 0 !== n && n.includes("i.ytimg.com")) {
              const t = n.split("/")[4] ?? "",
                i = document.createElement("div");
              i.setAttribute("class", "glasp_yt_summary_btn_on_img"),
                i.setAttribute("data-video-id", t),
                (i.innerHTML = ft(20, 20)),
                e.addEventListener("mouseover", (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    Array.from(
                      document.getElementsByClassName(
                        "glasp_yt_summary_btn_on_img"
                      )
                    ).forEach((e) => {
                      e.style.display = "none";
                    }),
                    (i.style.display = "block");
                }),
                i.addEventListener("mouseover", (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    Array.from(
                      document.getElementsByClassName(
                        "glasp_yt_summary_btn_on_img"
                      )
                    ).forEach((e) => {
                      e.style.display = "none";
                    }),
                    (i.style.display = "block");
                }),
                e.parentElement.insertAdjacentElement("afterbegin", i);
            }
          });
        const t =
          document.getElementsByClassName("glasp_yt_summary_btn_on_img") ?? [];
        Array.from(t).forEach((e) => {
          e.addEventListener("click", async (t) => {
            t.stopPropagation(), t.preventDefault();
            const n = e.getAttribute("data-video-id") ?? "";
            await At(n, "hover");
          });
        });
      }
      function xt(e) {
        const t = document.createElement("div");
        return (
          e &&
            "string" == typeof e &&
            ((t.innerHTML = e), (e = t.textContent), (t.textContent = "")),
          e
        );
      }
      const wt = {
          en: {
            title: "Title",
            transcript: "Transcript",
            summary: "Summary",
            summaryPrompt: "Summarize the following in 5 bullet points.",
            asideNote:
              "From our experience, it takes longer to get answer in non-English language. So we'd recommend getting answer in English and translate it into your native language using DeepL or Google Translate.",
          },
          "zh-cn": {
            title: "标题",
            transcript: "文字稿",
            summary: "摘要",
            summaryPrompt: "用5个要点总结以下内容。",
            asideNote:
              "根据我们的经验，获得非英语语言的答案需要更长的时间。因此，我们建议您在英语中获得答案，并使用DeepL或Google Translate将其翻译成您的母语。",
          },
          es: {
            title: "Título",
            transcript: "Transcripción",
            summary: "Resumen",
            summaryPrompt: "Resuma lo siguiente en 5 puntos.",
            asideNote:
              "De nuestra experiencia, toma más tiempo obtener una respuesta en un idioma que no sea inglés. Por lo tanto, le recomendamos que obtenga una respuesta en inglés y la traduzca a su idioma nativo usando DeepL o Google Translate.",
          },
          fr: {
            title: "Titre",
            transcript: "Transcription",
            summary: "Résumé",
            summaryPrompt: "Résumez ce qui suit en 5 points.",
            asideNote:
              "D'expérience, il faut plus de temps pour obtenir une réponse dans une langue autre que l'anglais. Nous vous recommandons donc d'obtenir une réponse en anglais et de la traduire dans votre langue maternelle à l'aide de DeepL ou de Google Translate.",
          },
          de: {
            title: "Titel",
            transcript: "Transkript",
            summary: "Zusammenfassung",
            summaryPrompt:
              "Fassen Sie die folgenden Punkte in 5 Punkten zusammen.",
            asideNote:
              "Aus unserer Erfahrung dauert es länger, eine Antwort in einer nicht englischen Sprache zu erhalten. Daher empfehlen wir Ihnen, eine Antwort in Englisch zu erhalten und sie in Ihre Muttersprache mit DeepL oder Google Translate zu übersetzen.",
          },
          it: {
            title: "Titolo",
            transcript: "Trascrizione",
            summary: "Sommario",
            summaryPrompt: "Riassumi quanto segue in 5 punti.",
            asideNote:
              "Dalla nostra esperienza, ci vuole più tempo per ottenere una risposta in una lingua diversa dall'inglese. Quindi ti consigliamo di ottenere una risposta in inglese e di tradurla nella tua lingua madre utilizzando DeepL o Google Translate.",
          },
          ja: {
            title: "タイトル",
            transcript: "書き起こし",
            summary: "要約",
            summaryPrompt: "以下を5つの要点で要約してください。",
            asideNote:
              "経験上、英語以外の言語で回答を得るには時間がかかります。そのため、英語で回答を得て、DeepLやGoogle翻訳を使用して母国語に翻訳することをお勧めします。",
          },
          ko: {
            title: "제목",
            transcript: "텍스트",
            summary: "요약",
            summaryPrompt: "다음을 5개의 핵심으로 요약하십시오.",
            asideNote:
              "경험상 영어가 아닌 언어로 답변을 받는 데 더 많은 시간이 걸립니다. 따라서 영어로 답변을 받고 DeepL 또는 Google 번역을 사용하여 모국어로 번역하는 것이 좋습니다.",
          },
          pt: {
            title: "Título",
            transcript: "Transcrição",
            summary: "Resumo",
            summaryPrompt: "Resuma o seguinte em 5 pontos.",
            asideNote:
              "De acordo com a nossa experiência, demora mais tempo para obter uma resposta em um idioma que não seja o inglês. Portanto, recomendamos obter uma resposta em inglês e traduzi-la para sua língua nativa usando o DeepL ou o Google Tradutor.",
          },
          ru: {
            title: "Заголовок",
            transcript: "Транскрипт",
            summary: "Резюме",
            summaryPrompt: "Суммируйте следующее в 5 пунктах.",
            asideNote:
              "Из нашего опыта следует, что получение ответа на языке, отличном от английского, занимает больше времени. Поэтому мы рекомендуем получать ответ на английском языке и переводить его на родной язык с помощью DeepL или Google Translate.",
          },
          tr: {
            title: "Başlık",
            transcript: "Transkript",
            summary: "Özet",
            summaryPrompt: "Aşağıdakileri 5 noktada özetleyin.",
            asideNote:
              "Deneyimimize göre, İngilizce olmayan bir dilde yanıt almak daha uzun sürer. Bu nedenle, yanıtı İngilizce almanızı ve DeepL veya Google Translate kullanarak anadilinize çevirmenizi öneririz.",
          },
          ar: {
            title: "العنوان",
            transcript: "النص",
            summary: "ملخص",
            summaryPrompt: "لخص ما يلي في 5 نقاط.",
            asideNote:
              "من خبرتنا، يستغرق الحصول على إجابة في لغة أخرى من الإنجليزية أكثر وقتًا. لذلك، نوصي بالحصول على إجابة باللغة الإنجليزية وترجمتها إلى لغتك الأم باستخدام DeepL أو Google Translate.",
          },
          hi: {
            title: "शीर्षक",
            transcript: "ट्रांसक्रिप्ट",
            summary: "सारांश",
            summaryPrompt: "निम्नलिखित को 5 बिंदुओं में सारांशित करें।",
            asideNote:
              "हमारे अनुभव से यह बताते हैं कि अंग्रेजी नहीं होने वाली भाषा में एक उत्तर प्राप्त करने में अधिक समय लगता है। इसलिए हम आपको अंग्रेजी में एक उत्तर प्राप्त करने की सलाह देते हैं और इसे अपनी मातृभाषा में DeepL या Google Translate का उपयोग करके अनुवाद करने की सलाह देते हैं।",
          },
          id: {
            title: "Judul",
            transcript: "Transkrip",
            summary: "Ringkasan",
            summaryPrompt: "Ringkasan berikut dalam 5 poin.",
            asideNote:
              "Menurut pengalaman kami, membutuhkan waktu lebih lama untuk mendapatkan jawaban dalam bahasa selain bahasa Inggris. Oleh karena itu, kami sarankan Anda mendapatkan jawaban dalam bahasa Inggris dan menerjemahkannya ke bahasa asli Anda menggunakan DeepL atau Google Translate.",
          },
          bn: {
            title: "শিরোনাম",
            transcript: "ট্রান্সক্রিপ্ট",
            summary: "সারাংশ",
            summaryPrompt: "পরবর্তীতে 5 টি পয়েন্টে সারাংশ করুন।",
            asideNote:
              "আমাদের অভিজ্ঞতার উপর ভিত্তি করে, ইংরেজি নয় বাংলা বা অন্য কোন ভাষায় উত্তর পাওয়ার জন্য আরও বেশি সময় লাগে। তাই আমরা আপনাকে ইংরেজি ভাষায় উত্তর পাওয়ার জন্য সুপারিশ করি এবং এটি আপনার মাতৃভাষায় ব্যবহার করুন ডিপল বা গুগল ট্রান্সলেট ব্যবহার করে।",
          },
          vi: {
            title: "Tiêu đề",
            transcript: "Phiên âm",
            summary: "Tóm tắt",
            summaryPrompt: "Tóm tắt những điều sau đây trong 5 điểm.",
            asideNote:
              "Theo kinh nghiệm của chúng tôi, việc nhận câu trả lời trong một ngôn ngữ khác tiếng Anh sẽ mất nhiều thời gian hơn. Do đó, chúng tôi khuyên bạn nhận câu trả lời bằng tiếng Anh và dịch nó sang ngôn ngữ mẹ đẻ của bạn bằng cách sử dụng DeepL hoặc Google Translate.",
          },
        },
        Et = 14e3;
      function Ct(e) {
        return e
          .sort((e, t) => e.index - t.index)
          .map((e) => e.text)
          .join(" ");
      }
      function kt(e, t) {
        let n = "";
        const i = Ct(e);
        if (Tt(i).length > Et) {
          const i = e.filter((e, t) => t % 2 == 0);
          n = kt(i, t);
        } else
          t.length !== e.length
            ? t.forEach((i, r) => {
                if (e.some((e) => e.text === i.text)) return;
                e.push(i);
                const o = Ct(e),
                  a = Tt(o).length;
                if (a < Et) {
                  const i = t[r + 1],
                    s = Tt(i.text).length;
                  if (a + s > Et) {
                    const t = (a + s - Et) / s,
                      r = i.text.substring(0, Math.floor(i.text.length * t));
                    e.push({
                      text: r,
                      index: i.index,
                    }),
                      (n = Ct(e));
                  } else n = o;
                }
              })
            : (n = i);
        const r = Ct(t);
        return "" == n ? r : n;
      }
      function Lt(e) {
        const t = Tt(e).length;
        if (t > Et) {
          const n = Et / t;
          return e.substring(0, e.length * n);
        }
        return e;
      }
      function Tt(e) {
        return decodeURIComponent(encodeURIComponent(escape(e))).replace(
          /%([0-9A-F]{2})/gi,
          function (e, t) {
            let n = parseInt(t, 16);
            return String.fromCharCode(n);
          }
        );
      }
      let Nt = {};
      async function At(e, t) {
        let n, i;
        if (
          (Z("extension_yt_transcript_chatgpt_summary", {
            videoId: e,
            actionVia: t,
          }),
          "hover" == t || "closed_widget" == t)
        ) {
          const r = await X(e);
          if (!r) return;
          const o = r[0].language;
          Q(e, T, o, "hover" == t ? "hover" : "summary"), (n = r[0].title);
          const a = K(await Y(r[0].link));
          i = Array.from(a).map((e, t) => ({
            text: xt(e.text).trim(),
            index: t,
          }));
        } else if ("opened_widget" == t) {
          const t = te();
          Q(e, T, t, "summary"), (n = document.title);
          const r = document.getElementsByClassName(
            "yt_ai_summary_transcript_text"
          );
          i = Array.from(r).map((e, t) => ({
            text: e.textContent.trim(),
            index: t,
          }));
        } else if ("iframe" == t) {
          const t = Nt[e]
              ? Nt[e]
              : await (async function (e, t) {
                  const n = `https://transcriptglasp-c6cndaf37q-uc.a.run.app/yt/${e}/unknown`,
                    i = await fetch(n);
                  return await i.json();
                })(e),
            r = K(t.transcript);
          (Nt[e] = t),
            (n = t.title),
            (i = Array.from(r).map((e, t) => ({
              text: xt(e.text).trim(),
              index: t,
            })));
        }
        const r = await (async function (e, t) {
          const n = await S(),
            i = (function (e, t) {
              return "chunks" === t
                ? Lt(kt(e, e))
                : "start_to_limit" === t
                ? Lt(Ct(e))
                : "entire_content" === t
                ? Ct(e)
                : Lt(kt(e, e));
            })(e, n.summaryStrategy),
            r = (function (e, t, n) {
              const i = n.language,
                r = Object.keys(A).find((e) => A[e] === i),
                o = "en" === i || "Default" === r ? "" : ` in ${r}.`;
              return `${n.customPrompt}${o}\n${
                t ? `${wt[i].title}: "${t.replace(/\n+/g, " ").trim()}"\n` : ""
              }${wt[i].transcript}: "${e}"\n`;
            })(i, t, n);
          return r;
        })(i, n);
        _t(r);
        const o = await (async function () {
          const e = await S(),
            t = M[e.chatGPTModel];
          return "" == t ? "ref=glasp" : `${t}&ref=glasp`;
        })();
        chrome.runtime.sendMessage({
          action: "setPrompt",
          prompt: r,
        }),
          window.open(`https://chat.openai.com/chat?${o}`, "_blank");
      }
      let Mt = !1;
      const Bt = [
        "https://www.youtube-nocookie.com",
        "https://www.youtube.com",
      ];
      function St() {
        setTimeout(() => {
          const e = document.getElementsByTagName("iframe");
          for (let t = 0; t < e.length; t++) {
            if ("" === e[t].src) continue;
            const n = new URL(e[t].src);
            if (Bt.includes(n.origin) && n.pathname.includes("/embed/")) {
              const i = n.pathname.split("/").pop();
              It(e[t], i);
            } else if (
              n.origin.includes("https://cdn.embedly.com") &&
              n.search.includes("src=")
            ) {
              const i = decodeURIComponent(n.search.split("?src=")[1]) ?? "";
              if ("" === i) continue;
              const r = new URL(i);
              if (Bt.includes(r.origin) && r.pathname.includes("/embed/")) {
                const n = r.pathname.split("/").pop();
                It(e[t], n);
              }
            }
          }
        }, 500);
      }
      function It(e, t) {
        if ("" === t) return;
        Array.from(
          document.getElementsByClassName("glasp_yt_summary_btn_on_iframe")
        ).forEach((e) => {
          e.getAttribute("data-video-id") === t && e.remove();
        });
        const n = document.createElement("button");
        n.setAttribute("class", "glasp_yt_summary_btn_on_iframe"),
          n.setAttribute("data-video-id", t),
          (n.innerHTML = ft(32, 32)),
          document.body.appendChild(n),
          $t(e, n),
          window.addEventListener("scroll", (t) => {
            $t(e, n);
          }),
          e.addEventListener("mouseover", (e) => {
            e.stopPropagation(), e.preventDefault(), (n.style.display = "flex");
          }),
          n.addEventListener("mouseover", (e) => {
            e.stopPropagation(), e.preventDefault(), (n.style.display = "flex");
          }),
          e.addEventListener("mouseleave", (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              document.activeElement?.classList.contains(
                "glasp_yt_summary_btn_on_iframe"
              ) ||
                Mt ||
                (n.style.display = "none");
          }),
          n.addEventListener("click", async (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              (Mt = !0),
              (n.disabled = !0),
              (n.innerHTML = yt(
                32,
                32,
                "display: block;width: 32px;margin: 32px auto;"
              )),
              await At(t, "iframe"),
              (Mt = !1),
              (n.disabled = !1),
              (n.innerHTML = ft(32, 32)),
              (n.style.display = "none");
          });
      }
      function $t(e, t) {
        const n = e.getBoundingClientRect(),
          i = n.width,
          r = n.top,
          o = n.left,
          a = document.body.getBoundingClientRect().top;
        (t.style.top = r - a + 70 + "px"), (t.style.left = o + i - 60 + "px");
      }
      function Ht(e) {
        const t = e && "" !== e ? e : window.location.search;
        if (!/\?([a-zA-Z0-9_]+)/i.exec(t)) return {};
        let n,
          i = /\+/g,
          r = /([^?&=]+)=?([^&]*)/g,
          o = function (e) {
            return decodeURIComponent(e.replace(i, " "));
          },
          a = /\?([a-zA-Z0-9_]+)/i.exec(t).index + 1,
          s = t.substring(a),
          l = {};
        for (; (n = r.exec(s)); ) l[o(n[1])] = o(n[2]);
        return l;
      }
      function Dt(e) {
        const t =
            e.theme === N
              ? (document.querySelector("body > ytd-app") &&
                  "rgb(255, 255, 255)" !==
                    window.getComputedStyle(
                      document.querySelector("body > ytd-app")
                    ).backgroundColor) ||
                (window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
                ? "dark"
                : "light"
              : e.theme,
          n = "markdown" == e.copyformat ? "Markdown" : "Plain Text";
        var i;
        document.querySelector("#yt_ai_summary_lang_select") &&
          (document.querySelector("#yt_ai_summary_lang_select").innerHTML = ""),
          document.querySelector("#yt_ai_summary_summary") &&
            (document.querySelector("#yt_ai_summary_summary").innerHTML = ""),
          Array.from(
            document.getElementsByClassName("yt_ai_summary_container")
          ).forEach((e) => {
            e.remove();
          }),
          Ht(window.location.href).v &&
            ((i = "#secondary.style-scope.ytd-watch-flexy"),
            new Promise((e) => {
              if (document.querySelector(i))
                return e(document.querySelector(i));
              const t = new MutationObserver((n) => {
                document.querySelector(i) &&
                  (e(document.querySelector(i)), t.disconnect());
              });
              t.observe(document.body, {
                childList: !0,
                subtree: !0,
              });
            })).then(() => {
              Array.from(
                document.getElementsByClassName("yt_ai_summary_container")
              ).forEach((e) => {
                e.remove();
              }),
                document
                  .querySelector("#secondary.style-scope.ytd-watch-flexy")
                  .insertAdjacentHTML(
                    "afterbegin",
                    ((e, t) =>
                      `\n    <div class="yt_ai_summary_container theme_${e}">\n        <div id="yt_ai_summary_header" class="yt_ai_summary_header">\n            <a id="glasp_yt_transcript_header_logo" href="https://glasp.co/youtube-summary" target="_blank" style="width: 24px;height: 24px;">\n                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M1.40123 27.3686C-0.44103 25.5284 -0.441033 22.5449 1.4012 20.7047L16.5971 5.52573L24.0098 12.9301L5.47818 31.4409L1.40123 27.3686Z" fill="#FF4E74"/>\n                    <path d="M35.1286 24.0367L16.5972 5.5258L20.6741 1.45341C22.5164 -0.386772 25.5033 -0.386775 27.3455 1.45341L42.5415 16.6323L35.1286 24.0367Z" fill="#FFF85E"/>\n                    <path d="M24.0099 35.143L42.5416 16.6323L46.6183 20.7046C48.4606 22.5448 48.4606 25.5284 46.6183 27.3686L31.4224 42.5476L24.0099 35.143Z" fill="#76FF54"/>\n                    <path d="M27.3454 46.6198C25.5032 48.4601 22.5163 48.4601 20.674 46.6198L5.47815 31.4409L12.8908 24.0366L31.4223 42.5476L27.3454 46.6198Z" fill="#5C94FF"/>\n                </svg>\n            </a>\n            <p class="yt_ai_summary_header_text">Transcript & Summary</p>\n            <div class="yt_ai_summary_header_actions">\n                <div id="yt_ai_summary_header_summary" class="yt_ai_summary_header_action_btn yt-summary-hover-el yt_ai_summary_icon icon_summary_hover_${e}" data-hover-label="View AI Summary\n(Open New Tab)">\n                    ${ft(
                        24,
                        24
                      )}\n                </div>\n                <div id="yt_ai_summary_header_track" class="yt_ai_summary_header_action_btn yt-summary-hover-el icon_hover_${e}" data-hover-label="Jump to Current Time">\n                    <svg style="filter: brightness(0.9);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="6.25" stroke="#828282" stroke-width="1.5"/>\n                        <rect x="3.19995" y="11.3999" width="5" height="1.2" rx="0.6" fill="#828282"/>\n                        <rect x="15.7" y="11.3999" width="5" height="1.2" rx="0.6" fill="#828282"/>\n                        <rect x="11.3999" y="8" width="5" height="1.2" rx="0.6" transform="rotate(-90 11.3999 8)" fill="#828282"/>\n                        <rect x="11.3999" y="21" width="5" height="1.2" rx="0.6" transform="rotate(-90 11.3999 21)" fill="#828282"/>\n                    </svg>\n                </div>\n                <div id="yt_ai_summary_header_copy" class="yt_ai_summary_header_action_btn yt-summary-hover-el icon_hover_${e}" data-hover-label="Copy Transcript\n(${t})">\n                    <svg style="filter: brightness(0.95);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M7 6.6V5C7 4.44772 7.44772 4 8 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17H16.2308" stroke="#828282" stroke-width="1.5"/>\n                        <rect x="4.75" y="6.75" width="11.5" height="13.5" rx="1.25" stroke="#828282" stroke-width="1.5"/>\n                    </svg>\n                </div>\n                <div id="yt_ai_summary_header_setting" class="yt_ai_summary_header_action_btn yt-summary-hover-el icon_hover_${e}" data-hover-label="User Settings">\n                    <svg style="filter: brightness(0.9);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M10.0834 4.5863L10.8202 4.72646L10.8202 4.72646L10.0834 4.5863ZM13.9162 4.5863L14.653 4.44613L14.653 4.44613L13.9162 4.5863ZM7.24473 5.9407L6.89115 6.60212L6.89115 6.60212L7.24473 5.9407ZM4.80072 8.91726L4.2235 9.39612L4.2235 9.39613L4.80072 8.91726ZM4.91172 9.05106L5.48895 8.57219L5.48895 8.57219L4.91172 9.05106ZM4.18516 12.1491L4.4954 12.8319L4.4954 12.8319L4.18516 12.1491ZM5.02392 15.9704L5.04832 16.72L5.04832 16.72L5.02392 15.9704ZM7.00308 18.4298L7.72976 18.6154L7.72976 18.6154L7.00308 18.4298ZM6.96871 18.5644L7.69539 18.7499L7.69539 18.7499L6.96871 18.5644ZM10.4269 20.1913L11.0332 20.6328L11.0332 20.6328L10.4269 20.1913ZM13.5727 20.1913L14.179 19.7498L14.179 19.7498L13.5727 20.1913ZM17.031 18.5644L16.3043 18.7499L16.3043 18.7499L17.031 18.5644ZM16.9966 18.4298L16.2699 18.6154L16.2699 18.6154L16.9966 18.4298ZM18.9758 15.9704L18.9514 16.72L18.9514 16.72L18.9758 15.9704ZM19.8145 12.1491L19.5043 12.8319L19.5043 12.8319L19.8145 12.1491ZM19.0879 9.05106L18.5107 8.57219L18.5107 8.5722L19.0879 9.05106ZM19.199 8.91726L19.7762 9.39613L19.7762 9.39613L19.199 8.91726ZM16.755 5.9407L16.4014 5.27927L16.4014 5.27927L16.755 5.9407ZM10.8202 4.72646C11.0679 3.42465 12.9318 3.42465 13.1795 4.72646L14.653 4.44613C14.096 1.51809 9.90368 1.51809 9.34665 4.44613L10.8202 4.72646ZM6.89115 6.60212C8.49654 7.46031 10.4794 6.51815 10.8202 4.72646L9.34665 4.44613C9.19557 5.24028 8.31426 5.662 7.59831 5.27927L6.89115 6.60212ZM5.37794 8.43839C4.54005 7.4284 5.70431 5.96767 6.89115 6.60212L7.59831 5.27927C4.98952 3.88469 2.31339 7.09369 4.2235 9.39612L5.37794 8.43839ZM5.48895 8.57219L5.37794 8.43839L4.2235 9.39613L4.3345 9.52993L5.48895 8.57219ZM4.4954 12.8319C6.13433 12.0873 6.65087 9.97277 5.48895 8.57219L4.3345 9.52993C4.85249 10.1543 4.63139 11.1226 3.87491 11.4663L4.4954 12.8319ZM4.99952 15.2208C4.32987 15.2426 3.90232 14.8175 3.78168 14.2636C3.66015 13.7056 3.87401 13.1143 4.4954 12.8319L3.87491 11.4663C2.51876 12.0825 2.06653 13.4371 2.31603 14.5828C2.56643 15.7325 3.54703 16.7689 5.04832 16.72L4.99952 15.2208ZM7.72976 18.6154C8.17903 16.8561 6.81001 15.1619 4.99952 15.2208L5.04832 16.72C5.86442 16.6935 6.47737 17.4573 6.2764 18.2442L7.72976 18.6154ZM7.69539 18.7499L7.72976 18.6154L6.2764 18.2442L6.24203 18.3788L7.69539 18.7499ZM9.82067 19.7498C9.04512 20.8147 7.36942 20.0264 7.69539 18.7499L6.24203 18.3788C5.50718 21.2563 9.28483 23.0336 11.0332 20.6328L9.82067 19.7498ZM14.179 19.7498C13.1023 18.2714 10.8973 18.2714 9.82066 19.7498L11.0332 20.6328C11.5108 19.9771 12.4889 19.9771 12.9665 20.6328L14.179 19.7498ZM16.3043 18.7499C16.6303 20.0264 14.9546 20.8147 14.179 19.7498L12.9665 20.6328C14.7148 23.0336 18.4925 21.2563 17.7576 18.3788L16.3043 18.7499ZM16.2699 18.6154L16.3043 18.7499L17.7576 18.3788L17.7233 18.2442L16.2699 18.6154ZM19.0002 15.2208C17.1897 15.1619 15.8206 16.8561 16.2699 18.6154L17.7233 18.2442C17.5223 17.4573 18.1353 16.6935 18.9514 16.72L19.0002 15.2208ZM19.5043 12.8319C20.1257 13.1143 20.3395 13.7056 20.218 14.2636C20.0974 14.8175 19.6698 15.2426 19.0002 15.2208L18.9514 16.72C20.4526 16.7689 21.4333 15.7325 21.6836 14.5828C21.9331 13.4371 21.4809 12.0825 20.1248 11.4663L19.5043 12.8319ZM18.5107 8.5722C17.3488 9.97277 17.8653 12.0873 19.5043 12.8319L20.1248 11.4663C19.3683 11.1226 19.1472 10.1543 19.6652 9.52993L18.5107 8.5722ZM18.6217 8.43839L18.5107 8.57219L19.6652 9.52993L19.7762 9.39613L18.6217 8.43839ZM17.1085 6.60212C18.2954 5.96768 19.4596 7.4284 18.6217 8.43839L19.7762 9.39613C21.6863 7.0937 19.0102 3.88469 16.4014 5.27927L17.1085 6.60212ZM13.1795 4.72646C13.5203 6.51815 15.5031 7.46031 17.1085 6.60212L16.4014 5.27927C15.6854 5.662 14.8041 5.24028 14.653 4.44613L13.1795 4.72646ZM14.3526 12.3299C14.3526 13.6907 13.2816 14.7615 12 14.7615V16.2615C14.1454 16.2615 15.8526 14.4833 15.8526 12.3299H14.3526ZM12 9.89819C13.2816 9.89819 14.3526 10.969 14.3526 12.3299H15.8526C15.8526 10.1764 14.1454 8.39819 12 8.39819V9.89819ZM9.6474 12.3299C9.6474 10.969 10.7184 9.89819 12 9.89819V8.39819C9.85457 8.39819 8.1474 10.1764 8.1474 12.3299H9.6474ZM12 14.7615C10.7184 14.7615 9.6474 13.6907 9.6474 12.3299H8.1474C8.1474 14.4833 9.85457 16.2615 12 16.2615V14.7615Z" fill="#828282"/>\n                    </svg>\n                </div>\n                <div style="filter: brightness(0.9);" id="yt_ai_summary_header_toggle" class="yt_ai_summary_header_action_btn icon_hover_${e}">\n                    <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M16.2447 9.9588C16.5376 9.6659 16.5376 9.19103 16.2447 8.89814C15.9518 8.60524 15.4769 8.60524 15.184 8.89814L16.2447 9.9588ZM6.81611 8.89814C6.52322 8.60524 6.04835 8.60524 5.75545 8.89814C5.46256 9.19103 5.46256 9.6659 5.75545 9.9588L6.81611 8.89814ZM11.7425 14.461L16.2447 9.9588L15.184 8.89814L10.6819 13.4003L11.7425 14.461ZM11.3183 13.4003L6.81611 8.89814L5.75545 9.9588L10.2576 14.461L11.3183 13.4003ZM10.6819 13.4003C10.8576 13.2246 11.1425 13.2246 11.3183 13.4003L10.2576 14.461C10.6677 14.871 11.3325 14.871 11.7425 14.461L10.6819 13.4003Z" fill="#8B8B8B"/>\n                    </svg>\n                </div>\n            </div>\n        </div>\n        <div id="yt_ai_summary_body" class="yt_ai_summary_body yt_ai_summary_body_${e}">\n            <div id="yt_ai_summary_lang_select" class="yt_ai_summary_lang_select"></div>\n            <div id="yt_ai_summary_text" class="yt_ai_summary_text"></div>\n        </div>\n    </div>`)(
                      t,
                      n
                    )
                  ),
                document
                  .querySelector("#glasp_yt_transcript_header_logo")
                  .addEventListener("click", (e) => {
                    e.stopPropagation(),
                      Z("extension_yt_transcript_header_logo_click", {
                        videoId: Ht(window.location.href).v,
                      });
                  }),
                Array.from(
                  document.getElementsByClassName("yt-summary-hover-el")
                ).forEach((e) => {
                  const n = e.getAttribute("data-hover-label");
                  n &&
                    (e.addEventListener("mouseenter", (i) => {
                      i.stopPropagation(),
                        i.preventDefault(),
                        Array.from(
                          document.getElementsByClassName(
                            "yt_ai_summary_header_hover_label"
                          )
                        ).forEach((e) => {
                          e.remove();
                        }),
                        e.insertAdjacentHTML(
                          "beforeend",
                          `<div class="yt_ai_summary_header_hover_label hover_${t}">${n.replace(
                            /\n+/g,
                            "<br />"
                          )}</div>`
                        );
                    }),
                    e.addEventListener("mouseleave", (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        Array.from(
                          document.getElementsByClassName(
                            "yt_ai_summary_header_hover_label"
                          )
                        ).forEach((e) => {
                          e.remove();
                        });
                    }));
                }),
                document
                  .querySelector("#yt_ai_summary_header_copy")
                  .addEventListener("click", async (e) => {
                    e.stopPropagation(), e.preventDefault();
                    const t = Ht(window.location.href).v,
                      n = await (async function (e) {
                        const t = (await S()).copyformat;
                        let n = "";
                        const i = `https://www.youtube.com/watch?v=${e}`;
                        return (
                          "markdown" === t
                            ? ((n += `# ${document.title}\n`),
                              (n += `${i}\n\n`),
                              (n += `![](${i})\n`),
                              (n += "## Transcript:\n"),
                              Array.from(
                                document.getElementById("yt_ai_summary_text")
                                  .children
                              ).forEach((e) => {
                                if (!e) return;
                                if (e.children.length < 2) return;
                                const t = e.querySelector(
                                    ".yt_ai_summary_transcript_text_timestamp"
                                  ).innerText,
                                  i = e
                                    .querySelector(
                                      ".yt_ai_summary_transcript_text_timestamp"
                                    )
                                    .getAttribute("data-timestamp-href"),
                                  r = e.querySelector(
                                    ".yt_ai_summary_transcript_text"
                                  ).innerText;
                                n += `- [${t}](https://www.youtube.com${i}) ${r}\n`;
                              }))
                            : "plaintext" === t &&
                              ((n += `${document.title}\n`),
                              (n += `${i}\n\n`),
                              (n += "Transcript:\n"),
                              Array.from(
                                document.getElementById("yt_ai_summary_text")
                                  .children
                              ).forEach((e) => {
                                if (!e) return;
                                if (e.children.length < 2) return;
                                const t = e.querySelector(
                                    ".yt_ai_summary_transcript_text_timestamp"
                                  ).innerText,
                                  i = e.querySelector(
                                    ".yt_ai_summary_transcript_text"
                                  ).innerText;
                                n += `(${t}) ${i}\n`;
                              })),
                          Z("extension_yt_transcript_copy_content", {
                            videoId: e,
                            copyformat: t,
                          }),
                          n
                        );
                      })(t);
                    _t(n);
                  }),
                document
                  .querySelector("#yt_ai_summary_header_setting")
                  .addEventListener("click", (e) => {
                    e.stopPropagation(),
                      e.preventDefault(),
                      Z("extension_yt_transcript_click_user_settings", {
                        videoId: Ht(window.location.href).v,
                      }),
                      chrome.runtime.sendMessage({
                        action: "openOptions",
                      });
                  }),
                document
                  .querySelector("#yt_ai_summary_header_summary")
                  .addEventListener("click", async (e) => {
                    e.stopPropagation(), e.preventDefault();
                    const t = Ht(window.location.href).v,
                      n = Ft() ? "opened_widget" : "closed_widget";
                    await At(t, n);
                  }),
                document
                  .querySelector("#yt_ai_summary_header_track")
                  .addEventListener("click", (e) => {
                    e.stopPropagation(),
                      e.preventDefault(),
                      (function () {
                        const e =
                          document.querySelector(
                            "#movie_player > div.html5-video-container > video"
                          ).currentTime ?? 0;
                        Array.from(
                          document.getElementsByClassName(
                            "yt_ai_summary_transcript_text_timestamp"
                          )
                        ).forEach((t, n, i) => {
                          const r = t.getAttribute("data-start-time"),
                            o =
                              n === i.length - 1
                                ? document.querySelector(
                                    "#movie_player > div.html5-video-container > video"
                                  ).duration ?? 0
                                : i[n + 1].getAttribute("data-start-time") ?? 0;
                          e >= r &&
                            e < o &&
                            (t.scrollIntoView({
                              behavior: "auto",
                              block: "start",
                            }),
                            document
                              .querySelector(
                                "#secondary > div.yt_ai_summary_container"
                              )
                              .scrollIntoView({
                                behavior: "auto",
                                block: "end",
                              }));
                        }),
                          Z("extension_yt_transcript_track_timestamp", {
                            videoId: Ht(window.location.href).v,
                          });
                      })();
                  }),
                document
                  .querySelector("#yt_ai_summary_header")
                  .addEventListener("click", async (e) => {
                    const n = Ht(window.location.href).v;
                    if (
                      (Z("extension_yt_transcript_btn_click", {
                        videoId: n,
                      }),
                      (document.querySelector(
                        "#yt_ai_summary_lang_select"
                      ).innerHTML = ""),
                      (document.querySelector("#yt_ai_summary_text").innerHTML =
                        ""),
                      (document.querySelector(
                        "#yt_ai_summary_body"
                      ).style.maxHeight = window.innerHeight - 160 + "px"),
                      (document.querySelector("#yt_ai_summary_text").innerHTML =
                        yt(
                          48,
                          48,
                          "display: block;width: 48px;margin: 40px auto;"
                        )),
                      document
                        .querySelector("#yt_ai_summary_body")
                        .classList.toggle("yt_ai_summary_body_show"),
                      document
                        .querySelector("#yt_ai_summary_header_copy")
                        .classList.toggle("yt_ai_summary_header_icon_show"),
                      document
                        .querySelector("#yt_ai_summary_header_track")
                        .classList.toggle("yt_ai_summary_header_icon_show"),
                      document
                        .querySelector("#yt_ai_summary_header_toggle")
                        .classList.toggle("yt_ai_summary_header_toggle_rotate"),
                      document
                        .querySelector("#yt_ai_summary_header_setting")
                        .classList.toggle("yt_ai_summary_header_icon_hide"),
                      !Ft())
                    )
                      return;
                    const i = await X(n);
                    if (!i)
                      return (
                        (document.querySelector(
                          "#yt_ai_summary_text"
                        ).innerHTML = `<div style="margin: 40px auto;text-align: center;">\n                <p>No Transcription Available... 😢</p>\n                <p>Try <a style="color: #008cff;" href="https://huggingface.co/spaces/kazuk/youtube-whisper-${Math.floor(
                          11 * Math.random()
                        )
                          .toString()
                          .padStart(
                            2,
                            "0"
                          )}" target="_blank">Youtube Whisper</a> to transcribe!</p>\n            </div>`),
                        void Z("extension_yt_transcript_not_available", {
                          videoId: n,
                        })
                      );
                    !(function (e, t) {
                      document.querySelector(
                        "#yt_ai_summary_lang_select"
                      ).innerHTML = Array.from(e)
                        .map(
                          (e, n) =>
                            `<button class="yt_ai_summary_lang btn_${t} ${
                              0 == n ? "yt_ai_summary_lange_selected" : ""
                            }" data-yt-transcript-lang="${e.language}">${
                              e.language
                            }</button>`
                        )
                        .join("");
                    })(i, t);
                    const r = i[0].language,
                      o = await J(i[0].link);
                    (document.querySelector("#yt_ai_summary_text").innerHTML =
                      o),
                      jt(),
                      (function (e, t) {
                        Array.from(
                          document.getElementsByClassName("yt_ai_summary_lang")
                        ).forEach((n) => {
                          n.addEventListener("click", async (n) => {
                            const i = n.target.getAttribute(
                                "data-yt-transcript-lang"
                              ),
                              r = document.querySelector(
                                `.yt_ai_summary_lang[data-yt-transcript-lang="${i}"]`
                              ),
                              o = e.find((e) => e.language === i).link,
                              a = await J(o);
                            (document.querySelector(
                              "#yt_ai_summary_text"
                            ).innerHTML = a),
                              jt(),
                              r.classList.add("yt_ai_summary_lange_selected"),
                              Array.from(
                                document.getElementsByClassName(
                                  "yt_ai_summary_lang"
                                )
                              ).forEach((e) => {
                                e !== r &&
                                  e.classList.remove(
                                    "yt_ai_summary_lange_selected"
                                  );
                              }),
                              V(t),
                              Z("extension_yt_select_lang_click", {
                                videoId: t,
                                lang: i,
                              }),
                              Q(t, T, i, "get");
                          });
                        });
                      })(i, n),
                      V(n),
                      Q(n, T, r, "init");
                  });
            });
      }
      function Ft() {
        return document
          .querySelector("#yt_ai_summary_body")
          .classList.contains("yt_ai_summary_body_show");
      }
      function jt() {
        Array.from(
          document.getElementsByClassName(
            "yt_ai_summary_transcript_text_timestamp"
          )
        ).forEach((e) => {
          e.addEventListener("click", (t) => {
            t.preventDefault(), t.stopPropagation();
            const n = e.getAttribute("data-start-time"),
              i = document.querySelector(
                "#movie_player > div.html5-video-container > video"
              );
            (i.currentTime = n),
              i.play(),
              Z("extension_yt_timestamp_click", {
                videoId: Ht(window.location.href).v,
                starttime: n,
              });
          });
        });
      }
      ((e) => {
        if ("scrollBehavior" in window.document.documentElement.style) return;
        const t = Ye(window.HTMLElement.prototype, "scrollIntoView", mt);
        var n, i, r;
        (n = "scrollIntoView"),
          (r = i =
            function () {
              const n = arguments,
                i = n[0];
              1 === n.length && Qe(i) ? gt(this, i, e) : t.apply(this, n);
            }),
          Object.defineProperty(r, "__isPolyfill", {
            value: !0,
          }),
          [
            HTMLElement.prototype,
            SVGElement.prototype,
            Element.prototype,
          ].forEach((e) => {
            Ye(e, n), (e[n] = i);
          });
      })(),
        ("glasp.co" !== window.location.host &&
          "localhost" !== window.location.hostname) ||
          window.addEventListener(
            "message",
            function (e) {
              if (e.source === window)
                if (
                  e.data.message &&
                  "check_glasp_extension_exist" === e.data.message
                ) {
                  const e = {
                    message: "chrom_extension_exists",
                  };
                  window.postMessage(e, "*");
                } else if (
                  e.data.message &&
                  "glasp_chrome_ext_signin" === e.data.message
                ) {
                  const t = e.data.token;
                  f() &&
                    chrome.runtime.sendMessage({
                      action: "chrome_ext_signin_token",
                      data: t,
                    });
                }
            },
            !1
          ),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
          if (e.action && "highlight_load" === e.action) {
            const t = e.data;
            if (
              (Array.from($(".highlighter--highlighted")).forEach((e) => {
                "GLASP" == e.nodeName && (e.outerHTML = e.innerHTML),
                  "IMG" == e.nodeName &&
                    (e.classList.remove(
                      "highlighter--highlighted",
                      "glasp--highlighted--img"
                    ),
                    e.removeAttribute("highlightid"));
              }),
              !t || void 0 === t)
            )
              return;
            (m.docId = t.length > 0 ? t[0].docId : ""),
              (function (e) {
                for (let t = 0; t < e.length; t++) ye(e[t], !0);
              })(t),
              n();
          } else
            ((e.action && "run_initialLoad" === e.action) ||
              (e.action && "load_again" === e.action)) &&
              ((function (e) {
                const t = i();
                if (t && null != t.url && null != t.url) {
                  const e = "on";
                  chrome.runtime.sendMessage({
                    action: "initial_load",
                    data: [t.url, t.fullUrl, e],
                  });
                }
              })(m.uid),
              n());
          return !0;
        }),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
          if (m.excludedURL) n();
          else {
            if (
              !(function () {
                const e = new URL(window.location.href).host;
                return (
                  Array.from(m.domainExcludeList).forEach((t, n, i) => {
                    if (t[1].domain == e) return !0;
                  }),
                  !1
                );
              })()
            ) {
              if (
                (e.action &&
                  "exclude_domain" === e.action &&
                  ((m.domainExcludeList = e.data), n()),
                e.action && "sidebar_toggle" === e.action)
              )
                qe(), n();
              else if (e.action && "sidebar_width" === e.action)
                (m.sidebarWidth = e.data), n();
              else if (e.action && "user_data" === e.action)
                (m.displayName = e.data[0]),
                  (m.photoURL = e.data[1]),
                  (m.uid = e.data[2]),
                  (m.username = e.data[3]),
                  (m.viewingOthersHLs = !1),
                  void 0 !== m.uid
                    ? (je(),
                      k(m.photoURL, m.displayName, m.username),
                      (m.selectedUsersUID = m.uid),
                      (m.userInfoReceived = !0))
                    : (null !== m.uid && void 0 !== m.uid) ||
                      (f() &&
                        chrome.runtime.sendMessage({
                          action: "run_initApp",
                        }),
                      je()),
                  n();
              else if (e.action && "other_user_data" === e.action) {
                (m.viewingOthersHLs = !0), (m.selectedUsersInfo = e.data[0]);
                const t = e.data[1];
                (m.selectedUsersUID = m.selectedUsersInfo.uid),
                  (m.selectedUsersDisplayName =
                    m.selectedUsersInfo.displayName),
                  (m.selectedUsersPhotoURL = m.selectedUsersInfo.photoURL),
                  (m.selectedUserUsername = m.selectedUsersInfo.username),
                  m.selectedUsersUID === m.uid && (m.viewingOthersHLs = !1),
                  Se(m.otherUsersTagList),
                  Ie(m.otherUsersPagenote),
                  k(m.selectedUsersPhotoURL, m.selectedUsersDisplayName),
                  Ue(
                    d(
                      m.sidebar_iframe_doc,
                      m.sidebar_copy_all,
                      m.highlightEmptyEl,
                      m.loadedHighlights
                    )
                  ),
                  t &&
                    (m.sidebarHighlighterToggleEl.on("click", !1),
                    (m.highlighterMode = "off"),
                    chrome.runtime.sendMessage({
                      action: "browser_icon_change",
                      data: m.highlighterMode,
                    })),
                  n();
              } else
                e.action && "receive_uid" === e.action
                  ? ((m.displayName = e.data[0]),
                    (m.photoURL = e.data[1]),
                    (m.uid = e.data[2]),
                    je(),
                    n())
                  : e.action && "ready_to_scan_highlights" === e.action
                  ? ((m.loadedHighlights = []),
                    (m.loadedHighlights = e.data),
                    n())
                  : e.action && "sorted_highlights_list" === e.action
                  ? ((m.loadedHighlights = []),
                    (m.loadedHighlights = e.data[0]),
                    (m.addedHighlightId = e.data[1]),
                    (m.actionType = e.data[2]),
                    Ue(
                      d(
                        m.sidebar_iframe_doc,
                        m.sidebar_copy_all,
                        m.highlightEmptyEl,
                        m.loadedHighlights
                      ),
                      !0
                    ),
                    p(),
                    n())
                  : e.action && "user_list_data" === e.action
                  ? ((m.userListData = e.data),
                    (m.userListDataLength = Object.keys(m.userListData).length),
                    L(m.userListData, m.userListDataLength),
                    n())
                  : e.action && "hide_showing_highlights" === e.action
                  ? (fe(), n())
                  : e.action && "highlighter_on" === e.action
                  ? (document.getElementById("glasp-sidebar-iframe") &&
                      ((m.sidebar_iframe = document.getElementById(
                        "glasp-sidebar-iframe"
                      )),
                      w(m.sidebar_iframe) &&
                        m.sidebar_iframe.contentWindow.document.getElementById(
                          "myonoffswitch"
                        ) &&
                        ((m.sidebarHighlighterToggleEl = $(
                          m.sidebar_iframe.contentWindow.document.getElementById(
                            "myonoffswitch"
                          )
                        )),
                        m.sidebarHighlighterToggleEl.is(":checked") ||
                          m.sidebarHighlighterToggleEl.prop("checked", !0),
                        (m.highlighterMode = "on"))),
                    n())
                  : e.action && "highlighter_off" === e.action
                  ? ((m.highlighterMode = "off"),
                    chrome.runtime.sendMessage({
                      action: "browser_icon_change",
                      data: m.highlighterMode,
                    }),
                    document.getElementById("glasp-sidebar-iframe") &&
                      ((m.sidebar_iframe = document.getElementById(
                        "glasp-sidebar-iframe"
                      )),
                      w(m.sidebar_iframe) &&
                        m.sidebar_iframe.contentWindow.document.getElementById(
                          "myonoffswitch"
                        ) &&
                        ((m.sidebarHighlighterToggleEl = $(
                          m.sidebar_iframe.contentWindow.document.getElementById(
                            "myonoffswitch"
                          )
                        )),
                        m.sidebarHighlighterToggleEl.prop("checked", !1),
                        p())),
                    n())
                  : e.action && "tag_data_on_load" === e.action
                  ? ((m.userTagList = e.data), n())
                  : e.action && "pagenote_on_load" === e.action
                  ? ((m.userPagenote = e.data), n())
                  : e.action && "tag_data_on_load_others" === e.action
                  ? ((m.otherUsersTagList = e.data), n())
                  : e.action && "pagenote_on_load_others" === e.action
                  ? ((m.otherUsersPagenote = e.data), n())
                  : e.action && "receive_user_tags" === e.action
                  ? ((m.userTags = e.data), n())
                  : e.action && "visibility_status" === e.action
                  ? ((m.visibilityStatus = e.data), n())
                  : e.action && "esacape_welcome_page" === e.action
                  ? (window.location.assign("https://glasp.co"), n())
                  : e.action && "browser_icon_clicked" === e.action
                  ? n({
                      action: "browser_icon_clicked_received",
                    })
                  : e.action &&
                    "get_img_query" === e.action &&
                    console.log("get_img_query received");
              return !0;
            }
            n();
          }
        }),
        m.excludedURL ||
          ($.get(
            chrome.runtime.getURL("./iframe/signup_login.html"),
            function (e) {
              m.sidebar_signup_login_HTML = e;
            }
          ),
          $.get(chrome.runtime.getURL("./iframe/sidebar.html"), function (e) {
            m.sidebarHTML = e;
          }),
          $.get(chrome.runtime.getURL("./iframe/tooltip.html"), function (e) {
            (m.tooltipHTML = e), (m.tooltipEl = $(e));
          }),
          (window.onload = async () => {
            if ("twitter.com" === window.location.host) {
              Pe(2500);
              let e = window.location.href;
              new MutationObserver(function (t) {
                t.forEach(function (t) {
                  e !== document.location.href &&
                    ((e = document.location.href),
                    "twitter.com" === window.location.host && Pe(0));
                });
              }).observe(document.body, {
                childList: !0,
              });
            }
            if ("www.youtube.com" === window.location.hostname) {
              const e = await S();
              let t = "",
                n = 0;
              "" !== window.location.search &&
                window.location.search.includes("v=") &&
                (Dt(e), bt());
              const i = document.querySelector("body");
              new MutationObserver((i) => {
                i.forEach(() => {
                  t !== document.location.href &&
                    ((t = document.location.href), Dt(e), bt()),
                    n !== vt().length && ((n = vt().length), bt());
                });
              }).observe(i, {
                childList: !0,
                subtree: !0,
              });
            }
            if (
              !["www.youtube.com", "chat.openai.com"].includes(
                window.location.hostname
              )
            ) {
              const e = document.querySelector("body");
              let t = "",
                n = 0;
              new MutationObserver((e) => {
                e.forEach(() => {
                  const e = document.getElementsByTagName("iframe").length;
                  t !== document.location.href &&
                    ((t = document.location.href),
                    Array.from(
                      document.getElementsByClassName(
                        "glasp_yt_summary_btn_on_iframe"
                      )
                    ).forEach((e) => {
                      e.remove();
                    }),
                    St()),
                    n !== e && ((n = e), St());
                });
              }).observe(e, {
                childList: !0,
                subtree: !0,
              });
            }
            "chat.openai.com" === window.location.hostname &&
              document.getElementsByTagName("textarea")[0] &&
              (document.getElementsByTagName("textarea")[0].focus(),
              window.location.search.includes("ref=glasp") &&
                chrome.runtime.sendMessage(
                  {
                    action: "getPrompt",
                  },
                  (e) => {
                    setTimeout(() => {
                      if ("" !== e.prompt) {
                        const t = document.getElementsByTagName("textarea")[0],
                          n =
                            document.getElementsByTagName("textarea")[0]
                              .nextElementSibling;
                        (t.style.height = t.scrollHeight + "px"),
                          (t.value = e.prompt),
                          t.focus(),
                          (n.disabled = !1),
                          n.click();
                      }
                    }, 1500),
                      chrome.runtime.lastError;
                  }
                )),
              Array.from([
                "read.amazon.",
                "lesen.amazon.",
                "leer.amazon.",
                "lire.amazon.",
                "leggi.amazon.",
                "ler.amazon.",
              ]).some((e) => 1 == window.location.host.includes(e)) &&
                "/notebook" === window.location.pathname &&
                ze(),
              !y() &&
                "file:" !== window.location.protocol &&
                "localhost" !== window.location.hostname &&
                window.location.href.toLowerCase().indexOf(".pdf") > 0 &&
                document.getElementsByTagName("embed").length > 0 &&
                ["application/pdf", "application/octet-stream"].includes(
                  document.getElementsByTagName("embed")[0].type
                ) &&
                (function () {
                  document.getElementsByClassName("glasp_pdf_open_button")
                    .length > 0 &&
                    Array.from(
                      document.getElementsByClassName("glasp_pdf_open_button")
                    ).forEach((e) => {
                      e.remove();
                    });
                  const e =
                    chrome.runtime.getURL("/pdf/web/viewer.html") +
                    `?file=${window.location.href}`;
                  document.body.insertAdjacentHTML(
                    "beforeend",
                    `\n    <a href="${e}" class="glasp_pdf_open_button" id="glasp_pdf_open_button" style="position: fixed;top: 10%;right: 2%;box-shadow: rgb(0 0 0 / 30%) 0px 2px 6px;background-color: #FFFFFF;border-radius: 50%;z-index: 10;padding: 10px;cursor: pointer;user-select: none;width: 28px;height: 28px;display: flex;justify-content: center;align-items: center;z-index: 2147483647 !important;">\n        <svg width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M3.73666 72.9828C-1.17604 68.0756 -1.17605 60.1196 3.73658 55.2124L44.259 14.7353L64.026 34.4803L14.6085 83.8424L3.73666 72.9828Z" fill="#FF4E74"/>\n            <path d="M93.6763 64.0979L44.2592 14.7355L55.131 3.8758C60.0437 -1.03135 68.0087 -1.03136 72.9213 3.8758L113.444 44.353L93.6763 64.0979Z" fill="#FFF85E"/>\n            <path d="M64.0262 93.7147L113.444 44.3527L124.315 55.2124C129.228 60.1196 129.228 68.0756 124.315 72.9828L83.7929 113.46L64.0262 93.7147Z" fill="#76FF54"/>\n            <path d="M72.9212 124.32C68.0086 129.227 60.0436 129.227 55.1309 124.32L14.6085 83.8424L34.3755 64.0977L83.7928 113.46L72.9212 124.32Z" fill="#5C94FF"/>\n        </svg>\n    </a>\n    <div class="glasp_pdf_btn_hover" id="glasp_pdf_btn_hover" style="visibility: hidden;font-size: 12px;width: max-content;font-family: Roboto, sans-serif;background-color: black;color: rgb(255, 255, 255);text-align: center;border-radius: 4px;padding: 8px 10px;position: absolute;top: 18%;right: 2%;box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;z-index: 2147483647 !important;">Turn on Glasp</div>\n    `
                  ),
                    document.getElementById("glasp_pdf_open_button") &&
                      (document
                        .getElementById("glasp_pdf_open_button")
                        .addEventListener("click", () => {
                          chrome.runtime.sendMessage({
                            action: "amplitude_log",
                            evtName: "glasp_pdf_open_button_click",
                          });
                        }),
                      document
                        .getElementById("glasp_pdf_open_button")
                        .addEventListener("mouseenter", () => {
                          document.getElementById(
                            "glasp_pdf_btn_hover"
                          ).style.visibility = "visible";
                        }),
                      document
                        .getElementById("glasp_pdf_open_button")
                        .addEventListener("mouseleave", () => {
                          document.getElementById(
                            "glasp_pdf_btn_hover"
                          ).style.visibility = "hidden";
                        }));
                })();
          }),
          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              if (
                (m.sidebarIsOpen &&
                  null !== document.getElementById("glasp-sidebar-iframe") &&
                  ((m.sidebar_iframe = document.getElementById(
                    "glasp-sidebar-iframe"
                  )),
                  (m.sidebarWidth = m.sidebar_iframe.style.width)),
                $(m.sidebar_iframe).attr(
                  "style",
                  'width: 0px !important; min-width: 0px !important; max-width: 300px; height: 100%; background: #FFFFFF; resize: horizontal; direction: rtl; margin: auto; position: fixed; top: 0px; right: 0px; left: auto; z-index: 9000000000000000000;background-image: url("https://storage.googleapis.com/glasp.co/src/img/loading_200.gif");background-repeat: no-repeat;background-position: center;background-size: 40px;'
                ),
                (m.tooltip_iframe.style.display = "none"),
                f() &&
                  chrome.runtime.sendMessage({
                    action: "sidebar_status_change",
                    data: [!1, m.sidebarWidth],
                  }),
                document.getElementsByClassName("glasp-ui-wrapper"))
              ) {
                let e = document.getElementsByClassName("glasp-ui-wrapper");
                for (; e[0]; ) e[0].remove();
              }
              m.visibilityChanged = !0;
            } else {
              if (
                ((null !== m.uid && void 0 !== m.uid) ||
                  (f() &&
                    chrome.runtime.sendMessage({
                      action: "run_initApp",
                    })),
                je(),
                k(m.photoURL, m.displayName, m.username),
                (m.sidebar_iframe.style.display = "block"),
                m.sidebarIsOpen &&
                  ((m.sidebar_iframe.style.width = m.sidebarWidth),
                  (m.sidebar_iframe.style.boxShadow =
                    "rgba(200, 200, 200, 0.5) 0px 0px 7px 2px")),
                "off" === m.highlighterMode)
              )
                return void (
                  document.getElementById("glasp-sidebar-iframe") &&
                  ((m.sidebar_iframe = document.getElementById(
                    "glasp-sidebar-iframe"
                  )),
                  w(m.sidebar_iframe) &&
                    m.sidebar_iframe.contentWindow.document.getElementById(
                      "myonoffswitch"
                    ) &&
                    ((m.sidebarHighlighterToggleEl = $(
                      m.sidebar_iframe.contentWindow.document.getElementById(
                        "myonoffswitch"
                      )
                    )),
                    m.sidebarHighlighterToggleEl.prop("checked", !1),
                    p(),
                    f() &&
                      chrome.runtime.sendMessage({
                        action: "browser_icon_change",
                        data: m.highlighterMode,
                      })))
                );
              (void 0 !== m.selectedUsersUID && m.selectedUsersUID !== m.uid) ||
                (f() &&
                  chrome.runtime.sendMessage({
                    action: "viewing_others_highlights",
                    data: !1,
                  }),
                (m.highlighterMode = "on"),
                (m.sidebarHighlighterToggleEl = $(
                  m.sidebar_iframe_doc.getElementById("myonoffswitch")
                )),
                m.sidebarHighlighterToggleEl.prop("checked", !0),
                f() &&
                  chrome.runtime.sendMessage({
                    action: "browser_icon_change",
                    data: m.highlighterMode,
                  }));
            }
          }),
          window.addEventListener("mousedown", function (e) {
            const t = window.getSelection().toString();
            (m.prevSelectedText = t),
              e.target.classList.contains("highlighter--highlighted") ||
                (t.length > 0 && (m.textSelected = !0), p());
          }),
          window.addEventListener("click", function (e) {
            3 === e.detail && (m.tripleClicked = !0);
          }),
          window.addEventListener("mouseup", function (e) {
            if (/medium.com\/p\//g.test(window.location.href)) return void p();
            if (m.highlightClicked)
              return (
                I(e.target),
                void (
                  f() &&
                  chrome.runtime.sendMessage({
                    action: "amplitude_log",
                    evtName: "tooltip_popup",
                  })
                )
              );
            const t = window.getSelection(),
              n = t.toString(),
              i = m.prevSelectedText === t.toString();
            if (m.textSelected && i) return p(), void (m.textSelected = !1);
            n.length < 2 ||
              (function (e) {
                if (/medium.com\/p\//g.test(window.location.href)) return !0;
                if (/typeshare.co\/editor\//g.test(window.location.href))
                  return !0;
                let t = 0,
                  n = !1;
                for (; e.parentElement; ) {
                  if ("BODY" === e.parentElement.tagName) return;
                  if (
                    (e.parentElement.getAttribute("contenteditable") &&
                      (n = !0),
                    n || 10 === t)
                  )
                    break;
                  t++, (e = e.parentElement);
                }
                return n;
              })(e.target) ||
              ((m.prevSelectedText = n),
              I(t.getRangeAt(0), e.clientX),
              f() &&
                chrome.runtime.sendMessage({
                  action: "amplitude_log",
                  evtName: "tooltip_popup",
                }));
          }),
          window.addEventListener("scroll", function (e) {
            if (
              !document.getElementById("glasp-tooltip-iframe") ||
              "none" !==
                document.getElementById("glasp-tooltip-iframe").style.display
            )
              if (/medium.com\/p\//g.test(window.location.href)) p();
              else if (m.highlightClicked)
                I(m.currentHighlightEl, e.clientX, m.currentHighlightColor);
              else if (m.textSelected) {
                const e = window.getSelection();
                e.toString().length > 0 && I(e.getRangeAt(0));
              } else if (
                "" !== window.getSelection().toString().replace(/\s+/g, "")
              ) {
                const e = window.getSelection();
                e.toString().length > 0 && I(e.getRangeAt(0));
              }
          })),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
          e.action &&
            "highlight_from_context" === e.action &&
            (window.getSelection().toString().length > 1 &&
              me(window.getSelection(), "#FFB6C6", !1),
            n());
        });
    })();
})();
