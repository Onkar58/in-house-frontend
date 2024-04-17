import React from 'react'
import loginAvatar from "../assets/loginAvatar.png"

const Wrapper2 = ({ children }) => {
    return (
        <div className="flex justify-center items-center gap-20 h-screen text-white">
            <div className='absolute right-10 top-10 flex items-center justify-center gap-2 '>
                <svg className="size-20" viewBox="0 0 36 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.19634L7.95757 52.9999L5.21184 21.0043L18.782 19.9791L18.7567 14.624L24.1121 0L19.0027 9.74083L0 5.19634Z" fill="url(#paint0_linear_151_5264)" />
                    <path d="M21.7027 29.0151L24.1155 0.00390625L20.0287 21.524L10.8582 22.0902L11.5923 33.1776L7.96094 53L13.5988 31.3808L21.7027 29.0151Z" fill="url(#paint1_linear_151_5264)" />
                    <path d="M23.2977 35.8607L23.5544 30.1967L16.0826 32.2314L16.0677 38.6236L7.96094 52.9999L18.0984 38.0362L23.2977 35.8607ZM24.6588 33.2663L31.5984 30.7028L32.304 23.9124L24.8697 25.0475L24.6588 33.2663ZM27.6323 23.5715L32.7702 22.8037L33.5095 17.2346L29.7318 17.0325L24.1155 0L28.0573 16.7795L27.6323 23.5715Z" fill="url(#paint2_linear_151_5264)" />
                    <path d="M34.8005 16.4148L35.3878 11.264L30.9251 9.80423L24.1094 0L30.8816 12.1575L30.6843 15.9504L34.8005 16.4148Z" fill="url(#paint3_linear_151_5264)" />
                    <defs>
                        <linearGradient id="paint0_linear_151_5264" x1="-0.76641" y1="2.9223" x2="2288.94" y2="924.315" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EE201C" />
                            <stop offset="1" stop-color="#F7F3EC" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_151_5264" x1="6.44757" y1="6.82294" x2="1540.49" y2="624.134" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EE201C" />
                            <stop offset="1" stop-color="white" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_151_5264" x1="6.44898" y1="6.8193" x2="2432.56" y2="983.103" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EE201C" />
                            <stop offset="1" stop-color="white" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_151_5264" x1="21.0838" y1="14.7307" x2="1092.09" y2="445.712" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EE201C" />
                            <stop offset="1" stop-color="#F3F3F1" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className='font-bold text-3xl'>litgit</h1>
            </div>
            {children}
            <div>
                <img src={loginAvatar} />
            </div>
        </div>
    )
}

export default Wrapper2