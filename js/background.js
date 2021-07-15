const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `./img/${chosenImage}`;

document.body.appendChild(bgimg);
