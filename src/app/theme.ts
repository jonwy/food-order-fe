import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        blue:{
            main: string;
        };

        gray: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        red: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
    }

    interface PaletteOptions {
        blue?: {
            main?: string;
        };
        gray?: {
            main?: string;
            dark?: string;
            light?: string;
            contrastText?: string;
        };
        red?: {
            main?: string;
            dark?: string;
            light?: string;
            contrastText?: string;
        }
    }
}

const theme = createTheme({
    palette: {
        red: {
            main: '#EA4335',
            dark: '#EA4335',
            light: '#ffa28a',
            contrastText: '#000000'
        },
        gray: {
            main: '#787885',
            dark: '#5b5b5b',
            light: '#b4b4bb',
            contrastText: '#000000'
        },
        blue: {
            main: '#f0f9f9'
        },
        primary: {
            main: '#00e696',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f0f9f9'
        }
    }
});

export default theme;