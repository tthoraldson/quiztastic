$('document').ready(function(){
  console.log('document is ready');
  getQuizzes();
});

// function fun zone
function getQuizzes(){
  console.log('getQuizzes() started');
  $.ajax({
    type: 'GET',
    url: '/getQuiz',
    success: function(response){
      console.log(response);
    }
  });
}
