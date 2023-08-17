let dia = Number(prompt("Informe o dia:"))
let mes = Number(prompt("Infoirme o mes:"))

if (mes == 1 || mes == 2 || mes == 3) {
    if (mes == 3 && dia >= 21) {
        document.write("A estaçao do ano é Outono");
    } else {
        document.write("A estaçao do ano é Verão");
    }
} else {
    if (mes == 4 || mes == 5 || mes == 6) {
        if (mes == 6 && dia >= 21) {
            document.write("A estaçao do ano é Inverno");
        } else {
            document.write("A estaçao do ano é Outono");
        }
    } else {
        if (mes == 7 || mes == 8 || mes == 9) {
            if (mes == 9 && dia >= 21) {
                document.write("A estaçao do ano é Primavera");
            } else {
                document.write("A estaçao do ano é Inverno");
            }
        } else {
            if (mes == 10 || mes == 11 || mes == 12) {
                if (mes == 12 && dia >= 21) {
                    document.write("A estaçao do ano é Verão");
                } else {
                    document.write("A estaçao do ano é Primavera");
                }
            }
        }
    }
}
