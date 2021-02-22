/**
 * 系统管理-企业移动端资源接口列表
 */
import axios from '@/utils/http';

const mobilemodule = {
	//菜单列表
	list(name) {
		return axios.get(`/mobileModule/list?module_name=${name}`)
	},
	//菜单删除
	delete(id) {
		return axios.post(`/mobileModule/remove?id=${id}`)
	},
	//菜单添加
	add(params) {
		return axios.post(`/mobileModule/add`, params)
	},
	//菜单编辑
	edit(params) {
		return axios.post(`/mobileModule/edit`, params)
	},
	//菜单详情
	details(id) {
		return axios.get(`/mobileModule/detail?id=${id}`)
	},

}

export default mobilemodule;
