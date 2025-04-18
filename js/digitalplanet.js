let page = document.querySelector('.page');
let body = document.querySelector('body');
let parts = document.querySelectorAll('.part');

let logos = document.querySelectorAll('.logo');
logos.forEach((logo) => {
    logo.addEventListener('mouseover', () => {
      logo.querySelector('.logoreg').style.display = 'none';
      logo.querySelector('.logohover').style.display = 'block';
    });
  
    logo.addEventListener('mouseout', () => {
      logo.querySelector('.logoreg').style.display = 'block';
      logo.querySelector('.logohover').style.display = 'none';
    });
});

let headers = document.querySelectorAll('header');
let buttons = document.querySelectorAll('.page-title-button');
let aboutButtons = document.querySelectorAll('.about-button');
let howButtons = document.querySelectorAll('.how-button');
let techButtons = document.querySelectorAll('.tech-button');
let QAButtons = document.querySelectorAll('.QA-button');
let contactsButtons = document.querySelectorAll('.contacts-button')

let about = document.querySelector('.about');
let how = document.querySelector('.how');
let tech = document.querySelector('.tech');
let QA = document.querySelector('.QA');
let contacts = document.querySelector('.contacts');

for (let aboutButton of aboutButtons){
    aboutButton.onclick = function(){
        about.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    }
}

for (let howButton of howButtons){
    howButton.onclick = function(){
        how.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    }
}

for (let techButton of techButtons){
    techButton.onclick = function(){
        tech.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    }
}

for (let QAButton of QAButtons){
    QAButton.onclick = function(){
        QA.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    }
}

for (let contactsButton of contactsButtons){ 
    contactsButton.onclick = function(){
        contacts.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    }
}

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

let switchForward = document.querySelector('.gallery-switch-forward');
let switchBack = document.querySelector('.gallery-switch-back');
let galleryImages = document.querySelectorAll('.gallery-image');
let switchCount = document.querySelector('.gallery-switch-count');
let switchbackreg = document.querySelector('.switchbackreg');
let switchbackhover = document.querySelector('.switchbackhover');
let switchforwardreg = document.querySelector('.switchforwardreg');
let switchforwardhover = document.querySelector('.switchforwardhover');
let currentIndex=0;

function showImage(index) {
    galleryImages.forEach((galleryImage, i) => {
        if (i === index) {
            galleryImage.classList.remove('gallery-hidden');
            galleryImage.classList.add('gallery-shown');
        } else {
            galleryImage.classList.remove('gallery-shown');
            galleryImage.classList.add('gallery-hidden');
        }
    });
};

switchForward.addEventListener('mouseover', () => {
    switchforwardreg.style.display = 'none';
    switchforwardhover.style.display = 'block';
});
switchForward.addEventListener('mouseout', () => {
    switchforwardhover.style.display = 'none';
    switchforwardreg.style.display = 'block';
});
switchBack.addEventListener('mouseover', () => {
    switchbackreg.style.display = 'none';
    switchbackhover.style.display = 'block';
});
switchBack.addEventListener('mouseout', () => {
    switchbackhover.style.display = 'none';
    switchbackreg.style.display = 'block';
});



switchForward.onclick = function () {
    if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        showImage(currentIndex);
        switchCount.textContent = ' '+'0'+(currentIndex+1)+' '+'/';
    }
};
switchBack.onclick = function () {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
        switchCount.textContent = ' '+'0'+(currentIndex+1)+' '+'/';
    }
};



let answerButtons = document.querySelectorAll('.plus-pic');
let answers = document.querySelectorAll('.answer');
let openSymbols = document.querySelectorAll('.plus-pic p')
let QAFooter = document.querySelector('.QA-footer');

answerButtons.forEach((answerButton, index) => {
    answerButton.onclick = function (){
        if (answers[index].classList.contains('answer-hidden')){
            answers.forEach((answer) => {
                answer.style.display = 'none';
                answer.classList.add('answer-hidden')});
            openSymbols.forEach(openSymbol => {
                openSymbol.style.transform = 'rotate(0deg)'
            });
            answers[index].style.display = 'block';
            answers[index].classList.remove('answer-hidden');
            let answerHeight = answers[index].clientHeight;
            QAFooter.style.marginTop = 187 - answerHeight + 'px';
            openSymbols[index].style.transform = 'rotate(45deg)';
        }
        else {answers[index].style.display = 'none';
            answers[index].classList.add('answer-hidden');
            openSymbols[index].style.transform = 'rotate(0deg)'
            QAFooter.style.marginTop = 187 + 'px';
        }
    };
});

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

