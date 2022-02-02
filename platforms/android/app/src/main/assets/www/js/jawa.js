$(document).ready(function () {
  $("#form-search").hide();
  $("#btnSearch").click(function () {
    $("#form-search").toggle("slow");
  });

  var url = "https://lezatoumg.000webhostapp.com/read-jawa.php";
  $.getJSON(url, function (result) {
    $.each(result, function (i, field) {
      var nama_masakan = field.nama_masakan;
      var star = field.star;
      var id = field.id;
      $("#isi").append(
        '<a href="detail-resep.html?id=' +
          id +
          '"><div class="item"><h2>' +
          nama_masakan +
          '</h2><p class="text-grey-500">' +
          star +
          " Star</p></div></a>"
      );
    });
  });
});

var search = document.getElementById("search");

var isi = document.getElementById("isi");

search.addEventListener("keyup", function () {
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (search.value === "" && isi.value === "") {
        isi.innerHTML = "";
        var url = "https://lezatoumg.000webhostapp.com/read-all.php";
        $.getJSON(url, function (result) {
          $.each(result, function (i, field) {
            var nama_masakan = field.nama_masakan;
            var star = field.star;
            var id = field.id;
            $("#isi").append(
              '<a href="detail-resep.html?id=' +
                id +
                '"><div class="item"><h2>' +
                nama_masakan +
                '</h2><p class="text-grey-500">' +
                star +
                " Star</p></div></a>"
            );
          });
        });
      } else {
        if (ajax.responseText === "[]") {
          isi.innerHTML = "maaf data yang anda masukkan tidak tersedia";
        } else {
          isi.innerHTML = ajax.responseText;
        }
      }
    }
  };

  var myStr = search.value;
  var newStr = myStr.replace(/ /g, "+");

  // console.log(newStr);

  ajax.open(
    "GET",
    "https://lezatoumg.000webhostapp.com/search_all_resep.php?search=" +
      search.value,
    true
  );
  ajax.send();
});
