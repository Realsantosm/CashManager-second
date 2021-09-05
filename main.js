var nextBtn = document.querySelector('#next-btn');
var secondDiv = document.querySelector('#second-div');
var cashInput = document.querySelector('#cash-input');
var checkBtn = document.querySelector('#next-btn');
var showTable = document.querySelector('#table-inside');



 function clickHandler(){
    //  if()
    secondDiv.style.display = 'block';
 }


function nextClickHandler(){
    showTable.style.display = 'block';
}

nextBtn.addEventListener('click',clickHandler);
checkBtn.addEventListener('click', nextClickHandler);