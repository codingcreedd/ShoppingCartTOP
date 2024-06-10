import products from "../assets/products"
import ProductCard from "./ProductCard"
import { v4 as uuid } from 'uuid';

const TopProducts = ({classType, titleFound}) => {
  return (
    <div className="mt-24 flex flex-col px-14 ff overflow-scroll">
        {
          titleFound ? <h1 className="text-3xl mb-10">TOP PRODUCTS</h1> : null
        }
        <div className={`${classType || 'flex'} gap-4 mb-10 overflow-hidden`}>
            {
                products.map(product => {
                    return <ProductCard title={product.title} src={product.src} description={product.description} price={product.price} color={product.color} category={product.category} shop="palestineshop" key={uuid()} />
                })
            }
        </div>
    </div>
  )
}

export default TopProducts