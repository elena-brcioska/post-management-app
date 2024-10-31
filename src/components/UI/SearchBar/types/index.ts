import { type ChangeEvent } from "react";

export interface ISearchField {
    searchValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }