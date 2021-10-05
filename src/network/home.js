import { request } from "./network";

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}

//  params: {
//       type,
//       pag}
// 用于参数拼接 自动拼接
export function getProductData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}




let totalNums = []

totalNums.push()