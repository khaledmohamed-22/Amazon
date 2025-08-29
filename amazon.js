document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const sliderItems = slider.querySelectorAll('.sl');
    if (sliderItems.length > 0) {
      const sliderWidth = sliderItems[0].offsetWidth;
      const sliderMargin = 10;

      function scrollSlider(direction) {
        slider.scrollLeft += direction * (sliderWidth + sliderMargin);
      }

      slider.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollSlider(e.deltaY < 0 ? -1 : 1);
      });

      const buttonsContainer = slider.parentElement.querySelector('.buttons');
      const prevButton = buttonsContainer.querySelector('.prevButton');
      const nextButton = buttonsContainer.querySelector('.nextButton');

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          scrollSlider(-1);
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          scrollSlider(1);
        });
      }
    } else {
      console.error('No slider items found');
    }
  });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('side-menu').style.left = '0';
});

document.getElementById('menu-close').addEventListener('click', function() {
  document.getElementById('side-menu').style.left = '-250px';
});






const images = [
  'images/back1.jpg',
  'images/back22.jpg',
  'images/back3.jpg'
];

let currentImageIndex = 0;

function updateBackgroundImage() {
  const backgroundSlider = document.getElementById('backgroundSlider');
  backgroundSlider.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateBackgroundImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateBackgroundImage();
}


updateBackgroundImage();
