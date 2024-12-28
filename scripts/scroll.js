let lastScrollY = 0;
let ticking = false;

function calculateFontSize() {
    const title = document.querySelector(".big-title");
    const maxScroll = window.innerHeight;
    const scrollY = window.scrollY;

    const isMobile = window.innerWidth <= 800;
    const minSize = isMobile ? 4 : 12;
    const maxSize = isMobile ? 24 : 70;

    const newSize = Math.min(maxSize, minSize + (scrollY / maxScroll) * (maxSize - minSize));

    title.style.fontSize = `${newSize}em`;
    ticking = false;
}

function handleResize() {
    calculateFontSize();
}

function handleScroll() {
    if (!ticking) {
        ticking = true;
        requestAnimationFrame(calculateFontSize);
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);

calculateFontSize();