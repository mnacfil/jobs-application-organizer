import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/image/logo.png';

const AppLogo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="app logo" />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  img {
    width: 110px;
    background: transparent;
  }

`;

export default AppLogo