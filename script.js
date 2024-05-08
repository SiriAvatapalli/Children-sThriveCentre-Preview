function enter() {
    // Replace this with the action you want to perform upon clicking the circle
    alert("You've entered!");


    // For example, you can redirect the user to another page:
    // window.location.href = "enter_page.html";
  }


  function moveDot(x, y) {
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
}


function takeStairs()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'upstairs.jpg';
 
          var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
      currentImage.style.opacity = 1;
     


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }


  function takeRooms()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'rooms.jpg';
 
          var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
      currentImage.style.opacity = 1;
     


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }


  function takeDining()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'dining.jpg';
      var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
      currentImage.style.opacity = 1;


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }


  function takeClasses()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'classes.jpg';
      var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.classrooms');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
      currentImage.style.opacity = 1;


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }
  function takePlayground()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'Playground.jpg';
      var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.classrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
            
      currentImage.style.opacity = 1;


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }
  function takeClassrooms()
{
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'classrooms.jpg';
      var buttonDiv = document.querySelector('.button');
            buttonDiv.style.display = 'block';
            var buttonDiv = document.querySelector('.dotclasses');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.classrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotstairs');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotdining');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dot');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.dotrooms');
            buttonDiv.style.display = 'none';
            var buttonDiv = document.querySelector('.rightarrow');
            buttonDiv.style.display = 'none';
      currentImage.style.opacity = 1;


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }
  function changeImage() {
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;


    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      currentImage.src = 'image2.jpg';
      currentImage.style.opacity = 1;


      // Zoom in on the new image
      currentImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
    }, 500); // Delay matches the transition duration
  }

  function enter() {
    // Replace this with the action you want to perform upon clicking the circle
   // alert("You've entered!");
    // For example, you can redirect the user to another page:
    // window.location.href = "enter_page.html";
  }

  function changeImage() {
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;

    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      // Check the current image source
      var currentSrc = currentImage.src.split('/').pop(); // Get the filename
      if (currentSrc === 'image2.jpg') {
        // If current image is the second one, switch to the third image
        currentImage.src = 'centre.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
         
      }
      else
      {
        currentImage.src ='image2.jpg'
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';
          
         
      }
      currentImage.style.opacity = 1;

      // Reset scale to normal
      currentImage.style.transform = 'scale(1)';
    }, 500); // Delay matches the transition duration
  }


  function changePreviousImage() {
    // Fade out the current image
    var currentImage = document.querySelector('.circle img');
    currentImage.style.opacity = 0;

    // After a short delay, change the image source and fade in the new image
    setTimeout(function() {
      // Check the current image source
      var currentSrc = currentImage.src.split('/').pop(); // Get the filename
      if (currentSrc === 'image2.jpg') {
        // If current image is the second one, switch to the third image
        currentImage.src = 'centre.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'none';


      }
      else if (currentSrc === 'classrooms.jpg') {
        // If current image is the second one, switch to the third image
        currentImage.src = 'classes.jpg';
       var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'none';


      }
      else if (currentSrc === '2a718ef357910a53adb58d1d9fef942080d5f67c.jpg')
      {
        currentImage.src = 'image2.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';


      }
       
      else if (currentSrc === 'upstairs.jpg')
      {
        currentImage.src = 'image2.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';
      }
      else if (currentSrc === 'dining.jpg')
      {
        currentImage.src = 'image2.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.dotrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';
      }
      else if (currentSrc === 'classes.jpg')
      {
        currentImage.src = 'image2.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';
      }
      else
      {
        currentImage.src = 'image2.jpg';
        var buttonDiv = document.querySelector('.button');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotclasses');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotstairs');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dotdining');
          buttonDiv.style.display = 'block';
          var buttonDiv = document.querySelector('.dot');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.classrooms');
          buttonDiv.style.display = 'none';
          var buttonDiv = document.querySelector('.rightarrow');
          buttonDiv.style.display = 'block';
      }


     
      currentImage.style.opacity = 1;

      // Reset scale to normal
      currentImage.style.transform = 'scale(1)';
    }, 500); // Delay matches the transition duration
  }