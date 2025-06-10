const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqlZ5Lo41-srpwB4X_bt9D5mhGizymRBQSH0JS8tSYdP8-RwPn2AZMOVt2OAn3Jkt5Fg/exec";

function checkCoupon() {
  const code = document.getElementById('coupon-code').value.trim();
  const result = document.getElementById('result');
  result.textContent = "Verificando...";
  
  fetch(`${SCRIPT_URL}?code=${code}`)
    .then(response => response.json())
    .then(data => {
      result.textContent = data.message;
    })
    .catch(error => {
      result.textContent = "Hubo un error al verificar el cupón.";
    });
}
