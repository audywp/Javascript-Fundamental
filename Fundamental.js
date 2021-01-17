//1. cara menampilkan sesuatu ke layar menggunakan javascript

    //a. console.log
    console.log("Hallo semuanya")

    //b. membuat sebuah variable lalu panggil di console browser

    var namaSaya = "Audy Wisuda Pratama"
    // jika menggunakan variable , kita harus memanggil lagi di console browser
    console.log(namaSaya, "adalah nama saya")
    // jika menggunakan console.log() , hasilnya akan langsung muncul di console browser tanpa harus di panggil

/* end of menampilkan sesuatu ke layar */

//2. cara menuliskan variable
    // syarat syarat
            // variable tidak boleh di pisahkan menggunakan spasi
            // variable tidak boleh di awali dengan angka, tapi boleh mengandung angka
    // a. var
    //  contoh var namaVariable = "value variable"
    // contoh var nama2Variable = "variable ke dua"
    var umurSayaDiTahun22 = 19
    console.log(umurSayaDiTahun22)

    // b. let
    // contoh let namaHewanPeliharaan = "boy"
    let jenisHewanPeliharaan = "Kucing"
    console.log(jenisHewanPeliharaan)
    
    // c. const
    // contoh const namaTemanTerdekat = "Pipit"

    const namaPresidenKita = "Joko Widodo"
    console.log("nama presiden kita", namaPresidenKita)

// 3 perbedaan var, let, dan const
    // jika menggunakan var , ketika membuat suatu variable dengan nama yang sama , variable pertama dengan nama yang sama akan di hapus, atau istilahnya di timpa atau overide
    var dataPenting = "Document Penting"
    var dataPenting = "Document Penting ke 2"
    // jika menggunakan let atau const , ketika membuat suatu variable dengan nama yang sama, akan memunculkan error,  dan ini yang kita inginkan
    let dataPenting1 = "document yang sangat sangat penting mohon di jaga milik let"
    // let dataNegara = "ashdjkljashdkashdjkhasjkdhsaj"
    
    const dataPenting2 = "document yang sangat sangat penting mohon di jaga milik const"
    // const dataPentingNegara = "askjdksanjdkhaskdhjk"
    console.log(dataPenting,dataPenting1,dataPenting2)

    // perbedaan let dan const
    // gunakanlah let jika value dari variable itu berubah ubah
    let KecepatanMobil = 80
    KecepatanMobil = 120
    console.log(KecepatanMobil)
    // jika menggunakan const type dan value dari variable TIDAK BOLEH BERUBAH !!
    const docPenting = "jkalsjdklasjdklajslkdjklasjdaksl"
    console.log(docPenting)

    const nama = "Audy"
    const awalan = "nama saya"
    const kataPenghubung = "adalah"

    console.log(nama,kataPenghubung,awalan, "Diberikan dan di sahkan oleh negara indonesia", "dan di akui oleh seluruh warga indonesia", "baik dari sabang, sampai marauke")

