import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), [
    'VITE_PUBLIC_PATH',
    'VUE_APP_PUBLIC_PATH',
  ]);
  const base = (
    env.VITE_PUBLIC_PATH ||
    env.VUE_APP_PUBLIC_PATH ||
    '/practice-vue-i18n'
  ).replace(/\/?$/, '/');

  return {
    base,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
