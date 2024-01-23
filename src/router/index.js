import { createRouter, createWebHistory } from 'vue-router';
import List from '/src/components/Student/List.vue';
import Add from '/src/components/Student/Add.vue';
import Edit from '/src/components/Student/Edit.vue';
import Views from '/src/components/Student/Views.vue';
import NotFound from '/src/components/NotFound/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'List',
        component: List,

    },
    {
        path: '/add',
        name: 'Add',
        component: Add
    },
    {
        path: '/view/:id',
        name: 'Views',
        component: Views
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }

]

const router =createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router