import React, { useState } from 'react'
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toBase64 } from '../utils/functions';
import { signUpUser } from '../utils/authFunctions';

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [profilePic, setProfilePic] = useState(null);
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const changeImage = async (e) => {
        setProfilePic(e.target.files[0]);
        const imgData = await toBase64(e.target.files[0])
        setFormData({ ...formData, profilePic: imgData })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userSignedUp = await signUpUser(formData);
        if (userSignedUp.success) {
            navigate('/')
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-[#d9d9d9] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
                        Image
                    </label>
                    <input
                        name='profilePic'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="profilePic"
                        type="file"
                        placeholder="Select your Image"
                        onChange={changeImage}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        name='name'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        name='email'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        name='password'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <button
                        className="w-full max-w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <button
                        className="text-blue-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        <Link to='/login'>Go to Login</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp