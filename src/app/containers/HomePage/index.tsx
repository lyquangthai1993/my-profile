import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import { Features } from './Features';
import { Api } from '../../../utils/axios/api';
import { apiConfig } from '../../../utils/axios/api.config';

export function HomePage() {
  const api = new Api(apiConfig);
  useEffect(() => {
    api.post('test').then(r => {
      console.log(r);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate applicationecho some-text  > filename.txt homepage"
        />
      </Helmet>
      <NavBar className={'cra-bg-gray-200'} />
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}
