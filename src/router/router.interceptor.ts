/**
 *
 * @authors liwb (lwbhtml@gmail.com)
 * @date    2019/01/12
 * @description 定义路由拦截器模块，比如登录鉴权逻辑等
 */
import router from './index';
import { clearPending } from '/@/services/pending';

router.beforeEach((next: any) => {
  clearPending();
  next();
});
