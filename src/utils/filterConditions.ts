// import { FILTER_LIST } from "@/constants/filterList";

// type Filter = {
//   courseType?: string[];
//   format?: string[];
//   category?: string[];
//   level?: string[];
//   programmingLanguage?: string[];
//   price?: string[];
// };

// export const filterConditions = (queryParams: any) => {
//   let filter_conditions: object[] = [];

//   const title = queryParams.keyword ? { title: `%${queryParams.keyword}%` } : { title: `%%` };

//   const selectedFilter: Filter[] = [
//     { courseType: queryParams.courseType },
//     { format: queryParams.format },
//     { category: queryParams.category },
//     { level: queryParams.level },
//     { programmingLanguage: queryParams.programmingLanguage },
//     { price: queryParams.price },
//   ];

//   selectedFilter.forEach((filters) => {
//     Object.keys(filters).forEach((key) => {
//       const value = filters[key as keyof Filter];
//       if (value && value.length > 0) {
//         const filterItem = FILTER_LIST.find((item) => item.enLabel === key);
//         if (filterItem) {
//           let filter_condition: object[] = [];
//           value.forEach((item: string) => {
//             const filterValue = filterItem.values[Number(item)].filter;
//             filter_condition.push(filterValue);
//           });
//           filter_conditions.push({ $or: filter_condition });
//         }
//       }
//     });
//   });

//   return [title, ...filter_conditions];
// };

"use client";

import { FILTER_LIST } from "@/constants/filterList";
import axios from "axios";
import { useSearchParams } from "next/navigation";

type Filter = {
  courseType?: string[];
  format?: string[];
  category?: string[];
  level?: string[];
  programmingLanguage?: string[];
  price?: string[];
};

export const filterConditions = () => {
  const searchParams = useSearchParams();

  let filter_conditions: object[] = [];

  const title = searchParams.get("keyword")
    ? { title: `%${searchParams.get("keyword")?.toString()}%` }
    : { title: `%%` };

  const selectedFilter: Filter[] = [
    { courseType: searchParams.getAll("courseType") },
    { format: searchParams.getAll("format") },
    { category: searchParams.getAll("category") },
    { level: searchParams.getAll("level") },
    { programmingLanguage: searchParams.getAll("programmingLanguage") },
    { price: searchParams.getAll("price") },
  ];

  selectedFilter.forEach((filters) => {
    Object.keys(filters).forEach((key) => {
      const value = filters[key as keyof Filter];
      if (value && value.length > 0) {
        const filterItem = FILTER_LIST.find((item) => item.enLabel === key);
        if (filterItem) {
          let filter_condition: object[] = [];
          value.forEach((item) => {
            const filterValue = filterItem.values[Number(item)].filter;
            filter_condition.push(filterValue);
          });
          filter_conditions.push({ $or: filter_condition });
        }
      }
    });
  });

  return JSON.stringify({ $and: [title, ...filter_conditions] });
};
