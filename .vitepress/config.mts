import { defineConfig } from "vitepress";
import { getSidebar } from "../utils/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Writing",
  description: "AI 写作的内容",
  base: "/ai-writing/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/memo.png",
    nav: [
      {
        text: "副业搞钱100问",
        link: "/副业搞钱100问/",
      },
      {
        text: "AI使用指南",
        link: "/AI使用指南/",
      },
    ],

    sidebar: {
      "/副业搞钱100问/": [
        {
          text: "方向选择(20问)",
          items: getSidebar("副业搞钱100问/方向选择"),
          collapsed: false,
        },
        {
          text: "技能提升(20问)",
          items: getSidebar("副业搞钱100问/技能提升"),
          collapsed: true,
        },
        {
          text: "平台运营(更新中...)",
          items: getSidebar("副业搞钱100问/平台运营"),
          collapsed: true,
        },
      ],
      "/AI使用指南/": [
        {
          text: "AI 使用指南",
          items: getSidebar("AI使用指南"),
          collapsed: true,
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/dowithless/ai-writing" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present AI Writing",
    },
  },
});
