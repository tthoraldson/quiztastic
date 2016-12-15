$('document').ready(function(){
  console.log('DOCUMENT IS READY');

  // WHEN CLICKING ON ANSWERS
  $('.alert').on('click', function(){
    $(this).addClass('clicked');

    // WHEN CLICKING CORRECT ANSWER
    if($(this).hasClass('correct')){
      clickedCorrect();
    }
    // WHEN CLICKING INCORRECT ANSWER
    else{
      clickedIncorrect();
    }
  })
});

// FUNCTION ZONE WOOOOOOOOOOOOOOOOOO
function clickedCorrect(){
  console.log('removing lame class');
  $(this).removeClass('alert-info');
}

function clickedIncorrect(){
  console.log('incorrect answer')
}
