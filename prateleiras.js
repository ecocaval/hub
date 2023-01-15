// Martha é proprietária de um e-commerce de produtos importados e quer melhorar o site da sua loja, pensando nisso ela elaborou uma forma de instigar os clientes a gastarem mais. A solução é uma prateleira virtual onde ela irá exibir produtos mais baratos acompanhados por um produto mais caro. Desta forma ela sempre irá mostrar um produto mais caro enquanto mantém a percepção dos seus clientes que a loja vende muitos produtos baratos, já que ela também estará exibindo esses produtos.

// Martha então definiu que a melhor organização é um grupo de três produtos, onde dois são baratos e um é caro. Ela definiu também que os produtos devem ser organizados por preço, ou seja, a primeira prateleira deve mostrar os dois produtos mais baratos com o produto mais caro da loja, a segunda prateleira deve mostrar os terceiro e quarto produtos mais baratos acompanhados do segundo produto mais caro, e assim por diante.

// Entrada: Uma lista (tamanho T) de produtos com valores numéricos N que representam o preço, tal que, 1 <= N <= 20. T não necessariamente é múltiplo de 3, e caso não seja, a última prateleira vai ficar com os ítens que sobrarem (se sobrar um item só, a última prateleira terá só ele; se sobrarem 2 ítens, a última prateleira terá o de menor preço primeiro).

// Saída: Uma lista de listas, onde cada lista interna possui tamanho 3 (exceto a úlltima em alguns casos), sendo os dois primeiros itens com menores valores e o terceiro com o maior valor. As próximas listas internas devem obedecer a mesma regra, porém considerando os menores e maior valor excluindo os itens inseridos na lista anterior.

// Ex:

// [20] => Deve retornar [[20]]
// [20, 10] => Deve retornar [[10, 20]]
// [20, 10, 15] => Deve retornar [[10, 15, 20]]
// [10, 1, 2, 1] => Deve retornar [[1, 1, 10], [2]]
// [4, 10, 1, 2, 1] => Deve retornar [[1, 1, 10], [2, 4]]
// [4, 20, 10, 1, 2, 1] => Deve retornar [[1, 1, 20], [2, 4, 10]]
// [4, 20, 10, 1, 1, 1, 20] => Deve retornar [[1, 1, 20], [1, 4, 20], [10]]

function organizar(items) {

    const orderedPrices = items.sort((a, b) => a - b)

    const listOfLists = []

    let beginCounter = 0
    let endCounter = items.length - 1
    let listCounter = 0

    for (let i = 0; i < Math.ceil(items.length / 3); i++) {
        listOfLists[i] = []
    }

    while (beginCounter <= endCounter) {
        if (listOfLists[listCounter].length < 2) {

            listOfLists[listCounter].push(orderedPrices[beginCounter])
            beginCounter++

        } else if (listOfLists[listCounter].length === 2) {

            listOfLists[listCounter].push(orderedPrices[endCounter])
            endCounter--

        } else {

            listCounter++
            continue
        }
    }
    return listOfLists
}