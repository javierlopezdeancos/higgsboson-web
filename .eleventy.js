const webcPlugin = require("@11ty/eleventy-plugin-webc");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItClass = require('@toycode/markdown-it-class')
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/styles": "styles", "favicon": "/", "site.webmanifest": "/"  });

  const markdownParserOptions = {
    html: true,
    breaks: true,
    linkify: false,
  };

  const mapping = {
    p: "hggs-text",
    a: "hggs-link",
    h1: "hggs-h1",
    h2: "hggs-h2",
    h3: "hggs-h3",
    h4: "hggs-h4",
    h5: "hggs-h5",
    h6: "hggs-h6",
    ul: "hggs-list",
    ol: "hggs-list",
    li: "hggs-list-item",
    blockquote: "hggs-blockquote",
    code: "hggs-code",
    pre: "hggs-pre",
  }

  eleventyConfig.setLibrary("md", markdownIt(markdownParserOptions).use(markdownItClass, mapping));

  eleventyConfig.addFilter("niceDate", function (uglyDate) {
    const english = new Intl.DateTimeFormat("en");
    return english.format(uglyDate);
  });

  // Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

  // Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(webcPlugin, {
    components: ["src/components/**/*.webc", "npm:@11ty/eleventy-plugin-syntaxhighlight/*.webc"],
    layouts: "src/layouts/*.webc",
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
