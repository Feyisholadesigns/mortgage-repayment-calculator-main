document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
        alert("Please fill in all fields.");
        return;
    }

    let monthlyPayment;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    if (mortgageType === "repayment") {
        monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else {
        monthlyPayment = amount * monthlyRate;
    }

    document.getElementById('results-text').textContent = `Your monthly payment is £${monthlyPayment.toFixed(2)}`;
});

document.getElementById('clearAll').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('term').value = '25';
    document.getElementById('rate').value = '5.25';
    document.getElementById('results-text').textContent = 'Complete the form and click "calculate repayments" to see what your monthly repayments would be.';
});
