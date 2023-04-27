const btnToFirstDetails = document.querySelector('details');
const textFirstBtn = document.querySelector('details > summary');
const firstDivToAppear = document.querySelector('div.details');

btnToFirstDetails.addEventListener("toggle", 
    () => {
    firstDivToAppear.classList.toggle('open');
    if (btnToFirstDetails.open) {
        textFirstBtn.innerHTML = `Hide <img src="./public/toggle-icon.svg" alt="">`;
    } else {
        textFirstBtn.innerHTML = `Details <img src="./public/toggle-icon.svg" alt="">`;
    }
   });

const detailsBtn = document.querySelectorAll('#details details');
const detailsTextToChange = document.querySelectorAll('#details details > summary > p:nth-of-type(2)');

for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener('toggle', () => {
        if (detailsBtn[i].open) {
            detailsTextToChange[i].innerHTML = `Hide <img src="./public/toggle-icon.svg" alt="">`;
        } else {
            detailsTextToChange[i].innerHTML = `Details <img src="./public/toggle-icon.svg" alt="">`;
        }
    });
}