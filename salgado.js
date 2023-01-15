// Kleberson e Marta estão enfrentando um grande dilema, os dois são sócios numa maravilhosa lanchonete e não conseguem chegar à conclusão de qual é o melhor salgados de todos os tempos, no turno da manhã. Após dias de discussão e várias enquetes entre seus clientes, Marta pediu sua ajuda para resolver essa história de uma vez por todas.

// Marta irá fornecer as notinhas da máquina do caixa de um dia, essa nota agrupa a quantidade de cada salgado vendido no espaço de uma hora em cada turno.

// Entrada
// A entrada será uma lista de textos onde o início de cada turno é representado pelas letras M (manhã), T (tarde), N (noite) que virão sempre nessa ordem. Após a letra do turno existem X valores inteiros (X maior ou igual a zero), o primeiro valor é o total de salgados vendidos naquele turno, depois textos que representam a quantidade de cada salgado vendido por hora. O texto da quantidade total de salgados é representado por um valor numérico, seguido por um espaço, da letra de cada salgado, sendo elas: C (coxinha), R (risolis) e P (pastel).

// Saída
// A saída deve ser uma lista com a quantidade total de cada salgado, vendido no turno da manhã, na ordem: Coxinha, Risolis e Pastel. Pode ser que algum/alguns salgados não tenham sido vendidos de manhã.

// Ex 1:

// Entrada: arr = ['M', '50', '10 C', '6 R', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']

function contaSalgado(arr) {

    let counter = -1

    let salgados = ["C", "R", "P"]

    let salgadosQuantity = []

    salgados.forEach(item => {
        salgadosQuantity.push(0)
    });

    while (arr[counter] !== "T") {

        counter++

        if (arr[counter] === "M" ||
            (!arr[counter].includes("C") &&
                !arr[counter].includes("R") &&
                !arr[counter].includes("P"))) continue

        if (arr[counter].includes("C")) {

            let aux = arr[counter].split(" ")

            salgadosQuantity[0] += Number(aux[0])
        }

        if (arr[counter].includes("R")) {

            let aux = arr[counter].split(" ")

            salgadosQuantity[1] += Number(aux[0])
        }

        if (arr[counter].includes("P")) {

            let aux = arr[counter].split(" ")

            salgadosQuantity[2] += Number(aux[0])
        }
    }
    return salgadosQuantity
}
