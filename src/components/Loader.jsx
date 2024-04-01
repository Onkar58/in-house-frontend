import React from 'react'

const Loader = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-40" viewBox="0 0 200 200">
            <circle fill="none" stroke="white" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center">
                <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite">
                </animateTransform>
            </circle>
        </svg>
    )
}

export default Loader 