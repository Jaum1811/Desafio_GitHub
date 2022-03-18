# 									JavaScript  :computer:

> Imagina que o *HTML* é a estrutura, o *CSS* é o design, o **JavaScript** é a parte interativa do desenvolvimento.

#### Ferramentas utilizadas:

> - Visual Code
> - Live Server 



## Declaração de variáveis

> - **var** – escopo global e local, pode ter seu valor alterado, se não
>   tiver um valor inicial será tratada como null;
> - **let** – escopo local de bloco, pode ter seu valor alterado, se não
>   tiver um valor inicial será tratada como null;
> - **const**– escopo local de bloco, somente leitura, o valor inicial é
>   obrigatório e não pode ser alterado.

## Escopo

> *O escopo em JavaScript define a limitação e visibilidade de um
> bloco de código.*
>
> - **Escopo global** – quando a variável é declarada fora de qualquer
>   bloco, sua visibilidade fica disponível em todo o código.
>
> - **Escopo local** – quando a variável é declarada dentro de um bloco,
>   sua visibilidade pode ficar disponível ou não.

## Regras de Uso de Variáveis

> - Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número.
>   Ex.: var 1nome ❌
>   var nome || var _nome ✔
>
> - Não usar espaços (use o camelCase ou _);
>   Ex.: var nome completo ❌
>   var nomeCompleto || var nome_completo✔
>
> - Não usar palavras reservadas;
>   Ex.: var function ❌
>
> - Declarar variáveis no topo do bloco de código.

### Atribuição  ---->  *=*

### Comparação ----> *==*

### Comparação Idêntica ----> *===*

## Operadores aritméticos

> - adição
>
> - **+ **subtração;
> - **-** multiplicação;
> - / divisão real;
> - % divisão inteira; 
> - ** potenciação;

## Operadores relacionais

> - **>** maior que
> -  **<** menor que
> - **>=** maior ou igual a
> - **<=** menor ou igual a;

## Operadores lógicos

> - && - “e” – considera que todos os valores sejam true;
> - || - “ou” – considera que qualquer valor seja true;
> - ! - “não” – inverte o valor de true para false ou vice-versa;

## Manipulando Arrays

> - forEach() – itera um array;
> - push() – add item no final do array;
> - pop() – remove item no final do array;
> - shift() – remove item no início do array;
> - unshift() – add item no início do array;
> - indexOf() – retorna o índice de um valor;
> - splice() – remove ou substitui um item pelo índice;s
> - lice() – retorna uma parte de um array existente;

## Manipulação de objetos

> Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
> tamanhos e funções(quero cafééé). Pode ser declarada assim:
>
> var xicara = {
> cor: ‘azul’,
> tamanho: ‘p’,
> funcao: tomarCafe()
> }

> **Desestruturação**
>
> Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
>
> var cor = xicara.cor;
> var tamanho = xicara.tamanho;
> var funcao = tomarCafe();

> **Desestruturação**
>
> Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
>
> var { cor, tamanho, funcao } = xicara;

## Estruturas de decisão

> - If;
> - else;
> - else if
> - if ternário ------> *Ex.: [condição] ? [instrução1] : [instrução2];*

## Laços de repetição

> - For;
> - For/in;
> - For/of;
> - While;
> - Do/While;

## Funções 

> *Ex.: function funcao() {*
> *console.log(“mensagem”);*
> *}*
>
> *funcao();*
>
> - () – indica que é um objeto do tipo function;
> - {} – indica que é um bloco de instrução;

## Criando uma calculadora

> - Number() – para converter valores em números;
> - Prompt() – para registrar entradas de usuário;
> - Alert() – para mostrar mensagem ao usuário;
> - Template Strings – para usar strings junto com expressões;

## Atribuição

> - =     ->  x = y
> - +=   -> x = x + y
> - *=   -> x = x * y
> - /=   -> x= x / y
> - %= -> x % y

## Módulos

> - Exportar: pode várias vezes;
>
>   > *export const name = 'value'*
>   >
>   > *import {oq tu quiser, ___, _ } from './arquivo.js'*
>
> - Default exports: só uma vez por arquivo;
>
>   > *export default 'value'*
>   >
>   > *import valorDefault from './arquivo.js'*
>
> - Importar todos os dados;
>
>   > import * as INFOS from './arquivo.js'
>
>   ### Vincular ao HTML 
>
>   > <script type="module" src="./main.js"></script>

## Map 

> - Uma coleção de arrays no formato [chave, valor];
>
> - Maps pode ter chaves de qualquer tipo;
>
> - *const MyMap = new Map()*
>
>   > *MyMap.set('apple', 'fruit')*; = coloca um valor
>   >
>   > *MyMap.get(' ')* = procura valor
>   >
>   > *MyMap.delete(' ')* =deleta

## Set

> - Set são estruturas que armazenam apenas valores únicos;
>
> - Para fazer um set ser um array basta usar o argumento "...", [...mySet]
>
> - Para retornar o tamanho, se faz o uso da propriedade sizeOf
>
> - const mySet = new Set();
>
>   > mySet.add(1); = adiciona
>   >
>   > mySet.has(1); = verifica se há
>   >
>   > mySet.delete(1); = deleta

Dicas: 

> Para fazer um comentário basta usar o " ctrl + ; " 
>
> Para acessar algo como o "script.js" basta apertar ctrl e clicar no arquivo

#### Links 

- [Glossário](developer.mozilla.org/pt-BR/docs/Glossary/JavaScript) 

- [O que é o JavaScript](developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/W
  hat_is_JavaScript) 

  

- [Tipagem](https://danvitoriano.medium.com/tipagem-dinâmica-no-javascript-e3551a445b38)

- [Variáveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

- [Escopo](https://imasters.com.br/desenvolvimento/escopos-em-javascript)

- [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/)

- [Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Gloval Objects/Array)

- [Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

- [Desestruturação](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)

- [Estruturas condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Laços de repetição](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Window.prompt](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt)



