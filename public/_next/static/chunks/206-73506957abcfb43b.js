(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [206],
  {
    8400: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var A,
        r = a(2115);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var A in a)
                  ({}).hasOwnProperty.call(a, A) && (e[A] = a[A]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = (e) =>
        r.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 25 24",
            },
            e
          ),
          A ||
            (A = r.createElement("path", {
              stroke: "#fff",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "m16.5 4-6.898 6.898a2 2 0 0 0 .07 2.894L16.5 20",
            }))
        );
    },
    369: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var A,
        r = a(2115);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var A in a)
                  ({}).hasOwnProperty.call(a, A) && (e[A] = a[A]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = (e) =>
        r.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 25 24",
            },
            e
          ),
          A ||
            (A = r.createElement("path", {
              stroke: "#fff",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "m8.5 4 6.898 6.898a2 2 0 0 1-.07 2.894L8.5 20",
            }))
        );
    },
    1719: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var A,
        r = a(2115);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var A in a)
                  ({}).hasOwnProperty.call(a, A) && (e[A] = a[A]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = (e) =>
        r.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 18 18",
            },
            e
          ),
          A ||
            (A = r.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 1.364,
              d: "M3.546 3.545 9.26 9.26l5.195 5.194M3.546 14.454 9.26 8.74l5.195-5.195",
            }))
        );
    },
    435: (e, t, a) => {
      "use strict";
      a.d(t, { LayoutContextProvider: () => l, M: () => i });
      var A = a(5155),
        r = a(2115);
      let i = (0, r.createContext)({}),
        l = (e) => {
          let { children: t } = e,
            [a, l] = (0, r.useState)(!1),
            [n, s] = (0, r.useState)(!1),
            [o, d] = (0, r.useState)(!1),
            [c, u] = (0, r.useState)(!1),
            [g, h] = (0, r.useState)(!1);
          return (0, A.jsx)(i.Provider, {
            value: {
              isDrawerOpen: a,
              setDrawerOpen: l,
              isRegisterOpen: n,
              setRegisterOpen: s,
              isOctoClickVideoOpen: o,
              setOctoClickVideoOpen: d,
              isOctoClickPopupOpen: c,
              setOctoClickPopupOpen: u,
              isIndevPopupOpen: g,
              setIndevPopupOpen: h,
            },
            children: t,
          });
        };
    },
    9417: (e, t, a) => {
      "use strict";
      a.d(t, { OctoClickPopup: () => m });
      var A = a(5155),
        r = a(435),
        i = a(1719);
      let l = {
          src: "/_next/static/media/item1.934ea7ad.svg",
          height: 164,
          width: 161,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/item2.00e14bc9.svg",
          height: 160,
          width: 136,
          blurWidth: 0,
          blurHeight: 0,
        };
      var s = a(3463),
        o = a(5565),
        d = a(2115),
        c = a(9653),
        u = a.n(c);
      let g = "OctoClick_popup_shown",
        h = "true",
        m = (e) => {
          let { loc: t } = e,
            { isOctoClickPopupOpen: a, setOctoClickPopupOpen: c } = (0,
            d.useContext)(r.M),
            m = (0, d.useRef)(!1),
            p = (0, d.useCallback)(() => {
              m.current ||
                ((m.current = !0),
                sessionStorage.getItem(g) !== h &&
                  setTimeout(() => {
                    c(!0);
                  }, 1e3));
            }, [c]),
            f = (0, d.useCallback)(() => {
              sessionStorage.setItem(g, h), c(!1);
            }, [c]),
            b = (0, d.useId)();
          return true;
        
        };
    },
    7703: (e, t, a) => {
      "use strict";
      a.d(t, { x: () => i });
      var A = a(5155),
        r = a(2115);
      let i = (e) => {
        let { placeholder: t, children: a } = e,
          i = (0, r.useRef)(null),
          [l, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = new IntersectionObserver(
              (t) => {
                let [a] = t;
                a.isIntersecting && (n(!0), e.disconnect());
              },
              { threshold: 0.01 }
            );
            return i.current && e.observe(i.current), () => e.disconnect();
          }, []),
          (0, A.jsx)("div", {
            ref: i,
            children: l
              ? a
              : void 0 !== t
              ? t
              : (0, A.jsx)("div", { className: "minimalPlaceholder" }),
          })
        );
      };
    },
    4837: (e, t, a) => {
      "use strict";
      a.d(t, { BlogItems: () => h });
      var A = a(5155),
        r = a(7703),
        i = a(8400),
        l = a(369),
        n = a(8448),
        s = a(3463),
        o = a(2750),
        d = a(5604),
        c = a(2576),
        u = a(5565),
        g = a(2115);
      let h = (e) => {
          let { loc: t, styles: a } = e;
          return (0, A.jsx)(r.x, {
            children: (0, A.jsx)(m, { loc: t, styles: a }),
          });
        },
        m = (e) => {
          let { loc: t, styles: a, rssItems: r } = e,
            h = r
              ? [...r, ...t.index.blog.items, ...r, ...t.index.blog.items]
              : [...t.index.blog.items, ...t.index.blog.items],
            m = (0, g.useRef)(null),
            [p, f] = (0, g.useState)(!1),
            [b, _] = (0, c.A)({ active: !1, loop: !0 }, [
              (0, d.A)(),
              (0, o.A)(),
            ]),
            x = (0, g.useCallback)(() => {
              _ && (_.scrollPrev(), _.plugins().autoplay?.stop?.());
            }, [_]),
            w = (0, g.useCallback)(() => {
              _ && (_.scrollNext(), _.plugins().autoplay?.stop?.());
            }, [_]),
            I = (0, g.useCallback)(() => {
              if (m.current) {
                let e = Array.from(m.current.children);
                if (e.length > 0) {
                  let t = null;
                  for (let a of e) {
                    let e = a.getBoundingClientRect().height;
                    (null == t || e > t) && (t = e);
                  }
                  null != t && (m.current.style.height = `${t}px`);
                }
              }
              _ && (_.reInit({ active: !0 }), f(!0));
            }, [_]),
            v = (0, g.useCallback)(() => {
              _ &&
                (_.reInit({ active: !1 }),
                m.current && (m.current.style.height = "auto"),
                f(!1));
            }, [_]);
          (0, g.useEffect)(() => {
            I();
          }, [I]);
          let B = (0, g.useRef)(0),
            C = (0, g.useRef)(null);
          return (
            (0, g.useEffect)(() => {
              let e = new AbortController(),
                t = !1;
              window.addEventListener(
                "resize",
                () => {
                  p &&
                    !t &&
                    (requestAnimationFrame(() => {
                      let e = window.innerWidth;
                      e !== B.current &&
                        ((B.current = e),
                        v(),
                        C.current && clearTimeout(C.current),
                        (C.current = setTimeout(() => {
                          I();
                        }, 500))),
                        (t = !1);
                    }),
                    (t = !0));
                },
                { signal: e.signal }
              );
            }, [I, v, p]),
            (0, A.jsxs)(A.Fragment, {
              children: [
                (0, A.jsx)("div", {
                  className: (0, s.A)(a.blogItems, "embla", p && "is-inited"),
                  ref: b,
                  children: (0, A.jsx)("div", {
                    className: "embla__container",
                    ref: m,
                    children: h.map((e, r) =>
                      (0, A.jsxs)(
                        "div",
                        {
                          className: (0, s.A)(a.blogItem, "embla__slide"),
                          children: [
                            !!e.image &&
                              (e.image.src
                                ? (0, A.jsx)(u.default, {
                                    className: a.blogItemImage,
                                    src: e.image,
                                    alt: "",
                                    loading: "lazy",
                                  })
                                : (0, A.jsx)("img", {
                                    className: a.blogItemImage,
                                    src: e.image,
                                    alt: "",
                                    loading: "lazy",
                                  })),
                            (0, A.jsxs)("div", {
                              className: a.blogItemBody,
                              children: [
                                (0, A.jsx)("h3", {
                                  className: a.blogItemTitle,
                                  children: e.title,
                                }),
                                (0, A.jsx)("div", {
                                  className: a.blogItemDescription,
                                  children: e.description,
                                }),
                                (0, A.jsx)("div", {
                                  className: a.blogItemButtonWrapper,
                                  children: (0, A.jsx)("div", {
                                    className: a.blogItemButtonWrapperInner,
                                    children: (0, A.jsx)(n.$, {
                                      variant: "outline",
                                      className: a.blogItemButton,
                                      children: t.index.blog.read,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
                (0, A.jsxs)("div", {
                  className: a.blogControls,
                  children: [
                    (0, A.jsx)(n.$, {
                      variant: "outline",
                      className: a.blogControlsNavButton,
                      onClick: x,
                      children: (0, A.jsx)(i.A, {}),
                    }),
                    (0, A.jsx)("a", {
                      href: t.index.blog.url,
                      rel: "noopener noreferrer",
                      children: (0, A.jsx)(n.$, {
                        className: a.blogControlsLinkButton,
                        children: t.index.blog.all,
                      }),
                    }),
                    (0, A.jsx)(n.$, {
                      variant: "outline",
                      className: a.blogControlsNavButton,
                      onClick: w,
                      children: (0, A.jsx)(l.A, {}),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    5731: (e, t, a) => {
      "use strict";
      a.d(t, { ContactForm: () => l });
      var A = a(5155),
        r = a(8448),
        i = a(2115);
      let l = (e) => {
        let { loc: t, submitUrl: a, styles: l } = e,
          [n, s] = (0, i.useState)(!1),
          [o, d] = (0, i.useState)(!1),
          c = (0, i.useCallback)(
            (e) => {
              e.preventDefault(), d(!0);
              let A = Array.from(new FormData(e.currentTarget));
              a &&
                (async () => {
                  try {
                    await fetch(a, {
                      method: "POST",
                      body: new URLSearchParams(A).toString(),
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    }),
                      s(!0),
                      setTimeout(() => {
                        alert(t.index.feedback.form.success);
                      }, 16);
                  } catch (e) {
                    console.error(e);
                  }
                  d(!1);
                })();
            },
            [a, t.index.feedback.form.success]
          ),
          u = n || o;
        return (0, A.jsxs)("form", {
          className: l.contactForm,
          action: a,
          method: "POST",
          onSubmit: c,
          children: [
            (0, A.jsx)("div", {
              className: l.contactFormTitle,
              children: t.index.feedback.title,
            }),
            (0, A.jsx)("div", {
              className: l.contactFormDescription,
              children: t.index.feedback.description,
            }),
            (0, A.jsxs)("div", {
              className: l.contactFormFields,
              children: [
                (0, A.jsx)("input", {
                  type: "text",
                  name: "name",
                  placeholder: t.index.feedback.form.name,
                  className: l.contactFormField,
                  required: !0,
                  disabled: u,
                }),
                (0, A.jsx)("input", {
                  type: "email",
                  name: "email",
                  placeholder: t.index.feedback.form.email,
                  className: l.contactFormField,
                  required: !0,
                  disabled: u,
                }),
                (0, A.jsx)("textarea", {
                  name: "message",
                  placeholder: t.index.feedback.form.message,
                  className: l.contactFormField,
                  required: !0,
                  disabled: u,
                }),
              ],
            }),
            (0, A.jsx)(r.$, {
              type: "submit",
              className: l.contactFormSubmit,
              disabled: u,
              children: t.index.feedback.form.send,
            }),
          ],
        });
      };
    },
    2273: (e, t, a) => {
      "use strict";
      a.d(t, { IndexMain: () => c });
      var A,
        r = a(5155),
        i = a(8448),
        l = a(435),
        n = a(2115);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var A in a)
                  ({}).hasOwnProperty.call(a, A) && (e[A] = a[A]);
              }
              return e;
            }).apply(null, arguments);
      }
      let o = (e) =>
        n.createElement(
          "svg",
          s(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              fill: "none",
              viewBox: "0 0 16 18",
            },
            e
          ),
          A ||
            (A = n.createElement("path", {
              fill: "currentColor",
              d: "M15 7.578c1.333.77 1.333 2.694 0 3.464L3.75 17.537c-1.333.77-3-.192-3-1.732V2.815c0-1.54 1.667-2.502 3-1.732z",
            }))
        );
      var d = a(3463);
      let c = (e) => {
        let { styles: t, loc: a } = e,
          { setRegisterOpen: A, setOctoClickVideoOpen: s } = (0, n.useContext)(
            l.M
          );
        return (0, r.jsx)("div", {
          className: (0, d.A)(t.main, t.pageBlock),
          children: (0, r.jsxs)("div", {
            className: t.mainContainer,
            children: [
              (0, r.jsx)("h1", {
                className: (0, d.A)(t.mainTitle, "sr-el"),
                children: a.index.main.title,
              }),
              (0, r.jsx)("div", {
                className: (0, d.A)(t.mainDescription, "sr-el"),
                children: a.index.main.description,
              }),
              (0, r.jsxs)("div", {
                className: (0, d.A)(t.mainButtons, "sr-el"),
                children: [
                  (0, r.jsx)(i.$, {
                    variant: "filled",
                    className: t.mainButton,
                    onClick: () => A(!0),
                    children: a.common.register.label,
                  }),
                  (0, r.jsx)("a", {
                    href: a.common.login.link,
                    children: (0, r.jsx)(i.$, {
                      variant: "outline",
                      className: t.mainButton,
                      children: a.common.login.label,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    1836: (e, t, a) => {
      "use strict";
      a.d(t, { IndexOffers: () => m });
      var A = a(5155),
        r = a(7703),
        i = a(8400),
        l = a(369),
        n = a(8448),
        s = a(3463),
        o = a(2750),
        d = a(5604),
        c = a(2576),
        u = a(2115);
      class g {
        constructor(e) {
          (this.baseX = Math.random() * e.width),
            (this.baseY = Math.random() * e.height),
            (this.baseSize = 1),
            (this.baseOpacity = 0.5 > Math.random() ? 0.5 : 1),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.offsetSize = 0),
            (this.offsetOpacity = 0),
            (this.targetX = this.randomOffset(2, 4)),
            (this.targetY = this.randomOffset(2, 4)),
            (this.targetSize = 1),
            (this.targetOpacity = 1 === this.baseOpacity ? -0.5 : 0.5),
            (this.speed = 0.02 + 0.02 * Math.random()),
            (this.progress = 0);
        }
        randomOffset(e, t) {
          return (Math.random() * (t - e) + e) * (0.5 > Math.random() ? -1 : 1);
        }
        update() {
          (this.progress += this.speed),
            this.progress >= 1 &&
              ((this.progress = 0),
              (this.targetX = this.randomOffset(2, 4)),
              (this.targetY = this.randomOffset(2, 4)),
              (this.targetSize = 1),
              (this.targetOpacity = this.targetOpacity > 0 ? -0.5 : 0.5)),
            (this.offsetX = this.targetX * Math.sin(this.progress * Math.PI)),
            (this.offsetY = this.targetY * Math.sin(this.progress * Math.PI)),
            (this.offsetSize =
              this.targetSize * Math.sin(this.progress * Math.PI)),
            (this.offsetOpacity =
              this.targetOpacity * Math.sin(this.progress * Math.PI));
        }
        draw(e) {
          e.beginPath(),
            e.arc(
              this.baseX + this.offsetX,
              this.baseY + this.offsetY,
              Math.max(0.5, this.baseSize + this.offsetSize),
              0,
              2 * Math.PI
            ),
            (e.fillStyle = `rgba(255,255,255,${
              this.baseOpacity + this.offsetOpacity
            })`),
            e.fill();
        }
      }
      let h = (e) => {
          let { styles: t, children: a } = e,
            r = (0, u.useRef)(null),
            i = (0, u.useRef)(null);
          return (
            (0, u.useEffect)(() => {
              if (r.current && i.current && t) {
                let t, a;
                let A = r.current,
                  l = i.current,
                  n = l.getContext("2d");
                if (!n) return;
                let s = !1;
                function e() {
                  (a = A.getBoundingClientRect()),
                    (l.width = a.width),
                    (l.height = a.height),
                    (t = Array.from({ length: 600 }, () => new g(a)));
                }
                window.addEventListener("resize", e), e();
                let o = null,
                  d = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        e.isIntersecting
                          ? s ||
                            ((s = !0),
                            (function e() {
                              s &&
                                n &&
                                (n.clearRect(0, 0, a.width, a.height),
                                t.forEach((e) => {
                                  e.update(), e.draw(n);
                                }),
                                (o = requestAnimationFrame(e)));
                            })())
                          : s && ((s = !1), o && cancelAnimationFrame(o));
                      });
                    },
                    { threshold: 0 }
                  );
                return (
                  d.observe(A),
                  () => {
                    d.unobserve(A);
                  }
                );
              }
            }, [t]),
            (0, A.jsxs)("div", {
              ref: r,
              className: t.offerImageSpoiler,
              children: [
                (0, A.jsx)("canvas", {
                  ref: i,
                  className: t.offerImageSpoilerCanvas,
                }),
                a,
              ],
            })
          );
        },
        m = (e) => {
          let { styles: t, loc: a } = e;
          return (0, A.jsx)("div", {
            className: (0, s.A)(t.offers, t.pageBlock),
            children: (0, A.jsxs)("div", {
              className: t.offersInner,
              children: [
                (0, A.jsx)("h2", {
                  className: (0, s.A)(t.offersTitle, "sr-el"),
                  children: a.index.offers.title,
                }),
                (0, A.jsx)("div", {
                  className: (0, s.A)(t.offersDescription, "sr-el"),
                  children: a.index.offers.description,
                }),
                (0, A.jsx)(r.x, {
                  placeholder: (0, A.jsx)("div", {
                    className: t.offersSkeleton,
                    children: Array.from(Array(16)).map((e, a) =>
                      (0, A.jsx)("div", { className: t.offersSkeletonItem }, a)
                    ),
                  }),
                  children: (0, A.jsx)(p, { ...e }),
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { styles: t, loc: a } = e,
            [r, g] = (0, u.useState)(),
            m = (0, u.useRef)(null),
            [p, f] = (0, u.useState)(!1),
            [b, _] = (0, c.A)({ active: !1, loop: !0 }, [
              (0, d.A)(),
              (0, o.A)(),
            ]),
            x = (0, u.useCallback)(() => {
              _ && (_.scrollPrev(), _.plugins().autoplay?.stop?.());
            }, [_]),
            w = (0, u.useCallback)(() => {
              _ && (_.scrollNext(), _.plugins().autoplay?.stop?.());
            }, [_]),
            I = (0, u.useCallback)(() => {
              if (r) {
                if (m.current) {
                  let e = Array.from(m.current.children);
                  if (e.length > 0) {
                    let t = null;
                    for (let a of e) {
                      let e = a.getBoundingClientRect().height;
                      (null == t || e > t) && (t = e);
                    }
                    null != t && (m.current.style.height = `${t}px`);
                  }
                }
                _ && (_.reInit({ active: !0 }), f(!0));
              }
            }, [_, r]),
            v = (0, u.useCallback)(() => {
              _ &&
                (_.reInit({ active: !1 }),
                m.current && (m.current.style.height = "auto"),
                f(!1));
            }, [_]);
          (0, u.useEffect)(() => {
            I();
          }, [I]);
          let B = (0, u.useRef)(0),
            C = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            let e = new AbortController(),
              t = !1;
            window.addEventListener(
              "resize",
              () => {
                p &&
                  !t &&
                  (requestAnimationFrame(() => {
                    let e = window.innerWidth;
                    e !== B.current &&
                      ((B.current = e),
                      v(),
                      C.current && clearTimeout(C.current),
                      (C.current = setTimeout(() => {
                        I();
                      }, 500))),
                      (t = !1);
                  }),
                  (t = !0));
              },
              { signal: e.signal }
            );
          }, [I, v, p]),
            (0, u.useEffect)(() => {
              t &&
                a &&
                fetch("/OctoCPA_offers.php")
                  .then((e) => e.json())
                  .then((e) => {
                    Array.isArray(e) &&
                      g(
                        e.map((e) => {
                          let r = e.data ? JSON.parse(e.data) : null,
                            i = null,
                            l = null,
                            n = null,
                            s = null;
                          if (r?.payout?.length > 0) {
                            n = r.payout
                              .filter((e) => !!e.goal_name)
                              .map((e) => e.goal_name)
                              .join(", ");
                            let e = r.payout.reduce(
                                (e, t) => [...e, ...(t.payoutByCountry ?? [])],
                                []
                              ),
                              o = [...new Set(e.map((e) => e.country.code))],
                              d = o.slice(0, 3),
                              c = o.length > 3 && o.length - 3;
                            d.length > 0 &&
                              (i = (0, A.jsxs)("span", {
                                className: t.offerGeos,
                                children: [
                                  d.map((e, a) =>
                                    (0, A.jsxs)(
                                      "span",
                                      {
                                        className: t.offerGeo,
                                        children: [
                                          (0, A.jsx)("img", {
                                            src: `/assets/flags/${e.toLowerCase()}.svg`,
                                            alt: "",
                                            loading: "lazy",
                                            onError: (e) =>
                                              (e.currentTarget.style.display =
                                                "none"),
                                          }),
                                          (0, A.jsx)("span", {
                                            className: t.offerGeoCC,
                                            children: e.toUpperCase(),
                                          }),
                                        ],
                                      },
                                      a
                                    )
                                  ),
                                  !!c &&
                                    (0, A.jsxs)(A.Fragment, {
                                      children: ["+", c],
                                    }),
                                ],
                              }));
                            let u = e
                              .map((e) => e.value)
                              .reduce((e, t) => e + t, 0);
                            (l = `$${u.toFixed(2)}`),
                              (s = [
                                "daily_caps",
                                "weekly_caps",
                                "monthly_caps",
                                "total_caps",
                              ]
                                .map((e) =>
                                  r?.[e]?.limit
                                    ? `${a.index.offers.capTypes[e]}: ${r?.[e]?.limit}`
                                    : null
                                )
                                .filter((e) => !!e)
                                .join(", "));
                          }
                          return {
                            ...e,
                            data: r,
                            specs: [
                              {
                                label: a.index.offers.specs.title,
                                value: e.title,
                              },
                              { label: a.index.offers.specs.geo, value: i },
                              { label: a.index.offers.specs.goal, value: n },
                              { label: a.index.offers.specs.payout, value: l },
                              { label: a.index.offers.specs.limit, value: s },
                              {
                                label: a.index.offers.specs.category,
                                value:
                                  r?.categories?.length > 0
                                    ? r?.categories
                                        .map((e) => e.title)
                                        .join(", ")
                                    : null,
                              },
                            ].filter((e) => !!e.value),
                            link: r?.id
                              ? `https://OctoCPA.scaleo.app/affiliate/offers/${r?.id}`
                              : void 0,
                          };
                        })
                      );
                  });
            }, [a, t]);
          let Q = (0, u.useCallback)((e) => {
            let t = e.currentTarget;
            t &&
              !t.dataset.unblurred &&
              (e.preventDefault(),
              e.stopPropagation(),
              (t.dataset.unblurred = "true"),
              setTimeout(() => {
                delete t.dataset.unblurred;
              }, 5e3));
          }, []);
          return (0, A.jsxs)("div", {
            className: t.offersActual,
            children: [
              !r &&
                (0, A.jsx)("div", {
                  className: t.offersSkeleton,
                  children: Array.from(Array(16)).map((e, a) =>
                    (0, A.jsx)("div", { className: t.offersSkeletonItem }, a)
                  ),
                }),
              r &&
                r.length > 0 &&
                (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)("div", {
                      className: (0, s.A)(
                        t.offersItems,
                        "embla",
                        p && "is-inited"
                      ),
                      ref: b,
                      children: (0, A.jsx)("div", {
                        className: "embla__container",
                        ref: m,
                        children: r.map((e, a) =>
                          (0, A.jsxs)(
                            "a",
                            {
                              href: e.link || "#",
                              target: "_blank",
                              rel: "noopener noreferer",
                              className: (0, s.A)(t.offer, "embla__slide"),
                              style: { "--mask-value": `url(#offerMask${a})` },
                              children: [
                                (0, A.jsx)("div", { className: t.offerBorder }),
                                (0, A.jsx)("div", {
                                  className: t.offerBorderHover,
                                }),
                                (0, A.jsx)("svg", {
                                  className: t.offerBorderMask,
                                  width: "0",
                                  height: "0",
                                  children: (0, A.jsx)("defs", {
                                    children: (0, A.jsx)("mask", {
                                      id: `offerMask${a}`,
                                      children: (0, A.jsx)("rect", {
                                        x: "0",
                                        y: "0",
                                        width: "100%",
                                        height: "100%",
                                        fill: "transparent",
                                        stroke: "white",
                                        strokeWidth: "2px",
                                        rx: "40px",
                                        ry: "40px",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, A.jsxs)("div", {
                                  className: t.offerContent,
                                  children: [
                                    (0, A.jsx)("div", {
                                      className: t.offerImage,
                                      onClick: Q,
                                      children:
                                        !!e.image &&
                                        (0, A.jsx)(A.Fragment, {
                                          children: (0, A.jsx)(h, {
                                            styles: t,
                                            children: (0, A.jsx)("img", {
                                              src: e.image,
                                              alt: "",
                                              loading: "lazy",
                                            }),
                                          }),
                                        }),
                                    }),
                                    (0, A.jsx)("div", {
                                      className: t.offerBody,
                                      children: (0, A.jsx)("div", {
                                        className: t.offerSpecs,
                                        children: e.specs.map((e) =>
                                          (0, A.jsxs)(
                                            "div",
                                            {
                                              className: t.offerSpec,
                                              children: [
                                                (0, A.jsx)("span", {
                                                  className: t.offerSpecTag,
                                                  children: e.label,
                                                }),
                                                (0, A.jsx)("span", {
                                                  className: t.offerSpecValue,
                                                  children: e.value,
                                                }),
                                              ],
                                            },
                                            e.label
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    }),
                    (0, A.jsxs)("div", {
                      className: t.offersControls,
                      children: [
                        (0, A.jsx)(n.$, {
                          variant: "outline",
                          className: t.offersControlsNavButton,
                          onClick: x,
                          children: (0, A.jsx)(i.A, {}),
                        }),
                        (0, A.jsx)("a", {
                          href: a.index.offers.url,
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(n.$, {
                            className: t.offersControlsLinkButton,
                            children: a.index.offers.all,
                          }),
                        }),
                        (0, A.jsx)(n.$, {
                          variant: "outline",
                          className: t.offersControlsNavButton,
                          onClick: w,
                          children: (0, A.jsx)(l.A, {}),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
    },
    2957: (e, t, a) => {
      "use strict";
      a.d(t, { IndexScrollReveal: () => i });
      var A = a(5155),
        r = a(2115);
      let i = (e) => {
        let { styles: t } = e,
          i = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(() => {
            !i.current &&
              t &&
              ((i.current = !0),
              (async function () {
                let e = (0, (await a.e(918).then(a.bind(a, 7918))).default)({
                  origin: "top",
                  distance: "80px",
                  duration: 1500,
                  reset: !1,
                });
                function A(t) {
                  let a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : void 0;
                  e.reveal(t, a);
                }
                A(`.${t.mainTitle}`),
                  A(`.${t.mainDescription}`, { delay: 200 }),
                  A(`.${t.mainButtons}`, { delay: 400 }),
                  A(`.${t.feature}:nth-child(1)`, { delay: 0 }),
                  A(`.${t.feature}:nth-child(2)`, { delay: 200 }),
                  A(`.${t.feature}:nth-child(3)`, { delay: 200 }),
                  A(`.${t.feature}:nth-child(4)`, { delay: 400 }),
                  A(`.${t.verticalsTitle}`, { delay: 0 }),
                  A(`.${t.verticalsDescription}`, { delay: 0 }),
                  A(`.${t.verticalsCardWrapper}`, { delay: 0 }),
                  A(`.${t.vertical}:nth-child(1)`, { delay: 200 }),
                  A(`.${t.vertical}:nth-child(2)`, { delay: 200 }),
                  A(`.${t.vertical}:nth-child(3)`, { delay: 200 }),
                  A(`.${t.vertical}:nth-child(4)`, { delay: 200 }),
                  A(`.${t.paymentsTitle}`, { delay: 0 }),
                  A(`.${t.paymentsDescription}`, { delay: 0 }),
                  A(`.${t.payment}:nth-child(1)`, { delay: 0 }),
                  A(`.${t.payment}:nth-child(2)`, { delay: 0 }),
                  A(`.${t.payment}:nth-child(3)`, { delay: 200 }),
                  A(`.${t.offersTitle}`, { delay: 0 }),
                  A(`.${t.offersDescription}`, { delay: 0 }),
                  A(`.${t.reviewsTitle}`, { delay: 0 }),
                  A(`.${t.reviewsDescription}`, { delay: 0 }),
                  A(".reviewsItemsWrapper", { delay: 0 }),
                  A(".contactFormWrapper", { delay: 0 }),
                  A(`.${t.partnersTitle}`, { delay: 0 }),
                  A(`.${t.partnersItemsWrapper}`, { delay: 0 });
              })());
          }, [t]),
          (0, A.jsx)(A.Fragment, {})
        );
      };
    },
    8265: (e, t, a) => {
      "use strict";
      a.d(t, { IndexScrollTo: () => l });
      var A = a(5155),
        r = a(6046),
        i = a(2115);
      let l = (e) => {
          let { styles: t } = e;
          return (0, A.jsx)(i.Suspense, {
            fallback: (0, A.jsx)(A.Fragment, {}),
            children: (0, A.jsx)(n, { styles: t }),
          });
        },
        n = (e) => {
          let { styles: t } = e,
            a = (0, r.useSearchParams)().get("block");
          return (
            (0, i.useEffect)(() => {
              if (t && "contact" === a) {
                document
                  .querySelector(`.${t.page}`)
                  ?.classList.add(t.contentVisibility_visible);
                let e =
                  window.scrollY +
                  (document
                    .querySelector(`.${t.contact}`)
                    ?.getBoundingClientRect().top ?? 0);
                setTimeout(() => {
                  window.scrollTo({ top: e - 60, behavior: "smooth" });
                }, 250);
              }
            }, [a, t]),
            (0, A.jsx)(A.Fragment, {})
          );
        };
    },
    9130: (e, t, a) => {
      "use strict";
      a.d(t, { IndexVideo: () => c });
      var A = a(5155),
        r = a(435),
        i = a(441),
        l = a(1719),
        n = a(3463),
        s = a(2115),
        o = a(1133),
        d = a.n(o);
      let c = () => {
        let e = (0, s.useRef)(null),
          t = (0, s.useRef)(null),
          { isOctoClickVideoOpen: a, setOctoClickVideoOpen: o } = (0,
          s.useContext)(r.M),
          [c, u] = (0, s.useState)(a);
        (0, s.useEffect)(() => {
          a && u(!0);
        }, [a]),
          (0, s.useEffect)(() => {
            (0, i.L)(a);
          }, [a]);
        let g = (0, s.useCallback)(() => {
            o(!1),
              t.current && (t.current.pause(), (t.current.currentTime = 0));
          }, [o]),
          h = (0, s.useCallback)(() => {
            g();
          }, [g]),
          m = (0, s.useCallback)(
            (t) => {
              e.current && !e.current.contains(t.target) && g();
            },
            [g]
          );
        return (
          (0, s.useEffect)(() => {
            let e = new AbortController();
            return (
              window.addEventListener(
                "keydown",
                (e) => {
                  "Escape" === e.key && o(!1);
                },
                { signal: e.signal }
              ),
              () => {
                e.abort();
              }
            );
          }, [o]),
          (0, A.jsx)("div", {
            className: (0, n.A)(d().wrapper, a && d().is_open),
            onClick: m,
            children: (0, A.jsxs)("div", {
              className: d().window,
              ref: e,
              children: [
                c &&
                  (0, A.jsxs)("video", {
                    controls: !0,
                    className: d().video,
                    ref: t,
                    autoPlay: !0,
                    children: [
                      (0, A.jsx)("source", {
                        src: "/assets/OctoClick.webm",
                        type: "video/webm",
                      }),
                      "Your browser does not support this video format.",
                    ],
                  }),
                (0, A.jsx)("button", {
                  type: "button",
                  className: d().close,
                  onClick: h,
                  children: (0, A.jsx)(l.A, {}),
                }),
              ],
            }),
          })
        );
      };
    },
    6699: (e, t, a) => {
      "use strict";
      a.d(t, { PartnersItems: () => d });
      var A = a(5155),
        r = a(3463),
        i = a(7220),
        l = a(2576),
        n = a(7703),
        s = a(5565);
      let o = [
          {
            src: "/_next/static/media/rentacc.ea2308ff.png",
            height: 1096,
            width: 2048,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEX4QBn2RiX4SSP4SCT3SCbyRCY5N+oYAAAABnRSTlMBDV9vMR0o1OgHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAIElEQVR4nGNgYGSAAEZmFgZWFgYGBlZmZiYmJia4OAMAAu8AKNoOircAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: "/_next/static/media/gold lead.d00cea17.svg",
            height: 82,
            width: 143,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/huffson .768b7292.png",
            height: 179,
            width: 517,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX09PX/3xL38tvy8u/y9v/73g7z8/P/4B5MaXH66oed5flJAAAACnRSTlM0USwaO0ZDGQA++N/zhgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACBJREFUeJwFwYcBACAMwzBnQMv/DyMhGeAy5zU4SC5kPwMOAD+BxoLyAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 3,
          },
          {
            src: "/_next/static/media/metacpa.497d124a.svg",
            height: 44,
            width: 192,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/my lead.4b2d5079.svg",
            height: 44,
            width: 164,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/mybid.56efbdbb.svg",
            height: 34,
            width: 233,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/offergate.87b85e13.svg",
            height: 40,
            width: 176,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/pin up.0c9098bb.svg",
            height: 252,
            width: 648,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/samurai partners.25fe762d.png",
            height: 48,
            width: 126,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEXQ/QXR/wfS/wbQ/AbT/wfH5ADP9wfU/wDemTljAAAACHRSTlNYaZJJgwQgGFRKM2kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicBcEHAQAACMOw7gD+HZMQt64hBBDMCunmAQLcADedU01vAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 3,
          },
          {
            src: "/_next/static/media/traffcore.46f72c82.svg",
            height: 32,
            width: 177,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/property1.2df9d8c8.svg",
            height: 90,
            width: 366,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/aflogow.fb26e46b.png",
            height: 80,
            width: 409,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX39/f///////////8RERFlZmgWFxkfHx93ZsqJAAAACHRSTlMfKBVWHuS1KLhMBUkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BjZ2JgYmJkZmBlYWBgZGBkBgABrgAmhpGJ8QAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 2,
          },
          {
            src: "/_next/static/media/afflift.0ea5cae4.png",
            height: 80,
            width: 348,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXsbCL0ohvfXx/raCDxlhvkaiPynBw+Oz7GAAAAB3RSTlMvHgMTLZCRlp2+HAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGFjZGRgYGZiYGBlYWRgZmICAAFXACN0tgsYAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 2,
          },
          {
            src: "/_next/static/media/affiliate-logo.e1b30497.svg",
            height: 32,
            width: 148,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/capitalist-green-white.5dace996.svg",
            height: 157,
            width: 497,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/keitaro.2288b096.svg",
            height: 34,
            width: 150,
            blurWidth: 0,
            blurHeight: 0,
          },
          {
            src: "/_next/static/media/партнеркин.21b3d09e.svg",
            height: 193,
            width: 934,
            blurWidth: 0,
            blurHeight: 0,
          },
        ],
        d = (e) => {
          let { styles: t } = e;
          return (0, A.jsx)(n.x, { children: (0, A.jsx)(c, { styles: t }) });
        },
        c = (e) => {
          let { styles: t } = e,
            [a] = (0, l.A)({ loop: !0, watchDrag: !1 }, [
              (0, i.A)({
                stopOnInteraction: !1,
                stopOnFocusIn: !1,
                startDelay: 0,
              }),
            ]);
          return (0, A.jsx)("div", {
            className: (0, r.A)(t.partnersItems, "embla"),
            ref: a,
            children: (0, A.jsx)("div", {
              className: "embla__container",
              children: o.map((e, a) =>
                (0, A.jsx)(
                  "div",
                  {
                    className: (0, r.A)(t.partner, "embla__slide"),
                    children: (0, A.jsx)("div", {
                      className: t.partnerImageWrapper,
                      children: (0, A.jsx)(s.default, {
                        src: e,
                        alt: "",
                        loading: "lazy",
                      }),
                    }),
                  },
                  a
                )
              ),
            }),
          });
        };
    },
    6710: (e, t, a) => {
      "use strict";
      a.d(t, { ReviewsItems: () => m });
      var A = a(5155),
        r = a(7703),
        i = a(8400),
        l = a(369),
        n = a(8448),
        s = a(3463),
        o = a(2750),
        d = a(5604),
        c = a(2576),
        u = a(3126),
        g = a(5565),
        h = a(2115);
      let m = (e) => {
          let { loc: t, styles: a } = e;
          return (0, A.jsx)(r.x, {
            children: (0, A.jsx)(p, { loc: t, styles: a }),
          });
        },
        p = (e) => {
          let { loc: t, styles: a } = e,
            r = t.index.reviews.items,
            m = [...r, ...r, ...r],
            p = (0, h.useRef)(null),
            [f, b] = (0, h.useState)(!1),
            [_, x] = (0, c.A)({ active: !1, loop: !0 }, [
              (0, d.A)(),
              (0, o.A)(),
            ]),
            w = (0, h.useCallback)(() => {
              x && (x.scrollPrev(), x.plugins().autoplay?.stop?.());
            }, [x]),
            I = (0, h.useCallback)(() => {
              x && (x.scrollNext(), x.plugins().autoplay?.stop?.());
            }, [x]),
            v = (0, h.useCallback)(() => {
              if (p.current) {
                let e = Array.from(p.current.children);
                if (e.length > 0) {
                  let t = null;
                  for (let a of e) {
                    let e = a.getBoundingClientRect().height;
                    (null == t || e > t) && (t = e);
                  }
                  null != t && (p.current.style.height = `${t}px`);
                }
              }
              x && (x.reInit({ active: !0 }), b(!0));
            }, [x]),
            B = (0, h.useCallback)(() => {
              x &&
                (x.reInit({ active: !1 }),
                p.current && (p.current.style.height = "auto"),
                b(!1));
            }, [x]);
          (0, h.useEffect)(() => {
            v();
          }, [v]);
          let C = (0, h.useRef)(0),
            Q = (0, h.useRef)(null);
          return (
            (0, h.useEffect)(() => {
              let e = new AbortController(),
                t = !1;
              window.addEventListener(
                "resize",
                () => {
                  f &&
                    !t &&
                    (requestAnimationFrame(() => {
                      let e = window.innerWidth;
                      e !== C.current &&
                        ((C.current = e),
                        B(),
                        Q.current && clearTimeout(Q.current),
                        (Q.current = setTimeout(() => {
                          v();
                        }, 500))),
                        (t = !1);
                    }),
                    (t = !0));
                },
                { signal: e.signal }
              );
            }, [v, B, f]),
            (0, A.jsxs)(A.Fragment, {
              children: [
                (0, A.jsx)("div", {
                  className: (0, s.A)(
                    a.reviewsItems,
                    "embla hide-phone",
                    f && "is-inited"
                  ),
                  ref: _,
                  children: (0, A.jsx)("div", {
                    className: "embla__container",
                    ref: p,
                    children: m.map((e, t) =>
                      (0, A.jsx)(
                        "div",
                        {
                          className: (0, s.A)(a.review, "embla__slide"),
                          children: (0, A.jsxs)("div", {
                            className: a.reviewBody,
                            children: [
                              e.title &&
                                (0, A.jsx)("h3", {
                                  className: a.reviewTitle,
                                  children: e.title,
                                }),
                              e.description &&
                                (0, A.jsx)("div", {
                                  className: a.reviewDescription,
                                  children: e.description,
                                }),
                              (0, A.jsxs)("div", {
                                className: a.reviewAuthor,
                                children: [
                                  e.image &&
                                    (0, A.jsx)(g.default, {
                                      src: e.image,
                                      alt: "",
                                      className: a.reviewAuthorImage,
                                    }),
                                  (0, A.jsxs)("div", {
                                    className: a.reviewAuthorBody,
                                    children: [
                                      e.company &&
                                        (0, A.jsx)("div", {
                                          className: a.reviewAuthorPosition,
                                          children: e.company,
                                        }),
                                      (0, A.jsx)("div", {
                                        className: a.reviewAuthorName,
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                }),
                (0, A.jsx)("div", {
                  className: (0, s.A)(a.reviewsItems, "hide-phone-up"),
                  children: m.slice(0, 4).map((e, t) =>
                    (0, A.jsx)(
                      "div",
                      {
                        className: a.review,
                        children: (0, A.jsxs)("div", {
                          className: a.reviewBody,
                          children: [
                            e.title &&
                              (0, A.jsx)("h3", {
                                className: a.reviewTitle,
                                children: e.title,
                              }),
                            e.description &&
                              (0, A.jsx)("div", {
                                className: a.reviewDescription,
                                children: e.description,
                              }),
                            (0, A.jsxs)("div", {
                              className: a.reviewAuthor,
                              children: [
                                e.image &&
                                  (0, A.jsx)(g.default, {
                                    src: e.image,
                                    alt: "",
                                    className: a.reviewAuthorImage,
                                  }),
                                (0, A.jsxs)("div", {
                                  className: a.reviewAuthorBody,
                                  children: [
                                    e.company &&
                                      (0, A.jsx)("div", {
                                        className: a.reviewAuthorPosition,
                                        children: e.company,
                                      }),
                                    (0, A.jsx)("div", {
                                      className: a.reviewAuthorName,
                                      children: e.name,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
                (0, A.jsxs)("div", {
                  className: a.reviewsControls,
                  children: [
                    (0, A.jsx)(n.$, {
                      variant: "outline",
                      className: a.blogControlsNavButton,
                      onClick: w,
                      children: (0, A.jsx)(i.A, {}),
                    }),
                    (0, A.jsx)(u.N, {
                      href: t.hrefs.reviews,
                      children: (0, A.jsx)(n.$, {
                        className: a.reviewsControlsButton,
                        children: t.index.reviews.all,
                      }),
                    }),
                    (0, A.jsx)(n.$, {
                      variant: "outline",
                      className: a.blogControlsNavButton,
                      onClick: I,
                      children: (0, A.jsx)(l.A, {}),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    1502: (e, t, a) => {
      "use strict";
      a.d(t, { Tilt: () => s });
      var A = a(5155),
        r = a(3463),
        i = a(2115),
        l = a(9870),
        n = a.n(l);
      let s = (e) => {
        let { component: t, className: a, children: l, ...s } = e,
          o = (0, i.useRef)(null),
          d = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e;
            if (!o.current || !d.current) return;
            let t = o.current,
              a = !1,
              A = (e) => e * (2 - e),
              r = (r, i, l, n, s) => {
                let o = performance.now(),
                  d = (c) => {
                    let u = Math.min((c - o) / s, 1),
                      g = A(u);
                    t.style.setProperty("--xv", (r + (l - r) * g).toString()),
                      t.style.setProperty("--yv", (i + (n - i) * g).toString()),
                      u < 1 ? (e = requestAnimationFrame(d)) : (a = !1);
                  };
                (a = !0),
                  cancelAnimationFrame(e),
                  (e = requestAnimationFrame(d));
              },
              i = new AbortController();
            return (
              t.addEventListener(
                "mousemove",
                function (e) {
                  if (a) return;
                  let A = t.getBoundingClientRect(),
                    i =
                      parseFloat(
                        getComputedStyle(t).getPropertyValue("--se")
                      ) || 0,
                    l = e.clientX - A.left,
                    n = ((e.clientY - A.top) / A.height - 0.5) * i,
                    s = (l / A.width - 0.5) * i;
                  r(
                    parseFloat(getComputedStyle(t).getPropertyValue("--xv")) ||
                      0,
                    parseFloat(getComputedStyle(t).getPropertyValue("--yv")) ||
                      0,
                    n,
                    s,
                    100
                  );
                },
                { signal: i.signal }
              ),
              t.addEventListener(
                "mouseleave",
                () => {
                  r(
                    parseFloat(getComputedStyle(t).getPropertyValue("--xv")) ||
                      0,
                    parseFloat(getComputedStyle(t).getPropertyValue("--yv")) ||
                      0,
                    0,
                    0,
                    200
                  );
                },
                { signal: i.signal }
              ),
              () => {
                i.abort();
              }
            );
          }, []),
          (0, A.jsxs)(t || "div", {
            ref: o,
            className: (0, r.A)(n().container, "tiltContainer", a),
            ...s,
            children: [
              (0, A.jsx)("div", {
                className: (0, r.A)(n().tilt, "tiltContent"),
                children: l,
              }),
              (0, A.jsx)("div", { ref: d, className: n().glow }),
            ],
          })
        );
      };
    },
    8448: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => s });
      var A = a(5155),
        r = a(3463),
        i = a(2115),
        l = a(5533),
        n = a.n(l);
      let s = (0, i.forwardRef)((e, t) => {
        let {
          className: a,
          children: i,
          type: l = "button",
          variant: s = "filled",
          ...o
        } = e;
        return (0, A.jsxs)("button", {
          ref: t,
          className: (0, r.A)(n().button, a),
          "data-variant": s,
          type: l,
          ...o,
          children: [
            (0, A.jsx)("span", { className: n().bg }),
            (0, A.jsx)("span", { className: n().content, children: i }),
          ],
        });
      });
      s.displayName = "Button";
    },
    441: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => r });
      let A = 0;
      function r(e) {
        if (e && 0 === A) {
          let e = window.scrollY;
          (document.body.style.position = "fixed"),
            (document.body.style.top = `-${e}px`),
            (document.body.style.overscrollBehavior = "none"),
            (document.body.style.overflowY = "scroll");
        } else if (!e && 1 === A) {
          let e = document.body.style.top;
          (document.body.style.position = ""),
            (document.body.style.top = ""),
            (document.body.style.overscrollBehavior = ""),
            window.scrollTo(0, -1 * parseInt(e || "0")),
            (document.body.style.overflowY = "");
        }
        e ? (A += 1) : A > 0 && (A -= 1);
      }
    },
    9653: (e) => {
      e.exports = {
        popup: "OctoClickPopup_popup__22MLs",
        close: "OctoClickPopup_close__8e9VP",
        is_open: "OctoClickPopup_is_open__ZvO_S",
        body: "OctoClickPopup_body__kvxWs",
        borderMask: "OctoClickPopup_borderMask__w7tUy",
        border: "OctoClickPopup_border__Ca2zj",
        title: "OctoClickPopup_title__sLZA4",
        text: "OctoClickPopup_text__jG61X",
        action: "OctoClickPopup_action__P_3oe",
        actionInner: "OctoClickPopup_actionInner___M5c_",
        image: "OctoClickPopup_image__jM1Y9",
        image__item1: "OctoClickPopup_image__item1__Ga4Q_",
        floatItem1: "OctoClickPopup_floatItem1__Oy8Aq",
        image__item2: "OctoClickPopup_image__item2__kt_Id",
        floatItem2: "OctoClickPopup_floatItem2__UAKgC",
      };
    },
    3147: (e) => {
      e.exports = {
        ball: "AnimatedGradient_ball__nz_wy",
        loop: "AnimatedGradient_loop__2DU43",
        glowContainer: "AnimatedGradient_glowContainer__6vz7D",
      };
    },
    5253: (e) => {
      e.exports = {
        page: "IndexPage_page__da8bK",
        contentVisibility_visible: "IndexPage_contentVisibility_visible__AEWPq",
        pageBlock: "IndexPage_pageBlock__yLsJ2",
        mainWrapper: "IndexPage_mainWrapper__V6uad",
        main: "IndexPage_main__Nf9ts",
        mainContainer: "IndexPage_mainContainer__ekH7j",
        mainTitle: "IndexPage_mainTitle__ysDxK",
        mainDescription: "IndexPage_mainDescription__8M0Lb",
        mainButtons: "IndexPage_mainButtons__sxVlt",
        mainButton: "IndexPage_mainButton___xVAG",
        videoButton: "IndexPage_videoButton__BhvTy",
        mainIllustrations: "IndexPage_mainIllustrations__ExWgg",
        mainGradient: "IndexPage_mainGradient__opDMn",
        mainCard1: "IndexPage_mainCard1__Eoz0x",
        floatCard1: "IndexPage_floatCard1__UASoX",
        mainCard2: "IndexPage_mainCard2__0srMr",
        floatCard2: "IndexPage_floatCard2__11vqm",
        mainCard3: "IndexPage_mainCard3__D_hPZ",
        floatCard3: "IndexPage_floatCard3__owuQV",
        mainCard4: "IndexPage_mainCard4__Zh7Bu",
        floatCard4: "IndexPage_floatCard4__RO1dx",
        mainCard4md: "IndexPage_mainCard4md__LIa4d",
        mainLines1: "IndexPage_mainLines1__mOfgJ",
        rotateLines: "IndexPage_rotateLines__k2hw0",
        mainLines2: "IndexPage_mainLines2__u2Toh",
        features: "IndexPage_features__7Cirr",
        featuresContainer: "IndexPage_featuresContainer__Y11_u",
        featureWrapper: "IndexPage_featureWrapper__b9V1y",
        feature: "IndexPage_feature__9PDdP",
        featureBody: "IndexPage_featureBody__2zTSe",
        featureTag: "IndexPage_featureTag__UWk__",
        featureContent: "IndexPage_featureContent___P98S",
        featureTitle: "IndexPage_featureTitle__b_szX",
        featureDescription: "IndexPage_featureDescription__ONRtr",
        featureBg: "IndexPage_featureBg___HB2w",
        verticals: "IndexPage_verticals__BUjWa",
        verticalsInner: "IndexPage_verticalsInner__G5Ds1",
        verticalsTitle: "IndexPage_verticalsTitle__towPJ",
        verticalsDescription: "IndexPage_verticalsDescription__V4X8o",
        verticalsSplit: "IndexPage_verticalsSplit__mZ_BY",
        verticalsCardWrapper: "IndexPage_verticalsCardWrapper__C1YXo",
        verticalsCard: "IndexPage_verticalsCard__ZUSBw",
        verticalsCardPicture: "IndexPage_verticalsCardPicture__tVjY3",
        verticalsCardBg: "IndexPage_verticalsCardBg__x_Hxu",
        verticalsCardGradient: "IndexPage_verticalsCardGradient__DtqB3",
        verticalsItems: "IndexPage_verticalsItems__YJeWF",
        vertical: "IndexPage_vertical__3pJJZ",
        verticalSparkle: "IndexPage_verticalSparkle__yNDsd",
        verticalImageWrapper: "IndexPage_verticalImageWrapper__t75r7",
        "gradient-angle": "IndexPage_gradient-angle__drLib",
        verticalImage: "IndexPage_verticalImage__76Pvp",
        verticalImageCard: "IndexPage_verticalImageCard__1noMI",
        verticalBody: "IndexPage_verticalBody__AJ8TE",
        verticalTitle: "IndexPage_verticalTitle__vdffX",
        verticalDescription: "IndexPage_verticalDescription__R068w",
        payments: "IndexPage_payments___GgKz",
        paymentsInner: "IndexPage_paymentsInner__aw_Bi",
        paymentsTitle: "IndexPage_paymentsTitle__CJMyE",
        paymentsDescription: "IndexPage_paymentsDescription__cmvaj",
        paymentsItems: "IndexPage_paymentsItems__oZBHe",
        paymentWrapper: "IndexPage_paymentWrapper__vjW6f",
        payment_big: "IndexPage_payment_big__akLPr",
        payment: "IndexPage_payment__wZF9_",
        paymentDescription: "IndexPage_paymentDescription__CbghR",
        paymentContent: "IndexPage_paymentContent__AVSkB",
        paymentImage: "IndexPage_paymentImage__xRkEO",
        paymentButton: "IndexPage_paymentButton__bB_pp",
        paymentBg: "IndexPage_paymentBg__cmhgP",
        paymentGradient: "IndexPage_paymentGradient__Gq9TE",
        paymentBody: "IndexPage_paymentBody__sqWLU",
        paymentTitle: "IndexPage_paymentTitle__vLvWI",
        offers: "IndexPage_offers__ygnuy",
        offersInner: "IndexPage_offersInner__oyYkG",
        offersTitle: "IndexPage_offersTitle__PMKDF",
        offersDescription: "IndexPage_offersDescription__QuWcP",
        offersItems: "IndexPage_offersItems__Ok0Os",
        offer: "IndexPage_offer__sKbV0",
        offerBorderHover: "IndexPage_offerBorderHover__mv96W",
        offerBorder: "IndexPage_offerBorder__VZ3TM",
        offerBorderMask: "IndexPage_offerBorderMask__f_BST",
        offerContent: "IndexPage_offerContent__TbPiN",
        offerImage: "IndexPage_offerImage__9tdLY",
        offerImageSpoilerCanvas: "IndexPage_offerImageSpoilerCanvas__Spa7o",
        offerImageSpoiler: "IndexPage_offerImageSpoiler__imiIM",
        offerImageSpoilerDot: "IndexPage_offerImageSpoilerDot__NPrV8",
        offerImageSpoilerDotMove: "IndexPage_offerImageSpoilerDotMove__pDto8",
        offerBody: "IndexPage_offerBody__f7il8",
        offerSpecs: "IndexPage_offerSpecs__ruyUG",
        offerSpec: "IndexPage_offerSpec__y_OIt",
        offerSpecTag: "IndexPage_offerSpecTag__wlzwp",
        offerSpecValue: "IndexPage_offerSpecValue__u1rmO",
        offerGeos: "IndexPage_offerGeos__iWuCY",
        offerGeo: "IndexPage_offerGeo__iI_ut",
        offerGeoCC: "IndexPage_offerGeoCC__0Azp5",
        offersControls: "IndexPage_offersControls__uveP_",
        offersControlsNavButton: "IndexPage_offersControlsNavButton__tyJtY",
        offersControlsLinkButton: "IndexPage_offersControlsLinkButton__YGtpq",
        offersSkeleton: "IndexPage_offersSkeleton__Cq8n4",
        offersSkeletonItem: "IndexPage_offersSkeletonItem__lDGdc",
        offerSkeletonShine: "IndexPage_offerSkeletonShine__SCcsl",
        
        reviews: "IndexPage_reviews__wRMYN",
        reviewsTitle: "IndexPage_reviewsTitle__126H_",
        reviewsDescription: "IndexPage_reviewsDescription__d6ZaM",
        reviewsItems: "IndexPage_reviewsItems__0BOsB",
        review: "IndexPage_review__JC5cd",
        reviewBody: "IndexPage_reviewBody__VB_Vc",
        reviewTitle: "IndexPage_reviewTitle__qtAIx",
        reviewDescription: "IndexPage_reviewDescription__XgYKV",
        reviewAuthor: "IndexPage_reviewAuthor__M3nXC",
        reviewAuthorBalls: "IndexPage_reviewAuthorBalls__A4XoD",
        reviewAuthorImage: "IndexPage_reviewAuthorImage__v_MvS",
        reviewAuthorBody: "IndexPage_reviewAuthorBody__EuwNL",
        reviewAuthorPosition: "IndexPage_reviewAuthorPosition__Mcetn",
        reviewAuthorName: "IndexPage_reviewAuthorName__BIfgV",
        reviewsControls: "IndexPage_reviewsControls__mvwfb",
        reviewsControlsButton: "IndexPage_reviewsControlsButton__SlasK",
        contactWrapper: "IndexPage_contactWrapper__Wk5su",
        contact: "IndexPage_contact__VqOJZ",
        contactForm: "IndexPage_contactForm__4FevT",
        contactFormTitle: "IndexPage_contactFormTitle__Yn1nS",
        contactFormDescription: "IndexPage_contactFormDescription__6U2m8",
        contactFormFields: "IndexPage_contactFormFields__1JcHV",
        contactFormField: "IndexPage_contactFormField___BIsc",
        contactFormSubmit: "IndexPage_contactFormSubmit__SoxBk",
        contactIllustrations: "IndexPage_contactIllustrations__MZbiq",
        contactCard1: "IndexPage_contactCard1__ZPBB7",
        contactCard2: "IndexPage_contactCard2___MC9_",
        contactCard3: "IndexPage_contactCard3__sPbgy",
        contactCard4: "IndexPage_contactCard4__eXu3t",
        contactLines1: "IndexPage_contactLines1__Oz_Lf",
        contactLines2: "IndexPage_contactLines2__Me7Hm",
        partners: "IndexPage_partners__NpPlr",
        partnersTitle: "IndexPage_partnersTitle__bovdJ",
        partnersItems: "IndexPage_partnersItems__uvhbq",
        partnersItemsWrapper: "IndexPage_partnersItemsWrapper__pm84N",
        partner: "IndexPage_partner__lb9yT",
        partnerImageWrapper: "IndexPage_partnerImageWrapper__QEmPs",
      };
    },
    1133: (e) => {
      e.exports = {
        wrapper: "IndexVideo_wrapper__fhGu3",
        is_open: "IndexVideo_is_open__M7PGi",
        window: "IndexVideo_window__1KunK",
        video: "IndexVideo_video__7jGvX",
        close: "IndexVideo_close__k0beX",
      };
    },
    9870: (e) => {
      e.exports = {
        container: "Tilt_container__21HMb",
        tilt: "Tilt_tilt__Jm5sL",
        glow: "Tilt_glow__kEKG3",
      };
    },
    5533: (e) => {
      e.exports = {
        button: "Button_button__oEw4J",
        bg: "Button_bg__xhMYE",
        content: "Button_content__nFTtF",
      };
    },
    43: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard1.d71faa70.webp",
        height: 568,
        width: 1002,
        blurDataURL:
          "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSA0AAAABD/Dx/4iIMIAR/Y8IAFZQOCA4AAAA0AEAnQEqCAAFAAJAOCWYAnQA9Hqq+QAA/vysuXo+OoaeSsviq6lbAL19PlToq+iTrjrB2VaAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    446: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard1md.92ec80b5.webp",
        height: 426,
        width: 690,
        blurDataURL:
          "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAACwwRHztZbWcLCRQuV4bb+QsKGjxuqP/+DAscQXay//4NDh09a5n11gBWUDggQgAAANABAJ0BKggABQACQDglsAJ0APSYs62AAP7Yf5bopU1UQdBM50nXjwi/oruD48xdzLfGGr23O7c8fud5BQ2RHzCQAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    4923: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard1sm.07d45725.webp",
        height: 417,
        width: 791,
        blurDataURL:
          "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAA4v///////+X9//////////z/////////4f39/f39/eMAVlA4IDQAAADQAQCdASoIAAQAAkA4JbACdAD0h/vOAAD+/Ky7O4lxzRq0KrqdSWSF3Owsg/4xsit6rIAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    6234: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard2.c8708f33.webp",
        height: 568,
        width: 1430,
        blurDataURL:
          "data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSA0AAAABD/D6/4iIMIER/Y8CAFZQOCAyAAAAcAEAnQEqCAADAAJAOCWoAnQBiEAA/vev/Xa0q53euvfmU2iNaHJho72eB2Yp9gwAAAA=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    3287: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard2md.6dc402b7.webp",
        height: 427,
        width: 691,
        blurDataURL:
          "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAADQ4PFjNce4sMCg4sa6XL/wsJF1Kl1PX/Cwkfa7/l//8NDSFqvPP92ABWUDggQgAAALABAJ0BKggABQACQDglqAJ0APRsPuAA/uvHv/3/5aqXRiT8KJ5ImKiYoWBcO3PwkdW8NNAmYwB2rj/J3OV9sAAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    7526: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard2sm.b587c3c9.webp",
        height: 418,
        width: 791,
        blurDataURL:
          "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAA3vr6+vr6+uD9//////////z/////////4////////+YAVlA4IDQAAADQAQCdASoIAAQAAkA4JZgCdAD0h/vOAAD+/Ky9WxDh+KqrjOsIqlsPLVnM6LysK+E1wAAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    3977: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard3.0767f3fc.webp",
        height: 568,
        width: 1422,
        blurDataURL:
          "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSA0AAAABD/D6/4iIMIER/Y8CAFZQOCAqAAAAsAEAnQEqCAADAAJAOCUAToAh30xEQAD+/Kvi3isLJIq/g9/N8/DviAAA",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    4548: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard3md.778ed576.webp",
        height: 427,
        width: 690,
        blurDataURL:
          "data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAACwoLES9hjY4LCQogXJ3K+AsIDziHv/j+DAgSSaHu//4NDBVJwOT91QBWUDggPgAAALABAJ0BKggABQACQDglAE6AHo9VXyAA/vZ/zqT85YPadW8hUoQ2/W5wRU5SKWiLSZkUTJIySVaSTuJOh8AA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    1917: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard3sm.1665e8c3.webp",
        height: 418,
        width: 791,
        blurDataURL:
          "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAA3vr6+vr7++H9//////////z/////////4////////+UAVlA4IC4AAADQAQCdASoIAAQAAkA4JQBOgCHgGAJoAAD+/KxrKdLOmjNiHWCL+b5+jXSUEgAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9928: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard4.fc1628d0.webp",
        height: 568,
        width: 1010,
        blurDataURL:
          "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSBIAAAABF3D2/4iIQiCb4i+yIvofDQ1WUDggMAAAANABAJ0BKggABAACQDglmAJ0AQ8ApVwAAP78rHRM6gUWXLEcjtse7mdF2D9oKQwAAA==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    4565: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard4md.b38702dd.webp",
        height: 426,
        width: 691,
        blurDataURL:
          "data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAACgoNH0qSnXkKCBM/gbb97gsJHl+iyP//CwklbKu95f8NDSNjpLu/ugBWUDggRgAAANABAJ0BKggABQACQDglsAJ0APSM727AAP7in7ZDrXfDLstcs9qqo3i2NUOVFTScoGAW5hf+Nuxr7RHzqQP8X7cEAO9AAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    9856: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/featureCard4sm.bf0cf462.webp",
        height: 418,
        width: 791,
        blurDataURL:
          "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAA3vv7+/v7++H9//////////z/////////4v///////+UAVlA4IDQAAADQAQCdASoIAAQAAkA4JZACdAD0jIEeYAD+/Ky9WfvalwBEoZgW8NMfLVnM6LysK9JMAAAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    4564: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/mainCard1.0f975c6c.webp",
        height: 394,
        width: 394,
        blurDataURL:
          "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAABRCPSkWAgACXmVnZGdiFhVjaKahg2hFJ2BzoaGGZT82XYCannVhKzdaepuiY1wYEE9XV1pYVAIAAREiMzgTAABWUDggRAAAABACAJ0BKggACAACQDglAE6AxTfkTBSwsiAA/viqtItuVBv079Uy2WzPhLzV5A/DjfilLRsO+Omd44H6O8ywda56wAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    4409: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/mainCard2.25f9beee.webp",
        height: 245,
        width: 245,
        blurDataURL:
          "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEEChEWBwAHDxEXGyAcAQ8LMFUxHBoIDwpYbksxFwwNCiZOYl8VDgsKCyhcNBIOAw8KDQ4PEAUABggHBQQBAABWUDggXAAAANACAJ0BKggACAACQDglnALsBcgH8r3wD9QDVCdEmgAA/vC2JsN02dfq9vyweOmZCvIurqGaTvHiFO506XM4LZrxUtLnr3hS70rNOpJx4eMDoUo6ukn622MksAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6666: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/Infobiz_En.b165a95d.webp",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JbACdADyf/7UAOJ73PMeTghRYSwxa32MbSaWy1PGPjvkSMT9UCAP/ji40pL+muxSX++TocAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    1704: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard1Bg.95a81182.webp",
        height: 868,
        width: 1334,
        blurDataURL:
          "data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAACgsODxA9YSQMEBUh3P//9w4TGUj+////DBAVdP7///8KCw5d/v//7gBWUDggRgAAAPABAJ0BKggABQACQDglsAJ0ugACunyUQAD+/Pca4H88ZoDzr1gRVKj27tb8pM5Dh4OpqO+eyv/eF7t8O+FpAmK3zuYAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    4245: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard1BgMd.fdf292b9.webp",
        height: 740,
        width: 1406,
        blurDataURL:
          "data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAACgwPEBAPEQsNEhcbG6T34g0SFxsn+f//CgwPECf///UAVlA4IEAAAADQAQCdASoIAAQAAkA4JbACdAEXfofEXAD+/YmDXzfBrETtECUMKIStX2ICflZSoUkPyZSkpv+UXvLQVlG1AAAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    8416: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard1BgSm.fd887606.webp",
        height: 868,
        width: 842,
        blurDataURL:
          "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAANYBPZtpPzI6GPHpIPhooaoehABxbeuzYiIvoQIi6FkABTSEQci8TmPocXeFa4HD+AIGMFkOxf4AMAVlA4IFAAAAAQAgCdASoIAAgAAkA4JbACdLoAAwk1u8JIAP79P2H1PskWyNbqLqp8gXFMxP+qNS1/pt6xNjETS1A8Yrl6ifRHmUbw9xtoR672anJe3dgAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6297: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard2Bg.af7f9731.webp",
        height: 414,
        width: 1096,
        blurDataURL:
          "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAQEdHR0djcEBHRUVFRZK0SUBHR0dHibBBAFZQOCAsAAAAkAEAnQEqCAADAAJAOCULwADeAHMAAP74CqXcdSfV98Da8jgvJSCKdAh+wAA=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    6884: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard2BgMd.affcc22c.webp",
        height: 502,
        width: 692,
        blurDataURL:
          "data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAO0dHR0dHRztHRUVFRUVFR0dFRUVFRlBLR0VFRUVt85RHRUVFRV/kmztHR0dHg/3FAFZQOCA4AAAA0AEAnQEqCAAGAAJAOCWoAnQBDwE/15AA/vxKu8ADrPxyow9edaxYSsC/8LkLctfAbQXdDoqrgAA=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    8989: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard2BgSm.da3870a5.webp",
        height: 502,
        width: 848,
        blurDataURL:
          "data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAO0dHR0dHR0BHRUVFRUWR/UdFRUVFSJT/R0VFRUVLjPA7R0dHR0jKzABWUDggOAAAANABAJ0BKggABQACQDglqAJ0APSH+84AAP78S3rp/TrBJL0uIGBBoCa/o8S4XnrrDr+K5sWefcAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    5142: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard3Bg.a8b5b876.webp",
        height: 414,
        width: 1096,
        blurDataURL:
          "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAQEdHR0dNh0hHRUVFRYHyW0BHR0dHaYxMAFZQOCAuAAAAUAEAnQEqCAADAAJAOCUAToAxCAD+981c3HV8R/XY5iCcCwva9SQ4QrSeNIkAAA==",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    8243: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard3BgMd.ac222c7a.webp",
        height: 502,
        width: 692,
        blurDataURL:
          "data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAO0dHR0dHRztHRUVFRUVFR0dFRUVFRUdJR0VFRUVV4tZHRUVFRX/4xztHR0dHeuCtAFZQOCA4AAAA0AEAnQEqCAAGAAJAOCWwAnQBDwDAE0AA/vxKxYqzSLhXT8DY/3n3HGHhGIW5a+A2gu6HRVkoAAA=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    458: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/paymentCard3BgSm.1f848703.webp",
        height: 502,
        width: 848,
        blurDataURL:
          "data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAO0dHR0dHRztHRUVFRUVo3EdFRUVFR67/R0VFRUVbt/87R0dHR0m9uABWUDggPgAAANABAJ0BKggABQACQDgloAJ0APR6cuAAAP78S3Z6xGTgOHOB25J4fGIIAJLuLClKJUB3e5HySRwlwc8iAAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    2663: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
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
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/review4.e2f62ce8.webp",
        height: 426,
        width: 440,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAgAAkA4JQBOgBu1m0zRAAD+6lZH2+oQEFq9uSL7LtJHTPj/tJEu+ybSlfttXErkQmktYmo5IxrCTrNG0u2IpQQAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    7346: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalItem1.2ef68108.webp",
        height: 253,
        width: 253,
        blurDataURL:
          "data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYFNbe5OXMkVFQlMRWxwEtBEsRBpTN9CZONEQERNArLU/w/j2gDvK6nNQfF19FKDDPgUNGO8NkVZQOCA8AAAA0AEAnQEqCAAIAAJAOCWcNsF70DrAGUAA/vIoWcoj9rt3l9VNAi/zLcU850BnQK9I9p7ioktl85dpwOAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    3731: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalItem2.1d587699.webp",
        height: 254,
        width: 253,
        blurDataURL:
          "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYBrbViNUlkhKwYGkFhz94CgAh8Intx3sbBuRUENETADYhIpP5HnHwR49DD4XN6Tn0gMQhk2mAFZQOCA0AAAAkAEAnQEqCAAIAAJAOCWcNtUUEAigAP7w6Yb+HCG5P8D6/Iiyv2Rv1XHfdJKggEh92JwAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1743: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalItem3.9f3133d8.webp",
        height: 254,
        width: 253,
        blurDataURL:
          "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYFNr25IHndyJwUYJIvno0oUcbMzWgQb/IUNETAA/9UKgdK3AOL/RBFjeY5OAdL8vF0jyzOcnAFZQOCA2AAAA0AEAnQEqCAAIAAJAOCWkOtMyoELAHYAA/vLtf/WkDLRN/F/unnMOZIQUATvP1/v9w3mEQAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    325: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalItem4.ada8b2aa.webp",
        height: 254,
        width: 253,
        blurDataURL:
          "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYFRr24znnH81/z8NKCGERNYaqGAnxizCGECIaeeIEBHJj6bNqhTEcr1vCfm5HnMCbqiLGMBLwRcAVlA4IDQAAACQAQCdASoIAAgAAkA4JZw21RQQCKAA/vD7pA6J/7PZNO1pLVnnjGFacmGrxlAqvZqnlqAA",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1739: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalItemCard.0a58ed08.webp",
        height: 253,
        width: 253,
        blurDataURL:
          "data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDoAAAABmTJE9D8sbCNJcvJonX+YuBrSGNS+dWcRQMQERLEAJFKHawWcYgMEuGQIxzMIcOVAOG4YEJkM9AtGVlA4IEgAAAAQAgCdASoIAAgAAkA4JYwCdAYuvyJmDdeoAP7+DD/TvG826KBRAlufbY2dkFJlIX43r+rwISnWZZYcRwHxcog3/2qaMpNMAAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    416: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalsCardBg.0a4f4a8c.webp",
        height: 1146,
        width: 1304,
        blurDataURL:
          "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSCEAAAABH6AgbQMWtjsREVdhkG2kndlJnM8gnvKJIvofHEWMcQ8AVlA4ICYAAACwAQCdASoIAAcAAkA4JaQAAup2YeEAAP79+aJHrnhFANyi9qoAAA==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    4365: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalsCardBgMd.9684b446.webp",
        height: 1016,
        width: 616,
        blurDataURL:
          "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSBwAAAABH6AgbQMWtjsREVdBJm3Tdv7PeY/ofxAikdkHVlA4ICIAAACwAQCdASoFAAgAAkA4JaQAAudLfxAAAP7+McGrVOHHuAAA",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
    105: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalsCardPicture.112a4f45.webp",
        height: 1102,
        width: 1266,
        blurDataURL:
          "data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAEltMOzMHeBUe6EctbjvYPE9gOoe9WVwiOJEg1b1l9HFF8XusbGj0DCTy4gV4RP9SAH6TEWpAYxYAVlA4IFYAAADQAQCdASoIAAcAAkA4JZgCdAD0Vzwp9AD+98d4hz/PAcsPHfmO7u4P/CIaBxk4EbNiZlL7k6lcaEQUizRugLZivggeKvV/0Lwv+TEDZtAbrlGUcdAAAA==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    6420: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      let A = {
        src: "/_next/static/media/verticalsCardPictureMd.3db11168.webp",
        height: 998,
        width: 628,
        blurDataURL:
          "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSCkAAAAAEjwIFykkFDlBOGIhLTcUUhL3ay5ASf+IizlWBhpoO+8MQRgYNBpjHABWUDggRAAAALABAJ0BKgUACAACQDglAE6AHpbS7xQA/vqT6icM/nWiKbdyUWFyrvlGqmWlb/3gLiXW1wCTyTfs5XAe6X6cN0GIRgAA",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
    7220: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      let A = {
        direction: "forward",
        speed: 2,
        startDelay: 1e3,
        active: !0,
        breakpoints: {},
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        rootNode: null,
      };
      function r(e = {}) {
        let t, a, i, l, n;
        let s = 0,
          o = !1,
          d = !1;
        function c() {
          if (i || o) return;
          a.emit("autoScroll:play");
          let e = a.internalEngine(),
            { ownerWindow: A } = e;
          (s = A.setTimeout(() => {
            (e.scrollBody = (function (e) {
              let {
                  location: A,
                  previousLocation: r,
                  offsetLocation: i,
                  target: l,
                  scrollTarget: n,
                  index: s,
                  indexPrevious: o,
                  limit: { reachedMin: d, reachedMax: c, constrain: g },
                  options: { loop: h },
                } = e,
                m = "forward" === t.direction ? -1 : 1,
                p = () => I,
                f = 0,
                b = 0,
                _ = A.get(),
                x = 0,
                w = !1,
                I = {
                  direction: () => b,
                  duration: () => -1,
                  velocity: () => f,
                  settled: () => w,
                  seek: function () {
                    r.set(A),
                      (f = m * t.speed),
                      (_ += f),
                      A.add(f),
                      l.set(A),
                      (b = Math.sign(_ - x)),
                      (x = _);
                    let e = n.byDistance(0, !1).index;
                    s.get() !== e &&
                      (o.set(s.get()), s.set(e), a.emit("select"));
                    let p = "forward" === t.direction ? d(i.get()) : c(i.get());
                    if (!h && p) {
                      w = !0;
                      let e = g(A.get());
                      A.set(e), l.set(A), u();
                    }
                    return I;
                  },
                  useBaseFriction: p,
                  useBaseDuration: p,
                  useFriction: p,
                  useDuration: p,
                };
              return I;
            })(e)),
              e.animation.start();
          }, l)),
            (o = !0);
        }
        function u() {
          if (i || !o) return;
          a.emit("autoScroll:stop");
          let e = a.internalEngine(),
            { ownerWindow: t } = e;
          (e.scrollBody = n), t.clearTimeout(s), (s = 0), (o = !1);
        }
        function g() {
          d || u();
        }
        function h() {
          d || b();
        }
        function m() {
          (d = !0), u();
        }
        function p() {
          (d = !1), c();
        }
        function f() {
          a.off("settle", f), c();
        }
        function b() {
          a.on("settle", f);
        }
        return {
          name: "autoScroll",
          options: e,
          init: function (s, o) {
            a = s;
            let { mergeOptions: d, optionsAtMedia: f } = o,
              b = d(A, r.globalOptions);
            if (((t = f(d(b, e))), a.scrollSnapList().length <= 1)) return;
            (l = t.startDelay), (i = !1), (n = a.internalEngine().scrollBody);
            let { eventStore: _ } = a.internalEngine(),
              x = !!a.internalEngine().options.watchDrag,
              w = (function (e, t) {
                let a = e.rootNode();
                return (t && t(a)) || a;
              })(a, t.rootNode);
            x && a.on("pointerDown", g),
              x && !t.stopOnInteraction && a.on("pointerUp", h),
              t.stopOnMouseEnter && _.add(w, "mouseenter", m),
              t.stopOnMouseEnter &&
                !t.stopOnInteraction &&
                _.add(w, "mouseleave", p),
              t.stopOnFocusIn && a.on("slideFocusStart", u),
              t.stopOnFocusIn &&
                !t.stopOnInteraction &&
                _.add(a.containerNode(), "focusout", c),
              t.playOnInit && c();
          },
          destroy: function () {
            a
              .off("pointerDown", g)
              .off("pointerUp", h)
              .off("slideFocusStart", u)
              .off("settle", f),
              u(),
              (i = !0),
              (o = !1);
          },
          play: function (e) {
            void 0 !== e && (l = e), c();
          },
          stop: function () {
            o && u();
          },
          reset: function () {
            o && (u(), b());
          },
          isPlaying: function () {
            return o;
          },
        };
      }
      r.globalOptions = void 0;
    },
    2750: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      let A = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null,
      };
      function r(e = {}) {
        let t, a, i, l;
        let n = null,
          s = 0,
          o = !1,
          d = !1,
          c = !1,
          u = !1;
        function g() {
          if (!i) {
            if (p()) {
              c = !0;
              return;
            }
            o || a.emit("autoplay:play"),
              (function () {
                let { ownerWindow: e } = a.internalEngine();
                e.clearTimeout(s),
                  (s = e.setTimeout(w, l[a.selectedScrollSnap()])),
                  (n = new Date().getTime()),
                  a.emit("autoplay:timerset");
              })(),
              (o = !0);
          }
        }
        function h() {
          i ||
            (o && a.emit("autoplay:stop"),
            (function () {
              let { ownerWindow: e } = a.internalEngine();
              e.clearTimeout(s),
                (s = 0),
                (n = null),
                a.emit("autoplay:timerstopped");
            })(),
            (o = !1));
        }
        function m() {
          if (p()) return (c = o), h();
          c && g();
        }
        function p() {
          let { ownerDocument: e } = a.internalEngine();
          return "hidden" === e.visibilityState;
        }
        function f() {
          d || h();
        }
        function b() {
          d || g();
        }
        function _() {
          (d = !0), h();
        }
        function x() {
          (d = !1), g();
        }
        function w() {
          let { index: e } = a.internalEngine(),
            A = e.clone().add(1).get(),
            r = a.scrollSnapList().length - 1,
            i = t.stopOnLastSnap && A === r;
          if (
            (a.canScrollNext() ? a.scrollNext(u) : a.scrollTo(0, u),
            a.emit("autoplay:select"),
            i)
          )
            return h();
          g();
        }
        return {
          name: "autoplay",
          options: e,
          init: function (n, s) {
            a = n;
            let { mergeOptions: o, optionsAtMedia: d } = s,
              c = o(A, r.globalOptions);
            if (((t = d(o(c, e))), a.scrollSnapList().length <= 1)) return;
            (u = t.jump),
              (i = !1),
              (l = (function (e, t) {
                let a = e.scrollSnapList();
                return "number" == typeof t ? a.map(() => t) : t(a, e);
              })(a, t.delay));
            let { eventStore: p, ownerDocument: w } = a.internalEngine(),
              I = !!a.internalEngine().options.watchDrag,
              v = (function (e, t) {
                let a = e.rootNode();
                return (t && t(a)) || a;
              })(a, t.rootNode);
            p.add(w, "visibilitychange", m),
              I && a.on("pointerDown", f),
              I && !t.stopOnInteraction && a.on("pointerUp", b),
              t.stopOnMouseEnter && p.add(v, "mouseenter", _),
              t.stopOnMouseEnter &&
                !t.stopOnInteraction &&
                p.add(v, "mouseleave", x),
              t.stopOnFocusIn && a.on("slideFocusStart", h),
              t.stopOnFocusIn &&
                !t.stopOnInteraction &&
                p.add(a.containerNode(), "focusout", g),
              t.playOnInit && g();
          },
          destroy: function () {
            a
              .off("pointerDown", f)
              .off("pointerUp", b)
              .off("slideFocusStart", h),
              h(),
              (i = !0),
              (o = !1);
          },
          play: function (e) {
            void 0 !== e && (u = e), g();
          },
          stop: function () {
            o && h();
          },
          reset: function () {
            o && g();
          },
          isPlaying: function () {
            return o;
          },
          timeUntilNext: function () {
            return n
              ? l[a.selectedScrollSnap()] - (new Date().getTime() - n)
              : null;
          },
        };
      }
      r.globalOptions = void 0;
    },
    5604: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      let A = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop",
      };
      function r(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean);
      }
      function i(e, t) {
        e && t.length && e.classList.remove(...t);
      }
      function l(e, t) {
        e && t.length && e.classList.add(...t);
      }
      function n(e = {}) {
        let t, a, s, o;
        let d = [],
          c = [],
          u = ["select"],
          g = ["pointerDown", "pointerUp"],
          h = ["slidesInView"],
          m = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: [],
          };
        function p(e, t) {
          ("pointerDown" === t ? l : i)(s, m.dragging);
        }
        function f(e = [], t = [], a) {
          let A = t.map((e) => o[e]),
            r = e.map((e) => o[e]);
          return A.forEach((e) => i(e, a)), r.forEach((e) => l(e, a)), e;
        }
        function b() {
          let { slideRegistry: e } = a.internalEngine();
          d = f(e[a.selectedScrollSnap()], d, m.snapped);
        }
        function _() {
          c = f(a.slidesInView(), c, m.inView);
        }
        return {
          name: "classNames",
          options: e,
          init: function (i, d) {
            a = i;
            let { mergeOptions: c, optionsAtMedia: f } = d,
              x = c(A, n.globalOptions);
            (t = f(c(x, e))), (s = a.rootNode()), (o = a.slideNodes());
            let { watchDrag: w, loop: I } = a.internalEngine().options;
            t.loop && I && ((m.loop = r(t.loop)), l(s, m.loop)),
              t.draggable &&
                w &&
                ((m.draggable = r(t.draggable)), l(s, m.draggable)),
              t.dragging &&
                ((m.dragging = r(t.dragging)), g.forEach((e) => a.on(e, p))),
              t.snapped &&
                ((m.snapped = r(t.snapped)), u.forEach((e) => a.on(e, b)), b()),
              t.inView &&
                ((m.inView = r(t.inView)), h.forEach((e) => a.on(e, _)), _());
          },
          destroy: function () {
            g.forEach((e) => a.off(e, p)),
              u.forEach((e) => a.off(e, b)),
              h.forEach((e) => a.off(e, _)),
              i(s, m.loop),
              i(s, m.draggable),
              i(s, m.dragging),
              f([], d, m.snapped),
              f([], c, m.inView),
              Object.keys(m).forEach((e) => {
                m[e] = [];
              });
          },
        };
      }
      n.globalOptions = void 0;
    },
  },
]);
