import { Product } from '../models/Product.js'
import { Cart } from '../models/Cart.js'

export class CartController {
  constructor(view) {
    this.view = view
    this.cart = new Cart()
    this.products = []

    this.inicializeProducts()
    this.view.renderProducts(this.products)
    this.updateCartView()

    this.view.bindAddProduct(this.handleCreateProduct)
    this.view.bindAddToCart(this.handleAddToCart)
    this.view.bindUpdateQuantity(this.handleUpdateQuantity)
    this.view.bindRemoveFromCart(this.handleRemoveFromCart)
  }

  inicializeProducts() {
    this.products = [
      new Product('1', 'Mouse', 49.9),
      new Product('2', 'Teclado', 129.9),
      new Product('3', 'Monitor', 899.9),
    ]
  }

  updateCartView() {
    const items = this.cart.getItems()
    const total = this.cart.getTotal()
    this.view.renderCart(items, total)
  }

  handleCreateProduct = (name, price) => {
    const id = Date.now().toString()
    const product = new Product(id, name, price)
    this.products.push(product)
    this.view.renderProducts(this.products)
  }

  handleAddToCart = productId => {
    const product = this.products.find(p => p.id === productId)
    if (!product) return

    this.cart.addProduct(product)
    this.updateCartView()
  }

  handleUpdateQuantity = (productId, quantity) => {
    this.cart.updateQuantity(productId, quantity)
    this.updateCartView()
  }

  handleRemoveFromCart = productId => {
    this.cart.removeProduct(productId)
    this.updateCartView()
  }
}
