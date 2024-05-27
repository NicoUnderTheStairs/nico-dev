/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/02-rock/hero/hero.js":
/*!*****************************************!*\
  !*** ./components/02-rock/hero/hero.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_config/base */ \"./components/_config/base.js\");\n\n\nclass Hero extends _config_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    const allPhones = [...el.querySelectorAll('.phone')];\n\n    allPhones.forEach((phone) => {\n      // scroll event\n      document.addEventListener('scroll', () => {\n        // get y position of window\n        const y = window.scrollY;\n        // random variable between 0.05 and 0.2, round to 2 decimal places\n        phone.querySelector('.phonerect').style.transform = `translateY(-${y * 0.15}px)`;\n      });\n    });\n  }\n}\n\nHero.className = 'Hero';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n\n//# sourceURL=webpack://nico-dev/./components/02-rock/hero/hero.js?");

/***/ }),

/***/ "./components/02-rock/projectGrid/projectGrid.js":
/*!*******************************************************!*\
  !*** ./components/02-rock/projectGrid/projectGrid.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_config/base */ \"./components/_config/base.js\");\n\n\nclass ProjectGrid extends _config_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    const allProjects = [...el.querySelectorAll('.projectGrid__desktop__item')];\n    const allProjectsImg = [...el.querySelectorAll('.projectGrid__desktop__img')];\n\n    // eslint-disable-next-line no-plusplus\n    for (let i = 0; i < allProjects.length; i++) {\n      const project = allProjects[i];\n      // mouse over event\n      project.addEventListener('mouseover', () => {\n        // if mouse over, remove active class from all other projects\n        allProjectsImg.forEach((item) => {\n          item.classList.remove('projectGrid__desktop__img--active');\n        });\n        // add active class to the current project\n        allProjectsImg[i].classList.add('projectGrid__desktop__img--active');\n      });\n    }\n  }\n}\n\nProjectGrid.className = 'ProjectGrid';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectGrid);\n\n\n//# sourceURL=webpack://nico-dev/./components/02-rock/projectGrid/projectGrid.js?");

/***/ }),

/***/ "./components/03-boulder/footer/footer.js":
/*!************************************************!*\
  !*** ./components/03-boulder/footer/footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_config/base */ \"./components/_config/base.js\");\n\n\nclass Footer extends _config_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    const timeElement = el.querySelector('.clock');\n\n    function updateTime() {\n      const now = new Date();\n      const hours = now.getHours();\n      const minutes = now.getMinutes();\n      const seconds = now.getSeconds();\n\n      // Format the string with leading zeroes\n      const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;\n\n      timeElement.innerText = clockStr;\n\n      // Set a timeout for one minute\n      setTimeout(updateTime, 1000);\n    }\n\n    updateTime();\n  }\n}\n\nFooter.className = 'Footer';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n\n//# sourceURL=webpack://nico-dev/./components/03-boulder/footer/footer.js?");

/***/ }),

/***/ "./components/03-boulder/header/header.js":
/*!************************************************!*\
  !*** ./components/03-boulder/header/header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_config/base */ \"./components/_config/base.js\");\n\n\nclass Header extends _config_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    const hamburger = el.querySelector('.header__hamburger');\n    if (hamburger === null) return;\n\n    const nav = el.querySelector('.header__nav');\n    const body = document.querySelector('body');\n\n    const toggleNav = () => {\n      if (nav.classList.contains('header__nav--open')) {\n        nav.classList.remove('header__nav--open');\n        hamburger.classList.remove('header__hamburger--open');\n        body.classList.remove('no-scroll');\n      } else {\n        nav.classList.add('header__nav--open');\n        hamburger.classList.add('header__hamburger--open');\n        body.classList.add('no-scroll');\n      }\n    };\n\n    hamburger.onclick = (e) => {\n      e.preventDefault();\n      toggleNav();\n    };\n  }\n}\n\nHeader.className = 'Header';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://nico-dev/./components/03-boulder/header/header.js?");

/***/ }),

/***/ "./components/_config/base.js":
/*!************************************!*\
  !*** ./components/_config/base.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! array-from */ \"./node_modules/array-from/index.js\");\n/* harmony import */ var array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(array_from__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./components/_config/setup.js\");\n\n\n\nclass Base {\n  constructor(el) {\n    this.$el = el;\n  }\n\n  static selector() {\n    const prefix = _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectorPrefix || 'setup';\n    if (_setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectorType === 'css_class') {\n      return `.${prefix}-${this.className.toLowerCase()}`;\n    }\n    return `[data-${prefix}-${this.className.toLowerCase()}]`;\n  }\n\n  static init(element = document.body) {\n    const selector = this.selector();\n    const elementsToInit = element.querySelectorAll(selector);\n\n    // return elementsToInit.forEach(el => new this(el), this);\n    return array_from__WEBPACK_IMPORTED_MODULE_0___default()(elementsToInit).forEach((el) => new this(el), this);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);\n\n\n//# sourceURL=webpack://nico-dev/./components/_config/base.js?");

