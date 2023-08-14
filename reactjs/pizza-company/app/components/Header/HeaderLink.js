import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 10px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Nunito', Nunito, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
