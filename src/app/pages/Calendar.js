import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
// import { isSameDay } from '../util/isSameday';
import styled from 'styled-components';


const MyCalendar = () => {
  const [ value, onChange ] = useState(new Date());

  return (
    <Wrapper>
      <Calendar 
      onChange={onChange} 
      value={value}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 10rem;
`

export default MyCalendar