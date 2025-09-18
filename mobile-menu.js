const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');
  const openIcon = toggleBtn.querySelector('.menu-open-icon');
  const closeIcon = toggleBtn.querySelector('.menu-close-icon');

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) {
      mobileMenu.removeAttribute('hidden');
      overlay.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.setAttribute('hidden', '');
      overlay.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  overlay.addEventListener('click', () => {
    mobileMenu.setAttribute('hidden', '');
    overlay.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });