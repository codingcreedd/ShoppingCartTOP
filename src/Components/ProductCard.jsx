const ProductCard = ({title, description, price, src}) => {
  return (
    <div className="px-6 py-6 flex flex-col items-center shadow-2xl">
        <div className="max-h-[70%]">
            <img src={src} alt="TOP_PRODUCT" width={400} height={400} className="max-h-full object-contain"/>
        </div>
        <div className="flex items-center gap-10 mt-10 mb-10">
            <p>{title}</p>
            <div className="px-4 py-2 rounded-full bg-green-600">${price}</div>
        </div>
        <div className="text-lg text-red-600">{description}</div>
    </div>
  )
}

export default ProductCard