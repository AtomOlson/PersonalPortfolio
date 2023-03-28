var parallax = document.querySelector(".parallax");
let x = 0;

window.addEventListener("scroll", function() {
    if(this.oldScroll > this.scrollY) {
        x += 5;
    } else {
        x -= 5;
    }
    
    this.oldScroll = this.scrollY;
    
    parallax.style.backgroundPosition = `0 ${x}px`;
});

