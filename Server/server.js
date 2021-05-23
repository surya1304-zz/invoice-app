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

app.get("/", (req, res) => {
    invoices
        .find()
        .lean()
        .then((data) => res.send(JSON.stringify(data)));
});

app.post("/", (req, res) => {
    let {
        id,
        createdAt,
        paymentDue,
        description,
        paymentTerms,
        status,
        senderAddress,
        clientName,
        clientEmail,
        clientAddress,
        items,
        total,
    } = req.body;

    invoices
        .insertMany({
            id: id,
            createdAt: createdAt,
            paymentDue: paymentDue,
            description: description,
            paymentTerms: paymentTerms,
            status: status,
            senderAddress: senderAddress,
            clientName: clientName,
            clientEmail: clientEmail,
            clientAddress: clientAddress,
            items: items,
            total: total,
        })
        .then((resp) => res.send(resp))
        .catch((err) => res.send(err));
});

app.put("/", (req, res) => {
    console.log("I'm called");
    let {
        id,
        createdAt,
        paymentDue,
        description,
        paymentTerms,
        status,
        senderAddress,
        clientName,
        clientEmail,
        clientAddress,
        items,
        total,
    } = req.body;

    invoices
        .updateMany(
            { id: id },
            {
                createdAt: createdAt,
                paymentDue: paymentDue,
                description: description,
                paymentTerms: paymentTerms,
                status: status,
                senderAddress: senderAddress,
                clientName: clientName,
                clientEmail: clientEmail,
                clientAddress: clientAddress,
                items: items,
                total: total,
            }
        )
        .then((resp) => res.send(resp))
        .catch((err) => res.send(err));
});

app.get("/:filter", (req, res) => {
    let filter = req.params.filter;
    let query = {
        status: {
            $in: [],
        },
    };

    let queries = filter.split("&");
    console.log(queries);

    if (queries.length > 1) {
        for (let i = 0; i < queries.length; i++) {
            query.status.$in.push(queries[i]);
        }
        console.log(query);
    } else {
        query.status.$in.push(filter);
    }

    console.log(filter);

    invoices
        .find(query)
        .then((resp) => {
            res.send(resp);
            console.log(resp);
        })
        .catch((err) => res.send(err));
});

app.get("/id/:id", (req, res) => {
    let id = req.params.id;

    console.log(id);

    invoices
        .find({ id: id })
        .then((resp) => res.send(resp))
        .catch((err) => res.send(err));
});

app.put("/:id", (req, res) => {
    let id = req.params.id;

    console.log(id);
    invoices
        .updateOne(
            { id: id },
            {
                status: "paid",
            }
        )
        .then((resp) => res.send(resp))
        .catch((err) => res.send(err));
});

app.delete("/:id", (req, res) => {
    let id = req.params.id;

    invoices
        .deleteOne({ id: id })
        .then((resp) => res.send(resp))
        .catch((err) => res.send(err));
});

app.listen(3000, () => {
    console.log("I LOVE YOU 3000");
});
