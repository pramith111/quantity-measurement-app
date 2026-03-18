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
function toggleOperators(show) {
  const el = document.querySelector("#operator-selector");
  if (!el) { console.warn("toggleOperators: #operator-selector not found"); return; }
  el.style.display = show ? "flex" : "none";
}
function renderHistory(records) {
  const list = document.querySelector("#history-list");
  if (!list) return;
  list.innerHTML = "";
  if (!records || !records.length) {
    list.innerHTML = "<li>No history yet.</li>";
    return;
  }
  records.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.expression}  =  ${r.result}  (${new Date(r.timestamp).toLocaleString()})`;
    list.appendChild(li);
  });
}