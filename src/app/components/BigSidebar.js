import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'


const BigSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar'>
        <header>
          Jobs Organizer
        </header>
        <div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`


`;

export default BigSidebar
