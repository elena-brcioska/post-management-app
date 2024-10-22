import { Box } from "@mui/material";
import BaseDrawer from "../../components/UI/Drawer/Drawer"
import AppContent from "../../layout/AppContent/AppContent";
import General from "../../components/user/screens/general/General";
import Education from "../../components/user/screens/education/Education";
import Contact from "../../components/user/screens/contact/Contact";
import { useSearchParams } from "react-router-dom";

const User = () => {

  const [searchParams] = useSearchParams();

  const infoScreen = searchParams.get("info")

  return (
    <Box sx={{ display: "flex" }}>
      <BaseDrawer />
      <AppContent isUser={true}>

        {
          (infoScreen === "general" || infoScreen === null) && (<General />)
        }

        {
          infoScreen === "contact" && (<Contact />)
        }

        {
          infoScreen === "education" && (<Education />)
        }

      </AppContent>
    </Box>
  )
};

export default User;