import { NextRequest, NextResponse } from "next/server";
import { instance } from "./axios";
import type { AxiosResponse } from "axios";
import type {
  CourseResponse,
  CourseResponseInSnake,
  OrgCourseListResponses,
  OrgCourseListResponsesInSnake,
} from "./responseType";

export async function GET(req: NextRequest) {
  const filter_conditions = req.nextUrl.searchParams.get("filter_conditions");
  const offset = req.nextUrl.searchParams.get("offset");

  const { data }: AxiosResponse<OrgCourseListResponsesInSnake> = await instance.get(
    "https://api-rest.elice.io/org/academy/course/list/",
    {
      params: { offset, filter_conditions },
    }
  );

  const filteredData: OrgCourseListResponses<CourseResponse> = {
    courseCount: data.course_count,
    courses: data.courses.map((course: CourseResponseInSnake) => ({
      id: course.id,
      courseType: course.course_type,
      tags: course.tags,
      title: course.title,
      shortDescription: course.short_description,
      classType: course.class_type,
      logoFileUrl: course.logo_file_url,
      enrolledRolePeriod: course.enrolled_role_period,
      enrolledRoleBeginDatetime: course.enrolled_role_begin_datetime,
      enrolledRoleEndDatetime: course.enrolled_role_end_datetime,
      beginDatetime: course.begin_datetime,
      endDatetime: course.end_datetime,
      isDiscounted: course.is_discounted,
      discountedPrice: course.discounted_price,
      discountedPriceUsd: course.discounted_price_usd,
      discountRate: course.discount_rate,
      price: course.price,
      priceUsd: course.price_usd,
      enrollType: course.enroll_type,
      isFree: course.is_free,
    })),
  };

  return NextResponse.json({
    data: filteredData,
    message: "success",
  });
}
