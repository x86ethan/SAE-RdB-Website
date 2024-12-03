let hasAnimated = false;
let hasAnimated2 = false;

function checkResize() {
    if (window.innerWidth > 1400) {
        if (!hasAnimated) {
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchangeback 0.24s forwards';
            });
            hasAnimated = true;
        }
    } else if (window.innerWidth <= 1400) {
        hasAnimated = false; 
    } else {
        hasAnimated = false;
    }
}

function checkResize2() {
    if (window.innerWidth <= 1400) {
        if (!hasAnimated2) { 
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchange 0.24s forwards';
            });
            hasAnimated2 = true;
        }
    } else {
        hasAnimated2 = false;
    }
}

function handleResize() {
    checkResize();
    checkResize2();
}

window.addEventListener('resize', handleResize);

handleResize();
