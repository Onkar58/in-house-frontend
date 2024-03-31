import React from 'react'

const Badge = ({badgeData}) => {
  let badgeUrl;
  if (!badgeData.icon.includes("https")){
    badgeUrl = "https://assets.leetcode.com"+badgeData.icon
  }
  else
    badgeUrl = badgeData.icon
    return (
    <div className='size-40 min-w-40 text-center text-white text-opacity-70'>
        <img className='mx-auto min-w-20 size-20' src={badgeUrl} onError={"this.onerror=null;this.src=https://assets.leetcode.com/users/images/d3f69eeb-aff8-426a-be4e-dc0cc938e89b_1614652010.685347.png" }/>
        <h1 className=' my-2'>{badgeData.displayName}</h1>
        <h1 className='text-sm'>Date: {badgeData.creationDate}</h1>
    </div>
  )
}

export default Badge