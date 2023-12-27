// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const prevBtnImg = document.querySelector('#prev-btn-img');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');
const bookBackground = document.querySelector('#book-background');
const coverBackground = document.querySelector('#cover-background')
const dictionaryTab = document.querySelector('#dictionary-tab');
const gameLife1 = document.querySelector('#game-life1');
const gameLife2 = document.querySelector('#game-life2');
const gameLife3 = document.querySelector('#game-life3');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');
const paper7 = document.querySelector('#p7');
const paper8 = document.querySelector('#p8');
const paper9 = document.querySelector('#p9');
const paper10 = document.querySelector('#p10');
const paper11 = document.querySelector('#p11');
const paper12 = document.querySelector('#p12');
const paper13 = document.querySelector('#p13');
const paper14 = document.querySelector('#p14');
const paper15 = document.querySelector('#p15');
const paper16 = document.querySelector('#p16');
const paper17 = document.querySelector('#p17');
const paper18 = document.querySelector('#p18');
const paper19 = document.querySelector('#p19');
const paper20 = document.querySelector('#p20');
const paper21 = document.querySelector('#p21');
const paper22 = document.querySelector('#p22');
const paper23 = document.querySelector('#p23');
const paper24 = document.querySelector('#p24');
const paper25 = document.querySelector('#p25');
const paper26 = document.querySelector('#p26');
const paper27 = document.querySelector('#p27');
const paper28 = document.querySelector('#p28');
const paper29 = document.querySelector('#p29');
const paper30 = document.querySelector('#p30');
const paper31 = document.querySelector('#p31');


// Dictionary
const dictionaryPage1 = document.querySelector('#dictionary-page1');
const dictionaryPage2 = document.querySelector('#dictionary-page2');

// Event listeners
prevBtn.addEventListener("click", goPrevious);
prevBtn.addEventListener("mouseover", e => prevBtn.src = "../img/prev-btn-hover.png");
prevBtn.addEventListener('mouseout', e => prevBtn.src = "../img/prev%20button.png");

nextBtn.addEventListener("click", goNext);
nextBtn.addEventListener("mouseover", e => nextBtn.src = "../img/next-btn-hover.png");
nextBtn.addEventListener("mouseout", e => nextBtn.src = "../img/next%20button.png")

// Business Logic
let currentState = 1;
let numOfPapers = 7;
let maxState = numOfPapers + 1;


function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(currentState < maxState) {
        switch(currentState) {
            case 1:
                openBook();
                book.style.visibility = 'unset';
                coverBackground.style.visibility = 'hidden';
                prevBtn.style.visibility = 'unset';
                bookBackground.style.visibility = 'unset';
                dictionaryTab.style.visibility = 'unset';
                dictionaryTab.style.transition = '1s';
                paper1.classList.add("flipped");
                paper1.style.zIndex = '1';
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = '2';
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = '3';
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = '4';
                paper5.style.zIndex = '4';
                nextBtn.style.visibility = 'hidden';
                break;
            case 5:
                paper15.classList.add("flipped");
                paper15.style.zIndex = '8';
                paper16.style.zIndex = '9';
                nextBtn.style.visibility = 'hidden';
                break;
            case 6:
                closeBook(false);
                paper7.classList.add("flipped");
                paper7.style.zIndex = '7';
                break;
            default:
                throw new Error("unknown state");
        }

        currentState++;
    }
}

function goPrevious() {
    if(currentState > 1 && dictionaryPage1.style.zIndex !== '12') {
        switch(currentState) {
            case 2:
                closeBook(true);
                coverBackground.style.visibility = 'visible';
                prevBtn.style.visibility = 'hidden';
                bookBackground.style.visibility = 'hidden';
                dictionaryTab.style.transition = 'unset';
                dictionaryTab.style.visibility = 'hidden';
                paper1.classList.remove("flipped");
                paper1.style.zIndex = '7';
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = '6';
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = '5';
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = '4';
                paper5.style.zIndex = '3';
                nextBtn.style.visibility = 'unset';
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = '4';
                paper6.style.zIndex = '3';
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = '5';
                paper7.style.zIndex = '1';
                break;
            case 8:
                openBook()
                paper7.classList.remove("flipped");
                paper7.style.zIndex = '6';
                break;
        }

        currentState--;
    }
    if (dictionaryPage1.style.zIndex === '12') {
        dictionaryPage1.classList.remove("flipped");
        dictionaryPage1.style.zIndex = '-10';
        dictionaryPage2.style.zIndex = '-10';
        nextBtn.style.visibility = 'unset';
        dictionaryTab.style.backgroundImage = 'url("../img/dictionary-tab-hidden.png")';
        dictionaryTab.style.backgroundRepeat = 'no repeat';
        dictionaryTab.style.position = 'absolute';
        dictionaryTab.style.top = '50px';
        dictionaryTab.style.left = '450px';
        dictionaryTab.style.width = '71px';
        dictionaryTab.style.height = '30px';
    }
}

