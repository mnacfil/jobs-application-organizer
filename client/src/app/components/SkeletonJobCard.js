import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor='#d9e2ec' highlightColor="#9fb3c8"> 
        <section className='all-job-section'>
            <h3><Skeleton width={200} /></h3>
            <div className='all-job-container'>
            {Array(4).fill().map((_, index) => {
                return (
                    <article className='job' key={index}>
                        <header>
                            <div className='company-initial skeleton-loading-company-initial'>
                                <Skeleton width={60} height={60}/>
                            </div>
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
                                <p className='status skeleton-loading-btn'><Skeleton width={120}/></p>
                            </div>
                        </div>
                        <footer className='skeleton-loading-btn'>
                            <div className='recruiter-detail'>
                                <p className='name'>
                                    <Skeleton width={150}/>
                                </p>
                                <p className='email'>
                                    <Skeleton width={150}/>
                                </p>
                                <p className='contact'>
                                    <Skeleton width={150}/>
                                </p>
                            </div>
                        </footer>
                    </article> 
                )
            })}
            </div>
    </section>
    </SkeletonTheme>
  )
}

export default SkeletonCard