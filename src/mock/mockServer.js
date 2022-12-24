import Mock from 'mockjs'
import banner from '@/mock/banners.json'
import floor from '@/mock/floors.json'

Mock.mock('/mock/getBanners','get',{code:200,data:banner})
Mock.mock('/mock/getFloors','get',{code:200,data:floor})