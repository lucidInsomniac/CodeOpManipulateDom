const button = window.document.getElementById("button");

function handleClick(event) {
  //prevents data from going to server
  event.preventDefault();

  //Get values from form
  let input = window.document.getElementById("imageURL").value;
  console.log("button was pressed")
  console.log(input);        

  // creating a new image, new var not from HTML
  let img =window.document.createElement('img');

  // Store input data inside the new var, img.src
  img.src = input;
  document.getElementById('imagesUp').appendChild(img);
  document.getElementById('form').reset();

}

button.addEventListener("click", handleClick);


