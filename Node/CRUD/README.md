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
É uma operação executada pelos navegadores sempre que visitamos uma página web. Ao ser iniciada, os navegadores enviam uma solicitação *GET* ao servidor para executar uma operação de leitura. Isso foi realizado no arquivo server.js:
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
├── node_modules/
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

Para testarmos, coloque no `server.js`:
```js
app.post('/show',(req.res)=>{
    console.log(req.body);
});
```
Ao preencher o formulário você verá no terminal um JSON com as informações que nós precisamos.
```shell
Server running on port 3000
{ name: 'Daniel', email: 'd@gmail.com', cource: 'Mecânica' }
```

A informação do JSON será armazenada em um Banco de Dados. Para este tutorial utilizaremos o MongoDB. Instalaremos ele com o npm:
```shell
$ npm i mongodb --save
```
Uma vez instalado, podemos nos conectar ao MongoDB através do método de conexão do `Mongo.Client`:
```js
const MongoClient = require('mongodb').MongoClient;
const uri = "Caminho do DB";
MongoClient.connect(uri, (err,client)=>{
    // start server
})
```
O nosso servidor será iniciado apenas quando o banco de dados estiver conectado. Para isso, moveremos o `app.listen` para dentro do método `connect`.
```js
const MongoClient = require('mongodb').MongoClient;

const uri = "Caminho do DB";
MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err);
    db = client.db('node-rest-quiz'); /// Nome do DB
    app.listen(3000, ()=>{
        console.log('Server running on port 3000');
    });
})
```

Acabamos de configurar o MongoDB. Agora, vamos criar uma coleção, dados do input, para armazenar os dados do nosso projeto.

Iremos criar a coleção “data”, que irá armazenar nossos dados, apenas colocando-a entre aspas ao chamar o método d`b.collection()` do MongoDB. Ao criar a coleção, também podemos salvar nossa primeira entrada no MongoDB com o método save simultaneamente.

Quando terminarmos de salvar, precisamos redirecionar o usuário para algum lugar (senão o usuário ficará esperando para sempre até que nosso servidor seja alterado). Nesse caso, vamos redirecioná-los de volta para "/", o que faz com que os navegadores sejam recarregados.

```js
app.post('/show',(req,res)=>{
    db.collection('data').save(req.body, (err, result)=>{
        if(err) return console.log(err);
        console.log("Salvo no Banco de Dados");
        res.redirect('/');
    });
});
```

Podemos obter o conteúdo do nosso BD usando o método `find` disponível no método `collection`.

```js
app.get('/', (req,res)=>{
    let cursor = db.collection('data').find();
});
```
O método de localização retorna um cursor(um objeto do Mongo), este objeto contém todas as citações de nosso banco de dados. Ele também contém várias outras propriedades e métodos que nos permitem trabalhar com dados facilmente. Um desses métodos é o método `toArray`.

O método `toArray` recebe uma função callback que nos permite fazer algumas coisas com os objetos que recuperamos.

Para visualisar o histórico de usuários cadastrados vamos criar o arquivo `show.ejs`.

Criaremos uma tabela com todas as informações:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Faculdade</title>
</head>
<body>

<h2>Registros<h2>
    <table border="1">
        <thead>
            <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>Faculdade</td>
                <td>Ação</td>
            </tr>
        </thead>
        <tbody>
        <% data.forEach(function(details) { %>
            <tr>
                <td><%= details.name %></td>
                <td><%= details.email %></td>
                <td><%= details.cource %></td>
                <td><a href="/edit/<%= details._id %>">Editar</a> - <a href="/delete/<%= details._id %>">Deletar</a></td>
            </tr>
            <% }) %>
        </tbody>
        <button><a href="/">Voltar</a></button>
</body>
</html>
```
Antes de visualisar a página, vamos renderisar a página `show.ejs` no arquivo `server.js`.

```js
app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
});
```
O código do `server.js` deve estar:
```js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://matheus1714:matheus1714@node-rest-quiz-rps7a.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('node-rest-quiz') // coloque o nome do seu DB

    app.listen(3000, () => {
        console.log('Server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    var cursor = db.collection('data').find()
})

app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
    })
})
```
Volte ao navegador e preencha o formulário. Você será direcionado para a página `localhost:3000/show`, e verá a tabela com os usuários cadastrados.

![show](img/show.png)

#### UPDATE

A operação UPDATE é usada quando você quer alterar algum conteúdo no BD.
No arquivo `show.ejs` eu incluí os redirecionamentos dos botões de edição e deleção.

Para nosso projeto, irei fazer um post na rota `/edit/:id` e irei tratar essa atualização conforme abaixo. Note que fiz algumas alterações na estrutura do projeto, aproveitando um recurso de rotas que o Express() nos oferece.
Veja abaixo que, com o recurso de rotas fornecido, podemos apenas indicar qual a rota iremos observar e dentro dessa rota, teremos os métodos abaixo.
```js
const ObjectId = require('mongodb').ObjectID;

