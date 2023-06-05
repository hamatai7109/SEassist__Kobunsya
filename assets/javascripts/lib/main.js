// ローディング
window.addEventListener('load',function(){
  document.getElementById('jsi-load').classList.add('hide')
  document.getElementById('jsi-load__logo').classList.add('hide')
})

// ページ内リンクをスムーズにする
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 150;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

//スクロールアニメーション
window.addEventListener('scroll', function(){
  fadeIn();
  slideIn();
})


function fadeIn(){
  const target = document.getElementsByClassName('jsi-fadeIn');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight -100){
      target[i].classList.add('fadeIn');
    }
  }
}

function slideIn(){
  const target = document.getElementsByClassName('jsi-slideIn');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight -100){
      target[i].classList.add('slideIn');
    }
  }
}