// carousel.js
    const images = [
            'media/nehty1.webp',
            'media/nehty4.webp',
            'media/nehty2.webp',
            'media/nehty5.webp',
            'media/nehty3.webp',
            'media/nehty6.webp',
            'media/nehty7.webp',
            'media/nehty9.webp',
            'media/nehty10.webp',
            'media/nehty11.webp',
            'media/nehty12.webp',
            'media/nehty13.webp',
            'media/nehty14.webp',
            'media/nehty15.webp',
            'media/nehty16.webp',
        ];

        const carouselTrack = document.getElementById('carousel-track');

  images.forEach(src => {
    const item = document.createElement('div');
    item.className = 'carousel-item w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 flex justify-center flex-shrink-0';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Fotka nehtů';
    img.loading = 'lazy';
    img.className = 'w-56 h-64 rounded-2xl';
    
    item.appendChild(img);
    carouselTrack.appendChild(item);
  });



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

    
    