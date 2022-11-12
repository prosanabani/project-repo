//login button things
let userInput = document.getElementById("input-username");
let passwordInput = document.getElementById("input-password");
let cursor_place_lognow = document.getElementById("button-login-div");
let login_now = document.getElementById("button-login");
cursor_place_lognow.addEventListener('mousemove', changingState);
// check inputs value 1>values 0>no-value
function checkinputs(a, b) {
    if (a.value == "" || b.value == "") return 1;
    else return 0;
}
// ///////////////////////////////////////


var place_x = 0;
var place_y = 0;
let perviousTextContent = login_now.innerText;
//finding the cursor place
function cursorPlace() {
    cursor_place_lognow.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        place_x = x;
        place_y = y;
        console.log(x + " " + y);
    }
}
// changing the button position
function changingState() {
    if (checkinputs(userInput, passwordInput) == 1) {
        cursorPlace()
        //moving login right and left
        if (place_x > (cursor_place_lognow.getBoundingClientRect().width / 2))
            login_now.style.transform = "translateX(-150px)";
        else
            login_now.style.transform = "translateX(150px)";
        //reseting the place of the login to default
        cursor_place_lognow.addEventListener('mouseleave', function () {
            login_now.style.transform = "translateX(0px)"
        })
    }
    else {
        // changing login to SUBMIT
        login_now.innerText = "SUBMIT";
        cursor_place_lognow.addEventListener('mouseleave', function () {
            login_now.innerText = perviousTextContent;
        })
    }
}





