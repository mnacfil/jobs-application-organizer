import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleChartType } from '../features/stat/statSlice'
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartContainer = () => {
    const dispatch = useDispatch()
    const {stats, monthlyApplication, defaultChart} = useSelector(store => store.stat);

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
        { defaultChart === 'bar' ? <BarChart />: <AreaChart /> }
    </Wrapper>
  )
}

const Wrapper = styled.section`

`;

export default ChartContainer