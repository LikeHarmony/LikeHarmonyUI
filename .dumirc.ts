import { defineConfig } from 'dumi';

export default defineConfig({
  // base: '/like-harmony-ui/',
  // publicPath: '/like-harmony-ui/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'LikeHarmonyUI',
    nav: [
      { title: '组件', link: '/components/Button' }, // components会默认自动对应到src文件夹
      // { title: '指南', link: '/guide' },
      // { title: '作者介绍', link: '/guide2' },
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 220px !important;
       img { display: none; }
    }`,
  ],
});
