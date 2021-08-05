<template>
  <svg :class="[prefixCls, $attrs.class, spin && 'svg-icon-spin']" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      spin: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const { prefixCls } = useDesign('svg-icon');
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);

      return { symbolId, prefixCls };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespaces}-svg-icon';

  .@{prefix-cls} {
    display: inline-block;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }

  .svg-icon-spin {
    animation: loadingCircle 1s infinite linear;
  }

  @-webkit-keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
