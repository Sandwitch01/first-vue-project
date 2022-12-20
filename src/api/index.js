//统一接口管理
import requests from "@/api/request";

export const getBaseCategoryList = function (){
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}