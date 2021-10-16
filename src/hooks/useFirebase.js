import initFirebase from "../firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, FacebookAuthProvider, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                // console.log(user);
            }).catch((error) => {
                setError(error.message)
            });
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)

            });
    }
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            });
    }
    const signInWithEmail = () => {
        const { email, password } = user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => console.log(error.message))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])


    return {
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmail,
        user,
        setUser,
        error,
        logout
    }
}

export default useFirebase