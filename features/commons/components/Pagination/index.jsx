import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';

const Pagination = ({ dotColor = 'white', totalPages, currentPage = 1 }) => (
  <PaginationDot
    activeDotColor={dotColor}
    curPage={currentPage}
    maxPage={totalPages}
    vertical={true}
  />
);

export default Pagination;
