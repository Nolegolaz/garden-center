'use strict';

const slider = document.querySelector('.slider');
const buttonContainer = document.querySelector('.section-slider__button-container');
const buttonLeft = document.querySelector('.section-slider__button-arrow_left');
const buttonRight = document.querySelector('.section-slider__button-arrow_right');
let currentSlide = 1;

const buttonsBottom = document.querySelectorAll('.section-slider__button-bottom');

buttonLeft.addEventListener('click', changeSlide);
buttonRight.addEventListener('click', changeSlide);
for( let i = 0; i < buttonsBottom.length; i++) {
    buttonsBottom[i].addEventListener('click', changeSlide);
};

function changeSlide(event) {

    if(event.target.classList.contains('section-slider__button-arrow_left') && (currentSlide > 1)) {

        slider.classList.toggle(`slider-transform-translate-${currentSlide}`);
        buttonContainer.children[currentSlide - 1].classList.toggle('section-slider__button-bottom-active');
        slider.classList.toggle(`slider-transform-translate-${--currentSlide}`);
        buttonContainer.children[currentSlide - 1].classList.toggle('section-slider__button-bottom-active');    
    } else if (event.target.classList.contains('section-slider__button-arrow_right')  && (currentSlide < 5)) {

        slider.classList.toggle(`slider-transform-translate-${currentSlide}`);
        buttonContainer.children[currentSlide - 1].classList.toggle('section-slider__button-bottom-active');
        slider.classList.toggle(`slider-transform-translate-${++currentSlide}`);
        buttonContainer.children[currentSlide - 1].classList.toggle('section-slider__button-bottom-active');
    } else if (event.target.classList.contains('section-slider__button-bottom')) {

        slider.classList.toggle(`slider-transform-translate-${currentSlide}`);
        buttonContainer.children[currentSlide - 1].classList.toggle('section-slider__button-bottom-active');
        slider.classList.toggle(`slider-transform-translate-${event.target.id}`);
        buttonContainer.children[event.target.id - 1].classList.toggle('section-slider__button-bottom-active');
        currentSlide = event.target.id;
    };
};

