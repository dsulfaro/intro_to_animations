const TITLES = ["Welcome to 'I Can Animate and So Can You!'",
                       "@keyframes Are Your Friend!",
                     "Telling the Thing to Animate the Stuff",
                   "Timing Is Everything",
                 "I Attribute My Success to Attributes",
               "Teamwork Makes the Dream Work",
             "Cubic-Bezier: A Memoir",
           ""]

const LECTURES = ["Are you tired of using Javascript or one of its libraries to animate elements on your site? Do you wish there were a better way?<br><br> Well hold onto your butts.<br><br> CSS3 Animations save the day! Below is an example of a simple animation. See if you can change the background-color from red to purple. Fret not, we will break down what is happening in a moment.",
"The key component (see what I did there?) to CSS3 animations are <code class='highlight'>@keyframes</code> They tell an element what style it has at a given time.<br><br><code>@keyframes color_change{<br>  from { background-color: red; } <br>  to { background-color: purple; }<br>}</code><br><br><code class='highlight'>@keyframes</code> are where an animation is created. Think of it as a timeline where different styles are declared at different stages. Note: <code class='highlight'>color_change</code> is simply the name of the animation.<br><br>Let's change a square into a circle and back to a square again. Change the <code class='highlight'>border-radius</code> to <code class='highlight'>150px</code> at <code class='highlight'>50%</code>. Notice we are using percentages here rather than <code class='highlight'>to</code> and <code class='highlight'>from</code>. We'll talk about this next.",
"The percentages and <code class='highlight'>to</code> and <code class='highlight'>from</code> in the previous examples are the intervals telling the animation what style to render at a given time. Take a look below:<br><pre><code>@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { border-radius: 150px; }<br> 100% { border-radius: 0px; } <br>}</code><br><br><code>div{<br> width, height: 300px; <br> background-color: green; <br> animation-name: circle-ify; <br> animation-duration: 3s;<br>}</code></pre><br><code class='highlight'>animation-name</code> is how you attach an animation to an element, and <code class='highlight'>animation-duration</code> sets the time it takes the animation to run. So, at 0s (0%), the border-radius is 0px, at 1.5s (50% of the way through the animation) the border-radius is 150px, and then back to 0px for the end of the animation (100%). Assign the <code class='highlight'>fade</code> animation to the triangle in the editor below and watch it fade!.",
"The <code class='highlight'>animation-timing-function</code> attribute allows for different speeds for the animation, and can take the following values.<ul id='timings'><li>linear</li><li>ease</li><li>ease-in</li><li>ease-out</li><li>ease-in-out</li><li>cubic-bezier</li></ul>Set <code class='highlight'>ease-in-out</code> as the timing function below to help the little blue guy out!",
"Of course there are more attributes than just <code class='highlight'>animation-timing-function</code>!<ul><li><code class='highlight'>animation-delay</code> - delays the animation a set amount of seconds</li><li><code class='highlight'>animation-iteration-count</code> - specifies how many times the animation will run. <code class='highlight'>infinite</code> will run the animation till the end of time!</li><li><code class='highlight'>animation-direction</code> - sets the direction of the loop from start to end, end to start, or both using <code class='highlight'>alternate</code></li><li><code class='highlight'>animation-fill-mode</code> - this tells which styles will be applied once the animation is finished - if you want the animation styles to stick, specify with <code class='highlight'>forwards</code></li></ul>There's even a shorthand for writing all these properties out. Instead of writing:<code><pre>.triforce {<br>  animation-name: blink<br>  animation-duration: 0.05s<br>  animation-delay: 0.5s<br>  animation-iteration-count: infinite<br>  animation-timing-function: linear<br>  animation-direction: alternate<br>}</pre></code>You can put all the values in one line after the attribute <code class='highlight'>animation</code>. In the editor below, put all the values of the above code one after the other. No commas needed!",
"Now I know making things blink or fade or rotate is SUPER cool, but what if I told you that you can <strong>combine</strong> multiple animations?<br><br>Mind. Blown.<br><br>...well. Not combine per se. More like assigning two animations to the same element. At any rate, the following animation aims to change the color every time the square rotates:<br><code><pre>@keyframes change-color {<br>  0% {background-color: #990000; }<br>  20% { background-color: #cc7a00; }<br>  40% { background-color: #006600; }<br>  60% { background-color: #0033cc; }<br>  80% { background-color: #660066; }<br>  100% { background-color: #990000; }<br>}</pre></code>Below, attach this animation to the element with an <code class='highlight'>animation-duration</code> of 5s. Notice the animations are separeated by a comma. <br><br>Hint; it's gonna look awfully like the animation that's already there with only two fields different. <br>Hint hint: it's the the first two fields. <br>Hint hint hint: put literally the same code as the line above it but with the word <code class='highlight'>change-color</code> instead of <code class='highlight'>rotation</code> and <code class='highlight'>5s</code> rather than <code class='highlight'>1s</code>.",
"A note about the cubic-bezier <code class='highlight'>animation-timing-function</code>. This is a special function that allows us to specify the speed, acceleration, and decceleration of the animation by taking 4 values: x1, y1, x2, y2. Bascially, it allows for more elastic or bouncier animations.<br><br>Now if you're (lazy) like me, calculating and experimenting with these values can seem tiresome and daunting. For those mathmatically inclined, you can <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function'>read the documentation</a>, but for the rest of us, handy tools like <a target='_blank' href='https://matthewlein.com/ceaser/'>this</a> exist where you can simply drag around two handles and receive instant feedback on the type of animation it creates in real time and even receive the code to make that animation a (virtual) reality!<br><br>Neato!!!<br><br>The ball to the right has a simple, <code class='highlight'>linear</code> timing function. Boring. Change the timing function below to <code class='highlight'>cubic-bezier(0.975, 0.000, 0.915, 0.990)</code> to watch it bounce up and down!",
"YOU WIN YAY!!!"]

