
document.getElementById("formS1").onsubmit = (e) => {
    e.preventDefault()

    let limite = document.getElementById("numeroLimiteS1").valueAsNumber

    let total = 0

    //let elementos = []

    //let decimales = []

    for(let i = 0; i < limite; i++){
        
        let actual = 4 / (1 + (2 * i))

        if (i % 2 != 0){
            actual *= -1
            //elementos.push('-')
        }
        else{
            //elementos.push('+')

            //decimales.push('+')
        }
        
        //elementos.push(`(4 / ${1 + (2 * i)})`)

        //decimales.push(actual)

        total += actual
    }
    

    //document.getElementById("resultadoS1").innerHTML = `La serie se conforma de ${elementos.join(' ')}
    //<br>Lo cual se resuelve como: ${decimales.join(' ')}<br>Y nos da como resultado: ${total}`
    
    document.getElementById("resultadoS1").innerHTML = `La serie nos da como resultado: ${total}`

}


document.getElementById("formS2").onsubmit = (e) => {
    e.preventDefault()

    let limite = document.getElementById("numeroLimiteS2").valueAsNumber

    let numero = document.getElementById("numeroValorS2").valueAsNumber

    let total = 0

    for(let i = 0; i < limite; i++){
        
        let actual = Math.pow(numero, (1 + (2 * i)))

        let factorial = 1

        for(let j = 1; j <= (1 + (2 * i)); j++){
            factorial *= j
        }
        
        actual /= factorial

        if (i % 2 != 0){
            actual *= -1
        }

        total += actual

    }

    document.getElementById("resultadoS2").innerHTML = `La serie nos da como resultado ${total}<br>
    ${Math.sin(numero)}`

}