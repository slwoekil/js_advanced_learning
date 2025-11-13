'use-strict'

function translation (language) {

    let output;

    switch (language) {
        case 'ru': output = 'Привет'
            break
        case 'en': output = 'Hello'
            break
        case 'de': output = 'Halo'
            break
        case 'es': output = 'Hola'
            break
        case 'it': output = 'Ciao'
            break
        default: output = 'Язык не найден'
    }

    console.log(output)
}

translation('ru')