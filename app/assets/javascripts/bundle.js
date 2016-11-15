/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _levels = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.level = 0;
	    this.titles = _levels.TITLES;
	    this.lectures = _levels.LECTURES;
	    this.editor = _levels.EDITOR;
	    this.solutions = _levels.SOLUTIONS;
	    this.divs = _levels.DIVS;
	    this.won = false;
	    this.checkSolution = this.checkSolution.bind(this);
	  }
	
	  _createClass(Game, [{
	    key: "start",
	    value: function start() {
	      var _this = this;
	
	      this.loadLevel();
	      $("#main-submit").click(function () {
	        _this.checkSolution($("#main-input").val());
	      });
	    }
	  }, {
	    key: "loadLevel",
	    value: function loadLevel() {
	      debugger;
	      $(".title").html(this.titles[this.level]);
	      $(".lecture").html(this.lectures[this.level]);
	      $(".editor-css").html(this.editor[this.level]);
	      $(".level-div").html(this.divs[this.level]);
	    }
	  }, {
	    key: "checkSolution",
	    value: function checkSolution(answer) {
	      var _this2 = this;
	
	      if (answer.replace(/\s+/g, '') === this.solutions[this.level]) {
	        $("#level-div").children().first().addClass("level-1-answer");
	        window.setInterval(function () {
	          _this2.level += 1;
	          //if (this.level === 2){
	          //}
	        }, 3500);
	      } else {
	        alert(answer.replace(/\s+[;]/g, ''));
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	$(document).ready(function () {
	  var game = new Game();
	  game.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});
	var TITLES = exports.TITLES = ["Welcome to 'I Can Animate and So Can You!'", "@keyframes Are Your Friend!"];
	
	var LECTURES = exports.LECTURES = ["Are you tired of using Javascript or one of it's libraries to animate elements on your site? Do you wish there were a better way?<br><br> Well hold onto your butts.<br><br> CSS3 Animations save the day! Below is an example of a simple animation. See if you can change the background-color from red to purple. Fret not, we will break down what is happening in a moment.", "The key component (see what I did there?) to CSS3 animations are <code>@keyframes</code> They tell an element what style it has at a given time.<br><br><code>@keyframes color_change{<br>  from { background-color: red; } <br>  to { background-color: purple; }<br>}</code><br><br>In the previous example we saw that the <code>background-color</code> changed <code>from</code> a certain color <code>to</code> another. You can also you percentages to accomplish the same thing. Fill in the code to change the background-color from blue to yellow:", "YOU WIN YAY!!!"];
	
	var EDITOR = exports.EDITOR = ["@keyframes color_change{<br>  from { background-color: red; } <br>  to { <input type='text' id='main-input'> }<br>}", "@keyframes color_change{<br>  0% { background-color: blue; } <br>  100% { <input type='text' id='main-input'> }<br>}", "Congrats, you're on your way to become a CSS3 Animations master!"];
	
	var SOLUTIONS = exports.SOLUTIONS = ["background-color:purple;", "background-color:yellow;", ""];
	
	var DIVS = exports.DIVS = ["<div id='level-1-div'></div>", "<div id='level-2-div'></div>", ""];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map