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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@better-scroll/core/dist/core.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@better-scroll/core/dist/core.esm.js ***!
  \***********************************************************/
/*! exports provided: default, Behavior, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Behavior", function() { return Behavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/*!
 * better-scroll / core
 * (c) 2016-2020 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
    return window.performance && window.performance.now && window.performance.timing
        ? window.performance.now() + window.performance.timing.navigationStart
        : +new Date();
}
function extend(target) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < rest.length; i++) {
        var source = rest[i];
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return target;
}
function isUndef(v) {
    return v === undefined || v === null;
}

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    if (!inBrowser) {
        return false;
    }
    var transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (var key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
})();
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function getElement(el) {
    return (typeof el === 'string'
        ? document.querySelector(el)
        : el);
}
function addEvent(el, type, fn, capture) {
    el.addEventListener(type, fn, {
        passive: false,
        capture: !!capture
    });
}
function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture
    });
}
function offset(el) {
    var left = 0;
    var top = 0;
    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}
var cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransition = inBrowser && transition in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
};
var eventTypeMap = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2
};
function getRect(el) {
    if (el instanceof window.SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
    }
    else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
        };
    }
}
function preventDefaultExceptionFn(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}
var tagExceptionFn = preventDefaultExceptionFn;
function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
}
function click(e, event) {
    if (event === void 0) { event = 'click'; }
    var eventSource;
    if (e.type === 'mouseup') {
        eventSource = e;
    }
    else if (e.type === 'touchend' || e.type === 'touchcancel') {
        eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
        posSrc.screenX = eventSource.screenX || 0;
        posSrc.screenY = eventSource.screenY || 0;
        posSrc.clientX = eventSource.clientX || 0;
        posSrc.clientY = eventSource.clientY || 0;
    }
    var ev;
    var bubbles = true;
    var cancelable = true;
    if (typeof MouseEvent !== 'undefined') {
        try {
            ev = new MouseEvent(event, extend({
                bubbles: bubbles,
                cancelable: cancelable
            }, posSrc));
        }
        catch (e) {
            createEvent();
        }
    }
    else {
        createEvent();
    }
    function createEvent() {
        ev = document.createEvent('Event');
        ev.initEvent(event, bubbles, cancelable);
        extend(ev, posSrc);
    }
    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
}
function dblclick(e) {
    click(e, 'dblclick');
}

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 100 / 60;
var windowCompat = inBrowser && window;
function noop() { }
var requestAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

var noop$1 = function (val) { };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop$1,
    set: noop$1
};
var getProperty = function (obj, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
        if (typeof obj !== 'object' || !obj)
            return;
    }
    var lastKey = keys.pop();
    if (typeof obj[lastKey] === 'function') {
        return function () {
            return obj[lastKey].apply(obj, arguments);
        };
    }
    else {
        return obj[lastKey];
    }
};
var setProperty = function (obj, key, value) {
    var keys = key.split('.');
    var temp;
    for (var i = 0; i < keys.length - 1; i++) {
        temp = keys[i];
        if (!obj[temp])
            obj[temp] = {};
        obj = obj[temp];
    }
    obj[keys.pop()] = value;
};
function propertiesProxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return getProperty(this, sourceKey);
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        setProperty(this, sourceKey, val);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

var EventEmitter = /** @class */ (function () {
    function EventEmitter(names) {
        this.events = {};
        this.eventTypes = {};
        this.registerType(names);
    }
    EventEmitter.prototype.on = function (type, fn, context) {
        if (context === void 0) { context = this; }
        this.hasType(type);
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push([fn, context]);
        return this;
    };
    EventEmitter.prototype.once = function (type, fn, context) {
        var _this = this;
        if (context === void 0) { context = this; }
        this.hasType(type);
        var magic = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(type, magic);
            fn.apply(context, args);
        };
        magic.fn = fn;
        this.on(type, magic);
        return this;
    };
    EventEmitter.prototype.off = function (type, fn) {
        if (!type && !fn) {
            this.events = {};
            return this;
        }
        if (type) {
            this.hasType(type);
            if (!fn) {
                this.events[type] = [];
                return this;
            }
            var events = this.events[type];
            if (!events) {
                return this;
            }
            var count = events.length;
            while (count--) {
                if (events[count][0] === fn ||
                    (events[count][0] && events[count][0].fn === fn)) {
                    events.splice(count, 1);
                }
            }
            return this;
        }
    };
    EventEmitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.hasType(type);
        var events = this.events[type];
        if (!events) {
            return;
        }
        var len = events.length;
        var eventsCopy = events.slice();
        var ret;
        for (var i = 0; i < len; i++) {
            var event_1 = eventsCopy[i];
            var fn = event_1[0], context = event_1[1];
            if (fn) {
                ret = fn.apply(context, args);
                if (ret === true) {
                    return ret;
                }
            }
        }
    };
    EventEmitter.prototype.registerType = function (names) {
        var _this = this;
        names.forEach(function (type) {
            _this.eventTypes[type] = type;
        });
    };
    EventEmitter.prototype.destroy = function () {
        this.events = {};
        this.eventTypes = {};
    };
    EventEmitter.prototype.hasType = function (type) {
        var types = this.eventTypes;
        var isType = types[type] === type;
        if (!isType) {
            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" +
                ("" + Object.keys(types).map(function (_) { return JSON.stringify(_); })) +
                "]");
        }
    };
    return EventEmitter;
}());
var EventRegister = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var Options = /** @class */ (function () {
    function Options() {
        this.startX = 0;
        this.startY = 0;
        this.scrollX = false;
        this.scrollY = true;
        this.freeScroll = false;
        this.directionLockThreshold = 5;
        this.eventPassthrough = "" /* None */;
        this.click = false;
        this.dblclick = false;
        this.tap = '';
        this.bounce = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.bounceTime = 800;
        this.momentum = true;
        this.momentumLimitTime = 300;
        this.momentumLimitDistance = 15;
        this.swipeTime = 2500;
        this.swipeBounceTime = 500;
        this.deceleration = 0.0015;
        this.flickLimitTime = 200;
        this.flickLimitDistance = 100;
        this.resizePolling = 60;
        this.probeType = 0 /* Default */;
        this.stopPropagation = false;
        this.preventDefault = true;
        this.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
        };
        this.tagException = {
            tagName: /^TEXTAREA$/
        };
        this.HWCompositing = true;
        this.useTransition = true;
        this.bindToWrapper = false;
        this.disableMouse = hasTouch;
        this.disableTouch = !hasTouch;
        this.autoBlur = true;
    }
    Options.prototype.merge = function (options) {
        if (!options)
            return this;
        for (var key in options) {
            this[key] = options[key];
        }
        return this;
    };
    Options.prototype.process = function () {
        this.translateZ =
            this.HWCompositing && hasPerspective ? ' translateZ(0)' : '';
        this.useTransition = this.useTransition && hasTransition;
        this.preventDefault = !this.eventPassthrough && this.preventDefault;
        this.resolveBounce();
        // If you want eventPassthrough I have to lock one of the axes
        this.scrollX =
            this.eventPassthrough === "horizontal" /* Horizontal */
                ? false
                : this.scrollX;
        this.scrollY =
            this.eventPassthrough === "vertical" /* Vertical */ ? false : this.scrollY;
        // With eventPassthrough we also need lockDirection mechanism
        this.freeScroll = this.freeScroll && !this.eventPassthrough;
        // force true when freeScroll is true
        this.scrollX = this.freeScroll ? true : this.scrollX;
        this.scrollY = this.freeScroll ? true : this.scrollY;
        this.directionLockThreshold = this.eventPassthrough
            ? 0
            : this.directionLockThreshold;
        return this;
    };
    Options.prototype.resolveBounce = function () {
        var directions = ['top', 'right', 'bottom', 'left'];
        var bounce = this.bounce;
        if (bounce === false || bounce === true) {
            this.bounce = makeMap(directions, bounce);
        }
    };
    return Options;
}());
function makeMap(keys, val) {
    if (val === void 0) { val = true; }
    var ret = {};
    keys.forEach(function (key) {
        ret[key] = val;
    });
    return ret;
}

var ActionsHandler = /** @class */ (function () {
    function ActionsHandler(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeStart',
            'start',
            'move',
            'end',
            'click'
        ]);
        this.handleDOMEvents();
    }
    ActionsHandler.prototype.handleDOMEvents = function () {
        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
        var wrapper = this.wrapper;
        var target = bindToWrapper ? wrapper : window;
        var wrapperEvents = [];
        var targetEvents = [];
        var shouldRegisterTouch = hasTouch && !disableTouch;
        var shouldRegisterMouse = !disableMouse;
        if (click) {
            wrapperEvents.push({
                name: 'click',
                handler: this.click.bind(this),
                capture: true
            });
        }
        if (shouldRegisterTouch) {
            wrapperEvents.push({
                name: 'touchstart',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'touchmove',
                handler: this.move.bind(this)
            }, {
                name: 'touchend',
                handler: this.end.bind(this)
            }, {
                name: 'touchcancel',
                handler: this.end.bind(this)
            });
        }
        if (shouldRegisterMouse) {
            wrapperEvents.push({
                name: 'mousedown',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'mousemove',
                handler: this.move.bind(this)
            }, {
                name: 'mouseup',
                handler: this.end.bind(this)
            });
        }
        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
        this.targetEventRegister = new EventRegister(target, targetEvents);
    };
    ActionsHandler.prototype.beforeHandler = function (e, type) {
        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        var preventDefaultConditions = {
            start: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            end: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            move: function () {
                return preventDefault;
            }
        };
        if (preventDefaultConditions[type]()) {
            e.preventDefault();
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    ActionsHandler.prototype.setInitiated = function (type) {
        if (type === void 0) { type = 0; }
        this.initiated = type;
    };
    ActionsHandler.prototype.start = function (e) {
        var _eventType = eventTypeMap[e.type];
        if (this.initiated && this.initiated !== _eventType) {
            return;
        }
        this.setInitiated(_eventType);
        // if textarea or other html tags in options.tagException is manipulated
        // do not make bs scroll
        if (tagExceptionFn(e.target, this.options.tagException)) {
            this.setInitiated();
            return;
        }
        // no mouse left button
        if (_eventType === 2 /* Mouse */ && e.button !== 0 /* Left */)
            return;
        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
            return;
        }
        this.beforeHandler(e, 'start');
        var point = (e.touches ? e.touches[0] : e);
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ActionsHandler.prototype.move = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.beforeHandler(e, 'move');
        var point = (e.touches ? e.touches[0] : e);
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        if (this.hooks.trigger(this.hooks.eventTypes.move, {
            deltaX: deltaX,
            deltaY: deltaY,
            e: e
        })) {
            return;
        }
        // auto end when out of wrapper
        var scrollLeft = document.documentElement.scrollLeft ||
            window.pageXOffset ||
            document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        var pX = this.pointX - scrollLeft;
        var pY = this.pointY - scrollTop;
        if (pX >
            document.documentElement.clientWidth -
                this.options.momentumLimitDistance ||
            pX < this.options.momentumLimitDistance ||
            pY < this.options.momentumLimitDistance ||
            pY >
                document.documentElement.clientHeight -
                    this.options.momentumLimitDistance) {
            this.end(e);
        }
    };
    ActionsHandler.prototype.end = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.setInitiated();
        this.beforeHandler(e, 'end');
        this.hooks.trigger(this.hooks.eventTypes.end, e);
    };
    ActionsHandler.prototype.click = function (e) {
        this.hooks.trigger(this.hooks.eventTypes.click, e);
    };
    ActionsHandler.prototype.destroy = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.hooks.destroy();
    };
    return ActionsHandler;
}());

var translaterMetaData = {
    x: ['translateX', 'px'],
    y: ['translateY', 'px']
};
var Translater = /** @class */ (function () {
    function Translater(content) {
        this.content = content;
        this.style = content.style;
        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
    }
    Translater.prototype.getComputedPosition = function () {
        var cssStyle = window.getComputedStyle(this.content, null);
        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]);
        var y = +(matrix[13] || matrix[5]);
        return {
            x: x,
            y: y
        };
    };
    Translater.prototype.translate = function (point) {
        var transformStyle = [];
        Object.keys(point).forEach(function (key) {
            if (!translaterMetaData[key]) {
                return;
            }
            var transformFnName = translaterMetaData[key][0];
            if (transformFnName) {
                var transformFnArgUnit = translaterMetaData[key][1];
                var transformFnArg = point[key];
                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
            }
        });
        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
        this.style[style.transform] = transformStyle.join(' ');
        this.hooks.trigger(this.hooks.eventTypes.translate, point);
    };
    Translater.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Translater;
}());

var Base = /** @class */ (function () {
    function Base(content, translater, options) {
        this.content = content;
        this.translater = translater;
        this.options = options;
        this.hooks = new EventEmitter([
            'move',
            'end',
            'beforeForceStop',
            'forceStop',
            'time',
            'timeFunction'
        ]);
        this.style = content.style;
    }
    Base.prototype.translate = function (endPoint) {
        this.translater.translate(endPoint);
    };
    Base.prototype.setPending = function (pending) {
        this.pending = pending;
    };
    Base.prototype.setForceStopped = function (forceStopped) {
        this.forceStopped = forceStopped;
    };
    Base.prototype.destroy = function () {
        this.hooks.destroy();
        cancelAnimationFrame(this.timer);
    };
    return Base;
}());

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.startProbe = function () {
        var _this = this;
        var probe = function () {
            var pos = _this.translater.getComputedPosition();
            _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
            // excute when transition ends
            if (!_this.pending) {
                _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
                return;
            }
            _this.timer = requestAnimationFrame(probe);
        };
        cancelAnimationFrame(this.timer);
        this.timer = requestAnimationFrame(probe);
    };
    Transition.prototype.transitionTime = function (time) {
        if (time === void 0) { time = 0; }
        this.style[style.transitionDuration] = time + 'ms';
        this.hooks.trigger(this.hooks.eventTypes.time, time);
    };
    Transition.prototype.transitionTimingFunction = function (easing) {
        this.style[style.transitionTimingFunction] = easing;
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
    };
    Transition.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        this.setPending(time > 0 && (startPoint.x !== endPoint.x || startPoint.y !== endPoint.y));
        this.transitionTimingFunction(easingFn);
        this.transitionTime(time);
        this.translate(endPoint);
        if (time && this.options.probeType === 3 /* Realtime */) {
            this.startProbe();
        }
        // if we change content's transformY in a tick
        // such as: 0 -> 50px -> 0
        // transitionend will not be triggered
        // so we forceupdate by reflow
        if (!time) {
            this._reflow = this.content.offsetHeight;
        }
        // no need to dispatch move and end when slient
        if (!time && !isSlient) {
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
        }
    };
    Transition.prototype.stop = function () {
        // still in transition
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
            this.transitionTime();
            this.translate({ x: x, y: y });
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, { x: x, y: y })) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
        }
    };
    return Transition;
}(Base));

var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        // time is 0
        if (!time) {
            this.translate(endPoint);
            // if we change content's transformY in a tick
            // such as: 0 -> 50px -> 0
            // transitionend will not be triggered
            // so we forceupdate by reflow
            this._reflow = this.content.offsetHeight;
            // no need to dispatch move and end when slient
            if (isSlient)
                return;
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
            return;
        }
        this.animate(startPoint, endPoint, time, easingFn);
    };
    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
        var _this = this;
        var startTime = getNow();
        var destTime = startTime + duration;
        var step = function () {
            var now = getNow();
            // js animation end
            if (now >= destTime) {
                _this.translate(endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                return;
            }
            now = (now - startTime) / duration;
            var easing = easingFn(now);
            var newPoint = {};
            Object.keys(endPoint).forEach(function (key) {
                var startValue = startPoint[key];
                var endValue = endPoint[key];
                newPoint[key] = (endValue - startValue) * easing + startValue;
            });
            _this.translate(newPoint);
            if (_this.pending) {
                _this.timer = requestAnimationFrame(step);
            }
            if (_this.options.probeType === 3 /* Realtime */) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
            }
        };
        this.setPending(true);
        cancelAnimationFrame(this.timer);
        step();
    };
    Animation.prototype.stop = function () {
        // still in requestFrameAnimation
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var pos = this.translater.getComputedPosition();
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, pos)) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
        }
    };
    return Animation;
}(Base));

function createAnimater(element, translater, options) {
    var useTransition = options.useTransition;
    var animaterOptions = {};
    Object.defineProperty(animaterOptions, 'probeType', {
        enumerable: true,
        configurable: false,
        get: function () {
            return options.probeType;
        }
    });
    if (useTransition) {
        return new Transition(element, translater, animaterOptions);
    }
    else {
        return new Animation(element, translater, animaterOptions);
    }
}

var Behavior = /** @class */ (function () {
    function Behavior(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter(['momentum', 'end']);
        this.content = this.wrapper.children[0];
        this.currentPos = 0;
        this.startPos = 0;
    }
    Behavior.prototype.start = function () {
        this.direction = 0 /* Default */;
        this.movingDirection = 0 /* Default */;
        this.dist = 0;
    };
    Behavior.prototype.move = function (delta) {
        delta = this.hasScroll ? delta : 0;
        this.movingDirection =
            delta > 0
                ? -1 /* Negative */
                : delta < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
        var newPos = this.currentPos + delta;
        // Slow down or stop if outside of the boundaries
        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
                (newPos < this.maxScrollPos && this.options.bounces[1])) {
                newPos = this.currentPos + delta / 3;
            }
            else {
                newPos =
                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
            }
        }
        return newPos;
    };
    Behavior.prototype.end = function (duration) {
        var momentumInfo = {
            duration: 0
        };
        var absDist = Math.abs(this.currentPos - this.startPos);
        // start momentum animation if needed
        if (this.options.momentum &&
            duration < this.options.momentumLimitTime &&
            absDist > this.options.momentumLimitDistance) {
            var wrapperSize = (this.direction === -1 /* Negative */ && this.options.bounces[0]) ||
                (this.direction === 1 /* Positive */ && this.options.bounces[1])
                ? this.wrapperSize
                : 0;
            momentumInfo = this.hasScroll
                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
                : { destination: this.currentPos, duration: 0 };
        }
        else {
            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
        }
        return momentumInfo;
    };
    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
        if (options === void 0) { options = this.options; }
        var distance = current - start;
        var speed = Math.abs(distance) / time;
        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
        var momentumData = {
            destination: current + (speed / deceleration) * (distance < 0 ? -1 : 1),
            duration: swipeTime,
            rate: 15
        };
        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
        if (momentumData.destination < lowerMargin) {
            momentumData.destination = wrapperSize
                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
                : lowerMargin;
            momentumData.duration = swipeBounceTime;
        }
        else if (momentumData.destination > upperMargin) {
            momentumData.destination = wrapperSize
                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
                : upperMargin;
            momentumData.duration = swipeBounceTime;
        }
        momentumData.destination = Math.round(momentumData.destination);
        return momentumData;
    };
    Behavior.prototype.updateDirection = function () {
        var absDist = Math.round(this.currentPos) - this.absStartPos;
        this.direction =
            absDist > 0
                ? -1 /* Negative */
                : absDist < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
    };
    Behavior.prototype.refresh = function () {
        var _a = this.options.rect, size = _a.size, position = _a.position;
        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
        var wrapperRect = getRect(this.wrapper);
        this.wrapperSize = wrapperRect[size];
        var contentRect = getRect(this.content);
        this.contentSize = contentRect[size];
        this.relativeOffset = contentRect[position];
        if (isWrapperStatic) {
            this.relativeOffset -= wrapperRect[position];
        }
        this.minScrollPos = 0;
        this.maxScrollPos = this.wrapperSize - this.contentSize;
        if (this.maxScrollPos < 0) {
            this.maxScrollPos -= this.relativeOffset;
            this.minScrollPos = -this.relativeOffset;
        }
        this.hasScroll =
            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
        if (!this.hasScroll) {
            this.maxScrollPos = this.minScrollPos;
            this.contentSize = this.wrapperSize;
        }
        this.direction = 0;
    };
    Behavior.prototype.updatePosition = function (pos) {
        this.currentPos = pos;
    };
    Behavior.prototype.getCurrentPos = function () {
        return Math.round(this.currentPos);
    };
    Behavior.prototype.checkInBoundary = function () {
        var position = this.adjustPosition(this.currentPos);
        var inBoundary = position === this.getCurrentPos();
        return {
            position: position,
            inBoundary: inBoundary
        };
    };
    // adjust position when out of boundary
    Behavior.prototype.adjustPosition = function (pos) {
        var roundPos = Math.round(pos);
        if (!this.hasScroll || roundPos > this.minScrollPos) {
            roundPos = this.minScrollPos;
        }
        else if (roundPos < this.maxScrollPos) {
            roundPos = this.maxScrollPos;
        }
        return roundPos;
    };
    Behavior.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
    };
    Behavior.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
    };
    Behavior.prototype.resetStartPos = function () {
        this.updateStartPos();
        this.updateAbsStartPos();
    };
    Behavior.prototype.getAbsDist = function (delta) {
        this.dist += delta;
        return Math.abs(this.dist);
    };
    Behavior.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Behavior;
}());

