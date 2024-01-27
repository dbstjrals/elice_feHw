"use client";

import React from "react";
import styled from "styled-components";
import levelIcon from "../assets/levelIcon.svg";
import laptopIcon from "../assets/laptopIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { CourseResponse } from "@/app/api/list/responseType";

const CardItem = ({ course }: { course: CourseResponse }) => {
  const iconTextList = [
    {
      label: "난이도",
      icon: levelIcon,
      value: "중급",
    },
    {
      label: "수업",
      icon: laptopIcon,
      value: "온라인",
    },
    {
      label: "기간",
      icon: calendarIcon,
      value: "무제한",
    },
  ];

  const getCategory = () => {
    for (const tag of course.tags) {
      switch (tag.id) {
        case 12:
          return "프로그래밍 기초";
        case 13:
          return "데이터 분석";
        case 14:
          return "웹";
        case 22:
          return "인공지능";
        case 23:
          return "알고리즘";
      }
    }
    return "미분류";
  };

  const label =
    course.enrollType === 4 ? (
      <Text $color={"#524fa1"}>구독</Text>
    ) : course.isFree ? (
      <Text $color={"green"}>무료</Text>
    ) : (
      <Text $color={"orange"}>유료</Text>
    );

  return (
    <Card href={""}>
      <Category>{getCategory()}</Category>
      <Title>{course.title}</Title>
      <Description>{course.shortDescription}</Description>
      <TextLogoWrapper>
        {iconTextList.map((item) => (
          <IconText key={item.label}>
            <Image src={item.icon} alt="" />
            <span>
              {item.label} : {item.value}
            </span>
          </IconText>
        ))}
        <Logo>
          {course.logoFileUrl && <img src={course.logoFileUrl} alt="logo" width={50} height={50} />}
        </Logo>
      </TextLogoWrapper>
      <Label>{label}</Label>
    </Card>
  );
};

export default CardItem;

const Card = styled(Link)`
  position: relative;

  width: 100%;
  min-width: 240px;
  height: 400px;
  padding: 28px 24px;

  border-radius: 8px;

  background-color: white;

  @media screen and (min-width: 576px) {
    width: calc(50% - 5.3px);
  }
  @media screen and (min-width: 768px) {
    width: calc(33% - 10.6px);
  }
  @media screen and (min-width: 1280px) {
    width: 296px;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Category = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  color: rgb(115, 83, 234);

  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  width: 100%;
  min-height: 3.6rem;
  margin-bottom: 0.5rem;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1.125rem;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  max-height: 3.2;
`;

const Description = styled.p`
  width: 100%;
  margin-bottom: 1rem;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 0.875rem;
  color: #5e5f61;
  line-height: 1.6;
`;

const TextLogoWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 0.75rem;
    color: #7d7e80;
  }
`;

const Logo = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  width: 52px;
  height: 52px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: cover cover;
  }
`;

const Label = styled.div`
  position: absolute;

  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  padding-left: 20px;

  left: 0;
  bottom: 0;

  border-top: 1px solid rgb(225, 226, 228);
`;

const Text = styled.span<{ $color: string }>`
  font-weight: bold;
  color: ${({ $color }) => $color};
`;
