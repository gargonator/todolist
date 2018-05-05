$(document).ready(() => {

  // handler for creating a new to do by submitting the form
  $('.create-todo').on('submit', (event) => {
    event.preventDefault();
    // get description of to do
    var todo = $('[name=new-todo]').val().trim();
    // call POST route to create
    $.ajax('api/todos', {
      type: 'POST',
      data: {todo: todo},
    }).then(() => {
      console.log('created a new to do');
      location.reload();
    });
  });

  // handler for completing a to do
  $('.todo-completion').on('click', (event) => {
    event.preventDefault();
    // get id of the to do that is completed
    var todo_id = $(event.target).attr('id');
    // call PUT route to complete
    $.ajax({
      type: 'PUT',
      url: 'api/todos/' + todo_id, 
    }).then(() => {
      console.log('completed a to do');
      location.reload();
    });
  });

});