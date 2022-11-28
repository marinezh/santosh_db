const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext('2d')
console.log(canvas);
console.log(ctx);

let gameOn = false;
const cellSize = 16;
let tileCount=20;
let tileSize=18;
let headX=10;
let headY=10;

let apple = [5, 1];
let snake = [
    [20,20],
    [20,21],
    [20,22],
]
let velocity = [1,0]


function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(apple[0]*cellSize,  apple[1]*cellSize, cellSize, cellSize)
   
}
drawApple()

function drawSnake() {
 ctx.fillStyle = "black";
    snake.forEach(cell => {
        
        ctx.fillRect(cell[0]*cellSize,cell[1]*cellSize, cellSize, cellSize)
    });
}
drawSnake()

// function drawGame() {
//     let speed = 7
//     clearScreen();
//     drawSnake()
//     drawApple()
//     changeSnakePosition()

// setTimeout(drawGame, 1000/speed);
// }

// function clearScreen(){
// // ctx.fillStyle = '#d8d8e4'; // make screen black
// ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height
// }
// drawGame();
 

// document.body.addEventListener('keydown', keyDown)

// function keyDown(event) {
  
//     if(event.keyCode==38){  //up
//         velocity=[0, -1]; //move one tile up
//     }
//     if(event.keyCode==40){//down
//         velocity=[0, 1];//move one tile down
//     }

//     if(event.keyCode==37){//left
//         velocity=[-1, 0] //move one tile left
//     }

//     if(event.keyCode==39){//right
//         velocity=[1, 0]//move one tile right
//     }
//     if(event.keyCode==81){//right
//         gameOn = false//move one tile right
//         gameOver()
//     }
//     if(event.keyCode==83){//right
//         gameOn = true//move one tile right
//         drawGame()
//     }
// q


// }

// function changeSnakePosition() {
//     const head = snake[snake.length -1]
//     const newHead = [head[0] + velocity[0], head[1] + velocity[1]];
//     snake.push(newHead);
//     snake.shift();

// }
// // changeSnakePosition()

// if (gameOver) {
//     gameOn=false
//     ctx.fillStyle="white";
//     ctx.font="50px verdana";
//     ctx.fillText("Game Over! ", canvas.clientWidth/6.5, canvas.clientHeight/2);//position our text in center
//    }