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