function spendLife() {
    if (gameLife3.style.opacity !== '0.3') {
        gameLife3.style.opacity = '0.3';
    } else if (gameLife3.style.opacity === '0.3' && gameLife2.style.opacity !== '0.3') {
        gameLife2.style.opacity = '0.3';
    } else if (gameLife2.style.opacity === '0.3' && gameLife1.style.opacity !== '0.3') {
        gameLife1.style.opacity = '0.3';
    }
}

// Button try again
const tryAgainYakov1 = document.querySelector('#againYakov1');
const tryAgainYakov2 = document.querySelector('#againYakov2');

const tryAgainRudolf1 = document.querySelector('#againRudolf1');
const tryAgainRudolf2 = document.querySelector('#againRudolf2');
const tryAgainRudolf3 = document.querySelector('#againRudolf3');
const verseWrongAnswerTryAgain = document.querySelector("#againRudolf4");
const tryAgainRudolf5 = document.querySelector('#againRudolf5');
const tryAgainRudolf6 = document.querySelector('#againRudolf6');

const tryAgainFate1 = document.querySelector('#againFate1');
const tryAgainFate2 = document.querySelector('#againFate2');

tryAgainYakov1.addEventListener("click", tryAgainYakovP1);
tryAgainYakov2.addEventListener("click", tryAgainYakovP2);

tryAgainRudolf2.addEventListener("click", tryAgainRudolfP1);
tryAgainRudolf3.addEventListener("click", tryAgainRudolfP2);
verseWrongAnswerTryAgain.addEventListener("click", rudolfVerseWrongAnswerTryAgain);
tryAgainRudolf5.addEventListener("click", tryAgainRudolfP4);
tryAgainRudolf6.addEventListener("click", tryAgainRudolfP5);

tryAgainFate1.addEventListener("click", tryAgainFateP1);
tryAgainFate2.addEventListener("click", tryAgainFateP2);

function tryAgainYakovP1() {
    paper6.classList.remove("flipped");
    paper5.classList.remove("flipped");
    paper5.style.zIndex = '5';
    paper6.style.zIndex = '2';
    paper7.style.zIndex = '1';
    paper8.style.zIndex = '0';
    nextBtn.style.visibility = 'hidden';
}

function tryAgainYakovP2() {
    paper6.classList.remove("flipped");
    paper5.classList.remove("flipped");
    paper4.style.zIndex = '4';
    paper5.style.zIndex = '5';
    paper6.style.zIndex = '2';
    paper8.style.zIndex = '1';
    paper7.style.zIndex = '0';
    nextBtn.style.visibility = 'hidden';
}

function tryAgainRudolfP1() {
    paper12.classList.remove("flipped");
    paper12.style.zIndex = 'unset';
    paper13.style.zIndex = 'unset';
}

function tryAgainRudolfP2() {
    paper25.classList.remove("flipped");
    paper25.style.zIndex = 'unset';
    paper26.style.zIndex = 'unset';
}

function rudolfVerseWrongAnswerTryAgain() {
    paper30.classList.remove("flipped");
    paper30.style.zIndex = 'unset';
    paper31.style.zIndex = 'unset';
    paper11.classList.add("flipped");
    paper11.style.zIndex = '6';
    paper14.style.zIndex = '7';
}

function tryAgainRudolfP4() {
    paper18.classList.remove("flipped");
    paper18.style.zIndex = 'unset';
    paper19.style.zIndex = 'unset';
}

function tryAgainRudolfP5() {
    paper21.classList.remove("flipped");
    paper21.style.zIndex = 'unset';
    paper22.style.zIndex = 'unset';
}

function tryAgainFateP1() {
    paper23.classList.remove("flipped");
    paper24.classList.remove("flipped");
    paper4.style.zIndex = '4';
    paper5.style.zIndex = '5';
    paper23.style.zIndex = '2';
    paper24.style.zIndex = '1';
    paper27.style.zIndex = '0';
    nextBtn.style.visibility = 'hidden';
}

function tryAgainFateP2() {
    paper23.classList.remove("flipped");
    paper24.classList.remove("flipped");
    paper28.classList.remove("flipped");
    paper4.style.zIndex = '4';
    paper5.style.zIndex = '5';
    paper28.style.zIndex = '2';
    paper24.style.zIndex = '1';
    paper29.style.zIndex = '0';
    paper23.style.zIndex = '0';
    nextBtn.style.visibility = 'hidden';
}


