// Select elements (Without getElementById)
const titleInput = document.querySelector(".title");
const amountInput = document.querySelector(".amount");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");
const balanceText = document.querySelector(".balance");

// Load saved expenses
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Render Function
const render = () => {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach(exp => {
    total += exp.amount;

    const li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `
      <span>${exp.title} - ${exp.amount} ৳</span>
      <button data-id="${exp.id}" class="delete-btn">❌</button>
    `;

    list.appendChild(li);
  });

  balanceText.textContent = total;
};

// Add expense
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);

  if (!title || !amount) return alert("Enter title & amount!");

  expenses.push({
    id: Date.now(),
    title,
    amount
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));

  titleInput.value = "";
  amountInput.value = "";

  render();
});

// Delete event (Event Delegation)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-id");
    expenses = expenses.filter(x => x.id != id);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    render();
  }
});

// First Load
render();
