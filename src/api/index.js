//统一接口管理
import requests from "@/api/request";
import mockRequest from "@/api/mockAjax";

//获取商品分类
export const getBaseCategoryList = function (){
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

//获取商品列表
export const getSearchInfo = function (params={}){
    return requests({url:'/list',method:'post',data:params})
}

//获取商品详情
export const getGoodDetail = function (skuId){
    return requests({url:`/item/${skuId}`,method:'get'})
}

//获取轮播图
export const getBanners = function (){
    return mockRequest({url:'/getBanners',method:'get'})
}

//获取首页下方图片
export const getFloors = function (){
    return mockRequest({url:'/getFloors',method:'get'})
}