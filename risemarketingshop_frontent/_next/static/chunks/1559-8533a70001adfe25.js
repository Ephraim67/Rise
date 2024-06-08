(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1559],
  {
    28757: function (e, t, r) {
      "use strict";
      let a;
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var n = r(85893),
        s = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        };
      let l = new Uint8Array(16),
        o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      var i = function (e, t, r) {
        if (s.randomUUID && !t && !e) return s.randomUUID();
        let n =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !a &&
                !(a =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return a(l);
            }
          )();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            o[e[t + 0]] +
            o[e[t + 1]] +
            o[e[t + 2]] +
            o[e[t + 3]] +
            "-" +
            o[e[t + 4]] +
            o[e[t + 5]] +
            "-" +
            o[e[t + 6]] +
            o[e[t + 7]] +
            "-" +
            o[e[t + 8]] +
            o[e[t + 9]] +
            "-" +
            o[e[t + 10]] +
            o[e[t + 11]] +
            o[e[t + 12]] +
            o[e[t + 13]] +
            o[e[t + 14]] +
            o[e[t + 15]]
          );
        })(n);
      };
      let u = () => i().replace(/-/g, "").substr(0, 6).toUpperCase();
      var c = r(5121),
        d = r(33299),
        p = r(41664),
        h = r.n(p),
        m = r(11163),
        x = r(67294),
        f = r(89583),
        g = () => {
          let e = (0, m.useRouter)(),
            t = (0, d.useSession)();
          (0, x.useEffect)(() => {
            (null == t ? void 0 : t.status) === "authenticated" &&
              e.replace("/page/home");
          }, [t, e]);
          let r = u(),
            [a, s] = (0, x.useState)(""),
            [l, o] = (0, x.useState)(""),
            [i, p] = (0, x.useState)(""),
            [g, v] = (0, x.useState)(""),
            [j, y] = (0, x.useState)(""),
            [S, b] = (0, x.useState)(""),
            [w, N] = (0, x.useState)(!1),
            [C, _] = (0, x.useState)(!1),
            [U, O] = (0, x.useState)(!1),
            [k, E] = (0, x.useState)(!1),
            [F, I] = (0, x.useState)(""),
            [P, R] = (0, x.useState)(""),
            [D, q] = (0, x.useState)("".concat(r)),
            [z, V] = (0, x.useState)(""),
            [A, W] = (0, x.useState)(""),
            [X, Z] = (0, x.useState)("0.00"),
            [L, T] = (0, x.useState)("0.00"),
            [$, B] = (0, x.useState)("VIP 1"),
            [G, H] = (0, x.useState)(""),
            [J, K] = (0, x.useState)("0.00"),
            [M, Q] = (0, x.useState)("40"),
            [Y, ee] = (0, x.useState)("0.00"),
            [et, er] = (0, x.useState)(0),
            [ea, en] = (0, x.useState)("");
          async function es(t) {
            t.preventDefault(),
              (
                await c.Z.post("/api/register", {
                  fullname: a,
                  username: l,
                  email: i,
                  phone: g,
                  withPassword: j,
                  password: S,
                  confirmPass: F,
                  inviteCode: P,
                  userCode: D,
                  walletAddress: z,
                  walletNetwork: A,
                  balance: X,
                  profit: L,
                  level: $,
                  image: G,
                  withdrawAmount: J,
                  submitionLimit: M,
                  forgetPassword: k,
                  negativeBalance: Y,
                  dailyLimit: et,
                  lastUpdated: ea,
                })
              ).ok
                ? alert("Form submission failed.")
                : (s(""),
                  o(""),
                  p(""),
                  v(""),
                  y(""),
                  b(""),
                  I(""),
                  R(""),
                  Z(""),
                  B(""),
                  H(""),
                  e.push("/login"));
          }
          return (0, n.jsxs)("form", {
            className: "Register_Form",
            onSubmit: es,
            children: [
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: "text",
                    placeholder: "Full Name",
                    id: "name",
                    value: a,
                    onChange: (e) => s(e.target.value),
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: "name",
                    children: (0, n.jsx)(f.Xws, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: "text",
                    placeholder: "Username",
                    id: "uname",
                    value: l,
                    onChange: (e) => o(e.target.value),
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: "uname",
                    children: (0, n.jsx)(f.$yZ, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: "email",
                    placeholder: "Email",
                    id: "email",
                    value: i,
                    onChange: (e) => p(e.target.value),
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: "email",
                    children: (0, n.jsx)(f.SRX, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: "tel",
                    placeholder: "Phone Number",
                    id: "phone",
                    value: g,
                    onChange: (e) => v(e.target.value),
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: "phone",
                    children: (0, n.jsx)(f.I7T, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: U ? "text" : "password",
                    id: "wpass",
                    placeholder: "Withdraw Password",
                    value: j,
                    onChange: (e) => {
                      y(e.target.value);
                    },
                  }),
                  (0, n.jsx)("label", {
                    onClick: () => {
                      O((e) => !e);
                    },
                    htmlFor: "wpass",
                    children: U ? (0, n.jsx)(f.tgn, {}) : (0, n.jsx)(f.dSq, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: w ? "text" : "password",
                    id: "pass",
                    placeholder: "Password",
                    value: S,
                    onChange: (e) => {
                      b(e.target.value);
                    },
                  }),
                  (0, n.jsx)("label", {
                    onClick: () => {
                      N((e) => !e);
                    },
                    htmlFor: "pass",
                    children: w ? (0, n.jsx)(f.tgn, {}) : (0, n.jsx)(f.dSq, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: C ? "text" : "password",
                    id: "cpass",
                    placeholder: "Confirm Password",
                    value: F,
                    onChange: (e) => {
                      I(e.target.value);
                    },
                  }),
                  (0, n.jsx)("label", {
                    onClick: () => {
                      _((e) => !e);
                    },
                    htmlFor: "cpass",
                    children: C ? (0, n.jsx)(f.tgn, {}) : (0, n.jsx)(f.dSq, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "reg_input",
                children: [
                  (0, n.jsx)("input", {
                    type: "text",
                    placeholder: "Invite Code",
                    id: "icode",
                    value: P,
                    onChange: (e) => R(e.target.value),
                    required: !0,
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: "icode",
                    children: (0, n.jsx)(f.wN, {}),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                children: (0, n.jsxs)("h3", {
                  className:
                    "flex flex-wrap items-center justify-center gap-2 py-4",
                  children: [
                    "Already have an account?",
                    " ",
                    (0, n.jsx)(h(), {
                      href: "/login",
                      className: "text-lg font-bold text-[#ff4500]",
                      children: "Login",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("button", { children: "Register" }),
            ],
          });
        };
    },
    11163: function (e, t, r) {
      e.exports = r(12937);
    },
    88357: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return i;
        },
      });
      var a = r(67294),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = a.createContext && a.createContext(n),
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        o = function (e, t) {
          var r = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (r[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, a = Object.getOwnPropertySymbols(e);
              n < a.length;
              n++
            )
              0 > t.indexOf(a[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
                (r[a[n]] = e[a[n]]);
          return r;
        };
      function i(e) {
        return function (t) {
          return a.createElement(
            u,
            l({ attr: l({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return a.createElement(
                    t.tag,
                    l({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function u(e) {
        var t = function (t) {
          var r,
            n = e.attr,
            s = e.size,
            i = e.title,
            u = o(e, ["attr", "size", "title"]),
            c = s || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            a.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                n,
                u,
                {
                  className: r,
                  style: l(l({ color: e.color || t.color }, t.style), e.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && a.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== s
          ? a.createElement(s.Consumer, null, function (e) {
              return t(e);
            })
          : t(n);
      }
    },
  },
]);
