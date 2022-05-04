function createRobot(x, y) {

    const moveUp = () =>  y+1 > 10 ? "error" : y+1 ;
    const moveDown = () =>  y-1 < 0 ? "error" : y-1;
    const moveLeft = () =>  x-1 < 0 ? "error" : x-1;
    const moveRight = () => x+1 > 10 ? "error": x+1;
    const getX = () => x;
    const getY = () =>y;

    if (x>10 || x<0 || y>10 || y<0){
        return "error"
    } else {
        return {
           getX:getX(),
           getY:getY(),
           moveUp:moveUp(),
           moveDown:moveDown(),
           moveLeft: moveLeft(),
           moveRight: moveRight(),
          // moveUp - incrementa y en 1
          // moveDown - decrementa y en 1.
          // moveLeft - decrementa x en 1.
          // moveRight - incrementa x en 1
          // getX - retorna x
          // getY - retorna y
       }
    }
  }

console.log(createRobot(5,7))
module.exports = createRobot;