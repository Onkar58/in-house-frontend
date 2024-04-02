import React from 'react'

const Skilltag = ({skillName, count}) => {
  return (
    <div className="opacity-80 bg-white bg-opacity-20 text-white text-md p-3 rounded-lg">
        {skillName} ({count})
    </div>
  )
}

export default Skilltag