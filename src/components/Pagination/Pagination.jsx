import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePageClick,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, i) => {
          return (
            <button
              onClick={() => handlePageClick(i + 1)}
              className={styles.pageNumber}
              disabled={i + 1 === currentPage}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
