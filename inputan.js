function inputan() {
    var nama = document.getElementById("nama").value;
    var cari = document.getElementById("cari").value;

    let tabel = document.getElementById("tabel");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    
    cell1.innerHTML = nama;
    cell2.innerHTML = "sedang";
    cell2.innerHTML = "melakukan";
    cell3.innerHTML = "pencarian";
    cell4.innerHTML = "tentang";
    cell5.innerHTML = "resep";
    cell6.innerHTML = "memasak";
    cell7.innerHTML = cari;
}
