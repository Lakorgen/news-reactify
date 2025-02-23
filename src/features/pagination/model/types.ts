export interface IPaginationProps {
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}
