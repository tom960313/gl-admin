/**
 * 登录接口
 * */

import axios from '@/utils/http';

const login = {

    //用户登录
    userLogin(params){
        return axios.post('/login', params)
    },

    //用户菜单
    getListMenusByLogin(){
        return axios.get('/module/listMenusByLogin')
    },

    //首页轮播图
    getSysCarousel(){
        return axios.get('/sysCarousel/getSysCarousel')
    },

    //产品
    getSysFeature(){
        return axios.get('/sysFeature/getSysFeature')
    }
}

export default login;