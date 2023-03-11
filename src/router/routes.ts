export const routes = [
    {
        path:'/',
        component: () => import('../layouts/MainLayout.vue'),
        children:[
            {
                path:'/',
                name:'mainPage',
                component: () => import('../pages/MainPage.vue')
            }
        ]
    }
]