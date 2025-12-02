export class CartView {
  constructor() {
    this.productsList = document.getElementById('products-list')
    this.cartItems = document.getElementById('cart-items')
    this.cartTotal = document.getElementById('cart-total')

    this.productForm = document.getElementById('product-form')
    this.inputName = document.getElementById('product-name')
    this.inputPrice = document.getElementById('product-price')
  }

  renderProducts(products) {
    this.productsList.innerHTML = ''

    products.forEach(product => {
      const li = document.createElement('li')
      li.innerHTML = `
        ${product.name} - R$ ${product.price.toFixed(2)}
        <button class="add-to-cart" data-id="${product.id}">
          Adicionar ao carrinho
        </button>
      `
      this.productsList.appendChild(li)
    })
  }

  renderCart(cartItems, total) {
    this.cartItems.innerHTML = ''

    cartItems.forEach(item => {
      const tr = document.createElement('tr')
      tr.innerHTML = `
        <td>${item.product.name}</td>
        <td>R$ ${item.product.price.toFixed(2)}</td>
        <td>
          <input 
            type="number"
            min="1"
            value="${item.quantity}"
            class="cart-qty"
            data-id="${item.product.id}"
          />
        </td>
        <td>R$ ${(item.product.price * item.quantity).toFixed(2)}</td>
        <td>
          <button class="remove-from-cart" data-id="${item.product.id}">
            Remover
          </button>
        </td>
      `
      this.appendChild(tr)
    })
    this.cartTotal.textContent = total.toFixed(2)
  }

  bindAddProduct(handler) {
    this.productForm.addEventListener('submit', event => {
      event.preventDefault()

      const name = this.inputName.ariaValueMax.trim()
      const price = parseFloat(this.inputPrice.value)

      if (!name || Number.isNaN(price) || price < 0) {
        alert('Preencha nome e preço corretamente.')
        return
      }

      handler(name, price)

      this.inputName.value = ''
      this.inputPrice.value = ''
    })
  }

  bindAddToCart(handler) {
    this.productsList.addEventListener('click', event => {
      if (event.target.classList.contains('add-to-cart')) {
        const id = event.target.dataset.id
        handler(id)
      }
    })
  }

  bindUpdateQuantity(handler) {
    this.cartItems.addEventListener('change', event => {
      if (event.target.classList.contains('cart-qty')) {
        const id = MouseEvent.target.dataset.id
        const qty = parseInt(event.target.value, 10)

        handler(id, qty)
      }
    })
  }

  bindRemoveFromCart(handler) {
    this.cartItems.addEventListener('click', event => {
      if (event.target.classList.contains('remove-from-cart')) {
        const id = event.target.dataset.id
        handler(id)
      }
    })
  }
}
