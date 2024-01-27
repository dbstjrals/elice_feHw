export const FILTER_LIST:{label: string; enLabel: string; values: {name:string; filter: object }[]}[] = [
  {
    label: "유형",
    enLabel: "courseType",
    values: [
      { name: "과목", filter: {$or:[{course_type:0},{course_type:2}]}},
      { name: "챌린지", filter: {course_type:1}},
      { name: "테스트", filter: {course_type:3}},
    ],
  },
  {
    label: "진행방식",
    enLabel: "format",
    values: [
      { name: "자유 선택형", filter: {course_type:0}},
      { name: "순차 완료형", filter: {course_type:2}},
    ],
  },
  {
    label: "분야",
    enLabel: "category",
    values: [
      { name: "프로그래밍 기초", filter: {tag_id:12}},
      { name: "데이터 분석", filter: {tag_id:13}},
      { name: "웹", filter: {tag_id:14}},
      { name: "인공지능", filter: {tag_id:22}},
      { name: "알고리즘", filter: {tag_id:23}},
    ],
  },
  {
    label: "난이도",
    enLabel: "level",
    values: [
      { name: "입문", filter: {tag_id:100}},
      { name: "초급", filter: {tag_id:101}},
      { name: "중급", filter: {tag_id:102}},
      { name: "고급", filter: {tag_id:103}},
    ],
  },
  {
    label: "언어",
    enLabel: "programmingLanguage",
    values: [
      { name: "C", filter: {tag_id:7}},
      { name: "C++", filter: {tag_id:8}},
      { name: "자바", filter: {tag_id:9}},
      { name: "파이썬", filter: {tag_id:10}},
      { name: "자바스크립트", filter: {tag_id:19}},
      { name: "R", filter: {tag_id:20}},
      { name: "HTML/CSS", filter: {tag_id:21}},
      { name: "SQL", filter: {tag_id:24}},
      { name: "아두이노", filter: {tag_id:25}},
      { name: "스크래치", filter: {tag_id:26}},
    ],
  },
  {
    label: "가격",
    enLabel: "price",
    values: [
      { name: "무료", filter: {enroll_type:0,is_free:true}},
      { name: "유료", filter: {enroll_type:0,is_free:false}},
      { name: "구독", filter: {enroll_type:4}},
    ],
  },
];

// <유형>
// 과목: {"$or":[{"course_type":0},{"course_type":2}]}
// 챌린지: {"course_type":1}
// 테스트: {"course_type":3}

// <진행 방식>
// 자유 선택형: course_type 0
// 순차 완료형: course_type 2

// <분야>
// 프로그래밍 기초: tag_id 12
// 데이터 분석: tag_id 13
// 웹: tag_id 14
// 인공지능: tag_id 22
// 알고리즘: tag_id 23

// <난이도>
// 입문: tag_id 100
// 초급: tag_id 101
// 중급: tag_id 102
// 고급: tag_id 103

// <언어>
// C: tag_id 7
// C++: tag_id 8
// 자바: tag_id 9
// 파이썬: tag_id 10
// 자바스크립트: tag_id 19
// R: tag_id 20
// HTML/CSS: tag_id 21
// SQL: tag_id 24
// 아두이노: tag_id 25
// 스크래치: tag_id 26

// <가격>
// 무료: enroll_type 0 is_free true
// 유료: enroll_type 0 is_free false
// 구독: enroll_type 4
