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

console.log("=== END OF NUMBER 7 ===");
