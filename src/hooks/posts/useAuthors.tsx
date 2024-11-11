import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../endpoints/posts";
import { IPostObject } from "../../components/posts/types";

const useAuthors = () => {
    const { data, isLoading, isError } = useQuery<{
        posts: IPostObject[];
        totalCount: number;
    }>({
        queryKey: ["authors"],
        queryFn: () => fetchPosts(),
        staleTime: 1000 * 60 * 5,
        enabled: true,
    });    

    const authors: string[] = data?.posts 
        ? Array.from(new Set(data.posts.map((post) => post.author))) 
        : [];

    return { authors, isLoading, isError };
};

export default useAuthors;
