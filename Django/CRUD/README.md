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
mv project/manage.py ./
mv project/project/* project
rm -r project/project/
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
python manage.py runserver
```
Vá ao navegador e coloque o IP: 127.0.0.1:8000

![Django](img/screen.png)
Com isso você poderá começar o projeto em Django.

### Iniciando o CRUD

Criaremos uma aplicação em Django chamada CRUD. Nela desenvolveremos nossos métodos.

```sh
python3 manage.py startapp CRUD
```
No app que você criou você precisa instalar no seu projeto. Vá no arquivo project/settings.py e adicione o seguinte código em INSTALLED_APPS:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'CRUD', # Code changed here
]
```

Agora, criaremos uma modelo em Django para podermos construir a lista de torcedores.

No arquivo models.py coloque o código:

```python
from django.db import models

class Fan(models.Model):
    name = models.CharField(max_length=100)
    sex = models.CharField(max_length=100)
    team = models.CharField(max_length=100)

    def __str__(self):
        return self.name
```

Veja que criamos uma classe chamada `Fan` que possui o nome do torcedor, o sexo do torcedor e o time do torcedor.

Além disso, criamos a função construtora `__str__` que retorna o nome do usuário cadastrado.

Também construíremos outro modelo para cadastrar o usuário utilizando um formuário.

Na pasta CRUD crie o arquivo forms.py:

```sh
touch CRUD/forms.py
```

Dentro dessa pasta coloque o código:

```python
from django import forms
from .models import Fan

class FanForm(forms.ModelForm):
    class Meta:
        model = Fan
        fields = ['name','sex','team']
```

O que acabamos de criar foi uma classe `FanForm` que terá todas as informações da classe `Fan` por meio da classe `Meta`. Ou seja, meta dados criados que possuem nome, sexo e time do torcedor.

Para as classes serem usadas no projeto em Django como um modelo SQL, devemos fazer uma migração das informaçẽos com os comandos:

```sh
python manage.py makemigrations CRUD
ython manage.py migrate
```

Com isso você terá tabelas criadas e migradas para o seu banco de dados, que no caso o padrão usado no Django é o `db.sqlite3`.

Para criar instâncias da nossa classe Fan, teremos que usar o shell do Django. O shell do Django é semelhante ao shell do Python, mas permite acessar o banco de dados e criar entradas. Para acessar o shell do Django, usamos outro comando de gerenciamento do Django:

No terminal, digite o comando:

```sh
python manage.py shell
```

Depois de acessar o shell, você notará que o prompt de comando mudará de $ para >>>. Você pode importar seus modelos:

```sh
from CRUD.models import Fan
```

Criaremos usuários com os seguintes atributos:

name | sex | team
---- | --- | ----
Lucas | M | Vasco
Matheus | M | Flamengo
Milena | F | Coríntias
Eduarda | F | Fortaleza

```sh
>>> p1 = Fan(
...     name='Lucas',
...     sex='M',
...     team='Vasco'
... )
>>> p1.save()
>>> p2 = Fan(
...     name='Matheus',
...     sex='M',
...     team='Flamengo'
... )
>>> p2.save()
>>> p3 = Fan(
...     name='Milena',
...     sex='F',
...     team='Coríntias'
... )
>>> p3.save()
>>> p4 = Fan(
...     name='Eduarda',
...     sex='F',
...     team='Fortaleza'
... )
>>> p4.save()
```

Agora que possuímos um modelo de dados e dados de pessoas nele será criado os métodos do CRUD.


## Referências

* [en.wikipedia.org](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)