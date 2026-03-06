let products = [
  { name: "Headphones", emoji: "🎧", price: 1999 },
  { name: "Smart Watch", emoji: "⌚", price: 2999 },
  { name: "Gaming Mouse", emoji: "🖱️", price: 999 },
  { name: "Camera", emoji: "📷", price: 15000 },
];

let cart = 0;

function render() {
  let list = document.getElementById("productList");

  list.innerHTML = products
    .map(
      (p, i) => `

<div class="card">

<div class="product-img">${p.emoji}</div>

<h3>${p.name}</h3>

<div class="price">₹${p.price}</div>

<button class="buy" onclick="addCart()">Add to Cart</button>

</div>

`,
    )
    .join("");

  let table = document.getElementById("adminTable");

  table.innerHTML = products
    .map(
      (p, i) => `

<tr>
<td>${p.name}</td>
<td>₹${p.price}</td>
<td>
<button onclick="deleteProduct(${i})">Delete</button>
</td>
</tr>

`,
    )
    .join("");
}

function addCart() {
  cart++;
  document.getElementById("cart").innerText = cart;
}

function addProduct() {
  let name = document.getElementById("name").value;
  let emoji = document.getElementById("emoji").value;
  let price = document.getElementById("price").value;

  products.push({ name, emoji, price });

  render();
}

function deleteProduct(i) {
  products.splice(i, 1);

  render();
}

function showAdmin() {
  document.getElementById("store").style.display = "none";
  document.getElementById("admin").style.display = "block";
}

function showStore() {
  document.getElementById("store").style.display = "block";
  document.getElementById("admin").style.display = "none";
}

render();
