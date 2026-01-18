function cek() {
    let skor = 0;

    // cek 5 soal
    if (document.getElementById("jno1").checked)
    { skor++; document.getElementById("rno1").innerHTML="Benar!"; document.getElementById("rno1").style.color="green"; }
    else { document.getElementById("rno1").innerHTML="Salah!"; document.getElementById("rno1").style.color="red"; }

    if (document.getElementById("jno2").checked) 
    { skor++; document.getElementById("rno2").innerHTML="Benar!"; document.getElementById("rno2").style.color="green"; }
    else { document.getElementById("rno2").innerHTML="Salah!"; document.getElementById("rno2").style.color="red"; }

    if (document.getElementById("jno3").checked) 
    { skor++; document.getElementById("rno3").innerHTML="Benar!"; document.getElementById("rno3").style.color="green"; }
    else { document.getElementById("rno3").innerHTML="Salah!"; document.getElementById("rno3").style.color="red"; }

    if (document.getElementById("jno4").checked) 
    { skor++; document.getElementById("rno4").innerHTML="Benar!"; document.getElementById("rno4").style.color="green"; }
    else { document.getElementById("rno4").innerHTML="Salah!"; document.getElementById("rno4").style.color="red"; }

    if (document.getElementById("jno5").checked) 
    { skor++; document.getElementById("rno5").innerHTML="Benar!"; document.getElementById("rno5").style.color="green"; }
    else { document.getElementById("rno5").innerHTML="Salah!"; document.getElementById("rno5").style.color="red"; }

    // hitung nilai
    let nilai = (skor / 5) * 100;

    // cek kelulusan
    let status = (nilai >= 70) ? "Lulus" : "Tidak Lulus";

    // tampil hasil
    document.getElementById("hasil").innerHTML = 
        "Skor: " + skor + " / 5<br>" +
        "Nilai: " + nilai + "<br>" +
        "Status: " + status;

    document.getElementById("ulang").style.display = "block";
}