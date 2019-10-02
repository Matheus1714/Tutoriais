# Layout de Calculadora com Grid

## Apresentação

Neste tutorial apresentarei como fazer uma calculadora utilizando a lógica de Grid, que é  importante para desenvolver layouts complexos de forma simples. 

## Tutorial

Nosso layout de calulador tem duas partes:

* Telas
* Teclas
 
A tela abrangerá toda a largura da calculadora, mas são as teclas nas quais precisamos usar a Grade CSS, pois elas estão organizadas em um formato de grade.

Utilizaremos o bootstrap para criar a parte visual.
Crie o arquivo `calculator.html`:

```sh
mkdir calculator
cd calculator
touch index.html
```

Coloque o seguinte código no HTML

```html
<!DOCTYPE html>
<html>
    <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Calculator</title>
    </head>
    <body>
        <div class="calculator">
            <input type="text" class="calculator-screen" value="0" disabled />
            
            <div class="calculator-keys">
            
                <button type="button" class="operator" value="+">+</button>
                <button type="button" class="operator" value="-">-</button>
                <button type="button" class="operator" value="*">&times;</button>
                <button type="button" class="operator" value="/">&divide;</button>
            
                <button type="button" value="7">7</button>
                <button type="button" value="8">8</button>
                <button type="button" value="9">9</button>
            
            
                <button type="button" value="4">4</button>
                <button type="button" value="5">5</button>
                <button type="button" value="6">6</button>
            
            
                <button type="button" value="1">1</button>
                <button type="button" value="2">2</button>
                <button type="button" value="3">3</button>
            
            
                <button type="button" value="0">0</button>
                <button type="button" class="decimal" value=".">.</button>
                <button type="button" class="all-clear" value="all-clear">AC</button>
            
                <button type="button" class="equal-sign" value="=">=</button>
            
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>
```

Antes de iniciar, devemos fazer uma definição básica para o html. Crie uma pasta `css` e o arquivo `reset.css`:

```sh
mkdir css
touch css/reset.css
```

No arquivo de `reset.css` coloque o código:

```css
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
```

## Referências

* [freshman.tech](https://freshman.tech/css-grid-calculator/)