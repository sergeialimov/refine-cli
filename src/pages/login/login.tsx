import * as React from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const LoginPage: React.FC= (props): JSX.Element => {
  const handleSubmit = (): void => {};
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style = {{
            marginBottom: '20px',
            fontFamily: 'Basier Circle',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            letterSpacing: '-0.01em',
            color: '#0A0A0A',
          }}>
          Sign in to your account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate sx={{ mt: 1 }}
          style = {{ marginTop: '20px' }}
        >
          <div
            style = {{
              'fontStyle': 'normal',
              'fontWeight': '600',
              'fontSize': '16px',
              'lineHeight': '20px',
              'display': 'flex',
              'alignItems': 'center',
              'color': '#0A0A0A',
              marginBottom: '4px',
            }}
          >
            Email Address
          </div>
          <TextField
            // margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <p>Password</p>
          <TextField
            // margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="#" variant="body2">
            {'Create an account'}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
