import { createContext, useState } from "react"

export const passwordContext = createContext()

const PassProvider = ({ children }) => {
    const [customRegister, setCustomRegister] = useState({})
    return (
        <passwordContext.Provider value={{
            customRegister,
            setCustomRegister
        }} >
            {children}
        </passwordContext.Provider >
    )
}

export default PassProvider