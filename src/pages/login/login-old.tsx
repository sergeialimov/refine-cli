/* eslint-disable arrow-body-style */
import { IResourceComponentsProps } from '@refinedev/core';
import  { AuthPage } from '@refinedev/mui';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC<IResourceComponentsProps> = (props): JSX.Element => {
  return (
    <AuthPage
      type="login"
      forgotPasswordLink={false}
      rememberMe={false}
      registerLink={
        <div
          style={{
            marginTop: 5,
            padding: 5,
            // color: 'green',
            // color: '#4D63FD',
            width: '137px',
            height: '20px',
            fontFamily: 'Basier Circle',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            textAlign:'center',
            letterSpacing: '-0.1px',
            color: '#4D63FD !important',
            // 'flex':'none',
            // 'order':'0',
            // 'flexGrow':'0',
          }}
        >
          <Link to="/register">Create an account</Link>
        </div>
      }
    />
  )
};
