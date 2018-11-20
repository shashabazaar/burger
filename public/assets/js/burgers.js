$(document).ready(function () {

  $(".change-eat").on("click", function (event) { 
    var id = $(this).data("id");
    var newBurger = $(this).data("eaten");
    console.log(event, "hi")
    var newBurgerState = {
      devoured: newBurger
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function () {
        console.log("changed burger to", newBurger);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger_name").val()|| ''.trim()|| '',
      devoured: $("input[name=eaten]:checked").val()|| ''.trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
  $("delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("delete-burger", id);

        location.reload();
      }
    );
  });
});