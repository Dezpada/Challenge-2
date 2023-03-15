console.log("=== NUMBER 3 ===");
function checkEmail(email) {
  if (!email) {
    return "Error: No parameter";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return "VALID";
    } else if (typeof email !== "string" || !emailRegex.test(email)) {
      return "INVALID";
    } else {
      return "Error: Invalid data type";
    }
  }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail("apranata@binar.co.id")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar.com")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar")); // OUTPUT yang keluar => "INVALID"
console.log(checkEmail("apranata")); // ERROR : INVALID
console.log(checkTypeNumber(checkEmail(3322))); // ERROR : Invalid data type
console.log(checkEmail()); // ERROR : No parameter
console.log("=== END OF NUMBER 3 ===");
