import { Box, Button, TextField } from "@mui/material";
import StyledForm from "./styled/Form.styled";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewPost } from "../../endpoints/posts/index";
import { IFormErrors, type INewPost } from "./types";
import { validateField } from "./util/validateField.ts";
const fieldNames = ["title", "image", "description", "author"] as const;

const NewPostForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const [errors, setErrors] = useState<IFormErrors>({});

    const mutation = useMutation<INewPost, unknown, INewPost>({
        mutationFn: (newPost) => createNewPost(newPost),
        mutationKey: ["new-post"],
        onSuccess: () => {
            ref?.current?.reset();
            navigate("/");
        },
    });

    const onFieldChange = (field: string, value: string) => {
        const error = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const onSubmitHandle = (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const newPost: INewPost = {
            title: formData.get("title") as string,
            image: formData.get("image") as string,
            content: formData.get("description") as string,
            author: formData.get("author") as string,
            date: new Date().toISOString().slice(0, 10),
            id: Date.now().toString(),
        };

        let hasError = false;

        fieldNames.forEach((field) => {
            const value = formData.get(field) as string;
            const error = validateField(field, value);
            setErrors((prev) => ({ ...prev, [field]: error }));
            if (error) hasError = true;
        });

        if (hasError) {
            console.log(errors);
            return;
        }

        mutation.mutate(newPost);
    };

    return (
        <StyledForm ref={ref} onSubmit={onSubmitHandle}>
            <TextField
                name="title"
                id="title"
                color="primary"
                label="Title"
                variant="outlined"
                onChange={(e) => onFieldChange("title", e.target.value)}
                error={!!errors.title}
                helperText={errors.title}
            />
            <TextField
                name="image"
                id="image"
                color="primary"
                label="Image URL"
                variant="outlined"
                onChange={(e) => onFieldChange("image", e.target.value)}
                error={!!errors.image}
                helperText={errors.image}
            />
            <TextField
            className="textbox"
                name="description"
                id="description"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Enter a detailed description here"
                fullWidth
                onChange={(e) => onFieldChange("description", e.target.value)}
                error={!!errors.description}
                helperText={errors.description}
            />
            <TextField 
            
                name="author"
                id="author"
                color="primary"
                label="Author"
                variant="outlined"
                onChange={(e) => onFieldChange("author", e.target.value)}
                error={!!errors.author}
                helperText={errors.author}
            />
            <Box>
                <Button type="submit" variant="contained">Add Post</Button>
            </Box>
        </StyledForm>
    );
};

export default NewPostForm;
