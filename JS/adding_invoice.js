const add_Item = document.getElementById("addItem");
console.log(add_Item);
const items = document.querySelector(".invoice__items");

add_Item.addEventListener("click", function () {
  const item = document.createElement("div");
  item.classList.add("item");

  const input1 = document.createElement("input");
  input1.classList.add("invoice__input");
  const input2 = document.createElement("input");
  input2.classList.add("invoice__input");
  const input3 = document.createElement("input");
  input3.classList.add("invoice__input");
  const input4 = document.createElement("input");
  input4.classList.add("invoice__input");
  const div = document.createElement("button");
  div.classList.add("delete-icon");

  item.appendChild(input1);
  item.appendChild(input2);
  item.appendChild(input3);
  item.appendChild(input4);
  item.appendChild(div);

  items.appendChild(item);

  const deleteIcon = document.querySelectorAll(".delete-icon");

  for (let i = 0; i < deleteIcon.length; i++) {
    let fs = deleteIcon[i];
    fs.addEventListener("click", function (e) {
      let g = fs.parentElement;
      g.remove();
    });
  }
});
