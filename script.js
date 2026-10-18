// define html elements
const board =document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');

// Define game Variables
const gridSize=20
let snake = [{x:10, y:10}]
let food = generateFood();
let direction = 'right'
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted= false

// draw game map
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

//draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div',
            'snake');
            setPosition(snakeElement, segment);
            board.appendChild(snakeElement);
    });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set the position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//draw food function
function drawFood(){
    const foodElement=createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement)
}
 
//generate food
function generateFood() {
    const x= Math.floor(Math.random() * gridSize) +1;
    const y= Math.floor(Math.random() * gridSize) +1;
    return {x,y}
}

//moving snake
function move() {
    const head = {...snake[0]   };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head);
    //snake.pop();

    if (head.x == food.x && head.y == food.y) {
        food=generateFood();
        clearInterval(); // clear intervall
        gameInterval = setInterval(() => {
            move()
            draw()
        }, gameSpeedDelay);
    } else{
        snake.pop();
    }
}

// testing draw function
// draw()

//test moving
// setInterval(() => {
//    move();
//    draw(); 
// }, 200);

// Start game function
function startGame(){
    gameStarted = true;
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        //check colision
        draw();
    }, gameSpeedDelay);

}

// keypress listener
function handleKeyPress(event){
    if (
    ( !gameStarted && event.code == 'Space') ||
    ( !gameStarted && event.code == ' ')
    ) {
        startGame();
    } else{
        switch (event.key) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}