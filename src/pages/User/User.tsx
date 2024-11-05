import { Box, CircularProgress, Typography } from "@mui/material";
import BaseDrawer from "../../components/UI/Drawer/Drawer"
import AppContent from "../../layout/AppContent/AppContent";
import General from "../../components/user/screens/general/General";
import Education from "../../components/user/screens/education/Education";
import Contact from "../../components/user/screens/contact/Contact";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from '../../api/api'
import { type IUser } from "../../components/user/types";

type UpdateType = IUser;

const fetchUser = async (): Promise<IUser> => {
  const response = await api.get("/user");
  return response.data;
}

const updateUser = async ( update: IUser) => {
  const response = await api.put("/user/", update);
  return response.data;
}


const User = () => {

  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();
  const infoScreen = searchParams.get("info");
  const { data: user, isLoading } = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  })

 
  const mutation = useMutation<UpdateType, unknown, UpdateType>({
    mutationFn: updateUser,
    mutationKey: ["updated-user"],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["user"]});
    },
  });

  const onUpdate = (update: IUser) => {
    if (!user) return;

    mutation.mutate(update)
    
  };




  if (isLoading) return <CircularProgress />;
  if (!user) return <Typography color="error">Error fetching user</Typography>;

  return (
    <Box sx={{ display: "flex" }}>
      <BaseDrawer />
      <AppContent isUser={true}>

        {
          (infoScreen === "general" || infoScreen === null) && (<General onUpdate={onUpdate} user={user}/>)
        }

        {
          infoScreen === "contact" && (<Contact user={user} onUpdate={onUpdate} />)
        }

        {
          infoScreen === "education" && (<Education user={user} onUpdate={onUpdate} />)
        }

      </AppContent>
    </Box>
  )
};

export default User;