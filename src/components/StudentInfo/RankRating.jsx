import React from 'react'
import Badge from './Badge'
import Questions from './Charts/Questions'

const h1Styles = "text-white text-md font-[400] my-2 tracking-wider"
const spanStyling = "mx-2 text-3xl"

const RankRating = ({ rankRatings, questions }) => {
  return (
    <div className='bg-[#d9d9d9] bg-opacity-10 w-full rounded-lg p-10 mt-20 flex items-center'>
      <div className='w-1/2'><Questions  questionsInfo={questions}/></div>
      <div className='w-1/2'>
        <div className='pl-10' >
          <h1 className={h1Styles}>Rank: <span className={spanStyling}>{rankRatings.ranking}</span></h1>
          <h1 className={h1Styles}>Reputation: <span className={spanStyling + " opacity-70"}>{rankRatings.reputation}</span></h1>
          <h1 className={h1Styles}>Star Ratings: <span className={spanStyling + " opacity-70"}>{rankRatings.starRating}</span></h1>
          <h1 className={h1Styles}>Total Badges: <span className={spanStyling + " opacity-70"}>{rankRatings?.badges?.length}</span></h1>
        </div>

        <div id="badgesDiv" className='flex items-center gap-3 overflow-x-scroll overflow-y-hidden mt-10'>
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