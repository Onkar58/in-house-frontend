import React from 'react'
import Skilltag from "./Skilltag"

const SkillsLang = ({ skills }) => {
  return (
    <div id="concepts" className='flex flex-col gap-10'>
      <div>
        <h1 className='text-lg text-white my-5'>Advanced</h1>
        <section className='w-full flex flex-wrap gap-3 justify-start items-center'>
          {
            skills?.advanced?.map((tag, idx) => <Skilltag skillName={tag.tagName} count={tag.problemsSolved} />)
          }
        </section>
      </div>
      <div>
        <h1 className='text-lg text-white my-5'>Intermediate</h1>
        <section className='w-full flex flex-wrap gap-3 justify-start items-center'>
          {
            skills?.intermediate?.map((tag, idx) => <Skilltag skillName={tag.tagName} count={tag.problemsSolved} />)
          }
        </section>
      </div>
      <div>
        <h1 className='text-lg text-white my-5'>Fundamental</h1>
        <section className='w-full flex flex-wrap gap-3 justify-start items-center'>
          {
            skills?.fundamental?.map((tag, idx) => <Skilltag skillName={tag.tagName} count={tag.problemsSolved} />)
          }
        </section>
      </div>
    </div>
  )
}

export default SkillsLang