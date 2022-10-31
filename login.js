let userInput = document.getElementById("input-username")
let cursor_place_lognow = document.getElementById("button-login-div")
let login_now = document.getElementById("button-login")


if (userInput.value == "") {
    changingState(1)
}
else {
    changingState(0)
}





function changingState(num) {
    if (num == 1) {
        var place_x = 0;
        var place_y = 0;
        //finding the cursor place
        function cursorPlace() {
            cursor_place_lognow.onmousemove = function (e) {
                let x = e.offsetX;
                let y = e.offsetY;
                place_x = x;
                place_y = y;
                // console.log(x + " " + y);
            }
        }
        cursorPlace()
        //moving login right and left
        cursor_place_lognow.addEventListener('mousemove', function () {

            if (place_x > (cursor_place_lognow.getBoundingClientRect().width / 2)) {
                login_now.style.transform = "translateX(-150px)"
            }
            else {
                login_now.style.transform = "translateX(150px)"
            }

        })
        //reseting the place of the login to default
        cursor_place_lognow.addEventListener('mouseleave', function () {
            login_now.style.transform = "translateX(0px)"
        })
    }
    else
        console.log("nothing to do")
}
