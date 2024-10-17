function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    if (isNaN(bill) || bill <= 0) {
        alert("Por favor, insira um valor válido para a conta");
        return;
    }

    const tipAmount = bill * tipPercentage;
    const totalAmount = bill + tipAmount;

    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}