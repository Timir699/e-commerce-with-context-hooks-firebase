import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [allCartProducts, setAllCartProducts] = useState([])


    return (
        <CartContext.Provider
            value={{
                allCartProducts,
                setAllCartProducts,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider