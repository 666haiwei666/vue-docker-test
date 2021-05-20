import axios from 'axios'
import createRouter from '../router/index'
import { clearLocal } from './tbox'
import { Notification } from "element-ui"

const router = createRouter()
const token = localStorage.getItem('token')
const VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL
const headers = {
    'Authorization': token,
    'Content-Type': 'application/json; charset=utf-8'
}
const COMPLEX_REQUEST_METHOD = new Set(['post', 'delete', 'put']) // 复杂请求
const COMMON_REQUEST_METHOD = new Set(['get']) // 简单请求
const ERROR_INFOS = {
    timeout: '网络超时，请刷新重试',
    network: '网络异常，请刷新重试',
    500: '服务器请求异常，请稍后重试',
    404: '服务器请求失败，请稍后重试',
    401: '登录失效，请重新登录!',
    403: '暂无访问权限，请重新登录',
    400: '访问的页面域名不存在或者请求错误'
  }

axios.defaults.baseURL = VUE_APP_BASE_URL

configHeader()
// http request 拦截器
axios.interceptors.request.use(
    function (config) {
        if (config.showLoading === false) {
            return config
        }
        return config
    },
    function (err) {
        return Promise.reject(err)
    }
)
// http response 拦截器
axios.interceptors.response.use(
    function (response) {
        switch (response.data.code) {
            case 400:
                Notification.error({
                    title: '错误',
                    message:ERROR_INFOS[400]
                })
                return response
            case 500:
                Notification.error({
                    title: '错误',
                    message:ERROR_INFOS[500]
                })
                break
            case 401:
                Notification.warning({
                    title: '错误',
                    message:ERROR_INFOS[401]
                })
                reLogin()
                return response
            case 200:
                return response
            default:
                Notification.warning({
                    title: '错误',
                    message:ERROR_INFOS['network']
                })
        }
    },
    function (error) {
        return Promise.reject(error)
    }
)

function fetch(options) {
    let {
        method,
        url,
        data
    } = options
    let newOptions = {}
    if (COMPLEX_REQUEST_METHOD.has(method.toLowerCase())) {
        newOptions = options
    } else {
        newOptions = Object.assign({ method, url }, { params: data })
    }
    return axios.request(newOptions)
}

function configHeader() {
    Object.entries(headers).forEach(([key, value], index) => {
        axios.defaults.headers[key] = value
    })
}
function reLogin() {
    clearLocal()
    router.push('/login')
}
export default fetch