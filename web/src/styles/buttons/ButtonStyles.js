import { Link } from 'gatsby';
import styled from 'styled-components';
// import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  background: var(--secondary);
  border: 'none';
  color: #fff;
  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
