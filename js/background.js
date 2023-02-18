const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

// pick a random img from the images array
const chosenImg = images[Math.floor(Math.random() * images.length)];

// add the chosen image into an html element
const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${chosenImg};`;
document.body.appendChild(backgroundImg);
// --> same as: <img src="" /> in html
