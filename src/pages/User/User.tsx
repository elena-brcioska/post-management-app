import { Box, CircularProgress, Typography } from "@mui/material";
import BaseDrawer from "../../components/UI/Drawer/Drawer"
import AppContent from "../../layout/AppContent/AppContent";
import General from "../../components/user/screens/general/General";
import Education from "../../components/user/screens/education/Education";
import Contact from "../../components/user/screens/contact/Contact";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from '../../api/api'
import { User as IUser } from "./types";

const fetchUser = async (): Promise<IUser> => {
  const response = await api.get("/user");
  return response.data;
}

const User = () => {

  const [searchParams] = useSearchParams();

  const infoScreen = searchParams.get("info");

  const { data: user, isLoading } = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  })

  if (isLoading) return <CircularProgress />;
  if (!user) return <Typography color="error">Error fetching user</Typography>;

  return (
    <Box sx={{ display: "flex" }}>
      <BaseDrawer />
      <AppContent isUser={true}>

        {
          (infoScreen === "general" || infoScreen === null) && (<General user={user.general} userCard={user?.userCard} />)
        }

        {
          infoScreen === "contact" && (<Contact user={user.contact} />)
        }

        {
          infoScreen === "education" && (<Education user={user.education} />)
        }

      </AppContent>
    </Box>
  )
};

export default User;