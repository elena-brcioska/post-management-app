
export interface IPostObject {
    id: number;
    title: string;
    content: string;
    author: string;
    image: string;
    date: string;
  }

export interface IDeleteDialog {
    onClose: () => void;
    onDelete: () => void
}


export interface IPostsWrapperProps {
    posts: IPostObject[];
    sortOrder: boolean;
  }

export interface IEditPostProps {
    onDone: () => void;
    onSave: (updatedPost: IPostObject) => void;
    post: IPostObject;
}

export interface IPostProps {
    post: IPostObject;
}


export interface ISinglePostProps {
    post: IPostObject;
    editPost: () => void;
    onDelete: () => void
  }
  
