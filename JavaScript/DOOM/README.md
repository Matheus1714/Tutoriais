# DOOM
![doom](img/doom.gif)
## Apresentação

## Tutorial

A organização do projeto será feita dando ao código 3 grandes responsabilidades:

* A estruura de dados
* Algoritmo
* Renderização

A estrutura de dados e o algoritmo que serão criados são partes abstratas do código.
Já a renderização é a parte visual.
Serão criadas várias renderizações diferentes para as chamas.

### Preparando o ambiente
Criaremos o um arquivo `index.html`, que existirá apenas para fazer a chamada do arquivo javascript, e um arquivo `index.js`, que será responsável pelo código. No index.html coloque:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>DOOM</title>
        <link rel="icon" href="img/flame.png" type="image/x-icon"/>
    </head>
    <body>
        <script src="index.js"></script>
    </body>
</html>
```
Agora trabalharemos no arquivo javascript.

### Desenvolvendo a Estrutura de Dados
Tudo começa com uma função de inicialização que chamaremos de `start`:
```js
function start(){

}
start()
```
Agora vamos dividir as três responsabilidades em três funções diferentes.
```js
function createFireStructure(){

}
function calculateFirePropagation(){

}
function renderFire(){

}
```
A estrutura de dados usadas será um Array linear
```js
const firePixelArray = []
```
Para definir o tamanho do fogo será dadas por duas variáveis. Uma definirá a largura e a outra definirá a altura.
Para fácil compreenção, utilizaremos valores pequenos para essas variáveis.
```js
const fireWidth = 2
const fireHeight = 3
```
Montaremos o Array utilizando essas variáveis por meio de um ciclo for.

O Array será montado na estrutura de dados:
```js
function createFireStructure(){
    const numberOfPixels = fireWidth * fireHeight
    for( let i = 0; i < numberOfPixels; i++){
        firePixelArray[i] = 0
    }
}
```
Chamando a função `createFireStructure` na função `start` e colocando para visualização, teremos:
```js
function start(){
    createFireStructure()
    console.log(firePixelArray)
}
```
Agora temos um Array setados com 0. Isso significa 0 de intensidade do fogo.
## Referências

* [Filipe Deschamps](https://www.youtube.com/watch?v=fxm8cadCqbs&t=945s)