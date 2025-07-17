function showDetails(name, description, price) {
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}
