import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import page1 from './../views/page1';
import page2 from './../views/page2';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: page1,
        },
        {
            path: '/page2',
            component: page2,
        }
    ]
});