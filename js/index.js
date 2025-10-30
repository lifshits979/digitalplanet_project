let page = document.querySelector('.page');
let parts = document.querySelectorAll('.part');

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
let howSwitchForward = document.querySelector('.how-switch-forward');
let howSwitchBack = document.querySelector('.how-switch-back');
let howActions = document.querySelectorAll('.how-action')
let howSwitchCount = document.querySelector('.how-switch-count');
let howCurrentIndex=0;
let techSwitchForward = document.querySelector('.tech-switch-forward');
let techSwitchBack = document.querySelector('.tech-switch-back');
let dotVR = document.querySelector('.dot-on-glasses');
let techSwitchCount = document.querySelector('.tech-switch-count');
let techDescriptionPieces = document.querySelectorAll('.tech-description-piece');
let techCurrentIndex=0;

function switchItems(index, items, hiddenClass, shownClass){
    items.forEach((item, i) => {
        item.classList.toggle(shownClass, i === index);
        item.classList.toggle(hiddenClass, i !== index);
    })
    if (items === techDescriptionPieces){
        dotVR.className = "";
        dotVR.classList.add('dot-on-glasses');
        dotVR.classList.add('dotVR-'+(index+1));
    }
}

function switchFunction(switchForward, switchBack, currentIndex, items, hiddenClass, shownClass, switchCount, topicLength){
    switchForward.onclick = function () {
        if (currentIndex <  topicLength-1) {
            currentIndex++;
            switchItems(currentIndex, items, hiddenClass, shownClass);
            switchCount.textContent = ' '+'0'+(currentIndex+1)+' '+'/';
        }
    };
    switchBack.onclick = function () {
        if (currentIndex > 0) {
            currentIndex--;
            switchItems(currentIndex, items, hiddenClass, shownClass);
            switchCount.textContent = ' '+'0'+(currentIndex+1)+' '+'/';
        }
    };
}

switchFunction(techSwitchForward, techSwitchBack, techCurrentIndex, techDescriptionPieces, 'tech-description-piece-hidden', 'tech-description-piece-shown', techSwitchCount, '4')
switchFunction(howSwitchForward, howSwitchBack, howCurrentIndex, howActions, 'how-hidden', 'how-shown', howSwitchCount, howActions.length)
switchFunction(gallerySwitchForward, gallerySwitchBack, currentIndexGallery, galleryImages, 'gallery-hidden', 'gallery-shown',switchCountGallery, galleryImages.length)

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

function scrollToSection(section, buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      page.style.display = 'block';
      mobileMenu.style.display = 'none';
      requestAnimationFrame(() => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top + 10,
          behavior: 'smooth'
        });
      });
    });
  });
}

scrollToSection(mainPage, mainPageButtons);
scrollToSection(about, aboutButtons);
scrollToSection(how, howButtons);
scrollToSection(tech, techButtons);
scrollToSection(QA, QAButtons);
scrollToSection(contacts, contactsButtons);

let MPScroll = document.querySelector('.main-page-scroll');
MPScroll.onclick = function(){
    requestAnimationFrame(() => about.scrollIntoView({
        behavior: 'smooth',
        block: 'start'}));
}

let scrollButtons = document.querySelectorAll('.scroll');
scrollButtons.forEach((scroll, index) => {
    scroll.onclick = function(){
        requestAnimationFrame(() => parts[index+2].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }));
    }
})

function activateCurrentSection() {
    let currentPart = null;
    const scrollPosition = window.scrollY + window.innerHeight / 2;
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
for (let mainPageButton of mainPageButtons){
    mainPageButton.onclick = function(){
        buttons.forEach(button => button.classList.remove('active'));
        mainPageButton.classList.add('active');
    }
}