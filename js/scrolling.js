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

