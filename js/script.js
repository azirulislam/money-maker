    document.getElementById('calc-btn').addEventListener('click', function (){
    const foodCost = document.getElementById('food-cost');
    const foodCostValue = foodCost.value;
    const foodCostAmount = parseFloat(foodCostValue);
    // rent cost
    const rentCost = document.getElementById('rent-cost');
    const rentCostValue = rentCost.value;
    const rentCostAmount = parseFloat(rentCostValue);
    
    // cloth cost
    const clothCost = document.getElementById('cloth-cost');
    const clothCostValue = clothCost.value;
    const clothCostAmount = parseFloat(clothCostValue);

    // Total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const total = totalExpenses.innerText;
    const expensesAmount = parseFloat(total);
    totalExpenses.innerText = foodCostAmount + rentCostAmount + clothCostAmount;
    const totalcost = foodCostAmount + rentCostAmount + clothCostAmount;

    // Remaining balance
    const balanceBtn = document.getElementById('balance');
    const balanceValue = balanceBtn.innerText;
    const totalBalance = parseFloat(balanceValue);
    balanceBtn.innerText = totalBalance  - totalcost;
     if (totalBalance  < totalcost) {
            alert('You are crossing your earning limit');
     }
    // clear input value
    foodCost.value = '' ;
    rentCost.value = '' ;
    clothCost.value = '' ;
   
}); 

document.getElementById('save-btn').addEventListener('click', function(){
    const savingsInput = document.getElementById('savings-input');
    const inputValue = savingsInput.value;
    const inputNumber = parseFloat(inputValue);
    savingsInput.value = '';

    const savings = document.getElementById('saving-amount');
    const savingstext = savings.innerText;
    const savingsAmount = parseFloat(savingstext);
    savings.innerText = totalSaving(inputNumber);
   
    const reBalance = document.getElementById('re-balance');
    const balanceText = reBalance.innerText;
    const remainingAmount = parseFloat(balanceText);
    reBalance.innerText = savingsAmount


     function totalSaving (inputNumber){
        const result = (inputNumber*10000)/100;
        return result;
        }
});
