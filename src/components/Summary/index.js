import React from 'react';

import FeaturedImage from '../FeaturedImage';
import H1 from '../H1';
import P from '../P';
import Wrapper from './Wrapper';
import Link from './Link';
import Date from './Date';
import ContinueReading from './ContinueReading';
import SocialLink from './SocialLink';

function Summary({date, title, excerpt, slug, image}) {
  return (
    <Wrapper>
        {image &&
          <Link to={slug}>
            <FeaturedImage sizes={image.childImageSharp.sizes}/>
          </Link>
        }
        <H1><Link to={slug}>{title}</Link></H1>
        <P>{excerpt}</P>
        <SocialLink href="tel:+380976661777" rel="noopener">
          Телефон для заказа: +380976661777
        </SocialLink>
        <ContinueReading to={slug}>Читать дальше&rarr;</ContinueReading>
    </Wrapper>
  );
}

export default Summary;