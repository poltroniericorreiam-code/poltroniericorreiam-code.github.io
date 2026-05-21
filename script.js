<button onclick="girar()">Girar</button>
<h1 id="resultado">🍒 🍋 ⭐</h1>

<script>
function girar() {
  const itens = ["🍒","🍋","⭐","7️⃣"];
  
  let a = itens[Math.floor(Math.random()*itens.length)];
  let b = itens[Math.floor(Math.random()*itens.length)];
  let c = itens[Math.floor(Math.random()*itens.length)];

  document.getElementById("resultado").innerText =
  a + " " + b + " " + c;
}
</script>
