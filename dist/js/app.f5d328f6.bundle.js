webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

var $ = __webpack_require__(0);
window.app = {};

// ----- Path to main SCSS file
var css = __webpack_require__(2);

// ----- Require modules here
var testLog = __webpack_require__(4);

// ----- Call modules here
$(document).ready(function () {
    testLog();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

var $ = __webpack_require__(0);

module.exports = function () {
    console.log('Test log: app ready');
};

/***/ })
],[1]);