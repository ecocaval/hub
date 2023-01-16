function ondeEstou(caixas) {

    let k = 0
    let slice = ""
    let lengthTry = 1
    let lengthTryObj = {}
    let letters = []
    const caixasArr = caixas.split("")

    caixasArr.forEach(letter => {
        if(!letters.includes(letter)) {
            letters.push(letter)
        }
    })

    if(letters.length === caixasArr.length) return 1

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
                
                let trueCounter = 0

                lengthTryObj[lengthTry - 1].test.forEach(item => {
                    if(item === true) trueCounter++
                });

                if(trueCounter === lengthTryObj[lengthTry - 1].test.length ) {
                    k = lengthTry
                }                
                break
            }

            if (caixas.indexOf(slice) !== caixas.lastIndexOf(slice) ) {
                lengthTryObj[lengthTry - 1].test.push(false)
                break
            } else {
                lengthTryObj[lengthTry - 1].test.push(true)
            }
        }
        lengthTry++
    }
    return k
}