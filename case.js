function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previusCaseNumber = parseInt(caseNumberString);

    let updateCaseNumber;
    if(isIncrease){
        updateCaseNumber = previusCaseNumber + 1;
    }
    else{
        updateCaseNumber = previusCaseNumber - 1;
    }
   
    caseNumberField.value = updateCaseNumber;
    return updateCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber){
 const totalPriceCase = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText =  totalPriceCase;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newCaseNumber =  updateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubtotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubtotal();
})