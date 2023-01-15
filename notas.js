// Um professor, após terminar a correção das provas da turma, quer a sua ajuda para analisar as notas dos alunos.
// Ele quer descobrir qual é a nota mais comum entre os alunos na sua última prova. Todas as notas são inteiros entre 0 e 100 (inclusive)
// Se existir mais de uma nota mais frequente, você deve retornar a maior nota (entre as mais frequentes).

// Ex:

// lst = [20, 80, 80, 10, 20] => Deve retornar 80
// lst = [20, 25, 85, 40, 25, 90, 25, 40, 55, 40] => Deve retornar 40
// lst = [10, 10, 10, 40, 40, 5, 5, 5] => Deve retornar 10

function maisFrequente(lst) {
    const gradesAndFrequencies = []
    const nonRepeatedGrades = []
    const nonRepeatedGradesRepetitions = []

    for (let i = 0; i < lst.length; i++) {
        if (!nonRepeatedGrades.includes(lst[i])) nonRepeatedGrades.push(lst[i])
    }

    for (let i = 0; i < nonRepeatedGrades.length; i++) {

        let numberOfRepetitions = 0

        for (let j = 0; j < lst.length; j++) {
            if (lst[j] === nonRepeatedGrades[i]) {
                numberOfRepetitions++
            }
        }
        nonRepeatedGradesRepetitions.push(numberOfRepetitions)
    }

    nonRepeatedGrades.forEach((grade, index) => {
        gradesAndFrequencies.push({ grade: grade, frequency: nonRepeatedGradesRepetitions[index] })
    })

    gradesAndFrequencies.sort((a, b) => {
        if (a.frequency > b.frequency) return 1

        if (a.frequency < b.frequency) return -1

        if (a.frequency === b.frequency) {
            if (a.grade > b.grade) return 1

            else if (a.grade < b.grade) return -1

            return 0
        }
    })

    return gradesAndFrequencies[gradesAndFrequencies.length - 1].grade
}