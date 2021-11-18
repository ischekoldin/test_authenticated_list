import Vue    from 'vue'
import Router from 'vue-router'

import store from '@/store';
import Login from '@/views/Login';
import Content from '@/containers/Content';
import List from '@/views/List';
import Add from '@/views/Add';
import Edit from '@/views/Edit';

Vue.use(Router)

function configRoutes() {
    return [
        {
            path:      "/",
            redirect:  "/list",
            name:      "Content",
            component: Content,
            children:  [
                {
                    path:      'list',
                    name:      'List',
                    component: List
                },
                {
                    path:      'add',
                    name:      'Add',
                    component: Add
                },
                {
                    path:      'edit',
                    name:      'Edit',
                    component: Edit,
                    props:     true
                },
            ]
        },
        {
            path:      '/login',
            name:      'Login',
            component: Login,
            meta:      {
                public: true
            }
        },
    ]
}

const router = new Router({
    mode:            "history",
    linkActiveClass: "active",
    scrollBehavior:  () => ({y: 0}),
    routes:          configRoutes()
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => !record.meta.public)) {
        if (!store.state.loggedIn) {
            next({
                path: '/login',
            })
        } else next()
    } else next()

})

export default router