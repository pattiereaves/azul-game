((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/FactoryDisplay.js":
/*!**************************************!*\
  !*** ./components/FactoryDisplay.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FactoryDisplay; });
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







var _jsxFileName = "/Users/pattie/Development/azul-game/components/FactoryDisplay.js";




var FactoryDisplay =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FactoryDisplay, _PureComponent);

  function FactoryDisplay() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FactoryDisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FactoryDisplay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "propTypes", {
      tiles: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number).isRequired
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FactoryDisplay, [{
    key: "render",
    value: function render() {
      var tiles = this.props.tiles;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, tiles.map(function (tile) {
        return tile;
      }));
    }
  }]);

  return FactoryDisplay;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);



/***/ }),

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      score: 0,
      hasCurrentTurn: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          score = _this$state.score,
          hasCurrentTurn = _this$state.hasCurrentTurn;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "this is a player.", score, ' ', hasCurrentTurn);
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, withEmotionCache, CacheProvider, ThemeContext, jsx, Global, keyframes, ClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"]; });









function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])());
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmotionCacheContext.Consumer, null, function ( // $FlowFixMe we know it won't be null
    cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(render);
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var type = props[typePropName];
  var registeredStyles = [];
  var className = '';
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  registeredStyles.push(cssProp);

  if (props.className !== undefined) {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, newProps);

  return ele;
};

var Emotion = withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || props.css == null) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at jsx.*\n\s+at ([A-Z][A-Za-z]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/^.*\n([A-Z][A-Za-z]+)@/);
      }

      if (match) {
        newProps[labelPropName] = match[1];
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_4__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css$$1, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css$$1(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css$$1 = function css$$1() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css$$1, classnames(args));
    };

    var content = {
      css: css$$1,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          value = value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);
    var isCssVariable = key.charCodeAt(1) === 45;

    if (processed !== '' && !isCssVariable && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, char) {
        return char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles;

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
      }
    // eslint-disable-next-line no-fallthrough

    default:
      {
        if (registered == null) {
          return interpolation;
        }

        var cached = registered[interpolation];

        if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
          console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
          shouldWarnAboutInterpolatingClassNameFromCss = false;
        }

        return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
      }
  }
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
          }
        } else {
          string += _key + "{" + handleInterpolation(mergedProps, registered, value, false) + "}";
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        styles.push(args[i], args[0][i]);
      }
    }

    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className += Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options || {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/compute-scroll-into-view/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/es/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isElement(el) {
  return el != null && typeof el === 'object' && el.nodeType === 1;
}

function canOverflow(overflow, skipOverflowHiddenElements) {
  if (skipOverflowHiddenElements && overflow === 'hidden') {
    return false;
  }

  return overflow !== 'visible' && overflow !== 'clip';
}

function isScrollable(el, skipOverflowHiddenElements) {
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    var style = getComputedStyle(el, null);
    return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements);
  }

  return false;
}

