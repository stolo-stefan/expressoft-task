import { useState } from 'react'
import { menuData, Product } from '../data/menuData'
import ProductCard from './ProductCard'

interface CategoryListProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  onAddToCart: (product: Product) => void
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  setSelectedCategory,
  onAddToCart
}) => {
  const uniqueCategories = ['All', ...menuData.map((cat) => cat.category)]
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredMenu = (
    selectedCategory === 'All'
      ? menuData
      : menuData.filter((cat) => cat.category === selectedCategory)
  )
    .map((category) => ({
      ...category,
      products: category.products
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) =>
          sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        )
    }))
    .filter((category) => category.products.length > 0)

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div>
          <label htmlFor="category-filter" className="mr-2 font-semibold">
            Filter by Category:
          </label>
          <select
            id="category-filter"
            className="border px-3 py-1 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="search" className="mr-2 font-semibold">
            Search:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-1 rounded"
          />
        </div>

        <div>
          <label htmlFor="sort" className="mr-2 font-semibold">
            Sort by Price:
          </label>
          <select
            id="sort"
            className="border px-3 py-1 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {filteredMenu.length > 0 ? (
        filteredMenu.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
            <div className="flex flex-col gap-4">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 italic mt-10">
          Oops! We searched high and low, but we couldn’t find anything that
          tasty...
        </div>
      )}
    </div>
  )
}

export default CategoryList
