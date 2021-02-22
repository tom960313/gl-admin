/**
 * 打卡规则接口列表
 */
import axios from '@/utils/http';

const rule = {
	//打卡规则列表
	list(name, pageIndex, pageSize) {
		return axios.get(`/rule/list`, {
			params: {
				name: name,
				pageIndex: pageIndex,
				pageSize: pageSize
			}
		})
	},
	//打卡规则添加
	add(params) {
		return axios.post(`/rule/add`, params)
	},
	//打卡规则编辑
	edit(params) {
		return axios.post(`/rule/edit`, params)
	},
	//打卡规则删除
	remove(id) {
		return axios.post(`/rule/remove?id=${id}`)
	},
	//考勤组列表
	groups() {
		return axios.get(`/rule/groups`)
	},
	//考勤地点列表
	locations(group_id){
		return axios.get(`/rule/locations?group_id=${group_id}`)
	},
	//打卡规则详情列表
	listDetail(title, rid, pageIndex, pageSize) {
		return axios.get(`/ruleDetail/list`, {
			params: {
				title: title,
				rid: rid,
				pageIndex: pageIndex,
				pageSize: pageSize
			}
		})
	},
	//打卡规则详情添加
	addDetail(params) {
		return axios.post(`/ruleDetail/add`, params)
	},
	//打卡规则详情编辑
	editDetail(params) {
		return axios.post(`/ruleDetail/edit`, params)
	},
	//打卡规则详情删除
	removeDetail(id) {
		return axios.post(`/ruleDetail/remove?id=${id}`)
	},

}

export default rule;
