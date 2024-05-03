import React, { useEffect, useRef, useState } from 'react';

const Widget = ({ step, totalSteps, data, next, previous, onClose, targetPosition }) => {
    const currentRef = useRef(null)
    return (
        <div
            ref={currentRef}
            style={{
                top: targetPosition.bottom + window.scrollY + 10,
                left: targetPosition.x + targetPosition.width / 2 - currentRef?.current?.getBoundingClientRect().width / 2
            }}
            className={`absolute w-fit h-fit bg-white rounded-lg overflow-hidden shadow-lg`}
        >
            <button className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="p-6 max-w-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{data.title}</h2>
                <p className="text-gray-700 text-base">{data.desc}</p>
            </div>
            <div className="bg-gray-100 py-3 px-6 flex justify-between gap-10 items-center">
                <span className="text-gray-600">{step}/{totalSteps}</span>
                <div>
                    <button className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" onClick={previous}>Previous</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={next}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Widget;
