import {type FC } from "react";
import Post from "./Post";
import StyledPostsWrapper from "./styled/PostsWrapper.styled";
import { IPostsWrapperProps } from "./types";

const PostsWrapper: FC<IPostsWrapperProps> = ({ posts }) => {

  console.log(posts, "POST WRAPPER");
  

  return (
    <StyledPostsWrapper>
      <ul>
        {
          posts.map((post) => (
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
