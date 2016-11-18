## Intro to CSS3 Animations

### Background
With CSS3 came animations which allow you to rotate, fade, twist, shift and just about any other animation you can think of without the use of Javascript. They can seem a little daunting at first so I wanted to create this small game in order to help coders learn this handy animations.

### Functionality and MVP
With this small game, users will be able to:
- progress through a series of 10 levels each with a mini lesson and coding exercise
- each exercise will have an input field in which the user must enter the correct code to create the animation
- the user won't be able to progress to the next level without entering the correct solution for the current level first

### Wireframes
The app will consist of a single page which scrolls vertically. Each frame will have a mini lesson in plain text, a text field right below that for input. And an area to the right that will display the animation.
![](wireframe.png)

### Architecture and Technologies
A single HTML file basically acts as a template with blank fields for the lesson title, the lecture itself, the editor which will house an <input> field, and then the display with a basic div to the right of that.

A Game class keeps track of the current level the player is on starting at 0. Arrays for the titles, lectures, editor code, the display div, and the solution will also be store in the class. Upon loading, a level uses jquery's .html() method to load the appropriate elements into the HTML template by indexing into the previously mentioned arrays using the current level instance variable as its index.

The lesson and problem solution are heavily guided. I opted for this approach because rendering user-input on the fly for the animations would have required either manipulation of the CSS Object Model or faking the animations using jQuery's .animate method. I opted to simply string match the solution using regex to take out any whitespace because of the short timeframe I had. When the user inputs the correct solution, the level variable is incremented by one and the level is re-rendered when the user clicks the continue button. This makes it super easy to add new levels as all it takes is adding strings to the 5 arrays.

### Implementation Timeline
**Day 1** Design the "curriculum" of the game with all 10 levels, their problems and solutions all laid out and create intro page.

**Day 2** Levels 1-4

**Day 3** Levels 5-7

**Day 4** Levels 8-10

### Bonus Features
At the moment, I'm sort of cheating when it comes to checking the user's solutions. I'm parsing the string and seeing if it matches the answer and if it does, I'll append the class that actually contains the animation to that element which will then trigger the animation.

Basically, the user's input won't actually be rendered on the fly. Depending on how implementation goes, I may be able to do some extreme parsing and render the user's input as they are typing, but only if time allows.
