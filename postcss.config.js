import purgecss from "@fullhuman/postcss-purgecss";

const purgecssPlugin = purgecss({
  content: ["./public/**/*.html", "./src/**/*.vue"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecssPlugin] : []),
  ],
};
