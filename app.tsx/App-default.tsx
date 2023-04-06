import { CssBaseline, GlobalStyles } from '@mui/material';
import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
} from '@refinedev/core';
import dataProvider, { GraphQLClient } from '@refinedev/graphql';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import  {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayout,
} from '@refinedev/mui';
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier } from '@refinedev/react-router-v6';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import { Header } from './components/header';
import { ColorModeContextProvider } from './contexts/color-mode';

const API_URL = 'https://your-graphql-url/graphql';

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

function App () {

  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' }}} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={gqlDataProvider}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
              resources={[
                {
                  name: 'login',
                  apiUrl: 'https://your-api-url.com',
                  auth: {
                    login: {
                      endpoint: '/auth/login',
                      method: 'post',
                    },
                    logout: {
                      endpoint: '/auth/logout',
                      method: 'post',
                    },
                  },
                  routes: {
                    login: {
                      path: '/',
                      element: <AuthPage />,
                    },
                  },
                },
              ]}>

              <Routes>
                <Route index element={<WelcomePage />} />
                {/* <Route index element={<AuthPage />} /> */}
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
            </Refine>
          </RefineSnackbarProvider>

        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
