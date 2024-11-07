document.getElementById('probabilidadeMoedaForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const resultado = document.getElementById('resultado').value
    const quantidade = parseInt(document.getElementById('quantidade').value)

    if (quantidade < 1) {
        document.getElementById('resultadoProbabilidade').innerText = 'Por favor, escolha pelo menos 1 lançamento.'
        return
    }

    const probabilidade = Math.pow(0.5, quantidade)
    document.getElementById('resultadoProbabilidade').innerText = 
    `A probabilidade de obter ${resultado} em todos os ${quantidade} lançamentos é ${(probabilidade * 100).toFixed(2)}%.`
})