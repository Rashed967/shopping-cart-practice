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
      const texAmount = currentSubTotal * 0.1;
}