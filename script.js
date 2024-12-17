const openbtn = document.querySelector('.menu-toggle');
const closebtn = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');

openbtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});
closebtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, // Default: show 2 cards
    spaceBetween: 20, // Space between cards
    loop: true,       // Infinite loop
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Breakpoints for responsiveness
    breakpoints: {
      600: { // If screen width is >= 600px
        slidesPerView: 2, // Show 2 cards
      },
      0: { // If screen width is < 600px
        slidesPerView: 1, // Show only 1 card
      }
    }
  });
  