import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import SinglePost from "../../components/posts/SinglePost";
import AppContent from "../../layout/AppContent/AppContent";
import EditPost from "../../components/editPost/EditPost";
import { useState } from "react";
import { editPost, fetchPost } from "../../endpoints/posts";
import { PostObject } from "../../components/posts/PostsWrapper";

const PostDetails = () => {
    const { id } = useParams();
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const client = useQueryClient()

    const handleEditPost = () => {
        setIsEdit(true);
    };

    const handleCloseEdit = () => {
        setIsEdit(false);
    };

    const { data: post, isLoading, isError } = useQuery<PostObject>({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id!),
        enabled: !!id,
    });

    const onEdit = useMutation({
        mutationFn: (updatedPost: PostObject) => editPost(id!, updatedPost),
        onSuccess: () => {
            handleCloseEdit()
            client.invalidateQueries({ queryKey: ["post", id] })
        } 

    });

    const onSave = (updatedPost: PostObject) => {
        onEdit.mutate(updatedPost);
    };

    if (isLoading) return <CircularProgress />;

    if (isError) return <h2>No post found</h2>

    return (
        <AppContent>
            {isEdit && post && (
                <EditPost post={post} onSave={onSave} onDone={handleCloseEdit} />
            )}
            {post && <SinglePost editPost={handleEditPost} post={post} />}
        </AppContent>
    );
};

export default PostDetails;