function alignNearest(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
  if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
    return 0;
  }

  if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
    return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
  }

  if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
    return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
  }

  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function (target, options) {
  var scrollMode = options.scrollMode,
      block = options.block,
      inline = options.inline,
      boundary = options.boundary,
      skipOverflowHiddenElements = options.skipOverflowHiddenElements;
  var checkBoundary = typeof boundary === 'function' ? boundary : function (node) {
    return node !== boundary;
  };

  if (!isElement(target)) {
    throw new TypeError('Invalid target');
  }

  var scrollingElement = document.scrollingElement || document.documentElement;
  var frames = [];
  var cursor = target;

  while (isElement(cursor) && checkBoundary(cursor)) {
    cursor = cursor.parentNode;

    if (cursor === scrollingElement) {
      frames.push(cursor);
      break;
    }

    if (cursor === document.body && isScrollable(cursor) && !isScrollable(document.documentElement)) {
      continue;
    }

    if (isScrollable(cursor, skipOverflowHiddenElements)) {
      frames.push(cursor);
    }
  }

  var viewportWidth = window.visualViewport ? visualViewport.width : innerWidth;
  var viewportHeight = window.visualViewport ? visualViewport.height : innerHeight;
  var viewportX = window.scrollX || pageXOffset;
  var viewportY = window.scrollY || pageYOffset;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      targetHeight = _target$getBoundingCl.height,
      targetWidth = _target$getBoundingCl.width,
      targetTop = _target$getBoundingCl.top,
      targetRight = _target$getBoundingCl.right,
      targetBottom = _target$getBoundingCl.bottom,
      targetLeft = _target$getBoundingCl.left;

  var targetBlock = block === 'start' || block === 'nearest' ? targetTop : block === 'end' ? targetBottom : targetTop + targetHeight / 2;
  var targetInline = inline === 'center' ? targetLeft + targetWidth / 2 : inline === 'end' ? targetRight : targetLeft;
  var computations = [];

  for (var index = 0; index < frames.length; index++) {
    var frame = frames[index];

    var _frame$getBoundingCli = frame.getBoundingClientRect(),
        _height = _frame$getBoundingCli.height,
        _width = _frame$getBoundingCli.width,
        _top = _frame$getBoundingCli.top,
        right = _frame$getBoundingCli.right,
        bottom = _frame$getBoundingCli.bottom,
        _left = _frame$getBoundingCli.left;

    if (scrollMode === 'if-needed' && targetTop >= 0 && targetLeft >= 0 && targetBottom <= viewportHeight && targetRight <= viewportWidth && targetTop >= _top && targetBottom <= bottom && targetLeft >= _left && targetRight <= right) {
      return computations;
    }

    var frameStyle = getComputedStyle(frame);
    var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
    var borderTop = parseInt(frameStyle.borderTopWidth, 10);
    var borderRight = parseInt(frameStyle.borderRightWidth, 10);
    var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
    var blockScroll = 0;
    var inlineScroll = 0;
    var scrollbarWidth = 'offsetWidth' in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
    var scrollbarHeight = 'offsetHeight' in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;

    if (scrollingElement === frame) {
      if (block === 'start') {
        blockScroll = targetBlock;
      } else if (block === 'end') {
        blockScroll = targetBlock - viewportHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - viewportHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline;
      } else if (inline === 'center') {
        inlineScroll = targetInline - viewportWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - viewportWidth;
      } else {
        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
      }

      blockScroll = Math.max(0, blockScroll + viewportY);
      inlineScroll = Math.max(0, inlineScroll + viewportX);
    } else {
      if (block === 'start') {
        blockScroll = targetBlock - _top - borderTop;
      } else if (block === 'end') {
        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(_top, bottom, _height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - (_top + _height / 2) + scrollbarHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline - _left - borderLeft;
      } else if (inline === 'center') {
        inlineScroll = targetInline - (_left + _width / 2) + scrollbarWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
      } else {
        inlineScroll = alignNearest(_left, right, _width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
      }

      var scrollLeft = frame.scrollLeft,
          scrollTop = frame.scrollTop;
      blockScroll = Math.max(0, Math.min(scrollTop + blockScroll, frame.scrollHeight - _height + scrollbarHeight));
      inlineScroll = Math.max(0, Math.min(scrollLeft + inlineScroll, frame.scrollWidth - _width + scrollbarWidth));
      targetBlock += scrollTop - blockScroll;
      targetInline += scrollLeft - inlineScroll;
    }

    computations.push({
      el: frame,
      top: blockScroll,
      left: inlineScroll
    });
  }

  return computations;
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js ***!
  \**************************************************************************/
/*! exports provided: ThemeProvider, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/emotion-theming/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);






var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, outerTheme, theme);
};

var createCacheWithTheme = Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});

var ThemeProvider = function ThemeProvider(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, null, function (theme) {
    if (props.theme !== theme) {
      theme = createCacheWithTheme(theme)(props.theme);
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Provider, {
      value: theme
    }, props.children);
  });
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// should we change this to be forwardRef/withCSSContext style so it doesn't merge with props?
var withTheme = function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, null, function (theme) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, _extends({
        theme: theme,
        ref: ref
      }, props));
    });
  }; // $FlowFixMe


  var WithTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component);
};




/***/ }),

/***/ "./node_modules/emotion-theming/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/emotion-theming/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/emotion-theming/node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/emotion-theming/node_modules/react-is/cjs/react-is.development.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/emotion-theming/node_modules/react-is/cjs/react-is.development.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/emotion-theming/node_modules/react-is/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emotion-theming/node_modules/react-is/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/emotion-theming/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var stub = __webpack_require__(/*! ./stub */ "./node_modules/local-storage/stub.js");
var tracking = __webpack_require__(/*! ./tracking */ "./node_modules/local-storage/tracking.js");
var ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub;

function accessor (key, value) {
  if (arguments.length === 1) {
    return get(key);
  }
  return set(key, value);
}

function get (key) {
  return JSON.parse(ls.getItem(key));
}

function set (key, value) {
  try {
    ls.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function remove (key) {
  return ls.removeItem(key);
}

function clear () {
  return ls.clear();
}

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.clear = clear;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
  return true;
}

function removeItem (key) {
  var found = key in ms;
  if (found) {
    return delete ms[key];
  }
  return false;
}

function clear () {
  ms = {};
  return true;
}

module.exports = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem,
  clear: clear
};


/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var listeners = {};
var listening = false;

function listen () {
  if (global.addEventListener) {
    global.addEventListener('storage', change, false);
  } else if (global.attachEvent) {
    global.attachEvent('onstorage', change);
  } else {
    global.onstorage = change;
  }
}

function change (e) {
  if (!e) {
    e = global.event;
  }
  var all = listeners[e.key];
  if (all) {
    all.forEach(fire);
  }

  function fire (listener) {
    listener(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri);
  }
}

function on (key, fn) {
  if (listeners[key]) {
    listeners[key].push(fn);
  } else {
    listeners[key] = [fn];
  }
  if (listening === false) {
    listen();
  }
}

function off (key, fn) {
  var ns = listeners[key];
  if (ns.length > 1) {
    ns.splice(ns.indexOf(fn), 1);
  } else {
    listeners[key] = [];
  }
}

module.exports = {
  on: on,
  off: off
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/all.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/all.js ***!
  \**************************************************/
/*! exports provided: backgroundColor, backgroundColor_active, backgroundColor_disabled, backgroundColor_focus, backgroundColor_hover, backgroundColor_brand_selected, backgroundColor_brand_selectedActive, backgroundColor_brand_selectedHover, backgroundColor_brandPrimary, backgroundColor_brandPrimary_active, backgroundColor_brandPrimary_focus, backgroundColor_brandPrimary_hover, backgroundColor_danger_active, backgroundColor_danger_focus, backgroundColor_danger_hover, backgroundColor_dangerPrimary, backgroundColor_dangerPrimary_active, backgroundColor_dangerPrimary_focus, backgroundColor_dangerPrimary_hover, backgroundColor_success_active, backgroundColor_success_focus, backgroundColor_success_hover, backgroundColor_successPrimary, backgroundColor_successPrimary_active, backgroundColor_successPrimary_focus, backgroundColor_successPrimary_hover, backgroundColor_warning_active, backgroundColor_warning_focus, backgroundColor_warning_hover, backgroundColor_warningPrimary, backgroundColor_warningPrimary_active, backgroundColor_warningPrimary_focus, backgroundColor_warningPrimary_hover, borderColor, borderColor_brand, borderColor_brand_active, borderColor_brand_focus, borderColor_brand_hover, borderColor_danger, borderColor_danger_active, borderColor_danger_focus, borderColor_danger_hover, borderColor_success, borderColor_success_active, borderColor_success_focus, borderColor_success_hover, borderColor_warning, borderColor_warning_active, borderColor_warning_focus, borderColor_warning_hover, borderRadius_1, boxShadow_1, boxShadow_2, boxShadow_3, boxShadow_4, boxShadow_5, breakpoint_narrow, breakpoint_medium, breakpoint_wide, color, color_inverted, color_disabled, color_mouse, color_readOnly, color_required, color_brand, color_brandPrimary, color_brand_active, color_brand_focus, color_brand_hover, color_danger, color_dangerPrimary, color_danger_active, color_danger_focus, color_danger_hover, color_success, color_successPrimary, color_success_active, color_success_focus, color_success_hover, color_warning, color_warningPrimary, color_warning_active, color_warning_focus, color_warning_hover, fontFamily, fontFamily_system, fontFamily_monospace, fontSize_base, fontSize_mouse, fontSize_prose, fontSize_ui, fontWeight_regular, fontWeight_semiBold, fontWeight_bold, fontWeight_extraBold, lineHeight, lineHeight_heading, lineHeight_heading_small, lineHeight_prose, size_small, size_medium, size_large, size_jumbo, space_inline_xxs, space_inline_xs, space_inline_sm, space_inline_md, space_inline_lg, space_inline_xl, space_inline_xxl, space_inset_sm, space_inset_md, space_inset_lg, space_stack_xxs, space_stack_xs, space_stack_sm, space_stack_md, space_stack_lg, space_stack_xl, space_stack_xxl, zIndex_100, zIndex_200, zIndex_400, zIndex_800, zIndex_1600, h1_color, h1_fontSize, h1_fontWeight, h2_color, h2_fontSize, h2_fontWeight, h3_color, h3_fontSize, h3_fontWeight, h4_color, h4_fontSize, h4_fontWeight, h5_color, h5_fontSize, h5_fontWeight, h6_color, h6_fontSize, h6_fontWeight, icon_color, icon_color_brand, icon_color_danger, icon_color_success, icon_color_warning, input_backgroundColor, input_backgroundColor_disabled, input_color_placeholder, panel_backgroundColor, panel_backgroundColor_inverted, panel_borderColor, panel_borderColor_inverted, well_backgroundColor, well_backgroundColor_danger, well_backgroundColor_success, well_backgroundColor_warning, well_borderColor_danger, well_borderColor_success, well_borderColor_warning, black, white, brand_10, brand_20, brand_30, brand_40, brand_50, brand_60, brand_70, brand_80, brand_90, brand_100, blue_10, blue_20, blue_30, blue_40, blue_50, blue_60, blue_70, blue_80, blue_90, blue_100, bronze_10, bronze_20, bronze_30, bronze_40, bronze_50, bronze_60, bronze_70, bronze_80, bronze_90, bronze_100, dusk_10, dusk_20, dusk_30, dusk_40, dusk_50, dusk_60, dusk_70, dusk_80, dusk_90, dusk_100, gray_10, gray_20, gray_30, gray_40, gray_50, gray_60, gray_70, gray_80, gray_90, gray_100, green_10, green_20, green_30, green_40, green_50, green_60, green_70, green_80, green_90, green_100, indigo_10, indigo_20, indigo_30, indigo_40, indigo_50, indigo_60, indigo_70, indigo_80, indigo_90, indigo_100, magenta_10, magenta_20, magenta_30, magenta_40, magenta_50, magenta_60, magenta_70, magenta_80, magenta_90, magenta_100, purple_10, purple_20, purple_30, purple_40, purple_50, purple_60, purple_70, purple_80, purple_90, purple_100, red_10, red_20, red_30, red_40, red_50, red_60, red_70, red_80, red_90, red_100, sky_10, sky_20, sky_30, sky_40, sky_50, sky_60, sky_70, sky_80, sky_90, sky_100, slate_10, slate_20, slate_30, slate_40, slate_50, slate_60, slate_70, slate_80, slate_90, slate_100, teal_10, teal_20, teal_30, teal_40, teal_50, teal_60, teal_70, teal_80, teal_90, teal_100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor", function() { return backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_active", function() { return backgroundColor_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_disabled", function() { return backgroundColor_disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_focus", function() { return backgroundColor_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_hover", function() { return backgroundColor_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selected", function() { return backgroundColor_brand_selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selectedActive", function() { return backgroundColor_brand_selectedActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selectedHover", function() { return backgroundColor_brand_selectedHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary", function() { return backgroundColor_brandPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_active", function() { return backgroundColor_brandPrimary_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_focus", function() { return backgroundColor_brandPrimary_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_hover", function() { return backgroundColor_brandPrimary_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_active", function() { return backgroundColor_danger_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_focus", function() { return backgroundColor_danger_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_hover", function() { return backgroundColor_danger_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary", function() { return backgroundColor_dangerPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_active", function() { return backgroundColor_dangerPrimary_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_focus", function() { return backgroundColor_dangerPrimary_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_hover", function() { return backgroundColor_dangerPrimary_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_active", function() { return backgroundColor_success_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_focus", function() { return backgroundColor_success_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_hover", function() { return backgroundColor_success_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary", function() { return backgroundColor_successPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_active", function() { return backgroundColor_successPrimary_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_focus", function() { return backgroundColor_successPrimary_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_hover", function() { return backgroundColor_successPrimary_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_active", function() { return backgroundColor_warning_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_focus", function() { return backgroundColor_warning_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_hover", function() { return backgroundColor_warning_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary", function() { return backgroundColor_warningPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_active", function() { return backgroundColor_warningPrimary_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_focus", function() { return backgroundColor_warningPrimary_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_hover", function() { return backgroundColor_warningPrimary_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand", function() { return borderColor_brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_active", function() { return borderColor_brand_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_focus", function() { return borderColor_brand_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_hover", function() { return borderColor_brand_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger", function() { return borderColor_danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_active", function() { return borderColor_danger_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_focus", function() { return borderColor_danger_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_hover", function() { return borderColor_danger_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_success", function() { return borderColor_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_active", function() { return borderColor_success_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_focus", function() { return borderColor_success_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_hover", function() { return borderColor_success_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning", function() { return borderColor_warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_active", function() { return borderColor_warning_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_focus", function() { return borderColor_warning_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_hover", function() { return borderColor_warning_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius_1", function() { return borderRadius_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow_1", function() { return boxShadow_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow_2", function() { return boxShadow_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow_3", function() { return boxShadow_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow_4", function() { return boxShadow_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow_5", function() { return boxShadow_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoint_narrow", function() { return breakpoint_narrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoint_medium", function() { return breakpoint_medium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoint_wide", function() { return breakpoint_wide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_inverted", function() { return color_inverted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_disabled", function() { return color_disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_mouse", function() { return color_mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_readOnly", function() { return color_readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_required", function() { return color_required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_brand", function() { return color_brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_brandPrimary", function() { return color_brandPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_brand_active", function() { return color_brand_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_brand_focus", function() { return color_brand_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_brand_hover", function() { return color_brand_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_danger", function() { return color_danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_dangerPrimary", function() { return color_dangerPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_danger_active", function() { return color_danger_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_danger_focus", function() { return color_danger_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_danger_hover", function() { return color_danger_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_success", function() { return color_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_successPrimary", function() { return color_successPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_success_active", function() { return color_success_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_success_focus", function() { return color_success_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_success_hover", function() { return color_success_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_warning", function() { return color_warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_warningPrimary", function() { return color_warningPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_warning_active", function() { return color_warning_active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_warning_focus", function() { return color_warning_focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color_warning_hover", function() { return color_warning_hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily_system", function() { return fontFamily_system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily_monospace", function() { return fontFamily_monospace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize_base", function() { return fontSize_base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize_mouse", function() { return fontSize_mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize_prose", function() { return fontSize_prose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize_ui", function() { return fontSize_ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight_regular", function() { return fontWeight_regular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight_semiBold", function() { return fontWeight_semiBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight_bold", function() { return fontWeight_bold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight_extraBold", function() { return fontWeight_extraBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight_heading", function() { return lineHeight_heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight_heading_small", function() { return lineHeight_heading_small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight_prose", function() { return lineHeight_prose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size_small", function() { return size_small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size_medium", function() { return size_medium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size_large", function() { return size_large; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size_jumbo", function() { return size_jumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_xxs", function() { return space_inline_xxs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_xs", function() { return space_inline_xs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_sm", function() { return space_inline_sm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_md", function() { return space_inline_md; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_lg", function() { return space_inline_lg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_xl", function() { return space_inline_xl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inline_xxl", function() { return space_inline_xxl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inset_sm", function() { return space_inset_sm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inset_md", function() { return space_inset_md; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_inset_lg", function() { return space_inset_lg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_xxs", function() { return space_stack_xxs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_xs", function() { return space_stack_xs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_sm", function() { return space_stack_sm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_md", function() { return space_stack_md; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_lg", function() { return space_stack_lg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_xl", function() { return space_stack_xl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space_stack_xxl", function() { return space_stack_xxl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex_100", function() { return zIndex_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex_200", function() { return zIndex_200; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex_400", function() { return zIndex_400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex_800", function() { return zIndex_800; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex_1600", function() { return zIndex_1600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1_color", function() { return h1_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1_fontSize", function() { return h1_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1_fontWeight", function() { return h1_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h2_color", function() { return h2_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h2_fontSize", function() { return h2_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h2_fontWeight", function() { return h2_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h3_color", function() { return h3_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h3_fontSize", function() { return h3_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h3_fontWeight", function() { return h3_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h4_color", function() { return h4_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h4_fontSize", function() { return h4_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h4_fontWeight", function() { return h4_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h5_color", function() { return h5_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h5_fontSize", function() { return h5_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h5_fontWeight", function() { return h5_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h6_color", function() { return h6_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h6_fontSize", function() { return h6_fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h6_fontWeight", function() { return h6_fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon_color", function() { return icon_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon_color_brand", function() { return icon_color_brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon_color_danger", function() { return icon_color_danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon_color_success", function() { return icon_color_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon_color_warning", function() { return icon_color_warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_backgroundColor", function() { return input_backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_backgroundColor_disabled", function() { return input_backgroundColor_disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_color_placeholder", function() { return input_color_placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panel_backgroundColor", function() { return panel_backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panel_backgroundColor_inverted", function() { return panel_backgroundColor_inverted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panel_borderColor", function() { return panel_borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panel_borderColor_inverted", function() { return panel_borderColor_inverted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor", function() { return well_backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_danger", function() { return well_backgroundColor_danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_success", function() { return well_backgroundColor_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_warning", function() { return well_backgroundColor_warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_danger", function() { return well_borderColor_danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_success", function() { return well_borderColor_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_warning", function() { return well_borderColor_warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_10", function() { return brand_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_20", function() { return brand_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_30", function() { return brand_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_40", function() { return brand_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_50", function() { return brand_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_60", function() { return brand_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_70", function() { return brand_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_80", function() { return brand_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_90", function() { return brand_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_100", function() { return brand_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_10", function() { return blue_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_20", function() { return blue_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_30", function() { return blue_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_40", function() { return blue_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_50", function() { return blue_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_60", function() { return blue_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_70", function() { return blue_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_80", function() { return blue_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_90", function() { return blue_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_100", function() { return blue_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_10", function() { return bronze_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_20", function() { return bronze_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_30", function() { return bronze_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_40", function() { return bronze_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_50", function() { return bronze_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_60", function() { return bronze_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_70", function() { return bronze_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_80", function() { return bronze_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_90", function() { return bronze_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bronze_100", function() { return bronze_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_10", function() { return dusk_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_20", function() { return dusk_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_30", function() { return dusk_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_40", function() { return dusk_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_50", function() { return dusk_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_60", function() { return dusk_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_70", function() { return dusk_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_80", function() { return dusk_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_90", function() { return dusk_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dusk_100", function() { return dusk_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_10", function() { return gray_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_20", function() { return gray_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_30", function() { return gray_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_40", function() { return gray_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_50", function() { return gray_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_60", function() { return gray_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_70", function() { return gray_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_80", function() { return gray_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_90", function() { return gray_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray_100", function() { return gray_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_10", function() { return green_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_20", function() { return green_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_30", function() { return green_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_40", function() { return green_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_50", function() { return green_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_60", function() { return green_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_70", function() { return green_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_80", function() { return green_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_90", function() { return green_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green_100", function() { return green_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_10", function() { return indigo_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_20", function() { return indigo_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_30", function() { return indigo_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_40", function() { return indigo_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_50", function() { return indigo_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_60", function() { return indigo_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_70", function() { return indigo_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_80", function() { return indigo_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_90", function() { return indigo_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo_100", function() { return indigo_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_10", function() { return magenta_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_20", function() { return magenta_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_30", function() { return magenta_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_40", function() { return magenta_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_50", function() { return magenta_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_60", function() { return magenta_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_70", function() { return magenta_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_80", function() { return magenta_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_90", function() { return magenta_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta_100", function() { return magenta_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_10", function() { return purple_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_20", function() { return purple_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_30", function() { return purple_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_40", function() { return purple_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_50", function() { return purple_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_60", function() { return purple_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_70", function() { return purple_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_80", function() { return purple_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_90", function() { return purple_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple_100", function() { return purple_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_10", function() { return red_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_20", function() { return red_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_30", function() { return red_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_40", function() { return red_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_50", function() { return red_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_60", function() { return red_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_70", function() { return red_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_80", function() { return red_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_90", function() { return red_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red_100", function() { return red_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_10", function() { return sky_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_20", function() { return sky_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_30", function() { return sky_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_40", function() { return sky_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_50", function() { return sky_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_60", function() { return sky_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_70", function() { return sky_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_80", function() { return sky_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_90", function() { return sky_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sky_100", function() { return sky_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_10", function() { return slate_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_20", function() { return slate_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_30", function() { return slate_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_40", function() { return slate_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_50", function() { return slate_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_60", function() { return slate_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_70", function() { return slate_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_80", function() { return slate_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_90", function() { return slate_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slate_100", function() { return slate_100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_10", function() { return teal_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_20", function() { return teal_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_30", function() { return teal_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_40", function() { return teal_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_50", function() { return teal_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_60", function() { return teal_60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_70", function() { return teal_70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_80", function() { return teal_80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_90", function() { return teal_90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal_100", function() { return teal_100; });
var backgroundColor = '#ffffff';
var backgroundColor_active = '#ebeff5';
var backgroundColor_disabled = '#ebeff5';
var backgroundColor_focus = '#ffffff';
var backgroundColor_hover = '#f5f7fa';
var backgroundColor_brand_selected = '#f0f5fc';
var backgroundColor_brand_selectedActive = '#accbfc';
var backgroundColor_brand_selectedHover = '#cfe0fc';
var backgroundColor_brandPrimary = '#3272d9';
var backgroundColor_brandPrimary_active = '#1d5bbf';
var backgroundColor_brandPrimary_focus = '#3272d9';
var backgroundColor_brandPrimary_hover = '#5691f0';
var backgroundColor_danger_active = '#fad4d4';
var backgroundColor_danger_focus = '#faf0f0';
var backgroundColor_danger_hover = '#faf0f0';
var backgroundColor_dangerPrimary = '#de1b1b';
var backgroundColor_dangerPrimary_active = '#b80d0d';
var backgroundColor_dangerPrimary_focus = '#de1b1b';
var backgroundColor_dangerPrimary_hover = '#f55353';
var backgroundColor_success_active = '#abedc5';
var backgroundColor_success_focus = '#e1faeb';
var backgroundColor_success_hover = '#e1faeb';
var backgroundColor_successPrimary = '#2a854e';
var backgroundColor_successPrimary_active = '#20693d';
var backgroundColor_successPrimary_focus = '#2a854e';
var backgroundColor_successPrimary_hover = '#3ba164';
var backgroundColor_warning_active = '#fad8af';
var backgroundColor_warning_focus = '#fcf2e6';
var backgroundColor_warning_hover = '#fcf2e6';
var backgroundColor_warningPrimary = '#ad5f00';
var backgroundColor_warningPrimary_active = '#8a4d03';
var backgroundColor_warningPrimary_focus = '#ad5f00';
var backgroundColor_warningPrimary_hover = '#cf7911';
var borderColor = '#c8d1e0';
var borderColor_brand = '#3272d9';
var borderColor_brand_active = '#1d5bbf';
var borderColor_brand_focus = '#1d5bbf';
var borderColor_brand_hover = '#5691f0';
var borderColor_danger = '#de1b1b';
var borderColor_danger_active = '#b80d0d';
var borderColor_danger_focus = '#b80d0d';
var borderColor_danger_hover = '#f55353';
var borderColor_success = '#2a854e';
var borderColor_success_active = '#20693d';
var borderColor_success_focus = '#20693d';
var borderColor_success_hover = '#3ba164';
var borderColor_warning = '#ad5f00';
var borderColor_warning_active = '#8a4d03';
var borderColor_warning_focus = '#8a4d03';
var borderColor_warning_hover = '#cf7911';
var borderRadius_1 = '3px';
var boxShadow_1 = '0 1px 2px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2)';
var boxShadow_2 = '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.2)';
var boxShadow_3 = '0 4px 8px 0 rgba(0,0,0,0.2), 0 8px 16px 0 rgba(0,0,0,0.2)';
var boxShadow_4 = '0 8px 16px 0 rgba(0,0,0,0.2), 0 20px 16px -8px rgba(0,0,0,0.2)';
var boxShadow_5 = '0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)';
var breakpoint_narrow = '512px';
var breakpoint_medium = '768px';
var breakpoint_wide = '1024px';
var color = '#333840';
var color_inverted = '#ffffff';
var color_disabled = '#afbacc';
var color_mouse = '#58606e';
var color_readOnly = '#58606e';
var color_required = '#de1b1b';
var color_brand = '#3272d9';
var color_brandPrimary = '#ffffff';
var color_brand_active = '#1d5bbf';
var color_brand_focus = '#3272d9';
var color_brand_hover = '#5691f0';
var color_danger = '#de1b1b';
var color_dangerPrimary = '#ffffff';
var color_danger_active = '#b80d0d';
var color_danger_focus = '#de1b1b';
var color_danger_hover = '#f55353';
var color_success = '#2a854e';
var color_successPrimary = '#ffffff';
var color_success_active = '#20693d';
var color_success_focus = '#2a854e';
var color_success_hover = '#3ba164';
var color_warning = '#ad5f00';
var color_warningPrimary = '#ffffff';
var color_warning_active = '#8a4d03';
var color_warning_focus = '#ad5f00';
var color_warning_hover = '#cf7911';
var fontFamily = '"Open Sans"';
var fontFamily_system = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var fontFamily_monospace = '"SF Mono", "Droid Sans Mono", "Source Code Pro", Monaco, Consolas, "Courier New", Courier, monospace';
var fontSize_base = '1rem';
var fontSize_mouse = '0.6875rem';
var fontSize_prose = '1rem';
var fontSize_ui = '0.875rem';
var fontWeight_regular = 400;
var fontWeight_semiBold = 600;
var fontWeight_bold = 700;
var fontWeight_extraBold = 800;
var lineHeight = 1.25;
var lineHeight_heading = 1.25;
var lineHeight_heading_small = 1.5;
var lineHeight_prose = 1.5;
var size_small = '24px';
var size_medium = '32px';
var size_large = '40px';
var size_jumbo = '52px';
var space_inline_xxs = '2px';
var space_inline_xs = '4px';
var space_inline_sm = '8px';
var space_inline_md = '16px';
var space_inline_lg = '24px';
var space_inline_xl = '32px';
var space_inline_xxl = '64px';
var space_inset_sm = '8px';
var space_inset_md = '16px';
var space_inset_lg = '24px';
var space_stack_xxs = '2px';
var space_stack_xs = '4px';
var space_stack_sm = '8px';
var space_stack_md = '16px';
var space_stack_lg = '24px';
var space_stack_xl = '32px';
var space_stack_xxl = '64px';
var zIndex_100 = 100;
var zIndex_200 = 200;
var zIndex_400 = 400;
var zIndex_800 = 800;
var zIndex_1600 = 1600;
var h1_color = '#333840';
var h1_fontSize = '2.125rem';
var h1_fontWeight = 800;
var h2_color = '#58606e';
var h2_fontSize = '1.75rem';
var h2_fontWeight = 700;
var h3_color = '#58606e';
var h3_fontSize = '1.375rem';
var h3_fontWeight = 700;
var h4_color = '#58606e';
var h4_fontSize = '1.125rem';
var h4_fontWeight = 700;
var h5_color = '#333840';
var h5_fontSize = '0.875rem';
var h5_fontWeight = 700;
var h6_color = '#58606e';
var h6_fontSize = '0.875rem';
var h6_fontWeight = 400;
var icon_color = '#58606e';
var icon_color_brand = '#3272d9';
var icon_color_danger = '#de1b1b';
var icon_color_success = '#2a854e';
var icon_color_warning = '#ad5f00';
var input_backgroundColor = '#ffffff';
var input_backgroundColor_disabled = '#ebeff5';
var input_color_placeholder = '#8e99ab';
var panel_backgroundColor = '#ffffff';
var panel_backgroundColor_inverted = '#434a54';
var panel_borderColor = '#ebeff5';
var panel_borderColor_inverted = '#434a54';
var well_backgroundColor = '#ebeff5';
var well_backgroundColor_danger = '#fad4d4';
var well_backgroundColor_success = '#abedc5';
var well_backgroundColor_warning = '#fad8af';
var well_borderColor_danger = '#fa8e8e';
var well_borderColor_success = '#57c282';
var well_borderColor_warning = '#e89c3f';
var black = '#1d1f24';
var white = '#ffffff';
var brand_10 = '#f0f5fc';
var brand_20 = '#cfe0fc';
var brand_30 = '#accbfc';
var brand_40 = '#84b1fa';
var brand_50 = '#5691f0';
var brand_60 = '#3272d9';
var brand_70 = '#1d5bbf';
var brand_80 = '#114599';
var brand_90 = '#103570';
var brand_100 = '#15233b';
var blue_10 = '#f0f5fc';
var blue_20 = '#cfe0fc';
var blue_30 = '#accbfc';
var blue_40 = '#84b1fa';
var blue_50 = '#5691f0';
var blue_60 = '#3272d9';
var blue_70 = '#1d5bbf';
var blue_80 = '#114599';
var blue_90 = '#103570';
var blue_100 = '#15233b';
var bronze_10 = '#fcf2e6';
var bronze_20 = '#fad8af';
var bronze_30 = '#f5bc76';
var bronze_40 = '#e89c3f';
var bronze_50 = '#cf7911';
var bronze_60 = '#ad5f00';
var bronze_70 = '#8a4d03';
var bronze_80 = '#693d07';
var bronze_90 = '#4d2f0b';
var bronze_100 = '#33210c';
var dusk_10 = '#f4f2f7';
var dusk_20 = '#e3dcf7';
var dusk_30 = '#cec2f0';
var dusk_40 = '#b5a6e3';
var dusk_50 = '#9886cf';
var dusk_60 = '#7a68b3';
var dusk_70 = '#645396';
var dusk_80 = '#4f4178';
var dusk_90 = '#3a3154';
var dusk_100 = '#282436';
var gray_10 = '#f5f7fa';
var gray_20 = '#ebeff5';
var gray_30 = '#dde3ed';
var gray_40 = '#c8d1e0';
var gray_50 = '#afbacc';
var gray_60 = '#8e99ab';
var gray_70 = '#707a8a';
var gray_80 = '#58606e';
var gray_90 = '#434a54';
var gray_100 = '#333840';
var green_10 = '#e1faeb';
var green_20 = '#abedc5';
var green_30 = '#7ddba3';
var green_40 = '#57c282';
var green_50 = '#3ba164';
var green_60 = '#2a854e';
var green_70 = '#20693d';
var green_80 = '#1a5230';
var green_90 = '#153d25';
var green_100 = '#112b1b';
var indigo_10 = '#f2f2fc';
var indigo_20 = '#dcdcfc';
var indigo_30 = '#c2c2fc';
var indigo_40 = '#a7a7fa';
var indigo_50 = '#8585f2';
var indigo_60 = '#6767e6';
var indigo_70 = '#4d4dd1';
var indigo_80 = '#3737b3';
var indigo_90 = '#28288a';
var indigo_100 = '#202057';
var magenta_10 = '#faf0f4';
var magenta_20 = '#fad4e4';
var magenta_30 = '#fab4d1';
var magenta_40 = '#f78bb8';
var magenta_50 = '#ed5393';
var magenta_60 = '#d6246e';
var magenta_70 = '#b01355';
var magenta_80 = '#8a1244';
var magenta_90 = '#611535';
var magenta_100 = '#421527';
var purple_10 = '#f5f0fa';
var purple_20 = '#ead9fa';
var purple_30 = '#dabcf7';
var purple_40 = '#c79bf2';
var purple_50 = '#ae74e8';
var purple_60 = '#9656d6';
var purple_70 = '#7d3cbd';
var purple_80 = '#642b9e';
var purple_90 = '#4b2175';
var purple_100 = '#371c52';
var red_10 = '#faf0f0';
var red_20 = '#fad4d4';
var red_30 = '#fab6b6';
var red_40 = '#fa8e8e';
var red_50 = '#f55353';
var red_60 = '#de1b1b';
var red_70 = '#b80d0d';
var red_80 = '#8f0e0e';
var red_90 = '#661414';
var red_100 = '#451717';
var sky_10 = '#e8f4fa';
var sky_20 = '#bbe5fa';
var sky_30 = '#8dd4f7';
var sky_40 = '#53baed';
var sky_50 = '#229ad6';
var sky_60 = '#0c7bb3';
var sky_70 = '#066391';
var sky_80 = '#064d70';
var sky_90 = '#093952';
var sky_100 = '#0c2938';
var slate_10 = '#edf4f7';
var slate_20 = '#cbe3f5';
var slate_30 = '#a7ceeb';
var slate_40 = '#84b7db';
var slate_50 = '#5e95bd';
var slate_60 = '#48799c';
var slate_70 = '#376180';
var slate_80 = '#2d4d63';
var slate_90 = '#243947';
var slate_100 = '#1d2830';
var teal_10 = '#e4f7f6';
var teal_20 = '#a8ede9';
var teal_30 = '#6cd9d2';
var teal_40 = '#45bfb7';
var teal_50 = '#28a199';
var teal_60 = '#17827b';
var teal_70 = '#116963';
var teal_80 = '#0d524d';
var teal_90 = '#0b3d3a';
var teal_100 = '#092b29';

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/blue.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/blue.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f0f5fc'), _defineProperty(_$20$30$40$50$60$, 20, '#cfe0fc'), _defineProperty(_$20$30$40$50$60$, 30, '#accbfc'), _defineProperty(_$20$30$40$50$60$, 40, '#84b1fa'), _defineProperty(_$20$30$40$50$60$, 50, '#5691f0'), _defineProperty(_$20$30$40$50$60$, 60, '#3272d9'), _defineProperty(_$20$30$40$50$60$, 70, '#1d5bbf'), _defineProperty(_$20$30$40$50$60$, 80, '#114599'), _defineProperty(_$20$30$40$50$60$, 90, '#103570'), _defineProperty(_$20$30$40$50$60$, 100, '#15233b'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/brand.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/brand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f0f5fc'), _defineProperty(_$20$30$40$50$60$, 20, '#cfe0fc'), _defineProperty(_$20$30$40$50$60$, 30, '#accbfc'), _defineProperty(_$20$30$40$50$60$, 40, '#84b1fa'), _defineProperty(_$20$30$40$50$60$, 50, '#5691f0'), _defineProperty(_$20$30$40$50$60$, 60, '#3272d9'), _defineProperty(_$20$30$40$50$60$, 70, '#1d5bbf'), _defineProperty(_$20$30$40$50$60$, 80, '#114599'), _defineProperty(_$20$30$40$50$60$, 90, '#103570'), _defineProperty(_$20$30$40$50$60$, 100, '#15233b'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/bronze.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/bronze.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#fcf2e6'), _defineProperty(_$20$30$40$50$60$, 20, '#fad8af'), _defineProperty(_$20$30$40$50$60$, 30, '#f5bc76'), _defineProperty(_$20$30$40$50$60$, 40, '#e89c3f'), _defineProperty(_$20$30$40$50$60$, 50, '#cf7911'), _defineProperty(_$20$30$40$50$60$, 60, '#ad5f00'), _defineProperty(_$20$30$40$50$60$, 70, '#8a4d03'), _defineProperty(_$20$30$40$50$60$, 80, '#693d07'), _defineProperty(_$20$30$40$50$60$, 90, '#4d2f0b'), _defineProperty(_$20$30$40$50$60$, 100, '#33210c'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/dusk.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/dusk.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f4f2f7'), _defineProperty(_$20$30$40$50$60$, 20, '#e3dcf7'), _defineProperty(_$20$30$40$50$60$, 30, '#cec2f0'), _defineProperty(_$20$30$40$50$60$, 40, '#b5a6e3'), _defineProperty(_$20$30$40$50$60$, 50, '#9886cf'), _defineProperty(_$20$30$40$50$60$, 60, '#7a68b3'), _defineProperty(_$20$30$40$50$60$, 70, '#645396'), _defineProperty(_$20$30$40$50$60$, 80, '#4f4178'), _defineProperty(_$20$30$40$50$60$, 90, '#3a3154'), _defineProperty(_$20$30$40$50$60$, 100, '#282436'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/gray.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/gray.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f5f7fa'), _defineProperty(_$20$30$40$50$60$, 20, '#ebeff5'), _defineProperty(_$20$30$40$50$60$, 30, '#dde3ed'), _defineProperty(_$20$30$40$50$60$, 40, '#c8d1e0'), _defineProperty(_$20$30$40$50$60$, 50, '#afbacc'), _defineProperty(_$20$30$40$50$60$, 60, '#8e99ab'), _defineProperty(_$20$30$40$50$60$, 70, '#707a8a'), _defineProperty(_$20$30$40$50$60$, 80, '#58606e'), _defineProperty(_$20$30$40$50$60$, 90, '#434a54'), _defineProperty(_$20$30$40$50$60$, 100, '#333840'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/green.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/green.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#e1faeb'), _defineProperty(_$20$30$40$50$60$, 20, '#abedc5'), _defineProperty(_$20$30$40$50$60$, 30, '#7ddba3'), _defineProperty(_$20$30$40$50$60$, 40, '#57c282'), _defineProperty(_$20$30$40$50$60$, 50, '#3ba164'), _defineProperty(_$20$30$40$50$60$, 60, '#2a854e'), _defineProperty(_$20$30$40$50$60$, 70, '#20693d'), _defineProperty(_$20$30$40$50$60$, 80, '#1a5230'), _defineProperty(_$20$30$40$50$60$, 90, '#153d25'), _defineProperty(_$20$30$40$50$60$, 100, '#112b1b'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/index.js ***!
  \****************************************************/
/*! exports provided: default, palette, backgroundColor, backgroundColor_active, backgroundColor_disabled, backgroundColor_focus, backgroundColor_hover, backgroundColor_brand_selected, backgroundColor_brand_selectedActive, backgroundColor_brand_selectedHover, backgroundColor_brandPrimary, backgroundColor_brandPrimary_active, backgroundColor_brandPrimary_focus, backgroundColor_brandPrimary_hover, backgroundColor_danger_active, backgroundColor_danger_focus, backgroundColor_danger_hover, backgroundColor_dangerPrimary, backgroundColor_dangerPrimary_active, backgroundColor_dangerPrimary_focus, backgroundColor_dangerPrimary_hover, backgroundColor_success_active, backgroundColor_success_focus, backgroundColor_success_hover, backgroundColor_successPrimary, backgroundColor_successPrimary_active, backgroundColor_successPrimary_focus, backgroundColor_successPrimary_hover, backgroundColor_warning_active, backgroundColor_warning_focus, backgroundColor_warning_hover, backgroundColor_warningPrimary, backgroundColor_warningPrimary_active, backgroundColor_warningPrimary_focus, backgroundColor_warningPrimary_hover, borderColor, borderColor_brand, borderColor_brand_active, borderColor_brand_focus, borderColor_brand_hover, borderColor_danger, borderColor_danger_active, borderColor_danger_focus, borderColor_danger_hover, borderColor_success, borderColor_success_active, borderColor_success_focus, borderColor_success_hover, borderColor_warning, borderColor_warning_active, borderColor_warning_focus, borderColor_warning_hover, borderRadius_1, boxShadow_1, boxShadow_2, boxShadow_3, boxShadow_4, boxShadow_5, breakpoint_narrow, breakpoint_medium, breakpoint_wide, color, color_inverted, color_disabled, color_mouse, color_readOnly, color_required, color_brand, color_brandPrimary, color_brand_active, color_brand_focus, color_brand_hover, color_danger, color_dangerPrimary, color_danger_active, color_danger_focus, color_danger_hover, color_success, color_successPrimary, color_success_active, color_success_focus, color_success_hover, color_warning, color_warningPrimary, color_warning_active, color_warning_focus, color_warning_hover, fontFamily, fontFamily_system, fontFamily_monospace, fontSize_base, fontSize_mouse, fontSize_prose, fontSize_ui, fontWeight_regular, fontWeight_semiBold, fontWeight_bold, fontWeight_extraBold, lineHeight, lineHeight_heading, lineHeight_heading_small, lineHeight_prose, size_small, size_medium, size_large, size_jumbo, space_inline_xxs, space_inline_xs, space_inline_sm, space_inline_md, space_inline_lg, space_inline_xl, space_inline_xxl, space_inset_sm, space_inset_md, space_inset_lg, space_stack_xxs, space_stack_xs, space_stack_sm, space_stack_md, space_stack_lg, space_stack_xl, space_stack_xxl, zIndex_100, zIndex_200, zIndex_400, zIndex_800, zIndex_1600, h1_color, h1_fontSize, h1_fontWeight, h2_color, h2_fontSize, h2_fontWeight, h3_color, h3_fontSize, h3_fontWeight, h4_color, h4_fontSize, h4_fontWeight, h5_color, h5_fontSize, h5_fontWeight, h6_color, h6_fontSize, h6_fontWeight, icon_color, icon_color_brand, icon_color_danger, icon_color_success, icon_color_warning, input_backgroundColor, input_backgroundColor_disabled, input_color_placeholder, panel_backgroundColor, panel_backgroundColor_inverted, panel_borderColor, panel_borderColor_inverted, well_backgroundColor, well_backgroundColor_danger, well_backgroundColor_success, well_backgroundColor_warning, well_borderColor_danger, well_borderColor_success, well_borderColor_warning, black, white, brand_10, brand_20, brand_30, brand_40, brand_50, brand_60, brand_70, brand_80, brand_90, brand_100, blue_10, blue_20, blue_30, blue_40, blue_50, blue_60, blue_70, blue_80, blue_90, blue_100, bronze_10, bronze_20, bronze_30, bronze_40, bronze_50, bronze_60, bronze_70, bronze_80, bronze_90, bronze_100, dusk_10, dusk_20, dusk_30, dusk_40, dusk_50, dusk_60, dusk_70, dusk_80, dusk_90, dusk_100, gray_10, gray_20, gray_30, gray_40, gray_50, gray_60, gray_70, gray_80, gray_90, gray_100, green_10, green_20, green_30, green_40, green_50, green_60, green_70, green_80, green_90, green_100, indigo_10, indigo_20, indigo_30, indigo_40, indigo_50, indigo_60, indigo_70, indigo_80, indigo_90, indigo_100, magenta_10, magenta_20, magenta_30, magenta_40, magenta_50, magenta_60, magenta_70, magenta_80, magenta_90, magenta_100, purple_10, purple_20, purple_30, purple_40, purple_50, purple_60, purple_70, purple_80, purple_90, purple_100, red_10, red_20, red_30, red_40, red_50, red_60, red_70, red_80, red_90, red_100, sky_10, sky_20, sky_30, sky_40, sky_50, sky_60, sky_70, sky_80, sky_90, sky_100, slate_10, slate_20, slate_30, slate_40, slate_50, slate_60, slate_70, slate_80, slate_90, slate_100, teal_10, teal_20, teal_30, teal_40, teal_50, teal_60, teal_70, teal_80, teal_90, teal_100, blue, brand, bronze, dusk, gray, green, indigo, magenta, purple, red, sky, slate, teal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./node_modules/mineral-ui-tokens/es/tokens.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _tokens__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./node_modules/mineral-ui-tokens/es/palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return _palette__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all */ "./node_modules/mineral-ui-tokens/es/all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_disabled", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selected", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brand_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selectedActive", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brand_selectedActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brand_selectedHover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brand_selectedHover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brandPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brandPrimary_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brandPrimary_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_brandPrimary_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_brandPrimary_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_danger_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_danger_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_danger_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_danger_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_dangerPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_dangerPrimary_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_dangerPrimary_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_dangerPrimary_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_dangerPrimary_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_success_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_success_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_success_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_success_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_successPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_successPrimary_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_successPrimary_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_successPrimary_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_successPrimary_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warning_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warning_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warning_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warning_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warningPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warningPrimary_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warningPrimary_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundColor_warningPrimary_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["backgroundColor_warningPrimary_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_brand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_brand_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_brand_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_brand_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_brand_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_danger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_danger_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_danger_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_danger_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_danger_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_success", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_success"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_success_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_success_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_success_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_success_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_warning_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_warning_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor_warning_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderColor_warning_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRadius_1", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["borderRadius_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow_1", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["boxShadow_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow_2", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["boxShadow_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow_3", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["boxShadow_3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow_4", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["boxShadow_4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow_5", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["boxShadow_5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoint_narrow", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["breakpoint_narrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoint_medium", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["breakpoint_medium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoint_wide", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["breakpoint_wide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_inverted", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_inverted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_disabled", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_mouse", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_readOnly", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_required", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_brand", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_brand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_brandPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_brandPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_brand_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_brand_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_brand_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_brand_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_brand_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_brand_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_danger", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_danger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_dangerPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_dangerPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_danger_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_danger_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_danger_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_danger_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_danger_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_danger_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_success", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_success"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_successPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_successPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_success_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_success_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_success_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_success_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_success_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_success_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_warning", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_warningPrimary", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_warningPrimary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_warning_active", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_warning_active"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_warning_focus", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_warning_focus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color_warning_hover", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["color_warning_hover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontFamily"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily_system", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontFamily_system"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily_monospace", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontFamily_monospace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize_base", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontSize_base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize_mouse", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontSize_mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize_prose", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontSize_prose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize_ui", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontSize_ui"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight_regular", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontWeight_regular"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight_semiBold", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontWeight_semiBold"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight_bold", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontWeight_bold"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight_extraBold", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["fontWeight_extraBold"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["lineHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight_heading", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["lineHeight_heading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight_heading_small", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["lineHeight_heading_small"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight_prose", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["lineHeight_prose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size_small", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["size_small"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size_medium", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["size_medium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size_large", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["size_large"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size_jumbo", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["size_jumbo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_xxs", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_xxs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_xs", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_xs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_sm", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_sm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_md", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_md"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_lg", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_lg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_xl", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_xl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inline_xxl", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inline_xxl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inset_sm", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inset_sm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inset_md", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inset_md"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_inset_lg", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_inset_lg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_xxs", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_xxs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_xs", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_xs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_sm", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_sm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_md", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_md"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_lg", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_lg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_xl", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_xl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space_stack_xxl", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["space_stack_xxl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["zIndex_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex_200", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["zIndex_200"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex_400", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["zIndex_400"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex_800", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["zIndex_800"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex_1600", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["zIndex_1600"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h1_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h1_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h1_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h1_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h1_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h1_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h2_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h2_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h2_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h2_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h2_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h2_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h3_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h3_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h3_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h3_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h3_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h3_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h4_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h4_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h4_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h4_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h4_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h4_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h5_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h5_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h5_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h5_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h5_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h5_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h6_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h6_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h6_fontSize", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h6_fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h6_fontWeight", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["h6_fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon_color", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["icon_color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon_color_brand", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["icon_color_brand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon_color_danger", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["icon_color_danger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon_color_success", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["icon_color_success"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon_color_warning", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["icon_color_warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input_backgroundColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["input_backgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input_backgroundColor_disabled", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["input_backgroundColor_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input_color_placeholder", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["input_color_placeholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panel_backgroundColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["panel_backgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panel_backgroundColor_inverted", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["panel_backgroundColor_inverted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panel_borderColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["panel_borderColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panel_borderColor_inverted", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["panel_borderColor_inverted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_backgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_danger", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_backgroundColor_danger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_success", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_backgroundColor_success"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_backgroundColor_warning", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_backgroundColor_warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_danger", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_borderColor_danger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_success", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_borderColor_success"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "well_borderColor_warning", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["well_borderColor_warning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "black", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["black"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "white", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["white"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["brand_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["blue_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["bronze_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["dusk_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["gray_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["green_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["indigo_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["magenta_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["purple_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["red_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["sky_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["slate_100"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_10", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_20", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_30", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_30"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_40", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_40"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_50", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_60", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_60"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_70", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_80", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_90", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal_100", function() { return _all__WEBPACK_IMPORTED_MODULE_2__["teal_100"]; });

/* harmony import */ var _blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blue */ "./node_modules/mineral-ui-tokens/es/blue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return _blue__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand */ "./node_modules/mineral-ui-tokens/es/brand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brand", function() { return _brand__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _bronze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bronze */ "./node_modules/mineral-ui-tokens/es/bronze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bronze", function() { return _bronze__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _dusk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dusk */ "./node_modules/mineral-ui-tokens/es/dusk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dusk", function() { return _dusk__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _gray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gray */ "./node_modules/mineral-ui-tokens/es/gray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _gray__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./green */ "./node_modules/mineral-ui-tokens/es/green.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green", function() { return _green__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _indigo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./indigo */ "./node_modules/mineral-ui-tokens/es/indigo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return _indigo__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _magenta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./magenta */ "./node_modules/mineral-ui-tokens/es/magenta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magenta", function() { return _magenta__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _purple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purple */ "./node_modules/mineral-ui-tokens/es/purple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return _purple__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./red */ "./node_modules/mineral-ui-tokens/es/red.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red", function() { return _red__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sky */ "./node_modules/mineral-ui-tokens/es/sky.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sky", function() { return _sky__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _slate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slate */ "./node_modules/mineral-ui-tokens/es/slate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slate", function() { return _slate__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _teal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teal */ "./node_modules/mineral-ui-tokens/es/teal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return _teal__WEBPACK_IMPORTED_MODULE_15__["default"]; });


















/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/indigo.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/indigo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f2f2fc'), _defineProperty(_$20$30$40$50$60$, 20, '#dcdcfc'), _defineProperty(_$20$30$40$50$60$, 30, '#c2c2fc'), _defineProperty(_$20$30$40$50$60$, 40, '#a7a7fa'), _defineProperty(_$20$30$40$50$60$, 50, '#8585f2'), _defineProperty(_$20$30$40$50$60$, 60, '#6767e6'), _defineProperty(_$20$30$40$50$60$, 70, '#4d4dd1'), _defineProperty(_$20$30$40$50$60$, 80, '#3737b3'), _defineProperty(_$20$30$40$50$60$, 90, '#28288a'), _defineProperty(_$20$30$40$50$60$, 100, '#202057'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/magenta.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/magenta.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#faf0f4'), _defineProperty(_$20$30$40$50$60$, 20, '#fad4e4'), _defineProperty(_$20$30$40$50$60$, 30, '#fab4d1'), _defineProperty(_$20$30$40$50$60$, 40, '#f78bb8'), _defineProperty(_$20$30$40$50$60$, 50, '#ed5393'), _defineProperty(_$20$30$40$50$60$, 60, '#d6246e'), _defineProperty(_$20$30$40$50$60$, 70, '#b01355'), _defineProperty(_$20$30$40$50$60$, 80, '#8a1244'), _defineProperty(_$20$30$40$50$60$, 90, '#611535'), _defineProperty(_$20$30$40$50$60$, 100, '#421527'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/palette.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/palette.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  black: '#1d1f24',
  white: '#ffffff',
  brand_10: '#f0f5fc',
  brand_20: '#cfe0fc',
  brand_30: '#accbfc',
  brand_40: '#84b1fa',
  brand_50: '#5691f0',
  brand_60: '#3272d9',
  brand_70: '#1d5bbf',
  brand_80: '#114599',
  brand_90: '#103570',
  brand_100: '#15233b',
  blue_10: '#f0f5fc',
  blue_20: '#cfe0fc',
  blue_30: '#accbfc',
  blue_40: '#84b1fa',
  blue_50: '#5691f0',
  blue_60: '#3272d9',
  blue_70: '#1d5bbf',
  blue_80: '#114599',
  blue_90: '#103570',
  blue_100: '#15233b',
  bronze_10: '#fcf2e6',
  bronze_20: '#fad8af',
  bronze_30: '#f5bc76',
  bronze_40: '#e89c3f',
  bronze_50: '#cf7911',
  bronze_60: '#ad5f00',
  bronze_70: '#8a4d03',
  bronze_80: '#693d07',
  bronze_90: '#4d2f0b',
  bronze_100: '#33210c',
  dusk_10: '#f4f2f7',
  dusk_20: '#e3dcf7',
  dusk_30: '#cec2f0',
  dusk_40: '#b5a6e3',
  dusk_50: '#9886cf',
  dusk_60: '#7a68b3',
  dusk_70: '#645396',
  dusk_80: '#4f4178',
  dusk_90: '#3a3154',
  dusk_100: '#282436',
  gray_10: '#f5f7fa',
  gray_20: '#ebeff5',
  gray_30: '#dde3ed',
  gray_40: '#c8d1e0',
  gray_50: '#afbacc',
  gray_60: '#8e99ab',
  gray_70: '#707a8a',
  gray_80: '#58606e',
  gray_90: '#434a54',
  gray_100: '#333840',
  green_10: '#e1faeb',
  green_20: '#abedc5',
  green_30: '#7ddba3',
  green_40: '#57c282',
  green_50: '#3ba164',
  green_60: '#2a854e',
  green_70: '#20693d',
  green_80: '#1a5230',
  green_90: '#153d25',
  green_100: '#112b1b',
  indigo_10: '#f2f2fc',
  indigo_20: '#dcdcfc',
  indigo_30: '#c2c2fc',
  indigo_40: '#a7a7fa',
  indigo_50: '#8585f2',
  indigo_60: '#6767e6',
  indigo_70: '#4d4dd1',
  indigo_80: '#3737b3',
  indigo_90: '#28288a',
  indigo_100: '#202057',
  magenta_10: '#faf0f4',
  magenta_20: '#fad4e4',
  magenta_30: '#fab4d1',
  magenta_40: '#f78bb8',
  magenta_50: '#ed5393',
  magenta_60: '#d6246e',
  magenta_70: '#b01355',
  magenta_80: '#8a1244',
  magenta_90: '#611535',
  magenta_100: '#421527',
  purple_10: '#f5f0fa',
  purple_20: '#ead9fa',
  purple_30: '#dabcf7',
  purple_40: '#c79bf2',
  purple_50: '#ae74e8',
  purple_60: '#9656d6',
  purple_70: '#7d3cbd',
  purple_80: '#642b9e',
  purple_90: '#4b2175',
  purple_100: '#371c52',
  red_10: '#faf0f0',
  red_20: '#fad4d4',
  red_30: '#fab6b6',
  red_40: '#fa8e8e',
  red_50: '#f55353',
  red_60: '#de1b1b',
  red_70: '#b80d0d',
  red_80: '#8f0e0e',
  red_90: '#661414',
  red_100: '#451717',
  sky_10: '#e8f4fa',
  sky_20: '#bbe5fa',
  sky_30: '#8dd4f7',
  sky_40: '#53baed',
  sky_50: '#229ad6',
  sky_60: '#0c7bb3',
  sky_70: '#066391',
  sky_80: '#064d70',
  sky_90: '#093952',
  sky_100: '#0c2938',
  slate_10: '#edf4f7',
  slate_20: '#cbe3f5',
  slate_30: '#a7ceeb',
  slate_40: '#84b7db',
  slate_50: '#5e95bd',
  slate_60: '#48799c',
  slate_70: '#376180',
  slate_80: '#2d4d63',
  slate_90: '#243947',
  slate_100: '#1d2830',
  teal_10: '#e4f7f6',
  teal_20: '#a8ede9',
  teal_30: '#6cd9d2',
  teal_40: '#45bfb7',
  teal_50: '#28a199',
  teal_60: '#17827b',
  teal_70: '#116963',
  teal_80: '#0d524d',
  teal_90: '#0b3d3a',
  teal_100: '#092b29'
});

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/purple.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/purple.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#f5f0fa'), _defineProperty(_$20$30$40$50$60$, 20, '#ead9fa'), _defineProperty(_$20$30$40$50$60$, 30, '#dabcf7'), _defineProperty(_$20$30$40$50$60$, 40, '#c79bf2'), _defineProperty(_$20$30$40$50$60$, 50, '#ae74e8'), _defineProperty(_$20$30$40$50$60$, 60, '#9656d6'), _defineProperty(_$20$30$40$50$60$, 70, '#7d3cbd'), _defineProperty(_$20$30$40$50$60$, 80, '#642b9e'), _defineProperty(_$20$30$40$50$60$, 90, '#4b2175'), _defineProperty(_$20$30$40$50$60$, 100, '#371c52'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/red.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/red.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#faf0f0'), _defineProperty(_$20$30$40$50$60$, 20, '#fad4d4'), _defineProperty(_$20$30$40$50$60$, 30, '#fab6b6'), _defineProperty(_$20$30$40$50$60$, 40, '#fa8e8e'), _defineProperty(_$20$30$40$50$60$, 50, '#f55353'), _defineProperty(_$20$30$40$50$60$, 60, '#de1b1b'), _defineProperty(_$20$30$40$50$60$, 70, '#b80d0d'), _defineProperty(_$20$30$40$50$60$, 80, '#8f0e0e'), _defineProperty(_$20$30$40$50$60$, 90, '#661414'), _defineProperty(_$20$30$40$50$60$, 100, '#451717'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/sky.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/sky.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#e8f4fa'), _defineProperty(_$20$30$40$50$60$, 20, '#bbe5fa'), _defineProperty(_$20$30$40$50$60$, 30, '#8dd4f7'), _defineProperty(_$20$30$40$50$60$, 40, '#53baed'), _defineProperty(_$20$30$40$50$60$, 50, '#229ad6'), _defineProperty(_$20$30$40$50$60$, 60, '#0c7bb3'), _defineProperty(_$20$30$40$50$60$, 70, '#066391'), _defineProperty(_$20$30$40$50$60$, 80, '#064d70'), _defineProperty(_$20$30$40$50$60$, 90, '#093952'), _defineProperty(_$20$30$40$50$60$, 100, '#0c2938'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/slate.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/slate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#edf4f7'), _defineProperty(_$20$30$40$50$60$, 20, '#cbe3f5'), _defineProperty(_$20$30$40$50$60$, 30, '#a7ceeb'), _defineProperty(_$20$30$40$50$60$, 40, '#84b7db'), _defineProperty(_$20$30$40$50$60$, 50, '#5e95bd'), _defineProperty(_$20$30$40$50$60$, 60, '#48799c'), _defineProperty(_$20$30$40$50$60$, 70, '#376180'), _defineProperty(_$20$30$40$50$60$, 80, '#2d4d63'), _defineProperty(_$20$30$40$50$60$, 90, '#243947'), _defineProperty(_$20$30$40$50$60$, 100, '#1d2830'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/teal.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/teal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _$20$30$40$50$60$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_$20$30$40$50$60$ = {}, _defineProperty(_$20$30$40$50$60$, 10, '#e4f7f6'), _defineProperty(_$20$30$40$50$60$, 20, '#a8ede9'), _defineProperty(_$20$30$40$50$60$, 30, '#6cd9d2'), _defineProperty(_$20$30$40$50$60$, 40, '#45bfb7'), _defineProperty(_$20$30$40$50$60$, 50, '#28a199'), _defineProperty(_$20$30$40$50$60$, 60, '#17827b'), _defineProperty(_$20$30$40$50$60$, 70, '#116963'), _defineProperty(_$20$30$40$50$60$, 80, '#0d524d'), _defineProperty(_$20$30$40$50$60$, 90, '#0b3d3a'), _defineProperty(_$20$30$40$50$60$, 100, '#092b29'), _$20$30$40$50$60$);

/***/ }),

/***/ "./node_modules/mineral-ui-tokens/es/tokens.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui-tokens/es/tokens.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  backgroundColor: '#ffffff',
  backgroundColor_active: '#ebeff5',
  backgroundColor_disabled: '#ebeff5',
  backgroundColor_focus: '#ffffff',
  backgroundColor_hover: '#f5f7fa',
  backgroundColor_brand_selected: '#f0f5fc',
  backgroundColor_brand_selectedActive: '#accbfc',
  backgroundColor_brand_selectedHover: '#cfe0fc',
  backgroundColor_brandPrimary: '#3272d9',
  backgroundColor_brandPrimary_active: '#1d5bbf',
  backgroundColor_brandPrimary_focus: '#3272d9',
  backgroundColor_brandPrimary_hover: '#5691f0',
  backgroundColor_danger_active: '#fad4d4',
  backgroundColor_danger_focus: '#faf0f0',
  backgroundColor_danger_hover: '#faf0f0',
  backgroundColor_dangerPrimary: '#de1b1b',
  backgroundColor_dangerPrimary_active: '#b80d0d',
  backgroundColor_dangerPrimary_focus: '#de1b1b',
  backgroundColor_dangerPrimary_hover: '#f55353',
  backgroundColor_success_active: '#abedc5',
  backgroundColor_success_focus: '#e1faeb',
  backgroundColor_success_hover: '#e1faeb',
  backgroundColor_successPrimary: '#2a854e',
  backgroundColor_successPrimary_active: '#20693d',
  backgroundColor_successPrimary_focus: '#2a854e',
  backgroundColor_successPrimary_hover: '#3ba164',
  backgroundColor_warning_active: '#fad8af',
  backgroundColor_warning_focus: '#fcf2e6',
  backgroundColor_warning_hover: '#fcf2e6',
  backgroundColor_warningPrimary: '#ad5f00',
  backgroundColor_warningPrimary_active: '#8a4d03',
  backgroundColor_warningPrimary_focus: '#ad5f00',
  backgroundColor_warningPrimary_hover: '#cf7911',
  borderColor: '#c8d1e0',
  borderColor_brand: '#3272d9',
  borderColor_brand_active: '#1d5bbf',
  borderColor_brand_focus: '#1d5bbf',
  borderColor_brand_hover: '#5691f0',
  borderColor_danger: '#de1b1b',
  borderColor_danger_active: '#b80d0d',
  borderColor_danger_focus: '#b80d0d',
  borderColor_danger_hover: '#f55353',
  borderColor_success: '#2a854e',
  borderColor_success_active: '#20693d',
  borderColor_success_focus: '#20693d',
  borderColor_success_hover: '#3ba164',
  borderColor_warning: '#ad5f00',
  borderColor_warning_active: '#8a4d03',
  borderColor_warning_focus: '#8a4d03',
  borderColor_warning_hover: '#cf7911',
  borderRadius_1: '3px',
  boxShadow_1: '0 1px 2px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2)',
  boxShadow_2: '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.2)',
  boxShadow_3: '0 4px 8px 0 rgba(0,0,0,0.2), 0 8px 16px 0 rgba(0,0,0,0.2)',
  boxShadow_4: '0 8px 16px 0 rgba(0,0,0,0.2), 0 20px 16px -8px rgba(0,0,0,0.2)',
  boxShadow_5: '0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)',
  breakpoint_narrow: '512px',
  breakpoint_medium: '768px',
  breakpoint_wide: '1024px',
  color: '#333840',
  color_inverted: '#ffffff',
  color_disabled: '#afbacc',
  color_mouse: '#58606e',
  color_readOnly: '#58606e',
  color_required: '#de1b1b',
  color_brand: '#3272d9',
  color_brandPrimary: '#ffffff',
  color_brand_active: '#1d5bbf',
  color_brand_focus: '#3272d9',
  color_brand_hover: '#5691f0',
  color_danger: '#de1b1b',
  color_dangerPrimary: '#ffffff',
  color_danger_active: '#b80d0d',
  color_danger_focus: '#de1b1b',
  color_danger_hover: '#f55353',
  color_success: '#2a854e',
  color_successPrimary: '#ffffff',
  color_success_active: '#20693d',
  color_success_focus: '#2a854e',
  color_success_hover: '#3ba164',
  color_warning: '#ad5f00',
  color_warningPrimary: '#ffffff',
  color_warning_active: '#8a4d03',
  color_warning_focus: '#ad5f00',
  color_warning_hover: '#cf7911',
  fontFamily: '"Open Sans"',
  fontFamily_system: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamily_monospace: '"SF Mono", "Droid Sans Mono", "Source Code Pro", Monaco, Consolas, "Courier New", Courier, monospace',
  fontSize_base: '1rem',
  fontSize_mouse: '0.6875rem',
  fontSize_prose: '1rem',
  fontSize_ui: '0.875rem',
  fontWeight_regular: 400,
  fontWeight_semiBold: 600,
  fontWeight_bold: 700,
  fontWeight_extraBold: 800,
  lineHeight: 1.25,
  lineHeight_heading: 1.25,
  lineHeight_heading_small: 1.5,
  lineHeight_prose: 1.5,
  size_small: '24px',
  size_medium: '32px',
  size_large: '40px',
  size_jumbo: '52px',
  space_inline_xxs: '2px',
  space_inline_xs: '4px',
  space_inline_sm: '8px',
  space_inline_md: '16px',
  space_inline_lg: '24px',
  space_inline_xl: '32px',
  space_inline_xxl: '64px',
  space_inset_sm: '8px',
  space_inset_md: '16px',
  space_inset_lg: '24px',
  space_stack_xxs: '2px',
  space_stack_xs: '4px',
  space_stack_sm: '8px',
  space_stack_md: '16px',
  space_stack_lg: '24px',
  space_stack_xl: '32px',
  space_stack_xxl: '64px',
  zIndex_100: 100,
  zIndex_200: 200,
  zIndex_400: 400,
  zIndex_800: 800,
  zIndex_1600: 1600,
  h1_color: '#333840',
  h1_fontSize: '2.125rem',
  h1_fontWeight: 800,
  h2_color: '#58606e',
  h2_fontSize: '1.75rem',
  h2_fontWeight: 700,
  h3_color: '#58606e',
  h3_fontSize: '1.375rem',
  h3_fontWeight: 700,
  h4_color: '#58606e',
  h4_fontSize: '1.125rem',
  h4_fontWeight: 700,
  h5_color: '#333840',
  h5_fontSize: '0.875rem',
  h5_fontWeight: 700,
  h6_color: '#58606e',
  h6_fontSize: '0.875rem',
  h6_fontWeight: 400,
  icon_color: '#58606e',
  icon_color_brand: '#3272d9',
  icon_color_danger: '#de1b1b',
  icon_color_success: '#2a854e',
  icon_color_warning: '#ad5f00',
  input_backgroundColor: '#ffffff',
  input_backgroundColor_disabled: '#ebeff5',
  input_color_placeholder: '#8e99ab',
  panel_backgroundColor: '#ffffff',
  panel_backgroundColor_inverted: '#434a54',
  panel_borderColor: '#ebeff5',
  panel_borderColor_inverted: '#434a54',
  well_backgroundColor: '#ebeff5',
  well_backgroundColor_danger: '#fad4d4',
  well_backgroundColor_success: '#abedc5',
  well_backgroundColor_warning: '#fad8af',
  well_borderColor_danger: '#fa8e8e',
  well_borderColor_success: '#57c282',
  well_borderColor_warning: '#e89c3f'
});

/***/ }),

/***/ "./node_modules/mineral-ui/Button/Button.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Button/Button.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withForwardRef = _interopRequireDefault(__webpack_require__(/*! ../utils/withForwardRef */ "./node_modules/mineral-ui/utils/withForwardRef.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Button/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Button/constants.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Button/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Button, _Component);

  function Button() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        disabled = _this$props.disabled,
        forwardedRef = _this$props.forwardedRef,
        iconStart = _this$props.iconStart,
        iconEnd = _this$props.iconEnd,
        _this$props$size = _this$props.size,
        size = _this$props$size === void 0 ? Button.defaultProps.size : _this$props$size,
        variant = _this$props.variant,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["children", "disabled", "forwardedRef", "iconStart", "iconEnd", "size", "variant"]); // [1] Necessary when rendering an `a` element, which doesn't use `disabled`


    var rootProps = _objectSpread({
      'aria-disabled': disabled,
      // [1]
      disabled: disabled,
      ref: forwardedRef,
      size: size,
      tabIndex: disabled ? -1 : undefined,
      // [1]
      text: children,
      variant: variant
    }, restProps);

    var startIcon = iconStart ? (0, _react.cloneElement)(iconStart, {
      size: _constants.ICON_SIZE[size],
      key: 'iconStart'
    }) : null;
    var endIcon = iconEnd ? (0, _react.cloneElement)(iconEnd, {
      size: _constants.ICON_SIZE[size],
      key: 'iconEnd'
    }) : null;
    return (0, _core.jsx)(_styled.Button, rootProps, (0, _core.jsx)(_styled.Inner, null, startIcon, children && (0, _core.jsx)(_styled.Content, {
      size: size
    }, children), endIcon));
  };

  return Button;
}(_react.Component);

_defineProperty(Button, "displayName", 'Button');

_defineProperty(Button, "defaultProps", {
  size: _constants.SIZE.large
});

Button.propTypes =  true ? _propTypes.buttonPropTypes : undefined;

var _default = (0, _withForwardRef.default)(Button);

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Button/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Button/constants.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = exports.SIZE = exports.ICON_SIZE = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var ICON_SIZE = {
  small: 'medium',
  medium: 'medium',
  large: (0, _styles.pxToEm)(24),
  jumbo: (0, _styles.pxToEm)(24)
};
exports.ICON_SIZE = ICON_SIZE;
var SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};
exports.SIZE = SIZE;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/Button/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mineral-ui/Button/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {};
exports.default = void 0;

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/mineral-ui/Button/Button.js"));

exports.default = _Button.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Button/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Button/propTypes.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Button/propTypes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.buttonPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Button/constants.js");

var buttonPropTypes = {
  children: _propTypes.node,
  circular: _propTypes.bool,
  disabled: _propTypes.bool,
  fullWidth: _propTypes.bool,
  iconEnd: _propTypes.element,
  iconStart: _propTypes.element,
  minimal: _propTypes.bool,
  onClick: _propTypes.func,
  primary: _propTypes.bool,
  size: (0, _propTypes.oneOf)(Object.keys(_constants.SIZE)),
  type: _propTypes.string,
  variant: (0, _propTypes.oneOf)(Object.keys(_constants.VARIANT))
};
exports.buttonPropTypes = buttonPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Button/styled.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Button/styled.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Button = exports.Inner = exports.Content = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _emotion = __webpack_require__(/*! ../utils/emotion */ "./node_modules/mineral-ui/utils/emotion.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Button/constants.js");

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Button/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chooseColor = function chooseColor(_ref, theme) {
  var disabled = _ref.disabled,
      primary = _ref.primary,
      minimal = _ref.minimal;

  if (disabled) {
    return theme.color_disabled;
  } else if (primary) {
    return theme.Button_color_primary;
  } else if (minimal) {
    return theme.Button_color_minimal;
  } else {
    return theme.Button_color;
  }
};

var Content = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "e70ypka0"
})(function (_ref2) {
  var size = _ref2.size,
      baseTheme = _ref2.theme;
  var theme = (0, _themes.buttonTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var firstChildPaddingProperty = rtl ? 'paddingRight' : 'paddingLeft';
  var lastChildPaddingProperty = rtl ? 'paddingLeft' : 'paddingRight';
  var paddings;
  var fontSize = size === _constants.SIZE.small ? theme.ButtonContent_fontSize_small : theme.ButtonContent_fontSize;

  if (size === undefined || size === _constants.SIZE.large || size === _constants.SIZE.jumbo) {
    var _ref3, _lastChild, _paddings;

    var padding = (0, _styles.getNormalizedValue)(theme.Button_paddingHorizontal, fontSize);
    paddings = (_paddings = {}, _paddings['&:first-child' + _emotion.ignoreSsrWarning] = (_ref3 = {}, _ref3[firstChildPaddingProperty] = padding, _ref3), _paddings['&:last-child'] = (_lastChild = {}, _lastChild[lastChildPaddingProperty] = padding, _lastChild), _paddings);
  }

  return _objectSpread({}, {
    display: "inline-block",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }, {
    display: 'block',
    fontSize: fontSize,
    lineHeight: (0, _styles.getNormalizedValue)(theme["Button_height_" + size], fontSize)
  }, paddings);
});
exports.Content = Content;
var Inner = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e70ypka1"
})({
  name: "1xssqnp",
  styles: "align-items:center;display:inline-flex;justify-content:center;max-height:100%;pointer-events:none;width:100%;"
});
exports.Inner = Inner;
var Button = (
/*#__PURE__*/
0, _styledBase.default)('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "e70ypka2"
})(function (_ref4) {
  var _ref5, _roleImgLast, _objectSpread2;

  var circular = _ref4.circular,
      disabled = _ref4.disabled,
      fullWidth = _ref4.fullWidth,
      minimal = _ref4.minimal,
      primary = _ref4.primary,
      size = _ref4.size,
      text = _ref4.text,
      baseTheme = _ref4.theme,
      variant = _ref4.variant;
  var theme = (0, _themes.buttonTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var firstChildMarginProperty = rtl ? 'marginLeft' : 'marginRight';
  var lastChildMarginProperty = rtl ? 'marginRight' : 'marginLeft';

  if (variant) {
    // prettier-ignore
    theme = _objectSpread({}, theme, {
      Button_backgroundColor_primary: theme["backgroundColor_" + variant + "Primary"],
      Button_backgroundColor_primary_active: theme["backgroundColor_" + variant + "Primary_active"],
      Button_backgroundColor_primary_focus: theme["backgroundColor_" + variant + "Primary_focus"],
      Button_backgroundColor_primary_hover: theme["backgroundColor_" + variant + "Primary_hover"],
      Button_borderColor_active: theme["borderColor_" + variant + "_active"],
      Button_borderColor_focus: theme["borderColor_" + variant + "_focus"],
      Button_borderColor_hover: theme["borderColor_" + variant + "_hover"],
      Button_boxShadow_focus: "0 0 0 1px " + theme.boxShadow_focusInner + ", 0 0 0 2px " + theme["borderColor_" + variant + "_focus"],
      Button_color: theme["color_" + variant],
      Button_color_primary: theme["color_" + variant + "Primary"],
      Button_color_minimal: theme["color_" + variant],
      ButtonIcon_color: theme["icon_color_" + variant]
    });
  }

  var color = chooseColor({
    disabled: disabled,
    primary: primary,
    minimal: minimal
  }, theme);
  return _objectSpread({}, (0, _styles.componentStyleReset)(baseTheme), (_objectSpread2 = {
    backgroundColor: function () {
      if (disabled && !minimal) {
        return theme.backgroundColor_disabled;
      } else if (primary) {
        return theme.Button_backgroundColor_primary;
      } else if (minimal) {
        return 'transparent';
      } else {
        return theme.Button_backgroundColor;
      }
    }(),
    borderColor: disabled || primary || minimal ? 'transparent' : theme.Button_borderColor,
    borderRadius: circular ? parseFloat(theme["Button_height_" + size]) / 2 + "em" : theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth + "px",
    color: color,
    cursor: disabled ? 'default' : 'pointer',
    display: 'inline-block',
    fontWeight: theme.Button_fontWeight,
    height: theme["Button_height_" + size],
    margin: 0,
    // if the user puts in a small icon in a large button
    // we want to force the button to be round/square
    // (really just pertinent on icon-only buttons)
    minWidth: theme["Button_height_" + size],
    padding: text === undefined ? theme["Button_paddingIconOnly_" + size] : "0 " + theme.Button_paddingHorizontal,
    textDecoration: 'none',
    verticalAlign: 'middle',
    width: fullWidth && '100%',
    '&:focus': !disabled && {
      backgroundColor: function () {
        if (primary) {
          return theme.Button_backgroundColor_primary_focus;
        } else if (minimal) {
          return theme.Button_backgroundColor_minimal_focus;
        } else {
          return theme.Button_backgroundColor_focus;
        }
      }(),
      borderColor: minimal ? theme.Button_borderColor_focus : undefined,
      boxShadow: minimal ? undefined : theme.Button_boxShadow_focus,
      color: color,
      textDecoration: 'none'
    },
    '&:hover': {
      backgroundColor: function () {
        if (!disabled) {
          if (primary) {
            return theme.Button_backgroundColor_primary_hover;
          } else if (minimal) {
            return theme.Button_backgroundColor_minimal_hover;
          } else {
            return theme.Button_backgroundColor_hover;
          }
        }
      }(),
      borderColor: disabled || minimal || primary ? undefined : theme.Button_borderColor_hover,
      color: color,
      textDecoration: 'none'
    },
    '&:focus:active, &:focus:hover': {
      borderColor: function () {
        if (primary) {
          return 'transparent';
        } else if (minimal) {
          return theme.Button_borderColor_focus;
        } else {
          return theme.Button_borderColor;
        }
      }()
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      backgroundColor: function () {
        if (!disabled) {
          if (primary) {
            return theme.Button_backgroundColor_primary_active;
          } else if (minimal) {
            return theme.Button_backgroundColor_minimal_active;
          } else {
            return theme.Button_backgroundColor_active;
          }
        }
      }(),
      borderColor: !minimal && !disabled ? theme.Button_borderColor_active : undefined,
      color: color
    },
    '&::-moz-focus-inner': {
      border: 0
    },
    '& [role="img"]': {
      boxSizing: 'content-box',
      color: disabled || primary ? null : theme.ButtonIcon_color,
      display: 'block',
      flexShrink: 0
    }
  }, _objectSpread2['& [role="img"]:first-child' + _emotion.ignoreSsrWarning] = (_ref5 = {}, _ref5[firstChildMarginProperty] = theme.ButtonIcon_margin, _ref5), _objectSpread2['& [role="img"]:last-child'] = (_roleImgLast = {}, _roleImgLast[lastChildMarginProperty] = theme.ButtonIcon_margin, _roleImgLast), _objectSpread2['& [role="img"]:only-child'] = {
    margin: 0
  }, _objectSpread2));
});
exports.Button = Button;

/***/ }),

/***/ "./node_modules/mineral-ui/Button/themes.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Button/themes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.buttonTheme = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// prettier-ignore
var buttonTheme = function buttonTheme(baseTheme) {
  return _objectSpread({
    Button_backgroundColor: baseTheme.backgroundColor,
    Button_backgroundColor_active: baseTheme.backgroundColor_active,
    Button_backgroundColor_focus: baseTheme.backgroundColor_focus,
    Button_backgroundColor_hover: baseTheme.backgroundColor_hover,
    Button_backgroundColor_minimal_active: baseTheme.backgroundColor_active,
    Button_backgroundColor_minimal_hover: baseTheme.backgroundColor_hover,
    Button_backgroundColor_primary: baseTheme.backgroundColor_themePrimary,
    Button_backgroundColor_primary_active: baseTheme.backgroundColor_themePrimary_active,
    Button_backgroundColor_primary_focus: baseTheme.backgroundColor_themePrimary_focus,
    Button_backgroundColor_primary_hover: baseTheme.backgroundColor_themePrimary_hover,
    Button_borderColor: baseTheme.borderColor,
    Button_borderColor_active: baseTheme.borderColor_theme_active,
    Button_borderColor_focus: baseTheme.borderColor_theme_focus,
    Button_borderColor_hover: baseTheme.borderColor_theme_hover,
    Button_borderRadius: baseTheme.borderRadius_1,
    Button_borderWidth: 1,
    // px
    Button_boxShadow_focus: "0 0 0 1px " + baseTheme.boxShadow_focusInner + ", 0 0 0 2px " + baseTheme.borderColor_theme_focus,
    Button_color: baseTheme.color_theme,
    Button_color_minimal: baseTheme.color_theme,
    Button_color_primary: baseTheme.color_themePrimary,
    Button_fontWeight: baseTheme.fontWeight_semiBold,
    Button_paddingHorizontal: baseTheme.space_inset_sm,
    Button_paddingIconOnly_small: (0, _styles.pxToEm)(3),
    Button_paddingIconOnly_medium: (0, _styles.pxToEm)(7),
    Button_paddingIconOnly_large: (0, _styles.pxToEm)(7),
    Button_paddingIconOnly_jumbo: (0, _styles.pxToEm)(13),
    Button_height_small: baseTheme.size_small,
    Button_height_medium: baseTheme.size_medium,
    Button_height_large: baseTheme.size_large,
    Button_height_jumbo: baseTheme.size_jumbo,
    ButtonContent_fontSize: baseTheme.fontSize_ui,
    ButtonContent_fontSize_small: (0, _styles.pxToEm)(12),
    ButtonIcon_color: baseTheme.icon_color_theme,
    ButtonIcon_margin: baseTheme.space_inset_sm
  }, baseTheme);
};

exports.buttonTheme = buttonTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/CardBlock.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Card/CardBlock.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = CardBlock;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Card/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Card/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardBlock(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  return (0, _core.jsx)(_styled.CardBlockRoot, restProps, (0, _core.jsx)(_styled.CardBlockInner, null, children));
}

CardBlock.displayName = 'CardBlock';
CardBlock.propTypes =  true ? _propTypes.cardBlockPropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/CardTitle.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Card/CardTitle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = CardTitle;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _IconDanger = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconDanger */ "./node_modules/mineral-ui/Icon/IconDanger.js"));

var _IconSuccess = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconSuccess */ "./node_modules/mineral-ui/Icon/IconSuccess.js"));

var _IconWarning = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconWarning */ "./node_modules/mineral-ui/Icon/IconWarning.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Card/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Card/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantIcons = {
  danger: (0, _core.jsx)(_IconDanger.default, {
    size: "medium"
  }),
  success: (0, _core.jsx)(_IconSuccess.default, {
    size: "medium"
  }),
  warning: (0, _core.jsx)(_IconWarning.default, {
    size: "medium"
  })
};

function CardTitle(props) {
  var actions = props.actions,
      avatar = props.avatar,
      children = props.children,
      secondaryText = props.secondaryText,
      subtitle = props.subtitle,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["actions", "avatar", "children", "secondaryText", "subtitle", "variant"]);

  var rootProps = _objectSpread({}, restProps);

  var secondaryComponent = actions ? _react.Children.map(actions, function (action, index) {
    return (0, _react.cloneElement)(action, {
      key: index
    });
  }) : secondaryText ? (0, _core.jsx)(_styled.CardTitleSecondaryText, null, secondaryText) : null;
  return (0, _core.jsx)(_styled.CardTitleRoot, rootProps, avatar && (0, _core.jsx)(_styled.CardTitleAvatar, {
    subtitle: subtitle
  }, avatar), (0, _core.jsx)(_styled.CardTitleInner, null, (0, _core.jsx)(_styled.CardTitleTitle, {
    variant: variant
  }, variant && variantIcons[variant], (0, _core.jsx)(_styled.CardTitleTitleContent, {
    actions: actions
  }, children), secondaryComponent), subtitle && (0, _core.jsx)(_styled.CardTitleSubtitle, {
    avatar: avatar
  }, subtitle)));
}

CardTitle.displayName = 'CardTitle';
CardTitle.propTypes =  true ? _propTypes.cardTitlePropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Card/constants.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = void 0;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/propTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Card/propTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cardTitleMenuPropTypes = exports.cardTitlePropTypes = exports.cardStatusPropTypes = exports.cardImagePropTypes = exports.cardFooterPropTypes = exports.cardDividerPropTypes = exports.cardBlockPropTypes = exports.cardActionsPropTypes = exports.cardPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = __webpack_require__(/*! ../Menu/propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Card/constants.js");

var variant = (0, _propTypes.oneOf)(Object.keys(_constants.VARIANT));
var cardPropTypes = {
  children: _propTypes.node.isRequired,
  onClick: _propTypes.func
};
exports.cardPropTypes = cardPropTypes;
var cardActionsPropTypes = {
  children: _propTypes.node.isRequired
};
exports.cardActionsPropTypes = cardActionsPropTypes;
var cardBlockPropTypes = {
  children: _propTypes.node.isRequired
};
exports.cardBlockPropTypes = cardBlockPropTypes;
var cardDividerPropTypes = {};
exports.cardDividerPropTypes = cardDividerPropTypes;
var cardFooterPropTypes = {
  children: _propTypes.node,
  defaultIsOpen: _propTypes.bool,
  expandable: _propTypes.bool,
  isOpen: _propTypes.bool,
  onClose: _propTypes.func,
  onOpen: _propTypes.func,
  title: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.element]),
  triggerTitle: _propTypes.func,
  variant: variant
};
exports.cardFooterPropTypes = cardFooterPropTypes;
var cardImagePropTypes = {};
exports.cardImagePropTypes = cardImagePropTypes;
var cardStatusPropTypes = {
  children: _propTypes.string.isRequired,
  variant: variant
};
exports.cardStatusPropTypes = cardStatusPropTypes;
var cardTitlePropTypes = {
  actions: _propTypes.node,
  avatar: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.element]),
  children: _propTypes.node.isRequired,
  secondaryText: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.element]),
  subtitle: _propTypes.node,
  variant: variant
};
exports.cardTitlePropTypes = cardTitlePropTypes;
var cardTitleMenuPropTypes = {
  data: _propTypes2.menuItemsPropType.isRequired,
  triggerTitle: _propTypes.string
};
exports.cardTitleMenuPropTypes = cardTitleMenuPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/styled.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Card/styled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CardTitleMenuButton = exports.CardTitleTitleContent = exports.CardTitleTitle = exports.CardTitleSubtitle = exports.CardTitleSecondaryText = exports.CardTitleInner = exports.CardTitleAvatar = exports.CardTitleRoot = exports.CardStatusRoot = exports.CardImageRoot = exports.CardFooterToggleButton = exports.CardFooterTitleContent = exports.CardFooterTitle = exports.CardFooterContent = exports.CardFooterRoot = exports.CardDividerRoot = exports.CardBlockInner = exports.CardBlockRoot = exports.CardAction = exports.CardActionsRoot = exports.CardRow = exports.CardRoot = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withProps = _interopRequireDefault(__webpack_require__(/*! recompose/withProps */ "./node_modules/recompose/withProps.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _emotion = __webpack_require__(/*! ../utils/emotion */ "./node_modules/mineral-ui/utils/emotion.js");

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! ../Button */ "./node_modules/mineral-ui/Button/index.js"));

var _themes2 = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Card/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v0"
})(function (props) {
  var theme = (0, _themes2.cardTheme)(props.theme);
  return _objectSpread({}, (0, _styles.componentStyleReset)(props.theme), {
    backgroundColor: theme.Card_backgroundColor,
    border: "1px solid " + theme.Card_borderColor,
    borderRadius: theme.Card_borderRadius,
    boxShadow: theme.Card_boxShadow,
    cursor: props.onClick && 'pointer',
    paddingBottom: '0.01em',
    // Necessary to prevent margin collapse of last-child
    paddingTop: '0.01em',
    // Necessary to prevent margin collapse of first-child
    '&:focus': {
      boxShadow: theme.Card_boxShadow_focus
    }
  });
});
exports.CardRoot = CardRoot;
var CardRow = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v1"
})(function (props) {
  var theme = (0, _themes2.cardTheme)(props.theme);
  return {
    marginBottom: theme.CardRow_marginVertical,
    marginTop: theme.CardRow_marginVertical,
    paddingLeft: theme.CardRow_paddingHorizontal,
    paddingRight: theme.CardRow_paddingHorizontal
  };
}, "");
exports.CardRow = CardRow;
var CardActionsRoot = (
/*#__PURE__*/
0, _styledBase.default)(CardRow, {
  target: "e1roqw6v2"
})(function (props) {
  var theme = _objectSpread({}, (0, _themes2.cardActionsTheme)(props.theme), (0, _themes2.cardTheme)(props.theme));

  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    // We subtract `theme.CardActionsAction_spaceInline` because of the marginBottom on Action.
    marginBottom: parseFloat(theme.CardRow_marginVertical) - parseFloat(theme.CardActionsAction_spaceInline) + "em"
  };
});
exports.CardActionsRoot = CardActionsRoot;
var CardAction = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e1roqw6v3"
})(function (props) {
  var theme = _objectSpread({}, (0, _themes2.cardActionsTheme)(props.theme), (0, _themes2.cardBlockTheme)(props.theme));

  var rtl = theme.direction === 'rtl';
  var fontSize = theme.CardBlock_fontSize;
  var actionsGap = (0, _styles.getNormalizedValue)(theme.CardActionsAction_spaceInline, fontSize);
  return {
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 auto',
    fontSize: fontSize,
    marginBottom: actionsGap,
    marginLeft: rtl ? null : actionsGap,
    marginRight: rtl ? actionsGap : null
  };
});
exports.CardAction = CardAction;
var CardBlockRoot = (
/*#__PURE__*/
0, _styledBase.default)(CardRow, {
  target: "e1roqw6v4"
})(function (props) {
  var theme = (0, _themes2.cardTheme)(props.theme);
  return {
    '&:last-child': {
      marginBottom: theme.CardRow_marginVerticalLast
    }
  };
});
exports.CardBlockRoot = CardBlockRoot;
var CardBlockInner = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v5"
})(function (props) {
  var theme = (0, _themes2.cardBlockTheme)(props.theme);
  return {
    fontSize: theme.CardBlock_fontSize,
    lineHeight: theme.CardBlock_lineHeight
  };
});
exports.CardBlockInner = CardBlockInner;
var CardDividerRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v6"
})(function (props) {
  var theme = _objectSpread({}, (0, _themes2.cardDividerTheme)(props.theme), (0, _themes2.cardTheme)(props.theme));

  return {
    backgroundColor: theme.CardDivider_borderColor,
    height: theme.CardDivider_borderWidth,
    margin: theme.CardRow_marginVertical + " 0"
  };
});
exports.CardDividerRoot = CardDividerRoot;
var CardFooterRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v7"
})(function (_ref) {
  var variant = _ref.variant,
      baseTheme = _ref.theme;

  var theme = _objectSpread({}, (0, _themes2.cardFooterTheme)(baseTheme), (0, _themes2.cardTheme)(baseTheme));

  if (variant) {
    theme = _objectSpread({}, theme, {
      CardFooter_backgroundColor: theme["well_backgroundColor_" + variant],
      CardFooter_borderColor: theme["well_borderColor_" + variant]
    });
  } // [1] Making the footer overlap the Card border. The `calc` bit accounts
  //     for the paddingBottom on Card to prevent margin collapse.


  return {
    backgroundColor: theme.CardFooter_backgroundColor,
    border: "1px solid " + theme.CardFooter_borderColor,
    borderRadius: "0 0 " + theme.Card_borderRadius + " " + theme.Card_borderRadius,
    margin: '0 -1px calc(-1px - 0.01em) -1px',
    // [1]
    paddingBottom: '0.01em',
    // Necessary to prevent margin collapse of last-child
    paddingTop: '0.01em' // Necessary to prevent margin collapse of first-child

  };
});
/*
 * CardFooter can have children like CardBlock and CardActions. When those
 * components are used directly inside Card they have a specific top/bottom
 * margin, but when they're used within CardFooter, they have a different
 * top/bottom margin. This technique accomplishes that without writing a bunch
 * of descendant selectors.
 */

