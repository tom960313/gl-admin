/**
 * 系统管理-资源管理接口列表
 */
import axios from '@/utils/http';

const module = {
	//资源列表
	list(name) {
		return axios.get(`/module/queryModuleList`, {
			params: {
				module_name: name
			},
			showLoading: false
		})
	},
	//资源删除
	delete(id) {
		return axios.post(`/module/deleteModule?id=${id}`)
	},
	//资源添加
	add(params) {
		console.log(params)
		return axios.post(`/module/insertModule`, params)
	},
	//资源编辑
	edit(params) {
		return axios.post(`/module/updateModule`, params)
	},
	//资源详情
	details(id) {
		return axios.get(`/module/getModuleInfo?id=${id}`)
	},
	//上传照片
	getIconUrl() {
		return '/module/uploadIcon'
	},
}

export default module;
