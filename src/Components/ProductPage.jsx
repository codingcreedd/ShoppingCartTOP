import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import { useContext, useState } from "react"
import { Context } from "./Context"

const ProductPage = () => {

    const location = useLocation()

    const { title, description, price, src } = location.state
    const {cart, setCart, cartTotal, setCartTotal, favourites, setFavourites} = useContext(Context);

    const [counter, setCounter] = useState(0);

    const addToCart = () => {
        if (counter > 0) {
          const existingProduct = cart.find((product) => product.src === src);
          if (existingProduct) {
            existingProduct.quantity += counter;
            setCartTotal(cartTotal + (counter * price));
          } else {
            setCart([...cart, { title, description, price, src, quantity: counter }]);
            setCartTotal(cartTotal + (counter * price));
          }
        }
    };

    const addToFav = () => {
        const existingProduct = favourites.find((product) => product.src === src);
        if(!existingProduct){
            setFavourites([...favourites, existingProduct]);
        }
        else
        {
            for(let i = 0; i < favourites.length; i++){
                if(favourites[i].src === existingProduct.src){
                    const newFavorites = favourites.filter(element => element.src !== existingProduct.src);
                    setFavourites(newFavorites);
                }
            }
        }
    }

  return (
    <div className="flex flex-col gap-10">
        <Nav />
        <div className="flex gap-20 mx-96 text-lg">
            <img src={src} alt="Product" className="border-2 border-black rounded-lg w-[50%] h-[50%]" />
            <div className="flex flex-col w-[35%]">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="mb-6">{description}</p>
                <p className="font-bold mb-20">${price}</p>
                <div className="flex justify-between items-center mb-8">
                    <p className="font-bold">ONE SIZE</p>
                    <p className="text-gray-400">Size Guide</p>
                </div>
                <div className="text-center mb-6">
                    If you want to refund this product, please check the footer below. <span className="underline cursor-pointer hover:text-red-600 transition-all">Learn More</span>
                </div>

                <div className="flex items-center gap-8 justify-center mb-10">
                    <button className="px-4 py-1 bg-black rounded-full text-white"
                    onClick={() => {setCounter(prev => prev + 1)}}>+</button>
                    <button className="px-4 py-1 bg-red-600 rounded-full text-white"
                    onClick={() => {if(counter > 0){
                        setCounter(prev => prev - 1)}}}>-</button>
                    <p className="px-4 py-1 bg-gray-200 rounded-full">{counter}</p>
                </div>
                <button className="w-full bg-black hover:opacity-40 transition-all text-white font-bold py-4 rounded-full mb-4" onClick={addToCart}>
                    Add to Cart
                </button>

                <button className="w-full mb-10 border hover:border-black transition-all rounded-full py-4 border-gray-400 flex justify-center items-center gap-4"
                onClick={addToFav}>
                    <p>Favorite</p>
                    <i className='bx bx-heart' ></i>
                </button>

                <h2 className="font-bold">Shipping</h2>
                <p className="mb-8">You'll see our shipping options at checkout</p>

                <h2 className="font-bold">Free PickUp</h2>
                <p className="mb-14 underline cursor-pointer">Find a Store</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>




            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProductPage