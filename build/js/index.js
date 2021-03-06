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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var button = document.querySelector('#btnToggleModal');
var output = document.querySelector('#output');
var nameInput = document.querySelector('#nameInput');
var label = document.querySelector('.name-row');

button.onclick = greeting;

function greeting() {
  var name = nameInput.value;
  if (name) {
    nameInput.value = '';
    print('Hello, ' + name + '!');
  } else {
    label.classList.add('not-valid');
  }
}

function print(text) {
  output.innerHTML = text;
}

var employees = [{
  name: 'John',
  salary: 2000
}, {
  name: 'Jack',
  salary: 3000
}, {
  name: 'Adam',
  salary: 2200
}];

employees.push({
  name: 'Jim',
  salary: 2550
});

function totalSalaries(employeesArray) {
  var totalCount = 0;

  employeesArray.forEach(function (item) {
    if (typeof item.salary === 'number') {
      totalCount += item.salary;
    }
  });
  return totalCount;
}

var totalResult = totalSalaries(employees);
console.log(totalResult);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function findMax(array) {
    var maxValue = 0;
    array.forEach(function (item) {
        if (typeof item === 'number' && item > maxValue) {
            maxValue = item;
        }
    });
    return maxValue;
}

var maxValue = findMax([1, 42, 32, 56, 89, 101, 56, 2]);
console.log('MaxValue: ' + maxValue);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);