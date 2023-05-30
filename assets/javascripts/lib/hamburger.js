const ham = document.getElementById('jsi-hamburger');
const menu = document.getElementById('jsi-menu');
const overlay = document.getElementById('jsi-overlay');

  ham.addEventListener('click', function(){
    this.classList.add('u-hidden');
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
  })

  menu.addEventListener('click', function(){
    ham.classList.remove('u-hidden');
    this.classList.remove('is-open');
    overlay.classList.remove('is-open');
  })

  overlay.addEventListener('click', function(){
    ham.classList.remove('u-hidden');
    menu.classList.remove('is-open');
    this.classList.remove('is-open');
  })
