function convertGallonsToLiters() {
    const gallons = parseFloat(document.getElementById('gallons').value)
    const liters = gallons * 3.78541;
    document.getElementById('conversionResult').innerText = `${gallons} galões = ${liters.toFixed(2)} litros`
}