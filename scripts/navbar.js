let navbar = document.querySelector(".nav");
let prev = 0;

window.onscroll = (ev) => {
    console.log(1);
    let current = document.body.scrollTop;
    if (current > prev) {
        navbar.style.top = "-5rem";
    } else {
        navbar.style.top = "0";
    }
    prev = current;
}