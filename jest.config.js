module.exports = {
	testEnvironment: "jsdom",
	modulePaths: ["components", "node_modules"],
	coverageDirectory: "coverage/lib",
	coverageReporters: ["text", "json"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	transform: {
		"^.+\\.[jt]sx?$": "babel-jest",
	},
};
