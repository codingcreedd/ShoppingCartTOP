import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Context } from "./Context";

const NewHover = ({onClick}) => {
    return (
        <div className="absolute top-full bg-white left-0 right-0 font-normal">
            <div className="px-14 pb-8 text-center" onMouseOver={onClick}>
                Coming Soon...
            </div>
        </div>
    )
}

const Nav = () => {

    const [newHover, setNewHover] = useState(false);
    const [tshirtHover, setTshirtHover] = useState(false);
    const [hats, setHats] = useState(false);

    const {cart} = useContext(Context);

  return (
    <nav className="px-14 py-8 bg-white flex items-center justify-between text-xl font-bold relative">
        <Link to="/">
            <em>
                P<span className="text-red-600">A</span>
                <span className="text-gray-500">L</span>
                <span className="text-green-600">E</span>
                SWEAR
            </em>
        </Link>

        <div className="flex items-center gap-8">
            <Link className="cursor-pointer" to="/">Home</Link>
            <p className="text-red-600 cursor-pointer" onMouseOver={() => {setNewHover(true)}} onMouseLeave={() => {setNewHover(false)}}>New & Featured</p>
            <p className="text-green-600 cursor-pointer" onMouseDown={() => {setTshirtHover(true)}} onMouseLeave={() => {setTshirtHover(false)}}>T-Shirts</p>
            <p className="cursor-pointer" onMouseDown={() => {setHats(true)}} onMouseLeave={() => {setHats(false)}}>Hats</p>
        </div>

        <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 px-3 py-2 bg-gray-400 rounded-full w-[70%]">
                <i className='bx bx-search-alt-2'></i>
                <input type="text" placeholder="Search" className="text-black ph bg-gray-400 outline-none w-full" />
            </div>
            <Link to="/favorites"><i className='bx bx-heart text-3xl cursor-pointer' ></i></Link>
            <Link to="/cart">
                <i className='bx bxs-shopping-bag text-3xl cursor-pointer relative' >
                    {
                        cart.length >= 1 ? (
                            <div className="absolute bg-red-600 text-white w-[20px] h-[20px] rounded-full bottom-5 right-0 text-sm text-center">{cart.length}</div>
                        ) : (
                            null
                        )
                    }
                </i>
            </Link>
        </div>

        {
            newHover ? (
                <NewHover onClick={() => {setNewHover(true)}}/>
            ) : (null)
        }

    </nav>
  )
}

export default Nav