"use client";

import CardItem from "./CardItem";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { filterConditions } from "@/utils/filterConditions";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { CourseResponse, OrgCourseListResponses } from "@/app/api/list/responseType";
import PageNavigator from "./PageNavigator";

const Courses = () => {
  const searchParams = useSearchParams();
  const queryArray = filterConditions();
  const [courseData, setCourseData] = useState<OrgCourseListResponses<CourseResponse>>();
  const [offset, setOffset] = useState<number>(0);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `/api/list/?organization_id=1009&filter_conditions=${queryArray}&offset=${offset}`
      );
      setCourseData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setOffset(0);
  }, [searchParams]);

  useEffect(() => {
    fetchData();
  }, [searchParams, offset]);

  const handleOffset = (offset: number) => {
    setOffset(offset);
  };

  if (!courseData) return <div>Loading</div>;

  return (
    <>
      <Counter>전체 {courseData?.courseCount}개</Counter>
      <CardContainer>
        {courseData.courses.map((course) => (
          <CardItem key={course.id} course={course} />
        ))}
      </CardContainer>
      <PageNavigator courseCount={courseData.courseCount} handleOffset={handleOffset} />
    </>
  );
};

export default Courses;

const Counter = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0.75rem 0;

  font-size: 1rem;
  color: #222222;
  font-weight: 700;

  border-bottom: 1px solid rgb(201, 202, 204);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 12px;
`;
