import React, { useEffect } from 'react'
import styled from 'styled-components'
import {getUserFromLS} from '../util/localStorage'
import { useDispatch, useSelector } from 'react-redux';
import { getJobApplicationStats } from '../features/stat/statSlice';
import {Stat} from '../components';
import {FcCancel, FcExpand, FcNeutralDecision} from 'react-icons/fc'

const Stats = () => {
  const dispatch = useDispatch();
  const { isStatLoading, stats, monthlyApplication } = useSelector(store => store.stat);
  console.log(stats);
  useEffect(() => {
    dispatch(getJobApplicationStats())
  }, []);
  return (
    <Wrapper className='dashboard-center'>
      <div className='stats-container'>
        <Stat 
          value={stats.pending} 
          name='pending' 
          Icon={FcNeutralDecision}
          className='stat pending'
        />
        <Stat 
          value={stats.interview} 
          name='interview' 
          Icon={FcExpand}
          className='stat interview'
        />
        <Stat 
          value={stats.declined} 
          name='declined' 
          Icon={FcCancel}
          className='stat declined'
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .stats-container {

    .stat {
      background-color: var(--white);
      box-shadow: var(--shadow-2);
      border-radius: var(--borderRadius);
      padding: 2rem 1.5rem;
      margin-bottom: 2rem;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
          font-size: 3rem;
          font-weight: 700;
        }
        svg {
          padding: 0.5rem;
          border-radius: var(--borderRadius);
          font-size: 4rem;
        }
      }
      h5 {
        margin-bottom: 0;
        color: var(--grey-700);
      }
    }
    .stat.pending {
      border-bottom: 5px solid var(--pending-color);
      div {

        span {
          color: var(--pending-color);
        }
        svg {
          background-color: var(--pending-bg);
        }
      }
    }
    .stat.interview {
      border-bottom: 5px solid var(--interview-color);
      div {

        span {
          color: var(--interview-color);
        }
        svg {
          background-color: var(--interview-bg);
        }
      }
    }
    .stat.declined {
      border-bottom: 5px solid rgb(214, 106, 106);
      div {

        span {
          color: rgb(214, 106, 106);
        }
        svg {
          background-color: var(--declined-bg);
        }
      }
    }
  }
  @media screen and (min-width: 768px){
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      .stat {
        margin-bottom: 0;
      }
    }
  }
`;

export default Stats
