import { useContext } from "react"
import Nav from "./Nav"
import { Context } from "./Context"
import {v4 as uuid} from 'uuid'
import Footer from "./Footer"

const Cart = () => {
    const {cart, cartTotal} = useContext(Context);

  return (
    <div className="flex flex-col itemce">
        <Nav />
        <div className="flex mx-80 justify-center">
            <div className="flex flex-col gap-4 w-[60%] mb-10">
                <h1 className="text-2xl font-bold">Cart</h1>
                <hr className="h-[2px] bg-gray-400 w-[90%] mt-2 mb-2" />

                <div className="flex flex-col gap-4">
                    {
                        cart.map(product => (
                            <>
                                <div key={uuid()}className="flex gap-24">
                                    <img src={product.src} alt="PRODUCT" width={150} height={100} />
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <h1>{product.title}</h1>
                                            <p>${product.price}</p>
                                        </div>
                                        
                                        <p>{product.description}</p>
                                        <p>Quantity: {product.quantity}</p>

                                        <div className="flex gap-8 items-center">
                                            <i className='bx bx-heart text-2xl cursor-pointer' ></i>
                                            <i className='bx bx-trash text-2xl cursor-pointer' ></i>
                                        </div>

                                    </div>
                                </div>
                                <hr className="h-[2px] bg-gray-400 w-[50%] mx-auto mt-2 mb-2" />
                            </>
                        ))
                    }
                </div>
                <h1 className="font-bold mb-4">Shipping</h1>
                <p className="mb-10">Arrives by someday <span className="font-bold underline">Edit Location</span></p>
                <p className="font-bold">Free Pickup</p>
                <p className="underline font-bold">Find a Store</p>
            </div>

            <div className="flex flex-col w-[30%]">
                <h1 className="text-3xl font-bold mb-8">Summary</h1>
                <p className="mb-4">Do you have a Promo Code?</p>
                <div className="flex items-center justify-between mb-4">
                    <p>Estimated Shipping & Handling</p>
                    <p>Free</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Estimated Tax</p>
                    <p>-</p>
                </div>
                <hr className="h-[2px] bg-gray-400 mt-10 mb-10"/>
                <div className="flex items-center justify-between">
                    <p className="font-bold">Total</p>
                    <p>{cartTotal}</p>
                </div>
                <hr className="h-[2px] bg-gray-400 mt-10 mb-10"/>
                <button className="w-full bg-black hover:opacity-40 transition-all text-white font-bold py-4 rounded-full mb-4">
                    Checkout
                </button>
                
                <button className="w-full bg-gray-400 hover:opacity-40 transition-all text-white font-bold py-4 rounded-full mb-4">
                    <i className='bx bxl-paypal text-2xl' ></i>
                </button>

            </div>

        </div>
        <Footer />
    </div>
  )
}

export default Cart