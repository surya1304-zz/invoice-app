let search = window.location.search;
console.log(search);
let sub = search.substring(4, 10);
console.log(sub);
fetch(`http://localhost:3000/id/${sub}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0]);
        let stat = document.querySelector("#status");
        console.log(stat);
        let prevStat = stat.innerHTML;
        console.log(prevStat);
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
        console.log(invoices__date);
        console.log(data[0].createdAt);
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
