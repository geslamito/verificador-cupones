const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqlZ5Lo41-srpwB4X_bt9D5mhGizymRBQSH0JS8tSYdP8-RwPn2AZMOVt2OAn3Jkt5Fg/exec";

function checkCoupon() {
  const code = document.getElementById('coupon-code').value.trim();
  const result = document.getElementById('result');
  result.textContent = "Verificando...";
  result.style.color = "#000";
  result.style.fontWeight = "normal";

  fetch(`${SCRIPT_URL}?code=${code}`)
    .then(response => response.json())
    .then(data => {
      result.textContent = data.message;
      result.style.color = data.color;
      result.style.fontWeight = "bold";
      result.style.fontSize = "1.2rem";
    })
    .catch(error => {
      result.textContent = "❌ Error al verificar el cupón.";
      result.style.color = "red";
    });
}
