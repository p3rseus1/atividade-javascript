function questao1() {
  alert('Keep calm and carry on!')
}

function questao2() {
  alert('Cuidado com COVID 19!')
}

function questao3() {
  let numero1 = Number(document.getElementById('numero1-questao3').value)
  let numero2 = Number(document.getElementById('numero2-questao3').value)
  let numero3 = Number(document.getElementById('numero3-questao3').value)
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

  if (numero1 == numero2 && numero2 == numero3) {
    maiorNumero = numero1
  }

  alert('O maior número entre os três será ' + maiorNumero)
}

function questao4() {
  let idade = Number(document.getElementById('idade-questao4').value)

  if (idade >= 18) {
    alert('Você é maior de idade!')
  } else {
    alert('Você não é maior de idade!')
  }
}

function questao5() {
  let numero1 = Number(document.getElementById('numero1-questao5').value)
  let numero2 = Number(document.getElementById('numero2-questao5').value)
  let numero3 = Number(document.getElementById('numero3-questao5').value)
  let media = (numero1 + numero2 + numero3) / 3

  alert(
    'A média aritmética dos números: ' +
      numero1 +
      ', ' +
      numero2 +
      ' e ' +
      numero3 +
      ' é igual a ' +
      media
  )
}

function questao6() {
  let altura = parseFloat(document.getElementById('altura-questao6').value)
  let peso = parseFloat(document.getElementById('peso-questao6').value)
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
  let convenAte9 = document.getElementById('convenAte9-questao7').value
  let convenAte30 = document.getElementById('convenAte30-questao7').value
  let convenAte60 = document.getElementById('convenAte60-questao7').value
  let convenAcima60 = document.getElementById('convenAcima60-questao7').value
  let calculoPlano =
    100 +
    convenAte9 * 80 +
    convenAte30 * 50 +
    convenAte60 * 95 +
    convenAcima60 * 130

  alert('O preço total do seu plano de saúde será R$ ' + calculoPlano)
}

