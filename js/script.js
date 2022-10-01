window.addEventListener('load', () => {
  //scroll animations
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('fadeout');
  setTimeout(() => preloader.style.display = 'none', 500);
  AOS.init();
})

// nav toggle 
const toggler = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

toggler.addEventListener('click', () => {
  toggleNav();
  AOS.init();
});

function toggleNav() {
  nav.classList.toggle('open');
  toggler.classList.toggle('move');
}

document.onclick = (e) => {
  if(e.target.closest('.nav-link')) {
    toggleNav();
  };
}

// header toggle
const header = document.querySelector('header');
window.onscroll = () => {
  if (this.pageYOffset > 60) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

//Menu group

const menuGroup = document.querySelector('.menu-btn-group');

menuGroup.addEventListener('click', e => {
  if (e.target.classList.contains('menu-btn') && !e.target.classList.contains('active')) {
    document.querySelector('.menu-btn.active').classList.remove('active');
    e.target.classList.add('active');
    
    const target = e.target.getAttribute('data-target');
    document.querySelector('.menu-group.active').classList.remove('active');
    document.querySelector(target).classList.add('active');
    
    AOS.init();
  }
})