var _a, _b, _c, _d;
var PassthroughHandlers = (_a = {},
    _a["yes" /* Yes */] = function (e) {
        return true;
    },
    _a["no" /* No */] = function (e) {
        e.preventDefault();
        return false;
    },
    _a);
var DirectionMap = (_b = {},
    _b["horizontal" /* Horizontal */] = (_c = {},
        _c["yes" /* Yes */] = "horizontal" /* Horizontal */,
        _c["no" /* No */] = "vertical" /* Vertical */,
        _c),
    _b["vertical" /* Vertical */] = (_d = {},
        _d["yes" /* Yes */] = "vertical" /* Vertical */,
        _d["no" /* No */] = "horizontal" /* Horizontal */,
        _d),
    _b);
var DirectionLockAction = /** @class */ (function () {
    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
        this.directionLockThreshold = directionLockThreshold;
        this.freeScroll = freeScroll;
        this.eventPassthrough = eventPassthrough;
        this.reset();
    }
    DirectionLockAction.prototype.reset = function () {
        this.directionLocked = "" /* Default */;
    };
    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
        this.computeDirectionLock(absDistX, absDistY);
        return this.handleEventPassthrough(e);
    };
    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
        if (this.directionLocked === "horizontal" /* Horizontal */) {
            deltaY = 0;
        }
        else if (this.directionLocked === "vertical" /* Vertical */) {
            deltaX = 0;
        }
        return {
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
        // If you are scrolling in one direction, lock it
        if (this.directionLocked === "" /* Default */ && !this.freeScroll) {
            if (absDistX > absDistY + this.directionLockThreshold) {
                this.directionLocked = "horizontal" /* Horizontal */; // lock horizontally
            }
            else if (absDistY >= absDistX + this.directionLockThreshold) {
                this.directionLocked = "vertical" /* Vertical */; // lock vertically
            }
            else {
                this.directionLocked = "none" /* None */; // no lock
            }
        }
    };
    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
        var handleMap = DirectionMap[this.directionLocked];
        if (handleMap) {
            if (this.eventPassthrough === handleMap["yes" /* Yes */]) {
                return PassthroughHandlers["yes" /* Yes */](e);
            }
            else if (this.eventPassthrough === handleMap["no" /* No */]) {
                return PassthroughHandlers["no" /* No */](e);
            }
        }
        return false;
    };
    return DirectionLockAction;
}());

var ScrollerActions = /** @class */ (function () {
    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
        this.hooks = new EventEmitter([
            'start',
            'beforeMove',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'end',
            'scrollEnd'
        ]);
        this.scrollBehaviorX = scrollBehaviorX;
        this.scrollBehaviorY = scrollBehaviorY;
        this.actionsHandler = actionsHandler;
        this.animater = animater;
        this.options = options;
        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
        this.enabled = true;
        this.bindActionsHandler();
    }
    ScrollerActions.prototype.bindActionsHandler = function () {
        var _this = this;
        // [mouse|touch]start event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleStart(e);
        });
        // [mouse|touch]move event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
            if (!_this.enabled)
                return true;
            return _this.handleMove(deltaX, deltaY, e);
        });
        // [mouse|touch]end event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleEnd(e);
        });
        // click
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            // handle native click event
            if (_this.enabled && !e._constructed) {
                _this.handleClick(e);
            }
        });
    };
    ScrollerActions.prototype.handleStart = function (e) {
        var timestamp = getNow();
        this.moved = false;
        this.startTime = timestamp;
        this.directionLockAction.reset();
        this.scrollBehaviorX.start();
        this.scrollBehaviorY.start();
        // force stopping last transition or animation
        this.animater.stop();
        this.scrollBehaviorX.resetStartPos();
        this.scrollBehaviorY.resetStartPos();
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
            return;
        }
        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
        var timestamp = getNow();
        // We need to move at least momentumLimitDistance pixels
        // for the scrolling to initiate
        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
            return true;
        }
        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
            this.actionsHandler.setInitiated();
            return true;
        }
        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
        var newX = this.scrollBehaviorX.move(delta.deltaX);
        var newY = this.scrollBehaviorY.move(delta.deltaY);
        if (!this.moved) {
            this.moved = true;
            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
        }
        this.animater.translate({
            x: newX,
            y: newY
        });
        this.dispatchScroll(timestamp);
    };
    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
        // dispatch scroll in interval time
        if (timestamp - this.startTime > this.options.momentumLimitTime) {
            // refresh time and starting position to initiate a momentum
            this.startTime = timestamp;
            this.scrollBehaviorX.updateStartPos();
            this.scrollBehaviorY.updateStartPos();
            if (this.options.probeType === 1 /* Throttle */) {
                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
            }
        }
        // dispatch scroll all the time
        if (this.options.probeType > 1 /* Throttle */) {
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
        }
    };
    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
        return (timestamp - this.endTime > this.options.momentumLimitTime &&
            absDistY < this.options.momentumLimitDistance &&
            absDistX < this.options.momentumLimitDistance);
    };
    ScrollerActions.prototype.handleEnd = function (e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
            return;
        }
        var currentPos = this.getCurrentPos();
        this.scrollBehaviorX.updateDirection();
        this.scrollBehaviorY.updateDirection();
        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
            return true;
        }
        this.animater.translate(currentPos);
        this.endTime = getNow();
        var duration = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
    };
    ScrollerActions.prototype.handleClick = function (e) {
        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    ScrollerActions.prototype.getCurrentPos = function () {
        return {
            x: this.scrollBehaviorX.getCurrentPos(),
            y: this.scrollBehaviorY.getCurrentPos()
        };
    };
    ScrollerActions.prototype.refresh = function () {
        this.endTime = 0;
    };
    ScrollerActions.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return ScrollerActions;
}());

function createActionsHandlerOptions(bsOptions) {
    var options = [
        'click',
        'bindToWrapper',
        'disableMouse',
        'disableTouch',
        'preventDefault',
        'stopPropagation',
        'tagException',
        'preventDefaultException'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    return options;
}
function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
    var options = [
        'momentum',
        'momentumLimitTime',
        'momentumLimitDistance',
        'deceleration',
        'swipeBounceTime',
        'swipeTime'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    // add extra property
    options.scrollable = bsOptions[extraProp];
    options.bounces = bounces;
    options.rect = rect;
    return options;
}

function bubbling(source, target, events) {
    events.forEach(function (event) {
        var sourceEvent;
        var targetEvent;
        if (typeof event === 'string') {
            sourceEvent = targetEvent = event;
        }
        else {
            sourceEvent = event.source;
            targetEvent = event.target;
        }
        source.on(sourceEvent, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return target.trigger.apply(target, [targetEvent].concat(args));
        });
    });
}

var Scroller = /** @class */ (function () {
    function Scroller(wrapper, options) {
        this.hooks = new EventEmitter([
            'beforeStart',
            'beforeMove',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'scrollEnd',
            'refresh',
            'touchEnd',
            'end',
            'flick',
            'scrollCancel',
            'momentum',
            'scrollTo',
            'ignoreDisMoveForSamePos',
            'scrollToElement',
            'resize'
        ]);
        this.wrapper = wrapper;
        this.content = wrapper.children[0];
        this.options = options;
        var _a = this
            .options.bounce, _b = _a.left, left = _b === void 0 ? true : _b, _c = _a.right, right = _c === void 0 ? true : _c, _d = _a.top, top = _d === void 0 ? true : _d, _e = _a.bottom, bottom = _e === void 0 ? true : _e;
        // direction X
        this.scrollBehaviorX = new Behavior(wrapper, createBehaviorOptions(options, 'scrollX', [left, right], {
            size: 'width',
            position: 'left'
        }));
        // direction Y
        this.scrollBehaviorY = new Behavior(wrapper, createBehaviorOptions(options, 'scrollY', [top, bottom], {
            size: 'height',
            position: 'top'
        }));
        this.translater = new Translater(this.content);
        this.animater = createAnimater(this.content, this.translater, this.options);
        this.actionsHandler = new ActionsHandler(wrapper, createActionsHandlerOptions(this.options));
        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
        var resizeHandler = this.resize.bind(this);
        this.resizeRegister = new EventRegister(window, [
            {
                name: 'orientationchange',
                handler: resizeHandler
            },
            {
                name: 'resize',
                handler: resizeHandler
            }
        ]);
        this.transitionEndRegister = new EventRegister(this.content, [
            {
                name: style.transitionEnd,
                handler: this.transitionEnd.bind(this)
            }
        ]);
        this.init();
    }
    Scroller.prototype.init = function () {
        var _this = this;
        this.bindTranslater();
        this.bindAnimater();
        this.bindActions();
        // enable pointer events when scrolling ends
        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            _this.togglePointerEvents(true);
        });
    };
    Scroller.prototype.bindTranslater = function () {
        var _this = this;
        var hooks = this.translater.hooks;
        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
            if (_this.options.translateZ) {
                transformStyle.push(_this.options.translateZ);
            }
        });
        // disable pointer events when scrolling
        hooks.on(hooks.eventTypes.translate, function (pos) {
            _this.updatePositions(pos);
            _this.togglePointerEvents(false);
        });
    };
    Scroller.prototype.bindAnimater = function () {
        var _this = this;
        // reset position
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
            if (!_this.resetPosition(_this.options.bounceTime)) {
                _this.animater.setPending(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
        });
        bubbling(this.animater.hooks, this.hooks, [
            {
                source: this.animater.hooks.eventTypes.move,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: this.animater.hooks.eventTypes.forceStop,
                target: this.hooks.eventTypes.scrollEnd
            }
        ]);
    };
    Scroller.prototype.bindActions = function () {
        var _this = this;
        var actions = this.actions;
        bubbling(actions.hooks, this.hooks, [
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeStart
            },
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeScrollStart // just for event api
            },
            {
                source: actions.hooks.eventTypes.beforeMove,
                target: this.hooks.eventTypes.beforeMove
            },
            {
                source: actions.hooks.eventTypes.scrollStart,
                target: this.hooks.eventTypes.scrollStart
            },
            {
                source: actions.hooks.eventTypes.scroll,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: actions.hooks.eventTypes.beforeEnd,
                target: this.hooks.eventTypes.beforeEnd
            }
        ]);
        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
                return true;
            }
            // check if it is a click operation
            if (!actions.moved && _this.checkClick(e)) {
                _this.animater.setForceStopped(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
                return true;
            }
            _this.animater.setForceStopped(false);
            // reset if we are outside of the boundaries
            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
                return true;
            }
        });
        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
            if (_this.checkFlick(duration, deltaX, deltaY)) {
                _this.hooks.trigger(_this.hooks.eventTypes.flick);
                return;
            }
            if (_this.momentum(pos, duration)) {
                return;
            }
            _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
        });
    };
    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
        // flick
        if (this.hooks.events.flick.length > 1 &&
            duration < this.options.flickLimitTime &&
            deltaX < this.options.flickLimitDistance &&
            deltaY < this.options.flickLimitDistance) {
            return true;
        }
    };
    Scroller.prototype.momentum = function (pos, duration) {
        var meta = {
            time: 0,
            easing: ease.swiper,
            newX: pos.x,
            newY: pos.y
        };
        // start momentum animation if needed
        var momentumX = this.scrollBehaviorX.end(duration);
        var momentumY = this.scrollBehaviorY.end(duration);
        meta.newX = isUndef(momentumX.destination)
            ? meta.newX
            : momentumX.destination;
        meta.newY = isUndef(momentumY.destination)
            ? meta.newY
            : momentumY.destination;
        meta.time = Math.max(momentumX.duration, momentumY.duration);
        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
        // when x or y changed, do momentum animation now!
        if (meta.newX !== pos.x || meta.newY !== pos.y) {
            // change easing function when scroller goes out of the boundaries
            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
                meta.newX < this.scrollBehaviorX.maxScrollPos ||
                meta.newY > this.scrollBehaviorY.minScrollPos ||
                meta.newY < this.scrollBehaviorY.maxScrollPos) {
                meta.easing = ease.swipeBounce;
            }
            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
            return true;
        }
    };
    Scroller.prototype.checkClick = function (e) {
        // when in the process of pulling down, it should not prevent click
        var cancelable = {
            preventClick: this.animater.forceStopped
        };
        // we scrolled less than momentumLimitDistance pixels
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
            return true;
        if (!cancelable.preventClick) {
            var _dblclick = this.options.dblclick;
            var dblclickTrigged = false;
            if (_dblclick && this.lastClickTime) {
                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
                if (getNow() - this.lastClickTime < delay) {
                    dblclickTrigged = true;
                    dblclick(e);
                }
            }
            if (this.options.tap) {
                tap(e, this.options.tap);
            }
            if (this.options.click &&
                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
                click(e);
            }
            this.lastClickTime = dblclickTrigged ? null : getNow();
            return true;
        }
        return false;
    };
    Scroller.prototype.resize = function () {
        var _this = this;
        if (!this.actions.enabled) {
            return;
        }
        // fix a scroll problem under Android condition
        if (isAndroid) {
            this.wrapper.scrollTop = 0;
        }
        if (!this.hooks.trigger(this.hooks.eventTypes.resize)) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = window.setTimeout(function () {
                _this.refresh();
            }, this.options.resizePolling);
        }
    };
    Scroller.prototype.transitionEnd = function (e) {
        if (e.target !== this.content || !this.animater.pending) {
            return;
        }
        var animater = this.animater;
        animater.transitionTime();
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
            this.animater.setPending(false);
            if (this.options.probeType !== 3 /* Realtime */) {
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
            }
        }
    };
    Scroller.prototype.togglePointerEvents = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        var el = this.content.children.length
            ? this.content.children
            : [this.content];
        var pointerEvents = enabled ? 'auto' : 'none';
        for (var i = 0; i < el.length; i++) {
            var node = el[i];
            // ignore BetterScroll instance's wrapper DOM
            if (node.isBScrollContainer) {
                continue;
            }
            node.style.pointerEvents = pointerEvents;
        }
    };
    Scroller.prototype.refresh = function () {
        this.scrollBehaviorX.refresh();
        this.scrollBehaviorY.refresh();
        this.actions.refresh();
        this.wrapperOffset = offset(this.wrapper);
    };
    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
        if (time === void 0) { time = 0; }
        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
        easing = !easing ? ease.bounce : easing;
        deltaX += x;
        deltaY += y;
        this.scrollTo(deltaX, deltaY, time, easing);
    };
    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform, isSilent) {
        if (time === void 0) { time = 0; }
        if (extraTransform === void 0) { extraTransform = {
            start: {},
            end: {}
        }; }
        easing = !easing ? ease.bounce : easing;
        var easingFn = this.options.useTransition ? easing.style : easing.fn;
        var currentPos = this.getCurrentPos();
        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
        var endPoint = __assign({ x: x,
            y: y }, extraTransform.end);
        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
        if (!this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos)) {
            // it is an useless move
            if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
                return;
            }
        }
        this.animater.move(startPoint, endPoint, time, easingFn, isSilent);
    };
    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
        var targetEle = getElement(el);
        var pos = offset(targetEle);
        var getOffset = function (offset, size, wrapperSize) {
            if (typeof offset === 'number') {
                return offset;
            }
            // if offsetX/Y are true we center the element to the screen
            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
        };
        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
            pos -= wrapperPos;
            pos = scrollBehavior.adjustPosition(pos - offset);
            return pos;
        };
        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
            return;
        }
        this.scrollTo(pos.left, pos.top, time, easing);
    };
    Scroller.prototype.resetPosition = function (time, easing) {
        if (time === void 0) { time = 0; }
        easing = !easing ? ease.bounce : easing;
        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
        if (xInBoundary && yInBoundary) {
            return false;
        }
        // out of boundary
        this.scrollTo(x, y, time, easing);
        return true;
    };
    Scroller.prototype.updatePositions = function (pos) {
        this.scrollBehaviorX.updatePosition(pos.x);
        this.scrollBehaviorY.updatePosition(pos.y);
    };
    Scroller.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
    };
    Scroller.prototype.enable = function () {
        this.actions.enabled = true;
    };
    Scroller.prototype.disable = function () {
        cancelAnimationFrame(this.animater.timer);
        this.actions.enabled = false;
    };
    Scroller.prototype.destroy = function () {
        var _this = this;
        var keys = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY'
        ];
        keys.forEach(function (key) { return _this[key].destroy(); });
    };
    return Scroller;
}());

var propertiesConfig = [
    {
        sourceKey: 'scroller.scrollBehaviorX.currentPos',
        key: 'x'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.currentPos',
        key: 'y'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
        key: 'hasHorizontalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
        key: 'hasVerticalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.contentSize',
        key: 'scrollerWidth'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.contentSize',
        key: 'scrollerHeight'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
        key: 'maxScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
        key: 'maxScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
        key: 'minScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
        key: 'minScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
        key: 'movingDirectionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
        key: 'movingDirectionY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.direction',
        key: 'directionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.direction',
        key: 'directionY'
    },
    {
        sourceKey: 'scroller.actions.enabled',
        key: 'enabled'
    },
    {
        sourceKey: 'scroller.animater.pending',
        key: 'pending'
    },
    {
        sourceKey: 'scroller.animater.stop',
        key: 'stop'
    },
    {
        sourceKey: 'scroller.scrollTo',
        key: 'scrollTo'
    },
    {
        sourceKey: 'scroller.scrollBy',
        key: 'scrollBy'
    },
    {
        sourceKey: 'scroller.scrollToElement',
        key: 'scrollToElement'
    },
    {
        sourceKey: 'scroller.resetPosition',
        key: 'resetPosition'
    }
];

