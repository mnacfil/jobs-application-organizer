import React from 'react'
import styled from 'styled-components'
import {BiAlignLeft} from 'react-icons/bi'
import {HiUserCircle} from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-toggle">
          <BiAlignLeft />
        </div>
        <h2>Dashboard</h2>
        <div className="nav-user">
          <button>
            <HiUserCircle />
            <span>Melvin</span>
            <AiFillCaretDown />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`

`;

export default Navbar
