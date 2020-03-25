function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    } else {
        const para = document.querySelector(".unsupported");
        para.textContent = `Your browser does not support HTML5 Canvas`;
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.fillStyle = "rgb(255,101,2)";
    ctx.fillRect(centerX - 140, centerY - 90, 300, 200);
    ctx.clearRect(centerX - 130, centerY - 80, 280, 180);
    ctx.strokeRect(centerX - 150, centerY - 100, 315, 215);

}

draw();