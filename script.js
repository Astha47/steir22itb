window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  header.classList.toggle('headertransp', window.scrollY > 0);
  nav.classList.toggle('navscroll', window.scrollY > 0);
});

const textElement = document.getElementById('typing-text');
typeText(textElement, ['Viva la Electrica!', 'Mahasiswa institut terbaik bangsa!', 'In harmonia progressio!', 'Sekolah Teknik Elektro dan Informatika - Rekayasa'], 50, 2000, 1000);

const moreButton = document.getElementById('more');
moreButton.addEventListener('click', () => {
  window.scrollBy({
    top: 740,
    left: 0,
    behavior: 'smooth'
  });
});

function typeText(element, texts, delay, pause, fadeInDelay, textIndex) {
  if (textIndex === undefined) {
    textIndex = 0;
  }
  let text = texts[textIndex];
  let index = 0;
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else {
      setTimeout(() => {
        element.classList.add('typing-fade-out');
        setTimeout(() => {
          element.classList.remove('typing-fade-out');
          element.innerHTML = '';
          textIndex++;
          if (textIndex >= texts.length) {
            textIndex = 0;
          }
          text = texts[textIndex];
          index = 0;
          setTimeout(() => {
            typeText(element, texts, delay, pause, fadeInDelay, textIndex);
          }, fadeInDelay);
        }, 1000);
      }, pause);
    }
  }
  setTimeout(type, fadeInDelay);
}

var counter = 1;
setInterval(function(){
  document.getElementById('slide'+counter).checked = true;
  counter++;
  if (counter > 4) {
    counter= 1
  }
}, 7000)