$(document).ready(function () {
  // localStorage
  if (window.localStorage.getItem("loggedIn") == 1) {
    window.location.replace("beranda.html");
  } else {
    // window.location.replace('index.html');
  }

  // validation
  $("#form-login").validate({
    rules: {
      loginPass: {
        required: true,
      },
      loginEmail: {
        required: true,
        email: true,
      },
    },
    messages: {
      loginPass: {
        required: "masukkan password",
      },
      loginEmail: "masukkan email",
    },
    submitHandler: submitForm,
  });

  function submitForm() {
    var data = $("#form-login").serialize();

    $.ajax({
      type: "POST",
      url: "https://lezatoumg.000webhostapp.com/login.php",
      data: data,
      success: function (response) {
        if (response.match(/nama.*/)) {
          var parsed = JSON.parse(response);
          alert("berhasil login");
          window.location.href =
            "beranda.html?id=" + parsed[0].id + "&star=" + parsed[0].star;
          window.localStorage.setItem("loggedIn", 1);
        } else {
          alert("Data salah");
        }
      },
    });
    return false;
  }

  $("#btnSignUp").click(function () {
    console.log("ok");

    var a = $("#sign-nama").val();
    var b = $("#sign-email").val();
    var c = $("#sign-pass").val();

    var dataString = "Nama=" + a + "&Email=" + b + "&Pass=" + c + "&signUp=";

    if (
      ($.trim(a).length > 0) &
      ($.trim(b).length > 0) &
      ($.trim(b).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: "https://lezatoumg.000webhostapp.com/signUp.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function (dataString) {
          alert("Berhasil Sign Up");
          location.reload();
        },
      });
    } else {
      alert("Data kosong");
    }
  });
});
