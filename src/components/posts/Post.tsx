import BaseCard from "../UI/BaseCard/BaseCard";
import { Link } from "react-router-dom";
import { type FC } from "react";
import { type IPostProps } from "./types";

const Post: FC<IPostProps> = ({post}) => {
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