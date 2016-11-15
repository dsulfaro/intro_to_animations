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
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TITLES = ["Welcome to 'I Can Animate and So Can You!'", "@keyframes Are Your Friend!", "Telling the Thing to Animate the Stuff", "Timing Is Everything", "Yaassssss"];
	
	var LECTURES = ["Are you tired of using Javascript or one of it's libraries to animate elements on your site? Do you wish there were a better way?<br><br> Well hold onto your butts.<br><br> CSS3 Animations save the day! Below is an example of a simple animation. See if you can change the background-color from red to purple. Fret not, we will break down what is happening in a moment.", "The key component (see what I did there?) to CSS3 animations are <code>@keyframes</code> They tell an element what style it has at a given time.<br><br><code>@keyframes color_change{<br>  from { background-color: red; } <br>  to { background-color: purple; }<br>}</code><br><br><code>@keyframes</code> are where an animation is created. Think of it as a timeline where different styles are declared at different stages. Note: <code>color_change</code> is simply the name of the animation.<br><br>Let's change a square into a circle and back to a square again. Change the border-radius to 150px at 50%. Notice we are using percentages here rather than <code>to</code> and <code>from</code>. We'll talk about this next.", "The percentages and <code>to</code> and <code>from</code> in the previous examples are the intervals telling the animation what style to render at a given time. Take a look below:<br><pre><code>@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { border-radius: 150px; }<br> 100% { border-radius: 0px; } <br>}</code><br><br><code>div{<br> width, height: 300px; <br> background-color: green; <br> animation-name: circle-ify; <br> animation-duration: 3s;<br>}</code></pre><br><code>animation-name</code> is how you attach an animation to an element, and <code>animation-duration</code> sets the time it takes the animation to run. So, at 0s (0%), the border-radius is 0px, at 1.5s (50% of the way through the animation) the border-radius is 150px, and then back to 0px for the end of the animation (100%). Assign the animation in the editor below and watch it fade!.", "The <code>animation-timing-function</code> attribute allows for different speeds for the animation, and can take the following values.<ul id='timings'><li>linear</li><li>ease</li><li>ease-in</li><li>ease-out</li><li>ease-in-out</li><li>cubic-bezier</li></ul>Try entering these values below and press <code>enter</code> to view the effect. Press submit to continue.", "YOU WIN YAY!!!"];
	
	var EDITOR = ["@keyframes color_change{<br>  from { background-color: red; } <br>  to { <input type='text' id='main-input'> }<br>}", "@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { <input type='text' id='main-input'> }<br> 100% { border-radius: 0px;} <br>}", "@keyframes fade{<br> to { opacity: 0 }<br>}<br><br>.pink-triangle{<br>  width, height: 0;<br>  border-left: 300px solid transparent;<br>  border-right: 300px solid transparent;<br>  animation-name: <input type='text' id='main-input'><br>  animation-duration: 3s<br>}", ".spinning-orange-thing {<br>  width, height: 300px;<br>  background-color: '#ff9900;<br>  border-radius: 50px;<br>  animation-name: rotate;<br>  animation-duration: 2s;<br>  animation-iteration-count: infinite;<br>  animation-timing-function: <input type='text' id='main-input'><br>}<br>@keyframes rotate {<br>  to { transform: (rotate(360deg))}<br>}", ""];
	
	var SOLUTIONS = ["background-color:purple;", "border-radius:150px;", "fade;", "", ""];
	
	var DIVS = ["<div id='level-0'></div>", "<div id='level-1'></div>", "<div id='level-2'></div>", "<div id='level-3'></div>", "<div id='level-4'></div>"];
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.level = 3;
	    this.titles = TITLES;
	    this.lectures = LECTURES;
	    this.editor = EDITOR;
	    this.solutions = SOLUTIONS;
	    this.divs = DIVS;
	    this.won = false;
	    this.checkSolution = this.checkSolution.bind(this);
	  }
	
	  _createClass(Game, [{
	    key: "timingFunctions",
	    value: function timingFunctions() {
	      $("#level-3").removeClass();
	      switch ($("#main-input").val()) {
	        case "linear":
	          $("#level-3").addClass("level-3-linear");
	          break;
	        case "ease":
	          $("#level-3").addClass("level-3-ease");
	          break;
	        case "ease-in":
	          $("#level-3").addClass("level-3-ease-in");
	          break;
	        case "ease-out":
	          $("#level-3").addClass("level-3-ease-out");
	          break;
	        case "ease-in-out":
	          $("#level-3").addClass("level-3-ease-in-out");
	          break;
	        case "cubic-bezier":
	          $("#level-3").addClass("level-3-cubic-bezier");
	          break;
	        default:
	          alert("nope");
	      }
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var _this = this;
	
	      this.loadLevel();
	      $("#main-submit").click(function () {
	        if (_this.level === 3) {
	          _this.level += 1;
	          _this.loadLevel();
	        } else {
	          _this.checkSolution($("#main-input").val());
	        }
	      });
	      $("#main-input").keypress(function (e) {
	        console.log("hi");
	        if (e.which === 13) {
	          _this.checkSolution($("#main-input").val());
	        }
	      });
	    }
	  }, {
	    key: "loadLevel",
	    value: function loadLevel() {
	      $(".title").html(this.titles[this.level]);
	      $(".lecture").html(this.lectures[this.level]);
	      $(".editor-css").html(this.editor[this.level]);
	      $(".level-div").html(this.divs[this.level]);
	    }
	  }, {
	    key: "checkSolution",
	    value: function checkSolution(answer) {
	      var _this2 = this;
	
	      if (this.level === 3) {
	        this.timingFunctions();
	      } else {
	        if (answer.replace(/\s+/g, '') === this.solutions[this.level]) {
	
	          // disable the button so the user cannot magically skip ahead
	          $("#main-submit").prop('disabled', true);
	
	          // append the correct animation to the div so that it triggers
	          var currentLevel = "#level-" + this.level;
	          $(currentLevel).addClass("level-" + this.level + "-answer");
	
	          // load level after animation has finished
	          setTimeout(function () {
	            _this2.level += 1;
	            $("#main-submit").prop('disabled', false);
	            _this2.loadLevel();
	          }, 2900);
	        } else {
	          alert("hellur");
	        }
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	$(document).ready(function () {
	  var game = new Game();
	  game.start();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map