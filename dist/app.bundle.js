webpackJsonp([0],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MuiThemeProvider = __webpack_require__(158);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(263);

var _reactRouterDom = __webpack_require__(349);

var _App = __webpack_require__(376);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_App2.default, null)
    )
  );
};

if (false) {
  module.hot.accept();
}

(0, _reactDom.render)(_react2.default.createElement(Main, null), document.getElementById('root'));

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStyles = {};

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    'Header Body Footer'
  );
};

exports.default = App;

/***/ })

},[156]);