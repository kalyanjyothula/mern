import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  height: 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding:0.25rem 2rem;
  justify-content: space-between;
  /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  border-bottom: 1px solid #000; */
`;

export const HeaderTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;

`;

export const HeaderUserContainer = styled.div`
    padding: 0.25rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderUserLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  background: blueviolet;
  color: #fff;
  font-weight: 600;
  margin:0.35rem 0.25rem;
  border-radius: 0.25rem;
`;