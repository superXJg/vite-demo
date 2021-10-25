import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: {
    '@': path.resolve(__dirname, './src')
  }},
  css:{
		//* css模块化
		 modules: { // css模块化 文件以.module.[css|less|scss]结尾
		     generateScopedName: '[name]__[local]___[hash:base64:5]',
		     hashPrefix: 'prefix',
	    },
	    //* 预编译支持less
	     preprocessorOptions: {
		      less: {
		        // 支持内联 JavaScript
		        javascriptEnabled: true,
		      },
	    },
	},
  server: {
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      }
    }
  }
})
