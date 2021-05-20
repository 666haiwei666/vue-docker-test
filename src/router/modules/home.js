import Layout from 'layout/index'
import Home from 'views/home/index.vue'

export const HomeRouter = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        meta: {
            title: '首页',
            icon: "节日",
        },
        name: "Home",
        children: [
            {
                path: '/home',
                name: `Home`,
                component: Home,
                meta: {
                    title: '首页',
                    icon: "节日",
                },
            }
        ]
    },
]
export default HomeRouter