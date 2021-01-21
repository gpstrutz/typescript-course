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

