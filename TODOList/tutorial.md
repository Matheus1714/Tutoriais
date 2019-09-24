# Tutorial de TO DO List

## Apresentação

    O TODO List é uma maneira de trabalhar no FrontEnd com manipulação de Tags em JavaScript. Ela é importante para fazer tabelas dinâmicas com adição, deleção, alteração de linhas na tabela.
    Em um projeto completo, essa manupulação de conteúdos é feito por um Banco de Dados. Este é responsável por cuidar dos dados nas tabelas. A manipulação deste conteúdo é feito pelo desenvolvedor do Back-End.

## Tópicos Abordados


## Início

### Configurando o Projeto

Arquitetura do projeto será:

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

## Referências

* [w3schools.com](https://www.w3schools.com/howto/howto_js_todolist.asp)