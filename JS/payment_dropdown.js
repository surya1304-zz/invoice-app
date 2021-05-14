const pl = document.getElementsByClassName("selected-item");
const kl = document.querySelectorAll("#dropdown ul li");
const dropdownl = document.getElementById("dropdown");

pl[0].addEventListener("click", function (e) {
  dropdownl.classList.toggle("show");
  pl[0].classList.toggle("active");
});

for (let i = 0; i < kl.length; i++) {
  kl[i].addEventListener("click", function (e) {
    kl[i].classList.add("selected");
    pl[0].innerHTML = kl[i].innerHTML;
    pl[0].dataset.value = kl[i].value;
    for (let d = 0; d < kl.length; d++) {
      if (kl[d].classList.contains("selected") && d != i) {
        kl[d].classList.remove("selected");
      }
    }
    dropdownl.classList.remove("show");
  });
}
