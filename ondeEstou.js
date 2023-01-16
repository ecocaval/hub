function ondeEstou(caixas) {

    let k = 0
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

            if (caixas.indexOf(slice) !== caixas.lastIndexOf(slice) ) {
                lengthTryObj[lengthTry - 1].test.push(false)
                break
            } else {
                lengthTryObj[lengthTry - 1].test.push(true)
            }

            console.log("caixas: " + caixas);
        }
        lengthTry++
    }

    console.log(lengthTryObj);

    return k
}

console.log(ondeEstou('ABCDABC'))