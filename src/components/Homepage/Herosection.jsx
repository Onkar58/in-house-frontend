import React, { useRef } from 'react'
import sally from '../../assets/Saly.png'
import { useNavigate } from 'react-router-dom'
import avatar1 from "../../assets/Avatar1.png"
import avatar2 from "../../assets/Avatar2.png"
import avatar3 from "../../assets/Avatar3.png"
import avatar4 from "../../assets/Avatar4.png"

const activeUsers = [
    avatar1, avatar2, avatar3, avatar4
]


const Herosection = () => {
    const navigator = useNavigate()
    const gotoStudent = (input) => {
        let studentId
        if (input.includes("https") || input.includes("leetcode.com")) {
            const splittt = input.split("/")
            studentId = splittt[splittt.length - 1].toLowerCase()
        }
        else
            studentId = input.toLowerCase()
        navigator(`student/${studentId}`)
        }
    const inpRef = useRef(null)
    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-between sm:-mt-10'>
            <div className='w-full mt-40 flex-1'>
                <h1 className='text-2xl lg:text-4xl xl:text-5xl font-[600] text-white leading-[150%] tracking-wide'>
                    Analyse Student's <br /><span className='text-primary text-4xl lg:text-5xl xl:text-6xl'>LeetCode</span> Profile
                </h1>
                <div className='mt-5 md:mt-10 md:scale-[80%] lg:scale-100'>
                    <form className='relative z-1 flex items-center justify-between my-2 w-full max-w-[400px] md:w-[80%] lg:w-2/3 rounded-3xl p-3 pl-6 bg-transparent text-white text-xl' id='searchBox'>
                        <input ref={inpRef} type="text" placeholder="Search" className='flex-1 w-0 bg-transparent outline-none' />
                        <button className='cursor-pointer' onClick={() => gotoStudent(inpRef.current.value)} type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-7 fill-white' viewBox="0 0 128 128">
                                <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z"></path>
                            </svg>
                        </button>
                    </form>
                    <section className='flex w-fit'>
                        <span className='flex items-center justify-center mx-5 text-lg'>

                            {
                                activeUsers.map((user, index) => (
                                    <img key={index} src={user} className={`size-10 ${index !== 0 ? "-ml-2" : ""}`} />
                                ))

                            }
                        </span>
                        <p className='text-[#aaa] text-center text-md'><span className='block text-2xl font-[600] text-white'>200 + </span>Active Users</p>
                    </section>
                </div>
            </div>
            <div className='w-full h-fit md:w-2/5 md:self-end lg:w-1/2 lg:flex-1'>
                <img src={sally} />
            </div>
        </div>
    )
}

export default Herosection