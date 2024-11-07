document.getElementById('probabilidadeForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const numero = parseInt(document.getElementById('numero').value)
    const quantidade = parseInt(document.getElementById('quantidade').value)

    if (numero < 1 || numero > 6) {
        document.getElementById('resultado').innerText = 'Por favor, escolha um número entre 1 e 6.'
        return
    }

    if (quantidade < 1) {
        document.getElementById('resultado').innerText = 'Por favor, escolha pelo menos 1 dado.'
        return
    }

    const probabilidade = 1 / Math.pow(6, quantidade - 1)
    document.getElementById('resultado').innerText = 
    `A probabilidade de todos os ${quantidade} dados caírem em ${numero} é ${(probabilidade * 100).toFixed(2)}%.`
});