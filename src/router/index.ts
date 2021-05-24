/**
 *
 * @authors liwb (lwbhtml@gmail.com)
 * @date    2020/10/14
 * @description 定义路由模块
 */
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('/@/views/hello/index.vue'),
  },
  {
    path: '/',
    redirect: '/hello',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
