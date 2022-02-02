$(document).ready(function () {
  var url = "https://lezatoumg.000webhostapp.com/read-all.php";
  $.getJSON(url, function (result) {
    $.each(result, function (i, field) {
      var video = field.video;
      var videoa = video.replace(".be/", "be.com/embed/");
      $("#isi").append(
        '<div class="item"><iframe width="100%" class="a"  src="' +
          videoa +
          '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
      );
    });
  });
});
