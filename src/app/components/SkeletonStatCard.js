import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonStatCard = () => {
  return (
    <SkeletonTheme baseColor='#bcccdc' highlightColor="#829ab1">
        <section className='stats-container'>
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
        </section>
        <section style={{ textAlign: 'center', marginTop: '3rem'}}>
            <h5 style={{ marginBottom: '1rem'}}><Skeleton width={120}/></h5>
            <button className='chart-btn' style={{ border: 'none', marginBottom: '1rem'}}> 
                <Skeleton width={100}/> 
            </button>
            <div>
                <Skeleton width='80%' height={300}/>
            </div>
        </section>
    </SkeletonTheme>
  )
}


export default SkeletonStatCard;