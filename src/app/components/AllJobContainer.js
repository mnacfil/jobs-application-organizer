import React from 'react'
import Job from './Job'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonCard from './SkeletonCard';

const AllJobContainer = ({ allJob, totalJob, loading }) => {
  return (
    <SkeletonTheme baseColor='#9fb3c8' highlightColor="#627d98">
      {
        loading ? <SkeletonCard allJob={allJob}/> :
        <section className='all-job-section'>
          <h3>{totalJob} Jobs Found`</h3>
          <div className='all-job-container'>
            {allJob.map(job => {
              return (
                <Job {...job} key={job._id}/>
              )
            })}
          </div>
        </section>
      }
    </SkeletonTheme>
  )
}

export default AllJobContainer