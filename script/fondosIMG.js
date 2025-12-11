const bg = document.getElementById("backgroundIMG");

const photos = [
    "../img/img1.jpg",
    "../img/img2.jpg",
    "../img/img3.jpg",
    "../img/img4.jpg",
    "../img/img5.jpg",
    "../img/img6.jpg",
    "../img/img7.jpg",
    "../img/img8.jpg",
    "../img/img9.jpg",
    "../img/img10.jpg",
];

function changeBackground() {

    bg.classList.add("fade");

    setTimeout(() => {

        const random = Math.floor(Math.random() * photos.length);
        bg.style.backgroundImage = `url(${photos[random]})`;

        // fade in
        bg.classList.remove("fade");

    }, 1800); 
}

changeBackground();
setInterval(changeBackground, 10000); 
