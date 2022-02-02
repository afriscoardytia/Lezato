$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const user = urlParams.get("user");

  var url = "https://lezatoumg.000webhostapp.com/read_id.php?id=" + id;
  $.getJSON(url, function (result) {
    $.each(result, function (i, field) {
      var nama_masakan = field.nama_masakan;
      var star = field.star;
      var bahan = field.bahan;
      var langkah = field.langkah_pembuatan;

      $("#isian").append(
        '<p class="judul"><b>' +
          nama_masakan +
          '</b></p><p class="sub-judul">' +
          star +
          ' Star</p><br><p class="sub"><b>Bahan-Bahan</b></p><p>' +
          bahan +
          '</p><br><p class="sub"><b>Langkah Pembuatan</b></p><p>' +
          langkah +
          "</p>"
      );
    });
  });

  $("#btnStar").click(function () {
    alert("Mohon maaf fitur ini belum selesai dibuat");
    // console.log(user);

    // var a = id;
    // var b = user;

    // var dataString = "masakan=" + a + "&user=" + b + "&tambahstar=";

    // if ($.trim(a).length > 0) {
    //     $.ajax({
    //         type: 'POST',
    //         url: "https://pweblezato.000webhostapp.com/tambah_star.php",
    //         data: dataString,
    //         crossDomain: true,
    //         cache: false,
    //         success: function (dataString) {
    //             alert("Yeay");
    //             location.reload();
    //         }
    //     });
    //     console.log(dataString);
    // } else {
    //     alert("Data kosong");
    // }
  });
});
