# CRUD

![crud](img/rest-crud.png)

## Apresentação

Na programação de computadores, criar, ler, atualizar e excluir (CRUD) são as quatro funções básicas do armazenamento persistente. As vezes, palavras alternativas são usadas ao definir as quatro funções básicas do CRUD, como recuperar em vez de ler, modificar em vez de atualizar ou destruir em vez de excluir. Às vezes, o CRUD também é usado para descrever convenções de interface do usuário que facilitam a visualização, pesquisa e alteração de informações; frequentemente usando formulários e relatórios baseados em computador.

## Tópicos

### Métodos

1. CREATE
2. READ
3. UPDATE
4. DELETE

## Tutorial

Criaremos um projeto de listagem de torcedores cadastrados. As informações que terão nessa tabela serão:

* Nome
* Sexo
* Time

### Preparando o Ambiente

Antes de iniciar o desenvolvimento do código iremos preparar o ambiente criando a pasta do projeto e entrando nela:

```sh
mkdir torcedores
cd torcedores
```
Dentro dela criaremos um ambiente virtual. Utilizaremos o virtualenv.

```sh
python -m venv venv
```
Agora esecute o comando para ativar o ambiente:
```sh
./venv/bin/activate
```
Com o ambiente virtual, agora instalaremos o Django:
```sh
pip3 install Django
```
Criaremos um projeto Django com o comando:
```sh
django-admin startproject project
```
Você deve ter a seguinte organização de pastas:
```
torcedores/
│
├── project/
│   ├── project/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   └── manage.py
│
└── venv/
```
A maior parte do trabalho que você faz estará no primeiro diretório `torcedores`. Para evitar a necessidade de fazer o cd através de vários diretórios cada vez que você trabalha no seu projeto e fazer deploys em um host, pode ser útil reordenar isso levemente, movendo todos os arquivos para um diretório. Enquanto você estiver no diretório `torcedores`, execute os seguintes comandos:
```sh
$ mv project/manage.py ./
$ mv project/project/* project
$ rm -r project/project/
```
No final você deve ter essa estrutura:
```
torcedores/
│
├── project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── venv/
│
└── manage.py
```
Depois que sua estrutura de arquivos estiver configurada, você poderá iniciar o servidor e verificar se sua configuração foi bem-sucedida. No console, execute o seguinte comando:
```shell
$ python manage.py runserver
```
Vá ao navegador e coloque o IP: 127.0.0.1:8000

![Django](img/screen.png)
Com isso você poderá começar o projeto em Django.

## Referências

* [en.wikipedia.org](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)