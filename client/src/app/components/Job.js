import React from 'react'
import {formatDate} from '../util/moment';
import { deleteJob, handleEditAction } from '../features/job/jobSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaFlask } from 'react-icons/fa';
import {generateRandomColor} from '../util/generateRandomColor';
import {AiOutlineMail, AiFillEdit, AiFillDelete} from 'react-icons/ai';
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
        recruiter
    } = prop;
    const dispatch = useDispatch();
    const initial = [...company][0].toUpperCase();
    const hexCode = generateRandomColor();
    return (
        <article className='job'>
            <div className='edit-delete-controller'>
                <Link 
                    to='/add-job'
                    className='edit-btn'
                    onClick={() => dispatch(handleEditAction(_id))}
                >
                    <AiFillEdit />
                </Link>
                <button 
                    className='delete-btn'
                    onClick={() => dispatch(deleteJob(_id))}
                >
                    <AiFillDelete />
                </button>
            </div>
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
            </div>
            <footer>
                <div className='recruiter-detail'>
                    <p className='name'>
                        <BsPersonCheck />
                        {recruiter?.name || 'Recruiter name'}
                    </p>
                    <p className='email'>
                        <AiOutlineMail />
                        {recruiter?.email || 'Recruiter email'}
                    </p>
                    <p className='contact'>
                        <RiContactsLine />
                        {recruiter?.contactNumber || 'Recruiter number'}
                    </p>
                </div>
            </footer>
        </article> 
  )
}

export default Job;