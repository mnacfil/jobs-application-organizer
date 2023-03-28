import React from 'react'
import {formatDate} from '../util/moment'

const Job = ({ company, jobLocation, position, jobType, status, createdAt }) => {
  return (
    <article className='job'>
        <header>
            <div className='company-initial'>D</div>
            <div className='company-info'>
                <h4>{position}</h4>
                <p>{company}</p>
            </div>
        </header>
        <hr />
        <div className='application-data'>
            <div className='first-data'>
                <p className='location'>{jobLocation}</p>
                <p className='date'>{formatDate(createdAt)}</p>
            </div>
            <div className='second-data'>
                <p className='type'>{jobType}</p>
                <p className='status'>{status}</p>
            </div>
            <div className='edit-delete-controller'>
                <button className='edit-btn btn'>Edit</button>
                <button className='delete-btn btn'>Delete</button>
            </div>
        </div>
    </article> 
  )
}

export default Job;