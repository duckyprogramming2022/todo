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

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Model {\n\n    constructor () {\n        this.toDoS = [];\n        this.projects = [];\n        this.today = [];\n        this.todo = {id:'',name:'',description:'',date:'' , projectID : ''};\n        this.project = {id:'',name:'',description:'', toDoIDS: []};\n    }\n\n    createTodo (counter, toDoName, toDoDescription, toDoDate, project = '') {\n        this.todo = {id : counter, type: 'todo', name: toDoName, description: toDoDescription, date: toDoDate, projectID : project};\n        this.toDoS.push(this.todo);\n    };\n\n    createProject (counter, projectName, projectDescription) {\n        this.project = {id:counter, type: 'project', name: projectName, description: projectDescription, toDoIDS : []};\n        this.projects.push(this.project);\n    };\n\n    mergeProjectTodo (toDoID, projectID) {\n      this.toDoS.filter(toDo => toDo['id'] === toDoID ? toDo['projectID'] = projectID : '');\n      this.projects.filter(project => project['id'] === projectID ? project['toDoIDS'].push(toDoID) : '');\n    };\n\n    deleteProject (project) {\n       const id = project['id'];\n       const todos = project['toDoIDS'];\n       this.projects = this.projects.filter(project => project['id'] !== id);\n       todos.forEach(id => this.toDoS.map(todo => todo['id'] === id ? todo['projectID'] = '' : ''));\n    };\n\n    deleteToDo (toDo) {\n        const id = toDo['id'];\n        const project = toDo['projectID'];\n        this.toDoS = this.toDoS.filter(toDo => toDo['id'] !== id);\n        this.projects.forEach(pro => pro['id'] === project ? pro['toDoIDS'] = [] : '')\n     };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\n\n//# sourceURL=webpack://todo/./src/model.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/model.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;