import initFirebase from "../firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

initFirebase()


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(user);
                setUser(result.user);
            }).catch((error) => {
                setError(error.message)
            });
    }
    return {
        signInWithGoogle,
        user,
        error
    }
}

export default useFirebase