exports.CardFooterRoot = CardFooterRoot;

var footerTheme = function footerTheme(_ref2) {
  var theme = _ref2.theme;
  return {
    CardRow_marginVertical: (0, _themes2.cardFooterTheme)(theme).CardFooterRow_marginVertical,
    CardRow_marginVerticalLast: (0, _themes2.cardFooterTheme)(theme).CardFooterRow_marginVerticalLast
  };
};
/*
 * We shouldn't just create a themed 'div', because it won't be able to apply
 * the provided theme to itself, which breaks the expectation of
 * themed. So, we theme a simple functional component that
 * returns a 'div' instead.
 */


var CardFooterContent = (0, _themes.themed)(function (props) {
  return (0, _core.jsx)("div", props);
})(footerTheme);
exports.CardFooterContent = CardFooterContent;
var CardFooterTitle = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v8"
})(function (props) {
  var theme = _objectSpread({}, (0, _themes2.cardFooterTheme)(props.theme), (0, _themes2.cardTheme)(props.theme));

  return {
    alignItems: 'flex-start',
    display: 'flex',
    marginBottom: theme.CardFooterRow_marginVertical,
    marginTop: theme.CardFooterRow_marginVertical,
    paddingLeft: theme.CardRow_paddingHorizontal,
    paddingRight: theme.CardRow_paddingHorizontal
  };
});
exports.CardFooterTitle = CardFooterTitle;
var CardFooterTitleContent = (
/*#__PURE__*/
0, _styledBase.default)('h4', {
  target: "e1roqw6v9"
})(function (props) {
  var theme = (0, _themes2.cardFooterTheme)(props.theme);
  return {
    color: theme.CardFooterTitle_color,
    flex: '1 1 auto',
    fontSize: theme.CardFooterTitle_fontSize,
    fontWeight: theme.CardFooterTitle_fontWeight,
    margin: 0
  };
});
exports.CardFooterTitleContent = CardFooterTitleContent;
var CardFooterToggleButton = (0, _withProps.default)({
  type: 'button'
})((
/*#__PURE__*/
0, _styledBase.default)(_Button.default, {
  target: "e1roqw6v10"
})(
/*
 * A large Button, even with zero'd padding, is still a bit too large in this
 * context. These styles allow the Button to shrink, but the Icon remains the
 * same size.
 */
function (_ref3) {
  var theme = _ref3.theme,
      variant = _ref3.variant;
  return _objectSpread({
    flex: '0 0 auto',
    height: 'auto',
    minWidth: 0,
    overflow: 'hidden',
    padding: 0,
    transform: "translateY(-" + (0, _styles.pxToEm)(1) + ")"
  }, variant ? {
    '&:hover': {
      backgroundColor: theme["backgroundColor_" + variant + "_hover"]
    }
  } : undefined, {
    // Inner
    '& > span': {
      display: 'block',
      margin: "-" + (0, _styles.pxToEm)(4)
    },
    // Icon
    '& [role="img"]': {
      color: theme.icon_color
    }
  });
}));
exports.CardFooterToggleButton = CardFooterToggleButton;
var CardImageRoot = (
/*#__PURE__*/
0, _styledBase.default)('img', {
  target: "e1roqw6v11"
})(function (props) {
  var _ref4;

  var theme = (0, _themes2.cardTheme)(props.theme);
  return _ref4 = {
    display: 'block',
    marginBottom: theme.CardRow_marginVertical,
    marginTop: theme.CardRow_marginVertical,
    maxWidth: '100%'
  }, _ref4['&:first-child' + _emotion.ignoreSsrWarning] = {
    borderRadius: theme.Card_borderRadius + " " + theme.Card_borderRadius + " 0 0",
    marginTop: 0
  }, _ref4['&:last-child'] = {
    borderRadius: "0 0 " + theme.Card_borderRadius + " " + theme.Card_borderRadius,
    marginBottom: 0
  }, _ref4;
});
exports.CardImageRoot = CardImageRoot;
var CardStatusRoot = (
/*#__PURE__*/
0, _styledBase.default)(CardRow, {
  target: "e1roqw6v12"
})(function (_ref5) {
  var baseTheme = _ref5.theme,
      variant = _ref5.variant;
  var theme = (0, _themes2.cardStatusTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  return {
    alignItems: 'center',
    color: theme["color_" + variant],
    display: 'flex',
    fontSize: theme.CardStatus_fontSize,
    fontWeight: theme.CardStatus_fontWeight,
    '& > [role="img"]': {
      height: theme.CardStatusIcon_size,
      marginRight: rtl ? null : theme.CardStatusIcon_margin,
      marginLeft: rtl ? theme.CardStatusIcon_margin : null,
      width: theme.CardStatusIcon_size
    }
  };
});
exports.CardStatusRoot = CardStatusRoot;
var CardTitleRoot = (
/*#__PURE__*/
0, _styledBase.default)(CardRow, {
  target: "e1roqw6v13"
})({
  name: "k008qs",
  styles: "display:flex;"
});
exports.CardTitleRoot = CardTitleRoot;
var CardTitleAvatar = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e1roqw6v14"
})(function (_ref6) {
  var subtitle = _ref6.subtitle,
      baseTheme = _ref6.theme;
  var theme = (0, _themes2.cardTitleTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var width = subtitle ? theme.CardTitleAvatarSize_large : theme.CardTitleAvatarSize;
  return {
    flex: '0 0 auto',
    marginLeft: rtl ? theme.CardTitleAvatar_margin : null,
    marginRight: rtl ? null : theme.CardTitleAvatar_margin,
    width: width,
    '&[class] > *': {
      height: 'auto',
      width: '100%'
    }
  };
});
exports.CardTitleAvatar = CardTitleAvatar;
var CardTitleInner = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v15"
})({
  name: "11qjisw",
  styles: "flex:1 1 auto;"
});
exports.CardTitleInner = CardTitleInner;
var CardTitleSecondaryText = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "e1roqw6v16"
})(function (props) {
  var theme = (0, _themes2.cardTitleTheme)(props.theme);
  var fontSize = theme.CardTitleSecondaryText_fontSize;
  return _objectSpread({
    color: theme.CardTitleSecondaryText_color,
    flex: '0 0 auto',
    fontSize: fontSize,
    fontWeight: theme.CardTitleSecondaryText_fontWeight,
    transform: "translateY(" + (0, _styles.getNormalizedValue)((0, _styles.pxToEm)(5), fontSize) + ")"
  }, {
    display: "inline-block",
    maxWidth: "33%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  });
});
exports.CardTitleSecondaryText = CardTitleSecondaryText;
var CardTitleSubtitle = (
/*#__PURE__*/
0, _styledBase.default)('h4', {
  target: "e1roqw6v17"
})(function (_ref7) {
  var avatar = _ref7.avatar,
      baseTheme = _ref7.theme;
  var theme = (0, _themes2.cardTitleTheme)(baseTheme);
  var fontSize = theme.CardSubtitle_fontSize;
  return {
    color: theme.CardSubtitle_color,
    fontSize: fontSize,
    fontWeight: theme.CardSubtitle_fontWeight,
    margin: 0,
    marginTop: avatar ? null : (0, _styles.getNormalizedValue)(theme.CardSubtitle_marginTop, fontSize)
  };
});
exports.CardTitleSubtitle = CardTitleSubtitle;
var CardTitleTitle = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "e1roqw6v18"
})(function (_ref8) {
  var baseTheme = _ref8.theme,
      variant = _ref8.variant;
  var theme = (0, _themes2.cardTitleTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  return {
    alignItems: 'flex-start',
    display: 'flex',
    '& > [role="img"]': {
      color: variant ? theme["icon_color_" + variant] : null,
      flex: '0 0 auto',
      marginLeft: rtl ? theme.CardTitleIcon_margin : null,
      marginRight: rtl ? null : theme.CardTitleIcon_margin,
      position: 'relative',
      top: (0, _styles.pxToEm)(4) // optical alignment

    }
  };
});
exports.CardTitleTitle = CardTitleTitle;
var CardTitleTitleContent = (
/*#__PURE__*/
0, _styledBase.default)('h3', {
  target: "e1roqw6v19"
})(function (_ref9) {
  var actions = _ref9.actions,
      baseTheme = _ref9.theme;
  var theme = (0, _themes2.cardTitleTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var fontSize = theme.CardTitle_fontSize;
  var actionsMargin = (0, _styles.getNormalizedValue)(theme.CardTitleIcon_margin, fontSize);
  return {
    color: theme.CardTitle_color,
    flex: '1 1 auto',
    fontSize: fontSize,
    fontWeight: theme.CardTitle_fontWeight,
    margin: 0,
    marginLeft: actions && rtl ? actionsMargin : null,
    marginRight: actions && !rtl ? actionsMargin : null
  };
});
exports.CardTitleTitleContent = CardTitleTitleContent;
var CardTitleMenuButton = (0, _withProps.default)({
  type: 'button'
})((
/*#__PURE__*/
0, _styledBase.default)(_Button.default, {
  target: "e1roqw6v20"
})(
/*
 * A large Button, even with zero'd padding, is still a bit too large in this
 * context. These styles allow the Button to shrink, but the Icon remains the
 * same size.
 */
function (_ref10) {
  var theme = _ref10.theme;
  return {
    height: 'auto',
    minWidth: 0,
    overflow: 'hidden',
    padding: 0,
    // Inner
    '& > span': {
      display: 'block',
      margin: "-" + (0, _styles.pxToEm)(2)
    },
    // Icon
    '& [role="img"]': {
      color: theme.icon_color
    }
  };
}));
exports.CardTitleMenuButton = CardTitleMenuButton;

/***/ }),

