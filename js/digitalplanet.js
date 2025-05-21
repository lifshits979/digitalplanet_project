let page = document.querySelector('.page');
let parts = document.querySelectorAll('.part');
let isNavigating = false;


let logos = document.querySelectorAll('.logo');
for (let logo of logos){
logo.addEventListener('mouseover', () => {
    logo.querySelector('.logoreg').style.display = 'none';
    logo.querySelector('.logohover').style.display = 'block';
});
  
logo.addEventListener('mouseout', () => {
    logo.querySelector('.logoreg').style.display = 'block';
    logo.querySelector('.logohover').style.display = 'none';
});
}

let headers = document.querySelectorAll('header');
let buttons = document.querySelectorAll('.page-title-button');
let mainPageButtons = document.querySelectorAll('.main-page-button')
let aboutButtons = document.querySelectorAll('.about-button');
let howButtons = document.querySelectorAll('.how-button');
let techButtons = document.querySelectorAll('.tech-button');
let QAButtons = document.querySelectorAll('.QA-button');
let contactsButtons = document.querySelectorAll('.contacts-button')

let mainPage = document.querySelector('.main-page');
let about = document.querySelector('.about');
let how = document.querySelector('.how');
let tech = document.querySelector('.tech');
let QA = document.querySelector('.QA');
let contacts = document.querySelector('.contacts');

for (let mainPageButton of mainPageButtons){
    mainPageButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    mainPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let aboutButton of aboutButtons){
aboutButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    about.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let howButton of howButtons){
howButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    how.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
}
}

for (let techButton of techButtons){
techButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    tech.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let QAButton of QAButtons){
QAButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    QA.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let contactsButton of contactsButtons){
contactsButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    isNavigating = true;
    contacts.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

/*function updateActiveNav() {
    let x = window.scrollY;   
    sections.forEach(({section, button}) => {
        if (x > section.offsetTop && x < section.offsetTop + section.offsetHeight) {
        button.classList.add('active-title');
        } else {
        button.classList.remove('active-title');
        }
    });


window.addEventListener('scroll', updateActiveNav);}*/

let MPScroll = document.querySelector('.main-page-scroll');
MPScroll.onclick = function(){
    about.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
}

let scrollButtons = document.querySelectorAll('.scroll');
scrollButtons.forEach((scroll, index) => {
    scroll.onclick = function(){
        parts[index+2].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
})

let headerOrderButtons = document.querySelectorAll('.header-order');
let mainOrder = document.querySelector('.main-button-order');
let orderField = document.querySelector('.order');
let orderCloseButton = document.querySelector('.order-close-button');
let sendButtonInOrder = document.querySelector('.submit-order');
let orderForm = document.querySelector('.order-form');
let questionsForm = document.querySelector('.questions-form');

function disableAllButtons() {
    let buttons = page.querySelectorAll('button');
    buttons.forEach(button => {
      button.disabled = true;
      button.classList.add('disabled-element');
    });
    let links = page.querySelectorAll('a');
    links.forEach(link => {
      link.classList.add('disabled-element');
      link.setAttribute('data-href', link.getAttribute('href')); 
      link.removeAttribute('href');
    });
    document.body.style.overflow = 'hidden';
}
function enableAllButtons() {
    let buttons = page.querySelectorAll('button');
    buttons.forEach(button => {
      button.disabled = false;
      button.classList.remove('disabled-element');
    });
    let links = document.querySelectorAll('a');
    links.forEach(link => {
      let originalHref = link.getAttribute('data-href');
      if (originalHref) {
        link.setAttribute('href', originalHref);
        link.removeAttribute('data-href');
      }
      link.classList.remove('disabled-element');
    });
    document.body.style.overflow = '';
}

function openOrder(){
    orderField.style.display = 'block';
    page.style.filter = 'brightness(0.2)';
    disableAllButtons();
};
function closeOrder(){
    orderField.style.display = 'none';
    page.style.filter = 'none';
    enableAllButtons();
};

headerOrderButtons.forEach((headerOrderButton) => {
    headerOrderButton.onclick = openOrder
});
mainOrder.onclick = openOrder;
orderCloseButton.onclick =closeOrder;

let success = document.querySelector('.success');
let sendButton = document.querySelector('.submit-question');
let successOKButton = document.querySelector('.success-ok');
let successCloseButton = document.querySelector('.success-close-button')

function openSuccess(){
    success.style.display = 'block';
    page.style.filter = 'brightness(0.2)';
    disableAllButtons();
}

function closeSuccess(){
    success.style.display = 'none';
    page.style.filter = 'none';
    enableAllButtons();
}

questionsForm.onsubmit = function(evt){
    evt.preventDefault();
    openSuccess();
}    
orderForm.onsubmit = function(evt){
    evt.preventDefault();
    closeOrder();
    openSuccess(); 
}
successCloseButton.onclick = closeSuccess;
successOKButton.onclick = closeSuccess;

let videoButton = document.querySelector('.main-button-video');
let videoField = document.querySelector('.video');
let videoCloseButton = document.querySelector('.video-close-button');

videoButton.onclick = function(){
    videoField.style.display = 'flex';
    page.style.filter = 'brightness(0.2)';
    disableAllButtons();
}

videoCloseButton.onclick = function(){
    videoField.style.display = 'none';
    page.style.filter = 'none';
    enableAllButtons();
}

let menuButton = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCloseButton = document.querySelector('.menu-close-button')

menuButton.onclick = function(){
    mobileMenu.style.display = 'block';
    page.style.display = 'none'
}

menuCloseButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
}

