import { Outlet } from "react-router-dom";
import Navbar from "../../components/UI/Navigation/styled/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme/theme";
import { Box, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


const queryClient = new QueryClient();

const AppLayout = () => {
  return (
  <ThemeProvider theme={theme}> 
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      
        <Navbar />
        <Box sx={{marginTop: "4rem"}}>
        <Outlet />
        </Box>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </ThemeProvider>
  );
};

export default AppLayout;