// Sua mãe passou uma lista de compras para ir buscar no mercadinho do bairro, e ela foi bem clara que você deveria trazer todos os itens da lista ou o máximo possível deles seguindo a ordem de prioridade. Para te dar um incentivo, ela disse que o troco poderia ficar para você. Empolgado com a ideia de comprar tudo em balas, você aceita a missão. Chegando no mercadinho, você descobre que sua mãe havia ligado momentos antes e passado a lista de compras para o atendente, que anotou os preços de cada produto em uma lista, seguindo a ordem ditada por sua mãe.

// Nesse momento, você percebe que talvez não haverá troco e tem a brilhante ideia de criar um programa que verifica essa possibilidade para você, assim sempre que sua mãe pedir novamente para que você vá ao mercado você poderá verificar se irá sobrar um troco.

// Seu programa deve receber duas listas, a primeira de ítens de compra, a segunda com os preços seguindo a ordem dos ítens da lista de compras, e por fim o valor do dinheiro recebido. Seu programa irá mostrar a lista de ítens comprados com o valor dado. Os preços dos ítens e dinheiro total podem ser valores quebrados (ex: 3.5), mas serão positivos. A lista de compras sempre terá pelo menos 1 item. Você deve comprar os produtos na ordem em que eles aparecem na lista. Ao se deparar com um produto para o qual não há dinheiro restante suficiente, você deve pular esse produto (sem comprá-lo) e continuar a busca (procurando os próximos produtos da lista, que podem ser mais baratos e portanto ainda podem ser comprados)

// Exemplo:

// lista = ['detergente', 'sal', 'macarrao', 'pao']; precos = [3.00, 1.00, 4.0, 12.0] ;total = 9 => Deve retornar ['detergente, 'sal', 'macarrao'] porque esses três produtos somam 8 reais, logo não é possível comprar o próximo (pão)
// lista = ['detergente', 'sal', 'macarrao', 'pao']; precos = [3.00, 1.00, 4.0, 12.0] ;total = 6 => Deve retornar ['detergente, 'sal'] porque esses dois produtos somam 4 reais, logo não é possível comprar o próximo (macarrão)
// lista = ['detergente', 'sal', 'macarrao', 'pao', 'sabonete']; precos = [3.00, 1.00, 4.0, 1.0, 2.0] ;total = 2 => Deve retornar ['sal', 'pao'] porque não há dinheiro suficiente para detergente, então esse produto é pulado. Em seguida, há dinheiro suficiente para sal, então ele é comprado. Daí, não há dinheiro suficiente para macarrão, então esse produto é pulado. Há dinheiro suficiente para pão, então ele é comprado. Finalmente, não há dinheiro suficiente para sabonete, que não é comprado.

function listaCompras(lista, precos, total) {

    const listaDeProdutosEPreços = []

    const produtosComprados = []

    let valorRestante = total

    lista.forEach((_, index) => {
        listaDeProdutosEPreços.push({
            produto: lista[index],
            preco: precos[index]
        })
    })

    listaDeProdutosEPreços.forEach((item) => {
        if (item.preco < valorRestante) {
            produtosComprados.push(item.produto)
            valorRestante -= item.preco
        }
    })

    return produtosComprados
}