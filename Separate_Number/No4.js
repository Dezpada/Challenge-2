console.log("=== NUMBER 4 ===");
function isValidPassword(givenPassword) {
  if (!givenPassword && givenPassword != 0) {
    return "Error : No parameter";
  } else {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (typeof givenPassword !== "string") {
      return "Error : Invalid data type";
    } else {
      return passwordRegex.test(givenPassword);
    }
  }
}

// EXPECTED RESULT

// Ketika function tersebut dipanggil
console.log(isValidPassword("Meong2021"));
// EXPECTED OUTPUT => true

// (Karena memenuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar, ada huruf kecil, dan ada angka)

console.log(isValidPassword("meong2021"));
// EXPECTED OUTPUT => false (Karena meong2021 tidak ada huruf besar)

console.log(isValidPassword("@eong"));
// EXPECTED OUTPUT => false (Karena @eong tidak ada angka dan terdiri hanya 5 huruf)

console.log(isValidPassword("Meong2"));
// EXPECTED OUTPUT => false (Karena Meong2 hanya 6 huruf)

console.log(isValidPassword(0));
// EXPECTED OUTPUT => ERROR : Invalid data type;

console.log(isValidPassword());
// EXPECTED OUTPUT => ERROR : No parameter;
console.log("=== END OF NUMBER 4 ===");
