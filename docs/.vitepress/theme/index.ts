// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { inBrowser, useRoute, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
import 'virtual:group-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import BilibiliVideo from './components/BilibiliVideo.vue'
import backtotop from "./components/backtotop.vue";
import Linkcard from "./components/Linkcard.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import MNavLinks from './components/MNavLinks.vue'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      // 指定组件使用doc-footer-before插槽
      'doc-footer-before': () => h(backtotop),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('BilibiliVideo', BilibiliVideo);
    app.component('Linkcard' , Linkcard);
    app.component('ArticleMetadata' , ArticleMetadata);
    app.component('MNavLinks' , MNavLinks)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
} satisfies Theme