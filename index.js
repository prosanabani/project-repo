let track = document.getElementsByClassName('testimonial-container');
let slides = Array.from(track.children);
let nextButton = document.querySelector('.navigation-button#right');
let prevButton = document.querySelector('.navigation-button#left');

let slideWidth = slides[0].getBoundingClientRect().width;





//arranging slides next to each other
// when i click left,move the slides to the left ;
// when i click right,move the slides to the right ; 
