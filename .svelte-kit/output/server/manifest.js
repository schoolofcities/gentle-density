export const manifest = {
	appDir: "_app",
	appPath: "gentle-density/_app",
	assets: new Set([".nojekyll","blueprint-background.png","favicon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-94e31c7b.js","imports":["_app/immutable/start-94e31c7b.js","_app/immutable/chunks/index-359d1197.js","_app/immutable/chunks/singletons-96768ead.js","_app/immutable/chunks/index-4b83e0f7.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/toronto-building-permits",
				pattern: /^\/toronto-building-permits\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
