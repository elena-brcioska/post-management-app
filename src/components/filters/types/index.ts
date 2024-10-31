

export interface IFiltersContainer {
    setSelectedAuthor: (author: string) => void;
    handleSort: (val: boolean) => void;
    selectedAuthor: string;
}

export interface ISelectFilter {
    authors: string[];
    setSelectedAuthor: (author: string) => void;
    selectedAuthor: string;
}

export interface ISortButton {
    handleSort: (val: boolean) => void
}
