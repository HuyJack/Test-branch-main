let myImg = document.querySelector("#myImg")
let clouds = document.querySelector("#clouds")
let airplane = document.querySelector("#airplane")
let hotairballoon = document.querySelector("#hotairballoon")

myImg.addEventListener('click', function () {
    if (clouds.style.webkitAnimationPlayState == "paused") {
        clouds.style.webkitAnimationPlayState = "running"
        airplane.style.webkitAnimationPlayState = "running"
        hotairballoon.style.webkitAnimationPlayState = "running"
        myImg.src = './images/pause.png';
    }
    else {
        clouds.style.webkitAnimationPlayState = "paused"
        airplane.style.webkitAnimationPlayState = "paused"
        hotairballoon.style.webkitAnimationPlayState = "paused"
        myImg.src = './images/play.png';
    }
})