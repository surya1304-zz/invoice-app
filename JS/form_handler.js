let add_form = document.forms[0];
let newer = document.querySelector(".new");
let newee = document.querySelector(".selected-date");
let payTerms = document.querySelector(".selected-item");
let draft = document.querySelector("#draft");
let saveandsend = document.querySelector("#saveandsend");

const FormatDate = (date) => {
    let dateFormatted;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let strmon = month / 10 < 1 ? "0" + month : String(month);
    let strdat = day / 10 < 1 ? "0" + day : String(day);

    dateFormatted = `${year}-${strmon}-${strdat}`;

    return dateFormatted;
};

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

let accumilator = [];

if (jsonData) {
    let parsed = JSON.parse(jsonData);
    for (let i = 0; i < parsed.length; i++) {
        accumilator.push(parsed[i].id);
    }
}

const addNewInvoice = () => {
    let id = GenerateId();
    while (true) {
        if (accumilator.includes(id)) id = GenerateId();
        else break;
    }
    return id;
};

saveandsend.addEventListener("click", (e) => {
    e.preventDefault();
    formValidate();

    let tot = document.querySelectorAll(".total");

    let fromStreetAddress1 = add_form["fromStreetAddress"].value;
    let fromCity1 = add_form["fromCity"].value;
    let fromPostCode1 = add_form["fromPostCode"].value;
    let fromCountry1 = add_form["fromCountry"].value;
    let toClientName1 = add_form["toClientName"].value;
    let toClientEmail1 = add_form["toClientEmail"].value;
    let toStreetAddress1 = add_form["toStreetAddress"].value;
    let toCity1 = add_form["toCity"].value;
    let toPostCode1 = add_form["toPostCode"].value;
    let toCountry1 = add_form["toCountry"].value;
    let projectDescription1 = add_form["projectDescription"].value;
    let itemName1 = add_form["itemName"];
    let quantity1 = add_form["quantity"];
    let price1 = add_form["price"];
    let invoiceDate1 = new Date(newee.dataset.value);
    let due1 = payTerms.dataset.value;
    let paymentDue1 = new Date(
        invoiceDate1.getTime() + due1 * 24 * 60 * 60 * 1000
    );

    let kit = [];
    if (itemName1.length) {
        for (let i = 0; i < itemName1.length; i++) {
            let item = {
                name: itemName1[i].value,
                quantity: Number(quantity1[i].value),
                price: Number(price1[i].value),
                total: Number(tot[i].dataset.value),
            };
            kit.push(item);
        }
    } else if (!itemName1.length) {
        let item1 = {
            name: itemName1.value,
            quantity: Number(quantity1.value),
            price: Number(price1.value),
            total: Number(tot.value),
        };
        kit.push(item1);
    }

    let accumilate = 0;

    for (let i = 0; i < kit.length; i++) {
        accumilate = accumilate + Number(kit[i].total);
    }

    let obj = {
        id: addNewInvoice(),
        createdAt: FormatDate(invoiceDate1),
        paymentDue: FormatDate(paymentDue1),
        description: projectDescription1,
        paymentTerms: Number(due1),
        clientName: toClientName1,
        clientEmail: toClientEmail1,
        status: "pending",
        senderAddress: {
            street: fromStreetAddress1,
            city: fromCity1,
            postCode: fromPostCode1,
            country: fromCountry1,
        },
        clientAddress: {
            street: toStreetAddress1,
            city: toCity1,
            postCode: toPostCode1,
            country: toCountry1,
        },
        items: kit,
        total: accumilate,
    };

    const POST_OPTIONS = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    fetch("http://localhost:3000", POST_OPTIONS).then((res) => {
        window.location.reload();
    });
});

draft.addEventListener("click", (e) => {
    e.preventDefault();

    formValidate();

    let tot = document.querySelectorAll(".total");

    let fromStreetAddress1 = add_form["fromStreetAddress"].value;
    let fromCity1 = add_form["fromCity"].value;
    let fromPostCode1 = add_form["fromPostCode"].value;
    let fromCountry1 = add_form["fromCountry"].value;
    let toClientName1 = add_form["toClientName"].value;
    let toClientEmail1 = add_form["toClientEmail"].value;
    let toStreetAddress1 = add_form["toStreetAddress"].value;
    let toCity1 = add_form["toCity"].value;
    let toPostCode1 = add_form["toPostCode"].value;
    let toCountry1 = add_form["toCountry"].value;
    let projectDescription1 = add_form["projectDescription"].value;
    let itemName1 = add_form["itemName"];
    let quantity1 = add_form["quantity"];
    let price1 = add_form["price"];
    let invoiceDate1 = new Date(newee.dataset.value);
    let due1 = payTerms.dataset.value;
    let paymentDue1 = new Date(
        invoiceDate1.getTime() + due1 * 24 * 60 * 60 * 1000
    );

    let kit = [];
    if (itemName1.length) {
        for (let i = 0; i < itemName1.length; i++) {
            let item = {
                name: itemName1[i].value,
                quantity: Number(quantity1[i].value),
                price: Number(price1[i].value),
                total: Number(tot[i].dataset.value),
            };
            kit.push(item);
        }
    } else if (!itemName1.length) {
        let item1 = {
            name: itemName1.value,
            quantity: Number(quantity1.value),
            price: Number(price1.value),
            total: Number(tot.value),
        };
        kit.push(item1);
    }

    let accumilate = 0;

    for (let i = 0; i < kit.length; i++) {
        accumilate = accumilate + Number(kit[i].total);
    }

    let obj = {
        id: addNewInvoice(),
        createdAt: FormatDate(invoiceDate1),
        paymentDue: FormatDate(paymentDue1),
        description: projectDescription1,
        paymentTerms: Number(due1),
        clientName: toClientName1,
        clientEmail: toClientEmail1,
        status: "draft",
        senderAddress: {
            street: fromStreetAddress1,
            city: fromCity1,
            postCode: fromPostCode1,
            country: fromCountry1,
        },
        clientAddress: {
            street: toStreetAddress1,
            city: toCity1,
            postCode: toPostCode1,
            country: toCountry1,
        },
        items: kit,
        total: accumilate,
    };

    const POST_OPTIONS = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    fetch("http://localhost:3000", POST_OPTIONS).then((res) => {
        window.location.reload();
    });
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
        if (
            itemName.value === "" &&
            quantity.value === "" &&
            price.value === ""
        ) {
            returnValue = returnValue && false;
        }
    }
    return returnValue;
}
