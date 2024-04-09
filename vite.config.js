import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const mdxOptions = {
  remarkPlugins: [remarkMdxCodeMeta, remarkGfm],
  rehypePlugins: [rehypeHighlight],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx(mdxOptions)],
});