/***/ "./node_modules/mineral-ui/Card/themes.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Card/themes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cardTitleTheme = exports.cardStatusTheme = exports.cardFooterTheme = exports.cardDividerTheme = exports.cardBlockTheme = exports.cardActionsTheme = exports.cardTheme = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// prettier-ignore
var cardTheme = function cardTheme(baseTheme) {
  return _objectSpread({
    Card_backgroundColor: baseTheme.panel_backgroundColor,
    Card_borderColor: baseTheme.panel_borderColor,
    Card_borderRadius: baseTheme.borderRadius_1,
    Card_boxShadow: baseTheme.boxShadow_2,
    Card_boxShadow_focus: "0 0 0 2px " + baseTheme.borderColor_theme_focus + ", " + baseTheme.boxShadow_1,
    CardRow_marginVertical: baseTheme.space_stack_md,
    CardRow_marginVerticalLast: baseTheme.space_stack_lg,
    CardRow_paddingHorizontal: baseTheme.space_inset_md
  }, baseTheme);
};

exports.cardTheme = cardTheme;

var cardActionsTheme = function cardActionsTheme(baseTheme) {
  return _objectSpread({
    CardActionsAction_spaceInline: baseTheme.space_inline_sm
  }, baseTheme);
};

exports.cardActionsTheme = cardActionsTheme;

var cardBlockTheme = function cardBlockTheme(baseTheme) {
  return _objectSpread({
    CardBlock_fontSize: baseTheme.fontSize_ui,
    CardBlock_lineHeight: baseTheme.lineHeight_prose
  }, baseTheme);
};

exports.cardBlockTheme = cardBlockTheme;

var cardDividerTheme = function cardDividerTheme(baseTheme) {
  return _objectSpread({
    CardDivider_borderColor: baseTheme.borderColor,
    CardDivider_borderWidth: '1px'
  }, baseTheme);
};

exports.cardDividerTheme = cardDividerTheme;

var cardFooterTheme = function cardFooterTheme(baseTheme) {
  return _objectSpread({
    CardFooter_backgroundColor: baseTheme.well_backgroundColor,
    CardFooter_borderColor: baseTheme.borderColor,
    CardFooterRow_marginVertical: baseTheme.space_stack_sm,
    CardFooterRow_marginVerticalLast: baseTheme.space_stack_md,
    CardFooterTitle_color: baseTheme.h5_color,
    CardFooterTitle_fontSize: baseTheme.h5_fontSize,
    CardFooterTitle_fontWeight: baseTheme.h5_fontWeight
  }, baseTheme);
};

exports.cardFooterTheme = cardFooterTheme;

var cardStatusTheme = function cardStatusTheme(baseTheme) {
  return _objectSpread({
    CardStatus_fontSize: baseTheme.fontSize_ui,
    CardStatus_fontWeight: baseTheme.fontWeight_regular,
    CardStatusIcon_margin: baseTheme.space_inline_sm,
    CardStatusIcon_size: (0, _styles.pxToEm)(12)
  }, baseTheme);
};

exports.cardStatusTheme = cardStatusTheme;

var cardTitleTheme = function cardTitleTheme(baseTheme) {
  return _objectSpread({
    CardTitle_color: baseTheme.h4_color,
    CardTitle_fontSize: baseTheme.h4_fontSize,
    CardTitle_fontWeight: baseTheme.h4_fontWeight,
    CardTitleAvatar_margin: baseTheme.space_inline_sm,
    CardTitleAvatarSize: baseTheme.size_small,
    CardTitleAvatarSize_large: baseTheme.size_large,
    CardTitleIcon_margin: baseTheme.space_inline_sm,
    CardTitleSecondaryText_color: baseTheme.color_mouse,
    CardTitleSecondaryText_fontSize: baseTheme.fontSize_mouse,
    CardTitleSecondaryText_fontWeight: baseTheme.fontWeight_regular,
    CardSubtitle_color: baseTheme.color_mouse,
    CardSubtitle_fontSize: baseTheme.fontSize_mouse,
    CardSubtitle_fontWeight: baseTheme.fontWeight_regular,
    CardSubtitle_marginTop: baseTheme.space_stack_sm
  }, baseTheme);
};

exports.cardTitleTheme = cardTitleTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Dialog/ModifiersContext.js":
/*!************************************************************!*\
  !*** ./node_modules/mineral-ui/Dialog/ModifiersContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ModifiersContext = (0, _react.createContext)();
var _default = ModifiersContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/Dropdown.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/Dropdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/mineral-ui/utils/index.js");

var _Menu = _interopRequireWildcard(__webpack_require__(/*! ../Menu/Menu */ "./node_modules/mineral-ui/Menu/Menu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ../Menu/MenuItem */ "./node_modules/mineral-ui/Menu/MenuItem.js"));

var _Popover = _interopRequireDefault(__webpack_require__(/*! ../Popover */ "./node_modules/mineral-ui/Popover/index.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Dropdown/constants.js");

var _DropdownContent = _interopRequireDefault(__webpack_require__(/*! ./DropdownContent */ "./node_modules/mineral-ui/Dropdown/DropdownContent.js"));

var _ItemMatcher = _interopRequireDefault(__webpack_require__(/*! ./ItemMatcher */ "./node_modules/mineral-ui/Dropdown/ItemMatcher.js"));

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Dropdown/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Dropdown, _Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      highlightedIndex: _this.props.defaultHighlightedIndex,
      isOpen: Boolean(_this.props.defaultIsOpen)
    });

    _defineProperty(_assertThisInitialized(_this), "dropdownTrigger", void 0);

    _defineProperty(_assertThisInitialized(_this), "highlightedItemId", void 0);

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || "dropdown-" + (0, _utils.generateId)());

    _defineProperty(_assertThisInitialized(_this), "itemMatcher", void 0);

    _defineProperty(_assertThisInitialized(_this), "items", void 0);

    _defineProperty(_assertThisInitialized(_this), "getItems", (0, _memoizeOne.default)(_Menu.getItems, _reactFastCompare.default));

    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      return {
        state: {
          highlightedIndex: _this.getControllableValue('highlightedIndex'),
          isOpen: _this.getControllableValue('isOpen')
        },
        helpers: {
          close: _this.close,
          focusTrigger: _this.focusTrigger,
          open: _this.open
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setTriggerRef", function (node) {
      _this.dropdownTrigger = node;
    });

    _defineProperty(_assertThisInitialized(_this), "getContentProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _props = props,
          ignoreSubtitle = _props.subtitle,
          ignoreTitle = _props.title,
          ignoreTabIndex = _props.tabIndex,
          restProps = _objectWithoutPropertiesLoose(_props, ["subtitle", "title", "tabIndex"]);

      var _this$props = _this.props,
          modifiers = _this$props.modifiers,
          placement = _this$props.placement,
          positionFixed = _this$props.positionFixed,
          wide = _this$props.wide;
      return _objectSpread({}, restProps, {
        children: _this.renderMenu(),
        id: _this.getContentId(),
        modifiers: modifiers,
        placement: placement,
        positionFixed: positionFixed,
        wide: wide
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function (_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          props = _ref.props;

      return (0, _core.jsx)(_DropdownContent.default, _this.getContentProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getContentId", function () {
      return _this.id + "-content";
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuId", function () {
      return _this.id + "-menu";
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuItemId", function (index) {
      return _this.id + "-item-" + index;
    });

    _defineProperty(_assertThisInitialized(_this), "getTriggerProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var isOpen = _this.getControllableValue('isOpen');

      var contentId = _this.getContentId();

      var children = _this.props.children;
      return _objectSpread({}, (0, _utils.isRenderProp)(children) ? props : {}, isOpen ? {
        'aria-activedescendant': _this.getHighlightedItemId() || _this.getMenuId()
      } : {}, {
        'aria-describedby': contentId,
        'aria-haspopup': true,
        'aria-owns': contentId
      }, !(0, _utils.isRenderProp)(children) ? props : {}, {
        onKeyDown: (0, _utils.composeEventHandlers)(props.onKeyDown, _this.onTriggerKeyDown),
        onKeyUp: (0, _utils.composeEventHandlers)(props.onKeyUp, _this.onTriggerKeyUp)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrigger", function (_temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          props = _ref2.props;

      var children = _this.props.children;

      if ((0, _utils.isRenderProp)(children)) {
        return children(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getTriggerProps(props)
        }));
      }

      var child = _react.Children.only(children);

      return (0, _react.cloneElement)(child, _this.getTriggerProps(child.props));
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _this$props2 = _this.props,
          data = _this$props2.data,
          itemKey = _this$props2.itemKey;
      return _objectSpread({}, props, {
        id: _this.getMenuId(),
        itemKey: itemKey,
        data: data,
        highlightedIndex: _this.getControllableValue('highlightedIndex'),
        item: _this.renderItem,
        role: 'menu'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenu", function (_temp3) {
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          props = _ref3.props;

      var menu = _this.props.menu;

      if ((0, _utils.isRenderProp)(menu)) {
        return menu(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getMenuProps(props)
        }));
      }

      return (0, _core.jsx)(_Menu.default, _this.getMenuProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getItemProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var highlightedIndex = _this.getControllableValue('highlightedIndex');

      var _props2 = props,
          itemProps = _props2.props;
      var index = itemProps.index,
          item = itemProps.item;
      return _objectSpread({}, itemProps, item, {
        'aria-disabled': _this.props.disabled || item.disabled,
        children: item.text,
        id: _this.getMenuItemId(index),
        isHighlighted: highlightedIndex === index,
        role: 'menuitem',
        tabIndex: null,
        // Unset tabIndex because we use arrow keys to navigate instead
        onClick: (0, _utils.composeEventHandlers)(item.onClick, _this.onItemClick)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (props) {
      if (props === void 0) {
        props = {};
      }

      var item = _this.props.item;

      if ((0, _utils.isRenderProp)(item)) {
        return item(_objectSpread({}, props, _this.getStateAndHelpers(), {
          props: _this.getItemProps(props)
        }));
      }

      return (0, _core.jsx)(_MenuItem.default, _this.getItemProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getHighlightedItemId", function () {
      var highlightedIndex = _this.getControllableValue('highlightedIndex');

      return highlightedIndex !== undefined && highlightedIndex !== null ? _this.getMenuItemId(highlightedIndex) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "hasHighlightedIndex", function () {
      return _this.getControllableValue('highlightedIndex') != undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "onTriggerKeyUp", function (event) {
      // Prevent Firefox from triggering Popover's onClick handler when
      // space key is used to activate trigger.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=501496
      event.key === ' ' && event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onTriggerKeyDown", function (event) {
      var key = event.key;

      var isOpen = _this.getControllableValue('isOpen');

      if (key === 'ArrowUp') {
        event.preventDefault();

        _this.highlightPreviousItem();

        !isOpen && _this.open(event);
      } else if (key === 'ArrowDown') {
        event.preventDefault();

        _this.highlightNextItem();

        !isOpen && _this.open(event);
      } else if (key === 'Home' && isOpen) {
        event.preventDefault();

        _this.highlightItemAtIndex(0);
      } else if (key === 'End' && isOpen) {
        event.preventDefault();

        _this.highlightItemAtIndex(_this.items.length - 1);
      } else if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        isOpen ? _this.hasHighlightedIndex() ? _this.clickHighlightedItem() : _this.close(event) : _this.open(event);
      } else if (isOpen) {
        _this.highlightItemMatchingKey(key);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "findItemMatchingKey", function (key) {
      _this.itemMatcher = _this.itemMatcher || new _ItemMatcher.default();
      return _this.itemMatcher.findMatchingItem(_this.items, _this.getControllableValue('highlightedIndex'), key);
    });

    _defineProperty(_assertThisInitialized(_this), "highlightItemMatchingKey", function (key) {
      var matchingItem = _this.findItemMatchingKey(key);

      matchingItem && _this.highlightItemAtIndex(_this.items.indexOf(matchingItem));
    });

    _defineProperty(_assertThisInitialized(_this), "highlightItemAtIndex", function (index) {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState({
          highlightedIndex: index
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightNextItem", function () {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState(function (prevState) {
          return {
            highlightedIndex: prevState.highlightedIndex === null || prevState.highlightedIndex === undefined || prevState.highlightedIndex === _this.items.length - 1 ? 0 : prevState.highlightedIndex + 1
          };
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightPreviousItem", function () {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState(function (prevState) {
          return {
            highlightedIndex: !prevState.highlightedIndex ? _this.items.length - 1 : prevState.highlightedIndex - 1
          };
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollHighlightedItemIntoViewIfNeeded", function () {
      var boundary = global.document.getElementById(_this.getContentId());
      var highlightedItemNode = boundary && global.document.getElementById(_this.getHighlightedItemId());

      if (highlightedItemNode) {
        (0, _scrollIntoViewIfNeeded.default)(highlightedItemNode, {
          boundary: boundary
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHighlightedItem", function () {
      var highlightedItemNode = global.document.getElementById(_this.getHighlightedItemId());
      highlightedItemNode && highlightedItemNode.click();
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (event) {
      if (_this.isControlled('isOpen')) {
        _this.openActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: true
          };
        }, function () {
          _this.openActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openActions", function (event) {
      _this.scrollHighlightedItemIntoViewIfNeeded();

      _this.props.onOpen && _this.props.onOpen(event);
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (event) {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState({
          highlightedIndex: null
        });
      }

      if (_this.isControlled('isOpen')) {
        _this.closeActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: false
          };
        }, function () {
          _this.closeActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeActions", function (event) {
      _this.props.onClose && _this.props.onClose(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (event) {
      _this.close(event);

      _this.focusTrigger();
    });

    _defineProperty(_assertThisInitialized(_this), "focusTrigger", function () {
      var node = _this.dropdownTrigger;

      if (!node) {
        return;
      }

      var element = node instanceof HTMLButtonElement || node.getAttribute('role') === 'button' ? node : node.firstChild instanceof HTMLElement ? node.firstChild : null;
      element && element.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "isControlled", function (prop) {
      return _this.props.hasOwnProperty(prop);
    });

    _defineProperty(_assertThisInitialized(_this), "getControllableValue", function (key) {
      return _this.isControlled(key) ? _this.props[key] : _this.state[key];
    });

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        children = _this$props3.children,
        data = _this$props3.data,
        ignoreItem = _this$props3.item,
        ignoreMenu = _this$props3.menu,
        restProps = _objectWithoutPropertiesLoose(_this$props3, ["children", "data", "item", "menu"]);

    var isOpen = this.getControllableValue('isOpen');

    var rootProps = _objectSpread({}, restProps, {
      id: this.id,
      isOpen: isOpen,
      onClose: this.close,
      onOpen: this.open,
      content: this.renderContent,
      triggerRef: this.setTriggerRef
    });

    this.items = this.getItems(data);
    return (0, _core.jsx)(_Popover.default, rootProps, (0, _utils.isRenderProp)(children) ? this.renderTrigger : this.renderTrigger());
  };

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;

_defineProperty(Dropdown, "displayName", 'Dropdown');

_defineProperty(Dropdown, "defaultProps", {
  itemKey: 'text',
  placement: _constants.PLACEMENT['bottom-start']
});

Dropdown.propTypes =  true ? _propTypes.dropdownPropTypes : undefined;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/DropdownContent.js":
/*!*************************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/DropdownContent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withForwardRef = _interopRequireDefault(__webpack_require__(/*! ../utils/withForwardRef */ "./node_modules/mineral-ui/utils/withForwardRef.js"));

var _RtlPopper = _interopRequireDefault(__webpack_require__(/*! ../Popover/RtlPopper */ "./node_modules/mineral-ui/Popover/RtlPopper.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Dropdown/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownContent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DropdownContent, _Component);

  function DropdownContent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DropdownContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        forwardedRef = _this$props.forwardedRef,
        modifiers = _this$props.modifiers,
        placement = _this$props.placement,
        positionFixed = _this$props.positionFixed,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["children", "forwardedRef", "modifiers", "placement", "positionFixed"]);

    var popperProps = {
      modifiers: modifiers,
      placement: placement,
      positionFixed: positionFixed
    };
    return (0, _core.jsx)(_RtlPopper.default, popperProps, function (_ref) {
      var outOfBoundaries = _ref.outOfBoundaries,
          placement = _ref.placement,
          popperRef = _ref.ref,
          style = _ref.style;

      var dropdownContentWrapperProps = _objectSpread({
        'data-placement': placement,
        'data-out-of-boundaries': outOfBoundaries || undefined,
        ref: function ref(node) {
          forwardedRef && forwardedRef(node);
          popperRef(node);
        },
        style: style
      }, restProps);

      return (0, _core.jsx)(_styled.DropdownContentWrapper, dropdownContentWrapperProps, children);
    });
  };

  return DropdownContent;
}(_react.Component);

_defineProperty(DropdownContent, "displayName", 'DropdownContent');

var _default = (0, _withForwardRef.default)(DropdownContent);

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/ItemMatcher.js":
/*!*********************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/ItemMatcher.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ItemMatcher = function ItemMatcher() {
  var _this = this;

  _defineProperty(this, "keys", '');

  _defineProperty(this, "keysTimer", void 0);

  _defineProperty(this, "searchIndex", void 0);

  _defineProperty(this, "findMatchingItem", function (items, highlightedIndex, key) {
    if (!_this.isMatchableCharacter(key)) {
      return;
    }

    _this.searchIndex = highlightedIndex === undefined ? 0 : highlightedIndex + 1;
    _this.keys += key;

    _this.resetKeysAfterDelay();

    var match = _this.findMatchingItemInRange(items, _this.searchIndex, items.length) || _this.findMatchingItemInRange(items, 0, _this.searchIndex);

    return match;
  });

  _defineProperty(this, "findMatchingItemInRange", function (items, start, end) {
    var keys = _this.keys.toLowerCase();

    for (var index = start; index < end; index++) {
      var text = items[index].text;

      if (text && typeof text === 'string' && text.toLowerCase().indexOf(keys) === 0) {
        return items[index];
      }
    }
  });

  _defineProperty(this, "resetKeysAfterDelay", function () {
    if (_this.keysTimer) {
      global.clearTimeout(_this.keysTimer);
      _this.keysTimer = null;
    }

    _this.keysTimer = global.setTimeout(function () {
      _this.keys = '';
      _this.keysTimer = null;
    }, 500);
  });

  _defineProperty(this, "isMatchableCharacter", function (key) {
    return key.length === 1 && /\S/.test(key);
  });
};

exports.default = ItemMatcher;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PLACEMENT = void 0;
var PLACEMENT = {
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  'left-end': 'left-end',
  'left-start': 'left-start',
  'right-end': 'right-end',
  'right-start': 'right-start',
  'top-end': 'top-end',
  'top-start': 'top-start'
};
exports.PLACEMENT = PLACEMENT;

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  DropdownContent: true,
  DropdownTrigger: true
};
exports.DropdownTrigger = exports.DropdownContent = exports.default = void 0;

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/mineral-ui/Dropdown/Dropdown.js"));

exports.default = _Dropdown.default;

var _DropdownContent = _interopRequireDefault(__webpack_require__(/*! ./DropdownContent */ "./node_modules/mineral-ui/Dropdown/DropdownContent.js"));

exports.DropdownContent = _DropdownContent.default;

var _PopoverTrigger = _interopRequireDefault(__webpack_require__(/*! ../Popover/PopoverTrigger */ "./node_modules/mineral-ui/Popover/PopoverTrigger.js"));

exports.DropdownTrigger = _PopoverTrigger.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Dropdown/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/propTypes.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/propTypes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dropdownPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = __webpack_require__(/*! ../Menu/propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Dropdown/constants.js");

var dropdownPropTypes = {
  children: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]).isRequired,
  data: _propTypes2.menuItemsPropType.isRequired,
  defaultHighlightedIndex: _propTypes.number,
  defaultIsOpen: _propTypes.bool,
  disabled: _propTypes.bool,
  highlightedIndex: _propTypes.number,
  id: _propTypes.string,
  isOpen: _propTypes.bool,
  item: _propTypes.func,
  itemKey: _propTypes.string,
  menu: _propTypes.func,
  modifiers: _propTypes.object,
  onClose: _propTypes.func,
  onOpen: _propTypes.func,
  placement: (0, _propTypes.oneOf)(Object.keys(_constants.PLACEMENT)),
  positionFixed: _propTypes.bool,
  usePortal: _propTypes.bool,
  wide: _propTypes.bool
};
exports.dropdownPropTypes = dropdownPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/styled.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/styled.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropdownContentWrapper = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Dropdown/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownContentWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "etta0te0"
})(function (_ref) {
  var baseTheme = _ref.theme,
      wide = _ref.wide;
  var theme = (0, _themes.dropdownContentTheme)(baseTheme);
  return _objectSpread({}, (0, _styles.componentStyleReset)(baseTheme), {
    backgroundColor: theme.DropdownContent_backgroundColor,
    border: "1px solid " + theme.DropdownContent_borderColor,
    borderRadius: theme.DropdownContent_borderRadius,
    boxShadow: theme.DropdownContent_boxShadow,
    maxHeight: '30vh',
    overflowY: 'auto',
    userSelect: 'none',
    width: wide ? (0, _styles.pxToEm)(344) : (0, _styles.pxToEm)(224),
    zIndex: theme.DropdownContent_zIndex,
    '&[data-placement^="top"]': {
      marginBottom: theme.DropdownContent_margin
    },
    '&[data-placement^="bottom"]': {
      marginTop: theme.DropdownContent_margin
    },
    '&[data-placement^="left"]': {
      marginRight: theme.DropdownContent_margin
    },
    '&[data-placement^="right"]': {
      marginLeft: theme.DropdownContent_margin
    },
    '&[data-out-of-boundaries]': {
      visibility: 'hidden'
    }
  });
});
exports.DropdownContentWrapper = DropdownContentWrapper;

/***/ }),

/***/ "./node_modules/mineral-ui/Dropdown/themes.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/Dropdown/themes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dropdownContentTheme = exports.dropdownTheme = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dropdownTheme = function dropdownTheme(baseTheme) {
  return _objectSpread({}, dropdownContentTheme(baseTheme), baseTheme);
};

exports.dropdownTheme = dropdownTheme;

var dropdownContentTheme = function dropdownContentTheme(baseTheme) {
  return _objectSpread({
    DropdownContent_backgroundColor: baseTheme.panel_backgroundColor,
    DropdownContent_borderColor: baseTheme.panel_borderColor,
    DropdownContent_borderRadius: baseTheme.borderRadius_1,
    DropdownContent_boxShadow: baseTheme.boxShadow_2,
    DropdownContent_margin: '5px',
    DropdownContent_zIndex: baseTheme.zIndex_100
  }, baseTheme);
};

exports.dropdownContentTheme = dropdownContentTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/EventListener/EventListener.js":
/*!****************************************************************!*\
  !*** ./node_modules/mineral-ui/EventListener/EventListener.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventListener =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(EventListener, _Component);

  function EventListener() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EventListener.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.addEventListeners();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.removeEventListeners(prevProps.listeners);
    this.addEventListeners();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEventListeners();
  };

  _proto.render = function render() {
    return null;
  };

  _proto.getTargetNode = function getTargetNode(target) {
    if (_exenv.canUseDOM) {
      return global[target] || global.document.querySelector(target);
    }
  };

  _proto.addEventListeners = function addEventListeners(listeners) {
    var _this = this;

    if (listeners === void 0) {
      listeners = this.props.listeners;
    }

    if (_exenv.canUseEventListeners) {
      listeners.forEach(function (_ref) {
        var target = _ref.target,
            event = _ref.event,
            handler = _ref.handler,
            options = _ref.options;

        var node = _this.getTargetNode(target);

        node && node.addEventListener(event, handler, options);
      });
    }
  };

  _proto.removeEventListeners = function removeEventListeners(listeners) {
    var _this2 = this;

    if (listeners === void 0) {
      listeners = this.props.listeners;
    }

    if (_exenv.canUseEventListeners) {
      listeners.forEach(function (_ref2) {
        var target = _ref2.target,
            event = _ref2.event,
            handler = _ref2.handler,
            options = _ref2.options;

        var node = _this2.getTargetNode(target);

        node && node.removeEventListener(event, handler, options);
      });
    }
  };

  return EventListener;
}(_react.Component);

exports.default = EventListener;

_defineProperty(EventListener, "displayName", 'EventListener');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mineral-ui/EventListener/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/EventListener/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _EventListener = _interopRequireDefault(__webpack_require__(/*! ./EventListener */ "./node_modules/mineral-ui/EventListener/EventListener.js"));

exports.default = _EventListener.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/FauxControl/FauxControl.js":
/*!************************************************************!*\
  !*** ./node_modules/mineral-ui/FauxControl/FauxControl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = FauxControl;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _IconDanger = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconDanger */ "./node_modules/mineral-ui/Icon/IconDanger.js"));

var _IconSuccess = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconSuccess */ "./node_modules/mineral-ui/Icon/IconSuccess.js"));

var _IconWarning = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconWarning */ "./node_modules/mineral-ui/Icon/IconWarning.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/FauxControl/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/FauxControl/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantIcons = {
  danger: (0, _core.jsx)(_IconDanger.default, null),
  success: (0, _core.jsx)(_IconSuccess.default, null),
  warning: (0, _core.jsx)(_IconWarning.default, null)
};

var getIcons = function getIcons(_ref) {
  var disabled = _ref.disabled,
      iconStart = _ref.iconStart,
      iconEnd = _ref.iconEnd,
      readOnly = _ref.readOnly,
      size = _ref.size,
      variant = _ref.variant,
      variantIcons = _ref.variantIcons;

  if (disabled || readOnly) {
    return [];
  }

  var iconSize = size || _constants.SIZE.large;
  var startIcon = iconStart && (0, _react.cloneElement)(iconStart, {
    size: _constants.ICON_SIZE[iconSize],
    key: 'iconStart'
  });
  var endIconSource = iconEnd !== null && variant ? variantIcons[variant] : iconEnd ? iconEnd : null;
  var endIcon = endIconSource && (0, _react.cloneElement)(endIconSource, {
    size: _constants.ICON_SIZE[iconSize],
    key: 'iconEnd'
  });
  return [startIcon, endIcon];
};

function FauxControl(_ref2) {
  var afterItems = _ref2.afterItems,
      beforeItems = _ref2.beforeItems,
      children = _ref2.children,
      control = _ref2.control,
      controlPropsIn = _ref2.controlProps,
      disabled = _ref2.disabled,
      fauxControlRef = _ref2.fauxControlRef,
      iconEnd = _ref2.iconEnd,
      iconStart = _ref2.iconStart,
      prefixIn = _ref2.prefix,
      size = _ref2.size,
      readOnly = _ref2.readOnly,
      suffixIn = _ref2.suffix,
      variant = _ref2.variant,
      restProps = _objectWithoutPropertiesLoose(_ref2, ["afterItems", "beforeItems", "children", "control", "controlProps", "disabled", "fauxControlRef", "iconEnd", "iconStart", "prefix", "size", "readOnly", "suffix", "variant"]);

  var rootProps = _objectSpread({
    disabled: disabled,
    ref: fauxControlRef,
    variant: variant
  }, restProps);

  var _getIcons = getIcons({
    disabled: disabled,
    iconStart: iconStart,
    iconEnd: iconEnd,
    readOnly: readOnly,
    size: size,
    variant: variant,
    variantIcons: variantIcons
  }),
      startIcon = _getIcons[0],
      endIcon = _getIcons[1];

  var prefixAndSuffixProps = {
    iconEnd: iconEnd,
    iconStart: iconStart,
    size: size,
    variant: variant
  };
  var prefix = prefixIn ? (0, _core.jsx)(_styled.Prefix, _extends({}, prefixAndSuffixProps, {
    key: "prefix"
  }), prefixIn) : null;
  var suffix = suffixIn ? (0, _core.jsx)(_styled.Suffix, _extends({}, prefixAndSuffixProps, {
    key: "suffix"
  }), suffixIn) : null;

  var controlProps = _objectSpread({
    as: control,
    controlPropsIn: controlPropsIn
  }, controlPropsIn, {
    children: children,
    disabled: disabled,
    iconEnd: iconEnd,
    iconStart: iconStart,
    prefix: prefixIn,
    ref: controlPropsIn && controlPropsIn.controlRef,
    readOnly: readOnly
  }, controlPropsIn && controlPropsIn.htmlSize ? {
    controlSize: size,
    size: controlPropsIn.htmlSize
  } : {
    size: size
  }, {
    suffix: suffixIn,
    variant: variant
  });

  var underlayProps = {
    disabled: disabled,
    readOnly: readOnly,
    variant: variant
  };
  return (0, _core.jsx)(_styled.FauxControlRoot, rootProps, beforeItems, startIcon, prefix, (0, _core.jsx)(_styled.Control, _extends({}, controlProps, {
    key: "control"
  })), suffix, endIcon, afterItems, (0, _core.jsx)(_styled.Underlay, underlayProps));
}

FauxControl.displayName = 'FauxControl';

/***/ }),

/***/ "./node_modules/mineral-ui/FauxControl/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/mineral-ui/FauxControl/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = exports.SIZE = exports.ICON_SIZE = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var ICON_SIZE = {
  small: 'medium',
  medium: 'medium',
  large: (0, _styles.pxToEm)(24),
  jumbo: (0, _styles.pxToEm)(24)
};
exports.ICON_SIZE = ICON_SIZE;
var SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};
exports.SIZE = SIZE;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/FauxControl/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/FauxControl/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {};
exports.default = void 0;

var _FauxControl = _interopRequireDefault(__webpack_require__(/*! ./FauxControl */ "./node_modules/mineral-ui/FauxControl/FauxControl.js"));

