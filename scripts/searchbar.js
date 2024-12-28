document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");

    searchIcon.addEventListener("click", () => {
        if (searchBar.classList.contains("active")) {
            searchBar.classList.remove("active");
            searchBar.classList.add("inactive");
        } else {
            searchBar.classList.remove("inactive");
            searchBar.classList.add("active");
        }
    });
});