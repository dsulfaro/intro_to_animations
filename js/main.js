import { TITLES, LECTURES, EDITOR, SOLUTIONS, DIVS } from './levels';

class Game {

  constructor() {
    this.level = 0;
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
  }

  loadLevel() {
    debugger
    $(".title").html(this.titles[this.level]);
    $(".lecture").html(this.lectures[this.level]);
    $(".editor-css").html(this.editor[this.level]);
    $(".level-div").html(this.divs[this.level]);
  }

  checkSolution(answer) {
    if (answer.replace(/\s+/g, '')  === this.solutions[this.level]) {
      $("#level-div").children().first().addClass("level-1-answer");
      window.setInterval(() => {
        this.level += 1;
        //if (this.level === 2){
        //}
      }, 3500);
    }
    else {
      alert(answer.replace(/\s+[;]/g, ''));
    }
  }
}

$(document).ready(function(){
 let game = new Game;
 game.start();
});