exports.default = _FauxControl.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/FauxControl/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/FauxControl/styled.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/FauxControl/styled.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Control = exports.Underlay = exports.Suffix = exports.Prefix = exports.FauxControlRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/FauxControl/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FauxControlRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'disabled' && (0, _isPropValid.default)(prop);
  },
  target: "e9lzmb40"
})(function (_ref) {
  var disabled = _ref.disabled,
      baseTheme = _ref.theme,
      variant = _ref.variant;
  var theme = (0, _themes.fauxControlTheme)(baseTheme);

  if (variant) {
    // prettier-ignore
    theme = _objectSpread({}, theme, {
      FauxControl_borderColor_hover: theme["borderColor_" + variant + "_hover"],
      FauxControl_boxShadow_active: "0 0 0 1px " + theme.boxShadow_focusInner + ", 0 0 0 2px " + theme["borderColor_" + variant + "_active"],
      FauxControl_boxShadow_focus: "0 0 0 1px " + theme.boxShadow_focusInner + ", 0 0 0 2px " + theme["borderColor_" + variant + "_focus"]
    });
  }

  return _objectSpread({}, (0, _styles.componentStyleReset)(baseTheme), {
    position: 'relative',
    zIndex: 1,
    '&:hover': {
      '& > div:last-child': {
        borderColor: !disabled ? theme.FauxControl_borderColor_hover : null
      }
    },
    '&:focus': {
      '& > div:last-child': {
        borderColor: !disabled ? theme.FauxControl_borderColor_focus : null,
        boxShadow: !disabled ? theme.FauxControl_boxShadow_focus : null
      }
    },
    '&:active': {
      '& > div:last-child': {
        borderColor: theme.FauxControl_borderColor_active,
        boxShadow: disabled ? 'none' : theme.FauxControl_boxShadow_active
      }
    }
  });
});
exports.FauxControlRoot = FauxControlRoot;
var Prefix = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "e9lzmb41"
})(function (_ref2) {
  var iconStart = _ref2.iconStart,
      size = _ref2.size,
      baseTheme = _ref2.theme;
  var theme = (0, _themes.fauxControlTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var fontSize = size === 'small' ? theme.FauxControl_fontSize_small : theme.FauxControl_fontSize;
  var marginWithIcon = (0, _styles.getNormalizedValue)(theme.FauxControl_paddingHorizontal, fontSize);
  var marginWithoutIcon = (0, _styles.getNormalizedValue)(parseFloat(theme.FauxControlIcon_marginHorizontal) / 2 + "em", fontSize);
  return _objectSpread({
    flex: '0 0 auto',
    fontSize: fontSize,
    marginLeft: rtl ? marginWithoutIcon : iconStart ? 0 : marginWithIcon,
    marginRight: rtl ? iconStart ? 0 : marginWithIcon : marginWithoutIcon,
    whiteSpace: 'nowrap'
  }, {
    display: "inline-block",
    maxWidth: "8em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  });
});
exports.Prefix = Prefix;
var Suffix = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "e9lzmb42"
})(function (_ref3) {
  var iconEnd = _ref3.iconEnd,
      size = _ref3.size,
      baseTheme = _ref3.theme,
      variant = _ref3.variant;
  var theme = (0, _themes.fauxControlTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  var fontSize = size === 'small' ? theme.FauxControl_fontSize_small : theme.FauxControl_fontSize;
  var marginWithIcon = (0, _styles.getNormalizedValue)(theme.FauxControl_paddingHorizontal, fontSize);
  var marginWithoutIcon = (0, _styles.getNormalizedValue)(parseFloat(theme.FauxControlIcon_marginHorizontal) / 2 + "em", fontSize);
  return _objectSpread({
    flex: '0 0 auto',
    fontSize: fontSize,
    marginLeft: rtl ? iconEnd || variant ? 0 : marginWithIcon : marginWithoutIcon,
    marginRight: rtl ? marginWithoutIcon : iconEnd || variant ? 0 : marginWithIcon,
    whiteSpace: 'nowrap'
  }, {
    display: "inline-block",
    maxWidth: "8em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  });
});
exports.Suffix = Suffix;
var Underlay = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['disabled', 'readOnly'].indexOf(prop) === -1 && (0, _isPropValid.default)(prop);
  },
  target: "e9lzmb43"
})(function (_ref4) {
  var disabled = _ref4.disabled,
      readOnly = _ref4.readOnly,
      baseTheme = _ref4.theme,
      variant = _ref4.variant;
  var theme = (0, _themes.fauxControlTheme)(baseTheme);
  return {
    backgroundColor: disabled || readOnly ? theme.input_backgroundColor_disabled : theme.FauxControl_backgroundColor,
    borderColor: variant && !disabled && !readOnly ? theme["borderColor_" + variant] : theme.FauxControl_borderColor,
    borderRadius: theme.FauxControl_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.FauxControl_borderWidth,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1
  };
});
exports.Underlay = Underlay;
var Control = (
/*#__PURE__*/
0, _styledBase.default)('input', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['as', 'prefix'].indexOf(prop) === -1;
  },
  target: "e9lzmb44"
})(function (_ref5) {
  var controlPropsIn = _ref5.controlPropsIn,
      controlSize = _ref5.controlSize,
      disabled = _ref5.disabled,
      hasPlaceholder = _ref5.hasPlaceholder,
      iconEnd = _ref5.iconEnd,
      iconStart = _ref5.iconStart,
      prefix = _ref5.prefix,
      readOnly = _ref5.readOnly,
      nonHtmlSize = _ref5.size,
      suffix = _ref5.suffix,
      baseTheme = _ref5.theme,
      variant = _ref5.variant;
  var theme = (0, _themes.fauxControlTheme)(baseTheme);
  var size = controlSize || nonHtmlSize;

  if (variant) {
    // prettier-ignore
    theme = _objectSpread({}, theme, {
      FauxControl_boxShadow_focus: "0 0 0 1px " + theme.boxShadow_focusInner + ", 0 0 0 2px " + theme["borderColor_" + variant + "_focus"]
    });
  }

  if (controlPropsIn.variant) {
    // prettier-ignore
    theme = _objectSpread({}, theme, {
      FauxControl_color: theme["color_" + controlPropsIn.variant]
    });
  }

  var rtl = theme.direction === 'rtl';
  var fontSize = size === 'small' ? theme.FauxControl_fontSize_small : theme.FauxControl_fontSize;
  var sizeAppropriateHorizontalPadding = size === 'small' || size === 'medium' ? theme.FauxControl_paddingHorizontal_small || theme.FauxControl_paddingHorizontal : theme.FauxControl_paddingHorizontal;
  var paddingWithoutIcon = (0, _styles.getNormalizedValue)(sizeAppropriateHorizontalPadding, fontSize);
  var color = theme.FauxControl_color;

  if (disabled) {
    color = theme.color_disabled;
  } else if (hasPlaceholder) {
    color = theme.FauxControl_color_placeholder;
  } else if (readOnly) {
    color = theme.FauxControl_color_readOnly;
  } // [1] - Safari and many Android browsers need this to apply the correct
  //       color to disabled controls


  var placeholderStyles = {
    color: theme.FauxControl_color_placeholder,
    WebkitTextFillColor: theme.FauxControl_color_placeholder,
    // [1]
    fontStyle: 'italic'
  };
  return {
    color: color,
    WebkitTextFillColor: color,
    // [1]
    fontSize: fontSize,
    fontStyle: hasPlaceholder ? 'italic' : null,
    outline: 0,
    paddingLeft: (iconStart || prefix) && !rtl || (iconEnd || variant || suffix) && rtl ? 0 : paddingWithoutIcon,
    paddingRight: (iconEnd || variant || suffix) && !rtl || (iconStart || prefix) && rtl ? 0 : paddingWithoutIcon,
    '&::placeholder': placeholderStyles,
    '&::-ms-input-placeholder': placeholderStyles,
    // Edge
    '&:-ms-input-placeholder': placeholderStyles,
    // IE 11
    '&::-ms-clear': {
      display: 'none'
    },
    '&:focus': {
      '& ~ div:last-child': {
        borderColor: theme.FauxControl_borderColor_focus,
        boxShadow: theme.FauxControl_boxShadow_focus
      }
    }
  };
});
exports.Control = Control;

/***/ }),

/***/ "./node_modules/mineral-ui/FauxControl/themes.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/FauxControl/themes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fauxControlTheme = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// prettier-ignore
var fauxControlTheme = function fauxControlTheme(baseTheme) {
  return _objectSpread({
    FauxControl_backgroundColor: baseTheme.input_backgroundColor,
    FauxControl_borderColor: baseTheme.borderColor,
    FauxControl_borderColor_active: baseTheme.borderColor,
    FauxControl_borderColor_focus: baseTheme.borderColor,
    FauxControl_borderColor_hover: baseTheme.borderColor_theme_hover,
    FauxControl_borderRadius: baseTheme.borderRadius_1,
    FauxControl_borderWidth: '1px',
    FauxControl_boxShadow_active: "0 0 0 1px " + baseTheme.boxShadow_focusInner + ", 0 0 0 2px " + baseTheme.borderColor_theme_active,
    FauxControl_boxShadow_focus: "0 0 0 1px " + baseTheme.boxShadow_focusInner + ", 0 0 0 2px " + baseTheme.borderColor_theme_focus,
    FauxControl_color: baseTheme.color,
    FauxControl_color_placeholder: baseTheme.input_color_placeholder,
    FauxControl_color_readOnly: baseTheme.color_readOnly,
    FauxControl_fontSize: baseTheme.fontSize_ui,
    FauxControl_fontSize_small: (0, _styles.pxToEm)(12),
    FauxControl_paddingHorizontal: baseTheme.space_inset_md,
    FauxControl_paddingHorizontal_small: baseTheme.space_inset_sm,
    FauxControlIcon_marginHorizontal: baseTheme.space_inline_sm
  }, baseTheme);
};

exports.fauxControlTheme = fauxControlTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/Icon.js":
/*!**********************************************!*\
  !*** ./node_modules/mineral-ui/Icon/Icon.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/mineral-ui/utils/index.js");

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Icon/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Icon/constants.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Icon/propTypes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Icon =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Icon, _Component);

  function Icon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "id", "icon-" + (0, _utils.generateId)());

    return _this;
  }

  var _proto = Icon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["title", "children"]);

    var titleElementId = "icon-title-" + this.id;

    var rootProps = _objectSpread({
      'aria-hidden': title ? null : true,
      'aria-labelledby': title && titleElementId,
      focusable: 'false',
      role: 'img',
      viewBox: '0 0 24 24'
    }, restProps);

    var titleProps = {
      id: titleElementId
    };
    return (0, _core.jsx)(_styled.IconRoot, rootProps, title && (0, _core.jsx)("title", titleProps, title), children);
  };

  return Icon;
}(_react.Component);

exports.default = Icon;

_defineProperty(Icon, "displayName", 'Icon');

_defineProperty(Icon, "defaultProps", {
  size: _constants.SIZE.medium
});

Icon.propTypes =  true ? _propTypes.iconPropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/IconArrowDropdownDown.js":
/*!***************************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/IconArrowDropdownDown.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = IconArrowDropdownDown;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! ./ */ "./node_modules/mineral-ui/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
(0, _core.jsx)("g", null, (0, _core.jsx)("path", {
  d: "M12 17.5l-8-8h16z"
}));

/* eslint-disable prettier/prettier */
function IconArrowDropdownDown(props) {
  var iconProps = _objectSpread({
    rtl: false
  }, props);

  return (0, _core.jsx)(_.default, iconProps, _ref);
}

IconArrowDropdownDown.displayName = 'IconArrowDropdownDown';
IconArrowDropdownDown.category = 'navigation';

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/IconArrowDropdownUp.js":
/*!*************************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/IconArrowDropdownUp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = IconArrowDropdownUp;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! ./ */ "./node_modules/mineral-ui/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
(0, _core.jsx)("g", null, (0, _core.jsx)("path", {
  d: "M12 7.5l8 8H4z"
}));

/* eslint-disable prettier/prettier */
function IconArrowDropdownUp(props) {
  var iconProps = _objectSpread({
    rtl: false
  }, props);

  return (0, _core.jsx)(_.default, iconProps, _ref);
}

IconArrowDropdownUp.displayName = 'IconArrowDropdownUp';
IconArrowDropdownUp.category = 'navigation';

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/IconDanger.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/IconDanger.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = IconDanger;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! ./ */ "./node_modules/mineral-ui/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
(0, _core.jsx)("g", null, (0, _core.jsx)("path", {
  d: "M3.94 19.49h16.118a1 1 0 0 0 .866-1.498l-8.06-13.99a.996.996 0 0 0-1.732-.001L3.074 17.993a.998.998 0 0 0 .867 1.499zM12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.503h-2v-5h2v5z"
}));

/* eslint-disable prettier/prettier */
function IconDanger(props) {
  var iconProps = _objectSpread({
    rtl: false
  }, props);

  return (0, _core.jsx)(_.default, iconProps, _ref);
}

IconDanger.displayName = 'IconDanger';
IconDanger.category = 'alert';

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/IconSuccess.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/IconSuccess.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = IconSuccess;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! ./ */ "./node_modules/mineral-ui/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
(0, _core.jsx)("g", null, (0, _core.jsx)("path", {
  d: "M12 3c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm-4.247 8.445L6.5 12.698l3.838 3.838 7.198-7.198-1.253-1.254-5.945 5.945-2.585-2.585z"
}));

/* eslint-disable prettier/prettier */
function IconSuccess(props) {
  var iconProps = _objectSpread({
    rtl: false
  }, props);

  return (0, _core.jsx)(_.default, iconProps, _ref);
}

IconSuccess.displayName = 'IconSuccess';
IconSuccess.category = 'alert';

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/IconWarning.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/IconWarning.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = IconWarning;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! ./ */ "./node_modules/mineral-ui/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
(0, _core.jsx)("g", null, (0, _core.jsx)("path", {
  d: "M13.414 2.718l7.868 7.868c.78.78.78 2.047 0 2.828l-7.868 7.868c-.78.78-2.047.78-2.828 0l-7.868-7.868a2.001 2.001 0 0 1 0-2.828l7.868-7.868c.78-.78 2.047-.78 2.828 0zM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-3.958V8h-2v5.042h2z"
}));

/* eslint-disable prettier/prettier */
function IconWarning(props) {
  var iconProps = _objectSpread({
    rtl: false
  }, props);

  return (0, _core.jsx)(_.default, iconProps, _ref);
}

IconWarning.displayName = 'IconWarning';
IconWarning.category = 'alert';

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/constants.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SIZE = void 0;
var SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};
exports.SIZE = SIZE;

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/index.js":
/*!***********************************************!*\
  !*** ./node_modules/mineral-ui/Icon/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {};
exports.default = void 0;

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./node_modules/mineral-ui/Icon/Icon.js"));

exports.default = _Icon.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Icon/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/propTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/propTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.iconPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var iconPropTypes = {
  children: _propTypes.node,
  color: _propTypes.string,
  rtl: _propTypes.bool,
  size: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]),
  title: _propTypes.string
};
exports.iconPropTypes = iconPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/styled.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/styled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.IconRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Icon/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconRoot = (
/*#__PURE__*/
0, _styledBase.default)('svg', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['color', 'size'].indexOf(prop) === -1 && (0, _isPropValid.default)(prop);
  },
  target: "edsisxk0"
})(function (_ref) {
  var color = _ref.color,
      rtl = _ref.rtl,
      size = _ref.size,
      baseTheme = _ref.theme;
  var theme = (0, _themes.iconTheme)(baseTheme);
  return {
    color: color,
    fill: theme.Icon_fill,
    fontSize: theme.fontSize_base,
    height: theme["Icon_size_" + size] || size,
    transform: theme.direction === 'rtl' && rtl && 'scaleX(-1)',
    width: theme["Icon_size_" + size] || size
  };
});
exports.IconRoot = IconRoot;

/***/ }),

/***/ "./node_modules/mineral-ui/Icon/themes.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Icon/themes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.iconTheme = void 0;

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconTheme = function iconTheme(baseTheme) {
  return _objectSpread({
    Icon_fill: 'currentcolor',
    Icon_size_small: (0, _styles.pxToEm)(12),
    Icon_size_medium: (0, _styles.pxToEm)(16),
    Icon_size_large: (0, _styles.pxToEm)(20)
  }, baseTheme);
};

exports.iconTheme = iconTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/Menu.js":
/*!**********************************************!*\
  !*** ./node_modules/mineral-ui/Menu/Menu.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.getItems = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Menu/styled.js");

var _MenuDivider = _interopRequireDefault(__webpack_require__(/*! ./MenuDivider */ "./node_modules/mineral-ui/Menu/MenuDivider.js"));

var _MenuGroup = _interopRequireDefault(__webpack_require__(/*! ./MenuGroup */ "./node_modules/mineral-ui/Menu/MenuGroup.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/mineral-ui/Menu/MenuItem.js"));

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getItems = function getItems(data) {
  return data.filter(function (item) {
    return !item.divider && !item.group;
  });
};

exports.getItems = getItems;

var Menu =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Menu, _PureComponent);

  function Menu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderFromData", function (data) {
      var highlightedIndex = _this.props.highlightedIndex;
      var index = 0;
      return data.map(function (item) {
        return _this.renderItem({
          props: {
            isHighlighted: highlightedIndex === index,
            index: item.divider || item.group ? index : index++,
            item: item
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItemProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _props = props,
          itemProps = _props.props;
      var index = itemProps.index,
          item = itemProps.item;
      var _this$props = _this.props,
          render = _this$props.item,
          itemKey = _this$props.itemKey;
      return _objectSpread({}, itemProps, item, {
        children: item.text,
        key: item[itemKey] || index,
        render: render
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _props2 = props,
          itemProps = _props2.props;
      var index = itemProps.index,
          item = itemProps.item;

      if (item.group) {
        return (0, _core.jsx)(_MenuGroup.default, {
          key: index,
          title: item.title
        });
      } else if (item.divider) {
        return (0, _core.jsx)(_MenuDivider.default, {
          key: index
        });
      } else {
        return (0, _core.jsx)(_MenuItem.default, _this.getItemProps(props));
      }
    });

    return _this;
  }

  var _proto = Menu.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        data = _this$props2.data,
        rootProps = _objectWithoutPropertiesLoose(_this$props2, ["children", "data"]);

    return (0, _core.jsx)(_styled.MenuRoot, rootProps, data ? this.renderFromData(data) : children);
  };

  return Menu;
}(_react.PureComponent);

exports.default = Menu;

_defineProperty(Menu, "displayName", 'Menu');

Menu.propTypes =  true ? _propTypes.menuPropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/MenuDivider.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/MenuDivider.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Menu/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MenuDivider = function MenuDivider(props) {
  return (0, _core.jsx)(_styled.MenuDividerRoot, _extends({}, props, {
    role: "separator"
  }));
};

MenuDivider.displayName = 'MenuDivider';
MenuDivider.propTypes =  true ? _propTypes.menuDividerPropTypes : undefined;
var _default = MenuDivider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/MenuGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/MenuGroup.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Menu/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuGroup = function MenuGroup(props) {
  var children = props.children,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "title"]);

  return [title && (0, _core.jsx)(_styled.MenuGroupTitle, _extends({}, restProps, {
    key: "MenuGroup"
  }), title), children];
};

MenuGroup.displayName = 'MenuGroup';
MenuGroup.propTypes =  true ? _propTypes.menuGroupPropTypes : undefined;
var _default = MenuGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/MenuItem.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/MenuItem.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _IconDanger = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconDanger */ "./node_modules/mineral-ui/Icon/IconDanger.js"));

var _IconSuccess = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconSuccess */ "./node_modules/mineral-ui/Icon/IconSuccess.js"));

var _IconWarning = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconWarning */ "./node_modules/mineral-ui/Icon/IconWarning.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Menu/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var variantIcons = {
  danger: (0, _core.jsx)(_IconDanger.default, {
    size: (0, _styles.pxToEm)(24)
  }),
  success: (0, _core.jsx)(_IconSuccess.default, {
    size: (0, _styles.pxToEm)(24)
  }),
  warning: (0, _core.jsx)(_IconWarning.default, {
    size: (0, _styles.pxToEm)(24)
  })
};

var MenuItem =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(MenuItem, _PureComponent);

  function MenuItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getItemProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _props = props,
          disabled = _props.disabled,
          onClick = _props.onClick,
          render = _props.render,
          tabIndex = _props.tabIndex,
          restProps = _objectWithoutPropertiesLoose(_props, ["disabled", "onClick", "render", "tabIndex"]);

      return _objectSpread({}, render ? restProps : {}, {
        'aria-disabled': disabled,
        disabled: disabled,
        tabIndex: tabIndex !== undefined ? tabIndex : disabled ? '-1' : 0
      }, !render ? restProps : {}, !disabled ? {
        onClick: onClick,
        onKeyDown: _this.onKeyDown
      } : {});
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var onClick = _this.props.onClick;

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick && onClick(event);
      }
    });

    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        iconEnd = _this$props.iconEnd,
        iconStart = _this$props.iconStart,
        render = _this$props.render,
        secondaryText = _this$props.secondaryText,
        variant = _this$props.variant;

    if (render) {
      return render({
        props: this.getItemProps(this.props)
      });
    }

    var rootProps = this.getItemProps(this.props);
    var startIcon = variant !== undefined && variant && variantIcons[variant];

    if (iconStart) {
      startIcon = (0, _react.cloneElement)(iconStart, {
        size: (0, _styles.pxToEm)(24),
        key: 'iconStart'
      });
    }

    var endIcon = iconEnd && (0, _react.cloneElement)(iconEnd, {
      size: (0, _styles.pxToEm)(24),
      key: 'iconEnd'
    });
    return (0, _core.jsx)(_styled.MenuItemRoot, rootProps, (0, _core.jsx)(_styled.MenuItemInner, null, startIcon, (children || secondaryText) && (0, _core.jsx)(_styled.MenuItemContent, null, (0, _core.jsx)(_styled.MenuItemText, null, children), secondaryText && (0, _core.jsx)(_styled.MenuItemSecondaryText, null, secondaryText)), endIcon));
  };

  return MenuItem;
}(_react.PureComponent);

exports.default = MenuItem;

_defineProperty(MenuItem, "displayName", 'MenuItem');

MenuItem.propTypes =  true ? _propTypes.menuItemPropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/constants.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = void 0;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/propTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/propTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.menuItemPropTypes = exports.menuGroupPropTypes = exports.menuDividerPropTypes = exports.menuPropTypes = exports.menuItemsPropType = exports.menuItemPropType = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Menu/constants.js");

var variant = (0, _propTypes.oneOf)(Object.keys(_constants.VARIANT));
var menuItemPropType = (0, _propTypes.shape)({
  iconEnd: _propTypes.element,
  iconStart: _propTypes.element,
  disabled: _propTypes.bool,
  divider: _propTypes.bool,
  onClick: _propTypes.func,
  render: _propTypes.func,
  secondaryText: _propTypes.node,
  text: _propTypes.node,
  title: _propTypes.node,
  value: _propTypes.string,
  variant: variant
});
exports.menuItemPropType = menuItemPropType;
var menuItemsPropType = (0, _propTypes.arrayOf)(menuItemPropType);
exports.menuItemsPropType = menuItemsPropType;
var menuPropTypes = {
  children: _propTypes.node,
  data: menuItemsPropType,
  highlightedIndex: _propTypes.number,
  item: _propTypes.func,
  itemKey: _propTypes.string
};
exports.menuPropTypes = menuPropTypes;
var menuDividerPropTypes = {};
exports.menuDividerPropTypes = menuDividerPropTypes;
var menuGroupPropTypes = {
  children: _propTypes.node,
  title: _propTypes.node
};
exports.menuGroupPropTypes = menuGroupPropTypes;
var menuItemPropTypes = {
  children: _propTypes.node,
  disabled: _propTypes.bool,
  iconEnd: _propTypes.element,
  iconStart: _propTypes.element,
  index: _propTypes.number,
  isHighlighted: _propTypes.bool,
  item: menuItemPropType,
  onClick: _propTypes.func,
  render: _propTypes.func,
  secondaryText: _propTypes.node,
  variant: variant
};
exports.menuItemPropTypes = menuItemPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/styled.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/styled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MenuItemText = exports.MenuItemSecondaryText = exports.MenuItemInner = exports.MenuItemContent = exports.MenuItemRoot = exports.MenuGroupTitle = exports.MenuDividerRoot = exports.MenuRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _emotion = __webpack_require__(/*! ../utils/emotion */ "./node_modules/mineral-ui/utils/emotion.js");

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Menu/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ektd6bc0"
})(function (_ref) {
  var theme = _ref.theme;
  return (0, _styles.componentStyleReset)(theme);
});
exports.MenuRoot = MenuRoot;
var MenuDividerRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ektd6bc1"
})(function (props) {
  var theme = (0, _themes.menuDividerTheme)(props.theme);
  return {
    backgroundColor: theme.MenuDivider_borderColor,
    height: theme.MenuDivider_borderWidth,
    margin: theme.MenuDivider_margin + " 0"
  };
});
exports.MenuDividerRoot = MenuDividerRoot;
var MenuGroupTitle = (
/*#__PURE__*/
0, _styledBase.default)('h3', {
  target: "ektd6bc2"
})(function (props) {
  var _ref2;

  var theme = _objectSpread({}, (0, _themes.menuGroupTheme)(props.theme), (0, _themes.menuItemTheme)(props.theme));

  var paddingBottom = (0, _styles.getNormalizedValue)(theme.MenuGroupTitle_paddingBottom, theme.MenuGroupTitle_fontSize);
  var paddingTop = (0, _styles.getNormalizedValue)(theme.MenuGroupTitle_paddingTop, theme.MenuGroupTitle_fontSize); // We need to use MenuItem's padding, to match

  var paddingHorizontal = (0, _styles.getNormalizedValue)(theme.MenuItem_paddingHorizontal, theme.MenuGroupTitle_fontSize);
  var marginTop = (0, _styles.getNormalizedValue)(theme.MenuGroupTitle_marginTop, theme.MenuGroupTitle_fontSize);
  return _ref2 = {
    fontSize: theme.MenuGroupTitle_fontSize,
    fontWeight: theme.MenuGroupTitle_fontWeight,
    margin: 0,
    padding: paddingTop + " " + paddingHorizontal + " " + paddingBottom
  }, _ref2['&:not(:first-child)' + _emotion.ignoreSsrWarning] = {
    marginTop: marginTop
  }, _ref2;
});
exports.MenuGroupTitle = MenuGroupTitle;
var MenuItemRoot = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'disabled' && (0, _isPropValid.default)(prop);
  },
  target: "ektd6bc3"
})( // These styles are based off of Button, with significant changes
function (_ref3) {
  var _ref4;

  var disabled = _ref3.disabled,
      isHighlighted = _ref3.isHighlighted,
      baseTheme = _ref3.theme,
      variant = _ref3.variant;
  var theme = (0, _themes.menuItemTheme)(baseTheme);

  if (variant) {
    // prettier-ignore
    theme = _objectSpread({}, theme, {
      MenuItem_backgroundColor_active: theme["backgroundColor_" + variant + "_active"],
      MenuItem_backgroundColor_focus: theme["backgroundColor_" + variant + "_focus"],
      MenuItem_backgroundColor_hover: theme["backgroundColor_" + variant + "_hover"],
      MenuItem_color: theme["color_" + variant],
      MenuItemIcon_color: theme["icon_color_" + variant]
    });
  }

  return _ref4 = {
    backgroundColor: isHighlighted && theme.MenuItem_backgroundColor_hover,
    color: disabled ? theme.color_disabled : theme.MenuItem_color,
    cursor: disabled ? 'default' : 'pointer',
    display: 'block',
    fontWeight: theme.MenuItem_fontWeight,
    padding: theme.MenuItem_paddingVertical + " " + theme.MenuItem_paddingHorizontal,
    textDecoration: 'none',
    '&:focus': {
      backgroundColor: !disabled && theme.MenuItem_backgroundColor_focus,
      outline: 0
    },
    '&:hover': {
      backgroundColor: !disabled && theme.MenuItem_backgroundColor_hover
    },
    '&:active': {
      backgroundColor: !disabled && theme.MenuItem_backgroundColor_active
    },
    '&[aria-selected="true"]': {
      backgroundColor: isHighlighted ? theme.MenuItem_backgroundColor_selectedHover : theme.MenuItem_backgroundColor_selected,
      fontWeight: theme.MenuItem_fontWeight_selected,
      '&:active': {
        backgroundColor: !disabled && theme.MenuItem_backgroundColor_selectedActive
      }
    },
    '& [role="img"]': {
      boxSizing: 'content-box',
      color: disabled ? null : theme.MenuItemIcon_color,
      display: 'block',
      flex: '0 0 auto'
    }
  }, _ref4['& [role="img"]:first-child' + _emotion.ignoreSsrWarning] = {
    marginLeft: theme.direction === 'rtl' ? theme.MenuItemIcon_margin : null,
    marginRight: theme.direction === 'ltr' ? theme.MenuItemIcon_margin : null
  }, _ref4['& [role="img"]:last-child'] = {
    marginLeft: theme.direction === 'ltr' ? theme.MenuItemIcon_margin : null,
    marginRight: theme.direction === 'rtl' ? theme.MenuItemIcon_margin : null
  }, _ref4;
});
exports.MenuItemRoot = MenuItemRoot;
var MenuItemContent = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "ektd6bc4"
})({
  display: 'flex',
  flex: '1 1 auto',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: (0, _styles.pxToEm)(3) + " 0 " + (0, _styles.pxToEm)(4),
  whiteSpace: 'normal',
  wordBreak: 'break-all'
});
exports.MenuItemContent = MenuItemContent;
var MenuItemInner = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "ektd6bc5"
})({
  name: "gg4vpm",
  styles: "display:flex;justify-content:space-between;"
});
exports.MenuItemInner = MenuItemInner;
var MenuItemSecondaryText = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "ektd6bc6"
})(function (props) {
  var theme = (0, _themes.menuItemTheme)(props.theme);
  var fontSize = theme.MenuItemSecondaryText_fontSize;
  return {
    color: theme.MenuItemSecondaryText_color,
    fontSize: fontSize,
    // The regular text fontSize is larger than that of the secondary text.
    // This magic number (optically) re-aligns both sets of text vertically.
    paddingTop: (0, _styles.getNormalizedValue)((0, _styles.pxToEm)(2), fontSize),
    wordBreak: 'break-word'
  };
});
exports.MenuItemSecondaryText = MenuItemSecondaryText;
var MenuItemText = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "ektd6bc7"
})(function (props) {
  var theme = (0, _themes.menuItemTheme)(props.theme);
  var fontSize = theme.MenuItemContent_fontSize;
  var margin = (0, _styles.getNormalizedValue)(theme.space_inline_sm, fontSize);
  return {
    fontSize: fontSize,
    marginLeft: theme.direction === 'rtl' && margin,
    marginRight: theme.direction === 'ltr' && margin,
    wordBreak: 'break-word'
  };
});
exports.MenuItemText = MenuItemText;

/***/ }),

/***/ "./node_modules/mineral-ui/Menu/themes.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/Menu/themes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.menuItemTheme = exports.menuGroupTheme = exports.menuDividerTheme = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuDividerTheme = function menuDividerTheme(baseTheme) {
  return _objectSpread({
    MenuDivider_borderColor: baseTheme.borderColor,
    MenuDivider_borderWidth: '1px',
    MenuDivider_margin: baseTheme.space_stack_sm
  }, baseTheme);
}; // [1] Deviation from h5 for optics relative to a MenuItem


exports.menuDividerTheme = menuDividerTheme;

var menuGroupTheme = function menuGroupTheme(baseTheme) {
  return _objectSpread({
    MenuGroupTitle_fontSize: baseTheme.fontSize_mouse,
    // [1]
    MenuGroupTitle_fontWeight: baseTheme.h5_fontWeight,
    MenuGroupTitle_marginTop: baseTheme.space_stack_sm,
    MenuGroupTitle_paddingTop: baseTheme.space_stack_md,
    MenuGroupTitle_paddingBottom: baseTheme.space_stack_sm
  }, baseTheme);
}; // Some of these values (all of the margins & paddings and the content fontSize)
// come from Button (large)
// prettier-ignore


exports.menuGroupTheme = menuGroupTheme;

var menuItemTheme = function menuItemTheme(baseTheme) {
  return _objectSpread({
    MenuItem_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
    MenuItem_backgroundColor_active: baseTheme.color_gray_20,
    MenuItem_backgroundColor_focus: baseTheme.color_gray_10,
    MenuItem_backgroundColor_hover: baseTheme.color_gray_10,
    MenuItem_backgroundColor_selectedActive: baseTheme.backgroundColor_theme_selectedActive,
    MenuItem_backgroundColor_selectedHover: baseTheme.backgroundColor_theme_selectedHover,
    MenuItem_color: baseTheme.color,
    MenuItem_fontWeight: baseTheme.fontWeight_regular,
    MenuItem_fontWeight_selected: baseTheme.fontWeight_bold,
    MenuItem_paddingHorizontal: baseTheme.space_inset_md,
    MenuItem_paddingVertical: baseTheme.space_inset_sm,
    MenuItemContent_fontSize: baseTheme.fontSize_ui,
    MenuItemIcon_color: baseTheme.icon_color_theme,
    MenuItemIcon_margin: baseTheme.space_inset_sm,
    MenuItemSecondaryText_color: baseTheme.color_mouse,
    MenuItemSecondaryText_fontSize: baseTheme.fontSize_mouse
  }, baseTheme);
};

exports.menuItemTheme = menuItemTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/Popover.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/Popover.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/mineral-ui/utils/index.js");

var _ModifiersContext = _interopRequireDefault(__webpack_require__(/*! ../Dialog/ModifiersContext */ "./node_modules/mineral-ui/Dialog/ModifiersContext.js"));

