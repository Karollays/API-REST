# Indice
#### - [Descrição](#restaurante-api-resilia-modulo-4)
#### - [Tecnologias](#tecnologias)
#### - [Iniciando Projeto](#iniciando-projeto)
#### - [Fluxo de Trabalho MVC](#fluxo-de-trabalho-mvc)
#### - [Services](#services)
#### - [Controller](#controller)
  - [Controller-Produtos](#produtos)
  - [Controller-Clientes](#clientes)
  - [Controller-Funcionarios](#funcionários)
  - [Controller-Fornecedores](#fornecedores)
  - [Controller-Compras](#compras)
#### - [Models](#models)
  - [Model-Produtos](#model-produtos)
  - [Model-Clientes](#model-clientes)
  - [Model-Funcionarios](#model-funcionários)
  - [Model-Fornecedores](#model-fornecedores)
  - [Model-Compras](#model-compras)
#### [Referencias]()
- [Semantic-coomit](common/semantic-commit.md)
- [Padrão de Pull Request](common/PR.md)

# Restaurante-API RESILIA MODULO 4

Está api ira gerir um sistema de restaurante onde é possível, cadastrar clientes, produtos,funcionários, fornecedores, fazer pedidos e até mesmo, fazer uma lista de compra.
# Tecnologias

Neste projeto utilizamos tudo oque aprendemos nas aulas do 4 modulo,
este modulo é voltado para desenvolvimento back-end onde montamo uma 
API-Rest utilizando javascript.

- [PostgresSQL](https://pt.wikipedia.org/wiki/PostgreSQL)
```
PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD),
desenvolvido como projeto de código aberto
```
- [NodeJs](https://pt.wikipedia.org/wiki/Node.js)
```
Node.js é um software de código aberto, multiplataforma, baseado no interpretador
V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
```
- [Sequelize](https://sequelize.org/)
```
Zequelize é um Node.js ORM baseado em promessa para Postgres,
MySQL, MariaDB, SQLite e Microsoft SQL Server. Ele oferece suporte
a transações sólidas, relações, carregamento rápido e lento,
replicação de leitura e muito mais.
```
- [Heroku](https://heroku.com/)
```
Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens
de programação. Uma das primeiras plataformas em nuvem, o Heroku está em
desenvolvimento desde junho de 2007, quando suportava apenas a linguagem de 
programação Ruby, mas agora suporta Java, Node.js, Scala, Clojure, Python, 
PHP e Go.
```
# Iniciando projeto

Neste projeto utilizamoso o docker para levantar um container do PostgreSQL para fornecer o banco de dados, e assim fazendo a conexão utilizando a api.
Dentro da pasta do projeto, abra o terminar e utilize os seguintes comandos.

Passo 1 - Instalar modulos

```bash
npm install
```

Passo 2 - Para desenvolvedor:

```bash
npm run start:dev
```
Resultado:

![api-rest](common/api-start.png)



# Fluxo de trabalho MVC
![mvc](/common/diagramaMVC.png)

## Afinal, o que é MVC
Apesar de muitas pessoas considerarem essa sigla como um padrão de design de interface, na verdade ele é um padrão de arquitetura de software responsável por contribuir na otimização da velocidade entre as requisições feitas pelo comando dos usuários. 

Com quase 50 anos de formulação, a arquitetura MVC é dividida em três componentes essenciais: Model, Controller e View. 

Um dúvida muito recorrente na programação é se no processo de desenvolvimento pode ter apenas esses 3 componentes ou se é possível acrescentar mais alguns. A resposta é sim para a possibilidade de inserir uma camada extra. Essa sequência de códigos pode ser alterada conforme a necessidade do projeto. 

Mas um código com muitas camadas se torna muito confuso e por isso, o ideal é manter o padrão original. A seguir vamos explicar os conceitos e aplicações dos componentes que acompanham essa arquitetura de software.

      OBS: Vamos falar um pouco da camda serivice dentro da arquitetura mvc, ela fica entre a camada
      do model e a camada do controller, ela fica responsavel por fazer a comunicação entre as duas
      camadas assim desagregando algumas responsabilidades extras da camada controller, 
      assim tronando o codigo ainda mais organizada.

## Services
Os Services são responsáveis pela lógica de negócio da sua aplicação, além de ser responsável por se comunicar com as camadas mais internas do Software, como por exemplo, uma camada de Dados.

 A camada de serviço seria então responsável por:
- Recuperar e criar seu 'Modelo' de várias fontes de dados (ou objetos de acesso a dados).
- Atualizar valores em vários repositórios / recursos.
- Executando manipulações e lógicas específicas do aplicativo, etc.

## Controller
A Controladora (controller), como o nome já sugere, é responsável por controlar todo o fluxo de informação que passa pelo site/sistema. É na controladora que se decide “se”, “o que”, “quando” e “onde” deve funcionar. Define quais informações devem ser geradas, quais regras devem ser acionadas e para onde as informações devem ir, é na controladora que essas operações devem ser executadas. Em resumo, é a controladora que executa uma regra de negócio (modelo) e repassa a informação para a visualização (visão). Simples não?

#### Produtos
      - Usado para gerir os produtos do restaurante.
#### Clientes
      - Usado para gerir os clientes.
#### Funcionários
      - Usado para gerir os funcionarios.
#### Pedidos
      - Usado para gerir os pedidos.
#### Fornecedores
      - Usado para gerir os fornecedores.
#### Compras
      - Usado para gerir as compras.
  
## Models
O modelo (Model) é utilizado para manipular informações de forma mais detalhada, sendo recomendado que, sempre que possível, se utilize dos modelos para realizar consultas, cálculos e todas as regras de negócio do nosso site ou sistema. É o modelo que tem acesso a toda e qualquer informação sendo essa vinda de um banco de dados, arquivo XML.

### Model-Clientes
  #### Campos
    - uuid
    - Data-nascimento
    - E-mail
    - Endereço
    - Nome
    - Telefone
  #### Métodos
    - CRUD
    - Melhores clientes
    - Listar aniversários próximos
    - Produtos-Favoritos
### Model-Produtos
   #### Campos
    - Nome
    - uuid
    - Categoria
    - Preço
    - Porcentagem de lucro
    - Quantidade-estoque
    - Quantidade-vendido
    - Descrição
    - Fornecedor:Fornecedor
   #### Métodos
    - CRUD
    - Listar Produtos em falta
    - Listar Produtos mais vendidos
    - Valor de venda
    - Valor produto
### Model-Funcionários
   #### Campos
    - uuid
    - Nome: 
    - Data-nascimento:
    - Cargo:
    - Salário:
   #### Métodos:
    - CRUD
    - get salario()

### Model-Pedidos
   #### Campos
    - uuid
    - Nome
    - Status - finished
    - Cliente: Cliente
    - Produtos: Produto[]
   #### Métodos
    - CRUD
    - Valor do pedido
    - Data do pedido
    - Alterar Status do pedido
### Model-Fornecedores
   #### Campos
    - uuid
    - Nome
    - CNPJ
    - Telefone
    - Endereço
    - Prazo de entrega
    - Faturamento
   #### Métodos
    - CRUD
    - Listar produtos
### Model-Compras
   #### Campos
    - uuid
    - Nome
    - Status
    - Data do pedido
    - Data de entrega
    - Lista de Compra:{uuid: uuid, produto: Produto, quantidade:ENUM} 
   #### Métodos
    - CRUD
    - Listar Produtos
    - Adicionar Produto
    - Remover Produto
    - Alterar Produto
    - Alterar Status da compra
    - Gerar Lista de compra por fornecedor
