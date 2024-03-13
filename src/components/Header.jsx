import React from 'react'
import ProfileCard from './minis/ProfileCard'

const Header = () => {
    return (
        <header className='w-full h-20 flex border-[20px] border-red-400'>
            <div>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <ProfileCard />

        </header>
    )
}

export default Header