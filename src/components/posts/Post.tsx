import BaseCard from "../UI/BaseCard/BaseCard";
import { type FC } from "react";
import { PostObject } from "./PostsWrapper";
import { Link } from "react-router-dom";

type PostProps = {
  post: PostObject;
}

const Post: FC<PostProps> = ({post}) => {
  return <BaseCard>
    <h2>{post.title}</h2>
    <img src={post.image} alt="Random Image" />
    <p>{post.content}</p>
      <Link to={`/post/${post.id}`}>
      Read More
      </Link>
      </BaseCard>;
};

export default Post;