let list = document.querySelector(".list")
let items = document.querySelectorAll(".list .item");
let dots = document.querySelectorAll(".dot li")
let next = document.getElementById("next");
let pre = document.getElementById("pre");
let list1 = document.querySelector(".list1")
let items1 = document.querySelectorAll(".list1 .item1");
let dots1 = document.querySelectorAll(".dot1 li")
let next1 = document.getElementById("next1");
let pre1 = document.getElementById("pre1");
let active = 0;
let active1 = 0
let activelength = items.length - 1;
let activelength1 = items.length - 1;

next.onclick = function () {
    if (active < activelength) {
        active = active + 1;
    }
    else {
        active = 0;
    }
    reloadslide();
}
pre.onclick = function () {
    if (active - 1 < 0) {
        active = activelength;
    }
    else {
        active = active - 1;
    }
    reloadslide();
}
let autoplay = setInterval(() => next.click(), 3000);
function reloadslide() {
    let checkleft = items[active].offsetLeft;
    list.style.left = - checkleft + "px";

    let activedot = document.querySelector(".dot-active");
    activedot.classList.remove("dot-active");
    dots[active].classList.add("dot-active");
    clearInterval(autoplay);
    autoplay = setInterval(() => next.click(), 3000);
}
dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        reloadslide();
    });
})
next1.onclick = function () {
    if (active1 < activelength1) {
        active1 = active1 + 1;
    }
    else {
        active1 = 0;
    }
    reloadslide1();
}
pre.onclick = function () {
    if (active - 1 < 0) {
        active = activelength;
    }
    else {
        active -= 1;
    }
    reloadslide1();
}
let autoplay1 = setInterval(() => next1.click(), 3000);
function reloadslide1() {
    let checkleft = items[active1].offsetLeft;
    list1.style.left = - checkleft + "px";

    let activedot = document.querySelector(".dot-active1");
    activedot.classList.remove("dot-active1");
    dots1[active].classList.add("dot-active1");
    clearInterval(autoplay1);
    autoplay1 = setInterval(() => next1.click(), 3000);
}
dots1.forEach((li, key) => {
    li.addEventListener("click", () => {
        active1 = key;
        reloadslide1();
    });
})

