const cards = document.querySelectorAll(".card");
let index = 0;

function updateCarousel() {

    cards.forEach(card => {
        card.classList.remove("center", "left", "right", "far-left", "far-right");
    });

    const total = cards.length;

    const center = index;
    const left = (index - 1 + total) % total;
    const right = (index + 1) % total;
    const farLeft = (index - 2 + total) % total;
    const farRight = (index + 2) % total;

    cards[center].classList.add("center");
    cards[left].classList.add("left");
    cards[right].classList.add("right");
    cards[farLeft].classList.add("far-left");
    cards[farRight].classList.add("far-right");
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % cards.length;
    updateCarousel();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
};

updateCarousel();

const bg2 = document.getElementById("background");


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

function changeBackground2() {

    bg2.classList.add("fade");

    setTimeout(() => {

        const random = Math.floor(Math.random() * photos.length);
        bg2.style.backgroundImage = `url(./img/${photos[random]})`;


        bg2.classList.remove("fade");

    }, 1800);
}
changeBackground2();
setInterval(changeBackground2, 10000); 