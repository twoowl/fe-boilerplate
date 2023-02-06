import styled from '@emotion/styled';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/**
 * The following styles are cascaded for the whole application
 */
const StyledApp = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
`;

/**
 * This is the root node of the React Application.
 * @returns React.ReactElement Returns the root node of the application.
 */
const App = (): React.ReactElement => (
  <StyledApp>
    <h1>Boilerplate</h1>
    <Link to="home">Home</Link>
    <br />
    <Link to="settings">Settings</Link>
    <Outlet />
  </StyledApp>
);

export default App;
