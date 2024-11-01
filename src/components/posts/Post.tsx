import BaseCard from "../UI/BaseCard/BaseCard";
import { Link } from "react-router-dom";
import { type FC } from "react";
import { type IPostProps } from "./types";
import { Box } from "@mui/material";
import StyledPost from "./styled/Post.styled";
import { formatDate } from "../../util/formtDate";

const Post: FC<IPostProps> = ({post}) => {

  console.log(post, "POST");

  return <BaseCard>
  <StyledPost>
    <h2>{post.title}</h2>

    <img src={post.image} alt="Random Image" />
    <p>{post.content}</p>
    <Box>
      <p>Author: {post.author}</p>
      <p>date: {formatDate(post.date)}</p>
    </Box>
      <Link to={`/post/${post.id}`}>
      Read More
      </Link>
      </StyledPost>
      </BaseCard>;
};

export default Post;