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
                /**
                     *
                     * Resource is default with default paths, you need to add the components to the paths accordingly.
                     * You can also add custom paths to the resource.
                     *
                     * Use `<LoginList/>` component at `/login` path.
                     * Use `<LoginCreate/>` component at `/login/create` path.
                     * Use `<LoginEdit/>` component at `/login/edit/:id` path.
                     * Use `<LoginShow/>` component at `/login/show/:id` path.
                     *
                     **/
                  name: 'login',

                  list: '/login',
                  create: '/login/create',
                  edit: '/login/edit/:id',
                  show: '/login/show/:id',
                },
              ]}>

              <Routes>
                <Route index element={<WelcomePage />} />
                <Route index element={<LoginPage />} />
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
