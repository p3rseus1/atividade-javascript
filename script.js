function questao1() {
  alert('Keep calm and carry on!')
}

function questao2() {
  alert('Cuidado com COVID 19!')
}

function questao3() {
  const numero1 = Number(document.getElementById('numero1-questao3').value)
  const numero2 = Number(document.getElementById('numero2-questao3').value)
  const numero3 = Number(document.getElementById('numero3-questao3').value)
  let maiorNumero = 0

  if (numero1 > maiorNumero) {
    maiorNumero = numero1
  }

  if (numero2 > maiorNumero) {
    maiorNumero = numero2
  }

  if (numero3 > maiorNumero) {
    maiorNumero = numero3
  }

  alert('O maior número entre os três será ' + maiorNumero)
}

function questao4() {
  const idade = Number(document.getElementById('idade-questao4').value)

  if (idade >= 18) {
    alert('Você é maior de idade!')
  } else {
    alert('Você não é maior de idade!')
  }
}

function questao5() {
  const numero1 = Number(document.getElementById('numero1-questao5').value)
  const numero2 = Number(document.getElementById('numero2-questao5').value)
  const numero3 = Number(document.getElementById('numero3-questao5').value)
  let media = (numero1 + numero2 + numero3) / 3

  alert(
    'A média aritmética dos números: ' +
      numero1 +
      ', ' +
      numero2 +
      ' e ' +
      numero3 +
      ' é igual a ' +
      media.toFixed(2)
  )
}

function questao6() {
  const altura = parseFloat(document.getElementById('altura-questao6').value)
  const peso = parseFloat(document.getElementById('peso-questao6').value)
  let imc = peso / (altura * altura)

  if (imc < 18.5) {
    alert('Você está abaixo do peso ideal!')
  } else if (imc >= 18.5 && imc < 25) {
    alert('O seu imc é ' + imc.toFixed(0.2) + '. Você está com um peso ideal')
  } else if (imc >= 25 && imc < 30) {
    alert(
      'O seu imc é ' + imc.toFixed(0.2) + '. Você está levemente acima do peso'
    )
  } else if (imc >= 30 && imc < 35) {
    alert(
      'O seu imc é ' + imc.toFixed(0.2) + '. Você está com obesidade grau I!'
    )
  } else if (imc >= 35 && imc < 40) {
    alert(
      'O seu imc é ' + imc.toFixed(0.2) + '. Você está com obesidade grau II'
    )
  } else {
    alert(
      'O seu imc é ' +
        imc.toFixed(0.2) +
        '. Você com obesidade grau III! Procure um médico!'
    )
  }
}

function questao7() {
  const convenAte9 = document.getElementById('convenAte9-questao7').value
  const convenAte30 = document.getElementById('convenAte30-questao7').value
  const convenAte60 = document.getElementById('convenAte60-questao7').value
  const convenAcima60 = document.getElementById('convenAcima60-questao7').value
  let calculoPlano =
    100 +
    convenAte9 * 80 +
    convenAte30 * 50 +
    convenAte60 * 95 +
    convenAcima60 * 130

  alert('O preço total do seu plano de saúde será R$ ' + calculoPlano)
}
