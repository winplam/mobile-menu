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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu.js */ \"./src/mobile-menu.js\");\n\n\n// Menu sections\nconst sections = ['Section 1', 'Section 2', 'Section 3']\n\n// Panel content\nconst panels = [\n  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n]\n\n// Call method to generate menu. The first parameter is the ID of the parent element\nObject(_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().createMenu('mobile-menu', sections, panels)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mobile-menu.js":
/*!****************************!*\
  !*** ./src/mobile-menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mobileMenu() {\n  function createPanel(button, panel, index) {\n    const newPanel = document.createElement('div')\n    newPanel.className = 'panel'\n    // newPanel.id = `panel-${index}`\n    const paragraph = document.createElement('p')\n    paragraph.textContent = panel\n    newPanel.appendChild(paragraph)\n    button.parentNode.insertBefore(newPanel, button.nextSibling)\n    button.parentNode.insertBefore(newPanel, button.nextSibling)\n  }\n\n  function createMenu(parent, sections, panels) {\n    const parentElement = document.getElementById('mobile-menu')\n    sections.forEach((section, index) => {\n        const newSection = document.createElement('button')\n        newSection.className = 'mobile-menu'\n        // newSection.id = `menu-${index}`\n        newSection.textContent = section\n        parentElement.appendChild(newSection)\n        createPanel(newSection, panels[index], index)\n      },\n    )\n    accordion(document.querySelectorAll('.mobile-menu'))\n  }\n\n  const accordion = (accordion) => {\n    console.log(accordion)\n    const togglePanel = (e) => {\n      e.target.classList.toggle('active')\n      let panel = e.target.nextElementSibling\n      panel.style.maxHeight\n        ? panel.style.maxHeight = null\n        : panel.style.maxHeight = panel.scrollHeight + 'px'\n    }\n\n    accordion.forEach(e => {\n      e.addEventListener('click', e => togglePanel(e))\n    })\n  }\n\n  return { createMenu }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileMenu);\n\n\n//# sourceURL=webpack:///./src/mobile-menu.js?");

/***/ })

/******/ });