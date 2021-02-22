/**
 * 系统管理-字典模块接口列表
 */
import axios from '@/utils/http';

const dictionary = {
	//字典分类列表
	typeList(name, pageIndex, pageSize) {
		return axios.get(`/dictionary/getDictionaryTypeList`, {
			params: {
				name: name,
				pageIndex: pageIndex,
				pageSize: pageSize
			}
		})
	},
	//字典分类添加
	typeAdd(params) {
		return axios.post(`/dictionary/addDictionaryType`, params)
	},
	//字典分类编辑
	typeEdit(params) {
		return axios.post(`/dictionary/updateDictionaryType`, params)
	},
	//字典分类删除
	typeDelete(id) {
		return axios.post(`/dictionary/deleteDictionaryType?id=${id}`)
	},
	//字典列表
	list(id, name) {
		return axios.get(`/dictionary/queryDictionaryList`, {
			params: {
				typeId: id,
				name: name
			},
			showLoading: false
		})
	},
	//字典删除
	delete(id) {
		return axios.post(`/dictionary/deleteDictionary?id=${id}`)
	},
	//字典添加
	add(params) {
		return axios.post(`/dictionary/insertDictionary`, params)
	},
	//字典编辑
	edit(params) {
		return axios.post(`/dictionary/updateDictionary`, params)
	},
	//字典详情
	details(id) {
		return axios.get(`/dictionary/getDictionaryInfo?id=${id}`)
	},
	//字典树
	getDictionaryTreeByCode(code){
		return axios.get(`/dictionary/getDictionaryTreeByCode?code=${code}`)
	},
	//字典列表
	listDictionariesByCode(code){
		return axios.get(`/dictionary/listDictionariesByCode?code=${code}`)
	}

}

export default dictionary;
