const bg = document.getElementById("backgroundIMG");

const photos = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
];

function changeBackground() {

    bg.classList.add("fade");

    setTimeout(() => {

        const random = Math.floor(Math.random() * photos.length);
        bg.style.backgroundImage = `url(/img/${photos[random]})`;


        bg.classList.remove("fade");

    }, 1800);
}

changeBackground();
setInterval(changeBackground, 10000); 
