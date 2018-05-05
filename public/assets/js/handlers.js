$(document).ready(() => {

  $('.create-todo').on('submit', (event) => {
    event.preventDefault();
    var todo = $('[name=new_todo]').val().trim();

    $.ajax('api/todos', {
      type: 'POST',
      data: {todo: todo},
    }).then(() => {
      console.log('created a new to do');
      location.reload();
    });
  });

  $('.complete-todo').on('click', (event) => {
    event.preventDefault();
    var todo_id = $(event.target).attr('id');


    $.ajax({
      type: 'PUT',
      url: 'api/todos/' + todo_id, 
    }).then(() => {
      console.log('completed a to do');
      location.reload();
    });
  });

});


// $(".create-form").on("submit", function(event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newCat = {
//     name: $("#ca").val().trim(),
//     sleepy: $("[name=sleepy]:checked").val().trim()
//   };

//   // Send the POST request.
//   $.ajax("/api/cats", {
//     type: "POST",
//     data: newCat
//   }).then(
//     function() {
//       console.log("created new cat");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });