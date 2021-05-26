import store from "./redux/store.js";
import { addData } from "./redux/data.js";

const card = document.querySelector(".container");
const invoice_count = document.querySelector(".invoice-count");

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let p;
let count;

const medque = window.matchMedia("(max-width: 630px)");

const getCount = () => {
    return medque.matches ? true : false;
};

getCount(medque);

if (localStorage.getItem("check") === {} || !localStorage.getItem("check")) {
    fetch("http://localhost:3000")
        .then((resp) => resp.json())
        .then((data) => {
            p = data;
            window.e = p;

            p.length === 0
                ? (count = `No invoices`)
                : getCount()
                ? p.length === 1
                    ? (count = `1 Invoice`)
                    : (count = `${p.length} invoices`)
                : p.length === 1
                ? (count = `There is 1 invoice`)
                : (count = `There are ${p.length} total invoices`);
            invoice_count.innerHTML = count;

            if (p.length !== 0) {
                for (let i = 0; i < p.length; i++) {
                    let k = document.createElement("div");
                    k.classList.add("card");

                    let id = document.createElement("h4");
                    id.classList.add("id");
                    id.innerHTML = p[i].id;

                    let due_date = document.createElement("p");
                    let date = p[i].paymentDue;
                    let formattedDate = formatDate(date);
                    let due = `Due ${formattedDate}`;
                    due_date.classList.add("due_date");
                    due_date.innerHTML = due;

                    let name = document.createElement("p");
                    name.classList.add("name");
                    name.innerHTML = p[i].clientName;

                    let amount = document.createElement("h3");
                    amount.innerHTML = `£ ${p[i].total}`;
                    amount.classList.add("amount");

                    let status = document.createElement("p");
                    status.classList.add("status");
                    status.classList.add(p[i].status);
                    status.innerHTML = p[i].status;

                    let arrow = document.createElement("a");
                    arrow.classList.add("arrow");
                    arrow.href = `./invoice.html?ID=${p[i].id}`;

                    k.appendChild(id);
                    k.appendChild(due_date);
                    k.appendChild(name);
                    k.appendChild(amount);
                    k.appendChild(status);
                    k.appendChild(arrow);

                    card.appendChild(k);
                }
            } else {
                let div = document.createElement("div");
                div.classList.add("empty");

                let img = document.createElement("img");
                img.classList.add("empty-img");
                img.src = "../starter-code/assets/illustration-empty.svg";

                let head = document.createElement("p");
                head.classList.add("head");
                head.innerHTML = "There is nothing here";

                let desc = document.createElement("p");
                desc.innerHTML = `Create an invoice by clicking the<br/><b>New Invoice</b> button and get started`;
                div.appendChild("img");
                div.appendChild("head");
                div.appendChild("desc");

                card.appendChild(div);
            }
        })
        .catch((err) => {
            invoice_count.innerHTML = `No invoices`;

            let div = document.createElement("div");
            div.classList.add("empty");

            let img = document.createElement("img");
            img.src = "../starter-code/assets/illustration-empty.svg";

            let head = document.createElement("p");
            head.classList.add("head");
            head.innerHTML = "There is nothing here";

            let desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerHTML = `Create an invoice by clicking the<br/><b>New Invoice</b> button and get started`;
            div.appendChild(img);
            div.appendChild(head);
            div.appendChild(desc);

            card.appendChild(div);
        });
} else {
    let query1 = "";

    let filterorder = ["draft", "pending", "paid"];

    let checkbx = localStorage.getItem("check");
    let chkbx = JSON.parse(checkbx);

    for (let i = 0; i < 3; i++) {
        if (chkbx[i] === true) {
            if (query1 === "") query1 = filterorder[i];
            else {
                query1 += `&${filterorder[i]}`;
            }
        }
    }

    fetch(`http://localhost:3000/${query1}`)
        .then((res) => res.json())
        .then((data) => {
            let count = "";
            p = data;
            window.e = p;

            p.length === 0
                ? (count = `No invoices`)
                : getCount()
                ? p.length === 1
                    ? (count = `1 Invoice`)
                    : (count = `${p.length} invoices`)
                : p.length === 1
                ? (count = `There is 1 invoice`)
                : (count = `There are ${p.length} total invoices`);
            invoice_count.innerHTML = count;

            if (p.length !== 0) {
                for (let i = 0; i < p.length; i++) {
                    let k = document.createElement("div");
                    k.classList.add("card");

                    let id = document.createElement("h4");
                    id.classList.add("id");
                    id.innerHTML = p[i].id;

                    let due_date = document.createElement("p");
                    let date = p[i].paymentDue;
                    let formattedDate = formatDate(date);
                    let due = `Due ${formattedDate}`;
                    due_date.classList.add("due_date");
                    due_date.innerHTML = due;

                    let name = document.createElement("p");
                    name.classList.add("name");
                    name.innerHTML = p[i].clientName;

                    let amount = document.createElement("h3");
                    amount.innerHTML = `£ ${p[i].total}`;
                    amount.classList.add("amount");

                    let status = document.createElement("p");
                    status.classList.add("status");
                    status.classList.add(p[i].status);
                    status.innerHTML = p[i].status;

                    let arrow = document.createElement("a");
                    arrow.classList.add("arrow");
                    arrow.href = `./invoice.html?ID=${p[i].id}`;

                    k.appendChild(id);
                    k.appendChild(due_date);
                    k.appendChild(name);
                    k.appendChild(amount);
                    k.appendChild(status);
                    k.appendChild(arrow);

                    card.appendChild(k);
                }
            } else {
                let div = document.createElement("div");
                div.classList.add("empty");

                let img = document.createElement("img");
                img.classList.add("empty-img");
                img.src = "../starter-code/assets/illustration-empty.svg";

                let head = document.createElement("p");
                head.classList.add("head");
                head.innerHTML = "There is nothing here";

                let desc = document.createElement("p");
                desc.innerHTML = `Create an invoice by clicking the<br/><b>New Invoice</b> button and get started`;
                div.appendChild("img");
                div.appendChild("head");
                div.appendChild("desc");

                card.appendChild(div);
            }
        })
        .catch((err) => {
            console.log(err);
            invoice_count.innerHTML = `No invoices`;

            let div = document.createElement("div");
            div.classList.add("empty");

            let img = document.createElement("img");
            img.src = "../starter-code/assets/illustration-empty.svg";

            let head = document.createElement("p");
            head.classList.add("head");
            head.innerHTML = "There is nothing here";

            let desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerHTML = `Create an invoice by clicking the<br/><b>New Invoice</b> button and get started`;
            div.appendChild(img);
            div.appendChild(head);
            div.appendChild(desc);

            card.appendChild(div);
        });
}

function formatDate(date) {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let dat = date.substring(8);

    let stringDate = `${dat} ${months[month - 1]} ${year}`;
    return stringDate;
}
