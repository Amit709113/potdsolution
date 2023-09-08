// import {resolve} from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// const root=resolve(__dirname,'src');
// const outDir=resolve(__dirname,'dist');

export default defineConfig({
  // root,
  plugins: [react()],
  base:'/testvite',
  // build:{
  //   outDir,
  //   emptyOutDir:true,
  //   rollupOptions:{
  //     input:{
  //       main:resolve(root,'index.html'),
  //       adm:resolve(root,'adm','index.html')
  //     }
  //   }
  // }
})
