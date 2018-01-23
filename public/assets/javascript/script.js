$(document).ready(() => {

  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    let burger_id = $(this).children(".burger_id").val();

    $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      })
     .then(data => {
        location.reload();
    });
  });

  $(".clear-form").on("submit", function(event) {
    event.preventDefault();

    let burger_id = $(this).children(".burger_id").val();

    $.ajax({
      method: "POST",
      url: "/burgers/delete/" + burger_id
    })
    .then(data => {
      location.reload();
    });
  });
});
