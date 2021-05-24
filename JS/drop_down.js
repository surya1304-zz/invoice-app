const p = document.getElementsByClassName("dropdown__selected");
const k = document.querySelectorAll("#drop_down ul li");
const dropdown = document.getElementById("drop_down");

p[0].addEventListener("click", function (e) {
    dropdown.classList.toggle("show");
});

p[0].addEventListener("mouseover", function (e) {
    dropdown.classList.add("show");
});

p[0].addEventListener("mouseleave", function (e) {
    dropdown.addEventListener("mouseleave", function (e) {
        dropdown.classList.remove("show");
    });
});

let checkbox;

if (localStorage.getItem("check")) {
    checkbox = JSON.parse(localStorage.getItem("check"));
} else {
    checkbox = {
        0: false,
        1: false,
        2: false,
    };
}

for (let i = 0; i < k.length; i++) {
    k[i].addEventListener("click", function (e) {
        let query = "";
        k[i].classList.add("selected");
        if (checkbox[i] === true) {
            checkbox[i] = false;
        } else {
            checkbox[i] = true;
        }
        localStorage.setItem("check", JSON.stringify(checkbox));

        let checkboxes = document.querySelectorAll(".regular-checkbox");
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                if (query.length === 0) {
                    query = checkboxes[j].value;
                } else {
                    query = query + `&${checkboxes[j].value}`;
                }
            }
        }

        if (query === "") {
            fetch(`http://localhost:3000`)
                .then((res) => res.json())
                .then((data) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log("unable to fetch");
                });
        } else {
            fetch(`http://localhost:3000/${query}`)
                .then((res) => res.json())
                .then((data) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log("unable to fetch");
                });
        }

        for (let d = 0; d < k.length; d++) {
            if (k[d].classList.contains("selected") && d != i) {
                k[d].classList.remove("selected");
            }
        }
        dropdown.classList.remove("show");
    });
}
