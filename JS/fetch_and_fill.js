import store from "./redux/store.js";
import * as actions from "./redux/actions.js";

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
if (!localStorage.getItem("jsonData")) {
  fetch("http://localhost:3000")
    .then((resp) => resp.json())
    .then((data) => {
      store.dispatch(actions.add(data));
      localStorage.setItem("jsonData", JSON.stringify(store.getState().k));
      let temp = localStorage.getItem("jsonData");
      console.log(temp);
      let p = JSON.parse(temp);
      let count;
      p.length === 0
        ? (count = `No invoices`)
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
          arrow.href = "./empty.html";

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
      console.log(div);

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
  let temp = localStorage.getItem("jsonData");
  console.log(temp);
  let p = JSON.parse(temp);
  let count;
  p.length === 0
    ? (count = `No invoices`)
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
      arrow.href = "./empty.html";

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
}

function formatDate(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let dat = date.substring(8);

  let stringDate = `${dat} ${months[month - 1]} ${year}`;
  return stringDate;
}
