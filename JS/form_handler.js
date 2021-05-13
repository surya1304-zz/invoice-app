let add_form = document.forms[0];
let newer = document.querySelector(".new");
console.log(newer);

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
  console.log(itemName);
  console.log(typeof itemName);
  console.log(itemName.length);
  console.log(quantity);
  console.log(price);
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
      //   console.log(itemName[i].value);
    }
    for (let i = 0; i < quantity.length; i++) {
      if (itemName[i].value === "") {
        console.log("Quantity Can't be empty");
        returnValue = returnValue && false;
      }
      //   console.log(quantity[i].value);
    }
    for (let i = 0; i < price.length; i++) {
      if (itemName[i].value === "") {
        console.log("Price Can't be empty");
        returnValue = returnValue && false;
      }
      //   console.log(price[i].value);
    }
  } else if (!itemName.length) {
    if (itemName.value === "" && quantity.value === "" && price.value === "")
      returnValue = returnValue && false;
    // console.log(itemName.value);
    // console.log(quantity.value);
    // console.log(price.value);
  }
  return returnValue;
}
