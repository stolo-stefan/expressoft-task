import { useEffect, useState } from 'react'
import CategoryList from '../components/CategoryList'
import CartDrawer from '../components/CartDrawer'
import shoppingCart from '../assets/shoppingCart.svg'
import { Product } from 'data/menuData'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [menuType, setMenuType] = useState('')
  const [amount, setAmount] = useState(0)
  const [cart, setCart] = useState<
    Record<string, { product: Product; quantity: number }>
  >({})
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev[product.id]
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1
        }
      }
    })
  }

  const cartItems = Object.values(cart)
  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  useEffect(() => {
    setAmount(total)
  }, [cart])

  useEffect(() => {
    if (selectedCategory !== 'All') setMenuType(selectedCategory)
    else setMenuType('')
  }, [selectedCategory])

  return (
    <div>
      <div className="fixed top-4 right-4 z-20 flex items-center gap-3 p-2">
        <img src={shoppingCart} alt="Shopping cart icon" className="w-6 h-6" />
        <p className="font-semibold">{amount} $</p>
        <button
          onClick={() => setShowCart(true)}
          className="bg-buttonCustom hover:bg-expressoftColor text-white px-4 py-2 rounded shadow transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">{menuType} Menu</h1>

        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
        />
      </div>
      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        total={total}
      />
    </div>
  )
}

export default Menu
