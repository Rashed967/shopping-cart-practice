function updatePhoneNumber(isIncrease){
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFiled.value;
    const previusPhoneNumber = parseInt(phoneNumberString);

    let updatePhoneNumber;
    if(isIncrease){
        updatePhoneNumber = previusPhoneNumber + 1;
        phoneNumberFiled.value = updatePhoneNumber;
    }
    else{
        updatePhoneNumber = previusPhoneNumber - 1;
        phoneNumberFiled.value = updatePhoneNumber;
    }
    return updatePhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phonePrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phonePrice;
}

function getTextElementValueById(textElementId){
    const phoneTotalElement = document.getElementById(textElementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubtotal(){
      // calculate subtotal price 
      const currentPhoneTotal = getTextElementValueById('phone-total');
      const currentCaseTotal = getTextElementValueById('case-total');
      const currentSubTotal = currentPhoneTotal + currentCaseTotal;
      const subtotalElement = document.getElementById('sub-total');
      subtotalElement.innerText = currentSubTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
   calculateSubtotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate subtotal 
    calculateSubtotal();
})