import { PostObject } from "../components/posts/PostsWrapper";

export const sortPostsByDate = (posts: PostObject[], sortOrder: boolean): PostObject[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder ? dateA - dateB : dateB - dateA;
  });
};
