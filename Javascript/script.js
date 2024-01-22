function hitung() {
  S = document.getElementById("sisiPersegi").value;
  Luas = S * S;
  document.getElementById("Luas").value = Luas;
  Keliling = 4 * S;
  document.getElementById("Kel").value = Keliling;
}

function reset() {
  document.getElementById("sisiPersegi").value = "";
  document.getElementById("Luas").value = "";
  document.getElementById("Kel").value = "";
}

