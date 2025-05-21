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