import axios from '@/utils/request'

const Base = "/wx/goods";

/**
 * 获取商品列表
 * @param {*} queryInfo 
 */
export const getGoods = (queryInfo) => axios.get(`${Base}`, {
  params: queryInfo
})
