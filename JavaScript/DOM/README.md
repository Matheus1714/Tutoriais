# Elementos com JavaScript

## Apresentação

Toda página da web reside dentro de uma janela do navegador que pode ser considerada como um objeto.

Um objeto Document representa o documento HTML que é exibido nessa janela. O objeto Documento possui várias propriedades que se referem a outros objetos que permitem acesso e modificação do conteúdo do documento.

A maneira como um conteúdo do documento é acessado e modificado é chamado de Document Object Model, ou DOM. Os objetos são organizados em uma hierarquia. Essa estrutura hierárquica se aplica à organização de objetos em um documento da Web.

Objeto      | Explicação
----------- | --------------
jabela      | Topo da hierarquia. É o elemento mais externo da hierarquia de objetos.
documento   | Cada documento HTML carregado em uma janela se torna um objeto de documento. O documento contém o conteúdo da página.
formulário  | Tudo incluído nas tags `<form>` ... `</form>` define o objeto de formulário.
controle de formulário | O objeto de formulário contém todos os elementos definidos para esse objeto, como campos de texto, botões, botões de opção e caixas de seleção.

Aqui está uma hierarquia simples de alguns objetos importantes: 

![dom](img/dom.jpg)

## Tutorial

Faremos um projeto de criação de elementos do DOM com JavaScript para treino de algumas funções importantes do JavaScript.

Comece criando uma pasta e entrado nela:

```sh
mkdir proj
cd proj
```

Agora criaremos as pastas `index.js` e `index.html`:

```sh
touch index.js
touch index.html
```

Coloque no `index.html` o seguinte código:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>DOM</title>
    </head>
    <body>
        <script src="index.js"></script>
    </body>
</html>
```



## Referências

* [www.tutorialspoint.com](https://www.tutorialspoint.com/javascript/javascript_html_dom.htm)