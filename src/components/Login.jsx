import React, { useState } from 'react';
import { loginUser } from '../utils/authFunctions';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errMsg, setErrMsg] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const inpStyles = "border-b-[2px] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent"

    const changeHandler = (e) => {
        setErrMsg("")
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const userLoggedIn = await loginUser(formData);
        if (userLoggedIn.success) {
            navigate('/')
        }
        else
            setErrMsg("Invalid Credentials")
    };

    return (
        <form className="flex flex-col items-center justify-around bg-[#FEFEFF] bg-opacity-15 shadow-md rounded-3xl p-8 w-[400px] aspect-[586/728]" onSubmit={handleSubmit}>
            <h1 className='text-3xl font-[600] my-10'>Login Here</h1>
            <span className='text-primary font-medium'>{errMsg}</span>
            <div className="my-4 w-full">
                <label className="block text-sm font-bold " htmlFor="email">
                    Email
                </label>
                <input
                    name='email'
                    className={inpStyles}
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                />
            </div>
            <div className="my-6 w-full relative">
                <label className="block text-sm font-bold " htmlFor="password">
                    Password
                </label>
                <input
                    name='password'
                    className={inpStyles}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                />
                {
                    !showPassword ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="eye" fill='#ffffff' className='cursor-pointer absolute size-6 right-0 top-1/2 -translate-y-1/2' onClick={() => setShowPassword(!showPassword)}>
                            <path d="M16 7.558c-5.78 0-11.098 2.634-14.592 7.227a2.01 2.01 0 0 0 0 2.429C4.901 21.808 10.22 24.442 16 24.442s11.098-2.634 14.592-7.227a2.01 2.01 0 0 0 0-2.429C27.099 10.192 21.78 7.558 16 7.558zm13.001 8.445c-3.113 4.092-7.852 6.44-13.001 6.44s-9.888-2.348-13.001-6.446c3.113-4.092 7.852-6.44 13.001-6.44s9.888 2.348 13.001 6.44v.006z"></path>
                            <path d="M16 10.146c-3.228 0-5.854 2.626-5.854 5.854s2.626 5.854 5.854 5.854 5.854-2.626 5.854-5.854-2.626-5.854-5.854-5.854zm0 9.708c-2.125 0-3.854-1.729-3.854-3.854s1.729-3.854 3.854-3.854 3.854 1.729 3.854 3.854-1.729 3.854-3.854 3.854z"></path>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 64 64" id="hide" fill='#ffffff' className='cursor-pointer absolute size-6 right-0 top-1/2 -translate-y-1/2' onClick={() => setShowPassword(!showPassword)} >
                            <rect width="64" height="64" fill="none"></rect>
                            <path d="M568.687,32C571.83,39.211 581.07,58 592,58C596.706,58 601.092,54.436 604.807,49.893C605.768,48.717 606.989,49.454 607.532,51.537C608.074,53.62 607.734,56.265 606.773,57.44C602.492,62.675 597.422,66.667 592,66.667C576.826,66.667 564.463,34.772 564.463,34.772C563.846,33.166 563.846,30.834 564.463,29.228C564.463,29.228 576.826,-2.667 592,-2.667C607.174,-2.667 619.537,29.228 619.537,29.228C620.154,30.834 620.154,33.166 619.537,34.772C619.537,34.772 617.999,38.792 615.336,43.971C614.996,44.632 614.637,45.312 614.261,46.006C613.421,47.556 612.158,47.336 611.442,45.515C610.727,43.694 610.828,40.957 611.669,39.407C612.017,38.764 612.349,38.134 612.664,37.521C613.771,35.368 614.664,33.438 615.306,31.983C612.156,24.761 602.922,6 592,6C581.07,6 571.83,24.789 568.687,32Z" transform="matrix(1 0 0 .46154 -560 17.23)"></path>
                            <path d="M592,22C586.481,22 582,26.481 582,32C582,37.519 586.481,42 592,42C597.519,42 602,37.519 602,32C602,26.481 597.519,22 592,22ZM592,26C595.311,26 598,28.689 598,32C598,35.311 595.311,38 592,38C588.689,38 586,35.311 586,32C586,28.689 588.689,26 592,26Z" transform="translate(-560)"></path>
                            <path d="M648.824,15.82L692.824,51.82C693.716,52.55 694.968,52.328 695.617,51.323C696.267,50.319 696.069,48.911 695.176,48.18L651.176,12.18C650.284,11.45 649.032,11.672 648.383,12.677C647.733,13.681 647.931,15.089 648.824,15.82Z" transform="matrix(1 0 0 .88889 -640 3.556)"></path>
                        </svg>
                }
            </div>
            <div className="flex flex-col items-center justify-between gap-3">
                <button
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Log In
                </button>
                <button
                    className=" py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >   Don't have an account ?
                    <Link to='/signup' className='text-blue-500 mx-2'>Signup</Link>
                </button>
            </div>
        </form>
    );
};

export default Login