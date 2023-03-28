import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonCard = ({ allJob }) => {
  return (
    <section className='all-job-section'>
    <h3><Skeleton width={200} /></h3>
    <div className='all-job-container'>
    {allJob.map(job => {
        return (
            <article className='job'>
                <header>
                    <div className='company-initial'><Skeleton width={20}/></div>
                    <div className='company-info'>
                        <h4><Skeleton width={150}/></h4>
                        <p><Skeleton width={150}/></p>
                    </div>
                </header>
                <hr />
                <div className='application-data'>
                    <div className='first-data'>
                        <p className='location'><Skeleton width={120}/></p>
                        <p className='date'><Skeleton width={120}/></p>
                    </div>
                    <div className='second-data'>
                        <p className='type'><Skeleton width={120}/></p>
                        <p className='status'><Skeleton width={120}/></p>
                    </div>
                    <div className='edit-delete-controller'>
                        <button className='edit-btn btn '><Skeleton width={80}/></button>
                        <button 
                            className='delete-btn btn'
                            >
                            <Skeleton width={80}/>
                        </button>
                    </div>
                </div>
            </article> 
        )
    })}
    </div>
  </section>
  )
}

export default SkeletonCard