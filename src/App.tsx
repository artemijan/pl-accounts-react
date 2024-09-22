import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {AuthProvider, Router, SignInPage} from '@toolpad/core';
import {NAVIGATION} from "./navigationSchema.tsx";
import demoTheme from "./theme.ts"
import {useEffect, useMemo, useState} from "react";
import {getUserInfo, login} from "./services/api.ts";
import SignOut from "./components/SignOut.tsx";

function DemoPageContent({pathname}: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const {window} = props;

  const [pathname, setPathname] = useState('/dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const signIn: (provider: AuthProvider, formData: FormData) => void = async (_: AuthProvider, formData: FormData) => {
    const username = formData?.get('email')?.toString();
    const password = formData?.get('password')?.toString();

    if (username && password) {
      setIsLoading(true);
      return login(username, password)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(() => {
          return {
            type: 'CredentialsSignin',
            error: 'Invalid credentials.'
          };
        }).finally(() => {
          setIsLoading(false);
        })
    }
    return Promise.reject({
      type: 'CredentialsSignin',
      error: 'Please provide credentials.'
    });
  };
  // Function to check if the user is logged in
  const checkIfLoggedIn = async () => {
    try {
      await getUserInfo(); // Make the GET /auth/userinfo call
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };
  // Call checkIfLoggedIn when the component mounts
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: 'PIS',
      }}
      router={router}
      loading={isLoading}
      theme={demoTheme}
      window={demoWindow}
    >
      {
        !isLoggedIn ?
          <SignInPage
            signIn={signIn}
            slotProps={{
              emailField: {type: 'text', label: 'Username'},
            }}
            providers={[{id: 'credentials', name: 'Email and Password'}]}
          /> :
          <DashboardLayout slots={{toolbarActions: SignOut}}>
            <DemoPageContent pathname={pathname}/>
          </DashboardLayout>
      }

    </AppProvider>
    // preview-end
  );
}
