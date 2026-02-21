
// HERO BACKGROUND SLIDER

let heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

function showHeroSlide(index) {
    heroSlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    heroSlides[index].classList.add("active");
}

// every 5 seconds
setInterval(() => {
    heroIndex++;

    if (heroIndex >= heroSlides.length) {
        heroIndex = 0;
    }

    showHeroSlide(heroIndex);
}, 5000);

//book a table
function goToPage() {
    window.location.href="ReservationsPage.html";
}

//scroll arrow

const scrollBtn = document.getElementById("scrollTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});