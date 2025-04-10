import { Product } from 'data/menuData'
import React from 'react'

interface CartDrawerProps {
  showCart: boolean
  setShowCart: (showCart: boolean) => void
  cartItems: Array<{ product: Product; quantity: number }>
  total: number
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  showCart,
  setShowCart,
  cartItems,
  total
}) => {
  return (
    <>
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => setShowCart(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[28rem] max-w-full bg-white shadow-lg z-30 p-6 transition-transform duration-300 transform ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setShowCart(false)}
          className="text-gray-500 hover:text-red-500 absolute top-4 right-4"
        >
          🗙
        </button>

        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <>
            <ul className="space-y-2 mb-4">
              {cartItems.map(({ product, quantity }) => (
                <li key={product.id} className="flex justify-between">
                  <span>
                    {product.name} × {quantity}
                  </span>
                  <span>${(product.price * quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer
