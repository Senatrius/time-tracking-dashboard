import React, {useState} from 'react';
import styled from 'styled-components/macro';
import ProfileCard from './ProfileCard';
import CategoryCard from './CategoryCard';

const CardGrid = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2.4rem;

  @media screen and (min-width: 767px) {
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const DataToggle = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  color: ${({active, theme}) => active ? theme.colors.regularText : theme.colors.inactiveText};
  font-size: ${({theme}) => theme.mobileFontSizes.labels};
  cursor: pointer;
  transition: .1s ease;

  &:hover, &:focus {
    color: ${({theme}) => theme.colors.secondaryText};
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 2.5rem;
  }
`;

const toggleButtons = [
  {value: "Day", title: "Daily", active: false},
  {value: "Week", title: "Weekly", active: true},
  {value: "Month", title: "Monthly", active: false}
]

const Grid = () => {
  const [active, setActive] = useState(toggleButtons[1]);
  const [timeQuery, setTimeQuery] = useState('weekly');

  const handleClick = item => {
    toggleButtons.forEach(btn => {
      btn.active = false;
    })
    item.active = true;

    setActive(item);
    setTimeQuery(item.title.toLowerCase());
  }

  return (
    <CardGrid>
      <ProfileCard>
        {toggleButtons.map((button, idx) => (
          <DataToggle key={idx} value={button.value} active={button.active} onClick={() => handleClick(button)}>{button.title}</DataToggle>
        ))}
      </ProfileCard>
      <CategoryCard category="Work" time={active.value} timeQuery={timeQuery}/>
      <CategoryCard category="Play" time={active.value} timeQuery={timeQuery}/>
      <CategoryCard category="Study" time={active.value} timeQuery={timeQuery}/>
      <CategoryCard category="Exercise" time={active.value} timeQuery={timeQuery}/>
      <CategoryCard category="Social" time={active.value} timeQuery={timeQuery}/>
      <CategoryCard category="Self Care" time={active.value} timeQuery={timeQuery}/>
    </CardGrid>
  );
}

export default Grid;