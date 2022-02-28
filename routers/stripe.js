const express = require("express");
const router = express.Router();
const Key = "sk_test_51KAWyRG6ujIRf42FuFf2Jlx5S0Rejrx4UaKMahElXAeMp7w2fXJZVxmERZ6Eo20wfcdBLuNYyY9fwQzgp3wcJv1v00XjGVt4sk"
const stripe = require("stripe")(Key);

router.post("/payments", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "USD",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
