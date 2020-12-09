const demo = window.document.getElementById("demo");

function handleClick() {
  event.preventDefault();

  //Get value from form
  let form = event.target;
  let portfolioUp = form.elements.portfolioUp.value;
  console.log("button was pressed!");
  form.reset();

  //create Image Grid
  let portfolio = document.createElement('div');
  portfolio.style.backgroundPort = portfolioUp;
  portfolio.classList.add('portfolio');
  portfolio.textContent = portfolioUp;

  //Append to Image Grid
  let grid = document.getElementById('portfolio-grid');
  grid.appendChild(portfolio)
}

let form = document.querySelector('form')
demo.addEventListener("click", handleClick);


