import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/Login/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    title: '主页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/views/Home/Home.vue')
            },
            {
                path: '/person',
                name: 'Person',
                meta: {
                    title: '个人',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/views/Home/Person.vue')
            },
            {
                path: '/company',
                name: 'Company',
                meta: {
                    title: '企业',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/views/Home/Company.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        meta: {
            title: '无法访问',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/views/ErrorPage/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.path === '/login') {
            next('/'); // 如果去的页面是login 直接会到首页
        } else {
            next();
        }
    } else {
        if (to.path !== '/login') {
            next('/login');
        } else {
            next();
        }
    }
})
export default router;
