//applied to all instances on a page
//$('h1')
//starting with console logging all images on the page
//console.log($('img'))

$(function() {
  console.log("DOM is ready, javascript loading!")
  $('nav').hide().delay(500).show('slow')
  $('#hide').click(function(){
    //console.log("button 1 clicked!")
    $('img').hide()
  })

  $('#show').click(function() {
    $('img').show()
  })

  $('img').mouseenter(function() {
    console.log("mouse has entered")
    $(this).fadeTo('slow', .75)
  }).mouseleave(function() {
    console.log("mouse has left")
    $(this).fadeTo('fast', 1)
  })
})
