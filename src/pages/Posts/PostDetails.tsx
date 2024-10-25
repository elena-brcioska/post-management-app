import { useParams } from "react-router-dom";
import api from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import SinglePost from "../../components/posts/SinglePost";
import AppContent from "../../layout/AppContent/AppContent";

const fetchPost = async (id: string) => {
  const response = await api.get("/posts/" + id);
  return response.data;
};

const PostDetails = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id!),
    enabled: !!id,
    placeholderData: true,
  });

  if (isLoading) return <CircularProgress />;


  return (
    <AppContent>
      <SinglePost post={post} />
    </AppContent>
  );
};

export default PostDetails;
