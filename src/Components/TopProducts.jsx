import products from "../assets/products"
import ProductCard from "./ProductCard"

const TopProducts = () => {
  return (
    <div className="mt-24 flex flex-col px-14 ff overflow-scroll">
        <h1 className="text-3xl mb-10">TOP PRODUCTS</h1>
        <div className="flex gap-4 mb-10">
            {
                products.map(product => {
                    return <ProductCard title={product.title} src={product.src} description={product.description} price={product.price} />
                })
            }
        </div>
    </div>
  )
}

export default TopProducts