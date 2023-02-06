import styled from '@emotion/styled';
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

/**
 * The following styles are cascaded for the whole application
 */
const StyledApp = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  
  a.active {
    color: red;
  }
`;

/**
 * This is the root node of the React Application.
 * @returns React.ReactElement Returns the root node of the application.
 */
const App = (): React.ReactElement => (
  <StyledApp>
    <h1>Boilerplate</h1>
    <NavLink to="home">Home</NavLink>
    <br />
    <NavLink to="settings">Settings</NavLink>
    <Outlet />
  </StyledApp>
);

export default App;