var _EventListener = _interopRequireDefault(__webpack_require__(/*! ../EventListener */ "./node_modules/mineral-ui/EventListener/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ../Portal */ "./node_modules/mineral-ui/Portal/index.js"));

var _PopoverTrigger = _interopRequireDefault(__webpack_require__(/*! ./PopoverTrigger */ "./node_modules/mineral-ui/Popover/PopoverTrigger.js"));

var _PopoverContent = _interopRequireDefault(__webpack_require__(/*! ./PopoverContent */ "./node_modules/mineral-ui/Popover/PopoverContent.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Popover/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Popover/constants.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Popover/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popover =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Popover, _Component);

  function Popover() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: Boolean(_this.props.defaultIsOpen)
    });

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || "popover-" + (0, _utils.generateId)());

    _defineProperty(_assertThisInitialized(_this), "popoverContent", void 0);

    _defineProperty(_assertThisInitialized(_this), "popoverTrigger", void 0);

    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      return {
        state: {
          isOpen: _this.getControllableValue('isOpen')
        },
        helpers: {
          close: _this.close,
          focusTrigger: _this.focusTrigger,
          open: _this.open,
          toggleOpen: _this.toggleOpen
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setTriggerRef", function (node) {
      var triggerRef = _this.props.triggerRef;
      _this.popoverTrigger = node;
      triggerRef && triggerRef(node);
    });

    _defineProperty(_assertThisInitialized(_this), "setContentRef", function (node) {
      _this.popoverContent = node;
    });

    _defineProperty(_assertThisInitialized(_this), "getContentProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var contentId = _this.getContentId();

      var _this$props = _this.props,
          content = _this$props.content,
          hasArrow = _this$props.hasArrow,
          modifiers = _this$props.modifiers,
          placement = _this$props.placement,
          positionFixed = _this$props.positionFixed,
          subtitle = _this$props.subtitle,
          title = _this$props.title;
      return _objectSpread({}, props, {
        hasArrow: hasArrow,
        id: contentId,
        modifiers: modifiers,
        placement: placement,
        positionFixed: positionFixed,
        ref: _this.setContentRef,
        subtitle: subtitle,
        tabIndex: 0,
        title: title,
        onBlur: (0, _utils.composeEventHandlers)(content && content.props && content.props.onBlur, _this.onBlur)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function (props) {
      if (props === void 0) {
        props = {};
      }

      var _this$props2 = _this.props,
          content = _this$props2.content,
          usePortal = _this$props2.usePortal;
      var popoverContent;

      if ((0, _utils.isRenderProp)(content)) {
        popoverContent = content(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getContentProps(props)
        }));
      } else {
        popoverContent = (0, _core.jsx)(_PopoverContent.default, _this.getContentProps(props), content);
      }

      if (usePortal) {
        popoverContent = (0, _core.jsx)(_Portal.default, null, popoverContent);
      }

      return popoverContent;
    });

    _defineProperty(_assertThisInitialized(_this), "getContentId", function () {
      return _this.id + "-content";
    });

    _defineProperty(_assertThisInitialized(_this), "getTriggerProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var isOpen = _this.getControllableValue('isOpen');

      var contentId = _this.getContentId();

      var _this$props3 = _this.props,
          children = _this$props3.children,
          cursor = _this$props3.cursor,
          disabled = _this$props3.disabled;
      var child, childDisabled;

      if (!(0, _utils.isRenderProp)(children)) {
        child = children ? _react.Children.only(children) : undefined;
        childDisabled = child && child.props.disabled !== undefined;
      }

      return _objectSpread({}, (0, _utils.isRenderProp)(children) ? props : {}, {
        'aria-describedby': contentId,
        'aria-disabled': disabled,
        'aria-expanded': isOpen,
        'aria-owns': contentId,
        children: child,
        cursor: cursor,
        disabled: child && childDisabled ? childDisabled : disabled,
        ref: _this.setTriggerRef,
        role: 'button'
      }, !(0, _utils.isRenderProp)(children) ? props : {}, {
        onBlur: (0, _utils.composeEventHandlers)(props.onBlur, _this.onBlur),
        onClick: !disabled ? (0, _utils.composeEventHandlers)(props.onClick, _this.toggleOpen) : undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrigger", function (props) {
      if (props === void 0) {
        props = {};
      }

      var children = _this.props.children;

      if ((0, _utils.isRenderProp)(children)) {
        return children(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getTriggerProps(props)
        }));
      }

      var child = _react.Children.only(children);

      return (0, _core.jsx)(_PopoverTrigger.default, _this.getTriggerProps(_objectSpread({}, child.props, {
        children: child
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var isOpen = _this.getControllableValue('isOpen');

      if (isOpen && _this.isEventOutsideComponent(event)) {
        _this.close(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (event) {
      if (_this.isControlled('isOpen')) {
        _this.closeActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: false
          };
        }, function () {
          _this.closeActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeActions", function (event) {
      var _this$props4 = _this.props,
          focusTriggerOnClose = _this$props4.focusTriggerOnClose,
          onClose = _this$props4.onClose;
      onClose && onClose(event);

      var isOpen = _this.getControllableValue('isOpen');

      !isOpen && focusTriggerOnClose && _this.focusTrigger();
    });

    _defineProperty(_assertThisInitialized(_this), "focusTrigger", function () {
      var node = _this.popoverTrigger;

      if (!node) {
        return;
      }

      var element = node instanceof HTMLButtonElement || node.getAttribute('role') === 'button' ? node : node.firstChild instanceof HTMLElement ? node.firstChild : null;
      element && element.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      if (_this.isEventOutsideComponent(event)) {
        _this.close(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentKeydown", function (event) {
      if (event.key.indexOf('Esc') === 0) {
        event.preventDefault();

        _this.close(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isEventOutsideComponent", function (event) {
      /* eslint-disable react/no-find-dom-node */
      var usePortal = _this.props.usePortal;
      var node = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this));
      var popoverContentNode = _this.popoverContent;
      var target = event.type === 'blur' && event.relatedTarget && popoverContentNode === event.target ? event.relatedTarget : event.target;

      if (usePortal) {
        return node && node instanceof HTMLElement && target && target instanceof HTMLElement && !node.contains(target) && popoverContentNode && !popoverContentNode.contains(target);
      } else {
        return node && node instanceof HTMLElement && target && target instanceof HTMLElement && !node.contains(target);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (event) {
      if (_this.isControlled('isOpen')) {
        _this.openActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: true
          };
        }, function () {
          _this.openActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openActions", function (event) {
      _this.focusTrigger();

      _this.props.onOpen && _this.props.onOpen(event);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function (event) {
      var isOpen = _this.getControllableValue('isOpen');

      if (isOpen) {
        _this.close(event);
      } else {
        _this.open(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isControlled", function (prop) {
      return _this.props.hasOwnProperty(prop);
    });

    _defineProperty(_assertThisInitialized(_this), "getControllableValue", function (key) {
      return _this.isControlled(key) ? _this.props[key] : _this.state[key];
    });

    return _this;
  }

  var _proto = Popover.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return (0, _core.jsx)(_ModifiersContext.default.Consumer, null, function (contextModifiers) {
      var _this2$props = _this2.props,
          ignoreContent = _this2$props.content,
          ignoreCursor = _this2$props.cursor,
          ignoreDisabled = _this2$props.disabled,
          modifiers = _this2$props.modifiers,
          ignoreOnClose = _this2$props.onClose,
          ignoreOnOpen = _this2$props.onOpen,
          ignoreTitle = _this2$props.title,
          rootProps = _objectWithoutPropertiesLoose(_this2$props, ["content", "cursor", "disabled", "modifiers", "onClose", "onOpen", "title"]);

      var isOpen = _this2.getControllableValue('isOpen');

      var contentProps = {
        modifiers: modifiers || contextModifiers
      };
      return (0, _core.jsx)(_reactPopper.Manager, null, (0, _core.jsx)(_styled.PopoverRoot, rootProps, _this2.renderTrigger(), isOpen && _this2.renderContent(contentProps), isOpen && (0, _core.jsx)(_EventListener.default, {
        listeners: [{
          target: 'document',
          event: 'click',
          handler: _this2.handleDocumentClick,
          options: true
        }, {
          target: 'document',
          event: 'keydown',
          handler: _this2.handleDocumentKeydown,
          options: true
        }]
      })));
    });
  };

  return Popover;
}(_react.Component);

exports.default = Popover;

_defineProperty(Popover, "displayName", 'Popover');

_defineProperty(Popover, "defaultProps", {
  focusTriggerOnClose: true,
  hasArrow: true,
  placement: _constants.PLACEMENT.bottom
});

Popover.propTypes =  true ? _propTypes.popoverPropTypes : undefined;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/PopoverArrow.js":
/*!*********************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/PopoverArrow.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Popover/styled.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopoverArrow = (0, _react.forwardRef)(function (props, ref) {
  return (0, _core.jsx)(_styled.PopoverArrowRoot, _extends({}, props, {
    "aria-hidden": true,
    ref: ref
  }), "\u25BC");
});
PopoverArrow.displayName = 'PopoverArrow';
var _default = PopoverArrow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/PopoverContent.js":
/*!***********************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/PopoverContent.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withForwardRef = _interopRequireDefault(__webpack_require__(/*! ../utils/withForwardRef */ "./node_modules/mineral-ui/utils/withForwardRef.js"));

var _PopoverArrow = _interopRequireDefault(__webpack_require__(/*! ./PopoverArrow */ "./node_modules/mineral-ui/Popover/PopoverArrow.js"));

var _RtlPopper = _interopRequireDefault(__webpack_require__(/*! ./RtlPopper */ "./node_modules/mineral-ui/Popover/RtlPopper.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Popover/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Popover/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopoverContent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PopoverContent, _Component);

  function PopoverContent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PopoverContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        hasArrow = _this$props.hasArrow,
        modifiers = _this$props.modifiers,
        placement = _this$props.placement,
        positionFixed = _this$props.positionFixed,
        forwardedRef = _this$props.forwardedRef,
        subtitle = _this$props.subtitle,
        title = _this$props.title,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["children", "hasArrow", "modifiers", "placement", "positionFixed", "forwardedRef", "subtitle", "title"]);

    var popperProps = {
      modifiers: modifiers,
      placement: placement,
      positionFixed: positionFixed
    };

    var _ref2 =
    /*#__PURE__*/
    (0, _core.jsx)(_styled.PopoverTitle, {
      subtitle: subtitle
    }, title);

    var _ref3 =
    /*#__PURE__*/
    (0, _core.jsx)(_styled.PopoverBlock, null, children);

    return (0, _core.jsx)(_RtlPopper.default, popperProps, function (_ref) {
      var arrowProps = _ref.arrowProps,
          outOfBoundaries = _ref.outOfBoundaries,
          placement = _ref.placement,
          popperRef = _ref.ref,
          style = _ref.style;

      var popoverContentWrapperProps = _objectSpread({
        'data-placement': placement,
        'data-out-of-boundaries': outOfBoundaries || undefined,
        ref: function ref(node) {
          forwardedRef && forwardedRef(node);
          popperRef(node);
        },
        style: style
      }, restProps);

      var popoverArrowProps = _objectSpread({
        size: _constants.ARROW_SIZE,
        placement: placement
      }, arrowProps);

      return (0, _core.jsx)(_styled.PopoverContentWrapper, popoverContentWrapperProps, title && _ref2, _ref3, hasArrow && (0, _core.jsx)(_PopoverArrow.default, popoverArrowProps));
    });
  };

  return PopoverContent;
}(_react.Component);

_defineProperty(PopoverContent, "displayName", 'PopoverContent');

var _default = (0, _withForwardRef.default)(PopoverContent);

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/PopoverTrigger.js":
/*!***********************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/PopoverTrigger.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _withForwardRef = _interopRequireDefault(__webpack_require__(/*! ../utils/withForwardRef */ "./node_modules/mineral-ui/utils/withForwardRef.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Popover/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopoverTrigger =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PopoverTrigger, _Component);

  function PopoverTrigger() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PopoverTrigger.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        cursor = _this$props.cursor,
        forwardedRef = _this$props.forwardedRef,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["children", "cursor", "forwardedRef"]);

    return (0, _core.jsx)(_reactPopper.Reference, null, function (_ref) {
      var popperRef = _ref.ref;
      var popoverTriggerWrapperProps = {
        cursor: cursor,
        ref: function ref(node) {
          if (node !== null) {
            popperRef(node);
            forwardedRef && forwardedRef(node);
          }
        }
      };
      return (0, _core.jsx)(_styled.PopoverTriggerWrapper, popoverTriggerWrapperProps, (0, _react.cloneElement)(_react.Children.only(children), restProps));
    });
  };

  return PopoverTrigger;
}(_react.Component);

_defineProperty(PopoverTrigger, "displayName", 'PopoverTrigger');

var _default = (0, _withForwardRef.default)(PopoverTrigger);

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/RtlPopper.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/RtlPopper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _emotionTheming = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getRtlPlacement = function getRtlPlacement(placement) {
  var rtlPlacementMap = {
    end: 'start',
    start: 'end'
  };

  var _placement$split = placement.split('-'),
      edge = _placement$split[0],
      direction = _placement$split[1];

  if (['bottom', 'top'].indexOf(edge) !== -1) {
    return placement.replace(direction, rtlPlacementMap[direction]);
  }

  return placement;
}; // eslint-disable-next-line react/display-name


function RtlPopper(_ref) {
  var placement = _ref.placement,
      theme = _ref.theme,
      restProps = _objectWithoutPropertiesLoose(_ref, ["placement", "theme"]);

  var rootProps = _objectSpread({
    placement: placement && theme.direction === 'rtl' ? getRtlPlacement(placement) : placement
  }, restProps);

  return (0, _core.jsx)(_reactPopper.Popper, rootProps);
}

var _default = (0, _emotionTheming.withTheme)(RtlPopper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/constants.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PLACEMENT = exports.ARROW_SIZE = void 0;

var _popper = _interopRequireDefault(__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARROW_SIZE = '8px';
exports.ARROW_SIZE = ARROW_SIZE;

var PLACEMENT = _popper.default.placements.sort().reduce(function (acc, placement) {
  acc[placement] = placement;
  return acc;
}, {});

exports.PLACEMENT = PLACEMENT;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  PopoverArrow: true,
  PopoverContent: true,
  PopoverTrigger: true
};
exports.PopoverTrigger = exports.PopoverContent = exports.PopoverArrow = exports.default = void 0;

var _Popover = _interopRequireDefault(__webpack_require__(/*! ./Popover */ "./node_modules/mineral-ui/Popover/Popover.js"));

exports.default = _Popover.default;

var _PopoverArrow = _interopRequireDefault(__webpack_require__(/*! ./PopoverArrow */ "./node_modules/mineral-ui/Popover/PopoverArrow.js"));

exports.PopoverArrow = _PopoverArrow.default;

var _PopoverContent = _interopRequireDefault(__webpack_require__(/*! ./PopoverContent */ "./node_modules/mineral-ui/Popover/PopoverContent.js"));

exports.PopoverContent = _PopoverContent.default;

var _PopoverTrigger = _interopRequireDefault(__webpack_require__(/*! ./PopoverTrigger */ "./node_modules/mineral-ui/Popover/PopoverTrigger.js"));

exports.PopoverTrigger = _PopoverTrigger.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Popover/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/propTypes.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/propTypes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.popoverPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Popover/constants.js");

var popoverPropTypes = {
  children: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]).isRequired,
  content: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]).isRequired,
  cursor: _propTypes.string,
  defaultIsOpen: _propTypes.bool,
  disabled: _propTypes.bool,
  focusTriggerOnClose: _propTypes.bool,
  hasArrow: _propTypes.bool,
  id: _propTypes.string,
  isOpen: _propTypes.bool,
  modifiers: _propTypes.object,
  onClose: _propTypes.func,
  onOpen: _propTypes.func,
  placement: (0, _propTypes.oneOf)(Object.keys(_constants.PLACEMENT)),
  positionFixed: _propTypes.bool,
  subtitle: _propTypes.node,
  title: _propTypes.node,
  triggerRef: _propTypes.func,
  usePortal: _propTypes.bool
};
exports.popoverPropTypes = popoverPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/styled.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/styled.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PopoverTriggerWrapper = exports.PopoverArrowRoot = exports.PopoverTitle = exports.PopoverBlock = exports.PopoverContentWrapper = exports.PopoverRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _CardBlock = _interopRequireDefault(__webpack_require__(/*! ../Card/CardBlock */ "./node_modules/mineral-ui/Card/CardBlock.js"));

var _CardTitle = _interopRequireDefault(__webpack_require__(/*! ../Card/CardTitle */ "./node_modules/mineral-ui/Card/CardTitle.js"));

var _themes2 = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Popover/themes.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Popover/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopoverRoot = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "ew65k9p0"
})({
  color: null,
  display: 'inline-block'
});
exports.PopoverRoot = PopoverRoot;
var PopoverContentWrapper = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  target: "ew65k9p1"
})(function (_ref) {
  var baseTheme = _ref.theme;
  var theme = (0, _themes2.popoverContentTheme)(baseTheme);
  return _objectSpread({}, (0, _styles.componentStyleReset)(baseTheme), {
    backgroundColor: theme.PopoverContent_backgroundColor,
    border: "1px solid " + theme.PopoverContent_borderColor,
    borderRadius: theme.PopoverContent_borderRadius,
    boxShadow: theme.PopoverContent_boxShadow,
    color: theme.PopoverContent_color,
    padding: theme.PopoverContent_paddingVertical + " 0",
    maxWidth: theme.PopoverContent_maxWidth,
    zIndex: theme.PopoverContent_zIndex,
    '&[data-placement^="top"]': {
      marginBottom: _constants.ARROW_SIZE
    },
    '&[data-placement^="bottom"]': {
      marginTop: _constants.ARROW_SIZE
    },
    '&[data-placement^="left"]': {
      marginRight: _constants.ARROW_SIZE
    },
    '&[data-placement^="right"]': {
      marginLeft: _constants.ARROW_SIZE
    },
    '&[data-out-of-boundaries]': {
      visibility: 'hidden'
    }
  });
});
exports.PopoverContentWrapper = PopoverContentWrapper;

var cardOverrides = function cardOverrides(_ref2) {
  var baseTheme = _ref2.theme;
  var theme = (0, _themes2.popoverContentTheme)(baseTheme);
  return {
    CardRow_marginVertical: theme.PopoverContentBlock_marginVertical,
    CardRow_marginVerticalLast: theme.PopoverContentBlock_marginVertical,
    CardRow_paddingHorizontal: theme.PopoverContentBlock_paddingHorizontal
  };
};

var PopoverBlock = (0, _themes.themed)(_CardBlock.default)(cardOverrides);
exports.PopoverBlock = PopoverBlock;
var PopoverTitle = (0, _themes.themed)(_CardTitle.default)(cardOverrides);
exports.PopoverTitle = PopoverTitle;
var PopoverArrowRoot = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "ew65k9p2"
})(function (_ref3) {
  var placement = _ref3.placement,
      size = _ref3.size,
      baseTheme = _ref3.theme;
  var theme = (0, _themes2.popoverArrowTheme)(baseTheme);
  var arrowShadow = ', 0 3px 1px rgba(0, 0, 0, 0.3)';
  var horizontalOffset = "-" + (parseFloat(size) - 4) + "px";
  var directionalStyles;
  var rotation = 0;

  switch (true) {
    case placement && placement.startsWith('top'):
      // Magic numbers to optically match theme.boxShadow_2
      arrowShadow = ', 0 4px 2px rgba(0, 0, 0, 0.3)';
      directionalStyles = {
        bottom: "-" + (parseFloat(size) - 2) + "px",
        left: "calc(50% - " + size + ")",
        marginBottom: 0,
        marginTop: 0
      };
      break;

    case placement && placement.startsWith('bottom'):
      arrowShadow = '';
      directionalStyles = {
        top: "-" + (parseFloat(size) - 3) + "px",
        left: "calc(50% - " + size + ")",
        marginBottom: 0,
        marginTop: 0
      };
      rotation = 180;
      break;

    case placement && placement.startsWith('left'):
      directionalStyles = {
        right: horizontalOffset,
        top: "calc(50% - " + size + ")",
        marginLeft: 0,
        marginRight: 0
      };
      rotation = -90;
      break;

    case placement && placement.startsWith('right'):
      directionalStyles = {
        left: horizontalOffset,
        top: "calc(50% - " + size + ")",
        marginLeft: 0,
        marginRight: 0
      };
      rotation = 90;
      break;

    default:
      directionalStyles = {
        display: 'none'
      };
  }

  return _objectSpread({
    color: theme.PopoverArrow_backgroundColor,
    display: 'inline-block',
    fontSize: size,
    margin: size,
    position: 'absolute',
    textShadow: "0 2px 0 " + theme.PopoverArrow_borderColor + arrowShadow,
    transform: "rotate(" + rotation + "deg) scaleX(2)"
  }, directionalStyles);
});
exports.PopoverArrowRoot = PopoverArrowRoot;
var PopoverTriggerWrapper = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'cursor' && (0, _isPropValid.default)(prop);
  },
  target: "ew65k9p3"
})(function (_ref4) {
  var cursor = _ref4.cursor;
  return {
    cursor: cursor,
    display: 'inline-block'
  };
});
exports.PopoverTriggerWrapper = PopoverTriggerWrapper;

/***/ }),

/***/ "./node_modules/mineral-ui/Popover/themes.js":
/*!***************************************************!*\
  !*** ./node_modules/mineral-ui/Popover/themes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.popoverContentTheme = exports.popoverArrowTheme = exports.popoverTheme = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var popoverTheme = function popoverTheme(baseTheme) {
  return _objectSpread({}, popoverArrowTheme(baseTheme), popoverContentTheme(baseTheme), baseTheme);
};

exports.popoverTheme = popoverTheme;

var popoverArrowTheme = function popoverArrowTheme(baseTheme) {
  return _objectSpread({
    PopoverArrow_backgroundColor: baseTheme.panel_backgroundColor,
    PopoverArrow_borderColor: baseTheme.panel_borderColor
  }, baseTheme);
};

exports.popoverArrowTheme = popoverArrowTheme;

var popoverContentTheme = function popoverContentTheme(baseTheme) {
  return _objectSpread({
    PopoverContent_backgroundColor: baseTheme.panel_backgroundColor,
    PopoverContent_borderColor: baseTheme.panel_borderColor,
    PopoverContent_borderRadius: baseTheme.borderRadius_1,
    PopoverContent_boxShadow: baseTheme.boxShadow_2,
    PopoverContent_color: baseTheme.color,
    PopoverContent_paddingVertical: baseTheme.space_inset_sm,
    PopoverContent_maxWidth: 'none',
    PopoverContent_zIndex: baseTheme.zIndex_100,
    PopoverContentBlock_marginVertical: baseTheme.space_stack_sm,
    PopoverContentBlock_paddingHorizontal: baseTheme.space_inset_md
  }, baseTheme);
};

exports.popoverContentTheme = popoverContentTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/Portal/Portal.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Portal/Portal.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Portal =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Portal, _Component);

  function Portal(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "node", void 0);

    if (_exenv.canUseDOM) {
      _this.node = document.createElement('div');
    }

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    _exenv.canUseDOM && document.body && this.node && document.body.appendChild(this.node);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _exenv.canUseDOM && document.body && this.node && document.body.removeChild(this.node);
  };

  _proto.render = function render() {
    return _exenv.canUseDOM && this.node ? (0, _reactDom.createPortal)(this.props.children, this.node) : null;
  };

  return Portal;
}(_react.Component);

exports.default = Portal;

_defineProperty(Portal, "displayName", 'Portal');

/***/ }),

/***/ "./node_modules/mineral-ui/Portal/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mineral-ui/Portal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _Portal = _interopRequireDefault(__webpack_require__(/*! ./Portal */ "./node_modules/mineral-ui/Portal/Portal.js"));

exports.default = _Portal.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Select/Select.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Select/Select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/mineral-ui/utils/index.js");

var _ModifiersContext = _interopRequireDefault(__webpack_require__(/*! ../Dialog/ModifiersContext */ "./node_modules/mineral-ui/Dialog/ModifiersContext.js"));

var _ItemMatcher = _interopRequireDefault(__webpack_require__(/*! ../Dropdown/ItemMatcher */ "./node_modules/mineral-ui/Dropdown/ItemMatcher.js"));

var _Menu = _interopRequireWildcard(__webpack_require__(/*! ../Menu/Menu */ "./node_modules/mineral-ui/Menu/Menu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ../Menu/MenuItem */ "./node_modules/mineral-ui/Menu/MenuItem.js"));

var _SelectTrigger = _interopRequireDefault(__webpack_require__(/*! ./SelectTrigger */ "./node_modules/mineral-ui/Select/SelectTrigger.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Select/constants.js");

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Select/styled.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/Select/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Select, _Component);

  function Select() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      highlightedIndex: _this.props.defaultHighlightedIndex,
      isOpen: Boolean(_this.props.defaultIsOpen),
      selectedItem: _this.props.defaultSelectedItem
    });

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || "select-" + (0, _utils.generateId)());

    _defineProperty(_assertThisInitialized(_this), "itemMatcher", void 0);

    _defineProperty(_assertThisInitialized(_this), "items", void 0);

    _defineProperty(_assertThisInitialized(_this), "getItems", (0, _memoizeOne.default)(_Menu.getItems, _reactFastCompare.default));

    _defineProperty(_assertThisInitialized(_this), "selectTrigger", void 0);

    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      return {
        state: {
          highlightedIndex: _this.getControllableValue('highlightedIndex'),
          isOpen: _this.getControllableValue('isOpen'),
          selectedItem: _this.getControllableValue('selectedItem')
        },
        helpers: {
          close: _this.close,
          focusTrigger: _this.focusTrigger,
          open: _this.open
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setTriggerRef", function (node) {
      var triggerRef = _this.props.triggerRef;
      _this.selectTrigger = node;
      triggerRef && triggerRef(node);
    });

    _defineProperty(_assertThisInitialized(_this), "getContentId", function () {
      return _this.id + "-content";
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuItemId", function (index) {
      return _this.id + "-item-" + index;
    });

    _defineProperty(_assertThisInitialized(_this), "getTriggerProps", function (props) {
      var _objectSpread2;

      if (props === void 0) {
        props = {};
      }

      var isOpen = _this.getControllableValue('isOpen');

      var selectedItem = _this.getControllableValue('selectedItem');

      var _this$props = _this.props,
          disabled = _this$props.disabled,
          invalid = _this$props.invalid,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          trigger = _this$props.trigger,
          required = _this$props.required,
          size = _this$props.size,
          variant = _this$props.variant;
      var refKey = trigger ? 'ref' : 'triggerRef';
      return _objectSpread({}, (0, _utils.isRenderProp)(trigger) ? props : {}, (_objectSpread2 = {
        'aria-haspopup': 'listbox',
        'aria-invalid': invalid,
        'aria-readonly': readOnly,
        'aria-required': required,
        disabled: disabled,
        isOpen: isOpen,
        item: selectedItem,
        name: name,
        placeholder: placeholder,
        readOnly: readOnly,
        size: size,
        tabIndex: !disabled ? 0 : undefined
      }, _objectSpread2[refKey] = _this.setTriggerRef, _objectSpread2.variant = variant, _objectSpread2), !(0, _utils.isRenderProp)(trigger) ? props : {}, !readOnly ? {
        onKeyDown: _this.onTriggerKeyDown
      } : {});
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrigger", function (_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          props = _ref.props;

      var trigger = _this.props.trigger;

      if ((0, _utils.isRenderProp)(trigger)) {
        return trigger(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getTriggerProps(props)
        }));
      }

      return (0, _core.jsx)(_SelectTrigger.default, _this.getTriggerProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var itemKey = _this.props.itemKey;
      return _objectSpread({}, props, {
        itemKey: itemKey,
        role: 'listbox',
        item: _this.renderItem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenu", function (_temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          props = _ref2.props;

      var menu = _this.props.menu;

      if ((0, _utils.isRenderProp)(menu)) {
        return menu(_objectSpread({}, _this.getStateAndHelpers(), {
          props: _this.getMenuProps(props)
        }));
      }

      return (0, _core.jsx)(_Menu.default, _this.getMenuProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getItemProps", function (props) {
      if (props === void 0) {
        props = {};
      }

      var highlightedIndex = _this.getControllableValue('highlightedIndex');

      var selectedItem = _this.getControllableValue('selectedItem');

      var _props = props,
          itemProps = _props.props;
      var index = itemProps.index,
          item = itemProps.item;
      return _objectSpread({}, itemProps, item, {
        'aria-selected': selectedItem ? selectedItem.value === item.value : false,
        'aria-disabled': _this.props.disabled || item.disabled,
        children: item.text,
        id: _this.getMenuItemId(index),
        isHighlighted: highlightedIndex === index,
        role: 'option',
        tabIndex: null,
        // Unset tabIndex because we use arrow keys to navigate instead
        onClick: (0, _utils.composeEventHandlers)(item.onClick, _this.onSelect.bind(null, item))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (props) {
      if (props === void 0) {
        props = {};
      }

      var item = _this.props.item;

      if ((0, _utils.isRenderProp)(item)) {
        return item(_objectSpread({}, props, _this.getStateAndHelpers(), {
          props: _this.getItemProps(props)
        }));
      }

      return (0, _core.jsx)(_MenuItem.default, _this.getItemProps(props));
    });

    _defineProperty(_assertThisInitialized(_this), "getHighlightedOrSelectedIndex", function () {
      var isOpen = _this.getControllableValue('isOpen');

      var selectedItem = _this.getControllableValue('selectedItem');

      var highlightedIndex = _this.getControllableValue('highlightedIndex');

      if (isOpen && selectedItem && (highlightedIndex === null || highlightedIndex === undefined)) {
        return _this.items.indexOf(selectedItem);
      }

      return highlightedIndex;
    });

    _defineProperty(_assertThisInitialized(_this), "getHighlightedItemId", function () {
      var highlightedIndex = _this.getControllableValue('highlightedIndex');

      return highlightedIndex !== undefined && highlightedIndex !== null ? _this.getMenuItemId(highlightedIndex) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "onTriggerKeyDown", function (event) {
      // $FlowFixMe
      event.nativeEvent.preventMineralDefault = true;
      var key = event.key;

      var isOpen = _this.getControllableValue('isOpen');

      if (key === 'ArrowUp') {
        event.preventDefault();

        _this.highlightPreviousItem();

        !isOpen && _this.open(event);
      } else if (key === 'ArrowDown') {
        event.preventDefault();

        _this.highlightNextItem();

        !isOpen && _this.open(event);
      } else if (key === 'Home' && isOpen) {
        event.preventDefault();

        _this.highlightItemAtIndex(0);
      } else if (key === 'End' && isOpen) {
        event.preventDefault();

        _this.highlightItemAtIndex(_this.items.length - 1);
      } else if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        isOpen ? _this.clickHighlightedItem() : _this.open(event);
      } else if (isOpen) {
        _this.highlightItemMatchingKey(key);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "findItemMatchingKey", function (key) {
      _this.itemMatcher = _this.itemMatcher || new _ItemMatcher.default();
      return _this.itemMatcher.findMatchingItem(_this.items, _this.getControllableValue('highlightedIndex'), key);
    });

    _defineProperty(_assertThisInitialized(_this), "highlightItemMatchingKey", function (key) {
      var matchingItem = _this.findItemMatchingKey(key);

      matchingItem && _this.highlightItemAtIndex(_this.items.indexOf(matchingItem));
    });

    _defineProperty(_assertThisInitialized(_this), "highlightItemAtIndex", function (index) {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState({
          highlightedIndex: index
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightNextItem", function () {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState(function (prevState) {
          return {
            highlightedIndex: prevState.highlightedIndex === null || prevState.highlightedIndex === undefined ? prevState.selectedItem ? _this.items.indexOf(prevState.selectedItem) : 0 : prevState.highlightedIndex === _this.items.length - 1 ? 0 : prevState.highlightedIndex + 1
          };
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightPreviousItem", function () {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState(function (prevState) {
          return {
            highlightedIndex: prevState.highlightedIndex === null || prevState.highlightedIndex === undefined ? prevState.selectedItem ? _this.items.indexOf(prevState.selectedItem) : _this.items.length - 1 : prevState.highlightedIndex === 0 ? _this.items.length - 1 : prevState.highlightedIndex - 1
          };
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightDefaultItem", function () {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState(function (prevState) {
          var selectedItem = _this.isControlled('selectedItem') ? _this.props.selectedItem : prevState.selectedItem;
          return {
            highlightedIndex: selectedItem ? _this.items.indexOf(selectedItem) : prevState.highlightedIndex ? prevState.highlightedIndex : 0
          };
        }, _this.scrollHighlightedItemIntoViewIfNeeded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollHighlightedItemIntoViewIfNeeded", function () {
      var boundary = global.document.getElementById(_this.getContentId());
      var highlightedItemNode = boundary && global.document.getElementById(_this.getHighlightedItemId());

      if (highlightedItemNode) {
        (0, _scrollIntoViewIfNeeded.default)(highlightedItemNode, {
          boundary: boundary
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHighlightedItem", function () {
      var highlightedItemNode = global.document.getElementById(_this.getHighlightedItemId());
      highlightedItemNode && highlightedItemNode.click();
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (item, event) {
      var prevSelectedItem = _this.getControllableValue('selectedItem');

      var stateToSet;

      if (!_this.isControlled('selectedItem')) {
        stateToSet = {
          selectedItem: item
        };
      }

      if (!_this.isControlled('highlightedIndex')) {
        stateToSet = _objectSpread({}, stateToSet, {
          highlightedIndex: _this.items.indexOf(item)
        });
      }

      if (stateToSet) {
        _this.setState(stateToSet, function () {
          _this.onSelectActions(item, prevSelectedItem, event);
        });
      } else {
        _this.onSelectActions(item, prevSelectedItem, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectActions", function (item, prevSelectedItem, event) {
      _this.props.onSelect && _this.props.onSelect(item, event);

      if (prevSelectedItem !== item) {
        _this.onChange(item, event);
      }

      _this.close(event);

      _this.focusTrigger();
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (item, event) {
      _this.props.onChange && _this.props.onChange(item, event);
    });

    _defineProperty(_assertThisInitialized(_this), "focusTrigger", function () {
      var node = _this.selectTrigger;
      node && node.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (event) {
      _this.highlightDefaultItem();

      if (_this.isControlled('isOpen')) {
        _this.openActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: true
          };
        }, function () {
          _this.openActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openActions", function (event) {
      _this.props.onOpen && _this.props.onOpen(event);
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (event) {
      if (!_this.isControlled('highlightedIndex')) {
        _this.setState({
          highlightedIndex: null
        });
      }

      if (_this.isControlled('isOpen')) {
        _this.closeActions(event);
      } else {
        _this.setState(function () {
          return {
            isOpen: false
          };
        }, function () {
          _this.closeActions(event);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeActions", function (event) {
      _this.props.onClose && _this.props.onClose(event);
    });

    _defineProperty(_assertThisInitialized(_this), "isControlled", function (prop) {
      return _this.props.hasOwnProperty(prop);
    });

    _defineProperty(_assertThisInitialized(_this), "getControllableValue", function (key) {
      return _this.isControlled(key) ? _this.props[key] : _this.state[key];
    });

    return _this;
  }

  var _proto = Select.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return (0, _core.jsx)(_ModifiersContext.default.Consumer, null, function (contextModifiers) {
      var _this2$props = _this2.props,
          data = _this2$props.data,
          disabled = _this2$props.disabled,
          modifiers = _this2$props.modifiers,
          ignoreName = _this2$props.name,
          ignorePlaceholder = _this2$props.placeholder,
          readOnly = _this2$props.readOnly,
          ignoreRequired = _this2$props.required,
          ignoreSize = _this2$props.size,
          trigger = _this2$props.trigger,
          restProps = _objectWithoutPropertiesLoose(_this2$props, ["data", "disabled", "modifiers", "name", "placeholder", "readOnly", "required", "size", "trigger"]);

      var isOpen = _this2.getControllableValue('isOpen');

      _this2.items = _this2.getItems(data);

      var rootProps = _objectSpread({}, restProps, {
        id: _this2.id,
        data: data,
        disabled: disabled || readOnly,
        highlightedIndex: _this2.getHighlightedOrSelectedIndex(),
        isOpen: isOpen,
        modifiers: _objectSpread({
          contentWidth: _styled.contentWidthModifier
        }, modifiers || contextModifiers),
        onClose: _this2.close,
        onOpen: _this2.open,
        menu: _this2.renderMenu
      });

      return (0, _core.jsx)(_styled.SelectRoot, rootProps, (0, _utils.isRenderProp)(trigger) ? _this2.renderTrigger : _this2.renderTrigger());
    });
  };

  return Select;
}(_react.Component);

exports.default = Select;

_defineProperty(Select, "displayName", 'Select');

_defineProperty(Select, "defaultProps", {
  itemKey: 'value',
  placeholder: 'Select...',
  placement: _constants.PLACEMENT['bottom-start'],
  size: _constants.SIZE.large
});

Select.propTypes =  true ? _propTypes.selectPropTypes : undefined;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mineral-ui/Select/SelectTrigger.js":
/*!*********************************************************!*\
  !*** ./node_modules/mineral-ui/Select/SelectTrigger.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _withProps = _interopRequireDefault(__webpack_require__(/*! recompose/withProps */ "./node_modules/recompose/withProps.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _IconDanger = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconDanger */ "./node_modules/mineral-ui/Icon/IconDanger.js"));

var _IconSuccess = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconSuccess */ "./node_modules/mineral-ui/Icon/IconSuccess.js"));

var _IconWarning = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconWarning */ "./node_modules/mineral-ui/Icon/IconWarning.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _IconArrowDropdownUp = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconArrowDropdownUp */ "./node_modules/mineral-ui/Icon/IconArrowDropdownUp.js"));

var _IconArrowDropdownDown = _interopRequireDefault(__webpack_require__(/*! ../Icon/IconArrowDropdownDown */ "./node_modules/mineral-ui/Icon/IconArrowDropdownDown.js"));

var _styled2 = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/Select/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Select/constants.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var variantIcons = {
  danger: (0, _core.jsx)(_IconDanger.default, null),
  success: (0, _core.jsx)(_IconSuccess.default, null),
  warning: (0, _core.jsx)(_IconWarning.default, null)
};
var iconMarginMap = {
  small: 4,
  medium: 8,
  large: 8,
  jumbo: 14
};

var stopPropagation = function stopPropagation(event) {
  return event.stopPropagation();
};

var SelectTrigger =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SelectTrigger, _Component);

  function SelectTrigger() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SelectTrigger.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        isOpen = _this$props.isOpen,
        item = _this$props.item,
        name = _this$props.name,
        placeholder = _this$props.placeholder,
        readOnly = _this$props.readOnly,
        triggerRef = _this$props.triggerRef,
        _this$props$size = _this$props.size,
        size = _this$props$size === void 0 ? _constants.SIZE.large : _this$props$size,
        variant = _this$props.variant,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["disabled", "isOpen", "item", "name", "placeholder", "readOnly", "triggerRef", "size", "variant"]);

    var ArrowIcon = isOpen ? _IconArrowDropdownUp.default : _IconArrowDropdownDown.default;
    var Arrow = (0, _withProps.default)({
      size: size === _constants.SIZE.small || size === _constants.SIZE.medium ? _constants.SIZE.medium : (0, _styles.pxToEm)(24)
    })((
    /*#__PURE__*/
    0, _styledBase.default)(ArrowIcon, {
      target: "e7c9dyg0"
    })({
      margin: (0, _styles.pxToEm)(iconMarginMap[size])
    }));
    var controlProps = {
      hasPlaceholder: !item,
      variant: item && item.variant
    };
    var inputProps = {
      name: name,
      onClick: stopPropagation,
      // Stop extra click Event in Edge from closing Select
      type: 'hidden',
      value: item ? item.value : ''
    };

    var rootProps = _objectSpread({
      afterItems: [(0, _core.jsx)(Arrow, {
        key: "arrow"
      }), (0, _core.jsx)("input", _extends({}, inputProps, {
        key: "input"
      }))],
      control: _styled2.Trigger,
      controlProps: controlProps,
      disabled: disabled,
      fauxControlRef: triggerRef,
      readOnly: readOnly,
      selectedItemVariant: item && item.variant,
      size: size,
      variant: variant
    }, restProps);

    if (item) {
      var iconEnd = item.iconEnd,
          iconStart = item.iconStart,
          _variant = item.variant;
      rootProps = _objectSpread({}, rootProps, {
        iconEnd: iconEnd,
        iconStart: _variant ? variantIcons[_variant] : iconStart,
        item: item,
        variant: this.props.variant
      });
    }

    return (0, _core.jsx)(_styled2.SelectTriggerRoot, rootProps, (0, _core.jsx)(_styled2.TriggerContent, null, item ? item.text : placeholder));
  };

  return SelectTrigger;
}(_react.Component);

exports.default = SelectTrigger;

_defineProperty(SelectTrigger, "displayName", 'SelectTrigger');

/***/ }),

/***/ "./node_modules/mineral-ui/Select/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Select/constants.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = exports.SIZE = exports.PLACEMENT = void 0;
var PLACEMENT = {
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  'top-end': 'top-end',
  'top-start': 'top-start'
};
exports.PLACEMENT = PLACEMENT;
var SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};
exports.SIZE = SIZE;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/Select/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mineral-ui/Select/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  SelectTrigger: true
};
exports.SelectTrigger = exports.default = void 0;

var _Select = _interopRequireDefault(__webpack_require__(/*! ./Select */ "./node_modules/mineral-ui/Select/Select.js"));

exports.default = _Select.default;

var _SelectTrigger = _interopRequireDefault(__webpack_require__(/*! ./SelectTrigger */ "./node_modules/mineral-ui/Select/SelectTrigger.js"));

exports.SelectTrigger = _SelectTrigger.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Select/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/Select/propTypes.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/Select/propTypes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = __webpack_require__(/*! ../Menu/propTypes */ "./node_modules/mineral-ui/Menu/propTypes.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Select/constants.js");

var selectPropTypes = {
  data: _propTypes2.menuItemsPropType.isRequired,
  defaultHighlightedIndex: _propTypes.number,
  defaultIsOpen: _propTypes.bool,
  defaultSelectedItem: _propTypes.object,
  disabled: _propTypes.bool,
  highlightedIndex: _propTypes.number,
  id: _propTypes.string,
  invalid: _propTypes.bool,
  isOpen: _propTypes.bool,
  item: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]),
  itemKey: _propTypes.string,
  menu: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]),
  modifiers: _propTypes.object,
  name: _propTypes.string,
  onChange: _propTypes.func,
  onClose: _propTypes.func,
  onOpen: _propTypes.func,
  onSelect: _propTypes.func,
  placeholder: _propTypes.string,
  placement: (0, _propTypes.oneOf)(Object.keys(_constants.PLACEMENT)),
  positionFixed: _propTypes.bool,
  readOnly: _propTypes.bool,
  required: _propTypes.bool,
  selectedItem: _propTypes.object,
  size: (0, _propTypes.oneOf)(Object.keys(_constants.SIZE)),
  trigger: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]),
  triggerRef: _propTypes.func,
  usePortal: _propTypes.bool,
  variant: (0, _propTypes.oneOf)(Object.keys(_constants.VARIANT))
};
exports.selectPropTypes = selectPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/Select/styled.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Select/styled.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TriggerContent = exports.Trigger = exports.SelectTriggerRoot = exports.contentWidthModifier = exports.SelectRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _isPropValid = _interopRequireDefault(__webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _emotion = __webpack_require__(/*! ../utils/emotion */ "./node_modules/mineral-ui/utils/emotion.js");

var _FauxControl = _interopRequireDefault(__webpack_require__(/*! ../FauxControl */ "./node_modules/mineral-ui/FauxControl/index.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ../Dropdown/Dropdown */ "./node_modules/mineral-ui/Dropdown/Dropdown.js"));

var _themes2 = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/Select/themes.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/Select/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemedDropdown = (0, _themes.themed)(_Dropdown.default)(function (_ref) {
  var baseTheme = _ref.theme;
  return (0, _themes.mapComponentThemes)({
    name: 'Select',
    theme: (0, _themes2.selectTheme)(baseTheme)
  }, {
    name: 'Dropdown',
    theme: {}
  }, baseTheme);
});
var SelectRoot = (
/*#__PURE__*/
0, _styledBase.default)(ThemedDropdown, {
  target: "evcziml0"
})({
  name: "16w6gzw",
  styles: "width:100%;& > span{width:100%;}"
});
exports.SelectRoot = SelectRoot;
var contentWidthModifier = {
  enabled: true,
  fn: function fn(data) {
    data.styles.minWidth = (0, _styles.pxToEm)(224);
    data.styles.width = (0, _styles.pxToEm)(data.offsets.reference.width);
    return data;
  }
};
exports.contentWidthModifier = contentWidthModifier;
var ThemedFauxControl = (0, _themes.themed)(_FauxControl.default)(function (_ref2) {
  var baseTheme = _ref2.theme;
  return (0, _themes.mapComponentThemes)({
    name: 'Select',
    theme: (0, _themes2.selectTriggerTheme)(baseTheme)
  }, {
    name: 'FauxControl',
    theme: {}
  }, baseTheme);
});
var SelectTriggerRoot = (
/*#__PURE__*/
0, _styledBase.default)(ThemedFauxControl, {
  target: "evcziml1"
})(function (_ref3) {
  var _roleImg;

  var disabled = _ref3.disabled,
      readOnly = _ref3.readOnly,
      selectedItemVariant = _ref3.selectedItemVariant,
      baseTheme = _ref3.theme,
      variant = _ref3.variant;
  var theme = (0, _themes2.selectTriggerTheme)(baseTheme);
  var rtl = theme.direction === 'rtl';
  return {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    // all icons
    '& [role="img"]': (_roleImg = {
      display: 'block',
      color: theme.SelectIcon_color,
      flex: '0 0 auto'
    }, _roleImg['&:first-child' + _emotion.ignoreSsrWarning] = {
      color: disabled || readOnly ? theme.color_disabled : selectedItemVariant ? theme["color_" + selectedItemVariant] : theme.SelectIcon_color,
      margin: "0 " + theme.SelectIcon_marginHorizontal
    }, _roleImg),
    // the arrow icon
    '& :not([role="img"]) ~ [role="img"]': {
      color: disabled || readOnly ? theme.color_disabled : variant ? theme["icon_color_" + variant] : theme.SelectIcon_color
    },
    // the variant icon
    '& :not([role="img"]) + [role="img"]:not(:last-of-type)': {
      color: disabled || readOnly ? theme.color_disabled : variant ? theme["color_" + variant] : selectedItemVariant ? theme["color_" + selectedItemVariant] : theme.SelectIcon_color,
      marginLeft: rtl ? null : theme.SelectIcon_marginHorizontal,
      marginRight: rtl ? theme.SelectIcon_marginHorizontal : null
    }
  };
});
exports.SelectTriggerRoot = SelectTriggerRoot;
var Trigger = (
/*#__PURE__*/
0, _styledBase.default)('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'size' && (0, _isPropValid.default)(prop);
  },
  target: "evcziml2"
})(function (_ref4) {
  var size = _ref4.size,
      baseTheme = _ref4.theme;
  var theme = (0, _themes2.selectTriggerTheme)(baseTheme);
  var fontSize = size === _constants.SIZE.small ? theme.Select_fontSize_small : theme.Select_fontSize;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 auto',
    height: (0, _styles.getNormalizedValue)(theme["Select_height_" + size], fontSize),
    minWidth: 0
  };
});
exports.Trigger = Trigger;
var TriggerContent = (
/*#__PURE__*/
0, _styledBase.default)('span', {
  target: "evcziml3"
})(_objectSpread({}, {
  display: "inline-block",
  maxWidth: null,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}, {
  userSelect: 'none',
  width: '100%'
}));
exports.TriggerContent = TriggerContent;

/***/ }),

