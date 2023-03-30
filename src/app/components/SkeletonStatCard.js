import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonStatCard = () => {
  return (
    <div className='dashboard-center'>
        <div className='stats-container'>
            {Array(3).fill().map((_, index) => {
                return (
                    <article className='stat' key={index}>
                        <div>
                            <span><Skeleton width={50}/></span>
                            <div><Skeleton width={50}/></div>
                        </div>
                        <h5>
                            <Skeleton width={100}/>
                        </h5>
                    </article>
                )
            })}
        </div>
    </div>
  )
}


export default SkeletonStatCard;