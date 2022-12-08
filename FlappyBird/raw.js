//*From "javascript check collision between bird and obstacle function flappy bird" prompt

import p5 from 'p5';

const bird = new p5.Rectangle(100, birdY, 50, 50);
const obstacleTop = new p5.Rectangle(obstacleX, 0, 50, obstacleY);
const obstacleBottom = new p5.Rectangle(
  obstacleX,
  obstacleY + obstacleGap,
  50,
  canvas.height - obstacleY - obstacleGap
);

if (bird.intersects(obstacleTop) || bird.intersects(obstacleBottom)) {
  // Handle the collision here
}
