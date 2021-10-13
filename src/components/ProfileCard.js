import React from 'react';
import styled from 'styled-components/macro'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};

  @media screen and (min-width: 767px) {
    grid-row: 1 / -1;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.profileBackground};

  @media screen and (min-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
`;

const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem 2rem;

  @media screen and (min-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 3rem .5rem;
  }
`;

const ProfilePhoto = styled.img`
  width: 7rem;
  height: 7rem;
  border: .3rem solid white;
  border-radius: 50%;
  margin-right: 1.75rem;

  @media screen and (min-width: 767px) {
    width: 8.5rem;
    height: 8.5rem;
    margin-right: unset;
    margin-bottom: 4.25rem;
  }
`;

const ProfileInfo = styled.div``;

const Label = styled.span`
  font-size: ${({ theme }) => theme.mobileFontSizes.secondaryText};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 1rem;

  @media screen and (min-width: 767px) {
    margin-bottom: 1.25rem;
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.mobileFontSizes.name};
  font-weight: 300;
  color: white;
  margin: 0;

  @media screen and (min-width: 767px) {
    font-size: ${({ theme }) => theme.desktopFontSizes.name};
    max-width: 6ch;
  }
`;

const ProfileCard = props => {
  return (
    <Main>
      <ProfileSection>
        <ProfilePhoto src="images/image-jeremy.png" alt="" />
        <ProfileInfo>
          <Label>Report for</Label>
          <Name>Jeremy Robson</Name>
        </ProfileInfo>
      </ProfileSection>
      <NavigationSection>
        {props.children}
      </NavigationSection>
    </Main>
  );
}

export default ProfileCard;