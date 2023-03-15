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
