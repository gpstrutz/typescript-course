// Challange - Employee

/*
    Criar um objeto funcionario com:
        - Array de strings com nome dos supervisores;
        - Função de bater ponto que recebe a hora (numero)
        e retorna uma string
            -> Ponto Normal ( <= 8 )
            -> Fora do Horário ( > 8 )
*/

// My Answer

let employee: { supervisors: string[], hourRegister: (hour: number) => string } = {
    
    supervisors: ["Giovanni", "Beatriz", "Rafaela"],
    
    hourRegister: function (hour) {
        if (hour <= 8) {
            return "Ponto Normal"
        } else {
            return "Fora do Horário"
        }
    }
}

console.log(employee.supervisors)
console.log(employee.hourRegister(8))
console.log(employee.hourRegister(10))


// Teacher's Answer

/* 

let employee: { supervisors: string[], hourRegister: (hour: number) => string } = {
    
    supervisors: ["Giovanni", "Beatriz", "Ana"],

    hourRegister(hour: number): string {
        if (hour <= 8 ) {
            return "Ponto Normal"
        } else {
            return "Fora Horário"
        }
    }
}

*/
