var conekta = require("conekta");
conekta.api_key = "key_rala9dpqwXaBA4Kuiiu8RlX";
conekta.api_version = "2.0.0";

const options = {
  method: "POST",
  headers: {
    accept: "application/vnd.conekta-v2.1.0+json",
    "Accept-Language": "es",
    "content-type": "application/json",
    authorization: "Bearer key_rala9dpqwXaBA4Kuiiu8RlX",
  },
  body: JSON.stringify({ pre_authorize: false }),
};

fetch("https://api.conekta.io/orders", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const thirtyDaysFromNow = (
  Math.round(Date.now() / 1000) +
  60 * 60 * 24 * 30
).toString();

order = conekta.Order.create(
  {
    line_items: [
      {
        name: "Tacos",
        unit_price: 1000,
        quantity: 12,
      },
    ],
    shipping_lines: [
      {
        amount: 1500,
        carrier: "FEDEX",
      },
    ], //shipping_lines - phyiscal goods only
    currency: "MXN",
    customer_info: {
      name: "Fulanito Pérez",
      email: "fulanito@conekta.com",
      phone: "+5218181818181",
    },
    shipping_contact: {
      address: {
        street1: "Calle 123, int 2",
        postal_code: "06100",
        country: "MX",
      },
    }, //shipping_contact - required only for physical goods
    charges: [
      {
        payment_method: {
          type: "oxxo_cash",
          expires_at: thirtyDaysFromNow,
        },
      },
    ],
  },
  function (err, res) {
    console.log(res.toObject());
  }
);

console.log("ID: " + order.id);
console.log("Payment Method: " + order.charges[0].payment_method.service_name);
console.log("Reference: " + order.charges[0].payment_method.reference);
console.log("$" + order.amount / 100 + order.currency);
console.log("Order");
console.log(
  order.line_items[0].quantity +
    " - " +
    order.line_items[0].name +
    " - " +
    order.line_items.unit_price / 100
);
