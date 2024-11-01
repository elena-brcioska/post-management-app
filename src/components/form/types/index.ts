export type INewPost = {
    id: string | null;
    title: string | null;
    content: string | null;
    author: string | null;
    image: string | null;
    date: string | null;
}

export interface IFormErrors {
    title?: string | null;
    image?: string | null;
    description?: string | null;
    author?: string | null;
}