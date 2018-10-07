import request from "@/utils/request";
const baseUrl = "http://localhost:8080";
// url,method,body,headers

/**
 *  账号操作
 */
export const login = (data) => request(`${baseUrl}/api/accounts/login`, "POST", data);










/**
 *  系统权限操作
 */
export const getMenutData = (data) => request(`${baseUrl}/api/system/getmenudata`, "POST", data)
export const insertMenuData = (data) => request(`${baseUrl}/api/system/insertmenudata`, "POST", data)
export const updateMenuData = (data) => request(`${baseUrl}/api/system/updatemenudata`, "POST", data)
export const deleteMenuData = (data) => request(`${baseUrl}/api/system/deletemenudata`, "POST", data)


