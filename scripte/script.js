// fetInputValue function
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueTaxt = inputValue.value;
    const inputValueNumber = parseFloat(inputValueTaxt);
    return inputValueNumber;
}

// Calculate part
document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    if (isNaN(incomeInput) == incomeInput > 0) {
        return alert('plaese input valid amount')
    }

    const foodInput = getInputValue('food-input');
    if (isNaN(foodInput) == foodInput > 0) {
        return alert('plaese input valid amount')
    }
    const rentInput = getInputValue('rent-input');
    if (isNaN(rentInput) == rentInput > 0) {
        return alert('plaese input valid amount')
    }
    const clothesInput = getInputValue('clothes-input');
    if (isNaN(clothesInput) == clothesInput > 0) {
        return alert('plaese input valid amount')
    }
    const expenses = document.getElementById('total-expenses');

    const totalExpenses = foodInput + rentInput + clothesInput;
    expenses.innerText = totalExpenses;

    const totalBalance = parseFloat(incomeInput) - totalExpenses;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance;

});

//Saving calculate part
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    const saveInput = getInputValue('save-input');
    if (isNaN(saveInput) == saveInput > 0) {
        return alert('plaese input valid amount')
    }

    const balance = document.getElementById('balance').innerText;
    const saveAmount = document.getElementById('saving-amount').innerText = incomeInput * saveInput / 100;

    const remainingBalanceText = document.getElementById('remaining-balance').innerText = balance - saveAmount;
    const remainingBalance = parseFloat(remainingBalanceText.innerText);
    console.log(remainingBalance);
});
