import { FC } from "react";
import Post from "./Post";
import StyledPostsWrapper from "./styled/PostsWrapper.styled";

export type PostObject = {
    id: number;
    title: string;
    content: string;
    author: string;
    image: string;
    date: string;
  }

  type PostsWrapperProps = {
    posts: PostObject[]
  }

const PostsWrapper: FC<PostsWrapperProps> = ({posts}) => {
    
    return <StyledPostsWrapper>
        <ul>
        {
            posts.map((post) => <li key={post.id}><Post post={post} /></li>)
        }
        </ul>

    </StyledPostsWrapper>;
};

export default PostsWrapper;