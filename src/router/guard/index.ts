import router from '/@/router';

import { createMessageGuard } from './messageGuard';
import { createScrollGuard } from './scrollGuard';
import { createHttpGuard } from './httpGuard';

export function setupRouterGuard() {
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
}
