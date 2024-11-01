import { IPostObject } from "../components/posts/types";

export const sortPostsByDate = (posts: IPostObject[], sortOrder: boolean): IPostObject[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder ? dateA - dateB : dateB - dateA;
  });
};
