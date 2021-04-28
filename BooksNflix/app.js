
const track = document.querySelector('.carousel-images');
const slides= Array.from(track.children);
const nextButton= document.querySelector('.right-movement');
const prevButton= document.querySelector('.left-movement');
const dotsMovement = document.querySelector(".carousel-navigation");
const indivDot= Array.from(dotsMovement.children);
const lastSlide = track.lastElementChild;
const firstSlide = track.firstElementChild;
const cardRightButton= document.querySelector('.right');
const cardLeftButton= document.querySelector('.left');
const cardArea = document.querySelector('.card-ul');
const body  = document.body.clientWidth ;
const heart = document.querySelectorAll('.heart');
const bookmark = document.querySelectorAll('.fa-bookmark');
const circle = document.querySelectorAll('.circle');

//Arranging Slides next to each other
slides[0].style.left='0%';
slides[1].style.left='100%';
slides[2].style.left='200%';
slides[3].style.left='300%';
slides[4].style.left='400%';
slides[5].style.left='500%';

//Functions That is been used in document::

function bodyWidth(){
    if (body <= 1519 && body >=1300){
        card[4].style.left = '0px';
        card[5].style.left = '20%';
        card[6].style.left = '40%';
        card[7].style.left = '48.5%';
        }else if(body < 1300 && body >=400){
        card[4].style.left = '0px';
        card[5].style.left = '30%';
        card[6].style.left = '45%';
        card[7].style.left = '66.5%';
        }else if(body < 400 ){
            card[4].style.left = '0px';
            card[5].style.left = '40%';
            card[6].style.left = '70%';
            card[7].style.left = '90%';
        }
}

// function scrollButtonDisplay(){
//     if(card[7].classList.contains('current-card')){
//         cardRightButton.classList.add('hide-btn');
//         cardLeftButton.classList.remove('hide-btn');
//     }
//     else if(card[4].classList.contains('current-card')){
//         cardRightButton.classList.remove('hide-btn');
//         cardLeftButton.classList.add('hide-btn');
//     }
//     else{
//         cardRightButton.classList.remove('hide-btn');
//         cardLeftButton.classList.remove('hide-btn');
//     }
// }

function autoCarouselMovement(){
    setInterval(()=>{
        nextButton.click();
    },6000);
    
}

function toggleHeart(targetElement,indexNumber){
    targetElement.forEach(function(i) {
        i.addEventListener('click', function(e) {
        const clickedBtnIndex = [...targetElement].indexOf(e.target);
        heart[clickedBtnIndex + indexNumber].classList.toggle('added-to-wishlist');
        })
     });
}


// Click Right Arrow, the Carousel move right
nextButton.addEventListener('click', e =>{
    try{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextSlideMove= nextSlide.style.left;
    const currentDot =  dotsMovement.querySelector('.current');
    const nextDot = currentDot.nextElementSibling;

    // Moving the whole ul according to nextSlide 
    track.style.transform = 'translateX(-'+nextSlideMove+')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    
    currentDot.classList.remove('current');
    nextDot.classList.add('current');
    // freak carousel Movement 
    // setTimeout(autoCarouselMovement,4000);
    }
    catch(moveToInitial){
        lastSlide.classList.remove('current-slide');
        firstSlide.classList.add('current-slide');
        const firstSlideMove= firstSlide.style.left;
        track.style.transform = 'translateX(-'+firstSlideMove+')';

        const currentDot =  dotsMovement.querySelector('.current');
        const firstDot = dotsMovement.firstElementChild;
        currentDot.classList.remove('current');
        firstDot.classList.add('current');
        
    }


})

//Click Left Arrow , the Carousel move left
prevButton.addEventListener('click', ()=>{
    try{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevSlidemove= prevSlide.style.left;
    const currentDot =  dotsMovement.querySelector('.current');
    const prevDot = currentDot.previousElementSibling;

    // Moving the whole ul according to nextSlide 
    track.style.transform = 'translateX(-'+prevSlidemove+')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
    

    currentDot.classList.remove('current');
    prevDot.classList.add('current');
    }
    catch(moveToEnd){
        lastSlide.classList.add('current-slide');
        firstSlide.classList.remove('current-slide');
        const lastSlideMove= lastSlide.style.left;
        track.style.transform = 'translateX(-'+lastSlideMove+')';

        const currentDot =  dotsMovement.querySelector('.current');
        const lastDot = dotsMovement.lastElementChild;

        currentDot.classList.remove('current');
        lastDot.classList.add('current');
    }
})


//Carousel Dots, Click on dots to make movement in carousel
dotsMovement.addEventListener('click', e=>{
    const targetDot = e.target.closest('button');

    if(!targetDot) return

    const currentSlide = track.querySelector('.current-slide');
    const currentDot =  dotsMovement.querySelector('.current');
    const targetDotIndex= indivDot.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetDotIndex];

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    const targetSlideStyle= targetSlide.style.left;
    track.style.transform = 'translateX(-'+targetSlideStyle+')';
    
    currentDot.classList.remove('current');
    targetDot.classList.add('current');

})


// Carousel Auto Movement
autoCarouselMovement();


// Card Scrolling:

console.log(body); // Consolling Body Width

//card Right button , to make card move to right
// cardRightButton.addEventListener('click', e=>{

//     bodyWidth();

//     const currentCard = cardArea.querySelector('.current-card');

//     const nextCard= currentCard.nextElementSibling;
//     const nextCardMove = nextCard.style.left;

//     cardArea.style.transform='translateX(-'+ nextCardMove+')';

//     currentCard.classList.remove('current-card');
//     nextCard.classList.add('current-card');
//     scrollButtonDisplay();
   
// })

// //card left button , to make card move to left
// cardLeftButton.addEventListener('click',()=>{
//     bodyWidth();
    
//     const currentCard = cardArea.querySelector('.current-card');

//     const prevCard=currentCard.previousElementSibling;
//     const prevCardMove = prevCard.style.left;

//     cardArea.style.transform='translateX(-'+ prevCardMove+')';

//     currentCard.classList.remove('current-card');
//     prevCard.classList.add('current-card');
//     scrollButtonDisplay();
// })

// const cardRightButton= document.querySelector('.right');
// const cardLeftButton= document.querySelector('.left');
// const cardArea = document.querySelector('.card-ul');
// const card = Array.from(cardArea.children);
// const width= cardArea.getBoundingClientRect().width;
// console.log(card.length);
// let i=0;
// while(i<40){
//     console.log(i)
//     const cardMove=cardArea.style.left=''+i+'%' ;
//     cardRightButton.addEventListener('click',()=>{
//         cardArea.style.transform='translateX(-'+cardMove+')';
//         console.log('hello');
//     })
//     i+=4;
// }


// Wishlist: Added to wishlist
toggleHeart(circle,0);
toggleHeart(bookmark,-1);

const preloader = document.querySelector('.preloader-section');
const windowDisplay = document.querySelector('.MnVnmUYHKKPU');

window.addEventListener('load', ()=> {
    preloader.style.opacity= "0";
    preloader.style.visbility= "hidden";
    preloader.style.pointerEvents = "none";
})

// document.addEventListener('contextmenu', event => event.preventDefault());


document.onkeydown = function (e) {
    // disable F12 key
    // if(e.keyCode == 123) {
    //     return false;
    // }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}
