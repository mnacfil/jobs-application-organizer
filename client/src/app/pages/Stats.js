import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getJobApplicationStats } from '../features/stat/statSlice';
import {Stat, SkeletonStatCard, ChartContainer} from '../components';
import { FcReadingEbook } from 'react-icons/fc'

const Stats = () => {
  const dispatch = useDispatch();
  const { isStatLoading, stats, monthlyApplication } = useSelector(store => store.stat);
  useEffect(() => {
    dispatch(getJobApplicationStats())
  }, []);

  let statsData = [];
  for(const [status, value] of Object.entries(stats)) {
    statsData.push({ status, value })
  }

  return (
        <Wrapper className='dashboard-center'>
          { isStatLoading ? <SkeletonStatCard /> 
          : 
            <div>
              <section className='stats-container'>
                {statsData.map((stat, index) => {
                  const { status, value } = stat;
                  let statusName = status;
                  switch(status) {
                    case 'initialInterview':
                      statusName = 'initial interview';
                      break;
                    case 'finalInterview':
                      statusName = 'final interview';
                      break;
                    case 'waitingInResult':
                      statusName = 'waiting in result';
                      break;
                    case 'notSelected':
                      statusName = 'not selected';
                      break;
                    case 'jobOffer':
                      statusName = 'job offer';
                      break;
                  }
                  if(value > 0) {
                    return (
                      <Stat
                        key={index} 
                        value={value}
                        name={statusName}
                        Icon={FcReadingEbook}
                        className='stat'
                      />
                    )
                  }
                })}
              </section>
              { monthlyApplication.length > 0 && <ChartContainer /> }
            </div>
          }
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
    .stat {
      border-bottom: 5px solid var(--primary-400);
      div {

        span {
          color: var(--primary-400);
        }
        svg {
          background-color: var(--primary-400) ;
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
