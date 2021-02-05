# COMPILADOR TYPESCRIPT

* O arquivo *tsconfig.json* serve para definirmos algumas configurações que podem nos ajudar na produtividade no nosso desenvolvimento;
* **No arquivo *tsconfig.json***:
  * *noEmmitOnError*: Não permite que o compilador crie o arquivo Javascript correspondente caso haja algum erro no código Typescript;
  * *target*: Específica a versão Javascript usada pelo compilador Typescript;
  * *sourceMap*: Com essa opção ativada, conseguimos ter acesso ao arquivo que gerou o build de produção direto no browser. Usado somente em ambiente de *dev* para não expor o código fonte no *client side*;
  * *noImplicityAny*: Quando não definimos um tipo no código Typescript, ele infere um tipo Any para aquela variável. Quando setada essa flag, quando não inferirmos um tipo, o compilador gerará um erro no código, informando que precisamos inferir um tipo para o valor;
  * *strictNullChecks*: Quando essa flag estiver ativa, o compilador irá checar o fluxo do código e gerará um erro caso tente ser usado alguma variável que necessariamente espere um valor concreto;

    **Exemplo**

    ```typescript
    // With Error -> Irá gerar um erro, pois caso a condição não seja atendida, a variável irá retornar um valor nulo.

    function greet(isMorning: boolean) {
        let greeting: string

        if( isMorning ) {
            greeting = 'Good Morning'
        }

        return greeting
    }

    // Without Error -> O compilador validará o fluxo e verá que a variável retornada não possuirá um valor nulo ou undefined durante o fluxo de execução

    function greet(isMorning: boolean) {
        let greeting: string

        if( isMorning ) {
            greeting = 'Good Morning'
        } else {
            greeting = 'Good Night'
        }

        return greeting
    }
    ```
  * *noUnusedParameters*: Valida se declaramos algum parâmetro que não foi utilizado e gera um erro de compilação;
  * *noUnusedLocals*: Valida se declaramos alguma variável local que não foi utilizada e gera um erro de compilação;
  * *outDir*: Define o diretório de saída onde os arquivos de compilação *(.js)* serão salvos;
  * *outFile*: Define um arquivo único de compilação para o equivalente em Javascript;