/***/ }),

/***/ "./components/_config/setup.js":
/*!*************************************!*\
  !*** ./components/_config/setup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Setup { }\n\nSetup.selectorType = 'css_class';\nSetup.selectorPrefix = 'js';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setup);\n\n\n//# sourceURL=webpack://nico-dev/./components/_config/setup.js?");

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _02_rock_hero_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./02-rock/hero/hero */ \"./components/02-rock/hero/hero.js\");\n/* harmony import */ var _02_rock_projectGrid_projectGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02-rock/projectGrid/projectGrid */ \"./components/02-rock/projectGrid/projectGrid.js\");\n/* harmony import */ var _03_boulder_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03-boulder/header/header */ \"./components/03-boulder/header/header.js\");\n/* harmony import */ var _03_boulder_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./03-boulder/footer/footer */ \"./components/03-boulder/footer/footer.js\");\n\n\n\n\n\n__webpack_require__(/*! ./main.scss */ \"./components/main.scss\");\n\nfunction ready(fn) {\n  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}\n\nready(() => {\n  const html = document.querySelector('html');\n  const Component = window.Streusel || {};\n\n  html.classList.remove('no-js');\n\n  Component.Header = _03_boulder_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n  Component.Footer = _03_boulder_footer_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n  Component.ProjectGrid = _02_rock_projectGrid_projectGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n  Component.Hero = _02_rock_hero_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n});\n\n\n//# sourceURL=webpack://nico-dev/./components/main.js?");

/***/ }),

/***/ "./node_modules/array-from/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-from/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = (typeof Array.from === 'function' ?\n  Array.from :\n  __webpack_require__(/*! ./polyfill */ \"./node_modules/array-from/polyfill.js\")\n);\n\n\n//# sourceURL=webpack://nico-dev/./node_modules/array-from/index.js?");

/***/ }),

/***/ "./node_modules/array-from/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/array-from/polyfill.js ***!
  \*********************************************/
