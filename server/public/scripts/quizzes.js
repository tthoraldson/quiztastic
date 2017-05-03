$('document').ready(function(){
  console.log('quizzes.js ready');
  getQuizzes();

  $('.content').on('click', '.quiz-button', function(){
    var requestedQuiz = $(this).data('id');
    getClickedQuiz(requestedQuiz);
  });

});

// function fun zone
function getQuizzes(){
  $.ajax({
    type: 'GET',
    url: '/getQuiz',
    success: function(response){

      // apppends each quiz to document
      for(i = 0; i < response.length; i++)

      $('.content').append('<div class="col-sm-6 col-md-4">'
      + '<div class="thumbnail">'
      + '<div class="caption">'
      + '<h3>' + response[i].title + '</h3>'
      + '<p>' + response[i].description + '</p>'
      + '<p><a href="#" class="btn btn-default quiz-button" role="button" data-id="' + response[i].id + '">Take Quiz</a></p>'
      + '</div></div></div>'
    );
    },
    error: function(){
      $('.conent').append('<div class="alert alert-danger" role="alert">There was an error connecting to the server.</div>');
    }
  });
}

function getClickedQuiz(req){
  $.ajax({
    type: 'GET',
    url: '/requestQuiz',
    data: {
      id: req
    },
    success: function(response){
      console.log('successss!');
    }
  });
}
