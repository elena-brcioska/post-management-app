import { useEffect, useState, type FC } from "react";
import Post from "./Post";
import StyledPostsWrapper from "./styled/PostsWrapper.styled";
import { sortPostsByDate } from "../../util/sortByDate";
import { IPostObject, IPostsWrapperProps } from "./types";

const PostsWrapper: FC<IPostsWrapperProps> = ({ posts, sortOrder }) => {
  const [sortedPosts, setSortedPosts] = useState<IPostObject[]>([]);

  useEffect(() => {
    if (posts) {
      const sorted = sortPostsByDate(posts, sortOrder);
      setSortedPosts(sorted);
    }
  }, [posts, sortOrder]);

  return (
    <StyledPostsWrapper>
      <ul>
        {
          sortedPosts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))
        }
      </ul>
    </StyledPostsWrapper>
  );
};

export default PostsWrapper;
