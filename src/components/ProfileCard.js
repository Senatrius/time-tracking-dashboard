import React from 'react';
import styled from 'styled-components/macro'

const Main = styled.div`
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.profileBackground};
`;

const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem 2rem;
`;

const ProfilePhoto = styled.img`
  width: 7rem;
  height: 7rem;
  border: .3rem solid white;
  border-radius: 50%;
  margin-right: 1.75rem;
`;

const ProfileInfo = styled.div``;

const Label = styled.span`
  font-size: ${({ theme }) => theme.mobileFontSizes.secondaryText};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.mobileFontSizes.name};
  font-weight: 300;
  color: white;
  margin: 0;
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