// @ts-check
const { createServer } = require("vite");

createServer().then(async (server) => {
	console.log("Loading one.mjs:");
	await server.ssrLoadModule("one.mjs");
	server.close();
});