function questao8() {
  let mes = Number(document.getElementById('mes-questao8').value)
  let valor = parseFloat(document.getElementById('valor-questao8').value)
  let formulaValor

  switch (mes) {
    case 1:
      formulaValor = 100 * Math.pow(1 + 0.05, 1)
      alert(
        'O valor da sua anuidade, pago no mês de Janeiro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 2:
      formulaValor = 100 * Math.pow(1 + 0.05, 2)
      alert(
        'O valor da sua anuidade, pago no mês de Fevereiro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 3:
      formulaValor = 100 * Math.pow(1 + 0.05, 3)
      alert(
        'O valor da sua anuidade, pago no mês de Março, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 4:
      formulaValor = 100 * Math.pow(1 + 0.05, 4)
      alert(
        'O valor da sua anuidade, pago no mês de Maio, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 5:
      formulaValor = 100 * Math.pow(1 + 0.05, 5)
      alert(
        'O valor da sua anuidade, pago no mês de Abril, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 6:
      formulaValor = 100 * Math.pow(1 + 0.05, 6)
      alert(
        'O valor da sua anuidade, pago no mês de Junho, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 7:
      formulaValor = 100 * Math.pow(1 + 0.05, 7)
      alert(
        'O valor da sua anuidade, pago no mês de Julho, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 8:
      formulaValor = 100 * Math.pow(1 + 0.05, 8)
      alert(
        'O valor da sua anuidade, pago no mês de Agosto, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 9:
      formulaValor = 100 * Math.pow(1 + 0.05, 9)
      alert(
        'O valor da sua anuidade, pago no mês de Setembro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 10:
      formulaValor = 100 * Math.pow(1 + 0.05, 10)
      alert(
        'O valor da sua anuidade, pago no mês de Outubro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 11:
      formulaValor = 100 * Math.pow(1 + 0.05, 11)
      alert(
        'O valor da sua anuidade, pago no mês de Novembro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    case 12:
      formulaValor = 100 * Math.pow(1 + 0.05, 12)
      alert(
        'O valor da sua anuidade, pago no mês de Dezembro, será R$ ' +
          formulaValor.toFixed(2)
      )
      break

    default:
      alert('Ocorreu um erro. Tente novamente!')
  }
}

function questao9() {
  let campo = document.getElementById('campo-questao9')
  let contador = 11
  let campoTemporario = (campo.innerHTML = ' ')
  let hello = 'Hello, world! '

  while (contador > 0) {
    campoTemporario = campoTemporario + hello
    campo.innerHTML = campoTemporario
    contador--
  }
}

function questao10() {
  let campo = document.getElementById('campo-questao10')
  let campoTemporario = (campo.innerHTML = ' ')

  for (let i = 1; i <= 50; i++) {
    campoTemporario = campoTemporario + i + ' '
    campo.innerHTML = campoTemporario
  }
}

function questao11() {
  let campo = document.getElementById('campo-questao11')
  let contador = 1
  let campoTemporario = (campo.innerHTML = ' ')

  do {
    if (contador % 2 == 0) {
      campoTemporario = campoTemporario + contador + ' '
      campo.innerHTML = campoTemporario
    }
    contador++
  } while (contador <= 100)
}

function questao12() {
  let nomeCrianca1 = String(document.getElementById('crianca1-questao12').value)
  let nomeCrianca2 = String(document.getElementById('crianca2-questao12').value)
  let alturaCrianca1 = parseFloat(
    document.getElementById('alturaCrianca1-questao12').value
  )
  let alturaCrianca2 = parseFloat(
    document.getElementById('alturaCrianca2-questao12').value
  )
  let taxaCrianca1 = parseFloat(
    document.getElementById('taxaCrianca1-questao12').value
  )
  let taxaCrianca2 = parseFloat(
    document.getElementById('taxaCrianca2-questao12').value
  )
  let anos = 0

  if (alturaCrianca1 < alturaCrianca2) {
    do {
      alturaCrianca1 = alturaCrianca1 + taxaCrianca1
      alturaCrianca2 = alturaCrianca2 + taxaCrianca2
      anos++
    } while (alturaCrianca1 < alturaCrianca2)
    alert(
      'A menor criança é ' +
        nomeCrianca1 +
        '. E ela será maior que ' +
        nomeCrianca2 +
        ' em ' +
        anos +
        ' anos, com ' +
        alturaCrianca1.toFixed(2) +
        ' cm de altura.'
    )
  }
}

function questao13() {
  const decimal = parseFloat(document.getElementById('decimal-questao13').value)
  alert('Mais R$ ' + decimal.toFixed(2) + ' na conta do pai!')
}

function questao14() {
  let numero1 = parseFloat(document.getElementById('numero1-questao14').value)
  let numero2 = parseFloat(document.getElementById('numero2-questao14').value)
  let operacao = String(document.getElementById('operacao-questao14').value)
  let soma = numero1 + numero2
  let subtracao = numero1 - numero2
  let multiplicacao = numero1 * numero2
  let divisao = numero1 / numero2

  switch (operacao) {
    case 'soma':
      alert('A soma de ' + numero1 + ' e ' + numero2 + ' será igual a ' + soma)
      break

    case 'subtracao':
      alert(
        'A subtração de ' +
          numero1 +
          ' e ' +
          numero2 +
          ' será igual a ' +
          subtracao
      )
      break

    case 'multiplicacao':
      alert(
        'A multiplicação de ' +
          numero1 +
          ' e ' +
          numero2 +
          ' será igual a ' +
          multiplicacao
      )
      break

    case 'divisao':
      alert(
        'A divisão de ' + numero1 + ' e ' + numero2 + ' será igual a ' + divisao
      )
      break

    default:
      console.log('Algo de errado não está certo. Contate os administradores!')
  }
}

function questao15() {
  let salario = parseFloat(document.getElementById('salario-questao15').value)
  let plano = document.getElementById('plano-questao15').value

  switch (plano) {
    case 'a':
      var salarioAtual = salario + salario * 0.1
      alert(
        'O plano escolhido foi o Plano A. O salário do funcionário será de R$ ' +
          salarioAtual.toFixed(2)
      )
      break

    case 'b':
      var salarioAtual = salario + salario * 0.15
      alert(
        'O plano escolhido foi o Plano B. O salário do funcionário será de R$ ' +
          salarioAtual.toFixed(2)
      )
      break

    case 'c':
      var salarioAtual = salario + salario * 0.2
      alert(
        'O plano escolhido foi o Plano C. O salário do funcionário será de R$ ' +
          salarioAtual.toFixed(2)
      )
      break

    default:
      alert('Erro inesperado. Contate os administradores! ')
  }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------- Funções pararelas ----------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*function questao1() {
  alert('Keep calm and carry on!')
}

function questao2() {
  alert('Cuidado com COVID 19!')
}*/

/*function questao1() {
  alert('Keep calm and carry on!')
}

function questao2() {
  alert('Cuidado com COVID 19!')
}*/

function questao3Tudo() {
  let numero1Tudo = Number(
    document.getElementById('numero1-questao3-tudo').value
  )
  let numero2Tudo = Number(
    document.getElementById('numero2-questao3-tudo').value
  )
  let numero3Tudo = Number(
    document.getElementById('numero3-questao3-tudo').value
  )
  let maiorNumeroTudo = 0

  if (numero1Tudo > maiorNumeroTudo) {
    maiorNumeroTudo = numero1Tudo
  }

  if (numero2Tudo > maiorNumeroTudo) {
    maiorNumeroTudo = numero2Tudo
  }

  if (numero3Tudo > maiorNumeroTudo) {
    maiorNumeroTudo = numero3Tudo
  }

  alert('O maior número entre os três será ' + maiorNumeroTudo)
}

function questao4Tudo() {
  let idadeTudo = Number(document.getElementById('idade-questao4-tudo').value)

  if (idadeTudo >= 18) {
    alert('Você é maior de idade!')
  } else {
    alert('Você não é maior de idade!')
  }
}

function questao5Tudo() {
  let numero1Tudo = Number(
    document.getElementById('numero1-questao5-tudo').value
  )
  let numero2Tudo = Number(
    document.getElementById('numero2-questao5-tudo').value
  )
  let numero3Tudo = Number(
    document.getElementById('numero3-questao5-tudo').value
  )
  let mediaTudo = (numero1Tudo + numero2Tudo + numero3Tudo) / 3

  alert(
    'A média aritmética dos números: ' +
      numero1Tudo +
      ', ' +
      numero2Tudo +
      ' e ' +
      numero3Tudo +
      ' é igual a ' +
      mediaTudo.toFixed(2)
  )
}

function questao6Tudo() {
  let alturaTudo = parseFloat(
    document.getElementById('altura-questao6-tudo').value
  )
  let pesoTudo = parseFloat(document.getElementById('peso-questao6-tudo').value)
  let imcTudo = pesoTudo / (alturaTudo * alturaTudo)

  if (imcTudo < 18.5) {
    alert('Você está abaixo do peso ideal!')
  } else if (imcTudo >= 18.5 && imcTudo < 25) {
    alert(
      'O seu imc é ' + imcTudo.toFixed(0.2) + '. Você está com um peso ideal'
    )
  } else if (imcTudo >= 25 && imcTudo < 30) {
    alert(
      'O seu imc é ' +
        imcTudo.toFixed(0.2) +
        '. Você está levemente acima do peso'
    )
  } else if (imcTudo >= 30 && imcTudo < 35) {
    alert(
      'O seu imc é ' +
        imcTudo.toFixed(0.2) +
        '. Você está com obesidade grau I!'
    )
  } else if (imcTudo >= 35 && imcTudo < 40) {
    alert(
      'O seu imc é ' +
        imcTudo.toFixed(0.2) +
        '. Você está com obesidade grau II'
    )
  } else {
    alert(
      'O seu imc é ' +
        imcTudo.toFixed(0.2) +
        '. Você com obesidade grau III! Procure um médico!'
    )
  }
}

function questao7Tudo() {
  let convenAte9Tudo = document.getElementById('convenAte9-questao7-tudo').value
  let convenAte30Tudo = document.getElementById(
    'convenAte30-questao7-tudo'
  ).value
  let convenAte60Tudo = document.getElementById(
    'convenAte60-questao7-tudo'
  ).value
  let convenAcima60Tudo = document.getElementById(
    'convenAcima60-questao7-tudo'
  ).value
  let calculoPlanoTudo =
    100 +
    convenAte9Tudo * 80 +
    convenAte30Tudo * 50 +
    convenAte60Tudo * 95 +
    convenAcima60Tudo * 130

  alert('O preço total do seu plano de saúde será R$ ' + calculoPlanoTudo)
}
Tudo
function questao8Tudo() {
  let mesTudo = Number(document.getElementById('mes-questao8-tudo').value)
  let valorTudo = parseFloat(
    document.getElementById('valor-questao8-tudo').value
  )
  let formulaValorTudo

  switch (mesTudo) {
    case 1:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 1)
      alert(
        'O valor da sua anuidade, pago no mês de Janeiro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 2:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 2)
      alert(
        'O valor da sua anuidade, pago no mês de Fevereiro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 3:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 3)
      alert(
        'O valor da sua anuidade, pago no mês de Março, será R$ ' +
          formulaValorTudoTudo.toFixed(2)
      )
      break

    case 4:
      formulaValorTudoTudo = 100 * Math.pow(1 + 0.05, 4)
      alert(
        'O valor da sua anuidade, pago no mês de Maio, será R$ ' +
          formulaValorTudoTudo.toFixed(2)
      )
      break

    case 5:
      formulaValorTudoTudo = 100 * Math.pow(1 + 0.05, 5)
      alert(
        'O valor da sua anuidade, pago no mês de Abril, será R$ ' +
          formulaValorTudoTudo.toFixed(2)
      )
      break

    case 6:
      formulaValorTudoTudo = 100 * Math.pow(1 + 0.05, 6)
      alert(
        'O valor da sua anuidade, pago no mês de Junho, será R$ ' +
          formulaValorTudoTudo.toFixed(2)
      )
      break

    case 7:
      formulaValorTudoTudo = 100 * Math.pow(1 + 0.05, 7)
      alert(
        'O valor da sua anuidade, pago no mês de Julho, será R$ ' +
          formulaValorTudoTudo.toFixed(2)
      )
      break

    case 8:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 8)
      alert(
        'O valor da sua anuidade, pago no mês de Agosto, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 9:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 9)
      alert(
        'O valor da sua anuidade, pago no mês de Setembro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 10:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 10)
      alert(
        'O valor da sua anuidade, pago no mês de Outubro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 11:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 11)
      alert(
        'O valor da sua anuidade, pago no mês de Novembro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    case 12:
      formulaValorTudo = 100 * Math.pow(1 + 0.05, 12)
      alert(
        'O valor da sua anuidade, pago no mês de Dezembro, será R$ ' +
          formulaValorTudo.toFixed(2)
      )
      break

    default:
      alert('Ocorreu um erro. Tente novamente!')
  }
}

function questao9Tudo() {
  let campoTudo = document.getElementById('campo-questao9-tudo')
  let contadorTudo = 11
  let campoTemporarioTudo = (campoTudo.innerHTML = ' ')
  let helloTudo = 'Hello, world! '

  while (contadorTudo > 0) {
    campoTemporarioTudo = campoTemporarioTudo + helloTudo
    campoTudo.innerHTML = campoTemporarioTudo
    contadorTudo--
  }
}

function questao10Tudo() {
  let campoTudo = document.getElementById('campo-questao10-tudo')
  let campoTemporarioTudo = (campoTudo.innerHTML = ' ')

  for (let i = 1; i <= 50; i++) {
    campoTemporarioTudo = campoTemporarioTudo + i + ' '
    campoTudo.innerHTML = campoTemporarioTudo
  }
}

function questao11Tudo() {
  let campoTudo = document.getElementById('campo-questao11-tudo')
  let contadorTudo = 1
  let campoTemporarioTudo = (campoTudo.innerHTML = ' ')

  do {
    if (contadorTudo % 2 == 0) {
      campoTemporarioTudo = campoTemporarioTudo + contadorTudo + ' '
      campoTudo.innerHTML = campoTemporarioTudo
    }
    contadorTudo++
  } while (contadorTudo <= 100)
}

function questao12Tudo() {
  let nomeCrianca1Tudo = String(
    document.getElementById('crianca1-questao12-tudo').value
  )
  let nomeCrianca2Tudo = String(
    document.getElementById('crianca2-questao12-tudo').value
  )
  let alturaCrianca1Tudo = parseFloat(
    document.getElementById('alturaCrianca1-questao12-tudo').value
  )
  let alturaCrianca2Tudo = parseFloat(
    document.getElementById('alturaCrianca2-questao12-tudo').value
  )
  let taxaCrianca1Tudo = parseFloat(
    document.getElementById('taxaCrianca1-questao12-tudo').value
  )
  let taxaCrianca2Tudo = parseFloat(
    document.getElementById('taxaCrianca2-questao12-tudo').value
  )
  let anosTudo = 0

  if (alturaCrianca1Tudo < alturaCrianca2Tudo) {
    do {
      anosTudo++
      alturaCrianca1Tudo = alturaCrianca1Tudo + taxaCrianca1Tudo
      alturaCrianca2Tudo = alturaCrianca2Tudo + taxaCrianca2Tudo
    } while (alturaCrianca1Tudo < alturaCrianca2Tudo)
    alert(
      'A menor criança é ' +
        nomeCrianca1Tudo +
        '. E ela será maior que ' +
        nomeCrianca2Tudo +
        ' em ' +
        anosTudo +
        ' anos, com ' +
        alturaCrianca1Tudo.toFixed(2) +
        ' cm de altura.'
    )
  }
}

function questao13Tudo() {
  const decimalTudo = parseFloat(
    document.getElementById('decimal-questao13-tudo').value
  )
  alert('Mais R$ ' + decimalTudo.toFixed(2) + ' na conta do pai!')
}

function questao14Tudo() {
  let numero1Tudo = parseFloat(
    document.getElementById('numero1-questao14-tudo').value
  )
  let numero2Tudo = parseFloat(
    document.getElementById('numero2-questao14-tudo').value
  )
  let operacaoTudo = String(
    document.getElementById('operacao-questao14-tudo').value
  )
  let somaTudo = numero1Tudo + numero2Tudo
  let subtracaoTudo = numero1Tudo - numero2Tudo
  let multiplicacaoTudo = numero1Tudo * numero2Tudo
  let divisaoTudo = numero1Tudo / numero2Tudo

  switch (operacaoTudo) {
    case 'soma':
      alert(
        'A soma de ' +
          numero1Tudo +
          ' e ' +
          numero2Tudo +
          ' será igual a ' +
          somaTudo
      )
      break

    case 'subtracao':
      alert(
        'A subtração de ' +
          numero1Tudo +
          ' e ' +
          numero2Tudo +
          ' será igual a ' +
          subtracaoTudo
      )
      break

    case 'multiplicacao':
      alert(
        'A multiplicação de ' +
          numero1Tudo +
          ' e ' +
          numero2Tudo +
          ' será igual a ' +
          multiplicacaoTudo
      )
      break

    case 'divisao':
      alert(
        'A divisão de ' +
          numero1Tudo +
          ' e ' +
          numero2Tudo +
          ' será igual a ' +
          divisaoTudo
      )
      break

    default:
      console.log('Algo de errado não está certo. Contate os administradores!')
  }
}

function questao15Tudo() {
  let salarioTudo = parseFloat(
    document.getElementById('salario-questao15-tudo').value
  )
  let planoTudo = document.getElementById('plano-questao15-tudo').value

  switch (planoTudo) {
    case 'a':
      var salarioAtualTudo = salarioTudo + salarioTudo * 0.1
      alert(
        'O plano escolhido foi o Plano A. O salário do funcionário será de R$ ' +
          salarioAtualTudo.toFixed(2)
      )
      break

    case 'b':
      var salarioAtualTudo = salarioTudo + salarioTudo * 0.15
      alert(
        'O plano escolhido foi o Plano B. O salário do funcionário será de R$ ' +
          salarioAtualTudo.toFixed(2)
      )
      break

    case 'c':
      var salarioAtualTudo = salarioTudo + salarioTudo * 0.2
      alert(
        'O plano escolhido foi o Plano C. O salário do funcionário será de R$ ' +
          salarioAtualTudo.toFixed(2)
      )
      break

    default:
      alert('Erro inesperado. Contate os administradores! ')
  }
}
