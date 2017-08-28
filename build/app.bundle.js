webpackJsonp([0],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FlatButton = __webpack_require__(477);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = __webpack_require__(61);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(480);

var _TextField2 = _interopRequireDefault(_TextField);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(486);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = _styles2.default.button,
    textField = _styles2.default.textField;


var Login = function Login(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { zDepth: 5, style: _styles2.default.login },
      _react2.default.createElement(_TextField2.default, {
        floatingLabelFocusStyle: { color: '#404040' },
        floatingLabelText: 'username',
        style: textField,
        underlineFocusStyle: { borderColor: '#404040' }
      }),
      _react2.default.createElement(_TextField2.default, {
        floatingLabelFocusStyle: { color: '#404040' },
        floatingLabelText: 'password',
        style: textField,
        type: 'password',
        underlineFocusStyle: { borderColor: '#404040' }
      }),
      _react2.default.createElement(_FlatButton2.default, { label: 'login', style: button }),
      _react2.default.createElement(_FlatButton2.default, { label: 'forgot', style: button })
    )
  );
};

exports.default = Login;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(510);


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getMuiTheme = __webpack_require__(128);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(259);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactRedux = __webpack_require__(74);

var _reactRouterDom = __webpack_require__(49);

var _redux = __webpack_require__(117);

var _App = __webpack_require__(438);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(509);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(_reducers2.default) },
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_App2.default, null)
      )
    )
  );
};

if (true) {
  module.hot.accept();
}

(0, _reactDom.render)(_react2.default.createElement(Main, null), document.getElementById('root'));

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(74);

var _app = __webpack_require__(439);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var drawerOpen = _ref.drawerOpen;
  return {
    drawerOpen: drawerOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: function toggleDrawer() {
      dispatch({
        type: 'TOGGLE_DRAWER'
      });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_app2.default);

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppBar = __webpack_require__(440);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(467);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(49);

var _body = __webpack_require__(473);

var _body2 = _interopRequireDefault(_body);

var _login = __webpack_require__(203);

var _login2 = _interopRequireDefault(_login);

var _Menu = __webpack_require__(488);

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = __webpack_require__(508);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var drawerOpen = _ref.drawerOpen,
      toggleDrawer = _ref.toggleDrawer;
  return _react2.default.createElement(
    'div',
    { style: _styles2.default.app },
    _react2.default.createElement(_AppBar2.default, {
      onLeftIconButtonTouchTap: toggleDrawer,
      style: _styles2.default.appBar,
      title: _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', style: _styles2.default.title },
        'autograde'
      ),
      zDepth: 0
    }),
    _react2.default.createElement(
      _Drawer2.default,
      {
        docked: false,
        onRequestChange: toggleDrawer,
        open: drawerOpen
      },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(_body2.default, null)
  );
};

exports.default = App;

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(49);

var _AuthRoute = __webpack_require__(474);

var _AuthRoute2 = _interopRequireDefault(_AuthRoute);

var _home = __webpack_require__(476);

var _home2 = _interopRequireDefault(_home);

var _login = __webpack_require__(203);

var _login2 = _interopRequireDefault(_login);

var _styles = __webpack_require__(487);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body() {
    return _react2.default.createElement(
        'div',
        { style: _styles2.default.body },
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default })
    );
};

exports.default = Body;

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(74);

var _authRoute = __webpack_require__(475);

var _authRoute2 = _interopRequireDefault(_authRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFrom: function setFrom(from) {
      dispatch({
        from: from,
        type: 'SET_FROM'
      });
    }
  };
};

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_authRoute2.default);

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AuthRoute = function AuthRoute(_ref) {
  var Component = _ref.component,
      loggedIn = _ref.loggedIn,
      setFrom = _ref.setFrom,
      rest = _objectWithoutProperties(_ref, ['component', 'loggedIn', 'setFrom']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      if (loggedIn) {
        return _react2.default.createElement(Component, props);
      } else {
        setFrom(props.location);
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
      }
    }
  }));
};

exports.default = AuthRoute;

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'this is Meya is the ',
    _react2.default.createElement(
      'b',
      null,
      'cutest'
    ),
    ' bape',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/login' },
      ' Login'
    )
  );
};

exports.default = Home;

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  button: {
    color: '#404040',
    marginTop: '24px'
  },
  login: {
    alignItems: 'center',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '8px'
  },
  textField: {
    display: 'block'
  }
};

exports.default = styles;

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  body: {
    alignItems: 'center',
    background: 'navy',
    display: 'flex',
    flexDirection: 'column',
    height: '75%',
    justifyContent: 'center'
  }
};

exports.default = styles;

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(74);

var _menu = __webpack_require__(489);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: function toggleDrawer() {
      dispatch({
        type: 'TOGGLE_DRAWER'
      });
    }
  };
};

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(_menu2.default);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__(490);

var _Divider2 = _interopRequireDefault(_Divider);

var _MenuItem = __webpack_require__(492);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Subheader = __webpack_require__(205);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(49);

var _styles = __webpack_require__(507);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuLink = _styles2.default.menuLink;


var Menu = function Menu(_ref) {
  var toggleDrawer = _ref.toggleDrawer;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Subheader2.default,
      null,
      'Classes'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/cst334', style: menuLink },
      _react2.default.createElement(_MenuItem2.default, {
        onClick: toggleDrawer,
        primaryText: 'Operating Systems (CST336)',
        style: menuLink
      })
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/cst463', style: menuLink },
      _react2.default.createElement(_MenuItem2.default, {
        onClick: toggleDrawer,
        primaryText: 'Data Mining (CST463)',
        style: menuLink
      })
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      _Subheader2.default,
      null,
      'Support'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/demo', style: menuLink },
      _react2.default.createElement(_MenuItem2.default, { onClick: toggleDrawer, primaryText: 'Demo' })
    ),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Report a Problem' }),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Github' })
  );
};

exports.default = Menu;

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  menuLink: {
    textDecoration: 'none'
  }
};

exports.default = styles;

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  app: {
    background: 'navy',
    height: '100%'
  },
  appBar: {
    background: 'navy'
  },
  title: {
    color: 'white',
    textDecoration: 'none'
  }
};

exports.default = styles;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(117);

var drawerOpen = function drawerOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return !state;

    default:
      return state;
  }
};

var loggedIn = function loggedIn() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.loggedIn;

    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  drawerOpen: drawerOpen,
  loggedIn: loggedIn
});

/***/ })

},[207]);