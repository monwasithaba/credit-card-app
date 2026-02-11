const express = require('express');
const app = express();
const PORT = 3000;
const { validateNumber } = require('./validator');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send("✅ API is running! Use /validate/:cardNumber to check a card number.");
});


app.get('/validate/:cardNumber', (req, res) => {
    const cardNumber = req.params.cardNumber;
    
    if (!/^\d+$/.test(cardNumber)) {
        return res.status(400).send({ error: "Please provide a valid numeric string." });
    }

    const isValid = validateNumber(cardNumber);

    res.send({
        card: cardNumber,
        valid: isValid,
        message: isValid ? "Success! This card is valid." : "Warning: This card is fake or has a typo."
    });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`✅ API is live! Test it here: http://localhost:${PORT}`);
});