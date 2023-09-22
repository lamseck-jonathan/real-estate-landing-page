import {routes} from './routes'
import { createRouter,createWebHashHistory } from 'vue-router'

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: 'text-white underline underline-offset-8',
    scrollBehavior (to,from, savedPosition){
        if(to.hash){
            return { 
                el: to.hash,
                behavior: 'smooth'
            }
        }
        else if (savedPosition){
            return savedPosition;
        }
        else{
            return {x:0,y:0}
        }
    } 
})