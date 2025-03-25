let form_persegi = document.getElementById("form_persegi");
let form_persegi_panjang = document.getElementById("form_persegi_panjang");
let hasil = document.getElementById("hasil");
let gambar_bangun = document.getElementById("gambar_bangun");

function tampilkan_form_persegi(){
    form_persegi.classList.add("tampil");
    form_persegi_panjang.classList.remove("tampil");
    document.getElementById("sisi").focus();
    gambar_bangun.src = "assets/persegi.jpg";
}

function tampilkan_form_persegi_panjang(){
    form_persegi_panjang.classList.add("tampil");
    form_persegi.classList.remove("tampil");
    document.getElementById("panjang").focus();
    gambar_bangun.src = "assets/persegi-panjang.jpg";
}

function hitung(){
    let jenis_bangun_input = document.querySelector('input[name="jenis_bangun"]:checked');

    if(!jenis_bangun_input) {
        alert('Anda belum memilih jenis Bangun');
        return;
    }

    let jenis_bangun = jenis_bangun_input.value;
    let sisi = document.getElementById("sisi").value;
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let hasil = document.getElementById("hasil"); // Fix: Get the output element

    let hasil_luas, hasil_keliling;

    if(jenis_bangun == "Persegi"){
        if(sisi === "" || sisi == 0){
            alert("Anda belum mengentri nilai sisi dan nilai yang harus lebih besar dari nol");
            document.getElementById("sisi").focus();
            return;
        }else{
            hasil_luas = sisi * sisi;
            hasil_keliling = 4 * sisi;
        }
    }else if (jenis_bangun == "Persegi Panjang"){
        if((panjang === "" || panjang == 0) && (lebar === "" || lebar === 0)){
            alert("Anda belum mengentri panjang dan lebar persegi panjang dan nilai yang harus lebih besar dari nol");
            document.getElementById("panjang").focus();
            return;
        }else{
            hasil_luas = panjang * lebar;
            hasil_keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
        }
    }

    console.log("Luas " + jenis_bangun + " : " + hasil_luas);
    console.log("Keliling " + jenis_bangun + " : " + hasil_keliling);

    hasil.innerHTML = 
        "Luas " + jenis_bangun + " : " + hasil_luas + 
        "<br>Keliling " + jenis_bangun + " : " + hasil_keliling;
}