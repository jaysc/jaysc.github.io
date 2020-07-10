module.exports = (config) => {
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/styles");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "../jaysc.github.io",
    },
    passthroughFileCopy: true,
    templateFormats: ["md", "liquid", "html"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
