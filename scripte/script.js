document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const incomeInput = document.getElementById('income-input').value;

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    const expenses = document.getElementById('total-expenses');
    expenses.innerText = totalExpenses;

    const totalBalance = parseFloat(incomeInput) - totalExpenses;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance;

});
