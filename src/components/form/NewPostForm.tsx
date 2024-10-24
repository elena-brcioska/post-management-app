import { Box, Button, TextField } from "@mui/material";
import StyledForm from "./styled/Form.styled.tsx";
import { useMutation } from "@tanstack/react-query";
import api from '../../api/api.ts'
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

type NewPost = {
    id: number | null;
    title: string | null;
    content: string | null;
    author: string | null;
    image: string | null;
    date: string | null;
}


const createNewPost = async (newPost: NewPost) => {
    const response = await api.post("/posts", newPost, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.data;
}

const NewPostForm = () => {

    const ref = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const mutation = useMutation<NewPost, unknown, NewPost>({
        mutationFn: (newPost) => createNewPost(newPost),
        onSuccess: (data) => {
            console.log("success", data)

            ref?.current?.reset();
            navigate("/");
        },
    })

    const onSubmitHandle = (e: FormEvent) => {
        console.log("SUBMITTING");

        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const newPost = {
            title: formData.get("title") as string,
            image: formData.get("image") as string,
            content: formData.get("description") as string,
            author: formData.get("author") as string,
            date: new Date().toISOString().slice(0, 10),
            id: Date.now(),
        }

        mutation.mutate(newPost)


    }

    return (
        <StyledForm ref={ref} onSubmit={onSubmitHandle}>

            <TextField name="title" id="title" color="primary" label="Title" variant="outlined" />

            <TextField name="image" id="image" color="primary" label="Image URL" variant="outlined" />


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
            />

            <TextField name="author" id="author" color="primary" label="Author" variant="outlined" />



            <Box>
                <Button type="submit" variant="contained">Add Post</Button>
            </Box>


        </StyledForm>);
};

export default NewPostForm;