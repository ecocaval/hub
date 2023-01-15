function descriptografar(inicio, arr) {

    let nextPosition = inicio
    let outputPhrase = ""

    while (nextPosition !== -1) {

        const wordArr = arr[nextPosition].split("_")
        
        nextPosition = Number(wordArr[1])

        outputPhrase += (nextPosition === -1) ? wordArr[0] : (wordArr[0] + " ")

        if (nextPosition > arr.length - 1) return "erro"
    }
    return outputPhrase
}

// Você e seu crush desenvolveram um método revolucionário para conversarem via texto de modo seguro, sem que o Mark Zuckerberg saiba o conteúdo da conversa. Cada mensagem é enviada com uma lista de palavras onde cada palavra aponta para a próxima. A frase termina quando uma palavra aponta para a posição -1.

// Entrada

// A entrada é composta por um parâmetro numérico inteiro inicio e uma lista de palavras arr. O parâmetro inicio aponta a posição em arr da primeira palavra da frase (0 ≤ inicio ≤ arr.length - 1). O segundo parâmetro arr é uma lista de palavras (tamanho maior ou igual a 1) onde cada palavra é acrescida do sublinhado em seguida de um número inteiro que aponta a posição da próxima palavra.

// Se esse número estiver entre 0 e arr.length - 1, então ele aponta para a próxima palavra; se ele for -1, significa que a palavra atual é a última da frase, que está completa agora; se ele for maior ou igual ao tamanho da lista, significa que há um erro e não há mensagem para descriptografar. Não haverá ciclos (por exemplo: uma palavra aponta para a próxima, que aponta para a anterior de novo) entre os elementos da mensagem, isto é, se você seguir corretamente o encadeamento de palavras até encontrar o final da frase (ou erro), não encontrará ciclos. Porém, pode haver ciclos fora do encadeamento, ou seja, ciclos entre as palavras da lista que não fazem parte da mensagem.

// Saída
// Caso exista uma mensagem criptografada, a saída deve retornar uma string que contém em sequência todas as palavras da frase separadas entre si por um espaço em branco, caso contrário deve retornar o texto "erro".

// Ex.:
// Entrada: (3, ['sensacional_2', 'demais_-1', 'é_1', 'voce_2', 'melhor_1', 'gratidao_0'])
// Saída: "voce é demais"

// Entrada: (3, ['nao_2', 'vai_7', 'que_1 ', 'sera_2', 'melhor_1', 'gratiluz_0'])
// Saída: "erro"