var BScroll = /** @class */ (function (_super) {
    __extends(BScroll, _super);
    function BScroll(el, options) {
        var _this = _super.call(this, [
            'refresh',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy'
        ]) || this;
        var wrapper = getElement(el);
        if (!wrapper) {
            warn('Can not resolve the wrapper DOM.');
            return _this;
        }
        var content = wrapper.children[0];
        if (!content) {
            warn('The wrapper need at least one child element to be scroller.');
            return _this;
        }
        _this.plugins = {};
        _this.options = new Options().merge(options).process();
        _this.hooks = new EventEmitter([
            'init',
            'refresh',
            'enable',
            'disable',
            'destroy'
        ]);
        _this.init(wrapper);
        return _this;
    }
    BScroll.use = function (ctor) {
        var name = ctor.pluginName;
        var installed = this.plugins.some(function (plugin) { return ctor === plugin.ctor; });
        if (installed)
            return this;
        if (isUndef(name)) {
            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
            return this;
        }
        if (this.pluginsMap[name]) {
            warn("This plugin has been registered, maybe you need change plugin's name");
            return this;
        }
        this.pluginsMap[name] = true;
        this.plugins.push({
            name: name,
            applyOrder: ctor.applyOrder,
            ctor: ctor
        });
        return this;
    };
    BScroll.prototype.init = function (wrapper) {
        this.wrapper = wrapper;
        wrapper.isBScrollContainer = true;
        this.scroller = new Scroller(wrapper, this.options);
        this.eventBubbling();
        this.handleAutoBlur();
        this.innerRefresh();
        this.scroller.scrollTo(this.options.startX, this.options.startY);
        this.enable();
        this.proxy(propertiesConfig);
        this.applyPlugins();
    };
    BScroll.prototype.applyPlugins = function () {
        var _this = this;
        var options = this.options;
        this.constructor.plugins
            .sort(function (a, b) {
            var _a;
            var applyOrderMap = (_a = {},
                _a["pre" /* Pre */] = -1,
                _a["post" /* Post */] = 1,
                _a);
            var aOrder = a.applyOrder ? applyOrderMap[a.applyOrder] : 0;
            var bOrder = b.applyOrder ? applyOrderMap[b.applyOrder] : 0;
            return aOrder - bOrder;
        })
            .forEach(function (item) {
            var ctor = item.ctor;
            if (options[item.name] && typeof ctor === 'function') {
                _this.plugins[item.name] = new ctor(_this);
            }
        });
    };
    BScroll.prototype.handleAutoBlur = function () {
        if (this.options.autoBlur) {
            this.on(this.eventTypes.beforeScrollStart, function () {
                var activeElement = document.activeElement;
                if (activeElement &&
                    (activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            });
        }
    };
    BScroll.prototype.eventBubbling = function () {
        bubbling(this.scroller.hooks, this, [
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick'
        ]);
    };
    BScroll.prototype.innerRefresh = function () {
        this.scroller.refresh();
        this.hooks.trigger(this.hooks.eventTypes.refresh);
        this.trigger(this.eventTypes.refresh);
    };
    BScroll.prototype.proxy = function (propertiesConfig) {
        var _this = this;
        propertiesConfig.forEach(function (_a) {
            var key = _a.key, sourceKey = _a.sourceKey;
            propertiesProxy(_this, sourceKey, key);
        });
    };
    BScroll.prototype.refresh = function () {
        this.innerRefresh();
        this.scroller.resetPosition();
    };
    BScroll.prototype.enable = function () {
        this.scroller.enable();
        this.hooks.trigger(this.hooks.eventTypes.enable);
        this.trigger(this.eventTypes.enable);
    };
    BScroll.prototype.disable = function () {
        this.scroller.disable();
        this.hooks.trigger(this.hooks.eventTypes.disable);
        this.trigger(this.eventTypes.disable);
    };
    BScroll.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy);
        this.trigger(this.eventTypes.destroy);
        this.scroller.destroy();
    };
    BScroll.prototype.eventRegister = function (names) {
        this.registerType(names);
    };
    BScroll.plugins = [];
    BScroll.pluginsMap = {};
    return BScroll;
}(EventEmitter));

/* harmony default export */ __webpack_exports__["default"] = (BScroll);



/***/ }),

/***/ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-down
 * (c) 2016-2020 ustbhuangyi
 * Released under the MIT License.
 */
// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    if (!inBrowser) {
        return false;
    }
    var transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (var key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
})();
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
var cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
};

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 100 / 60;
var windowCompat = inBrowser && window;
function noop() { }
var requestAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

var sourcePrefix = 'plugins.pullDownRefresh';
var propertiesMap = [
    {
        key: 'finishPullDown',
        name: 'finish'
    },
    {
        key: 'openPullDown',
        name: 'open'
    },
    {
        key: 'closePullDown',
        name: 'close'
    },
    {
        key: 'autoPullDownRefresh',
        name: 'autoPull'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullDown = /** @class */ (function () {
    function PullDown(scroll) {
        this.scroll = scroll;
        this.pulling = false;
        if (scroll.options.pullDownRefresh) {
            this._watch();
        }
        this.scroll.registerType(['pullingDown']);
        this.scroll.proxy(propertiesProxyConfig);
    }
    PullDown.prototype._watch = function () {
        // 需要设置 probe = 3 吗？
        // must watch scroll in real time
        this.scroll.options.probeType = 3 /* Realtime */;
        this.scroll.scroller.hooks.on('end', this._checkPullDown, this);
    };
    PullDown.prototype._checkPullDown = function () {
        if (!this.scroll.options.pullDownRefresh) {
            return;
        }
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        // check if a real pull down action
        if (this.scroll.directionY !== -1 /* Negative */ ||
            this.scroll.y < threshold) {
            return false;
        }
        if (!this.pulling) {
            this.pulling = true;
            this.scroll.trigger('pullingDown');
            this.originalMinScrollY = this.scroll.minScrollY;
            this.scroll.minScrollY = stop;
        }
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
        return this.pulling;
    };
    PullDown.prototype.finish = function () {
        this.pulling = false;
        this.scroll.minScrollY = this.originalMinScrollY;
        this.scroll.resetPosition(this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.scroll.options.pullDownRefresh = config;
        this._watch();
    };
    PullDown.prototype.close = function () {
        this.scroll.options.pullDownRefresh = false;
    };
    PullDown.prototype.autoPull = function () {
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        if (this.pulling) {
            return;
        }
        this.pulling = true;
        this.originalMinScrollY = this.scroll.minScrollY;
        this.scroll.minScrollY = threshold;
        this.scroll.scrollTo(this.scroll.x, threshold);
        this.scroll.trigger('pullingDown');
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.pluginName = 'pullDownRefresh';
    return PullDown;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullDown);


/***/ }),

/***/ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-up
 * (c) 2016-2020 ustbhuangyi
 * Released under the MIT License.
 */
var sourcePrefix = 'plugins.pullUpLoad';
var propertiesMap = [
    {
        key: 'finishPullUp',
        name: 'finish'
    },
    {
        key: 'openPullUp',
        name: 'open'
    },
    {
        key: 'closePullUp',
        name: 'close'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullUp = /** @class */ (function () {
    function PullUp(bscroll) {
        this.bscroll = bscroll;
        this.watching = false;
        if (bscroll.options.pullUpLoad) {
            this._watch();
        }
        this.bscroll.registerType(['pullingUp']);
        this.bscroll.proxy(propertiesProxyConfig);
    }
    PullUp.prototype._watch = function () {
        if (this.watching) {
            return;
        }
        // must watch scroll in real time
        this.bscroll.options.probeType = 3 /* Realtime */;
        this.watching = true;
        this.bscroll.on('scroll', this._checkToEnd, this);
    };
    PullUp.prototype._checkToEnd = function (pos) {
        var _this = this;
        if (!this.bscroll.options.pullUpLoad) {
            return;
        }
        var _a = this.bscroll.options
            .pullUpLoad.threshold, threshold = _a === void 0 ? 0 : _a;
        if (this.bscroll.movingDirectionY === 1 /* Positive */ &&
            pos.y <= this.bscroll.maxScrollY + threshold) {
            // reset pullupWatching status after scroll end to promise that trigger 'pullingUp' only once when pulling up
            this.bscroll.once('scrollEnd', function () {
                _this.watching = false;
            });
            this.bscroll.trigger('pullingUp');
            this.bscroll.off('scroll', this._checkToEnd);
        }
    };
    PullUp.prototype.finish = function () {
        if (this.watching) {
            this.bscroll.once('scrollEnd', this._watch, this);
        }
        else {
            this._watch();
        }
    };
    PullUp.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.bscroll.options.pullUpLoad = config;
        this._watch();
    };
    PullUp.prototype.close = function () {
        this.bscroll.options.pullUpLoad = false;
        if (!this.watching) {
            return;
        }
        this.watching = false;
        this.bscroll.off('scroll', this._checkToEnd);
    };
    PullUp.pluginName = 'pullUpLoad';
    return PullUp;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullUp);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router.js */ "./src/js/router/router.js");




var App = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    console.log('app...');
    this.init();
    this.initEvent();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "init",
    value: function init() {
      _router_router_js__WEBPACK_IMPORTED_MODULE_2__["default"].go('position');
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      // 找到所有的 li 绑定事件
      $("#nav li").on('click', function () {
        // 这里不能写成箭头函数
        $(this).addClass('active').siblings().removeClass('active');
        var url = $(this).attr('data-url');
        _router_router_js__WEBPACK_IMPORTED_MODULE_2__["default"].go(url);
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/js/controller/positionController.js":
/*!*************************************************!*\
  !*** ./src/js/controller/positionController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_position_position_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/position/position.html */ "./src/views/position/position.html");
/* harmony import */ var _views_position_position_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_position_position_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_position_position_item_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/position/position-item.html */ "./src/views/position/position-item.html");
/* harmony import */ var _views_position_position_item_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_position_position_item_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/http */ "./src/js/model/http.js");
/* harmony import */ var _better_scroll_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @better-scroll/core */ "./node_modules/@better-scroll/core/dist/core.esm.js");
/* harmony import */ var _better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @better-scroll/pull-down */ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js");
/* harmony import */ var _better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @better-scroll/pull-up */ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js");








 // 下拉插件

 // 上拉插件
// 注册插件

_better_scroll_core__WEBPACK_IMPORTED_MODULE_7__["default"].use(_better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_8__["default"]);
_better_scroll_core__WEBPACK_IMPORTED_MODULE_7__["default"].use(_better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_9__["default"]);

var PositionController = /*#__PURE__*/function () {
  function PositionController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PositionController);

    // 第几页
    this.pageNo = 1; // 每页的条数

    this.pageSize = 10; // 全部的列表数据

    this.datalist = [];
    this.isMore = true; // 是否有更多
  } // 请求数据


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PositionController, [{
    key: "getList",
    value: function () {
      var _getList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, result, html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $('#loading').show();
                url = "/api/positionlist?_page=".concat(this.pageNo, "&_limit=").concat(this.pageSize);
                _context.next = 4;
                return Object(_model_http__WEBPACK_IMPORTED_MODULE_6__["get"])(url);

              case 4:
                result = _context.sent;
                if (result.length < this.pageSize) this.isMore = false;
                this.datalist = this.datalist.concat(result);
                html = template.render(_views_position_position_item_html__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  datalist: this.datalist
                });
                $(".position-list").html(html);
                $('#loading').hide();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _getList.apply(this, arguments);
      }

      return getList;
    }() // 单一职责

  }, {
    key: "render",
    value: function () {
      var _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                $("main").html(_views_position_position_html__WEBPACK_IMPORTED_MODULE_4___default.a);
                _context4.next = 3;
                return this.getList();

              case 3:
                this.scroll = new _better_scroll_core__WEBPACK_IMPORTED_MODULE_7__["default"]('#position-wrapper', {
                  scrollY: true,
                  pullDownRefresh: {
                    threshold: 50,
                    // 下拉到什么位置刷新
                    stop: 0 // 回弹停留的距离

                  },
                  pullUpLoad: true // 是否上拉

                }); // 下拉刷新

                this.scroll.on('pullingDown', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this.pageNo = 1; // 下拉的时候把 页数设置为1

                          _this.datalist = [];
                          _context2.next = 4;
                          return _this.getList();

                        case 4:
                          _this.scroll.finishPullDown();

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))); // 监听实时滚动

                this.scroll.on('scroll', function () {
                  if (this.y > 10) {
                    $('.refersh').show();
                  } else {
                    $('.refersh').hide();
                  }
                }); // 上拉加载成功

                this.scroll.on('pullingUp', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!_this.isMore) {
                            $('.more').text('没有更多的数据啦..');
                            setTimeout(function () {
                              $('.more').hide();

                              _this.scroll.refresh();
                            }, 2000);
                          }

                          _this.pageNo++;
                          _context3.next = 4;
                          return _this.getList();

                        case 4:
                          _this.scroll.finishPullUp();

                          _this.scroll.refresh();

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return PositionController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PositionController());

/***/ }),

/***/ "./src/js/model/http.js":
/*!******************************!*\
  !*** ./src/js/model/http.js ***!
  \******************************/
/*! exports provided: get, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
// 数据访问层
var get = function get(url, data) {
  return new Promise(function (reslove, reject) {
    $.ajax({
      url: url,
      // url:url
      type: 'GET',
      data: data,
      success: function success(result) {
        reslove(result);
      },
      error: function error(err) {
        reject(err);
      }
    });
  });
};

var post = function post() {};



/***/ }),

/***/ "./src/js/router/router.js":
/*!*********************************!*\
  !*** ./src/js/router/router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_positionController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/positionController.js */ "./src/js/controller/positionController.js");




var Router = /*#__PURE__*/function () {
  function Router() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{
    key: "go",
    value: function go(path) {
      if (path === 'position') _controller_positionController_js__WEBPACK_IMPORTED_MODULE_2__["default"].render();
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Router());

/***/ }),

/***/ "./src/views/position/position-item.html":
/*!***********************************************!*\
  !*** ./src/views/position/position-item.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{each datalist}}<div class=\"item\">  <img src=\"http://www.lgstatic.com/{{$value[\'companyLogo\']}}\" alt=\"\">  <div class=\"desc\">    <h2>{{$value[\'companyName\']}}</h2>    <p class=\"pos\">      <span class=\"name\">        {{$value[\'positionName\']}}[{{$value[\'city\']}}]      </span>      <span class=\"salary\">        {{$value[\'salary\']}}      </span>    </p>    <p class=\"time\">      {{$value[\'createTime\']}}    </p>  </div></div>{{/each}}"

/***/ }),

