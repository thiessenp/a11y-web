/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["A11yWeb"] = factory();
	else
		root["A11yWeb"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\nvar A11yWeb = {\n  Tabs: _tabs_js__WEBPACK_IMPORTED_MODULE_0__.default\n};\nconsole.log('index A11yWeb', A11yWeb);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A11yWeb);\n\n//# sourceURL=webpack://A11yWeb/./src/index.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var keynav_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keynav-web */ \"./node_modules/keynav-web/index.js\");\n/* harmony import */ var keynav_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keynav_web__WEBPACK_IMPORTED_MODULE_0__);\n// tab into tablist\n//      arrow or tab again? next tab item\n//      enter or space? trigger tab\n// trigger tab\n//      updates tab item state &\n//      update tab panel state & shows active tab pannel\n// import KeynavWeb from 'keynav-web';\n // --Better for tree shaking?\n\nkeynav_web__WEBPACK_IMPORTED_MODULE_0__.keynav.dataSelectorList = 'data-ally-web-tablist'; // class Tabs {\n//     constructor(el) {\n//         this.tabsEl = el;\n//     }\n//     init(el=this.tabsEl) {\n//         keynav.init(el);\n//     }\n// }\n\nvar Tabs = {};\n\nTabs.init = function (tabsEl) {\n  keynav_web__WEBPACK_IMPORTED_MODULE_0__.keynav.init(tabsEl);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n//# sourceURL=webpack://A11yWeb/./src/tabs.js?");

/***/ }),

/***/ "./node_modules/keynav-web/index.js":
/*!******************************************!*\
  !*** ./node_modules/keynav-web/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{\"use strict\";var e={740:(e,t,n)=>{n.d(t,{default:()=>f});var i={keys:{},isHotkeysEnabled:!0,init:function(e){!function(e){var t=e||document;t.querySelectorAll(\"[data-knw-hotkey]\").forEach((function(e){var n=e.dataset.knwHotkey;if(n){var l=/^alt/i.test(n),a=/^ctrl/i.test(n);if(r(l||a?n.split(\"+\")[1]:n)){var s=t.querySelector(n);s||(s=e),i.keys[n]={triggerEl:s}}else o(\"Hotkeys: invalid hotkey \"+n)}else o(\"Hotkeys: no hotkey for \"+n)}))}(e),document.addEventListener(\"keyup\",(function(e){if(i.isHotkeysEnabled&&!function(e){return/input|textarea|select/i.test(e.target.tagName)}(e)&&r(e.key)){var t=\"\";e.altKey&&(t=\"alt+\"),e.ctrlKey&&(t=\"ctrl+\"),t+=e.key.toLowerCase();var n=i.keys[t];n&&(n.triggerEl?n.triggerEl.click():o(\"Error: no trigger element for key=\"+t))}}))}};function r(e){return/[a-z]/i.test(e)}function o(e){this.isLog&&console.log(\"Hotkeys Error: \"+e)}function l(e){var t,n=function(e){var t=e.code||e.key||e.keyCode;if(t)return function(e){return\"Esc\"===e||\"Escape\"===e||27===e?\"Escape\":\"Enter\"===e||13===e?\"Enter\":\" \"===e||\"Space\"===e||32===e?\"Space\":\"ArrowUp\"===e||\"Up\"===e||38===e?\"ArrowUp\":\"ArrowDown\"===e||\"Down\"===e||40===e?\"ArrowDown\":\"ArrowRight\"===e||\"Right\"===e||39===e?\"ArrowRight\":\"Delete\"===e||\"Delete\"===e||46===e?\"Delete\":\"End\"===e||\"End\"===e||35===e?\"End\":\"Home\"===e||\"Home\"===e||36===e?\"Home\":void 0}(t)}(e),i=s(this);\"Enter\"===n||\"Space\"===n?(e.preventDefault(),this,(t=i)?t.click():(c(this,t=this.firstElementChild),t.focus())):\"ArrowDown\"===n||\"ArrowRight\"===n?(e.preventDefault(),a(this,i)):\"ArrowUp\"===n||\"ArrowLeft\"===n?(e.preventDefault(),function(e,t){t?t.previousElementSibling?t.previousElementSibling&&(t=t.previousElementSibling).focus():t=e.lastElementChild:t=e.firstElementChild,t&&(c(e,t),t.focus())}(this,i)):\"Home\"===n?(e.preventDefault(),function(e){a(e)}(this)):\"End\"===n&&(e.preventDefault(),function(e){e&&e.lastElementChild&&a(e,e.lastElementChild.previousElementSibling)}(this))}function a(e,t){t&&t.nextElementSibling?t.nextElementSibling&&(t=t.nextElementSibling):t=e.firstElementChild,t&&(c(e,t),t.focus())}function s(e){if(e)return e.querySelector('[tabindex=\"0\"]')}function c(e,t){if(e&&t){var n=s(e);n&&n.setAttribute(\"tabindex\",\"-1\"),t.setAttribute(\"tabindex\",\"0\")}}var u={initialized:!1,dataSelectorList:\"data-knw-keynav-list\",init:function(e){this.initialized||(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"data-knw-keynav-list\";e.querySelectorAll(\"[\".concat(t,\"]\")).forEach((function(e){e&&(e.addEventListener(\"keydown\",l),s(e)||a(e))}))}(e||document,u.dataSelectorList),this.initialized=!0)}};const f={hotkeys:i,keynav:u}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}return n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(740)})().default}));\n\n//# sourceURL=webpack://A11yWeb/./node_modules/keynav-web/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});