/***/ "./node_modules/mineral-ui/Select/themes.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/Select/themes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectTriggerTheme = exports.selectTheme = void 0;

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _Dropdown = __webpack_require__(/*! ../Dropdown */ "./node_modules/mineral-ui/Dropdown/index.js");

var _TextInput = __webpack_require__(/*! ../TextInput */ "./node_modules/mineral-ui/TextInput/index.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
var selectTheme = function selectTheme(baseTheme) {
  return (0, _themes.mapComponentThemes)({
    name: 'Dropdown',
    theme: (0, _Dropdown.dropdownTheme)(baseTheme)
  }, {
    name: 'Select',
    theme: {}
  }, _objectSpread({}, selectTriggerTheme(baseTheme), baseTheme));
}; // $FlowFixMe - strict theme keys incompatible with mapComponentThemes


exports.selectTheme = selectTheme;

var selectTriggerTheme = function selectTriggerTheme(baseTheme) {
  return (0, _themes.mapComponentThemes)({
    name: 'TextInput',
    theme: (0, _TextInput.textInputTheme)(baseTheme)
  }, {
    name: 'Select',
    theme: {
      Select_height_small: baseTheme.size_small,
      Select_height_medium: baseTheme.size_medium,
      Select_height_large: baseTheme.size_large,
      Select_height_jumbo: baseTheme.size_jumbo,
      SelectIcon_color: baseTheme.icon_color_theme
    }
  }, baseTheme);
};

exports.selectTriggerTheme = selectTriggerTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/TextInput.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/TextInput.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ./styled */ "./node_modules/mineral-ui/TextInput/styled.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/TextInput/constants.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/TextInput/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = function TextInput(props) {
  var className = props.className,
      disabled = props.disabled,
      iconEnd = props.iconEnd,
      iconStart = props.iconStart,
      inputRef = props.inputRef,
      invalid = props.invalid,
      prefix = props.prefix,
      readOnly = props.readOnly,
      required = props.required,
      otherRootProps = props.rootProps,
      size = props.size,
      suffix = props.suffix,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["className", "disabled", "iconEnd", "iconStart", "inputRef", "invalid", "prefix", "readOnly", "required", "rootProps", "size", "suffix", "variant"]);

  var inputProps = _objectSpread({
    'aria-invalid': invalid,
    'aria-required': required,
    controlRef: inputRef,
    disabled: disabled,
    readOnly: readOnly,
    required: required
  }, restProps);

  var rootProps = _objectSpread({
    className: className,
    control: _styled.Input,
    controlProps: inputProps,
    disabled: disabled,
    iconEnd: iconEnd,
    iconStart: iconStart,
    prefix: prefix,
    readOnly: readOnly,
    size: size,
    suffix: suffix,
    variant: variant
  }, otherRootProps);

  return (0, _core.jsx)(_styled.TextInputRoot, rootProps);
};

TextInput.displayName = 'TextInput';
var defaultProps = {
  size: _constants.SIZE.large,
  type: _constants.TYPE.text
};
TextInput.defaultProps = defaultProps;
TextInput.propTypes =  true ? _propTypes.textInputPropTypes : undefined;
var _default = TextInput;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VARIANT = exports.TYPE = exports.SIZE = void 0;
var SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};
exports.SIZE = SIZE;
var TYPE = {
  date: 'date',
  'datetime-local': 'datetime-local',
  email: 'email',
  month: 'month',
  number: 'number',
  password: 'password',
  search: 'search',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week'
};
exports.TYPE = TYPE;
var VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.VARIANT = VARIANT;

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {};
exports.default = void 0;

var _TextInput = _interopRequireDefault(__webpack_require__(/*! ./TextInput */ "./node_modules/mineral-ui/TextInput/TextInput.js"));

exports.default = _TextInput.default;

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/TextInput/themes.js");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _themes[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/propTypes.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/propTypes.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.textInputPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/TextInput/constants.js");

var textInputPropTypes = {
  className: _propTypes.string,
  defaultValue: _propTypes.string,
  disabled: _propTypes.bool,
  htmlSize: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]),
  iconStart: _propTypes.element,
  iconEnd: _propTypes.element,
  inputRef: _propTypes.func,
  rootProps: _propTypes.object,
  invalid: _propTypes.bool,
  onChange: _propTypes.func,
  prefix: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.element]),
  readOnly: _propTypes.bool,
  required: _propTypes.bool,
  size: (0, _propTypes.oneOf)(Object.keys(_constants.SIZE)),
  suffix: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.element]),
  type: (0, _propTypes.oneOf)(Object.keys(_constants.TYPE)),
  value: _propTypes.string,
  variant: (0, _propTypes.oneOf)(Object.keys(_constants.VARIANT))
};
exports.textInputPropTypes = textInputPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/styled.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/styled.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Input = exports.TextInputRoot = void 0;

var _styledBase = _interopRequireDefault(__webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/mineral-ui/styles/index.js");

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _FauxControl = _interopRequireDefault(__webpack_require__(/*! ../FauxControl */ "./node_modules/mineral-ui/FauxControl/index.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/TextInput/constants.js");

var _themes2 = __webpack_require__(/*! ./themes */ "./node_modules/mineral-ui/TextInput/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemedFauxControl = (0, _themes.themed)(_FauxControl.default)(function (_ref) {
  var baseTheme = _ref.theme;
  return (0, _themes.mapComponentThemes)({
    name: 'TextInput',
    theme: (0, _themes2.textInputTheme)(baseTheme)
  }, {
    name: 'FauxControl',
    theme: {}
  }, baseTheme);
});
var TextInputRoot = (
/*#__PURE__*/
0, _styledBase.default)(ThemedFauxControl, {
  target: "e1gbx4v70"
})(function (_ref2) {
  var baseTheme = _ref2.theme,
      variant = _ref2.variant;
  var theme = (0, _themes2.textInputTheme)(baseTheme);

  if (variant) {
    theme = _objectSpread({}, theme, {
      TextInputIcon_color: theme["icon_color_" + variant]
    });
  }

  return {
    alignItems: 'center',
    cursor: 'text',
    display: 'flex',
    width: '100%',
    '& [role="img"]': {
      color: theme.TextInputIcon_color,
      display: 'block',
      flex: '0 0 auto',
      margin: "0 " + theme.TextInputIcon_marginHorizontal,
      '&:last-of-type': {
        color: theme.TextInputIcon_color
      }
    }
  };
});
exports.TextInputRoot = TextInputRoot;
var Input = (
/*#__PURE__*/
0, _styledBase.default)('input', {
  target: "e1gbx4v71"
})(function (_ref3) {
  var controlSize = _ref3.controlSize,
      nonHtmlSize = _ref3.size,
      baseTheme = _ref3.theme;
  var theme = (0, _themes2.textInputTheme)(baseTheme);
  var size = controlSize || nonHtmlSize;
  var fontSize = size === _constants.SIZE.small ? theme.TextInput_fontSize_small : theme.TextInput_fontSize;
  return {
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
    flex: '1 1 auto',
    fontFamily: 'inherit',
    height: (0, _styles.getNormalizedValue)(theme["TextInput_height_" + size], fontSize),
    minWidth: 0,
    width: '100%',
    // Normalize Safari search inputs
    '&[type="search"]': {
      WebkitAppearance: 'none',
      '&::-webkit-search-decoration': {
        WebkitAppearance: 'none'
      }
    }
  };
});
exports.Input = Input;

/***/ }),

/***/ "./node_modules/mineral-ui/TextInput/themes.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/TextInput/themes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.textInputTheme = void 0;

var _themes = __webpack_require__(/*! ../themes */ "./node_modules/mineral-ui/themes/index.js");

var _FauxControl = __webpack_require__(/*! ../FauxControl */ "./node_modules/mineral-ui/FauxControl/index.js");

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
var textInputTheme = function textInputTheme(baseTheme) {
  return (0, _themes.mapComponentThemes)({
    name: 'FauxControl',
    theme: (0, _FauxControl.fauxControlTheme)(baseTheme)
  }, {
    name: 'TextInput',
    theme: {
      TextInput_height_small: baseTheme.size_small,
      TextInput_height_medium: baseTheme.size_medium,
      TextInput_height_large: baseTheme.size_large,
      TextInput_height_jumbo: baseTheme.size_jumbo,
      TextInputIcon_color: baseTheme.color_gray_40
    }
  }, baseTheme);
};

exports.textInputTheme = textInputTheme;

/***/ }),

/***/ "./node_modules/mineral-ui/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/mineral-ui/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mineral-ui/styles/componentStyleReset.js":
/*!***************************************************************!*\
  !*** ./node_modules/mineral-ui/styles/componentStyleReset.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var componentStyleReset = function componentStyleReset(theme) {
  return {
    boxSizing: 'border-box',
    color: theme.color,
    fontFamily: theme.fontFamily ? theme.fontFamily + ", " + theme.fontFamily_system : "" + theme.fontFamily_system,
    fontSize: theme.fontSize_base,
    lineHeight: theme.lineHeight,
    outline: 0,
    '& *,& *::before,& *::after': {
      boxSizing: 'inherit'
    },
    MozOsxFontSmoothing: 'auto',
    WebkitFontSmoothing: 'antialiased'
  };
};

var _default = componentStyleReset;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/styles/getNormalizedValue.js":
/*!**************************************************************!*\
  !*** ./node_modules/mineral-ui/styles/getNormalizedValue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Helper to normalize a theme variable (defined in ems) against the applied
 * fontSize (also defined in ems), so that the resulting value renders correctly
 */
var getNormalizedValue = function getNormalizedValue(value, base) {
  return parseFloat(value) / parseFloat(base) + "em";
};

var _default = getNormalizedValue;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/styles/getResponsiveStyles.js":
/*!***************************************************************!*\
  !*** ./node_modules/mineral-ui/styles/getResponsiveStyles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.getPrevNonNull = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Converts an array of breakpoints (numbers and theme variable keys) to an
 * array of CSS media query strings.
 *
 * Input: [100, 200]
 *
 * Ouput: [
 *   '@media (min-width: 100px) and (max-width: 199px)',
 *   '@media (min-width: 200px)'
 * ]
 */
var getMediaQueries = function getMediaQueries(breakpoints, theme) {
  var queries = [];

  var getQueryWidth = function getQueryWidth(value) {
    return typeof value === 'number' ? value + "px" : theme["breakpoint_" + value] || value;
  };

  for (var i = 0; i <= breakpoints.length; i++) {
    if (i === breakpoints.length) {
      queries.push("@media (min-width: " + getQueryWidth(breakpoints[i - 1]) + ")");
    } else if (i > 0) {
      queries.push("@media (min-width: " + getQueryWidth(breakpoints[i - 1]) + ") and (max-width: " + (parseInt(getQueryWidth(breakpoints[i])) - 1) + "px)");
    }
  }

  return queries;
};
/*
 * Given array that can contain null values and an index, checks if array[index]
 * is null. If it is, then it returns the next-most-previous non-null value in
 * the array until it gets to array[0], which it returns regardless.
 */


var getPrevNonNull = function getPrevNonNull(values, index) {
  var value = Array.isArray(values) && values[index];

  if (index > 0) {
    return value === null ? getPrevNonNull(values, index - 1) : value;
  } else {
    return value;
  }
};
/*
 * Returns an object of style properties and their values (as interpreted
 * through mapValueToProperty, if provided). If an index is provided, then each
 * style property is an array, and this will use array[index] as the value.
 */


exports.getPrevNonNull = getPrevNonNull;

var getStyles = function getStyles(styleKeys, styles, mapValueToProperty, index) {
  return styleKeys.reduce(function (acc, property) {
    var indexInUse = index || 0;
    var styleValue = styles[property];
    var actualValue = Array.isArray(styleValue) ? getPrevNonNull(styleValue, indexInUse) : styleValue;
    acc[property] = mapValueToProperty ? mapValueToProperty(property, actualValue) : actualValue;
    return acc;
  }, {});
};
/*
 * Helper to potentially disperse an object of style properties (whole values
 * can be an array) across a provided (optional) array of breakpoints, which is
 * converted to an object with CSS media query string keys.
 *
 * See tests for input/output.
 */


var getResponsiveStyles = function getResponsiveStyles(_ref) {
  var breakpoints = _ref.breakpoints,
      mapValueToProperty = _ref.mapValueToProperty,
      styles = _ref.styles,
      theme = _ref.theme;
  var styleKeys = Object.keys(styles);

  if (breakpoints) {
    var breakpointsLength = breakpoints.length;
    var mediaQueries = getMediaQueries(breakpoints, theme);
    var responsiveStyleKeys = styleKeys.filter(function (key) {
      var value = styles[key];

      if (value && Array.isArray(value)) {
        /*
         * If a style property is an array, that array must be one longer than
         * the breakpoints array. The first value is the no-breakpoint case, the
         * second value corresponds to the first breakpoint, etc...
         */
        if (value.length === breakpointsLength + 1) {
          return true;
        } else {
          // prettier-ignore
          throw new Error(key + ".length (" + value.length + ") must equal breakpoints.length + 1 (" + (breakpointsLength + 1) + ")");
        }
      }
    });
    var nonResponsiveStyleKeys = styleKeys.filter(function (key) {
      return !Array.isArray(styles[key]);
    }); // Start with the non-responsive style properties and the first value of the
    // responsive properties.

    var result = _objectSpread({}, getStyles(nonResponsiveStyleKeys, styles, mapValueToProperty), getStyles(responsiveStyleKeys, styles, mapValueToProperty, 0));

    return mediaQueries.reduce(function (acc, query, index) {
      acc[query] = _objectSpread({}, getStyles(responsiveStyleKeys, styles, mapValueToProperty, index + 1));
      return acc;
    }, result);
  } else {
    return getStyles(styleKeys, styles, mapValueToProperty);
  }
};

var _default = getResponsiveStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/styles/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mineral-ui/styles/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.pxToEm = exports.getResponsiveStyles = exports.getNormalizedValue = exports.componentStyleReset = void 0;

var _componentStyleReset = _interopRequireDefault(__webpack_require__(/*! ./componentStyleReset */ "./node_modules/mineral-ui/styles/componentStyleReset.js"));

exports.componentStyleReset = _componentStyleReset.default;

var _getNormalizedValue = _interopRequireDefault(__webpack_require__(/*! ./getNormalizedValue */ "./node_modules/mineral-ui/styles/getNormalizedValue.js"));

exports.getNormalizedValue = _getNormalizedValue.default;

var _getResponsiveStyles = _interopRequireDefault(__webpack_require__(/*! ./getResponsiveStyles */ "./node_modules/mineral-ui/styles/getResponsiveStyles.js"));

exports.getResponsiveStyles = _getResponsiveStyles.default;

var _pxToEm = _interopRequireDefault(__webpack_require__(/*! ./pxToEm */ "./node_modules/mineral-ui/styles/pxToEm.js"));

exports.pxToEm = _pxToEm.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/styles/pxToEm.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/styles/pxToEm.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _fontSizeBase = _interopRequireDefault(__webpack_require__(/*! ../themes/fontSizeBase */ "./node_modules/mineral-ui/themes/fontSizeBase.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper to convert a px value to ems, relative to the base font size
 */
var REGEX_NUM_OR_END_IN_PX = /^[\d.]+(px)?$/;

var convert = function convert(input) {
  return input / parseInt(_fontSizeBase.default) + "em";
};

var errorMsg = function errorMsg(actual) {
  var value = typeof actual === 'string' ? actual : typeof actual;
  return "[mineral-ui/styles/pxToEm]: Expected a number or string in px units. Instead got: '" + value + "'.";
};

var pxToEm = function pxToEm(value) {
  if (typeof value === 'number') {
    return convert(value);
  }

  if (typeof value === 'string' && REGEX_NUM_OR_END_IN_PX.test(value)) {
    return convert(parseFloat(value));
  }

  throw new Error(errorMsg(value));
};

var _default = pxToEm;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/ThemeProvider.js":
/*!*********************************************************!*\
  !*** ./node_modules/mineral-ui/themes/ThemeProvider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _emotionTheming = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js");

var _mineralTheme = _interopRequireDefault(__webpack_require__(/*! ./mineralTheme */ "./node_modules/mineral-ui/themes/mineralTheme.js"));

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/themes/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
      theme = props.theme;
  return (0, _core.jsx)(_emotionTheming.ThemeProvider, {
    theme: theme
  }, _react.Children.only(children));
};

