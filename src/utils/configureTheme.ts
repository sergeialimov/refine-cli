import { createTheme, Theme } from '@mui/material/styles';

import '@mui/x-data-grid/themeAugmentation';
import basierCircleMedium from '../assets/fonts/BasierCircle-Medium.woff2';
import basierCircleRegular from '../assets/fonts/BasierCircle-Regular.woff2';
import basierCircleSemiBold from '../assets/fonts/BasierCircle-SemiBold.woff2';

export const configureTheme = (): Theme => createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3F51F4', 700: '#2027C3' },
    secondary: { main: '#F1F3F5' },
    text: {
      primary: '#0A0A0A',
    },
  },
  components: {
    // MuiAppBar: {
    //   defaultProps: {
    //     color: 'inherit',
    //   },
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //       borderBottom: '1px solid rgba(10, 10, 10, 0.08)',
    //     },
    //   },
    // },
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       // background: '#fff',
    //     },
    //   },
    // },
    // MuiDrawer: {
    //   styleOverrides: {
    //     paper: {
    //       backgroundColor: '#F1F3F5',
    //     },
    //   },
    // },
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    //   styleOverrides: {},
    // },
    // MuiButton: {
    //   defaultProps: {},
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '8px',
    //       padding: '7px 14px 7px 12px',
    //       // fontWeight: 600,
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { color: 'primary' },
    //       style: {
    //         boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.075)',
    //         '&:hover': {
    //           boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.075)',
    //         },
    //       },
    //     },
    //   ],
    // },
    // MuiDataGrid: {
    //   styleOverrides: {
    //     root: {
    //       border: 'none',
    //       background: '#fff',
    //       '& .MuiDataGrid-columnHeaders': {
    //         background: '#fff',
    //       },
    //     },
    //     columnHeaderTitle: {
    //       color: '#7F828A',
    //     },
    //     cell: {
    //       '&:focus': {
    //         outline: 'none',
    //       },
    //     },
    //     columnHeaderTitleContainer: {
    //       '&:focus': {
    //         outline: 'none',
    //       },
    //     },
    //     columnHeaderDraggableContainer: {
    //       '&:focus': {
    //         outline: 'none',
    //       },
    //     },
    //     columnHeader: {
    //       '&:focus': {
    //         outline: 'none',
    //       },
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face: {
          font-family: 'Basier Circle';
          src: url('${ basierCircleRegular }') format('woff2');
          font-weight: 400;
          font-style: normal;
          fontDisplay: swap;
        }

        @font-face: {
          font-family: 'Basier Circle';
          src: url('${ basierCircleMedium }') format('woff2');
          font-weight: 500;
          font-style: normal;
          fontDisplay: swap;
        }

        @font-face: {
          font-family: 'Basier Circle';
          src: url('${ basierCircleSemiBold }') format('woff2');
          font-weight: 600;
          font-style: normal;
          fontDisplay: swap;
        }
      `,
    },
  },
  typography: {
    fontFamily: [ '"Basier Circle"', 'sans-serif' ].join(','),
    button: {
      textTransform: 'none',
    },
    h5: {
      fontWeight: 600,
    },
  },
});
