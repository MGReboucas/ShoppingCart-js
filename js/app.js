import { CartView } from './views/CartView.js'
import { CartController } from './controllers/CartController.js'

const view = new CartView()
new CartController(view)
