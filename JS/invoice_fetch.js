let search = window.location.search;

let sub = search.substring(4, 10);

document.title = `Invoice id=${sub}`;

fetch(`http://localhost:3000/id/${sub}`)
    .then((res) => res.json())
    .then((data) => {
        let stat = document.querySelector("#status");
        let prevStat = stat.innerHTML;
        stat.innerHTML = data[0].status;
        stat.classList.replace(prevStat, data[0].status);
        let invoices__id = document.querySelector(".invoices__id");
        invoices__id.innerHTML = data[0].id;
        let invoices__des = document.querySelector(".invoices__des");
        invoices__des.innerHTML = data[0].description;
        let fromStreetAddress = document.querySelector(
            ".fromAddress .fromStreetAddress"
        );
        fromStreetAddress.innerHTML = data[0].senderAddress.street;
        let fromCity = document.querySelector(".fromAddress .fromCity");
        fromCity.innerHTML = data[0].senderAddress.city;
        let fromPostCode = document.querySelector(".fromAddress .fromPostCode");
        fromPostCode.innerHTML = data[0].senderAddress.postCode;
        let fromCountry = document.querySelector(".fromAddress .fromCountry");
        fromCountry.innerHTML = data[0].senderAddress.country;

        let invoices__date = document.getElementById("invoices__date");
        invoices__date.innerHTML = formatdate(data[0].createdAt);

        let invoices__due = document.getElementById("invoices__due");
        invoices__due.innerHTML = formatdate(data[0].paymentDue);

        let clientName = document.getElementById("clientName");
        clientName.innerHTML = data[0].clientName;

        let toStreetAddress = document.querySelector(
            ".toAddress .toStreetAddress"
        );
        toStreetAddress.innerHTML = data[0].clientAddress.street;
        let toCity = document.querySelector(".toAddress .toCity");
        toCity.innerHTML = data[0].clientAddress.city;
        let toPostCode = document.querySelector(".toAddress .toPostCode");
        toPostCode.innerHTML = data[0].clientAddress.postCode;
        let toCountry = document.querySelector(".toAddress .toCountry");
        toCountry.innerHTML = data[0].clientAddress.country;

        let client__email = document.getElementById("client__email");
        client__email.innerHTML = data[0].clientEmail;

        let invoicesItemsList = document.querySelector(".invoicesItemsList");

        for (let i = 0; i < data[0].items.length; i++) {
            let division = document.createElement("div");
            division.classList.add("lt");

            let itemName = document.createElement("p");
            itemName.classList.add("Dark");
            itemName.classList.add("ListItem");
            itemName.innerHTML = data[0].items[i].name;

            let Total = document.createElement("p");
            Total.classList.add("Dark");
            Total.classList.add("ListItem");
            Total.classList.add("Right");
            Total.innerHTML = `£ ${data[0].items[i].total}`;

            let QTY = document.createElement("p");
            QTY.classList.add("Light");
            QTY.classList.add("ListItem");
            QTY.classList.add("Center");
            QTY.innerHTML = data[0].items[i].quantity;

            let Price = document.createElement("p");
            Price.classList.add("Light");
            Price.classList.add("ListItem");
            Price.classList.add("Right");
            Price.innerHTML = `£ ${data[0].items[i].price}`;

            division.appendChild(itemName);
            division.appendChild(QTY);
            division.appendChild(Price);
            division.appendChild(Total);
            invoicesItemsList.appendChild(division);
        }

        let tota = document.querySelector(".TA");
        tota.innerHTML = `£ ${data[0].total}`;

        let editform = document.forms[0];

        let fromStreetAddressinput = editform["fromStreetAddress"];
        let fromCityinput = editform["fromCity"];
        let fromPostCodeinput = editform["fromPostCode"];
        let fromCountryinput = editform["fromCountry"];
        let toClientNameinput = editform["toClientName"];
        let toClientEmailinput = editform["toClientEmail"];
        let toStreetAddressinput = editform["toStreetAddress"];
        let toCityinput = editform["toCity"];
        let toPostCodeinput = editform["toPostCode"];
        let toCountryinput = editform["toCountry"];
        let datePicker = document.querySelector(".issue-date");
        let selectedDate = document.querySelector(".selected-date");
        let paymentTerm = document.querySelector(".selected-item");
        let projectDescriptioninput = editform["projectDescription"];

        fromStreetAddressinput.value = data[0].senderAddress.street;
        fromCityinput.value = data[0].senderAddress.city;
        fromPostCodeinput.value = data[0].senderAddress.postCode;
        fromCountryinput.value = data[0].senderAddress.country;

        toClientNameinput.value = data[0].clientName;
        toClientEmailinput.value = data[0].clientEmail;

        toStreetAddressinput.value = data[0].clientAddress.street;
        toCityinput.value = data[0].clientAddress.city;
        toPostCodeinput.value = data[0].clientAddress.postCode;
        toCountryinput.value = data[0].clientAddress.country;

        datePicker.classList.add("disabled");

        let dater = new Date(data[0].createdAt);

        selectedDate.dataset.value = dater;
        selectedDate.innerHTML = formatdate(selectedDate.dataset.value);

        let mont = document.querySelector(".date-picker .dates .month .mth");

        mont.innerHTML = displayDate(selectedDate.dataset.value);

        let dayf = document.querySelector(".date-picker .dates .days");

        for (let i = 0; i < 35; i++) {
            if (
                dayf.children[i].classList.contains("selected") &&
                i !== dater.getDate()
            ) {
                dayf.children[i].classList.remove("selected");
            }

            if (i === dater.getDate() - 1) {
                dayf.children[i].classList.add("selected");
            }
        }

        paymentTerm.dataset.value = data[0].paymentTerms;

        data[0].paymentTerms === 1
            ? (paymentTerm.innerHTML = `Net ${data[0].paymentTerms} Day`)
            : (paymentTerm.innerHTML = `Net ${data[0].paymentTerms} Days`);

        let dropk = document.querySelector(".new__payment-dropdown");
        let ites = dropk.children[2].children[0].children;

        for (let i = 0; i < ites.length; i++) {
            if (
                ites[i].value !== data[0].paymentTerms &&
                ites[i].classList.contains("selected")
            ) {
                ites[i].classList.remove("selected");
            }
            if (ites[i].value === data[0].paymentTerms) {
                ites[i].classList.add("selected");
            }
        }

        projectDescriptioninput.value = data[0].description;

        const hari = document.querySelector(".invoice__items");

        for (let i = 0; i < data[0].items.length; i++) {
            const itemdiv = document.createElement("div");
            itemdiv.classList.add("item");

            const input1 = document.createElement("input");
            input1.classList.add("invoice__input");
            input1.name = "itemName";
            input1.required = true;
            input1.value = data[0].items[i].name;

            const input2 = document.createElement("input");
            input2.classList.add("invoice__input");
            input2.classList.add("quantity");
            input2.name = "quantity";
            input2.required = true;
            input2.setAttribute("onchange", "Hello()");
            input2.value = data[0].items[i].quantity;

            const input3 = document.createElement("input");
            input3.classList.add("invoice__input");
            input3.classList.add("price");
            input3.name = "price";
            input3.required = true;
            input3.setAttribute("onchange", "Hello()");
            input3.value = data[0].items[i].price;

            const input4 = document.createElement("p");
            input4.classList.add("invoice__input");
            input4.classList.add("total");
            input4.innerHTML = data[0].items[i].total;
            input4.dataset.value = data[0].items[i].total;

            const div = document.createElement("button");
            div.classList.add("delete-icon");

            itemdiv.appendChild(input1);
            itemdiv.appendChild(input2);
            itemdiv.appendChild(input3);
            itemdiv.appendChild(input4);
            itemdiv.appendChild(div);

            hari.appendChild(itemdiv);

            let deleteIcons = document.querySelectorAll(".delete-icon");
            deleteIcons.forEach((deleteIcon) => {
                deleteIcon.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.target.parentElement.remove();
                });
            });
        }
    });

const monts = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

function formatdate(dat) {
    let d = new Date(dat);
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let month = d.getMonth();
    let year = d.getFullYear();

    return day + " " + monts[month] + " " + year;
}

function displayDate(dat) {
    let d = new Date(dat);
    return monts[d.getMonth()] + " " + d.getFullYear();
}
