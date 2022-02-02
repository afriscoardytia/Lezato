$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const star = urlParams.get("star");

  var url = "https://lezatoumg.000webhostapp.com/resep_terbaru.php";
    $.getJSON(url, function (result) {
      $.each(result, function (i, field) {
        var nama_masakan = field.nama_masakan;
        var star = field.star;
        var id = field.id;
        $("#isi").append(
          '<div class="cover no-padding" style="background-color: grey;"><a href="detail-resep.html?id=' +
          id +
          '"><div class="space-big"></div><div class="space-huge"></div><div class="list gradient no-border"><div class="item space-small row text-white align-center"><div class="col"><h1 class="text-white text-small">' +
          nama_masakan +
          '</h1></div></div></div></a></div>'
        );
      });
    });

    var url = "https://lezatoumg.000webhostapp.com/resep_terbaru_dua.php";
    $.getJSON(url, function (result) {
      $.each(result, function (i, field) {
        var nama_masakan = field.nama_masakan;
        var star = field.star;
        var id = field.id;
        $("#isidua").append(
          '<a href="detail-resep.html?id=' +
          id +
          '"><div class="space-huge"></div><div class="space-big"></div><div class="bottom gradient padding radius"><h1 class="text-white text-small">' +
          nama_masakan +
          '</h1></div></a>'
        );
      });
    });

    var url = "https://lezatoumg.000webhostapp.com/resep_terbaru_tiga.php";
    $.getJSON(url, function (result) {
      $.each(result, function (i, field) {
        var nama_masakan = field.nama_masakan;
        var star = field.star;
        var id = field.id;
        $("#isitiga").append(
          '<a href="detail-resep.html?id=' +
          id +
          '"><div class="space-huge"></div><div class="space-big"></div><div class="bottom gradient padding radius"><h1 class="text-white text-small">' +
          nama_masakan +
          '</h1></div></a>'
        );
      });
    });

  var url = "https://lezatoumg.000webhostapp.com/read_user.php?id=" + id;
  $.getJSON(url, function (result) {
    $.each(result, function (i, field) {
      var nama = field.nama;
      var email = field.email;

      $("#data").append(
        '<img class="avatar circle border-white" src="img/a.png"><h1 class="text-strong">' +
          nama +
          "</h1><p>" +
          email +
          "</p>"
      );
    });
  });

  var urll = "https://lezatoumg.000webhostapp.com/read_star.php?star=" + star;
  if (star == 0) {
    $("#isi_star").append(
      '<h2>Daftar Star kosong</h2><p class="text-grey-500">Silahkan pilih 1 resep yang difavorite kan</p>'
    );
  } else {
    var user = id;
    $.getJSON(urll, function (res) {
      $.each(res, function (i, field) {
        var id = field.id;
        var nama_masakan = field.nama_masakan;
        var bahan = field.bahan;

        $("#isi_star").append(
          '<a href="detail-resep.html?id=' +
            id +
            "&user=" +
            user +
            '"><h2>' +
            nama_masakan +
            '</h2><p class="text-grey-500 mt">' +
            bahan +
            "</p></a>"
        );
      });
    });
  }

  if (window.localStorage.getItem("loggedIn") == 1) {
    // window.location.replace('beranda.html');
  } else {
    window.location.replace("index.html");
  }
  $("#btnLogout").click(function () {
    window.localStorage.removeItem("loggedIn");
    location.reload();
  });

  $("#btnadd").click(function () {
    var a = $("#nama_masakan").val();
    var b = $("#bahan").val();
    var c = $("#langkah_pembuatan").val();
    var d = $("#video").val();

    var dataString =
      "Nama=" +
      a +
      "&Bahan=" +
      b +
      "&Langkah=" +
      c +
      "&Link=" +
      d +
      "&addresep=";

    console.log(dataString);

    if (
      ($.trim(a).length > 0) &
      ($.trim(b).length > 0) &
      ($.trim(c).length > 0) &
      ($.trim(d).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: "https://lezatoumg.000webhostapp.com/add_resep.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function (dataString) {
          alert("Berhasil Add Resep");
          console.log(data);
          location.reload();
        },
      });
    } else {
      alert("Data kosong");
    }
  });
});
