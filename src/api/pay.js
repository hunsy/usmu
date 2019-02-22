import axios from '@/utils/request'

const Base = "/wx/pay";

/**
 * 调起支付
 * @param {*} info 
 */
export const pay = (info) => axios.post(`${Base}`, info)
