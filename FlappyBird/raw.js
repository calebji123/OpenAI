const canvas = document.getElementById('game-canvas');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

// Set up canvas and context
const ctx = canvas.getContext('2d');

// Set up game objects
const bird = {
  x: 50,
  y: 50,
  width: 40,
  height: 30,
};
const pipes = [
  // Add pipes here
];

// Set up game state
let isPlaying = false;
let score = 0;

// Set up game loop
function update() {
  // Update game objects

  // Check for collisions

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

// Draw background
function drawBackground() {
  // Draw background here
}

// Draw bird
function drawBird() {
  // Draw bird here
}

// Draw pipes
function drawPipes() {
  // Draw pipes here
}

// Draw score
function drawScore() {
  // Draw score here
}

// Handle start button click
startButton.addEventListener('click', () => {
  isPlaying = true;
  update();
});

// Handle restart button click
restartButton.addEventListener('click', () => {
  isPlaying = false;
  // Reset game objects and state
  score = 0;
  bird.x = 50;
  bird.





//*From "flappy bird add pipes code javascript" prompt

// Set up game objects
const bird = {
  x: 50,
  y: 50,
  width: 40,
  height: 30,
};
const pipes = [
  {
    x: 300,
    y: 0,
    width: 50,
    height: 200,
    speed: 5,
  },
  {
    x: 600,
    y: 400,
    width: 50,
    height: 200,
    speed: 5,
  },
];

// Set up game loop
function update() {
  // Update game objects
  for (const pipe of pipes) {
    pipe.x -= pipe.speed;
  }

  // Check for collisions

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

// Draw pipes
function drawPipes() {
  for (const pipe of pipes) {
    ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
  }
}


// *From "flappy bird javascript check collision function" prompt
// Set up game objects
const bird = {
  x: 50,
  y: 50,
  width: 40,
  height: 30,
};
const pipes = [
  // Add pipes here
];

// Set up game state
let isPlaying = false;
let score = 0;

// Set up game loop
function update() {
  // Update game objects

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
      (bird.y <= pipe.y + pipe.height || bird.y + bird.height >= pipe.y)
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
  // Draw background here
}

// Draw bird
function drawBird() {
  // Draw bird here
}

// Draw pipes
function drawPipes() {
  // Draw pipes here
}

// Draw score
function drawScore() {
  // Draw score here
}



// *From "flappy bird javascript draw functions" prompt
// Set up game objects
const bird = {
  x: 50,
  y: 50,
  width: 40,
  height: 30,
};
const pipes = [
  // Add pipes here
];

// Set up game state
let isPlaying = false;
let score = 0;

// Set up game loop
function update() {
  // Update game objects

  // Check for collisions

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
    ctx.fillStyle = 'green';
    ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
  }
}

// Draw score
function drawScore() {
  ctx.fillStyle = 'black';
  ctx.font = '16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`Score: ${score}`, canvas.width / 2, 20);
}


