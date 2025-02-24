import { useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import styles from "./styles.module.css";
import { NewsFilters } from "@/widges/news";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);

  const { data } = useGetCategoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        news={dataNews?.news || []}
        isLoading={isLoading}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
