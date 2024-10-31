
import api from "../../api/api";
import { type INewPost } from "../../components/form/types";
import { type IPostObject } from "../../components/posts/types";

export const fetchPosts = async (searchQuery?: string, selectedAuthor?: string) => {
    const params: { [key: string]: string } = {};

    if (searchQuery) {
        params.title_like = searchQuery;
    }

    if (selectedAuthor) {
        params.author_like = selectedAuthor;
    }

    const response = await api.get("/posts", {
        params,
    });

    return response.data;
};

export const createNewPost = async (newPost: INewPost) => {
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

export const editPost = async (id: string, post: IPostObject) => {
    const response = await api.patch("/posts/" + id, post);
    return response.data;
}


export const deletePost = async (id: string) => {
    const response = await api.delete("/posts/" + id);
        return response.data
}


