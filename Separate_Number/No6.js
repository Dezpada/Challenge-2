console.log("=== NUMBER 6 ===");
function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers) && dataNumbers != 0) {
    return "Error : Invalid data type or null";
  }
  if (dataNumbers.length < 2 || typeof dataNumbers == "number") {
    return "Error : Contains at least 2 numbers or more";
  }

  dataNumbers.sort((a, b) => b - a);

  return dataNumbers[1];
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0));
// EXPECTED OUTPUT :
// "Error : Contains at least 2 numbers or more"

console.log(getAngkaTerbesarKedua());
// EXPECTED OUTPUT :
// "Error : Invalid data type or null"

console.log("=== END OF NUMBER 6 ===");
