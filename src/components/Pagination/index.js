import React from 'react';

import Wrapper from './Wrapper';
import Button from '../Button';

function Pagination({previousUrl, nextUrl, isFirst = false, isLast = false}) {
  return (
    <Wrapper>
      {!isFirst &&
        <Button to={previousUrl}>&larr; Предыдущие страницы</Button>
      }
      {!isLast &&
        <Button to={nextUrl}>Следущие страницы &rarr;</Button>
      }
    </Wrapper>
  );
}

export default Pagination;