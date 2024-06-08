import { createContext } from "react"

const Context = createContext(null);

const ContextProvider = (props) => {

    const states = {

    }

  return (
    <Context.Provider value={states}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;