import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#419197",
            dark: "#04364A",
            light: "#DAFFFB"

        },
        secondary: {
            main: "#686D76",
            dark: "#45474B",
            light: "#EEEEEE",
            contrastText: "#F5F5F7"
        },

        background: {
         paper: "#F5F7F8",
         default: "#F5F7F8"   
        }
    },

    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "4rem",
            fontFamily: "Arial",
            textTransform: "uppercase",
            color: "#686D76!important",
            padding: "2rem"
        }

    },
    shape : {
        borderRadius: 18
    }
}
)