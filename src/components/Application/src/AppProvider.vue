<script lang="ts">
  import { defineComponent, toRefs } from 'vue';

  import { createAppProviderContext } from './useAppContext';

  import { PREFIX_CLS } from '/@/constant';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'AppProvider',
    inheritAttrs: false,
    props: {
      prefixCls: propTypes.string.def(PREFIX_CLS),
    },
    setup(props, { slots }) {
      const { prefixCls } = toRefs(props);
      createAppProviderContext({ prefixCls });

      return () => slots.default?.();
    },
  });
</script>
