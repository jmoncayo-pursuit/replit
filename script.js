const button = document.querySelector(".btn");

let dx = 5; //horizontal speed
let dy = 5; //vertical speed

button.addEventListener("click", () => {
  const circle = generateCircle();
  moveCircle(circle); //moves circle
});

function generateCircle() {
  x = Math.random() * window.innerWidth;
  y = Math.random() * (window.innerHeight -100) + 100;
  
  const circle = document.createElement("div");
  circle.style.borderRadius = "50%";
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.position = "absolute";
  circle.style.backgroundColor = "red";
  
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  document.body.appendChild(circle);  
  return circle;
}

function moveCircle(circleObject) {
  setInterval(() => {
    //updates poition of circle
    x += dx;
    y += dy;
    circleObject.style.left = x + "px";
    circleObject.style.top = y + "px";

    //if circle hits edge it reverses
    if (x + circleObject.offsetWidth > window.innerWidth || x < 0) {
      dx = -dx;
    }
    if (y + circleObject.offsetHeight > window.innerHeight || y < 0) {
      dy = -dy;
    }
  }, 20); //updates ever 20ms
}


