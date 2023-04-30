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

const selectButtons = document.querySelectorAll('.select-section > button');
const [selectLatest, selectFinished] = selectButtons;

const divLatest = document.querySelector('.ifo-latest-wrapper');
const divFinished = document.querySelector('.finished-wrapper');
const divElements = [divLatest, divFinished];


for (let i = 0; i < selectButtons.length; i++) {
    selectButtons[i]
        .addEventListener('click', () => {
            selectButtons.forEach(
                    button => button.classList.toggle('selected')
                );
            divElements.forEach(
                    div => div.classList.toggle('selected')
                );
                
            if (selectButtons[i] === selectLatest) {
                divFinished.style.display = 'none';
                divLatest.style.display = 'block';
            } else {
                divLatest.style.display = 'none';
                divFinished.style.display = 'block';
            }
        })
}


