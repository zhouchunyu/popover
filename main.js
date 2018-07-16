clickMe.addEventListener('click', function(event){
  $(popover).toggle();
  event.stopPropagation();
  setTimeout(function(){
    $(document.body).one('click', function(){
      $(popover).hide();
    });
  }, 0);
});
wrapper.addEventListener('click', function(event){
  event.stopPropagation();
});