// src/components/Login.tsx
import {Fragment} from 'react';
import {Button} from '@mui/material';
import {logout} from "../services/api.ts";

const SignOut = () => {

  const handleLogout = async () => {
    await logout()
    // todo fix it later, there is no sense to reload if we manage state
    window.location.reload();
  }
  return (
    <Fragment>
      <Button
        variant="contained"
        onClick={handleLogout}
        fullWidth
      >
        Sign Out
      </Button>
    </Fragment>

  );
};

export default SignOut;
