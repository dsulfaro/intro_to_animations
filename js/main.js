const TITLES = ["Welcome to 'I Can Animate and So Can You!'",
                       "@keyframes Are Your Friend!",
                     "Telling the Thing to Animate the Stuff",
                   "Timing Is Everything",
                 "I Attribute My Success to Attributes"]

const LECTURES = ["Are you tired of using Javascript or one of it's libraries to animate elements on your site? Do you wish there were a better way?<br><br> Well hold onto your butts.<br><br> CSS3 Animations save the day! Below is an example of a simple animation. See if you can change the background-color from red to purple. Fret not, we will break down what is happening in a moment.",
"The key component (see what I did there?) to CSS3 animations are <code>@keyframes</code> They tell an element what style it has at a given time.<br><br><code>@keyframes color_change{<br>  from { background-color: red; } <br>  to { background-color: purple; }<br>}</code><br><br><code>@keyframes</code> are where an animation is created. Think of it as a timeline where different styles are declared at different stages. Note: <code>color_change</code> is simply the name of the animation.<br><br>Let's change a square into a circle and back to a square again. Change the border-radius to 150px at 50%. Notice we are using percentages here rather than <code>to</code> and <code>from</code>. We'll talk about this next.",
"The percentages and <code>to</code> and <code>from</code> in the previous examples are the intervals telling the animation what style to render at a given time. Take a look below:<br><pre><code>@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { border-radius: 150px; }<br> 100% { border-radius: 0px; } <br>}</code><br><br><code>div{<br> width, height: 300px; <br> background-color: green; <br> animation-name: circle-ify; <br> animation-duration: 3s;<br>}</code></pre><br><code>animation-name</code> is how you attach an animation to an element, and <code>animation-duration</code> sets the time it takes the animation to run. So, at 0s (0%), the border-radius is 0px, at 1.5s (50% of the way through the animation) the border-radius is 150px, and then back to 0px for the end of the animation (100%). Assign the animation in the editor below and watch it fade!.",
"The <code>animation-timing-function</code> attribute allows for different speeds for the animation, and can take the following values.<ul id='timings'><li>linear</li><li>ease</li><li>ease-in</li><li>ease-out</li><li>ease-in-out</li><li>cubic-bezier</li></ul>Set <code>ease-in-out</code> as the timing function below to help the little blue guy out!",
"Of course there are more attributes than just <code>animation-timing-function</code>!<ul><li>animation-delay - delays the animation a set amount of seconds</li><li>animation-iteration-count - specifies how many times the animation will run. <code>infinite</code> will run the animation till the end of time!</li><li>animation-direction - sets the direction of the loop from start to end, end to start, or both using <code>alternate</code></li><li>animation-fill-mode - this tells which styles will be applied once the animation is finished</li></ul>",
"YOU WIN YAY!!!"]

const EDITOR = ["@keyframes color_change{<br>  from { background-color: red; } <br>  to { <input type='text' id='main-input'> }<br>}",
"@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { <input type='text' id='main-input'> }<br> 100% { border-radius: 0px;} <br>}",
"@keyframes fade{<br> to { opacity: 0 }<br>}<br><br>.pink-triangle{<br>  width, height: 0;<br>  border-left: 300px solid transparent;<br>  border-right: 300px solid transparent;<br>  animation-name: <input type='text' id='main-input'><br>  animation-duration: 3s<br>}",
".spinning-orange-thing {<br>  width, height: 300px;<br>  background-color: '#ff9900;<br>  border-radius: 50px;<br>  animation-name: rotate;<br>  animation-duration: 2s;<br>  animation-iteration-count: infinite;<br>  animation-timing-function: <input type='text' id='main-input'><br>}<br>@keyframes rotate {<br>  to { transform: (rotate(360deg))}<br>}",
""]

const SOLUTIONS = ["background-color:purple",
"border-radius:150px",
"fade",
"ease-in-out",
""]

const DIVS = ["<div id='level-0'></div>",
"<div id='level-1'></div>",
"<div id='level-2'></div>",
"<div id='level-3'><p>Linear</p><div id='a'></div><p>Ease</p><div id='b'></div><p>Ease-in</p><div id='c'></div><p>Ease-out</p><div id='d'></div><p>Ease-in-out</p><div id='e'></div><p>Cubic-Bezier</p><div id='f'></div></div>",
  ""]

class Game {

  constructor() {
    this.level = 4;
    this.titles = TITLES;
    this.lectures = LECTURES;
    this.editor = EDITOR;
    this.solutions = SOLUTIONS;
    this.divs = DIVS;
    this.won = false;
    this.checkSolution = this.checkSolution.bind(this);
  }

  start() {
    this.loadLevel();
    $("#main-submit").click(() => {
      this.checkSolution($("#main-input").val())
    });
    $(".css").on("keypress", '#main-input', (e) => {
      if (e.which === 13){
        this.checkSolution($("#main-input").val())
      }
    });
  }

  loadLevel() {
    $(".title").html(this.titles[this.level]);
    $(".lecture").html(this.lectures[this.level]);
    $(".editor-css").html(this.editor[this.level]);
    $(".level-div").html(this.divs[this.level]);
  }

  checkSolution(answer) {
    if (answer[answer.length - 1] === ";") {
      answer = answer.substring(0, answer.length - 1);
    }
    if (answer.replace(/\s+/g, '')  === this.solutions[this.level]) {

      // disable the button so the user cannot magically skip ahead
      $("#main-submit").prop('disabled', true);

      // append the correct animation to the div so that it triggers
      if (this.level === 3){
        $("#e").addClass("level-3-answer");
      }
      else {
        let currentLevel = "#level-" + this.level;
        $(currentLevel).addClass("level-" + this.level + "-answer");
      }

      // load level after animation has finished
      setTimeout(() => {
        this.level += 1;
        $("#main-submit").prop('disabled', false);
        this.loadLevel();
      }, 2900);


    }
    else {
      alert("hellur");
    }
  }
}

$(document).ready(function(){
 let game = new Game;
 game.start();
});
