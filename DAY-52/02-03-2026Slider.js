let index = 1;
const slideImage = document.getElementById("slideImage");

function showSlide() {
  switch (index) {
    case 1:
      slideImage.src = "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80";
      break;

    case 2:
      slideImage.src = "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80";
      break;

    case 3:
      slideImage.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80";
      break;

    case 4:
      slideImage.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80";
      break;

    case 5:
      slideImage.src = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80";
      break;
  }
}

function nextSlide() {
  index++;
  if (index > 5) {
    index = 1;
  }
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 1) {
    index = 5;
  }
  showSlide();
}

setInterval(nextSlide, 4000);
