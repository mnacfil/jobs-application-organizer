import React from 'react'
import styled from 'styled-components'
import {getUserFromLS} from '../util/localStorage'

const Stats = () => {
  const data = getUserFromLS()
  return (
    <Wrapper className='dashboard-center'>
      <h1>Stats page</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;

export default Stats
