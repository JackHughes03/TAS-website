import { openBlock as A, createElementBlock as W, createElementVNode as ce, unref as c, reactive as zt, computed as q, ref as ee, toRef as an, watch as yt, h as Wa, render as qn, defineComponent as Fe, renderSlot as oe, createCommentVNode as Z, normalizeClass as De, withKeys as fe, createBlock as we, withModifiers as $e, onMounted as ze, normalizeStyle as xe, normalizeProps as Ye, mergeProps as Ee, Fragment as ke, createTextVNode as dt, toDisplayString as He, onBeforeUpdate as Ua, nextTick as pt, onUnmounted as Cn, renderList as Pe, withDirectives as en, vShow as tn, withCtx as pe, createVNode as Ke, Transition as Nt, createSlots as Ue, useSlots as Tt, guardReactiveProps as We, resolveDynamicComponent as _n, getCurrentScope as za, onScopeDispose as ja, isRef as Qn, Teleport as Ka } from "vue";
import { format as ut, isBefore as Vt, isEqual as Ct, isAfter as Lt, set as Ae, setHours as ma, setMinutes as ga, setSeconds as On, setMilliseconds as Yn, getYear as ge, getMonth as be, setMonth as Ga, setYear as rt, addMonths as Dt, subMonths as Wt, isValid as nn, parseISO as qa, eachDayOfInterval as ya, getHours as et, getMinutes as ot, getSeconds as _t, startOfWeek as pa, endOfWeek as Qa, parse as An, isDate as Za, addYears as ha, subYears as ba, addDays as wt, getDay as Xa, differenceInCalendarDays as Ja, add as ka, sub as xa, getWeek as el, getISOWeek as tl, isSameQuarter as Zn, eachQuarterOfInterval as nl, startOfYear as al, endOfYear as ll, startOfQuarter as rl, endOfQuarter as Xn, getQuarter as Jn } from "date-fns";
function Bt() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ce("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ce("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ce("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Bt.compatConfig = {
  MODE: 3
};
function wa() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ce("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
wa.compatConfig = {
  MODE: 3
};
function Nn() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function Bn() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Bn.compatConfig = {
  MODE: 3
};
function In() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ce("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
In.compatConfig = {
  MODE: 3
};
function En() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
En.compatConfig = {
  MODE: 3
};
function Fn() {
  return A(), W(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Fn.compatConfig = {
  MODE: 3
};
const Ft = 36e5, Sn = 6e4, ol = 2, sl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], il = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ul = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Be = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*)$/,
  timeZone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
}, dl = (e, t, l) => {
  const a = ln(e, l), n = Hn(t, a, !0), i = new Date(a.getTime() - n), r = /* @__PURE__ */ new Date(0);
  return r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), r.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), r;
}, cl = (e, t, l) => {
  if (typeof e == "string" && !e.match(ul)) {
    const r = $l(l);
    return r.timeZone = t, ln(e, r);
  }
  const a = ln(e, l), n = Vn(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), i = Hn(t, new Date(n));
  return new Date(n + i);
};
function Hn(e, t, l) {
  let a, n;
  if (!e || (a = Be.timezoneZ.exec(e), a))
    return 0;
  let i;
  if (a = Be.timezoneHH.exec(e), a)
    return i = parseInt(a[1], 10), ea(i) ? -(i * Ft) : NaN;
  if (a = Be.timezoneHHMM.exec(e), a) {
    i = parseInt(a[1], 10);
    const r = parseInt(a[2], 10);
    return ea(i, r) ? (n = Math.abs(i) * Ft + r * Sn, i > 0 ? -n : n) : NaN;
  }
  if (fl(e)) {
    t = new Date(t || Date.now());
    const r = l ? t : Al(t), d = Pn(r, e);
    return -(l ? d : vl(t, d, e));
  }
  return NaN;
}
const xn = {};
function fl(e) {
  if (xn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), xn[e] = !0, !0;
  } catch {
    return !1;
  }
}
function vl(e, t, l) {
  let n = e.getTime() - t;
  const i = Pn(new Date(n), l);
  if (t === i)
    return t;
  n -= i - t;
  const r = Pn(new Date(n), l);
  return i === r ? i : Math.max(i, r);
}
function ea(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
function Pn(e, t) {
  const l = ml(e, t), a = Vn(l[0], l[1] - 1, l[2], l[3] % 24, l[4], l[5], 0).getTime();
  let n = e.getTime();
  const i = n % 1e3;
  return n -= i >= 0 ? i : 1e3 + i, a - n;
}
function Vn(e, t, l, a, n, i, r) {
  const d = /* @__PURE__ */ new Date(0);
  return d.setUTCFullYear(e, t, l), d.setUTCHours(a, n, i, r), d;
}
function ml(e, t) {
  const l = gl(t);
  return l.formatToParts ? pl(l, e) : hl(l, e);
}
const gn = {};
function gl(e) {
  if (!gn[e]) {
    const t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), l = t === "06/25/2014, 00:00:00" || t === "06/25/2014 00:00:00";
    gn[e] = l ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return gn[e];
}
const yl = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function pl(e, t) {
  try {
    const l = e.formatToParts(t), a = [];
    for (let n = 0; n < l.length; n++) {
      const i = yl[l[n].type];
      i >= 0 && (a[i] = parseInt(l[n].value, 10));
    }
    return a;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function hl(e, t) {
  const l = e.format(t).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(l);
  return [a[3], a[1], a[2], a[4], a[5], a[6]];
}
function ln(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const l = t || {}, a = l.additionalDigits == null ? ol : Ml(l.additionalDigits);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  const n = Dl(e), i = wl(n.date, a), r = i.year, d = i.restDateString, M = k(d, r);
  function k(P, b) {
    if (b === null)
      return null;
    let _, Y, $, w;
    if (P.length === 0)
      return Y = /* @__PURE__ */ new Date(0), Y.setUTCFullYear(b), Y;
    if (_ = Be.MM.exec(P), _)
      return Y = /* @__PURE__ */ new Date(0), $ = parseInt(_[1], 10) - 1, na(b, $) ? (Y.setUTCFullYear(b, $), Y) : /* @__PURE__ */ new Date(NaN);
    if (_ = Be.DDD.exec(P), _) {
      Y = /* @__PURE__ */ new Date(0);
      const K = parseInt(_[1], 10);
      return bl(b, K) ? (Y.setUTCFullYear(b, 0, K), Y) : /* @__PURE__ */ new Date(NaN);
    }
    if (_ = Be.MMDD.exec(P), _) {
      Y = /* @__PURE__ */ new Date(0), $ = parseInt(_[1], 10) - 1;
      const K = parseInt(_[2], 10);
      return na(b, $, K) ? (Y.setUTCFullYear(b, $, K), Y) : /* @__PURE__ */ new Date(NaN);
    }
    if (_ = Be.Www.exec(P), _)
      return w = parseInt(_[1], 10) - 1, aa(b, w) ? ta(b, w) : /* @__PURE__ */ new Date(NaN);
    if (_ = Be.WwwD.exec(P), _) {
      w = parseInt(_[1], 10) - 1;
      const K = parseInt(_[2], 10) - 1;
      return aa(b, w, K) ? ta(b, w, K) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  if (isNaN(M))
    return /* @__PURE__ */ new Date(NaN);
  if (M) {
    const P = M.getTime();
    let b = 0, _;
    if (n.time && (b = kl(n.time), isNaN(b)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || l.timeZone) {
      if (_ = Hn(n.timeZone || l.timeZone, new Date(P + b)), isNaN(_))
        return /* @__PURE__ */ new Date(NaN);
    } else
      _ = la(new Date(P + b)), _ = la(new Date(P + b + _));
    return new Date(P + b + _);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function ta(e, t, l) {
  t = t || 0, l = l || 0;
  const a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e, 0, 4);
  const n = a.getUTCDay() || 7, i = t * 7 + l + 1 - n;
  return a.setUTCDate(a.getUTCDate() + i), a;
}
function Da(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function na(e, t, l) {
  if (t < 0 || t > 11)
    return !1;
  if (l != null) {
    if (l < 1)
      return !1;
    const a = Da(e);
    if (a && l > il[t] || !a && l > sl[t])
      return !1;
  }
  return !0;
}
function bl(e, t) {
  if (t < 1)
    return !1;
  const l = Da(e);
  return l && t > 366 ? !1 : !(!l && t > 365);
}
function aa(e, t, l) {
  return t < 0 || t > 52 ? !1 : !(l != null && (l < 0 || l > 6));
}
function yn(e, t, l) {
  return e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) ? !1 : !(l != null && (l < 0 || l >= 60));
}
function kl(e) {
  let t, l, a;
  if (t = Be.HH.exec(e), t)
    return l = parseFloat(t[1].replace(",", ".")), yn(l) ? l % 24 * Ft : NaN;
  if (t = Be.HHMM.exec(e), t)
    return l = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), yn(l, a) ? l % 24 * Ft + a * Sn : NaN;
  if (t = Be.HHMMSS.exec(e), t) {
    l = parseInt(t[1], 10), a = parseInt(t[2], 10);
    const n = parseFloat(t[3].replace(",", "."));
    return yn(l, a, n) ? l % 24 * Ft + a * Sn + n * 1e3 : NaN;
  }
  return null;
}
function wl(e, t) {
  const l = Be.YYY[t], a = Be.YYYYY[t];
  let n;
  if (n = Be.YYYY.exec(e) || a.exec(e), n) {
    const i = n[1];
    return {
      year: parseInt(i, 10),
      restDateString: e.slice(i.length)
    };
  }
  if (n = Be.YY.exec(e) || l.exec(e), n) {
    const i = n[1];
    return {
      year: parseInt(i, 10) * 100,
      restDateString: e.slice(i.length)
    };
  }
  return {
    year: null
  };
}
function Dl(e) {
  const t = {};
  let l = Be.dateTimePattern.exec(e), a;
  if (l ? (t.date = l[1], a = l[3]) : (l = Be.datePattern.exec(e), l ? (t.date = l[1], a = l[2]) : (t.date = null, a = e)), a) {
    const n = Be.timeZone.exec(a);
    n ? (t.time = a.replace(n[1], ""), t.timeZone = n[1].trim()) : t.time = a;
  }
  return t;
}
function la(e) {
  const t = ln(e), l = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return l.setUTCFullYear(t.getFullYear()), +e - +l;
}
function Ml(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  const t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function $l(e) {
  return Tl({}, e);
}
function Tl(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (const l in t)
    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
  return e;
}
function Al(e) {
  return Vn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function ra(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Sl(e) {
  return (t) => ut(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Pl = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(Sl(e));
    } catch {
      n = a.map(ra(t));
    }
  else
    n = a.map(ra(t));
  const i = n.slice(0, l), r = n.slice(l + 1, n.length);
  return [n[l]].concat(...r).concat(...i);
}, Ln = (e, t) => {
  const l = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    l.push({ value: +a, text: `${a}` });
  return t ? l.reverse() : l;
}, Ma = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const r = i < 10 ? `0${i}` : i;
    return /* @__PURE__ */ new Date(`2017-${r}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const i = l === "long" ? "MMMM" : "MMM";
      return a.map((r, d) => {
        const M = ut(r, i, { locale: e });
        return {
          text: M.charAt(0).toUpperCase() + M.substring(1),
          value: d
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return a.map((i, r) => {
    const d = n.format(i);
    return {
      text: d.charAt(0).toUpperCase() + d.substring(1),
      value: r
    };
  });
}, Rl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ne = (e) => {
  const t = c(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Cl = (e) => Object.assign({ type: "dot" }, e), $a = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Wn = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Oe = (e) => e, oa = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, sa = (e) => e === null, Ta = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, _l = (e) => {
  const t = [], l = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(l(n));
  }
  return t;
}, Ut = (e, t, l) => {
  const a = l != null, n = t != null;
  if (!a && !n)
    return !1;
  const i = +l, r = +t;
  return a && n ? +e > i || +e < r : a ? +e > i : n ? +e < r : !1;
}, Ot = (e, t) => _l(e).map((l) => l.map((a) => {
  const { active: n, disabled: i, isBetween: r, highlighted: d } = t(a);
  return {
    ...a,
    active: n,
    disabled: i,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: i,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: i && n,
      dp__cell_in_between: r,
      "dp--highlighted": d
    }
  };
})), mt = (e, t, l = !1) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, Ol = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Yl(e, t) {
  let l = [...document.querySelectorAll(Ol())];
  l = l.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = l.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length))
    return l[a + (t ? -1 : 1)];
}
const Nl = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), ia = (e, t, l, a, n) => {
  const i = An(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return nn(i) && Za(i) ? a || n ? i : Ae(i, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, Bl = (e, t, l, a, n) => {
  const i = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return ia(e, t, i, a, n);
  if (Array.isArray(t)) {
    let r = null;
    for (const d of t)
      if (r = ia(e, d, i, a, n), r)
        break;
    return r;
  }
  return typeof t == "function" ? t(e) : null;
}, F = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Il = (e, t, l) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getDate().toString().padStart(2, "0"), r = e.getHours().toString().padStart(2, "0"), d = e.getMinutes().toString().padStart(2, "0"), M = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${i}T${r}:${d}:${M}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ve = (e) => {
  let t = F(JSON.parse(JSON.stringify(e)));
  return t = ma(t, 0), t = ga(t, 0), t = On(t, 0), t = Yn(t, 0), t;
}, gt = (e, t, l, a) => {
  let n = e ? F(e) : F();
  return (t || t === 0) && (n = ma(n, +t)), (l || l === 0) && (n = ga(n, +l)), (a || a === 0) && (n = On(n, +a)), Yn(n, 0);
}, Ce = (e, t) => !e || !t ? !1 : Vt(Ve(e), Ve(t)), ye = (e, t) => !e || !t ? !1 : Ct(Ve(e), Ve(t)), _e = (e, t) => !e || !t ? !1 : Lt(Ve(e), Ve(t)), rn = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? _e(l, e[0]) && Ce(l, e[1]) : e != null && e[0] && t ? _e(l, e[0]) && Ce(l, t) || Ce(l, e[0]) && _e(l, t) : !1, Je = (e) => {
  const t = Ae(new Date(e), { date: 1 });
  return Ve(t);
}, pn = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Mt = (e) => ({
  hours: et(e),
  minutes: ot(e),
  seconds: _t(e)
}), Aa = (e, t) => {
  if (t) {
    const l = ge(F(t));
    if (l > e)
      return 12;
    if (l === e)
      return be(F(t));
  }
}, Sa = (e, t) => {
  if (t) {
    const l = ge(F(t));
    return l < e ? -1 : l === e ? be(F(t)) : void 0;
  }
}, Yt = (e) => {
  if (e)
    return ge(F(e));
}, tt = (e, t) => t ? dl(e, t) : e, Pa = (e, t) => t ? cl(e, t) : e, El = (e) => e instanceof Date ? e : qa(e), Ra = (e, t) => {
  const l = _e(e, t) ? t : e, a = _e(t, e) ? t : e;
  return ya({ start: l, end: a });
}, Fl = (e) => {
  const t = Dt(e, 1);
  return { month: be(t), year: ge(t) };
}, st = (e, t, l) => {
  const a = pa(tt(e, t), { weekStartsOn: +l }), n = Qa(tt(e, t), { weekStartsOn: +l });
  return [a, n];
}, Ca = (e, t) => {
  const l = {
    hours: et(F()),
    minutes: ot(F()),
    seconds: t ? _t(F()) : 0
  };
  return Object.assign(l, e);
}, vt = (e, t, l) => [Ae(F(e), { date: 1 }), Ae(F(), { month: t, year: l, date: 1 })], it = (e, t, l) => {
  let a = e ? F(e) : F();
  return (t || t === 0) && (a = Ga(a, t)), l && (a = rt(a, l)), a;
}, _a = (e, t, l, a, n) => {
  if (!a || n && !t || !n && !l)
    return !1;
  const i = n ? Dt(e, 1) : Wt(e, 1), r = [be(i), ge(i)];
  return n ? !Vl(...r, t) : !Hl(...r, l);
}, Hl = (e, t, l) => Ce(...vt(l, e, t)) || ye(...vt(l, e, t)), Vl = (e, t, l) => _e(...vt(l, e, t)) || ye(...vt(l, e, t)), Oa = (e, t, l, a, n, i, r) => {
  if (typeof t == "function" && !r)
    return t(e);
  const d = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${ut(e[0], i, d)}${n && !e[1] ? "" : a}${e[1] ? ut(e[1], i, d) : ""}` : ut(e, i, d);
}, Pt = (e) => {
  if (e)
    return null;
  throw new Error(Wn.prop("partial-range"));
}, Jt = (e, t) => {
  if (t)
    return e();
  throw new Error(Wn.prop("range"));
}, Rn = (e) => Array.isArray(e) ? nn(e[0]) && (e[1] ? nn(e[1]) : !0) : e ? nn(e) : !1, Ll = (e, t) => Ae(t ?? F(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), hn = (e, t, l, a) => {
  if (!e)
    return !0;
  if (a) {
    const n = l === "max" ? Vt(e, t) : Lt(e, t), i = { seconds: 0, milliseconds: 0 };
    return n || Ct(Ae(e, i), Ae(t, i));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, bn = (e, t, l) => e ? Ll(e, t) : F(l ?? t), ua = (e, t, l, a, n) => {
  if (Array.isArray(a)) {
    const r = bn(e, a[0], t), d = bn(e, a[1], t);
    return hn(a[0], r, l, !!t) && hn(a[1], d, l, !!t) && n;
  }
  const i = bn(e, a, t);
  return hn(a, i, l, !!t) && n;
}, kn = (e) => Ae(F(), Mt(e)), Wl = (e, t) => Array.isArray(e) ? e.map((l) => F(l)).filter((l) => ge(F(l)) === t).map((l) => be(l)) : [], Ya = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((a) => a.month === t && a.year === l), Un = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Et = zt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Na = () => {
  const e = (a) => {
    Et.menuFocused = a;
  }, t = (a) => {
    Et.shiftKeyInMenu !== a && (Et.shiftKeyInMenu = a);
  };
  return {
    control: q(() => ({ shiftKeyInMenu: Et.shiftKeyInMenu, menuFocused: Et.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Se = zt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), wn = ee(null), xt = ee(!1), Dn = ee(!1), Mn = ee(!1), $n = ee(!1), Le = ee(0), Ie = ee(0), ht = () => {
  const e = q(() => xt.value ? [...Se.selectionGrid, Se.actionRow].filter((N) => N.length) : Dn.value ? [
    ...Se.timePicker[0],
    ...Se.timePicker[1],
    $n.value ? [] : [wn.value],
    Se.actionRow
  ].filter((N) => N.length) : Mn.value ? [...Se.monthPicker, Se.actionRow] : [Se.monthYear, ...Se.calendar, Se.time, Se.actionRow].filter((N) => N.length)), t = (N) => {
    Le.value = N ? Le.value + 1 : Le.value - 1;
    let E = null;
    e.value[Ie.value] && (E = e.value[Ie.value][Le.value]), E || (Le.value = N ? Le.value - 1 : Le.value + 1);
  }, l = (N) => {
    if (Ie.value === 0 && !N || Ie.value === e.value.length && N)
      return;
    Ie.value = N ? Ie.value + 1 : Ie.value - 1, e.value[Ie.value] ? e.value[Ie.value] && !e.value[Ie.value][Le.value] && Le.value !== 0 && (Le.value = e.value[Ie.value].length - 1) : Ie.value = N ? Ie.value - 1 : Ie.value + 1;
  }, a = (N) => {
    let E = null;
    e.value[Ie.value] && (E = e.value[Ie.value][Le.value]), E ? E.focus({ preventScroll: !xt.value }) : Le.value = N ? Le.value - 1 : Le.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, i = () => {
    t(!1), a(!1);
  }, r = () => {
    l(!1), a(!0);
  }, d = () => {
    l(!0), a(!0);
  }, M = (N, E) => {
    Se[E] = N;
  }, k = (N, E) => {
    Se[E] = N;
  }, P = () => {
    Le.value = 0, Ie.value = 0;
  };
  return {
    buildMatrix: M,
    buildMultiLevelMatrix: k,
    setTimePickerBackRef: (N) => {
      wn.value = N;
    },
    setSelectionGrid: (N) => {
      xt.value = N, P(), N || (Se.selectionGrid = []);
    },
    setTimePicker: (N, E = !1) => {
      Dn.value = N, $n.value = E, P(), N || (Se.timePicker[0] = [], Se.timePicker[1] = []);
    },
    setTimePickerElements: (N, E = 0) => {
      Se.timePicker[E] = N;
    },
    arrowRight: n,
    arrowLeft: i,
    arrowUp: r,
    arrowDown: d,
    clearArrowNav: () => {
      Se.monthYear = [], Se.calendar = [], Se.time = [], Se.actionRow = [], Se.selectionGrid = [], Se.timePicker[0] = [], Se.timePicker[1] = [], xt.value = !1, Dn.value = !1, $n.value = !1, Mn.value = !1, P(), wn.value = null;
    },
    setMonthPicker: (N) => {
      Mn.value = N, P();
    },
    refSets: Se
    // exposed for testing
  };
}, da = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Ul = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e ?? {}
}), ca = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, zl = (e) => {
  const t = typeof e == "object" && e, l = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...l, count: ca(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, i = ca(n);
  return Object.assign(l, a, { count: i });
}, jl = (e, t, l) => e || (typeof l == "string" ? l : t), Kl = (e) => typeof e == "boolean" ? e ? da({}) : !1 : da(e), Gl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, ql = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Ql = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Zl = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Xl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0
}, ...e ?? {} }), Jl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => F(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, xl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, er = (e, t) => {
  const l = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...l, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, Re = (e) => {
  const t = () => {
    const E = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${E}` : `hh:mm${E} aa`;
  }, l = () => {
    var E;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((E = K.value) == null ? void 0 : E.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (E) => Ca(E, e.enableSeconds), n = () => N.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, i = q(() => zl(e.multiCalendars)), r = q(() => n()), d = q(() => Ul(e.ariaLabels)), M = q(() => ql(e.filters)), k = q(() => Kl(e.transitions)), P = q(() => Ql(e.actionRow)), b = q(
    () => jl(e.previewFormat, e.format, l())
  ), _ = q(() => Gl(e.textInput)), Y = q(() => Zl(e.inline)), $ = q(() => Xl(e.config)), w = q(() => Jl(e.highlight)), K = q(() => xl(e.weekNumbers)), N = q(
    () => er(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: k,
    defaultedMultiCalendars: i,
    defaultedStartTime: r,
    defaultedAriaLabels: d,
    defaultedFilters: M,
    defaultedActionRow: P,
    defaultedPreviewFormat: b,
    defaultedTextInput: _,
    defaultedInline: Y,
    defaultedConfig: $,
    defaultedHighlight: w,
    defaultedWeekNumbers: K,
    defaultedRange: N,
    getDefaultPattern: l,
    getDefaultStartTime: n
  };
}, tr = (e, t, l) => {
  const a = ee(), { defaultedTextInput: n, defaultedRange: i, getDefaultPattern: r } = Re(t), d = ee(""), M = an(t, "format");
  yt(
    a,
    () => {
      e("internal-model-change", a.value);
    },
    { deep: !0 }
  ), yt(M, () => {
    te();
  });
  const k = (u) => Pa(u, t.timezone), P = (u) => tt(u, t.timezone), b = (u, B, p = !1) => Oa(
    u,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    B ?? r(),
    p
  ), _ = (u) => u ? t.modelType ? f(u) : {
    hours: et(u),
    minutes: ot(u),
    seconds: t.enableSeconds ? _t(u) : 0
  } : null, Y = (u) => t.modelType ? f(u) : { month: be(u), year: ge(u) }, $ = (u) => Array.isArray(u) ? t.multiDates ? u.map((B) => w(B, rt(F(), B))) : Jt(
    () => [
      rt(F(), u[0]),
      u[1] ? rt(F(), u[1]) : Pt(i.value.partialRange)
    ],
    i.value.enabled
  ) : rt(F(), +u), w = (u, B) => (typeof u == "string" || typeof u == "number") && t.modelType ? m(u) : B, K = (u) => Array.isArray(u) ? [
    w(
      u[0],
      gt(null, +u[0].hours, +u[0].minutes, u[0].seconds)
    ),
    w(
      u[1],
      gt(null, +u[1].hours, +u[1].minutes, u[1].seconds)
    )
  ] : w(u, gt(null, u.hours, u.minutes, u.seconds)), N = (u) => {
    const B = Ae(F(), { date: 1 });
    return Array.isArray(u) ? t.multiDates ? u.map((p) => w(p, it(B, +p.month, +p.year))) : Jt(
      () => [
        w(u[0], it(B, +u[0].month, +u[0].year)),
        w(
          u[1],
          u[1] ? it(B, +u[1].month, +u[1].year) : Pt(i.value.partialRange)
        )
      ],
      i.value.enabled
    ) : w(u, it(B, +u.month, +u.year));
  }, E = (u) => {
    if (Array.isArray(u))
      return u.map((B) => m(B));
    throw new Error(Wn.dateArr("multi-dates"));
  }, I = (u) => {
    if (Array.isArray(u) && i.value.enabled) {
      const B = u[0], p = u[1];
      return [
        F(Array.isArray(B) ? B[0] : null),
        F(Array.isArray(p) ? p[0] : null)
      ];
    }
    return F(u[0]);
  }, D = (u) => t.modelAuto ? Array.isArray(u) ? [m(u[0]), m(u[1])] : t.autoApply ? [m(u)] : [m(u), null] : Array.isArray(u) ? Jt(
    () => u[1] ? [
      m(u[0]),
      u[1] ? m(u[1]) : Pt(i.value.partialRange)
    ] : [m(u[0])],
    i.value.enabled
  ) : m(u), R = () => {
    Array.isArray(a.value) && i.value.enabled && a.value.length === 1 && a.value.push(Pt(i.value.partialRange));
  }, V = () => {
    const u = a.value;
    return [
      f(u[0]),
      u[1] ? f(u[1]) : Pt(i.value.partialRange)
    ];
  }, ne = () => a.value[1] ? V() : f(Oe(a.value[0])), O = () => (a.value || []).map((u) => f(u)), re = () => (R(), t.modelAuto ? ne() : t.multiDates ? O() : Array.isArray(a.value) ? Jt(() => V(), i.value.enabled) : f(Oe(a.value))), se = (u) => !u || Array.isArray(u) && !u.length ? null : t.timePicker ? K(Oe(u)) : t.monthPicker ? N(Oe(u)) : t.yearPicker ? $(Oe(u)) : t.multiDates ? E(Oe(u)) : t.weekPicker ? I(Oe(u)) : D(Oe(u)), H = (u) => {
    const B = se(u);
    Rn(Oe(B)) ? (a.value = Oe(B), te()) : (a.value = null, d.value = "");
  }, g = () => {
    const u = (B) => ut(B, n.value.format);
    return `${u(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? u(a.value[1]) : ""}`;
  }, T = () => l.value && a.value ? Array.isArray(a.value) ? g() : ut(a.value, n.value.format) : b(a.value), G = () => a.value ? t.multiDates ? a.value.map((u) => b(u)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? T() : b(a.value) : "", te = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? d.value = G() : d.value = t.format(a.value);
  }, m = (u) => {
    if (t.utc) {
      const B = new Date(u);
      return t.utc === "preserve" ? new Date(B.getTime() + B.getTimezoneOffset() * 6e4) : B;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? P(new Date(u)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? An(u, r(), /* @__PURE__ */ new Date()) : P(An(u, t.modelType, /* @__PURE__ */ new Date())) : P(new Date(u));
  }, f = (u) => u ? t.utc ? Il(u, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +k(u) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? b(k(u)) : b(k(u), t.modelType, !0) : k(u) : "", z = (u, B = !1) => {
    if (e("update:model-value", u), t.emitTimezone && B) {
      const p = Array.isArray(u) ? u.map((J) => tt(Oe(J)), t.emitTimezone) : tt(Oe(u), t.emitTimezone);
      e("update:model-timezone-value", p);
    }
  }, ae = (u) => Array.isArray(a.value) ? t.multiDates ? a.value.map((B) => u(B)) : [
    u(a.value[0]),
    a.value[1] ? u(a.value[1]) : Pt(i.value.partialRange)
  ] : u(Oe(a.value)), s = () => {
    if (Array.isArray(a.value)) {
      const u = st(a.value[0], t.timezone, t.weekStart), B = a.value[1] ? st(a.value[1], t.timezone, t.weekStart) : [];
      return [u.map((p) => F(p)), B.map((p) => F(p))];
    }
    return st(a.value, t.timezone, t.weekStart).map((u) => F(u));
  }, h = (u) => z(Oe(ae(u)));
  return {
    inputValue: d,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? i.value.enabled ? i.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: H,
    formatInputValue: te,
    emitModelValue: () => (te(), t.monthPicker ? h(Y) : t.timePicker ? h(_) : t.yearPicker ? h(ge) : t.weekPicker ? e("update:model-value", s()) : z(re(), !0))
  };
}, nr = (e, t) => {
  const { defaultedFilters: l } = Re(e), { validateMonthYearInRange: a } = At(e), n = (k, P) => {
    let b = k;
    return l.value.months.includes(be(b)) ? (b = P ? Dt(k, 1) : Wt(k, 1), n(b, P)) : b;
  }, i = (k, P) => {
    let b = k;
    return l.value.years.includes(ge(b)) ? (b = P ? ha(k, 1) : ba(k, 1), i(b, P)) : b;
  }, r = (k, P = !1) => {
    const b = Ae(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let _ = k ? Dt(b, 1) : Wt(b, 1);
    e.disableYearSelect && (_ = rt(_, e.year));
    let Y = be(_), $ = ge(_);
    l.value.months.includes(Y) && (_ = n(_, k), Y = be(_), $ = ge(_)), l.value.years.includes($) && (_ = i(_, k), $ = ge(_)), a(Y, $, k, e.preventMinMaxNavigation) && d(Y, $, P);
  }, d = (k, P, b) => {
    t("update-month-year", { month: k, year: P, fromNav: b });
  }, M = q(() => (k) => _a(
    Ae(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }),
    e.maxDate,
    e.minDate,
    e.preventMinMaxNavigation,
    k
  ));
  return { handleMonthYearChange: r, isDisabled: M, updateMonthYear: d };
};
var Rt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Rt || {}), Xe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Xe || {}), kt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(kt || {}), $t = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))($t || {}), lt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(lt || {});
const ar = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: a,
  inline: n,
  emit: i,
  props: r,
  slots: d
}) => {
  const M = ee({}), k = ee(!1), P = ee({
    top: "0",
    left: "0"
  }), b = ee(!1), _ = an(r, "teleportCenter");
  yt(_, () => {
    P.value = JSON.parse(JSON.stringify({})), D();
  });
  const Y = (m) => {
    if (r.teleport) {
      const f = m.getBoundingClientRect();
      return {
        left: f.left + window.scrollX,
        top: f.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, $ = (m, f) => {
    P.value.left = `${m + f - M.value.width}px`;
  }, w = (m) => {
    P.value.left = `${m}px`;
  }, K = (m, f) => {
    r.position === Rt.left && w(m), r.position === Rt.right && $(m, f), r.position === Rt.center && (P.value.left = `${m + f / 2 - M.value.width / 2}px`);
  }, N = (m) => {
    const { width: f, height: z } = m.getBoundingClientRect(), { top: ae, left: s } = r.altPosition ? r.altPosition(m) : Y(m);
    return { top: +ae, left: +s, width: f, height: z };
  }, E = () => {
    P.value.left = "50%", P.value.top = "50%", P.value.transform = "translate(-50%, -50%)", P.value.position = "fixed", delete P.value.opacity;
  }, I = () => {
    const m = Ne(l), { top: f, left: z, transform: ae } = r.altPosition(m);
    P.value = { top: `${f}px`, left: `${z}px`, transform: ae ?? "" };
  }, D = (m = !0) => {
    var f;
    if (!n.value.enabled) {
      if (_.value)
        return E();
      if (r.altPosition !== null)
        return I();
      if (m) {
        const z = r.teleport ? (f = t.value) == null ? void 0 : f.$el : e.value;
        z && (M.value = z.getBoundingClientRect()), i("recalculate-position");
      }
      return H();
    }
  }, R = ({ inputEl: m, left: f, width: z }) => {
    window.screen.width > 768 && !k.value && K(f, z), O(m);
  }, V = (m) => {
    const { top: f, left: z, height: ae, width: s } = N(m);
    P.value.top = `${ae + f + +r.offset}px`, b.value = !1, k.value || (P.value.left = `${z + s / 2 - M.value.width / 2}px`), R({ inputEl: m, left: z, width: s });
  }, ne = (m) => {
    const { top: f, left: z, width: ae } = N(m);
    P.value.top = `${f - +r.offset - M.value.height}px`, b.value = !0, R({ inputEl: m, left: z, width: ae });
  }, O = (m) => {
    if (r.autoPosition) {
      const { left: f, width: z } = N(m), { left: ae, right: s } = M.value;
      if (!k.value) {
        if (Math.abs(ae) !== Math.abs(s)) {
          if (ae <= 0)
            return k.value = !0, w(f);
          if (s >= document.documentElement.clientWidth)
            return k.value = !0, $(f, z);
        }
        return K(f, z);
      }
    }
  }, re = () => {
    const m = Ne(l);
    if (m) {
      const { height: f } = M.value, { top: z, height: ae } = m.getBoundingClientRect(), h = window.innerHeight - z - ae, o = z;
      return f <= h ? kt.bottom : f > h && f <= o ? kt.top : h >= o ? kt.bottom : kt.top;
    }
    return kt.bottom;
  }, se = (m) => re() === kt.bottom ? V(m) : ne(m), H = () => {
    const m = Ne(l);
    if (m)
      return r.autoPosition ? se(m) : V(m);
  }, g = function(m) {
    if (m) {
      const f = m.scrollHeight > m.clientHeight, ae = window.getComputedStyle(m).overflowY.indexOf("hidden") !== -1;
      return f && !ae;
    }
    return !0;
  }, T = function(m) {
    return !m || m === document.body || m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : g(m) ? m : T(m.parentNode);
  }, G = (m) => {
    if (m)
      switch (r.position) {
        case Rt.left:
          return { left: 0, transform: "translateX(0)" };
        case Rt.right:
          return { left: `${m.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${m.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: b,
    menuStyle: P,
    xCorrect: k,
    setMenuPosition: D,
    getScrollableParent: T,
    shadowRender: (m, f) => {
      var S, u, B;
      const z = document.createElement("div"), ae = (S = Ne(l)) == null ? void 0 : S.getBoundingClientRect();
      z.setAttribute("id", "dp--temp-container");
      const s = (u = a.value) != null && u.clientWidth ? a.value : document.body;
      s.append(z);
      const h = G(ae), o = Wa(
        m,
        {
          ...f,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...h }
        },
        Object.fromEntries(
          Object.keys(d).filter((p) => ["right-sidebar", "left-sidebar"].includes(p)).map((p) => [p, d[p]])
        )
      );
      qn(o, z), M.value = (B = o.el) == null ? void 0 : B.getBoundingClientRect(), qn(null, z), s.removeChild(z);
    }
  };
}, ft = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], lr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], rr = {
  all: () => ft,
  monthYear: () => ft.filter((e) => e.use.includes("month-year")),
  input: () => lr,
  timePicker: () => ft.filter((e) => e.use.includes("time")),
  action: () => ft.filter((e) => e.use.includes("action")),
  calendar: () => ft.filter((e) => e.use.includes("calendar")),
  menu: () => ft.filter((e) => e.use.includes("menu")),
  shared: () => ft.filter((e) => e.use.includes("shared")),
  yearMode: () => ft.filter((e) => e.use.includes("year-mode"))
}, Ge = (e, t, l) => {
  const a = [];
  return rr[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), l != null && l.length && l.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, jt = (e) => {
  const t = q(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), l = q(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, Kt = (e, t) => {
  const l = F(tt(/* @__PURE__ */ new Date(), e.timezone)), { defaultedRange: a } = Re(e), n = ee([{ month: be(l), year: ge(l) }]), i = zt({
    hours: a.value.enabled ? [et(l), et(l)] : et(l),
    minutes: a.value.enabled ? [ot(l), ot(l)] : ot(l),
    seconds: a.value.enabled ? [0, 0] : 0
  }), r = q({
    get: () => e.internalModelValue,
    set: (k) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", k);
    }
  }), d = q(
    () => (k) => n.value[k] ? n.value[k].month : 0
  ), M = q(
    () => (k) => n.value[k] ? n.value[k].year : 0
  );
  return {
    calendars: n,
    time: i,
    modelValue: r,
    month: d,
    year: M
  };
}, or = (e, t) => {
  const { defaultedMultiCalendars: l, defaultedHighlight: a, defaultedRange: n } = Re(t), { isDisabled: i, matchDate: r } = At(t), d = ee(null), M = ee(F(tt(/* @__PURE__ */ new Date(), t.timezone))), k = (o) => {
    !o.current && t.hideOffsetDates || (d.value = o.value);
  }, P = () => {
    d.value = null;
  }, b = (o) => Array.isArray(e.value) && n.value.enabled && e.value[0] && d.value ? o ? _e(d.value, e.value[0]) : Ce(d.value, e.value[0]) : !0, _ = (o, S) => {
    const u = () => e.value ? S ? e.value[0] || null : e.value[1] : null, B = e.value && Array.isArray(e.value) ? u() : null;
    return ye(F(o.value), B);
  }, Y = (o) => {
    const S = Array.isArray(e.value) ? e.value[0] : null;
    return o ? !Ce(d.value ?? null, S) : !0;
  }, $ = (o, S = !0) => (n.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !o.current ? !1 : ye(F(o.value), e.value[S ? 0 : 1]) : n.value.enabled ? _(o, S) && Y(S) || ye(o.value, Array.isArray(e.value) ? e.value[0] : null) && b(S) : !1, w = (o, S, u) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? o ? !1 : u ? _e(e.value[0], S.value) : Ce(e.value[0], S.value) : !1, K = (o) => !e.value || t.hideOffsetDates && !o.current ? !1 : n.value.enabled ? t.modelAuto && Array.isArray(e.value) ? ye(o.value, e.value[0] ? e.value[0] : M.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((S) => ye(S, o.value)) : ye(o.value, e.value ? e.value : M.value), N = (o) => {
    if (n.value.autoRange || t.weekPicker) {
      if (d.value) {
        if (t.hideOffsetDates && !o.current)
          return !1;
        const S = wt(d.value, +n.value.autoRange), u = st(F(d.value), t.timezone, t.weekStart);
        return t.weekPicker ? ye(u[1], F(o.value)) : ye(S, F(o.value));
      }
      return !1;
    }
    return !1;
  }, E = (o) => {
    if (n.value.autoRange || t.weekPicker) {
      if (d.value) {
        const S = wt(d.value, +n.value.autoRange);
        if (t.hideOffsetDates && !o.current)
          return !1;
        const u = st(F(d.value), t.timezone, t.weekStart);
        return t.weekPicker ? _e(o.value, u[0]) && Ce(o.value, u[1]) : _e(o.value, d.value) && Ce(o.value, S);
      }
      return !1;
    }
    return !1;
  }, I = (o) => {
    if (n.value.autoRange || t.weekPicker) {
      if (d.value) {
        if (t.hideOffsetDates && !o.current)
          return !1;
        const S = st(F(d.value), t.timezone, t.weekStart);
        return t.weekPicker ? ye(S[0], o.value) : ye(d.value, o.value);
      }
      return !1;
    }
    return !1;
  }, D = (o) => rn(e.value, d.value, o.value), R = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, V = () => t.modelAuto ? $a(t.internalModelValue) : !0, ne = (o) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const S = n.value.enabled ? !$(o) && !$(o, !1) : !0;
    return !i(o.value) && !K(o) && !(!o.current && t.hideOffsetDates) && S;
  }, O = (o) => n.value.enabled ? t.modelAuto ? R() && K(o) : !1 : K(o), re = (o) => {
    var S;
    return a.value ? typeof a.value == "function" ? a.value(o.value) : r(
      o.value,
      (S = t.arrMapValues) != null && S.highlightedDates ? t.arrMapValues.highlightedDates : a.value.dates
    ) : !1;
  }, se = (o) => {
    const S = i(o.value);
    return S && (typeof a.value == "function" ? !a.value(o.value, S) : !a.value.options.highlightDisabled);
  }, H = (o) => {
    var S;
    return typeof a.value == "function" ? a.value(o.value) : (S = a.value.weekdays) == null ? void 0 : S.includes(o.value.getDay());
  }, g = (o) => (n.value.enabled || t.weekPicker) && (!(l.value.count > 0) || o.current) && V() && !(!o.current && t.hideOffsetDates) && !K(o) ? D(o) : !1, T = (o) => {
    const { isRangeStart: S, isRangeEnd: u } = f(o), B = n.value.enabled ? S || u : !1;
    return {
      dp__cell_offset: !o.current,
      dp__pointer: !t.disabled && !(!o.current && t.hideOffsetDates) && !i(o.value),
      dp__cell_disabled: i(o.value),
      dp__cell_highlight: !se(o) && (re(o) || H(o)) && !O(o) && !B && !I(o) && !(g(o) && t.weekPicker) && !u,
      dp__cell_highlight_active: !se(o) && (re(o) || H(o)) && O(o),
      dp__today: !t.noToday && ye(o.value, M.value) && o.current,
      "dp--past": Ce(o.value, M.value),
      "dp--future": _e(o.value, M.value)
    };
  }, G = (o) => ({
    dp__active_date: O(o),
    dp__date_hover: ne(o)
  }), te = (o) => {
    if (e.value && !Array.isArray(e.value)) {
      const S = st(e.value, t.timezone, t.weekStart);
      return {
        ...ae(o),
        dp__range_start: ye(S[0], o.value),
        dp__range_end: ye(S[1], o.value),
        dp__range_between_week: _e(o.value, S[0]) && Ce(o.value, S[1])
      };
    }
    return {
      ...ae(o)
    };
  }, m = (o) => {
    if (e.value && Array.isArray(e.value)) {
      const S = st(e.value[0], t.timezone, t.weekStart), u = e.value[1] ? st(e.value[1], t.timezone, t.weekStart) : [];
      return {
        ...ae(o),
        dp__range_start: ye(S[0], o.value) || ye(u[0], o.value),
        dp__range_end: ye(S[1], o.value) || ye(u[1], o.value),
        dp__range_between_week: _e(o.value, S[0]) && Ce(o.value, S[1]) || _e(o.value, u[0]) && Ce(o.value, u[1]),
        dp__range_between: _e(o.value, S[1]) && Ce(o.value, u[0])
      };
    }
    return {
      ...ae(o)
    };
  }, f = (o) => {
    const S = l.value.count > 0 ? o.current && $(o) && V() : $(o) && V(), u = l.value.count > 0 ? o.current && $(o, !1) && V() : $(o, !1) && V();
    return { isRangeStart: S, isRangeEnd: u };
  }, z = (o) => {
    const { isRangeStart: S, isRangeEnd: u } = f(o);
    return {
      dp__range_start: S,
      dp__range_end: u,
      dp__range_between: g(o),
      dp__date_hover_start: w(ne(o), o, !0),
      dp__date_hover_end: w(ne(o), o, !1)
    };
  }, ae = (o) => ({
    ...z(o),
    dp__cell_auto_range: E(o),
    dp__cell_auto_range_start: I(o),
    dp__cell_auto_range_end: N(o)
  }), s = (o) => n.value.enabled ? n.value.autoRange ? ae(o) : t.modelAuto ? { ...G(o), ...z(o) } : t.weekPicker ? m(o) : z(o) : t.weekPicker ? te(o) : G(o);
  return {
    setHoverDate: k,
    clearHoverDate: P,
    getDayClassData: (o) => t.hideOffsetDates && !o.current ? {} : {
      ...T(o),
      ...s(o),
      [t.dayClass ? t.dayClass(o.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, At = (e) => {
  const { defaultedFilters: t, defaultedHighlight: l, defaultedRange: a } = Re(e), n = () => {
    if (e.timezone)
      return e.timezone;
    if (e.utc)
      return "UTC";
  }, i = (g) => {
    const T = Ve(r(F(g))).toISOString(), [G] = T.split("T");
    return G;
  }, r = (g) => e.utc === "preserve" ? Pa(g, n()) : tt(g, n()), d = (g) => {
    var o;
    const T = e.maxDate ? _e(g, r(F(e.maxDate))) : !1, G = e.minDate ? Ce(g, r(F(e.minDate))) : !1, te = b(
      r(g),
      (o = e.arrMapValues) != null && o.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates
    ), f = t.value.months.map((S) => +S).includes(be(g)), z = e.disabledWeekDays.length ? e.disabledWeekDays.some((S) => +S === Xa(g)) : !1, ae = Y(g), s = ge(g), h = s < +e.yearRange[0] || s > +e.yearRange[1];
    return !(T || G || te || f || h || z || ae);
  }, M = (g, T) => Ce(...vt(e.minDate, g, T)) || ye(...vt(e.minDate, g, T)), k = (g, T) => _e(...vt(e.maxDate, g, T)) || ye(...vt(e.maxDate, g, T)), P = (g, T, G) => {
    let te = !1;
    return e.maxDate && G && k(g, T) && (te = !0), e.minDate && !G && M(g, T) && (te = !0), te;
  }, b = (g, T) => g ? T instanceof Map ? !!T.get(i(g)) : Array.isArray(T) ? T.some((G) => ye(r(F(G)), g)) : T ? T(F(JSON.parse(JSON.stringify(g)))) : !1 : !0, _ = (g, T, G, te) => {
    let m = !1;
    return te ? e.minDate && e.maxDate ? m = P(g, T, G) : (e.minDate && M(g, T) || e.maxDate && k(g, T)) && (m = !0) : m = !0, m;
  }, Y = (g) => {
    var T, G, te, m, f;
    return Array.isArray(e.allowedDates) && !((T = e.allowedDates) != null && T.length) ? !0 : (G = e.arrMapValues) != null && G.allowedDates ? !b(g, (te = e.arrMapValues) == null ? void 0 : te.allowedDates) : (m = e.allowedDates) != null && m.length ? !((f = e.allowedDates) != null && f.some(
      (z) => ye(Ve(z), r(Ve(g)))
    )) : !1;
  }, $ = (g) => !d(g), w = (g) => a.value.noDisabledRange ? !ya({ start: g[0], end: g[1] }).some((G) => $(G)) : !0, K = (g, T, G = 0) => {
    if (Array.isArray(T) && T[G] && (a.value.maxRange || a.value.minRange)) {
      const te = Ja(g, T[G]), m = Ra(T[G], g), f = m.length === 1 ? 0 : m.filter((ae) => $(ae)).length, z = Math.abs(te) - (a.value.minMaxRawRange ? 0 : f);
      if (a.value.minRange && a.value.maxRange)
        return z >= +a.value.minRange && z <= +a.value.maxRange;
      if (a.value.minRange)
        return z >= +a.value.minRange;
      if (a.value.maxRange)
        return z <= +a.value.maxRange;
    }
    return !0;
  }, N = (g) => new Map(g.map((T) => [i(T), !0])), E = (g) => Array.isArray(g) && g.length > 0, I = () => {
    const g = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return E(e.allowedDates) && (g.allowedDates = N(e.allowedDates)), typeof l.value != "function" && E(l.value.dates) && (g.highlightedDates = N(l.value.dates)), E(e.disabledDates) && (g.disabledDates = N(e.disabledDates)), g;
  }, D = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, R = (g) => Array.isArray(g) ? [g[0] ? kn(g[0]) : null, g[1] ? kn(g[1]) : null] : kn(g), V = (g, T, G) => g.find(
    (te) => +te.hours === et(T) && te.minutes === "*" ? !0 : +te.minutes === ot(T) && +te.hours === et(T)
  ) && G, ne = (g, T, G) => {
    const [te, m] = g, [f, z] = T;
    return !V(te, f, G) && !V(m, z, G) && G;
  }, O = (g, T) => {
    const G = Array.isArray(T) ? T : [T];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? ne(e.disabledTimes, G, g) : !G.some((te) => V(e.disabledTimes, te, g)) : g;
  }, re = (g, T) => {
    const G = Array.isArray(T) ? [Mt(T[0]), T[1] ? Mt(T[1]) : void 0] : Mt(T), te = !e.disabledTimes(G);
    return g && te;
  }, se = (g, T) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? O(T, g) : re(T, g) : T;
  return {
    isDisabled: $,
    validateDate: d,
    validateMonthYearInRange: _,
    isDateRangeAllowed: w,
    checkMinMaxRange: K,
    matchDate: b,
    mapDatesArrToMap: I,
    isValidTime: (g) => {
      let T = !0;
      if (!g || D())
        return !0;
      const G = !e.minDate && !e.maxDate ? R(g) : g;
      return (e.maxTime || e.maxDate) && (T = ua(
        e.maxTime,
        e.maxDate,
        "max",
        Oe(G),
        T
      )), (e.minTime || e.minDate) && (T = ua(
        e.minTime,
        e.minDate,
        "min",
        Oe(G),
        T
      )), se(g, T);
    }
  };
}, on = () => {
  const e = q(() => (a, n) => a == null ? void 0 : a.includes(n)), t = q(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), l = q(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, sr = (e, t, l) => {
  const a = ee(0), n = zt({
    [$t.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [$t.calendar]: !1,
    [$t.header]: !1
  }), i = q(() => e.monthPicker), r = (b) => {
    var _;
    if ((_ = e.flow) != null && _.length) {
      if (!b && i.value)
        return P();
      n[b] = !0, Object.keys(n).filter((Y) => !n[Y]).length || P();
    }
  }, d = () => {
    var b;
    (b = e.flow) != null && b.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), P());
  }, M = () => {
    a.value = -1;
  }, k = (b, _, ...Y) => {
    var $, w;
    e.flow[a.value] === b && l.value && ((w = ($ = l.value)[_]) == null || w.call($, ...Y));
  }, P = () => {
    k(lt.month, "toggleMonthPicker", !0), k(lt.year, "toggleYearPicker", !0), k(lt.calendar, "toggleTimePicker", !1, !0), k(lt.time, "toggleTimePicker", !0, !0);
    const b = e.flow[a.value];
    (b === lt.hours || b === lt.minutes || b === lt.seconds) && k(b, "toggleTimePicker", !0, !0, b);
  };
  return { childMount: r, updateFlowStep: d, resetFlow: M, flowStep: a };
}, sn = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, nt = {
  ...sn,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, ir = {
  key: 1,
  class: "dp__input_wrap"
}, ur = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], dr = {
  key: 2,
  class: "dp__clear_icon"
}, cr = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...sn
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTextInput: i,
      defaultedAriaLabels: r,
      defaultedInline: d,
      defaultedConfig: M,
      defaultedRange: k,
      getDefaultPattern: P,
      getDefaultStartTime: b
    } = Re(n), { checkMinMaxRange: _ } = At(n), Y = ee(), $ = ee(null), w = ee(!1), K = ee(!1), N = q(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === !1,
        dp__input_focus: w.value || n.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        [n.inputClassName]: !!n.inputClassName
      })
    ), E = () => {
      a("set-input-date", null), n.autoApply && (a("set-empty-date"), Y.value = null);
    }, I = (f) => {
      const z = b();
      return Bl(
        f,
        i.value.format ?? P(),
        z ?? Ca({}, n.enableSeconds),
        n.inputValue,
        K.value
      );
    }, D = (f) => {
      const { rangeSeparator: z } = i.value, [ae, s] = f.split(`${z}`);
      if (ae) {
        const h = I(ae.trim()), o = s ? I(s.trim()) : null, S = h && o ? [h, o] : [h];
        _(o, S, 0) && (Y.value = h ? S : null);
      }
    }, R = () => {
      K.value = !0;
    }, V = (f) => {
      if (k.value.enabled)
        D(f);
      else if (n.multiDates) {
        const z = f.split(";");
        Y.value = z.map((ae) => I(ae.trim())).filter((ae) => ae);
      } else
        Y.value = I(f);
    }, ne = (f) => {
      var ae;
      const z = typeof f == "string" ? f : (ae = f.target) == null ? void 0 : ae.value;
      z !== "" ? (i.value.openMenu && !n.isMenuOpen && a("open"), V(z), a("set-input-date", Y.value)) : E(), K.value = !1, a("update:input-value", z);
    }, O = (f) => {
      i.value.enabled ? (V(f.target.value), i.value.enterSubmit && Rn(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0), Y.value = null) : i.value.enterSubmit && n.inputValue === "" && (Y.value = null, a("clear"))) : H(f);
    }, re = (f) => {
      i.value.enabled && i.value.tabSubmit && V(f.target.value), i.value.tabSubmit && Rn(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0, !0), Y.value = null) : i.value.tabSubmit && n.inputValue === "" && (Y.value = null, a("clear", !0));
    }, se = () => {
      var f;
      w.value = !0, a("focus"), i.value.enabled && i.value.selectOnFocus && ((f = $.value) == null || f.select());
    }, H = (f) => {
      f.preventDefault(), mt(f, M.value, !0), i.value.enabled && i.value.openMenu && !d.value.input && !n.isMenuOpen ? a("open") : i.value.enabled || a("toggle");
    }, g = () => {
      a("real-blur"), w.value = !1, (!n.isMenuOpen || d.value.enabled && d.value.input) && a("blur"), n.autoApply && i.value.enabled && Y.value && !n.isMenuOpen && (a("set-input-date", Y.value), a("select-date"), Y.value = null);
    }, T = (f) => {
      mt(f, M.value, !0), a("clear");
    }, G = (f) => {
      if (!i.value.enabled) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var f;
        (f = $.value) == null || f.focus({ preventScroll: !0 });
      },
      setParsedDate: (f) => {
        Y.value = f;
      }
    }), (f, z) => {
      var ae;
      return A(), W("div", { onClick: H }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !c(d).enabled ? oe(f.$slots, "trigger", { key: 0 }) : Z("", !0),
        !f.$slots.trigger && (!c(d).enabled || c(d).input) ? (A(), W("div", ir, [
          f.$slots["dp-input"] && !f.$slots.trigger && (!c(d).enabled || c(d).enabled && c(d).input) ? oe(f.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: ne,
            onEnter: O,
            onTab: re,
            onClear: T,
            onBlur: g,
            onKeypress: G,
            onPaste: R,
            openMenu: () => f.$emit("open"),
            closeMenu: () => f.$emit("close"),
            toggleMenu: () => f.$emit("toggle")
          }) : Z("", !0),
          f.$slots["dp-input"] ? Z("", !0) : (A(), W("input", {
            key: 1,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            ref_key: "inputRef",
            ref: $,
            name: f.name,
            class: De(N.value),
            inputmode: c(i).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (ae = c(r)) == null ? void 0 : ae.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === !1 ? !0 : void 0,
            onInput: ne,
            onKeydown: [
              fe(O, ["enter"]),
              fe(re, ["tab"]),
              G
            ],
            onBlur: g,
            onFocus: se,
            onKeypress: G,
            onPaste: R
          }, null, 42, ur)),
          ce("div", {
            onClick: z[2] || (z[2] = (s) => a("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (A(), W("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: z[0] || (z[0] = (s) => a("toggle"))
            }, [
              oe(f.$slots, "input-icon")
            ])) : Z("", !0),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (A(), we(c(Bt), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: z[1] || (z[1] = (s) => a("toggle"))
            })) : Z("", !0)
          ]),
          f.$slots["clear-icon"] && e.inputValue && f.clearable && !f.disabled && !f.readonly ? (A(), W("span", dr, [
            oe(f.$slots, "clear-icon", { clear: T })
          ])) : Z("", !0),
          f.clearable && !f.$slots["clear-icon"] && e.inputValue && !f.disabled && !f.readonly ? (A(), we(c(wa), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: z[3] || (z[3] = $e((s) => T(s), ["prevent"]))
          })) : Z("", !0)
        ])) : Z("", !0)
      ]);
    };
  }
}), fr = ["title"], vr = {
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, mr = ["disabled"], gr = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...nt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: i,
      defaultedMultiCalendars: r,
      defaultedTextInput: d,
      defaultedInline: M,
      defaultedRange: k,
      getDefaultPattern: P
    } = Re(a), { isValidTime: b } = At(a), { buildMatrix: _ } = ht(), Y = ee(null), $ = ee(null);
    ze(() => {
      a.arrowNavigation && _([Ne(Y), Ne($)], "actionRow");
    });
    const w = q(() => k.value.enabled && !k.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), K = q(() => !N.value || !E.value || !w.value), N = q(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : b(a.internalModelValue)), E = q(() => a.monthPicker ? k.value.enabled && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((g) => !re(g)).length : re(a.internalModelValue) : !0), I = () => {
      const H = i.value;
      return a.timePicker || a.monthPicker, H(Oe(a.internalModelValue));
    }, D = () => {
      const H = a.internalModelValue;
      return r.value.count > 0 ? `${R(H[0])} - ${R(H[1])}` : [R(H[0]), R(H[1])];
    }, R = (H) => Oa(
      H,
      i.value,
      a.formatLocale,
      d.value.rangeSeparator,
      a.modelAuto,
      P()
    ), V = q(() => !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? D() : a.multiDates ? a.internalModelValue.map((H) => `${R(H)}`) : a.modelAuto ? `${R(a.internalModelValue[0])}` : `${R(a.internalModelValue[0])} -` : R(a.internalModelValue) : I()), ne = () => a.multiDates ? "; " : " - ", O = q(
      () => Array.isArray(V.value) ? V.value.join(ne()) : V.value
    ), re = (H) => {
      if (!a.monthPicker)
        return !0;
      let g = !0;
      const T = F(Je(H));
      if (a.minDate && a.maxDate) {
        const G = F(Je(a.minDate)), te = F(Je(a.maxDate));
        return _e(T, G) && Ce(T, te) || ye(T, G) || ye(T, te);
      }
      if (a.minDate) {
        const G = F(Je(a.minDate));
        g = _e(T, G) || ye(T, G);
      }
      if (a.maxDate) {
        const G = F(Je(a.maxDate));
        g = Ce(T, G) || ye(T, G);
      }
      return g;
    }, se = () => {
      N.value && E.value && w.value ? l("select-date") : l("invalid-select");
    };
    return (H, g) => (A(), W("div", {
      class: "dp__action_row",
      style: xe(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      H.$slots["action-row"] ? oe(H.$slots, "action-row", Ye(Ee({ key: 0 }, {
        internalModelValue: H.internalModelValue,
        disabled: K.value,
        selectDate: () => H.$emit("select-date"),
        closePicker: () => H.$emit("close-picker")
      }))) : (A(), W(ke, { key: 1 }, [
        c(n).showPreview ? (A(), W("div", {
          key: 0,
          class: "dp__selection_preview",
          title: O.value
        }, [
          H.$slots["action-preview"] ? oe(H.$slots, "action-preview", {
            key: 0,
            value: H.internalModelValue
          }) : Z("", !0),
          H.$slots["action-preview"] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
            dt(He(O.value), 1)
          ], 64))
        ], 8, fr)) : Z("", !0),
        ce("div", vr, [
          H.$slots["action-buttons"] ? oe(H.$slots, "action-buttons", {
            key: 0,
            value: H.internalModelValue
          }) : Z("", !0),
          H.$slots["action-buttons"] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
            !c(M).enabled && c(n).showCancel ? (A(), W("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: Y,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: g[0] || (g[0] = (T) => H.$emit("close-picker")),
              onKeydown: [
                g[1] || (g[1] = fe((T) => H.$emit("close-picker"), ["enter"])),
                g[2] || (g[2] = fe((T) => H.$emit("close-picker"), ["space"]))
              ]
            }, He(H.cancelText), 545)) : Z("", !0),
            c(n).showNow ? (A(), W("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: g[3] || (g[3] = (T) => H.$emit("select-now")),
              onKeydown: [
                g[4] || (g[4] = fe((T) => H.$emit("select-now"), ["enter"])),
                g[5] || (g[5] = fe((T) => H.$emit("select-now"), ["space"]))
              ]
            }, He(H.nowButtonLabel), 33)) : Z("", !0),
            c(n).showSelect ? (A(), W("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: $,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: K.value,
              onKeydown: [
                fe(se, ["enter"]),
                fe(se, ["space"])
              ],
              onClick: se
            }, He(H.selectText), 41, mr)) : Z("", !0)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), yr = ["onKeydown"], pr = { class: "dp__selection_grid_header" }, hr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], br = ["aria-label"], Gt = /* @__PURE__ */ Fe({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: i } = ht(), r = l, d = e, { defaultedAriaLabels: M, defaultedTextInput: k, defaultedConfig: P } = Re(
      d
    ), { hideNavigationButtons: b } = on(), _ = ee(!1), Y = ee(null), $ = ee(null), w = ee([]), K = ee(), N = ee(null), E = ee(0), I = ee(null);
    Ua(() => {
      Y.value = null;
    }), ze(() => {
      pt().then(() => H()), d.noOverlayFocus || R(), D(!0);
    }), Cn(() => D(!1));
    const D = (s) => {
      var h;
      d.arrowNavigation && ((h = d.headerRefs) != null && h.length ? i(s) : a(s));
    }, R = () => {
      var h;
      const s = Ne($);
      s && (k.value.enabled || (Y.value ? (h = Y.value) == null || h.focus({ preventScroll: !0 }) : s.focus({ preventScroll: !0 })), _.value = s.clientHeight < s.scrollHeight);
    }, V = q(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !d.useRelative,
        "dp--overlay-relative": d.useRelative
      })
    ), ne = q(
      () => d.useRelative ? { height: `${d.height}px`, width: "260px" } : void 0
    ), O = q(() => ({
      dp__overlay_col: !0
    })), re = q(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: _.value,
        dp__button_bottom: d.isLast
      })
    ), se = q(() => {
      var s, h;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((s = d.items) == null ? void 0 : s.length) <= 6,
        dp__container_block: ((h = d.items) == null ? void 0 : h.length) > 6
      };
    });
    yt(
      () => d.items,
      () => H(!1),
      { deep: !0 }
    );
    const H = (s = !0) => {
      pt().then(() => {
        const h = Ne(Y), o = Ne($), S = Ne(N), u = Ne(I), B = S ? S.getBoundingClientRect().height : 0;
        o && (o.getBoundingClientRect().height ? E.value = o.getBoundingClientRect().height - B : E.value = P.value.modeHeight - B), h && u && s && (u.scrollTop = h.offsetTop - u.offsetTop - (E.value / 2 - h.getBoundingClientRect().height) - B);
      });
    }, g = (s) => {
      s.disabled || r("selected", s.value);
    }, T = () => {
      r("toggle"), r("reset-flow");
    }, G = () => {
      d.escClose && T();
    }, te = (s, h, o, S) => {
      s && ((h.active || h.value === d.focusValue) && (Y.value = s), d.arrowNavigation && (Array.isArray(w.value[o]) ? w.value[o][S] = s : w.value[o] = [s], m()));
    }, m = () => {
      var h, o;
      const s = (h = d.headerRefs) != null && h.length ? [d.headerRefs].concat(w.value) : w.value.concat([d.skipButtonRef ? [] : [N.value]]);
      n(Oe(s), (o = d.headerRefs) != null && o.length ? "monthPicker" : "selectionGrid");
    }, f = (s) => {
      d.arrowNavigation || mt(s, P.value, !0);
    }, z = (s) => {
      K.value = s, r("hover-value", s);
    }, ae = () => {
      if (T(), !d.isLast) {
        const s = Nl(d.menuWrapRef ?? null, "action-row");
        if (s) {
          const h = Ta(s);
          h == null || h.focus();
        }
      }
    };
    return t({ focusGrid: R }), (s, h) => {
      var o;
      return A(), W("div", {
        ref_key: "gridWrapRef",
        ref: $,
        class: De(V.value),
        style: xe(ne.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          fe($e(G, ["prevent"]), ["esc"]),
          h[0] || (h[0] = fe($e((S) => f(S), ["prevent"]), ["left"])),
          h[1] || (h[1] = fe($e((S) => f(S), ["prevent"]), ["up"])),
          h[2] || (h[2] = fe($e((S) => f(S), ["prevent"]), ["down"])),
          h[3] || (h[3] = fe($e((S) => f(S), ["prevent"]), ["right"]))
        ]
      }, [
        ce("div", {
          ref_key: "containerRef",
          ref: I,
          class: De(se.value),
          role: "grid",
          style: xe({ height: `${E.value}px` })
        }, [
          ce("div", pr, [
            oe(s.$slots, "header")
          ]),
          s.$slots.overlay ? oe(s.$slots, "overlay", { key: 0 }) : (A(!0), W(ke, { key: 1 }, Pe(s.items, (S, u) => (A(), W("div", {
            key: u,
            class: De(["dp__overlay_row", { dp__flex_row: s.items.length >= 3 }]),
            role: "row"
          }, [
            (A(!0), W(ke, null, Pe(S, (B, p) => (A(), W("div", {
              key: B.value,
              ref_for: !0,
              ref: (J) => te(J, B, u, p),
              role: "gridcell",
              class: De(O.value),
              "aria-selected": B.active || void 0,
              "aria-disabled": B.disabled || void 0,
              tabindex: "0",
              onClick: (J) => g(B),
              onKeydown: [
                fe($e((J) => g(B), ["prevent"]), ["enter"]),
                fe($e((J) => g(B), ["prevent"]), ["space"])
              ],
              onMouseover: (J) => z(B.value)
            }, [
              ce("div", {
                class: De(B.className)
              }, [
                s.$slots.item ? oe(s.$slots, "item", {
                  key: 0,
                  item: B
                }) : Z("", !0),
                s.$slots.item ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                  dt(He(B.text), 1)
                ], 64))
              ], 2)
            ], 42, hr))), 128))
          ], 2))), 128))
        ], 6),
        s.$slots["button-icon"] ? en((A(), W("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: N,
          type: "button",
          "aria-label": (o = c(M)) == null ? void 0 : o.toggleOverlay,
          class: De(re.value),
          tabindex: "0",
          onClick: T,
          onKeydown: [
            fe(T, ["enter"]),
            fe(ae, ["tab"])
          ]
        }, [
          oe(s.$slots, "button-icon")
        ], 42, br)), [
          [tn, !c(b)(s.hideNavigation, s.type)]
        ]) : Z("", !0)
      ], 46, yr);
    };
  }
}), un = /* @__PURE__ */ Fe({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, l = q(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = q(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, i) => (A(), W("div", {
      class: De({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      (A(!0), W(ke, null, Pe(l.value, (r, d) => (A(), W("div", {
        key: r,
        class: De(a.value)
      }, [
        oe(n.$slots, "default", {
          instance: r,
          index: d
        })
      ], 2))), 128))
    ], 2));
  }
}), kr = ["aria-label", "aria-disabled"], Ht = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, a = ee(null);
    return ze(() => l("set-ref", a)), (n, i) => (A(), W("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: i[0] || (i[0] = (r) => n.$emit("activate")),
      onKeydown: [
        i[1] || (i[1] = fe($e((r) => n.$emit("activate"), ["prevent"]), ["enter"])),
        i[2] || (i[2] = fe($e((r) => n.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      ce("span", {
        class: De(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        oe(n.$slots, "default")
      ], 2)
    ], 40, kr));
  }
}), wr = { class: "dp--year-mode-picker" }, Dr = ["aria-label"], Ba = /* @__PURE__ */ Fe({
  __name: "YearModePicker",
  props: {
    ...nt,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, a = e, { showRightIcon: n, showLeftIcon: i } = on(), { defaultedConfig: r, defaultedMultiCalendars: d, defaultedAriaLabels: M, defaultedTransitions: k } = Re(a), { showTransition: P, transitionName: b } = jt(k), _ = (w = !1, K) => {
      l("toggle-year-picker", { flow: w, show: K });
    }, Y = (w) => {
      l("year-select", w);
    }, $ = (w = !1) => {
      l("handle-year", w);
    };
    return (w, K) => {
      var N, E, I;
      return A(), W("div", wr, [
        c(i)(c(d), e.instance) ? (A(), we(Ht, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (N = c(M)) == null ? void 0 : N.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: K[0] || (K[0] = (D) => $(!1))
        }, {
          default: pe(() => [
            w.$slots["arrow-left"] ? oe(w.$slots, "arrow-left", { key: 0 }) : Z("", !0),
            w.$slots["arrow-left"] ? Z("", !0) : (A(), we(c(Nn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Z("", !0),
        ce("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (E = c(M)) == null ? void 0 : E.openYearsOverlay,
          onClick: K[1] || (K[1] = () => _(!1)),
          onKeydown: K[2] || (K[2] = fe(() => _(!1), ["enter"]))
        }, [
          w.$slots.year ? oe(w.$slots, "year", {
            key: 0,
            year: e.year
          }) : Z("", !0),
          w.$slots.year ? Z("", !0) : (A(), W(ke, { key: 1 }, [
            dt(He(e.year), 1)
          ], 64))
        ], 40, Dr),
        c(n)(c(d), e.instance) ? (A(), we(Ht, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (I = c(M)) == null ? void 0 : I.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: K[3] || (K[3] = (D) => $(!0))
        }, {
          default: pe(() => [
            w.$slots["arrow-right"] ? oe(w.$slots, "arrow-right", { key: 0 }) : Z("", !0),
            w.$slots["arrow-right"] ? Z("", !0) : (A(), we(c(Bn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Z("", !0),
        Ke(Nt, {
          name: c(b)(e.showYearPicker),
          css: c(P)
        }, {
          default: pe(() => [
            e.showYearPicker ? (A(), we(Gt, {
              key: 0,
              items: e.items,
              "text-input": w.textInput,
              "esc-close": w.escClose,
              config: w.config,
              "is-last": w.autoApply && !c(r).keepActionRow,
              "hide-navigation": w.hideNavigation,
              type: "year",
              onToggle: _,
              onSelected: K[4] || (K[4] = (D) => Y(D))
            }, Ue({
              "button-icon": pe(() => [
                w.$slots["calendar-icon"] ? oe(w.$slots, "calendar-icon", { key: 0 }) : Z("", !0),
                w.$slots["calendar-icon"] ? Z("", !0) : (A(), we(c(Bt), { key: 1 }))
              ]),
              _: 2
            }, [
              w.$slots["year-overlay-value"] ? {
                name: "item",
                fn: pe(({ item: D }) => [
                  oe(w.$slots, "year-overlay-value", {
                    text: D.text,
                    value: D.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : Z("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), zn = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => ye(e, a))) {
      const a = t.value.filter((n) => !ye(n, e));
      t.value = a.length ? a : null;
    } else
      (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, jn = (e, t, l) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? Ce(t, a[0]) ? (a.unshift(t), l("range-start", a[0]), l("range-start", a[1])) : (a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), e.value = a, a;
}, dn = (e, t, l, a) => {
  e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply");
}, Ia = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => tt(F(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = tt(F(e.value), e.timezone));
}, Ea = ({
  multiCalendars: e,
  highlight: t,
  calendars: l,
  modelValue: a,
  props: n,
  year: i,
  month: r,
  emit: d
}) => {
  const M = q(() => Ln(n.yearRange, n.reverseYears)), k = ee([!1]), P = q(() => (D, R) => {
    const V = Ae(Je(/* @__PURE__ */ new Date()), {
      month: r.value(D),
      year: i.value(D)
    });
    return _a(V, n.maxDate, n.minDate, n.preventMinMaxNavigation, R);
  }), b = () => {
    for (let D = 0; D < e.value.count; D++)
      if (D === 0)
        l.value[D] = l.value[0];
      else {
        const R = Ae(F(), l.value[D - 1]);
        l.value[D] = { month: be(R), year: ge(ha(R, 1)) };
      }
  }, _ = (D) => {
    if (!D)
      return b();
    const R = Ae(F(), l.value[D]);
    return l.value[0].year = ge(ba(R, e.value.count - 1)), b();
  }, Y = (D) => n.focusStartDate ? D[0] : D[1] ? D[1] : D[0], $ = () => {
    if (a.value) {
      const D = Array.isArray(a.value) ? Y(a.value) : a.value;
      l.value[0] = { month: be(D), year: ge(D) };
    }
  };
  ze(() => {
    $(), e.value.count && b();
  });
  const w = (D, R) => {
    l.value[R].year = D, e.value.count && !e.value.solo && _(R);
  }, K = q(() => (D) => Ot(M.value, (R) => {
    const V = i.value(D) === R.value, ne = Ut(R.value, Yt(n.minDate), Yt(n.maxDate)), O = Un(t.value, R.value);
    return { active: V, disabled: ne, highlighted: O };
  })), N = (D, R) => {
    w(D, R), I(R);
  }, E = (D, R = !1) => {
    if (!P.value(D, R)) {
      const V = R ? i.value(D) + 1 : i.value(D) - 1;
      w(V, D);
    }
  }, I = (D, R = !1, V) => {
    R || d("reset-flow"), V !== void 0 ? k.value[D] = V : k.value[D] = !k.value[D], k.value || d("overlay-closed");
  };
  return {
    isDisabled: P,
    groupedYears: K,
    showYearPicker: k,
    selectYear: w,
    toggleYearPicker: I,
    handleYearSelect: N,
    handleYear: E
  };
}, Mr = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    defaultedRange: r,
    defaultedHighlight: d
  } = Re(e), { modelValue: M, year: k, month: P, calendars: b } = Kt(e, t), _ = q(() => Ma(e.formatLocale, e.locale, e.monthNameFormat)), Y = ee(null), {
    selectYear: $,
    groupedYears: w,
    showYearPicker: K,
    toggleYearPicker: N,
    handleYearSelect: E,
    handleYear: I,
    isDisabled: D
  } = Ea({
    modelValue: M,
    multiCalendars: l,
    highlight: d,
    calendars: b,
    year: k,
    month: P,
    props: e,
    emit: t
  });
  ze(() => {
    e.startDate && (M.value && e.focusStartDate || !M.value) && $(ge(F(e.startDate)), 0);
  });
  const R = (s) => s ? { month: be(s), year: ge(s) } : { month: null, year: null }, V = () => M.value ? Array.isArray(M.value) ? M.value.map((s) => R(s)) : R(M.value) : R(), ne = (s, h) => {
    const o = b.value[s], S = V();
    return Array.isArray(S) ? S.some((u) => u.year === (o == null ? void 0 : o.year) && u.month === h) : (o == null ? void 0 : o.year) === S.year && h === S.month;
  }, O = (s, h, o) => {
    var u, B;
    const S = V();
    return Array.isArray(S) ? k.value(h) === ((u = S[o]) == null ? void 0 : u.year) && s === ((B = S[o]) == null ? void 0 : B.month) : !1;
  }, re = (s, h) => {
    if (r.value.enabled) {
      const o = V();
      if (Array.isArray(M.value) && Array.isArray(o)) {
        const S = O(s, h, 0) || O(s, h, 1), u = it(Je(F()), s, k.value(h));
        return rn(M.value, Y.value, u) && !S;
      }
      return !1;
    }
    return !1;
  }, se = q(() => (s) => Ot(_.value, (h) => {
    const o = ne(s, h.value), S = Ut(
      h.value,
      Aa(k.value(s), e.minDate),
      Sa(k.value(s), e.maxDate)
    ) || Wl(e.disabledDates, k.value(s)).includes(h.value), u = re(h.value, s), B = Ya(d.value, h.value, k.value(s));
    return { active: o, disabled: S, isBetween: u, highlighted: B };
  })), H = (s, h) => it(Je(F()), s, k.value(h)), g = (s, h) => {
    const o = M.value ? M.value : Je(/* @__PURE__ */ new Date());
    M.value = it(o, s, k.value(h)), t("auto-apply"), t("update-flow-step");
  }, T = (s, h) => {
    const o = jn(M, H(s, h), t);
    dn(o, t, e.autoApply, e.modelAuto);
  }, G = (s, h) => {
    zn(H(s, h), M, e.multiDatesLimit), t("auto-apply", !0);
  }, te = (s, h) => (b.value[h].month = s, f(h, b.value[h].year, s), e.multiDates ? G(s, h) : r.value.enabled ? T(s, h) : g(s, h)), m = (s, h) => {
    $(s, h), f(h, s, null);
  }, f = (s, h, o) => {
    let S = o;
    if (!S && S !== 0) {
      const u = V();
      S = Array.isArray(u) ? u[s].month : u.month;
    }
    t("update-month-year", { instance: s, year: h, month: S });
  };
  return {
    groupedMonths: se,
    groupedYears: w,
    year: k,
    isDisabled: D,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    showYearPicker: K,
    modelValue: M,
    presetDate: (s, h) => {
      Ia({
        value: s,
        modelValue: M,
        range: r.value.enabled,
        timezone: h ? void 0 : e.timezone
      }), t("auto-apply");
    },
    setHoverDate: (s, h) => {
      Y.value = H(s, h);
    },
    selectMonth: te,
    selectYear: m,
    toggleYearPicker: N,
    handleYearSelect: E,
    handleYear: I,
    getModelMonthYear: V
  };
}, $r = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...nt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = Tt(), i = Ge(n, "yearMode"), r = e;
    ze(() => {
      r.shadow || a("mount", null);
    });
    const {
      groupedMonths: d,
      groupedYears: M,
      year: k,
      isDisabled: P,
      defaultedMultiCalendars: b,
      defaultedConfig: _,
      showYearPicker: Y,
      modelValue: $,
      presetDate: w,
      setHoverDate: K,
      selectMonth: N,
      selectYear: E,
      toggleYearPicker: I,
      handleYearSelect: D,
      handleYear: R,
      getModelMonthYear: V
    } = Mr(r, a);
    return t({ getSidebarProps: () => ({
      modelValue: $,
      year: k,
      getModelMonthYear: V,
      selectMonth: N,
      selectYear: E,
      handleYear: R
    }), presetDate: w, toggleYearPicker: (O) => I(0, O) }), (O, re) => (A(), we(un, {
      "multi-calendars": c(b).count,
      collapse: O.collapse,
      stretch: ""
    }, {
      default: pe(({ instance: se }) => [
        O.$slots["month-year"] ? oe(O.$slots, "month-year", Ye(Ee({ key: 0 }, {
          year: c(k),
          months: c(d)(se),
          years: c(M)(se),
          selectMonth: c(N),
          selectYear: c(E),
          instance: se
        }))) : (A(), we(Gt, {
          key: 1,
          items: c(d)(se),
          "arrow-navigation": O.arrowNavigation,
          "is-last": O.autoApply && !c(_).keepActionRow,
          "esc-close": O.escClose,
          height: c(_).modeHeight,
          config: O.config,
          "no-overlay-focus": !!(O.noOverlayFocus || O.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (H) => c(N)(H, se),
          onHoverValue: (H) => c(K)(H, se)
        }, {
          header: pe(() => [
            Ke(Ba, Ee(O.$props, {
              items: c(M)(se),
              instance: se,
              "show-year-picker": c(Y)[se],
              year: c(k)(se),
              "is-disabled": (H) => c(P)(se, H),
              onHandleYear: (H) => c(R)(se, H),
              onYearSelect: (H) => c(D)(H, se),
              onToggleYearPicker: (H) => c(I)(se, H == null ? void 0 : H.flow, H == null ? void 0 : H.show)
            }), Ue({ _: 2 }, [
              Pe(c(i), (H, g) => ({
                name: H,
                fn: pe((T) => [
                  oe(O.$slots, H, Ye(We(T)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Tr = (e, t) => {
  const { modelValue: l } = Kt(e, t), a = ee(null), { defaultedHighlight: n, defaultedFilters: i, defaultedRange: r } = Re(e), d = ee();
  ze(() => {
    e.startDate && (l.value && e.focusStartDate || !l.value) && (d.value = ge(F(e.startDate)));
  });
  const M = ($) => Array.isArray(l.value) ? l.value.some((w) => ge(w) === $) : l.value ? ge(l.value) === $ : !1, k = ($) => r.value.enabled && Array.isArray(l.value) ? rn(l.value, a.value, b($)) : !1, P = q(() => Ot(Ln(e.yearRange, e.reverseYears), ($) => {
    const w = M($.value), K = Ut($.value, Yt(e.minDate), Yt(e.maxDate)) || i.value.years.includes($.value), N = k($.value) && !w, E = Un(n.value, $.value);
    return { active: w, disabled: K, isBetween: N, highlighted: E };
  })), b = ($) => rt(Je(/* @__PURE__ */ new Date()), $);
  return {
    groupedYears: P,
    modelValue: l,
    focusYear: d,
    setHoverValue: ($) => {
      a.value = rt(Je(/* @__PURE__ */ new Date()), $);
    },
    selectYear: ($) => {
      var w;
      if (t("update-month-year", { instance: 0, year: $ }), e.multiDates)
        return l.value ? Array.isArray(l.value) && (((w = l.value) == null ? void 0 : w.map((N) => ge(N))).includes($) ? l.value = l.value.filter((N) => ge(N) !== $) : l.value.push(rt(Ve(F()), $))) : l.value = [rt(Ve(F()), $)], t("auto-apply", !0);
      if (r.value.enabled) {
        const K = jn(l, b($), t);
        return dn(K, t, e.autoApply, e.modelAuto);
      }
      l.value = b($), t("auto-apply");
    }
  };
}, Ar = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...nt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { groupedYears: i, modelValue: r, focusYear: d, selectYear: M, setHoverValue: k } = Tr(n, a), { defaultedConfig: P } = Re(n);
    return t({ getSidebarProps: () => ({
      modelValue: r,
      selectYear: M
    }) }), (_, Y) => (A(), W("div", null, [
      _.$slots["month-year"] ? oe(_.$slots, "month-year", Ye(Ee({ key: 0 }, {
        years: c(i),
        selectYear: c(M)
      }))) : (A(), we(Gt, {
        key: 1,
        items: c(i),
        "is-last": _.autoApply && !c(P).keepActionRow,
        height: c(P).modeHeight,
        config: _.config,
        "no-overlay-focus": !!(_.noOverlayFocus || _.textInput),
        "focus-value": c(d),
        type: "year",
        "use-relative": "",
        onSelected: c(M),
        onHoverValue: c(k)
      }, Ue({ _: 2 }, [
        _.$slots["year-overlay-value"] ? {
          name: "item",
          fn: pe(({ item: $ }) => [
            oe(_.$slots, "year-overlay-value", {
              text: $.text,
              value: $.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Sr = {
  key: 0,
  class: "dp__time_input"
}, Pr = ["aria-label", "onKeydown", "onClick"], Rr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Cr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), _r = ["aria-label", "disabled", "onKeydown", "onClick"], Or = ["aria-label", "onKeydown", "onClick"], Yr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Nr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Br = { key: 0 }, Ir = ["aria-label", "onKeydown"], Er = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...nt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { setTimePickerElements: i, setTimePickerBackRef: r } = ht(), { defaultedAriaLabels: d, defaultedTransitions: M, defaultedFilters: k, defaultedConfig: P, defaultedRange: b } = Re(n), { transitionName: _, showTransition: Y } = jt(M), $ = zt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), w = ee("AM"), K = ee(null), N = ee([]);
    ze(() => {
      a("mounted");
    });
    const E = (v) => Ae(/* @__PURE__ */ new Date(), {
      hours: v.hours,
      minutes: v.minutes,
      seconds: n.enableSeconds ? v.seconds : 0,
      milliseconds: 0
    }), I = q(
      () => (v) => te(v, n[v]) || R(v, n[v])
    ), D = q(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), R = (v, Q) => b.value.enabled && !b.value.disableTimeRangeValidation ? !n.validateTime(v, Q) : !1, V = (v, Q) => {
      if (b.value.enabled && !b.value.disableTimeRangeValidation) {
        const he = Q ? +n[`${v}Increment`] : -+n[`${v}Increment`], L = n[v] + he;
        return !n.validateTime(v, L);
      }
      return !1;
    }, ne = q(() => (v) => !ae(+n[v] + +n[`${v}Increment`], v) || V(v, !0)), O = q(() => (v) => !ae(+n[v] - +n[`${v}Increment`], v) || V(v, !1)), re = (v, Q) => ka(Ae(F(), v), Q), se = (v, Q) => xa(Ae(F(), v), Q), H = q(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), g = q(() => {
      const v = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return n.enableSeconds ? v.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : v;
    }), T = q(() => g.value.filter((v) => !v.separator)), G = q(() => (v) => {
      if (v === "hours") {
        const Q = u(+n.hours);
        return { text: Q < 10 ? `0${Q}` : `${Q}`, value: Q };
      }
      return { text: n[v] < 10 ? `0${n[v]}` : `${n[v]}`, value: n[v] };
    }), te = (v, Q) => {
      var L;
      if (!n.disabledTimesConfig)
        return !1;
      const he = n.disabledTimesConfig(n.order, v === "hours" ? Q : void 0);
      return he[v] ? !!((L = he[v]) != null && L.includes(Q)) : !0;
    }, m = (v) => {
      const Q = n.is24 ? 24 : 12, he = v === "hours" ? Q : 60, L = +n[`${v}GridIncrement`], C = v === "hours" && !n.is24 ? L : 0, U = [];
      for (let ve = C; ve < he; ve += L)
        U.push({ value: ve, text: ve < 10 ? `0${ve}` : `${ve}` });
      return v === "hours" && !n.is24 && U.push({ value: 0, text: "12" }), Ot(U, (ve) => ({ active: !1, disabled: k.value.times[v].includes(ve.value) || !ae(ve.value, v) || te(v, ve.value) || R(v, ve.value) }));
    }, f = (v) => v >= 0 ? v : 59, z = (v) => v >= 0 ? v : 23, ae = (v, Q) => {
      const he = n.minTime ? E(pn(n.minTime)) : null, L = n.maxTime ? E(pn(n.maxTime)) : null, C = E(
        pn(
          D.value,
          Q,
          Q === "minutes" || Q === "seconds" ? f(v) : z(v)
        )
      );
      return he && L ? (Vt(C, L) || Ct(C, L)) && (Lt(C, he) || Ct(C, he)) : he ? Lt(C, he) || Ct(C, he) : L ? Vt(C, L) || Ct(C, L) : !0;
    }, s = (v) => n[`no${v[0].toUpperCase() + v.slice(1)}Overlay`], h = (v) => {
      s(v) || ($[v] = !$[v], $[v] || a("overlay-closed"));
    }, o = (v) => v === "hours" ? et : v === "minutes" ? ot : _t, S = (v, Q = !0) => {
      const he = Q ? re : se, L = Q ? +n[`${v}Increment`] : -+n[`${v}Increment`];
      ae(+n[v] + L, v) && a(
        `update:${v}`,
        o(v)(he({ [v]: +n[v] }, { [v]: +n[`${v}Increment`] }))
      );
    }, u = (v) => n.is24 ? v : (v >= 12 ? w.value = "PM" : w.value = "AM", Rl(v)), B = () => {
      w.value === "PM" ? (w.value = "AM", a("update:hours", n.hours - 12)) : (w.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", w.value);
    }, p = (v) => {
      $[v] = !0;
    }, J = (v, Q, he) => {
      if (v && n.arrowNavigation) {
        Array.isArray(N.value[Q]) ? N.value[Q][he] = v : N.value[Q] = [v];
        const L = N.value.reduce(
          (C, U) => U.map((ve, Me) => [...C[Me] || [], U[Me]]),
          []
        );
        r(n.closeTimePickerBtn), K.value && (L[1] = L[1].concat(K.value)), i(L, n.order);
      }
    }, le = (v, Q) => (h(v), v === "hours" && !n.is24 ? a(`update:${v}`, w.value === "PM" ? Q + 12 : Q) : a(`update:${v}`, Q));
    return t({ openChildCmp: p }), (v, Q) => {
      var he;
      return v.disabled ? Z("", !0) : (A(), W("div", Sr, [
        (A(!0), W(ke, null, Pe(g.value, (L, C) => {
          var U, ve, Me;
          return A(), W("div", {
            key: C,
            class: De(H.value)
          }, [
            L.separator ? (A(), W(ke, { key: 0 }, [
              dt(" : ")
            ], 64)) : (A(), W(ke, { key: 1 }, [
              ce("button", {
                ref_for: !0,
                ref: (j) => J(j, C, 0),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !v.timePickerInline,
                  dp__inc_dec_button_inline: v.timePickerInline,
                  dp__tp_inline_btn_top: v.timePickerInline,
                  dp__inc_dec_button_disabled: ne.value(L.type)
                }),
                "aria-label": (U = c(d)) == null ? void 0 : U.incrementValue(L.type),
                tabindex: "0",
                onKeydown: [
                  fe($e((j) => S(L.type), ["prevent"]), ["enter"]),
                  fe($e((j) => S(L.type), ["prevent"]), ["space"])
                ],
                onClick: (j) => S(L.type)
              }, [
                n.timePickerInline ? (A(), W(ke, { key: 1 }, [
                  Rr,
                  Cr
                ], 64)) : (A(), W(ke, { key: 0 }, [
                  v.$slots["arrow-up"] ? oe(v.$slots, "arrow-up", { key: 0 }) : Z("", !0),
                  v.$slots["arrow-up"] ? Z("", !0) : (A(), we(c(En), { key: 1 }))
                ], 64))
              ], 42, Pr),
              ce("button", {
                ref_for: !0,
                ref: (j) => J(j, C, 1),
                type: "button",
                "aria-label": (ve = c(d)) == null ? void 0 : ve.openTpOverlay(L.type),
                class: De({
                  dp__time_display: !0,
                  dp__time_display_block: !v.timePickerInline,
                  dp__time_display_inline: v.timePickerInline,
                  "dp--time-invalid": I.value(L.type),
                  "dp--time-overlay-btn": !I.value(L.type)
                }),
                disabled: s(L.type),
                tabindex: "0",
                onKeydown: [
                  fe($e((j) => h(L.type), ["prevent"]), ["enter"]),
                  fe($e((j) => h(L.type), ["prevent"]), ["space"])
                ],
                onClick: (j) => h(L.type)
              }, [
                v.$slots[L.type] ? oe(v.$slots, L.type, {
                  key: 0,
                  text: G.value(L.type).text,
                  value: G.value(L.type).value
                }) : Z("", !0),
                v.$slots[L.type] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                  dt(He(G.value(L.type).text), 1)
                ], 64))
              ], 42, _r),
              ce("button", {
                ref_for: !0,
                ref: (j) => J(j, C, 2),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !v.timePickerInline,
                  dp__inc_dec_button_inline: v.timePickerInline,
                  dp__tp_inline_btn_bottom: v.timePickerInline,
                  dp__inc_dec_button_disabled: O.value(L.type)
                }),
                "aria-label": (Me = c(d)) == null ? void 0 : Me.decrementValue(L.type),
                tabindex: "0",
                onKeydown: [
                  fe($e((j) => S(L.type, !1), ["prevent"]), ["enter"]),
                  fe($e((j) => S(L.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (j) => S(L.type, !1)
              }, [
                n.timePickerInline ? (A(), W(ke, { key: 1 }, [
                  Yr,
                  Nr
                ], 64)) : (A(), W(ke, { key: 0 }, [
                  v.$slots["arrow-down"] ? oe(v.$slots, "arrow-down", { key: 0 }) : Z("", !0),
                  v.$slots["arrow-down"] ? Z("", !0) : (A(), we(c(Fn), { key: 1 }))
                ], 64))
              ], 42, Or)
            ], 64))
          ], 2);
        }), 128)),
        v.is24 ? Z("", !0) : (A(), W("div", Br, [
          v.$slots["am-pm-button"] ? oe(v.$slots, "am-pm-button", {
            key: 0,
            toggle: B,
            value: w.value
          }) : Z("", !0),
          v.$slots["am-pm-button"] ? Z("", !0) : (A(), W("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: K,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (he = c(d)) == null ? void 0 : he.amPmButton,
            tabindex: "0",
            onClick: B,
            onKeydown: [
              fe($e(B, ["prevent"]), ["enter"]),
              fe($e(B, ["prevent"]), ["space"])
            ]
          }, He(w.value), 41, Ir))
        ])),
        (A(!0), W(ke, null, Pe(T.value, (L, C) => (A(), we(Nt, {
          key: C,
          name: c(_)($[L.type]),
          css: c(Y)
        }, {
          default: pe(() => [
            $[L.type] ? (A(), we(Gt, {
              key: 0,
              items: m(L.type),
              "is-last": v.autoApply && !c(P).keepActionRow,
              "esc-close": v.escClose,
              type: L.type,
              "text-input": v.textInput,
              config: v.config,
              "arrow-navigation": v.arrowNavigation,
              onSelected: (U) => le(L.type, U),
              onToggle: (U) => h(L.type),
              onResetFlow: Q[0] || (Q[0] = (U) => v.$emit("reset-flow"))
            }, Ue({
              "button-icon": pe(() => [
                v.$slots["clock-icon"] ? oe(v.$slots, "clock-icon", { key: 0 }) : Z("", !0),
                v.$slots["clock-icon"] ? Z("", !0) : (A(), we(_n(v.timePickerInline ? c(Bt) : c(In)), { key: 1 }))
              ]),
              _: 2
            }, [
              v.$slots[`${L.type}-overlay-value`] ? {
                name: "item",
                fn: pe(({ item: U }) => [
                  oe(v.$slots, `${L.type}-overlay-value`, {
                    text: U.text,
                    value: U.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : Z("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Fr = { class: "dp--tp-wrap" }, Hr = ["aria-label", "tabindex"], Vr = ["tabindex"], Lr = ["aria-label"], Fa = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...nt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMatrix: i, setTimePicker: r } = ht(), d = Tt(), { defaultedTransitions: M, defaultedAriaLabels: k, defaultedTextInput: P, defaultedConfig: b, defaultedRange: _ } = Re(n), { transitionName: Y, showTransition: $ } = jt(M), { hideNavigationButtons: w } = on(), K = ee(null), N = ee(null), E = ee([]), I = ee(null);
    ze(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? i([Ne(K.value)], "time") : r(!0, n.timePicker);
    });
    const D = q(() => _.value.enabled && n.modelAuto ? $a(n.internalModelValue) : !0), R = ee(!1), V = (m) => ({
      hours: Array.isArray(n.hours) ? n.hours[m] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[m] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[m] : n.seconds
    }), ne = q(() => {
      const m = [];
      if (_.value.enabled)
        for (let f = 0; f < 2; f++)
          m.push(V(f));
      else
        m.push(V(0));
      return m;
    }), O = (m, f = !1, z = "") => {
      f || a("reset-flow"), R.value = m, a(m ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && r(m), pt(() => {
        z !== "" && E.value[0] && E.value[0].openChildCmp(z);
      });
    }, re = q(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !b.value.keepActionRow
    })), se = Ge(d, "timePicker"), H = (m, f, z) => _.value.enabled ? f === 0 ? [m, ne.value[1][z]] : [ne.value[0][z], m] : m, g = (m) => {
      a("update:hours", m);
    }, T = (m) => {
      a("update:minutes", m);
    }, G = (m) => {
      a("update:seconds", m);
    }, te = () => {
      if (I.value && !P.value.enabled && !n.noOverlayFocus) {
        const m = Ta(I.value);
        m && m.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: O }), (m, f) => {
      var z;
      return A(), W("div", Fr, [
        !m.timePicker && !m.timePickerInline ? en((A(), W("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: K,
          type: "button",
          class: De(re.value),
          "aria-label": (z = c(k)) == null ? void 0 : z.openTimePicker,
          tabindex: m.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            f[0] || (f[0] = fe((ae) => O(!0), ["enter"])),
            f[1] || (f[1] = fe((ae) => O(!0), ["space"]))
          ],
          onClick: f[2] || (f[2] = (ae) => O(!0))
        }, [
          m.$slots["clock-icon"] ? oe(m.$slots, "clock-icon", { key: 0 }) : Z("", !0),
          m.$slots["clock-icon"] ? Z("", !0) : (A(), we(c(In), { key: 1 }))
        ], 42, Hr)), [
          [tn, !c(w)(m.hideNavigation, "time")]
        ]) : Z("", !0),
        Ke(Nt, {
          name: c(Y)(R.value),
          css: c($) && !m.timePickerInline
        }, {
          default: pe(() => {
            var ae;
            return [
              R.value || m.timePicker || m.timePickerInline ? (A(), W("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: I,
                class: De({
                  dp__overlay: !m.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !m.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: xe(m.timePicker ? { height: `${c(b).modeHeight}px` } : void 0),
                tabindex: m.timePickerInline ? void 0 : 0
              }, [
                ce("div", {
                  class: De(
                    m.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  m.$slots["time-picker-overlay"] ? oe(m.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: g,
                    setMinutes: T,
                    setSeconds: G
                  }) : Z("", !0),
                  m.$slots["time-picker-overlay"] ? Z("", !0) : (A(), W("div", {
                    key: 1,
                    class: De(m.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (A(!0), W(ke, null, Pe(ne.value, (s, h) => en((A(), we(Er, Ee({ key: h }, {
                      ...m.$props,
                      order: h,
                      hours: s.hours,
                      minutes: s.minutes,
                      seconds: s.seconds,
                      closeTimePickerBtn: N.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: h === 0 ? m.fixedStart : m.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: E,
                      "validate-time": (o, S) => e.validateTime(o, H(S, h, o)),
                      "onUpdate:hours": (o) => g(H(o, h, "hours")),
                      "onUpdate:minutes": (o) => T(H(o, h, "minutes")),
                      "onUpdate:seconds": (o) => G(H(o, h, "seconds")),
                      onMounted: te,
                      onOverlayClosed: te,
                      onAmPmChange: f[3] || (f[3] = (o) => m.$emit("am-pm-change", o))
                    }), Ue({ _: 2 }, [
                      Pe(c(se), (o, S) => ({
                        name: o,
                        fn: pe((u) => [
                          oe(m.$slots, o, Ye(We(u)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [tn, h === 0 ? !0 : D.value]
                    ])), 128))
                  ], 2)),
                  !m.timePicker && !m.timePickerInline ? en((A(), W("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: N,
                    type: "button",
                    class: De(re.value),
                    "aria-label": (ae = c(k)) == null ? void 0 : ae.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      f[4] || (f[4] = fe((s) => O(!1), ["enter"])),
                      f[5] || (f[5] = fe((s) => O(!1), ["space"]))
                    ],
                    onClick: f[6] || (f[6] = (s) => O(!1))
                  }, [
                    m.$slots["calendar-icon"] ? oe(m.$slots, "calendar-icon", { key: 0 }) : Z("", !0),
                    m.$slots["calendar-icon"] ? Z("", !0) : (A(), we(c(Bt), { key: 1 }))
                  ], 42, Lr)), [
                    [tn, !c(w)(m.hideNavigation, "time")]
                  ]) : Z("", !0)
                ], 2)
              ], 14, Vr)) : Z("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ha = (e, t, l, a) => {
  const { defaultedRange: n } = Re(e), i = (I, D) => Array.isArray(t[I]) ? t[I][D] : t[I], r = (I) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[I] : t.seconds : 0, d = (I, D) => I ? D !== void 0 ? gt(I, i("hours", D), i("minutes", D), r(D)) : gt(I, t.hours, t.minutes, r()) : On(F(), r(D)), M = (I, D) => {
    t[I] = D;
  }, k = q(() => e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? !l.value.some((I) => !I) : !1 : n.value.enabled), P = (I, D) => {
    const R = Object.fromEntries(
      Object.keys(t).map((V) => V === I ? [V, D] : [V, t[V]].slice())
    );
    if (k.value && !n.value.disableTimeRangeValidation) {
      const V = (O) => l.value ? gt(
        l.value[O],
        R.hours[O],
        R.minutes[O],
        R.seconds[O]
      ) : null, ne = (O) => Yn(l.value[O], 0);
      return !(ye(V(0), V(1)) && (Lt(V(0), ne(1)) || Vt(V(1), ne(0))));
    }
    return !0;
  }, b = (I, D) => {
    P(I, D) && (M(I, D), a && a());
  }, _ = (I) => {
    b("hours", I);
  }, Y = (I) => {
    b("minutes", I);
  }, $ = (I) => {
    b("seconds", I);
  }, w = (I, D, R, V) => {
    D && _(I), !D && !R && Y(I), R && $(I), l.value && V(l.value);
  }, K = (I) => {
    if (I) {
      const D = Array.isArray(I), R = D ? [+I[0].hours, +I[1].hours] : +I.hours, V = D ? [+I[0].minutes, +I[1].minutes] : +I.minutes, ne = D ? [+I[0].seconds, +I[1].seconds] : +I.seconds;
      M("hours", R), M("minutes", V), e.enableSeconds && M("seconds", ne);
    }
  }, N = (I, D) => {
    const R = {
      hours: Array.isArray(t.hours) ? t.hours[I] : t.hours,
      disabledArr: []
    };
    return (D || D === 0) && (R.hours = D), Array.isArray(e.disabledTimes) && (R.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[I]) ? e.disabledTimes[I] : e.disabledTimes), R;
  }, E = q(() => (I, D) => {
    var R;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: V, hours: ne } = N(I, D), O = V.filter((re) => +re.hours === ne);
      return ((R = O[0]) == null ? void 0 : R.minutes) === "*" ? { hours: [ne], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (O == null ? void 0 : O.map((re) => +re.minutes)) ?? [],
        seconds: (O == null ? void 0 : O.map((re) => re.seconds ? +re.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: M,
    updateHours: _,
    updateMinutes: Y,
    updateSeconds: $,
    getSetDateTime: d,
    updateTimeValues: w,
    getSecondsValue: r,
    assignStartTime: K,
    validateTime: P,
    disabledTimesConfig: E
  };
}, Wr = (e, t) => {
  const { modelValue: l, time: a } = Kt(e, t), { defaultedStartTime: n, defaultedRange: i } = Re(e), { updateTimeValues: r, getSetDateTime: d, setTime: M, assignStartTime: k, disabledTimesConfig: P, validateTime: b } = Ha(e, a, l), _ = (D) => {
    const { hours: R, minutes: V, seconds: ne } = D;
    return { hours: +R, minutes: +V, seconds: ne ? +ne : 0 };
  }, Y = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const R = _(e.startTime[0]), V = _(e.startTime[1]);
        return [Ae(F(), R), Ae(F(), V)];
      }
      const D = _(e.startTime);
      return Ae(F(), D);
    }
    return i.value.enabled ? [null, null] : null;
  }, $ = () => {
    if (i.value.enabled) {
      const [D, R] = Y();
      l.value = [d(D, 0), d(R, 1)];
    } else
      l.value = d(Y());
  }, w = (D) => Array.isArray(D) ? [Mt(F(D[0])), Mt(F(D[1]))] : [Mt(D ?? F())], K = (D, R, V) => {
    M("hours", D), M("minutes", R), M("seconds", e.enableSeconds ? V : 0);
  }, N = () => {
    const [D, R] = w(l.value);
    return i.value.enabled ? K(
      [D.hours, R.hours],
      [D.minutes, R.minutes],
      [D.seconds, R.minutes]
    ) : K(D.hours, D.minutes, D.seconds);
  };
  ze(() => {
    if (!e.shadow)
      return k(n.value), l.value ? N() : $();
  });
  const E = () => {
    Array.isArray(l.value) ? l.value = l.value.map((D, R) => D && d(D, R)) : l.value = d(l.value), t("time-update");
  };
  return {
    modelValue: l,
    time: a,
    disabledTimesConfig: P,
    updateTime: (D, R = !0, V = !1) => {
      r(D, R, V, E);
    },
    validateTime: b
  };
}, Ur = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...nt
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Tt(), r = Ge(i, "timePicker"), { time: d, modelValue: M, disabledTimesConfig: k, updateTime: P, validateTime: b } = Wr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: M,
      time: d,
      updateTime: P
    }) }), (Y, $) => (A(), we(un, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: pe(() => [
        Ke(Fa, Ee(Y.$props, {
          hours: c(d).hours,
          minutes: c(d).minutes,
          seconds: c(d).seconds,
          "internal-model-value": Y.internalModelValue,
          "disabled-times-config": c(k),
          "validate-time": c(b),
          "onUpdate:hours": $[0] || ($[0] = (w) => c(P)(w)),
          "onUpdate:minutes": $[1] || ($[1] = (w) => c(P)(w, !1)),
          "onUpdate:seconds": $[2] || ($[2] = (w) => c(P)(w, !1, !0)),
          onAmPmChange: $[3] || ($[3] = (w) => Y.$emit("am-pm-change", w))
        }), Ue({ _: 2 }, [
          Pe(c(r), (w, K) => ({
            name: w,
            fn: pe((N) => [
              oe(Y.$slots, w, Ye(We(N)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), zr = { class: "dp__month_year_row" }, jr = ["aria-label", "onClick", "onKeydown"], Kr = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...nt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTransitions: i,
      defaultedAriaLabels: r,
      defaultedMultiCalendars: d,
      defaultedFilters: M,
      defaultedConfig: k,
      defaultedHighlight: P
    } = Re(n), { transitionName: b, showTransition: _ } = jt(i), { buildMatrix: Y } = ht(), { handleMonthYearChange: $, isDisabled: w, updateMonthYear: K } = nr(n, a), { showLeftIcon: N, showRightIcon: E } = on(), I = ee(!1), D = ee(!1), R = ee([null, null, null, null]);
    ze(() => {
      a("mount");
    });
    const V = (s) => ({
      get: () => n[s],
      set: (h) => {
        const o = s === Xe.month ? Xe.year : Xe.month;
        a("update-month-year", { [s]: h, [o]: n[o] }), s === Xe.month ? G(!0) : te(!0);
      }
    }), ne = q(V(Xe.month)), O = q(V(Xe.year)), re = q(() => (s) => ({
      month: n.month,
      year: n.year,
      items: s === Xe.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: K,
      toggle: s === Xe.month ? G : te
    })), se = q(() => {
      const s = n.months.find((h) => h.value === n.month);
      return s || { text: "", value: 0 };
    }), H = q(() => Ot(n.months, (s) => {
      const h = n.month === s.value, o = Ut(
        s.value,
        Aa(n.year, n.minDate),
        Sa(n.year, n.maxDate)
      ) || M.value.months.includes(s.value), S = Ya(P.value, s.value, n.year);
      return { active: h, disabled: o, highlighted: S };
    })), g = q(() => Ot(n.years, (s) => {
      const h = n.year === s.value, o = Ut(s.value, Yt(n.minDate), Yt(n.maxDate)) || M.value.years.includes(s.value), S = Un(P.value, s.value);
      return { active: h, disabled: o, highlighted: S };
    })), T = (s, h) => {
      h !== void 0 ? s.value = h : s.value = !s.value, s.value || a("overlay-closed");
    }, G = (s = !1, h) => {
      m(s), T(I, h);
    }, te = (s = !1, h) => {
      m(s), T(D, h);
    }, m = (s) => {
      s || a("reset-flow");
    }, f = (s, h) => {
      n.arrowNavigation && (R.value[h] = Ne(s), Y(R.value, "monthYear"));
    }, z = q(() => {
      var s, h;
      return [
        {
          type: Xe.month,
          index: 1,
          toggle: G,
          modelValue: ne.value,
          updateModelValue: (o) => ne.value = o,
          text: se.value.text,
          showSelectionGrid: I.value,
          items: H.value,
          ariaLabel: (s = r.value) == null ? void 0 : s.openMonthsOverlay
        },
        {
          type: Xe.year,
          index: 2,
          toggle: te,
          modelValue: O.value,
          updateModelValue: (o) => O.value = o,
          text: n.year,
          showSelectionGrid: D.value,
          items: g.value,
          ariaLabel: (h = r.value) == null ? void 0 : h.openYearsOverlay
        }
      ];
    }), ae = q(() => n.disableYearSelect ? [z.value[0]] : n.yearFirst ? [...z.value].reverse() : z.value);
    return t({
      toggleMonthPicker: G,
      toggleYearPicker: te,
      handleMonthYearChange: $
    }), (s, h) => {
      var o, S, u;
      return A(), W("div", zr, [
        s.$slots["month-year"] ? oe(s.$slots, "month-year", Ye(Ee({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: c(K), handleMonthYearChange: c($), instance: e.instance }))) : (A(), W(ke, { key: 1 }, [
          c(N)(c(d), e.instance) && !s.vertical ? (A(), we(Ht, {
            key: 0,
            "aria-label": (o = c(r)) == null ? void 0 : o.prevMonth,
            disabled: c(w)(!1),
            onActivate: h[0] || (h[0] = (B) => c($)(!1, !0)),
            onSetRef: h[1] || (h[1] = (B) => f(B, 0))
          }, {
            default: pe(() => [
              s.$slots["arrow-left"] ? oe(s.$slots, "arrow-left", { key: 0 }) : Z("", !0),
              s.$slots["arrow-left"] ? Z("", !0) : (A(), we(c(Nn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Z("", !0),
          ce("div", {
            class: De(["dp__month_year_wrap", {
              dp__year_disable_select: s.disableYearSelect
            }])
          }, [
            (A(!0), W(ke, null, Pe(ae.value, (B, p) => (A(), W(ke, {
              key: B.type
            }, [
              ce("button", {
                ref_for: !0,
                ref: (J) => f(J, p + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": B.ariaLabel,
                onClick: B.toggle,
                onKeydown: [
                  fe($e(B.toggle, ["prevent"]), ["enter"]),
                  fe($e(B.toggle, ["prevent"]), ["space"])
                ]
              }, [
                s.$slots[B.type] ? oe(s.$slots, B.type, {
                  key: 0,
                  text: B.text,
                  value: n[B.type]
                }) : Z("", !0),
                s.$slots[B.type] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                  dt(He(B.text), 1)
                ], 64))
              ], 40, jr),
              Ke(Nt, {
                name: c(b)(B.showSelectionGrid),
                css: c(_)
              }, {
                default: pe(() => [
                  B.showSelectionGrid ? (A(), we(Gt, {
                    key: 0,
                    items: B.items,
                    "arrow-navigation": s.arrowNavigation,
                    "hide-navigation": s.hideNavigation,
                    "is-last": s.autoApply && !c(k).keepActionRow,
                    "skip-button-ref": !1,
                    config: s.config,
                    type: B.type,
                    "header-refs": [],
                    "esc-close": s.escClose,
                    "menu-wrap-ref": s.menuWrapRef,
                    "text-input": s.textInput,
                    onSelected: B.updateModelValue,
                    onToggle: B.toggle
                  }, Ue({
                    "button-icon": pe(() => [
                      s.$slots["calendar-icon"] ? oe(s.$slots, "calendar-icon", { key: 0 }) : Z("", !0),
                      s.$slots["calendar-icon"] ? Z("", !0) : (A(), we(c(Bt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    s.$slots[`${B.type}-overlay-value`] ? {
                      name: "item",
                      fn: pe(({ item: J }) => [
                        oe(s.$slots, `${B.type}-overlay-value`, {
                          text: J.text,
                          value: J.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    s.$slots[`${B.type}-overlay`] ? {
                      name: "overlay",
                      fn: pe(() => [
                        oe(s.$slots, `${B.type}-overlay`, Ye(We(re.value(B.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    s.$slots[`${B.type}-overlay-header`] ? {
                      name: "header",
                      fn: pe(() => [
                        oe(s.$slots, `${B.type}-overlay-header`, {
                          toggle: B.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "onSelected", "onToggle"])) : Z("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          c(N)(c(d), e.instance) && s.vertical ? (A(), we(Ht, {
            key: 1,
            "aria-label": (S = c(r)) == null ? void 0 : S.prevMonth,
            disabled: c(w)(!1),
            onActivate: h[2] || (h[2] = (B) => c($)(!1, !0))
          }, {
            default: pe(() => [
              s.$slots["arrow-up"] ? oe(s.$slots, "arrow-up", { key: 0 }) : Z("", !0),
              s.$slots["arrow-up"] ? Z("", !0) : (A(), we(c(En), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Z("", !0),
          c(E)(c(d), e.instance) ? (A(), we(Ht, {
            key: 2,
            ref: "rightIcon",
            disabled: c(w)(!0),
            "aria-label": (u = c(r)) == null ? void 0 : u.nextMonth,
            onActivate: h[3] || (h[3] = (B) => c($)(!0, !0)),
            onSetRef: h[4] || (h[4] = (B) => f(B, s.disableYearSelect ? 2 : 3))
          }, {
            default: pe(() => [
              s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? oe(s.$slots, s.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : Z("", !0),
              s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? Z("", !0) : (A(), we(_n(s.vertical ? c(Fn) : c(Bn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : Z("", !0)
        ], 64))
      ]);
    };
  }
}), Gr = ["aria-label"], qr = {
  class: "dp__calendar_header",
  role: "row"
}, Qr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Zr = /* @__PURE__ */ ce("div", { class: "dp__calendar_header_separator" }, null, -1), Xr = ["aria-label"], Jr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, xr = { class: "dp__cell_inner" }, eo = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], to = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...nt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMultiLevelMatrix: i } = ht(), {
      defaultedTransitions: r,
      defaultedConfig: d,
      defaultedAriaLabels: M,
      defaultedMultiCalendars: k,
      defaultedWeekNumbers: P
    } = Re(n), b = ee(null), _ = ee({
      bottom: "",
      left: "",
      transform: ""
    }), Y = ee([]), $ = ee(null), w = ee(!0), K = ee(""), N = ee({ startX: 0, endX: 0, startY: 0, endY: 0 }), E = ee([]), I = ee({ left: "50%" }), D = q(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), R = q(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Pl(n.formatLocale, n.locale, +n.weekStart));
    ze(() => {
      a("mount", { cmp: "calendar", refs: Y }), d.value.noSwipe || $.value && ($.value.addEventListener("touchstart", m, { passive: !1 }), $.value.addEventListener("touchend", f, { passive: !1 }), $.value.addEventListener("touchmove", z, { passive: !1 })), n.monthChangeOnScroll && $.value && $.value.addEventListener("wheel", h, { passive: !1 });
    });
    const V = (p) => p ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", ne = (p, J) => {
      if (n.transitions) {
        const le = Ve(it(F(), n.month, n.year));
        K.value = _e(Ve(it(F(), p, J)), le) ? r.value[V(!0)] : r.value[V(!1)], w.value = !1, pt(() => {
          w.value = !0;
        });
      }
    }, O = q(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName
      })
    ), re = q(() => (p) => {
      const J = Cl(p);
      return {
        dp__marker_dot: J.type === "dot",
        dp__marker_line: J.type === "line"
      };
    }), se = q(() => (p) => ye(p, b.value)), H = q(() => ({
      dp__calendar: !0,
      dp__calendar_next: k.value.count > 0 && n.instance !== 0
    })), g = q(() => (p) => n.hideOffsetDates ? p.current : !0), T = (p) => ut(p, "yyyy-MM-dd"), G = async (p, J, le) => {
      var v, Q;
      if (a("set-hover-date", p), (Q = (v = p.marker) == null ? void 0 : v.tooltip) != null && Q.length) {
        const he = Ne(Y.value[J][le]);
        if (he) {
          const { width: L, height: C } = he.getBoundingClientRect();
          b.value = p.value;
          let U = { left: `${L / 2}px` }, ve = -50;
          if (await pt(), E.value[0]) {
            const { left: Me, width: j } = E.value[0].getBoundingClientRect();
            Me < 0 && (U = { left: "0" }, ve = 0, I.value.left = `${L / 2}px`), window.innerWidth < Me + j && (U = { right: "0" }, ve = 0, I.value.left = `${j - L / 2}px`);
          }
          _.value = {
            bottom: `${C}px`,
            ...U,
            transform: `translateX(${ve}%)`
          }, a("tooltip-open", p.marker);
        }
      }
    }, te = (p) => {
      b.value && (b.value = null, _.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", p.marker));
    }, m = (p) => {
      N.value.startX = p.changedTouches[0].screenX, N.value.startY = p.changedTouches[0].screenY;
    }, f = (p) => {
      N.value.endX = p.changedTouches[0].screenX, N.value.endY = p.changedTouches[0].screenY, ae();
    }, z = (p) => {
      n.vertical && !n.inline && p.preventDefault();
    }, ae = () => {
      const p = n.vertical ? "Y" : "X";
      Math.abs(N.value[`start${p}`] - N.value[`end${p}`]) > 10 && a("handle-swipe", N.value[`start${p}`] > N.value[`end${p}`] ? "right" : "left");
    }, s = (p, J, le) => {
      p && (Array.isArray(Y.value[J]) ? Y.value[J][le] = p : Y.value[J] = [p]), n.arrowNavigation && i(Y.value, "calendar");
    }, h = (p) => {
      n.monthChangeOnScroll && (p.preventDefault(), a("handle-scroll", p));
    }, o = (p) => P.value.type === "local" ? el(p.value, { weekStartsOn: +n.weekStart }) : P.value.type === "iso" ? tl(p.value) : typeof P.value.type == "function" ? P.value.type(p.value) : "", S = (p) => {
      const J = p[0];
      return P.value.hideOnOffsetDates ? p.some((le) => le.current) ? o(J) : "" : o(J);
    }, u = (p, J) => {
      mt(p, d.value), a("select-date", J);
    }, B = (p) => {
      mt(p, d.value);
    };
    return t({ triggerTransition: ne }), (p, J) => {
      var le;
      return A(), W("div", {
        class: De(H.value)
      }, [
        ce("div", {
          ref_key: "calendarWrapRef",
          ref: $,
          role: "grid",
          class: De(O.value),
          "aria-label": (le = c(M)) == null ? void 0 : le.calendarWrap
        }, [
          ce("div", qr, [
            p.weekNumbers ? (A(), W("div", Qr, He(p.weekNumName), 1)) : Z("", !0),
            (A(!0), W(ke, null, Pe(R.value, (v, Q) => (A(), W("div", {
              key: Q,
              class: "dp__calendar_header_item",
              role: "gridcell"
            }, [
              p.$slots["calendar-header"] ? oe(p.$slots, "calendar-header", {
                key: 0,
                day: v,
                index: Q
              }) : Z("", !0),
              p.$slots["calendar-header"] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                dt(He(v), 1)
              ], 64))
            ]))), 128))
          ]),
          Zr,
          Ke(Nt, {
            name: K.value,
            css: !!p.transitions
          }, {
            default: pe(() => {
              var v;
              return [
                w.value ? (A(), W("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((v = c(M)) == null ? void 0 : v.calendarDays) || void 0
                }, [
                  (A(!0), W(ke, null, Pe(D.value, (Q, he) => (A(), W("div", {
                    key: he,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    p.weekNumbers ? (A(), W("div", Jr, [
                      ce("div", xr, He(S(Q.days)), 1)
                    ])) : Z("", !0),
                    (A(!0), W(ke, null, Pe(Q.days, (L, C) => {
                      var U, ve, Me;
                      return A(), W("div", {
                        id: T(L.value),
                        ref_for: !0,
                        ref: (j) => s(j, he, C),
                        key: C + he,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (L.classData.dp__active_date || L.classData.dp__range_start || L.classData.dp__range_start) ?? void 0,
                        "aria-disabled": L.classData.dp__cell_disabled || void 0,
                        "aria-label": (ve = (U = c(M)) == null ? void 0 : U.day) == null ? void 0 : ve.call(U, L),
                        tabindex: "0",
                        onClick: $e((j) => u(j, L), ["prevent"]),
                        onKeydown: [
                          fe((j) => p.$emit("select-date", L), ["enter"]),
                          fe((j) => p.$emit("handle-space", L), ["space"])
                        ],
                        onMouseenter: (j) => G(L, he, C),
                        onMouseleave: (j) => te(L)
                      }, [
                        ce("div", {
                          class: De(["dp__cell_inner", L.classData])
                        }, [
                          p.$slots.day && g.value(L) ? oe(p.$slots, "day", {
                            key: 0,
                            day: +L.text,
                            date: L.value
                          }) : Z("", !0),
                          p.$slots.day ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                            dt(He(L.text), 1)
                          ], 64)),
                          L.marker && g.value(L) ? (A(), W(ke, { key: 2 }, [
                            p.$slots.marker ? oe(p.$slots, "marker", {
                              key: 0,
                              marker: L.marker,
                              day: +L.text,
                              date: L.value
                            }) : (A(), W("div", {
                              key: 1,
                              class: De(re.value(L.marker)),
                              style: xe(L.marker.color ? { backgroundColor: L.marker.color } : {})
                            }, null, 6))
                          ], 64)) : Z("", !0),
                          se.value(L.value) ? (A(), W("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: E,
                            class: "dp__marker_tooltip",
                            style: xe(_.value)
                          }, [
                            (Me = L.marker) != null && Me.tooltip ? (A(), W("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: B
                            }, [
                              (A(!0), W(ke, null, Pe(L.marker.tooltip, (j, Qe) => (A(), W("div", {
                                key: Qe,
                                class: "dp__tooltip_text"
                              }, [
                                p.$slots["marker-tooltip"] ? oe(p.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: j,
                                  day: L.value
                                }) : Z("", !0),
                                p.$slots["marker-tooltip"] ? Z("", !0) : (A(), W(ke, { key: 1 }, [
                                  ce("div", {
                                    class: "dp__tooltip_mark",
                                    style: xe(j.color ? { backgroundColor: j.color } : {})
                                  }, null, 4),
                                  ce("div", null, He(j.text), 1)
                                ], 64))
                              ]))), 128)),
                              ce("div", {
                                class: "dp__arrow_bottom_tp",
                                style: xe(I.value)
                              }, null, 4)
                            ])) : Z("", !0)
                          ], 4)) : Z("", !0)
                        ], 2)
                      ], 40, eo);
                    }), 128))
                  ]))), 128))
                ], 8, Xr)) : Z("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Gr)
      ], 2);
    };
  }
}), fa = (e) => Array.isArray(e), no = (e, t, l, a) => {
  const n = ee([]), i = ee(/* @__PURE__ */ new Date()), { modelValue: r, calendars: d, time: M } = Kt(e, t), { defaultedMultiCalendars: k, defaultedStartTime: P, defaultedRange: b } = Re(e), { validateMonthYearInRange: _, isDisabled: Y, isDateRangeAllowed: $, checkMinMaxRange: w } = At(e), { updateTimeValues: K, getSetDateTime: N, setTime: E, assignStartTime: I, validateTime: D, disabledTimesConfig: R } = Ha(e, M, r, a), V = q(
    () => (y) => d.value[y] ? d.value[y].month : 0
  ), ne = q(
    () => (y) => d.value[y] ? d.value[y].year : 0
  ), O = (y, X, ie) => {
    var me, Te;
    d.value[y] || (d.value[y] = { month: 0, year: 0 }), d.value[y].month = sa(X) ? (me = d.value[y]) == null ? void 0 : me.month : X, d.value[y].year = sa(ie) ? (Te = d.value[y]) == null ? void 0 : Te.year : ie;
  }, re = () => {
    e.autoApply && t("select-date");
  };
  yt(
    r,
    (y, X) => {
      JSON.stringify(y) !== JSON.stringify(X) && g();
    },
    { deep: !0 }
  ), ze(() => {
    e.shadow || (r.value || (S(), P.value && I(P.value)), g(!0), e.focusStartDate && e.startDate && S());
  });
  const se = q(() => {
    var y;
    return (y = e.flow) != null && y.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), H = () => {
    e.autoApply && se.value && t("auto-apply", e.partialFlow);
  }, g = (y = !1) => {
    if (r.value)
      return Array.isArray(r.value) ? (n.value = r.value, ae(y)) : te(r.value, y);
    if (k.value.count && y && !e.startDate)
      return G(F(), y);
  }, T = () => Array.isArray(r.value) && b.value.enabled ? be(r.value[0]) === be(r.value[1] ?? r.value[0]) : !1, G = (y, X = !1) => {
    if ((!k.value.count || !k.value.static || X) && O(0, be(y), ge(y)), k.value.count && (!k.value.solo || !r.value || T()))
      for (let ie = 1; ie < k.value.count; ie++) {
        const me = Ae(F(), { month: V.value(ie - 1), year: ne.value(ie - 1) }), Te = ka(me, { months: 1 });
        d.value[ie] = { month: be(Te), year: ge(Te) };
      }
  }, te = (y, X) => {
    G(y), E("hours", et(y)), E("minutes", ot(y)), E("seconds", _t(y)), k.value.count && X && o();
  }, m = (y) => {
    if (k.value.count) {
      if (k.value.solo)
        return 0;
      const X = be(y[0]), ie = be(y[1]);
      return Math.abs(ie - X) < k.value.count ? 0 : 1;
    }
    return 1;
  }, f = (y, X) => {
    y[1] && b.value.showLastInRange ? G(y[m(y)], X) : G(y[0], X);
    const ie = (me, Te) => [
      me(y[0]),
      y[1] ? me(y[1]) : M[Te][1]
    ];
    E("hours", ie(et, "hours")), E("minutes", ie(ot, "minutes")), E("seconds", ie(_t, "seconds"));
  }, z = (y, X) => {
    if ((b.value.enabled || e.weekPicker) && !e.multiDates)
      return f(y, X);
    if (e.multiDates && X) {
      const ie = y[y.length - 1];
      return te(ie, X);
    }
  }, ae = (y) => {
    const X = r.value;
    z(X, y), k.value.count && k.value.solo && o();
  }, s = (y, X) => {
    const ie = Ae(F(), { month: V.value(X), year: ne.value(X) }), me = y < 0 ? Dt(ie, 1) : Wt(ie, 1);
    _(be(me), ge(me), y < 0, e.preventMinMaxNavigation) && (O(X, be(me), ge(me)), t("update-month-year", { instance: X, month: be(me), year: ge(me) }), k.value.count && !k.value.solo && h(X), l());
  }, h = (y) => {
    for (let X = y - 1; X >= 0; X--) {
      const ie = Wt(Ae(F(), { month: V.value(X + 1), year: ne.value(X + 1) }), 1);
      O(X, be(ie), ge(ie));
    }
    for (let X = y + 1; X <= k.value.count - 1; X++) {
      const ie = Dt(Ae(F(), { month: V.value(X - 1), year: ne.value(X - 1) }), 1);
      O(X, be(ie), ge(ie));
    }
  }, o = () => {
    if (Array.isArray(r.value) && r.value.length === 2) {
      const y = F(
        F(r.value[1] ? r.value[1] : Dt(r.value[0], 1))
      ), [X, ie] = [be(r.value[0]), ge(r.value[0])], [me, Te] = [be(r.value[1]), ge(r.value[1])];
      (X !== me || X === me && ie !== Te) && k.value.solo && O(1, be(y), ge(y));
    } else
      r.value && !Array.isArray(r.value) && (O(0, be(r.value), ge(r.value)), G(F()));
  }, S = () => {
    e.startDate && (O(0, be(F(e.startDate)), ge(F(e.startDate))), k.value.count && h(0));
  }, u = (y, X) => {
    if (e.monthChangeOnScroll) {
      const ie = (/* @__PURE__ */ new Date()).getTime() - i.value.getTime(), me = Math.abs(y.deltaY);
      let Te = 500;
      me > 1 && (Te = 100), me > 100 && (Te = 0), ie > Te && (i.value = /* @__PURE__ */ new Date(), s(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, X));
    }
  }, B = (y, X, ie = !1) => {
    e.monthChangeOnArrows && e.vertical === ie && p(y, X);
  }, p = (y, X) => {
    s(y === "right" ? -1 : 1, X);
  }, J = (y) => e.markers.find(
    (X) => ye(El(y.value), tt(F(X.date), e.timezone))
  ), le = (y, X) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [y == 0, !0];
      case "fair":
        return [y == 0 || X > y, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, v = (y, X, ie, me) => {
    if (e.sixWeeks && y.length < 6) {
      const Te = 6 - y.length, at = (X.getDay() + 7 - me) % 7, de = 6 - (ie.getDay() + 7 - me) % 7, [ue, bt] = le(at, de);
      for (let je = 1; je <= Te; je++)
        if (bt ? !!(je % 2) == ue : ue) {
          const Xt = y[0].days[0], mn = Q(wt(Xt.value, -7), be(X));
          y.unshift({ days: mn });
        } else {
          const Xt = y[y.length - 1], mn = Xt.days[Xt.days.length - 1], La = Q(wt(mn.value, 1), be(X));
          y.push({ days: La });
        }
    }
    return y;
  }, Q = (y, X) => {
    const ie = F(y), me = [];
    for (let Te = 0; Te < 7; Te++) {
      const at = wt(ie, Te), x = be(at) !== X;
      me.push({
        text: e.hideOffsetDates && x ? "" : at.getDate(),
        value: at,
        current: !x,
        classData: {}
      });
    }
    return me;
  }, he = (y, X) => {
    const ie = [], me = new Date(X, y), Te = new Date(X, y + 1, 0), at = e.weekStart, x = pa(me, { weekStartsOn: at }), de = (ue) => {
      const bt = Q(ue, y);
      if (ie.push({ days: bt }), !ie[ie.length - 1].days.some(
        (je) => ye(Ve(je.value), Ve(Te))
      )) {
        const je = wt(ue, 7);
        de(je);
      }
    };
    return de(x), v(ie, me, Te, at);
  }, L = (y) => {
    const X = gt(F(y.value), M.hours, M.minutes, St());
    t("date-update", X), e.multiDates ? zn(X, r, e.multiDatesLimit) : r.value = X, a(), pt().then(() => {
      H();
    });
  }, C = (y) => b.value.noDisabledRange ? Ra(n.value[0], y).some((ie) => Y(ie)) : !1, U = () => {
    n.value = r.value ? r.value.slice() : [], n.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (n.value = []);
  }, ve = (y, X) => {
    const ie = [
      F(y.value),
      wt(F(y.value), +b.value.autoRange)
    ];
    $(ie) ? (X && Me(y.value), n.value = ie) : t("invalid-date", y.value);
  }, Me = (y) => {
    const X = be(F(y)), ie = ge(F(y));
    if (O(0, X, ie), k.value.count > 0)
      for (let me = 1; me < k.value.count; me++) {
        const Te = Fl(
          Ae(F(y), { year: V.value(me - 1), month: ne.value(me - 1) })
        );
        O(me, Te.month, Te.year);
      }
  }, j = (y) => Array.isArray(r.value) && r.value.length === 2 ? b.value.fixedStart && (_e(y, r.value[0]) || ye(y, r.value[0])) ? [r.value[0], y] : b.value.fixedEnd && (Ce(y, r.value[1]) || ye(y, r.value[1])) ? [y, r.value[1]] : (t("invalid-fixed-range", y), r.value) : [], Qe = (y) => {
    if (C(y.value) || !w(y.value, r.value, b.value.fixedStart ? 0 : 1))
      return t("invalid-date", y.value);
    n.value = j(F(y.value));
  }, Ze = (y, X) => {
    if (U(), b.value.autoRange)
      return ve(y, X);
    if (b.value.fixedStart || b.value.fixedEnd)
      return Qe(y);
    n.value[0] ? w(F(y.value), r.value) && !C(y.value) ? Ce(F(y.value), F(n.value[0])) ? (n.value.unshift(F(y.value)), t("range-end", n.value[0])) : (n.value[1] = F(y.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", y.value), t("invalid-date", y.value)) : (n.value[0] = F(y.value), t("range-start", n.value[0]));
  }, St = (y = !0) => e.enableSeconds ? Array.isArray(M.seconds) ? y ? M.seconds[0] : M.seconds[1] : M.seconds : 0, ct = (y) => {
    n.value[y] = gt(
      n.value[y],
      M.hours[y],
      M.minutes[y],
      St(y !== 1)
    );
  }, qt = () => {
    var y, X;
    n.value[0] && n.value[1] && +((y = n.value) == null ? void 0 : y[0]) > +((X = n.value) == null ? void 0 : X[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Qt = () => {
    n.value.length && (n.value[0] && !n.value[1] ? ct(0) : (ct(0), ct(1), a()), qt(), r.value = n.value.slice(), dn(n.value, t, e.autoApply, e.modelAuto));
  }, cn = (y, X = !1) => {
    if (Y(y.value) || !y.current && e.hideOffsetDates)
      return t("invalid-date", y.value);
    if (!b.value.enabled)
      return L(y);
    fa(M.hours) && fa(M.minutes) && !e.multiDates && (Ze(y, X), Qt());
  }, It = (y, X) => {
    var me;
    O(y, X.month, X.year), k.value.count && !k.value.solo && h(y), t("update-month-year", { instance: y, month: X.month, year: X.year }), l(k.value.solo ? y : void 0);
    const ie = (me = e.flow) != null && me.length ? e.flow[e.flowStep] : void 0;
    !X.fromNav && (ie === lt.month || ie === lt.year) && a();
  }, qe = (y, X) => {
    Ia({
      value: y,
      modelValue: r,
      range: b.value.enabled,
      timezone: X ? void 0 : e.timezone
    }), re(), e.multiCalendars && pt().then(() => g(!0));
  }, fn = () => {
    b.value.enabled ? r.value && Array.isArray(r.value) && r.value[0] ? r.value = Ce(F(), r.value[0]) ? [F(), r.value[0]] : [r.value[0], F()] : r.value = [F()] : r.value = F(), re();
  }, vn = () => {
    if (Array.isArray(r.value))
      if (e.multiDates) {
        const y = Zt();
        r.value[r.value.length - 1] = N(y);
      } else
        r.value = r.value.map((y, X) => y && N(y, X));
    else
      r.value = N(r.value);
    t("time-update");
  }, Zt = () => Array.isArray(r.value) && r.value.length ? r.value[r.value.length - 1] : null;
  return {
    calendars: d,
    modelValue: r,
    month: V,
    year: ne,
    time: M,
    disabledTimesConfig: R,
    validateTime: D,
    getCalendarDays: he,
    getMarker: J,
    handleScroll: u,
    handleSwipe: p,
    handleArrow: B,
    selectDate: cn,
    updateMonthYear: It,
    presetDate: qe,
    selectCurrentDate: fn,
    updateTime: (y, X = !0, ie = !1) => {
      K(y, X, ie, vn);
    }
  };
}, ao = { key: 0 }, lo = /* @__PURE__ */ Fe({
  __name: "DatePicker",
  props: {
    ...nt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      calendars: i,
      month: r,
      year: d,
      modelValue: M,
      time: k,
      disabledTimesConfig: P,
      validateTime: b,
      getCalendarDays: _,
      getMarker: Y,
      handleArrow: $,
      handleScroll: w,
      handleSwipe: K,
      selectDate: N,
      updateMonthYear: E,
      presetDate: I,
      selectCurrentDate: D,
      updateTime: R
    } = no(n, a, ae, s), V = Tt(), { setHoverDate: ne, getDayClassData: O, clearHoverDate: re } = or(M, n), { defaultedMultiCalendars: se } = Re(n), H = ee([]), g = ee([]), T = ee(null), G = Ge(V, "calendar"), te = Ge(V, "monthYear"), m = Ge(V, "timePicker"), f = (p) => {
      n.shadow || a("mount", p);
    };
    yt(
      i,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const z = q(() => (p) => _(r.value(p), d.value(p)).map((J) => ({
      ...J,
      days: J.days.map((le) => (le.marker = Y(le), le.classData = O(le), le))
    })));
    function ae(p) {
      var J;
      p || p === 0 ? (J = g.value[p]) == null || J.triggerTransition(r.value(p), d.value(p)) : g.value.forEach((le, v) => le.triggerTransition(r.value(v), d.value(v)));
    }
    function s() {
      a("update-flow-step");
    }
    const h = (p, J = !1) => {
      N(p, J), n.spaceConfirm && a("select-date");
    };
    return t({
      clearHoverDate: re,
      presetDate: I,
      selectCurrentDate: D,
      toggleMonthPicker: (p, J, le = 0) => {
        var v;
        (v = H.value[le]) == null || v.toggleMonthPicker(p, J);
      },
      toggleYearPicker: (p, J, le = 0) => {
        var v;
        (v = H.value[le]) == null || v.toggleYearPicker(p, J);
      },
      toggleTimePicker: (p, J, le) => {
        var v;
        (v = T.value) == null || v.toggleTimePicker(p, J, le);
      },
      handleArrow: $,
      updateMonthYear: E,
      getSidebarProps: () => ({
        modelValue: M,
        month: r,
        year: d,
        time: k,
        updateTime: R,
        updateMonthYear: E,
        selectDate: N,
        presetDate: I
      })
    }), (p, J) => (A(), W(ke, null, [
      Ke(un, {
        "multi-calendars": c(se).count,
        collapse: p.collapse
      }, {
        default: pe(({ instance: le, index: v }) => [
          p.disableMonthYearSelect ? Z("", !0) : (A(), we(Kr, Ee({
            key: 0,
            ref: (Q) => {
              Q && (H.value[v] = Q);
            },
            months: c(Ma)(p.formatLocale, p.locale, p.monthNameFormat),
            years: c(Ln)(p.yearRange, p.reverseYears),
            month: c(r)(le),
            year: c(d)(le),
            instance: le
          }, p.$props, {
            onMount: J[0] || (J[0] = (Q) => f(c($t).header)),
            onResetFlow: J[1] || (J[1] = (Q) => p.$emit("reset-flow")),
            onUpdateMonthYear: (Q) => c(E)(le, Q),
            onOverlayClosed: J[2] || (J[2] = (Q) => p.$emit("focus-menu"))
          }), Ue({ _: 2 }, [
            Pe(c(te), (Q, he) => ({
              name: Q,
              fn: pe((L) => [
                oe(p.$slots, Q, Ye(We(L)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ke(to, Ee({
            ref: (Q) => {
              Q && (g.value[v] = Q);
            },
            "mapped-dates": z.value(le),
            month: c(r)(le),
            year: c(d)(le),
            instance: le
          }, p.$props, {
            onSelectDate: (Q) => c(N)(Q, le !== 1),
            onHandleSpace: (Q) => h(Q, le !== 1),
            onSetHoverDate: J[3] || (J[3] = (Q) => c(ne)(Q)),
            onHandleScroll: (Q) => c(w)(Q, le),
            onHandleSwipe: (Q) => c(K)(Q, le),
            onMount: J[4] || (J[4] = (Q) => f(c($t).calendar)),
            onResetFlow: J[5] || (J[5] = (Q) => p.$emit("reset-flow")),
            onTooltipOpen: J[6] || (J[6] = (Q) => p.$emit("tooltip-open", Q)),
            onTooltipClose: J[7] || (J[7] = (Q) => p.$emit("tooltip-close", Q))
          }), Ue({ _: 2 }, [
            Pe(c(G), (Q, he) => ({
              name: Q,
              fn: pe((L) => [
                oe(p.$slots, Q, Ye(We({ ...L })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      p.enableTimePicker ? (A(), W("div", ao, [
        p.$slots["time-picker"] ? oe(p.$slots, "time-picker", Ye(Ee({ key: 0 }, { time: c(k), updateTime: c(R) }))) : (A(), we(Fa, Ee({
          key: 1,
          ref_key: "timePickerRef",
          ref: T
        }, p.$props, {
          hours: c(k).hours,
          minutes: c(k).minutes,
          seconds: c(k).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": c(P),
          "validate-time": c(b),
          onMount: J[8] || (J[8] = (le) => f(c($t).timePicker)),
          "onUpdate:hours": J[9] || (J[9] = (le) => c(R)(le)),
          "onUpdate:minutes": J[10] || (J[10] = (le) => c(R)(le, !1)),
          "onUpdate:seconds": J[11] || (J[11] = (le) => c(R)(le, !1, !0)),
          onResetFlow: J[12] || (J[12] = (le) => p.$emit("reset-flow")),
          onOverlayClosed: J[13] || (J[13] = (le) => p.$emit("time-picker-close")),
          onOverlayOpened: J[14] || (J[14] = (le) => p.$emit("time-picker-open", le)),
          onAmPmChange: J[15] || (J[15] = (le) => p.$emit("am-pm-change", le))
        }), Ue({ _: 2 }, [
          Pe(c(m), (le, v) => ({
            name: le,
            fn: pe((Q) => [
              oe(p.$slots, le, Ye(We(Q)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : Z("", !0)
    ], 64));
  }
}), ro = (e, t) => {
  const l = ee(), { defaultedMultiCalendars: a, defaultedConfig: n, defaultedHighlight: i, defaultedRange: r } = Re(e), { modelValue: d, year: M, month: k, calendars: P } = Kt(e, t), { isDisabled: b } = At(e), { selectYear: _, groupedYears: Y, showYearPicker: $, isDisabled: w, toggleYearPicker: K, handleYearSelect: N, handleYear: E } = Ea({
    modelValue: d,
    multiCalendars: a,
    highlight: i,
    calendars: P,
    month: k,
    year: M,
    props: e,
    emit: t
  }), I = (g, T) => [g, T].map((G) => ut(G, "MMMM", { locale: e.formatLocale })).join("-"), D = q(() => (g) => d.value ? Array.isArray(d.value) ? d.value.some((T) => Zn(g, T)) : Zn(d.value, g) : !1), R = (g) => {
    if (r.value.enabled) {
      if (Array.isArray(d.value)) {
        const T = ye(g, d.value[0]) || ye(g, d.value[1]);
        return rn(d.value, l.value, g) && !T;
      }
      return !1;
    }
    return !1;
  }, V = q(() => (g) => {
    const T = Ae(/* @__PURE__ */ new Date(), { year: M.value(g) });
    return nl({
      start: al(T),
      end: ll(T)
    }).map((G) => {
      const te = rl(G), m = Xn(G), f = b(G), z = R(te), ae = typeof i.value == "function" ? i.value({ quarter: Jn(te), year: ge(te) }) : !!i.value.quarters.find(
        (s) => s.quarter === Jn(te) && s.year === ge(te)
      );
      return {
        text: I(te, m),
        value: te,
        active: D.value(te),
        highlighted: ae,
        disabled: f,
        isBetween: z
      };
    });
  }), ne = (g) => {
    zn(g, d, e.multiDatesLimit), t("auto-apply", !0);
  }, O = (g) => {
    const T = jn(d, g, t);
    dn(T, t, e.autoApply, e.modelAuto);
  }, re = (g) => {
    d.value = g, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: Y,
    year: M,
    isDisabled: w,
    quarters: V,
    showYearPicker: $,
    modelValue: d,
    setHoverDate: (g) => {
      l.value = g;
    },
    selectYear: _,
    selectQuarter: (g, T, G) => {
      if (!G)
        return P.value[T].month = be(Xn(g)), e.multiDates ? ne(g) : r.value.enabled ? O(g) : re(g);
    },
    toggleYearPicker: K,
    handleYearSelect: N,
    handleYear: E
  };
}, oo = { class: "dp--quarter-items" }, so = ["disabled", "onClick", "onMouseover"], io = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...nt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Tt(), r = Ge(i, "yearMode"), {
      defaultedMultiCalendars: d,
      defaultedConfig: M,
      groupedYears: k,
      year: P,
      isDisabled: b,
      quarters: _,
      modelValue: Y,
      showYearPicker: $,
      setHoverDate: w,
      selectQuarter: K,
      toggleYearPicker: N,
      handleYearSelect: E,
      handleYear: I
    } = ro(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: Y,
      year: P,
      selectQuarter: K,
      handleYearSelect: E,
      handleYear: I
    }) }), (R, V) => (A(), we(un, {
      "multi-calendars": c(d).count,
      collapse: R.collapse,
      stretch: ""
    }, {
      default: pe(({ instance: ne }) => [
        ce("div", {
          class: "dp-quarter-picker-wrap",
          style: xe({ minHeight: `${c(M).modeHeight}px` })
        }, [
          ce("div", null, [
            Ke(Ba, Ee(R.$props, {
              items: c(k)(ne),
              instance: ne,
              "show-year-picker": c($)[ne],
              year: c(P)(ne),
              "is-disabled": (O) => c(b)(ne, O),
              onHandleYear: (O) => c(I)(ne, O),
              onYearSelect: (O) => c(E)(O, ne),
              onToggleYearPicker: (O) => c(N)(ne, O == null ? void 0 : O.flow, O == null ? void 0 : O.show)
            }), Ue({ _: 2 }, [
              Pe(c(r), (O, re) => ({
                name: O,
                fn: pe((se) => [
                  oe(R.$slots, O, Ye(We(se)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ce("div", oo, [
            (A(!0), W(ke, null, Pe(c(_)(ne), (O, re) => (A(), W("div", { key: re }, [
              ce("button", {
                type: "button",
                class: De(["dp--qr-btn", {
                  "dp--qr-btn-active": O.active,
                  "dp--qr-btn-between": O.isBetween,
                  "dp--qr-btn-disabled": O.disabled,
                  "dp--highlighted": O.highlighted
                }]),
                disabled: O.disabled,
                onClick: (se) => c(K)(O.value, ne, O.disabled),
                onMouseover: (se) => c(w)(O.value)
              }, [
                R.$slots.quarter ? oe(R.$slots, "quarter", {
                  key: 0,
                  value: O.value,
                  text: O.text
                }) : (A(), W(ke, { key: 1 }, [
                  dt(He(O.text), 1)
                ], 64))
              ], 42, so)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), uo = ["id"], co = {
  key: 0,
  class: "dp--menu-load-container"
}, fo = /* @__PURE__ */ ce("span", { class: "dp--menu-loader" }, null, -1), vo = [
  fo
], mo = {
  key: 0,
  class: "dp__sidebar_left"
}, go = ["onClick", "onKeydown"], yo = {
  key: 2,
  class: "dp__sidebar_right"
}, po = {
  key: 3,
  class: "dp__action_extra"
}, va = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...sn,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = ee(null), r = q(() => {
      const { openOnTop: C, ...U } = n;
      return {
        ...U,
        flowStep: O.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: i.value
      };
    }), { setMenuFocused: d, setShiftKey: M, control: k } = Na(), P = Tt(), { defaultedTextInput: b, defaultedInline: _, defaultedConfig: Y } = Re(n), $ = ee(null), w = ee(0), K = ee(null), N = ee(!1), E = ee(null);
    ze(() => {
      if (!n.shadow) {
        N.value = !0, I(), window.addEventListener("resize", I);
        const C = Ne(i);
        if (C && !b.value.enabled && !_.value.enabled && (d(!0), T()), C) {
          const U = (ve) => {
            Y.value.allowPreventDefault && ve.preventDefault(), mt(ve, Y.value, !0);
          };
          C.addEventListener("pointerdown", U), C.addEventListener("mousedown", U);
        }
      }
    }), Cn(() => {
      window.removeEventListener("resize", I);
    });
    const I = () => {
      const C = Ne(K);
      C && (w.value = C.getBoundingClientRect().width);
    }, { arrowRight: D, arrowLeft: R, arrowDown: V, arrowUp: ne } = ht(), { flowStep: O, updateFlowStep: re, childMount: se, resetFlow: H } = sr(n, a, E), g = q(() => n.monthPicker ? $r : n.yearPicker ? Ar : n.timePicker ? Ur : n.quarterPicker ? io : lo), T = () => {
      const C = Ne(i);
      C && C.focus({ preventScroll: !0 });
    }, G = q(() => {
      var C;
      return ((C = E.value) == null ? void 0 : C.getSidebarProps()) || {};
    }), te = () => {
      n.openOnTop && a("recalculate-position");
    }, m = Ge(P, "action"), f = q(() => n.monthPicker || n.yearPicker ? Ge(P, "monthYear") : n.timePicker ? Ge(P, "timePicker") : Ge(P, "shared")), z = q(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ae = q(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), s = q(
      () => ({
        dp__menu: !0,
        dp__menu_index: !_.value.enabled,
        dp__relative: _.value.enabled,
        [n.menuClassName]: !!n.menuClassName
      })
    ), h = (C) => {
      mt(C, Y.value, !0);
    }, o = () => {
      n.escClose && a("close-picker");
    }, S = (C) => {
      if (n.arrowNavigation) {
        if (C === "up")
          return ne();
        if (C === "down")
          return V();
        if (C === "left")
          return R();
        if (C === "right")
          return D();
      } else
        C === "left" || C === "up" ? le("handleArrow", "left", 0, C === "up") : le("handleArrow", "right", 0, C === "down");
    }, u = (C) => {
      M(C.shiftKey), !n.disableMonthYearSelect && C.code === "Tab" && C.target.classList.contains("dp__menu") && k.value.shiftKeyInMenu && (C.preventDefault(), mt(C, Y.value, !0), a("close-picker"));
    }, B = () => {
      T(), a("time-picker-close");
    }, p = (C) => {
      var U, ve, Me;
      (U = E.value) == null || U.toggleTimePicker(!1, !1), (ve = E.value) == null || ve.toggleMonthPicker(!1, !1, C), (Me = E.value) == null || Me.toggleYearPicker(!1, !1, C);
    }, J = (C, U = 0) => {
      var ve, Me, j;
      return C === "month" ? (ve = E.value) == null ? void 0 : ve.toggleMonthPicker(!1, !0, U) : C === "year" ? (Me = E.value) == null ? void 0 : Me.toggleYearPicker(!1, !0, U) : C === "time" ? (j = E.value) == null ? void 0 : j.toggleTimePicker(!0, !1) : p(U);
    }, le = (C, ...U) => {
      var ve, Me;
      (ve = E.value) != null && ve[C] && ((Me = E.value) == null || Me[C](...U));
    }, v = () => {
      le("selectCurrentDate");
    }, Q = (C, U) => {
      le("presetDate", C, U);
    }, he = () => {
      le("clearHoverDate");
    };
    return t({
      updateMonthYear: (C, U) => {
        le("updateMonthYear", C, U);
      },
      switchView: J
    }), (C, U) => {
      var ve, Me;
      return A(), W("div", {
        id: C.uid ? `dp-menu-${C.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: i,
        tabindex: "0",
        role: "dialog",
        class: De(s.value),
        onMouseleave: he,
        onClick: h,
        onKeydown: [
          fe(o, ["esc"]),
          U[18] || (U[18] = fe($e((j) => S("left"), ["prevent"]), ["left"])),
          U[19] || (U[19] = fe($e((j) => S("up"), ["prevent"]), ["up"])),
          U[20] || (U[20] = fe($e((j) => S("down"), ["prevent"]), ["down"])),
          U[21] || (U[21] = fe($e((j) => S("right"), ["prevent"]), ["right"])),
          u
        ]
      }, [
        (C.disabled || C.readonly) && c(_).enabled || C.loading ? (A(), W("div", {
          key: 0,
          class: De(ae.value)
        }, [
          C.loading ? (A(), W("div", co, vo)) : Z("", !0)
        ], 2)) : Z("", !0),
        !c(_).enabled && !C.teleportCenter ? (A(), W("div", {
          key: 1,
          class: De(z.value)
        }, null, 2)) : Z("", !0),
        ce("div", {
          ref_key: "innerMenuRef",
          ref: K,
          class: De({
            dp__menu_content_wrapper: ((ve = C.presetDates) == null ? void 0 : ve.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((Me = C.presetDates) == null ? void 0 : Me.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"]
          }),
          style: xe({ "--dp-menu-width": `${w.value}px` })
        }, [
          C.$slots["left-sidebar"] ? (A(), W("div", mo, [
            oe(C.$slots, "left-sidebar", Ye(We(G.value)))
          ])) : Z("", !0),
          C.presetDates.length ? (A(), W("div", {
            key: 1,
            class: De({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (A(!0), W(ke, null, Pe(C.presetDates, (j, Qe) => (A(), W(ke, { key: Qe }, [
              j.slot ? oe(C.$slots, j.slot, {
                key: 0,
                presetDate: Q,
                label: j.label,
                value: j.value
              }) : (A(), W("button", {
                key: 1,
                type: "button",
                style: xe(j.style || {}),
                class: De(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: $e((Ze) => Q(j.value, j.noTz), ["prevent"]),
                onKeydown: [
                  fe($e((Ze) => Q(j.value, j.noTz), ["prevent"]), ["enter"]),
                  fe($e((Ze) => Q(j.value, j.noTz), ["prevent"]), ["space"])
                ]
              }, He(j.label), 47, go))
            ], 64))), 128))
          ], 2)) : Z("", !0),
          ce("div", {
            ref_key: "calendarWrapperRef",
            ref: $,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (A(), we(_n(g.value), Ee({
              ref_key: "dynCmpRef",
              ref: E
            }, r.value, {
              "flow-step": c(O),
              onMount: c(se),
              onUpdateFlowStep: c(re),
              onResetFlow: c(H),
              onFocusMenu: T,
              onSelectDate: U[0] || (U[0] = (j) => C.$emit("select-date")),
              onDateUpdate: U[1] || (U[1] = (j) => C.$emit("date-update", j)),
              onTooltipOpen: U[2] || (U[2] = (j) => C.$emit("tooltip-open", j)),
              onTooltipClose: U[3] || (U[3] = (j) => C.$emit("tooltip-close", j)),
              onAutoApply: U[4] || (U[4] = (j) => C.$emit("auto-apply", j)),
              onRangeStart: U[5] || (U[5] = (j) => C.$emit("range-start", j)),
              onRangeEnd: U[6] || (U[6] = (j) => C.$emit("range-end", j)),
              onInvalidFixedRange: U[7] || (U[7] = (j) => C.$emit("invalid-fixed-range", j)),
              onTimeUpdate: U[8] || (U[8] = (j) => C.$emit("time-update")),
              onAmPmChange: U[9] || (U[9] = (j) => C.$emit("am-pm-change", j)),
              onTimePickerOpen: U[10] || (U[10] = (j) => C.$emit("time-picker-open", j)),
              onTimePickerClose: B,
              onRecalculatePosition: te,
              onUpdateMonthYear: U[11] || (U[11] = (j) => C.$emit("update-month-year", j)),
              onAutoApplyInvalid: U[12] || (U[12] = (j) => C.$emit("auto-apply-invalid", j)),
              onInvalidDate: U[13] || (U[13] = (j) => C.$emit("invalid-date", j)),
              "onUpdate:internalModelValue": U[14] || (U[14] = (j) => C.$emit("update:internal-model-value", j))
            }), Ue({ _: 2 }, [
              Pe(f.value, (j, Qe) => ({
                name: j,
                fn: pe((Ze) => [
                  oe(C.$slots, j, Ye(We({ ...Ze })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          C.$slots["right-sidebar"] ? (A(), W("div", yo, [
            oe(C.$slots, "right-sidebar", Ye(We(G.value)))
          ])) : Z("", !0),
          C.$slots["action-extra"] ? (A(), W("div", po, [
            C.$slots["action-extra"] ? oe(C.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: v
            }) : Z("", !0)
          ])) : Z("", !0)
        ], 6),
        !C.autoApply || c(Y).keepActionRow ? (A(), we(gr, Ee({
          key: 2,
          "menu-mount": N.value
        }, r.value, {
          "calendar-width": w.value,
          onClosePicker: U[15] || (U[15] = (j) => C.$emit("close-picker")),
          onSelectDate: U[16] || (U[16] = (j) => C.$emit("select-date")),
          onInvalidSelect: U[17] || (U[17] = (j) => C.$emit("invalid-select")),
          onSelectNow: v
        }), Ue({ _: 2 }, [
          Pe(c(m), (j, Qe) => ({
            name: j,
            fn: pe((Ze) => [
              oe(C.$slots, j, Ye(We({ ...Ze })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : Z("", !0)
      ], 42, uo);
    };
  }
}), ho = typeof window < "u" ? window : void 0, Tn = () => {
}, bo = (e) => za() ? (ja(e), !0) : !1, ko = (e, t, l, a) => {
  if (!e)
    return Tn;
  let n = Tn;
  const i = yt(
    () => c(e),
    (d) => {
      n(), d && (d.addEventListener(t, l, a), n = () => {
        d.removeEventListener(t, l, a), n = Tn;
      });
    },
    { immediate: !0, flush: "post" }
  ), r = () => {
    i(), n();
  };
  return bo(r), r;
}, wo = (e, t, l, a = {}) => {
  const { window: n = ho, event: i = "pointerdown" } = a;
  return n ? ko(n, i, (d) => {
    const M = Ne(e), k = Ne(t);
    !M || !k || M === d.target || d.composedPath().includes(M) || d.composedPath().includes(k) || l(d);
  }, { passive: !0 }) : void 0;
}, Do = /* @__PURE__ */ Fe({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...sn
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Tt(), r = ee(!1), d = an(n, "modelValue"), M = an(n, "timezone"), k = ee(null), P = ee(null), b = ee(null), _ = ee(!1), Y = ee(null), $ = ee(!1), w = ee(!1), K = ee(!1), { setMenuFocused: N, setShiftKey: E } = Na(), { clearArrowNav: I } = ht(), { mapDatesArrToMap: D, validateDate: R, isValidTime: V } = At(n), { defaultedTransitions: ne, defaultedTextInput: O, defaultedInline: re, defaultedConfig: se, defaultedRange: H } = Re(n), { menuTransition: g, showTransition: T } = jt(ne);
    ze(() => {
      B(n.modelValue), pt().then(() => {
        if (!re.value.enabled) {
          const x = h(Y.value);
          x == null || x.addEventListener("scroll", U), window == null || window.addEventListener("resize", ve);
        }
      }), re.value.enabled && (r.value = !0), window == null || window.addEventListener("keyup", Me), window == null || window.addEventListener("keydown", j);
    });
    const G = q(() => D());
    Cn(() => {
      if (!re.value.enabled) {
        const x = h(Y.value);
        x == null || x.removeEventListener("scroll", U), window == null || window.removeEventListener("resize", ve);
      }
      window == null || window.removeEventListener("keyup", Me), window == null || window.removeEventListener("keydown", j);
    });
    const te = Ge(i, "all", n.presetDates), m = Ge(i, "input");
    yt(
      [d, M],
      () => {
        B(d.value);
      },
      { deep: !0 }
    );
    const { openOnTop: f, menuStyle: z, xCorrect: ae, setMenuPosition: s, getScrollableParent: h, shadowRender: o } = ar({
      menuRef: k,
      menuRefInner: P,
      inputRef: b,
      pickerWrapperRef: Y,
      inline: re,
      emit: a,
      props: n,
      slots: i
    }), {
      inputValue: S,
      internalModelValue: u,
      parseExternalModelValue: B,
      emitModelValue: p,
      formatInputValue: J,
      checkBeforeEmit: le
    } = tr(a, n, _), v = q(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: re.value.enabled,
        "dp--flex-display-collapsed": K.value,
        dp__flex_display_with_input: re.value.input
      })
    ), Q = q(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), he = q(() => ({
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || re.value.enabled
    })), L = q(() => ({ class: "dp__outer_menu_wrap" })), C = q(() => re.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), U = () => {
      r.value && (se.value.closeOnScroll ? qe() : s());
    }, ve = () => {
      var de;
      r.value && s();
      const x = (de = P.value) == null ? void 0 : de.$el.getBoundingClientRect().width;
      K.value = document.body.offsetWidth <= x;
    }, Me = (x) => {
      x.key === "Tab" && !re.value.enabled && !n.teleport && se.value.tabOutClosesMenu && (Y.value.contains(document.activeElement) || qe()), w.value = x.shiftKey;
    }, j = (x) => {
      w.value = x.shiftKey;
    }, Qe = () => {
      !n.disabled && !n.readonly && (o(va, n), s(!1), r.value = !0, r.value && a("open"), r.value || It(), B(n.modelValue));
    }, Ze = () => {
      var x;
      S.value = "", It(), (x = b.value) == null || x.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), se.value.closeOnClearValue && qe();
    }, St = () => {
      const x = u.value;
      return !x || !Array.isArray(x) && R(x) ? !0 : Array.isArray(x) ? n.multiDates || x.length === 2 && R(x[0]) && R(x[1]) ? !0 : H.value.partialRange && !n.timePicker ? R(x[0]) : !1 : !1;
    }, ct = () => {
      le() && St() ? (p(), qe()) : a("invalid-select", u.value);
    }, qt = (x) => {
      Qt(), p(), se.value.closeOnAutoApply && !x && qe();
    }, Qt = () => {
      b.value && O.value.enabled && b.value.setParsedDate(u.value);
    }, cn = (x = !1) => {
      n.autoApply && V(u.value) && St() && (H.value.enabled && Array.isArray(u.value) ? (H.value.partialRange || u.value.length === 2) && qt(x) : qt(x));
    }, It = () => {
      O.value.enabled || (u.value = null);
    }, qe = () => {
      re.value.enabled || (r.value && (r.value = !1, ae.value = !1, N(!1), E(!1), I(), a("closed"), S.value && B(d.value)), It(), a("blur"));
    }, fn = (x, de, ue = !1) => {
      if (!x) {
        u.value = null;
        return;
      }
      const bt = Array.isArray(x) ? !x.some((Gn) => !R(Gn)) : R(x), je = V(x);
      bt && je && (u.value = x, de && ($.value = ue, ct(), a("text-submit")));
    }, vn = () => {
      n.autoApply && V(u.value) && p(), Qt();
    }, Zt = () => r.value ? qe() : Qe(), Kn = (x) => {
      u.value = x;
    }, y = () => {
      O.value.enabled && (_.value = !0, J()), a("focus");
    }, X = () => {
      if (O.value.enabled && (_.value = !1, B(n.modelValue), $.value)) {
        const x = Yl(Y.value, w.value);
        x == null || x.focus();
      }
      a("blur");
    }, ie = (x) => {
      P.value && P.value.updateMonthYear(0, {
        month: oa(x.month),
        year: oa(x.year)
      });
    }, me = (x) => {
      B(x ?? n.modelValue);
    }, Te = (x, de) => {
      var ue;
      (ue = P.value) == null || ue.switchView(x, de);
    }, at = (x) => se.value.onClickOutside ? se.value.onClickOutside(x) : qe();
    return wo(k, b, () => at(St)), t({
      closeMenu: qe,
      selectDate: ct,
      clearValue: Ze,
      openMenu: Qe,
      onScroll: U,
      formatInputValue: J,
      // exposed for testing purposes
      updateInternalModelValue: Kn,
      // modify internal modelValue
      setMonthYear: ie,
      parseModel: me,
      switchView: Te,
      toggleMenu: Zt
    }), (x, de) => (A(), W("div", {
      ref_key: "pickerWrapperRef",
      ref: Y,
      class: De(v.value),
      "data-datepicker-instance": ""
    }, [
      Ke(cr, Ee({
        ref_key: "inputRef",
        ref: b,
        "input-value": c(S),
        "onUpdate:inputValue": de[0] || (de[0] = (ue) => Qn(S) ? S.value = ue : null),
        "is-menu-open": r.value
      }, x.$props, {
        onClear: Ze,
        onOpen: Qe,
        onSetInputDate: fn,
        onSetEmptyDate: c(p),
        onSelectDate: ct,
        onToggle: Zt,
        onClose: qe,
        onFocus: y,
        onBlur: X,
        onRealBlur: de[1] || (de[1] = (ue) => _.value = !1)
      }), Ue({ _: 2 }, [
        Pe(c(m), (ue, bt) => ({
          name: ue,
          fn: pe((je) => [
            oe(x.$slots, ue, Ye(We(je)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      Ke(Ka, Ye(We(he.value)), {
        default: pe(() => [
          Ke(Nt, {
            name: c(g)(c(f)),
            css: c(T) && !c(re).enabled
          }, {
            default: pe(() => [
              r.value ? (A(), W("div", Ee({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: k
              }, L.value, {
                class: { "dp--menu-wrapper": !c(re).enabled },
                style: c(re).enabled ? void 0 : c(z)
              }), [
                Ke(va, Ee({
                  ref_key: "dpMenuRef",
                  ref: P
                }, x.$props, {
                  "internal-model-value": c(u),
                  "onUpdate:internalModelValue": de[2] || (de[2] = (ue) => Qn(u) ? u.value = ue : null),
                  class: { [Q.value]: !0, "dp--menu-wrapper": x.teleport },
                  "open-on-top": c(f),
                  "arr-map-values": G.value,
                  "no-overlay-focus": C.value,
                  collapse: K.value,
                  onClosePicker: qe,
                  onSelectDate: ct,
                  onAutoApply: cn,
                  onTimeUpdate: vn,
                  onFlowStep: de[3] || (de[3] = (ue) => x.$emit("flow-step", ue)),
                  onUpdateMonthYear: de[4] || (de[4] = (ue) => x.$emit("update-month-year", ue)),
                  onInvalidSelect: de[5] || (de[5] = (ue) => x.$emit("invalid-select", c(u))),
                  onAutoApplyInvalid: de[6] || (de[6] = (ue) => x.$emit("invalid-select", ue)),
                  onInvalidFixedRange: de[7] || (de[7] = (ue) => x.$emit("invalid-fixed-range", ue)),
                  onRecalculatePosition: c(s),
                  onTooltipOpen: de[8] || (de[8] = (ue) => x.$emit("tooltip-open", ue)),
                  onTooltipClose: de[9] || (de[9] = (ue) => x.$emit("tooltip-close", ue)),
                  onTimePickerOpen: de[10] || (de[10] = (ue) => x.$emit("time-picker-open", ue)),
                  onTimePickerClose: de[11] || (de[11] = (ue) => x.$emit("time-picker-close", ue)),
                  onAmPmChange: de[12] || (de[12] = (ue) => x.$emit("am-pm-change", ue)),
                  onRangeStart: de[13] || (de[13] = (ue) => x.$emit("range-start", ue)),
                  onRangeEnd: de[14] || (de[14] = (ue) => x.$emit("range-end", ue)),
                  onDateUpdate: de[15] || (de[15] = (ue) => x.$emit("date-update", ue)),
                  onInvalidDate: de[16] || (de[16] = (ue) => x.$emit("invalid-date", ue))
                }), Ue({ _: 2 }, [
                  Pe(c(te), (ue, bt) => ({
                    name: ue,
                    fn: pe((je) => [
                      oe(x.$slots, ue, Ye(We({ ...je })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "arr-map-values", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : Z("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
}), Va = /* @__PURE__ */ (() => {
  const e = Do;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Va
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Mo).forEach(([e, t]) => {
  e !== "default" && (Va[e] = t);
});
export {
  Va as default
};