app.route('/edit/:id')
.get((req, res)=>{
    var id = req.params.id;

    db.collection('data').find(ObjectId(id)).toArray((err, result)=>{
        if(err) return res.send(err);
        res.render('edit.ejs', {data: result});
    })
})
.post((req,res)=>{
    var id = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var cource = req.body.cource;

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            email: email,
            cource: cource
        }
    }, (err, result)=>{
        if(err) return res.send(err);
        res.redirect('/show');
        console.log('Autorizado no Banco de Dados');
    })
})
```
No método `.get`, estou armazenando em `var id`, o id que iremos passar no params vindo da view (faremos primeiro nossos métodos no servidor, e depois a view), estou usando essa variável para encontrar o objeto que iremos alterar, isso está sendo feito na função .find(Object(id)) que irá percorrer o array em nosso banco, e quando encontrar o nosso objeto, irá renderizar a nossa view `edit.ejs` e também passando o resultado desse objeto para ser usado com os valores dentro do `<form> `em nossa view.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Faculdade</title>
    </head>
    <body>
        <h2>Editar Registro</h2>
        <% data.forEach(function(details) { %>
            <form action="/edit/<%= details._id %>" method="POST">
                <input type="text" value="<%= details.name %>", name="name">
                <input type="text" value="<%= details.email %>", name="email">
                <input type="text" value="<%= details.cource %>", name="cource">
                <br />
                <button><a href="/show">Todos</a></button>
                <button type="submit">Editar</button>
            </form>
        <% }) %>
    </body>
</html>
```
Na imagem ao lado, vemos o código da nossa view, criei um novo arquivo dentro da pasta views, com o nome `edit.ejs`. Nele há um formulário parecido com o que temos no `index.ejs`, porém, ao invés de incluir um novo “nome”, "email" e "curso", iremos alterar o valor já existente. Note que incluí um botão para voltar aos registros salvos, e outro que fará o post para editar nosso objeto, veja que já estou importando os dados que está sendo renderizado conforme imagem acima. Note também que estou passando o id do objeto no `params`, e já estou usando os valores da nossa base de dados dentro do input para melhor visualização do dado que estamos editando.
![edit](img/edit.png)
Voltando ao nosso código de update pouco mais acima, note que quando fazemos um .post o nosso server irá armazenar as variáveis que iremos usar para dar update em nosso objeto, updateOne() recebe o nosso objeto que estamos alterando, e $set recebe os dados do form que queremos atualizar, se tudo estiver correto, seremos redirecionado para a tela onde mostra todos nossos registros, e estamos printando em nosso console a informação de “Atualizado no banco de dados”.

#### DELETE
A operação DELETE é a última operação desse nosso projeto, após ter feito corretamente o UPDATE, e tendo adquirido esse conhecimento, você verá que o método .delete é bem simples.

No botão "deletar" de `/show` iremos apenas deletar os dados com o método `deleteOne`.

```js
app.route('/delete/:id')
.get((req,res)=>{
    var id = req.params.id;

    db.collection('data').deleteOne({_id:ObjectId(id)}, (err, result) => {
        if(err) return res.send(500, err);
        console.log('Deletando do Banco de Dados');
        res.redirect('/show');
    })
})
```
Deletando o usuário com o botão delete você terá deletedo o usuário. Isso será mostrado no terminal com a menssage "Deletado do Banco de Dados".

Note que quando clicar no botão de deletar, seremos direcionados para `/delete/:id` e então, com o método `.get`iremos pegar e armazenar o id enviado, e da mesma forma que o `updateOne`, estamos passsando o id a ser buscado em nosso BD e então deletá-lo, printamos em nosso console a informação de deletado e seremos redirecionados para a tela de registros.


## Referências

* [www.codecademy.com](https://www.codecademy.com/articles/what-is-crud)
* [medium.com](https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-2-3-220a127d586f)
* [ejs.co](https://ejs.co/)