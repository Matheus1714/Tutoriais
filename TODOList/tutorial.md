# Tutorial de TO DO List

## Apresentação

    O TODO List é uma maneira de trabalhar no FrontEnd com manipulação de Tags em JavaScript. Ela é importante para fazer tabelas dinâmicas com adição, deleção, alteração de linhas na tabela.
    Em um projeto completo, essa manupulação de conteúdos é feito por um Banco de Dados. Este é responsável por cuidar dos dados nas tabelas. A manipulação deste conteúdo é feito pelo desenvolvedor do Back-End.

## Tópicos Abordados


## Tutorial

### Configurando o Projeto

Arquitetura do projeto:

    |--TODO
    |----index.html
    |----index.css
    |----index.js
    |----img
    |------favicon.png
    |----tutorial.md
Em cada arquivo teremos inicialmente os códigos
* index.html
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <!-- Title in guide -->
        <title>TO DO List</title>
        <!-- Favicon in guide -->
        <link rel="icon" href="img/favicon.png" type="image/png">
        <!-- Link the file css in file html -->
        <link rel = "stylesheet" type = "text/css" href = "index.css" />
    </head>
    <body>
        <!-- Main project -->
        <main>
            
        </main>
        <!-- Link the file js in file html -->
        <script src="index.js"></script>
    </body>
</html>
```
* index.css
```
/* Align text with center */
body{
    text-align: center;
}
```
### Criação de Lista no HTML
A nossa lista será de uma plataforma de educação que oferece cursos básicos para vestibular de todas as matérias. Cada curso terá sua respectiva matéria.
Em termos de tabelas, teremos o seguinte:

Matéria    | Curso
---------- | ----------
Física     | Mecânica
Física     | Lei de Ohm
Matemática | Funções
Matemática | Logarítmo
Química    | Estequiometria
Português  | Morfologia
Inglês     | Verb to do

Código para a tabela:

* index.html
```
<main>
    <table>
        <tr>
            <th>Matéria</th>
            <th>Curso</th>
        </tr>
        <tr>
            <td>Física</td>
            <td>Mecânica</td>
        </tr>
        <tr>
            <td>Física</td>
            <td>Lei de Ohm</td>
        </tr>
        <tr>
            <td>Matemática</td>
            <td>Funções</td>
        </tr>
        <tr>
            <td>Matemática</td>
            <td>Logarítmo</td>
        </tr>
        <tr>
            <td>Química</td>
            <td>Estequiometria</td>
        </tr>
        <tr>
            <td>Português</td>
            <td>Morfologia</td>
        </tr>
        <tr>
            <td>Inglês</td>
            <td>Verb to do</td>
        </tr>
    </table>
</main>
```
No navegador teríamos:

![Imagem no Navegador](img/table.PNG)

A tabela criada possui 4 tipos de Tags importantes. A Tag table, que é responsável por dar o formato de tabela. A tag tr, que separa os elementos da tabela, a Tag th, que é responsável por dar o título da tabela e a Tag td, que são os elementos da tabela.

Além disso é necessário colocar botões e caixas de texto para adição de elementos na tabela.
* index.html
```
<div>
    <input type="text" placeholder="matéria">
    <input type="text" placeholder="curso">
    <button>Adicionar</button>
</div>
```
No navegador teríamos:
![input](img/input.PNG)

Para podermos desenvolver a lógica do código devemos colocar algo nas Tags para fazer marcações no intuito de não mudar Tags iguais.

* index.html

```
<main>
    <div id="addDiv">
        <input type="text" placeholder="matéria" id="matter">
        <input type="text" placeholder="curso" id="cource">
        <button onclick="newElement()" class="addBtn">Adicionar</button>
    </div>
    <table id="showTable">
        <tr>
            <th>Matéria</th>
            <th>Curso</th>
        </tr>
        <tr>
            <td>Física</td>
            <td>Mecânica</td>
        </tr>
        <tr>
            <td>Física</td>
            <td>Lei de Ohm</td>
        </tr>
        <tr>
            <td>Matemática</td>
            <td>Funções</td>
        </tr>
        <tr>
            <td>Matemática</td>
            <td>Logarítmo</td>
        </tr>
        <tr>
            <td>Química</td>
            <td>Estequiometria</td>
        </tr>
        <tr>
            <td>Português</td>
            <td>Morfologia</td>
        </tr>
        <tr>
            <td>Inglês</td>
            <td>Verb to do</td>
        </tr>
    </table>
</main>
```
Com as marcações criadas agora podemos criar as funcionalidades da lista.

### Implementando Funcionalidades Principais da Lista

## Referências

* [w3schools.com](https://www.w3schools.com/howto/howto_js_todolist.asp)