/***/ "./src/views/position/position.html":
/*!******************************************!*\
  !*** ./src/views/position/position.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"position-wrapper\">  <div>    <div class=\"refersh\">下拉刷新</div>    <div class=\"custom\">      <span>10秒中定制职位</span>      <button>去登录</button>    </div>    <div class=\"position-list\">    </div>    <div class=\"more\">      加载更多    </div>  </div></div>"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL2NvcmUvZGlzdC9jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC1kb3duL2Rpc3QvcHVsbC1kb3duLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC11cC9kaXN0L3B1bGwtdXAuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9wb3NpdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Bvc2l0aW9uL3Bvc2l0aW9uLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb24uaHRtbCJdLCJuYW1lcyI6WyJBcHAiLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImluaXRFdmVudCIsIlJvdXRlciIsImdvIiwiJCIsIm9uIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwidXJsIiwiYXR0ciIsIkJTY3JvbGwiLCJ1c2UiLCJQdWxsRG93biIsIlB1bGx1cCIsIlBvc2l0aW9uQ29udHJvbGxlciIsInBhZ2VObyIsInBhZ2VTaXplIiwiZGF0YWxpc3QiLCJpc01vcmUiLCJzaG93IiwiZ2V0IiwicmVzdWx0IiwibGVuZ3RoIiwiY29uY2F0IiwiaHRtbCIsInRlbXBsYXRlIiwicmVuZGVyIiwiaXRlbVRwbCIsImhpZGUiLCJwb3NpdGlvblRwbCIsImdldExpc3QiLCJzY3JvbGwiLCJzY3JvbGxZIiwicHVsbERvd25SZWZyZXNoIiwidGhyZXNob2xkIiwic3RvcCIsInB1bGxVcExvYWQiLCJmaW5pc2hQdWxsRG93biIsInkiLCJ0ZXh0Iiwic2V0VGltZW91dCIsInJlZnJlc2giLCJmaW5pc2hQdWxsVXAiLCJkYXRhIiwiUHJvbWlzZSIsInJlc2xvdmUiLCJyZWplY3QiLCJhamF4IiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsImVyciIsInBvc3QiLCJwYXRoIiwicG9zaXRvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7Ozs7QUNBOUM7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUYsU0FBUztBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULENBQUM7O0FBRUQsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMEJBQTBCLEVBQUU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QztBQUNBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0JBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEMsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsRUFBRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHNFQUFPLEVBQUM7QUFDTTs7Ozs7Ozs7Ozs7OztBQ24vRDdCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGLFNBQVM7QUFDVCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNU14QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDeEZ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h0QkE7O0lBQ01BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7OzsyQkFFTTtBQUNMQywrREFBTSxDQUFDQyxFQUFQLENBQVUsVUFBVjtBQUNEOzs7Z0NBRVc7QUFDVjtBQUNBQyxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUFHO0FBQ3RDRCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLFFBQVIsQ0FBaUIsUUFBakIsRUFBMkJDLFFBQTNCLEdBQXNDQyxXQUF0QyxDQUFrRCxRQUFsRDtBQUNBLFlBQUlDLEdBQUcsR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsVUFBYixDQUFWO0FBQ0FSLGlFQUFNLENBQUNDLEVBQVAsQ0FBVU0sR0FBVjtBQUNELE9BSkQ7QUFLRDs7Ozs7O0FBS0gsSUFBSVosR0FBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7Q0FDaUQ7O0NBQ0o7QUFHN0M7O0FBQ0FjLDJEQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0VBQVo7QUFDQUYsMkRBQU8sQ0FBQ0MsR0FBUixDQUFZRSw4REFBWjs7SUFFTUMsa0I7QUFFSixnQ0FBYztBQUFBOztBQUNaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FKWSxDQUtaOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBZCxDQVJZLENBUVM7QUFDdEIsRyxDQUdEOzs7Ozs7Ozs7Ozs7QUFFRWYsaUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2dCLElBQWQ7QUFDSVgsbUIscUNBQWlDLEtBQUtPLE0scUJBQWlCLEtBQUtDLFE7O3VCQUM3Q0ksdURBQUcsQ0FBQ1osR0FBRCxDOzs7QUFBbEJhLHNCO0FBQ0osb0JBQUlBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixLQUFLTixRQUF6QixFQUFtQyxLQUFLRSxNQUFMLEdBQWMsS0FBZDtBQUNuQyxxQkFBS0QsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNNLE1BQWQsQ0FBcUJGLE1BQXJCLENBQWhCO0FBQ0lHLG9CLEdBQU9DLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMseUVBQWhCLEVBQXlCO0FBQUVWLDBCQUFRLEVBQUUsS0FBS0E7QUFBakIsaUJBQXpCLEM7QUFDWGQsaUJBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CcUIsSUFBcEIsQ0FBeUJBLElBQXpCO0FBQ0FyQixpQkFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjeUIsSUFBZDs7Ozs7Ozs7Ozs7Ozs7O1FBR0Y7Ozs7Ozs7Ozs7OztBQUVFekIsaUJBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFCLElBQVYsQ0FBZUssb0VBQWY7O3VCQUNNLEtBQUtDLE9BQUwsRTs7O0FBRU4scUJBQUtDLE1BQUwsR0FBYyxJQUFJckIsMkRBQUosQ0FBWSxtQkFBWixFQUFpQztBQUM3Q3NCLHlCQUFPLEVBQUUsSUFEb0M7QUFFN0NDLGlDQUFlLEVBQUU7QUFDZkMsNkJBQVMsRUFBRSxFQURJO0FBQ0M7QUFDaEJDLHdCQUFJLEVBQUUsQ0FGUyxDQUVOOztBQUZNLG1CQUY0QjtBQU03Q0MsNEJBQVUsRUFBRSxJQU5pQyxDQU0zQjs7QUFOMkIsaUJBQWpDLENBQWQsQyxDQVFBOztBQUNBLHFCQUFLTCxNQUFMLENBQVkzQixFQUFaLENBQWUsYUFBZixtTEFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QiwrQkFBSSxDQUFDVyxNQUFMLEdBQWMsQ0FBZCxDQUQ0QixDQUNWOztBQUNsQiwrQkFBSSxDQUFDRSxRQUFMLEdBQWdCLEVBQWhCO0FBRjRCO0FBQUEsaUNBR3RCLEtBQUksQ0FBQ2EsT0FBTCxFQUhzQjs7QUFBQTtBQUk1QiwrQkFBSSxDQUFDQyxNQUFMLENBQVlNLGNBQVo7O0FBSjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE5QixJLENBT0E7O0FBQ0EscUJBQUtOLE1BQUwsQ0FBWTNCLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVk7QUFDbkMsc0JBQUksS0FBS2tDLENBQUwsR0FBUyxFQUFiLEVBQWlCO0FBQ2ZuQyxxQkFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZ0IsSUFBZDtBQUNELG1CQUZELE1BRU87QUFDTGhCLHFCQUFDLENBQUMsVUFBRCxDQUFELENBQWN5QixJQUFkO0FBQ0Q7QUFDRixpQkFORCxFLENBUUE7O0FBQ0EscUJBQUtHLE1BQUwsQ0FBWTNCLEVBQVosQ0FBZSxXQUFmLG1MQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCLDhCQUFJLENBQUMsS0FBSSxDQUFDYyxNQUFWLEVBQWtCO0FBQ2hCZiw2QkFBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb0MsSUFBWCxDQUFnQixZQUFoQjtBQUNBQyxzQ0FBVSxDQUFDLFlBQU07QUFDZnJDLCtCQUFDLENBQUMsT0FBRCxDQUFELENBQVd5QixJQUFYOztBQUNBLG1DQUFJLENBQUNHLE1BQUwsQ0FBWVUsT0FBWjtBQUNELDZCQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQ7O0FBQ0QsK0JBQUksQ0FBQzFCLE1BQUw7QUFSMEI7QUFBQSxpQ0FTcEIsS0FBSSxDQUFDZSxPQUFMLEVBVG9COztBQUFBO0FBVTFCLCtCQUFJLENBQUNDLE1BQUwsQ0FBWVcsWUFBWjs7QUFDQSwrQkFBSSxDQUFDWCxNQUFMLENBQVlVLE9BQVo7O0FBWDBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JXLG1FQUFJM0Isa0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyRkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNTSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDWixHQUFELEVBQU1tQyxJQUFOLEVBQWU7QUFDekIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDM0MsS0FBQyxDQUFDNEMsSUFBRixDQUFPO0FBQ0x2QyxTQUFHLEVBQUhBLEdBREs7QUFDQztBQUNOd0MsVUFBSSxFQUFFLEtBRkQ7QUFHTEwsVUFBSSxFQUFKQSxJQUhLO0FBSUxNLGFBQU8sRUFBRSxpQkFBQzVCLE1BQUQsRUFBWTtBQUNuQndCLGVBQU8sQ0FBQ3hCLE1BQUQsQ0FBUDtBQUNELE9BTkk7QUFPTDZCLFdBQUssRUFBRSxlQUFDQyxHQUFELEVBQVM7QUFDZEwsY0FBTSxDQUFDSyxHQUFELENBQU47QUFDRDtBQVRJLEtBQVA7QUFXRCxHQVpNLENBQVA7QUFhRCxDQWREOztBQWdCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBRWxCLENBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0lBQ01uRCxNOzs7Ozs7O3VCQUNEb0QsSSxFQUFNO0FBQ1AsVUFBSUEsSUFBSSxLQUFLLFVBQWIsRUFBeUJDLHlFQUFPLENBQUM1QixNQUFSO0FBQzFCOzs7Ozs7QUFHWSxtRUFBSXpCLE1BQUosRUFBZixFOzs7Ozs7Ozs7OztBQ1BBLG9CQUFvQixlQUFlLDJEQUEyRCx5QkFBeUIsNENBQTRDLHlCQUF5QiwrREFBK0QsMEJBQTBCLEdBQUcsa0JBQWtCLHFEQUFxRCxvQkFBb0IsbURBQW1ELHdCQUF3Qix3QkFBd0IsT0FBTyxDOzs7Ozs7Ozs7OztBQ0E3ZCwwUiIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBjb3JlXG4gKiAoYykgMjAxNi0yMDIwIHVzdGJodWFuZ3lpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW0JTY3JvbGwgd2Fybl06IFwiICsgbXNnKTtcclxufVxuXG4vLyBzc3Igc3VwcG9ydFxyXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbnZhciB1YSA9IGluQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbnZhciBpc1dlQ2hhdERldlRvb2xzID0gdWEgJiYgL3dlY2hhdGRldnRvb2xzLy50ZXN0KHVhKTtcclxudmFyIGlzQW5kcm9pZCA9IHVhICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDA7XG5cbmZ1bmN0aW9uIGdldE5vdygpIHtcclxuICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyAmJiB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nXHJcbiAgICAgICAgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxyXG4gICAgICAgIDogK25ldyBEYXRlKCk7XHJcbn1cclxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xyXG4gICAgdmFyIHJlc3QgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN0W2ldO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVW5kZWYodikge1xyXG4gICAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsO1xyXG59XG5cbnZhciBlbGVtZW50U3R5bGUgPSAoaW5Ccm93c2VyICYmXHJcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSk7XHJcbnZhciB2ZW5kb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgdHJhbnNmb3JtTmFtZXMgPSB7XHJcbiAgICAgICAgd2Via2l0OiAnd2Via2l0VHJhbnNmb3JtJyxcclxuICAgICAgICBNb3o6ICdNb3pUcmFuc2Zvcm0nLFxyXG4gICAgICAgIE86ICdPVHJhbnNmb3JtJyxcclxuICAgICAgICBtczogJ21zVHJhbnNmb3JtJyxcclxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zZm9ybSdcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdHJhbnNmb3JtTmFtZXMpIHtcclxuICAgICAgICBpZiAoZWxlbWVudFN0eWxlW3RyYW5zZm9ybU5hbWVzW2tleV1dICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XHJcbiAgICBpZiAodmVuZG9yID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuICAgIGlmICh2ZW5kb3IgPT09ICdzdGFuZGFyZCcpIHtcclxuICAgICAgICBpZiAoc3R5bGUgPT09ICd0cmFuc2l0aW9uRW5kJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmVuZG9yICsgc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zdWJzdHIoMSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RWxlbWVudChlbCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICAgIDogZWwpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwge1xyXG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxyXG4gICAgICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB7XHJcbiAgICAgICAgY2FwdHVyZTogISFjYXB0dXJlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBvZmZzZXQoZWwpIHtcclxuICAgIHZhciBsZWZ0ID0gMDtcclxuICAgIHZhciB0b3AgPSAwO1xyXG4gICAgd2hpbGUgKGVsKSB7XHJcbiAgICAgICAgbGVmdCAtPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvcCAtPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgdG9wOiB0b3BcclxuICAgIH07XHJcbn1cclxudmFyIGNzc1ZlbmRvciA9IHZlbmRvciAmJiB2ZW5kb3IgIT09ICdzdGFuZGFyZCcgPyAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKSArICctJyA6ICcnO1xyXG52YXIgdHJhbnNmb3JtID0gcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xyXG52YXIgdHJhbnNpdGlvbiA9IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJyk7XHJcbnZhciBoYXNQZXJzcGVjdGl2ZSA9IGluQnJvd3NlciAmJiBwcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBlbGVtZW50U3R5bGU7XHJcbi8vIGZpeCBpc3N1ZSAjMzYxXHJcbnZhciBoYXNUb3VjaCA9IGluQnJvd3NlciAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IGlzV2VDaGF0RGV2VG9vbHMpO1xyXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiB0cmFuc2l0aW9uIGluIGVsZW1lbnRTdHlsZTtcclxudmFyIHN0eWxlID0ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRHVyYXRpb24nKSxcclxuICAgIHRyYW5zaXRpb25EZWxheTogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EZWxheScpLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBwcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJyksXHJcbiAgICB0cmFuc2l0aW9uRW5kOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkVuZCcpXHJcbn07XHJcbnZhciBldmVudFR5cGVNYXAgPSB7XHJcbiAgICB0b3VjaHN0YXJ0OiAxLFxyXG4gICAgdG91Y2htb3ZlOiAxLFxyXG4gICAgdG91Y2hlbmQ6IDEsXHJcbiAgICBtb3VzZWRvd246IDIsXHJcbiAgICBtb3VzZW1vdmU6IDIsXHJcbiAgICBtb3VzZXVwOiAyXHJcbn07XHJcbmZ1bmN0aW9uIGdldFJlY3QoZWwpIHtcclxuICAgIGlmIChlbCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXHJcbiAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogZWwub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBlbC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGVsLCBleGNlcHRpb25zKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIGV4Y2VwdGlvbnMpIHtcclxuICAgICAgICBpZiAoZXhjZXB0aW9uc1tpXS50ZXN0KGVsW2ldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxudmFyIHRhZ0V4Y2VwdGlvbkZuID0gcHJldmVudERlZmF1bHRFeGNlcHRpb25GbjtcclxuZnVuY3Rpb24gdGFwKGUsIGV2ZW50TmFtZSkge1xyXG4gICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICBldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcclxuICAgIGV2LnBhZ2VYID0gZS5wYWdlWDtcclxuICAgIGV2LnBhZ2VZID0gZS5wYWdlWTtcclxuICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGNsaWNrKGUsIGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQgPT09IHZvaWQgMCkgeyBldmVudCA9ICdjbGljayc7IH1cclxuICAgIHZhciBldmVudFNvdXJjZTtcclxuICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIGV2ZW50U291cmNlID0gZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcclxuICAgICAgICBldmVudFNvdXJjZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICB9XHJcbiAgICB2YXIgcG9zU3JjID0ge307XHJcbiAgICBpZiAoZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICBwb3NTcmMuc2NyZWVuWCA9IGV2ZW50U291cmNlLnNjcmVlblggfHwgMDtcclxuICAgICAgICBwb3NTcmMuc2NyZWVuWSA9IGV2ZW50U291cmNlLnNjcmVlblkgfHwgMDtcclxuICAgICAgICBwb3NTcmMuY2xpZW50WCA9IGV2ZW50U291cmNlLmNsaWVudFggfHwgMDtcclxuICAgICAgICBwb3NTcmMuY2xpZW50WSA9IGV2ZW50U291cmNlLmNsaWVudFkgfHwgMDtcclxuICAgIH1cclxuICAgIHZhciBldjtcclxuICAgIHZhciBidWJibGVzID0gdHJ1ZTtcclxuICAgIHZhciBjYW5jZWxhYmxlID0gdHJ1ZTtcclxuICAgIGlmICh0eXBlb2YgTW91c2VFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBldiA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LCBleHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgYnViYmxlczogYnViYmxlcyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGNhbmNlbGFibGVcclxuICAgICAgICAgICAgfSwgcG9zU3JjKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlRXZlbnQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgZXYuaW5pdEV2ZW50KGV2ZW50LCBidWJibGVzLCBjYW5jZWxhYmxlKTtcclxuICAgICAgICBleHRlbmQoZXYsIHBvc1NyYyk7XHJcbiAgICB9XHJcbiAgICAvLyBmb3J3YXJkZWRUb3VjaEV2ZW50IHNldCB0byB0cnVlIGluIGNhc2Ugb2YgdGhlIGNvbmZsaWN0IHdpdGggZmFzdGNsaWNrXHJcbiAgICBldi5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcclxuICAgIGV2Ll9jb25zdHJ1Y3RlZCA9IHRydWU7XHJcbiAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcclxufVxyXG5mdW5jdGlvbiBkYmxjbGljayhlKSB7XHJcbiAgICBjbGljayhlLCAnZGJsY2xpY2snKTtcclxufVxuXG52YXIgZWFzZSA9IHtcclxuICAgIC8vIGVhc2VPdXRRdWludFxyXG4gICAgc3dpcGU6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICsgLS10ICogdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJkXHJcbiAgICBzd2lwZUJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcnRcclxuICAgIGJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS10ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDAgLyA2MDtcclxudmFyIHdpbmRvd0NvbXBhdCA9IGluQnJvd3NlciAmJiB3aW5kb3c7XHJcbmZ1bmN0aW9uIG5vb3AoKSB7IH1cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG4gICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIChjYWxsYmFjay5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMKSAvIDIpOyAvLyBtYWtlIGludGVydmFsIGFzIHByZWNpc2UgYXMgcG9zc2libGUuXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XHJcbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH0pO1xyXG59KSgpO1xuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gKHZhbCkgeyB9O1xyXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogbm9vcCQxLFxyXG4gICAgc2V0OiBub29wJDFcclxufTtcclxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIG9iaiA9IG9ialtrZXlzW2ldXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgIW9iailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgaWYgKHR5cGVvZiBvYmpbbGFzdEtleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqW2xhc3RLZXldLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtsYXN0S2V5XTtcclxuICAgIH1cclxufTtcclxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgIHZhciB0ZW1wO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRlbXAgPSBrZXlzW2ldO1xyXG4gICAgICAgIGlmICghb2JqW3RlbXBdKVxyXG4gICAgICAgICAgICBvYmpbdGVtcF0gPSB7fTtcclxuICAgICAgICBvYmogPSBvYmpbdGVtcF07XHJcbiAgICB9XHJcbiAgICBvYmpba2V5cy5wb3AoKV0gPSB2YWx1ZTtcclxufTtcclxuZnVuY3Rpb24gcHJvcGVydGllc1Byb3h5KHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlcigpIHtcclxuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHkodGhpcywgc291cmNlS2V5KTtcclxuICAgIH07XHJcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIodmFsKSB7XHJcbiAgICAgICAgc2V0UHJvcGVydHkodGhpcywgc291cmNlS2V5LCB2YWwpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcclxufVxuXG52YXIgRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKG5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZShuYW1lcyk7XHJcbiAgICB9XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIGZuLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gdGhpczsgfVxyXG4gICAgICAgIHRoaXMuaGFzVHlwZSh0eXBlKTtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLnB1c2goW2ZuLCBjb250ZXh0XSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGZuLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB0aGlzOyB9XHJcbiAgICAgICAgdGhpcy5oYXNUeXBlKHR5cGUpO1xyXG4gICAgICAgIHZhciBtYWdpYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5vZmYodHlwZSwgbWFnaWMpO1xyXG4gICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1hZ2ljLmZuID0gZm47XHJcbiAgICAgICAgdGhpcy5vbih0eXBlLCBtYWdpYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuICAgICAgICBpZiAoIXR5cGUgJiYgIWZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1R5cGUodHlwZSk7XHJcbiAgICAgICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHNbdHlwZV07XHJcbiAgICAgICAgICAgIGlmICghZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY291bnQgPSBldmVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50c1tjb3VudF1bMF0gPT09IGZuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50c1tjb3VudF1bMF0gJiYgZXZlbnRzW2NvdW50XVswXS5mbiA9PT0gZm4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnNwbGljZShjb3VudCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc1R5cGUodHlwZSk7XHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xyXG4gICAgICAgIGlmICghZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbiA9IGV2ZW50cy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGV2ZW50c0NvcHkgPSBldmVudHMuc2xpY2UoKTtcclxuICAgICAgICB2YXIgcmV0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNDb3B5W2ldO1xyXG4gICAgICAgICAgICB2YXIgZm4gPSBldmVudF8xWzBdLCBjb250ZXh0ID0gZXZlbnRfMVsxXTtcclxuICAgICAgICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVnaXN0ZXJUeXBlID0gZnVuY3Rpb24gKG5hbWVzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmV2ZW50VHlwZXNbdHlwZV0gPSB0eXBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlcyA9IHt9O1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuaGFzVHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHR5cGVzID0gdGhpcy5ldmVudFR5cGVzO1xyXG4gICAgICAgIHZhciBpc1R5cGUgPSB0eXBlc1t0eXBlXSA9PT0gdHlwZTtcclxuICAgICAgICBpZiAoIWlzVHlwZSkge1xyXG4gICAgICAgICAgICB3YXJuKFwiRXZlbnRFbWl0dGVyIGhhcyB1c2VkIHVua25vd24gZXZlbnQgdHlwZTogXFxcIlwiICsgdHlwZSArIFwiXFxcIiwgc2hvdWxkIGJlIG9uZW9mIFtcIiArXHJcbiAgICAgICAgICAgICAgICAoXCJcIiArIE9iamVjdC5rZXlzKHR5cGVzKS5tYXAoZnVuY3Rpb24gKF8pIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KF8pOyB9KSkgK1xyXG4gICAgICAgICAgICAgICAgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xyXG59KCkpO1xyXG52YXIgRXZlbnRSZWdpc3RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50UmVnaXN0ZXIod3JhcHBlciwgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcclxuICAgICAgICB0aGlzLmFkZERPTUV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZURPTUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuYWRkRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKGFkZEV2ZW50KTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5yZW1vdmVET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVET01FdmVudHMocmVtb3ZlRXZlbnQpO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmhhbmRsZURPTUV2ZW50cyA9IGZ1bmN0aW9uIChldmVudE9wZXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLndyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnRPcGVyYXRpb24od3JhcHBlciwgZXZlbnQubmFtZSwgX3RoaXMsICEhZXZlbnQuY2FwdHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuc29tZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50Lm5hbWUgPT09IGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuaGFuZGxlcihlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXZlbnRSZWdpc3RlcjtcclxufSgpKTtcblxudmFyIE9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZyZWVTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSA1O1xyXG4gICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9IFwiXCIgLyogTm9uZSAqLztcclxuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYmxjbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGFwID0gJyc7XHJcbiAgICAgICAgdGhpcy5ib3VuY2UgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdHJ1ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0cnVlLFxyXG4gICAgICAgICAgICBsZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICByaWdodDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3VuY2VUaW1lID0gODAwO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW1MaW1pdFRpbWUgPSAzMDA7XHJcbiAgICAgICAgdGhpcy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgPSAxNTtcclxuICAgICAgICB0aGlzLnN3aXBlVGltZSA9IDI1MDA7XHJcbiAgICAgICAgdGhpcy5zd2lwZUJvdW5jZVRpbWUgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb24gPSAwLjAwMTU7XHJcbiAgICAgICAgdGhpcy5mbGlja0xpbWl0VGltZSA9IDIwMDtcclxuICAgICAgICB0aGlzLmZsaWNrTGltaXREaXN0YW5jZSA9IDEwMDtcclxuICAgICAgICB0aGlzLnJlc2l6ZVBvbGxpbmcgPSA2MDtcclxuICAgICAgICB0aGlzLnByb2JlVHlwZSA9IDAgLyogRGVmYXVsdCAqLztcclxuICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IC9eKElOUFVUfFRFWFRBUkVBfEJVVFRPTnxTRUxFQ1R8QVVESU8pJC9cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGFnRXhjZXB0aW9uID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAvXlRFWFRBUkVBJC9cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuSFdDb21wb3NpdGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJpbmRUb1dyYXBwZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVNb3VzZSA9IGhhc1RvdWNoO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVRvdWNoID0gIWhhc1RvdWNoO1xyXG4gICAgICAgIHRoaXMuYXV0b0JsdXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgT3B0aW9ucy5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPcHRpb25zLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWiA9XHJcbiAgICAgICAgICAgIHRoaXMuSFdDb21wb3NpdGluZyAmJiBoYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcclxuICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24gPSB0aGlzLnVzZVRyYW5zaXRpb24gJiYgaGFzVHJhbnNpdGlvbjtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gIXRoaXMuZXZlbnRQYXNzdGhyb3VnaCAmJiB0aGlzLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZUJvdW5jZSgpO1xyXG4gICAgICAgIC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID1cclxuICAgICAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBcImhvcml6b250YWxcIiAvKiBIb3Jpem9udGFsICovXHJcbiAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2Nyb2xsWDtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IFwidmVydGljYWxcIiAvKiBWZXJ0aWNhbCAqLyA/IGZhbHNlIDogdGhpcy5zY3JvbGxZO1xyXG4gICAgICAgIC8vIFdpdGggZXZlbnRQYXNzdGhyb3VnaCB3ZSBhbHNvIG5lZWQgbG9ja0RpcmVjdGlvbiBtZWNoYW5pc21cclxuICAgICAgICB0aGlzLmZyZWVTY3JvbGwgPSB0aGlzLmZyZWVTY3JvbGwgJiYgIXRoaXMuZXZlbnRQYXNzdGhyb3VnaDtcclxuICAgICAgICAvLyBmb3JjZSB0cnVlIHdoZW4gZnJlZVNjcm9sbCBpcyB0cnVlXHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gdGhpcy5mcmVlU2Nyb2xsID8gdHJ1ZSA6IHRoaXMuc2Nyb2xsWDtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLmZyZWVTY3JvbGwgPyB0cnVlIDogdGhpcy5zY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMuZXZlbnRQYXNzdGhyb3VnaFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT3B0aW9ucy5wcm90b3R5cGUucmVzb2x2ZUJvdW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICAgICAgdmFyIGJvdW5jZSA9IHRoaXMuYm91bmNlO1xyXG4gICAgICAgIGlmIChib3VuY2UgPT09IGZhbHNlIHx8IGJvdW5jZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jZSA9IG1ha2VNYXAoZGlyZWN0aW9ucywgYm91bmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9wdGlvbnM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIG1ha2VNYXAoa2V5cywgdmFsKSB7XHJcbiAgICBpZiAodmFsID09PSB2b2lkIDApIHsgdmFsID0gdHJ1ZTsgfVxyXG4gICAgdmFyIHJldCA9IHt9O1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXRba2V5XSA9IHZhbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxuXG52YXIgQWN0aW9uc0hhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY3Rpb25zSGFuZGxlcih3cmFwcGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2JlZm9yZVN0YXJ0JyxcclxuICAgICAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAgICAgJ21vdmUnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ2NsaWNrJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucywgYmluZFRvV3JhcHBlciA9IF9hLmJpbmRUb1dyYXBwZXIsIGRpc2FibGVNb3VzZSA9IF9hLmRpc2FibGVNb3VzZSwgZGlzYWJsZVRvdWNoID0gX2EuZGlzYWJsZVRvdWNoLCBjbGljayA9IF9hLmNsaWNrO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy53cmFwcGVyO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBiaW5kVG9XcmFwcGVyID8gd3JhcHBlciA6IHdpbmRvdztcclxuICAgICAgICB2YXIgd3JhcHBlckV2ZW50cyA9IFtdO1xyXG4gICAgICAgIHZhciB0YXJnZXRFdmVudHMgPSBbXTtcclxuICAgICAgICB2YXIgc2hvdWxkUmVnaXN0ZXJUb3VjaCA9IGhhc1RvdWNoICYmICFkaXNhYmxlVG91Y2g7XHJcbiAgICAgICAgdmFyIHNob3VsZFJlZ2lzdGVyTW91c2UgPSAhZGlzYWJsZU1vdXNlO1xyXG4gICAgICAgIGlmIChjbGljaykge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuY2xpY2suYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRSZWdpc3RlclRvdWNoKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2hzdGFydCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnN0YXJ0LmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaG1vdmUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5tb3ZlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRSZWdpc3Rlck1vdXNlKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlbW92ZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLm1vdmUuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyYXBwZXJFdmVudFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIod3JhcHBlciwgd3JhcHBlckV2ZW50cyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFdmVudFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIodGFyZ2V0LCB0YXJnZXRFdmVudHMpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5iZWZvcmVIYW5kbGVyID0gZnVuY3Rpb24gKGUsIHR5cGUpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMsIHByZXZlbnREZWZhdWx0ID0gX2EucHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvbiA9IF9hLnN0b3BQcm9wYWdhdGlvbiwgcHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBfYS5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjtcclxuICAgICAgICB2YXIgcHJldmVudERlZmF1bHRDb25kaXRpb25zID0ge1xyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2ZW50RGVmYXVsdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJldmVudERlZmF1bHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgcHJldmVudERlZmF1bHRFeGNlcHRpb24pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJldmVudERlZmF1bHRDb25kaXRpb25zW3R5cGVdKCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5zZXRJbml0aWF0ZWQgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IDA7IH1cclxuICAgICAgICB0aGlzLmluaXRpYXRlZCA9IHR5cGU7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgX2V2ZW50VHlwZSA9IGV2ZW50VHlwZU1hcFtlLnR5cGVdO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCAmJiB0aGlzLmluaXRpYXRlZCAhPT0gX2V2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhdGVkKF9ldmVudFR5cGUpO1xyXG4gICAgICAgIC8vIGlmIHRleHRhcmVhIG9yIG90aGVyIGh0bWwgdGFncyBpbiBvcHRpb25zLnRhZ0V4Y2VwdGlvbiBpcyBtYW5pcHVsYXRlZFxyXG4gICAgICAgIC8vIGRvIG5vdCBtYWtlIGJzIHNjcm9sbFxyXG4gICAgICAgIGlmICh0YWdFeGNlcHRpb25GbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnRhZ0V4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbml0aWF0ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBubyBtb3VzZSBsZWZ0IGJ1dHRvblxyXG4gICAgICAgIGlmIChfZXZlbnRUeXBlID09PSAyIC8qIE1vdXNlICovICYmIGUuYnV0dG9uICE9PSAwIC8qIExlZnQgKi8pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTdGFydCwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ3N0YXJ0Jyk7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gKGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIHRoaXMucG9pbnRYID0gcG9pbnQucGFnZVg7XHJcbiAgICAgICAgdGhpcy5wb2ludFkgPSBwb2ludC5wYWdlWTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBlKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZU1hcFtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmVmb3JlSGFuZGxlcihlLCAnbW92ZScpO1xyXG4gICAgICAgIHZhciBwb2ludCA9IChlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB2YXIgZGVsdGFYID0gcG9pbnQucGFnZVggLSB0aGlzLnBvaW50WDtcclxuICAgICAgICB2YXIgZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WTtcclxuICAgICAgICB0aGlzLnBvaW50WCA9IHBvaW50LnBhZ2VYO1xyXG4gICAgICAgIHRoaXMucG9pbnRZID0gcG9pbnQucGFnZVk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwge1xyXG4gICAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcclxuICAgICAgICAgICAgZGVsdGFZOiBkZWx0YVksXHJcbiAgICAgICAgICAgIGU6IGVcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGF1dG8gZW5kIHdoZW4gb3V0IG9mIHdyYXBwZXJcclxuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcclxuICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHZhciBwWCA9IHRoaXMucG9pbnRYIC0gc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgcFkgPSB0aGlzLnBvaW50WSAtIHNjcm9sbFRvcDtcclxuICAgICAgICBpZiAocFggPlxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSB8fFxyXG4gICAgICAgICAgICBwWCA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgcFkgPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIHBZID5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChldmVudFR5cGVNYXBbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEluaXRpYXRlZCgpO1xyXG4gICAgICAgIHRoaXMuYmVmb3JlSGFuZGxlcihlLCAnZW5kJyk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGUpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5jbGljaywgZSk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyRXZlbnRSZWdpc3Rlci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFdmVudFJlZ2lzdGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWN0aW9uc0hhbmRsZXI7XHJcbn0oKSk7XG5cbnZhciB0cmFuc2xhdGVyTWV0YURhdGEgPSB7XHJcbiAgICB4OiBbJ3RyYW5zbGF0ZVgnLCAncHgnXSxcclxuICAgIHk6IFsndHJhbnNsYXRlWScsICdweCddXHJcbn07XHJcbnZhciBUcmFuc2xhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlcihjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnN0eWxlID0gY29udGVudC5zdHlsZTtcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbJ2JlZm9yZVRyYW5zbGF0ZScsICd0cmFuc2xhdGUnXSk7XHJcbiAgICB9XHJcbiAgICBUcmFuc2xhdGVyLnByb3RvdHlwZS5nZXRDb21wdXRlZFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjc3NTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudCwgbnVsbCk7XHJcbiAgICAgICAgdmFyIG1hdHJpeCA9IGNzc1N0eWxlW3N0eWxlLnRyYW5zZm9ybV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xyXG4gICAgICAgIHZhciB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgdmFyIHRyYW5zZm9ybVN0eWxlID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXMocG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuTmFtZSA9IHRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldWzBdO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtRm5OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtRm5BcmdVbml0ID0gdHJhbnNsYXRlck1ldGFEYXRhW2tleV1bMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtRm5BcmcgPSBwb2ludFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUucHVzaCh0cmFuc2Zvcm1Gbk5hbWUgKyBcIihcIiArIHRyYW5zZm9ybUZuQXJnICsgdHJhbnNmb3JtRm5BcmdVbml0ICsgXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVUcmFuc2xhdGUsIHRyYW5zZm9ybVN0eWxlLCBwb2ludCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZVtzdHlsZS50cmFuc2Zvcm1dID0gdHJhbnNmb3JtU3R5bGUuam9pbignICcpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMudHJhbnNsYXRlLCBwb2ludCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNsYXRlcjtcclxufSgpKTtcblxudmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYXNlKGNvbnRlbnQsIHRyYW5zbGF0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlciA9IHRyYW5zbGF0ZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdtb3ZlJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVGb3JjZVN0b3AnLFxyXG4gICAgICAgICAgICAnZm9yY2VTdG9wJyxcclxuICAgICAgICAgICAgJ3RpbWUnLFxyXG4gICAgICAgICAgICAndGltZUZ1bmN0aW9uJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBjb250ZW50LnN0eWxlO1xyXG4gICAgfVxyXG4gICAgQmFzZS5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGVuZFBvaW50KSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVyLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuc2V0UGVuZGluZyA9IGZ1bmN0aW9uIChwZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gcGVuZGluZztcclxuICAgIH07XHJcbiAgICBCYXNlLnByb3RvdHlwZS5zZXRGb3JjZVN0b3BwZWQgPSBmdW5jdGlvbiAoZm9yY2VTdG9wcGVkKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVN0b3BwZWQgPSBmb3JjZVN0b3BwZWQ7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZTtcclxufSgpKTtcblxudmFyIFRyYW5zaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJhbnNpdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRyYW5zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RhcnRQcm9iZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwcm9iZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IF90aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgcG9zKTtcclxuICAgICAgICAgICAgLy8gZXhjdXRlIHdoZW4gdHJhbnNpdGlvbiBlbmRzXHJcbiAgICAgICAgICAgIGlmICghX3RoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9iZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHByb2JlKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uVGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9IHRpbWUgKyAnbXMnO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMudGltZSwgdGltZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKGVhc2luZykge1xyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXSA9IGVhc2luZztcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRpbWVGdW5jdGlvbiwgZWFzaW5nKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbiwgaXNTbGllbnQpIHtcclxuICAgICAgICB0aGlzLnNldFBlbmRpbmcodGltZSA+IDAgJiYgKHN0YXJ0UG9pbnQueCAhPT0gZW5kUG9pbnQueCB8fCBzdGFydFBvaW50LnkgIT09IGVuZFBvaW50LnkpKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlYXNpbmdGbik7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSh0aW1lKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgaWYgKHRpbWUgJiYgdGhpcy5vcHRpb25zLnByb2JlVHlwZSA9PT0gMyAvKiBSZWFsdGltZSAqLykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgd2UgY2hhbmdlIGNvbnRlbnQncyB0cmFuc2Zvcm1ZIGluIGEgdGlja1xyXG4gICAgICAgIC8vIHN1Y2ggYXM6IDAgLT4gNTBweCAtPiAwXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbmVuZCB3aWxsIG5vdCBiZSB0cmlnZ2VyZWRcclxuICAgICAgICAvLyBzbyB3ZSBmb3JjZXVwZGF0ZSBieSByZWZsb3dcclxuICAgICAgICBpZiAoIXRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVmbG93ID0gdGhpcy5jb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm8gbmVlZCB0byBkaXNwYXRjaCBtb3ZlIGFuZCBlbmQgd2hlbiBzbGllbnRcclxuICAgICAgICBpZiAoIXRpbWUgJiYgIWlzU2xpZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZW5kUG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0aWxsIGluIHRyYW5zaXRpb25cclxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvcmNlU3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRm9yY2VTdG9wLCB7IHg6IHgsIHk6IHkgfSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmZvcmNlU3RvcCwgeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNpdGlvbjtcclxufShCYXNlKSk7XG5cbnZhciBBbmltYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2xpZW50KSB7XHJcbiAgICAgICAgLy8gdGltZSBpcyAwXHJcbiAgICAgICAgaWYgKCF0aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgICAgICAgICAgLy8gaWYgd2UgY2hhbmdlIGNvbnRlbnQncyB0cmFuc2Zvcm1ZIGluIGEgdGlja1xyXG4gICAgICAgICAgICAvLyBzdWNoIGFzOiAwIC0+IDUwcHggLT4gMFxyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uZW5kIHdpbGwgbm90IGJlIHRyaWdnZXJlZFxyXG4gICAgICAgICAgICAvLyBzbyB3ZSBmb3JjZXVwZGF0ZSBieSByZWZsb3dcclxuICAgICAgICAgICAgdGhpcy5fcmVmbG93ID0gdGhpcy5jb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkaXNwYXRjaCBtb3ZlIGFuZCBlbmQgd2hlbiBzbGllbnRcclxuICAgICAgICAgICAgaWYgKGlzU2xpZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGUoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuKTtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIGR1cmF0aW9uLCBlYXNpbmdGbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IGdldE5vdygpO1xyXG4gICAgICAgIHZhciBkZXN0VGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgICAgIC8vIGpzIGFuaW1hdGlvbiBlbmRcclxuICAgICAgICAgICAgaWYgKG5vdyA+PSBkZXN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm93ID0gKG5vdyAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbjtcclxuICAgICAgICAgICAgdmFyIGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb2ludCA9IHt9O1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbmRQb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHN0YXJ0UG9pbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IGVuZFBvaW50W2tleV07XHJcbiAgICAgICAgICAgICAgICBuZXdQb2ludFtrZXldID0gKGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSkgKiBlYXNpbmcgKyBzdGFydFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMudHJhbnNsYXRlKG5ld1BvaW50KTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnByb2JlVHlwZSA9PT0gMyAvKiBSZWFsdGltZSAqLykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIG5ld1BvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQZW5kaW5nKHRydWUpO1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgIHN0ZXAoKTtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RpbGwgaW4gcmVxdWVzdEZyYW1lQW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMudHJhbnNsYXRlci5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yY2VTdG9wcGVkKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVGb3JjZVN0b3AsIHBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmZvcmNlU3RvcCwgcG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFuaW1hdGlvbjtcclxufShCYXNlKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGVyKGVsZW1lbnQsIHRyYW5zbGF0ZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciB1c2VUcmFuc2l0aW9uID0gb3B0aW9ucy51c2VUcmFuc2l0aW9uO1xyXG4gICAgdmFyIGFuaW1hdGVyT3B0aW9ucyA9IHt9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuaW1hdGVyT3B0aW9ucywgJ3Byb2JlVHlwZScsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnByb2JlVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh1c2VUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGVsZW1lbnQsIHRyYW5zbGF0ZXIsIGFuaW1hdGVyT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbihlbGVtZW50LCB0cmFuc2xhdGVyLCBhbmltYXRlck9wdGlvbnMpO1xyXG4gICAgfVxyXG59XG5cbnZhciBCZWhhdmlvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJlaGF2aW9yKHdyYXBwZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoWydtb21lbnR1bScsICdlbmQnXSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwIC8qIERlZmF1bHQgKi87XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdEaXJlY3Rpb24gPSAwIC8qIERlZmF1bHQgKi87XHJcbiAgICAgICAgdGhpcy5kaXN0ID0gMDtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhID0gdGhpcy5oYXNTY3JvbGwgPyBkZWx0YSA6IDA7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdEaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICBkZWx0YSA+IDBcclxuICAgICAgICAgICAgICAgID8gLTEgLyogTmVnYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIDogZGVsdGEgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAxIC8qIFBvc2l0aXZlICovXHJcbiAgICAgICAgICAgICAgICAgICAgOiAwIC8qIERlZmF1bHQgKi87XHJcbiAgICAgICAgdmFyIG5ld1BvcyA9IHRoaXMuY3VycmVudFBvcyArIGRlbHRhO1xyXG4gICAgICAgIC8vIFNsb3cgZG93biBvciBzdG9wIGlmIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICBpZiAobmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgfHwgbmV3UG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgaWYgKChuZXdQb3MgPiB0aGlzLm1pblNjcm9sbFBvcyAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1swXSkgfHxcclxuICAgICAgICAgICAgICAgIChuZXdQb3MgPCB0aGlzLm1heFNjcm9sbFBvcyAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1sxXSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IHRoaXMuY3VycmVudFBvcyArIGRlbHRhIC8gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1BvcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgPyB0aGlzLm1pblNjcm9sbFBvcyA6IHRoaXMubWF4U2Nyb2xsUG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBtb21lbnR1bUluZm8gPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgYWJzRGlzdCA9IE1hdGguYWJzKHRoaXMuY3VycmVudFBvcyAtIHRoaXMuc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHN0YXJ0IG1vbWVudHVtIGFuaW1hdGlvbiBpZiBuZWVkZWRcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vbWVudHVtICYmXHJcbiAgICAgICAgICAgIGR1cmF0aW9uIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXRUaW1lICYmXHJcbiAgICAgICAgICAgIGFic0Rpc3QgPiB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyU2l6ZSA9ICh0aGlzLmRpcmVjdGlvbiA9PT0gLTEgLyogTmVnYXRpdmUgKi8gJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMF0pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5kaXJlY3Rpb24gPT09IDEgLyogUG9zaXRpdmUgKi8gJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMV0pXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMud3JhcHBlclNpemVcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgbW9tZW50dW1JbmZvID0gdGhpcy5oYXNTY3JvbGxcclxuICAgICAgICAgICAgICAgID8gdGhpcy5tb21lbnR1bSh0aGlzLmN1cnJlbnRQb3MsIHRoaXMuc3RhcnRQb3MsIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFBvcywgdGhpcy5taW5TY3JvbGxQb3MsIHdyYXBwZXJTaXplLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICA6IHsgZGVzdGluYXRpb246IHRoaXMuY3VycmVudFBvcywgZHVyYXRpb246IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBtb21lbnR1bUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9tZW50dW1JbmZvO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGFydCwgdGltZSwgbG93ZXJNYXJnaW4sIHVwcGVyTWFyZ2luLCB3cmFwcGVyU2l6ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgfVxyXG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydDtcclxuICAgICAgICB2YXIgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lO1xyXG4gICAgICAgIHZhciBkZWNlbGVyYXRpb24gPSBvcHRpb25zLmRlY2VsZXJhdGlvbiwgc3dpcGVCb3VuY2VUaW1lID0gb3B0aW9ucy5zd2lwZUJvdW5jZVRpbWUsIHN3aXBlVGltZSA9IG9wdGlvbnMuc3dpcGVUaW1lO1xyXG4gICAgICAgIHZhciBtb21lbnR1bURhdGEgPSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjdXJyZW50ICsgKHNwZWVkIC8gZGVjZWxlcmF0aW9uKSAqIChkaXN0YW5jZSA8IDAgPyAtMSA6IDEpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogc3dpcGVUaW1lLFxyXG4gICAgICAgICAgICByYXRlOiAxNVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb21lbnR1bSwgbW9tZW50dW1EYXRhLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA8IGxvd2VyTWFyZ2luKSB7XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KGxvd2VyTWFyZ2luIC0gd3JhcHBlclNpemUgLyA0LCBsb3dlck1hcmdpbiAtICh3cmFwcGVyU2l6ZSAvIG1vbWVudHVtRGF0YS5yYXRlKSAqIHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgOiBsb3dlck1hcmdpbjtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmR1cmF0aW9uID0gc3dpcGVCb3VuY2VUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPiB1cHBlck1hcmdpbikge1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbih1cHBlck1hcmdpbiArIHdyYXBwZXJTaXplIC8gNCwgdXBwZXJNYXJnaW4gKyAod3JhcHBlclNpemUgLyBtb21lbnR1bURhdGEucmF0ZSkgKiBzcGVlZClcclxuICAgICAgICAgICAgICAgIDogdXBwZXJNYXJnaW47XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kdXJhdGlvbiA9IHN3aXBlQm91bmNlVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID0gTWF0aC5yb3VuZChtb21lbnR1bURhdGEuZGVzdGluYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBtb21lbnR1bURhdGE7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZURpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYWJzRGlzdCA9IE1hdGgucm91bmQodGhpcy5jdXJyZW50UG9zKSAtIHRoaXMuYWJzU3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICBhYnNEaXN0ID4gMFxyXG4gICAgICAgICAgICAgICAgPyAtMSAvKiBOZWdhdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgOiBhYnNEaXN0IDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gMSAvKiBQb3NpdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIDogMCAvKiBEZWZhdWx0ICovO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucy5yZWN0LCBzaXplID0gX2Euc2l6ZSwgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcclxuICAgICAgICB2YXIgaXNXcmFwcGVyU3RhdGljID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy53cmFwcGVyLCBudWxsKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYyc7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJSZWN0ID0gZ2V0UmVjdCh0aGlzLndyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNpemUgPSB3cmFwcGVyUmVjdFtzaXplXTtcclxuICAgICAgICB2YXIgY29udGVudFJlY3QgPSBnZXRSZWN0KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50U2l6ZSA9IGNvbnRlbnRSZWN0W3NpemVdO1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVPZmZzZXQgPSBjb250ZW50UmVjdFtwb3NpdGlvbl07XHJcbiAgICAgICAgaWYgKGlzV3JhcHBlclN0YXRpYykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlT2Zmc2V0IC09IHdyYXBwZXJSZWN0W3Bvc2l0aW9uXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW5TY3JvbGxQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4U2Nyb2xsUG9zID0gdGhpcy53cmFwcGVyU2l6ZSAtIHRoaXMuY29udGVudFNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4U2Nyb2xsUG9zIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyAtPSB0aGlzLnJlbGF0aXZlT2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNjcm9sbFBvcyA9IC10aGlzLnJlbGF0aXZlT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc1Njcm9sbCA9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlICYmIHRoaXMubWF4U2Nyb2xsUG9zIDwgdGhpcy5taW5TY3JvbGxQb3M7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyA9IHRoaXMubWluU2Nyb2xsUG9zO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTaXplID0gdGhpcy53cmFwcGVyU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSBwb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5jdXJyZW50UG9zKTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuY2hlY2tJbkJvdW5kYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuYWRqdXN0UG9zaXRpb24odGhpcy5jdXJyZW50UG9zKTtcclxuICAgICAgICB2YXIgaW5Cb3VuZGFyeSA9IHBvc2l0aW9uID09PSB0aGlzLmdldEN1cnJlbnRQb3MoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGluQm91bmRhcnk6IGluQm91bmRhcnlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8vIGFkanVzdCBwb3NpdGlvbiB3aGVuIG91dCBvZiBib3VuZGFyeVxyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmFkanVzdFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciByb3VuZFBvcyA9IE1hdGgucm91bmQocG9zKTtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsIHx8IHJvdW5kUG9zID4gdGhpcy5taW5TY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgcm91bmRQb3MgPSB0aGlzLm1pblNjcm9sbFBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm91bmRQb3MgPCB0aGlzLm1heFNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICByb3VuZFBvcyA9IHRoaXMubWF4U2Nyb2xsUG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91bmRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZVN0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLmN1cnJlbnRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZUFic1N0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWJzU3RhcnRQb3MgPSB0aGlzLmN1cnJlbnRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnJlc2V0U3RhcnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydFBvcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWJzU3RhcnRQb3MoKTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZ2V0QWJzRGlzdCA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZGlzdCArPSBkZWx0YTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0KTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmVoYXZpb3I7XHJcbn0oKSk7XG5cbnZhciBfYSwgX2IsIF9jLCBfZDtcclxudmFyIFBhc3N0aHJvdWdoSGFuZGxlcnMgPSAoX2EgPSB7fSxcclxuICAgIF9hW1wieWVzXCIgLyogWWVzICovXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgX2FbXCJub1wiIC8qIE5vICovXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBfYSk7XHJcbnZhciBEaXJlY3Rpb25NYXAgPSAoX2IgPSB7fSxcclxuICAgIF9iW1wiaG9yaXpvbnRhbFwiIC8qIEhvcml6b250YWwgKi9dID0gKF9jID0ge30sXHJcbiAgICAgICAgX2NbXCJ5ZXNcIiAvKiBZZXMgKi9dID0gXCJob3Jpem9udGFsXCIgLyogSG9yaXpvbnRhbCAqLyxcclxuICAgICAgICBfY1tcIm5vXCIgLyogTm8gKi9dID0gXCJ2ZXJ0aWNhbFwiIC8qIFZlcnRpY2FsICovLFxyXG4gICAgICAgIF9jKSxcclxuICAgIF9iW1widmVydGljYWxcIiAvKiBWZXJ0aWNhbCAqL10gPSAoX2QgPSB7fSxcclxuICAgICAgICBfZFtcInllc1wiIC8qIFllcyAqL10gPSBcInZlcnRpY2FsXCIgLyogVmVydGljYWwgKi8sXHJcbiAgICAgICAgX2RbXCJub1wiIC8qIE5vICovXSA9IFwiaG9yaXpvbnRhbFwiIC8qIEhvcml6b250YWwgKi8sXHJcbiAgICAgICAgX2QpLFxyXG4gICAgX2IpO1xyXG52YXIgRGlyZWN0aW9uTG9ja0FjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERpcmVjdGlvbkxvY2tBY3Rpb24oZGlyZWN0aW9uTG9ja1RocmVzaG9sZCwgZnJlZVNjcm9sbCwgZXZlbnRQYXNzdGhyb3VnaCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ7XHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gZnJlZVNjcm9sbDtcclxuICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPSBldmVudFBhc3N0aHJvdWdoO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gXCJcIiAvKiBEZWZhdWx0ICovO1xyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmNoZWNrTW92aW5nRGlyZWN0aW9uID0gZnVuY3Rpb24gKGFic0Rpc3RYLCBhYnNEaXN0WSwgZSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZURpcmVjdGlvbkxvY2soYWJzRGlzdFgsIGFic0Rpc3RZKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFdmVudFBhc3N0aHJvdWdoKGUpO1xyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmFkanVzdERlbHRhID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBcImhvcml6b250YWxcIiAvKiBIb3Jpem9udGFsICovKSB7XHJcbiAgICAgICAgICAgIGRlbHRhWSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBcInZlcnRpY2FsXCIgLyogVmVydGljYWwgKi8pIHtcclxuICAgICAgICAgICAgZGVsdGFYID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXHJcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5jb21wdXRlRGlyZWN0aW9uTG9jayA9IGZ1bmN0aW9uIChhYnNEaXN0WCwgYWJzRGlzdFkpIHtcclxuICAgICAgICAvLyBJZiB5b3UgYXJlIHNjcm9sbGluZyBpbiBvbmUgZGlyZWN0aW9uLCBsb2NrIGl0XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBcIlwiIC8qIERlZmF1bHQgKi8gJiYgIXRoaXMuZnJlZVNjcm9sbCkge1xyXG4gICAgICAgICAgICBpZiAoYWJzRGlzdFggPiBhYnNEaXN0WSArIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBcImhvcml6b250YWxcIiAvKiBIb3Jpem9udGFsICovOyAvLyBsb2NrIGhvcml6b250YWxseVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFic0Rpc3RZID49IGFic0Rpc3RYICsgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IFwidmVydGljYWxcIiAvKiBWZXJ0aWNhbCAqLzsgLy8gbG9jayB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IFwibm9uZVwiIC8qIE5vbmUgKi87IC8vIG5vIGxvY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5oYW5kbGVFdmVudFBhc3N0aHJvdWdoID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaGFuZGxlTWFwID0gRGlyZWN0aW9uTWFwW3RoaXMuZGlyZWN0aW9uTG9ja2VkXTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IGhhbmRsZU1hcFtcInllc1wiIC8qIFllcyAqL10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQYXNzdGhyb3VnaEhhbmRsZXJzW1wieWVzXCIgLyogWWVzICovXShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IGhhbmRsZU1hcFtcIm5vXCIgLyogTm8gKi9dKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFzc3Rocm91Z2hIYW5kbGVyc1tcIm5vXCIgLyogTm8gKi9dKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGlyZWN0aW9uTG9ja0FjdGlvbjtcclxufSgpKTtcblxudmFyIFNjcm9sbGVyQWN0aW9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjcm9sbGVyQWN0aW9ucyhzY3JvbGxCZWhhdmlvclgsIHNjcm9sbEJlaGF2aW9yWSwgYWN0aW9uc0hhbmRsZXIsIGFuaW1hdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICAgICAnYmVmb3JlTW92ZScsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnYmVmb3JlRW5kJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclggPSBzY3JvbGxCZWhhdmlvclg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkgPSBzY3JvbGxCZWhhdmlvclk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlciA9IGFjdGlvbnNIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIgPSBhbmltYXRlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbiA9IG5ldyBEaXJlY3Rpb25Mb2NrQWN0aW9uKG9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCwgb3B0aW9ucy5mcmVlU2Nyb2xsLCBvcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9uc0hhbmRsZXIoKTtcclxuICAgIH1cclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuYmluZEFjdGlvbnNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXXN0YXJ0IGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlU3RhcnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXW1vdmUgZXZlbnRcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWCA9IF9hLmRlbHRhWCwgZGVsdGFZID0gX2EuZGVsdGFZLCBlID0gX2EuZTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVNb3ZlKGRlbHRhWCwgZGVsdGFZLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBbbW91c2V8dG91Y2hdZW5kIGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUVuZChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLmNsaWNrLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgbmF0aXZlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2xpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZVN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGltZXN0YW1wID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbi5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkuc3RhcnQoKTtcclxuICAgICAgICAvLyBmb3JjZSBzdG9wcGluZyBsYXN0IHRyYW5zaXRpb24gb3IgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgucmVzZXRTdGFydFBvcygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnJlc2V0U3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBlKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoZGVsdGFYLCBkZWx0YVksIGUpIHtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVNb3ZlLCBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhYnNEaXN0WCA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmdldEFic0Rpc3QoZGVsdGFYKTtcclxuICAgICAgICB2YXIgYWJzRGlzdFkgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5nZXRBYnNEaXN0KGRlbHRhWSk7XHJcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldE5vdygpO1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbW92ZSBhdCBsZWFzdCBtb21lbnR1bUxpbWl0RGlzdGFuY2UgcGl4ZWxzXHJcbiAgICAgICAgLy8gZm9yIHRoZSBzY3JvbGxpbmcgdG8gaW5pdGlhdGVcclxuICAgICAgICBpZiAodGhpcy5jaGVja01vbWVudHVtKGFic0Rpc3RYLCBhYnNEaXN0WSwgdGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbi5jaGVja01vdmluZ0RpcmVjdGlvbihhYnNEaXN0WCwgYWJzRGlzdFksIGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuc2V0SW5pdGlhdGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24uYWRqdXN0RGVsdGEoZGVsdGFYLCBkZWx0YVkpO1xyXG4gICAgICAgIHZhciBuZXdYID0gdGhpcy5zY3JvbGxCZWhhdmlvclgubW92ZShkZWx0YS5kZWx0YVgpO1xyXG4gICAgICAgIHZhciBuZXdZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkubW92ZShkZWx0YS5kZWx0YVkpO1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIudHJhbnNsYXRlKHtcclxuICAgICAgICAgICAgeDogbmV3WCxcclxuICAgICAgICAgICAgeTogbmV3WVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTY3JvbGwodGltZXN0YW1wKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmRpc3BhdGNoU2Nyb2xsID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIC8vIGRpc3BhdGNoIHNjcm9sbCBpbiBpbnRlcnZhbCB0aW1lXHJcbiAgICAgICAgaWYgKHRpbWVzdGFtcCAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXRUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGltZSBhbmQgc3RhcnRpbmcgcG9zaXRpb24gdG8gaW5pdGlhdGUgYSBtb21lbnR1bVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IDEgLyogVGhyb3R0bGUgKi8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsLCB0aGlzLmdldEN1cnJlbnRQb3MoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGlzcGF0Y2ggc2Nyb2xsIGFsbCB0aGUgdGltZVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlID4gMSAvKiBUaHJvdHRsZSAqLykge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmNoZWNrTW9tZW50dW0gPSBmdW5jdGlvbiAoYWJzRGlzdFgsIGFic0Rpc3RZLCB0aW1lc3RhbXApIHtcclxuICAgICAgICByZXR1cm4gKHRpbWVzdGFtcCAtIHRoaXMuZW5kVGltZSA+IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBhYnNEaXN0WSA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgYWJzRGlzdFggPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZUVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kLCBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gdGhpcy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgudXBkYXRlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlLCBjdXJyZW50UG9zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlci50cmFuc2xhdGUoY3VycmVudFBvcyk7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIGN1cnJlbnRQb3MsIGR1cmF0aW9uKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5zY3JvbGxCZWhhdmlvclguZ2V0Q3VycmVudFBvcygpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnNjcm9sbEJlaGF2aW9yWS5nZXRDdXJyZW50UG9zKClcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2Nyb2xsZXJBY3Rpb25zO1xyXG59KCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zSGFuZGxlck9wdGlvbnMoYnNPcHRpb25zKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IFtcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICdiaW5kVG9XcmFwcGVyJyxcclxuICAgICAgICAnZGlzYWJsZU1vdXNlJyxcclxuICAgICAgICAnZGlzYWJsZVRvdWNoJyxcclxuICAgICAgICAncHJldmVudERlZmF1bHQnLFxyXG4gICAgICAgICdzdG9wUHJvcGFnYXRpb24nLFxyXG4gICAgICAgICd0YWdFeGNlcHRpb24nLFxyXG4gICAgICAgICdwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbidcclxuICAgIF0ucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcclxuICAgICAgICBwcmV2W2N1cl0gPSBic09wdGlvbnNbY3VyXTtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhic09wdGlvbnMsIGV4dHJhUHJvcCwgYm91bmNlcywgcmVjdCkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ21vbWVudHVtJyxcclxuICAgICAgICAnbW9tZW50dW1MaW1pdFRpbWUnLFxyXG4gICAgICAgICdtb21lbnR1bUxpbWl0RGlzdGFuY2UnLFxyXG4gICAgICAgICdkZWNlbGVyYXRpb24nLFxyXG4gICAgICAgICdzd2lwZUJvdW5jZVRpbWUnLFxyXG4gICAgICAgICdzd2lwZVRpbWUnXHJcbiAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XHJcbiAgICAgICAgcHJldltjdXJdID0gYnNPcHRpb25zW2N1cl07XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbiAgICAvLyBhZGQgZXh0cmEgcHJvcGVydHlcclxuICAgIG9wdGlvbnMuc2Nyb2xsYWJsZSA9IGJzT3B0aW9uc1tleHRyYVByb3BdO1xyXG4gICAgb3B0aW9ucy5ib3VuY2VzID0gYm91bmNlcztcclxuICAgIG9wdGlvbnMucmVjdCA9IHJlY3Q7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxufVxuXG5mdW5jdGlvbiBidWJibGluZyhzb3VyY2UsIHRhcmdldCwgZXZlbnRzKSB7XHJcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgc291cmNlRXZlbnQ7XHJcbiAgICAgICAgdmFyIHRhcmdldEV2ZW50O1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZUV2ZW50ID0gdGFyZ2V0RXZlbnQgPSBldmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdXJjZUV2ZW50ID0gZXZlbnQuc291cmNlO1xyXG4gICAgICAgICAgICB0YXJnZXRFdmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc291cmNlLm9uKHNvdXJjZUV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50cmlnZ2VyLmFwcGx5KHRhcmdldCwgW3RhcmdldEV2ZW50XS5jb25jYXQoYXJncykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxudmFyIFNjcm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2Nyb2xsZXIod3JhcHBlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2JlZm9yZVN0YXJ0JyxcclxuICAgICAgICAgICAgJ2JlZm9yZU1vdmUnLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ2JlZm9yZUVuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnLFxyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnZmxpY2snLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQ2FuY2VsJyxcclxuICAgICAgICAgICAgJ21vbWVudHVtJyxcclxuICAgICAgICAgICAgJ3Njcm9sbFRvJyxcclxuICAgICAgICAgICAgJ2lnbm9yZURpc01vdmVGb3JTYW1lUG9zJyxcclxuICAgICAgICAgICAgJ3Njcm9sbFRvRWxlbWVudCcsXHJcbiAgICAgICAgICAgICdyZXNpemUnXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB3cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpc1xyXG4gICAgICAgICAgICAub3B0aW9ucy5ib3VuY2UsIF9iID0gX2EubGVmdCwgbGVmdCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EucmlnaHQsIHJpZ2h0ID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYS50b3AsIHRvcCA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIF9lID0gX2EuYm90dG9tLCBib3R0b20gPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lO1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiBYXHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclggPSBuZXcgQmVoYXZpb3Iod3JhcHBlciwgY3JlYXRlQmVoYXZpb3JPcHRpb25zKG9wdGlvbnMsICdzY3JvbGxYJywgW2xlZnQsIHJpZ2h0XSwge1xyXG4gICAgICAgICAgICBzaXplOiAnd2lkdGgnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiBZXHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkgPSBuZXcgQmVoYXZpb3Iod3JhcHBlciwgY3JlYXRlQmVoYXZpb3JPcHRpb25zKG9wdGlvbnMsICdzY3JvbGxZJywgW3RvcCwgYm90dG9tXSwge1xyXG4gICAgICAgICAgICBzaXplOiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlciA9IG5ldyBUcmFuc2xhdGVyKHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlciA9IGNyZWF0ZUFuaW1hdGVyKHRoaXMuY29udGVudCwgdGhpcy50cmFuc2xhdGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIgPSBuZXcgQWN0aW9uc0hhbmRsZXIod3JhcHBlciwgY3JlYXRlQWN0aW9uc0hhbmRsZXJPcHRpb25zKHRoaXMub3B0aW9ucykpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IG5ldyBTY3JvbGxlckFjdGlvbnModGhpcy5zY3JvbGxCZWhhdmlvclgsIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLCB0aGlzLmFjdGlvbnNIYW5kbGVyLCB0aGlzLmFuaW1hdGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHZhciByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZVJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIod2luZG93LCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdvcmllbnRhdGlvbmNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiByZXNpemVIYW5kbGVyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNpemUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogcmVzaXplSGFuZGxlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kUmVnaXN0ZXIgPSBuZXcgRXZlbnRSZWdpc3Rlcih0aGlzLmNvbnRlbnQsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc3R5bGUudHJhbnNpdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMudHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5iaW5kVHJhbnNsYXRlcigpO1xyXG4gICAgICAgIHRoaXMuYmluZEFuaW1hdGVyKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIGVuYWJsZSBwb2ludGVyIGV2ZW50cyB3aGVuIHNjcm9sbGluZyBlbmRzXHJcbiAgICAgICAgdGhpcy5ob29rcy5vbih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZVBvaW50ZXJFdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmJpbmRUcmFuc2xhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhvb2tzID0gdGhpcy50cmFuc2xhdGVyLmhvb2tzO1xyXG4gICAgICAgIGhvb2tzLm9uKGhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlVHJhbnNsYXRlLCBmdW5jdGlvbiAodHJhbnNmb3JtU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMudHJhbnNsYXRlWikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUucHVzaChfdGhpcy5vcHRpb25zLnRyYW5zbGF0ZVopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBwb2ludGVyIGV2ZW50cyB3aGVuIHNjcm9sbGluZ1xyXG4gICAgICAgIGhvb2tzLm9uKGhvb2tzLmV2ZW50VHlwZXMudHJhbnNsYXRlLCBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9ucyhwb3MpO1xyXG4gICAgICAgICAgICBfdGhpcy50b2dnbGVQb2ludGVyRXZlbnRzKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuYmluZEFuaW1hdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLmhvb2tzLm9uKHRoaXMuYW5pbWF0ZXIuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5yZXNldFBvc2l0aW9uKF90aGlzLm9wdGlvbnMuYm91bmNlVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1YmJsaW5nKHRoaXMuYW5pbWF0ZXIuaG9va3MsIHRoaXMuaG9va3MsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMubW92ZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuYW5pbWF0ZXIuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5iaW5kQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xyXG4gICAgICAgIGJ1YmJsaW5nKGFjdGlvbnMuaG9va3MsIHRoaXMuaG9va3MsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTdGFydFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZVNjcm9sbFN0YXJ0IC8vIGp1c3QgZm9yIGV2ZW50IGFwaVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVNb3ZlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFN0YXJ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVFbmQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVFbmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGFjdGlvbnMuaG9va3Mub24oYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZnVuY3Rpb24gKGUsIHBvcykge1xyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMudG91Y2hFbmQsIHBvcyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBpdCBpcyBhIGNsaWNrIG9wZXJhdGlvblxyXG4gICAgICAgICAgICBpZiAoIWFjdGlvbnMubW92ZWQgJiYgX3RoaXMuY2hlY2tDbGljayhlKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZXIuc2V0Rm9yY2VTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxDYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZXIuc2V0Rm9yY2VTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgaWYgKF90aGlzLnJlc2V0UG9zaXRpb24oX3RoaXMub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWN0aW9ucy5ob29rcy5vbihhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBmdW5jdGlvbiAocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnMocG9zLnggLSBfdGhpcy5zY3JvbGxCZWhhdmlvclguc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnMocG9zLnkgLSBfdGhpcy5zY3JvbGxCZWhhdmlvclkuc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY2hlY2tGbGljayhkdXJhdGlvbiwgZGVsdGFYLCBkZWx0YVkpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZmxpY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5tb21lbnR1bShwb3MsIGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHBvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmNoZWNrRmxpY2sgPSBmdW5jdGlvbiAoZHVyYXRpb24sIGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAgICAgLy8gZmxpY2tcclxuICAgICAgICBpZiAodGhpcy5ob29rcy5ldmVudHMuZmxpY2subGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICBkdXJhdGlvbiA8IHRoaXMub3B0aW9ucy5mbGlja0xpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBkZWx0YVggPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGRlbHRhWSA8IHRoaXMub3B0aW9ucy5mbGlja0xpbWl0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChwb3MsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSB7XHJcbiAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZS5zd2lwZXIsXHJcbiAgICAgICAgICAgIG5ld1g6IHBvcy54LFxyXG4gICAgICAgICAgICBuZXdZOiBwb3MueVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxyXG4gICAgICAgIHZhciBtb21lbnR1bVggPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5lbmQoZHVyYXRpb24pO1xyXG4gICAgICAgIHZhciBtb21lbnR1bVkgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5lbmQoZHVyYXRpb24pO1xyXG4gICAgICAgIG1ldGEubmV3WCA9IGlzVW5kZWYobW9tZW50dW1YLmRlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICA/IG1ldGEubmV3WFxyXG4gICAgICAgICAgICA6IG1vbWVudHVtWC5kZXN0aW5hdGlvbjtcclxuICAgICAgICBtZXRhLm5ld1kgPSBpc1VuZGVmKG1vbWVudHVtWS5kZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgPyBtZXRhLm5ld1lcclxuICAgICAgICAgICAgOiBtb21lbnR1bVkuZGVzdGluYXRpb247XHJcbiAgICAgICAgbWV0YS50aW1lID0gTWF0aC5tYXgobW9tZW50dW1YLmR1cmF0aW9uLCBtb21lbnR1bVkuZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW9tZW50dW0sIG1ldGEsIHRoaXMpO1xyXG4gICAgICAgIC8vIHdoZW4geCBvciB5IGNoYW5nZWQsIGRvIG1vbWVudHVtIGFuaW1hdGlvbiBub3chXHJcbiAgICAgICAgaWYgKG1ldGEubmV3WCAhPT0gcG9zLnggfHwgbWV0YS5uZXdZICE9PSBwb3MueSkge1xyXG4gICAgICAgICAgICAvLyBjaGFuZ2UgZWFzaW5nIGZ1bmN0aW9uIHdoZW4gc2Nyb2xsZXIgZ29lcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgaWYgKG1ldGEubmV3WCA+IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1pblNjcm9sbFBvcyB8fFxyXG4gICAgICAgICAgICAgICAgbWV0YS5uZXdYIDwgdGhpcy5zY3JvbGxCZWhhdmlvclgubWF4U2Nyb2xsUG9zIHx8XHJcbiAgICAgICAgICAgICAgICBtZXRhLm5ld1kgPiB0aGlzLnNjcm9sbEJlaGF2aW9yWS5taW5TY3JvbGxQb3MgfHxcclxuICAgICAgICAgICAgICAgIG1ldGEubmV3WSA8IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLm1heFNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICAgICAgbWV0YS5lYXNpbmcgPSBlYXNlLnN3aXBlQm91bmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8obWV0YS5uZXdYLCBtZXRhLm5ld1ksIG1ldGEudGltZSwgbWV0YS5lYXNpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmNoZWNrQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHdoZW4gaW4gdGhlIHByb2Nlc3Mgb2YgcHVsbGluZyBkb3duLCBpdCBzaG91bGQgbm90IHByZXZlbnQgY2xpY2tcclxuICAgICAgICB2YXIgY2FuY2VsYWJsZSA9IHtcclxuICAgICAgICAgICAgcHJldmVudENsaWNrOiB0aGlzLmFuaW1hdGVyLmZvcmNlU3RvcHBlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gd2Ugc2Nyb2xsZWQgbGVzcyB0aGFuIG1vbWVudHVtTGltaXREaXN0YW5jZSBwaXhlbHNcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5jaGVja0NsaWNrKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxhYmxlLnByZXZlbnRDbGljaykge1xyXG4gICAgICAgICAgICB2YXIgX2RibGNsaWNrID0gdGhpcy5vcHRpb25zLmRibGNsaWNrO1xyXG4gICAgICAgICAgICB2YXIgZGJsY2xpY2tUcmlnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChfZGJsY2xpY2sgJiYgdGhpcy5sYXN0Q2xpY2tUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfZGJsY2xpY2suZGVsYXksIGRlbGF5ID0gX2EgPT09IHZvaWQgMCA/IDMwMCA6IF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldE5vdygpIC0gdGhpcy5sYXN0Q2xpY2tUaW1lIDwgZGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYmxjbGlja1RyaWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRibGNsaWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGFwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXAoZSwgdGhpcy5vcHRpb25zLnRhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGljayAmJlxyXG4gICAgICAgICAgICAgICAgIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IGRibGNsaWNrVHJpZ2dlZCA/IG51bGwgOiBnZXROb3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbnMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeCBhIHNjcm9sbCBwcm9ibGVtIHVuZGVyIEFuZHJvaWQgY29uZGl0aW9uXHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnJlc2l6ZSkpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmNvbnRlbnQgfHwgIXRoaXMuYW5pbWF0ZXIucGVuZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmltYXRlciA9IHRoaXMuYW5pbWF0ZXI7XHJcbiAgICAgICAgYW5pbWF0ZXIudHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgICBpZiAoIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZXIuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlICE9PSAzIC8qIFJlYWx0aW1lICovKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS50b2dnbGVQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcclxuICAgICAgICBpZiAoZW5hYmxlZCA9PT0gdm9pZCAwKSB7IGVuYWJsZWQgPSB0cnVlOyB9XHJcbiAgICAgICAgdmFyIGVsID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHRoaXMuY29udGVudC5jaGlsZHJlblxyXG4gICAgICAgICAgICA6IFt0aGlzLmNvbnRlbnRdO1xyXG4gICAgICAgIHZhciBwb2ludGVyRXZlbnRzID0gZW5hYmxlZCA/ICdhdXRvJyA6ICdub25lJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gZWxbaV07XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBCZXR0ZXJTY3JvbGwgaW5zdGFuY2UncyB3cmFwcGVyIERPTVxyXG4gICAgICAgICAgICBpZiAobm9kZS5pc0JTY3JvbGxDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IHBvaW50ZXJFdmVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSBvZmZzZXQodGhpcy53cmFwcGVyKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbiAoZGVsdGFYLCBkZWx0YVksIHRpbWUsIGVhc2luZykge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldEN1cnJlbnRQb3MoKSwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICBkZWx0YVggKz0geDtcclxuICAgICAgICBkZWx0YVkgKz0geTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvKGRlbHRhWCwgZGVsdGFZLCB0aW1lLCBlYXNpbmcpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcsIGV4dHJhVHJhbnNmb3JtLCBpc1NpbGVudCkge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICBpZiAoZXh0cmFUcmFuc2Zvcm0gPT09IHZvaWQgMCkgeyBleHRyYVRyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxyXG4gICAgICAgICAgICBlbmQ6IHt9XHJcbiAgICAgICAgfTsgfVxyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICB2YXIgZWFzaW5nRm4gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA/IGVhc2luZy5zdHlsZSA6IGVhc2luZy5mbjtcclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHRoaXMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgICAgIHZhciBzdGFydFBvaW50ID0gX19hc3NpZ24oeyB4OiBjdXJyZW50UG9zLngsIHk6IGN1cnJlbnRQb3MueSB9LCBleHRyYVRyYW5zZm9ybS5zdGFydCk7XHJcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gX19hc3NpZ24oeyB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5IH0sIGV4dHJhVHJhbnNmb3JtLmVuZCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxUbywgZW5kUG9pbnQpO1xyXG4gICAgICAgIGlmICghdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5pZ25vcmVEaXNNb3ZlRm9yU2FtZVBvcykpIHtcclxuICAgICAgICAgICAgLy8gaXQgaXMgYW4gdXNlbGVzcyBtb3ZlXHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvaW50LnggPT09IGVuZFBvaW50LnggJiYgc3RhcnRQb2ludC55ID09PSBlbmRQb2ludC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5tb3ZlKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbiwgaXNTaWxlbnQpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5zY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbiAoZWwsIHRpbWUsIG9mZnNldFgsIG9mZnNldFksIGVhc2luZykge1xyXG4gICAgICAgIHZhciB0YXJnZXRFbGUgPSBnZXRFbGVtZW50KGVsKTtcclxuICAgICAgICB2YXIgcG9zID0gb2Zmc2V0KHRhcmdldEVsZSk7XHJcbiAgICAgICAgdmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQsIHNpemUsIHdyYXBwZXJTaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBvZmZzZXRYL1kgYXJlIHRydWUgd2UgY2VudGVyIHRoZSBlbGVtZW50IHRvIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCA/IE1hdGgucm91bmQoc2l6ZSAvIDIgLSB3cmFwcGVyU2l6ZSAvIDIpIDogMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9mZnNldFggPSBnZXRPZmZzZXQob2Zmc2V0WCwgdGFyZ2V0RWxlLm9mZnNldFdpZHRoLCB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgIG9mZnNldFkgPSBnZXRPZmZzZXQob2Zmc2V0WSwgdGFyZ2V0RWxlLm9mZnNldEhlaWdodCwgdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodCk7XHJcbiAgICAgICAgdmFyIGdldFBvcyA9IGZ1bmN0aW9uIChwb3MsIHdyYXBwZXJQb3MsIG9mZnNldCwgc2Nyb2xsQmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgcG9zIC09IHdyYXBwZXJQb3M7XHJcbiAgICAgICAgICAgIHBvcyA9IHNjcm9sbEJlaGF2aW9yLmFkanVzdFBvc2l0aW9uKHBvcyAtIG9mZnNldCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3MubGVmdCA9IGdldFBvcyhwb3MubGVmdCwgdGhpcy53cmFwcGVyT2Zmc2V0LmxlZnQsIG9mZnNldFgsIHRoaXMuc2Nyb2xsQmVoYXZpb3JYKTtcclxuICAgICAgICBwb3MudG9wID0gZ2V0UG9zKHBvcy50b3AsIHRoaXMud3JhcHBlck9mZnNldC50b3AsIG9mZnNldFksIHRoaXMuc2Nyb2xsQmVoYXZpb3JZKTtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxUb0VsZW1lbnQsIHRhcmdldEVsZSwgcG9zKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zLmxlZnQsIHBvcy50b3AsIHRpbWUsIGVhc2luZyk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnJlc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAodGltZSwgZWFzaW5nKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5jaGVja0luQm91bmRhcnkoKSwgeCA9IF9hLnBvc2l0aW9uLCB4SW5Cb3VuZGFyeSA9IF9hLmluQm91bmRhcnk7XHJcbiAgICAgICAgdmFyIF9iID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuY2hlY2tJbkJvdW5kYXJ5KCksIHkgPSBfYi5wb3NpdGlvbiwgeUluQm91bmRhcnkgPSBfYi5pbkJvdW5kYXJ5O1xyXG4gICAgICAgIGlmICh4SW5Cb3VuZGFyeSAmJiB5SW5Cb3VuZGFyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG91dCBvZiBib3VuZGFyeVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgZWFzaW5nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudXBkYXRlUG9zaXRpb25zID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZVBvc2l0aW9uKHBvcy54KTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS51cGRhdGVQb3NpdGlvbihwb3MueSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlci50aW1lcik7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBrZXlzID0gW1xyXG4gICAgICAgICAgICAncmVzaXplUmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbkVuZFJlZ2lzdGVyJyxcclxuICAgICAgICAgICAgJ2FjdGlvbnNIYW5kbGVyJyxcclxuICAgICAgICAgICAgJ2FjdGlvbnMnLFxyXG4gICAgICAgICAgICAnaG9va3MnLFxyXG4gICAgICAgICAgICAnYW5pbWF0ZXInLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlcicsXHJcbiAgICAgICAgICAgICdzY3JvbGxCZWhhdmlvclgnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQmVoYXZpb3JZJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIF90aGlzW2tleV0uZGVzdHJveSgpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2Nyb2xsZXI7XHJcbn0oKSk7XG5cbnZhciBwcm9wZXJ0aWVzQ29uZmlnID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5jdXJyZW50UG9zJyxcclxuICAgICAgICBrZXk6ICd4J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkuY3VycmVudFBvcycsXHJcbiAgICAgICAga2V5OiAneSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmhhc1Njcm9sbCcsXHJcbiAgICAgICAga2V5OiAnaGFzSG9yaXpvbnRhbFNjcm9sbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmhhc1Njcm9sbCcsXHJcbiAgICAgICAga2V5OiAnaGFzVmVydGljYWxTY3JvbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5jb250ZW50U2l6ZScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsZXJXaWR0aCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmNvbnRlbnRTaXplJyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxlckhlaWdodCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1heFNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWF4U2Nyb2xsWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1heFNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWF4U2Nyb2xsWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1pblNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWluU2Nyb2xsWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1pblNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWluU2Nyb2xsWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1vdmluZ0RpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnbW92aW5nRGlyZWN0aW9uWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1vdmluZ0RpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnbW92aW5nRGlyZWN0aW9uWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmRpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnZGlyZWN0aW9uWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmRpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnZGlyZWN0aW9uWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYWN0aW9ucy5lbmFibGVkJyxcclxuICAgICAgICBrZXk6ICdlbmFibGVkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5hbmltYXRlci5wZW5kaW5nJyxcclxuICAgICAgICBrZXk6ICdwZW5kaW5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5hbmltYXRlci5zdG9wJyxcclxuICAgICAgICBrZXk6ICdzdG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxUbycsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsVG8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJ5JyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxCeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsVG9FbGVtZW50JyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxUb0VsZW1lbnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnJlc2V0UG9zaXRpb24nLFxyXG4gICAgICAgIGtleTogJ3Jlc2V0UG9zaXRpb24nXHJcbiAgICB9XHJcbl07XG5cbnZhciBCU2Nyb2xsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJTY3JvbGwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCU2Nyb2xsKGVsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgW1xyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICdlbmFibGUnLFxyXG4gICAgICAgICAgICAnZGlzYWJsZScsXHJcbiAgICAgICAgICAgICdiZWZvcmVTY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdmbGljaycsXHJcbiAgICAgICAgICAgICdkZXN0cm95J1xyXG4gICAgICAgIF0pIHx8IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBnZXRFbGVtZW50KGVsKTtcclxuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICAgICAgd2FybignQ2FuIG5vdCByZXNvbHZlIHRoZSB3cmFwcGVyIERPTS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udGVudCA9IHdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHdhcm4oJ1RoZSB3cmFwcGVyIG5lZWQgYXQgbGVhc3Qgb25lIGNoaWxkIGVsZW1lbnQgdG8gYmUgc2Nyb2xsZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMucGx1Z2lucyA9IHt9O1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucygpLm1lcmdlKG9wdGlvbnMpLnByb2Nlc3MoKTtcclxuICAgICAgICBfdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnaW5pdCcsXHJcbiAgICAgICAgICAgICdyZWZyZXNoJyxcclxuICAgICAgICAgICAgJ2VuYWJsZScsXHJcbiAgICAgICAgICAgICdkaXNhYmxlJyxcclxuICAgICAgICAgICAgJ2Rlc3Ryb3knXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuaW5pdCh3cmFwcGVyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCU2Nyb2xsLnVzZSA9IGZ1bmN0aW9uIChjdG9yKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBjdG9yLnBsdWdpbk5hbWU7XHJcbiAgICAgICAgdmFyIGluc3RhbGxlZCA9IHRoaXMucGx1Z2lucy5zb21lKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIGN0b3IgPT09IHBsdWdpbi5jdG9yOyB9KTtcclxuICAgICAgICBpZiAoaW5zdGFsbGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoaXNVbmRlZihuYW1lKSkge1xyXG4gICAgICAgICAgICB3YXJuKFwiUGx1Z2luIENsYXNzIG11c3Qgc3BlY2lmeSBwbHVnaW4ncyBuYW1lIGluIHN0YXRpYyBwcm9wZXJ0eSBieSAncGx1Z2luTmFtZScgZmllbGQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luc01hcFtuYW1lXSkge1xyXG4gICAgICAgICAgICB3YXJuKFwiVGhpcyBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZCwgbWF5YmUgeW91IG5lZWQgY2hhbmdlIHBsdWdpbidzIG5hbWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsdWdpbnNNYXBbbmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgYXBwbHlPcmRlcjogY3Rvci5hcHBseU9yZGVyLFxyXG4gICAgICAgICAgICBjdG9yOiBjdG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB3cmFwcGVyLmlzQlNjcm9sbENvbnRhaW5lciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlciA9IG5ldyBTY3JvbGxlcih3cmFwcGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdWJibGluZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0b0JsdXIoKTtcclxuICAgICAgICB0aGlzLmlubmVyUmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLnByb3h5KHByb3BlcnRpZXNDb25maWcpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlQbHVnaW5zKCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuYXBwbHlQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5wbHVnaW5zXHJcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIGFwcGx5T3JkZXJNYXAgPSAoX2EgPSB7fSxcclxuICAgICAgICAgICAgICAgIF9hW1wicHJlXCIgLyogUHJlICovXSA9IC0xLFxyXG4gICAgICAgICAgICAgICAgX2FbXCJwb3N0XCIgLyogUG9zdCAqL10gPSAxLFxyXG4gICAgICAgICAgICAgICAgX2EpO1xyXG4gICAgICAgICAgICB2YXIgYU9yZGVyID0gYS5hcHBseU9yZGVyID8gYXBwbHlPcmRlck1hcFthLmFwcGx5T3JkZXJdIDogMDtcclxuICAgICAgICAgICAgdmFyIGJPcmRlciA9IGIuYXBwbHlPcmRlciA/IGFwcGx5T3JkZXJNYXBbYi5hcHBseU9yZGVyXSA6IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBhT3JkZXIgLSBiT3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGN0b3IgPSBpdGVtLmN0b3I7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zW2l0ZW0ubmFtZV0gJiYgdHlwZW9mIGN0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBsdWdpbnNbaXRlbS5uYW1lXSA9IG5ldyBjdG9yKF90aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmhhbmRsZUF1dG9CbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0JsdXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50VHlwZXMuYmVmb3JlU2Nyb2xsU3RhcnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5ldmVudEJ1YmJsaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGJ1YmJsaW5nKHRoaXMuc2Nyb2xsZXIuaG9va3MsIHRoaXMsIFtcclxuICAgICAgICAgICAgJ2JlZm9yZVNjcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQ2FuY2VsJyxcclxuICAgICAgICAgICAgJ3RvdWNoRW5kJyxcclxuICAgICAgICAgICAgJ2ZsaWNrJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmlubmVyUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnJlZnJlc2gpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMucmVmcmVzaCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUucHJveHkgPSBmdW5jdGlvbiAocHJvcGVydGllc0NvbmZpZykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcHJvcGVydGllc0NvbmZpZy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2Eua2V5LCBzb3VyY2VLZXkgPSBfYS5zb3VyY2VLZXk7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNQcm94eShfdGhpcywgc291cmNlS2V5LCBrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlc2V0UG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuYWJsZSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5lbmFibGUpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5kaXNhYmxlKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLmRpc2FibGUpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5kZXN0cm95KTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLmRlc3Ryb3kpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmV2ZW50UmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZXMpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZShuYW1lcyk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wbHVnaW5zID0gW107XHJcbiAgICBCU2Nyb2xsLnBsdWdpbnNNYXAgPSB7fTtcclxuICAgIHJldHVybiBCU2Nyb2xsO1xyXG59KEV2ZW50RW1pdHRlcikpO1xuXG5leHBvcnQgZGVmYXVsdCBCU2Nyb2xsO1xuZXhwb3J0IHsgQmVoYXZpb3IsIE9wdGlvbnMgfTtcbiIsIi8qIVxuICogYmV0dGVyLXNjcm9sbCAvIHB1bGwtZG93blxuICogKGMpIDIwMTYtMjAyMCB1c3RiaHVhbmd5aVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vLyBzc3Igc3VwcG9ydFxyXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbnZhciB1YSA9IGluQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbnZhciBpc1dlQ2hhdERldlRvb2xzID0gdWEgJiYgL3dlY2hhdGRldnRvb2xzLy50ZXN0KHVhKTtcclxudmFyIGlzQW5kcm9pZCA9IHVhICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDA7XG5cbnZhciBlbGVtZW50U3R5bGUgPSAoaW5Ccm93c2VyICYmXHJcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSk7XHJcbnZhciB2ZW5kb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgdHJhbnNmb3JtTmFtZXMgPSB7XHJcbiAgICAgICAgd2Via2l0OiAnd2Via2l0VHJhbnNmb3JtJyxcclxuICAgICAgICBNb3o6ICdNb3pUcmFuc2Zvcm0nLFxyXG4gICAgICAgIE86ICdPVHJhbnNmb3JtJyxcclxuICAgICAgICBtczogJ21zVHJhbnNmb3JtJyxcclxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zZm9ybSdcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdHJhbnNmb3JtTmFtZXMpIHtcclxuICAgICAgICBpZiAoZWxlbWVudFN0eWxlW3RyYW5zZm9ybU5hbWVzW2tleV1dICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XHJcbiAgICBpZiAodmVuZG9yID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuICAgIGlmICh2ZW5kb3IgPT09ICdzdGFuZGFyZCcpIHtcclxuICAgICAgICBpZiAoc3R5bGUgPT09ICd0cmFuc2l0aW9uRW5kJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmVuZG9yICsgc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zdWJzdHIoMSk7XHJcbn1cclxudmFyIGNzc1ZlbmRvciA9IHZlbmRvciAmJiB2ZW5kb3IgIT09ICdzdGFuZGFyZCcgPyAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKSArICctJyA6ICcnO1xyXG52YXIgdHJhbnNmb3JtID0gcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xyXG52YXIgdHJhbnNpdGlvbiA9IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJyk7XHJcbnZhciBoYXNQZXJzcGVjdGl2ZSA9IGluQnJvd3NlciAmJiBwcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBlbGVtZW50U3R5bGU7XHJcbnZhciBzdHlsZSA9IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkR1cmF0aW9uJyksXHJcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpLFxyXG4gICAgdHJhbnNpdGlvbkVuZDogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25FbmQnKVxyXG59O1xuXG52YXIgZWFzZSA9IHtcclxuICAgIC8vIGVhc2VPdXRRdWludFxyXG4gICAgc3dpcGU6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICsgLS10ICogdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJkXHJcbiAgICBzd2lwZUJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcnRcclxuICAgIGJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS10ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDAgLyA2MDtcclxudmFyIHdpbmRvd0NvbXBhdCA9IGluQnJvd3NlciAmJiB3aW5kb3c7XHJcbmZ1bmN0aW9uIG5vb3AoKSB7IH1cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG4gICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIChjYWxsYmFjay5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMKSAvIDIpOyAvLyBtYWtlIGludGVydmFsIGFzIHByZWNpc2UgYXMgcG9zc2libGUuXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XHJcbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH0pO1xyXG59KSgpO1xuXG52YXIgc291cmNlUHJlZml4ID0gJ3BsdWdpbnMucHVsbERvd25SZWZyZXNoJztcclxudmFyIHByb3BlcnRpZXNNYXAgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZmluaXNoUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdmaW5pc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ29wZW5QdWxsRG93bicsXHJcbiAgICAgICAgbmFtZTogJ29wZW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Nsb3NlUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdjbG9zZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYXV0b1B1bGxEb3duUmVmcmVzaCcsXHJcbiAgICAgICAgbmFtZTogJ2F1dG9QdWxsJ1xyXG4gICAgfVxyXG5dO1xyXG52YXIgcHJvcGVydGllc1Byb3h5Q29uZmlnID0gcHJvcGVydGllc01hcC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBzb3VyY2VLZXk6IHNvdXJjZVByZWZpeCArIFwiLlwiICsgaXRlbS5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxudmFyIFB1bGxEb3duID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHVsbERvd24oc2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBzY3JvbGw7XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5yZWdpc3RlclR5cGUoWydwdWxsaW5nRG93biddKTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5wcm94eShwcm9wZXJ0aWVzUHJveHlDb25maWcpO1xyXG4gICAgfVxyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLl93YXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDpnIDopoHorr7nva4gcHJvYmUgPSAzIOWQl++8n1xyXG4gICAgICAgIC8vIG11c3Qgd2F0Y2ggc2Nyb2xsIGluIHJlYWwgdGltZVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHJvYmVUeXBlID0gMyAvKiBSZWFsdGltZSAqLztcclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxlci5ob29rcy5vbignZW5kJywgdGhpcy5fY2hlY2tQdWxsRG93biwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLl9jaGVja1B1bGxEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsRG93blJlZnJlc2gsIF9iID0gX2EudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYiA9PT0gdm9pZCAwID8gOTAgOiBfYiwgX2MgPSBfYS5zdG9wLCBzdG9wID0gX2MgPT09IHZvaWQgMCA/IDQwIDogX2M7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYSByZWFsIHB1bGwgZG93biBhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uWSAhPT0gLTEgLyogTmVnYXRpdmUgKi8gfHxcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA8IHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdEb3duJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxNaW5TY3JvbGxZID0gdGhpcy5zY3JvbGwubWluU2Nyb2xsWTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHN0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRoaXMuc2Nyb2xsLngsIHN0b3AsIHRoaXMuc2Nyb2xsLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1bGxpbmc7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5taW5TY3JvbGxZID0gdGhpcy5vcmlnaW5hbE1pblNjcm9sbFk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucmVzZXRQb3NpdGlvbih0aGlzLnNjcm9sbC5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmF1dG9QdWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2Nyb2xsLm9wdGlvbnNcclxuICAgICAgICAgICAgLnB1bGxEb3duUmVmcmVzaCwgX2IgPSBfYS50aHJlc2hvbGQsIHRocmVzaG9sZCA9IF9iID09PSB2b2lkIDAgPyA5MCA6IF9iLCBfYyA9IF9hLnN0b3AsIHN0b3AgPSBfYyA9PT0gdm9pZCAwID8gNDAgOiBfYztcclxuICAgICAgICBpZiAodGhpcy5wdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTWluU2Nyb2xsWSA9IHRoaXMuc2Nyb2xsLm1pblNjcm9sbFk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHRocmVzaG9sZDtcclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0aGlzLnNjcm9sbC54LCB0aHJlc2hvbGQpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdEb3duJyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGhpcy5zY3JvbGwueCwgc3RvcCwgdGhpcy5zY3JvbGwub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucGx1Z2luTmFtZSA9ICdwdWxsRG93blJlZnJlc2gnO1xyXG4gICAgcmV0dXJuIFB1bGxEb3duO1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsRG93bjtcbiIsIi8qIVxuICogYmV0dGVyLXNjcm9sbCAvIHB1bGwtdXBcbiAqIChjKSAyMDE2LTIwMjAgdXN0Ymh1YW5neWlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xudmFyIHNvdXJjZVByZWZpeCA9ICdwbHVnaW5zLnB1bGxVcExvYWQnO1xyXG52YXIgcHJvcGVydGllc01hcCA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdmaW5pc2hQdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdmaW5pc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ29wZW5QdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdvcGVuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjbG9zZVB1bGxVcCcsXHJcbiAgICAgICAgbmFtZTogJ2Nsb3NlJ1xyXG4gICAgfVxyXG5dO1xyXG52YXIgcHJvcGVydGllc1Byb3h5Q29uZmlnID0gcHJvcGVydGllc01hcC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBzb3VyY2VLZXk6IHNvdXJjZVByZWZpeCArIFwiLlwiICsgaXRlbS5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxudmFyIFB1bGxVcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFB1bGxVcChic2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsID0gYnNjcm9sbDtcclxuICAgICAgICB0aGlzLndhdGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5yZWdpc3RlclR5cGUoWydwdWxsaW5nVXAnXSk7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLnByb3h5KHByb3BlcnRpZXNQcm94eUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLl93YXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy53YXRjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG11c3Qgd2F0Y2ggc2Nyb2xsIGluIHJlYWwgdGltZVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnByb2JlVHlwZSA9IDMgLyogUmVhbHRpbWUgKi87XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9uKCdzY3JvbGwnLCB0aGlzLl9jaGVja1RvRW5kLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLl9jaGVja1RvRW5kID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5ic2Nyb2xsLm9wdGlvbnNcclxuICAgICAgICAgICAgLnB1bGxVcExvYWQudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYSA9PT0gdm9pZCAwID8gMCA6IF9hO1xyXG4gICAgICAgIGlmICh0aGlzLmJzY3JvbGwubW92aW5nRGlyZWN0aW9uWSA9PT0gMSAvKiBQb3NpdGl2ZSAqLyAmJlxyXG4gICAgICAgICAgICBwb3MueSA8PSB0aGlzLmJzY3JvbGwubWF4U2Nyb2xsWSArIHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAvLyByZXNldCBwdWxsdXBXYXRjaGluZyBzdGF0dXMgYWZ0ZXIgc2Nyb2xsIGVuZCB0byBwcm9taXNlIHRoYXQgdHJpZ2dlciAncHVsbGluZ1VwJyBvbmx5IG9uY2Ugd2hlbiBwdWxsaW5nIHVwXHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC5vbmNlKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdVcCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwub2ZmKCdzY3JvbGwnLCB0aGlzLl9jaGVja1RvRW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLm9uY2UoJ3Njcm9sbEVuZCcsIHRoaXMuX3dhdGNoLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9mZignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnBsdWdpbk5hbWUgPSAncHVsbFVwTG9hZCc7XHJcbiAgICByZXR1cm4gUHVsbFVwO1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsVXA7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlci9yb3V0ZXIuanMnXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnYXBwLi4uJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgUm91dGVyLmdvKCdwb3NpdGlvbicpXG4gIH1cblxuICBpbml0RXZlbnQoKSB7XG4gICAgLy8g5om+5Yiw5omA5pyJ55qEIGxpIOe7keWumuS6i+S7tlxuICAgICQoXCIjbmF2IGxpXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgIC8vIOi/memHjOS4jeiDveWGmeaIkOeureWktOWHveaVsFxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICBsZXQgdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLXVybCcpO1xuICAgICAgUm91dGVyLmdvKHVybCk7XG4gICAgfSlcbiAgfVxuXG5cbn1cblxubmV3IEFwcCgpOyIsImltcG9ydCBwb3NpdGlvblRwbCBmcm9tICcuLi8uLi92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbi5odG1sJ1xuaW1wb3J0IGl0ZW1UcGwgZnJvbSAnLi4vLi4vdmlld3MvcG9zaXRpb24vcG9zaXRpb24taXRlbS5odG1sJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vbW9kZWwvaHR0cCc7XG5pbXBvcnQgQlNjcm9sbCBmcm9tICdAYmV0dGVyLXNjcm9sbC9jb3JlJ1xuaW1wb3J0IFB1bGxEb3duIGZyb20gJ0BiZXR0ZXItc2Nyb2xsL3B1bGwtZG93bicgIC8vIOS4i+aLieaPkuS7tlxuaW1wb3J0IFB1bGx1cCBmcm9tICdAYmV0dGVyLXNjcm9sbC9wdWxsLXVwJyAgLy8g5LiK5ouJ5o+S5Lu2XG5cblxuLy8g5rOo5YaM5o+S5Lu2XG5CU2Nyb2xsLnVzZShQdWxsRG93bik7XG5CU2Nyb2xsLnVzZShQdWxsdXApO1xuXG5jbGFzcyBQb3NpdGlvbkNvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOesrOWHoOmhtVxuICAgIHRoaXMucGFnZU5vID0gMTtcbiAgICAvLyDmr4/pobXnmoTmnaHmlbBcbiAgICB0aGlzLnBhZ2VTaXplID0gMTA7XG4gICAgLy8g5YWo6YOo55qE5YiX6KGo5pWw5o2uXG4gICAgdGhpcy5kYXRhbGlzdCA9IFtdO1xuXG4gICAgdGhpcy5pc01vcmUgPSB0cnVlOyAgLy8g5piv5ZCm5pyJ5pu05aSaXG4gIH1cblxuXG4gIC8vIOivt+axguaVsOaNrlxuICBhc3luYyBnZXRMaXN0KCkge1xuICAgICQoJyNsb2FkaW5nJykuc2hvdygpO1xuICAgIGxldCB1cmwgPSBgL2FwaS9wb3NpdGlvbmxpc3Q/X3BhZ2U9JHt0aGlzLnBhZ2VOb30mX2xpbWl0PSR7dGhpcy5wYWdlU2l6ZX1gO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBnZXQodXJsKTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IHRoaXMucGFnZVNpemUpIHRoaXMuaXNNb3JlID0gZmFsc2U7XG4gICAgdGhpcy5kYXRhbGlzdCA9IHRoaXMuZGF0YWxpc3QuY29uY2F0KHJlc3VsdCk7XG4gICAgbGV0IGh0bWwgPSB0ZW1wbGF0ZS5yZW5kZXIoaXRlbVRwbCwgeyBkYXRhbGlzdDogdGhpcy5kYXRhbGlzdCB9KVxuICAgICQoXCIucG9zaXRpb24tbGlzdFwiKS5odG1sKGh0bWwpO1xuICAgICQoJyNsb2FkaW5nJykuaGlkZSgpO1xuICB9XG5cbiAgLy8g5Y2V5LiA6IGM6LSjXG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICAkKFwibWFpblwiKS5odG1sKHBvc2l0aW9uVHBsKTtcbiAgICBhd2FpdCB0aGlzLmdldExpc3QoKTtcblxuICAgIHRoaXMuc2Nyb2xsID0gbmV3IEJTY3JvbGwoJyNwb3NpdGlvbi13cmFwcGVyJywge1xuICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgIHB1bGxEb3duUmVmcmVzaDoge1xuICAgICAgICB0aHJlc2hvbGQ6IDUwLCAgLy8g5LiL5ouJ5Yiw5LuA5LmI5L2N572u5Yi35pawXG4gICAgICAgIHN0b3A6IDAgIC8vIOWbnuW8ueWBnOeVmeeahOi3neemu1xuICAgICAgfSxcbiAgICAgIHB1bGxVcExvYWQ6IHRydWUgIC8vIOaYr+WQpuS4iuaLiVxuICAgIH0pXG4gICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgdGhpcy5zY3JvbGwub24oJ3B1bGxpbmdEb3duJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlTm8gPSAxOyAgLy8g5LiL5ouJ55qE5pe25YCZ5oqKIOmhteaVsOiuvue9ruS4ujFcbiAgICAgIHRoaXMuZGF0YWxpc3QgPSBbXTtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0TGlzdCgpO1xuICAgICAgdGhpcy5zY3JvbGwuZmluaXNoUHVsbERvd24oKTtcbiAgICB9KVxuXG4gICAgLy8g55uR5ZCs5a6e5pe25rua5YqoXG4gICAgdGhpcy5zY3JvbGwub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnkgPiAxMCkge1xuICAgICAgICAkKCcucmVmZXJzaCcpLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5yZWZlcnNoJykuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDkuIrmi4nliqDovb3miJDlip9cbiAgICB0aGlzLnNjcm9sbC5vbigncHVsbGluZ1VwJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTW9yZSkge1xuICAgICAgICAkKCcubW9yZScpLnRleHQoJ+ayoeacieabtOWkmueahOaVsOaNruWVpi4uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICQoJy5tb3JlJykuaGlkZSgpO1xuICAgICAgICAgIHRoaXMuc2Nyb2xsLnJlZnJlc2goKTtcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZU5vKys7XG4gICAgICBhd2FpdCB0aGlzLmdldExpc3QoKTtcbiAgICAgIHRoaXMuc2Nyb2xsLmZpbmlzaFB1bGxVcCgpO1xuICAgICAgdGhpcy5zY3JvbGwucmVmcmVzaCgpO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc2l0aW9uQ29udHJvbGxlcigpOyIsIi8vIOaVsOaNruiuv+mXruWxglxuXG5jb25zdCBnZXQgPSAodXJsLCBkYXRhKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzbG92ZSwgcmVqZWN0KSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybCwgIC8vIHVybDp1cmxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzbG92ZShyZXN1bHQpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG59XG5cbmNvbnN0IHBvc3QgPSAoKSA9PiB7XG5cbn1cblxuZXhwb3J0IHtcbiAgZ2V0LFxuICBwb3N0XG59IiwiaW1wb3J0IHBvc2l0b24gZnJvbSAnLi4vY29udHJvbGxlci9wb3NpdGlvbkNvbnRyb2xsZXIuanMnXG5jbGFzcyBSb3V0ZXIge1xuICBnbyhwYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICdwb3NpdGlvbicpIHBvc2l0b24ucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpOyIsIm1vZHVsZS5leHBvcnRzID0gXCJ7e2VhY2ggZGF0YWxpc3R9fTxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPiAgPGltZyBzcmM9XFxcImh0dHA6Ly93d3cubGdzdGF0aWMuY29tL3t7JHZhbHVlW1xcJ2NvbXBhbnlMb2dvXFwnXX19XFxcIiBhbHQ9XFxcIlxcXCI+ICA8ZGl2IGNsYXNzPVxcXCJkZXNjXFxcIj4gICAgPGgyPnt7JHZhbHVlW1xcJ2NvbXBhbnlOYW1lXFwnXX19PC9oMj4gICAgPHAgY2xhc3M9XFxcInBvc1xcXCI+ICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hbWVcXFwiPiAgICAgICAge3skdmFsdWVbXFwncG9zaXRpb25OYW1lXFwnXX19W3t7JHZhbHVlW1xcJ2NpdHlcXCddfX1dICAgICAgPC9zcGFuPiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYWxhcnlcXFwiPiAgICAgICAge3skdmFsdWVbXFwnc2FsYXJ5XFwnXX19ICAgICAgPC9zcGFuPiAgICA8L3A+ICAgIDxwIGNsYXNzPVxcXCJ0aW1lXFxcIj4gICAgICB7eyR2YWx1ZVtcXCdjcmVhdGVUaW1lXFwnXX19ICAgIDwvcD4gIDwvZGl2PjwvZGl2Pnt7L2VhY2h9fVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInBvc2l0aW9uLXdyYXBwZXJcXFwiPiAgPGRpdj4gICAgPGRpdiBjbGFzcz1cXFwicmVmZXJzaFxcXCI+5LiL5ouJ5Yi35pawPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbVxcXCI+ICAgICAgPHNwYW4+MTDnp5LkuK3lrprliLbogYzkvY08L3NwYW4+ICAgICAgPGJ1dHRvbj7ljrvnmbvlvZU8L2J1dHRvbj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcInBvc2l0aW9uLWxpc3RcXFwiPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cXFwibW9yZVxcXCI+ICAgICAg5Yqg6L295pu05aSaICAgIDwvZGl2PiAgPC9kaXY+PC9kaXY+XCIiXSwic291cmNlUm9vdCI6IiJ9