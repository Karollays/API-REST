# Restaurante---CRUD---API

Está api ira gerir um sistema de restaurante onde é possível, cadastrar clientes, produtos,funcionários, fornecedores, fazer pedidos e até mesmo, fazer uma lista de compra.

## Fluxo de trabalho


  
## Entidades

Clientes
  - Campos
  - uuid
  - Data-nascimento
  - E-mail
  - Endereço
  - Nome
  - Telefone
  - Métodos
  - CRUD
  - Melhores clientes
  - Listar aniversários próximos
  - Produtos-Favoritos
Produtos
  - Campos
  - Nome
  - uuid
  - Categoria
  - Preço
  - Porcentagem de lucro
  - Quantidade-estoque
  - Quantidade-vendido
  - Descrição
  - Fornecedor:Fornecedor
  - Métodos
  - CRUD
  - Listar Produtos em falta
  - Listar Produtos mais vendidos
  - Valor de venda
  - Valor produto
Funcionários
  - Campos
  - uuid
  - Nome: 
  - Data-nascimento:
  - Cargo:
  - Salário:
  - Métodos:
  - CRUD
  - get salario()

Pedidos
  - Campos
  - uuid
  - Nome
  - Status - finished
  - Cliente: Cliente
  - Produtos: Produto[]
  - Métodos
  - CRUD
  - Valor do pedido
  - Data do pedido
  - Alterar Status do pedido
Fornecedores
  - Campos
  - uuid
  - Nome
  - CNPJ
  - Telefone
  - Endereço
  - Prazo de entrega
  - Faturamento
  - Métodos
  - CRUD
  - Listar produtos
Compras
  - Campos
  - uuid
  - Nome
  - Status
  - Data do pedido
  - Data de entrega
  - Lista de Compra:{uuid: uuid, produto: Produto, quantidade:ENUM} 
  - Métodos
  - CRUD
  - Listar Produtos
  - Adicionar Produto
  - Remover Produto
  - Alterar Produto
  - Alterar Status da compra
  - Gerar Lista de compra por fornecedor