/***/ ((module) => {

eval("// Production steps of ECMA-262, Edition 6, 22.1.2.1\n// Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from\nmodule.exports = (function() {\n  var isCallable = function(fn) {\n    return typeof fn === 'function';\n  };\n  var toInteger = function (value) {\n    var number = Number(value);\n    if (isNaN(number)) { return 0; }\n    if (number === 0 || !isFinite(number)) { return number; }\n    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n  };\n  var maxSafeInteger = Math.pow(2, 53) - 1;\n  var toLength = function (value) {\n    var len = toInteger(value);\n    return Math.min(Math.max(len, 0), maxSafeInteger);\n  };\n  var iteratorProp = function(value) {\n    if(value != null) {\n      if(['string','number','boolean','symbol'].indexOf(typeof value) > -1){\n        return Symbol.iterator;\n      } else if (\n        (typeof Symbol !== 'undefined') &&\n        ('iterator' in Symbol) &&\n        (Symbol.iterator in value)\n      ) {\n        return Symbol.iterator;\n      }\n      // Support \"@@iterator\" placeholder, Gecko 27 to Gecko 35\n      else if ('@@iterator' in value) {\n        return '@@iterator';\n      }\n    }\n  };\n  var getMethod = function(O, P) {\n    // Assert: IsPropertyKey(P) is true.\n    if (O != null && P != null) {\n      // Let func be GetV(O, P).\n      var func = O[P];\n      // ReturnIfAbrupt(func).\n      // If func is either undefined or null, return undefined.\n      if(func == null) {\n        return void 0;\n      }\n      // If IsCallable(func) is false, throw a TypeError exception.\n      if (!isCallable(func)) {\n        throw new TypeError(func + ' is not a function');\n      }\n      return func;\n    }\n  };\n  var iteratorStep = function(iterator) {\n    // Let result be IteratorNext(iterator).\n    // ReturnIfAbrupt(result).\n    var result = iterator.next();\n    // Let done be IteratorComplete(result).\n    // ReturnIfAbrupt(done).\n    var done = Boolean(result.done);\n    // If done is true, return false.\n    if(done) {\n      return false;\n    }\n    // Return result.\n    return result;\n  };\n\n  // The length property of the from method is 1.\n  return function from(items /*, mapFn, thisArg */ ) {\n    'use strict';\n\n    // 1. Let C be the this value.\n    var C = this;\n\n    // 2. If mapfn is undefined, let mapping be false.\n    var mapFn = arguments.length > 1 ? arguments[1] : void 0;\n\n    var T;\n    if (typeof mapFn !== 'undefined') {\n      // 3. else\n      //   a. If IsCallable(mapfn) is false, throw a TypeError exception.\n      if (!isCallable(mapFn)) {\n        throw new TypeError(\n          'Array.from: when provided, the second argument must be a function'\n        );\n      }\n\n      //   b. If thisArg was supplied, let T be thisArg; else let T\n      //      be undefined.\n      if (arguments.length > 2) {\n        T = arguments[2];\n      }\n      //   c. Let mapping be true (implied by mapFn)\n    }\n\n    var A, k;\n\n    // 4. Let usingIterator be GetMethod(items, @@iterator).\n    // 5. ReturnIfAbrupt(usingIterator).\n    var usingIterator = getMethod(items, iteratorProp(items));\n\n    // 6. If usingIterator is not undefined, then\n    if (usingIterator !== void 0) {\n      // a. If IsConstructor(C) is true, then\n      //   i. Let A be the result of calling the [[Construct]]\n      //      internal method of C with an empty argument list.\n      // b. Else,\n      //   i. Let A be the result of the abstract operation ArrayCreate\n      //      with argument 0.\n      // c. ReturnIfAbrupt(A).\n      A = isCallable(C) ? Object(new C()) : [];\n\n      // d. Let iterator be GetIterator(items, usingIterator).\n      var iterator = usingIterator.call(items);\n\n      // e. ReturnIfAbrupt(iterator).\n      if (iterator == null) {\n        throw new TypeError(\n          'Array.from requires an array-like or iterable object'\n        );\n      }\n\n      // f. Let k be 0.\n      k = 0;\n\n      // g. Repeat\n      var next, nextValue;\n      while (true) {\n        // i. Let Pk be ToString(k).\n        // ii. Let next be IteratorStep(iterator).\n        // iii. ReturnIfAbrupt(next).\n        next = iteratorStep(iterator);\n\n        // iv. If next is false, then\n        if (!next) {\n\n          // 1. Let setStatus be Set(A, \"length\", k, true).\n          // 2. ReturnIfAbrupt(setStatus).\n          A.length = k;\n\n          // 3. Return A.\n          return A;\n        }\n        // v. Let nextValue be IteratorValue(next).\n        // vi. ReturnIfAbrupt(nextValue)\n        nextValue = next.value;\n\n        // vii. If mapping is true, then\n        //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).\n        //   2. If mappedValue is an abrupt completion, return\n        //      IteratorClose(iterator, mappedValue).\n        //   3. Let mappedValue be mappedValue.[[value]].\n        // viii. Else, let mappedValue be nextValue.\n        // ix.  Let defineStatus be the result of\n        //      CreateDataPropertyOrThrow(A, Pk, mappedValue).\n        // x. [TODO] If defineStatus is an abrupt completion, return\n        //    IteratorClose(iterator, defineStatus).\n        if (mapFn) {\n          A[k] = mapFn.call(T, nextValue, k);\n        }\n        else {\n          A[k] = nextValue;\n        }\n        // xi. Increase k by 1.\n        k++;\n      }\n      // 7. Assert: items is not an Iterable so assume it is\n      //    an array-like object.\n    } else {\n\n      // 8. Let arrayLike be ToObject(items).\n      var arrayLike = Object(items);\n\n      // 9. ReturnIfAbrupt(items).\n      if (items == null) {\n        throw new TypeError(\n          'Array.from requires an array-like object - not null or undefined'\n        );\n      }\n\n      // 10. Let len be ToLength(Get(arrayLike, \"length\")).\n      // 11. ReturnIfAbrupt(len).\n      var len = toLength(arrayLike.length);\n\n      // 12. If IsConstructor(C) is true, then\n      //     a. Let A be Construct(C, «len»).\n      // 13. Else\n      //     a. Let A be ArrayCreate(len).\n      // 14. ReturnIfAbrupt(A).\n      A = isCallable(C) ? Object(new C(len)) : new Array(len);\n\n      // 15. Let k be 0.\n      k = 0;\n      // 16. Repeat, while k < len… (also steps a - h)\n      var kValue;\n      while (k < len) {\n        kValue = arrayLike[k];\n        if (mapFn) {\n          A[k] = mapFn.call(T, kValue, k);\n        }\n        else {\n          A[k] = kValue;\n        }\n        k++;\n      }\n      // 17. Let setStatus be Set(A, \"length\", len, true).\n      // 18. ReturnIfAbrupt(setStatus).\n      A.length = len;\n      // 19. Return A.\n    }\n    return A;\n  };\n})();\n\n\n//# sourceURL=webpack://nico-dev/./node_modules/array-from/polyfill.js?");

/***/ }),

/***/ "./components/main.scss":
/*!******************************!*\
  !*** ./components/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../css/main.css\");\n\n//# sourceURL=webpack://nico-dev/./components/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./components/main.js");
/******/ 	
/******/ })()
;