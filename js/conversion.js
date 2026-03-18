function applyConversion(value, convObj) {
  if (isNaN(value)) throw new Error("Invalid number");
  if (convObj.factor !== null) {
    return parseFloat((value * convObj.factor).toFixed(6));
  } else {
    try {
      const expr = convObj.formula.replace("x", value);
      return parseFloat(eval(expr).toFixed(6));
    } catch {
      throw new Error("Bad formula in conversion record");
    }
  }
}
function compareValues(v1, u1, v2, u2, base1, base2) {
  if (isNaN(base1) || isNaN(base2)) return "Invalid values — cannot compare";
  if (base1 > base2) return `${v1} ${u1} is GREATER than ${v2} ${u2}`;
  if (base1 < base2) return `${v1} ${u1} is LESS than ${v2} ${u2}`;
  return `${v1} ${u1} is EQUAL to ${v2} ${u2}`;
}