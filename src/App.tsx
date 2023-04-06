import { CssBaseline, GlobalStyles } from '@mui/material';
import {
  Refine,
  WelcomePage,
  // Authenticated,
} from '@refinedev/core';
import dataProvider, { GraphQLClient } from '@refinedev/graphql';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import  {
  AuthPage,
  // ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
} from '@refinedev/mui';
import routerBindings, { UnsavedChangesNotifier } from '@refinedev/react-router-v6'; // NavigateToResource, CatchAllNavigate,
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Outlet

// import { Header } from './components/header';

const API_URL = 'https://your-graphql-url/graphql';

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

const loginResource = {
  name: 'login',
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
};

function App (): JSX.Element {

  return (
    <BrowserRouter>
      <RefineKbarProvider>
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
            resources={[ loginResource ]}>

            <Routes>
              <Route path="auth/login" element={<AuthPage />} />
              <Route index element={<WelcomePage />} />
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
          </Refine>
        </RefineSnackbarProvider>

      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export { App };
