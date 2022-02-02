// $(document).ready(function () {
//     var bahan = document.getElementById('bahan');

// });

var bahan = document.getElementById("bahan");

var isi = document.getElementById("isi");

bahan.addEventListener("keyup", function () {
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (bahan.value === "") {
        isi.innerHTML = "Ketikkan data";
      } else {
        if (ajax.responseText === "[]") {
          isi.innerHTML = "maaf data yang anda masukkan tidak tersedia";
        } else {
          isi.innerHTML = ajax.responseText;
        }
      }
    }
  };

  var myStr = bahan.value;
  var newStr = myStr.replace(/ /g, "+");

  // console.log(newStr);

  ajax.open(
    "GET",
    "https://lezatoumg.000webhostapp.com/read_rekom.php?bahan=" + bahan.value,
    true
  );
  ajax.send();
});
