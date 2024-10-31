import { ChangeEvent } from "react";

export interface IActionBar {
    searchValue: string,
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
    setSelectedAuthor: (author: string) => void;
    handleSort: (val: boolean) => void;
    selectedAuthor: string;
  }
  