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

for (let i = 0; i < k.length; i++) {
  k[i].addEventListener("click", function (e) {
    console.log(k[i]);
    let query = "";
    k[i].classList.add("selected");
    console.log(k[i].classList.contains("selected"));

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

    console.log(query);

    if (query === "") {
      fetch(`http://localhost:3000`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("jsonData", JSON.stringify(data));
          window.location.reload();
        })
        .catch((err) => {
          console.log("unable to fetch");
        });
    } else {
      fetch(`http://localhost:3000/${query}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("jsonData", JSON.stringify(data));
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
