import React from 'react';
import { MainHeader, Date, Temp, HeaderH1 } from './StyledComponents'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <MainHeader >
      <Date >SMARCH 32, 2018</Date>
      <HeaderH1>Lambda Times</HeaderH1>
      <Temp >98°</Temp>
    </MainHeader>
  )
}

export default Header