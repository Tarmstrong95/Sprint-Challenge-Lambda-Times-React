import React from 'react';
import {MainHeader, Date, Temp, HeaderH1} from './StyledComponents'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <MainHeader className="header">
      <Date className="date">SMARCH 32, 2018</Date>
      <HeaderH1>Lambda Times</HeaderH1>
      <Temp className="temp">98°</Temp>
    </MainHeader>
  )
}

export default Header