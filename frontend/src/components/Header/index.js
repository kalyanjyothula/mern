import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderUserContainer, HeaderUserLink } from './elements'

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderTitle to="/">LoginApp</HeaderTitle>
      <HeaderUserContainer>
        <HeaderUserLink to="/login">Login</HeaderUserLink>
        <HeaderUserLink to="/register">Register</HeaderUserLink>
      </HeaderUserContainer>
    </HeaderContainer>
  )
}
