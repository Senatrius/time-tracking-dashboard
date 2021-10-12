import React from 'react';
import styled from 'styled-components/macro';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin: 0 auto;
  padding: 8rem 0;
  width: 87.5%;
  max-width: 111rem;
  min-height: 100vh;
`;

const Container = props => {
  return (
    <PageContainer>
      {props.children}
    </PageContainer>
  )
}

export default Container;