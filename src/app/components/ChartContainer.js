import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleChartType } from '../features/stat/statSlice'
import AreaChart from './AreaChartContainer';
import BarChart from './BarChartContainer';

const ChartContainer = () => {
    const dispatch = useDispatch()
    const { monthlyApplication, defaultChart } = useSelector(store => store.stat);

    const toggleChart = () => {
        if(defaultChart === 'bar') {
            dispatch(handleChartType('area'));
        } else {
            dispatch(handleChartType('bar'));
        }
    }

  return (
    <Wrapper>
        <h4>Monthly Applications</h4>
        <button className='chart-btn' onClick={toggleChart}>
            { defaultChart === 'bar' ? 'Area Chart': 'Bar Chart'}
        </button>
        { defaultChart === 'bar' ? 
            <BarChart data={monthlyApplication}/> 
            : 
            <AreaChart data={monthlyApplication}/> 
        }
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top: 3rem;
    text-align: center;

    .chart-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--primary-500);
        font-size: 1.25rem;
    }
`;

export default ChartContainer