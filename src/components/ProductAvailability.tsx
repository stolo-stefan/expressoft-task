import { Product } from 'data/menuData'

interface ProductAvailabilityProps {
  isAvailable: boolean
  product: Product
  setIsAvailable: (available: boolean) => void
}

const ProductAvailability: React.FC<ProductAvailabilityProps> = ({
  isAvailable,
  product,
  setIsAvailable
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <span className="text-md font-medium">${product.price.toFixed(2)}</span>
        {!isAvailable && (
          <span className="text-sm text-red-500 font-medium">
            Not available
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={`toggle-${product.id}`} className="text-sm font-medium">
          Toggle Availability:
        </label>
        <input
          id={`toggle-${product.id}`}
          type="checkbox"
          checked={isAvailable}
          onChange={() => setIsAvailable(!isAvailable)}
          className="accent-green-500"
        />
      </div>
    </>
  )
}

export default ProductAvailability
