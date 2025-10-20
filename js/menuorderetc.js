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

let menuButton = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCloseButton = document.querySelector('.menu-close-button')

function openMenu(){
    mobileMenu.style.display = 'flex';
    page.style.display = 'none'
}

function closeMenu(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    buttons.forEach(button => button.classList.remove('active'));
    mainPageButtons.forEach(mainPageButton => mainPageButton.classList.add('active'));
}

function openOrder(){
    orderField.style.display = 'flex';
    page.style.filter = 'brightness(0.2)';
    closeMenu();
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
    success.style.display = 'flex';
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

menuButton.onclick = openMenu;
menuCloseButton.onclick = closeMenu;

let switchForwards = document.querySelectorAll('.switch-forward');
let switchBacks = document.querySelectorAll('.switch-back');
let switchbackreg = document.querySelectorAll('.switchbackreg');
let switchbackhover = document.querySelectorAll('.switchbackhover');
let switchforwardreg = document.querySelectorAll('.switchforwardreg');
let switchforwardhover = document.querySelectorAll('.switchforwardhover');

switchForwards.forEach((switchForward, index) => {
    switchForward.addEventListener('mouseover', () => {
        switchforwardreg[index].style.display = 'none';
        switchforwardhover[index].style.display = 'block';
    });
    switchForward.addEventListener('mouseout', () => {
        switchforwardhover[index].style.display = 'none';
        switchforwardreg[index].style.display = 'block';
    });
})

switchBacks.forEach((switchBack, index) => {
    switchBack.addEventListener('mouseover', () => {
        switchbackreg[index].style.display = 'none';
        switchbackhover[index].style.display = 'block';
    });
    switchBack.addEventListener('mouseout', () => {
        switchbackhover[index].style.display = 'none';
        switchbackreg[index].style.display = 'block';
    });
})


let gallerySwitchForward = document.querySelector('.gallery-switch-forward');
let gallerySwitchBack = document.querySelector('.gallery-switch-back');
let galleryImages = document.querySelectorAll('.gallery-image');
let switchCountGallery = document.querySelector('.switch-count-gallery');
let currentIndexGallery=0;
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

gallerySwitchForward.onclick = function () {
    if (currentIndexGallery < galleryImages.length - 1) {
        currentIndexGallery++;
        showImage(currentIndexGallery);
        switchCountGallery.textContent = ' '+'0'+(currentIndexGallery+1)+' '+'/';
    }
};
gallerySwitchBack.onclick = function () {
    if (currentIndexGallery > 0) {
        currentIndexGallery--;
        showImage(currentIndexGallery);
        switchCountGallery.textContent = ' '+'0'+(currentIndexGallery+1)+' '+'/';
    }
};

let howSwitchForward = document.querySelector('.how-switch-forward');
let howSwitchBack = document.querySelector('.how-switch-back');
let howActions = document.querySelectorAll('.how-action')
let howSwitchCount = document.querySelector('.how-switch-count');
let howCurrentIndex=0;

function showHow(index) {
    howActions.forEach((howAction, i) => {
        if (i === index) {
            howAction.classList.remove('how-hidden');
            howAction.classList.add('how-shown');
        } else {
            howAction.classList.remove('how-shown');
            howAction.classList.add('how-hidden');
        }
    });
};

howSwitchForward.onclick = function () {
    if (howCurrentIndex < howActions.length - 1) {
        howCurrentIndex++;
        showHow(howCurrentIndex);
        howSwitchCount.textContent = ' '+'0'+(howCurrentIndex+1)+' '+'/';
    }
};
howSwitchBack.onclick = function () {
    if (howCurrentIndex > 0) {
        howCurrentIndex--;
        showHow(howCurrentIndex);
        howSwitchCount.textContent = ' '+'0'+(howCurrentIndex+1)+' '+'/';
    }
};

let techSwitchForward = document.querySelector('.tech-switch-forward');
let techSwitchBack = document.querySelector('.tech-switch-back');
let dotVR = document.querySelector('.dot-on-glasses');
let techSwitchCount = document.querySelector('.tech-switch-count');
let techDescriptionPieces = document.querySelectorAll('.tech-description-piece');
let techCurrentIndex=0;

function showTech(index) {
    techDescriptionPieces.forEach((techDescriptionPiece, i) => {
        if (i === index) {
            techDescriptionPiece.classList.remove('tech-description-piece-hidden');
            techDescriptionPiece.classList.add('tech-description-piece-shown');
        } else {
            techDescriptionPiece.classList.remove('tech-description-piece-shown');
            techDescriptionPiece.classList.add('tech-description-piece-hidden');
        }
    });
    dotVR.className = "";
    dotVR.classList.add('dot-on-glasses');
    dotVR.classList.add('dotVR-'+(index+1));
};

techSwitchForward.onclick = function () {
    if (techCurrentIndex <  3) {
        techCurrentIndex++;
        showTech(techCurrentIndex);
        techSwitchCount.textContent = ' '+'0'+(techCurrentIndex+1)+' '+'/';
    }
};
techSwitchBack.onclick = function () {
    if (techCurrentIndex > 0) {
        techCurrentIndex--;
        showTech(techCurrentIndex);
        techSwitchCount.textContent = ' '+'0'+(techCurrentIndex+1)+' '+'/';
    }
};

let page = document.querySelector('.page');
let parts = document.querySelectorAll('.part');

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
    mainPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    buttons.forEach(button => button.classList.remove('active'));
    mainPageButton.classList.add('active');
    }
}

for (let aboutButton of aboutButtons){
aboutButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    about.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let howButton of howButtons){
howButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    how.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
}
}

for (let techButton of techButtons){
techButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    tech.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let QAButton of QAButtons){
QAButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
    QA.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    }
}

for (let contactsButton of contactsButtons){
contactsButton.onclick = function(){
    page.style.display = 'block';
    mobileMenu.style.display = 'none';
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

function activateCurrentSection() {
    let currentPart = null;
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    console.log()
    for (let part of parts) {
        const rect = part.getBoundingClientRect();
        const partTop = rect.top + window.scrollY;
        const partBottom = partTop + part.offsetHeight;
        if (scrollPosition >= partTop && scrollPosition < partBottom) {
            currentPart = part;
            break;
        }
    }

    if (!currentPart) return;

    function activate(activatedButton) {
        buttons.forEach(button => button.classList.remove('active'));
        activatedButton.forEach(button => button.classList.add('active'));
    }

    if (currentPart.classList.contains('main-page')) {
        activate(mainPageButtons);
    } else if (currentPart.classList.contains('about')) {
        activate(aboutButtons);
    } else if (currentPart.classList.contains('how')) {
        activate(howButtons);
    } else if (currentPart.classList.contains('tech')) {
        activate(techButtons);
    } else if (currentPart.classList.contains('QA')) {
        activate(QAButtons);
    } else if (currentPart.classList.contains('contacts')) {
        activate(contactsButtons);
    }
}

window.addEventListener('scroll', activateCurrentSection);

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
                openSymbol.style.transform = 'rotate(0deg)';
                openSymbol.style.marginLeft = '0';
            });
            answers[index].style.display = 'block';
            answers[index].classList.remove('answer-hidden');
            let answerHeight = answers[index].clientHeight;
            QAFooter.style.marginTop = 187 - answerHeight + 'px';
            openSymbols[index].style.transform = 'rotate(45deg)';
            if (window.matchMedia("(max-width: 768px)").matches) {
                openSymbols[index].style.marginLeft = 3 + 'px';
              }
        }
        else {answers[index].style.display = 'none';
            answers[index].classList.add('answer-hidden');
            openSymbols[index].style.transform = 'rotate(0deg)';
            openSymbols[index].style.marginLeft = '0';
            QAFooter.style.marginTop = 187 + 'px';
        }
    };
});