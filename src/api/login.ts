import request from "@/utils/request";

// 登录
export const login = (data?: any) => request.post('/login', data);