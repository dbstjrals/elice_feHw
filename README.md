## 과제 해결 과정

1. 가장 먼저 사용해야 하는 product api를 분석했습니다. 검색어와 필터별 쿼리를 확인하고 아래와 같이 저장했습니다.

    ```javascript
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
    ```

2. 쿼리 스트링을 통해 새로고침해도 검색어와 필터가 남아 있도록 구현

    아래와 같이 searchParam을 이용해 filter_conditions 값을 return 하도록 했습니다.
    
    처음에 title이나 다른 filter_condition들을 string 타입으로 저장하거나 변환하면
    
    큰따옴표나 백슬래시가 생겨 필터 조건이 적용되지 않은 응답이 넘어왔습니다.
    
    따라서 모든 값들을 배열과 객체로만 관리하고 마지막 단계에서만 JSON.stringify를 추가해 return 했습니다.

    ```javascript
    export const filterConditions = () => {
      const searchParams = useSearchParams();
      ...
      return JSON.stringify({ $and: [title, ...filter_conditions] });
    };
    ```

3. middleware api에서는 client로 부터 offset과 filter_conditions 를 쿼리 파라미터로 받아
해당 정보를 바탕으로 product api에 GET 요청을 보냈고 필요한 데이터만 client로 포맷팅하여 넘겨줬습니다.

    ```javascript
    // /api/list/route.ts
    export async function GET(req: NextRequest) {
      const filter_conditions = req.nextUrl.searchParams.get("filter_conditions");
      const offset = req.nextUrl.searchParams.get("offset");
    
      const { data }: AxiosResponse<OrgCourseListResponsesInSnake> = await instance.get(
        "https://api-rest.elice.io/org/academy/course/list/",
        {
          params: { offset, filter_conditions },
        }
      );
      ...
      return NextResponse.json({
      data: filteredData,
      message: "success",
    });
    ```

## 과제 시연


https://github.com/dbstjrals/elice_feHw/assets/54929509/4c53a97c-f7d7-469c-a4f4-3f79177ecba6

