let add_form = document.forms[0];
let newer = document.querySelector(".new");
let newee = document.querySelector(".selected-date");
let payTerms = document.querySelector(".selected-item");
let draft = document.querySelector("#draft");
let saveandsend = document.querySelector("#saveandsend");

draft.addEventListener("click", (e) => {
  e.preventDefault();
  formValidate();
});

saveandsend.addEventListener("click", (e) => {
  e.preventDefault();
  formValidate();
});

let total = document.querySelector(".total");

function formValidate() {
  newer.classList.add("validate");
  let fromStreetAddress = add_form["fromStreetAddress"].value;
  let fromCity = add_form["fromCity"].value;
  let fromPostCode = add_form["fromPostCode"].value;
  let fromCountry = add_form["fromCountry"].value;
  let toClientName = add_form["toClientName"].value;
  let toClientEmail = add_form["toClientEmail"].value;
  let toStreetAddress = add_form["toStreetAddress"].value;
  let toCity = add_form["toCity"].value;
  let toPostCode = add_form["toPostCode"].value;
  let toCountry = add_form["toCountry"].value;
  let projectDescription = add_form["projectDescription"].value;
  let itemName = add_form["itemName"];
  let quantity = add_form["quantity"];
  let price = add_form["price"];
  let invoiceDate = new Date(newee.dataset.value);
  let due = payTerms.dataset.value;
  let paymentDue = new Date(invoiceDate.getTime() + due * 24 * 60 * 60 * 1000);

  console.log(fromStreetAddress);
  console.log(fromCity);
  console.log(fromPostCode);
  console.log(fromCountry);
  console.log(toClientName);
  console.log(toClientEmail);
  console.log(toStreetAddress);
  console.log(toCity);
  console.log(toPostCode);
  console.log(toCountry);
  console.log(projectDescription);
  console.log(price);

  console.log(invoiceDate);
  console.log(due);
  console.log(paymentDue);

  if (!itemName.length) {
    console.log(`${itemName.value} ${quantity.value} ${price.value}`);
  } else if (itemName.length) {
    for (let i = 0; i < itemName.length; i++)
      `${itemName[i].value} ${quantity[i].value} ${price[i].value}`;
  }

  let returnValue = true;

  if (fromStreetAddress === "") {
    console.log("Street Address Can't be empty");
    returnValue = returnValue && false;
  }
  if (fromCity === "") {
    console.log("City Can't be empty");
    returnValue = returnValue && false;
  }
  if (fromPostCode === "") {
    console.log("Post Code Can't be empty");
    returnValue = returnValue && false;
  }
  if (fromCountry === "") {
    console.log("Country Can't be empty");
    returnValue = returnValue && false;
  }
  if (toClientName === "") {
    console.log("Client Name Can't be empty");
    returnValue = returnValue && false;
  }
  if (toClientEmail === "") {
    console.log("Client Email Can't be empty");
    returnValue = returnValue && false;
  }
  if (toStreetAddress === "") {
    console.log("Street Address Can't be empty");
    returnValue = returnValue && false;
  }
  if (toCity === "") {
    console.log("City Can't be empty");
    returnValue = returnValue && false;
  }
  if (toPostCode === "") {
    console.log("Post Code Can't be empty");
    returnValue = returnValue && false;
  }
  if (toCountry === "") {
    console.log("Country Can't be empty");
    returnValue = returnValue && false;
  }
  if (projectDescription === "") {
    console.log("Project Description Can't be empty");
    returnValue = returnValue && false;
  }

  if (itemName.length) {
    for (let i = 0; i < itemName.length; i++) {
      if (itemName[i].value === "") {
        console.log("Item Name Can't be empty");
        returnValue = returnValue && false;
      }
    }
    for (let i = 0; i < quantity.length; i++) {
      if (quantity[i].value === "") {
        console.log("Quantity Can't be empty");
        returnValue = returnValue && false;
      }
    }
    for (let i = 0; i < price.length; i++) {
      if (price[i].value === "") {
        console.log("Price Can't be empty");
        returnValue = returnValue && false;
      }
    }
  } else if (!itemName.length) {
    if (itemName.value === "" && quantity.value === "" && price.value === "") {
      returnValue = returnValue && false;
    }
  }
  return returnValue;
}
