let mediaquery = window.matchMedia("(max-width: 630px)");
let dropdownItem = document.querySelector(
    "body > div.tot > div.empty > header > div > div.header__right > div.filter_dropdown > div > div.dropdown__selected"
);

let NewButton = document.querySelector(".button1");
let header = document.querySelector(".header__right");
let container = document.querySelector("div.empty:nth-child(3)");
let cont = document.querySelector(".invoice-count");

const handleMobileChange = (e) => {
    dropdownItem.innerHTML = e.matches ? "Filter" : "filter by status";
    dropdownItem.style.paddingRight = e.matches ? "2.5rem" : "6rem";
    e.matches
        ? dropdownItem.classList.add("moveleft")
        : dropdownItem.classList.contains("moveleft")
        ? dropdownItem.classList.remove("moveleft")
        : console.log("moveleft not present");
    dropdownItem.style.transform = e.matches ? "translateX(8rem)" : "";
    NewButton.innerHTML = e.matches ? "New" : "New Invoice";
    header.style.marginRight = e.matches ? "1rem" : 0;
};

const handleCountChange = (e) => {
    cont.innerHTML = countValue();
};

const countValue = () => {
    if (mediaquery.matches) {
        if (window.e.length === 1) {
            return `1 Invoice`;
        } else {
            return `${window.e.length} invoices`;
        }
    } else {
        if (window.e.length === 1) {
            return `There is 1 invoice`;
        } else {
            return `There are ${window.e.length} total invoices`;
        }
    }
};

mediaquery.addListener(handleCountChange);

mediaquery.addListener(handleMobileChange);

handleMobileChange(mediaquery);
