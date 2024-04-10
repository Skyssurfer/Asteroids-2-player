function end2(){
		fill (50, 50, 255);
  textSize(100);
    text('Game Over', width / 2 , height / 2 - 100);
  	text("BLUE WINS", width / 2, height / 2 );
  textSize(25);
	text('Press F5 to play again', width / 2, height / 2 + 50);

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
 
  for (var e = 0; e < asteroids2.length; e++) {
    asteroids2[e].render();
    asteroids2[e].update();
    asteroids2[e].edges();
  }
  
  for (var b = 0; b < asteroids3.length; b++) {
    asteroids3[b].render();
    asteroids3[b].update();
    asteroids3[b].edges();
}
}