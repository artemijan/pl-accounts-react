// src/components/Login.tsx
import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from '@mui/material';
import {login} from '../services/api';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      onLogin(); // Call the onLogin function after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{textAlign: 'center'}}>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box mt={2}>
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
