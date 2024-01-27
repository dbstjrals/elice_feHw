import axios from "axios";

const COUNT = 20;

export const instance = axios.create({
  timeout: 10000,
  params: {
    sort_by: "created_datetime.desc",
    count: COUNT,
  },
});
