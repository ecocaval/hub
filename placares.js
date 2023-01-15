function subindoNoQuadroDeLideres(placarLideres, placarJogador) {

    const scoreArr = []

    for (let i = 0; i < placarJogador.length; i++) {

        let arr = [...placarLideres, placarJogador[i]]

        arr = [...arr].sort((a, b) => a - b).reverse()

        const newArr = [] // to avoid repetition

        arr.forEach(num => {
            if (!newArr.includes(num)) newArr.push(num)
        })

        scoreArr.push(newArr.indexOf(placarJogador[i]) + 1)
    }
    return scoreArr
}

// Um jogador quer melhorar sua pontuação e subir para a primeira colocação de um jogo online, e ele pode acompanhar sua evolução pelo quadro de placares de líderes. O quadro de líder usa um sistema de ranqueamento denso, isto é:

// Quanto maior o seu placar, maior é sua posição no ranking. O jogador com o maior placar é o primeiro na lista de líderes, e é ranqueado na posição 1.
// Jogadores que têm o mesmo placar ocupam a mesma posição, e o(s) jogador(es) abaixo desses, que têm placar inferior recebem a próxima posição disposta pelo ranque.

// Exemplo 1:

// quadroPlacaresLideres = [100, 90, 90, 80]
// placaresJogador = [70, 80, 105]

// O ranqueamento do quadroPlacaresLideres é [1, 2, 2, 3], porque existem dois placares iguais de jogadores diferentes e por isso dois jogadores ocupam o segundo lugar. O ranqueamento relativo dos placaresJogador, ao quadroPlacaresLideres é [4, 3, 1]. Porque com seu primeiro placar ele ficaria na quarta posição, com seu segundo placar empatado com o terceiro do quadro de líderes, e com seu último placar, em primeiro do quadro de líderes.

// Descrição da Função:

// Complete a função subindoNoQuadroDeLideres, ela recebe os seguintes parâmetros:

// placarLideres: Lista de inteiros contendo os placares do quadro de líderes. Tamanho [n].
// placarJogador: Lista de inteiros contendo uma sequência de placares do jogador. Tamanho [m].

// Retorno:

// Ela deve retornar uma lista de inteiros, contendo as posições relativas de cada placar do jogador ao quadro de placares dos líderes. Essa lista deve ter tamanho [m].

// Intervalos e Observações:

// 1 ≤ n ≤ 10^6
// 1 ≤ m ≤ 10^6
// 0 ≤ placarLideres[i] ≤ 200, com 0≤i≤n
// 0 ≤ placarJogador[j] ≤ 200, com 0≤j≤m
// A lista placarLideres está em ordem decrescente.
// A lista placarJogador está em ordem crescente.

// Mais Exemplos:

// placarLideres = [100, 90, 80, 80, 65, 55], placarJogador = [30, 50, 55, 55, 80, 98, 105] ⇒ Deve retornar [6, 6, 5, 5, 3, 2, 1]
// placarLideres = [150, 120, 80, 60], placarJogador = [30, 70, 80, 100, 120, 130, 150, 160, 180] ⇒ Deve retornar [5, 4, 3, 3, 2, 2, 1, 1, 1]


