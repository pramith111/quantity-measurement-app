document.addEventListener("DOMContentLoaded", async () => {

  const state = {
    type: "Length",
    action: "Conversion",
    fromVal: null,
    fromUnit: "",
    toVal: null,
    toUnit: "",
    operator: "+"
  };

 function attachEventListeners() {

  // UC-JS-15: Type card clicks
  document.querySelectorAll(".type-card").forEach(card => {
    card.addEventListener("click", async () => {
      state.type = card.dataset.type;
      setActive(document.querySelector("#type-selector"), card, ".type-card");
      document.querySelector("#from-value").value = "";
      document.querySelector("#to-value").value = "";
      state.fromVal = null;
      state.toVal = null;
      state.fromUnit = "";
      state.toUnit = "";
      showResult(0, "");
      await loadUnits(state.type);
    });
  });
  // UC-JS-16: Action tab clicks
  document.querySelectorAll(".action-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.action = btn.dataset.action;
      setActive(document.querySelector("#action-selector"), btn, ".action-btn");
      toggleOperators(state.action === "Arithmetic");
      showResult(0, "");
    });
  });

  // Operator button clicks
  document.querySelectorAll(".operator-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.operator = btn.dataset.op;
      setActive(document.querySelector("#operator-selector"), btn, ".operator-btn");
    });
  });

}

  async function loadUnits(type) {
    const units = await getUnits(type);
    populateDropdown(document.querySelector("#from-unit"), units);
    populateDropdown(document.querySelector("#to-unit"), units);
  }

  async function loadHistory() {
    const records = await getHistory();
    renderHistory(records);
  }

  attachEventListeners();
  await loadUnits("Length");

  const firstTypeCard = document.querySelector(".type-card");
  const firstActionBtn = document.querySelector(".action-btn");
  if (firstTypeCard) firstTypeCard.classList.add("active");
  if (firstActionBtn) firstActionBtn.classList.add("active");

  toggleOperators(false);
  await loadHistory();

});