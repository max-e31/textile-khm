import React from 'react';

import Wrapper from './Wrapper';
import Button from '../Button';

function Pagination({previousUrl, nextUrl, isFirst = false, isLast = false}) {
  return (
    <Wrapper>
      {!isFirst &&
        <Button to={previousUrl}>&larr; Предыдущая страница</Button>
      }
      {!isLast &&
        <Button to={nextUrl}>Следущая страница &rarr;</Button>
      }
    </Wrapper>
  );
}

export default Pagination;