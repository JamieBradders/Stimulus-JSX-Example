const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/app.js", "dist")
  .postCss("src/css/app.css", "dist")
  .options({
    processCssUrls: false,
    postCss: [
      require("postcss-import"),
      require("tailwindcss/nesting"),
      tailwindcss("./tailwind.config.js"),
    ],
  });
