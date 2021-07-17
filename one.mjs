console.log("Hello from one.mjs");

setTimeout(() => {
	import("./two.mjs");
}, 500);
