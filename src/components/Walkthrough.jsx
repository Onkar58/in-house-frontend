import React, { useCallback, useEffect, useRef, useState } from 'react'
import Widget from './Walkthrough/Widget'

const Walkthrough = ({ onClose, steps }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [targetPosition, setTargetPosition] = useState({})
    const onNext = useCallback(() => {
        setCurrentStep((currentStep + 1) % steps.length)
    }, [currentStep])
    const onPrevious = useCallback(() => {
        currentStep !== 0 ? setCurrentStep((currentStep - 1) % steps.length) : setCurrentStep((steps.length - 1))
    }, [currentStep])


    useEffect(() => {
        const { targetId } = steps[currentStep];
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" })
                const paddingTop = 100; // Change this value to your desired padding top
                const targetScrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - paddingTop;
                window.scrollTo({
                    top: targetScrollPosition,
                    behavior: "smooth"
                });
                const boundingRect = targetElement.getBoundingClientRect();
                setTargetPosition(() => ({
                    x: boundingRect.x,
                    y: boundingRect.y,
                    top: boundingRect.top,
                    left: boundingRect.left,
                    bottom: boundingRect.bottom,
                    right: boundingRect.right,
                    width: boundingRect.width,
                    height: boundingRect.height,
                }));
            }
        }
    }, [currentStep]);
    return (
        <div className='absolute inset-0 z-20 '>
            <div className='floater absolute border-2'
                style={{
                    width: targetPosition.width + 10,
                    height: targetPosition.height + 10,
                    top: targetPosition.y + window.scrollY - 5,
                    left: targetPosition.x + window.scrollX - 5,
                }}
            >
            </div>

            {
                <Widget targetPosition={targetPosition} onClose={onClose} data={steps[currentStep]} step={currentStep + 1} totalSteps={steps.length} next={onNext} previous={onPrevious} />
            }
        </div>
    )
}

export default Walkthrough