import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

    import { AuthPage,ErrorComponent
,notificationProvider
,RefineSnackbarProvider
,ThemedLayout} from '@refinedev/mui';

import dataProvider, { GraphQLClient } from "@refinedev/graphql";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";

const API_URL = "https://your-graphql-url/graphql";

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);




function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            <ColorModeContextProvider>
<CssBaseline />
<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
<RefineSnackbarProvider>
            <Refine dataProvider={gqlDataProvider}
notificationProvider={notificationProvider}
routerProvider={routerBindings} 
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >


                    <Routes>
                        <Route index element={<WelcomePage />} />
                    </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
            </Refine>
            </RefineSnackbarProvider>


</ColorModeContextProvider>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
