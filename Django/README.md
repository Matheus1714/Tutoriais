# Tutorial de Django

![Django](img/django.png)

## Apresentação

O Django é uma estrutura da Web livre e de código aberto baseada em Python, que segue o padrão de arquitetura MTV (model-template-view).
O objetivo principal do Django é facilitar a criação de sites complexos e direcionados a bancos de dados. A estrutura enfatiza a reutilização e a conectividade dos componentes, menos código, baixo acoplamento, desenvolvimento rápido e o princípio de não se repetir. O Python é usado por toda parte, mesmo para arquivos de configurações e modelos de dados.

## Sites que incluem Django

![Mozilla](img/firefox.png)
![Disqus](img/disqus.png)
![instagram](img/instagram.png)
![pinterest](img/pinterest.png)

## Tópicos Abordados

    1. 

## Instâncias do Projeto

* [python3](https://www.python.org/)

* [pip](https://pypi.org/project/pip/)

* [virtualenv](https://virtualenv.pypa.io/en/latest/)

## Tutorial

### Ambiente Virtual
Projetos em python costumam ser difíceis de serem realizados sem a presença de um ambiente virtual, pois há versões do python para cada projeto realizado. Por isso, é recomendado utilizar um abiente virtual antes de realizar qualquer projeto em python. A ferramenta que utilizaremos para fazer isso será o virtualenv.

Vamos criar a pasta do nosso projeto.
```shell
$ mkdir project
$ cd project
```
Agora vamos utilizar o virtualenv para criar um ambiente dentro do nosso projeto.
Estaremos utilizando p python 3.6.0.
```shell
$ python -m venv venv
```
Este comando criará uma pasta venv no seu diretório de trabalho. Dentro deste diretório, você encontrará vários arquivos, incluindo uma cópia da biblioteca padrão do Python. Mais tarde, quando você instala novas dependências, elas também serão armazenadas neste diretório. Em seguida, você precisa ativar o ambiente virtual executando o seguinte comando:
```shell
$ venv/Scripts/activate.bat
```
### Começando com Django
Agora instalaremos o Django.
```shell
$ pip install Django
```
Criaremos o projeto Django com o comando:
```shell
$ django-admin startproject project
```
Isso criará um novo diretório project. Se você entrar nesse novo diretório, verá outro diretório chamado project e um arquivo chamado manage.py. Sua estrutura de diretórios deve se parecer com isso:
```
project/
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
A maior parte do trabalho que você faz estará no primeiro diretório project. Para evitar a necessidade de fazer o cd através de vários diretórios cada vez que você trabalha no seu projeto e fazer deploys em um host, pode ser útil reordenar isso levemente, movendo todos os arquivos para um diretório. Enquanto você estiver no diretório project, execute os seguintes comandos:
```shell
$ mv project/manage.py ./
$ mv project/project/* project
$ rm -r project/project/
```
No final você deve ter essa estrutura:
```
project/
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
![Django](img/screenDjango.PNG)
Com isso você poderá começar o projeto em Django.
### Criar uma Aplicação em Django
Para nossa primeira aplicação trabalharemos com o projeto Hello World.
No terminal vamos criar uma aplicação:
```shell
$ python manage.py startapp hello_world
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
    'hello_world', # Code changed here
]
```
Na linha do código você está dizendo ao seu projeto sobre o app criado. A próxima etapa é criar uma view para que você possa exibir algo para o usuário.

Views em Django são uma coleção de funções ou classes dentro de views.py no diretório de app. Cada função ou classe possui um processo lógico para cada URL visitada.
No arquivo views.py de hello_world:
```python
from django.shortcuts import render
def hello_world(request):
    return render(request, 'hello_world.html',{})
```
Neste pedaço de código, você definiu uma função de visualização chamada hello_world (). Quando essa função é chamada, ela renderiza um arquivo HTML chamado hello_world.html. Esse arquivo ainda não existe, mas vamos criá-lo em breve.

A função view aceita um argumento, request. Este objeto é um HttpRequestObject que é criado sempre que uma página é carregada. Ele contém informações sobre a solicitação, como o método, que pode assumir vários valores, incluindo GET e POST.

Agora que você criou a função de visualização, é necessário criar o modelo HTML a ser exibido para o usuário. render () procura modelos HTML dentro de um diretório chamado modelos dentro do diretório do aplicativo. Crie esse diretório e, posteriormente, um arquivo chamado hello_world.html dentro dele:
```shell
$ mkdir hello_world/templates/
$ touch hello_world/templates/hello_world.html
```
Adicione a linha no html:
* hello_world.html
```html
<h1>Hello World</h1>
```
Agora você criou uma função para lidar com suas visualizações e modelos para exibir ao usuário. A etapa final é conectar seus URLs para que você possa visitar a página que acabou de criar. Seu projeto possui um módulo chamado urls.py, no qual você precisa incluir uma configuração de URL para o aplicativo hello_world. Dentro de project/urls.py, adicione o seguinte:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('hello_world.urls')),
]
```
Isso procura por um módulo chamado urls.py dentro do aplicativo hello_world e registra quaisquer URLs definidos lá. Sempre que você visitar o caminho raiz do seu URL (localhost: 8000), os URLs do aplicativo hello_world serão registrados. O módulo hello_world.urls ainda não existe, então você precisará criá-lo:
```shell
$ touch hello_world/urls.py
```
Dentro deste módulo, precisamos importar o objeto de caminho, bem como o módulo de visualizações do nosso aplicativo. Em seguida, queremos criar uma lista de padrões de URL que correspondam às várias funções de exibição. No momento, criamos apenas uma função de visualização, portanto, precisamos criar apenas um URL:
```python
from django.urls import path
from hello_world import views

urlpatterns = [
    path('hello_world',views.hello_world, name='hello_world'),
]
```

Agora, quando você reiniciar o servidor e visitar localhost: 8000/hello_world, poderá ver o modelo HTML criado:
![hello](img/hello.PNG)

### Criação de um Arquivo Base para Estilos

Criaremos um modelo base que podemos importar para cada visualização subseqüente. Este modelo é o local onde adicionaremos posteriormente as importações do estilo Bootstrap.
Crie outro diretório chamado templates, desta vez em project, e um arquivo chamado base.html, dentro do novo diretório:
```shell
$ mkdir project/templates/
$ touch project/templates/base.html
```
Criamos esse diretório de modelos adicionais para armazenar modelos HTML que serão usados em todos os aplicativos Django no projeto. Como você viu anteriormente, cada projeto Django pode consistir em vários aplicativos que lidam com lógica separada, e cada aplicativo contém seu próprio diretório de modelos para armazenar modelos HTML relacionados ao aplicativo.

Essa estrutura de aplicativos funciona bem para a lógica de back-end, mas queremos que todo o site pareça consistente no front-end. Em vez de precisar importar estilos de Bootstrap para todos os aplicativos, podemos criar um modelo ou conjunto de modelos compartilhados por todos os aplicativos. Enquanto o Django souber procurar modelos nesse novo diretório compartilhado, ele poderá salvar muitos estilos repetidos.

Dentro deste novo arquivo (project/templates/base.html), adicione as seguintes linhas de código:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        {% block page_content %}{% endblock %}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>
```
Agora, em hello_world/templates/hello_world.html, podemos estender este modelo básico:
```html
{% extends "base.html" %}

{% block page_content %}
<h1>Hello, World!</h1>
{% endblock %}
```
O que acontece aqui é que qualquer HTML dentro do bloco page_content é adicionado dentro do mesmo bloco em base.html.

Antes de podermos ver nosso novo aplicativo estilizado, precisamos informar ao nosso projeto Django que existe base.html. As configurações padrão registram diretórios de modelo em cada aplicativo, mas não no próprio diretório do projeto. Em project/settings.py, atualize TEMPLATES:
```python
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": ["project/templates/"], # Code changed here
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ]
        },
    }
]
```
Agora, quando você visita localhost: 8000/hello_world, deve ver que a página foi formatada com um estilo um pouco diferente:
![hellobootstrap](img/hellobootstrap.PNG)

### Criação de Modelos

Se você deseja armazenar dados para exibição em um site, precisará de um banco de dados. Normalmente, se você deseja criar um banco de dados com tabelas e colunas nessas tabelas, precisará usar o SQL para gerenciar o banco de dados. Mas quando você usa o Django, não precisa aprender um novo idioma, pois ele possui um ORM (Object Relational Mapper) incorporado.

Um ORM é um programa que permite criar classes que correspondem às tabelas do banco de dados. Os atributos da classe correspondem às colunas e as instâncias das classes correspondem às linhas no banco de dados. Portanto, em vez de aprender uma nova linguagem para criar nosso banco de dados e suas tabelas, podemos apenas escrever algumas classes Python.

Quando você usa um ORM, as classes que você cria que representam tabelas de banco de dados são chamadas de modelos. No Django, eles vivem no módulo models.py de cada aplicativo Django.

No aplicativo de projetos, você precisará apenas de uma tabela para armazenar os diferentes projetos que serão exibidos para o usuário. Isso significa que você só precisará criar um modelo em models.py.

O modelo que você criará será chamado Hello e terá os seguintes campos:

title será um campo de sequência curta para conter o nome do seu projeto.
description será um campo de string maior para conter um pedaço maior de texto.
image será um campo de imagem que contém o caminho do arquivo em que a imagem está armazenada.
Para criar esse modelo, criaremos uma nova classe em models.py e adicionaremos o seguinte em nossos campos:
```python
from django.db import models

class Hello(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.FilePathField(path="/img")
```
Os modelos do Django vêm com muitos tipos de campos de modelo embutidos. Nós usamos apenas três neste modelo. CharField é usado para cadeias curtas e especifica um comprimento máximo.

O TextField é semelhante ao CharField, mas pode ser usado para texto mais longo, pois não possui um limite máximo de comprimento. Por fim, FilePathField também mantém uma string, mas deve apontar para um nome de caminho do arquivo.

Agora que criamos nossa classe Hello, precisamos do Django para criar o banco de dados. Por padrão, o Django ORM cria bancos de dados no SQLite, mas você pode usar outros bancos de dados que usam a linguagem SQL, como PostgreSQL ou MySQL, com o Django ORM.

Para iniciar o processo de criação de nosso banco de dados, precisamos criar uma migração. Uma migração é um arquivo que contém uma classe Migration com regras que informam ao Django que mudanças precisam ser feitas no banco de dados. Para criar a migração, digite o seguinte comando no console, verifique se você está no diretório project:
```shell
$ python manage.py makemigrations hello_world
```
Você deve ver que um arquivo projects/migrations/0001_initial.py foi criado no aplicativo de projetos. Confira esse arquivo no código-fonte para garantir que sua migração esteja correta.

Agora que você criou um arquivo de migração, aplique as migrações definidas no arquivo de migrações e crie seu banco de dados usando o comando migrate:
```shell
$ python manage.py migrate hello_world
```
Você também deve ver que um arquivo chamado db.sqlite3 foi criado na raiz do seu projeto. Agora seu banco de dados está configurado e pronto para ser usado. Agora você pode criar linhas em sua tabela que são os vários projetos que deseja mostrar no site do seu project.

Para criar instâncias da nossa classe Hello, teremos que usar o shell do Django. O shell do Django é semelhante ao shell do Python, mas permite acessar o banco de dados e criar entradas. Para acessar o shell do Django, usamos outro comando de gerenciamento do Django:
```shell
$ python manage.py shell
```
Depois de acessar o shell, você notará que o prompt de comando mudará de $ para >>>. Você pode importar seus modelos:
```shell
>>> from hello_world.models import Hello
```
Agora daremos alguns aributos:
```python
>>> p1 = Project(
...     title='My First Project',
...     description='A web development project.',
...     image='img/project1.png'
... )
>>> p1.save()
>>> p2 = Project(
...     title='My Second Project',
...     description='Another web development project.',
...     image='img/project2.png'
... )
>>> p2.save()
>>> p3 = Project(
...     title='My Third Project',
...     description='A final development project.',
...     image='img/project3.png'
... )
>>> p3.save()
```
Com isso, teremos três informações no banco de dados a respeito do nosso modelo criado.

### Trabalhando com Views e Modelos

Uma exibição de índice que mostra um trecho de informações sobre cada projeto
Uma exibição detalhada que mostra mais informações sobre um tópico específico
Vamos começar com a exibição do índice, pois a lógica é um pouco mais simples. Em views.py, você precisará importar a classe Hello de models.py e criar uma função hello_index () que renderiza um modelo chamado hello_index.html. No corpo desta função, você fará uma consulta do Django ORM para selecionar todos os objetos na tabela Projeto:
```python
from django.shortcuts import render
from hello_world.models import Hello

def project_index(request):
    hello = Hello.objects.all()
    context = {
        'hello': hello
    }
    return render(request, 'hello_index.html', context)
```
Na linha 5, você realiza uma consulta. Uma consulta é simplesmente um comando que permite criar, recuperar, atualizar ou excluir objetos (ou linhas) no seu banco de dados. Nesse caso, você está recuperando todos os objetos na tabela de projetos.

Uma consulta ao banco de dados retorna uma coleção de todos os objetos que correspondem à consulta, conhecida como Queryset. Nesse caso, você deseja todos os objetos na tabela, para que ele retorne uma coleção de todos os hello.

Na linha 6 do bloco de código acima, definimos um contexto de dicionário. O dicionário possui apenas um projeto de entrada ao qual atribuímos nosso Queryset contendo todos os hello. O dicionário de contexto é usado para enviar informações ao nosso modelo. Todas as funções de exibição que você cria precisam ter um dicionário de contexto.

Na linha 9, o contexto é adicionado como um argumento para renderizar (). Quaisquer entradas no dicionário de contexto estão disponíveis no modelo, desde que o argumento de contexto seja passado para render (). Você precisará criar um dicionário de contexto e transmiti-lo para renderizar em cada função de visualização criada.

Também processamos um modelo chamado hello_index.html, que ainda não existe. Não se preocupe com isso por enquanto. Você criará os modelos para essas visualizações na próxima seção.

Em seguida, você precisará criar a função de visualização hello_detail (). Essa função precisará de um argumento adicional: o ID do projeto que está sendo visualizado.
```python
def project_detail(request, pk):
    hello = Hello.objects.get(pk=pk)
    context = {
        'hello': hello
    }
    return render(request, 'hello_detail.html', context)
```

Na linha 14, realizamos outra consulta. Esta consulta recupera o projeto com a chave primária, pk, igual à do argumento da função. Em seguida, atribuímos esse projeto em nosso dicionário de contexto, que passamos para render (). Novamente, há um modelo hello_detail.html, que ainda precisamos criar.

Depois que suas funções de visualização são criadas, precisamos conectá-las aos URLs. Começaremos criando um arquivo hello_world/urls.py para manter a configuração do URL do aplicativo. Este arquivo deve conter o seguinte código:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('hello_world',views.hello_world, name='hello_world'),
    path("hello", views.hello_index, name="hello_index"),
    path("<int:pk>/", views.hello_detail, name="hello_detail"),
]
```
Com os configurados agora, precisamos conectar esses URLs aos URLs do projeto. Em project/urls.py, adicione a seguinte linha de código destacada:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("hello/", include("hello_world.urls")),
]
```

Essa linha de código inclui todos os URLs no aplicativo de hello, mas significa que eles são acessados quando prefixados por hello /. Agora existem dois URLs completos que podem ser acessados com o nosso projeto:

localhost: 8000 / projects: A página de índice do projeto
localhost: 8000 / projects / 3: a exibição detalhada do projeto com pk = 3

### Trabalhando com Templates


## Referências

* [realpython.com](https://realpython.com/get-started-with-django-1/)
* [docs.djangoproject.com](https://docs.djangoproject.com/en/2.2/)
* [ohmycode.com.br](https://ohmycode.com.br/2017/09/10/cadastro-e-autenticacao-de-usuarios-no-django.html)