/**
 * 系统管理-企业资源接口列表
 */
import axios from '@/utils/http';

const qymodule = {
	//企业列表
	list(name) {
		return axios.get(`/qymodule/getValidQyList?qy_name=${name}`)
	},
	//企业菜单选中列表
	qymoduleList(id) {
		return axios.get(`/qymodule/getModuleListForQy?qy_id=${id}`, { showLoading: false })
	},
	//企业菜单保存
	qySave(id, rId) {
		return axios.post(`/qymodule/updateQyModule`, {
			qy_id: id,
			module_id: rId,
		})
	}

}

export default qymodule;
