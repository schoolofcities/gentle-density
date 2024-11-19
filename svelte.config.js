// import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

// npm install @sveltejs/adapter-static@next --save-dev

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    // preprocess: preprocess(),
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/gentle-density",
        }
    }
};

export default config;