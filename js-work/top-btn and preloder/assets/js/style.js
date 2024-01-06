function scrollBtn() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
    let topbtn = document.getElementById("topbtn");
    if (window.scrollY > 500) {
        topbtn.style.display = 'block';
    }
    else{
        topbtn.style.display = 'none';
    }
})
// preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 12000);