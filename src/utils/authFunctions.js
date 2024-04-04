import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { indexedDBLocalPersistence, setPersistence } from "firebase/auth";

export const signUpUser = async (formData) => {
    return await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            const addToDB = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/createuser/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            return { success: true, message: 'User Created' };
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { success: false, message: errorMessage }
        });


}

export const loginUser = async (formData) => {
    return await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            return { success: true, message: 'User Logged In' };
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { success: false, message: errorMessage }
        });
}