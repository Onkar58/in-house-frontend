import React from 'react'
import Badge from './Badge'
import ChartExample from './Charts/Questions'

const h1Styles = "text-white text-md font-[400] my-2 tracking-wider"
const spanStyling = "mx-2 text-xl"

const RankRating = ({ rankRatings, questions }) => {
  return (
    <div className='bg-white bg-opacity-20 w-full rounded-lg p-10 mt-20 flex'>
      <div className='w-1/2'><ChartExample /></div>
      <div className='w-1/2'>
        <div className='pl-10' >
          <h1 className={h1Styles}>Rank: <span className={spanStyling}>{rankRatings.ranking}</span></h1>
          <h1 className={h1Styles}>Reputation: <span className={spanStyling}>{rankRatings.reputation}</span></h1>
          <h1 className={h1Styles}>Star Ratings: <span className={spanStyling}>{rankRatings.starRating}</span></h1>
        </div>
        <div className='flex items-center gap-3 overflow-x-scroll overflow-y-hidden mt-10'>
          {
            rankRatings?.badges ?
            rankRatings?.badges.map(badge => (
              <Badge badgeData={badge} />
            )) :
            <h1 className='text-white text-lg mx-auto mt-20'>No Badges Found</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default RankRating