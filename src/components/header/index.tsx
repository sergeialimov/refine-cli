import React from 'react'; // { useContext }

import { LightModeOutlined, Menu } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Avatar,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useGetIdentity } from '@refinedev/core';
import { RefineThemedLayoutHeaderProps } from '@refinedev/mui';

// import { ColorModeContext } from '../../contexts/color-mode';

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export const Header: React.FC<RefineThemedLayoutHeaderProps> = ({
  isSiderOpen,
  onToggleSiderClick,
  toggleSiderIcon: toggleSiderIconFromProps,
}) => {

  const { data: user } = useGetIdentity<IUser>();

  const hasSidebarToggle = Boolean(onToggleSiderClick);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {hasSidebarToggle && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={(): void => onToggleSiderClick?.()}
              edge="start"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                ...(isSiderOpen && { display: 'none' }),
              }}
            >
              {toggleSiderIconFromProps?.(
                Boolean(isSiderOpen),
              ) ?? <Menu />}
            </IconButton>
          )}

          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              color="inherit"
              onClick={(): void => {
                // setMode();
              }}
            >
              <LightModeOutlined />
            </IconButton>

            {(user?.avatar || user?.name) && (
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="center"
              >
                {user?.name && (
                  <Typography variant="subtitle2">
                    {user?.name}
                  </Typography>
                )}
                <Avatar src={user?.avatar} alt={user?.name} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
