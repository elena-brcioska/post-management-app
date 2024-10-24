import BaseCard from "../../components/UI/BaseCard/BaseCard";
import AppContent from "../../layout/AppContent/AppContent";
import NewPostForm from "../../components/form/NewPostForm";
import { Typography } from "@mui/material";

const NewPost = () => {

return (<AppContent>

    <BaseCard>
    <Typography variant="h2">Add New Post</Typography>
    <NewPostForm />

    </BaseCard>
  </AppContent>)
};

export default NewPost;