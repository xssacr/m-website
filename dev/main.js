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



var MODE = 'hash'; // hash / history 

var App = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    this.router = new _router_router_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      mode: MODE
    });
    this.initEvent();
    this.initSwiper(); // this.router.go('position');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "init",
    value: function init() {} // 所有的事件

  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      var self = this; // 找到所有的 li 绑定事件

      $("#nav li").on('click', function () {
        // 这里不能写成箭头函数
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        self.mySwiper.slideTo(index, 300, false);
      }); // 页面刷新时

      addEventListener('load', function () {
        var url = location.hash.replace('#', '') || 'position';

        if (MODE === 'history') {
          url = history.state ? history.state.path : 'position';
        } // debugger;


        self.router.go(url);

        _this.slideToSwiper(url);

        _this.setActive(url);

        $('#loading').hide();
      });

      if (MODE === 'hash') {
        addEventListener('hashchange', function () {
          // 拿到 hash 的值
          var hash = location.hash.replace('#', ''); // 根据 hash 值切换到对应的视图
          // self.router.go(hash);

          _this.slideToSwiper(hash);

          _this.setActive(hash);
        });
      } else {
        // history 模式
        addEventListener('popstate', function () {
          var url = history.state.path; // 这块有问题

          self.router.go(url);

          _this.setActive(url);
        });
      }
    } // 设置菜单的激活状态

  }, {
    key: "setActive",
    value: function setActive(url) {
      // 根据 url 找到对应的 li，然后让他选中
      $("#nav").find("li[data-url=".concat(url, "]")).addClass('active').siblings().removeClass('active');
    } // Swiper

  }, {
    key: "initSwiper",
    value: function initSwiper() {
      var self = this.router;
      this.mySwiper = new Swiper('.swiper-container', {
        // loop: true,
        on: {
          slideChange: function slideChange() {
            var cur = $('#nav').find('li').eq(this.activeIndex);
            var url = cur.attr('data-url');
            self.go(url);
          }
        }
      });
    } // 根据 url 切换到指定的 swiper

  }, {
    key: "slideToSwiper",
    value: function slideToSwiper(url) {
      var index = $("#nav").find("li[data-url=".concat(url, "]")).index();
      this.mySwiper.slideTo(index, 300, false);
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/js/controller/errorController.js":
/*!**********************************************!*\
  !*** ./src/js/controller/errorController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_error_errPage_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/error/errPage.html */ "./src/views/error/errPage.html");
/* harmony import */ var _views_error_errPage_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_error_errPage_html__WEBPACK_IMPORTED_MODULE_2__);




var errorController = /*#__PURE__*/function () {
  function errorController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, errorController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(errorController, [{
    key: "render",
    value: function render() {
      $('#main').html(_views_error_errPage_html__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  }]);

  return errorController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new errorController());

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

    this.initEvent();
  } // 事件


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PositionController, [{
    key: "initEvent",
    value: function initEvent() {
      $("#main").on('click', '.item', function () {
        console.log($(this));
        var positionId = $(this).attr('data-id');
        location.href = '/detail.html?' + positionId;
      });
    } // 请求数据

  }, {
    key: "getList",
    value: function () {
      var _getList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, result, html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('加载数据...');
                $('#loading').show();
                url = "/api/positionlist?_page=".concat(this.pageNo, "&_limit=").concat(this.pageSize);
                _context.next = 5;
                return Object(_model_http__WEBPACK_IMPORTED_MODULE_6__["get"])(url);

              case 5:
                result = _context.sent;
                if (result.length < this.pageSize) this.isMore = false;
                this.datalist = this.datalist.concat(result);
                html = template.render(_views_position_position_item_html__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  datalist: this.datalist
                });
                $(".position-list").html(html);
                $('#loading').hide();

              case 11:
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
                console.log($('#swiper-position').html(_views_position_position_html__WEBPACK_IMPORTED_MODULE_4___default.a));
                $("#swiper-position").html(_views_position_position_html__WEBPACK_IMPORTED_MODULE_4___default.a);
                _context4.next = 4;
                return this.getList();

              case 4:
                this.scroll = new _better_scroll_core__WEBPACK_IMPORTED_MODULE_7__["default"]('#position-wrapper', {
                  scrollY: true,
                  pullDownRefresh: {
                    threshold: 50,
                    // 下拉到什么位置刷新
                    stop: 0 // 回弹停留的距离

                  },
                  click: true,
                  pullUpLoad: true // 是否上拉

                }); // 下拉刷新

                this.scroll.on('pullingDown', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this.pageNo = 1; // 下拉的时候把 页数设置为1

                          _this.datalist = [];
                          _this.isMore = true;
                          _context2.next = 5;
                          return _this.getList();

                        case 5:
                          _this.scroll.finishPullDown();

                          _this.scroll.refresh();

                        case 7:
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
                            }, 2000); // return;
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

              case 8:
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

/***/ "./src/js/controller/profileController.js":
/*!************************************************!*\
  !*** ./src/js/controller/profileController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/profile/profile.html */ "./src/views/profile/profile.html");
/* harmony import */ var _views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2__);




var profileController = /*#__PURE__*/function () {
  function profileController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, profileController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(profileController, [{
    key: "render",
    value: function render() {
      $('#swiper-profile').html(_views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  }]);

  return profileController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new profileController());

/***/ }),

/***/ "./src/js/controller/searchController.js":
/*!***********************************************!*\
  !*** ./src/js/controller/searchController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_search_search_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/search/search.html */ "./src/views/search/search.html");
/* harmony import */ var _views_search_search_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_search_search_html__WEBPACK_IMPORTED_MODULE_2__);




var searchController = /*#__PURE__*/function () {
  function searchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, searchController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(searchController, [{
    key: "render",
    value: function render() {
      $('#swiper-search').html(_views_search_search_html__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  }]);

  return searchController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new searchController());

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
/* harmony import */ var _controller_searchController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/searchController.js */ "./src/js/controller/searchController.js");
/* harmony import */ var _controller_profileController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/profileController.js */ "./src/js/controller/profileController.js");
/* harmony import */ var _controller_errorController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/errorController.js */ "./src/js/controller/errorController.js");







var Router = /*#__PURE__*/function () {
  function Router(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);

    this.mode = options.mode; // 路由配置

    this.routrs = {
      'position': _controller_positionController_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      'search': _controller_searchController_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      'profile': _controller_profileController_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{
    key: "go",
    value: function go(path) {
      this.mode === 'hash' ? location.hash = path : history.pushState({
        path: path
      }, '', '?' + path);
      this.loadView(path); // if (this.mode === 'hash') {  // hash 
      //   location.hash = path;
      // } else {  // history
      //   // console.log(path);
      //   history.pushState({ path: path }, '', '?' + path);
      // }
    }
  }, {
    key: "loadView",
    value: function loadView(path) {
      if (this.routrs[path]) {
        this.routrs[path].render();
      } else {
        // 404 逻辑
        _controller_errorController_js__WEBPACK_IMPORTED_MODULE_5__["default"].render();
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/views/error/errPage.html":
/*!**************************************!*\
  !*** ./src/views/error/errPage.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html lang=\"en\"><head>  <meta charset=\"UTF-8\">  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">  <title>Document</title></head><body>  <h2>404 Not Found</h2></body></html>"

/***/ }),

/***/ "./src/views/position/position-item.html":
/*!***********************************************!*\
  !*** ./src/views/position/position-item.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{each datalist}}<div class=\"item\" data-id=\"{{$value[\'positionId\']}}\">  <img src=\"http://www.lgstatic.com/{{$value[\'companyLogo\']}}\" alt=\"\">  <div class=\"desc\">    <h2>{{$value[\'companyName\']}}</h2>    <p class=\"pos\">      <span class=\"name\">        {{$value[\'positionName\']}}[{{$value[\'city\']}}]      </span>      <span class=\"salary\">        {{$value[\'salary\']}}      </span>    </p>    <p class=\"time\">      {{$value[\'createTime\']}}    </p>  </div></div>{{/each}}"

/***/ }),

/***/ "./src/views/position/position.html":
/*!******************************************!*\
  !*** ./src/views/position/position.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"position-wrapper\">  <div>    <div class=\"refersh\">下拉刷新</div>    <div class=\"custom\">      <span>10秒中定制职位</span>      <button>去登录</button>    </div>    <div class=\"position-list\">    </div>    <div class=\"more\">      加载更多    </div>  </div></div>"

/***/ }),

/***/ "./src/views/profile/profile.html":
/*!****************************************!*\
  !*** ./src/views/profile/profile.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>profile</h2>"

/***/ }),

