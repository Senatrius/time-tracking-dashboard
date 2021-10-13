import React from 'react';
import styled from 'styled-components/macro';
import timeData from '../data.json';

const Main = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
  background: ${({category, theme}) => {
    if(category === "Work") {
      return theme.colors.cardWork;
    } else if(category === "Play") {
      return theme.colors.cardPlay;
    } else if(category === "Study") {
      return theme.colors.cardStudy;
    } else if(category === "Exercise") {
      return theme.colors.cardExercise;
    } else if(category === "Social") {
      return theme.colors.cardSocial;
    } else if(category === "Self Care") {
      return theme.colors.cardCare;
    } else {
      return 'white';
    }
  }};
`;

const Icon = styled.img`
  position: absolute;
  width: 7.5rem;
  top: -1rem;
  right: 1.75rem;

  @media screen and (min-width: 767px) {
    width: 8rem;
    height: 8rem;
  }
`;

const ValueSection = styled.div`
  display: grid;
  grid-template-areas: 'label button'
                       'curr prev';
  position: relative;
  margin-top: 3.75rem;
  padding: 3.25rem 2.5rem 3.75rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 1.5rem;
  z-index: 2;
  gap: 1rem;

  @media screen and (min-width: 767px) {
    grid-template-areas: 'label button'
                         'curr .'
                         'prev .';
    gap: unset;
    padding: 3.25rem 3rem 3.75rem;
  }
`;

const Label = styled.h2`
  grid-area: label;
  align-self: center;
  justify-self: start;
  margin: 0;
  color: ${({ theme }) => theme.colors.regularText};
  font-size: ${({ theme }) => theme.mobileFontSizes.labels};
  font-weight: 500;

  @media screen and (min-width: 767px) {
    margin-bottom: 2.25rem;
  }
`;

const CurrentValue = styled.p`
  grid-area: curr;
  align-self: center;
  justify-self: start;
  margin: 0;
  color: ${({ theme }) => theme.colors.regularText};
  font-size: ${({ theme }) => theme.mobileFontSizes.values};

  @media screen and (min-width: 767px) {
    margin-bottom: 2.25rem;
  }
`;

const PreviousValue = styled.p`
  grid-area: prev;
  align-self: center;
  justify-self: end;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.mobileFontSizes.secondaryText};

  @media screen and (min-width: 767px) {
    justify-self: start;
  }
`;

const Button = styled.button`
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .25rem 0;
  border: none;
  background: transparent;
  align-self: center;
  justify-self: end;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    margin-bottom: 3.5rem;
  }
`;

const ButtonIcon = styled.img`
  transition: .1s ease;
  width: 2rem;
  &:hover, &:focus {
    filter: brightness(100);
  }
`;

const CategoryCard = props => {
  const getIcon = () => {
    if(props.category === "Work") {
      return 'images/icon-work.svg';
    } else if(props.category === "Play") {
      return 'images/icon-play.svg';
    } else if(props.category === "Study") {
      return 'images/icon-study.svg';
    } else if(props.category === "Exercise") {
      return 'images/icon-exercise.svg';
    } else if(props.category === "Social") {
      return 'images/icon-social.svg';
    } else if(props.category === "Self Care") {
      return 'images/icon-self-care.svg';
    } else {
      return '';
    }
  }

  const getTimeData = () => {
    let result = timeData.filter(object => {
      return object.title === props.category;
    });

    return result[0];
  }

  return (
    <Main category={props.category} time={props.time} timeQuery={props.timeQuery}>
      <Icon src={getIcon()} alt=""/>
      <ValueSection>
        <Label>{props.category}</Label>
        <CurrentValue>{getTimeData().timeframes[props.timeQuery].current}hrs</CurrentValue>
        <PreviousValue>Last {props.time} - {getTimeData().timeframes[props.timeQuery].previous}hrs</PreviousValue>
        <Button>
          <ButtonIcon src="images/icon-ellipsis.svg" alt=""/>
        </Button>
      </ValueSection>
    </Main>
  );
}

export default CategoryCard;