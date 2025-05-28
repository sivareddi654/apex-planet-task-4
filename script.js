// To-Do App
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${task} <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Products
const products = [
  { name: "Laptop", category: "electronics", price: 75000, rating: 4.5 },
  { name: "Smartphone", category: "electronics", price: 55000, rating: 4.3 },
  { name: "Headphones", category: "electronics", price: 2500, rating: 4.1 },
  { name: "Bluetooth Speaker", category: "electronics", price: 3000, rating: 4.2 },
  { name: "Jeans", category: "clothing", price: 1500, rating: 4.0 },
  { name: "T-shirt", category: "clothing", price: 500, rating: 3.9 },
  { name: "Jacket", category: "clothing", price: 2500, rating: 4.4 },
  { name: "Sneakers", category: "clothing", price: 2200, rating: 4.6 }
];

function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? "★" : "";
  return "★".repeat(fullStars) + halfStar + "☆".repeat(5 - fullStars - (halfStar ? 1 : 0));
}

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Category: ${p.category}</p>
          <p class="card-text">Price: ₹${p.price.toLocaleString()}</p>
          <p class="card-text">Rating: ${getStars(p.rating)} (${p.rating})</p>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const sortOption = document.getElementById("sort").value;

  let filtered = products.filter(p => 
    (category === "all" || p.category === category) &&
    p.price >= minPrice &&
    p.price <= maxPrice
  );

  if (sortOption === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Initial Display
displayProducts(products);
