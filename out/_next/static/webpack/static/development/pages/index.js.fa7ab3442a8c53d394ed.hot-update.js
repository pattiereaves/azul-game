webpackHotUpdate("static/development/pages/index.js",{

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
          lineNumber: 148
        },
        __self: this
      }, "Player count: ", playerCount), !isReadyToPlay && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        primary: true,
        onClick: this.setUpRound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Draw tiles"), factoryDisplays.map(function (tiles) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_FactoryDisplay__WEBPACK_IMPORTED_MODULE_14__["default"], {
          tiles: tiles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Todo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Make the player grid"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Make a component to hold the tiles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Make a component to hold the mats")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Player__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.fa7ab3442a8c53d394ed.hot-update.js.map