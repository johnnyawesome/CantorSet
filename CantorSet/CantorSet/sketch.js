/// <reference path="../TSDef/p5.global-mode.d.ts" />

//Change size to change the length of the initial Line
let size = 600;

function setup() {
  createCanvas(800, 500, P2D);
  background(0);
  stroke(255);
  strokeWeight(2);

  translate(100, 100);

  generateCantorSet(size);
}

function draw() {
}

function generateCantorSet(size) {


  if (size > 2) {

    size /= 3;

    //Left Side
    push()
    translate(0, +50);
    line(0, 0, size, 0);
    generateCantorSet(size);
    pop();

    //Right Side
    push()
    translate(size * 2, +50);
    line(size, 0, -size, 0);
    generateCantorSet(size);
    pop();

  }
}