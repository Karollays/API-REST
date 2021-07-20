# Restaurante---CRUD---API

Está api ira gerir um sistema de restaurante onde é possível, cadastrar clientes, produtos,funcionários, fornecedores, fazer pedidos e até mesmo, fazer uma lista de compra.

# Fluxo de trabalho

## Services
Os Services são responsáveis pela lógica de negócio da sua aplicação, além de ser responsável por se comunicar com as camadas mais internas do Software, como por exemplo, uma camada de Dados.


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
