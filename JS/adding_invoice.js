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
  const input3 = document.createElement("input");
  input3.classList.add("invoice__input");
  input3.classList.add("price");
  input3.name = "price";
  input3.required = true;
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

  const deleteIcon = document.querySelectorAll(".delete-icon");

  for (let i = 0; i < deleteIcon.length; i++) {
    let fs = deleteIcon[i];
    fs.addEventListener("click", function (e) {
      let g = fs.parentElement;
      g.remove();
    });
  }
});

function GenerateId() {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = 0; i < 2; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }

  var randomChars1 = "1234567890";
  for (var i = 0; i < 4; i++) {
    result += randomChars1.charAt(
      Math.floor(Math.random() * randomChars1.length)
    );
  }

  return result;
}

let jsonData = localStorage.getItem("jsonData");
let parsed = JSON.parse(jsonData);
let accumilator = [];

for (let i = 0; i < parsed.length; i++) {
  accumilator.push(parsed[i].id);
}

let save = document.querySelector("#saveandsend");

save.addEventListener("click", () => addNewInvoice());

const addNewInvoice = () => {
  let id = GenerateId();
  while (true) {
    if (accumilator.includes(id)) id = GenerateId();
    else break;
  }
  console.log(id);
};

// "id": "RT3080",
//     "createdAt": "2021-08-18",
//     "paymentDue": "2021-08-19",
//     "description": "Re-branding",
//     "paymentTerms": 1,
//     "clientName": "Jensen Huang",
//     "clientEmail": "jensenh@mail.com",
//     "status": "paid",
//     "senderAddress": {
//       "street": "19 Union Terrace",
//       "city": "London",
//       "postCode": "E1 3EZ",
//       "country": "United Kingdom"
//     },
//     "clientAddress": {
//       "street": "106 Kendell Street",
//       "city": "Sharrington",
//       "postCode": "NR24 5WQ",
//       "country": "United Kingdom"
//     },
//     "items": [
//       {
//         "name": "Brand Guidelines",
//         "quantity": 1,
//         "price": 1800.9,
//         "total": 1800.9
//       }
//     ],
//     "total": 1800.9
//   }
