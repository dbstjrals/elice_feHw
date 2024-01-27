"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack as ArrowLeft } from "react-icons/io";
import { IoIosArrowForward as ArrowRight } from "react-icons/io";
import { useSearchParams } from "next/navigation";

const PageNavigator = ({
  courseCount,
  handleOffset,
}: {
  courseCount: number;
  handleOffset: (offset: number) => void;
}) => {
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(courseCount / 20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageNumbers: number[] = [];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  if (pageCount === 1) return null;

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    handleOffset((pageNumber - 1) * 20);
  };

  const renderPageNumbers = () => {
    if (pageCount <= 9) {
      for (let i = 1; i <= pageCount; i++) pageNumbers.push(i);
    } else if (currentPage <= 5) {
      for (let i = 1; i <= 9; i++) pageNumbers.push(i);
    } else if (currentPage <= pageCount - 4) {
      for (let i = currentPage - 4; i <= currentPage + 4; i++) pageNumbers.push(i);
    } else {
      for (let i = pageCount - 8; i <= pageCount; i++) pageNumbers.push(i);
    }

    return (
      <>
        {pageNumbers.map((pageNumber) => (
          <Box
            $isSelected={pageNumber === currentPage}
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Box>
        ))}
      </>
    );
  };

  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  return (
    <Navigator>
      <ArrowLeft
        style={{
          color: isFirst ? "#ccc" : "rgb(102,102,102)",
          cursor: isFirst ? "not-allowed" : "pointer",
        }}
        onClick={() => handleClick(currentPage - 1)}
      />
      {renderPageNumbers()}
      <ArrowRight
        style={{
          color: isLast ? "#ccc" : "rgb(102,102,102)",
          cursor: isLast ? "not-allowed" : "pointer",
        }}
        onClick={() => handleClick(currentPage + 1)}
      />
    </Navigator>
  );
};

export default PageNavigator;

const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

const Box = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem;

  border-radius: 0.5rem;

  font-size: 0.875rem;
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#999")};
  font-weight: 600;

  background-color: ${({ $isSelected }) => ($isSelected ? "#524fa1" : "transparent")};

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: #524fa1;
    background-color: transparent;
  }
`;
