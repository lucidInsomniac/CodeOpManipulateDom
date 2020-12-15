/*******************************Global Variabes*******************************************/
let AllImages = {}
let NextImageId= 1;

/*******************************Event Handlers********************************************/
function handleSubmit(event) {
  //prevents data from going to server
  event.preventDefault();

  //Get values from form ("imageURL" and "descr") and reset fields, reset empties out form
  let form = event.target;
  let portTitle = form.elements.portTitle.value;
  let imageURL = window.document.getElementById("imageURL").value;
  let descr = form.elements.descr.value;
      console.log("button was pressed");
      console.log(imageURL);
  //empties out form
  form.reset();
  

  // Save data (imageURL and descr) to global obj variables (AllImages, and NextImageId)
  let imageId = NextImageId++;
  AllImages[imageId] = {portTitle: portTitle, imageURL: imageURL, descr: descr}


  // Create image with text and background image from form
  // creating a new image, new var not from HTML
  let img = window.document.createElement('img');
  img.classList.add('img');
  img.innerText = imageURL
  //CSS "background-image"
  img.style.backgroundImage = imageURL;
  img.id = imageId

  //Append to my "image-grid" container
  img.src = imageURL;
  let grid = document.getElementById('image-grid');
  grid.appendChild(img);

}

//action when user clicks on image cells on container
function handleClick(event) {
  //Ignores clicks that are not on image/cell
  if (event.target.id === 'image-grid' ){
    return;
  }

  //Get corresponding  data for this image
  let imageId = event.target.id;
  console.log(imageId)

  let data = AllImages[imageId];
  console.log(data)

  // Get the expanded image
  let img = document.getElementById('feat-image');
  console.log(img) //url text shows but no image
  // Use the same src in the expanded image as the image being clicked on from the grid
  img.src = data.imageURL

  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  img.textContent = data.imageURL 
  console.log(data.imageURL) //image shows in console

  
 //Image is supposed to display in feat-section here
  img.style.backgroundImage = data.imageURL;
  console.log(data.imageURL) //image shows in console
  
  document.getElementById('feat-title').textContent = data.portTitle
  document.getElementById('feat-descr').textContent = data.descr

  //Make sure featured image section is visible
  document.getElementById('feat-section').style.display = 'block';

  
  

}



/*******************************Initialization********************************************/

//Tell form to call handleSubmit() on "submit" events
let form = document.querySelector('form')
form.addEventListener("submit", handleSubmit);

// //Tell image-grid to call on handeClick() on "click" events
let grid =  document.getElementById('image-grid');
grid.addEventListener('click', handleClick);


