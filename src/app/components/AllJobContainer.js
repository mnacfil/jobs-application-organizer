import React from 'react'
import Job from './Job'
const AllJobContainer = ({ allJob, totalJob }) => {
  return (
    <section className='all-job-section'>
      <h3>{totalJob} Jobs found</h3>
      <div className='all-job-container'>
        {allJob.map(job => {
          return (
            <Job {...job} key={job._id}/>
          )
        })}
      </div>
    </section>
  )
}

export default AllJobContainer