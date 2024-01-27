"use client";

import Courses from "@/components/Courses";
import Filter from "@/components/Filter";
import SearchArea from "@/components/SearchArea";
import styled from "styled-components";

const SearchCourse = () => {
  return (
    <>
      <Screen>
        <SearchArea />
        <Filter />
        <Courses />
      </Screen>
    </>
  );
};

export default SearchCourse;

const Screen = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
`;
