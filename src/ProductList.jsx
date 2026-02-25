import ProductCard from './ProductCard'

export default function ProductList({products}) {
  return (
    <div>ProductList
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}