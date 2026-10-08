import styles from './Pagination.module.scss';
import ReactPaginateImport from 'react-paginate';

// В Vite импорт может прийти как { default: Component }
const ReactPaginate = (ReactPaginateImport as any).default ?? ReactPaginateImport;

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({ currentPage, onChangePage }: PaginationProps) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event: { selected: number }) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);

export default Pagination;