/***/ "./src/views/search/search.html":
/*!**************************************!*\
  !*** ./src/views/search/search.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>search</h2>"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL2NvcmUvZGlzdC9jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC1kb3duL2Rpc3QvcHVsbC1kb3duLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC11cC9kaXN0L3B1bGwtdXAuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9lcnJvckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRyb2xsZXIvcG9zaXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9sbGVyL3Byb2ZpbGVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9sbGVyL3NlYXJjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vycm9yL2VyclBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb24taXRlbS5odG1sIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9maWxlL3Byb2ZpbGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL3NlYXJjaC5odG1sIl0sIm5hbWVzIjpbIk1PREUiLCJBcHAiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJtb2RlIiwiaW5pdEV2ZW50IiwiaW5pdFN3aXBlciIsInNlbGYiLCIkIiwib24iLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJpbmRleCIsIm15U3dpcGVyIiwic2xpZGVUbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmwiLCJsb2NhdGlvbiIsImhhc2giLCJyZXBsYWNlIiwiaGlzdG9yeSIsInN0YXRlIiwicGF0aCIsImdvIiwic2xpZGVUb1N3aXBlciIsInNldEFjdGl2ZSIsImhpZGUiLCJmaW5kIiwiU3dpcGVyIiwic2xpZGVDaGFuZ2UiLCJjdXIiLCJlcSIsImFjdGl2ZUluZGV4IiwiYXR0ciIsImVycm9yQ29udHJvbGxlciIsImh0bWwiLCJlcnJvclRwbCIsIkJTY3JvbGwiLCJ1c2UiLCJQdWxsRG93biIsIlB1bGx1cCIsIlBvc2l0aW9uQ29udHJvbGxlciIsInBhZ2VObyIsInBhZ2VTaXplIiwiZGF0YWxpc3QiLCJpc01vcmUiLCJjb25zb2xlIiwibG9nIiwicG9zaXRpb25JZCIsImhyZWYiLCJzaG93IiwiZ2V0IiwicmVzdWx0IiwibGVuZ3RoIiwiY29uY2F0IiwidGVtcGxhdGUiLCJyZW5kZXIiLCJpdGVtVHBsIiwicG9zaXRpb25UcGwiLCJnZXRMaXN0Iiwic2Nyb2xsIiwic2Nyb2xsWSIsInB1bGxEb3duUmVmcmVzaCIsInRocmVzaG9sZCIsInN0b3AiLCJjbGljayIsInB1bGxVcExvYWQiLCJmaW5pc2hQdWxsRG93biIsInJlZnJlc2giLCJ5IiwidGV4dCIsInNldFRpbWVvdXQiLCJmaW5pc2hQdWxsVXAiLCJwcm9maWxlQ29udHJvbGxlciIsInByb2ZpbGVUcGwiLCJzZWFyY2hDb250cm9sbGVyIiwic2VhcmNoVHBsIiwiZGF0YSIsIlByb21pc2UiLCJyZXNsb3ZlIiwicmVqZWN0IiwiYWpheCIsInR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnIiLCJwb3N0Iiwib3B0aW9ucyIsInJvdXRycyIsInBvc2l0b24iLCJzZWFyY2giLCJwcm9maWxlIiwicHVzaFN0YXRlIiwibG9hZFZpZXciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsaUJBQWlCLG1CQUFPLENBQUMsMEVBQXFCOzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGLFNBQVM7QUFDVCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxDQUFDOztBQUVELDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQjtBQUMzQixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDLHdDQUF3QztBQUN4QyxxQkFBcUI7QUFDckI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1DQUFtQztBQUN0RSxpQ0FBaUM7QUFDakMsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCLEVBQUU7QUFDcEU7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsNkJBQTZCLEVBQUU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxzRUFBTyxFQUFDO0FBQ007Ozs7Ozs7Ozs7Ozs7QUNuL0Q3QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RixTQUFTO0FBQ1QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzVNeEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7OztBQ3hGdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4dEJBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLE1BQWIsQyxDQUFzQjs7SUFFaEJDLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyx5REFBSixDQUFXO0FBQ3ZCQyxVQUFJLEVBQUVKO0FBRGlCLEtBQVgsQ0FBZDtBQUdBLFNBQUtLLFNBQUw7QUFDQSxTQUFLQyxVQUFMLEdBTFksQ0FNWjtBQUNEOzs7OzJCQUVNLENBRU4sQyxDQUVEOzs7O2dDQUNZO0FBQUE7O0FBQ1YsVUFBSUMsSUFBSSxHQUFHLElBQVgsQ0FEVSxDQUVWOztBQUNBQyxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUFHO0FBQ3RDRCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLFFBQVIsQ0FBaUIsUUFBakIsRUFBMkJDLFFBQTNCLEdBQXNDQyxXQUF0QyxDQUFrRCxRQUFsRDtBQUNBLFlBQUlDLEtBQUssR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxLQUFSLEVBQVo7QUFDQU4sWUFBSSxDQUFDTyxRQUFMLENBQWNDLE9BQWQsQ0FBc0JGLEtBQXRCLEVBQTZCLEdBQTdCLEVBQWtDLEtBQWxDO0FBQ0QsT0FKRCxFQUhVLENBU1Y7O0FBQ0FHLHNCQUFnQixDQUFDLE1BQUQsRUFBUyxZQUFNO0FBQzdCLFlBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsS0FBa0MsVUFBNUM7O0FBQ0EsWUFBSXBCLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQUVpQixhQUFHLEdBQUdJLE9BQU8sQ0FBQ0MsS0FBUixHQUFnQkQsT0FBTyxDQUFDQyxLQUFSLENBQWNDLElBQTlCLEdBQXFDLFVBQTNDO0FBQXVELFNBRnBELENBRzdCOzs7QUFDQWhCLFlBQUksQ0FBQ0wsTUFBTCxDQUFZc0IsRUFBWixDQUFlUCxHQUFmOztBQUNBLGFBQUksQ0FBQ1EsYUFBTCxDQUFtQlIsR0FBbkI7O0FBQ0EsYUFBSSxDQUFDUyxTQUFMLENBQWVULEdBQWY7O0FBQ0FULFNBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY21CLElBQWQ7QUFDRCxPQVJlLENBQWhCOztBQVdBLFVBQUkzQixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQmdCLHdCQUFnQixDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQ25DO0FBQ0EsY0FBSUcsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixDQUFYLENBRm1DLENBR25DO0FBQ0E7O0FBQ0EsZUFBSSxDQUFDSyxhQUFMLENBQW1CTixJQUFuQjs7QUFDQSxlQUFJLENBQUNPLFNBQUwsQ0FBZVAsSUFBZjtBQUNELFNBUGUsQ0FBaEI7QUFRRCxPQVRELE1BU087QUFDTDtBQUNBSCx3QkFBZ0IsQ0FBQyxVQUFELEVBQWEsWUFBTTtBQUNqQyxjQUFJQyxHQUFHLEdBQUdJLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxJQUF4QixDQURpQyxDQUNIOztBQUM5QmhCLGNBQUksQ0FBQ0wsTUFBTCxDQUFZc0IsRUFBWixDQUFlUCxHQUFmOztBQUNBLGVBQUksQ0FBQ1MsU0FBTCxDQUFlVCxHQUFmO0FBQ0QsU0FKZSxDQUFoQjtBQUtEO0FBQ0YsSyxDQUNEOzs7OzhCQUNVQSxHLEVBQUs7QUFDYjtBQUNBVCxPQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixJQUFWLHVCQUE4QlgsR0FBOUIsUUFBc0NQLFFBQXRDLENBQStDLFFBQS9DLEVBQXlEQyxRQUF6RCxHQUFvRUMsV0FBcEUsQ0FBZ0YsUUFBaEY7QUFDRCxLLENBRUQ7Ozs7aUNBQ2E7QUFDWCxVQUFJTCxJQUFJLEdBQUcsS0FBS0wsTUFBaEI7QUFDQSxXQUFLWSxRQUFMLEdBQWdCLElBQUllLE1BQUosQ0FBVyxtQkFBWCxFQUFnQztBQUM5QztBQUNBcEIsVUFBRSxFQUFFO0FBQ0ZxQixxQkFBVyxFQUFFLHVCQUFZO0FBQ3ZCLGdCQUFJQyxHQUFHLEdBQUd2QixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixJQUFWLENBQWUsSUFBZixFQUFxQkksRUFBckIsQ0FBd0IsS0FBS0MsV0FBN0IsQ0FBVjtBQUNBLGdCQUFJaEIsR0FBRyxHQUFHYyxHQUFHLENBQUNHLElBQUosQ0FBUyxVQUFULENBQVY7QUFDQTNCLGdCQUFJLENBQUNpQixFQUFMLENBQVFQLEdBQVI7QUFDRDtBQUxDO0FBRjBDLE9BQWhDLENBQWhCO0FBVUQsSyxDQUNEOzs7O2tDQUNjQSxHLEVBQUs7QUFDakIsVUFBSUosS0FBSyxHQUFHTCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixJQUFWLHVCQUE4QlgsR0FBOUIsUUFBc0NKLEtBQXRDLEVBQVo7QUFDQSxXQUFLQyxRQUFMLENBQWNDLE9BQWQsQ0FBc0JGLEtBQXRCLEVBQTZCLEdBQTdCLEVBQWtDLEtBQWxDO0FBQ0Q7Ozs7OztBQUlILElBQUlaLEdBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBOztJQUVNa0MsZTs7Ozs7Ozs2QkFDSztBQUNQM0IsT0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXNEIsSUFBWCxDQUFnQkMsZ0VBQWhCO0FBQ0Q7Ozs7OztBQUdZLG1FQUFJRixlQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Q0FDaUQ7O0NBQ0o7QUFHN0M7O0FBQ0FHLDJEQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0VBQVo7QUFDQUYsMkRBQU8sQ0FBQ0MsR0FBUixDQUFZRSw4REFBWjs7SUFFTUMsa0I7QUFFSixnQ0FBYztBQUFBOztBQUNaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FKWSxDQUtaOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBZCxDQVJZLENBUVM7O0FBRXJCLFNBQUt6QyxTQUFMO0FBQ0QsRyxDQUVEOzs7OztnQ0FDWTtBQUNWRyxPQUFDLENBQUMsT0FBRCxDQUFELENBQVdDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFDMUNzQyxlQUFPLENBQUNDLEdBQVIsQ0FBWXhDLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxZQUFJeUMsVUFBVSxHQUFHekMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEIsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQWhCLGdCQUFRLENBQUNnQyxJQUFULEdBQWdCLGtCQUFrQkQsVUFBbEM7QUFDRCxPQUpEO0FBS0QsSyxDQUdEOzs7Ozs7Ozs7OztBQUVFRix1QkFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBeEMsaUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzJDLElBQWQ7QUFDSWxDLG1CLHFDQUFpQyxLQUFLMEIsTSxxQkFBaUIsS0FBS0MsUTs7dUJBQzdDUSx1REFBRyxDQUFDbkMsR0FBRCxDOzs7QUFBbEJvQyxzQjtBQUNKLG9CQUFJQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsS0FBS1YsUUFBekIsRUFBbUMsS0FBS0UsTUFBTCxHQUFjLEtBQWQ7QUFDbkMscUJBQUtELFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjVSxNQUFkLENBQXFCRixNQUFyQixDQUFoQjtBQUNJakIsb0IsR0FBT29CLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMseUVBQWhCLEVBQXlCO0FBQUViLDBCQUFRLEVBQUUsS0FBS0E7QUFBakIsaUJBQXpCLEM7QUFDWHJDLGlCQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjRCLElBQXBCLENBQXlCQSxJQUF6QjtBQUNBNUIsaUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY21CLElBQWQ7Ozs7Ozs7Ozs7Ozs7OztRQUdGOzs7Ozs7Ozs7Ozs7QUFFRW9CLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXhDLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCNEIsSUFBdEIsQ0FBMkJ1QixvRUFBM0IsQ0FBWjtBQUNBbkQsaUJBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCNEIsSUFBdEIsQ0FBMkJ1QixvRUFBM0I7O3VCQUNNLEtBQUtDLE9BQUwsRTs7O0FBRU4scUJBQUtDLE1BQUwsR0FBYyxJQUFJdkIsMkRBQUosQ0FBWSxtQkFBWixFQUFpQztBQUM3Q3dCLHlCQUFPLEVBQUUsSUFEb0M7QUFFN0NDLGlDQUFlLEVBQUU7QUFDZkMsNkJBQVMsRUFBRSxFQURJO0FBQ0M7QUFDaEJDLHdCQUFJLEVBQUUsQ0FGUyxDQUVOOztBQUZNLG1CQUY0QjtBQU03Q0MsdUJBQUssRUFBRSxJQU5zQztBQU83Q0MsNEJBQVUsRUFBRSxJQVBpQyxDQU8zQjs7QUFQMkIsaUJBQWpDLENBQWQsQyxDQVNBOztBQUNBLHFCQUFLTixNQUFMLENBQVlwRCxFQUFaLENBQWUsYUFBZixtTEFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QiwrQkFBSSxDQUFDa0MsTUFBTCxHQUFjLENBQWQsQ0FENEIsQ0FDVjs7QUFDbEIsK0JBQUksQ0FBQ0UsUUFBTCxHQUFnQixFQUFoQjtBQUNBLCtCQUFJLENBQUNDLE1BQUwsR0FBYyxJQUFkO0FBSDRCO0FBQUEsaUNBSXRCLEtBQUksQ0FBQ2MsT0FBTCxFQUpzQjs7QUFBQTtBQUs1QiwrQkFBSSxDQUFDQyxNQUFMLENBQVlPLGNBQVo7O0FBQ0EsK0JBQUksQ0FBQ1AsTUFBTCxDQUFZUSxPQUFaOztBQU40QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOUIsSSxDQVNBOztBQUNBLHFCQUFLUixNQUFMLENBQVlwRCxFQUFaLENBQWUsUUFBZixFQUF5QixZQUFZO0FBQ25DLHNCQUFJLEtBQUs2RCxDQUFMLEdBQVMsRUFBYixFQUFpQjtBQUNmOUQscUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzJDLElBQWQ7QUFDRCxtQkFGRCxNQUVPO0FBQ0wzQyxxQkFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjbUIsSUFBZDtBQUNEO0FBQ0YsaUJBTkQsRSxDQVFBOztBQUNBLHFCQUFLa0MsTUFBTCxDQUFZcEQsRUFBWixDQUFlLFdBQWYsbUxBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUIsOEJBQUksQ0FBQyxLQUFJLENBQUNxQyxNQUFWLEVBQWtCO0FBQ2hCdEMsNkJBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVytELElBQVgsQ0FBZ0IsWUFBaEI7QUFDQUMsc0NBQVUsQ0FBQyxZQUFNO0FBQ2ZoRSwrQkFBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXbUIsSUFBWDs7QUFDQSxtQ0FBSSxDQUFDa0MsTUFBTCxDQUFZUSxPQUFaO0FBQ0QsNkJBSFMsRUFHUCxJQUhPLENBQVYsQ0FGZ0IsQ0FNaEI7QUFDRDs7QUFDRCwrQkFBSSxDQUFDMUIsTUFBTDtBQVQwQjtBQUFBLGlDQVVwQixLQUFJLENBQUNpQixPQUFMLEVBVm9COztBQUFBO0FBVzFCLCtCQUFJLENBQUNDLE1BQUwsQ0FBWVksWUFBWjs7QUFDQSwrQkFBSSxDQUFDWixNQUFMLENBQVlRLE9BQVo7O0FBWjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJXLG1FQUFJM0Isa0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7O0lBRU1nQyxpQjs7Ozs7Ozs2QkFDSztBQUNQbEUsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI0QixJQUFyQixDQUEwQnVDLGtFQUExQjtBQUNEOzs7Ozs7QUFHWSxtRUFBSUQsaUJBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7SUFFTUUsZ0I7Ozs7Ozs7NkJBQ0s7QUFDUHBFLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CNEIsSUFBcEIsQ0FBeUJ5QyxnRUFBekI7QUFDRDs7Ozs7O0FBR1ksbUVBQUlELGdCQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNeEIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ25DLEdBQUQsRUFBTTZELElBQU4sRUFBZTtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEN6RSxLQUFDLENBQUMwRSxJQUFGLENBQU87QUFDTGpFLFNBQUcsRUFBSEEsR0FESztBQUNDO0FBQ05rRSxVQUFJLEVBQUUsS0FGRDtBQUdMTCxVQUFJLEVBQUpBLElBSEs7QUFJTE0sYUFBTyxFQUFFLGlCQUFDL0IsTUFBRCxFQUFZO0FBQ25CMkIsZUFBTyxDQUFDM0IsTUFBRCxDQUFQO0FBQ0QsT0FOSTtBQU9MZ0MsV0FBSyxFQUFFLGVBQUNDLEdBQUQsRUFBUztBQUNkTCxjQUFNLENBQUNLLEdBQUQsQ0FBTjtBQUNEO0FBVEksS0FBUDtBQVdELEdBWk0sQ0FBUDtBQWFELENBZEQ7O0FBZ0JBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FFbEIsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXBGLE07QUFFSixrQkFBWXFGLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS3BGLElBQUwsR0FBWW9GLE9BQU8sQ0FBQ3BGLElBQXBCLENBRG1CLENBR25COztBQUNBLFNBQUtxRixNQUFMLEdBQWM7QUFDWixrQkFBWUMseUVBREE7QUFFWixnQkFBVUMsdUVBRkU7QUFHWixpQkFBV0Msd0VBQU9BO0FBSE4sS0FBZDtBQUtEOzs7O3VCQUVFckUsSSxFQUFNO0FBQ1AsV0FBS25CLElBQUwsS0FBYyxNQUFkLEdBQXVCYyxRQUFRLENBQUNDLElBQVQsR0FBZ0JJLElBQXZDLEdBQThDRixPQUFPLENBQUN3RSxTQUFSLENBQWtCO0FBQUV0RSxZQUFJLEVBQUVBO0FBQVIsT0FBbEIsRUFBa0MsRUFBbEMsRUFBc0MsTUFBTUEsSUFBNUMsQ0FBOUM7QUFDQSxXQUFLdUUsUUFBTCxDQUFjdkUsSUFBZCxFQUZPLENBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFFUUEsSSxFQUFNO0FBQ2IsVUFBSSxLQUFLa0UsTUFBTCxDQUFZbEUsSUFBWixDQUFKLEVBQXVCO0FBQ3JCLGFBQUtrRSxNQUFMLENBQVlsRSxJQUFaLEVBQWtCa0MsTUFBbEI7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBNEIsOEVBQUssQ0FBQzVCLE1BQU47QUFDRDtBQUNGOzs7Ozs7QUFHWXRELHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkNBLDRPOzs7Ozs7Ozs7OztBQ0FBLG9CQUFvQixlQUFlLGdDQUFnQyx3QkFBd0IsMENBQTBDLHlCQUF5Qiw0Q0FBNEMseUJBQXlCLCtEQUErRCwwQkFBMEIsR0FBRyxrQkFBa0IscURBQXFELG9CQUFvQixtREFBbUQsd0JBQXdCLHdCQUF3QixPQUFPLEM7Ozs7Ozs7Ozs7O0FDQXBnQiwwUjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyohXG4gKiBiZXR0ZXItc2Nyb2xsIC8gY29yZVxuICogKGMpIDIwMTYtMjAyMCB1c3RiaHVhbmd5aVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltCU2Nyb2xsIHdhcm5dOiBcIiArIG1zZyk7XHJcbn1cblxuLy8gc3NyIHN1cHBvcnRcclxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG52YXIgdWEgPSBpbkJyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG52YXIgaXNXZUNoYXREZXZUb29scyA9IHVhICYmIC93ZWNoYXRkZXZ0b29scy8udGVzdCh1YSk7XHJcbnZhciBpc0FuZHJvaWQgPSB1YSAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPiAwO1xuXG5mdW5jdGlvbiBnZXROb3coKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgJiYgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZ1xyXG4gICAgICAgID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgICAgICA6ICtuZXcgRGF0ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc291cmNlID0gcmVzdFtpXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBpc1VuZGVmKHYpIHtcclxuICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbDtcclxufVxuXG52YXIgZWxlbWVudFN0eWxlID0gKGluQnJvd3NlciAmJlxyXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUpO1xyXG52YXIgdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHRyYW5zZm9ybU5hbWVzID0ge1xyXG4gICAgICAgIHdlYmtpdDogJ3dlYmtpdFRyYW5zZm9ybScsXHJcbiAgICAgICAgTW96OiAnTW96VHJhbnNmb3JtJyxcclxuICAgICAgICBPOiAnT1RyYW5zZm9ybScsXHJcbiAgICAgICAgbXM6ICdtc1RyYW5zZm9ybScsXHJcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybU5hbWVzKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRTdHlsZVt0cmFuc2Zvcm1OYW1lc1trZXldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KSgpO1xyXG5mdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xyXG4gICAgaWYgKHZlbmRvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodmVuZG9yID09PSAnc3RhbmRhcmQnKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlID09PSAndHJhbnNpdGlvbkVuZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEVsZW1lbnQoZWwpIHtcclxuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgICA6IGVsKTtcclxufVxyXG5mdW5jdGlvbiBhZGRFdmVudChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHtcclxuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcclxuICAgICAgICBjYXB0dXJlOiAhIWNhcHR1cmVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwge1xyXG4gICAgICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XHJcbiAgICB2YXIgbGVmdCA9IDA7XHJcbiAgICB2YXIgdG9wID0gMDtcclxuICAgIHdoaWxlIChlbCkge1xyXG4gICAgICAgIGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3AgLT0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgIHRvcDogdG9wXHJcbiAgICB9O1xyXG59XHJcbnZhciBjc3NWZW5kb3IgPSB2ZW5kb3IgJiYgdmVuZG9yICE9PSAnc3RhbmRhcmQnID8gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCkgKyAnLScgOiAnJztcclxudmFyIHRyYW5zZm9ybSA9IHByZWZpeFN0eWxlKCd0cmFuc2Zvcm0nKTtcclxudmFyIHRyYW5zaXRpb24gPSBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpO1xyXG52YXIgaGFzUGVyc3BlY3RpdmUgPSBpbkJyb3dzZXIgJiYgcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gZWxlbWVudFN0eWxlO1xyXG4vLyBmaXggaXNzdWUgIzM2MVxyXG52YXIgaGFzVG91Y2ggPSBpbkJyb3dzZXIgJiYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBpc1dlQ2hhdERldlRvb2xzKTtcclxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgdHJhbnNpdGlvbiBpbiBlbGVtZW50U3R5bGU7XHJcbnZhciBzdHlsZSA9IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkR1cmF0aW9uJyksXHJcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpLFxyXG4gICAgdHJhbnNpdGlvbkVuZDogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25FbmQnKVxyXG59O1xyXG52YXIgZXZlbnRUeXBlTWFwID0ge1xyXG4gICAgdG91Y2hzdGFydDogMSxcclxuICAgIHRvdWNobW92ZTogMSxcclxuICAgIHRvdWNoZW5kOiAxLFxyXG4gICAgbW91c2Vkb3duOiAyLFxyXG4gICAgbW91c2Vtb3ZlOiAyLFxyXG4gICAgbW91c2V1cDogMlxyXG59O1xyXG5mdW5jdGlvbiBnZXRSZWN0KGVsKSB7XHJcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IGVsLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWwub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlbCwgZXhjZXB0aW9ucykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBleGNlcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGV4Y2VwdGlvbnNbaV0udGVzdChlbFtpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciB0YWdFeGNlcHRpb25GbiA9IHByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm47XHJcbmZ1bmN0aW9uIHRhcChlLCBldmVudE5hbWUpIHtcclxuICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICBldi5wYWdlWCA9IGUucGFnZVg7XHJcbiAgICBldi5wYWdlWSA9IGUucGFnZVk7XHJcbiAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcclxufVxyXG5mdW5jdGlvbiBjbGljayhlLCBldmVudCkge1xyXG4gICAgaWYgKGV2ZW50ID09PSB2b2lkIDApIHsgZXZlbnQgPSAnY2xpY2snOyB9XHJcbiAgICB2YXIgZXZlbnRTb3VyY2U7XHJcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcpIHtcclxuICAgICAgICBldmVudFNvdXJjZSA9IGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XHJcbiAgICAgICAgZXZlbnRTb3VyY2UgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgfVxyXG4gICAgdmFyIHBvc1NyYyA9IHt9O1xyXG4gICAgaWYgKGV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgcG9zU3JjLnNjcmVlblggPSBldmVudFNvdXJjZS5zY3JlZW5YIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLnNjcmVlblkgPSBldmVudFNvdXJjZS5zY3JlZW5ZIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLmNsaWVudFggPSBldmVudFNvdXJjZS5jbGllbnRYIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLmNsaWVudFkgPSBldmVudFNvdXJjZS5jbGllbnRZIHx8IDA7XHJcbiAgICB9XHJcbiAgICB2YXIgZXY7XHJcbiAgICB2YXIgYnViYmxlcyA9IHRydWU7XHJcbiAgICB2YXIgY2FuY2VsYWJsZSA9IHRydWU7XHJcbiAgICBpZiAodHlwZW9mIE1vdXNlRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZXYgPSBuZXcgTW91c2VFdmVudChldmVudCwgZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBjYW5jZWxhYmxlXHJcbiAgICAgICAgICAgIH0sIHBvc1NyYykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudCgpIHtcclxuICAgICAgICBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgICAgIGV2LmluaXRFdmVudChldmVudCwgYnViYmxlcywgY2FuY2VsYWJsZSk7XHJcbiAgICAgICAgZXh0ZW5kKGV2LCBwb3NTcmMpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yd2FyZGVkVG91Y2hFdmVudCBzZXQgdG8gdHJ1ZSBpbiBjYXNlIG9mIHRoZSBjb25mbGljdCB3aXRoIGZhc3RjbGlja1xyXG4gICAgZXYuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XHJcbiAgICBldi5fY29uc3RydWN0ZWQgPSB0cnVlO1xyXG4gICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XHJcbn1cclxuZnVuY3Rpb24gZGJsY2xpY2soZSkge1xyXG4gICAgY2xpY2soZSwgJ2RibGNsaWNrJyk7XHJcbn1cblxudmFyIGVhc2UgPSB7XHJcbiAgICAvLyBlYXNlT3V0UXVpbnRcclxuICAgIHN3aXBlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSArIC0tdCAqIHQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFyZFxyXG4gICAgc3dpcGVCb3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ICogKDIgLSB0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJ0XHJcbiAgICBib3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwIC8gNjA7XHJcbnZhciB3aW5kb3dDb21wYXQgPSBpbkJyb3dzZXIgJiYgd2luZG93O1xyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAvLyBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHNldFRpbWVvdXRcclxuICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAoY2FsbGJhY2suaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCkgLyAyKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxyXG4gICAgICAgIH0pO1xyXG59KSgpO1xyXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgICB9KTtcclxufSkoKTtcblxudmFyIG5vb3AkMSA9IGZ1bmN0aW9uICh2YWwpIHsgfTtcclxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IG5vb3AkMSxcclxuICAgIHNldDogbm9vcCQxXHJcbn07XHJcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xyXG4gICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBvYmogPSBvYmpba2V5c1tpXV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFvYmopXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBsYXN0S2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0eXBlb2Ygb2JqW2xhc3RLZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtsYXN0S2V5XS5hcHBseShvYmosIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBvYmpbbGFzdEtleV07XHJcbiAgICB9XHJcbn07XHJcbnZhciBzZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcclxuICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgICB2YXIgdGVtcDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0ga2V5c1tpXTtcclxuICAgICAgICBpZiAoIW9ialt0ZW1wXSlcclxuICAgICAgICAgICAgb2JqW3RlbXBdID0ge307XHJcbiAgICAgICAgb2JqID0gb2JqW3RlbXBdO1xyXG4gICAgfVxyXG4gICAgb2JqW2tleXMucG9wKCldID0gdmFsdWU7XHJcbn07XHJcbmZ1bmN0aW9uIHByb3BlcnRpZXNQcm94eSh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XHJcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5KHRoaXMsIHNvdXJjZUtleSk7XHJcbiAgICB9O1xyXG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyKHZhbCkge1xyXG4gICAgICAgIHNldFByb3BlcnR5KHRoaXMsIHNvdXJjZUtleSwgdmFsKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XHJcbn1cblxudmFyIEV2ZW50RW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihuYW1lcykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5ldmVudFR5cGVzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUobmFtZXMpO1xyXG4gICAgfVxyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0eXBlLCBmbiwgY29udGV4dCkge1xyXG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHRoaXM7IH1cclxuICAgICAgICB0aGlzLmhhc1R5cGUodHlwZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1t0eXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKFtmbiwgY29udGV4dF0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBmbiwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gdGhpczsgfVxyXG4gICAgICAgIHRoaXMuaGFzVHlwZSh0eXBlKTtcclxuICAgICAgICB2YXIgbWFnaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMub2ZmKHR5cGUsIG1hZ2ljKTtcclxuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWdpYy5mbiA9IGZuO1xyXG4gICAgICAgIHRoaXMub24odHlwZSwgbWFnaWMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0eXBlICYmICFmbikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xyXG4gICAgICAgICAgICBpZiAoIWV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gZXZlbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudHNbY291bnRdWzBdID09PSBmbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChldmVudHNbY291bnRdWzBdICYmIGV2ZW50c1tjb3VudF1bMF0uZm4gPT09IGZuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoY291bnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNUeXBlKHR5cGUpO1xyXG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcclxuICAgICAgICBpZiAoIWV2ZW50cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW4gPSBldmVudHMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBldmVudHNDb3B5ID0gZXZlbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgdmFyIHJldDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBldmVudF8xID0gZXZlbnRzQ29weVtpXTtcclxuICAgICAgICAgICAgdmFyIGZuID0gZXZlbnRfMVswXSwgY29udGV4dCA9IGV2ZW50XzFbMV07XHJcbiAgICAgICAgICAgIGlmIChmbikge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlZ2lzdGVyVHlwZSA9IGZ1bmN0aW9uIChuYW1lcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5ldmVudFR5cGVzW3R5cGVdID0gdHlwZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZXMgPSB7fTtcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmhhc1R5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciB0eXBlcyA9IHRoaXMuZXZlbnRUeXBlcztcclxuICAgICAgICB2YXIgaXNUeXBlID0gdHlwZXNbdHlwZV0gPT09IHR5cGU7XHJcbiAgICAgICAgaWYgKCFpc1R5cGUpIHtcclxuICAgICAgICAgICAgd2FybihcIkV2ZW50RW1pdHRlciBoYXMgdXNlZCB1bmtub3duIGV2ZW50IHR5cGU6IFxcXCJcIiArIHR5cGUgKyBcIlxcXCIsIHNob3VsZCBiZSBvbmVvZiBbXCIgK1xyXG4gICAgICAgICAgICAgICAgKFwiXCIgKyBPYmplY3Qua2V5cyh0eXBlcykubWFwKGZ1bmN0aW9uIChfKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShfKTsgfSkpICtcclxuICAgICAgICAgICAgICAgIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcclxufSgpKTtcclxudmFyIEV2ZW50UmVnaXN0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudFJlZ2lzdGVyKHdyYXBwZXIsIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XHJcbiAgICAgICAgdGhpcy5hZGRET01FdmVudHMoKTtcclxuICAgIH1cclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVET01FdmVudHMoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmFkZERPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZURPTUV2ZW50cyhhZGRFdmVudCk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUucmVtb3ZlRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKHJlbW92ZUV2ZW50KTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5oYW5kbGVET01FdmVudHMgPSBmdW5jdGlvbiAoZXZlbnRPcGVyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy53cmFwcGVyO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50T3BlcmF0aW9uKHdyYXBwZXIsIGV2ZW50Lm5hbWUsIF90aGlzLCAhIWV2ZW50LmNhcHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZS50eXBlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLnNvbWUoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5uYW1lID09PSBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50UmVnaXN0ZXI7XHJcbn0oKSk7XG5cbnZhciBPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkID0gNTtcclxuICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPSBcIlwiIC8qIE5vbmUgKi87XHJcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGJsY2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhcCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYm91bmNlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgbGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm91bmNlVGltZSA9IDgwMDtcclxuICAgICAgICB0aGlzLm1vbWVudHVtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vbWVudHVtTGltaXRUaW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW1MaW1pdERpc3RhbmNlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zd2lwZVRpbWUgPSAyNTAwO1xyXG4gICAgICAgIHRoaXMuc3dpcGVCb3VuY2VUaW1lID0gNTAwO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMC4wMDE1O1xyXG4gICAgICAgIHRoaXMuZmxpY2tMaW1pdFRpbWUgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5mbGlja0xpbWl0RGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5yZXNpemVQb2xsaW5nID0gNjA7XHJcbiAgICAgICAgdGhpcy5wcm9iZVR5cGUgPSAwIC8qIERlZmF1bHQgKi87XHJcbiAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUfEFVRElPKSQvXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRhZ0V4Y2VwdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogL15URVhUQVJFQSQvXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkhXQ29tcG9zaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iaW5kVG9XcmFwcGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlTW91c2UgPSBoYXNUb3VjaDtcclxuICAgICAgICB0aGlzLmRpc2FibGVUb3VjaCA9ICFoYXNUb3VjaDtcclxuICAgICAgICB0aGlzLmF1dG9CbHVyID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIE9wdGlvbnMucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT3B0aW9ucy5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVogPVxyXG4gICAgICAgICAgICB0aGlzLkhXQ29tcG9zaXRpbmcgJiYgaGFzUGVyc3BlY3RpdmUgPyAnIHRyYW5zbGF0ZVooMCknIDogJyc7XHJcbiAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uID0gdGhpcy51c2VUcmFuc2l0aW9uICYmIGhhc1RyYW5zaXRpb247XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCA9ICF0aGlzLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICB0aGlzLnJlc29sdmVCb3VuY2UoKTtcclxuICAgICAgICAvLyBJZiB5b3Ugd2FudCBldmVudFBhc3N0aHJvdWdoIEkgaGF2ZSB0byBsb2NrIG9uZSBvZiB0aGUgYXhlc1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gXCJob3Jpem9udGFsXCIgLyogSG9yaXpvbnRhbCAqL1xyXG4gICAgICAgICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNjcm9sbFg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID1cclxuICAgICAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBcInZlcnRpY2FsXCIgLyogVmVydGljYWwgKi8gPyBmYWxzZSA6IHRoaXMuc2Nyb2xsWTtcclxuICAgICAgICAvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gdGhpcy5mcmVlU2Nyb2xsICYmICF0aGlzLmV2ZW50UGFzc3Rocm91Z2g7XHJcbiAgICAgICAgLy8gZm9yY2UgdHJ1ZSB3aGVuIGZyZWVTY3JvbGwgaXMgdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IHRoaXMuZnJlZVNjcm9sbCA/IHRydWUgOiB0aGlzLnNjcm9sbFg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gdGhpcy5mcmVlU2Nyb2xsID8gdHJ1ZSA6IHRoaXMuc2Nyb2xsWTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSB0aGlzLmV2ZW50UGFzc3Rocm91Z2hcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9wdGlvbnMucHJvdG90eXBlLnJlc29sdmVCb3VuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgICAgIHZhciBib3VuY2UgPSB0aGlzLmJvdW5jZTtcclxuICAgICAgICBpZiAoYm91bmNlID09PSBmYWxzZSB8fCBib3VuY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2UgPSBtYWtlTWFwKGRpcmVjdGlvbnMsIGJvdW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBPcHRpb25zO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBtYWtlTWFwKGtleXMsIHZhbCkge1xyXG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7IHZhbCA9IHRydWU7IH1cclxuICAgIHZhciByZXQgPSB7fTtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0W2tleV0gPSB2YWw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn1cblxudmFyIEFjdGlvbnNIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWN0aW9uc0hhbmRsZXIod3JhcHBlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdiZWZvcmVTdGFydCcsXHJcbiAgICAgICAgICAgICdzdGFydCcsXHJcbiAgICAgICAgICAgICdtb3ZlJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdjbGljaydcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLmhhbmRsZURPTUV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmhhbmRsZURPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMsIGJpbmRUb1dyYXBwZXIgPSBfYS5iaW5kVG9XcmFwcGVyLCBkaXNhYmxlTW91c2UgPSBfYS5kaXNhYmxlTW91c2UsIGRpc2FibGVUb3VjaCA9IF9hLmRpc2FibGVUb3VjaCwgY2xpY2sgPSBfYS5jbGljaztcclxuICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMud3JhcHBlcjtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gYmluZFRvV3JhcHBlciA/IHdyYXBwZXIgOiB3aW5kb3c7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJFdmVudHMgPSBbXTtcclxuICAgICAgICB2YXIgdGFyZ2V0RXZlbnRzID0gW107XHJcbiAgICAgICAgdmFyIHNob3VsZFJlZ2lzdGVyVG91Y2ggPSBoYXNUb3VjaCAmJiAhZGlzYWJsZVRvdWNoO1xyXG4gICAgICAgIHZhciBzaG91bGRSZWdpc3Rlck1vdXNlID0gIWRpc2FibGVNb3VzZTtcclxuICAgICAgICBpZiAoY2xpY2spIHtcclxuICAgICAgICAgICAgd3JhcHBlckV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmNsaWNrLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkUmVnaXN0ZXJUb3VjaCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5zdGFydC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2htb3ZlJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMubW92ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaGNhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkUmVnaXN0ZXJNb3VzZSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlZG93bicsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnN0YXJ0LmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5tb3ZlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNldXAnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5lbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cmFwcGVyRXZlbnRSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHdyYXBwZXIsIHdyYXBwZXJFdmVudHMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RXZlbnRSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHRhcmdldCwgdGFyZ2V0RXZlbnRzKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuYmVmb3JlSGFuZGxlciA9IGZ1bmN0aW9uIChlLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLCBwcmV2ZW50RGVmYXVsdCA9IF9hLnByZXZlbnREZWZhdWx0LCBzdG9wUHJvcGFnYXRpb24gPSBfYS5zdG9wUHJvcGFnYXRpb24sIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0gX2EucHJldmVudERlZmF1bHRFeGNlcHRpb247XHJcbiAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0Q29uZGl0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJldmVudERlZmF1bHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgcHJldmVudERlZmF1bHRFeGNlcHRpb24pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZXZlbnREZWZhdWx0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0Q29uZGl0aW9uc1t0eXBlXSgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuc2V0SW5pdGlhdGVkID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0eXBlO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIF9ldmVudFR5cGUgPSBldmVudFR5cGVNYXBbZS50eXBlXTtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWF0ZWQgJiYgdGhpcy5pbml0aWF0ZWQgIT09IF9ldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEluaXRpYXRlZChfZXZlbnRUeXBlKTtcclxuICAgICAgICAvLyBpZiB0ZXh0YXJlYSBvciBvdGhlciBodG1sIHRhZ3MgaW4gb3B0aW9ucy50YWdFeGNlcHRpb24gaXMgbWFuaXB1bGF0ZWRcclxuICAgICAgICAvLyBkbyBub3QgbWFrZSBicyBzY3JvbGxcclxuICAgICAgICBpZiAodGFnRXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy50YWdFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5pdGlhdGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm8gbW91c2UgbGVmdCBidXR0b25cclxuICAgICAgICBpZiAoX2V2ZW50VHlwZSA9PT0gMiAvKiBNb3VzZSAqLyAmJiBlLmJ1dHRvbiAhPT0gMCAvKiBMZWZ0ICovKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlU3RhcnQsIGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iZWZvcmVIYW5kbGVyKGUsICdzdGFydCcpO1xyXG4gICAgICAgIHZhciBwb2ludCA9IChlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB0aGlzLnBvaW50WCA9IHBvaW50LnBhZ2VYO1xyXG4gICAgICAgIHRoaXMucG9pbnRZID0gcG9pbnQucGFnZVk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCwgZSk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChldmVudFR5cGVNYXBbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ21vdmUnKTtcclxuICAgICAgICB2YXIgcG9pbnQgPSAoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XHJcbiAgICAgICAgdmFyIGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5wb2ludFg7XHJcbiAgICAgICAgdmFyIGRlbHRhWSA9IHBvaW50LnBhZ2VZIC0gdGhpcy5wb2ludFk7XHJcbiAgICAgICAgdGhpcy5wb2ludFggPSBwb2ludC5wYWdlWDtcclxuICAgICAgICB0aGlzLnBvaW50WSA9IHBvaW50LnBhZ2VZO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIHtcclxuICAgICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXHJcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxyXG4gICAgICAgICAgICBlOiBlXHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhdXRvIGVuZCB3aGVuIG91dCBvZiB3cmFwcGVyXHJcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fFxyXG4gICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHxcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICB2YXIgcFggPSB0aGlzLnBvaW50WCAtIHNjcm9sbExlZnQ7XHJcbiAgICAgICAgdmFyIHBZID0gdGhpcy5wb2ludFkgLSBzY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHBYID5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC1cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgcFggPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIHBZIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSB8fFxyXG4gICAgICAgICAgICBwWSA+XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlTWFwW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWF0ZWQoKTtcclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ2VuZCcpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuY2xpY2ssIGUpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlckV2ZW50UmVnaXN0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RXZlbnRSZWdpc3Rlci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFjdGlvbnNIYW5kbGVyO1xyXG59KCkpO1xuXG52YXIgdHJhbnNsYXRlck1ldGFEYXRhID0ge1xyXG4gICAgeDogWyd0cmFuc2xhdGVYJywgJ3B4J10sXHJcbiAgICB5OiBbJ3RyYW5zbGF0ZVknLCAncHgnXVxyXG59O1xyXG52YXIgVHJhbnNsYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZXIoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IGNvbnRlbnQuc3R5bGU7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoWydiZWZvcmVUcmFuc2xhdGUnLCAndHJhbnNsYXRlJ10pO1xyXG4gICAgfVxyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3NzU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRlbnQsIG51bGwpO1xyXG4gICAgICAgIHZhciBtYXRyaXggPSBjc3NTdHlsZVtzdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIHggPSArKG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdKTtcclxuICAgICAgICB2YXIgeSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFRyYW5zbGF0ZXIucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHZhciB0cmFuc2Zvcm1TdHlsZSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVyTWV0YURhdGFba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1Gbk5hbWUgPSB0cmFuc2xhdGVyTWV0YURhdGFba2V5XVswXTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUZuTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuQXJnVW5pdCA9IHRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuQXJnID0gcG9pbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlLnB1c2godHJhbnNmb3JtRm5OYW1lICsgXCIoXCIgKyB0cmFuc2Zvcm1GbkFyZyArIHRyYW5zZm9ybUZuQXJnVW5pdCArIFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlVHJhbnNsYXRlLCB0cmFuc2Zvcm1TdHlsZSwgcG9pbnQpO1xyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNmb3JtXSA9IHRyYW5zZm9ybVN0eWxlLmpvaW4oJyAnKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRyYW5zbGF0ZSwgcG9pbnQpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zbGF0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zbGF0ZXI7XHJcbn0oKSk7XG5cbnZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZShjb250ZW50LCB0cmFuc2xhdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZXIgPSB0cmFuc2xhdGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnbW92ZScsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnYmVmb3JlRm9yY2VTdG9wJyxcclxuICAgICAgICAgICAgJ2ZvcmNlU3RvcCcsXHJcbiAgICAgICAgICAgICd0aW1lJyxcclxuICAgICAgICAgICAgJ3RpbWVGdW5jdGlvbidcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnN0eWxlID0gY29udGVudC5zdHlsZTtcclxuICAgIH1cclxuICAgIEJhc2UucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChlbmRQb2ludCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlci50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgfTtcclxuICAgIEJhc2UucHJvdG90eXBlLnNldFBlbmRpbmcgPSBmdW5jdGlvbiAocGVuZGluZykge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHBlbmRpbmc7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuc2V0Rm9yY2VTdG9wcGVkID0gZnVuY3Rpb24gKGZvcmNlU3RvcHBlZCkge1xyXG4gICAgICAgIHRoaXMuZm9yY2VTdG9wcGVkID0gZm9yY2VTdG9wcGVkO1xyXG4gICAgfTtcclxuICAgIEJhc2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJhc2U7XHJcbn0oKSk7XG5cbnZhciBUcmFuc2l0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRyYW5zaXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnN0YXJ0UHJvYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcHJvYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBfdGhpcy50cmFuc2xhdGVyLmdldENvbXB1dGVkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIHBvcyk7XHJcbiAgICAgICAgICAgIC8vIGV4Y3V0ZSB3aGVuIHRyYW5zaXRpb24gZW5kc1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocHJvYmUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9iZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvblRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICB0aGlzLnN0eWxlW3N0eWxlLnRyYW5zaXRpb25EdXJhdGlvbl0gPSB0aW1lICsgJ21zJztcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRpbWUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcclxuICAgICAgICB0aGlzLnN0eWxlW3N0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy50aW1lRnVuY3Rpb24sIGVhc2luZyk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRQZW5kaW5nKHRpbWUgPiAwICYmIChzdGFydFBvaW50LnggIT09IGVuZFBvaW50LnggfHwgc3RhcnRQb2ludC55ICE9PSBlbmRQb2ludC55KSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nRm4pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUodGltZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgICAgIGlmICh0aW1lICYmIHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IDMgLyogUmVhbHRpbWUgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFByb2JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHdlIGNoYW5nZSBjb250ZW50J3MgdHJhbnNmb3JtWSBpbiBhIHRpY2tcclxuICAgICAgICAvLyBzdWNoIGFzOiAwIC0+IDUwcHggLT4gMFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb25lbmQgd2lsbCBub3QgYmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgLy8gc28gd2UgZm9yY2V1cGRhdGUgYnkgcmVmbG93XHJcbiAgICAgICAgaWYgKCF0aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmxvdyA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gZGlzcGF0Y2ggbW92ZSBhbmQgZW5kIHdoZW4gc2xpZW50XHJcbiAgICAgICAgaWYgKCF0aW1lICYmICFpc1NsaWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGVuZFBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGlsbCBpbiB0cmFuc2l0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy50cmFuc2xhdGVyLmdldENvbXB1dGVkUG9zaXRpb24oKSwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb3JjZVN0b3BwZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUZvcmNlU3RvcCwgeyB4OiB4LCB5OiB5IH0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsIHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zaXRpb247XHJcbn0oQmFzZSkpO1xuXG52YXIgQW5pbWF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFuaW1hdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuLCBpc1NsaWVudCkge1xyXG4gICAgICAgIC8vIHRpbWUgaXMgMFxyXG4gICAgICAgIGlmICghdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGNoYW5nZSBjb250ZW50J3MgdHJhbnNmb3JtWSBpbiBhIHRpY2tcclxuICAgICAgICAgICAgLy8gc3VjaCBhczogMCAtPiA1MHB4IC0+IDBcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbmVuZCB3aWxsIG5vdCBiZSB0cmlnZ2VyZWRcclxuICAgICAgICAgICAgLy8gc28gd2UgZm9yY2V1cGRhdGUgYnkgcmVmbG93XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmxvdyA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZGlzcGF0Y2ggbW92ZSBhbmQgZW5kIHdoZW4gc2xpZW50XHJcbiAgICAgICAgICAgIGlmIChpc1NsaWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbik7XHJcbiAgICB9O1xyXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCBkdXJhdGlvbiwgZWFzaW5nRm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBnZXROb3coKTtcclxuICAgICAgICB2YXIgZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcclxuICAgICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IGdldE5vdygpO1xyXG4gICAgICAgICAgICAvLyBqcyBhbmltYXRpb24gZW5kXHJcbiAgICAgICAgICAgIGlmIChub3cgPj0gZGVzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vdyA9IChub3cgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XHJcbiAgICAgICAgICAgIHZhciBlYXNpbmcgPSBlYXNpbmdGbihub3cpO1xyXG4gICAgICAgICAgICB2YXIgbmV3UG9pbnQgPSB7fTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW5kUG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBzdGFydFBvaW50W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSBlbmRQb2ludFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9pbnRba2V5XSA9IChlbmRWYWx1ZSAtIHN0YXJ0VmFsdWUpICogZWFzaW5nICsgc3RhcnRWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zbGF0ZShuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IDMgLyogUmVhbHRpbWUgKi8pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UGVuZGluZyh0cnVlKTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICB9O1xyXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0aWxsIGluIHJlcXVlc3RGcmFtZUFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvcmNlU3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRm9yY2VTdG9wLCBwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsIHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBbmltYXRpb247XHJcbn0oQmFzZSkpO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRlcihlbGVtZW50LCB0cmFuc2xhdGVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgdXNlVHJhbnNpdGlvbiA9IG9wdGlvbnMudXNlVHJhbnNpdGlvbjtcclxuICAgIHZhciBhbmltYXRlck9wdGlvbnMgPSB7fTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbmltYXRlck9wdGlvbnMsICdwcm9iZVR5cGUnLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5wcm9iZVR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodXNlVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNpdGlvbihlbGVtZW50LCB0cmFuc2xhdGVyLCBhbmltYXRlck9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oZWxlbWVudCwgdHJhbnNsYXRlciwgYW5pbWF0ZXJPcHRpb25zKTtcclxuICAgIH1cclxufVxuXG52YXIgQmVoYXZpb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCZWhhdmlvcih3cmFwcGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFsnbW9tZW50dW0nLCAnZW5kJ10pO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMud3JhcHBlci5jaGlsZHJlblswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMCAvKiBEZWZhdWx0ICovO1xyXG4gICAgICAgIHRoaXMubW92aW5nRGlyZWN0aW9uID0gMCAvKiBEZWZhdWx0ICovO1xyXG4gICAgICAgIHRoaXMuZGlzdCA9IDA7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSA9IHRoaXMuaGFzU2Nyb2xsID8gZGVsdGEgOiAwO1xyXG4gICAgICAgIHRoaXMubW92aW5nRGlyZWN0aW9uID1cclxuICAgICAgICAgICAgZGVsdGEgPiAwXHJcbiAgICAgICAgICAgICAgICA/IC0xIC8qIE5lZ2F0aXZlICovXHJcbiAgICAgICAgICAgICAgICA6IGRlbHRhIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gMSAvKiBQb3NpdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIDogMCAvKiBEZWZhdWx0ICovO1xyXG4gICAgICAgIHZhciBuZXdQb3MgPSB0aGlzLmN1cnJlbnRQb3MgKyBkZWx0YTtcclxuICAgICAgICAvLyBTbG93IGRvd24gb3Igc3RvcCBpZiBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKG5ld1BvcyA+IHRoaXMubWluU2Nyb2xsUG9zIHx8IG5ld1BvcyA8IHRoaXMubWF4U2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgIGlmICgobmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMF0pIHx8XHJcbiAgICAgICAgICAgICAgICAobmV3UG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSB0aGlzLmN1cnJlbnRQb3MgKyBkZWx0YSAvIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BvcyA+IHRoaXMubWluU2Nyb2xsUG9zID8gdGhpcy5taW5TY3JvbGxQb3MgOiB0aGlzLm1heFNjcm9sbFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIgbW9tZW50dW1JbmZvID0ge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGFic0Rpc3QgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRQb3MgLSB0aGlzLnN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb21lbnR1bSAmJlxyXG4gICAgICAgICAgICBkdXJhdGlvbiA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBhYnNEaXN0ID4gdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlclNpemUgPSAodGhpcy5kaXJlY3Rpb24gPT09IC0xIC8qIE5lZ2F0aXZlICovICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzBdKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlyZWN0aW9uID09PSAxIC8qIFBvc2l0aXZlICovICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzFdKVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLndyYXBwZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIG1vbWVudHVtSW5mbyA9IHRoaXMuaGFzU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMubW9tZW50dW0odGhpcy5jdXJyZW50UG9zLCB0aGlzLnN0YXJ0UG9zLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxQb3MsIHRoaXMubWluU2Nyb2xsUG9zLCB3cmFwcGVyU2l6ZSwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiB7IGRlc3RpbmF0aW9uOiB0aGlzLmN1cnJlbnRQb3MsIGR1cmF0aW9uOiAwIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgbW9tZW50dW1JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudHVtSW5mbztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUubW9tZW50dW0gPSBmdW5jdGlvbiAoY3VycmVudCwgc3RhcnQsIHRpbWUsIGxvd2VyTWFyZ2luLCB1cHBlck1hcmdpbiwgd3JhcHBlclNpemUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IH1cclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQ7XHJcbiAgICAgICAgdmFyIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZTtcclxuICAgICAgICB2YXIgZGVjZWxlcmF0aW9uID0gb3B0aW9ucy5kZWNlbGVyYXRpb24sIHN3aXBlQm91bmNlVGltZSA9IG9wdGlvbnMuc3dpcGVCb3VuY2VUaW1lLCBzd2lwZVRpbWUgPSBvcHRpb25zLnN3aXBlVGltZTtcclxuICAgICAgICB2YXIgbW9tZW50dW1EYXRhID0ge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogY3VycmVudCArIChzcGVlZCAvIGRlY2VsZXJhdGlvbikgKiAoZGlzdGFuY2UgPCAwID8gLTEgOiAxKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHN3aXBlVGltZSxcclxuICAgICAgICAgICAgcmF0ZTogMTVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW9tZW50dW0sIG1vbWVudHVtRGF0YSwgZGlzdGFuY2UpO1xyXG4gICAgICAgIGlmIChtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPCBsb3dlck1hcmdpbikge1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChsb3dlck1hcmdpbiAtIHdyYXBwZXJTaXplIC8gNCwgbG93ZXJNYXJnaW4gLSAod3JhcHBlclNpemUgLyBtb21lbnR1bURhdGEucmF0ZSkgKiBzcGVlZClcclxuICAgICAgICAgICAgICAgIDogbG93ZXJNYXJnaW47XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kdXJhdGlvbiA9IHN3aXBlQm91bmNlVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID4gdXBwZXJNYXJnaW4pIHtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID0gd3JhcHBlclNpemVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4odXBwZXJNYXJnaW4gKyB3cmFwcGVyU2l6ZSAvIDQsIHVwcGVyTWFyZ2luICsgKHdyYXBwZXJTaXplIC8gbW9tZW50dW1EYXRhLnJhdGUpICogc3BlZWQpXHJcbiAgICAgICAgICAgICAgICA6IHVwcGVyTWFyZ2luO1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZHVyYXRpb24gPSBzd2lwZUJvdW5jZVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA9IE1hdGgucm91bmQobW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50dW1EYXRhO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFic0Rpc3QgPSBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFBvcykgLSB0aGlzLmFic1N0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID1cclxuICAgICAgICAgICAgYWJzRGlzdCA+IDBcclxuICAgICAgICAgICAgICAgID8gLTEgLyogTmVnYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIDogYWJzRGlzdCA8IDBcclxuICAgICAgICAgICAgICAgICAgICA/IDEgLyogUG9zaXRpdmUgKi9cclxuICAgICAgICAgICAgICAgICAgICA6IDAgLyogRGVmYXVsdCAqLztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMucmVjdCwgc2l6ZSA9IF9hLnNpemUsIHBvc2l0aW9uID0gX2EucG9zaXRpb247XHJcbiAgICAgICAgdmFyIGlzV3JhcHBlclN0YXRpYyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMud3JhcHBlciwgbnVsbCkucG9zaXRpb24gPT09ICdzdGF0aWMnO1xyXG4gICAgICAgIHZhciB3cmFwcGVyUmVjdCA9IGdldFJlY3QodGhpcy53cmFwcGVyKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJTaXplID0gd3JhcHBlclJlY3Rbc2l6ZV07XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gZ2V0UmVjdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFNpemUgPSBjb250ZW50UmVjdFtzaXplXTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlT2Zmc2V0ID0gY29udGVudFJlY3RbcG9zaXRpb25dO1xyXG4gICAgICAgIGlmIChpc1dyYXBwZXJTdGF0aWMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZU9mZnNldCAtPSB3cmFwcGVyUmVjdFtwb3NpdGlvbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWluU2Nyb2xsUG9zID0gMDtcclxuICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyA9IHRoaXMud3JhcHBlclNpemUgLSB0aGlzLmNvbnRlbnRTaXplO1xyXG4gICAgICAgIGlmICh0aGlzLm1heFNjcm9sbFBvcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxQb3MgLT0gdGhpcy5yZWxhdGl2ZU9mZnNldDtcclxuICAgICAgICAgICAgdGhpcy5taW5TY3JvbGxQb3MgPSAtdGhpcy5yZWxhdGl2ZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNTY3JvbGwgPVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2Nyb2xsYWJsZSAmJiB0aGlzLm1heFNjcm9sbFBvcyA8IHRoaXMubWluU2Nyb2xsUG9zO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxQb3MgPSB0aGlzLm1pblNjcm9sbFBvcztcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50U2l6ZSA9IHRoaXMud3JhcHBlclNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUudXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gcG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFBvcyk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmNoZWNrSW5Cb3VuZGFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmFkanVzdFBvc2l0aW9uKHRoaXMuY3VycmVudFBvcyk7XHJcbiAgICAgICAgdmFyIGluQm91bmRhcnkgPSBwb3NpdGlvbiA9PT0gdGhpcy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBpbkJvdW5kYXJ5OiBpbkJvdW5kYXJ5XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyBhZGp1c3QgcG9zaXRpb24gd2hlbiBvdXQgb2YgYm91bmRhcnlcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5hZGp1c3RQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgcm91bmRQb3MgPSBNYXRoLnJvdW5kKHBvcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbCB8fCByb3VuZFBvcyA+IHRoaXMubWluU2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUG9zID0gdGhpcy5taW5TY3JvbGxQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdW5kUG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgcm91bmRQb3MgPSB0aGlzLm1heFNjcm9sbFBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kUG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVTdGFydFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5jdXJyZW50UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVBYnNTdGFydFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFic1N0YXJ0UG9zID0gdGhpcy5jdXJyZW50UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5yZXNldFN0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFic1N0YXJ0UG9zKCk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmdldEFic0Rpc3QgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmRpc3QgKz0gZGVsdGE7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdCk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJlaGF2aW9yO1xyXG59KCkpO1xuXG52YXIgX2EsIF9iLCBfYywgX2Q7XHJcbnZhciBQYXNzdGhyb3VnaEhhbmRsZXJzID0gKF9hID0ge30sXHJcbiAgICBfYVtcInllc1wiIC8qIFllcyAqL10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIF9hW1wibm9cIiAvKiBObyAqL10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgX2EpO1xyXG52YXIgRGlyZWN0aW9uTWFwID0gKF9iID0ge30sXHJcbiAgICBfYltcImhvcml6b250YWxcIiAvKiBIb3Jpem9udGFsICovXSA9IChfYyA9IHt9LFxyXG4gICAgICAgIF9jW1wieWVzXCIgLyogWWVzICovXSA9IFwiaG9yaXpvbnRhbFwiIC8qIEhvcml6b250YWwgKi8sXHJcbiAgICAgICAgX2NbXCJub1wiIC8qIE5vICovXSA9IFwidmVydGljYWxcIiAvKiBWZXJ0aWNhbCAqLyxcclxuICAgICAgICBfYyksXHJcbiAgICBfYltcInZlcnRpY2FsXCIgLyogVmVydGljYWwgKi9dID0gKF9kID0ge30sXHJcbiAgICAgICAgX2RbXCJ5ZXNcIiAvKiBZZXMgKi9dID0gXCJ2ZXJ0aWNhbFwiIC8qIFZlcnRpY2FsICovLFxyXG4gICAgICAgIF9kW1wibm9cIiAvKiBObyAqL10gPSBcImhvcml6b250YWxcIiAvKiBIb3Jpem9udGFsICovLFxyXG4gICAgICAgIF9kKSxcclxuICAgIF9iKTtcclxudmFyIERpcmVjdGlvbkxvY2tBY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb25Mb2NrQWN0aW9uKGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQsIGZyZWVTY3JvbGwsIGV2ZW50UGFzc3Rocm91Z2gpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSBkaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xyXG4gICAgICAgIHRoaXMuZnJlZVNjcm9sbCA9IGZyZWVTY3JvbGw7XHJcbiAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID0gZXZlbnRQYXNzdGhyb3VnaDtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IFwiXCIgLyogRGVmYXVsdCAqLztcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5jaGVja01vdmluZ0RpcmVjdGlvbiA9IGZ1bmN0aW9uIChhYnNEaXN0WCwgYWJzRGlzdFksIGUpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVEaXJlY3Rpb25Mb2NrKGFic0Rpc3RYLCBhYnNEaXN0WSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXZlbnRQYXNzdGhyb3VnaChlKTtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5hZGp1c3REZWx0YSA9IGZ1bmN0aW9uIChkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gXCJob3Jpem9udGFsXCIgLyogSG9yaXpvbnRhbCAqLykge1xyXG4gICAgICAgICAgICBkZWx0YVkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gXCJ2ZXJ0aWNhbFwiIC8qIFZlcnRpY2FsICovKSB7XHJcbiAgICAgICAgICAgIGRlbHRhWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxyXG4gICAgICAgICAgICBkZWx0YVk6IGRlbHRhWVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuY29tcHV0ZURpcmVjdGlvbkxvY2sgPSBmdW5jdGlvbiAoYWJzRGlzdFgsIGFic0Rpc3RZKSB7XHJcbiAgICAgICAgLy8gSWYgeW91IGFyZSBzY3JvbGxpbmcgaW4gb25lIGRpcmVjdGlvbiwgbG9jayBpdFxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gXCJcIiAvKiBEZWZhdWx0ICovICYmICF0aGlzLmZyZWVTY3JvbGwpIHtcclxuICAgICAgICAgICAgaWYgKGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gXCJob3Jpem9udGFsXCIgLyogSG9yaXpvbnRhbCAqLzsgLy8gbG9jayBob3Jpem9udGFsbHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBcInZlcnRpY2FsXCIgLyogVmVydGljYWwgKi87IC8vIGxvY2sgdmVydGljYWxseVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBcIm5vbmVcIiAvKiBOb25lICovOyAvLyBubyBsb2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuaGFuZGxlRXZlbnRQYXNzdGhyb3VnaCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZU1hcCA9IERpcmVjdGlvbk1hcFt0aGlzLmRpcmVjdGlvbkxvY2tlZF07XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBoYW5kbGVNYXBbXCJ5ZXNcIiAvKiBZZXMgKi9dKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFzc3Rocm91Z2hIYW5kbGVyc1tcInllc1wiIC8qIFllcyAqL10oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBoYW5kbGVNYXBbXCJub1wiIC8qIE5vICovXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhc3N0aHJvdWdoSGFuZGxlcnNbXCJub1wiIC8qIE5vICovXShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERpcmVjdGlvbkxvY2tBY3Rpb247XHJcbn0oKSk7XG5cbnZhciBTY3JvbGxlckFjdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY3JvbGxlckFjdGlvbnMoc2Nyb2xsQmVoYXZpb3JYLCBzY3JvbGxCZWhhdmlvclksIGFjdGlvbnNIYW5kbGVyLCBhbmltYXRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAgICAgJ2JlZm9yZU1vdmUnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ2JlZm9yZUVuZCcsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYID0gc2Nyb2xsQmVoYXZpb3JYO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZID0gc2Nyb2xsQmVoYXZpb3JZO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIgPSBhY3Rpb25zSGFuZGxlcjtcclxuICAgICAgICB0aGlzLmFuaW1hdGVyID0gYW5pbWF0ZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24gPSBuZXcgRGlyZWN0aW9uTG9ja0FjdGlvbihvcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQsIG9wdGlvbnMuZnJlZVNjcm9sbCwgb3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnNIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmJpbmRBY3Rpb25zSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIFttb3VzZXx0b3VjaF1zdGFydCBldmVudFxyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVN0YXJ0KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFttb3VzZXx0b3VjaF1tb3ZlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSBfYS5kZWx0YVgsIGRlbHRhWSA9IF9hLmRlbHRhWSwgZSA9IF9hLmU7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTW92ZShkZWx0YVgsIGRlbHRhWSwgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXWVuZCBldmVudFxyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLmVuZCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVFbmQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5jbGljaywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG5hdGl2ZSBjbGljayBldmVudFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZW5hYmxlZCAmJiAhZS5fY29uc3RydWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUNsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVTdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldE5vdygpO1xyXG4gICAgICAgIHRoaXMubW92ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24ucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gZm9yY2Ugc3RvcHBpbmcgbGFzdCB0cmFuc2l0aW9uIG9yIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnJlc2V0U3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS5yZXNldFN0YXJ0UG9zKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCwgZSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZLCBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZSwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWJzRGlzdFggPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5nZXRBYnNEaXN0KGRlbHRhWCk7XHJcbiAgICAgICAgdmFyIGFic0Rpc3RZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuZ2V0QWJzRGlzdChkZWx0YVkpO1xyXG4gICAgICAgIHZhciB0aW1lc3RhbXAgPSBnZXROb3coKTtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgYXQgbGVhc3QgbW9tZW50dW1MaW1pdERpc3RhbmNlIHBpeGVsc1xyXG4gICAgICAgIC8vIGZvciB0aGUgc2Nyb2xsaW5nIHRvIGluaXRpYXRlXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tNb21lbnR1bShhYnNEaXN0WCwgYWJzRGlzdFksIHRpbWVzdGFtcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24uY2hlY2tNb3ZpbmdEaXJlY3Rpb24oYWJzRGlzdFgsIGFic0Rpc3RZLCBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLnNldEluaXRpYXRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5kaXJlY3Rpb25Mb2NrQWN0aW9uLmFkanVzdERlbHRhKGRlbHRhWCwgZGVsdGFZKTtcclxuICAgICAgICB2YXIgbmV3WCA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1vdmUoZGVsdGEuZGVsdGFYKTtcclxuICAgICAgICB2YXIgbmV3WSA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLm1vdmUoZGVsdGEuZGVsdGFZKTtcclxuICAgICAgICBpZiAoIXRoaXMubW92ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsU3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLnRyYW5zbGF0ZSh7XHJcbiAgICAgICAgICAgIHg6IG5ld1gsXHJcbiAgICAgICAgICAgIHk6IG5ld1lcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoU2Nyb2xsKHRpbWVzdGFtcCk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5kaXNwYXRjaFNjcm9sbCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcclxuICAgICAgICAvLyBkaXNwYXRjaCBzY3JvbGwgaW4gaW50ZXJ2YWwgdGltZVxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSkge1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRpbWUgYW5kIHN0YXJ0aW5nIHBvc2l0aW9uIHRvIGluaXRpYXRlIGEgbW9tZW50dW1cclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZVN0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnVwZGF0ZVN0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlID09PSAxIC8qIFRocm90dGxlICovKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRpc3BhdGNoIHNjcm9sbCBhbGwgdGhlIHRpbWVcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByb2JlVHlwZSA+IDEgLyogVGhyb3R0bGUgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGwsIHRoaXMuZ2V0Q3VycmVudFBvcygpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5jaGVja01vbWVudHVtID0gZnVuY3Rpb24gKGFic0Rpc3RYLCBhYnNEaXN0WSwgdGltZXN0YW1wKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aW1lc3RhbXAgLSB0aGlzLmVuZFRpbWUgPiB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdFRpbWUgJiZcclxuICAgICAgICAgICAgYWJzRGlzdFkgPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGFic0Rpc3RYIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVFbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUVuZCwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHRoaXMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnVwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZSwgY3VycmVudFBvcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIudHJhbnNsYXRlKGN1cnJlbnRQb3MpO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGdldE5vdygpO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBjdXJyZW50UG9zLCBkdXJhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmdldEN1cnJlbnRQb3MoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5zY3JvbGxCZWhhdmlvclkuZ2V0Q3VycmVudFBvcygpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjcm9sbGVyQWN0aW9ucztcclxufSgpKTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0hhbmRsZXJPcHRpb25zKGJzT3B0aW9ucykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAnYmluZFRvV3JhcHBlcicsXHJcbiAgICAgICAgJ2Rpc2FibGVNb3VzZScsXHJcbiAgICAgICAgJ2Rpc2FibGVUb3VjaCcsXHJcbiAgICAgICAgJ3ByZXZlbnREZWZhdWx0JyxcclxuICAgICAgICAnc3RvcFByb3BhZ2F0aW9uJyxcclxuICAgICAgICAndGFnRXhjZXB0aW9uJyxcclxuICAgICAgICAncHJldmVudERlZmF1bHRFeGNlcHRpb24nXHJcbiAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XHJcbiAgICAgICAgcHJldltjdXJdID0gYnNPcHRpb25zW2N1cl07XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVCZWhhdmlvck9wdGlvbnMoYnNPcHRpb25zLCBleHRyYVByb3AsIGJvdW5jZXMsIHJlY3QpIHtcclxuICAgIHZhciBvcHRpb25zID0gW1xyXG4gICAgICAgICdtb21lbnR1bScsXHJcbiAgICAgICAgJ21vbWVudHVtTGltaXRUaW1lJyxcclxuICAgICAgICAnbW9tZW50dW1MaW1pdERpc3RhbmNlJyxcclxuICAgICAgICAnZGVjZWxlcmF0aW9uJyxcclxuICAgICAgICAnc3dpcGVCb3VuY2VUaW1lJyxcclxuICAgICAgICAnc3dpcGVUaW1lJ1xyXG4gICAgXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cikge1xyXG4gICAgICAgIHByZXZbY3VyXSA9IGJzT3B0aW9uc1tjdXJdO1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pO1xyXG4gICAgLy8gYWRkIGV4dHJhIHByb3BlcnR5XHJcbiAgICBvcHRpb25zLnNjcm9sbGFibGUgPSBic09wdGlvbnNbZXh0cmFQcm9wXTtcclxuICAgIG9wdGlvbnMuYm91bmNlcyA9IGJvdW5jZXM7XHJcbiAgICBvcHRpb25zLnJlY3QgPSByZWN0O1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cblxuZnVuY3Rpb24gYnViYmxpbmcoc291cmNlLCB0YXJnZXQsIGV2ZW50cykge1xyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHNvdXJjZUV2ZW50O1xyXG4gICAgICAgIHZhciB0YXJnZXRFdmVudDtcclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBzb3VyY2VFdmVudCA9IHRhcmdldEV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VyY2VFdmVudCA9IGV2ZW50LnNvdXJjZTtcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvdXJjZS5vbihzb3VyY2VFdmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQudHJpZ2dlci5hcHBseSh0YXJnZXQsIFt0YXJnZXRFdmVudF0uY29uY2F0KGFyZ3MpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XG5cbnZhciBTY3JvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjcm9sbGVyKHdyYXBwZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdiZWZvcmVTdGFydCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVNb3ZlJyxcclxuICAgICAgICAgICAgJ2JlZm9yZVNjcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVFbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3JlZnJlc2gnLFxyXG4gICAgICAgICAgICAndG91Y2hFbmQnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ2ZsaWNrJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICdtb21lbnR1bScsXHJcbiAgICAgICAgICAgICdzY3JvbGxUbycsXHJcbiAgICAgICAgICAgICdpZ25vcmVEaXNNb3ZlRm9yU2FtZVBvcycsXHJcbiAgICAgICAgICAgICdzY3JvbGxUb0VsZW1lbnQnLFxyXG4gICAgICAgICAgICAncmVzaXplJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gd3JhcHBlci5jaGlsZHJlblswXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXNcclxuICAgICAgICAgICAgLm9wdGlvbnMuYm91bmNlLCBfYiA9IF9hLmxlZnQsIGxlZnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IF9hLnJpZ2h0LCByaWdodCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gX2EudG9wLCB0b3AgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBfZSA9IF9hLmJvdHRvbSwgYm90dG9tID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gWFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYID0gbmV3IEJlaGF2aW9yKHdyYXBwZXIsIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhvcHRpb25zLCAnc2Nyb2xsWCcsIFtsZWZ0LCByaWdodF0sIHtcclxuICAgICAgICAgICAgc2l6ZTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gWVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZID0gbmV3IEJlaGF2aW9yKHdyYXBwZXIsIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhvcHRpb25zLCAnc2Nyb2xsWScsIFt0b3AsIGJvdHRvbV0sIHtcclxuICAgICAgICAgICAgc2l6ZTogJ2hlaWdodCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJ1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZXIgPSBuZXcgVHJhbnNsYXRlcih0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIgPSBjcmVhdGVBbmltYXRlcih0aGlzLmNvbnRlbnQsIHRoaXMudHJhbnNsYXRlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyID0gbmV3IEFjdGlvbnNIYW5kbGVyKHdyYXBwZXIsIGNyZWF0ZUFjdGlvbnNIYW5kbGVyT3B0aW9ucyh0aGlzLm9wdGlvbnMpKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBuZXcgU2Nyb2xsZXJBY3Rpb25zKHRoaXMuc2Nyb2xsQmVoYXZpb3JYLCB0aGlzLnNjcm9sbEJlaGF2aW9yWSwgdGhpcy5hY3Rpb25zSGFuZGxlciwgdGhpcy5hbmltYXRlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB2YXIgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHdpbmRvdywgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3JpZW50YXRpb25jaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogcmVzaXplSGFuZGxlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVzaXplJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHJlc2l6ZUhhbmRsZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIodGhpcy5jb250ZW50LCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHN0eWxlLnRyYW5zaXRpb25FbmQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnRyYW5zaXRpb25FbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYmluZFRyYW5zbGF0ZXIoKTtcclxuICAgICAgICB0aGlzLmJpbmRBbmltYXRlcigpO1xyXG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoKTtcclxuICAgICAgICAvLyBlbmFibGUgcG9pbnRlciBldmVudHMgd2hlbiBzY3JvbGxpbmcgZW5kc1xyXG4gICAgICAgIHRoaXMuaG9va3Mub24odGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy50b2dnbGVQb2ludGVyRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5iaW5kVHJhbnNsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBob29rcyA9IHRoaXMudHJhbnNsYXRlci5ob29rcztcclxuICAgICAgICBob29rcy5vbihob29rcy5ldmVudFR5cGVzLmJlZm9yZVRyYW5zbGF0ZSwgZnVuY3Rpb24gKHRyYW5zZm9ybVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnRyYW5zbGF0ZVopIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlLnB1c2goX3RoaXMub3B0aW9ucy50cmFuc2xhdGVaKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGRpc2FibGUgcG9pbnRlciBldmVudHMgd2hlbiBzY3JvbGxpbmdcclxuICAgICAgICBob29rcy5vbihob29rcy5ldmVudFR5cGVzLnRyYW5zbGF0ZSwgZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVQb3NpdGlvbnMocG9zKTtcclxuICAgICAgICAgICAgX3RoaXMudG9nZ2xlUG9pbnRlckV2ZW50cyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmJpbmRBbmltYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHJlc2V0IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5ob29rcy5vbih0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMucmVzZXRQb3NpdGlvbihfdGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlci5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidWJibGluZyh0aGlzLmFuaW1hdGVyLmhvb2tzLCB0aGlzLmhvb2tzLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5hbmltYXRlci5ob29rcy5ldmVudFR5cGVzLm1vdmUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMuZm9yY2VTdG9wLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuYmluZEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcclxuICAgICAgICBidWJibGluZyhhY3Rpb25zLmhvb2tzLCB0aGlzLmhvb2tzLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlU3RhcnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTY3JvbGxTdGFydCAvLyBqdXN0IGZvciBldmVudCBhcGlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZU1vdmVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsU3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGwsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICBhY3Rpb25zLmhvb2tzLm9uKGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGZ1bmN0aW9uIChlLCBwb3MpIHtcclxuICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnRvdWNoRW5kLCBwb3MpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgcG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgaXMgYSBjbGljayBvcGVyYXRpb25cclxuICAgICAgICAgICAgaWYgKCFhY3Rpb25zLm1vdmVkICYmIF90aGlzLmNoZWNrQ2xpY2soZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldEZvcmNlU3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsQ2FuY2VsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldEZvcmNlU3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGlmIHdlIGFyZSBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5yZXNldFBvc2l0aW9uKF90aGlzLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFjdGlvbnMuaG9va3Mub24oYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgZnVuY3Rpb24gKHBvcywgZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWCA9IE1hdGguYWJzKHBvcy54IC0gX3RoaXMuc2Nyb2xsQmVoYXZpb3JYLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHBvcy55IC0gX3RoaXMuc2Nyb2xsQmVoYXZpb3JZLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNoZWNrRmxpY2soZHVyYXRpb24sIGRlbHRhWCwgZGVsdGFZKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmZsaWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMubW9tZW50dW0ocG9zLCBkdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5jaGVja0ZsaWNrID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgICAgIC8vIGZsaWNrXHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MuZXZlbnRzLmZsaWNrLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgZHVyYXRpb24gPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdFRpbWUgJiZcclxuICAgICAgICAgICAgZGVsdGFYIDwgdGhpcy5vcHRpb25zLmZsaWNrTGltaXREaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBkZWx0YVkgPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUubW9tZW50dW0gPSBmdW5jdGlvbiAocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBtZXRhID0ge1xyXG4gICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2Uuc3dpcGVyLFxyXG4gICAgICAgICAgICBuZXdYOiBwb3MueCxcclxuICAgICAgICAgICAgbmV3WTogcG9zLnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHN0YXJ0IG1vbWVudHVtIGFuaW1hdGlvbiBpZiBuZWVkZWRcclxuICAgICAgICB2YXIgbW9tZW50dW1YID0gdGhpcy5zY3JvbGxCZWhhdmlvclguZW5kKGR1cmF0aW9uKTtcclxuICAgICAgICB2YXIgbW9tZW50dW1ZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuZW5kKGR1cmF0aW9uKTtcclxuICAgICAgICBtZXRhLm5ld1ggPSBpc1VuZGVmKG1vbWVudHVtWC5kZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgPyBtZXRhLm5ld1hcclxuICAgICAgICAgICAgOiBtb21lbnR1bVguZGVzdGluYXRpb247XHJcbiAgICAgICAgbWV0YS5uZXdZID0gaXNVbmRlZihtb21lbnR1bVkuZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAgID8gbWV0YS5uZXdZXHJcbiAgICAgICAgICAgIDogbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgIG1ldGEudGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vbWVudHVtLCBtZXRhLCB0aGlzKTtcclxuICAgICAgICAvLyB3aGVuIHggb3IgeSBjaGFuZ2VkLCBkbyBtb21lbnR1bSBhbmltYXRpb24gbm93IVxyXG4gICAgICAgIGlmIChtZXRhLm5ld1ggIT09IHBvcy54IHx8IG1ldGEubmV3WSAhPT0gcG9zLnkpIHtcclxuICAgICAgICAgICAgLy8gY2hhbmdlIGVhc2luZyBmdW5jdGlvbiB3aGVuIHNjcm9sbGVyIGdvZXMgb3V0IG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGlmIChtZXRhLm5ld1ggPiB0aGlzLnNjcm9sbEJlaGF2aW9yWC5taW5TY3JvbGxQb3MgfHxcclxuICAgICAgICAgICAgICAgIG1ldGEubmV3WCA8IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1heFNjcm9sbFBvcyB8fFxyXG4gICAgICAgICAgICAgICAgbWV0YS5uZXdZID4gdGhpcy5zY3JvbGxCZWhhdmlvclkubWluU2Nyb2xsUG9zIHx8XHJcbiAgICAgICAgICAgICAgICBtZXRhLm5ld1kgPCB0aGlzLnNjcm9sbEJlaGF2aW9yWS5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgICAgIG1ldGEuZWFzaW5nID0gZWFzZS5zd2lwZUJvdW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKG1ldGEubmV3WCwgbWV0YS5uZXdZLCBtZXRhLnRpbWUsIG1ldGEuZWFzaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5jaGVja0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyB3aGVuIGluIHRoZSBwcm9jZXNzIG9mIHB1bGxpbmcgZG93biwgaXQgc2hvdWxkIG5vdCBwcmV2ZW50IGNsaWNrXHJcbiAgICAgICAgdmFyIGNhbmNlbGFibGUgPSB7XHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogdGhpcy5hbmltYXRlci5mb3JjZVN0b3BwZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHdlIHNjcm9sbGVkIGxlc3MgdGhhbiBtb21lbnR1bUxpbWl0RGlzdGFuY2UgcGl4ZWxzXHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuY2hlY2tDbGljaykpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICghY2FuY2VsYWJsZS5wcmV2ZW50Q2xpY2spIHtcclxuICAgICAgICAgICAgdmFyIF9kYmxjbGljayA9IHRoaXMub3B0aW9ucy5kYmxjbGljaztcclxuICAgICAgICAgICAgdmFyIGRibGNsaWNrVHJpZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoX2RibGNsaWNrICYmIHRoaXMubGFzdENsaWNrVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX2RibGNsaWNrLmRlbGF5LCBkZWxheSA9IF9hID09PSB2b2lkIDAgPyAzMDAgOiBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChnZXROb3coKSAtIHRoaXMubGFzdENsaWNrVGltZSA8IGRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2tUcmlnZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkYmxjbGljayhlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgdGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2sgJiZcclxuICAgICAgICAgICAgICAgICFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBjbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBkYmxjbGlja1RyaWdnZWQgPyBudWxsIDogZ2V0Tm93KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25zLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaXggYSBzY3JvbGwgcHJvYmxlbSB1bmRlciBBbmRyb2lkIGNvbmRpdGlvblxyXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5yZXNpemUpKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy5jb250ZW50IHx8ICF0aGlzLmFuaW1hdGVyLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5pbWF0ZXIgPSB0aGlzLmFuaW1hdGVyO1xyXG4gICAgICAgIGFuaW1hdGVyLnRyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVyLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByb2JlVHlwZSAhPT0gMyAvKiBSZWFsdGltZSAqLykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHRoaXMuZ2V0Q3VycmVudFBvcygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudG9nZ2xlUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uIChlbmFibGVkKSB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQgPT09IHZvaWQgMCkgeyBlbmFibGVkID0gdHJ1ZTsgfVxyXG4gICAgICAgIHZhciBlbCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5sZW5ndGhcclxuICAgICAgICAgICAgPyB0aGlzLmNvbnRlbnQuY2hpbGRyZW5cclxuICAgICAgICAgICAgOiBbdGhpcy5jb250ZW50XTtcclxuICAgICAgICB2YXIgcG9pbnRlckV2ZW50cyA9IGVuYWJsZWQgPyAnYXV0bycgOiAnbm9uZSc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsW2ldO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgQmV0dGVyU2Nyb2xsIGluc3RhbmNlJ3Mgd3JhcHBlciBET01cclxuICAgICAgICAgICAgaWYgKG5vZGUuaXNCU2Nyb2xsQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBwb2ludGVyRXZlbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gb2Zmc2V0KHRoaXMud3JhcHBlcik7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZLCB0aW1lLCBlYXNpbmcpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRDdXJyZW50UG9zKCksIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgZGVsdGFYICs9IHg7XHJcbiAgICAgICAgZGVsdGFZICs9IHk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhkZWx0YVgsIGRlbHRhWSwgdGltZSwgZWFzaW5nKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nLCBleHRyYVRyYW5zZm9ybSwgaXNTaWxlbnQpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgaWYgKGV4dHJhVHJhbnNmb3JtID09PSB2b2lkIDApIHsgZXh0cmFUcmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcclxuICAgICAgICAgICAgZW5kOiB7fVxyXG4gICAgICAgIH07IH1cclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgdmFyIGVhc2luZ0ZuID0gdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gPyBlYXNpbmcuc3R5bGUgOiBlYXNpbmcuZm47XHJcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSB0aGlzLmdldEN1cnJlbnRQb3MoKTtcclxuICAgICAgICB2YXIgc3RhcnRQb2ludCA9IF9fYXNzaWduKHsgeDogY3VycmVudFBvcy54LCB5OiBjdXJyZW50UG9zLnkgfSwgZXh0cmFUcmFuc2Zvcm0uc3RhcnQpO1xyXG4gICAgICAgIHZhciBlbmRQb2ludCA9IF9fYXNzaWduKHsgeDogeCxcclxuICAgICAgICAgICAgeTogeSB9LCBleHRyYVRyYW5zZm9ybS5lbmQpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsVG8sIGVuZFBvaW50KTtcclxuICAgICAgICBpZiAoIXRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuaWdub3JlRGlzTW92ZUZvclNhbWVQb3MpKSB7XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGFuIHVzZWxlc3MgbW92ZVxyXG4gICAgICAgICAgICBpZiAoc3RhcnRQb2ludC54ID09PSBlbmRQb2ludC54ICYmIHN0YXJ0UG9pbnQueSA9PT0gZW5kUG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIubW92ZShzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2lsZW50KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0RWxlID0gZ2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgdmFyIHBvcyA9IG9mZnNldCh0YXJnZXRFbGUpO1xyXG4gICAgICAgIHZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0LCBzaXplLCB3cmFwcGVyU2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXHJcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgPyBNYXRoLnJvdW5kKHNpemUgLyAyIC0gd3JhcHBlclNpemUgLyAyKSA6IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvZmZzZXRYID0gZ2V0T2Zmc2V0KG9mZnNldFgsIHRhcmdldEVsZS5vZmZzZXRXaWR0aCwgdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoKTtcclxuICAgICAgICBvZmZzZXRZID0gZ2V0T2Zmc2V0KG9mZnNldFksIHRhcmdldEVsZS5vZmZzZXRIZWlnaHQsIHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICAgIHZhciBnZXRQb3MgPSBmdW5jdGlvbiAocG9zLCB3cmFwcGVyUG9zLCBvZmZzZXQsIHNjcm9sbEJlaGF2aW9yKSB7XHJcbiAgICAgICAgICAgIHBvcyAtPSB3cmFwcGVyUG9zO1xyXG4gICAgICAgICAgICBwb3MgPSBzY3JvbGxCZWhhdmlvci5hZGp1c3RQb3NpdGlvbihwb3MgLSBvZmZzZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcG9zLmxlZnQgPSBnZXRQb3MocG9zLmxlZnQsIHRoaXMud3JhcHBlck9mZnNldC5sZWZ0LCBvZmZzZXRYLCB0aGlzLnNjcm9sbEJlaGF2aW9yWCk7XHJcbiAgICAgICAgcG9zLnRvcCA9IGdldFBvcyhwb3MudG9wLCB0aGlzLndyYXBwZXJPZmZzZXQudG9wLCBvZmZzZXRZLCB0aGlzLnNjcm9sbEJlaGF2aW9yWSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsVG9FbGVtZW50LCB0YXJnZXRFbGUsIHBvcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbFRvKHBvcy5sZWZ0LCBwb3MudG9wLCB0aW1lLCBlYXNpbmcpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5yZXNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zY3JvbGxCZWhhdmlvclguY2hlY2tJbkJvdW5kYXJ5KCksIHggPSBfYS5wb3NpdGlvbiwgeEluQm91bmRhcnkgPSBfYS5pbkJvdW5kYXJ5O1xyXG4gICAgICAgIHZhciBfYiA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLmNoZWNrSW5Cb3VuZGFyeSgpLCB5ID0gX2IucG9zaXRpb24sIHlJbkJvdW5kYXJ5ID0gX2IuaW5Cb3VuZGFyeTtcclxuICAgICAgICBpZiAoeEluQm91bmRhcnkgJiYgeUluQm91bmRhcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXQgb2YgYm91bmRhcnlcclxuICAgICAgICB0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC51cGRhdGVQb3NpdGlvbihwb3MueCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlUG9zaXRpb24ocG9zLnkpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZXIudGltZXIpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIga2V5cyA9IFtcclxuICAgICAgICAgICAgJ3Jlc2l6ZVJlZ2lzdGVyJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb25FbmRSZWdpc3RlcicsXHJcbiAgICAgICAgICAgICdhY3Rpb25zSGFuZGxlcicsXHJcbiAgICAgICAgICAgICdhY3Rpb25zJyxcclxuICAgICAgICAgICAgJ2hvb2tzJyxcclxuICAgICAgICAgICAgJ2FuaW1hdGVyJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZXInLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQmVoYXZpb3JYJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEJlaGF2aW9yWSdcclxuICAgICAgICBdO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpc1trZXldLmRlc3Ryb3koKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjcm9sbGVyO1xyXG59KCkpO1xuXG52YXIgcHJvcGVydGllc0NvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguY3VycmVudFBvcycsXHJcbiAgICAgICAga2V5OiAneCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmN1cnJlbnRQb3MnLFxyXG4gICAgICAgIGtleTogJ3knXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5oYXNTY3JvbGwnLFxyXG4gICAgICAgIGtleTogJ2hhc0hvcml6b250YWxTY3JvbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5oYXNTY3JvbGwnLFxyXG4gICAgICAgIGtleTogJ2hhc1ZlcnRpY2FsU2Nyb2xsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguY29udGVudFNpemUnLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbGVyV2lkdGgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5jb250ZW50U2l6ZScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsZXJIZWlnaHQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5tYXhTY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21heFNjcm9sbFgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5tYXhTY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21heFNjcm9sbFknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5taW5TY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21pblNjcm9sbFgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5taW5TY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21pblNjcm9sbFknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5tb3ZpbmdEaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ21vdmluZ0RpcmVjdGlvblgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5tb3ZpbmdEaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ21vdmluZ0RpcmVjdGlvblknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5kaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ2RpcmVjdGlvblgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5kaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ2RpcmVjdGlvblknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLmFjdGlvbnMuZW5hYmxlZCcsXHJcbiAgICAgICAga2V5OiAnZW5hYmxlZCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYW5pbWF0ZXIucGVuZGluZycsXHJcbiAgICAgICAga2V5OiAncGVuZGluZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYW5pbWF0ZXIuc3RvcCcsXHJcbiAgICAgICAga2V5OiAnc3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsVG8nLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbFRvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCeScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsQnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbFRvRWxlbWVudCcsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsVG9FbGVtZW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5yZXNldFBvc2l0aW9uJyxcclxuICAgICAgICBrZXk6ICdyZXNldFBvc2l0aW9uJ1xyXG4gICAgfVxyXG5dO1xuXG52YXIgQlNjcm9sbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCU2Nyb2xsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQlNjcm9sbChlbCwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFtcclxuICAgICAgICAgICAgJ3JlZnJlc2gnLFxyXG4gICAgICAgICAgICAnZW5hYmxlJyxcclxuICAgICAgICAgICAgJ2Rpc2FibGUnLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEVuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxDYW5jZWwnLFxyXG4gICAgICAgICAgICAndG91Y2hFbmQnLFxyXG4gICAgICAgICAgICAnZmxpY2snLFxyXG4gICAgICAgICAgICAnZGVzdHJveSdcclxuICAgICAgICBdKSB8fCB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gZ2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgaWYgKCF3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHdhcm4oJ0NhbiBub3QgcmVzb2x2ZSB0aGUgd3JhcHBlciBET00uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB3cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICB3YXJuKCdUaGUgd3JhcHBlciBuZWVkIGF0IGxlYXN0IG9uZSBjaGlsZCBlbGVtZW50IHRvIGJlIHNjcm9sbGVyLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLnBsdWdpbnMgPSB7fTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMoKS5tZXJnZShvcHRpb25zKS5wcm9jZXNzKCk7XHJcbiAgICAgICAgX3RoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2luaXQnLFxyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICdlbmFibGUnLFxyXG4gICAgICAgICAgICAnZGlzYWJsZScsXHJcbiAgICAgICAgICAgICdkZXN0cm95J1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmluaXQod3JhcHBlcik7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQlNjcm9sbC51c2UgPSBmdW5jdGlvbiAoY3Rvcikge1xyXG4gICAgICAgIHZhciBuYW1lID0gY3Rvci5wbHVnaW5OYW1lO1xyXG4gICAgICAgIHZhciBpbnN0YWxsZWQgPSB0aGlzLnBsdWdpbnMuc29tZShmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBjdG9yID09PSBwbHVnaW4uY3RvcjsgfSk7XHJcbiAgICAgICAgaWYgKGluc3RhbGxlZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGlzVW5kZWYobmFtZSkpIHtcclxuICAgICAgICAgICAgd2FybihcIlBsdWdpbiBDbGFzcyBtdXN0IHNwZWNpZnkgcGx1Z2luJ3MgbmFtZSBpbiBzdGF0aWMgcHJvcGVydHkgYnkgJ3BsdWdpbk5hbWUnIGZpZWxkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbnNNYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgd2FybihcIlRoaXMgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQsIG1heWJlIHlvdSBuZWVkIGNoYW5nZSBwbHVnaW4ncyBuYW1lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zTWFwW25hbWVdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGFwcGx5T3JkZXI6IGN0b3IuYXBwbHlPcmRlcixcclxuICAgICAgICAgICAgY3RvcjogY3RvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgd3JhcHBlci5pc0JTY3JvbGxDb250YWluZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIgPSBuZXcgU2Nyb2xsZXIod3JhcHBlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmV2ZW50QnViYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF1dG9CbHVyKCk7XHJcbiAgICAgICAgdGhpcy5pbm5lclJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsIHRoaXMub3B0aW9ucy5zdGFydFkpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wcm94eShwcm9wZXJ0aWVzQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGx1Z2lucygpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmFwcGx5UGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IucGx1Z2luc1xyXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciBhcHBseU9yZGVyTWFwID0gKF9hID0ge30sXHJcbiAgICAgICAgICAgICAgICBfYVtcInByZVwiIC8qIFByZSAqL10gPSAtMSxcclxuICAgICAgICAgICAgICAgIF9hW1wicG9zdFwiIC8qIFBvc3QgKi9dID0gMSxcclxuICAgICAgICAgICAgICAgIF9hKTtcclxuICAgICAgICAgICAgdmFyIGFPcmRlciA9IGEuYXBwbHlPcmRlciA/IGFwcGx5T3JkZXJNYXBbYS5hcHBseU9yZGVyXSA6IDA7XHJcbiAgICAgICAgICAgIHZhciBiT3JkZXIgPSBiLmFwcGx5T3JkZXIgPyBhcHBseU9yZGVyTWFwW2IuYXBwbHlPcmRlcl0gOiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gYU9yZGVyIC0gYk9yZGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjdG9yID0gaXRlbS5jdG9yO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uc1tpdGVtLm5hbWVdICYmIHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbHVnaW5zW2l0ZW0ubmFtZV0gPSBuZXcgY3RvcihfdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5oYW5kbGVBdXRvQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9CbHVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudFR5cGVzLmJlZm9yZVNjcm9sbFN0YXJ0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZXZlbnRCdWJibGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBidWJibGluZyh0aGlzLnNjcm9sbGVyLmhvb2tzLCB0aGlzLCBbXHJcbiAgICAgICAgICAgICdiZWZvcmVTY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdmbGljaydcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5pbm5lclJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5yZWZyZXNoKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLnJlZnJlc2gpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLnByb3h5ID0gZnVuY3Rpb24gKHByb3BlcnRpZXNDb25maWcpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHByb3BlcnRpZXNDb25maWcuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9hLmtleSwgc291cmNlS2V5ID0gX2Euc291cmNlS2V5O1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzUHJveHkoX3RoaXMsIHNvdXJjZUtleSwga2V5KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJSZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZXNldFBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmFibGUpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMuZW5hYmxlKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZGlzYWJsZSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5kaXNhYmxlKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZGVzdHJveSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5kZXN0cm95KTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5ldmVudFJlZ2lzdGVyID0gZnVuY3Rpb24gKG5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUobmFtZXMpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucGx1Z2lucyA9IFtdO1xyXG4gICAgQlNjcm9sbC5wbHVnaW5zTWFwID0ge307XHJcbiAgICByZXR1cm4gQlNjcm9sbDtcclxufShFdmVudEVtaXR0ZXIpKTtcblxuZXhwb3J0IGRlZmF1bHQgQlNjcm9sbDtcbmV4cG9ydCB7IEJlaGF2aW9yLCBPcHRpb25zIH07XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBwdWxsLWRvd25cbiAqIChjKSAyMDE2LTIwMjAgdXN0Ymh1YW5neWlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuLy8gc3NyIHN1cHBvcnRcclxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG52YXIgdWEgPSBpbkJyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG52YXIgaXNXZUNoYXREZXZUb29scyA9IHVhICYmIC93ZWNoYXRkZXZ0b29scy8udGVzdCh1YSk7XHJcbnZhciBpc0FuZHJvaWQgPSB1YSAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPiAwO1xuXG52YXIgZWxlbWVudFN0eWxlID0gKGluQnJvd3NlciAmJlxyXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUpO1xyXG52YXIgdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHRyYW5zZm9ybU5hbWVzID0ge1xyXG4gICAgICAgIHdlYmtpdDogJ3dlYmtpdFRyYW5zZm9ybScsXHJcbiAgICAgICAgTW96OiAnTW96VHJhbnNmb3JtJyxcclxuICAgICAgICBPOiAnT1RyYW5zZm9ybScsXHJcbiAgICAgICAgbXM6ICdtc1RyYW5zZm9ybScsXHJcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybU5hbWVzKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRTdHlsZVt0cmFuc2Zvcm1OYW1lc1trZXldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KSgpO1xyXG5mdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xyXG4gICAgaWYgKHZlbmRvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodmVuZG9yID09PSAnc3RhbmRhcmQnKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlID09PSAndHJhbnNpdGlvbkVuZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xyXG59XHJcbnZhciBjc3NWZW5kb3IgPSB2ZW5kb3IgJiYgdmVuZG9yICE9PSAnc3RhbmRhcmQnID8gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCkgKyAnLScgOiAnJztcclxudmFyIHRyYW5zZm9ybSA9IHByZWZpeFN0eWxlKCd0cmFuc2Zvcm0nKTtcclxudmFyIHRyYW5zaXRpb24gPSBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpO1xyXG52YXIgaGFzUGVyc3BlY3RpdmUgPSBpbkJyb3dzZXIgJiYgcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gZWxlbWVudFN0eWxlO1xyXG52YXIgc3R5bGUgPSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nKSxcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkRlbGF5JyksXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHByZWZpeFN0eWxlKCd0cmFuc2Zvcm1PcmlnaW4nKSxcclxuICAgIHRyYW5zaXRpb25FbmQ6IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRW5kJylcclxufTtcblxudmFyIGVhc2UgPSB7XHJcbiAgICAvLyBlYXNlT3V0UXVpbnRcclxuICAgIHN3aXBlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSArIC0tdCAqIHQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFyZFxyXG4gICAgc3dpcGVCb3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ICogKDIgLSB0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJ0XHJcbiAgICBib3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwIC8gNjA7XHJcbnZhciB3aW5kb3dDb21wYXQgPSBpbkJyb3dzZXIgJiYgd2luZG93O1xyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAvLyBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHNldFRpbWVvdXRcclxuICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAoY2FsbGJhY2suaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCkgLyAyKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxyXG4gICAgICAgIH0pO1xyXG59KSgpO1xyXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgICB9KTtcclxufSkoKTtcblxudmFyIHNvdXJjZVByZWZpeCA9ICdwbHVnaW5zLnB1bGxEb3duUmVmcmVzaCc7XHJcbnZhciBwcm9wZXJ0aWVzTWFwID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2ZpbmlzaFB1bGxEb3duJyxcclxuICAgICAgICBuYW1lOiAnZmluaXNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdvcGVuUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdvcGVuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjbG9zZVB1bGxEb3duJyxcclxuICAgICAgICBuYW1lOiAnY2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2F1dG9QdWxsRG93blJlZnJlc2gnLFxyXG4gICAgICAgIG5hbWU6ICdhdXRvUHVsbCdcclxuICAgIH1cclxuXTtcclxudmFyIHByb3BlcnRpZXNQcm94eUNvbmZpZyA9IHByb3BlcnRpZXNNYXAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgc291cmNlS2V5OiBzb3VyY2VQcmVmaXggKyBcIi5cIiArIGl0ZW0ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cbnZhciBQdWxsRG93biA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFB1bGxEb3duKHNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0gc2Nyb2xsO1xyXG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChzY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucmVnaXN0ZXJUeXBlKFsncHVsbGluZ0Rvd24nXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucHJveHkocHJvcGVydGllc1Byb3h5Q29uZmlnKTtcclxuICAgIH1cclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5fd2F0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6ZyA6KaB6K6+572uIHByb2JlID0gMyDlkJfvvJ9cclxuICAgICAgICAvLyBtdXN0IHdhdGNoIHNjcm9sbCBpbiByZWFsIHRpbWVcclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnByb2JlVHlwZSA9IDMgLyogUmVhbHRpbWUgKi87XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsZXIuaG9va3Mub24oJ2VuZCcsIHRoaXMuX2NoZWNrUHVsbERvd24sIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5fY2hlY2tQdWxsRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zY3JvbGwub3B0aW9uc1xyXG4gICAgICAgICAgICAucHVsbERvd25SZWZyZXNoLCBfYiA9IF9hLnRocmVzaG9sZCwgdGhyZXNob2xkID0gX2IgPT09IHZvaWQgMCA/IDkwIDogX2IsIF9jID0gX2Euc3RvcCwgc3RvcCA9IF9jID09PSB2b2lkIDAgPyA0MCA6IF9jO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgcmVhbCBwdWxsIGRvd24gYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvblkgIT09IC0xIC8qIE5lZ2F0aXZlICovIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPCB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHVsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnB1bGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nRG93bicpO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsTWluU2Nyb2xsWSA9IHRoaXMuc2Nyb2xsLm1pblNjcm9sbFk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm1pblNjcm9sbFkgPSBzdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0aGlzLnNjcm9sbC54LCBzdG9wLCB0aGlzLnNjcm9sbC5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsaW5nO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHRoaXMub3JpZ2luYWxNaW5TY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnJlc2V0UG9zaXRpb24odGhpcy5zY3JvbGwub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5hdXRvUHVsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsRG93blJlZnJlc2gsIF9iID0gX2EudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYiA9PT0gdm9pZCAwID8gOTAgOiBfYiwgX2MgPSBfYS5zdG9wLCBzdG9wID0gX2MgPT09IHZvaWQgMCA/IDQwIDogX2M7XHJcbiAgICAgICAgaWYgKHRoaXMucHVsbGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1pblNjcm9sbFkgPSB0aGlzLnNjcm9sbC5taW5TY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm1pblNjcm9sbFkgPSB0aHJlc2hvbGQ7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGhpcy5zY3JvbGwueCwgdGhyZXNob2xkKTtcclxuICAgICAgICB0aGlzLnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nRG93bicpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRoaXMuc2Nyb2xsLngsIHN0b3AsIHRoaXMuc2Nyb2xsLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnBsdWdpbk5hbWUgPSAncHVsbERvd25SZWZyZXNoJztcclxuICAgIHJldHVybiBQdWxsRG93bjtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUHVsbERvd247XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBwdWxsLXVwXG4gKiAoYykgMjAxNi0yMDIwIHVzdGJodWFuZ3lpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbnZhciBzb3VyY2VQcmVmaXggPSAncGx1Z2lucy5wdWxsVXBMb2FkJztcclxudmFyIHByb3BlcnRpZXNNYXAgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZmluaXNoUHVsbFVwJyxcclxuICAgICAgICBuYW1lOiAnZmluaXNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdvcGVuUHVsbFVwJyxcclxuICAgICAgICBuYW1lOiAnb3BlbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnY2xvc2VQdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdjbG9zZSdcclxuICAgIH1cclxuXTtcclxudmFyIHByb3BlcnRpZXNQcm94eUNvbmZpZyA9IHByb3BlcnRpZXNNYXAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgc291cmNlS2V5OiBzb3VyY2VQcmVmaXggKyBcIi5cIiArIGl0ZW0ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cbnZhciBQdWxsVXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQdWxsVXAoYnNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbCA9IGJzY3JvbGw7XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJzY3JvbGwucmVnaXN0ZXJUeXBlKFsncHVsbGluZ1VwJ10pO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5wcm94eShwcm9wZXJ0aWVzUHJveHlDb25maWcpO1xyXG4gICAgfVxyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5fd2F0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtdXN0IHdhdGNoIHNjcm9sbCBpbiByZWFsIHRpbWVcclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wcm9iZVR5cGUgPSAzIC8qIFJlYWx0aW1lICovO1xyXG4gICAgICAgIHRoaXMud2F0Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vbignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5fY2hlY2tUb0VuZCA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5ic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuYnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsVXBMb2FkLnRocmVzaG9sZCwgdGhyZXNob2xkID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYTtcclxuICAgICAgICBpZiAodGhpcy5ic2Nyb2xsLm1vdmluZ0RpcmVjdGlvblkgPT09IDEgLyogUG9zaXRpdmUgKi8gJiZcclxuICAgICAgICAgICAgcG9zLnkgPD0gdGhpcy5ic2Nyb2xsLm1heFNjcm9sbFkgKyB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcHVsbHVwV2F0Y2hpbmcgc3RhdHVzIGFmdGVyIHNjcm9sbCBlbmQgdG8gcHJvbWlzZSB0aGF0IHRyaWdnZXIgJ3B1bGxpbmdVcCcgb25seSBvbmNlIHdoZW4gcHVsbGluZyB1cFxyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwub25jZSgnc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMud2F0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nVXAnKTtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLm9mZignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC5vbmNlKCdzY3JvbGxFbmQnLCB0aGlzLl93YXRjaCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vZmYoJ3Njcm9sbCcsIHRoaXMuX2NoZWNrVG9FbmQpO1xyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wbHVnaW5OYW1lID0gJ3B1bGxVcExvYWQnO1xyXG4gICAgcmV0dXJuIFB1bGxVcDtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUHVsbFVwO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIvcm91dGVyLmpzJ1xuXG5jb25zdCBNT0RFID0gJ2hhc2gnOyAgLy8gaGFzaCAvIGhpc3RvcnkgXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih7XG4gICAgICBtb2RlOiBNT0RFXG4gICAgfSk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICB0aGlzLmluaXRTd2lwZXIoKTtcbiAgICAvLyB0aGlzLnJvdXRlci5nbygncG9zaXRpb24nKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxuXG4gIC8vIOaJgOacieeahOS6i+S7tlxuICBpbml0RXZlbnQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIOaJvuWIsOaJgOacieeahCBsaSDnu5Hlrprkuovku7ZcbiAgICAkKFwiI25hdiBsaVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7ICAvLyDov5nph4zkuI3og73lhpnmiJDnrq3lpLTlh73mlbBcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgbGV0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgc2VsZi5teVN3aXBlci5zbGlkZVRvKGluZGV4LCAzMDAsIGZhbHNlKTtcbiAgICB9KVxuXG4gICAgLy8g6aG16Z2i5Yi35paw5pe2XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGxldCB1cmwgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykgfHwgJ3Bvc2l0aW9uJztcbiAgICAgIGlmIChNT0RFID09PSAnaGlzdG9yeScpIHsgdXJsID0gaGlzdG9yeS5zdGF0ZSA/IGhpc3Rvcnkuc3RhdGUucGF0aCA6ICdwb3NpdGlvbicgfVxuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICBzZWxmLnJvdXRlci5nbyh1cmwpO1xuICAgICAgdGhpcy5zbGlkZVRvU3dpcGVyKHVybCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZSh1cmwpO1xuICAgICAgJCgnI2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgfSlcblxuXG4gICAgaWYgKE1PREUgPT09ICdoYXNoJykge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgLy8g5ou/5YiwIGhhc2gg55qE5YC8XG4gICAgICAgIGxldCBoYXNoID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAvLyDmoLnmja4gaGFzaCDlgLzliIfmjaLliLDlr7nlupTnmoTop4blm75cbiAgICAgICAgLy8gc2VsZi5yb3V0ZXIuZ28oaGFzaCk7XG4gICAgICAgIHRoaXMuc2xpZGVUb1N3aXBlcihoYXNoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoaGFzaCk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoaXN0b3J5IOaooeW8j1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBoaXN0b3J5LnN0YXRlLnBhdGg7IC8vIOi/meWdl+aciemXrumimFxuICAgICAgICBzZWxmLnJvdXRlci5nbyh1cmwpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZSh1cmwpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgLy8g6K6+572u6I+c5Y2V55qE5r+A5rS754q25oCBXG4gIHNldEFjdGl2ZSh1cmwpIHtcbiAgICAvLyDmoLnmja4gdXJsIOaJvuWIsOWvueW6lOeahCBsae+8jOeEtuWQjuiuqeS7lumAieS4rVxuICAgICQoXCIjbmF2XCIpLmZpbmQoYGxpW2RhdGEtdXJsPSR7dXJsfV1gKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxuICAvLyBTd2lwZXJcbiAgaW5pdFN3aXBlcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXMucm91dGVyO1xuICAgIHRoaXMubXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIC8vIGxvb3A6IHRydWUsXG4gICAgICBvbjoge1xuICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjdXIgPSAkKCcjbmF2JykuZmluZCgnbGknKS5lcSh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICBsZXQgdXJsID0gY3VyLmF0dHIoJ2RhdGEtdXJsJyk7XG4gICAgICAgICAgc2VsZi5nbyh1cmwpO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLy8g5qC55o2uIHVybCDliIfmjaLliLDmjIflrprnmoQgc3dpcGVyXG4gIHNsaWRlVG9Td2lwZXIodXJsKSB7XG4gICAgbGV0IGluZGV4ID0gJChcIiNuYXZcIikuZmluZChgbGlbZGF0YS11cmw9JHt1cmx9XWApLmluZGV4KCk7XG4gICAgdGhpcy5teVN3aXBlci5zbGlkZVRvKGluZGV4LCAzMDAsIGZhbHNlKTtcbiAgfVxuXG59XG5cbm5ldyBBcHAoKTsiLCJpbXBvcnQgZXJyb3JUcGwgZnJvbSAnLi4vLi4vdmlld3MvZXJyb3IvZXJyUGFnZS5odG1sJ1xuXG5jbGFzcyBlcnJvckNvbnRyb2xsZXIge1xuICByZW5kZXIoKSB7XG4gICAgJCgnI21haW4nKS5odG1sKGVycm9yVHBsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgZXJyb3JDb250cm9sbGVyKCk7IiwiaW1wb3J0IHBvc2l0aW9uVHBsIGZyb20gJy4uLy4uL3ZpZXdzL3Bvc2l0aW9uL3Bvc2l0aW9uLmh0bWwnXG5pbXBvcnQgaXRlbVRwbCBmcm9tICcuLi8uLi92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbi1pdGVtLmh0bWwnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9tb2RlbC9odHRwJztcbmltcG9ydCBCU2Nyb2xsIGZyb20gJ0BiZXR0ZXItc2Nyb2xsL2NvcmUnXG5pbXBvcnQgUHVsbERvd24gZnJvbSAnQGJldHRlci1zY3JvbGwvcHVsbC1kb3duJyAgLy8g5LiL5ouJ5o+S5Lu2XG5pbXBvcnQgUHVsbHVwIGZyb20gJ0BiZXR0ZXItc2Nyb2xsL3B1bGwtdXAnICAvLyDkuIrmi4nmj5Lku7ZcblxuXG4vLyDms6jlhozmj5Lku7ZcbkJTY3JvbGwudXNlKFB1bGxEb3duKTtcbkJTY3JvbGwudXNlKFB1bGx1cCk7XG5cbmNsYXNzIFBvc2l0aW9uQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g56ys5Yeg6aG1XG4gICAgdGhpcy5wYWdlTm8gPSAxO1xuICAgIC8vIOavj+mhteeahOadoeaVsFxuICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAvLyDlhajpg6jnmoTliJfooajmlbDmja5cbiAgICB0aGlzLmRhdGFsaXN0ID0gW107XG5cbiAgICB0aGlzLmlzTW9yZSA9IHRydWU7ICAvLyDmmK/lkKbmnInmm7TlpJpcblxuICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gIH1cblxuICAvLyDkuovku7ZcbiAgaW5pdEV2ZW50KCkge1xuICAgICQoXCIjbWFpblwiKS5vbignY2xpY2snLCAnLml0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgIGxldCBwb3NpdGlvbklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9kZXRhaWwuaHRtbD8nICsgcG9zaXRpb25JZDtcbiAgICB9KVxuICB9XG5cblxuICAvLyDor7fmsYLmlbDmja5cbiAgYXN5bmMgZ2V0TGlzdCgpIHtcbiAgICBjb25zb2xlLmxvZygn5Yqg6L295pWw5o2uLi4uJyk7XG4gICAgJCgnI2xvYWRpbmcnKS5zaG93KCk7XG4gICAgbGV0IHVybCA9IGAvYXBpL3Bvc2l0aW9ubGlzdD9fcGFnZT0ke3RoaXMucGFnZU5vfSZfbGltaXQ9JHt0aGlzLnBhZ2VTaXplfWA7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldCh1cmwpO1xuICAgIGlmIChyZXN1bHQubGVuZ3RoIDwgdGhpcy5wYWdlU2l6ZSkgdGhpcy5pc01vcmUgPSBmYWxzZTtcbiAgICB0aGlzLmRhdGFsaXN0ID0gdGhpcy5kYXRhbGlzdC5jb25jYXQocmVzdWx0KTtcbiAgICBsZXQgaHRtbCA9IHRlbXBsYXRlLnJlbmRlcihpdGVtVHBsLCB7IGRhdGFsaXN0OiB0aGlzLmRhdGFsaXN0IH0pXG4gICAgJChcIi5wb3NpdGlvbi1saXN0XCIpLmh0bWwoaHRtbCk7XG4gICAgJCgnI2xvYWRpbmcnKS5oaWRlKCk7XG4gIH1cblxuICAvLyDljZXkuIDogYzotKNcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCQoJyNzd2lwZXItcG9zaXRpb24nKS5odG1sKHBvc2l0aW9uVHBsKSk7XG4gICAgJChcIiNzd2lwZXItcG9zaXRpb25cIikuaHRtbChwb3NpdGlvblRwbCk7XG4gICAgYXdhaXQgdGhpcy5nZXRMaXN0KCk7XG5cbiAgICB0aGlzLnNjcm9sbCA9IG5ldyBCU2Nyb2xsKCcjcG9zaXRpb24td3JhcHBlcicsIHtcbiAgICAgIHNjcm9sbFk6IHRydWUsXG4gICAgICBwdWxsRG93blJlZnJlc2g6IHtcbiAgICAgICAgdGhyZXNob2xkOiA1MCwgIC8vIOS4i+aLieWIsOS7gOS5iOS9jee9ruWIt+aWsFxuICAgICAgICBzdG9wOiAwICAvLyDlm57lvLnlgZznlZnnmoTot53nprtcbiAgICAgIH0sXG4gICAgICBjbGljazogdHJ1ZSxcbiAgICAgIHB1bGxVcExvYWQ6IHRydWUgIC8vIOaYr+WQpuS4iuaLiVxuICAgIH0pXG4gICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgdGhpcy5zY3JvbGwub24oJ3B1bGxpbmdEb3duJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlTm8gPSAxOyAgLy8g5LiL5ouJ55qE5pe25YCZ5oqKIOmhteaVsOiuvue9ruS4ujFcbiAgICAgIHRoaXMuZGF0YWxpc3QgPSBbXTtcbiAgICAgIHRoaXMuaXNNb3JlID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0TGlzdCgpO1xuICAgICAgdGhpcy5zY3JvbGwuZmluaXNoUHVsbERvd24oKTtcbiAgICAgIHRoaXMuc2Nyb2xsLnJlZnJlc2goKTtcbiAgICB9KVxuXG4gICAgLy8g55uR5ZCs5a6e5pe25rua5YqoXG4gICAgdGhpcy5zY3JvbGwub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnkgPiAxMCkge1xuICAgICAgICAkKCcucmVmZXJzaCcpLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5yZWZlcnNoJykuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDkuIrmi4nliqDovb3miJDlip9cbiAgICB0aGlzLnNjcm9sbC5vbigncHVsbGluZ1VwJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTW9yZSkge1xuICAgICAgICAkKCcubW9yZScpLnRleHQoJ+ayoeacieabtOWkmueahOaVsOaNruWVpi4uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICQoJy5tb3JlJykuaGlkZSgpO1xuICAgICAgICAgIHRoaXMuc2Nyb2xsLnJlZnJlc2goKTtcbiAgICAgICAgfSwgMjAwMClcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWdlTm8rKztcbiAgICAgIGF3YWl0IHRoaXMuZ2V0TGlzdCgpO1xuICAgICAgdGhpcy5zY3JvbGwuZmluaXNoUHVsbFVwKCk7XG4gICAgICB0aGlzLnNjcm9sbC5yZWZyZXNoKCk7XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zaXRpb25Db250cm9sbGVyKCk7IiwiaW1wb3J0IHByb2ZpbGVUcGwgZnJvbSAnLi4vLi4vdmlld3MvcHJvZmlsZS9wcm9maWxlLmh0bWwnXG5cbmNsYXNzIHByb2ZpbGVDb250cm9sbGVyIHtcbiAgcmVuZGVyKCkge1xuICAgICQoJyNzd2lwZXItcHJvZmlsZScpLmh0bWwocHJvZmlsZVRwbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IHByb2ZpbGVDb250cm9sbGVyKCk7IiwiaW1wb3J0IHNlYXJjaFRwbCBmcm9tICcuLi8uLi92aWV3cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG5cbmNsYXNzIHNlYXJjaENvbnRyb2xsZXIge1xuICByZW5kZXIoKSB7XG4gICAgJCgnI3N3aXBlci1zZWFyY2gnKS5odG1sKHNlYXJjaFRwbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IHNlYXJjaENvbnRyb2xsZXIoKTsiLCIvLyDmlbDmja7orr/pl67lsYJcblxuY29uc3QgZ2V0ID0gKHVybCwgZGF0YSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmwsICAvLyB1cmw6dXJsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGEsXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc2xvdmUocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xufVxuXG5jb25zdCBwb3N0ID0gKCkgPT4ge1xuXG59XG5cbmV4cG9ydCB7XG4gIGdldCxcbiAgcG9zdFxufSIsImltcG9ydCBwb3NpdG9uIGZyb20gJy4uL2NvbnRyb2xsZXIvcG9zaXRpb25Db250cm9sbGVyLmpzJ1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9jb250cm9sbGVyL3NlYXJjaENvbnRyb2xsZXIuanMnXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi9jb250cm9sbGVyL3Byb2ZpbGVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IGVycm9yIGZyb20gJy4uL2NvbnRyb2xsZXIvZXJyb3JDb250cm9sbGVyLmpzJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGU7XG5cbiAgICAvLyDot6/nlLHphY3nva5cbiAgICB0aGlzLnJvdXRycyA9IHtcbiAgICAgICdwb3NpdGlvbic6IHBvc2l0b24sXG4gICAgICAnc2VhcmNoJzogc2VhcmNoLFxuICAgICAgJ3Byb2ZpbGUnOiBwcm9maWxlXG4gICAgfVxuICB9XG5cbiAgZ28ocGF0aCkge1xuICAgIHRoaXMubW9kZSA9PT0gJ2hhc2gnID8gbG9jYXRpb24uaGFzaCA9IHBhdGggOiBoaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsICc/JyArIHBhdGgpO1xuICAgIHRoaXMubG9hZFZpZXcocGF0aCk7XG4gICAgLy8gaWYgKHRoaXMubW9kZSA9PT0gJ2hhc2gnKSB7ICAvLyBoYXNoIFxuICAgIC8vICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgLy8gfSBlbHNlIHsgIC8vIGhpc3RvcnlcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHBhdGgpO1xuICAgIC8vICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCAnPycgKyBwYXRoKTtcbiAgICAvLyB9XG4gIH1cblxuICBsb2FkVmlldyhwYXRoKSB7XG4gICAgaWYgKHRoaXMucm91dHJzW3BhdGhdKSB7XG4gICAgICB0aGlzLnJvdXRyc1twYXRoXS5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gNDA0IOmAu+i+kVxuICAgICAgZXJyb3IucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1cXFwiZW5cXFwiPjxoZWFkPiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPiAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT48L2hlYWQ+PGJvZHk+ICA8aDI+NDA0IE5vdCBGb3VuZDwvaDI+PC9ib2R5PjwvaHRtbD5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJ7e2VhY2ggZGF0YWxpc3R9fTxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtaWQ9XFxcInt7JHZhbHVlW1xcJ3Bvc2l0aW9uSWRcXCddfX1cXFwiPiAgPGltZyBzcmM9XFxcImh0dHA6Ly93d3cubGdzdGF0aWMuY29tL3t7JHZhbHVlW1xcJ2NvbXBhbnlMb2dvXFwnXX19XFxcIiBhbHQ9XFxcIlxcXCI+ICA8ZGl2IGNsYXNzPVxcXCJkZXNjXFxcIj4gICAgPGgyPnt7JHZhbHVlW1xcJ2NvbXBhbnlOYW1lXFwnXX19PC9oMj4gICAgPHAgY2xhc3M9XFxcInBvc1xcXCI+ICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hbWVcXFwiPiAgICAgICAge3skdmFsdWVbXFwncG9zaXRpb25OYW1lXFwnXX19W3t7JHZhbHVlW1xcJ2NpdHlcXCddfX1dICAgICAgPC9zcGFuPiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYWxhcnlcXFwiPiAgICAgICAge3skdmFsdWVbXFwnc2FsYXJ5XFwnXX19ICAgICAgPC9zcGFuPiAgICA8L3A+ICAgIDxwIGNsYXNzPVxcXCJ0aW1lXFxcIj4gICAgICB7eyR2YWx1ZVtcXCdjcmVhdGVUaW1lXFwnXX19ICAgIDwvcD4gIDwvZGl2PjwvZGl2Pnt7L2VhY2h9fVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInBvc2l0aW9uLXdyYXBwZXJcXFwiPiAgPGRpdj4gICAgPGRpdiBjbGFzcz1cXFwicmVmZXJzaFxcXCI+5LiL5ouJ5Yi35pawPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbVxcXCI+ICAgICAgPHNwYW4+MTDnp5LkuK3lrprliLbogYzkvY08L3NwYW4+ICAgICAgPGJ1dHRvbj7ljrvnmbvlvZU8L2J1dHRvbj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcInBvc2l0aW9uLWxpc3RcXFwiPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cXFwibW9yZVxcXCI+ICAgICAg5Yqg6L295pu05aSaICAgIDwvZGl2PiAgPC9kaXY+PC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPnByb2ZpbGU8L2gyPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5zZWFyY2g8L2gyPlwiIl0sInNvdXJjZVJvb3QiOiIifQ==