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
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mineral_ui_themes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mineral-ui/themes */ "./node_modules/mineral-ui/themes/index.js");
/* harmony import */ var mineral_ui_themes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_themes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mineral_ui_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mineral-ui/Select */ "./node_modules/mineral-ui/Select/index.js");
/* harmony import */ var mineral_ui_Select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_Select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mineral-ui/Button */ "./node_modules/mineral-ui/Button/index.js");
/* harmony import */ var mineral_ui_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Player */ "./components/Player.js");
/* harmony import */ var _components_FactoryDisplay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/FactoryDisplay */ "./components/FactoryDisplay.js");
/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Center */ "./components/Center.js");
/* harmony import */ var _services_tilebag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/tilebag */ "./services/tilebag.js");











var _jsxFileName = "/Users/pattie/Development/azul-game/pages/index.js";







 // eslint-disable-line

 // eslint-disable-line



var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      playerCount: false,
      currentPlayer: 0,
      tileBag: Object(_services_tilebag__WEBPACK_IMPORTED_MODULE_19__["default"])(),
      isReadyToPlay: false,
      factoryDisplays: [],
      centerTiles: [],
      players: [] // eslint-disable-line

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "possiblePlayers", [{
      text: '2',
      value: '2'
    }, {
      text: '3',
      value: '3'
    }, {
      text: '4',
      value: '4'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "possibleFactoryDisplays", [{
      players: 2,
      factoryDisplays: 5
    }, {
      players: 3,
      factoryDisplays: 7
    }, {
      players: 4,
      factoryDisplays: 9
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "setUpRound", function () {
      // Layout factory display thingys
      // Put the tiles on the things.
      var _this$state = _this.state,
          playerCount = _this$state.playerCount,
          players = _this$state.players;

      var factoryDisplayCount = _this.determineFactoryDisplayCount(playerCount);

      var factoryDisplays = Array(factoryDisplayCount).fill([]).map(function () {
        return _this.drawTiles();
      }); // if there are tiles in the bag, give them 4.
      // Otherwise build a new bag, then give them 4.
      // <FactoryDisplay tiles=[0,2,4,0] />

      _this.setState({
        isReadyToPlay: true,
        factoryDisplays: factoryDisplays
      }); // Update first player.


      var firstPlayerTileHolder = players.findIndex(function (_ref) {
        var willBeFirstNextRound = _ref.willBeFirstNextRound;
        return willBeFirstNextRound;
      });
      var nextFirstPlayerID = firstPlayerTileHolder > -1 ? firstPlayerTileHolder : 0;

      _this.setState({
        currentPlayer: nextFirstPlayerID
      }); // Reset player boards.


      var resetPlayers = players.map(function (player) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, player, {
          tilesToPlace: [],
          willBeFirstNextRound: false,
          floorLine: []
        });
      });

      _this.setState({
        players: resetPlayers
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "drawTiles", function () {
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


      var newTilebag = Object(_services_tilebag__WEBPACK_IMPORTED_MODULE_19__["default"])();
      var newTiles = newTilebag.splice(0, 4);

      _this.setState({
        tileBag: newTilebag
      });

      return newTiles;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handlePlayerSelection", function (_ref2) {
      var value = _ref2.value;
      var playerCount = Number(value);
      var players = Array(playerCount).fill({
        tilesToPlace: [],
        score: 0,
        willBeFirstNextRound: false,
        patternLines: [[false], [false, false], [false, false, false], [false, false, false, false], [false, false, false, false, false]],
        floorLine: []
      });

      _this.setState({
        playerCount: playerCount,
        players: players
      });

      local_storage__WEBPACK_IMPORTED_MODULE_12___default()('playerCount', playerCount);
      local_storage__WEBPACK_IMPORTED_MODULE_12___default()('players', players);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "hydrateStateWithLocalStorage", function () {
      var _assertThisInitialize = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this),
          state = _assertThisInitialize.state;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(state).forEach(function (key) {
        var value = local_storage__WEBPACK_IMPORTED_MODULE_12___default.a.get(key);

        if (!value) {
          return;
        }

        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, key, value));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "determineFactoryDisplayCount", function (playerCount) {
      if (!playerCount) {
        return false;
      }

      var _this$possibleFactory = _this.possibleFactoryDisplays.find(function (_ref3) {
        var players = _ref3.players;
        return players === playerCount;
      }),
          factoryDisplays = _this$possibleFactory.factoryDisplays;

      return factoryDisplays;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleTurnEnd", function (playerID) {
      var playerCount = _this.state.playerCount;
      var nextID = playerID + 1;

      if (nextID < playerCount) {
        _this.setState({
          currentPlayer: nextID
        });

        return;
      } // Otherwise start over at the beginning.


      _this.setState({
        currentPlayer: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleTileSelection", function (displayID, tileSelection) {
      var _this$state2 = _this.state,
          factoryDisplays = _this$state2.factoryDisplays,
          players = _this$state2.players,
          currentPlayer = _this$state2.currentPlayer,
          centerTiles = _this$state2.centerTiles;
      var activeDisplay = factoryDisplays[displayID]; // Remove activeDisplay from factory displays.

      factoryDisplays.splice(displayID, 1);

      _this.setState({
        factoryDisplays: factoryDisplays
      }); // Give remaining tiles to center.


      var remainingTiles = activeDisplay.filter(function (tile) {
        return tile !== tileSelection;
      });
      var newCenterTiles = centerTiles.concat(remainingTiles);

      _this.setState({
        centerTiles: newCenterTiles
      }); // Get all of selected files from activeDisplay


      var playersTiles = activeDisplay.filter(function (tile) {
        return tile === tileSelection;
      });
      var updatedPlayers = players.reduce(function (acc, player, index) {
        if (index !== currentPlayer) {
          return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(acc), [player]);
        }

        var tilesToPlace = player.tilesToPlace.concat(playersTiles);
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(acc), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, player, {
          tilesToPlace: tilesToPlace
        })]);
      }, []); // Give selected tiles from display to current player.

      _this.setState({
        players: updatedPlayers
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "assignTilesToPatternLines", function (playerID, lineIndex, tilesToPlace) {
      var players = _this.state.players;
      var player = players[playerID];
      var patternLines = player.patternLines;
      var line = patternLines[lineIndex];
      var tiles = tilesToPlace;
      var filledLine = line.map(function (place) {
        if (place === false) {
          var assignedPlace = tiles.pop();

          if (_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default()(assignedPlace)) {
            return assignedPlace;
          }
        }

        return false;
      }); // Update lines.

      var updatedLines = patternLines.map(function (patternLine, index) {
        if (index === lineIndex) {
          return filledLine;
        }

        return patternLine;
      });
      var updatedPlayers = players.map(function (oldPlayer, index) {
        if (index === playerID) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, oldPlayer, {
            patternLines: updatedLines,
            floorLine: oldPlayer.floorLine.concat(tiles)
          });
        }

        return oldPlayer;
      });

      _this.setState({
        players: updatedPlayers
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.hydrateStateWithLocalStorage();
    }
  }, {
    key: "render",
    value: function render() {
      var possiblePlayers = this.possiblePlayers,
          handlePlayerSelection = this.handlePlayerSelection,
          handleTurnEnd = this.handleTurnEnd,
          handleTileSelection = this.handleTileSelection,
          assignTilesToPatternLines = this.assignTilesToPatternLines;
      var _this$state3 = this.state,
          playerCount = _this$state3.playerCount,
          currentPlayer = _this$state3.currentPlayer,
          tileBag = _this$state3.tileBag,
          isReadyToPlay = _this$state3.isReadyToPlay,
          factoryDisplays = _this$state3.factoryDisplays,
          centerTiles = _this$state3.centerTiles,
          players = _this$state3.players;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(mineral_ui_themes__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, !playerCount && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "How many players are there?"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(mineral_ui_Select__WEBPACK_IMPORTED_MODULE_14___default.a, {
        data: possiblePlayers,
        onChange: handlePlayerSelection,
        placeholder: "Choose a number",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      })), playerCount && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Player count:", playerCount), !isReadyToPlay && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(mineral_ui_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        primary: true,
        onClick: this.setUpRound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Draw tiles"), isReadyToPlay && factoryDisplays.map(function (tiles, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_FactoryDisplay__WEBPACK_IMPORTED_MODULE_17__["default"], {
          displayID: index,
          tiles: tiles,
          handleTileSelection: handleTileSelection,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Center__WEBPACK_IMPORTED_MODULE_18__["default"], {
        tiles: centerTiles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), players.map(function (player, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Player__WEBPACK_IMPORTED_MODULE_16__["default"], {
          playerID: index,
          isCurrentPlayer: index === currentPlayer,
          handleTurnEnd: handleTurnEnd,
          data: player,
          assignTilesToPatternLines: assignTilesToPatternLines,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        });
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.c05f72abe5f63836bb7f.hot-update.js.map