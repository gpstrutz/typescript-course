# Types

* O Typescript possui os tipos de dados:
    1. String;
    2. Number;
    3. Boolean;
    4. Array;
    5. Tuple;
    6. Enum;
    7. Any;
    8. Void

* O Typescript possui inferência dinâmica de tipos. Isso significa que o compilador infere o tipo da váriavel a partir do dado armazenado nela;
* Por esse motivo, não podemos criar uma váriavel de um tipo e depois tentar sobrescrever com outro tipo;
* O Typescript não diferencia numeros reais e inteiros, todos são do tipo Numbers;
* Podemos inferir tipos de retornos de um array informando explicitamente qual o tipo de dado conterá no array;
* Arrays contém somente um tipo de dado;

```typescript
// String

let nome = "Giovanni"
nome = 28 // Não permitido
```

* **Explicited Types**: Podemos inferir tipos explicítos de dados;
* *Syntax*: myVar: dataType

**Exemplo**
```typescript
myName: string
```

```typescript
// Inplicited Way
let myHobbies = ["Cook", "Play", "Read"]

// Explicited Way -> We are infering that our array will be a string array
let myHobbies: string[] = ["Cook", "Play", "Read"]
```

# Tuples

* Tuplas são arrays que podem conter diferentes tipos de dados pré-determinados;
**Exemplo**

```typescript
let address: [string, number, string]
```

# Enums

* É uma estrutura de dado onde se pode criar uma lista pré definida de chave/valor;
* Para instanciarmos, precisamos criar uma variável explicíta que recebe o tipo do Enum;
* O retorno do 

**Exemplo**

```typescript
enum Color {
    Purple,
    Red,
    Black
}

let color: Color = Color.Black // OUT => 2

enum weekDays {
    "sun" = "sunday",
    "mon" = "monday",
    "tue" = "tuesday",
    "wed" = "wednesday",
    "thu" = "thursday",
    "fri" = "friday",
    "sat" = "saturday",
}

let day: weekDays
day = weekDays["monday"]
```

**Observação**
    * Se buscarmos usando ["chave"] => Retorna o valor;


# Any

* Esse tipo permite que a variável possa receber qualquer tipo de dado;
* Muito usado quando queremos armazenar o retorno de uma API de terceiros ou quando recebemos a resposta de uma biblioteca que não sabemos o tipo de dado de retorno;


# USANDO TIPOS EM FUNÇÕES (PARÂMETROS E RETORNOS)

* A premissa de funções é a mesma do Javascript;
* Podemos inferir explicitamente o retornos de nossas funções;
* Para funções que não retornam nada, podemos inferir o tipo *void*;
* Para funções que possuem parâmetros, podemos inferir os tipos dos parâmetros;

**Exemplo**

```typescript
function myName (): string {
    return "My name is Giovanni"
}

// Void Function
function greeting(): void {
    console.log("Hello")
}
```

# FUNÇÕES COMO TIPOS

* Podemos atribuir á uma variável o tipo *função*. Ou seja, podemos inferir o tipo dos parâmetros e do retornos e também podemos inferir que a variável que irá armazenar a função será do tipo *function*;
    1. Criar uma variável que tenha o tipo dos parâmetros e tipo de retorno (*vide sintaxe*);
    2. Atribuir a essa variável a função que obedeça a mesma ordem e tipos definida no passo anterior;
    3. Executar a variável como uma função passando os parâmetros necessários;

**Exemplo**

```typescript
let calculo: (params) => tipoRetorno // Sintaxe

function square(x: number, y: number): number {
    return x ** y
}

let squareNumber: (numA: number, numB: number): number // Passo 1
squareNumber = square // Passo 2

console.log(squareNumber(2, 3)) // Passo 3 -> OUT: 8
```

# OBJETOS

* Para definirmos objetos, inferimos os tipos da mesma forma que para outros casos;

**Exemplo**

```typescript
let usuario: { nome: string, sobrenome: string, idade: number } = {
    nome:"Giovanni",
    sobrenome: "Strutz",
    idade: 23
}
```


# TIPOS PERSONALIZADOS (ALIAS)

* As vezes nós vamos precisar criar tipos de acordo com a necessidade do nosso código e para isso vamos precisar de tipos diferentes dos quais a linguagem nos proporciona;
* Para resolver esse problema, podemos criar tipos personalizados;
* Os tipos personalizados evita a escrita de códigos redundantes;

**Exemplo**

```typescript
type Employee = { supervisors: string[], hourRegister: (hours: number) => string }

let employee: Employee = {
    // CODE
}
```


# MULTIPLOS TIPOS COM *UNION TYPES*

* Union Types permite que possamos definir mais de um tipo permitido para a nossa variável;
* *Caso de Uso*: Vamos receber um numero em nossa variável mas podemos receber o mesmo número mas em formato de string;

**Exemplo**

```typescript
let nota: number | string
```


# TIPO NEVER

* O tipo *never* indica que a função nunca retorna algo;
* Usando para funções que geram um loop infinito ou que gream erro possuem o seu retorno definido como never;

---------------------------------------------------------------------------------------
# DESAFIOS - OBSERVAÇÕES

* *Bank Account*: Para passarmos um tipo definido como propriedade de outro tipo, precisamos instaciar o primeiro tipo para depois passa-lo como propriedade para o novo objeto