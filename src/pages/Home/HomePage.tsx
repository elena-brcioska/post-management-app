import { Box, CircularProgress, Typography } from '@mui/material';
import FiltersContainer from '../../components/filters/FiltersContainer';
import AppContent from '../../layout/AppContent/AppContent';
import PostsWrapper from '../../components/posts/PostsWrapper';
import { useQuery } from '@tanstack/react-query';
import api from '../../api/api'

const HomePage = () => {

  const fetchFn = async () => {
    const response = await api.get('/posts');    
    return response.data;

  }

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchFn(),
  })

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="error">Error fetching posts</Typography>;

  return (
    <Box>
      <FiltersContainer />

      <AppContent>
        <PostsWrapper posts={posts} />
      </AppContent>
    </Box>
  );
};

export default HomePage;