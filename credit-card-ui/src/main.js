import './style.css'

const validateBtn = document.querySelector('#validateBtn');
const cardInput = document.querySelector('#cardInput');
const message = document.querySelector('#message');

validateBtn.addEventListener('click', async () => {
  const cardNumber = cardInput.value;

  if (!cardNumber) {
    message.innerText = "Please enter credit card number!";
    return;
  }

  try {
    const apiUrl = 'http://16.170.220.220/:3000';
    const response = await fetch(`${apiUrl}/validate/${cardNumber}`);
    const data = await response.json();

    message.innerText = data.message;
    message.style.color = data.valid ? "#2ecc71" : "#e74c3c";
  } catch (err) {
    message.innerText = "Error: Is your API server running on port 3000?";
    message.style.color = "orange";
  }
});