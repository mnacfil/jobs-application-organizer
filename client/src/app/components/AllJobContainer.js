import React from 'react'
import Job from './Job'
import Skeleton from 'react-loading-skeleton';
import SkeletonJobCard from './SkeletonJobCard';

const AllJobContainer = ({ allJob, totalJob, loading }) => {
  return <>
      {
        loading ? <SkeletonJobCard allJob={allJob}/> :
        <section className='all-job-section'>
          <h3>{totalJob} Jobs Found</h3>
          <div className='all-job-container'>
            {allJob.map(job => {
              return (
                <Job {...job} key={job._id}/>
              )
            })}
          </div>
        </section>
      }
  </>
}

export default AllJobContainer