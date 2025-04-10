import { Product } from 'data/menuData'

interface ProductModalProps {
  showModal: boolean
  setShowModal: (modal: boolean) => void
  product: Product
  onAddToCart: (product: Product) => void
  isAvailable: boolean
}

const ProductModal: React.FC<ProductModalProps> = ({
  showModal,
  setShowModal,
  product,
  onAddToCart,
  isAvailable
}) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative transform transition-transform duration-300 scale-100">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            {product.ingredients && (
              <div className="mb-2">
                <h3 className="font-semibold text-sm mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {product.ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.quantity && (
              <p className="text-sm text-gray-600 mb-4">
                Quantity: {product.quantity}
              </p>
            )}
            <button
              disabled={!isAvailable}
              onClick={() => {
                onAddToCart(product)
                setShowModal(false)
              }}
              className={`w-full px-4 py-2 rounded text-white font-semibold transition-colors duration-300 ${
                isAvailable
                  ? 'bg-buttonCustom hover:bg-expressoftColor'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Add to Order
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductModal
