/**
 *Canvas and Context setup
 */
var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth - 30;
ctx.canvas.height = window.innerHeight - 50;

/**Ball variables */
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 90;
var dx = 2;
var dy = -2;
var offsetBottom = 30;

/**Paddle & movement variable variables*/
var rightPressed = false;
var leftPressed = false;
var PADDLE_VARS = { height: 10, width: 65, x: (canvas.width - 65) / 2 };