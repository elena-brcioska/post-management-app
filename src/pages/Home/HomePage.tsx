import { Box, CircularProgress, Typography } from '@mui/material';
import AppContent from '../../layout/AppContent/AppContent';
import PostsWrapper from '../../components/posts/PostsWrapper';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../endpoints/posts';
import ActionBar from '../../components/UI/ActionBar/ActionBar';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from '../../components/UI/Header/Header';
import { IPostObject } from '../../components/posts/types';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(searchValue);
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [ascending, setAscending] = useState<boolean>(false);

  const handleSort = useCallback((val: boolean) => {
    setAscending(val);
  }, []);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  }, []);

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
  }, []);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
} = useInfiniteQuery<{
    posts: IPostObject[];
    totalCount: number;
}>({
    queryKey: ['posts', debouncedSearchValue, selectedAuthor, ascending],
    queryFn: ({ pageParam = 1 }) => fetchPosts(debouncedSearchValue, selectedAuthor, pageParam as number, 5, ascending ? 'asc' : 'desc'),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
        const totalFetchedPosts = allPages.reduce((sum, page) => sum + (page.posts?.length || 0), 0);
        return totalFetchedPosts < lastPage.totalCount ? allPages.length + 1 : undefined;
    },
});

console.log(data)

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const posts = data?.pages?.flatMap((page) => page.posts) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

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
        <Header totalCount={totalCount} searchQuery={debouncedSearchValue} selectedAuthor={selectedAuthor} />
        <PostsWrapper sortOrder={ascending} posts={posts} />
        {hasNextPage && isFetchingNextPage && (<CircularProgress />)
        }
      </AppContent>
    </Box>
  );
};

export default HomePage;
