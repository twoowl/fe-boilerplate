import styled from '@emotion/styled';
import React from 'react';

/**
 * The following styles are cascaded for the whole application
 */
const StyledApp = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
`;

/**
 * This is the root node of the React Application.
 * @returns JSX.Element Returns the root node of the application.
 */
const ErrorPage = (): React.ReactElement => (
  <StyledApp>
    <h2>Oops</h2>
  </StyledApp>
);

export default ErrorPage;
