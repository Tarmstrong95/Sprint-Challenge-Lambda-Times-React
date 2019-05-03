import React from 'react';
import {MainTopBar, 
  TopBarContainer, 
  ContainerLeft,
  ContainerSpanLeft, 
  ContainerCenter,
  ContainerSpanCenter,
  ContainerRight,
  ContainerSpanRight
} from './StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <MainTopBar >
      <TopBarContainer >
        <ContainerLeft >
          <ContainerSpanLeft>TOPICS</ContainerSpanLeft><ContainerSpanLeft>SEARCH</ContainerSpanLeft>
        </ContainerLeft>
        <ContainerCenter >
          <ContainerSpanCenter>GENERAL</ContainerSpanCenter>
          <ContainerSpanCenter>BROWNBAG</ContainerSpanCenter>
          <ContainerSpanCenter>RANDOM</ContainerSpanCenter>
          <ContainerSpanCenter>MUSIC</ContainerSpanCenter>
          <ContainerSpanCenter>ANNOUNCEMENTS</ContainerSpanCenter>
        </ContainerCenter>
        <ContainerRight >
          <ContainerSpanRight>LOG IN</ContainerSpanRight>
        </ContainerRight>
      </TopBarContainer>
    </MainTopBar>
  )
}

export default TopBar;