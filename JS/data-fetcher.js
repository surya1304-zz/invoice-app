fetch("./data.json")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

//   {
//     "id": "FV2353",
//     "createdAt": "2021-11-05",
//     "paymentDue": "2021-11-12",
//     "description": "Logo Re-design",
//     "paymentTerms": 7,
//     "clientName": "Anita Wainwright",
//     "clientEmail": "",
//     "status": "draft",
//     "senderAddress": {
//       "street": "19 Union Terrace",
//       "city": "London",
//       "postCode": "E1 3EZ",
//       "country": "United Kingdom"
//     },
//     "clientAddress": {
//       "street": "",
//       "city": "",
//       "postCode": "",
//       "country": ""
//     },
//     "items": [
//       {
//         "name": "Logo Re-design",
//         "quantity": 1,
//         "price": 3102.04,
//         "total": 3102.04
//       }
//     ],
//     "total": 3102.04
//   }
