console.log("=== NUMBER 1 ===");
function changeWord(selectedText, changedText, text) {
  let result = text.replace(selectedText, changedText);
  return result;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord("mencintai", "membenci", kalimat1));
// Maka output yang harus keluar adalah
// => 'Andini sangat membenci kamu selamanya'

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord("bromo", "semeru", kalimat2));
// Maka output yang harus keluar adalah
// => 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
console.log("=== END OF NUMBER 1 ===");
