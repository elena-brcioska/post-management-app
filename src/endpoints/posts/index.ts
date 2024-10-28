
import api from "../../api/api";
import { NewPost } from "../../components/form/NewPostForm";
import { PostObject } from "../../components/posts/PostsWrapper";

export const fetchPosts = async () => {
    const response = await api.get('/posts');    
    return response.data;

  }

export const createNewPost = async (newPost: NewPost) => {
    const response = await api.post("/posts", newPost, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.data;
}

export const fetchPost = async (id: string) => {
    const response = await api.get("/posts/" + id);
    return response.data;
};

export const editPost = async (postId: string, post: PostObject) => {
    const response = await api.patch("/posts/" + postId, post);
    return response.data;
}