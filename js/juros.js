function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value)
    const rate = parseFloat(document.getElementById('rate').value)
    const time = parseFloat(document.getElementById('time').value)
    const interest = (principal * rate * time) / 100
    const totalAmount = principal + interest
    document.getElementById('interestResult').innerText = `Total após juros: R$ ${totalAmount.toFixed(2)}`

}