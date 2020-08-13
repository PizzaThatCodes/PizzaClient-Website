$(document).ready(function () {

    $("#intro").fadeIn(1000).delay(2000).fadeOut(function () {

        $("#load").fadeIn(1000).delay(2000).fadeOut(function () {

          $("#enjoy").fadeIn(1000).delay(2000).fadeOut(function () {

            $("#Stuff").fadeIn(1000);
          })
        })

    });

});

function finished() {

    $("#load").fadeOut(function () {
        $(".loader").fadeOut(1000);
        $("#done").fadeIn(1000).delay(2000).fadeOut(1000, function () {
            $("#close").fadeIn(1000);
        });
    });

}
