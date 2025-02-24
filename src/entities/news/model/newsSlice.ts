import { PAGE_SIZE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "./types";

interface State {
  news: INews[];
  filters: IFilters;
  currentNews: INews | null;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilter, setCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
