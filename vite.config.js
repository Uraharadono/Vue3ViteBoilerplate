import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    host: '127.0.0.4',
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'vendor': [
            '@chenfengyuan/vue-qrcode',
            '@fortawesome/fontawesome-free',
            '@vuelidate/core',
            '@vuelidate/validators',
            'axios',
            'bootstrap',
            'nprogress',
            'qs'
          ]
        }
      }
    }
  },
  css: {
      preprocessorOptions: {
        scss: {
          // I have to do this, to do silent fail of warnings.
          // Because I cannot upgrade whole project to use new sass import syntaxt, due to bootstrap not using it as well.
          // I will get mixing errors in the end, and there is not reason for me to get them.
          quietDeps: true,
          logger: {
            warn: () => {},
            debug: () => {}
          },
          // Additional sass options through implementation
          implementation: sass,
          sassOptions: {
            quietDeps: true,
            logger: {
              warn: () => {},
              debug: () => {}
            },
            quiet: true,
            silent: true
          }
        }
      }
  },
  define: {
    'process.env': {},
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    API_BASE_URL: {
      'production': JSON.stringify('https://api.something.com'),
      'development': JSON.stringify('https://localhost:44335')
    }[process.env.NODE_ENV]
  }
});