/**
 * 系统管理-企业移动端资源接口列表
 */
import axios from '@/utils/http';

const mobilerole = {
	//角色列表
	list(name, pageIndex, pageSize) {
		return axios.get(`/mobileRole/list`, {
			params: {
				pageIndex: pageIndex,
				pageSize: pageSize,
				role_name: name
			}
		})
	},
	//角色删除
	delete(id) {
		return axios.post(`/mobileRole/remove?id=${id}`)
	},
	//角色添加
	add(params) {
		return axios.post(`/mobileRole/add`, params)
	},
	//角色编辑
	edit(params) {
		return axios.post(`/mobileRole/edit`, params)
	},
	//角色绑定菜单
	bindModules(roleId, modules) {
		return axios.post(`/mobileRole/bindModules`, {
			roleId: roleId,
			modules: modules
		})
	},
	//角色列表
	getBindModules(roleId) {
		return axios.get(`/mobileRole/getBindModules?roleId=${roleId}`)
	},
	//人员绑定角色
	bindRoles(userIds, roles) {
		return axios.post(`/mobileRole/bindRoles`, {
			userIds: userIds,
			roles: roles
		})
	},

}

export default mobilerole;
