
import api from "../../api/api";
import { type INewPost } from "../../components/form/types";
import { type IPostObject } from "../../components/posts/types";

export const fetchPosts = async (
    searchQuery: string = '',
    selectedAuthor: string = '',
    page: number = 1,
    limit: number = 10,
    sortOrder: 'asc' | 'desc' = 'desc'
) => {
    const params: { [key: string]: string | number | undefined  } = {
        _page: page,
        _limit: limit,
        _sort: 'date',
        _order: sortOrder,
    };

    if (searchQuery) {
        params.title_like = searchQuery;
    }

    if (selectedAuthor) {
        params.author_like = selectedAuthor;
    }

    const response = await api.get("/posts", {
        params,
    });

    const totalCount = parseInt(response.headers["x-total-count"], 10);
    
    console.log('Response Data:', response.data);
    console.log('Total Count:', response.headers['x-total-count']);
    
    return {
        posts: response.data,
        totalCount,
    };
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


