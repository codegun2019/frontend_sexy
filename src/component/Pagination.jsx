import React from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // กำหนดให้แสดงเลขหน้าที่มีลำดับรอบๆ หนึ่งๆ
  const getDisplayedPages = () => {
    const currentPageIndex = currentPage - 1;
    const startIndex = Math.max(0, currentPageIndex - 2);
    const endIndex = Math.min(startIndex + 1, pages.length - 1);
    return pages.slice(startIndex, endIndex + 1);
  };

  return (
    <nav className="flex items-center justify-center mt-8">
      <Button
        variant="text"
        className="hover:bg-transparent flex items-center gap-2  ml-2 mt-2"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        Prev
      </Button>

      <ul className="flex space-x-4">
        {getDisplayedPages().map((page) => (
          <li key={page}>
            <Button
              className={currentPage === page ? "scale-125" : "scale-100"}
              color={currentPage === page ? "white" : "gray"}
              size="sm"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          </li>
        ))}

        {currentPage < totalPages - 2 && (
          <li>
            <Button
              className="scale-100"
              color="gray"
              size="sm"
              onClick={() => onPageChange(currentPage + 3)}
            >
              ...
            </Button>
          </li>
        )}

        {/* แสดงปุ่มหน้าสุดท้าย */}
        {currentPage < totalPages - 1 && (
          <li>
            <Button
              className="scale-100"
              color="gray"
              size="sm"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </Button>
          </li>
        )}
      </ul>

      <Button
        variant="text"
        className="flex items-center gap-2 hover:bg-transparent ml-2 mt-2"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default Pagination;
