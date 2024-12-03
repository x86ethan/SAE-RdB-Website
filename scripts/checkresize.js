let hasAnimated = false;
let hasAnimated2 = false;
let hasAnimated3 = false;
let hasAnimated4 = false;

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
        console.log('checkResize2 triggered at', window.innerWidth);
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

function checkResize3() {
    if (window.innerWidth > 600) { // <= 800, inclut 800px
        console.log('checkResize3 triggered at', window.innerWidth);
        if (!hasAnimated3) { 
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchangeback2 0.24s forwards';
            });
            hasAnimated3 = true;
        }
    } else {
        hasAnimated3 = false;
    }
}

function checkResize4() {
    if (window.innerWidth <= 600) {
        if (!hasAnimated4) { 
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchange2 0.24s forwards';
            });
            hasAnimated4 = true;
        }
    } else {
        hasAnimated4 = false;
    }
}

function handleResize() {
    console.clear(); // Pour éviter des logs multiples
    console.log('Resize event at', window.innerWidth);
    checkResize();
    checkResize2();
    checkResize3();
    checkResize4();
}

window.addEventListener('resize', handleResize);
handleResize();

