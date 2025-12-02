export class Cart {
  constructor() {
    this.items = []
  }

  addProduct(product) {
    const existingItem = this.items.find(item => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      this.items.push({ product, quantity: 1 })
    }
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.product.id === productId)

    if (!item) return

    if (quantity <= 0 || Number.isNaN(quantity)) {
      this.removeProduct(productId)
    } else {
      item.quantity = quantity
    }
  }

  removeProduct(productId) {
    this.items = this.items.filter(item => item.product.id !== productId)
  }

  getItems() {
    return this.items
  }

  getTotal() {
    return this.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity
    }, 0)
  }
}
