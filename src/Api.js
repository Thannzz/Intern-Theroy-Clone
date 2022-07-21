import axios from "axios";
// import { useParams } from "react-router-dom";

export function getMarketingData() {
  return axios({
    url: "http://localhost:8080/Marketing",
    method: "GET",
  });
}

export function getBusinessData() {
  return axios({
    url: "http://localhost:8080/Business",
    method: "GET",
  });
}

// export function GetBusinessParams() {
//   const params = useParams();
//   return axios({
//     url: `http://localhost:8080/Business/${params.id}`,
//     method: "GET",
//   });
// }

export function getGraphicsData() {
  return axios({
    url: "http://localhost:8080/Graphics",
    method: "GET",
  });
}

export function getFinanceData() {
  return axios({
    url: "http://localhost:8080/Finance",
    method: "GET",
  });
}

export function getHumanData() {
  return axios({
    url: "http://localhost:8080/Human",
    method: "GET",
  });
}

export function getAllData() {
  return axios({
    url: "http://localhost:8080/All",
    method: "GET",
  });
}
