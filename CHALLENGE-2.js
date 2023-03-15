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
console.log("=== END OF NUMBER 1 ===\n");

/* ================================================================= */

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
console.log("=== END OF NUMBER 2 ===\n");

/* ================================================================= */

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
console.log("=== END OF NUMBER 3 ===\n");

/* ================================================================= */

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
console.log("=== END OF NUMBER 4 ===\n");

/* ================================================================= */

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
console.log("=== END OF NUMBER 5 ===\n");

/* ================================================================= */

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

console.log("=== END OF NUMBER 6 ===\n");

/* ================================================================= */

console.log("=== NUMBER 7 ===");
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Coorduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    return "Error : Invalid data type or null";
  }

  let total = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    if (typeof dataPenjualan[i].totalTerjual === "number") {
      total += dataPenjualan[i].totalTerjual;
    }
  }

  return total;
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90

console.log("=== END OF NUMBER 7 ===\n");

/* ================================================================= */

console.log("=== NUMBER 8 ===");

// BERIKUT ADALAH CONTOH OBJECT YANG HARUS DI RETURN PADA FUNCTION YANG AKAN KAMU BUAT
// SEMUA VALUE PADA PROPERTI OBJECT DIBAWAH INI ADALAH CONTOH DATA SAJA,
// JADI ITU BUKAN HASIL PERHITUNGAN YANG SEBENARNYA

// PADA PROPERTI totalKeuntungan dan totalModal, NILAI YANG DIHASILKAN HARUS DALAM
// BERUPA FORMAT RUPIAH, CONTOH totalKeuntungan 14650000 DI JADIKAN FORMAT RUPIAH
// MENJADI 'Rp. 14.650.000'
/*
{
	totalKeuntungan: 'Rp. 10.000.000', // Harus dalam format Rupiah
	totalModal: 'Rp.6.000.000', // Harus dalam format Rupiah
	persentaseKeuntungan: '60%', // Persentasi keuntungan berdasarkan totalModal dan totalJual
	produkBukuTerlaris: 'BUKU TERLARIS BERDASARKAN DATA DIATAS', // namaProduct yang paling banyak dijual
	penulisTerlaris: 'PENULIS TERLAIRS BERDASARKAN DATA DIATAS' // nama Penulis yang bukunya paling banyak dijual
}
*/
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalProfit = 0;
  let totalCapital = 0;
  let bookSales = {};
  let authorSales = {};

  for (let i = 0; i < dataPenjualan.length; i++) {
    const book = dataPenjualan[i];
    if (
      typeof book.idProduct == "string" &&
      typeof book.namaProduk == "string" &&
      typeof book.penulis == "string" &&
      typeof book.hargaBeli == "number" &&
      typeof book.hargaJual == "number" &&
      typeof book.totalTerjual == "number" &&
      typeof book.sisaStok == "number"
    ) {
      // Keuntungan total
      const profit = book.hargaJual * book.totalTerjual;
      totalProfit += profit;

      // Modal total
      totalCapital += book.hargaBeli * (book.totalTerjual + book.sisaStok);

      // Buku terlaris
      if (bookSales[book.namaProduk]) {
        bookSales[book.namaProduk] += book.totalTerjual;
      } else {
        bookSales[book.namaProduk] = book.totalTerjual;
      }

      // Penulis terlaris
      if (authorSales[book.penulis]) {
        authorSales[book.penulis] += book.totalTerjual;
      } else {
        authorSales[book.penulis] = book.totalTerjual;
      }
    } else {
      return `Error[${i}] : Invalid data type`;
    }
  }

  // Persentase
  const profitPercentage = ((totalProfit / totalCapital) * 100).toFixed(2);

  // Mencari buku terlaris
  let bestSeller = "";
  let highestSales = 0;
  for (const namaProduk in bookSales) {
    if (bookSales[namaProduk] > highestSales) {
      bestSeller = namaProduk;
      highestSales = bookSales[namaProduk];
    }
  }

  // Mencari penulis terlaris
  let bestAuthor = "";
  let authorSalesAmount = 0;
  for (const penulis in authorSales) {
    if (authorSales[penulis] > authorSalesAmount) {
      bestAuthor = penulis;
      authorSalesAmount = authorSales[penulis];
    }
  }

  // Hasil
  const analysis = {
    totalKeuntungan: `Rp. ${totalProfit.toLocaleString("id-ID")}`,
    totalModal: `Rp. ${totalCapital.toLocaleString("id-ID")}`,
    persentaseKeuntungan: `${profitPercentage}%`,
    produkBukuTerlaris: bestSeller,
    penulisTerlaris: bestAuthor,
  };
  return analysis;
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi

console.log(getInfoPenjualan(dataPenjualanNovel));
// EXPECTED OUTPUT => OBJECT dengan format seperti yang disebutkan diatas

console.log("=== END OF NUMBER 8 ===");
