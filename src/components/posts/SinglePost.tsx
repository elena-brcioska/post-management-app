import { Box, Button, Typography } from "@mui/material";
import { useState, type FC } from "react";
import StyledSinglePost from "./styled/SinglePost.styled";
import DeleteDialog from "./DeleteDialog";
import { type ISinglePostProps } from "./types";


const SinglePost: FC<ISinglePostProps> = ({ post, editPost, onDelete }) => {

  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleOpenDeleteDialog = () => {
    setIsDelete(true)
  };

  const handleCloseDeleteDialog = () => {
    setIsDelete(false)
  }

  return (

    <StyledSinglePost>

      {
        isDelete && (<DeleteDialog onClose={handleCloseDeleteDialog} onDelete={onDelete} />)
      }
      {post.image && <img src={post.image} alt={post.title} />}
      <Box className="content">
        <Typography className="title">{post.title}</Typography>
        <Typography className="description">{post.content}</Typography>
        <Typography className="author">Author: {post.author}</Typography>
        <Box className="button-container">
          <Button onClick={() => editPost()} variant="contained" color="primary">
            Edit
          </Button>
          <Button onClick={() => handleOpenDeleteDialog()} variant="outlined" color="secondary">
            Delete
          </Button>
        </Box>
      </Box>
    </StyledSinglePost>
  );
};

export default SinglePost;