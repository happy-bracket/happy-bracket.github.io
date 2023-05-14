module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  hooks_module_f = [],
  c = [],
  hooks_module_e = external_preact_["options"].__b,
  a = external_preact_["options"].__r,
  v = external_preact_["options"].diffed,
  l = external_preact_["options"].__c,
  m = external_preact_["options"].unmount;
function d(t, u) {
  external_preact_["options"].__h && external_preact_["options"].__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
  var i = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return hooks_module_o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(hooks_module_t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = hooks_module_r, !hooks_module_r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    hooks_module_r.u = !0;
    var c = hooks_module_r.shouldComponentUpdate,
      e = hooks_module_r.componentWillUpdate;
    hooks_module_r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, hooks_module_r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(hooks_module_t++, 3);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(hooks_module_t++, 4);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__h.push(o));
}
function _(n) {
  return hooks_module_o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  hooks_module_o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(hooks_module_t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return hooks_module_o = 8, F(function () {
    return n;
  }, t);
}
function hooks_module_q(n) {
  var u = hooks_module_r.context[n.__c],
    i = d(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function x(t, r) {
  external_preact_["options"].useDebugValue && external_preact_["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(hooks_module_t++, 10),
    i = h();
  return u.__ = n, hooks_module_r.componentDidCatch || (hooks_module_r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(hooks_module_t++, 11);
  if (!n.__) {
    for (var u = hooks_module_r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = hooks_module_f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], external_preact_["options"].__e(r, t.__v);
  }
}
external_preact_["options"].__b = function (n) {
  hooks_module_r = null, hooks_module_e && hooks_module_e(n);
}, external_preact_["options"].__r = function (n) {
  a && a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), hooks_module_u = hooks_module_r;
}, external_preact_["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== hooks_module_f.push(o) && hooks_module_i === external_preact_["options"].requestAnimationFrame || ((hooks_module_i = external_preact_["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), hooks_module_u = hooks_module_r = null;
}, external_preact_["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], external_preact_["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, external_preact_["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && external_preact_["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = hooks_module_r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
}
function w(n) {
  var t = hooks_module_r;
  n.__c = n.__(), hooks_module_r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// CONCATENATED MODULE: ../node_modules/@preact/signals-core/dist/signals-core.module.js
function signals_core_module_i() {
  throw new Error("Cycle detected");
}
function signals_core_module_t() {
  if (!(signals_core_module_h > 1)) {
    var i,
      t = !1;
    while (void 0 !== signals_core_module_n) {
      var o = signals_core_module_n;
      signals_core_module_n = void 0;
      signals_core_module_s++;
      while (void 0 !== o) {
        var r = o.o;
        o.o = void 0;
        o.f &= -3;
        if (!(8 & o.f) && signals_core_module_c(o)) try {
          o.c();
        } catch (o) {
          if (!t) {
            i = o;
            t = !0;
          }
        }
        o = r;
      }
    }
    signals_core_module_s = 0;
    signals_core_module_h--;
    if (t) throw i;
  } else signals_core_module_h--;
}
function signals_core_module_o(i) {
  if (signals_core_module_h > 0) return i();
  signals_core_module_h++;
  try {
    return i();
  } finally {
    signals_core_module_t();
  }
}
var signals_core_module_r = void 0,
  signals_core_module_n = void 0,
  signals_core_module_h = 0,
  signals_core_module_s = 0,
  signals_core_module_f = 0;
function signals_core_module_v(i) {
  if (void 0 !== signals_core_module_r) {
    var t = i.n;
    if (void 0 === t || t.t !== signals_core_module_r) {
      t = {
        i: 0,
        S: i,
        p: signals_core_module_r.s,
        n: void 0,
        t: signals_core_module_r,
        e: void 0,
        x: void 0,
        r: t
      };
      if (void 0 !== signals_core_module_r.s) signals_core_module_r.s.n = t;
      signals_core_module_r.s = t;
      i.n = t;
      if (32 & signals_core_module_r.f) i.S(t);
      return t;
    } else if (-1 === t.i) {
      t.i = 0;
      if (void 0 !== t.n) {
        t.n.p = t.p;
        if (void 0 !== t.p) t.p.n = t.n;
        t.p = signals_core_module_r.s;
        t.n = void 0;
        signals_core_module_r.s.n = t;
        signals_core_module_r.s = t;
      }
      return t;
    }
  }
}
function signals_core_module_e(i) {
  this.v = i;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
signals_core_module_e.prototype.h = function () {
  return !0;
};
signals_core_module_e.prototype.S = function (i) {
  if (this.t !== i && void 0 === i.e) {
    i.x = this.t;
    if (void 0 !== this.t) this.t.e = i;
    this.t = i;
  }
};
signals_core_module_e.prototype.U = function (i) {
  if (void 0 !== this.t) {
    var t = i.e,
      o = i.x;
    if (void 0 !== t) {
      t.x = o;
      i.e = void 0;
    }
    if (void 0 !== o) {
      o.e = t;
      i.x = void 0;
    }
    if (i === this.t) this.t = o;
  }
};
signals_core_module_e.prototype.subscribe = function (i) {
  var t = this;
  return signals_core_module_b(function () {
    var o = t.value,
      r = 32 & this.f;
    this.f &= -33;
    try {
      i(o);
    } finally {
      this.f |= r;
    }
  });
};
signals_core_module_e.prototype.valueOf = function () {
  return this.value;
};
signals_core_module_e.prototype.toString = function () {
  return this.value + "";
};
signals_core_module_e.prototype.toJSON = function () {
  return this.value;
};
signals_core_module_e.prototype.peek = function () {
  return this.v;
};
Object.defineProperty(signals_core_module_e.prototype, "value", {
  get: function get() {
    var i = signals_core_module_v(this);
    if (void 0 !== i) i.i = this.i;
    return this.v;
  },
  set: function set(o) {
    if (signals_core_module_r instanceof signals_core_module_l) !function () {
      throw new Error("Computed cannot have side-effects");
    }();
    if (o !== this.v) {
      if (signals_core_module_s > 100) signals_core_module_i();
      this.v = o;
      this.i++;
      signals_core_module_f++;
      signals_core_module_h++;
      try {
        for (var n = this.t; void 0 !== n; n = n.x) n.t.N();
      } finally {
        signals_core_module_t();
      }
    }
  }
});
function signals_core_module_u(i) {
  return new signals_core_module_e(i);
}
function signals_core_module_c(i) {
  for (var t = i.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function signals_core_module_d(i) {
  for (var t = i.s; void 0 !== t; t = t.n) {
    var o = t.S.n;
    if (void 0 !== o) t.r = o;
    t.S.n = t;
    t.i = -1;
    if (void 0 === t.n) {
      i.s = t;
      break;
    }
  }
}
function signals_core_module_a(i) {
  var t = i.s,
    o = void 0;
  while (void 0 !== t) {
    var r = t.p;
    if (-1 === t.i) {
      t.S.U(t);
      if (void 0 !== r) r.n = t.n;
      if (void 0 !== t.n) t.n.p = r;
    } else o = t;
    t.S.n = t.r;
    if (void 0 !== t.r) t.r = void 0;
    t = r;
  }
  i.s = o;
}
function signals_core_module_l(i) {
  signals_core_module_e.call(this, void 0);
  this.x = i;
  this.s = void 0;
  this.g = signals_core_module_f - 1;
  this.f = 4;
}
(signals_core_module_l.prototype = new signals_core_module_e()).h = function () {
  this.f &= -3;
  if (1 & this.f) return !1;
  if (32 == (36 & this.f)) return !0;
  this.f &= -5;
  if (this.g === signals_core_module_f) return !0;
  this.g = signals_core_module_f;
  this.f |= 1;
  if (this.i > 0 && !signals_core_module_c(this)) {
    this.f &= -2;
    return !0;
  }
  var i = signals_core_module_r;
  try {
    signals_core_module_d(this);
    signals_core_module_r = this;
    var t = this.x();
    if (16 & this.f || this.v !== t || 0 === this.i) {
      this.v = t;
      this.f &= -17;
      this.i++;
    }
  } catch (i) {
    this.v = i;
    this.f |= 16;
    this.i++;
  }
  signals_core_module_r = i;
  signals_core_module_a(this);
  this.f &= -2;
  return !0;
};
signals_core_module_l.prototype.S = function (i) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
  }
  signals_core_module_e.prototype.S.call(this, i);
};
signals_core_module_l.prototype.U = function (i) {
  if (void 0 !== this.t) {
    signals_core_module_e.prototype.U.call(this, i);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
    }
  }
};
signals_core_module_l.prototype.N = function () {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; void 0 !== i; i = i.x) i.t.N();
  }
};
signals_core_module_l.prototype.peek = function () {
  if (!this.h()) signals_core_module_i();
  if (16 & this.f) throw this.v;
  return this.v;
};
Object.defineProperty(signals_core_module_l.prototype, "value", {
  get: function get() {
    if (1 & this.f) signals_core_module_i();
    var t = signals_core_module_v(this);
    this.h();
    if (void 0 !== t) t.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  }
});
function signals_core_module_w(i) {
  return new signals_core_module_l(i);
}
function signals_core_module_y(i) {
  var o = i.u;
  i.u = void 0;
  if ("function" == typeof o) {
    signals_core_module_h++;
    var n = signals_core_module_r;
    signals_core_module_r = void 0;
    try {
      o();
    } catch (t) {
      i.f &= -2;
      i.f |= 8;
      signals_core_module_(i);
      throw t;
    } finally {
      signals_core_module_r = n;
      signals_core_module_t();
    }
  }
}
function signals_core_module_(i) {
  for (var t = i.s; void 0 !== t; t = t.n) t.S.U(t);
  i.x = void 0;
  i.s = void 0;
  signals_core_module_y(i);
}
function signals_core_module_p(i) {
  if (signals_core_module_r !== this) throw new Error("Out-of-order effect");
  signals_core_module_a(this);
  signals_core_module_r = i;
  this.f &= -2;
  if (8 & this.f) signals_core_module_(this);
  signals_core_module_t();
}
function signals_core_module_g(i) {
  this.x = i;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
signals_core_module_g.prototype.c = function () {
  var i = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t = this.x();
    if ("function" == typeof t) this.u = t;
  } finally {
    i();
  }
};
signals_core_module_g.prototype.S = function () {
  if (1 & this.f) signals_core_module_i();
  this.f |= 1;
  this.f &= -9;
  signals_core_module_y(this);
  signals_core_module_d(this);
  signals_core_module_h++;
  var t = signals_core_module_r;
  signals_core_module_r = this;
  return signals_core_module_p.bind(this, t);
};
signals_core_module_g.prototype.N = function () {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = signals_core_module_n;
    signals_core_module_n = this;
  }
};
signals_core_module_g.prototype.d = function () {
  this.f |= 8;
  if (!(1 & this.f)) signals_core_module_(this);
};
function signals_core_module_b(i) {
  var t = new signals_core_module_g(i);
  try {
    t.c();
  } catch (i) {
    t.d();
    throw i;
  }
  return t.d.bind(t);
}

// CONCATENATED MODULE: ../node_modules/@preact/signals/dist/signals.module.js




var signals_module_c, signals_module_v;
function signals_module_s(n, i) {
  external_preact_["options"][n] = i.bind(null, external_preact_["options"][n] || function () {});
}
function signals_module_l(n) {
  if (signals_module_v) signals_module_v();
  signals_module_v = n && n.S();
}
function signals_module_d(n) {
  var r = this,
    t = n.data,
    f = useSignal(t);
  f.value = t;
  var o = F(function () {
    var n = r.__v;
    while (n = n.__) if (n.__c) {
      n.__c.__$f |= 4;
      break;
    }
    r.__$u.c = function () {
      r.base.data = o.peek();
    };
    return signals_core_module_w(function () {
      var n = f.value.value;
      return 0 === n ? 0 : !0 === n ? "" : n || "";
    });
  }, []);
  return o.value;
}
signals_module_d.displayName = "_st";
Object.defineProperties(signals_core_module_e.prototype, {
  constructor: {
    configurable: !0,
    value: void 0
  },
  type: {
    configurable: !0,
    value: signals_module_d
  },
  props: {
    configurable: !0,
    get: function get() {
      return {
        data: this
      };
    }
  },
  __b: {
    configurable: !0,
    value: 1
  }
});
signals_module_s("__b", function (n, r) {
  if ("string" == typeof r.type) {
    var i,
      t = r.props;
    for (var f in t) if ("children" !== f) {
      var e = t[f];
      if (e instanceof signals_core_module_e) {
        if (!i) r.__np = i = {};
        i[f] = e;
        t[f] = e.peek();
      }
    }
  }
  n(r);
});
signals_module_s("__r", function (n, r) {
  signals_module_l();
  var i,
    t = r.__c;
  if (t) {
    t.__$f &= -2;
    if (void 0 === (i = t.__$u)) t.__$u = i = function (n) {
      var r;
      signals_core_module_b(function () {
        r = this;
      });
      r.c = function () {
        t.__$f |= 1;
        t.setState({});
      };
      return r;
    }();
  }
  signals_module_c = t;
  signals_module_l(i);
  n(r);
});
signals_module_s("__e", function (n, r, i, t) {
  signals_module_l();
  signals_module_c = void 0;
  n(r, i, t);
});
signals_module_s("diffed", function (n, r) {
  signals_module_l();
  signals_module_c = void 0;
  var i;
  if ("string" == typeof r.type && (i = r.__e)) {
    var t = r.__np,
      f = r.props;
    if (t) {
      var o = i.U;
      if (o) for (var e in o) {
        var u = o[e];
        if (void 0 !== u && !(e in t)) {
          u.d();
          o[e] = void 0;
        }
      } else i.U = o = {};
      for (var a in t) {
        var v = o[a],
          s = t[a];
        if (void 0 === v) {
          v = signals_module_p(i, a, s, f);
          o[a] = v;
        } else v.o(s, f);
      }
    }
  }
  n(r);
});
function signals_module_p(n, r, i, t) {
  var f = r in n && void 0 === n.ownerSVGElement,
    _o = signals_core_module_u(i);
  return {
    o: function o(n, r) {
      _o.value = n;
      t = r;
    },
    d: signals_core_module_b(function () {
      var i = _o.value.value;
      if (t[r] !== i) {
        t[r] = i;
        if (f) n[r] = i;else if (i) n.setAttribute(r, i);else n.removeAttribute(r);
      }
    })
  };
}
signals_module_s("unmount", function (n, r) {
  if ("string" == typeof r.type) {
    var i = r.__e;
    if (i) {
      var t = i.U;
      if (t) {
        i.U = void 0;
        for (var f in t) {
          var o = t[f];
          if (o) o.d();
        }
      }
    }
  } else {
    var e = r.__c;
    if (e) {
      var u = e.__$u;
      if (u) {
        e.__$u = void 0;
        u.d();
      }
    }
  }
  n(r);
});
signals_module_s("__h", function (n, r, i, t) {
  if (t < 3) r.__$f |= 2;
  n(r, i, t);
});
external_preact_["Component"].prototype.shouldComponentUpdate = function (n, r) {
  var i = this.__$u;
  if (!(i && void 0 !== i.s || 4 & this.__$f)) return !0;
  if (3 & this.__$f) return !0;
  for (var t in r) return !0;
  for (var f in n) if ("__source" !== f && n[f] !== this.props[f]) return !0;
  for (var o in this.props) if (!(o in n)) return !0;
  return !1;
};
function useSignal(n) {
  return F(function () {
    return signals_core_module_u(n);
  }, []);
}
function useComputed(n) {
  var r = _(n);
  r.current = n;
  signals_module_c.__$f |= 4;
  return F(function () {
    return signals_core_module_w(function () {
      return r.current();
    });
  }, []);
}
function useSignalEffect(n) {
  var r = _(n);
  r.current = n;
  p(function () {
    return signals_core_module_b(function () {
      return r.current();
    });
  }, []);
}

// CONCATENATED MODULE: ./model/questionnaire.ts
var idCounter = 0;
function SingleLineQuestionData(title, responses) {
  return {
    kind: 'singleLine',
    id: ++idCounter,
    title: title,
    responses: responses
  };
}
function MultiLineQuestionData(title, questions, responses) {
  return {
    kind: 'multiLine',
    id: ++idCounter,
    title: title,
    questions: questions,
    responses: responses
  };
}
var QuestionnaireData = [
// Первый Блок
SingleLineQuestionData("Хотите ли Вы перейти на другую работу, не связанную с педагогической деятельностью?", ["Да", "Нет", "Не знаю"]), SingleLineQuestionData("Нравится ли Вам Ваша профессия?", ["Профессия очень нравится", "Скорее нравится, чем не нравится", "Безразлична", "Скорее не нравится, чем нравится", "Совершенно не нравится", "Не могу сказать"]), SingleLineQuestionData("Избрали бы Вы вновь свою профессию?", ["Да", "Нет", "Не знаю"]),
// Конец Первого Блока
// Второй Блок
SingleLineQuestionData("Вы считаете, что Вам необходимо совершенствование профессионализма:", ["Постоянно, так как требования к уровню учителей все время повышаются, а достигнутые результаты открывают новые перспективы профессионального и личностного роста", "Считаете это напрасной тратой времени, так как опыт практической деятельности позволяет достигать Вам определенных результатов, которые Вас вполне устраивают", "Только когда этого требует администрация, чтобы не отставать от своих коллег"]), SingleLineQuestionData("Для Вас в профессиональной деятельности наиболее важно:", ["Достижение только высоких результатов", "Создание карьеры, движение по иерархической лестнице вверх", "Всестороннее развитие личности учащихся путем совершенствования Вашего профессионального мастерства", "Формальное выполнение всех предписаний и инструкций администрации и руководящих органов"]), MultiLineQuestionData("Прочитайте нижеперечисленные мотивы профессиональной деятельности и дайте оценку их значимости для Вас", ["Денежный заработок", "Стремление к продвижению по работе", "Стремление избежать критики со стороны руководителя или коллег", "Стремление избежать возможных наказаний и неприятностей", "Потребность в достижении социального престижа и уважения со стороны других", "Удовлетворение от самого процесса и результата работы", "Возможность наиболее полной самореализации именно в данной деятельности"], ["В очень незначительной степени", "В незначительной степени", "В небольшой, но и не в малой мере", "В большой мере", "В очень большой мере"]),
// Конец Второго Блока
// Третий Блок

// Общая Удовлетворённость
SingleLineQuestionData("В конце дня Вы обыкновенно", ["Недовольны собой", "Считаете, что день мог бы пройти и лучше", "Отходите ко сну с чувством удовлетворения"]), SingleLineQuestionData("Часто ли Вы испытываете ощущение счастья и радости?", ["Всегда", "Довольно часто", "Не понятен вопрос", "Иногда", "Почти никогда", "Не могу сказать"]), SingleLineQuestionData("Если бы была возможность начать жизнь сначала, многое бы Вы изменили в ней?", ["Да", "Нет", "Не знаю"]),
// Социальное Состояние
SingleLineQuestionData("Вы считаете, что Ваши успехи и неудачи это:", ["Результат Ваших побед и ошибок и при желании всё в Ваших руках", "Везение или неприятное стечение обстоятельств и от Вас ничего, по большому счету не зависит"]), SingleLineQuestionData("Считаете ли Вы, что некоторые из Ваших идей принесли бы значительный прогресс в вашем учебном заведении, в педагогическом процессе?", ["Да", "Да, в некоторой степени", "Скорее нет"]), SingleLineQuestionData("К окружающим Вас людям Вы относитесь с позиции:", ["Среди людей нет места глупости, она Вас раздражает", "Каждый человек имеет право на свое мнение, даже если оно ошибочно", "Человеку свойственно ошибаться", "Если человек мне не интересен, я не желаю с ним общаться", "Если человек мне не понятен – он опасен"]), SingleLineQuestionData("Общение с коллегами:", ["Очень помогает Вам в работе", "Отвлекает Вас от работы", "Не имеет влияния на Вашу трудовую деятельность"]), SingleLineQuestionData("Стараетесь ли вы расширить ту область, в которой занимаетесь?", ["Да", "Нет", "Иногда"]), SingleLineQuestionData("Вы с удовольствием собираете материалы и новую информацию, касающуюся Вашей работы?", ["Да", "Нет", "Иногда"]), SingleLineQuestionData("Что Вы предпочитаете делать в свободное время?", ["Пассивный отдых перед телевизором", "Посещение театров, музеев, выставок", "Чтение научно-методической литературы", "Активный отдых", "Заниматься Вашим хобби"])];
// CONCATENATED MODULE: ./model/the-test-model.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function Response(content) {
  return {
    content: content
  };
}
function Question(content) {
  var choice;
  switch (content.kind) {
    case "singleLine":
      {
        choice = 'none';
        break;
      }
    case "multiLine":
      {
        choice = _objectSpread({}, content.responses.map(function (_) {
          return 'none';
        }));
        break;
      }
  }
  return {
    content: content,
    choice: choice
  };
}
function State(questionnaire) {
  var qMap = Object.fromEntries(questionnaire.map(function (q) {
    return [q.content.id, q];
  }));
  return {
    questionnaire: qMap,
    showIncompleteError: false
  };
}
var state = signals_core_module_u(State(QuestionnaireData.map(function (q) {
  return Question(q);
})));
function dispatch(event) {
  var newState;
  switch (event.kind) {
    case 'answer':
      {
        var currentState = state.value;
        var question = currentState.questionnaire[event.questionId];
        var newQuestion = _objectSpread(_objectSpread({}, question), {}, {
          choice: event.answerIndex
        });
        newState = _objectSpread(_objectSpread({}, currentState), {}, {
          questionnaire: _objectSpread(_objectSpread({}, currentState.questionnaire), {}, _defineProperty({}, question.content.id, newQuestion))
        });
        break;
      }
    case 'multiLineAnswer':
      {
        var _currentState = state.value;
        var _question = _currentState.questionnaire[event.questionId];
        var newChoice = _objectSpread(_objectSpread({}, _question.choice), {}, _defineProperty({}, event.qrIndex[0], event.qrIndex[1]));
        var _newQuestion = _objectSpread(_objectSpread({}, _question), {}, {
          choice: newChoice
        });
        newState = _objectSpread(_objectSpread({}, _currentState), {}, {
          questionnaire: _objectSpread(_objectSpread({}, _currentState.questionnaire), {}, _defineProperty({}, _question.content.id, _newQuestion))
        });
        break;
      }
    case 'finish':
      {
        var _currentState2 = state.value;
        console.log(_currentState2.questionnaire);
        if (Object.values(_currentState2.questionnaire).every(function (q) {
          return q.content.kind == 'singleLine' && q.choice != 'none' || q.content.kind == 'multiLine' && Object.values(q.choice).every(function (c) {
            return c != 'none';
          });
        })) newState = 'finished';else newState = _objectSpread(_objectSpread({}, _currentState2), {}, {
          showIncompleteError: true
        });
      }
  }
  state.value = newState;
}
// CONCATENATED MODULE: ./components/app.tsx


function ResponseView(response, isSelected, onClick) {
  var clazz = "pure-button" + (isSelected ? " pure-button-active pure-button-primary" : "");
  return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("button", {
    class: clazz,
    onClick: onClick
  }, response));
}
function MultiLineQuestionView(question) {
  var questions2 = question.content.questions.map(function (q, qix) {
    var options = question.content.responses.map(function (r, ix) {
      return ResponseView(r, question.choice[qix] == ix, function () {
        return dispatch({
          kind: 'multiLineAnswer',
          questionId: question.content.id,
          qrIndex: [qix, ix]
        });
      });
    });
    return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h4", null, q), Object(external_preact_["h"])("div", {
      class: "pure-button-group",
      role: "group"
    }, options));
  });
  return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, question.content.title), questions2);
}
function QuestionView(question) {
  switch (question.content.kind) {
    case "singleLine":
      {
        var responseViews = question.content.responses.map(function (r, ix) {
          return ResponseView(r, question.choice == ix, function () {
            return dispatch({
              kind: 'answer',
              questionId: question.content.id,
              answerIndex: ix
            });
          });
        });
        return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h2", null, question.content.title), Object(external_preact_["h"])("div", null, responseViews));
      }
    case "multiLine":
      {
        return MultiLineQuestionView(question);
      }
  }
}
var app_App = function App() {
  var currentState = state.value;
  if (currentState == 'finished') {
    return Object(external_preact_["h"])("h1", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435!");
  } else {
    var questionViews = Object.values(currentState.questionnaire).map(QuestionView);
    var errorView;
    return Object(external_preact_["h"])(external_preact_["Fragment"], null, Object(external_preact_["h"])("div", null, questionViews), Object(external_preact_["h"])("div", null, currentState.showIncompleteError && Object(external_preact_["h"])("h4", {
      class: "incomplete-error"
    }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0442\u0432\u0435\u0442\u044C\u0442\u0435 \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B."), Object(external_preact_["h"])("button", {
      class: "button-xlarge pure-button button-success button-finish",
      onClick: function onClick() {
        return dispatch({
          kind: 'finish'
        });
      }
    }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C")));
  }
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./style/pure.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./style/styles.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./index.ts



/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map