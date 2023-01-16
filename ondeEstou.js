function ondeEstou(caixas) {

    let k = 0
    let newCaixas = ""
    let slice = ""
    let lengthTry = 1

    let lengthTryObj = {}

    while (k === 0) {

        for (let i = 0; i < caixas.length; i++) {

            if (i === 0) {
                lengthTryObj[lengthTry - 1] = {
                    k: lengthTry,
                    test: []
                }
            }

            slice = caixas.slice(i, i + lengthTry)

            if (slice.length < lengthTry) {
                
                let auxCounter = 0

                lengthTryObj[lengthTry - 1].test.forEach(item => {
                    if(item === true) auxCounter++
                });

                if(auxCounter === lengthTryObj[lengthTry - 1].test.length ) {
                    k = lengthTry
                }
                
                break
            }

            console.log("slice: " + slice);

            if (i === 0) {
                newCaixas = caixas.slice(i + lengthTry)
            } else {
                newCaixas = caixas.slice(0, i) + caixas.slice(i + lengthTry)
            }

            if (newCaixas.includes(slice)) {
                lengthTryObj[lengthTry - 1].test.push(false)
                break
            } else {
                lengthTryObj[lengthTry - 1].test.push(true)
            }

            console.log("newCaixas: " + newCaixas);
        }
        lengthTry++
    }

    console.log(lengthTryObj);

    return k
}

console.log(ondeEstou('ABCDEFABCDEFG'))