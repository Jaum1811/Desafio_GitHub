function mostraIdade (nome, idade){
    if (!idade) return 'Defina um número para a idade'
    return `${nome} possui ${idade} anos.`
}

function mostraCidade (nome, cidade){
    return `${nome} mora em ${cidade}.`
}

function mostraHobby (nome, hobby){
    return `${nome} possui o hobby de ${hobby}.`
}

export { mostraIdade, mostraCidade, mostraHobby };