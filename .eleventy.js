const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addPlugin(pluginWebc, {
    components: ["src/components/**/*.webc", "npm:@11ty/eleventy-plugin-syntaxhighlight/*.webc"],
    layouts: "src/layouts/*.webc",
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  const markdownParserOptions = {
    html: true,
    breaks: true,
    linkify: false,
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownParserOptions));

  const english = new Intl.DateTimeFormat("en");

  eleventyConfig.addFilter("niceDate", function (uglyDate) {
    return english.format(uglyDate);
  });

  eleventyConfig.setServerOptions({
		liveReload: true,
		domDiff: true,
		port: 8080,
		watch: [],
		showAllHosts: false,
		encoding: "utf-8",
		showVersion: false,
	});

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "src/layouts",
    },
  };
};
