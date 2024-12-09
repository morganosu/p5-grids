const canvasSize = 1000;
let squareCount = 10;
let squareSize = canvasSize / squareCount;

let texture1, texture2, texture3, texture4;

function preload() {
  texture1 = loadImage('/textures/texture-trans1.png');
  texture2 = loadImage('/textures/texture-trans2.png');
  texture3 = loadImage('/textures/texture-trans3.png');
  texture4 = loadImage('/textures/texture-trans4.png');
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(20);
  noLoop();
}

function draw() {
  background(255);
  let texturesArray = [texture1, texture2, texture3, texture4,]
  for (let column = 0; column<squareCount; column++){
    for (let row = 0; row<squareCount; row++){
      tint(random(0,255),random(0,255),random(0,255));
      randomTexture = texturesArray[int(random(0,3))];
      let offset = squareSize*0.04
      image(randomTexture,squareSize*column+random(-offset,offset),squareSize*row+random(-offset,offset),squareSize*0.98,squareSize*0.98)
    }
  }
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
  noLoop();
  redraw();
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  loop();
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
  noLoop();
});

//ChatGPT code from here on down
let slider = document.getElementById("squareSlider");
let sliderValue = document.getElementById("sliderValue");

// Update the displayed value whenever the slider changes
slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value;
  squareCount = int(slider.value);
  squareSize = canvasSize / squareCount;
  redraw();
});