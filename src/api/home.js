import request from "@/utils/request.js";
 
// 国家
export function country() {
  return request({
    url: "/api/country/list",
    method: "get",
  });
}