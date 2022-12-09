const canvas = document.getElementById('game-canvas');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
// Set up canvas and context
const ctx = canvas.getContext('2d');

// Set up game objects
const bird = {
  x: 50,
  y: 300,
  width: 40,
  height: 30,
  speed: 80,
  gravity:5,
};
const pipes = [
   {
      startX:300,
      startY: 0,
     x: 300,
     y: 0,
     width: 50,
     gap: 300,
     gapPosition: Math.random() * (canvas.height - 200),
     speed: 5,
   },
   {
      startX:600,
      startY: 0,
     x: 600,
     y: 0,
     width: 50,
     gap: 300,
     gapPosition: Math.random() * (canvas.height - 200),
     speed: 5,
   },
 ];

// Set up game state
let isPlaying = false;
let score = 0;

// Set up game loop
function update() {
  // Update game objects
   bird.y += bird.gravity

  for (const pipe of pipes) {
   pipe.x -= pipe.speed;
   // Update score if bird passes pipe
   if (pipe.x + pipe.width < bird.x && !pipe.passed) {
      score += 1;
      pipe.passed = true;
    }

   // Return pipe to right side of screen if it passes left edge
   if (pipe.x + pipe.width < 0) {
      pipe.x = canvas.width;
      pipe.gapPosition = Math.random() * (canvas.height - 200)
      pipe.passed = false
    }
 }

  // Check for collisions
  if (checkCollisions()) {
   isPlaying = false;
 }

  // Draw game
  drawBackground();
  drawBird();
  drawPipes();
  drawScore();

  // Repeat
  if (isPlaying) {
    requestAnimationFrame(update);
  }
}

// Check for collisions
function checkCollisions() {
   for (const pipe of pipes) {
     // Check for collision with top and bottom of pipe
     if (
       (bird.x + bird.width >= pipe.x && bird.x <= pipe.x + pipe.width) &&
       (bird.y <= pipe.gapPosition || bird.y + bird.height >= pipe.gapPosition + pipe.gap)
     ) {
       return true;
     }
   }
 
   // Check for collision with top and bottom of screen
   if (bird.y < 0 || bird.y + bird.height > canvas.height) {
     return true;
   }
 
   return false;
 }

// Draw background
function drawBackground() {
   ctx.fillStyle = 'skyblue';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
 }
 
 // Draw bird
 function drawBird() {
   ctx.fillStyle = 'yellow';
   ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
 }
 
// Draw pipes
function drawPipes() {
   for (const pipe of pipes) {
     ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.gapPosition);
     ctx.fillRect(
       pipe.x,
       pipe.gapPosition + pipe.gap,
       pipe.width,
       canvas.height - pipe.gapPosition - pipe.gap
     );
   }
 }
 
 // Draw score
 function drawScore() {
   ctx.fillStyle = 'black';
   ctx.font = '16px sans-serif';
   ctx.textAlign = 'center';
   ctx.fillText(`Score: ${score}`, canvas.width / 2, 20);
 }

// Handle start button click
startButton.addEventListener('click', () => {
   isPlaying = true;
   score = 0;
   bird.x = 50;
   bird.y = 300;
   pipes.forEach((pipe) => {
     pipe.x = pipe.startX;
     pipe.y = pipe.startY;
     pipe.gapPosition = Math.random() * (canvas.height - 200);
   });
   update();
});

// Handle restart button click
restartButton.addEventListener('click', () => {
   isPlaying = true;
   score = 0;
   bird.x = 50;
   bird.y = 300;
   pipes.forEach((pipe) => {
     pipe.x = pipe.startX;
     pipe.y = pipe.startY;
   });
   update();
 });

// Handle space bar press
window.addEventListener('keydown', (event) => {const callback = {
   "ArrowUp"    : () => { bird.y -= bird.speed;},
}[event.key]
callback?.()});