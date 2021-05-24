import { createApp } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $services: any;
  }
}
