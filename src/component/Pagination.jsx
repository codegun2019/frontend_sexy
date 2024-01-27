import React from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // สร้าง array ของหน้า Pagination
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
        {/* แสดงหน้า Pagination */}
        {pages.map((page) => (
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
