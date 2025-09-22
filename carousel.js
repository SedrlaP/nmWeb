// carousel.js
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function getItemsPerView() {
      const width = window.innerWidth;
      if (width >= 1280) return 4; // xl
      if (width >= 1024) return 3;  // lg
      if (width >= 768) return 2;   // md
      return 1;                    // base
    }

    function updateCarousel() {
      const itemWidth = slides[0].offsetWidth;
      const itemsPerView = getItemsPerView();
      const maxIndex = Math.ceil(slides.length / itemsPerView) - 1;
      currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
      const offset = currentIndex * itemWidth * itemsPerView;
      track.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex++;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex--;
      updateCarousel();
    });

    window.addEventListener('resize', () => {
      updateCarousel();
    });

    // Initial render
    window.addEventListener('load', updateCarousel);


    