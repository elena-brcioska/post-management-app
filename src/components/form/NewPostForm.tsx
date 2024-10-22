import { Box, Button, TextField } from "@mui/material";
import StyledForm from "./styled/Form.styled.tsx";

const NewPostForm = () => {
    return (<StyledForm>

        <TextField color="primary" id="outlined-basic" label="Title" variant="outlined" helperText="Helper text" />

        <TextField color="primary" id="outlined-basic" label="Description" variant="outlined" helperText="Helper text" />

        <TextField color="primary" id="outlined-basic" label="Image URL" variant="outlined" helperText="Helper text" />

        <TextField
            id="outlined-multiline-advanced"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            maxRows={8}
            placeholder="Enter a detailed description here"
            helperText="Max 500 characters."
            fullWidth
        />

        <Box>
        <Button variant="contained">Add Post</Button>
        </Box>


    </StyledForm>);
};

export default NewPostForm;