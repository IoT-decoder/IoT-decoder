module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/spec/.*|(\\.|/)spec)\\.tsx?$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};