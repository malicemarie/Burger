"use strict";
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(document).on("load", function(event) {
    $.ajax("/api/burgers/", {
      type: "POST",
      data: burger
    });
  });

  $(".submit-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var name = $("[name=burger_name]")
      .val()
      .trim();

    if (name !== "") {
      var newBurger = {
        name: name
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger");

        location.reload();
      });
    } else {
      $("[name=burger_name]").val("");
    }
  });

  $(".submit-devour").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
