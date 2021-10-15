import { createContext, useState, useEffect } from "react"


export const productsContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/ProductsData.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductProvider