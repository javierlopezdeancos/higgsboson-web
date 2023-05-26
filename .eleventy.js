const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/styles");

	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/components/*.webc",
    layouts: "src/layouts/*.webc"
	});

	return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "src/layouts"
    }
  }
};
