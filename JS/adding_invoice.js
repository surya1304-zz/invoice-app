const add_Item = document.getElementById("addItem");
const items = document.querySelector(".invoice__items");

add_Item.addEventListener("click", function (e) {
    e.preventDefault();

    const item = document.createElement("div");
    item.classList.add("item");

    const input1 = document.createElement("input");
    input1.classList.add("invoice__input");
    input1.name = "itemName";
    input1.required = true;
    const input2 = document.createElement("input");
    input2.classList.add("invoice__input");
    input2.classList.add("quantity");
    input2.name = "quantity";
    input2.required = true;
    input2.setAttribute("onchange", "Hello()");
    const input3 = document.createElement("input");
    input3.classList.add("invoice__input");
    input3.classList.add("price");
    input3.name = "price";
    input3.required = true;
    input3.setAttribute("onchange", "Hello()");
    const input4 = document.createElement("p");
    input4.classList.add("invoice__input");
    input4.classList.add("total");
    const div = document.createElement("button");
    div.classList.add("delete-icon");

    item.appendChild(input1);
    item.appendChild(input2);
    item.appendChild(input3);
    item.appendChild(input4);
    item.appendChild(div);

    items.appendChild(item);

    let deleteIcons = document.querySelectorAll(".delete-icon");
    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", (e) => {
            e.preventDefault();
            // e.preventDefault();
            console.log(e.target.parentElement);
            e.target.parentElement.remove();
        });
    });

    console.log(deleteIcons);
});

// const deleteIcon = document.querySelectorAll(".delete-icon");
// console.log(deleteIcon);
// for (let i = 0; i < deleteIcon.length; i++) {
//     let fs = deleteIcon[i];
//     fs.addEventListener("click", function (e) {
//         e.preventDefault();
//         let g = fs.parentElement;
//         g.remove();
//     });
// }
