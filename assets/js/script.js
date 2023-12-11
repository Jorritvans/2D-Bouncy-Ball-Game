/**
 *Canvas and Context setup
 */
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

/**Ball variables */
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 90;
let dx = 2;
let dy = -2;
let offsetBottom = 30;

/**creating the paddle */
let paddleHeight = 12;
let paddleWidth = 72;
let rightPressed = false;
let leftPressed = false;

/**Adding the Brick variables */
let currentColumnNums = window.innerWidth - 30 < 640 ? 9 : window.innerWidth - 30 < 1024 ? 15 : 20;
let BRICK_CONSTANTS = { rowCount: currentColumnNums, columnCount: 3, width: 65, height: 20, padding: 10, offsetTop: 30, offsetLeft: 30 };