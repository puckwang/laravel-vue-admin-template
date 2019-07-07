import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta'
import Example from "../views/Example";
import Demo from "../views/Demo";
import Home from "../views/Home";

Vue.use(VueRouter);
Vue.use(Meta);

const router = new VueRouter({
    base: '/',
    routes: [
        {
            path: '/demo',
            component: Demo,
        },
        {
            path: '/example',
            component: Example,
        },
        {
            path: '/',
            component: Home,
        },
        {
            path: '/*',
            redirect: '/'
        }
    ]
});

export default router;
