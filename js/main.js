(function ( ) {

var buttons = document.querySelectorAll('.myButtons'), myImage = document.querySelector('#mainImage'),
    imageSources = [ 'images/mechanics.jpg', 'images/location.jpg', 'images/ride.jpg', 'images/learn.jpg'];
    

function switchSource(index) {
  myImage.src = imageSources[index];
}

[].forEach.call(buttons, function(button, index) {
  button.addEventListener('click', function() { 
      switchSource(index); }, false);
});

 /* var listbuttons = document.querySelectorAll("#itemList h2");*/

function showData() {
document.querySelector('.letter').classList.add('notShow');
}

[].forEach.call(buttons, function(button) {
button.addEventListener('click', showData, false);
});
}
 
 
 
)();
    
    
    
    
    