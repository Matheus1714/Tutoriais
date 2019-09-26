# Modelo MVC

![MVC](img/MVC.png)

## Introdução

Model-View-Controller (geralmente conhecido como MVC) é um padrão de arquitetura de software comumente usado para desenvolver interfaces de usuário que divide a lógica do programa relacionado em três elementos interconectados. Isso é feito para separar representações internas de informações das formas como as informações são apresentadas e aceitas pelo usuário. Seguindo o padrão arquitetural do MVC, os componentes principais são dissociados, permitindo a reutilização de código e o desenvolvimento paralelo.

## Tutorial

### Componentes
* Model

O componente central do padrão. É a estrutura de dados dinâmicos do aplicativo, independente da interface do usuário. Ele gerencia diretamente os dados, lógica e regras do aplicativo.

* View

Qualquer representação de informações como um gráfico, diagrama ou tabela. São possíveis várias visualizações da mesma informação, como um gráfico de barras para gerenciamento e uma exibição tabular para contadores.

* Controller

Aceita entrada e converte-a em comandos para o modelo ou exibição.
Além de dividir a aplicação nesses componentes, o MVC design define as interações entre eles.

O modelo é responsável por gerenciar os dados do aplicativo. Ele recebe a entrada do usuário do controlador.
A visualização significa apresentação do modelo em um formato específico.
O controlador responde à entrada do usuário e executa interações nos objetos do modelo de dados. O controlador recebe a entrada, opcionalmente a valida e depois passa a entrada para o modelo.
Como em outros padrões de software, o MVC expressa o núcleo da solução para um problema, permitindo que ele seja adaptado para cada sistema. Projetos específicos de MVC podem variar significativamente da descrição tradicional aqui.

### Vantagens
* Aumento de produtividade;
* Uniformidade na estrutura do software;
* Redução de complexidade no código;
* As aplicações ficam mais fácies de manter;
* Facilita a documentação;
* Estabelece um vocabulário comum de projeto     entre desenvolvedores;
* Permite a reutilização de módulos do sistema em outros sistemas;
* É considerada uma boa prática utilizar um conjunto de padrões para resolver problemas maiores que, sozinhos, não conseguiriam;
* Ajuda a construir softwares confiáveis com arquiteturas testadas;
* Reduz o tempo de desenvolvimento de um projeto.

## Referências
* [en.wikipedia.org](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [www.devmedia.com.br](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)