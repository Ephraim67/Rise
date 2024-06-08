(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3459],
  {
    73700: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return r(84648);
        },
      ]);
    },
    21304: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/about.1fc04ee1.svg",
        height: 558,
        width: 722,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    31330: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = r(85893),
        n = r(41664),
        l = r.n(n);
      r(67294);
      var i = r(89583),
        a = r(51649);
      t.default = () =>
        (0, s.jsx)("div", {
          className:
            "flex flex-col items-center justify-center gap-4 text-[#545454] w-full",
          children: (0, s.jsxs)("div", {
            className:
              "!bg-[#fff] w-[400px] flex flex-col items-center justify-center px-4 py-4 !gap-4 rounded-md relative",
            children: [
              (0, s.jsx)("h2", { children: "Customer Service Rise Marketing" }),
              (0, s.jsxs)("div", {
                className:
                  "flex items-center justify-center gap-4 text-[#545454] w-[200px]",
                children: [
                  (0, s.jsx)(l(), {
                    href: "https://api.whatsapp.com/send/?phone=447882566445&text&type=phone_number&app_absent=0",
                    target: "_blank",
                    className:
                      "bg-[#1e661ed0] px-4 rounded-md py-2 text-2xl text-[#fff] hover:!bg-[#226d22]",
                    children: (0, s.jsx)(a.ff9, {}),
                  }),
                  (0, s.jsx)(l(), {
                    href: "https://t.me/Riseplatform",
                    target: "_blank",
                    className:
                      "bg-[#1e3b66d0] px-4 rounded-md py-2 text-2xl text-[#fff] hover:!bg-[#2b4981]",
                    children: (0, s.jsx)(i.AGi, {}),
                  }),
                ],
              }),
              " ",
            ],
          }),
        });
    },
    80647: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = r(85893),
        n = r(33299),
        l = r(41664),
        i = r.n(l),
        a = r(39332),
        o = r(67294),
        c = r(89583),
        u = r(31330),
        d = r(5121),
        f = r(60155);
      t.default = () => {
        let [e, t] = (0, o.useState)(""),
          [r, l] = (0, o.useState)(""),
          [x, m] = (0, o.useState)(!1),
          [p, h] = (0, o.useState)(!1),
          [g, v] = (0, o.useState)(""),
          [j, b] = (0, o.useState)(!1),
          [y, w] = (0, o.useState)(!1),
          [N, _] = (0, o.useState)(""),
          [S, k] = (0, o.useState)(!1),
          [C, E] = (0, o.useState)(!1),
          [O, P] = (0, o.useState)(),
          Z = (0, a.useRouter)(),
          A = (0, n.useSession)(),
          [F, R] = (0, o.useState)([]);
        (0, o.useEffect)(() => {
          (null == A ? void 0 : A.status) === "authenticated" &&
            Z.replace("/page/home");
        }, [A, Z]);
        let z = (e) => /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(e),
          T = async (e) => {
            e.preventDefault();
            let r = e.target[0].value,
              s = e.target[1].value;
            if (!z(r)) {
              t("Email is invalid"),
                setTimeout(() => {
                  t("");
                }, 1e4);
              return;
            }
            if (!s || s.length < 8) {
              t("Password is invalid"),
                b(!0),
                setTimeout(() => {
                  b(!1), t("");
                }, 1e4);
              return;
            }
            let l = await (0, n.signIn)("credentials", {
              redirect: !1,
              email: r,
              password: s,
            });
            (null == l ? void 0 : l.error)
              ? (t("Invalid Email orr password"),
                b(!0),
                setTimeout(() => {
                  b(!1), t("");
                }, 1e4),
                (null == l ? void 0 : l.url) && Z.replace("/page/home"))
              : t("");
          },
          B = () => {
            h((e) => !e);
          };
        (0, o.useEffect)(() => {
          d.Z.get("/api/register").then((e) => {
            let t = e.data;
            R(t);
            let r = t.find((e) => e.email === N);
            r && (P(r.forgetPassword), l(r._id));
          });
        }, [A, N]),
          console.log(r);
        let D = async (e) => {
          e.preventDefault(),
            (
              await d.Z.put("/api/register", {
                id: r,
                password: g,
                confirmPass: g,
              })
            ).ok
              ? console.log("some error occured")
              : (l(""), v(""));
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("form", {
              className: "Register_Form",
              onSubmit: T,
              children: [
                (0, s.jsxs)("div", {
                  className: "reg_input",
                  children: [
                    (0, s.jsx)("input", {
                      type: "email",
                      placeholder: "email@xyz.com",
                      id: "email",
                      value: N,
                      onChange: (e) => _(e.target.value),
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "email",
                      children: (0, s.jsx)(c.$yZ, {}),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "reg_input",
                  children: [
                    (0, s.jsx)("input", {
                      type: x ? "text" : "password",
                      placeholder: "Password",
                      id: "pass",
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "pass",
                      onClick: () => {
                        m((e) => !e);
                      },
                      children: x
                        ? (0, s.jsx)(c.tgn, {})
                        : (0, s.jsx)(c.dSq, {}),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-4 justify-center w-full",
                  children: [
                    (0, s.jsx)(i(), {
                      href: "/",
                      className:
                        "text-center text-[18px] font-medium hover:underline text-[#fff] hover:text-[#ff4500]",
                      children: "Create A New Account?",
                    }),
                    O
                      ? (0, s.jsx)("div", {
                          className:
                            "cursor-pointer hover:underline hover:text-[#ff4500] text-[18px] font-medium text-right",
                          onClick: () => E(!0),
                          children: "Forgot Password?",
                        })
                      : (0, s.jsx)("div", {
                          className:
                            "cursor-pointer hover:underline hover:text-[#ff4500] text-[18px] font-medium text-right",
                          onClick: () => k(!0),
                          children: "Forgot Password?",
                        }),
                  ],
                }),
                S &&
                  (0, s.jsx)("div", {
                    className:
                      "bg-[#0000009a] fixed top-0 flex flex-col justify-center items-center w-full h-full",
                    onClick: () => k((e) => !e),
                    children: (0, s.jsx)(u.default, {}),
                  }),
                (0, s.jsx)("button", { children: "Login" }),
                e &&
                  (0, s.jsxs)("p", {
                    className:
                      "text-[#fff] font-bold text-[16px] mb-4 animate-pulse bg-[#ff4500] px-6 py-2 rounded-md fixed top-10 right-4",
                    children: [(0, s.jsx)("b", { children: "⚠" }), e],
                  }),
              ],
            }),
            O && C
              ? (0, s.jsx)("form", {
                  className:
                    "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000009a]",
                  onSubmit: D,
                  children: (0, s.jsxs)("div", {
                    className:
                      "bg-[#fff] px-10 py-6 rounded-md relative flex flex-col items-center justify-center",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("input", {
                            type: p ? "text" : "password",
                            placeholder: "Create a new Password",
                            className:
                              "px-4 py-2 rounded-l-md outline-none border-y-[2px] border-gray-200 border-l-[1px] text-[#000]",
                            value: g,
                            onChange: (e) => v(e.target.value),
                          }),
                          p
                            ? (0, s.jsx)(c.tgn, {
                                onClick: B,
                                className:
                                  "bg-[#000] px-2 py-2 rounded-r-md !text-[2.3rem] !text-[#fff] cursor-pointer h-[44px]",
                              })
                            : (0, s.jsx)(c.dSq, {
                                onClick: B,
                                className:
                                  "bg-[#000] px-2 py-1 rounded-r-md !text-[2.3rem] !text-[#fff] cursor-pointer h-[44px]",
                              }),
                        ],
                      }),
                      (0, s.jsx)("button", {
                        type: "submit",
                        className:
                          "bg-[#0000ff] text-white font-medium px-4 py-1 rounded-md my-2 flex items-center justify-center w-full",
                        children: "Submit",
                      }),
                      (0, s.jsx)("button", {
                        children: (0, s.jsx)(f.bjh, {
                          className:
                            "text-[#545454] hover:text-[#000] text-2xl absolute top-2 right-2",
                          onClick: () => E(!1),
                        }),
                      }),
                    ],
                  }),
                })
              : "",
          ],
        });
      };
    },
    84648: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = r(85893);
      r(67294);
      var n = r(80647),
        l = r(25675),
        i = r.n(l),
        a = r(21304),
        o = r(9008),
        c = r.n(o);
      t.default = () =>
        (0, s.jsxs)("div", {
          className:
            "min-h-screen max-h-full overflow-scroll overflow-x-hidden landingPage px-10 py-5 layout-gradient",
          children: [
            (0, s.jsx)(c(), {
              children: (0, s.jsx)("title", {
                children: "Login - Rise Marketing",
              }),
            }),
            (0, s.jsxs)("div", {
              className: "rounded-md bg-transparent text-[#fff] px-5 py-4",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "aboutBox flex items-center justify-around my-6 w-full",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "aboutDetailBox",
                      children: [
                        (0, s.jsx)("h1", {
                          className: "text-4xl font-bold text-justify",
                          children: "Who we are?",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-[16px] font-medium w-[360px] mt-3",
                          children:
                            "Rise marketing that launched a new revolution in selling products",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "imageBox w-[30%]",
                      children: (0, s.jsx)(i(), {
                        src: a.Z,
                        alt: "about-pic",
                        priority: !0,
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(n.default, {}),
              ],
            }),
          ],
        });
    },
    9008: function (e, t, r) {
      e.exports = r(14764);
    },
    88357: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return o;
        },
      });
      var s = r(67294),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = s.createContext && s.createContext(n),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, s = arguments.length; r < s; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        a = function (e, t) {
          var r = {};
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) &&
              0 > t.indexOf(s) &&
              (r[s] = e[s]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, s = Object.getOwnPropertySymbols(e);
              n < s.length;
              n++
            )
              0 > t.indexOf(s[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
                (r[s[n]] = e[s[n]]);
          return r;
        };
      function o(e) {
        return function (t) {
          return s.createElement(
            c,
            i({ attr: i({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return s.createElement(
                    t.tag,
                    i({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function c(e) {
        var t = function (t) {
          var r,
            n = e.attr,
            l = e.size,
            o = e.title,
            c = a(e, ["attr", "size", "title"]),
            u = l || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            s.createElement(
              "svg",
              i(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                n,
                c,
                {
                  className: r,
                  style: i(i({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && s.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== l
          ? s.createElement(l.Consumer, null, function (e) {
              return t(e);
            })
          : t(n);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [260, 5445, 9866, 5121, 5675, 1664, 9332, 9774, 2888, 179],
      function () {
        return e((e.s = 73700));
      }
    ),
      (_N_E = e.O());
  },
]);
