const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 190;

ctx.moveTo(centerX, centerY);
ctx.lineTo(centerX, centerY);
ctx.fill();