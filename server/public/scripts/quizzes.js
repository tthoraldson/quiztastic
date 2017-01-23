$('document').ready(function(){
  console.log('document is ready');
});

// function fun zone
function getQuizzes() {
  $.ajax({
    type: 'GET',
    url: '/cats',
    success: function(response) {
      $("#cat-list").empty();
      response.forEach(function(cat) {
        appendDom(cat);
      });
    }
  });
}
