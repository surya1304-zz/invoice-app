const date_picker_element = document.querySelector(".date-picker");
const selected_date_element = document.querySelector(
    ".date-picker .selected-date"
);
const selected = document.querySelector(".issue-date");
const dates_element = document.querySelector(".date-picker .dates");
const mth_element = document.querySelector(".date-picker .dates .month .mth");
const next_mth_element = document.querySelector(
    ".date-picker .dates .month .next-mth"
);
const prev_mth_element = document.querySelector(
    ".date-picker .dates .month .prev-mth"
);
const days_element = document.querySelector(".date-picker .dates .days");

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener("click", toggleDatePicker);
next_mth_element.addEventListener("click", goToNextMonth);
prev_mth_element.addEventListener("click", goToPrevMonth);

// FUNCTIONS
function toggleDatePicker(e) {
    let dontoggle = false;
    e.composedPath().map((item) => {
        if (item.classList)
            dontoggle = dontoggle || item.classList.contains("dates");
    });
    if (!dontoggle) {
        dates_element.classList.toggle("active");
        selected.classList.toggle("active");
    }
}

function goToNextMonth(e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + " " + year;
    populateDates();
}

function goToPrevMonth(e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + " " + year;
    populateDates();
}

function populateDates(e) {
    days_element.innerHTML = "";
    let amount_days = 31;

    if ((month == 1 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
        amount_days = 29;
    } else if (month == 1 && year % 100 == 0 && year % 400 != 0) {
        amount_days = 28;
    } else if (month == 1) {
        amount_days = 28;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        amount_days = 30;
    }

    for (let i = 0; i < 35; i++) {
        if (i < amount_days) {
            const day_element = document.createElement("div");
            day_element.classList.add("day");
            day_element.textContent = i + 1;

            if (
                selectedDay == i + 1 &&
                selectedYear == year &&
                selectedMonth == month
            ) {
                day_element.classList.add("selected");
            }

            day_element.addEventListener("click", function () {
                selectedDate = new Date(
                    year + "-" + (month + 1) + "-" + (i + 1)
                );
                selectedDay = i + 1;
                selectedMonth = month;
                selectedYear = year;

                selected_date_element.textContent = formatDate(selectedDate);
                selected_date_element.dataset.value = selectedDate;

                dates_element.classList.remove("active");
                populateDates();
            });

            days_element.appendChild(day_element);
        } else {
            const day_element = document.createElement("div");
            day_element.classList.add("day");
            day_element.classList.add("inactive");
            day_element.textContent = i - amount_days + 1;
            days_element.appendChild(day_element);
        }
    }
}

// HELPER FUNCTIONS
function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let year = d.getFullYear();

    return day + " " + months[month] + " " + year;
}
