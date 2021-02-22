import axios from 'axios'
import router from '../router/index'
import { Message, Loading } from 'element-ui'
import qs from 'qs'

/**
 * 环境的切换
 */
let baseURL = '/api'
if (process.env.NODE_ENV != 'development') {
    baseURL = process.env.VUE_APP_BASE_URL
}

/**
 * 全局loading
 * 判断多个请求合并loading
 */
let loading
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.5)',
        target: document.querySelector('#app')
    })
}
let loadingCount = 0
export function showFullScreenLoading() {
    if (loadingCount === 0) {
        startLoading()
    }
    loadingCount++
}
export function hideFullScreenLoading() {
    if (loadingCount <= 0) return
    loadingCount--
    if (loadingCount === 0) {
        loading.close()
    }
}

/**
 * 重置Message
 * 防止重复弹出Message弹框
 * 此种形式为上一个Message弹框隐藏后，下一个再显示
 */
const showMessage = Symbol('showMessage')
class DoneMessage {
    [showMessage](type, options, single) {
        if (single) {
            if (document.getElementsByClassName('el-message').length === 0) {
                Message[type](options)
            }
        } else {
            Message[type](options)
        }
    }
    warning(options, single = true) {
        this[showMessage]('warning', options, single)
    }
    error(options, single = true) {
        this[showMessage]('error', options, single)
    }
    success(options, single = true) {
        this[showMessage]('success', options, single)
    }
}
const information = new DoneMessage()

/**
 * 跳转登录页
 */
const toLogin = () => {
    router.push({ path: '/login' })
    localStorage.clear()
    information.warning('登录超时，请重新登录!')
    hideFullScreenLoading()
}

/**
 * 封装axios
 * 实现全局loading及message重复弹窗问题解决
 * 实现token无痛刷新验证，延长用户登录时间
 */
// 创建一个axios实例
const instance = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})

//刷新token方法
function refreshToken(data) {
    return instance.post(`/getNewToken?refresh_token=${data}`).then(res => res)
}

function parseQueryString(url) {
    var obj = {};
    var keyvalue = [];
    var key = "",value = "";
    var paraString = url.substring(0, url.length).split("&");
    for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];

        if(value.indexOf("http")!=-1||value.indexOf("%2F")!=-1||value.indexOf("%3A")!=-1){
            value = decodeURIComponent(value, "utf-8");
        }else{
            value = decodeURI(value, "utf-8");
        }

        obj[key] = value;
    }
    return obj;
}

// 请求前拦截器
instance.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.common['Authorization'] = localStorage.getItem('Authorization')
            config.headers.common['RefreshToken'] = localStorage.getItem('RefreshToken')
        }
        if (config.method === 'post') {
            // if (config.data != undefined && (config.data.toString().indexOf("&") != -1 || config.data.toString().indexOf("=") != -1)) {
            //     config.data = parseQueryString(config.data)
            // }
            if(!isRefreshing){
                config.data = qs.stringify(config.data);
            }
        }
        if (config.showLoading != false) {
            showFullScreenLoading()
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

let isRefreshing = false
let requests = []

//请求成功后拦截
instance.interceptors.response.use(response => {
    const { state, message } = response.data
    if (response.config.showLoading != false) {
        hideFullScreenLoading()
    }
    //返回状态值为0，请求成功
    if (state == 0) {
        if (message != '' && message != null) {
            information.success(message)
        }
    }
    //返回状态值为1，请求失败
    if (state == 1) {
        if (message != '' && message != null) {
            information.error(message)
        }
    }
    //返回状态值为-1，登录超时
    if (state == -1) {
        toLogin()
        if (message != '' && message != null) {
            information.error(message)
        }
    }
    //返回状态值为-99，登录验证码过期
    if (state == -99) {
        if (message != '' && message != null) {
            information.error(message)
        }
    }
    //返回状态值为-100，token过期
    if (state == -100) {
        const config = response.config
        if (!isRefreshing) {
            isRefreshing = true
            return refreshToken(localStorage.getItem('RefreshToken')).then(res => {
                const { token, refreshtoken } = res.data.data
                localStorage.setItem('Authorization', token)
                localStorage.setItem('RefreshToken', refreshtoken)
                config.headers['Authorization'] = token
                config.headers['RefreshToken'] = refreshtoken
                requests.forEach(cb => cb(token))
                requests = [];
                return instance(config)
            }).catch(res => {
                information.error('请求失败，请联系管理员！')
            }).finally(() => {
                isRefreshing = false
            })
        } else {
            return new Promise((resolve) => {
                requests.push((token) => {
                    config.headers['Authorization'] = token
                    resolve(instance(config))
                })
            })
        }
    }
    return Promise.resolve(response)
}, error => {
    information.error('请求失败，请联系管理员！')
    hideFullScreenLoading()
    return Promise.reject(error)
})

export default instance
