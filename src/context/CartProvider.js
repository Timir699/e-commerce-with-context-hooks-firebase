import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [allCartProducts, setAllCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <CartContext.Provider
            value={{
                allCartProducts,
                setAllCartProducts,
                totalPrice,
                setTotalPrice
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider