import { useState } from 'react'
import { Product } from '../data/menuData'
import ProductModal from './ProductModal'
import ProductAvailability from './ProductAvailability'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(product.available)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="border rounded p-4 shadow-md bg-white mb-4">
      <div className="flex justify-between items-start mb-2">
        <div className="mb-3 flex flex-col items-start gap-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-buttonCustom hover:bg-expressoftColor text-white rounded-md text-sm font-medium shadow transition duration-300"
          >
            See details
          </button>
        </div>

        <span
          className={`inline-block w-3 h-3 rounded-full ${
            isAvailable ? 'bg-green-500' : 'bg-red-500'
          }`}
          title={isAvailable ? 'Available' : 'Not Available'}
        />
      </div>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <ProductAvailability
        isAvailable={isAvailable}
        product={product}
        setIsAvailable={setIsAvailable}
      />
      <button
        disabled={!isAvailable}
        onClick={() => onAddToCart(product)}
        className={`w-full px-4 py-2 rounded text-white font-semibold transition-colors duration-300 ${
          isAvailable
            ? 'bg-buttonCustom hover:bg-expressoftColor'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Add to Order
      </button>

      {showModal && (
        <ProductModal
          showModal={showModal}
          product={product}
          isAvailable={isAvailable}
          onAddToCart={() => onAddToCart(product)}
          setShowModal={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default ProductCard
