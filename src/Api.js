import axios from "axios";

export function getMarketingData() {
  return axios({
    url: "http://localhost:8080/Marketing",
    method: "GET",
  });
}
