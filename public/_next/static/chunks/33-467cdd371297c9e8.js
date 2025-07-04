(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [33],
  {
    5180: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var r,
        A,
        l = a(2115);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let i = (e) =>
        l.createElement(
          "svg",
          s(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 56 56",
            },
            e
          ),
          r ||
            (r = l.createElement("rect", {
              width: 55,
              height: 55,
              x: 0.5,
              y: 0.5,
              stroke: "currentColor",
              rx: 27.5,
            })),
          A ||
            (A = l.createElement("path", {
              stroke: "currentColor",
              d: "m18 18 21 21M18 39l21-21",
            }))
        );
    },
    1719: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var r,
        A = a(2115);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let s = (e) =>
        A.createElement(
          "svg",
          l(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 18 18",
            },
            e
          ),
          r ||
            (r = A.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 1.364,
              d: "M3.546 3.545 9.26 9.26l5.195 5.194M3.546 14.454 9.26 8.74l5.195-5.195",
            }))
        );
    },
    3033: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 7034)),
        Promise.resolve().then(a.bind(a, 9041)),
        Promise.resolve().then(a.bind(a, 6481)),
        Promise.resolve().then(a.bind(a, 272)),
        Promise.resolve().then(a.bind(a, 4614)),
        Promise.resolve().then(a.bind(a, 9341)),
        Promise.resolve().then(a.bind(a, 9265)),
        Promise.resolve().then(a.bind(a, 4559)),
        Promise.resolve().then(a.bind(a, 4352)),
        Promise.resolve().then(a.bind(a, 3784)),
        Promise.resolve().then(a.bind(a, 2681)),
        Promise.resolve().then(a.bind(a, 3779)),
        Promise.resolve().then(a.bind(a, 2663)),
        Promise.resolve().then(a.bind(a, 2038)),
        Promise.resolve().then(a.bind(a, 5781)),
        Promise.resolve().then(a.bind(a, 3100)),
        Promise.resolve().then(a.bind(a, 6639)),
        Promise.resolve().then(a.bind(a, 6671)),
        Promise.resolve().then(a.bind(a, 5263)),
        Promise.resolve().then(a.bind(a, 7394)),
        Promise.resolve().then(a.bind(a, 6310)),
        Promise.resolve().then(a.bind(a, 1869));
    },
    5565: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => A.a });
      var r = a(4146),
        A = a.n(r);
    },
    4146: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return d;
          },
          getImageProps: function () {
            return i;
          },
        });
      let r = a(306),
        A = a(666),
        l = a(7970),
        s = r._(a(5514));
      function i(e) {
        let { props: t } = (0, A.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let d = l.Image;
    },
    435: (e, t, a) => {
      "use strict";
      a.d(t, { LayoutContextProvider: () => s, M: () => l });
      var r = a(5155),
        A = a(2115);
      let l = (0, A.createContext)({}),
        s = (e) => {
          let { children: t } = e,
            [a, s] = (0, A.useState)(!1),
            [i, d] = (0, A.useState)(!1),
            [n, o] = (0, A.useState)(!1),
            [c, h] = (0, A.useState)(!1),
            [u, g] = (0, A.useState)(!1);
          return (0, r.jsx)(l.Provider, {
            value: {
              isDrawerOpen: a,
              setDrawerOpen: s,
              isRegisterOpen: i,
              setRegisterOpen: d,
              isOctoClickVideoOpen: n,
              setOctoClickVideoOpen: o,
              isOctoClickPopupOpen: c,
              setOctoClickPopupOpen: h,
              isIndevPopupOpen: u,
              setIndevPopupOpen: g,
            },
            children: t,
          });
        };
    },
    1869: (e, t, a) => {
      "use strict";
      a.d(t, { SetLangAttr: () => l });
      var r = a(5155),
        A = a(2115);
      let l = (e) => {
        let { lang: t } = e;
        return (
          (0, A.useEffect)(() => {
            document.documentElement.setAttribute("lang", t);
          }, [t]),
          (0, r.jsx)(r.Fragment, {})
        );
      };
    },
    6639: (e, t, a) => {
      "use strict";
      a.d(t, { IndevPopup: () => o });
      var r = a(5155),
        A = a(435),
        l = a(1719),
        s = a(3463),
        i = a(2115),
        d = a(1868),
        n = a.n(d);
      let o = (e) => {
        let { loc: t } = e,
          { isIndevPopupOpen: a, setIndevPopupOpen: d } = (0, i.useContext)(
            A.M
          ),
          o = (0, i.useCallback)(() => {
            d(!1);
          }, [d]);
        return (0, r.jsxs)("div", {
          className: (0, s.A)(n().popup, a && n().is_open),
          children: [
            (0, r.jsx)("div", {
              className: n().body,
              children: (0, r.jsx)("div", {
                className: n().title,
                children: t.indevpopup.title,
              }),
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: n().close,
              onClick: o,
              children: (0, r.jsx)(l.A, {}),
            }),
          ],
        });
      };
    },
    7711: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => h });
      var r = a(5155),
        A = a(435),
        l = a(441),
        s = a(3463),
        i = a(3126),
        d = a(6046),
        n = a(2115),
        o = a(8614),
        c = a.n(o);
      let h = (e) => {
        let { className: t, activeLang: a } = e,
          { setDrawerOpen: o } = (0, n.useContext)(A.M),
          h = (0, n.useCallback)(() => {
            o(!1), (0, l.L)(!1);
          }, [o]),
          u = (0, d.usePathname)().replace(/^\/[a-z]{2}(\/|$)/i, "/"),
          g = (e) =>
            ("/" + (e ? `${e}/` : "") + u.replace(/(^\/)|(\/$)/gi, "")).replace(
              /\/$/,
              ""
            ) + "/";
        return true
      };
    },
    6671: (e, t, a) => {
      "use strict";
      a.d(t, { RegisterModal: () => c });
      var r = a(5155),
        A = a(3463),
        l = a(5180),
        s = a(2115),
        i = a(435),
        d = a(441),
        n = a(8662),
        o = a.n(n);
      let c = (e) => {
        let { loc: t } = e,
          { isRegisterOpen: a, setRegisterOpen: n } = (0, s.useContext)(i.M);
        return (
          (0, s.useEffect)(() => {
            (0, d.L)(a);
          }, [a]),
          (0, r.jsx)("div", {
            className: (0, A.A)(o().backdrop, a ? o().in : o().out),
            children: (0, r.jsxs)("div", {
              className: o().content,
              children: [
                (0, r.jsx)("div", {
                  className: o().cards,
                  children: t.register.items.map((e, t) =>
                    (0, r.jsxs)(
                      "a",
                      {
                        rel: "noopener",
                        target: "_blank",
                        className: o().card,
                        href: e.href,
                        children: [
                          (0, r.jsx)("div", { className: o().cardBorder }),
                          (0, r.jsx)("div", { className: o().cardImage1 }),
                          (0, r.jsx)("div", { className: o().cardImage2 }),
                          (0, r.jsx)("div", { className: o().cardImage3 }),
                          (0, r.jsxs)("div", {
                            className: o().cardContent,
                            children: [
                              (0, r.jsx)("div", {
                                className: o().cardLabel,
                                children: e.label,
                              }),
                              (0, r.jsxs)("div", {
                                className: o().cardButton,
                                children: [
                                  (0, r.jsx)("div", {
                                    className: o().cardButtonBg,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: o().cardButtonContent,
                                    children: e.buttonText,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, r.jsx)("button", {
                  className: o().close,
                  onClick: () => n(!1),
                  children: (0, r.jsx)(l.A, {}),
                }),
              ],
            }),
          })
        );
      };
    },
    5263: (e, t, a) => {
      "use strict";
      a.d(t, { Drawer: () => v });
      var r = a(5155),
        A = a(435),
        l = a(441),
        s = a(4564),
        i = a(6666),
        d = a(5535),
        n = a(158),
        o = a(287),
        c = a(3198),
        h = a(7711),
        u = a(8448),
        g = a(3463),
        _ = a(3126),
        b = a(5565),
        m = a(2115),
        w = a(8644),
        f = a.n(w);
      let v = (e) => {
        let { loc: t } = e,
          {
            isDrawerOpen: a,
            setRegisterOpen: w,
            setIndevPopupOpen: v,
          } = (0, m.useContext)(A.M),
          p = (0, m.useCallback)(
            (e, t) => {
              t.indev ? (e.preventDefault(), v(!0)) : v(!1);
            },
            [t, v]
          );
        return (
          (0, m.useEffect)(() => {
            (0, l.L)(a);
          }, [a]),
          (0, r.jsxs)("div", {
            className: (0, g.A)(f().drawer, a && f().drawer_isOpen),
            children: [
              (0, r.jsxs)("div", {
                className: f().drawerIllustrations,
                children: [
                  (0, r.jsx)(b.default, {
                    className: f().drawerLines1,
                    src: o.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerLines2,
                    src: c.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerGradient,
                    src: n.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard1,
                    src: s.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard2,
                    src: i.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard3,
                    src: d.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard4,
                    src: d.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard5,
                    src: d.default,
                    alt: "",
                  }),
                  (0, r.jsx)(b.default, {
                    className: f().drawerCard6,
                    src: d.default,
                    alt: "",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: f().drawerInner,
                children: [
                  (0, r.jsx)("div", {
                    className: f().drawerNav,
                    children: t.drawer.nav.map((e, t) =>
                      e.indev
                        ? (0, r.jsx)(
                            "a",
                            {
                              href: "#",
                              className: (0, g.A)(
                                f().drawerNavItem,
                                "hover-glow-text"
                              ),
                              onClick: (t) => p(t, e),
                              children: (0, r.jsx)("span", {
                                children: e.label,
                              }),
                            },
                            t
                          )
                        : (0, r.jsx)(
                            _.N,
                            {
                              href: e.href,
                              className: (0, g.A)(
                                f().drawerNavItem,
                                "hover-glow-text"
                              ),
                              onClick: (t) => p(t, e),
                              children: (0, r.jsx)("span", {
                                children: e.label,
                              }),
                            },
                            t
                          )
                    ),
                  }),
                  (0, r.jsx)(h.D, {
                    className: f().drawerLang,
                    activeLang: t.lang,
                  }),
                  (0, r.jsxs)("div", {
                    className: f().drawerAuthButtons,
                    children: [
                      (0, r.jsx)(u.$, {
                        variant: "filled",
                        className: f().drawerAuthButton,
                        onClick: () => w(!0),
                        children: t.common.register.label,
                      }),
                      (0, r.jsx)("a", {
                        href: t.common.login.link,
                        children: (0, r.jsx)(u.$, {
                          variant: "outline",
                          className: f().drawerAuthButton,
                          children: t.common.login.label,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    7394: (e, t, a) => {
      "use strict";
      a.d(t, { Footer: () => Q });
      var r,
        A,
        l = a(5155),
        s = a(2115);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let d = (e) =>
          s.createElement(
            "svg",
            i(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "none",
                viewBox: "0 0 23 22",
              },
              e
            ),
            r ||
              (r = s.createElement("path", {
                fill: "#219653",
                d: "M.494 0h22v22h-22z",
              })),
            A ||
              (A = s.createElement("path", {
                fill: "#fff",
                d: "m11.495 15.044 3.346-.896 1.398 4.552zm7.7-5.884h-5.89l-1.81-5.86-1.81 5.86h-5.89l4.767 3.632-1.81 5.86 4.766-3.633 2.933-2.227z",
              }))
          ),
        n = {
          src: "/_next/static/media/trustpilot.1c3d9a67.png",
          height: 22,
          width: 91,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX5//z9/v7///8L04sC1Yr///////+byXupAAAAB3RSTlMUTR9Ja140MJH8fQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGFmYmBgYGJgYGFmY2RkZWUEAAE2ACbj741MAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        };
      var o = a(5565),
        c = a(2093),
        h = a.n(c);
      let u = () =>
          (0, l.jsxs)("a", {
            className: h().trustPilot,
            href: "https://www.trustpilot.com/review/OctoCPA.com",
            target: "_blank",
            rel: "noopener noreferer",
            children: [
              (0, l.jsx)("div", {
                className: h().label,
                children: "Excellent",
              }),
              (0, l.jsxs)("div", {
                className: h().stars,
                children: [
                  (0, l.jsx)(d, {}),
                  (0, l.jsx)(d, {}),
                  (0, l.jsx)(d, {}),
                  (0, l.jsx)(d, {}),
                  (0, l.jsx)(d, {}),
                ],
              }),
              (0, l.jsxs)("div", {
                className: h().rating,
                children: [(0, l.jsx)("strong", { children: "4.2" }), " of 5"],
              }),
              (0, l.jsx)(o.default, {
                src: n,
                alt: "",
                loading: "lazy",
                className: h().logo,
              }),
            ],
          }),
        g = {
          src: "/_next/static/media/fb.cfa6802c.svg",
          height: 119,
          width: 119,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/ig.d7a6098c.svg",
          height: 119,
          width: 119,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/li.0ebcd503.svg",
          height: 119,
          width: 119,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/_next/static/media/tg.725f5631.svg",
          height: 119,
          width: 119,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/yt.b5dd1fc3.svg",
          height: 119,
          width: 119,
          blurWidth: 0,
          blurHeight: 0,
        };
      var f = a(954);
      let v = {
        src: "/_next/static/media/logoTight.877a8c15.svg",
        height: 73,
        width: 291,
        blurWidth: 0,
        blurHeight: 0,
      };
      var p = a(3463),
        x = a(3126),
        C = a(435),
        j = a(2662),
        B = a.n(j),
        k = a(6046);
      let Q = (e) => {
        let { loc: t } = e,
          { setIndevPopupOpen: a } = (0, s.useContext)(C.M),
          r = (0, s.useCallback)(
            (e, t) => {
              t.indev ? (e.preventDefault(), a(!0)) : a(!1);
            },
            [t, a]
          ),
          A = (0, k.usePathname)(),
          i = A && (A.startsWith("/about") || A.startsWith("/ru/about"));
        return (0, l.jsx)("footer", {
          className: (0, p.A)(B().footer, "page_footer"),
          children: (0, l.jsxs)("div", {
            className: B().inner,
            children: [
              (0, l.jsxs)("div", {
                className: B().content,
                children: [
                  (0, l.jsxs)("div", {
                    className: B().left,
                    children: [
                      (0, l.jsxs)(x.N, {
                        href: t.hrefs.index,
                        className: B().logoLink,
                        children: [
                          (0, l.jsx)("a", {
                            className: "logoText",
                            target: "_blank",
                            rel: "noopener",
                            href: "/",
                            children: "TrafficTrend"
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: B().info,
                        children: t.footer.info,
                      }),
                      (0, l.jsxs)("div", {
                        className: B().address,
                        children: [
                          "Adress : Boumpoulinas 1, 3rd floor,",
                          (0, l.jsx)("br", {}),
                          "Flat | Office 31, 1060, Nicosia, Cyprus",
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, p.A)(B().legal, "hide-phone"),
                        children: [
                          (0, l.jsx)("a", {
                            className: "hover-glow-text",
                            target: "_blank",
                            rel: "noopener",
                            href: "/policy",
                            children: t.footer.privacyPolicy,
                          }),
                          (0, l.jsx)("br", {}),
                          (0, l.jsx)("a", {
                            className: "hover-glow-text",
                            target: "_blank",
                            rel: "noopener",
                            href: "/conditions",
                            children: t.footer.termsAndConditions,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: B().nav,
                    children: t.footer.nav.map((e, t) =>
                      (0, l.jsx)(
                        "div",
                        {
                          className: B().navCol,
                          children: e.map((e, t) =>
                            e.indev
                              ? (0, l.jsx)(
                                  "a",
                                  {
                                    href: "#",
                                    className: (0, p.A)(
                                      B().navItem,
                                      "hover-glow-text"
                                    ),
                                    onClick: (t) => r(t, e),
                                    children: (0, l.jsx)("span", {
                                      children: e.label,
                                    }),
                                  },
                                  t
                                )
                              : (0, l.jsx)(
                                  x.N,
                                  {
                                    href: e.href,
                                    className: (0, p.A)(
                                      B().navItem,
                                      "hover-glow-text"
                                    ),
                                    onClick: (t) => r(t, e),
                                    children: (0, l.jsx)("span", {
                                      children: e.label,
                                    }),
                                  },
                                  t
                                )
                          ),
                        },
                        t
                      )
                    ),
                  }),
                  (0, l.jsxs)("div", {
                    className: (0, p.A)(B().legal, "hide-phone-up"),
                    children: [
                      (0, l.jsx)("a", {
                        className: "hover-glow-text",
                        target: "_blank",
                        rel: "noopener",
                        href: "/policy",
                        children: t.footer.privacyPolicy,
                      }),
                      (0, l.jsx)("br", {}),
                      (0, l.jsx)("a", {
                        className: "hover-glow-text",
                        target: "_blank",
                        rel: "noopener",
                        href: "/conditions",
                        children: t.footer.termsAndConditions,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: B().right,
                    children: [
                      (0, l.jsx)("div", {
                        className: B().email,
                        children: (0, l.jsx)("a", {
                          href: "mail.to:support@TrafficTrend.com",
                          children: "support@TrafficTrend.com",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: B().socials,
                        children: [
                          (0, l.jsx)("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: t.socials.telegram,
                            children: (0, l.jsx)(o.default, {
                              src: m,
                              alt: "",
                              loading: "lazy",
                            }),
                          }),
                          
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    6310: (e, t, a) => {
      "use strict";
      a.d(t, { Header: () => f });
      var r = a(5155),
        A = a(435);
      let l = {
          src: "/_next/static/media/header.8e4fa92c.webp",
          height: 140,
          width: 2472,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAACAUEBAYICgwAVlA4IB4AAACQAQCdASoIAAEAAkA4JaQAAudFrAAA/vxB+NgAAAA=",
          blurWidth: 8,
          blurHeight: 1,
        },
        s = {
          src: "/_next/static/media/headerMd.8577bad8.webp",
          height: 140,
          width: 1404,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAADwoGBAYKDhEAVlA4IB4AAACQAQCdASoIAAEAAkA4JaQAAudZuFQA/vZ/gT4AAAA=",
          blurWidth: 8,
          blurHeight: 1,
        },
        i = {
          src: "/_next/static/media/headerSm.f556d2d6.webp",
          height: 140,
          width: 840,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAADw0HBAcMEBEAVlA4ICQAAACQAQCdASoIAAEAAkA4JaQAAudP3WAA/u5vwHmz0wperF3NsAA=",
          blurWidth: 8,
          blurHeight: 1,
        };
      var d = a(954),
        n = a(7711),
        o = a(3463),
        c = a(2115),
        h = a(2596),
        u = a.n(h);
      let g = () => {
        let { isDrawerOpen: e, setDrawerOpen: t } = (0, c.useContext)(A.M);
        return (0, r.jsxs)("button", {
          type: "button",
          className: (0, o.A)(u().navButton, e && u().navButton_isOpen),
          onClick: () => t((e) => !e),
          children: [
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
            (0, r.jsx)("div", {}),
          ],
        });
      };
      var _ = a(8448),
        b = a(3126),
        m = a(5565),
        w = a(6046);
      let f = (e) => {
        let { loc: t } = e,
          a = (0, w.usePathname)(),
          { setRegisterOpen: h, setIndevPopupOpen: f } = (0, c.useContext)(A.M),
          v = (e) => {
            let t = (a || "").replace(/(^\/)|(\/$)/g, ""),
              r = (e || "").replace(/(^\/)|(\/$)/g, "");
            return "" !== t && !["ru", "en"].includes(t) && t === r;
          },
          p = (0, c.useCallback)(
            (e, t) => {
              t.indev ? (e.preventDefault(), f(!0)) : f(!1);
            },
            [t, f]
          );
        return (0, r.jsxs)("header", {
          className: u().header,
          children: [
            (0, r.jsx)(m.default, {
              src: l,
              alt: "",
              className: (0, o.A)(u().bg, "hide-tablet"),
              loading: "lazy",
            }),
            (0, r.jsx)(m.default, {
              src: s,
              alt: "",
              className: (0, o.A)(u().bg, "hide-phone hide-tablet-up"),
              loading: "lazy",
            }),
            (0, r.jsx)(m.default, {
              src: i,
              alt: "",
              className: (0, o.A)(u().bg, "hide-phone-up"),
              loading: "lazy",
            }),
            (0, r.jsxs)("div", {
              className: u().inner,
              children: [
                (0, r.jsx)("span", { children: "TrafficTrend", className:"logoText" }),
                (0, r.jsx)("div", {
                  className: u().nav,
                  children: t.header.nav.map((e, t) =>
                    e.indev
                      ? (0, r.jsx)(
                          "a",
                          {
                            href: "#",
                            className: (0, o.A)(u().navItem, "hover-glow-text"),
                            onClick: (t) => p(t, e),
                            children: (0, r.jsx)("span", { children: e.label }),
                          },
                          t
                        )
                      : (0, r.jsx)(
                          b.N,
                          {
                            href: e.href,
                            className: (0, o.A)(
                              u().navItem,
                              v(e.href) ? u().is_active : null,
                              "hover-glow-text"
                            ),
                            onClick: (t) => p(t, e),
                            children: (0, r.jsx)("span", { children: e.label }),
                          },
                          t
                        )
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: u().right,
                  children: [
                    (0, r.jsx)(n.D, {
                      className: u().lang,
                      activeLang: t.lang,
                    }),
                    (0, r.jsxs)("div", {
                      className: u().auth,
                      children: [
                        (0, r.jsx)(_.$, {
                          variant: "filled",
                          className: u().register,
                          onClick: () => h(!0),
                          children: t.common.register.label,
                        }),
                        (0, r.jsx)("a", {
                          href: t.common.login.link,
                          children: (0, r.jsx)(_.$, {
                            variant: "outline",
                            className: u().login,
                            children: t.common.login.label,
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(g, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    8448: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => d });
      var r = a(5155),
        A = a(3463),
        l = a(2115),
        s = a(5533),
        i = a.n(s);
      let d = (0, l.forwardRef)((e, t) => {
        let {
          className: a,
          children: l,
          type: s = "button",
          variant: d = "filled",
          ...n
        } = e;
        return (0, r.jsxs)("button", {
          ref: t,
          className: (0, A.A)(i().button, a),
          "data-variant": d,
          type: s,
          ...n,
          children: [
            (0, r.jsx)("span", { className: i().bg }),
            (0, r.jsx)("span", { className: i().content, children: l }),
          ],
        });
      });
      d.displayName = "Button";
    },
    441: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => A });
      let r = 0;
      function A(e) {
        if (e && 0 === r) {
          let e = window.scrollY;
          (document.body.style.position = "fixed"),
            (document.body.style.top = `-${e}px`),
            (document.body.style.overscrollBehavior = "none"),
            (document.body.style.overflowY = "scroll");
        } else if (!e && 1 === r) {
          let e = document.body.style.top;
          (document.body.style.position = ""),
            (document.body.style.top = ""),
            (document.body.style.overscrollBehavior = ""),
            window.scrollTo(0, -1 * parseInt(e || "0")),
            (document.body.style.overflowY = "");
        }
        e ? (r += 1) : r > 0 && (r -= 1);
      }
    },
    1868: (e) => {
      e.exports = {
        popup: "IndevPopup_popup__V7ED5",
        is_open: "IndevPopup_is_open__iAfNW",
        body: "IndevPopup_body__0dHKm",
        title: "IndevPopup_title__0xbWd",
        close: "IndevPopup_close__TF_X3",
      };
    },
    8614: (e) => {
      e.exports = {
        wrapper: "LangChanger_wrapper__6FQUp",
        link: "LangChanger_link__8fw7j",
        button: "LangChanger_button__HocR_",
        lang_ru: "LangChanger_lang_ru__M6FWh",
        flag: "LangChanger_flag__uJEaA",
        bg: "LangChanger_bg__kaWtI",
        lang_en: "LangChanger_lang_en__e_rvZ",
        is_active: "LangChanger_is_active__qviCa",
        label: "LangChanger_label__HBtbT",
      };
    },
    8662: (e) => {
      e.exports = {
        backdrop: "RegisterModal_backdrop__27jCq",
        in: "RegisterModal_in__R82rR",
        out: "RegisterModal_out___J3h0",
        content: "RegisterModal_content__8R_qW",
        cards: "RegisterModal_cards__VkcMK",
        card: "RegisterModal_card__3K188",
        cardImage1: "RegisterModal_cardImage1__raRnU",
        cardImage2: "RegisterModal_cardImage2__b5tuf",
        cardImage3: "RegisterModal_cardImage3__tKp4R",
        cardBorder: "RegisterModal_cardBorder__34u6O",
        cardButton: "RegisterModal_cardButton__sQ3y0",
        cardButtonBg: "RegisterModal_cardButtonBg__KnAzs",
        cardContent: "RegisterModal_cardContent__1WUcA",
        cardLabel: "RegisterModal_cardLabel__bWk2t",
        cardButtonContent: "RegisterModal_cardButtonContent__p1_Zm",
        close: "RegisterModal_close__kvimW",
      };
    },
    8644: (e) => {
      e.exports = {
        drawer: "Drawer_drawer__y_VP7",
        drawer_isOpen: "Drawer_drawer_isOpen__d0ME3",
        drawerInner: "Drawer_drawerInner__lZj4O",
        drawerNav: "Drawer_drawerNav__CUMV_",
        drawerNavItem: "Drawer_drawerNavItem__MmIR6",
        drawerLang: "Drawer_drawerLang__tIIF1",
        drawerAuthButtons: "Drawer_drawerAuthButtons__XqDce",
        drawerAuthButton: "Drawer_drawerAuthButton__XCflz",
        drawerIllustrations: "Drawer_drawerIllustrations__wnFtS",
        drawerGradient: "Drawer_drawerGradient__UwafE",
        drawerCard1: "Drawer_drawerCard1__36_2Z",
        floatCard1: "Drawer_floatCard1__EmAq1",
        drawerCard2: "Drawer_drawerCard2__Pcm8x",
        floatCard2: "Drawer_floatCard2__LERQj",
        drawerCard3: "Drawer_drawerCard3__TN3xw",
        floatCard3: "Drawer_floatCard3___u6O7",
        drawerCard4: "Drawer_drawerCard4__iIWO0",
        floatCard4: "Drawer_floatCard4__nS2M7",
        drawerCard5: "Drawer_drawerCard5__sFMoe",
        drawerCard6: "Drawer_drawerCard6__Nf58U",
        drawerLines1: "Drawer_drawerLines1__j6i0u",
        rotateLines: "Drawer_rotateLines__GeV2i",
        drawerLines2: "Drawer_drawerLines2__uRiWM",
      };
    },
    2662: (e) => {
      e.exports = {
        footer: "Footer_footer__zb27A",
        inner: "Footer_inner__V47yl",
        content: "Footer_content__R3SSt",
        left: "Footer_left__i6O3l",
        logoLink: "Footer_logoLink__fhFj5",
        logo: "Footer_logo__fe8jh",
        info: "Footer_info__mBKuc",
        address: "Footer_address__uA5bm",
        legal: "Footer_legal___c6jQ",
        nav: "Footer_nav__0aT1K",
        navCol: "Footer_navCol__LRR_e",
        navItem: "Footer_navItem__8Ox_4",
        right: "Footer_right__hkdCJ",
        email: "Footer_email__urV3v",
        socials: "Footer_socials__ISPtt",
      };
    },
    2596: (e) => {
      e.exports = {
        header: "Header_header__lMfxW",
        inner: "Header_inner__THJEl",
        logoLink: "Header_logoLink___uym_",
        logo: "Header_logo__5okxX",
        nav: "Header_nav__mHZr8",
        navItem: "Header_navItem__WQVgA",
        is_active: "Header_is_active__fS86X",
        navButton: "Header_navButton__k3xbW",
        navButton_isOpen: "Header_navButton_isOpen__A1UuQ",
        right: "Header_right__VyAbW",
        lang: "Header_lang__3UnY0",
        auth: "Header_auth__o3djR",
        bg: "Header_bg__CRTvl",
      };
    },
    2093: (e) => {
      e.exports = {
        trustPilot: "TrustPilot_trustPilot__wdYb0",
        label: "TrustPilot_label__OK5iQ",
        stars: "TrustPilot_stars__Zq8cZ",
        rating: "TrustPilot_rating__QK7Cr",
        logo: "TrustPilot_logo__TBEqJ",
      };
    },
    5533: (e) => {
      e.exports = {
        button: "Button_button__oEw4J",
        bg: "Button_bg__xhMYE",
        content: "Button_content__nFTtF",
      };
    },
    7034: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/FavCPA_1.029f5c88.png",
        height: 32,
        width: 32,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX+//+ZkfDy6vvW0fj////LtfKes/n//////f/e4Pvi6P3pzvTeuO/WsO6CjvO3svWpxvvw3vew3/7G3f2Fpvf48fyVyv2g1P7O7P/L4P3otNmmAAAACnRSTlP7////////jo7+gjUZfgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAEFJREFUeJwVxtsWgBAURdGN5SgSuvf/P9poPk0lyBmSxHu4gCS6tQh67r66uAxtl/0pYrcQakHK1mL1UmL2p2f6AEuXAha7vNJzAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9041: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/FavCPA_2.dae4f91a.png",
        height: 32,
        width: 32,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEU2tv+ug//q3/fkt/m1ev/eNf83tf/eP/+8d/+UlP/VyvnBbf/fr/p2wv3Zufrgjfy3zPrThf3KyfrZYP7TnPzYav7dwfnb2/ethv+OtP3Cp/zW3venxftRrv/EqPy+jf63V0WYAAAACnRSTlP++v//jo6O/f3+q2G7qwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAERJREFUeJwFwQUCgDAMBLCjHcxdcPb/X5JgA/ypDwHA3/ulFPAmY4K18KkQBZfxFEPEHKG/0RpHiWUO57hKCJt77XL9AWzfAyGRre7CAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    4564: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainCard1.0f975c6c.webp",
        height: 394,
        width: 394,
        blurDataURL:
          "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAABRCPSkWAgACXmVnZGdiFhVjaKahg2hFJ2BzoaGGZT82XYCannVhKzdaepuiY1wYEE9XV1pYVAIAAREiMzgTAABWUDggRAAAABACAJ0BKggACAACQDglAE6AxTfkTBSwsiAA/viqtItuVBv079Uy2WzPhLzV5A/DjfilLRsO+Omd44H6O8ywda56wAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6666: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainCard3.3ed0e5d0.webp",
        height: 210,
        width: 209,
        blurDataURL:
          "data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYB1JslJJe4+793D4Iwp3d4mIAJiZAAizeD5B/LSOY4c4f48pchVX218HQhwufeIRLGYxGgBIKQAAVlA4IE4AAADQAQCdASoIAAgAAkA4JZQCdAD0l+jSUAD++t777bjG2/1N2lv6LX+9z6J+yHG05DSK0Zl+RL/vxhq3k92hurZi064/BRo6qydXSYGoAAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5535: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainCard4.177157ad.webp",
        height: 180,
        width: 180,
        blurDataURL:
          "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAANYBBJkpO98A9Con85H2SQYc9GRASgav4+aqTKuOs/zmyXhyz9napT8QyfaEjZ3jYa4m7wFCAQIAAAVlA4IEwAAAAwAgCdASoIAAgAAkA4JZQCdAYoB2XhlXBEAAD+/Dt3hA+gL8rGwLVVLdo0JCofD+5JdSru64psigsQJ67zrCMzDao7XXdtjJiOiAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    158: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainGradientHQ.78adf8cc.webp",
        height: 1630,
        width: 1834,
        blurDataURL:
          "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAABAgIBAAAAAQkaIRMGAAAGJFySRRYCARNAmZp1LAICFEmeh2w0AQEGGllXJwQAAAABCQ8AAAAAVlA4IFgAAAAQAgCdASoIAAcAAkA4JbACdAYoBk0DchkwAP7kSPvKTD3qIP+kDLavdbtKiEo3a/yXANPujYOySjuIN22Fv/M+b+J38/8/35/lvCy/7ir7mmOv9M3cAAAA",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    287: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainLines1.8a8d6afe.webp",
        height: 2847,
        width: 2847,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABDzABERFCIJCEtL/eEhH9DxlWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++xdAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    3198: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/mainLines2.a24b0f0d.webp",
        height: 3476,
        width: 3476,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABDzABERGCQNI2JUt2HtH/oA9WUDggGAAAADABAJ0BKggACAACQDglpAADcAD++0AAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6481: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Adult EN.6206b0c7.webp",
        height: 718,
        width: 1280,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAQAAkA4JagCdAD0h/vOAAD9ARBgBydCC78FPHGGo1/bLcaI0UP3fn+JpHPxX7ocwl2b9AiHp3cAAAA=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    272: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Adult.7b6a2c74.webp",
        height: 718,
        width: 1280,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAQAAkA4JagCdAEXfofEXAD+CukQkd+MLbZ+l6LkgKNwsJefzkTBI+lvpVpqtpAY7Xz8POt1cAAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    4614: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Ai Offers EN.c4f7c89c.webp",
        height: 1472,
        width: 2624,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAQAAkA4JbACdAD0gbVuAPzf3k7zB+pxtxwT1ZgY/4ry0kf/BqGZTcj/y6cZ+w3nLZ/y+waef7uosh/qbpgAAAA=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9341: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Ai Offers.8c605944.webp",
        height: 736,
        width: 1312,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAQAAkA4JbACdAD0gdEbAAD4RC8gCDnv31xSvdgo5gDsigzf/BqGZTcj/41DMpRI73mX+X2DTz/d1FkP9TdMAAA=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    4559: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Betting.b10a4e67.webp",
        height: 736,
        width: 1312,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAQAAkA4JbACdAEO+mL4AAD2NnuUyGV4+dO5hVarAavH9Pu953Mf3Y9sv/Nm1vwC1PvDgAUN/Q5kkAA=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9265: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Betting_En.52cee80f.webp",
        height: 736,
        width: 1312,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAQAAkA4JbACdAD0Ma5VgADN50oweXzn2ZGp6GWT0DBRuA/fspx8fp1x7Zf+bNrfgFqfeHAAob+hy8AAAA==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    3784: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Dating USA 16x9.5ab19216.webp",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAUAAkA4JbACdAD0eqnsAP5b2Ui0ypnf4dkMFCi/MdfeirkwH76ug+tdIk2Aw7+7sQicBuD7Fq6IP/K0zPewAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    4352: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Dating USA 16x9_En.0190f894.webp",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAUAAkA4JbACdAD0eqr5AAD942QX8Fj2gUuZwA33quWqu2AVjER8VVrQIBC+Qtn+7sQicBfm/d4mv4XZChrAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    2681: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Infobiz 16x9.401f8035.webp",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JbACdAD0eqnsAOJ73PSpKE7rKjLHRDepVIUjPS0MY2IvzmfsPK3/xxcaUl/e4Yg//lxeN7gAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    3779: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Infobiz_En.b165a95d.webp",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JbACdADyf/7UAOJ73PMeTghRYSwxa32MbSaWy1PGPjvkSMT9UCAP/ji40pL+muxSX++TocAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    2663: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/review1.e64c8186.webp",
        height: 460,
        width: 512,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoIAAcAAkA4JQBOgB5vjICwAP71+IBA/oHmmKoc5aaVlboQFCCjZfSNl0/S0H66yeb5Tyf+52rZhGCk1y1ImOVOM2HAAA==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    2038: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/review2.73fe93f6.webp",
        height: 512,
        width: 512,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAABQAgCdASoIAAgAAkA4JYwCdAYqXy4LFlJ/ZgAA/vG8qEwypgnNqJOR2CBZvlWfhbXMj5fheKPSFeFvKcnuLHPIPUDSr01zAAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5781: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/review3.a3a8b936.webp",
        height: 461,
        width: 441,
        blurDataURL:
          "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAwAgCdASoIAAgAAkA4JQBOja/gUZGYJyYIAAD+4ntWZZxp5mkuxzbFIhbfVZShiuVHanhZb5Lt1idtmItOzrbQc3TSDNwXeKydi9ONAAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    3100: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/review4.e2f62ce8.webp",
        height: 426,
        width: 440,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAgAAkA4JQBOgBu1m0zRAAD+6lZH2+oQEFq9uSL7LtJHTPj/tJEu+ybSlfttXErkQmktYmo5IxrCTrNG0u2IpQQAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    954: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      let r = {
        src: "/_next/static/media/logo.233cd50d.svg",
        height: 46,
        width: 227,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3463: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      let r = function () {
        for (var e, t, a = 0, r = "", A = arguments.length; a < A; a++)
          (e = arguments[a]) &&
            (t = (function e(t) {
              var a,
                r,
                A = "";
              if ("string" == typeof t || "number" == typeof t) A += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var l = t.length;
                  for (a = 0; a < l; a++)
                    t[a] && (r = e(t[a])) && (A && (A += " "), (A += r));
                } else for (r in t) t[r] && (A && (A += " "), (A += r));
              }
              return A;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
  },
]);