ThemeProvider.displayName = 'ThemeProvider';
ThemeProvider.defaultProps = {
  theme: _mineralTheme.default
};
ThemeProvider.propTypes =  true ? _propTypes.themeProviderPropTypes : undefined;
var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/themes/constants.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PRIMARY_COLOR = void 0;
var PRIMARY_COLOR = {
  theme: 'theme',
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
exports.PRIMARY_COLOR = PRIMARY_COLOR;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/createColorRamp.js":
/*!***********************************************************!*\
  !*** ./node_modules/mineral-ui/themes/createColorRamp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createColorRamp;

/**
 * Generates an object of colors with renamed keys from a color palette.
 * This is primarily used to translate plain color objects into theme variables.
 *
 * e.g.
 *    createColorRamp(palette.blue, 'color_theme_');
 *
 *    returns
 *      {
 *        color_theme_10: '#f0f5fc',
 *        color_theme_20: '#cfe0fc',
 *        color_theme_30: '#accbfc',
 *        color_theme_40: '#84b1fa',
 *        color_theme_50: '#5691f0',
 *        color_theme_60: '#3272d9',
 *        color_theme_70: '#1d5bbf',
 *        color_theme_80: '#114599',
 *        color_theme_90: '#103570',
 *        color_theme_100: '#15233b'
 *      }
 */
function createColorRamp(colors, // The palette of colors
outKey // The key of the color in the returned object, excluding the index
) {
  return Object.keys(colors).reduce(function (acc, key) {
    acc["" + outKey + key] = colors[parseInt(key)];
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/mineral-ui/themes/createTheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/themes/createTheme.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createTheme;
exports.nonTokenVariables = void 0;

var _mineralUiTokens = _interopRequireDefault(__webpack_require__(/*! mineral-ui-tokens */ "./node_modules/mineral-ui-tokens/es/index.js"));

var _createColorRamp = _interopRequireDefault(__webpack_require__(/*! ./createColorRamp */ "./node_modules/mineral-ui/themes/createColorRamp.js"));

var _fontSizeBase = _interopRequireDefault(__webpack_require__(/*! ./fontSizeBase */ "./node_modules/mineral-ui/themes/fontSizeBase.js"));

var _colorAliases = _interopRequireDefault(__webpack_require__(/*! ./generated/colorAliases */ "./node_modules/mineral-ui/themes/generated/colorAliases.js"));

var _groupedByRampJsTokens = _interopRequireDefault(__webpack_require__(/*! ./generated/groupedByRampJsTokens */ "./node_modules/mineral-ui/themes/generated/groupedByRampJsTokens.js"));

var _palette = _interopRequireDefault(__webpack_require__(/*! ./generated/palette */ "./node_modules/mineral-ui/themes/generated/palette.js"));

var _themeFromTokens = _interopRequireWildcard(__webpack_require__(/*! ./themeFromTokens */ "./node_modules/mineral-ui/themes/themeFromTokens.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/mineral-ui/themes/constants.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var primaryColors = Object.keys(_constants.PRIMARY_COLOR);

var nonTokenVariables = function nonTokenVariables(colors) {
  return {
    boxShadow_focusInner: colors && colors.white || _palette.default.white,
    direction: 'ltr',
    fontSize_base: _fontSizeBase.default
  };
};

exports.nonTokenVariables = nonTokenVariables;

var colorOverrides = function colorOverrides(colors) {
  return Object.keys(_groupedByRampJsTokens.default).reduce(function (acc, color) {
    return colors[color] ? _objectSpread({}, acc, (0, _themeFromTokens.themeFromColorTokens)({
      color: correctColorType(colors[color], color),
      colorName: color,
      tokens: _groupedByRampJsTokens.default[color]
    })) : acc;
  }, {});
};

var correctColorType = function correctColorType(colorValue, color) {
  var isStringColor = ['black', 'white'].indexOf(color) !== -1;
  return typeof colorValue === 'string' && isStringColor ? colorValue : getRamp(colorValue, color);
};

var getRamp = function getRamp(color, keyName) {
  if (typeof color === 'string') {
    if (_palette.default[color]) {
      return _palette.default[color];
    } else {
      throw new Error("[mineral-ui/themes/createTheme]: Expected colors." + keyName + " to be a color ramp from the mineral-ui palette or a custom color ramp, but got '" + color + "'.\nSee https://mineral-ui.com/color#guidelines-ramps for the palette ramps.\nSee https://github.com/mineral-ui/mineral-ui/blob/master/packages/mineral-ui-tokens/src/blue.js for an example color ramp.");
    }
  }

  var ignoreInflection = color.inflection,
      ramp = _objectWithoutPropertiesLoose(color, ["inflection"]);

  return ramp;
};

var getWhiteOrBlackTextColor = function getWhiteOrBlackTextColor(color, colors, override) {
  var black = colors.black || _palette.default.black;
  var white = colors.white || _palette.default.white;
  var inflectionPoints = primaryColors.reduce(function (acc, color) {
    acc[color] = _colorAliases.default["backgroundColor_" + (color === 'theme' ? 'brand' : color) + "Primary"].split('_')[1];
    return acc;
  }, {});
  return override && typeof override.inflection === 'number' ? override.inflection > inflectionPoints[color] ? black : white : white;
};

var primaryColorsByVariation = function primaryColorsByVariation(colors) {
  if (colors === void 0) {
    colors = {};
  }

  return primaryColors.reduce(function (acc, color) {
    var override = colors[color];
    acc["color_" + color + "Primary"] = getWhiteOrBlackTextColor(color, colors, override);
    return acc;
  }, {});
};

function createTheme(options) {
  var colors = options && options.colors;
  var grayRamp = colors && colors.gray ? (0, _createColorRamp.default)(getRamp(colors.gray, 'gray'), 'color_gray_') : (0, _createColorRamp.default)(_palette.default.gray, 'color_gray_');
  var themeRamp = colors && colors.theme ? (0, _createColorRamp.default)(getRamp(colors.theme, 'theme'), 'color_theme_') : (0, _createColorRamp.default)(_palette.default.brand, 'color_theme_');
  return _objectSpread({}, (0, _themeFromTokens.default)(_mineralUiTokens.default), nonTokenVariables(colors), colors ? colorOverrides(colors) : undefined, colors ? primaryColorsByVariation(colors) : undefined, grayRamp, themeRamp, {
    color_black: colors && colors.black || _palette.default.black,
    color_white: colors && colors.white || _palette.default.white
  }, options && options.overrides);
}

/***/ }),

/***/ "./node_modules/mineral-ui/themes/fontSizeBase.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/themes/fontSizeBase.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _mineralUiTokens = __webpack_require__(/*! mineral-ui-tokens */ "./node_modules/mineral-ui-tokens/es/index.js");

// Token has rem units, but our theme variable needs to be in "px"
// Components are built on an 8px grid
var _default = parseFloat(_mineralUiTokens.fontSize_base) * 16 + "px";

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/generated/colorAliases.js":
/*!******************************************************************!*\
  !*** ./node_modules/mineral-ui/themes/generated/colorAliases.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  backgroundColor: 'white',
  backgroundColor_active: 'gray_20',
  backgroundColor_disabled: 'gray_20',
  backgroundColor_focus: 'white',
  backgroundColor_hover: 'gray_10',
  backgroundColor_brand_selected: 'brand_10',
  backgroundColor_brand_selectedActive: 'brand_30',
  backgroundColor_brand_selectedHover: 'brand_20',
  backgroundColor_brandPrimary: 'brand_60',
  backgroundColor_brandPrimary_active: 'brand_70',
  backgroundColor_brandPrimary_focus: 'brand_60',
  backgroundColor_brandPrimary_hover: 'brand_50',
  backgroundColor_danger_active: 'red_20',
  backgroundColor_danger_focus: 'red_10',
  backgroundColor_danger_hover: 'red_10',
  backgroundColor_dangerPrimary: 'red_60',
  backgroundColor_dangerPrimary_active: 'red_70',
  backgroundColor_dangerPrimary_focus: 'red_60',
  backgroundColor_dangerPrimary_hover: 'red_50',
  backgroundColor_success_active: 'green_20',
  backgroundColor_success_focus: 'green_10',
  backgroundColor_success_hover: 'green_10',
  backgroundColor_successPrimary: 'green_60',
  backgroundColor_successPrimary_active: 'green_70',
  backgroundColor_successPrimary_focus: 'green_60',
  backgroundColor_successPrimary_hover: 'green_50',
  backgroundColor_warning_active: 'bronze_20',
  backgroundColor_warning_focus: 'bronze_10',
  backgroundColor_warning_hover: 'bronze_10',
  backgroundColor_warningPrimary: 'bronze_60',
  backgroundColor_warningPrimary_active: 'bronze_70',
  backgroundColor_warningPrimary_focus: 'bronze_60',
  backgroundColor_warningPrimary_hover: 'bronze_50',
  borderColor: 'gray_40',
  borderColor_brand: 'brand_60',
  borderColor_brand_active: 'brand_70',
  borderColor_brand_focus: 'brand_70',
  borderColor_brand_hover: 'brand_50',
  borderColor_danger: 'red_60',
  borderColor_danger_active: 'red_70',
  borderColor_danger_focus: 'red_70',
  borderColor_danger_hover: 'red_50',
  borderColor_success: 'green_60',
  borderColor_success_active: 'green_70',
  borderColor_success_focus: 'green_70',
  borderColor_success_hover: 'green_50',
  borderColor_warning: 'bronze_60',
  borderColor_warning_active: 'bronze_70',
  borderColor_warning_focus: 'bronze_70',
  borderColor_warning_hover: 'bronze_50',
  color: 'gray_100',
  color_inverted: 'white',
  color_disabled: 'gray_50',
  color_mouse: 'gray_80',
  color_readOnly: 'gray_80',
  color_required: 'red_60',
  color_brand: 'brand_60',
  color_brandPrimary: 'white',
  color_brand_active: 'brand_70',
  color_brand_focus: 'brand_60',
  color_brand_hover: 'brand_50',
  color_danger: 'red_60',
  color_dangerPrimary: 'white',
  color_danger_active: 'red_70',
  color_danger_focus: 'red_60',
  color_danger_hover: 'red_50',
  color_success: 'green_60',
  color_successPrimary: 'white',
  color_success_active: 'green_70',
  color_success_focus: 'green_60',
  color_success_hover: 'green_50',
  color_warning: 'bronze_60',
  color_warningPrimary: 'white',
  color_warning_active: 'bronze_70',
  color_warning_focus: 'bronze_60',
  color_warning_hover: 'bronze_50',
  h1_color: 'gray_100',
  h2_color: 'gray_80',
  h3_color: 'gray_80',
  h4_color: 'gray_80',
  h5_color: 'gray_100',
  h6_color: 'gray_80',
  icon_color: 'gray_80',
  icon_color_brand: 'brand_60',
  icon_color_danger: 'red_60',
  icon_color_success: 'green_60',
  icon_color_warning: 'bronze_60',
  input_backgroundColor: 'white',
  input_backgroundColor_disabled: 'gray_20',
  input_color_placeholder: 'gray_60',
  panel_backgroundColor: 'white',
  panel_backgroundColor_inverted: 'gray_90',
  panel_borderColor: 'gray_20',
  panel_borderColor_inverted: 'gray_90',
  well_backgroundColor: 'gray_20',
  well_backgroundColor_danger: 'red_20',
  well_backgroundColor_success: 'green_20',
  well_backgroundColor_warning: 'bronze_20',
  well_borderColor_danger: 'red_40',
  well_borderColor_success: 'green_40',
  well_borderColor_warning: 'bronze_40'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/generated/groupedByRampJsTokens.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mineral-ui/themes/generated/groupedByRampJsTokens.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  black: {},
  danger: {
    backgroundColor_danger_active: '#fad4d4',
    backgroundColor_danger_focus: '#faf0f0',
    backgroundColor_danger_hover: '#faf0f0',
    backgroundColor_dangerPrimary: '#de1b1b',
    backgroundColor_dangerPrimary_active: '#b80d0d',
    backgroundColor_dangerPrimary_focus: '#de1b1b',
    backgroundColor_dangerPrimary_hover: '#f55353',
    borderColor_danger: '#de1b1b',
    borderColor_danger_active: '#b80d0d',
    borderColor_danger_focus: '#b80d0d',
    borderColor_danger_hover: '#f55353',
    color_danger: '#de1b1b',
    color_dangerPrimary: '#ffffff',
    color_danger_active: '#b80d0d',
    color_danger_focus: '#de1b1b',
    color_danger_hover: '#f55353',
    icon_color_danger: '#de1b1b',
    well_backgroundColor_danger: '#fad4d4',
    well_borderColor_danger: '#fa8e8e'
  },
  gray: {
    backgroundColor_active: '#ebeff5',
    backgroundColor_disabled: '#ebeff5',
    backgroundColor_hover: '#f5f7fa',
    borderColor: '#c8d1e0',
    color: '#333840',
    color_disabled: '#afbacc',
    color_mouse: '#58606e',
    color_readOnly: '#58606e',
    h1_color: '#333840',
    h2_color: '#58606e',
    h3_color: '#58606e',
    h4_color: '#58606e',
    h5_color: '#333840',
    h6_color: '#58606e',
    icon_color: '#58606e',
    input_backgroundColor_disabled: '#ebeff5',
    input_color_placeholder: '#8e99ab',
    panel_backgroundColor_inverted: '#434a54',
    panel_borderColor: '#ebeff5',
    panel_borderColor_inverted: '#434a54',
    well_backgroundColor: '#ebeff5'
  },
  success: {
    backgroundColor_success_active: '#abedc5',
    backgroundColor_success_focus: '#e1faeb',
    backgroundColor_success_hover: '#e1faeb',
    backgroundColor_successPrimary: '#2a854e',
    backgroundColor_successPrimary_active: '#20693d',
    backgroundColor_successPrimary_focus: '#2a854e',
    backgroundColor_successPrimary_hover: '#3ba164',
    borderColor_success: '#2a854e',
    borderColor_success_active: '#20693d',
    borderColor_success_focus: '#20693d',
    borderColor_success_hover: '#3ba164',
    color_success: '#2a854e',
    color_successPrimary: '#ffffff',
    color_success_active: '#20693d',
    color_success_focus: '#2a854e',
    color_success_hover: '#3ba164',
    icon_color_success: '#2a854e',
    well_backgroundColor_success: '#abedc5',
    well_borderColor_success: '#57c282'
  },
  theme: {
    backgroundColor_brand_selected: '#f0f5fc',
    backgroundColor_brand_selectedActive: '#accbfc',
    backgroundColor_brand_selectedHover: '#cfe0fc',
    backgroundColor_brandPrimary: '#3272d9',
    backgroundColor_brandPrimary_active: '#1d5bbf',
    backgroundColor_brandPrimary_focus: '#3272d9',
    backgroundColor_brandPrimary_hover: '#5691f0',
    borderColor_brand: '#3272d9',
    borderColor_brand_active: '#1d5bbf',
    borderColor_brand_focus: '#1d5bbf',
    borderColor_brand_hover: '#5691f0',
    color_brand: '#3272d9',
    color_brandPrimary: '#ffffff',
    color_brand_active: '#1d5bbf',
    color_brand_focus: '#3272d9',
    color_brand_hover: '#5691f0',
    icon_color_brand: '#3272d9'
  },
  warning: {
    backgroundColor_warning_active: '#fad8af',
    backgroundColor_warning_focus: '#fcf2e6',
    backgroundColor_warning_hover: '#fcf2e6',
    backgroundColor_warningPrimary: '#ad5f00',
    backgroundColor_warningPrimary_active: '#8a4d03',
    backgroundColor_warningPrimary_focus: '#ad5f00',
    backgroundColor_warningPrimary_hover: '#cf7911',
    borderColor_warning: '#ad5f00',
    borderColor_warning_active: '#8a4d03',
    borderColor_warning_focus: '#8a4d03',
    borderColor_warning_hover: '#cf7911',
    color_warning: '#ad5f00',
    color_warningPrimary: '#ffffff',
    color_warning_active: '#8a4d03',
    color_warning_focus: '#ad5f00',
    color_warning_hover: '#cf7911',
    icon_color_warning: '#ad5f00',
    well_backgroundColor_warning: '#fad8af',
    well_borderColor_warning: '#e89c3f'
  },
  white: {
    backgroundColor: '#ffffff',
    backgroundColor_focus: '#ffffff',
    color_inverted: '#ffffff',
    color_brandPrimary: '#ffffff',
    color_dangerPrimary: '#ffffff',
    color_successPrimary: '#ffffff',
    color_warningPrimary: '#ffffff',
    input_backgroundColor: '#ffffff',
    panel_backgroundColor: '#ffffff'
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/generated/palette.js":
/*!*************************************************************!*\
  !*** ./node_modules/mineral-ui/themes/generated/palette.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _blue, _brand, _bronze, _dusk, _gray, _green, _indigo, _magenta, _purple, _red, _sky, _slate, _teal;

var _default = {
  blue: (_blue = {}, _blue[10] = '#f0f5fc', _blue[20] = '#cfe0fc', _blue[30] = '#accbfc', _blue[40] = '#84b1fa', _blue[50] = '#5691f0', _blue[60] = '#3272d9', _blue[70] = '#1d5bbf', _blue[80] = '#114599', _blue[90] = '#103570', _blue[100] = '#15233b', _blue),
  brand: (_brand = {}, _brand[10] = '#f0f5fc', _brand[20] = '#cfe0fc', _brand[30] = '#accbfc', _brand[40] = '#84b1fa', _brand[50] = '#5691f0', _brand[60] = '#3272d9', _brand[70] = '#1d5bbf', _brand[80] = '#114599', _brand[90] = '#103570', _brand[100] = '#15233b', _brand),
  bronze: (_bronze = {}, _bronze[10] = '#fcf2e6', _bronze[20] = '#fad8af', _bronze[30] = '#f5bc76', _bronze[40] = '#e89c3f', _bronze[50] = '#cf7911', _bronze[60] = '#ad5f00', _bronze[70] = '#8a4d03', _bronze[80] = '#693d07', _bronze[90] = '#4d2f0b', _bronze[100] = '#33210c', _bronze),
  dusk: (_dusk = {}, _dusk[10] = '#f4f2f7', _dusk[20] = '#e3dcf7', _dusk[30] = '#cec2f0', _dusk[40] = '#b5a6e3', _dusk[50] = '#9886cf', _dusk[60] = '#7a68b3', _dusk[70] = '#645396', _dusk[80] = '#4f4178', _dusk[90] = '#3a3154', _dusk[100] = '#282436', _dusk),
  gray: (_gray = {}, _gray[10] = '#f5f7fa', _gray[20] = '#ebeff5', _gray[30] = '#dde3ed', _gray[40] = '#c8d1e0', _gray[50] = '#afbacc', _gray[60] = '#8e99ab', _gray[70] = '#707a8a', _gray[80] = '#58606e', _gray[90] = '#434a54', _gray[100] = '#333840', _gray),
  green: (_green = {}, _green[10] = '#e1faeb', _green[20] = '#abedc5', _green[30] = '#7ddba3', _green[40] = '#57c282', _green[50] = '#3ba164', _green[60] = '#2a854e', _green[70] = '#20693d', _green[80] = '#1a5230', _green[90] = '#153d25', _green[100] = '#112b1b', _green),
  indigo: (_indigo = {}, _indigo[10] = '#f2f2fc', _indigo[20] = '#dcdcfc', _indigo[30] = '#c2c2fc', _indigo[40] = '#a7a7fa', _indigo[50] = '#8585f2', _indigo[60] = '#6767e6', _indigo[70] = '#4d4dd1', _indigo[80] = '#3737b3', _indigo[90] = '#28288a', _indigo[100] = '#202057', _indigo),
  magenta: (_magenta = {}, _magenta[10] = '#faf0f4', _magenta[20] = '#fad4e4', _magenta[30] = '#fab4d1', _magenta[40] = '#f78bb8', _magenta[50] = '#ed5393', _magenta[60] = '#d6246e', _magenta[70] = '#b01355', _magenta[80] = '#8a1244', _magenta[90] = '#611535', _magenta[100] = '#421527', _magenta),
  purple: (_purple = {}, _purple[10] = '#f5f0fa', _purple[20] = '#ead9fa', _purple[30] = '#dabcf7', _purple[40] = '#c79bf2', _purple[50] = '#ae74e8', _purple[60] = '#9656d6', _purple[70] = '#7d3cbd', _purple[80] = '#642b9e', _purple[90] = '#4b2175', _purple[100] = '#371c52', _purple),
  red: (_red = {}, _red[10] = '#faf0f0', _red[20] = '#fad4d4', _red[30] = '#fab6b6', _red[40] = '#fa8e8e', _red[50] = '#f55353', _red[60] = '#de1b1b', _red[70] = '#b80d0d', _red[80] = '#8f0e0e', _red[90] = '#661414', _red[100] = '#451717', _red),
  sky: (_sky = {}, _sky[10] = '#e8f4fa', _sky[20] = '#bbe5fa', _sky[30] = '#8dd4f7', _sky[40] = '#53baed', _sky[50] = '#229ad6', _sky[60] = '#0c7bb3', _sky[70] = '#066391', _sky[80] = '#064d70', _sky[90] = '#093952', _sky[100] = '#0c2938', _sky),
  slate: (_slate = {}, _slate[10] = '#edf4f7', _slate[20] = '#cbe3f5', _slate[30] = '#a7ceeb', _slate[40] = '#84b7db', _slate[50] = '#5e95bd', _slate[60] = '#48799c', _slate[70] = '#376180', _slate[80] = '#2d4d63', _slate[90] = '#243947', _slate[100] = '#1d2830', _slate),
  teal: (_teal = {}, _teal[10] = '#e4f7f6', _teal[20] = '#a8ede9', _teal[30] = '#6cd9d2', _teal[40] = '#45bfb7', _teal[50] = '#28a199', _teal[60] = '#17827b', _teal[70] = '#116963', _teal[80] = '#0d524d', _teal[90] = '#0b3d3a', _teal[100] = '#092b29', _teal),
  black: '#1d1f24',
  white: '#ffffff'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mineral-ui/themes/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ThemeProvider = exports.themeFromTokens = exports.palette = exports.mineralTheme = exports.mapComponentThemes = exports.fontSizeBase = exports.themed = exports.createTheme = exports.createColorRamp = void 0;

var _createColorRamp = _interopRequireDefault(__webpack_require__(/*! ./createColorRamp */ "./node_modules/mineral-ui/themes/createColorRamp.js"));

exports.createColorRamp = _createColorRamp.default;

var _createTheme = _interopRequireDefault(__webpack_require__(/*! ./createTheme */ "./node_modules/mineral-ui/themes/createTheme.js"));

exports.createTheme = _createTheme.default;

var _themed = _interopRequireDefault(__webpack_require__(/*! ./themed */ "./node_modules/mineral-ui/themes/themed.js"));

exports.themed = _themed.default;

var _fontSizeBase = _interopRequireDefault(__webpack_require__(/*! ./fontSizeBase */ "./node_modules/mineral-ui/themes/fontSizeBase.js"));

exports.fontSizeBase = _fontSizeBase.default;

var _mapComponentThemes = _interopRequireDefault(__webpack_require__(/*! ./mapComponentThemes */ "./node_modules/mineral-ui/themes/mapComponentThemes.js"));

exports.mapComponentThemes = _mapComponentThemes.default;

var _mineralTheme = _interopRequireDefault(__webpack_require__(/*! ./mineralTheme */ "./node_modules/mineral-ui/themes/mineralTheme.js"));

exports.mineralTheme = _mineralTheme.default;

var _palette = _interopRequireDefault(__webpack_require__(/*! ./generated/palette */ "./node_modules/mineral-ui/themes/generated/palette.js"));

exports.palette = _palette.default;

var _themeFromTokens = _interopRequireDefault(__webpack_require__(/*! ./themeFromTokens */ "./node_modules/mineral-ui/themes/themeFromTokens.js"));

exports.themeFromTokens = _themeFromTokens.default;

var _ThemeProvider = _interopRequireDefault(__webpack_require__(/*! ./ThemeProvider */ "./node_modules/mineral-ui/themes/ThemeProvider.js"));

exports.ThemeProvider = _ThemeProvider.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/themes/mapComponentThemes.js":
/*!**************************************************************!*\
  !*** ./node_modules/mineral-ui/themes/mapComponentThemes.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapComponentThemes;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generates a new component theme based on the theme of another component.
 *
 * preserveKeys
 *
 *   What does it do:
 *
 *     Ensures source theme variables are used in override styles when the
 *     source does not apply those styles and the override component is
 *     independently themeable
 *
 *     e.g. Necessary in TableHeaderCell (which is a themed TableCell) because
 *     TableCells and TableHeaderCells are both independently themeable
 *
 *   How to use:
 *
 *     Provide array of theme variable keys used in style properties applied by
 *     source component and not by override component
 */
function mapComponentThemes(source, override, baseTheme, preserveKeys) {
  var REGEXP_SOURCE_NAME = new RegExp("^" + source.name);
  var sourceThemeWithRenamedKeys = Object.keys(source.theme).reduce(function (acc, sourceKey) {
    if (REGEXP_SOURCE_NAME.test(sourceKey)) {
      var overrideKey = sourceKey.replace(REGEXP_SOURCE_NAME, override.name);
      acc[overrideKey] = source.theme[sourceKey];
    }

    return acc;
  }, {});
  var preserved = preserveKeys && preserveKeys.reduce(function (acc, sourceKey) {
    var keyProperty = sourceKey.split('_')[1];
    acc[override.name + "_" + keyProperty] = source.theme[sourceKey];
    return acc;
  }, {});
  return _objectSpread({}, sourceThemeWithRenamedKeys, override.theme, baseTheme, preserved);
}

/***/ }),

/***/ "./node_modules/mineral-ui/themes/mineralTheme.js":
/*!********************************************************!*\
  !*** ./node_modules/mineral-ui/themes/mineralTheme.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _createTheme = _interopRequireDefault(__webpack_require__(/*! ./createTheme */ "./node_modules/mineral-ui/themes/createTheme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createTheme.default)();

exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/propTypes.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/themes/propTypes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeProviderPropTypes = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var themeProviderPropTypes = {
  children: _propTypes.node,
  theme: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.object])
};
exports.themeProviderPropTypes = themeProviderPropTypes;

/***/ }),

/***/ "./node_modules/mineral-ui/themes/themeFromTokens.js":
/*!***********************************************************!*\
  !*** ./node_modules/mineral-ui/themes/themeFromTokens.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;
exports.themeFromColorTokens = themeFromColorTokens;

var _pxToEm = _interopRequireDefault(__webpack_require__(/*! ../styles/pxToEm */ "./node_modules/mineral-ui/styles/pxToEm.js"));

var _colorAliases = _interopRequireDefault(__webpack_require__(/*! ./generated/colorAliases */ "./node_modules/mineral-ui/themes/generated/colorAliases.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contains = function contains(string, subString) {
  return string.indexOf(subString) !== -1;
};

var newKey = function newKey(key) {
  return key.replace('brand', 'theme');
};

var remToEm = function remToEm(value) {
  return value.replace('rem', 'em');
};

function _default(tokens) {
  return Object.keys(tokens).reduce(function (acc, key) {
    var value = tokens[key];

    if (typeof value === 'string') {
      if (value.split('px').length === 2 && !contains(key, 'breakpoint')) {
        value = (0, _pxToEm.default)(value);
      } else if (contains(key, 'fontSize')) {
        value = remToEm(value);
      }
    }

    acc[newKey(key)] = value;
    return acc;
  }, {});
}

function themeFromColorTokens(_ref) {
  var _ref$aliases = _ref.aliases,
      aliases = _ref$aliases === void 0 ? _colorAliases.default : _ref$aliases,
      color = _ref.color,
      colorName = _ref.colorName,
      tokens = _ref.tokens;
  return Object.keys(tokens).reduce(function (acc, key) {
    var value = tokens[key];

    if (typeof color === 'string') {
      value = color;
    } else {
      var rampKey = parseInt(aliases[key].split('_')[1]);

      if (rampKey) {
        if (color[rampKey]) {
          value = color[rampKey];
        } else {
          throw new Error("[mineral-ui/themes/createTheme]: colors." + colorName + "[" + rampKey + "] is missing.\n  See https://github.com/mineral-ui/mineral-ui/blob/master/packages/mineral-ui-tokens/src/blue.js for an example color ramp.");
        }
      }
    }

    acc[newKey(key)] = value;
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/mineral-ui/themes/themed.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/themes/themed.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/mineral-ui/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var _emotionTheming = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js");

var _ThemeProvider = _interopRequireDefault(__webpack_require__(/*! ./ThemeProvider */ "./node_modules/mineral-ui/themes/ThemeProvider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Usage: themed(component)(theme)
var themed = function themed(WrappedComponent) {
  return function (theme) {
    var Wrapper = function Wrapper(props, context) {
      var outTheme = typeof theme === 'function' ? theme(props, context) : theme;

      var ignore = props.theme,
          outProps = _objectWithoutPropertiesLoose(props, ["theme"]);

      return (0, _core.jsx)(_ThemeProvider.default, {
        theme: outTheme
      }, (0, _core.jsx)(WrappedComponent, outProps));
    }; // $FlowFixMe - `WrappedComponent.propTypes` missing in `React.AbstractComponentStatics`


    Wrapper.propTypes =  true ? WrappedComponent.propTypes : undefined;
    Wrapper.displayName = (0, _wrapDisplayName.default)(WrappedComponent, 'Themed');
    (0, _hoistNonReactStatics.default)(Wrapper, WrappedComponent);
    return (0, _emotionTheming.withTheme)(Wrapper);
  };
};

var _default = themed;
exports.default = _default;

/***/ }),

/***/ "./node_modules/mineral-ui/utils/collections.js":
/*!******************************************************!*\
  !*** ./node_modules/mineral-ui/utils/collections.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toArray = exports.setFromArray = void 0;

var setFromArray = function setFromArray(array) {
  return array.reduce(function (acc, value) {
    acc.add(value);
    return acc;
  }, new Set());
};

exports.setFromArray = setFromArray;

var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};

exports.toArray = toArray;

/***/ }),

/***/ "./node_modules/mineral-ui/utils/composeEventHandlers.js":
/*!***************************************************************!*\
  !*** ./node_modules/mineral-ui/utils/composeEventHandlers.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = composeEventHandlers;

function composeEventHandlers() {
  for (var _len = arguments.length, handlers = new Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  var fns = handlers.filter(function (fn) {
    return Boolean(fn);
  });

  if (fns.length === 0) {
    return undefined;
  } else if (fns.length === 1) {
    return fns[0];
  } else {
    return function (event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var prevented = false;
      return fns.forEach(function (fn) {
        if (!prevented) {
          fn.apply(void 0, [event].concat(args));
          prevented = event.nativeEvent.preventMineralDefault;
        }
      });
    };
  }
}

/***/ }),

/***/ "./node_modules/mineral-ui/utils/emotion.js":
/*!**************************************************!*\
  !*** ./node_modules/mineral-ui/utils/emotion.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ignoreSsrWarning = void 0;
var ignoreSsrWarning = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
exports.ignoreSsrWarning = ignoreSsrWarning;

/***/ }),

/***/ "./node_modules/mineral-ui/utils/generateId.js":
/*!*****************************************************!*\
  !*** ./node_modules/mineral-ui/utils/generateId.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.generateId = generateId;
exports.resetId = resetId;
var currentId = 0;

function generateId() {
  currentId += 1;
  return currentId.toString();
}

function resetId() {
  currentId = 0;
}

/***/ }),

/***/ "./node_modules/mineral-ui/utils/index.js":
/*!************************************************!*\
  !*** ./node_modules/mineral-ui/utils/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  setFromArray: true,
  toArray: true,
  composeEventHandlers: true,
  isRenderProp: true,
  rtlTextAlign: true,
  withForwardRef: true,
  component: true
};
exports.component = exports.withForwardRef = exports.rtlTextAlign = exports.isRenderProp = exports.composeEventHandlers = exports.toArray = exports.setFromArray = void 0;

var _collections = __webpack_require__(/*! ./collections */ "./node_modules/mineral-ui/utils/collections.js");

exports.setFromArray = _collections.setFromArray;
exports.toArray = _collections.toArray;

var _composeEventHandlers = _interopRequireDefault(__webpack_require__(/*! ./composeEventHandlers */ "./node_modules/mineral-ui/utils/composeEventHandlers.js"));

exports.composeEventHandlers = _composeEventHandlers.default;

var _generateId = __webpack_require__(/*! ./generateId */ "./node_modules/mineral-ui/utils/generateId.js");

Object.keys(_generateId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _generateId[key];
});

var _isRenderProp = _interopRequireDefault(__webpack_require__(/*! ./isRenderProp */ "./node_modules/mineral-ui/utils/isRenderProp.js"));

exports.isRenderProp = _isRenderProp.default;

var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/mineral-ui/utils/propTypes.js");

exports.component = _propTypes.component;

var _rtlTextAlign = _interopRequireDefault(__webpack_require__(/*! ./rtlTextAlign */ "./node_modules/mineral-ui/utils/rtlTextAlign.js"));

exports.rtlTextAlign = _rtlTextAlign.default;

var _withForwardRef = _interopRequireDefault(__webpack_require__(/*! ./withForwardRef */ "./node_modules/mineral-ui/utils/withForwardRef.js"));

exports.withForwardRef = _withForwardRef.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/mineral-ui/utils/isRenderProp.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/utils/isRenderProp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isRenderProp;

function isRenderProp(prop) {
  return typeof prop === 'function';
}

/***/ }),

/***/ "./node_modules/mineral-ui/utils/propTypes.js":
/*!****************************************************!*\
  !*** ./node_modules/mineral-ui/utils/propTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.component = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var component = (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string, (0, _propTypes.shape)({
  render: _propTypes.func.isRequired
})]);
exports.component = component;

/***/ }),

/***/ "./node_modules/mineral-ui/utils/rtlTextAlign.js":
/*!*******************************************************!*\
  !*** ./node_modules/mineral-ui/utils/rtlTextAlign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = rtlTextAlign;

function rtlTextAlign(align, direction) {
  var rtl = direction === 'rtl';

  if (rtl && align === 'start' || !rtl && align === 'end') {
    return 'right';
  } else if (rtl && align === 'end' || align === 'start') {
    return 'left';
  } else {
    return align;
  }
}

/***/ }),

/***/ "./node_modules/mineral-ui/utils/withForwardRef.js":
/*!*********************************************************!*\
  !*** ./node_modules/mineral-ui/utils/withForwardRef.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = withForwardRef;

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/mineral-ui/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withForwardRef(WrappedComponent) {
  var Wrapper = (0, _react.forwardRef)(function (props, ref) {
    return (0, _core.jsx)(WrappedComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  });
  Wrapper.displayName = (0, _wrapDisplayName.default)(WrappedComponent, 'WithForwardRef'); // $FlowFixMe - defaultProps missing in React.AbstractComponentStatics

  Wrapper.defaultProps = WrappedComponent.defaultProps; // $FlowFixMe - defaultProps missing in React.AbstractComponentStatics

  Wrapper.propTypes = WrappedComponent.propTypes;
  (0, _hoistNonReactStatics.default)(Wrapper, WrappedComponent);
  return Wrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fpattie%2FDevelopment%2Fazul-game%2Fpages%2Findex.js!./":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fpattie%2FDevelopment%2Fazul-game%2Fpages%2Findex.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/*!******************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Manager.js ***!
  \******************************************************/
/*! exports provided: ManagerContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerContext", function() { return ManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_5__);






var ManagerContext = create_react_context__WEBPACK_IMPORTED_MODULE_5___default()({
  setReferenceNode: undefined,
  referenceNode: undefined
});

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });

    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Popper.js ***!
  \*****************************************************/
/*! exports provided: InnerPopper, placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["safeInvoke"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_6__["default"](referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_8__["safeInvoke"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_6__["default"].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_7__["ManagerContext"].Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Reference.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerContext"].Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/index.js ***!
  \****************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/*! exports provided: unwrapArray, safeInvoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/recompose/getDisplayName.js":
/*!**************************************************!*\
  !*** ./node_modules/recompose/getDisplayName.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

var _default = getDisplayName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/mapProps.js":
/*!********************************************!*\
  !*** ./node_modules/recompose/mapProps.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _setDisplayName = _interopRequireDefault(__webpack_require__(/*! ./setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! ./wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };

    if (true) {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'mapProps'))(MapProps);
    }

    return MapProps;
  };
};

var _default = mapProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/setDisplayName.js":
/*!**************************************************!*\
  !*** ./node_modules/recompose/setDisplayName.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _setStatic = _interopRequireDefault(__webpack_require__(/*! ./setStatic */ "./node_modules/recompose/setStatic.js"));

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic.default)('displayName', displayName);
};

var _default = setDisplayName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/setStatic.js":
/*!*********************************************!*\
  !*** ./node_modules/recompose/setStatic.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var _default = setStatic;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/withProps.js":
/*!*********************************************!*\
  !*** ./node_modules/recompose/withProps.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! ./wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var _setDisplayName = _interopRequireDefault(__webpack_require__(/*! ./setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

var _mapProps = _interopRequireDefault(__webpack_require__(/*! ./mapProps */ "./node_modules/recompose/mapProps.js"));

var withProps = function withProps(input) {
  var hoc = (0, _mapProps.default)(function (props) {
    return (0, _extends2.default)({}, props, typeof input === 'function' ? input(props) : input);
  });

  if (true) {
    return function (BaseComponent) {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var _default = withProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/wrapDisplayName.js":
/*!***************************************************!*\
  !*** ./node_modules/recompose/wrapDisplayName.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _getDisplayName = _interopRequireDefault(__webpack_require__(/*! ./getDisplayName */ "./node_modules/recompose/getDisplayName.js"));

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + (0, _getDisplayName.default)(BaseComponent) + ")";
};

var _default = wrapDisplayName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/scroll-into-view-if-needed/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/es/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/es/index.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = 'scrollBehavior' in document.body.style;
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);

/***/ }),

/***/ "./node_modules/shuffle-array/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shuffle-array/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
};

/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
module.exports = shuffle;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_9d2e7eb3ce4bb71fa337 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9d2e7eb3ce4bb71fa337 */ "dll-reference dll_9d2e7eb3ce4bb71fa337"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mineral_ui_themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mineral-ui/themes */ "./node_modules/mineral-ui/themes/index.js");
/* harmony import */ var mineral_ui_themes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_themes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mineral_ui_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mineral-ui/Select */ "./node_modules/mineral-ui/Select/index.js");
/* harmony import */ var mineral_ui_Select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_Select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mineral-ui/Button */ "./node_modules/mineral-ui/Button/index.js");
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Player */ "./components/Player.js");
/* harmony import */ var _components_FactoryDisplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/FactoryDisplay */ "./components/FactoryDisplay.js");
/* harmony import */ var _services_tilebag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/tilebag */ "./services/tilebag.js");








var _jsxFileName = "/Users/pattie/Development/azul-game/pages/index.js";







 // eslint-disable-line



var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      playerCount: false,
      currentPlayer: 0,
      tileBag: Object(_services_tilebag__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      isReadyToPlay: false,
      factoryDisplays: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "possiblePlayers", [{
      text: '2',
      value: '2'
    }, {
      text: '3',
      value: '3'
    }, {
      text: '4',
      value: '4'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "possibleFactoryDisplays", [{
      players: 2,
      factoryDisplays: 5
    }, {
      players: 3,
      factoryDisplays: 7
    }, {
      players: 4,
      factoryDisplays: 9
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setUpRound", function () {
      // Layout factory display thingys
      // Put the tiles on the things.
      // const { factoryDisplayCount } = this.state;
      var playerCount = _this.state.playerCount;

      var factoryDisplayCount = _this.determineFactoryDisplayCount(playerCount);

      var factoryDisplays = Array(factoryDisplayCount).fill([]).map(function () {
        return _this.drawTiles();
      }); // if there are tiles in the bag, give them 4.
      // Otherwise build a new bag, then give them 4.
      // <FactoryDisplay tiles=[0,2,4,0] />

      _this.setState({
        isReadyToPlay: true,
        factoryDisplays: factoryDisplays
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "drawTiles", function () {
      // return 4 tiles.
      // remove those tiles from the state.
      var tileBag = _this.state.tileBag;
      var tilesToDraw = tileBag.splice(0, 4);

      _this.setState({
        tileBag: tileBag
      });

      if (tilesToDraw.length === 4) {
        return tilesToDraw;
      } // Refresh bag and draw if not enough.


      var newTilebag = Object(_services_tilebag__WEBPACK_IMPORTED_MODULE_15__["default"])();
      var newTiles = newTilebag.splice(0, 4);

      _this.setState({
        tileBag: newTilebag
      });

      return newTiles;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (_ref) {
      var value = _ref.value;
      var playerCount = Number(value);

      _this.setState({
        playerCount: playerCount
      });

      local_storage__WEBPACK_IMPORTED_MODULE_9___default()('playerCount', playerCount);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hydrateStateWithLocalStorage", function () {
      var _assertThisInitialize = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
          state = _assertThisInitialize.state;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state).forEach(function (key) {
        var value = local_storage__WEBPACK_IMPORTED_MODULE_9___default.a.get(key);

        if (!value) {
          return;
        }

        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, key, JSON.parse(value)));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "determineFactoryDisplayCount", function (playerCount) {
      if (!playerCount) {
        return false;
      }

      var _this$possibleFactory = _this.possibleFactoryDisplays.find(function (_ref2) {
        var players = _ref2.players;
        return players === playerCount;
      }),
          factoryDisplays = _this$possibleFactory.factoryDisplays;

      return factoryDisplays;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.hydrateStateWithLocalStorage();
    }
  }, {
    key: "render",
    // Once the players are selected, that determines
    // the number of mats to display.
    value: function render() {
      var possiblePlayers = this.possiblePlayers,
          handleChange = this.handleChange;
      var _this$state = this.state,
          playerCount = _this$state.playerCount,
          currentPlayer = _this$state.currentPlayer,
          tileBag = _this$state.tileBag,
          isReadyToPlay = _this$state.isReadyToPlay,
          factoryDisplays = _this$state.factoryDisplays;
      console.log({
        currentPlayer: currentPlayer,
        tileBag: tileBag,
        possiblePlayers: possiblePlayers,
        factoryDisplays: factoryDisplays
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(mineral_ui_themes__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, !playerCount && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "How many players are there?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(mineral_ui_Select__WEBPACK_IMPORTED_MODULE_11___default.a, {
        data: possiblePlayers,
        onChange: handleChange,
        placeholder: "Choose a number",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), playerCount && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Player count:", playerCount), !isReadyToPlay && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        primary: true,
        onClick: this.setUpRound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Draw tiles"), factoryDisplays.map(function (tiles) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_FactoryDisplay__WEBPACK_IMPORTED_MODULE_14__["default"], {
          tiles: tiles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Todo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Make the player grid"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Make a component to hold the tiles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Make a component to hold the mats")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Player__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./services/tilebag.js":
/*!*****************************!*\
  !*** ./services/tilebag.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shuffle-array */ "./node_modules/shuffle-array/index.js");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return shuffle_array__WEBPACK_IMPORTED_MODULE_1___default()(Array(5).fill(0).reduce(function (acc, cv, index) {
    return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(20).fill(index)));
  }, []));
});

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fpattie%2FDevelopment%2Fazul-game%2Fpages%2Findex.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fpattie%2FDevelopment%2Fazul-game%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fpattie%2FDevelopment%2Fazul-game%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_9d2e7eb3ce4bb71fa337":
/*!*******************************************!*\
  !*** external "dll_9d2e7eb3ce4bb71fa337" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_9d2e7eb3ce4bb71fa337;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map