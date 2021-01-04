import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      //padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Ubuntu', sans-serif;
    color: #0a1f44;
    font-size: 2.575rem;
    line-height: 3.0625rem;

    @media only screen and (max-width: 414px) {
      font-size: 1.625rem;
    }
  }

  p {
    color: #343D48;
    font-size: 1.125rem;
  }

  h1 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    outline: none;
    color: #2E186A;

    :hover {
      color: rgb(255, 130, 92);
    }
  }

  *:focus {
    outline: none;
  }

  .about-block-image svg {
    text-align: center;
  }

  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1.25rem 2rem 1.25rem 2.5rem;
  }

  .ant-select-selector {
    background-color: #FCFCFD !important;
    border: none !important;
  }

  .anticon.ant-notification-notice-icon-success {
    color: rgb(255, 130, 92);
  }

  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
`;
