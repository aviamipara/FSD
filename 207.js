const express = require('express');
const path = require('path');
const app = express();



app.use(express.urlencoded());

app.use(express.static("../public",{index:"207.html"}))


app.post('/discount', (req, res) => {
    const { price, discount_pct, offer_type } = req.body;

    
    const numPrice = parseFloat(price);
    const numDiscount = parseFloat(discount_pct);

    if (!numPrice || numPrice <= 0 || !numDiscount || numDiscount <= 0) {
        return res.send(`
            <h3 style="color: orange;">Enter valid price and discount</h3>
            <a href="/">Go Back</a>
        `);
    }

    if (!offer_type || offer_type === "") {
        return res.send(`
            <h3 style="color: orange;">Please select an offer type</h3>
            <a href="/">Go Back</a>
        `);
    }

    // Calculate final price if validation passes
    const discountAmount = (numPrice * numDiscount) / 100;
    const finalPrice = numPrice - discountAmount;

    res.send(`
        <h2>Discount Details</h2>
        <hr>
        <p><strong>Offer Applied:</strong> ${offer_type}</p>
        <p><strong>Original Price:</strong> $${numPrice}</p>
        <p><strong>Discount:</strong> ${numDiscount}% (-$${discountAmount})</p>
        <h3><strong>Final Price:</strong> $${finalPrice.toFixed(2)}</h3>
        <br>
        <a href="/">Calculate Another</a>
    `);
});

app.listen(3003);