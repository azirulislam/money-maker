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

    // Remaining balance
    const balanceBtn = document.getElementById('balance');
    const balanceValue = balanceBtn.innerText;
    const balanceAmount = parseFloat(balanceValue);
    balanceBtn.innerText = balanceAmount - (foodCostAmount + rentCostAmount + clothCostAmount);
    
    // clear input value
    foodCost.value = '' ;
    rentCost.value = '' ;
    clothCost.value = '' ;

    
}); 


