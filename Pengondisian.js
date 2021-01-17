console.log("Structure data")

// type pembanding
// akan menghasilkan boolean , true jika terpenuhi false jikda tidak terpenuhi
// maksudnya apa sih ?

//  ===
// contoh
    const statusHubungan = "Pacaran"
    let angka1 = "10"
    let angka2 = 10

    console.log(angka1 === angka2)
  
//  ==
console.log(angka1 == angka2)

// !==
console.log(angka1 !== angka2)
// !=
console.log(angka1 != angka2)
// &&
console.log(angka1 == angka2 && statusHubungan === "Pacaran")

// jika menggunakan dan dua dua nya harus kudu wajib true

// ||
console.log(angka1 === angka2 || statusHubungan === "Pacaran")



// 1. Pengondisian
// a. if
// adalah cara kita menentukan suatu perintah, hasil, atau kondisi lain, jika kondisi terpenuhi
// contoh

let statusMenikah = true
let ceweCantik = "yes"
let KtpNya;

if (statusMenikah === false) {
    KtpNya = "Menikah"
} else {
    KtpNya = "Belum Menikah"
}

console.log(KtpNya)


// b. switch
let lapar = "asdjkahgsjkfgsdjkfgh"
switch (lapar) {
    case "iyanich":
        console.log("makanlah")
        break;
        case "udah Kenyang":
            console.log("Tidur lah")
            break;
            default:
                console.log("gak keduanya")
                break;
            }
            
            // ternary operation
            
            console.log(
                ceweCantik === "no" ? "Jomblo" : "sudah berpasangan"
                )
                
                // 2. Perulangan
                // a. for
                
                
                // b.while

// c. do while