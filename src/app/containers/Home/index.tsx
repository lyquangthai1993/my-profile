/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectHome } from './selectors';
import { homeSaga } from './saga';
import ContactFrom from '../../components/ContactForm';
import ContentBlock from '../../components/ContentBlock';
import MiddleBlock from '../../components/MiddleBlock';
import Container from '../../common/Container';
import ScrollToTop from '../../common/ScrollToTop';

// content
import Introduction from '../../content/introduction.json';
import FirstBlock from '../../content/firstBlock.json';
import SecondBlock from '../../content/secondBlock.json';
import ThirdBlock from '../../content/thirdBlock.json';
import FourthBlock from '../../content/fourthBlock.json';
import ContactBlock from '../../content/contactBlock.json';

interface Props {}

export const Home = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          icon="developer.svg"
        />
        <MiddleBlock
          last={false}
          id={''}
          title={FirstBlock.title}
          content={FirstBlock.text}
          button={FirstBlock.button}
        />
        <ContentBlock
          type="left"
          title={SecondBlock.title}
          content={SecondBlock.text}
          section={SecondBlock.section}
          icon="graphs.svg"
        />
        <ContentBlock
          type="right"
          title={ThirdBlock.title}
          content={ThirdBlock.text}
          icon="product-launch.svg"
        />
        <ContentBlock
          type="left"
          title={FourthBlock.title}
          content={FourthBlock.text}
          icon="waving.svg"
        />
        <ContactFrom
          id={'contact-form'}
          title={ContactBlock.title}
          content={ContactBlock.text}
        />
      </Container>
    </>
  );
});

const Div = styled.div``;
