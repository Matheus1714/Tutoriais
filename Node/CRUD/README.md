# CRUD

![CRUD](img/crud.png)

## Apresentão

Quando estamos criando APIs, queremos que nossos modelos forneçam quatro tipos básicos de funcionalidade. O modelo deve ser capaz de criar, ler, atualizar e excluir recursos. Os cientistas da computação geralmente se referem a essas funções pelo acrônimo CRUD. Um modelo deve ter a capacidade de executar no máximo essas quatro funções para ser concluído. Se uma ação não puder ser descrita por uma dessas quatro operações,ela deverá ser um modelo próprio.

O paradigma CRUD é comum na construção de aplicativos da Web, pois fornece uma estrutura memorável para lembrar os desenvolvedores de como construir modelos completos e utilizáveis.

## Tópicos Abordados

### Métodos
* GET
* POST
* PUT
* DELETE

## Tutorial
O projeto que iremos desenvolver é uma lista de usuários de uma faculdade. Essa lista terá:

* nome
* email
* curso

Nosso projeto se chamará Faculdade.

### Iniciar Projeto com NodeJS
Comece criando a a pasta:
```shell
$ mkdir Faculdade
$ cd Faculdade
```
Dentro da pasta, escreveremos o comando:
```shell
$ npm init
```
Apos o preenchimento das informações. Vamos instalar o express:
```shell
$ npm i express --save
```
Feito isso você verá que o npm salvou o Express como uma dependência no `package.json`.
```json
{
  "name": "faculdade",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
Vamos começar a criação do servidor com a criação do `server.js`:
```shell
$ touch server.js
```
No arquivo server criaremos o servidor:
```js
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000, ()=>{
    console.log(`server running on port 3000`);
});
```
Se escrevermos no terminal o comando:
```shell
$ node server.js
```
Agora acessando no navegador `localhost:3000` teremos o seguinte resultado:

![hello](img/hello.png)

Isso indica que podemos nos comunicar com o servidor Express atraves do navegador.

### Iniciando o CRUD

#### READ
É uma operação executada pelos navegadores sempre que visitamos uma página web. Ao ser iniciada, os navegadores enviam uma solicitação *GET* ao servidor para esecutar uma operação de leitura. Isso foi realizado no arquivo server.js:
```js
app.get('/',(req,res)=>{
    res.send('Hello World');
});
```
Além disso, foi incluído um diretório que corresponde ao primeiro argumento de `app.get`, que é o "/". O segundo argumento é a função callback que informa ao servidor o que fazer quando o caminho é correspondido. Esse callback tem dois argumentos, um objeto de solicitação(req) e um objeto de resposta(res).

Vamos agora iniciar a parte visual do nosso projeto, para isso irei utilizar um template engine chamado EJS (Embedded Javascript), ele é bem simples de usar principalmente para quem tem familiaridade com HTML e Javascript. Para instalar o ejs, basta digitar no seu terminal:
```shell
$ npm i ejs --save
```
Além disso, é preciso configurar nossa view engine no express incluindo no `server.js`:
```js
app.set('view engine','ejs');
```
Teremos a seguinte arquitetura;
```
Faculdade/
│
├── nodemodules/
├── views/
│   ├── index.ejs
├── server.js
├── package.json
├── package-lock.json
|
```
Inclua o código no `index.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Faculdade</title>
</head>
<body>

    <h2>Registrar<h2>
    <form action="/show" method="POST">
        <input type="text" placeholder="Nome" name="name">
        <input type="text" placeholder="Email" name="email">
        <input type="text" placeholder="Curso" name="cource">
        <button type="submit">Submit</button>
    </form> 
</body>
</html>
```
Agora precisamos setar nosso arquivo para que ele seja enviado para o servidor e ser renderizado no navegador. Para isso precisamos fazer uma alteração no trecho de código de `server.js`:
```js
app.get('/',(req,res)=>{
    res.render('index.ejs');
});
```
Agora atualizando a página no seu navegador você terá esse resultado:
![index](img/index.png)

Para facilitar a reiniciação do servidor utilizaremos o *nodemon*.
O Nodemon reinicia o servidor automaticamente sempre que você salva um arquivo que o servidor usa. Podemos instalar o Nodemon usando o seguinte comando:
```shell
$ npm i nodemon --save-dev
```
Note que estamos usando uma sinalização --save-dev aqui porque estamos usando apenas o Nodemon quando estamos desenvolvendo. Esse sinalizador salva o Nodemon como uma devDependency no nosso arquivo package.json. O Nodemon se comporta exatamente como o Node, o que significa que podemos executar nosso servidor chamando nodemon server.js. No entanto, não podemos fazer isso na linha de comando agora porque o Nodemon não está instalado com um sinalizador -g. Há outra maneira simples de executar o Nodemon, podemos criar um script dentro do package.json.
```json
{
  "name": "faculdade",
  "version": "1.0.0",
  "description": "",
  "main": "serverjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^2.7.1",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^1.19.2"
  }
}
```
O nodemon será acionado quando executarmos o comando:
```shell
$ npm run dev
```
#### CREATE
A operação CREATE é executada apenas pelo navegador se uma solicitação POST for enviada ao servidor. Essa solicitação POST pode ser acionada com JavaScript ou por meio de um elemento `<form>`.
O elemento formulário possui três atributos importantes:
* `action`
* `method`
* `name`, `email` e `cource` para elementos `<input>` do formulário

O atributo `action` informa ao navegador para onde redirecionar nosso appExpress. Nesse caso estamos sendo direcionados para /show . O atributo `method` informa ao navegador qual solicitação enviar, nesse caso é uma solicitação do tipo POST.
Em nosso servidor, podemos processar essa solicitação POST com um método post fornecido pelo Express que leva os mesmos argumentos do método GET:
```js
app.post('/show',(req.res)=>{
    console.log("Hello Again");
});
```
Se olhar o terminal, você notará que terá uma menssagem "Hello Again". Isso indica que o express está conseguindo se comunicar com o formulário.

Contudo, precisamos de algo para fazer a leitura de dados. Algo que não é proporcionado pelo express. Teremos que adicionar outro pacote chamado *body-parser* para conseguir essa funcionalidade.

Em outra tela do terminal, dentro do arquivo do projeto, insira o comando:

```shell
$ npm i body-parser --save
```

O Express nos permite adicionar middleware como body-parser ao nosso aplicativo com o método use. Você ouvirá muito o termo middleware ao lidar com o Express, eles são basicamente plugins que alteram o objeto request ou response antes de serem manipulados pelo nosso aplicativo.

```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
```
O método `urlencoded` dentro de body-parser diz ao body-parser para extrair dados do elemento `<form>` e adicioná-los à propriedade body no objeto request.

Para testarmos, coloque o `server.js`:
```js
app.post('/show',(req.res)=>{
    console.log(req.body);
});
```
Ao preencher o formulário você verá no terminal um JSON com as informações que nós precisamos.
## Referências

* [www.codecademy.com](https://www.codecademy.com/articles/what-is-crud)
* [medium.com](https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-2-3-220a127d586f)
* [ejs.co](https://ejs.co/)