let track = document.getElementById('testimonial-container');
let slides = Array.from(track.children);
let nextButton = document.querySelector('.navigation-button#right');
let prevButton = document.querySelector('.navigation-button#left');
//general things 
let body = document.body;
// navbar things 
let navbar = document.getElementById('nav-bar');
let navListItems = document.getElementsByClassName("list-item-a");




//window scrolled value function returns the value
function scrolled_value() {
    return window.scrollY;
}
// changing the navabr color when scrolling
function change_nav_color() {
    body.onscroll = function () {
        if (scrolled_value() > 0) {
            navbar.style.backgroundColor = "white"

            for (let i = 0; i < navListItems.length - 1; i++) {
                navListItems[i].style.color = "#ff6e42";
            }
        }
        else {
            navbar.style.backgroundColor = "transparent";
            //reset ul colors //ul.lenght-1 because it will coresponds with the last child
            for (let i = 0; i < navListItems.length - 1; i++) {
                navListItems[i].style.color = "white";
            }
        }
    }

}
////////////////////// sliding the testimanial div///////////////////////////////////////
let slide_width = slides[0].getBoundingClientRect().width;
//alligning slides left to each other

//function for alligning the slides
let setSlidePosition = (slide, index) => {
    slide.style.left = slide_width * index + "px";
}
//loop for all slides next to each other
slides.forEach(setSlidePosition);


//when i click right,move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentSlide")
    let nextSLide = currentSlide.nextElementSibling;
    //amount to move
    let amountToMove = nextSLide.style.left;

    //action moving the slide
    track.style.transform = 'Translatex(' + amountToMove + ')';
})

function slide_test() {

}






//main
change_nav_color();
