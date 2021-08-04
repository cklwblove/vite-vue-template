import type { RouteLocationRaw, Router } from 'vue-router';

import { unref } from 'vue';

import { useRouter } from 'vue-router';

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path };

function handleError(e: Error) {
  console.error(e);
}

// page switch
export function useGo(_router?: Router) {
  let router;
  if (!_router) {
    router = useRouter();
  }
  const { push, replace } = _router || router;

  function go(opt: RouteLocationRawEx | string = '/', isReplace = false) {
    if (!opt) {
      return;
    }
    if (typeof opt === 'string') {
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
    } else {
      const o = opt as RouteLocationRaw;
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
    }
  }

  return go;
}

/**
 * @description: redo current page
 */
export const useRedo = (_router?: Router) => {
  let router;
  if (!_router) {
    router = useRouter();
  }
  const { push, currentRoute } = _router || router;
  const { query, params } = currentRoute.value;

  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      push({
        path: '/redirect' + unref(currentRoute).fullPath,
        query,
        params,
      }).then(() => resolve(true));
    });
  }

  return redo;
};

/**
 * 用法

 跳转
 import { useGo } from '@/hooks/web/usePage';
 import { defineComponent } from 'vue';
 export default defineComponent({
  setup() {
    const go = useGo();

    // 执行刷新
    go();
    go(PageEnum.Home);
    return {};
  },
});

 刷新
 import { useRedo } from '@/hooks/web/usePage';
 import { defineComponent } from 'vue';
 export default defineComponent({
  setup() {
    const redo = useRedo();
    // 执行刷新
    redo();
    return {};
  },
});

 */
