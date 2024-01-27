"use client";

import styled from "styled-components";
import searchIcon from "../assets/searchIcon.svg";
import Image from "next/image";
import useSearch from "@/hooks/useSearch";

const SearchArea = () => {
  const { handleSearchChange, keyword } = useSearch();

  return (
    <SearchContainer>
      <Image src={searchIcon} alt="search" />
      <input
        type="search"
        value={keyword}
        onChange={handleSearchChange}
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
      />
    </SearchContainer>
  );
};

export default SearchArea;

const SearchContainer = styled.div`
  width: 100%;
  height: 48px;
  padding: 12px 0;
  margin: 12px 0;

  display: flex;
  align-items: center;

  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;

  background-color: white;

  &:focus-within {
    border-color: rgb(82, 79, 161);
  }

  img {
    color: red;
    margin: 0 16px;
  }

  input {
    width: calc(100% - 16px);

    outline: none;
    border: none;

    font-size: 1rem;

    &::placeholder {
      color: gray;
    }
  }
`;