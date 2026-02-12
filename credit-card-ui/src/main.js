import './style.css'
import axios from 'axios';

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
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/validate/${cardNumber}`);
    const data = response.data;

    message.innerText = data.message;
    message.style.color = data.valid ? "#2ecc71" : "#e74c3c";
  } catch (err) {
    message.innerText = "Error: Is your API server running on port 3000?";
    message.style.color = "orange";
  }
});