$('document').ready(function(){
  getQuizzes();
});

// function fun zone
function getQuizzes(){
  $.ajax({
    type: 'GET',
    url: '/getQuiz',
    success: function(response){
      //console.log(response);

      for(i = 0; i < response.length; i++)
      $('.content').append('<div class="col-sm-6 col-md-4">'
      + '<div class="thumbnail">'
      + '<div class="caption">'
      + '<h3>' + response[i].title + '</h3>'
      + '<p>' + response[i].description + '</p>'
      + '<p><a href="#" class="btn btn-default" role="button">Take Quiz</a></p>'
      + '</div></div></div>'
    );
    }
  });
}
