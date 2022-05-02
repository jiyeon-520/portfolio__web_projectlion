console.clear();

function Form1__init() {
  $('form input[type="email"]').focus(function() {
    $(this).addClass('started');
  });
  
  $('form input[type="password"]').focus(function() {
    $(this).addClass('started');
  });
}

Form1__init();