// Button PlayAgain
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const playAgainYesBtn = document.querySelector(".play-again-yes");
const playAgainNoBtn = document.querySelector(".play-again-no");
const playAgainFinal = document.querySelector("#againRudolf1");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
playAgainYesBtn.addEventListener("click", playAgainYes);
playAgainNoBtn.addEventListener("click", toggleModal);
playAgainFinal.addEventListener("click", playAgainYes);

function playAgainYes() {
    location.reload(true);
}

// Show dictionary
function showDictionary() {
    dictionaryPage1.classList.add("flipped");
    dictionaryPage1.style.zIndex = '12';
    dictionaryPage2.style.zIndex = '12';
    nextBtn.style.visibility = 'hidden';
    prevBtn.style.visibility = 'unset';
    dictionaryTab.style.backgroundImage = 'url("../img/dictionary-tab.png")';
    dictionaryTab.style.backgroundRepeat = 'no repeat';
    dictionaryTab.style.right = '140px';
    dictionaryTab.style.width = '118px';
    dictionaryTab.style.height = '30px';
}

// Main choices
function chooseYakov() {
    paper5.classList.add("flipped");
    paper5.style.zIndex = '5';
    paper6.style.zIndex = '5';
    prevBtn.style.visibility = 'hidden';
}

function chooseRudolf() {
    paper9.classList.add("flipped");
    paper9.style.zIndex = '5';
    paper10.style.zIndex = '5';
    prevBtn.style.visibility = 'hidden';
}

function chooseResignFate() {
    paper23.classList.add("flipped");
    paper23.style.zIndex = '5';
    paper24.style.zIndex = '5';
    prevBtn.style.visibility = 'hidden';
}

// Other choices

// Yakov's story
function chooseYakovP10_1() {
    paper6.classList.add("flipped");
    paper6.style.zIndex = '5';
    paper7.style.zIndex = '5';

    spendLife();
}

function chooseYakovP10_2() {
    paper6.classList.add("flipped");
    paper6.style.zIndex = '5';
    paper8.style.zIndex = '5';

    spendLife();
}

// Rudolf's story
const verseCorrectAnswer = document.querySelector("#verse-answer1");
const verseWrongAnswer1 = document.querySelector("#verse-answer2");
const verseWrongAnswer2 = document.querySelector("#verse-answer3");

verseCorrectAnswer.addEventListener("click", rudolfVerseCorrectAnswer);
verseWrongAnswer1.addEventListener("click", rudolfVerseWrongAnswer);
verseWrongAnswer2.addEventListener("click", rudolfVerseWrongAnswer);

function chooseRudolfP10_1() {
    paper10.classList.add("flipped");
    paper10.style.zIndex = '5';
    paper11.style.zIndex = '6';
}

function chooseRudolfP10_2() {
    spendLife();
    paper12.classList.add("flipped");
    paper12.style.zIndex = '5';
    paper13.style.zIndex = '6';
}

function chooseRudolfP12_1() {
    paper11.classList.add("flipped");
    paper11.style.zIndex = '6';
    paper14.style.zIndex = '7';
}

function chooseRudolfP12_2() {
    spendLife();
    paper25.classList.add("flipped");
    paper25.style.zIndex = '6';
    paper26.style.zIndex = '7';
}

function rudolfVerseCorrectAnswer() {
    paper14.classList.add("flipped");
    paper14.style.zIndex = '7';
    paper15.style.zIndex = '8';
}

function rudolfVerseWrongAnswer() {
    spendLife();
    paper30.classList.add("flipped");
    paper30.style.zIndex = '7';
    paper31.style.zIndex = '8';
}

function chooseRudolfP18_1() {
    paper16.classList.add("flipped");
    paper16.style.zIndex = '9';
    paper17.style.zIndex = '10';
}

function chooseRudolfP18_2() {
    spendLife();
    paper18.classList.add("flipped");
    paper18.style.zIndex = '9';
    paper19.style.zIndex = '10';
}

function chooseRudolfP20_1() {
    paper17.classList.add("flipped");
    paper17.style.zIndex = '10';
    paper20.style.zIndex = '11';
}

function chooseRudolfP20_2() {
    spendLife();
    paper21.classList.add("flipped");
    paper21.style.zIndex = '10';
    paper22.style.zIndex = '11';
}

// Resign Fate
function chooseResignFateP10_1() {
    paper24.classList.add("flipped");
    paper24.style.zIndex = '5';
    paper27.style.zIndex = '6';

    spendLife()
}

function chooseResignFateP10_2() {
    paper28.classList.add("flipped");
    paper28.style.zIndex = '5';
    paper29.style.zIndex = '6';

    spendLife()
}