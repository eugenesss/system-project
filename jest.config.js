export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.mocks.{ts,tsx}",
    "!src/**/*.styles.{ts,tsx}",
    "!src/utils/testing.tsx",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootdir>/src/utils/testing.tsx",
  ],
  coverageReporters: ["text"],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
    },
  },
  setupFilesAfterEnv: ["./config/jest/setupTests.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@config(.*)$": "<rootDir>/config$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@test-utils$": "<rootDir>/src/utils/testing.tsx",
  },
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [],
  resetMocks: true,
};
