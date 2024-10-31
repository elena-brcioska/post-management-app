import {  Box, Button } from "@mui/material";
import Modal, { ModalHandle } from "../UI/Modal/CustomModal";
import { useEffect, useRef, type FC } from "react";
import StyledDeleteDialog from "./styled/DeleteDialog.styled";
import { type IDeleteDialog } from "./types";


const DeleteDialog: FC<IDeleteDialog> = ({onClose, onDelete}) => {

    const deleteDialogRef = useRef<ModalHandle>(null);

    useEffect(() => {

        if(deleteDialogRef.current) {
            deleteDialogRef.current.open()
        }

    })


  return (
  <Modal ref={deleteDialogRef} onClose={onClose}>
    <StyledDeleteDialog >
    <p>Are you sure you want to delete this post?</p>
    <Box className="action-buttons">
    <Button onClick={onClose} color="secondary">Close</Button>
    <Button onClick={onDelete} color="error" variant="outlined">Delete</Button>

    </Box>

    </StyledDeleteDialog>
  </Modal>
  );
};

export default DeleteDialog;