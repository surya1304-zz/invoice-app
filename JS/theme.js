let klr = document.getElementById("theme");
klr.style.cursor = "pointer";
klr.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    if (themeName === "theme-light") {
        klr.src = "../starter-code/assets/icon-moon.svg";
    }
    if (themeName === "theme-dark") {
        klr.src = "../starter-code/assets/icon-sun.svg";
    }
    document.documentElement.className = themeName;
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
})();