const EDITOR = ["@keyframes color_change {<br>  from { background-color: red; } <br>  to { <input type='text' id='main-input'> }<br>}",
"@keyframes circle-ify{<br>  0% { border-radius: 0px; } <br>  50% { <input type='text' id='main-input'> }<br> 100% { border-radius: 0px;} <br>}",
"@keyframes fade {<br> to { opacity: 0 }<br>}<br><br>.pink-triangle{<br>  width, height: 0;<br>  border-left: 300px solid transparent;<br>  border-right: 300px solid transparent;<br>  animation-name: <input type='text' id='main-input'><br>  animation-duration: 3s<br>}",
".spinning-blue-square {<br>  width, height: 300px;<br>  background-color: '#ff9900;<br>  border-radius: 50px;<br>  animation-name: rotate;<br>  animation-duration: 2s;<br>  animation-iteration-count: infinite;<br>  animation-timing-function: <input type='text' id='main-input'><br>}<br>@keyframes rotate {<br>  to { transform: (rotate(360deg))}<br>}",
".triforce {<br>  animation: <input type='text' id='main-input'><br>}<br><br>@keyframes blink {<br>  to { opacity: 0 }<br>}",
".my_favorite_square{<br>  width, height: 300px;<br>  background-color: #990000;<br>  animation: rotation 1s 0s infinite ease normal,<br>             <input type='text' id='main-input'><br>}",
"@keyframes shrink {<br>  to { width: 50px;<br>       height: 50px;<br>       background-color #808000;<br>}}<br>.bouncy-ball {<br>  /* Shape and color CSS */<br>  animation: shrink 1s 0s<br>             infinite <input type='text' id='main-input'> alternate<br>}",
""]

const SOLUTIONS = ["background-color:purple",
"border-radius:150px",
"fade",
"ease-in-out",
"blink0.05s0.5sinfinitelinearalternate",
"change-color5s0sinfiniteeasenormal",
"cubic-bezier(0.975,0.000,0.915,0.990)",
""]

const DIVS = ["<div id='level-0'></div>",
"<div id='level-1'></div>",
"<div id='level-2'></div>",
"<div id='level-3'><p>Linear</p><div id='a'></div><p>Ease</p><div id='b'></div><p>Ease-in</p><div id='c'></div><p>Ease-out</p><div id='d'></div><p>Ease-in-out</p><div id='e'></div><p>Cubic-Bezier</p><div id='f'></div></div>",
"<div id='level-4'><div id='one'></div><div id='two'></div><div id='three'></div></div>",
"<div id='level-5' class='level-5-rotation'></div>",
"<div id='level-6' class='bounce'></div>",
"<div id='level-7''></div>",
""]

class Game {

  constructor() {
    this.level = 7;
    this.titles = TITLES;
    this.lectures = LECTURES;
    this.editor = EDITOR;
    this.solutions = SOLUTIONS;
    this.divs = DIVS;
    this.won = false;
    this.checkSolution = this.checkSolution.bind(this);
    this.advanceLevel = this.advanceLevel.bind(this);
    this.applySolution = this.applySolution.bind(this);
  }

  activateContinue() {
    $('#main-continue').addClass("fade");
    setTimeout(() => {$('#main-continue').css("background-color", "#48ACF0")}, 500);
    $('#main-continue').prop("disabled", false);
  }

  advanceLevel() {
    this.level += 1;
    this.loadLevel();
  }

  applySolution() {
    // append the correct animation to the div so that it triggers
    if (this.level === 3){
      // level 3 has nested divs so i need to treat it specially
      $("#e").addClass("level-3-answer");
    }
    // all other levels
    else {
      let currentLevel = "#level-" + this.level;
      $(currentLevel).removeClass();
      $(currentLevel).addClass("level-" + this.level + "-answer");
    }
    this.activateContinue();
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
    $("#main-continue").click(() => {
      this.advanceLevel();
    });
  }

  loadLevel() {
    $(".title").html(this.titles[this.level]);
    $(".lecture").html(this.lectures[this.level]);
    $(".editor-css").html(this.editor[this.level]);
    $(".level-div").html(this.divs[this.level]);
    $('#main-continue').css("background-color", "grey");
    $('#main-continue').prop("disabled", true);
  }

  checkSolution(answer) {

    // not gonna be picky about the semicolon -- take it off if it's there
    if (answer[answer.length - 1] === ";") {
      answer = answer.substring(0, answer.length - 1);
    }

    // if the user has the right answer -- apply the animation
    if (answer.replace(/\s+/g, '')  === this.solutions[this.level]) {
      this.applySolution();
    }
    else {
      alert("wrong: " + this.solutions[this.level]);
    }
  }
}

$(document).ready(function(){
 let game = new Game;
 game.start();
});
