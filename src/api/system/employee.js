/**
 * 企业员工接口列表
 */
import axios from '@/utils/http';

const employee = {
	//企业员工列表
	list(name,department_id,index,size) {
		return axios.get(`/employee/list`, {
			params: {
				name: name,
				department_id:department_id,
				pageIndex:index,
				pageSize:size
			},
			showLoading: false
		})
	},
	//企业员工删除
	delete(id,tel) {
		return axios.post(`/employee/remove?id=${id}`)
	},
	//企业员工添加
	add(params) {
		return axios.post(`/employee/add`, params)
	},
	//企业员工编辑
	edit(params) {
		return axios.post(`/employee/edit`, params)
	},
	//部门列表
	listOrgs(name) {
		return axios.get(`/department/queryDepartmentCountList?name=${name}`)
	},
	//上传照片
	getLink() {
		return '/employee/uploadHeadImg'
	},

	//上传logo
	getLogo() {
		return '/api/register/uploadQyLogo'
	},
	//修改用户状态
	status(ids, use_status) {
		return axios.post(`/employee/updateAccountStatus`, {
			ids: ids,
			use_status: use_status
		})
	},
	//用户详情
	details(id) {
		return axios.get(`/employee/getEmployeeInfo?id=${id}`)
	},

}

export default employee;
