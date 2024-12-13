function secretNumberGame() {
  let numeroSecreto = getRandomIntInclusive(0, 10)
  console.log('secret :: ' + numeroSecreto)
  
  alert('Bem vindo ao jogo "Descubra o número secreto"!')
  
  let numeroChute = prompt('Digite um numero de 0 a 10')
  let tentativas = 0
  
  checarNumero(numeroSecreto, numeroChute)
}

function checarNumero (numeroSecreto, numeroChute) {
  tentativas++

  if (numeroSecreto == numeroChute) {    
    alert(`Parabéns!! Você encontrou o número secreto ${numeroSecreto} com ${tentativas} tentantiva${tentativas > 1 ? 's' : ''}!`)
    return
  }

  else if (numeroSecreto > numeroChute) {
    numeroChute = prompt(`Que pena, você errou, digite outro numero de 0 a 10. \nDica: O número é maior que ${numeroChute}`)
    checarNumero(numeroSecreto, numeroChute)
  }

  else if (numeroSecreto < numeroChute) {
    numeroChute = prompt(`Que pena, você errou, digite outro numero de 0 a 10. \nDica: O número é menor que ${numeroChute}`)
    checarNumero(numeroSecreto, numeroChute)
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
