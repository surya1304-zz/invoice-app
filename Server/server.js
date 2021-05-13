const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/invoices", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => console.log("Connection Successful!!"))
  .catch((err) => console.log(err));

let db = mongoose.connection;

const invoice_model = new mongoose.Schema({
  id: {
    type: String,
    required: "This field is required",
  },
  createdAt: {
    type: String,
    required: "This field is required",
  },
  paymentDue: {
    type: String,
    required: "This field is required",
  },
  description: {
    type: String,
    required: "This field is required",
  },
  paymentTerms: {
    type: Number,
    required: "This field is required",
  },
  clientName: {
    type: String,
    required: "This field is required",
  },
  clientEmail: {
    type: String,
    required: "This field is required",
  },
  status: {
    type: String,
    required: "This field is required",
  },
  senderAddress: {
    street: {
      type: String,
      required: "This field is required",
    },
    city: {
      type: String,
      required: "This field is required",
    },
    postCode: {
      type: String,
      required: "This field is required",
    },
    country: {
      type: String,
      required: "This field is required",
    },
  },
  clientAddress: {
    street: {
      type: String,
      required: "This field is required",
    },
    city: {
      type: String,
      required: "This field is required",
    },
    postCode: {
      type: String,
      required: "This field is required",
    },
    country: {
      type: String,
      required: "This field is required",
    },
  },
  items: [
    {
      name: {
        type: String,
        required: "This field is required",
      },
      quantity: {
        type: Number,
        required: "This field is required",
      },
      price: {
        type: Number,
        required: "This field is required",
      },
      total: {
        type: Number,
        required: "This field is required",
      },
    },
  ],
  total: {
    type: Number,
    required: "This field is required",
  },
});

const invoices = mongoose.model("invoice", invoice_model);
invoices
  .find()
  .lean()
  .then((res) => console.log(res));

app.get("/", (req, res) => {
  invoices
    .find()
    .lean()
    .then((data) => res.send(JSON.stringify(data)));
});

app.listen(3000);
