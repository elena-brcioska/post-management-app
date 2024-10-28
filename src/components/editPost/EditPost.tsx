import { type FC, FormEvent, useEffect, useRef, useState } from "react";
import StyledForm from "../form/styled/Form.styled";
import { Box, Button, TextField } from "@mui/material";
import CustomModal, { ModalHandle } from "../UI/Modal/CustomModal";
import { PostObject } from "../posts/PostsWrapper";

type EditPostProps = {
    onDone: () => void;
    onSave: (updatedPost: PostObject) => void;
    post: PostObject;
}

const EditPost: FC<EditPostProps> = ({ onDone, onSave, post }) => {
    const modalRef = useRef<ModalHandle>(null);

    const [formData, setFormData] = useState<PostObject>(post);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.open();
        }

        setFormData(post);
    }, [post]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const editedPost = {
            id: post.id,
            title: formData.title,
            content: formData.content,
            author: formData.author,
            image: formData.image,
            date: post.date
        }

        onSave(editedPost);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <CustomModal ref={modalRef} onClose={onDone}>
            <StyledForm onSubmit={handleSubmit}>
                <TextField 
                    name="title" 
                    id="title" 
                    color="primary" 
                    label="Title" 
                    variant="outlined" 
                    value={formData.title}
                    onChange={handleChange}
                />
                <TextField 
                    name="image" 
                    id="image" 
                    color="primary" 
                    label="Image URL" 
                    variant="outlined" 
                    value={formData.image}
                    onChange={handleChange}
                />
                <TextField
                    name="description"
                    id="description"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Enter a detailed description here"
                    helperText="Max 500 characters."
                    fullWidth
                    value={formData.content}
                    onChange={handleChange}
                />
                <TextField 
                    name="author" 
                    id="author" 
                    color="primary" 
                    label="Author" 
                    variant="outlined" 
                    value={formData.author}
                    onChange={handleChange}
                />
                <Box>
                    <Button type="submit" variant="contained">Save</Button>
                </Box>
            </StyledForm>
        </CustomModal>
    );
};

export default EditPost;
