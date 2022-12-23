canvas = document.getElementById("lienzo");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", dibujar)
function dibujar(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X = " + mouseX + " ,Y =  " + mouseY);
    circulo(mouseX, mouseY)
}
function circulo(x, y, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, 2 * Math.PI);
    ctx.stroke();
}
function limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.rect(130, 130, 500, 300);
ctx.stroke()
circulo(215, 250, "blue")
circulo(381, 250, "black")
circulo(547, 250, "red")
circulo(298, 320, "orange")
circulo(464, 320, "green")