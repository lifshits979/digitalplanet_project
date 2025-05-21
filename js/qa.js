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
            openSymbols[index].style.marginLeft = 3 + 'px';
        }
        else {answers[index].style.display = 'none';
            answers[index].classList.add('answer-hidden');
            openSymbols[index].style.transform = 'rotate(0deg)';
            openSymbols[index].style.marginLeft = '0';
            QAFooter.style.marginTop = 187 + 'px';
        }
    };
});