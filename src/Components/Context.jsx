import { createContext, useState } from "react"

const Context = createContext(null);

const ContextProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [favourites, setFavourites] = useState([]);

    const states = {

    }

  return (
    <Context.Provider value={states}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;