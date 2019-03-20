webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mineral_ui_icons_IconCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mineral-ui-icons/IconCheck */ "./node_modules/mineral-ui-icons/IconCheck.js");
/* harmony import */ var mineral_ui_icons_IconCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_icons_IconCheck__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mineral-ui/Button */ "./node_modules/mineral-ui/Button/index.js");
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/pattie/Development/azul-game/components/Player.js";






var Player =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Player, _PureComponent);

  function Player() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "propTypes", {
      isCurrentPlayer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
      handleTurnEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
      playerID: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
      data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
        tilesToPlace: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired
      })
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isCurrentPlayer = _this$props.isCurrentPlayer,
          handleTurnEnd = _this$props.handleTurnEnd,
          playerID = _this$props.playerID,
          data = _this$props.data;
      var tilesToPlace = data.tilesToPlace;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, isCurrentPlayer && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(mineral_ui_icons_IconCheck__WEBPACK_IMPORTED_MODULE_9___default.a, {
        title: "This is the current player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), "Player", ' ', playerID, isCurrentPlayer && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: function onClick() {
          return handleTurnEnd(playerID);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "End turn"), tilesToPlace.map(function (tile) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, tile);
      }));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=index.js.0354b89b6920eab2ce3c.hot-update.js.map