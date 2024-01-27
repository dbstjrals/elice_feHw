export interface OrgCourseListResponses<T> {
  courseCount: number;
  courses: T[];
}

export interface CourseResponse {
  id: number;
  courseType: number;
  tags: {
    id: number;
    tag_type: number;
    name: string;
  }[];
  title: string;
  shortDescription: string;
  classType: number;
  logoFileUrl: null | string;
  enrolledRolePeriod: null | string;
  enrolledRoleBeginDatetime: number | null;
  enrolledRoleEndDatetime: number | null;
  beginDatetime: number;
  endDatetime: null | number;
  isDiscounted: boolean;
  discountedPrice: string;
  discountedPriceUsd: string;
  discountRate: null | any;
  price: string;
  priceUsd: string;
  enrollType: number;
  isFree: boolean;
}

export interface OrgCourseListResponsesInSnake {
  course_count: number;
  courses: CourseResponseInSnake[];
}

export interface CourseResponseInSnake {
  id: number;
  course_type: number;
  tags: {
    id: number;
    tag_type: number;
    name: string;
  }[];
  title: string;
  short_description: string;
  class_type: number;
  logo_file_url: null | string;
  enrolled_role_period: null | string;
  enrolled_role_begin_datetime: number | null;
  enrolled_role_end_datetime: number | null;
  begin_datetime: number;
  end_datetime: null | number;
  is_discounted: boolean;
  discounted_price: string;
  discounted_price_usd: string;
  discount_rate: null | any;
  price: string;
  price_usd: string;
  enroll_type: number;
  is_free: boolean;
}
