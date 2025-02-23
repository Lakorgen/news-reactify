import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilter } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";

import NewsFilters from "../NewsFilters/NewsFilters";
import { Pagination } from "@/features/pagination";
import styles from "./styles.module.css";
import { NewsList } from "@/widges/news";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilter({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };
  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilter({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };
  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilter({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data && data.news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
