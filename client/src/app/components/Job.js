import React from 'react'
import {formatDate} from '../util/moment';
import { deleteJob, handleEditAction } from '../features/job/jobSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaFlask } from 'react-icons/fa';
import {generateRandomColor} from '../util/generateRandomColor';
import {AiOutlineMail} from 'react-icons/ai';
import {RiContactsLine} from 'react-icons/ri';
import {BsPersonCheck} from 'react-icons/bs';

const Job = (prop) => {
    const { 
        company, 
        jobLocation, 
        position, 
        jobType, 
        jobStatus, 
        createdAt, 
        _id,
        recruiter: {
            name,
            email,
            contactNumber 
        }
    } = prop;
    const dispatch = useDispatch();
    // let statusClassName = 'pending';
    // if(jobStatus === 'interview') {
    //     statusClassName = 'interview'
    // }
    // if(jobStatus === 'declined') {
    //     statusClassName = 'declined'
    // }
    const initial = [...company][0].toUpperCase();
    const hexCode = generateRandomColor();
    return (
        <article className='job'>
            <header>
                <div 
                    className='company-initial'
                    style={{ backgroundColor: hexCode}}
                    >
                    {initial}
                </div>
                <div className='company-info'>
                    <h4>{position}</h4>
                    <p>{company}</p>
                </div>
            </header>
            <hr />
            <div className='application-data'>
                <div className='first-data'>
                    <p className='location'>
                        <FaLocationArrow />
                        {jobLocation}
                    </p>
                    <p className='date'>
                        <FaCalendarAlt />
                        {formatDate(createdAt)}
                    </p>
                </div>
                <div className='second-data'>
                    <p className='type'>
                        <FaBriefcase />
                        {jobType}
                    </p>
                    <p className={`status`}>
                        <FaFlask />
                        {jobStatus}
                    </p>
                </div>
                <div className='edit-delete-controller'>
                    <Link 
                        to='/add-job'
                        className='edit-btn btn'
                        onClick={() => dispatch(handleEditAction(_id))}
                    >
                        Edit
                    </Link>
                    <button 
                        className='delete-btn btn'
                        onClick={() => dispatch(deleteJob(_id))}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <footer>
                <div className='recruiter-detail'>
                    <p className='name'>
                        <BsPersonCheck />
                        {name}
                    </p>
                    <p className='email'>
                        <AiOutlineMail />
                        {email}
                    </p>
                    <p className='contact'>
                        <RiContactsLine />
                        {contactNumber}
                    </p>
                </div>
            </footer>
        </article> 
  )
}

export default Job;