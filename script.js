var soal1 = prompt("1. Bentuknya panjang, sering dihisap Apa itu? : ")
var poin = 0

if (soal1 == "rokok") {
  poin +=1
  alert(`jawaban anda benar poin anda sekarang${poin}`)
  var soal2 = prompt("2. Biasanya diremas-remas dulu, terus aku buang airnya berwarna putih. Lagi apa tebak?")
  if (soal2 == "sedang cuci beras"){
    poin += 1
    alert(`jawaban anda benar poin anda sekarang${poin}`)
  }else{
    poin += 0
    alert(`jawaban anda salah poin anda sekarang${poin}`)
  }
  }else{
    poin += 0
    alert(`jawaban anda salah poin anda sekarang${poin}`)
}
