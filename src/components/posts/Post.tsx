import { Button } from "@mui/material";
import BaseCard from "../UI/BaseCard/BaseCard";
import { type FC } from "react";
import { PostObject } from "./PostsWrapper";

type PostProps = {
  post: PostObject;
}

const Post: FC<PostProps> = ({post}) => {
  return <BaseCard>
    <h2>{post.title}</h2>
    <img src={post.image} alt="Random Image" />
    <p>{post.content}</p>
    <Button variant='contained'>Read More</Button>
      </BaseCard>;
};

export default Post;