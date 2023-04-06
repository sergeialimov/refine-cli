import  {
  AuthPage,
  // ErrorComponent,
  // notificationProvider,
  // RefineSnackbarProvider,
  // ThemedLayout,
} from '@refinedev/mui';
import { GraphQLClient } from 'graphql-request';

// import { AuthPage, LoginPage } from './pages';

const client = new GraphQLClient('https://your-graphql-url/graphql');

const gqlDataProvider = (type: string, resource: string, params?: any) => {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  const query = `query {
    ${resource} {
      items(pagination: { page: ${page}, perPage: ${perPage}}, sort: { field: "${field}", order: "${order}"}) {
        id
        // your resource fields here
      }
      total
    }
  }`;

  return client.request(query);
};

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
      element: <LoginPage />,
    },
  },
};

function App () {
  return (
    <Refine
      dataProvider={gqlDataProvider}
      resources={[ loginResource ]}
    >
      <Routes>
        <Route index element={<AuthPage />} />
      </Routes>
    </Refine>
  );
}

export default App;
