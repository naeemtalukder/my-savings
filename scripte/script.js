function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueTaxt = inputValue.value;
    const inputValueNumber = parseFloat(inputValueTaxt);
    return inputValueNumber;
}

document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothesInput = getInputValue('clothes-input');
    const expenses = document.getElementById('total-expenses');

    const totalExpenses = foodInput + rentInput + clothesInput;
    expenses.innerText = totalExpenses;

    const totalBalance = parseFloat(incomeInput) - totalExpenses;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance;

});
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    const saveInput = getInputValue('save-input');
    const balance = document.getElementById('balance').innerText;
    const saveAmount = document.getElementById('saving-amount').innerText = incomeInput * saveInput / 100;

    const remainingBalanceText = document.getElementById('remaining-balance').innerText = balance - saveAmount;
    const remainingBalance = parseFloat(remainingBalanceText.innerText);
    console.log(remainingBalance);
})
