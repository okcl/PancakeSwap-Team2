const btnToFirstDetails = document.querySelector('details');
const firstDivToAppear = document.querySelector('div.details')

btnToFirstDetails.addEventListener("toggle", 
    () => {
    firstDivToAppear.classList.toggle('open');
   });