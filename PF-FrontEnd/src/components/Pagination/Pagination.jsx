import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
      </li>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Siguiente
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
