/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from '@emotion/styled';
import React from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

/**
 * The Page Interface used to render the settings page.
 */
interface SettingsPageData {
  // whether or not the settings page is ready to be seen.
  isReady: string
  someStuff: Promise<any>
}

/**
 * The following styles are cascaded for the whole application
 */
const StyledSettingsPage = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
`;

/**
 * This is the root node of the React Application.
 * @returns JSX.Element Returns the root node of the application.
 */
const SettingsPage = (): React.ReactElement => {
  const settingsData: SettingsPageData = useLoaderData() as SettingsPageData;

  return (<StyledSettingsPage>
    <h2>Settings</h2>
    <React.Suspense fallback={<p>Loading package location...</p>}>
    <Await
          resolve={settingsData.someStuff}
          errorElement={
            <p>Error loading package location!</p>
          }
        >
            <p>
              Your package is {settingsData.isReady}
            </p>
        </Await>
    </React.Suspense>
  </StyledSettingsPage>
  );
}

export const settingsPageLoader = async (req: any) => {
  console.log('req', req);
  const somePromise = new Promise(resolve => setTimeout(() => {
    console.log('Hello');
    resolve('Complete');
  }, 3000));
  return defer({ isReady: 'yes', someStuff: somePromise });
}

export default SettingsPage;
