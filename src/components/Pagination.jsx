import React from "react";

const Pagination = ({ page, setPage, hasNext }) => {
  return (
    <div className="mt-4">
      {/* Previous Button: Disabled if on the first page */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        className="mr-2 p-2 bg-gray-300 rounded"
        disabled={page === 0}
      >
        Previous
      </button>

      {/* Next Button: Disabled if there are no more pages */}
      <button
        onClick={() => setPage((prev) => (hasNext ? prev + 1 : prev))}
        className="p-2 bg-gray-300 rounded"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
