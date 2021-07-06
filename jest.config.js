module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    " ^.+\\.ts?$" : "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverage: true,
  modulePathIgnorePatterns: ["/__tests__/mocks/*"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  clearMocks: true,
}
