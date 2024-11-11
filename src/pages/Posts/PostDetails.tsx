import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SinglePost from "../../components/posts/SinglePost";
import AppContent from "../../layout/AppContent/AppContent";
import EditPost from "../../components/posts/EditPost";
import { useState } from "react";
import { deletePost, editPost, fetchPost } from "../../endpoints/posts";
import { IPostObject } from "../../components/posts/types";
import Loading from "../../components/UI/Loading/Loading";

const PostDetails = () => {
    const { id } = useParams();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const navigate = useNavigate();

    const client = useQueryClient()

    const handleEditPost = () => {
        setIsEdit(true);
    };

    const handleCloseEdit = () => {
        setIsEdit(false);
    };

    const { data: post, isLoading, isError } = useQuery<IPostObject>({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id!),
        enabled: !!id,
    });

    const onEdit = useMutation({
        mutationFn: (updatedPost: IPostObject) => editPost(id!, updatedPost),
        mutationKey: ["edited-post"],
        onSuccess: () => {
            handleCloseEdit()
            client.invalidateQueries({ queryKey: ["post", id] })
        } 

    });

    const onDelete = useMutation<IPostObject, unknown>({
        mutationFn: () => deletePost(id!),
        mutationKey: ["delete-post"],
        onSuccess: () => {
            client.invalidateQueries({queryKey: ["posts"]});
            navigate("/")     
        }
    })

    const onSave = (updatedPost: IPostObject) => {
        onEdit.mutate(updatedPost);
    };

    const handleDeletePost = () => {

        onDelete.mutate()
    }   

    if (isLoading) return <Loading />;

    if (isError) return <h2>No post found</h2>

    return (
        <AppContent>
            {isEdit && post && (
                <EditPost post={post} onSave={onSave} onDone={handleCloseEdit} />
            )}
            {post && <SinglePost onDelete={handleDeletePost} editPost={handleEditPost} post={post} />}
        </AppContent>
    );
};

export default PostDetails;
