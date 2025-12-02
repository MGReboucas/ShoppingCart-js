# 🛒 Carrinho de Compras

Aluno: Matheus Gabriel Reboucas - 01858232

Um projeto de carrinho de compras moderno e dinâmico, desenvolvido em JavaScript puro (Vanilla JS), seguindo o padrão de arquitetura Model-View-Controller (MVC) e a metodologia CRUD para gestão de dados. O design da interface é inspirado no layout limpo e funcional do Mercado Livre.

---

## 🚀 Funcionalidades

O projeto implementa todas as operações básicas de um carrinho de compras:

- **Visualização de Produtos:** Lista de produtos disponíveis para adição.
- **Adicionar Produto:** Adiciona um produto existente ao carrinho.
- **Criar Novo Produto (CRUD - Create):** Permite adicionar novos produtos à lista disponível, atualizando a _view_ dinamicamente.
- **Atualizar Quantidade (CRUD - Update):** Permite alterar a quantidade de um item no carrinho (via input numérico).
- **Remover Item (CRUD - Delete):** Remove completamente um item do carrinho.
- **Cálculo de Total:** Recálculo instantâneo do subtotal de cada item e do total geral do carrinho.

---

## 📐 Estrutura do Projeto

```bash
carrinho-de-compras/
├── css/
│ └── style.css
├── js/
│ ├── controllers/
│ │ └── CartController.js
│ ├── models/
│ │ ├── Cart.js
│ │ └── Product.js
│ ├── views/
│ │ └── CartView.js
│ └── app.js
├── index.html
└── README.md
```

### 🎯 Padrão MVC e Responsabilidades

- **Model (`models/`)**: Responsável pela manipulação dos **dados**.
  - **`Product.js`**: Define a estrutura (`id`, `name`, `price`).
  - **`Cart.js`**: Contém a lista de itens (`this.items`), a lógica de CRUD (`addProduct`, `removeProduct`, `updateQuantity`) e o cálculo do total (`getTotal`).
- **View (`views/`)**: Responsável por **apresentar a interface** e capturar interações do usuário.
  - **`CartView.js`**: Contém métodos para renderizar a lista de produtos (`renderProducts`), renderizar o carrinho (`renderCart`) e _bindar_ eventos de interface (`bindAddToCart`, `bindAddProduct`, etc.).
- **Controller (`controllers/`)**: Responsável por ser o **intermediário** entre Model e View.
  - **`CartController.js`**: Recebe eventos da View (e.g., `handleAddToCart`), chama a lógica de negócio do Model (e.g., `cart.addProduct`), e instrui a View a se atualizar (`view.renderCart`).

---

## 🎨 Layout e Design

O design da interface busca inspiração no _layout_ de _checkout_ do **Mercado Livre (Mercado Pago)**, priorizando a clareza e a separação de informações:

- **Estrutura em Colunas:** O _layout_ principal é dividido, com o corpo do carrinho e o gerenciamento de produtos na seção principal, e o **"Resumo da Compra"** em uma barra lateral dedicada.
- **Clareza e Espaçamento:** Uso de cartões (`card`) para agrupar as seções (Produtos Disponíveis, Adicionar Produto, Carrinho), facilitando a leitura e a interação.

---

## ⚙️ Como Executar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/MGReboucas/ShoppingCart-js
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd carrinho-de-compras
    ```
3.  **Abra o arquivo `index.html`:**
    - Simplesmente abra o arquivo `index.html` no seu navegador.
    - _Recomendação:_ Use uma extensão de _live server_ (como o **Live Server** do VS Code) para evitar problemas de CORS ao carregar os módulos JavaScript (`type="module"`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)** - Vanilla JS.

---

## 🧑‍💻 Autor

mr44dev - CSS e alguns pontos da lógica feita com ajuda do ChatGPT
