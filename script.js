window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  
  header.classList.toggle('headertransp', window.scrollY > 0);
  nav.classList.toggle('navscroll', window.scrollY > 0);
});

const textElement = document.getElementById('typing-text');
typeText(textElement, ['print("Viva la Electrica!")', 'cout<<"Mahasiswa institut terbaik bangsa!";', 'console.log("In harmonia progressio!");', 'Sekolah Teknik Elektro dan Informatika - Rekayasa'], 50, 2000, 1000);

const moreButton = document.getElementById('more');
moreButton.addEventListener('click', () => {
  const scrollY = window.scrollY;
  var targetscroll = 740 - scrollY
  window.scrollBy({
    top: targetscroll,
    left: 0,
    behavior: 'smooth'
  });
});

const scrollup = document.getElementById("Beranda")
scrollup.addEventListener('click', () => {
  const scrollY = window.scrollY;
  var scrollupvalue = - scrollY
  window.scrollBy({
    top: scrollupvalue,
    left: 0,
    behavior: 'smooth'
  });
});


const sidebarmenu = document.getElementById("sidebarmenu")
const penutuplayar = document.getElementById("penutuplayar")
const sidebarbutton = document.getElementById("sidebarbutton");
sidebarbutton.addEventListener('click', function() {
  sidebarmenu.classList.toggle('sidebarmenuaactive');
  penutuplayar.classList.toggle('penutuplayaron');
  sidebarbutton.classList.toggle('sidebaron');
})

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

  
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  var slide3 = document.getElementById("slide3");
  var slide4 = document.getElementById("slide4");

  if (slide1.checked == true) {
    counter = 1
  } else if(slide2.checked == true) {
    counter = 2
  } else if(slide3.checked == true) {
    counter = 3
  } else if(slide4.checked == true) {
    counter = 4
  }

  console.log("counter sekarang = ",counter)
  
  counter++;
  if (counter > 4) {
    counter= 1
  }

  document.getElementById('slide'+counter).checked = true;

  console.log("counter setelahnya = ",counter)
}, 10000);


var vms1 = document.getElementById("vms1");
var vms2 = document.getElementById("vms2");
var vms3 = document.getElementById("vms3");
var vms4 = document.getElementById("vms4");
var sattelite = document.getElementById("sattelite");

var degree = 0;
setInterval(function(){
  degree = degree + 90

  sattelite.style.transform = "rotate("+degree+"deg)"
  vms1.style.transform = "rotate(-"+degree+"deg)"
  vms2.style.transform = "rotate(-"+degree+"deg)"
  vms3.style.transform = "rotate(-"+degree+"deg)"
  vms4.style.transform = "rotate(-"+degree+"deg)"
  
}, 3000);

var warnatombol = 0;
var baganbutton = document.getElementById("startbutton");
setInterval(function(){
  if (warnatombol == 0) {

    moreButton.style.backgroundColor = "#aba5ec";
    moreButton.style.paddingLeft = "32px"
    moreButton.style.paddingRight = "32px"
    moreButton.style.paddingTop = "12px"
    moreButton.style.paddingBottom = "17px"
    moreButton.style.fontSize = "27px"
    
    warnatombol++
    
  } else {
    moreButton.style.backgroundColor = "#655DBB";
    moreButton.style.paddingTop = "10px"
    moreButton.style.paddingLeft = "30px"
    moreButton.style.paddingRight = "30px"
    moreButton.style.paddingBottom = "15px"
    moreButton.style.fontSize = "21px"
    warnatombol = 0
  }
}, 1000);

const michelangelo = document.getElementById("michelangelo")
var michelangelopos = 0
setInterval(function(){
 if (michelangelopos == 0) {
  michelangelo.style.bottom = "-80px"
  michelangelopos = 1
 }
 else{
  michelangelo.style.bottom = "-100px"
  michelangelopos = 0
 }
}, 3000);

const michele = document.getElementById("michele")
var michelepos = 0
setInterval(function(){
 if (michelepos == 0) {
  michele.style.bottom = "-80px"
  michelepos = 1
 }
 else{
  michele.style.bottom = "-100px"
  michelepos = 0
 }
}, 3500);

const onanogram = document.getElementById("onanogram")
const videoembed = document.getElementById("videoembed")
const visimisi = document.getElementById("visimisi")
const slidersec = document.getElementById("slidersec")
const majors = document.getElementById("majors")
const faqsec = document.getElementById("faqsec")
setInterval(function(){
  const scrollY = window.scrollY;
  console.log(scrollY)

  if (scrollY >= 590) {
    onanogram.style.opacity = "100%"
    onanogram.style.marginTop = "60px"
  } else {
    onanogram.style.opacity = "0%"
    onanogram.style.marginTop = "120px"
  }

  if (scrollY >= 750) {
    videoembed.style.opacity = "100%"
    videoembed.style.marginTop = "60px"
  } else {
    videoembed.style.opacity = "0%"
    videoembed.style.marginTop = "120px"
  }

  if (scrollY >= 1570) {
    visimisi.style.opacity = "100%"
    visimisi.style.marginTop = "60px"
  } else {
    visimisi.style.opacity = "0%"
    visimisi.style.marginTop = "120px"
  }

  if (scrollY >= 2465) {
    slidersec.style.opacity = "100%"
    slidersec.style.marginTop = "60px"
  } else {
    slidersec.style.opacity = "0%"
    slidersec.style.marginTop = "120px"
  }

  if (scrollY >= 3332) {
    majors.style.opacity = "100%"
    majors.style.marginTop = "60px"
  } else {
    majors.style.opacity = "0%"
    majors.style.marginTop = "120px"
  }

  if (scrollY >= 4100) {
    faqsec.style.opacity = "100%"
    faqsec.style.marginTop = "60px"
  } else {
    faqsec.style.opacity = "0%"
    faqsec.style.marginTop = "120px"
  }

},500)