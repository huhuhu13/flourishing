import request from "@/utils/request.js";
import qs from "qs";
 
 
//登录
export function Login(params) {
  return request({
    url: "/auth/login",
    method: "post",
    params: params
  });
}