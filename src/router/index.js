import Vue from "vue"
import VueRouter from "vue-router"
import personalCenterRouter from './modules/personalCenter'
import companySearchRouter from './modules/companySearch'
import companyEvaluationRouter from './modules/companyEvaluation'
import homeRouter from './modules/home'
import errorRouter from './modules/error'
import loginRouter from './modules/login'

// 去除冗余路由报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
   return originalReplace.call(location).catch(err => err)
}

Vue.use(VueRouter)



const routers = [
    ...personalCenterRouter,
    ...homeRouter,
    ...companySearchRouter,
    ...companyEvaluationRouter,
    ...errorRouter,
    ...loginRouter
]

function routerBeforeEach() {
    return function (to, from, next) {
        // console.log(to, from)
        next()
    }
}

function createRouter() {
    const router = new VueRouter({
        mode: "history",
        routes: routers,
    })
    router.beforeEach(routerBeforeEach(routers))
    return router
}

export default createRouter