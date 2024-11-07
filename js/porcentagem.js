function calculatePercentage() {
    const value = parseFloat(document.getElementById('percentValue').value)
    const percent = parseFloat(document.getElementById('percent').value)
    const discount = (value * percent) / 100
    const finalPrice = value - discount
    document.getElementById('percentageResult').innerText = `Preço final: R$ ${finalPrice.toFixed(2)}`
}