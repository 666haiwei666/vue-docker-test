import Layout from 'layout/index'
import userAttention from 'views/userAttention/index'
import userHistoricRecords from 'views/userHistoricRecords/index'
import userEvaluation from 'views/userEvaluation/index'


const personalCenterRouter = [
    {
        path: '/personalCenter',
        component: Layout,
        meta: {
            title: '个人中心',
            icon: "节日",
        },
        name: 'personalCenter',
        redirect: '/personalCenter/userAttention',
        children: [
            {
                path: '/personalCenter/userAttention',
                name: `userAttention`,
                meta: {
                    title: '我的关注',
                    icon: "节日",
                },
                component: userAttention,
            },
            {
                path: '/personalCenter/userHistoricRecords',
                name: `userHistoricRecords`,
                meta: {
                    title: '历史记录',
                    icon: "节日",
                },
                component: userHistoricRecords
            },
            {
                path: '/personalCenter/userEvaluation',
                name: `userEvaluation`,
                meta: {
                    title: '我的测评',
                    icon: "节日",
                },
                component: userEvaluation
            }
        ]
    }
]
export default personalCenterRouter