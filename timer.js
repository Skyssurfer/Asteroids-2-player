function timeIt() {  if (timerValue >= 0) {    
  timerValue++;  
  } 
}
function timer(){
noStroke();
      fill(255);
      textAlign(CENTER);
      textSize(50);
    text( timerValue, width / 2, 50);
  
  if (timerValue == 15) {
          for (var j = asteroids.length - 1; j >= 0; j--) {
          if (asteroids[j]) {
            if (asteroids[j].r > 10) {
            var newAsteroids = asteroids[j].breakup();
            asteroids = asteroids.concat(newAsteroids);
              console.log('splode');
          }
          break;
        }
       } 
  }
  }