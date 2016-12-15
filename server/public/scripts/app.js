$('document').ready(function(){
  console.log('DOCUMENT IS READY');

  // WHEN CLICKING ON ANSWERS
  $('.alert').on('click', function(){
    $(this).addClass('clicked');

    // WHEN CLICKING CORRECT ANSWER
    if($(this).hasClass('correct')){
      clickedCorrect(this);
    }
    // WHEN CLICKING INCORRECT ANSWER
    else{
      clickedIncorrect(this);
    }
  })
});

// FUNCTION ZONE WOOOOOOOOOOOOOOOOOO
function clickedCorrect(thing){
  $(thing).removeClass('alert-info').addClass('alert-success');
}

function clickedIncorrect(thing){
  $(thing).removeClass('alert-info').addClass('alert-danger');
  $(thing).parent().find('.correct').removeClass('alert-info').addClass('alert-success');
}

// COOL ARRAY ZONEEEEEEEE
