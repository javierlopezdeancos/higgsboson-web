const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItClass = require('@toycode/markdown-it-class')
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

  const mapping = { p: 'hggs-text', a: 'hggs-link', h1: 'hggs-heading', h2: 'hggs-heading', h3: 'hggs-heading', h4: 'hggs-heading', h5: 'hggs-heading', h6: 'hggs-heading', ul: 'hggs-list', ol: 'hggs-list', li: 'hggs-list-item', blockquote: 'hggs-blockquote', code: 'hggs-code', pre: 'hggs-pre' }

  eleventyConfig.setLibrary("md", markdownIt(markdownParserOptions).use(markdownItClass, mapping));

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
