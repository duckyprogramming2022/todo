/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n\n\n\nclass Controller {\n\n    constructor () {\n        this.view = new _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    updateView () {\n        const project = document.querySelector('header>span');\n        project.addEventListener('click', event => console.log(event));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://todo/./src/controller.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Model {\n\n    constructor () {\n        this.toDoS = [];\n        this.projects = [];\n        this.today = [];\n        this.todo = {id:'',name:'',description:'',date:'' , projectID : ''};\n        this.project = {id:'',name:'',description:'', toDoIDS: []};\n    }\n\n    createTodo (counter, toDoName, toDoDescription, toDoDate, project = '') {\n        this.todo = {id : counter, type: 'todo', name: toDoName, description: toDoDescription, date: toDoDate, projectID : project};\n        this.toDoS.push(this.todo);\n    };\n\n    createProject (counter, projectName, projectDescription) {\n        this.project = {id:counter, type: 'project', name: projectName, description: projectDescription, toDoIDS : []};\n        this.projects.push(this.project);\n    };\n\n    mergeProjectTodo (toDoID, projectID) {\n      this.toDoS.filter(toDo => toDo['id'] === toDoID ? toDo['projectID'] = projectID : '');\n      this.projects.filter(project => project['id'] === projectID ? project['toDoIDS'].push(toDoID) : '');\n    };\n\n    deleteProject (project) {\n       const id = project['id'];\n       const todos = project['toDoIDS'];\n       this.projects = this.projects.filter(project => project['id'] !== id);\n       todos.forEach(id => this.toDoS.map(todo => todo['id'] === id ? todo['projectID'] = '' : ''));\n    };\n\n    deleteToDo (toDo) {\n        const id = toDo['id'];\n        const project = toDo['projectID'];\n        this.toDoS = this.toDoS.filter(toDo => toDo['id'] !== id);\n        this.projects.forEach(pro => pro['id'] === project ? pro['toDoIDS'] = [] : '')\n     };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\n\n//# sourceURL=webpack://todo/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass View {\n\n    constructor () {\n        this.test = '';\n    }\n\n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View); \n\n\n//# sourceURL=webpack://todo/./src/view.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controller.js");
/******/ 	
/******/ })()
;