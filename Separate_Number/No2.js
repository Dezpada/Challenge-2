console.log("=== NUMBER 2 ===");
const checkTypeNumber = (givenNumber) => {
  return givenNumber % 2 == 0 && Number.isInteger(givenNumber)
    ? "GENAP"
    : givenNumber % 2 != 0 && Number.isInteger(givenNumber)
    ? "GANJIL"
    : givenNumber == null
    ? "Error: Bro where is the parameter?"
    : "Error: Invalid data type";
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Inval>
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invali>
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invali>
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Error: Bro wher>
console.log("=== END OF NUMBER 2 ===");
