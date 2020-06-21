import React from 'react';
import styled from 'styled-components';

import H2 from '../components/H2';

const Wrapper = styled.div`
  text-align: center;
`;

function NotFound() {
  return (
    <Wrapper>
      <H2>Страница не найдена</H2>
    </Wrapper>
  );
}

export default NotFound;