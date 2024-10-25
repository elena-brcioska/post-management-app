import { Box, CircularProgress, Typography } from "@mui/material";
import BaseDrawer from "../../components/UI/Drawer/Drawer"
import AppContent from "../../layout/AppContent/AppContent";
import General from "../../components/user/screens/general/General";
import Education from "../../components/user/screens/education/Education";
import Contact from "../../components/user/screens/contact/Contact";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from '../../api/api'
import { Education as IEducation, Contact as IContact, General as IGeneral, User as IUser, UserCard as IUserCard } from "./types";

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
    mutationFn: (update) => updateUser(update),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["user"]});
    },
  });

  const onUpdate = (update: IGeneral | IContact | IEducation | IUserCard) => {
    if (!user) return;
  
    const newUser: IUser = {
      ...user,
      ...(update as IContact).phoneNumber !== undefined && { contact: { ...user.contact, ...update } },
      ...(update as IGeneral).birthDate !== undefined && { general: { ...user.general, ...update } },
      ...(update as IEducation).degree !== undefined && { education: { ...user.education, ...update } },
      ...(update as IUserCard).role !== undefined && { userCard: { ...user.userCard, ...update } },
    };

    console.log("new user", newUser);
    
  
    mutation.mutate(newUser);
  };




  if (isLoading) return <CircularProgress />;
  if (!user) return <Typography color="error">Error fetching user</Typography>;

  return (
    <Box sx={{ display: "flex" }}>
      <BaseDrawer />
      <AppContent isUser={true}>

        {
          (infoScreen === "general" || infoScreen === null) && (<General onUpdate={onUpdate} user={user.general} userCard={user.userCard}/>)
        }

        {
          infoScreen === "contact" && (<Contact user={user.contact} onUpdate={onUpdate} />)
        }

        {
          infoScreen === "education" && (<Education user={user.education} onUpdate={onUpdate} />)
        }

      </AppContent>
    </Box>
  )
};

export default User;