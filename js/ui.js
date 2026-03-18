function populateDropdown(selectEl, units) {
  if (!selectEl) { console.warn("populateDropdown: element not found"); return; }
  selectEl.innerHTML = "";
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "-- Select Unit --";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  selectEl.appendChild(defaultOpt);
  units.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u.symbol;
    opt.textContent = `${u.label} (${u.symbol})`;
    selectEl.appendChild(opt);
  });
}
function setActive(parentEl, clickedEl, childSelector) {
  if (!parentEl) { console.warn("setActive: parent not found"); return; }
  parentEl.querySelectorAll(childSelector).forEach(el => el.classList.remove("active"));
  clickedEl.classList.add("active");
}
function showResult(value, unitSymbol) {
  const valEl = document.querySelector("#result-value");
  const unitEl = document.querySelector("#result-unit");
  valEl.textContent = value ?? "—";
  unitEl.textContent = unitSymbol;
  valEl.classList.add("highlight");
  setTimeout(() => valEl.classList.remove("highlight"), 1500);
}