import request from "@/utils/request.js";
 
 
//登录
export function Login(data) {
  return request({
    url: "/api/common/login",
    method: "post",
    data: data
  });
}