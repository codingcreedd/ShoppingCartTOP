import { createContext, useState } from "react"

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [favourites, setFavourites] = useState([]);

    const states = {
      cart, setCart,
      cartTotal, setCartTotal,
      favourites, setFavourites
    }

  return (
    <Context.Provider value={states}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;