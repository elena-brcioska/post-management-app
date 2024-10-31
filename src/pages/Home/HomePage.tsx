import { Box, CircularProgress, Typography } from '@mui/material';
import AppContent from '../../layout/AppContent/AppContent';
import PostsWrapper from '../../components/posts/PostsWrapper';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../endpoints/posts';
import ActionBar from '../../components/UI/ActionBar/ActionBar';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const HomePage = () => {

  console.log("HomePage rendered");

  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(searchValue);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [ascending, setAscending] = useState(false);

  const handleSort = useCallback((val: boolean) => {
    setAscending(val);
    console.log(ascending);
  }, [ascending]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  }, [setSearchValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const memoizedSetSelectedAuthor = useCallback((author: string) => {
    setSelectedAuthor(author);
  }, [setSelectedAuthor]);

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts", debouncedSearchValue, selectedAuthor],
    queryFn: () => fetchPosts(debouncedSearchValue, selectedAuthor),
    enabled: true,
  });

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="error">Error fetching posts</Typography>;

  return (
    <Box>
      <ActionBar
        handleSort={handleSort}
        setSelectedAuthor={memoizedSetSelectedAuthor}
        selectedAuthor={selectedAuthor}
        searchValue={searchValue}
        setValue={handleSearchChange}
      />
      <AppContent>
        <PostsWrapper sortOrder={ascending} posts={posts} />
      </AppContent>
    </Box>
  );
};

export default HomePage;
