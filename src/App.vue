<template>
  <div class="pages">
    <AppProvider>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </AppProvider>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { AppProvider } from '/@/components/Application';

  export default defineComponent({
    name: 'App',
    components: {
      AppProvider,
    },
  });
</script>
