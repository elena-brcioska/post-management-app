import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#4A9D91",
            dark: "#0B3B3A",
            light: "#B2EBE9",
        },
        secondary: {
            main: "#7B7F87",
            dark: "#55575B",
            light: "#F0F0F0",
            contrastText: "#FFFFFF",
        },
        background: {
            paper: "#FAFAFA",
            default: "#F5F7F8",
        },
        text: {
            primary: "#333333",
            secondary: "#686D76",
        },
    },

    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "4rem",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            color: "#4A9D91",
            padding: "2rem",
        },
        h2: {
            fontSize: "3rem",
            color: "#4A9D91",
            marginBottom: "1rem",
        },
        body1: {
            color: "#686D76",
            lineHeight: 1.6,
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 18,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                    padding: "0.5rem 1.5rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    '&:hover': {
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
            },
        },
    },
});
