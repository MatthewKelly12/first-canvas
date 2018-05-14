let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// fillRect(x, y, width, height);

c.fillStyle = "red";
c.fillRect(200, 100, 100, 100);
c.fillStyle = "pink";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "blue";
c.fillRect(600, 100, 100, 100);
c.fillStyle = "purple";
c.fillRect(800, 100, 100, 100);

// Line, creating a path and where to moveTo(x,y)

c.beginPath();
c.moveTo(50, 50);
c.lineTo(100, 80);
c.lineTo(400, 25);
c.lineTo(50, 100);
c.strokeStyle = "blue";
c.stroke();

// arch c.arch(x, y, r, start angle, end angle, counter clockwise)
// start new path or line will start from previous path

c.beginPath();
c.strokeStyle = "yellow";
c.arc(200, 500, 80, 0, Math.PI *2, false);
c.stroke();

for (let i = 0; i < 30; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    c.beginPath();
    c.strokeStyle = "yellow";
    c.arc(x, y, 80, 0, Math.PI *2, false);
    c.stroke();
}

for (let i = 0; i < 4; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    c.fillStyle = "red";
    c.fillRect(x, y, 100, 100);
    c.fillStyle = "pink";
    c.fillRect(x, x, 100, 100);
    c.fillStyle = "blue";
    c.fillRect(x, y, 100, 100);
    c.fillStyle = "purple";
    c.fillRect(x, y, 100, 100);
}

c.beginPath();
c.moveTo(250, 700);
c.lineTo(350, 800);
c.lineTo(450, 900);
c.lineTo(550, 600);
c.lineTo(150, 400);
c.strokeStyle = "blue";
c.stroke();

c.beginPath();
c.moveTo(50, 50);
c.lineTo(100, 80);
c.lineTo(400, 25);
c.lineTo(50, 100);
c.strokeStyle = "blue";
c.stroke();


