$(function() {
// ------------------------------------------------------------------

var index = 0;

$('#prev').click(function() {
    
  $('section#row_1 .wrapper').animate({
    left: '+=640'
  }, 1000);
  
});

$('#next').click(function() {
    
  $('section#row_1 .wrapper').animate({
    left: '-=640'
  }, 1000);
  
});

// ------------------------------------------------------------------
})
