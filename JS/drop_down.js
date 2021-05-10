const p = document.getElementsByClassName("dropdown__selected");
const k = document.querySelectorAll("#drop_down ul li");
const dropdown = document.getElementById("drop_down");

p[0].addEventListener("mouseover", function (e) {
  dropdown.classList.add("show");
});

p[0].addEventListener("mouseleave", function (e) {
  dropdown.addEventListener("mouseleave", function (e) {
    dropdown.classList.remove("show");
  });
});

function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
    return false;
  }
}

for (let i = 0; i < k.length; i++) {
  k[i].addEventListener("click", function (e) {
    k[i].classList.add("selected");
    for (let d = 0; d < k.length; d++) {
      if (k[d].classList.contains("selected") && d != i) {
        k[d].classList.remove("selected");
      }
    }
    dropdown.classList.remove("show");
  });
}
