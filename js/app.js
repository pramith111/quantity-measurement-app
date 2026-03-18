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
    // listeners will be added in later use cases
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