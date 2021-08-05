const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();


const contactAddress = "hey@yourwebsite.com";

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GATSBY_GMAILUSER,
    pass: process.env.GATSBY_GMAILPASS,
  },
});

// app.post("/", function (req, res) {
//   console.log("req", req);
//   mailer.sendMail(
//     {
//       from: "shubhangc99@gmail.com", //req.body.from,
//       to: "shubhang24c@gmail.com", // [contactAddress],
//       subject: "Hello", //req.body.subject || "[No subject]",
//       text: "This is demo.",
//     },
//     function (err, info) {
//       console.log("err", err);
//       console.log("info", info);
//       if (err) return res.status(500).send(err);
//       res.json({ success: true });
//     }
//   );
// });
app.post("/api/send", function (req, res) {
  console.log("req", req);
  console.log("res", res);
})
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
