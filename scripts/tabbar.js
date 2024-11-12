function changeTab() {
    tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle("tab-active");
    }

    tabContentRegular = document.getElementById("tab-content-regular");
    tabContentOnce = document.getElementById("tab-content-once");

    tabContentOnce.classList.toggle("shown");
    tabContentOnce.classList.toggle("hidden");

    tabContentRegular.classList.toggle("shown");
    tabContentRegular.classList.toggle("hidden");
}