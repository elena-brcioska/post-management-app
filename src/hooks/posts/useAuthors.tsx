import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../endpoints/posts";
import { IPostObject } from "../../components/posts/types";

const useAuthors = () => {

    console.log("useAuthors triggered");

    const { data, isLoading, isError } = useQuery<IPostObject[]>({
        queryKey: ["authors"],
        queryFn: () => fetchPosts(),
        staleTime: 1000 * 60 * 5,
        enabled: true,
    });

    const authors = data ? Array.from(new Set(data.map((post) => post.author))) : [];

    return { authors, isLoading, isError };
};

export default useAuthors;
