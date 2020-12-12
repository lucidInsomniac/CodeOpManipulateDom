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
  img.style.backgroundColor = imageURL;
  img.id = imageId

  //Append to my "image-grid" container
  img.src = imageURL;
  let grid = document.getElementById('image-grid');
  grid.appendChild(img);

}

//action when user clicks on image cells on container
function handleClick(event) {
  //Ignores clicks that are not on image/cell
  if (event.target.id === "image-grid" ){
    return;
  }

  //Get corresponding  data for this image
  let imageId = event.target.id;
  let data = AllImages[imageId];

  //Show data in featured image section
  let featImage = document.getElementById('feat-image');
  featImage.textContext = data.imageURL
  featImage.style.backgroundColor= data.imageURL;
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


