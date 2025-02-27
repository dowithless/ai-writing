import fs from "fs";
import path from "path";
import { DefaultTheme } from "vitepress";

/**
 * 格式化侧边栏显示的名称
 * @param {string} text 文件名
 * @returns {string} 格式化后的名称
 */
export function formatSidebarName(text: string) {
  // 去除后缀
  text = text.replace(".md", "");
  // 去除前缀 副业搞钱100问之001_
  text = text.replace(/副业搞钱100问之\d{3}_/, "");
  // 去除下划线
  text = text.replace(/_/g, "");
  // 去除标点符合
  text = text.replace(/[\?？]/, "");
  // 去除空格
  text = text.trim();

  return text;
}

/**
 * 获取侧边栏 items
 * @param {string} dir 目录, 如: 副业搞钱100问/方向选择
 * @returns {DefaultTheme.SidebarItem[]} 侧边栏 items
 */
export function getSidebar(dir: string): DefaultTheme.SidebarItem[] {
  // 获取目录路径
  const dirPath = path.resolve(__dirname, "../", dir);

  // 获取目录下的所有文件
  const files = fs.readdirSync(dirPath);

  const sidebar = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      text: formatSidebarName(file),
      link: `/${dir}/${file.replace(".md", "")}`,
    }));

  return sidebar;
}
