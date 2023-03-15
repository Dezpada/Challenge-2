console.log("=== NUMBER 5 ===");
function getSplitName(personName) {
  if (typeof personName !== "string" || !personName) {
    return "Error : Invalid data type or null";
  }

  const nameParts = personName.trim().split(" ");

  if (nameParts.length < 1 || nameParts.length > 3) {
    return "Error : This function is only for 3 characters name";
  }

  const firstName = nameParts[0];
  const lastName =
    nameParts.length === 1 ? null : nameParts[nameParts.length - 1];
  const middleName = nameParts.length === 3 ? nameParts[1] : null;
  return { firstName, middleName, lastName };
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil

console.log(getSplitName("Aldi Daniela Pranata"));
// EXPECTED OUTPUT
// { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata'}

console.log(getSplitName("Dwi Kuncoro"));
// EXPECTED OUTPUT
// { firstName: 'Dwi', middleName: null, lastName: 'Kuncoro'}

console.log(getSplitName("Aurora"));
// EXPECTED OUTPUT
// { firstName: 'Aurora', middleName: null, lastName: null}

console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// EXPECTED OUTPUT
// Error : This function is only for 3 characters name

console.log(getSplitName(0));
// EXPECTED OUTPUT
// Error : Invalid data type or null
console.log("=== END OF NUMBER 5 ===");
