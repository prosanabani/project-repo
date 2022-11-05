let track = document.getElementsByClassName('testimonial-container');
// let slides = Array.from(track.children);
let nextButton = document.querySelector('.navigation-button#right');
let prevButton = document.querySelector('.navigation-button#left');

//general things 
let body = document.body;
// navbar things 

let navbar = document.getElementById('nav-bar');
// let ul = document.querySelector('#bvc')
let ul = document.getElementsByClassName("bvc")
//window scrolled value function returns the value
function scrolled_value() {
    return window.scrollY;
}
// changing the navabr color when scrolling
function change_nav_color() {
    body.onscroll = function () {
        if (scrolled_value() > 0) {
            navbar.style.backgroundColor = "white"

            for (let i = 0; i < ul.length - 1; i++) {
                ul[i].style.color = "#ff6e42";
            }
        }
        else {
            navbar.style.backgroundColor = "transparent";
            //reset ul colors //ul.lenght-1 because it will coresponds with the last child
            for (let i = 0; i < ul.length - 1; i++) {
                ul[i].style.color = "white";
            }
        }
    }

}
change_nav_color();




;